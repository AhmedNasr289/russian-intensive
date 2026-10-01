import { test } from "node:test";
import assert from "node:assert/strict";
import { addCards, defaultProgress, recordMiss } from "../src/core/progress.ts";
import type { Progress } from "../src/core/progress.ts";
import { weakDrillItems, weakWords, weakScore } from "../src/core/weak.ts";
import { findWord, wordsUpTo } from "../src/core/course.ts";

const T0 = Date.parse("2026-10-01T19:00:00Z");

function withCard(p: Progress, id: string, patch: Partial<Progress["cards"][string]>): Progress {
  const q = addCards(p, [id], T0);
  const card = q.cards[id];
  if (!card) throw new Error("no card");
  return { ...q, cards: { ...q.cards, [id]: { ...card, ...patch } } };
}

test("the weakness score adds misses, lapses, low ease and relearning", () => {
  assert.equal(weakScore(undefined, undefined), 0);
  assert.equal(weakScore({ n: 2, last: T0 }, undefined), 4);
  const card = { id: "d1-01", phase: "relearning" as const, step: 0, ease: 2.0, interval: 1, due: T0, reps: 4, lapses: 2 };
  assert.equal(weakScore({ n: 1, last: T0 }, card), 2 + 3 + 2 + 2);
  assert.equal(weakScore(undefined, { ...card, phase: "review", lapses: 0, ease: 2.5 }), 0);
});

test("weak words are ranked by score, then by the most recent miss, and carry their reasons", () => {
  let p = defaultProgress(T0);
  p = recordMiss(p, "d2-01", T0);
  p = recordMiss(p, "d3-01", T0 + 10);
  p = recordMiss(p, "d4-01", T0 + 5);
  p = recordMiss(p, "d4-01", T0 + 6);
  p = withCard(p, "d5-01", { phase: "review", lapses: 3, ease: 2.5 });
  p = withCard(p, "d6-01", { phase: "review", lapses: 0, ease: 2.5 });
  const weak = weakWords(p);
  assert.deepEqual(weak.map((w) => w.word.id), ["d5-01", "d4-01", "d3-01", "d2-01"]);
  const top = weak[0];
  assert.equal(top?.lapses, 3);
  assert.equal(top?.misses, 0);
  assert.equal(weak[1]?.misses, 2);
  assert.equal(weakWords(p, 2).length, 2);
});

test("ids that are not course words are skipped", () => {
  const p = withCard(defaultProgress(T0), "d99-99", { lapses: 4 });
  assert.deepEqual(weakWords(p), []);
});

test("a weak-word drill asks only about the weak words and tags every item", () => {
  const weak = ["d3-01", "d3-02", "d4-03"].map((id) => findWord(id)).filter((w) => w !== undefined);
  assert.equal(weak.length, 3);
  const items = weakDrillItems(weak, wordsUpTo(10), 7);
  assert.ok(items.length >= 3);
  const ids = new Set(weak.map((w) => w.id));
  for (const item of items) assert.ok(item.wordId && ids.has(item.wordId), `${item.ru} is one of the weak words`);
  assert.deepEqual(new Set(items.map((i) => i.wordId)), ids, "every weak word is asked at least once");
});
