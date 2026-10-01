// The study coach: from the learner's progress and the time of day, the best next moves, each
// with a reason and a time estimate, so the learner never has to decide what to do next.

import type { Bi, DayKind, Tri } from "../content/types.ts";
import { getDay } from "./course.ts";
import { deckStats } from "./progress.ts";
import type { Progress } from "./progress.ts";
import { BLOCK_MINUTES, COURSE_DAYS, addMinutes, currentStep, dailySteps, dateOfDay, dayNumber, kindOf, toMinutes } from "./schedule.ts";
import type { Block, Step, StepTarget } from "./schedule.ts";

export type MoveKind = "step" | "review" | "catchup" | "session" | "weak" | "test" | "setup" | "done";

/** `action` is a route token, or `session-morning` / `session-evening` to run a block's steps. */
export type Move = { id: string; kind: MoveKind; title: Bi; why: Bi; minutes: number; action: string };

export type CoachDay = { n: number; kind: DayKind; title: Tri };

export type CoachInput = {
  progress: Progress;
  now: Date;
  /** How many weak words there are (see weak.ts). */
  weakCount: number;
  dayOf?: (n: number) => CoachDay | undefined;
};

/** A day with fewer steps ticked than this is unfinished. */
export const FINISHED_STEPS = 4;
/** Seconds a review card takes, on average. */
const SECONDS_PER_CARD = 25;
const CATCH_UP_MINUTES = 30;
const WEAK_DRILL_MINUTES = 5;
const WEAK_DRILL_MIN = 3;

/** Where a step of the day leads, for the kind of day it is. */
export function stepRoute(target: StepTarget, n: number, kind: DayKind): string {
  switch (target) {
    case "review":
      return "review";
    case "listen":
      return kind === "review" ? `day-${n}-test` : kind === "immersion" ? `day-${n}-worksheet` : `day-${n}-dialogue`;
    case "words":
      return kind === "review" ? "review" : `day-${n}-words`;
    case "lesson":
      return kind === "review" ? `day-${n}-test` : kind === "immersion" ? `day-${n}-worksheet` : `day-${n}-grammar`;
    case "practice":
      return kind === "review" ? `day-${n}-test` : `day-${n}-practice`;
    case "tutor":
      return `day-${n}-tutor`;
    case "journal":
      return `day-${n}-journal`;
  }
}

/** Earlier course days with fewer than FINISHED_STEPS steps ticked, oldest first. */
export function missedDays(p: Progress, today: number): number[] {
  const out: number[] = [];
  for (let d = 1; d < Math.min(today, COURSE_DAYS + 1); d++) if ((p.steps[`d${d}`]?.length ?? 0) < FINISHED_STEPS) out.push(d);
  return out;
}

/** One missed day per calendar day, oldest first, starting today. */
export function catchUpPlan(missed: readonly number[], todayISO: string): Array<{ date: string; day: number }> {
  return missed.map((day, i) => ({ date: dateOfDay(todayISO, i + 1), day }));
}

const BLOCK_NAME: Record<Block, Bi> = { morning: { en: "morning", ar: "الصباح" }, evening: { en: "evening", ar: "المساء" } };
const hhmm = (d: Date): string => `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
const plural = (n: number, one: string, many: string): string => `${n} ${n === 1 ? one : many}`;

function defaultDayOf(n: number): CoachDay | undefined {
  const d = getDay(n);
  return d ? { n: d.n, kind: d.kind, title: d.title } : undefined;
}

function reviewMove(due: number): Move {
  return {
    id: "review",
    kind: "review",
    title: { en: `Review ${plural(due, "card", "cards")}`, ar: `راجع ${due} ${due === 1 ? "بطاقة" : "بطاقات"}` },
    why: { en: "They are due now; reviewing on time keeps each one easy.", ar: "حان وقتها الآن؛ المراجعة في موعدها تُبقي كل بطاقة سهلة." },
    minutes: Math.max(2, Math.round((due * SECONDS_PER_CARD) / 60)),
    action: "review",
  };
}

function weakMove(count: number): Move {
  return {
    id: "weak",
    kind: "weak",
    title: { en: `Drill ${plural(count, "weak word", "weak words")}`, ar: `تدرّب على ${count} من الكلمات الضعيفة` },
    why: { en: "Words you missed or forgot lately: a short drill makes them stick.", ar: "كلمات أخطأت فيها أو نسيتها مؤخرًا: تدريب قصير يثبّتها." },
    minutes: WEAK_DRILL_MINUTES,
    action: "weak",
  };
}

function setupMoves(): Move[] {
  return [
    { id: "setup-alphabet", kind: "setup", title: { en: "Learn the alphabet", ar: "تعلّم الأبجدية" }, why: { en: "Day 1 starts with the letters; a head start makes the first week easy.", ar: "يبدأ اليوم الأول بالحروف؛ البداية المبكرة تُسهّل الأسبوع الأول." }, minutes: 15, action: "alphabet" },
    { id: "setup-sound", kind: "setup", title: { en: "Check your sound", ar: "تحقّق من الصوت" }, why: { en: "Make sure you can hear the words and sentences before day 1.", ar: "تأكّد أنك تسمع الكلمات والجمل قبل اليوم الأول." }, minutes: 2, action: "settings" },
    { id: "setup-preview", kind: "setup", title: { en: "Preview day 1", ar: "اطّلع على اليوم الأول" }, why: { en: "See what the first lesson looks like.", ar: "شاهد كيف يبدو الدرس الأول." }, minutes: 10, action: "day-1" },
  ];
}

/** The ranked next moves (best first). The UI shows the first prominently and a few more after it. */
export function planMoves(input: CoachInput): Move[] {
  const { progress: p, now } = input;
  const dayOf = input.dayOf ?? defaultDayOf;
  const n = dayNumber(p.settings.startDate, now);
  const due = deckStats(p, now.getTime()).dueNow;
  const moves: Move[] = [];
  const add = (m: Move | null) => {
    if (m && !moves.some((x) => x.id === m.id || x.action === m.action)) moves.push(m);
  };

  if (n === 0) {
    if (due) add(reviewMove(due));
    for (const m of setupMoves()) add(m);
    return moves;
  }
  if (n > COURSE_DAYS) {
    if (due) add(reviewMove(due));
    if (input.weakCount) add(weakMove(input.weakCount));
    add({ id: "complete", kind: "done", title: { en: "Course complete", ar: "اكتملت الدورة" }, why: { en: "Keep your words alive with a short review each day.", ar: "حافظ على كلماتك بمراجعة قصيرة كل يوم." }, minutes: 0, action: "progress" });
    return moves;
  }

  const kind = dayOf(n)?.kind ?? kindOf(n);
  const steps = dailySteps(p.settings);
  const done = new Set(p.steps[`d${n}`] ?? []);
  const undone = (block: Block): Step[] => steps.filter((s) => s.block === block && !done.has(s.id));
  const minute = now.getHours() * 60 + now.getMinutes();
  const blockStart = (b: Block) => (b === "morning" ? p.settings.morningStart : p.settings.eveningStart);
  const inBlock = (["morning", "evening"] as const).find((b) => minute >= toMinutes(blockStart(b)) && minute < toMinutes(blockStart(b)) + BLOCK_MINUTES[b]);

  // 1. Inside a block: its next unfinished step (the one running now if it is not done).
  if (inBlock) {
    const { current } = currentStep(steps, now);
    const step = current && !done.has(current.id) && current.block === inBlock ? current : undone(inBlock)[0];
    if (step) {
      const end = addMinutes(blockStart(inBlock), BLOCK_MINUTES[inBlock]);
      add({
        id: `step-${step.id}`,
        kind: "step",
        title: step.title,
        why: { en: `It is ${hhmm(now)}; the ${BLOCK_NAME[inBlock].en} block runs to ${end}.`, ar: `الساعة الآن ${hhmm(now)}؛ تستمر فترة ${BLOCK_NAME[inBlock].ar} حتى ${end}.` },
        minutes: step.minutes,
        action: stepRoute(step.target, n, kind),
      });
    }
  }

  // 2. Cards due now.
  if (due) add(reviewMove(due));

  // 3. Catch up on unfinished earlier days, one a day.
  const missed = missedDays(p, n);
  const first = missed[0];
  if (first !== undefined) {
    const doneThere = p.steps[`d${first}`]?.length ?? 0;
    const second = missed[1];
    add({
      id: `catchup-${first}`,
      kind: "catchup",
      title: { en: `Catch up on day ${first}`, ar: `استدرك اليوم ${first}` },
      why:
        second === undefined
          ? { en: `Day ${first} has ${doneThere} of 7 steps done; its words and lesson take about half an hour.`, ar: `في اليوم ${first} أنجزت ${doneThere} من ٧ خطوات؛ كلماته ودرسه تأخذ نحو نصف ساعة.` }
          : {
              en: `${missed.length} earlier days are unfinished. One a day: day ${first} today, day ${second} tomorrow${missed.length > 2 ? ", and so on" : ""}.`,
              ar: `${missed.length} أيام سابقة لم تكتمل. يوم واحد كل يوم: اليوم ${first} اليوم، واليوم ${second} غدًا${missed.length > 2 ? "، وهكذا" : ""}.`,
            },
      minutes: CATCH_UP_MINUTES,
      action: `day-${first}`,
    });
  }

  // 4. Today's blocks that still have steps: run them as a guided session.
  for (const b of ["morning", "evening"] as const) {
    const left = undone(b);
    if (left.length === 0) continue;
    const minutes = left.reduce((sum, s) => sum + s.minutes, 0);
    const startsLater = minute < toMinutes(blockStart(b));
    const name = BLOCK_NAME[b];
    add({
      id: `session-${b}`,
      kind: "session",
      title: { en: `Run the ${name.en} session`, ar: `ابدأ جلسة ${name.ar}` },
      why: startsLater
        ? { en: `Planned for ${blockStart(b)}: ${plural(left.length, "step", "steps")}, ${minutes} min. The app times each step and ticks it off.`, ar: `مقرّرة في ${blockStart(b)}: ${left.length} خطوات، ${minutes} دقيقة. يحسب التطبيق وقت كل خطوة ويعلّمها كمكتملة.` }
        : { en: `${plural(left.length, "step", "steps")} left, ${minutes} min. Its time has passed, but it still counts today.`, ar: `بقيت ${left.length} خطوات، ${minutes} دقيقة. فات وقتها لكنها ما زالت تُحسب اليوم.` },
      minutes,
      action: `session-${b}`,
    });
  }

  // 5. Weak words.
  if (input.weakCount >= WEAK_DRILL_MIN) add(weakMove(input.weakCount));

  // 6. A weekly test within two days.
  const test = Math.ceil((n + 1) / 7) * 7;
  if (test <= COURSE_DAYS && test - n <= 2) {
    const inDays = test - n;
    add({
      id: `test-${test}`,
      kind: "test",
      title: inDays === 1 ? { en: `Test on day ${test} tomorrow`, ar: `اختبار اليوم ${test} غدًا` } : { en: `Test on day ${test} in ${inDays} days`, ar: `اختبار اليوم ${test} بعد يومين` },
      why: { en: "Look back over this week's words, grammar and dialogues.", ar: "راجع كلمات هذا الأسبوع وقواعده وحواراته." },
      minutes: 10,
      action: "course",
    });
  }

  // 7. Nothing left today.
  if (done.size >= steps.length) {
    const next = dayOf(n + 1);
    add({
      id: `done-${n}`,
      kind: "done",
      title: { en: `Day ${n} complete`, ar: `اكتمل اليوم ${n}` },
      why: next ? { en: `Tomorrow: day ${next.n}, ${next.title.en}.`, ar: `غدًا: اليوم ${next.n}، ${next.title.ar}.` } : { en: "That was the last day of the course.", ar: "كان هذا آخر أيام الدورة." },
      minutes: 0,
      action: next ? `day-${next.n}` : "progress",
    });
  }
  return moves;
}
