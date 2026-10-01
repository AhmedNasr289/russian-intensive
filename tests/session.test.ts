import { test } from "node:test";
import assert from "node:assert/strict";
import { advanceSession, parseSession, pauseSession, remainingMs, resumeSession, sessionStep, startSession, tickCurrent } from "../src/core/session.ts";
import { dailySteps } from "../src/core/schedule.ts";

process.env.TZ = "UTC";
const steps = dailySteps({ startDate: "2026-09-28", morningStart: "07:00", eveningStart: "20:00" });
const T = Date.parse("2026-10-01T07:05:00Z");
const MIN = 60_000;

test("a session starts at the block's first step not yet done, and is null when the block is done", () => {
  const s = startSession("morning", steps, ["m-review"], T);
  assert.ok(s);
  assert.equal(sessionStep(s, steps)?.id, "m-listen");
  assert.equal(s.date, "2026-10-01");
  assert.equal(startSession("morning", steps, ["m-review", "m-listen", "m-preview"], T), null);
  assert.equal(sessionStep(startSession("evening", steps, [], T) ?? s, steps)?.id, "e-lesson");
});

test("the clock counts down, holds while paused and resumes where it stopped", () => {
  let s = startSession("morning", steps, [], T);
  if (!s) throw new Error("no session");
  assert.equal(remainingMs(s, steps, T), 15 * MIN);
  assert.equal(remainingMs(s, steps, T + 4 * MIN), 11 * MIN);
  s = pauseSession(s, T + 4 * MIN);
  assert.equal(remainingMs(s, steps, T + 9 * MIN), 11 * MIN, "paused: no time passes");
  assert.equal(pauseSession(s, T + 10 * MIN), s, "pausing twice changes nothing");
  s = resumeSession(s, T + 9 * MIN);
  assert.equal(remainingMs(s, steps, T + 10 * MIN), 10 * MIN);
  assert.equal(remainingMs(s, steps, T + 60 * MIN), 0, "never below zero");
  assert.equal(resumeSession(s, T), s, "resuming a running session changes nothing");
});

test("next marks the step done and moves on; skip moves on without marking; the end is null", () => {
  let s = startSession("morning", steps, [], T);
  if (!s) throw new Error("no session");
  s = advanceSession(s, steps, T + 15 * MIN, true);
  if (!s) throw new Error("ended too early");
  assert.equal(sessionStep(s, steps)?.id, "m-listen");
  assert.deepEqual(s.ticked, ["m-review"]);
  assert.equal(remainingMs(s, steps, T + 15 * MIN), 15 * MIN, "the new step gets its full time");
  s = advanceSession(s, steps, T + 16 * MIN, false);
  if (!s) throw new Error("ended too early");
  assert.equal(sessionStep(s, steps)?.id, "m-preview");
  assert.deepEqual(s.ticked, ["m-review"]);
  assert.equal(advanceSession(s, steps, T + 20 * MIN, true), null);
});

test("when time runs out the step is ticked once and the session stays on it", () => {
  const s = startSession("morning", steps, [], T);
  if (!s) throw new Error("no session");
  const t = tickCurrent(s, steps);
  assert.deepEqual(t.ticked, ["m-review"]);
  assert.equal(sessionStep(t, steps)?.id, "m-review");
  assert.equal(tickCurrent(t, steps), t);
  const next = advanceSession(t, steps, T, true);
  assert.deepEqual(next?.ticked, ["m-review"], "Next after the tick does not tick twice");
});

test("steps already done are skipped on the way", () => {
  let s = startSession("evening", steps, ["e-drills"], T);
  if (!s) throw new Error("no session");
  s = advanceSession(s, steps, T, true);
  assert.equal(s && sessionStep(s, steps)?.id, "e-tutor");
});

test("a saved session is read back only when it is well formed and from today", () => {
  const s = startSession("morning", steps, [], T);
  const raw: unknown = JSON.parse(JSON.stringify(s));
  assert.deepEqual(parseSession(raw, "2026-10-01"), s);
  assert.equal(parseSession(raw, "2026-10-02"), null, "another day");
  for (const bad of [null, 3, "x", { ...(raw as object), v: 2 }, { ...(raw as object), block: "noon" }, { ...(raw as object), index: 9 }, { ...(raw as object), index: 4 }, { ...(raw as object), ticked: ["x"] }, { ...(raw as object), pausedMs: -1 }]) {
    assert.equal(parseSession(bad, "2026-10-01"), null, JSON.stringify(bad));
  }
});
