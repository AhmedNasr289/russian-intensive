import { test } from "node:test";
import assert from "node:assert/strict";
import { dayOfWordId, lookupWord, normalizeAr, normalizeEn, normalizeRu, searchScreens, searchWords } from "../src/core/search.ts";

const ids = (q: string, n = 3) => searchWords(q, n).map((h) => h.word.id);

test("Russian is matched without stress marks, case or the dots of ё", () => {
  assert.equal(normalizeRu("Приве́т!"), "привет");
  assert.equal(normalizeRu("ЕЩЁ"), "еще");
  assert.equal(ids("привет")[0], "d2-04");
  assert.equal(ids("Приве́т")[0], "d2-04");
  assert.deepEqual(ids("еще", 2), ["d33-11", "d33-15"], "the exact word before the phrase that starts with it");
});

test("an exact word outranks a prefix, which outranks a match inside a word", () => {
  const hits = searchWords("дом", 4);
  assert.equal(hits[0]?.word.id, "d9-14");
  assert.ok((hits[0]?.score ?? 0) > (hits[1]?.score ?? 0));
  const inside = hits.findIndex((h) => h.word.id === "d16-11");
  assert.ok(inside === -1 || inside === hits.length - 1, "ря́дом comes last");
});

test("English matches whole meanings and each listed meaning", () => {
  assert.equal(normalizeEn("Hi, Hello (informal)"), "hi, hello (informal)");
  assert.equal(ids("book")[0], "d8-03");
  assert.ok(ids("hello", 5).includes("d2-04"));
  assert.equal(ids("thank you")[0], "d3-03");
});

test("Arabic is matched without diacritics, tatweel or the variants of alef, ya and ta marbuta", () => {
  assert.equal(normalizeAr("شُكْرًا"), "شكرا");
  assert.equal(normalizeAr("أمّ"), "ام");
  assert.equal(normalizeAr("مدرسة"), normalizeAr("مدرسه"));
  assert.equal(normalizeAr("على"), normalizeAr("علي"));
  assert.equal(ids("كتاب")[0], "d8-03");
  assert.equal(ids("كِتاب")[0], "d8-03");
  assert.equal(ids("شكرا")[0], "d3-03");
});

test("an empty or one-letter query finds nothing", () => {
  assert.deepEqual(searchWords(""), []);
  assert.deepEqual(searchWords("   "), []);
  assert.deepEqual(searchWords("a"), []);
});

test("screens are found by name, by keyword and by day number", () => {
  assert.equal(searchScreens("12")[0]?.token, "day-12");
  assert.equal(searchScreens("day 12")[0]?.token, "day-12");
  assert.equal(searchScreens("اليوم ١٢")[0]?.token, "day-12");
  assert.equal(searchScreens("день 12")[0]?.token, "day-12");
  assert.deepEqual(searchScreens("99"), []);
  assert.equal(searchScreens("settings")[0]?.token, "settings");
  assert.equal(searchScreens("weak")[0]?.token, "weak");
  assert.equal(searchScreens("flashcards")[0]?.token, "review");
  assert.equal(searchScreens("plurals")[0]?.token, "day-9");
  assert.equal(searchScreens("الإعدادات")[0]?.token, "settings");
});

test("a word is looked up from Russian text with stress and punctuation", () => {
  assert.equal(lookupWord("Приве́т!")?.id, "d2-04");
  assert.equal(lookupWord("  спасибо ")?.id, "d3-03");
  assert.equal(lookupWord("абракадабра"), null);
  assert.equal(lookupWord(""), null);
});

test("the day of a word id", () => {
  assert.equal(dayOfWordId("d12-07"), 12);
  assert.equal(dayOfWordId("d1-01"), 1);
  assert.equal(dayOfWordId("x12-07"), 0);
});
