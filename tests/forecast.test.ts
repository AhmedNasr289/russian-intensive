import { test } from "node:test";
import assert from "node:assert/strict";
import { addCards, defaultProgress } from "../src/core/progress.ts";
import type { Progress } from "../src/core/progress.ts";
import { dueForecast, weekMinutes } from "../src/core/forecast.ts";

process.env.TZ = "UTC";
const HOUR = 3_600_000;
const DAY = 24 * HOUR;
// Thursday 2026-10-01, 19:00: day 4 of a course that started on Monday 2026-09-28.
const NOW = Date.parse("2026-10-01T19:00:00Z");

function withDue(p: Progress, id: string, due: number): Progress {
  const q = addCards(p, [id], NOW);
  const card = q.cards[id];
  if (!card) throw new Error("no card");
  return { ...q, cards: { ...q.cards, [id]: { ...card, phase: "review", due } } };
}

test("the forecast counts cards per study day; overdue cards count today", () => {
  let p = defaultProgress(NOW);
  p = withDue(p, "d1-01", NOW - 3 * DAY); // overdue
  p = withDue(p, "d1-02", NOW + 2 * HOUR); // later today (before the 04:00 cutoff)
  p = withDue(p, "d1-03", Date.parse("2026-10-02T04:00:00Z")); // the next study day starts at 04:00
  p = withDue(p, "d1-04", Date.parse("2026-10-04T04:00:00Z"));
  p = withDue(p, "d1-05", Date.parse("2026-10-08T04:00:00Z")); // beyond 7 days
  const f = dueForecast(p, NOW);
  assert.equal(f.length, 7);
  assert.deepEqual(f.map((d) => d.date), ["2026-10-01", "2026-10-02", "2026-10-03", "2026-10-04", "2026-10-05", "2026-10-06", "2026-10-07"]);
  assert.deepEqual(f.map((d) => d.n), [2, 1, 0, 1, 0, 0, 0]);
});

test("after midnight but before 04:00 the study day is still yesterday's", () => {
  const late = Date.parse("2026-10-02T02:00:00Z");
  const p = withDue(defaultProgress(late), "d1-01", Date.parse("2026-10-02T04:00:00Z"));
  const f = dueForecast(p, late, 2);
  assert.deepEqual(f, [
    { date: "2026-10-01", n: 0 },
    { date: "2026-10-02", n: 1 },
  ]);
});

test("week minutes sum the current course week against seven two-hour days", () => {
  const p = { ...defaultProgress(NOW), studyLog: { "2026-09-27": 500, "2026-09-28": 120, "2026-09-30": 45, "2026-10-01": 30, "2026-10-05": 99 } };
  assert.deepEqual(weekMinutes(p, "2026-09-28", new Date(NOW)), { week: 1, minutes: 195, plan: 840, day: 4 });
  assert.deepEqual(weekMinutes(p, "2026-09-28", new Date(Date.parse("2026-10-05T10:00:00Z"))), { week: 2, minutes: 99, plan: 840, day: 1 });
  assert.equal(weekMinutes(p, "2026-10-10", new Date(NOW)).week, 1, "before the course: week 1, nothing studied yet");
});
