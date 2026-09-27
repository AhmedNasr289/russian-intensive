// Course calendar maths and the daily study routine (two blocks, seven timed steps).
// Dates are handled as local calendar days; day arithmetic goes through UTC so DST cannot shift it.

import type { Bi, DayKind } from "../content/types.ts";

export const COURSE_DAYS = 56;
const DAY_MS = 86_400_000;

export type Block = "morning" | "evening";
export type StepId = "m-review" | "m-listen" | "m-preview" | "e-lesson" | "e-drills" | "e-tutor" | "e-journal";

/** What a step opens: the SRS review, or a part of the day's lesson. */
export type StepTarget = "review" | "listen" | "words" | "lesson" | "practice" | "tutor" | "journal";

export type Step = { id: StepId; block: Block; start: string; minutes: number; title: Bi; target: StepTarget };

export type ScheduleSettings = { startDate: string; morningStart: string; eveningStart: string };

export const STEP_PLAN: ReadonlyArray<Omit<Step, "start">> = [
  { id: "m-review", block: "morning", minutes: 15, target: "review", title: { en: "Flashcard review", ar: "مراجعة البطاقات" } },
  { id: "m-listen", block: "morning", minutes: 15, target: "listen", title: { en: "Listening and shadowing", ar: "الاستماع والترديد" } },
  { id: "m-preview", block: "morning", minutes: 15, target: "words", title: { en: "Preview tonight's words", ar: "معاينة كلمات المساء" } },
  { id: "e-lesson", block: "evening", minutes: 25, target: "lesson", title: { en: "Lesson: grammar and dialogue", ar: "الدرس: القواعد والحوار" } },
  { id: "e-drills", block: "evening", minutes: 20, target: "practice", title: { en: "Drills and speaking practice", ar: "التدريبات وتمارين النطق" } },
  { id: "e-tutor", block: "evening", minutes: 20, target: "tutor", title: { en: "Conversation with the tutor", ar: "محادثة مع المعلّم" } },
  { id: "e-journal", block: "evening", minutes: 10, target: "journal", title: { en: "Journal", ar: "اليوميات" } },
];

export const BLOCK_MINUTES: Record<Block, number> = {
  morning: STEP_PLAN.filter((s) => s.block === "morning").reduce((a, s) => a + s.minutes, 0),
  evening: STEP_PLAN.filter((s) => s.block === "evening").reduce((a, s) => a + s.minutes, 0),
};

export const weekOf = (n: number): number => Math.ceil(n / 7);
export const kindOf = (n: number): DayKind => (n % 7 === 6 ? "immersion" : n % 7 === 0 ? "review" : "lesson");

export const validTime = (t: string): boolean => /^([01]\d|2[0-3]):[0-5]\d$/.test(t);
export const validISODate = (s: string): boolean => /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(s) && !Number.isNaN(Date.parse(s));

export function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
}

export function addMinutes(hhmm: string, minutes: number): string {
  const total = (((toMinutes(hhmm) + minutes) % 1440) + 1440) % 1440;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function utcDayNumber(y: number, m: number, d: number): number {
  return Math.round(Date.UTC(y, m - 1, d) / DAY_MS);
}

export function parseISODate(s: string): { y: number; m: number; d: number } {
  const [y, m, d] = s.split("-").map(Number);
  return { y: y ?? 1970, m: m ?? 1, d: d ?? 1 };
}

/** The local calendar date of `date` as YYYY-MM-DD. */
export function isoDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

/** 0 before the course starts, 1..56 during it, 57 once it is over. */
export function dayNumber(startISO: string, now: Date): number {
  const s = parseISODate(startISO);
  const n = utcDayNumber(now.getFullYear(), now.getMonth() + 1, now.getDate()) - utcDayNumber(s.y, s.m, s.d) + 1;
  if (n < 1) return 0;
  return n > COURSE_DAYS ? COURSE_DAYS + 1 : n;
}

export function dateOfDay(startISO: string, n: number): string {
  const s = parseISODate(startISO);
  const t = new Date(Date.UTC(s.y, s.m - 1, s.d + n - 1));
  return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`;
}

export function dailySteps(settings: ScheduleSettings): Step[] {
  let morning = settings.morningStart;
  let evening = settings.eveningStart;
  return STEP_PLAN.map((plan) => {
    const start = plan.block === "morning" ? morning : evening;
    if (plan.block === "morning") morning = addMinutes(morning, plan.minutes);
    else evening = addMinutes(evening, plan.minutes);
    return { ...plan, start };
  });
}

/** The step running at `now` (if any) and the next step still to come today. */
export function currentStep(steps: readonly Step[], now: Date): { current: Step | null; next: Step | null } {
  const minute = now.getHours() * 60 + now.getMinutes();
  const current = steps.find((s) => minute >= toMinutes(s.start) && minute < toMinutes(s.start) + s.minutes) ?? null;
  const next = steps.find((s) => toMinutes(s.start) > minute) ?? null;
  return { current, next };
}
