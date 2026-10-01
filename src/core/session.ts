// A guided study session: one block's steps in order, each on its own timer, with pause, skip and
// "done, next". The state is plain data so it survives a reload (the app keeps it per device).

import type { Block, Step, StepId } from "./schedule.ts";
import { STEP_PLAN, isoDate } from "./schedule.ts";

export type SessionState = {
  v: 1;
  /** The local date the session belongs to; a saved session from another day is dropped. */
  date: string;
  block: Block;
  /** Index of the current step in the day's steps. */
  index: number;
  /** When the current step started (ms). */
  stepStart: number;
  /** When it was paused, or null while running. */
  pausedAt: number | null;
  /** Paused time accumulated in the current step. */
  pausedMs: number;
  /** Steps that count as done: done before the session started, or ticked during it. */
  done: StepId[];
  /** The steps this session ticked, in order (for the summary). */
  ticked: StepId[];
};

const STEP_IDS: ReadonlySet<string> = new Set(STEP_PLAN.map((s) => s.id));
const isStepId = (x: unknown): x is StepId => typeof x === "string" && STEP_IDS.has(x);

function nextIndex(block: Block, steps: readonly Step[], done: readonly StepId[], after: number): number {
  return steps.findIndex((s, i) => i > after && s.block === block && !done.includes(s.id));
}

/** A session over a block's steps not yet done, or null when there are none. */
export function startSession(block: Block, steps: readonly Step[], doneIds: readonly string[], now: number): SessionState | null {
  const done = doneIds.filter(isStepId);
  const index = nextIndex(block, steps, done, -1);
  if (index < 0) return null;
  return { v: 1, date: isoDate(new Date(now)), block, index, stepStart: now, pausedAt: null, pausedMs: 0, done, ticked: [] };
}

export const sessionStep = (s: SessionState, steps: readonly Step[]): Step | null => steps[s.index] ?? null;

/** Time left in the current step (0 once it is over). */
export function remainingMs(s: SessionState, steps: readonly Step[], now: number): number {
  const step = sessionStep(s, steps);
  if (!step) return 0;
  const elapsed = (s.pausedAt ?? now) - s.stepStart - s.pausedMs;
  return Math.max(0, step.minutes * 60_000 - elapsed);
}

export function pauseSession(s: SessionState, now: number): SessionState {
  return s.pausedAt === null ? { ...s, pausedAt: now } : s;
}

export function resumeSession(s: SessionState, now: number): SessionState {
  return s.pausedAt === null ? s : { ...s, pausedAt: null, pausedMs: s.pausedMs + Math.max(0, now - s.pausedAt) };
}

/** Marks the current step done without moving on (its time ran out; the learner may still be finishing). */
export function tickCurrent(s: SessionState, steps: readonly Step[]): SessionState {
  const step = sessionStep(s, steps);
  if (!step || s.ticked.includes(step.id)) return s;
  return { ...s, done: s.done.includes(step.id) ? s.done : [...s.done, step.id], ticked: [...s.ticked, step.id] };
}

/** Moves to the block's next step not yet done, marking the current one done first if asked. Null at the end. */
export function advanceSession(s: SessionState, steps: readonly Step[], now: number, markDone: boolean): SessionState | null {
  const step = sessionStep(s, steps);
  const done = markDone && step && !s.done.includes(step.id) ? [...s.done, step.id] : s.done;
  const ticked = markDone && step && !s.ticked.includes(step.id) ? [...s.ticked, step.id] : s.ticked;
  const index = nextIndex(s.block, steps, done, s.index);
  if (index < 0) return null;
  return { ...s, index, stepStart: now, pausedAt: null, pausedMs: 0, done, ticked };
}

/** A saved session, if it is well formed and belongs to `todayISO`; otherwise null. */
export function parseSession(raw: unknown, todayISO: string): SessionState | null {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) return null;
  const r = raw as Record<string, unknown>;
  const num = (x: unknown): x is number => typeof x === "number" && Number.isFinite(x);
  if (r["v"] !== 1 || r["date"] !== todayISO) return null;
  const block = r["block"];
  if (block !== "morning" && block !== "evening") return null;
  const index = r["index"];
  if (!num(index) || !Number.isInteger(index) || STEP_PLAN[index]?.block !== block) return null;
  if (!num(r["stepStart"]) || !num(r["pausedMs"]) || r["pausedMs"] < 0) return null;
  const pausedAt = r["pausedAt"];
  if (pausedAt !== null && !num(pausedAt)) return null;
  const done = r["done"];
  const ticked = r["ticked"];
  if (!Array.isArray(done) || !done.every(isStepId) || !Array.isArray(ticked) || !ticked.every(isStepId)) return null;
  return { v: 1, date: todayISO, block, index, stepStart: r["stepStart"], pausedAt, pausedMs: r["pausedMs"], done: [...done], ticked: [...ticked] };
}
