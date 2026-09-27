import { test } from "node:test";
import assert from "node:assert/strict";
import type { Day } from "../src/content/types.ts";
import { WEEK_1 } from "../src/content/weeks/week1.ts";
import { SYLLABUS } from "../src/content/syllabus.ts";
import { TOPIC_SET } from "../src/content/topics.ts";
import { kindOf, minWords, validateDays, weekOf } from "../src/core/validate.ts";

const exemplar = WEEK_1.find((d) => d.n === 4);
if (!exemplar) throw new Error("the exemplar day 4 is missing from week 1");

/** A fresh, valid copy of the exemplar day to break one rule at a time. */
const base = (): Day => structuredClone(exemplar);

/** The same day moved to another day number with renumbered word ids. */
function moveTo(day: Day, n: number): Day {
  day.n = n;
  day.week = weekOf(n);
  day.kind = kindOf(n);
  day.words.forEach((w, i) => (w.id = `d${n}-${String(i + 1).padStart(2, "0")}`));
  day.grammar.forEach((g, i) => (g.id = `d${n}-g${i + 1}`));
  return day;
}

const errorsOf = (days: Day[]) => validateDays(days, { full: false }).errors;
const has = (errors: string[], fragment: string) => errors.some((e) => e.includes(fragment));

test("the exemplar day passes every rule", () => {
  assert.deepEqual(errorsOf([base()]), []);
});

test("a missing stress mark is reported with the word", () => {
  const d = base();
  const word = d.words[3];
  assert.ok(word);
  word.ru = "она";
  assert.ok(has(errorsOf([d]), 'stress missing in "она"'));
});

test("a word taught twice is reported on the later day only", () => {
  const first = base();
  const second = moveTo(base(), 5);
  second.words = second.words.slice(0, 1);
  const errors = errorsOf([first, second]);
  assert.ok(has(errors, "d5 words[0]"));
  assert.ok(has(errors, "duplicates a word already taught on day 4"));
  assert.ok(!errors.some((e) => e.startsWith("d4 ")));
});

test("a duplicate against a later week blames the later day, not this one", () => {
  const later = moveTo(base(), 12);
  const result = validateDays([base()], { full: false, otherDays: [later] });
  assert.ok(!has(result.errors, "duplicates"));
});

test("word ids must carry the day number", () => {
  const d = base();
  const word = d.words[0];
  assert.ok(word);
  word.id = "d5-01";
  assert.ok(has(errorsOf([d]), 'id "d5-01" must look like d4-01'));
});

test("a noun needs a gender", () => {
  const d = base();
  d.words.push({ id: "d4-19", ru: "го́род", say: "gOrat", en: "city", ar: "مدينة", pos: "noun" });
  assert.ok(has(errorsOf([d]), "a noun needs g"));
});

test("the respelling must uppercase the stressed vowel of a longer word", () => {
  const d = base();
  const word = d.words[3];
  assert.ok(word);
  word.say = "ana";
  assert.ok(has(errorsOf([d]), "must uppercase the stressed vowel"));
});

test("too few words for a lesson day is an error", () => {
  const d = base();
  d.words = d.words.slice(0, 10);
  assert.ok(has(errorsOf([d]), "needs at least 17"));
});

test("a fill-in item must have exactly one gap", () => {
  const d = base();
  d.exercises.push({ kind: "fill", prompt: { en: "x", ar: "س" }, ru: "Меня́ ___ ___.", answers: ["зову́т"], why: { en: "x", ar: "س" } });
  assert.ok(has(errorsOf([d]), "exactly one ___"));
});

test("an ordering item must rebuild its answer from the tokens", () => {
  const d = base();
  d.exercises.push({ kind: "order", prompt: { en: "x", ar: "س" }, tokens: ["я", "из", "Каи́ра"], answers: ["Я из Москвы́."], why: { en: "x", ar: "س" } });
  assert.ok(has(errorsOf([d]), "does not use exactly the given tokens"));
});

test("a choice answer must point at an option", () => {
  const d = base();
  d.exercises.push({ kind: "choice", prompt: { en: "x", ar: "س" }, options: ["я", "ты", "он"], answer: 3, why: { en: "x", ar: "س" } });
  assert.ok(has(errorsOf([d]), "answer index out of range"));
});

test("an Arabic field must contain Arabic", () => {
  const d = base();
  const goal = d.goals[0];
  assert.ok(goal);
  goal.ar = "My name";
  assert.ok(has(errorsOf([d]), "has no Arabic letters"));
});

test("topics must come from the controlled list", () => {
  const d = base();
  d.topics.push("astronomy");
  assert.ok(!TOPIC_SET.has("astronomy"));
  assert.ok(has(errorsOf([d]), 'unknown topic "astronomy"'));
});

test("the kind must match the day number", () => {
  const d = base();
  d.kind = "review";
  assert.ok(has(errorsOf([d]), "kind must be lesson"));
});

test("full mode demands all 56 days and 700 words", () => {
  const result = validateDays([base()], { full: true });
  assert.ok(has(result.errors, "day 1 is missing"));
  assert.ok(has(result.errors, "day 56 is missing"));
  assert.ok(has(result.errors, "needs at least 700"));
});

test("day kinds and word minimums follow the week pattern", () => {
  assert.deepEqual([1, 6, 7, 8, 13, 14, 56].map(kindOf), ["lesson", "immersion", "review", "lesson", "immersion", "review", "review"]);
  assert.deepEqual([1, 3, 4, 6, 7].map(minWords), [14, 14, 17, 6, 0]);
});

test("the syllabus has 56 days whose kinds and topics are valid", () => {
  assert.equal(SYLLABUS.length, 56);
  SYLLABUS.forEach((s, i) => {
    assert.equal(s.n, i + 1);
    assert.equal(s.kind, kindOf(s.n));
    for (const t of s.topics) assert.ok(TOPIC_SET.has(t), `day ${s.n} topic ${t}`);
  });
});

test("syllabus words are unique across the course", () => {
  const seen = new Map<string, number>();
  const dupes: string[] = [];
  for (const s of SYLLABUS) {
    for (const w of s.words) {
      const key = w.toLowerCase().normalize("NFD").replace(/́/g, "").replace(/[.?!…]/g, "").trim();
      const prev = seen.get(key);
      if (prev !== undefined) dupes.push(`${w} (days ${prev} and ${s.n})`);
      else seen.set(key, s.n);
    }
  }
  assert.deepEqual(dupes, []);
});
