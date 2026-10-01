import { test } from "node:test";
import assert from "node:assert/strict";
import { addCards, defaultProgress } from "../src/core/progress.ts";
import type { Progress } from "../src/core/progress.ts";
import { catchUpPlan, missedDays, planMoves, stepRoute } from "../src/core/coach.ts";
import { STEP_PLAN } from "../src/core/schedule.ts";

process.env.TZ = "UTC";
const ALL = STEP_PLAN.map((s) => s.id);
const MORNING = ALL.filter((id) => id.startsWith("m-"));
// The course starts Monday 2026-09-28, so 2026-10-01 is day 4.
const at = (iso: string) => new Date(iso);

function progress(steps: Record<string, string[]>, due = 0): Progress {
  let p: Progress = { ...defaultProgress(0), steps };
  const ids = Array.from({ length: due }, (_, i) => `d1-${String(i + 1).padStart(2, "0")}`);
  p = addCards(p, ids, Date.parse("2026-09-30T08:00:00Z"));
  return p;
}
const caughtUp = { d1: ALL, d2: ALL, d3: ALL };

test("inside a study block the block's next step comes first, with the block's end time", () => {
  const moves = planMoves({ progress: progress(caughtUp), now: at("2026-10-01T07:10:00Z"), weakCount: 0 });
  const first = moves[0];
  assert.equal(first?.kind, "step");
  assert.equal(first?.action, "review");
  assert.match(first?.why.en ?? "", /07:10.*07:45/);
  const later = planMoves({ progress: progress({ ...caughtUp, d4: ["m-review"] }), now: at("2026-10-01T07:20:00Z"), weakCount: 0 })[0];
  assert.equal(later?.action, "day-4-dialogue", "the listening step of a lesson day opens its dialogue");
});

test("due cards lead outside a block, at about 25 seconds a card", () => {
  const moves = planMoves({ progress: progress({ ...caughtUp, d4: MORNING }, 30), now: at("2026-10-01T12:00:00Z"), weakCount: 0 });
  assert.equal(moves[0]?.kind, "review");
  assert.equal(moves[0]?.minutes, 13);
  assert.match(moves[0]?.title.en ?? "", /30/);
  assert.equal(planMoves({ progress: progress({ ...caughtUp, d4: MORNING }, 1), now: at("2026-10-01T12:00:00Z"), weakCount: 0 })[0]?.minutes, 2, "at least two minutes");
});

test("missed days are caught up one a day, oldest first", () => {
  const p = progress({ d1: ALL, d2: ["m-review"], d4: MORNING });
  assert.deepEqual(missedDays(p, 4), [2, 3]);
  assert.deepEqual(catchUpPlan([2, 3], "2026-10-01"), [
    { date: "2026-10-01", day: 2 },
    { date: "2026-10-02", day: 3 },
  ]);
  const moves = planMoves({ progress: p, now: at("2026-10-01T12:00:00Z"), weakCount: 0 });
  assert.equal(moves[0]?.kind, "catchup");
  assert.equal(moves[0]?.action, "day-2");
  assert.match(moves[0]?.why.en ?? "", /day 3 tomorrow/);
});

test("before the evening block the coach offers to run it", () => {
  const moves = planMoves({ progress: progress({ ...caughtUp, d4: MORNING }), now: at("2026-10-01T19:30:00Z"), weakCount: 0 });
  assert.equal(moves[0]?.kind, "session");
  assert.equal(moves[0]?.action, "session-evening");
  assert.equal(moves[0]?.minutes, 75);
  assert.match(moves[0]?.why.en ?? "", /20:00/);
});

test("a skipped morning can still be run later in the day", () => {
  const moves = planMoves({ progress: progress(caughtUp), now: at("2026-10-01T12:00:00Z"), weakCount: 0 });
  assert.equal(moves[0]?.action, "session-morning");
  assert.ok(moves.some((m) => m.action === "session-evening"));
});

test("three or more weak words add a drill; a test within two days adds a reminder", () => {
  const p = progress({ ...caughtUp, d4: ALL, d5: MORNING });
  const moves = planMoves({ progress: p, now: at("2026-10-02T12:00:00Z"), weakCount: 4 });
  assert.ok(moves.some((m) => m.kind === "weak" && m.action === "weak"));
  const testMove = moves.find((m) => m.kind === "test");
  assert.match(testMove?.title.en ?? "", /day 7 in 2 days/);
  assert.equal(planMoves({ progress: p, now: at("2026-10-02T12:00:00Z"), weakCount: 2 }).some((m) => m.kind === "weak"), false);
});

test("a finished day says so and names tomorrow", () => {
  const moves = planMoves({ progress: progress({ ...caughtUp, d4: ALL }), now: at("2026-10-01T22:00:00Z"), weakCount: 0 });
  assert.equal(moves[0]?.kind, "done");
  assert.match(moves[0]?.why.en ?? "", /How are you/);
  assert.equal(moves[0]?.action, "day-5");
});

test("before day 1 the plan is setup; after day 56 it is review and weak words", () => {
  const before = planMoves({ progress: progress({}), now: at("2026-09-20T12:00:00Z"), weakCount: 0 });
  assert.equal(before[0]?.kind, "setup");
  assert.ok(before.every((m) => m.kind === "setup" || m.kind === "review"));
  const after = planMoves({ progress: progress({}, 5), now: at("2026-12-01T12:00:00Z"), weakCount: 3 });
  assert.deepEqual(after.map((m) => m.kind).slice(0, 2), ["review", "weak"]);
  assert.equal(after.some((m) => m.kind === "step" || m.kind === "catchup" || m.kind === "session"), false);
});

test("each step of a day leads to the right screen for the kind of day", () => {
  assert.equal(stepRoute("lesson", 4, "lesson"), "day-4-grammar");
  assert.equal(stepRoute("lesson", 6, "immersion"), "day-6-worksheet");
  assert.equal(stepRoute("practice", 7, "review"), "day-7-test");
  assert.equal(stepRoute("words", 7, "review"), "review");
  assert.equal(stepRoute("journal", 9, "lesson"), "day-9-journal");
});
