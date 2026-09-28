import { test } from "node:test";
import assert from "node:assert/strict";
import type { MediaItem } from "../src/content/types.ts";
import { findWord, getDay, levelOf, mediaFor, wordsUpTo, youtubeId, youtubeSearchUrl } from "../src/core/course.ts";
import { buildJournalPrompt, buildTranslatePrompt, buildTutorRules, knownVocabulary, parseJournalCorrection, parseTranslation, TRANSLATE_LIMIT } from "../src/core/tutorPrompt.ts";

const media = (id: string, kind: MediaItem["kind"], topics: string[], level: MediaItem["level"]): MediaItem => ({
  id, kind, topics, level, title: id, by: "x", url: `https://example.org/${id}`, lang: "en", note: { en: "n", ar: "ن" }, verified: "2026-09-27",
});

test("days and words are reachable by number and id", () => {
  const d4 = getDay(4);
  assert.equal(d4?.title.en, "Introductions");
  assert.equal(findWord("d4-01")?.ru, "я");
  const upTo4 = wordsUpTo(4).map((w) => w.id);
  assert.ok(upTo4.includes("d4-18"));
  assert.ok(!upTo4.some((id) => id.startsWith("d5-")));
});

test("levels follow the course arc", () => {
  assert.deepEqual([1, 7, 8, 28, 29, 56].map(levelOf), ["A0", "A0", "A1", "A1", "A2", "A2"]);
});

test("media for a day: videos only, most topic matches first, then the nearest level", () => {
  const lib = [
    media("site", "site", ["alphabet"], "A0"),
    media("far", "video", ["alphabet"], "B1"),
    media("near", "video", ["alphabet"], "A0"),
    media("two", "video", ["alphabet", "pronunciation"], "A2"),
    media("none", "video", ["food"], "A0"),
  ];
  const picked = mediaFor({ n: 1, topics: ["alphabet", "pronunciation"] }, lib).map((m) => m.id);
  assert.deepEqual(picked, ["two", "near", "far"]);
});

test("YouTube helpers encode spaces as %20 and read video ids", () => {
  assert.equal(youtubeSearchUrl("Russian ты vs вы"), "https://www.youtube.com/results?search_query=Russian%20%D1%82%D1%8B%20vs%20%D0%B2%D1%8B");
  assert.equal(youtubeId("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=5"), "dQw4w9WgXcQ");
  assert.equal(youtubeId("https://youtu.be/dQw4w9WgXcQ"), "dQw4w9WgXcQ");
  assert.equal(youtubeId("https://www.youtube.com/@RussianWithMax"), null);
});

test("tutor rules carry the day, the level, the mode and the vocabulary", () => {
  const day = getDay(4);
  assert.ok(day);
  const rules = buildTutorRules({ day, known: wordsUpTo(4), explain: "both" }, "roleplay");
  assert.match(rules, /day 4 of 56/);
  assert.match(rules, /Introductions/);
  assert.match(rules, /absolute beginner/);
  assert.match(rules, /ROLE-PLAY/);
  assert.match(rules, /Меня́ зову́т…/);
  assert.match(rules, /Modern Standard Arabic/);
});

test("even the last day's prompt fits comfortably in one call", () => {
  const last = getDay(56) ?? getDay(4);
  assert.ok(last);
  const prompt = buildJournalPrompt({ day: last, known: wordsUpTo(56), explain: "both" }, "Я ".repeat(3000));
  assert.ok(new TextEncoder().encode(prompt).length < 60_000, `${prompt.length} chars`);
  assert.ok(knownVocabulary(wordsUpTo(56), 500).length <= 500);
});

test("journal corrections are validated and clamped", () => {
  const good = {
    corrected: "Меня́ зову́т Ахме́д.",
    score: 12,
    errors: [{ original: "Меня зовёт", fix: "Меня́ зову́т", type: "verb", en: "Plural verb.", ar: "فعل الجمع." }, { original: "a", fix: "b", type: "weird", en: "x", ar: "س" }],
    praise: { en: "Good.", ar: "جيد." },
    next: { en: "Practise.", ar: "تدرّب." },
  };
  const parsed = parseJournalCorrection(good);
  assert.equal(parsed?.score, 10);
  assert.equal(parsed?.errors[1]?.type, "other");
  assert.equal(parseJournalCorrection({ ...good, praise: "Good" }), null);
  assert.equal(parseJournalCorrection({ ...good, errors: [{ original: 1 }] }), null);
  assert.equal(parseJournalCorrection(null), null);
});

test("the translate prompt asks for stress-marked JSON and caps the text; only Russian replies are used", () => {
  const prompt = buildTranslatePrompt("Where is the metro?" + "x".repeat(TRANSLATE_LIMIT));
  assert.match(prompt, /U\+0301/);
  assert.match(prompt, /JSON only/);
  assert.ok(prompt.length < TRANSLATE_LIMIT + 800);
  assert.equal(parseTranslation({ ru: " Где метро? " }), "Где метро?");
  assert.equal(parseTranslation({ ru: "Where is the metro?" }), null);
  assert.equal(parseTranslation({ text: "Где метро?" }), null);
  assert.equal(parseTranslation("Где метро?"), null);
  assert.equal(parseTranslation(null), null);
});
