import { test } from "node:test";
import assert from "node:assert/strict";
import { wordQuestions } from "../src/core/quiz.ts";
import { getDay, wordsUpTo } from "../src/core/course.ts";
import type { Word } from "../src/content/types.ts";

test("word questions carry the id of the word they test", () => {
  const day = getDay(12);
  if (!day) throw new Error("day 12 is missing");
  const items = wordQuestions(day.words, wordsUpTo(12), 12 * 31);
  assert.equal(items.length, 6);
  for (const item of items) {
    const word: Word | undefined = day.words.find((w) => w.id === item.wordId);
    if (!word) throw new Error(`item for ${item.ru ?? "?"} names no word of the day`);
    assert.equal(item.ru, word.ru);
    const right = item.options[item.answer] ?? "";
    assert.ok(right === word.ru || right === `${word.en} · ${word.ar}`, "the marked answer belongs to that word");
  }
  assert.deepEqual(wordQuestions(day.words, wordsUpTo(12), 12 * 31), items, "the same seed gives the same quiz");
});
