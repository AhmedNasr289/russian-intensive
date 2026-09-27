import { test } from "node:test";
import assert from "node:assert/strict";
import { formatInterval, isDue, newCard, previewIntervals, review, studyDayStart } from "../src/core/srs.ts";
import type { CardState } from "../src/core/srs.ts";

process.env.TZ = "UTC";

const MIN = 60_000;
const DAY = 86_400_000;
const at = (iso: string) => Date.parse(iso);
const EVENING = at("2026-09-28T20:30:00Z");

function reviewCard(interval: number, ease = 2.5): CardState {
  return { id: "w", phase: "review", step: 0, ease, interval, due: EVENING, reps: 5, lapses: 0, last: EVENING - interval * DAY };
}

test("a new card starts due now with default ease", () => {
  const c = newCard("d4-01", EVENING);
  assert.deepEqual(c, { id: "d4-01", phase: "new", step: 0, ease: 2.5, interval: 0, due: EVENING, reps: 0, lapses: 0 });
  assert.ok(isDue(c, EVENING));
});

test("Good on a new card moves to the second learning step (10 minutes)", () => {
  const c = review(newCard("x", EVENING), 2, EVENING);
  assert.equal(c.phase, "learning");
  assert.equal(c.step, 1);
  assert.equal(c.due, EVENING + 10 * MIN);
  assert.equal(c.reps, 1);
});

test("Good on the last learning step graduates to tomorrow's study day", () => {
  const c = review(review(newCard("x", EVENING), 2, EVENING), 2, EVENING + 10 * MIN);
  assert.equal(c.phase, "review");
  assert.equal(c.interval, 1);
  assert.equal(c.due, at("2026-09-29T04:00:00Z"));
});

test("Easy on a new card graduates straight to four days", () => {
  const c = review(newCard("x", EVENING), 3, EVENING);
  assert.equal(c.phase, "review");
  assert.equal(c.interval, 4);
  assert.equal(c.due, at("2026-10-02T04:00:00Z"));
});

test("Again restarts learning at one minute; Hard on step one waits 5.5 minutes", () => {
  const again = review(newCard("x", EVENING), 0, EVENING);
  assert.equal(again.phase, "learning");
  assert.equal(again.due, EVENING + MIN);
  const hard = review(newCard("x", EVENING), 1, EVENING);
  assert.equal(hard.step, 0);
  assert.equal(hard.due, EVENING + 5.5 * MIN);
});

test("review grades scale the interval by ease", () => {
  assert.equal(review(reviewCard(10), 2, EVENING).interval, 25);
  const hard = review(reviewCard(10), 1, EVENING);
  assert.equal(hard.interval, 12);
  assert.ok(Math.abs(hard.ease - 2.35) < 1e-9);
  const easy = review(reviewCard(10), 3, EVENING);
  assert.equal(easy.interval, 33);
  assert.ok(Math.abs(easy.ease - 2.65) < 1e-9);
});

test("a lapse halves the interval, lowers ease and relearns for 10 minutes", () => {
  const lapsed = review(reviewCard(10), 0, EVENING);
  assert.equal(lapsed.phase, "relearning");
  assert.equal(lapsed.lapses, 1);
  assert.ok(Math.abs(lapsed.ease - 2.3) < 1e-9);
  assert.equal(lapsed.interval, 5);
  assert.equal(lapsed.due, EVENING + 10 * MIN);
  const back = review(lapsed, 2, EVENING + 10 * MIN);
  assert.equal(back.phase, "review");
  assert.equal(back.due, at("2026-10-03T04:00:00Z"));
});

test("ease never drops below 1.3 and intervals never exceed a year", () => {
  let c = reviewCard(10);
  for (let i = 0; i < 20; i++) c = review({ ...c, phase: "review" }, 0, EVENING);
  assert.equal(c.ease, 1.3);
  assert.equal(review(reviewCard(300), 2, EVENING).interval, 365);
});

test("a review after midnight but before 04:00 still belongs to the previous study day", () => {
  const late = at("2026-09-29T02:00:00Z");
  assert.equal(studyDayStart(late), at("2026-09-28T04:00:00Z"));
  // Good on a 1-day card: interval round(1 × 2.5) = 3, counted from the 28th's study day.
  assert.equal(review(reviewCard(1), 2, late).due, at("2026-10-01T04:00:00Z"));
});

test("interval previews grow from Again to Easy", () => {
  const p = previewIntervals(reviewCard(10), EVENING);
  assert.ok(p[0] < p[1] && p[1] < p[2] && p[2] < p[3], JSON.stringify(p));
});

test("formatInterval gives compact labels", () => {
  assert.deepEqual(
    [MIN, 10 * MIN, 5.5 * MIN, 5 * 60 * MIN, 3 * DAY, 60 * DAY, 400 * DAY].map(formatInterval),
    ["1m", "10m", "6m", "5h", "3d", "2mo", "1y"],
  );
});
