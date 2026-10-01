import { test } from "node:test";
import assert from "node:assert/strict";
import { checkOrder, checkTyped, shuffle } from "../src/core/answers.ts";
import {
  MISSES_LIMIT,
  addCards,
  addJournal,
  applyReview,
  deckStats,
  defaultProgress,
  dueCards,
  introduceDay,
  recordHit,
  recordMiss,
  recordScore,
  removeNewCards,
  retention,
  toggleStep,
  touchStreak,
  validateProgress,
} from "../src/core/progress.ts";

process.env.TZ = "UTC";
const T0 = Date.parse("2026-09-28T19:00:00Z");
const HOUR = 3_600_000;
const DAY = 24 * HOUR;

test("typed answers ignore case, stress marks, ё and punctuation", () => {
  assert.equal(checkTyped("еще раз", ["Ещё раз!"]).ok, true);
  assert.equal(checkTyped("МЕНЯ ЗОВУТ", ["Меня́ зову́т"]).ok, true);
  assert.equal(checkTyped("", ["да"]).ok, false);
});

test("a near miss is 'close', a wrong answer is not", () => {
  const typo = checkTyped("приветт", ["Приве́т"]);
  assert.equal(typo.ok, false);
  assert.equal(typo.close, true);
  assert.equal(typo.best, "Приве́т");
  const wrong = checkTyped("пока", ["Приве́т"]);
  assert.equal(wrong.ok || wrong.close, false);
});

test("ordered tokens match an accepted sentence", () => {
  assert.equal(checkOrder(["Как", "тебя́", "зову́т"], ["Как тебя́ зову́т?"]), true);
  assert.equal(checkOrder(["тебя́", "Как", "зову́т"], ["Как тебя́ зову́т?"]), false);
});

test("shuffle is deterministic for a seed and never returns the original order", () => {
  const items = ["a", "b", "c", "d"];
  assert.deepEqual(shuffle(items, 42), shuffle(items, 42));
  for (let seed = 0; seed < 50; seed++) assert.notDeepEqual(shuffle(items, seed), items);
  assert.deepEqual([...shuffle(items, 7)].sort(), items);
  assert.deepEqual(shuffle(["x"], 1), ["x"]);
});

test("the default progress passes validation", () => {
  const r = validateProgress(defaultProgress(T0));
  assert.equal(r.ok, true);
});

test("validation rejects junk with a reason and fills settings added later", () => {
  for (const junk of [null, 5, "x", { version: 2 }, { ...defaultProgress(T0), cards: { a: { id: "a" } } }]) {
    const r = validateProgress(junk);
    assert.equal(r.ok, false);
    if (!r.ok) assert.ok(r.error.length > 5);
  }
  const old = JSON.parse(JSON.stringify(defaultProgress(T0))) as { settings: Record<string, unknown> };
  delete old.settings["autoplay"];
  const r = validateProgress(old);
  assert.equal(r.ok, true);
  if (r.ok) assert.equal(r.value.settings.autoplay, true);
});

test("toggling a step twice restores the step list and the minutes", () => {
  const p0 = defaultProgress(T0);
  const p1 = toggleStep(p0, 3, "e-lesson", T0);
  assert.deepEqual(p1.steps["d3"], ["e-lesson"]);
  assert.equal(p1.studyLog["2026-09-28"], 25);
  const p2 = toggleStep(p1, 3, "e-lesson", T0);
  assert.deepEqual(p2.steps["d3"], []);
  assert.equal(p2.studyLog["2026-09-28"], 0);
  assert.deepEqual(p0.steps, {}, "the original is not mutated");
});

test("introducing a day adds each card once", () => {
  const p1 = introduceDay(defaultProgress(T0), 4, ["d4-01", "d4-02"], T0);
  const p2 = introduceDay(p1, 4, ["d4-01", "d4-02", "d4-03"], T0 + HOUR);
  assert.deepEqual(Object.keys(p2.cards).sort(), ["d4-01", "d4-02", "d4-03"]);
  assert.equal(p2.introduced["d4"], T0);
  assert.equal(p2.cards["d4-01"]?.phase, "new");
});

test("the streak grows on consecutive days and restarts after a gap", () => {
  let p = touchStreak(defaultProgress(T0), "2026-09-28");
  assert.equal(p.streak.current, 1);
  p = touchStreak(p, "2026-09-28");
  assert.equal(p.streak.current, 1);
  p = touchStreak(p, "2026-09-29");
  p = touchStreak(p, "2026-09-30");
  assert.equal(p.streak.current, 3);
  p = touchStreak(p, "2026-10-03");
  assert.deepEqual([p.streak.current, p.streak.best], [1, 3]);
});

test("a review updates the card, the review log and the streak", () => {
  let p = introduceDay(defaultProgress(T0), 4, ["d4-01"], T0);
  p = applyReview(p, "d4-01", 0, T0);
  p = applyReview(p, "d4-01", 2, T0 + 60_000);
  assert.equal(p.cards["d4-01"]?.reps, 2);
  assert.deepEqual(p.reviewLog["2026-09-28"], { n: 2, again: 1 });
  assert.equal(p.streak.current, 1);
  assert.equal(retention(p, 7, "2026-09-28"), 0.5);
  assert.equal(retention(defaultProgress(T0), 7, "2026-09-28"), null);
});

test("deck statistics and due cards", () => {
  let p = introduceDay(defaultProgress(T0), 4, ["a", "b", "c"], T0);
  p = applyReview(p, "a", 3, T0);
  const due = dueCards(p, T0 + 1000).map((c) => c.id);
  assert.deepEqual(due, ["b", "c"]);
  const stats = deckStats(p, T0 + 5 * DAY);
  assert.equal(stats.total, 3);
  assert.equal(stats.fresh, 2);
  assert.equal(stats.young, 1);
  assert.equal(stats.dueNow, 3);
});

test("scores keep the best and the last attempt; the journal is capped", () => {
  let p = recordScore(defaultProgress(T0), "d4-practice", 0.6, T0);
  p = recordScore(p, "d4-practice", 0.4, T0 + 1);
  assert.deepEqual([p.scores["d4-practice"]?.best, p.scores["d4-practice"]?.last, p.scores["d4-practice"]?.total], [0.6, 0.4, 2]);
  for (let i = 0; i < 70; i++) p = addJournal(p, { day: 4, at: T0 + i, text: `Запись ${i}` });
  assert.equal(p.journal.length, 60);
  assert.equal(p.journal.at(-1)?.text, "Запись 69");
});

test("a miss is remembered per word and a later right answer pays it back", () => {
  let p = recordMiss(defaultProgress(T0), "d12-07", T0);
  p = recordMiss(p, "d12-07", T0 + 5);
  assert.deepEqual(p.misses["d12-07"], { n: 2, last: T0 + 5 });
  p = recordHit(p, "d12-07", T0 + 6);
  assert.deepEqual(p.misses["d12-07"], { n: 1, last: T0 + 5 });
  p = recordHit(p, "d12-07", T0 + 7);
  assert.equal("d12-07" in p.misses, false);
  const same = recordHit(p, "d12-07", T0 + 8);
  assert.equal(same, p, "a hit on a word never missed changes nothing");
  assert.equal(recordMiss(p, "not-a-word", T0), p, "only course word ids are stored");
});

test("the miss memory keeps the most recent entries", () => {
  let p = defaultProgress(T0);
  for (let i = 0; i < MISSES_LIMIT + 1; i++) p = recordMiss(p, `d${1 + (i % 56)}-${String(Math.floor(i / 56)).padStart(2, "0")}`, T0 + i);
  assert.equal(Object.keys(p.misses).length, MISSES_LIMIT);
  assert.equal("d1-00" in p.misses, false, "the oldest miss was dropped");
});

test("old saved progress without misses still loads; malformed misses do not", () => {
  const old = JSON.parse(JSON.stringify(defaultProgress(T0))) as Record<string, unknown>;
  delete old["misses"];
  const r = validateProgress(old);
  assert.equal(r.ok, true);
  if (r.ok) assert.deepEqual(r.value.misses, {});
  const kept = validateProgress(recordMiss(defaultProgress(T0), "d3-01", T0));
  assert.equal(kept.ok && kept.value.misses["d3-01"]?.n, 1);
  assert.equal(validateProgress({ ...defaultProgress(T0), misses: { "d3-01": { n: "x", last: 1 } } }).ok, false);
  assert.equal(validateProgress({ ...defaultProgress(T0), misses: [] }).ok, false);
});

test("words can be added one by one and an untouched addition can be taken back", () => {
  let p = introduceDay(defaultProgress(T0), 1, ["d1-01"], T0);
  p = addCards(p, ["d1-01", "d5-02", "d5-03"], T0 + 1);
  assert.deepEqual(Object.keys(p.cards).sort(), ["d1-01", "d5-02", "d5-03"]);
  assert.equal(p.cards["d1-01"]?.due, T0, "an existing card is left alone");
  p = applyReview(p, "d5-03", 3, T0 + 2);
  p = removeNewCards(p, ["d5-02", "d5-03"], T0 + 3);
  assert.deepEqual(Object.keys(p.cards).sort(), ["d1-01", "d5-03"], "a reviewed card is never removed");
});
