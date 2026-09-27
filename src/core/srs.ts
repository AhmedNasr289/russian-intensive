// Spaced repetition: an SM-2 family scheduler with Anki-style learning steps.
// Learning cards come back after minutes; review cards come back at the start of a study day
// (04:00 local), so a card graduated in the evening session is waiting in the next morning session.

export type Grade = 0 | 1 | 2 | 3; // Again, Hard, Good, Easy
export const GRADES: readonly Grade[] = [0, 1, 2, 3];

export type Phase = "new" | "learning" | "review" | "relearning";

export type CardState = {
  id: string;
  phase: Phase;
  /** Index into the learning or relearning steps. */
  step: number;
  ease: number;
  /** Days, for review and relearning cards. */
  interval: number;
  /** Epoch ms when the card is next due. */
  due: number;
  reps: number;
  lapses: number;
  last?: number;
};

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export const LEARNING_STEPS_MIN: readonly number[] = [1, 10];
export const RELEARNING_STEPS_MIN: readonly number[] = [10];
export const GRADUATING_INTERVAL = 1;
export const EASY_INTERVAL = 4;
export const START_EASE = 2.5;
export const MIN_EASE = 1.3;
export const MAX_INTERVAL = 365;
export const DAY_CUTOFF_HOUR = 4;

const round2 = (x: number): number => Math.round(x * 100) / 100;
const clampInterval = (days: number): number => Math.min(MAX_INTERVAL, Math.max(1, days));

export function newCard(id: string, now: number): CardState {
  return { id, phase: "new", step: 0, ease: START_EASE, interval: 0, due: now, reps: 0, lapses: 0 };
}

export const isDue = (card: CardState, now: number): boolean => card.due <= now;

/** Local-time start of the study day containing `ts` (days begin at 04:00, not midnight). */
export function studyDayStart(ts: number, cutoffHour = DAY_CUTOFF_HOUR): number {
  const d = new Date(ts);
  const offset = d.getHours() < cutoffHour ? -1 : 0;
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + offset, cutoffHour).getTime();
}

/** The start of the study day `days` after the one containing `now` (calendar arithmetic, DST-safe). */
function dueAfterDays(now: number, days: number): number {
  const s = new Date(studyDayStart(now));
  return new Date(s.getFullYear(), s.getMonth(), s.getDate() + days, s.getHours()).getTime();
}

function stepDelay(steps: readonly number[], step: number): number {
  return (steps[Math.min(step, steps.length - 1)] ?? 1) * MINUTE;
}

function graduate(card: CardState, interval: number, now: number): CardState {
  const days = clampInterval(interval);
  return { ...card, phase: "review", step: 0, interval: days, due: dueAfterDays(now, days) };
}

export function review(card: CardState, grade: Grade, now: number): CardState {
  const base: CardState = { ...card, reps: card.reps + 1, last: now };
  switch (card.phase) {
    case "new":
    case "learning": {
      const steps = LEARNING_STEPS_MIN;
      if (grade === 0) return { ...base, phase: "learning", step: 0, due: now + stepDelay(steps, 0) };
      if (grade === 1) {
        const first = steps[0] ?? 1;
        const delay = base.step === 0 && steps.length > 1 ? ((first + (steps[1] ?? first)) / 2) * MINUTE : stepDelay(steps, base.step);
        return { ...base, phase: "learning", due: now + delay };
      }
      if (grade === 3) return graduate(base, EASY_INTERVAL, now);
      const next = base.step + 1;
      if (next >= steps.length) return graduate(base, GRADUATING_INTERVAL, now);
      return { ...base, phase: "learning", step: next, due: now + stepDelay(steps, next) };
    }
    case "relearning": {
      const steps = RELEARNING_STEPS_MIN;
      if (grade === 0) return { ...base, step: 0, due: now + stepDelay(steps, 0) };
      if (grade === 1) return { ...base, due: now + stepDelay(steps, base.step) };
      if (grade === 3) return graduate(base, base.interval + 1, now);
      const next = base.step + 1;
      if (next >= steps.length) return graduate(base, base.interval, now);
      return { ...base, step: next, due: now + stepDelay(steps, next) };
    }
    case "review": {
      const i = Math.max(1, base.interval);
      if (grade === 0) {
        return {
          ...base,
          phase: "relearning",
          step: 0,
          lapses: base.lapses + 1,
          ease: round2(Math.max(MIN_EASE, base.ease - 0.2)),
          interval: Math.max(1, Math.round(i * 0.5)),
          due: now + stepDelay(RELEARNING_STEPS_MIN, 0),
        };
      }
      if (grade === 1) {
        const ease = round2(Math.max(MIN_EASE, base.ease - 0.15));
        return graduate({ ...base, ease }, Math.max(i + 1, Math.round(i * 1.2)), now);
      }
      if (grade === 2) return graduate(base, Math.max(i + 1, Math.round(i * base.ease)), now);
      const ease = round2(base.ease + 0.15);
      return graduate({ ...base, ease }, Math.max(i + 1, Math.round(i * base.ease * 1.3)), now);
    }
  }
}

/** How long until the card would be due after each grade — for the button labels. */
export function previewIntervals(card: CardState, now: number): Record<Grade, number> {
  return {
    0: review(card, 0, now).due - now,
    1: review(card, 1, now).due - now,
    2: review(card, 2, now).due - now,
    3: review(card, 3, now).due - now,
  };
}

export function formatInterval(ms: number): string {
  if (ms < HOUR) return `${Math.max(1, Math.round(ms / MINUTE))}m`;
  if (ms < DAY) return `${Math.round(ms / HOUR)}h`;
  if (ms < 30 * DAY) return `${Math.round(ms / DAY)}d`;
  if (ms < 365 * DAY) return `${Math.round(ms / (30 * DAY))}mo`;
  return `${Math.round(ms / (365 * DAY))}y`;
}
