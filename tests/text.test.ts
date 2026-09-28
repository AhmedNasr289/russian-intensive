import { test } from "node:test";
import assert from "node:assert/strict";
import {
  ACUTE,
  checkStress,
  countVowels,
  hasArabic,
  levenshtein,
  normalizeAnswer,
  russianRuns,
  splitBilingual,
  similarity,
  splitStress,
  stripStress,
  tokenizeRu,
  wordDiff,
} from "../src/core/text.ts";

test("stripStress removes the combining acute", () => {
  assert.equal(stripStress("молоко́"), "молоко");
  assert.equal(stripStress("пожа́луйста"), "пожалуйста");
});

test("countVowels counts Cyrillic vowels after stripping stress", () => {
  assert.equal(countVowels("здра́вствуйте"), 3);
  assert.equal(countVowels("ещё"), 2);
  assert.equal(countVowels("в"), 0);
});

test("tokenizeRu keeps hyphenated words whole and drops punctuation", () => {
  assert.deepEqual(tokenizeRu("Как дела́? По-ру́сски!"), ["Как", "дела́", "По-ру́сски"]);
  assert.deepEqual(tokenizeRu("Hello, мир"), ["мир"]);
});

test("checkStress accepts correctly marked text", () => {
  assert.deepEqual(checkStress("Молоко́ и хлеб. Меня́ зову́т А́нна, а тебя́?"), []);
  assert.deepEqual(checkStress("Ещё, всё, её — ё needs no mark"), []);
});

test("checkStress reports a missing mark on a polysyllable", () => {
  const issues = checkStress("молоко");
  assert.equal(issues.length, 1);
  assert.equal(issues[0]?.problem, "missing");
});

test("checkStress reports two marks in one word", () => {
  assert.equal(checkStress("мо́локо́")[0]?.problem, "multiple");
});

test("checkStress reports a mark on a monosyllable", () => {
  assert.equal(checkStress("да́")[0]?.problem, "monosyllable");
});

test("checkStress reports a mark together with ё", () => {
  assert.equal(checkStress("ещё́")[0]?.problem, "with-yo");
});

test("checkStress reports a mark after a consonant", () => {
  assert.equal(checkStress("м" + ACUTE + "олоко")[0]?.problem, "misplaced");
});

test("checkStress exempts word fragments and unstressed clitics", () => {
  assert.deepEqual(checkStress("Окончания -ами и -ешь, основа чита-"), [
    { token: "Окончания", problem: "missing" },
    { token: "основа", problem: "missing" },
  ]);
  assert.deepEqual(checkStress("обо мне, на́до мной"), []);
  assert.deepEqual(checkStress("СССР и ООН"), []);
});

test("a stressed ending may carry its mark, and не takes the stress before был", () => {
  assert.deepEqual(checkStress("го́род → города́: the stressed ending -а́, also -ы́"), []);
  assert.deepEqual(checkStress("Я не́ был до́ма. Её не́ было. Мы не́ были там."), []);
  assert.equal(checkStress("Я не́ знаю.")[0]?.problem, "monosyllable");
  assert.equal(checkStress("-а́ы́")[0]?.problem, "multiple");
});

test("normalizeAnswer ignores case, stress, ё and edge punctuation", () => {
  assert.equal(normalizeAnswer("  Ещё́ РАЗ! "), "еще раз");
  assert.equal(normalizeAnswer("«По-ру́сски», пожа́луйста…"), "по-русски пожалуйста");
  assert.equal(normalizeAnswer("— Да - нет"), "да нет");
});

test("levenshtein counts single-character edits", () => {
  assert.equal(levenshtein("кот", "кит"), 1);
  assert.equal(levenshtein("", "дом"), 3);
  assert.equal(levenshtein("дом", "дом"), 0);
});

test("similarity is 1 for equal normalised text and high for a typo", () => {
  assert.equal(similarity("Приве́т!", "привет"), 1);
  assert.ok(similarity("привет", "превет") > 0.8);
  assert.ok(similarity("привет", "пока") < 0.5);
  assert.equal(similarity("", ""), 1);
});

test("wordDiff marks only the words that were not heard", () => {
  const d = wordDiff("Я люблю́ чай.", "я любил чай");
  assert.deepEqual(
    d.map((w) => w.ok),
    [true, false, true],
  );
  assert.equal(d[1]?.word, "люблю́");
});

test("splitStress isolates the stressed vowel for colouring", () => {
  const segs = splitStress("до" + ACUTE + "м");
  assert.deepEqual(segs, [
    { text: "д", stressed: false },
    { text: "о" + ACUTE, stressed: true },
    { text: "м", stressed: false },
  ]);
  assert.equal(splitStress("ещё").filter((s) => s.stressed).length, 1);
  assert.equal(splitStress("кот").filter((s) => s.stressed).length, 0);
});

test("options written as English · Arabic split into their two halves", () => {
  assert.deepEqual(splitBilingual("mum, mom · ماما، أمّ"), { en: "mum, mom", ar: "ماما، أمّ" });
  assert.deepEqual(splitBilingual("ё is always stressed · لأن ё منبورة دائمًا"), { en: "ё is always stressed", ar: "لأن ё منبورة دائمًا" });
  assert.equal(splitBilingual("кот · кошка"), null, "Russian on both sides is not a translation pair");
  assert.equal(splitBilingual("ماما · mum"), null, "Arabic first is not the English · Arabic form");
  assert.equal(splitBilingual("no separator here"), null);
  assert.ok(hasArabic("أمّ") && !hasArabic("١٢٣") && !hasArabic("mum"));
});

test("a Russian sentence inside Arabic stays one run; an Arabic comma splits a list; joining returns the input", () => {
  const a = (s: string) => s.split("*").join(ACUTE);
  const arabic = a("أن تشير إلى الأشياء: Вот метро*! Теа*тр там.");
  assert.deepEqual(
    russianRuns(arabic).filter((r) => r.russian).map((r) => r.text),
    [a("Вот метро*! Теа*тр там.")],
  );
  const list = a("الضمائر: я، ты، он، она*.");
  assert.deepEqual(
    russianRuns(list).filter((r) => r.russian).map((r) => r.text),
    ["я", "ты", "он", a("она*.")],
  );
  const english = a("Read ма*ма, метро* — with stress (по-ру*сски)");
  assert.deepEqual(
    russianRuns(english).filter((r) => r.russian).map((r) => r.text),
    [a("ма*ма, метро*"), a("по-ру*сски")],
  );
  // An address with numbers stays whole, including its last number; an English number after a comma does not join.
  const address = a("ثم الشقة: у*лица Пу*шкина, дом 10, кварти*ра 25 — وتُكتب: ул. Пу*шкина, д. 10, кв. 25. انتهى");
  assert.deepEqual(
    russianRuns(address).filter((r) => r.russian).map((r) => r.text),
    [a("у*лица Пу*шкина, дом 10, кварти*ра 25"), a("ул. Пу*шкина, д. 10, кв. 25.")],
  );
  assert.deepEqual(
    russianRuns(a("Say Москва*, 3 times")).filter((r) => r.russian).map((r) => r.text),
    [a("Москва*")],
  );
  for (const s of [arabic, list, english, address, "no Russian here", ""]) assert.equal(russianRuns(s).map((r) => r.text).join(""), s);
});
