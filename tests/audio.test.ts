import { test } from "node:test";
import assert from "node:assert/strict";
import { guessGender, isRussian, pickVoices, rankVoice, speakableText } from "../src/core/audio.ts";

const v = (name: string, lang = "ru-RU", localService = true) => ({ name, lang, localService, voiceURI: name });

test("only Russian voices qualify", () => {
  assert.ok(isRussian("ru-RU"));
  assert.ok(isRussian("ru_RU"));
  assert.ok(isRussian("ru"));
  assert.ok(!isRussian("uk-UA"));
  assert.ok(!isRussian("en-US"));
  assert.equal(rankVoice(v("Google US English", "en-US")), -1);
});

test("natural and online voices outrank plain desktop voices", () => {
  const natural = rankVoice(v("Microsoft Svetlana Online (Natural) - Russian (Russia)", "ru-RU", false));
  const google = rankVoice(v("Google русский", "ru-RU", false));
  const desktop = rankVoice(v("Microsoft Irina - Russian (Russia)"));
  assert.ok(natural > google && google > desktop, `${natural} ${google} ${desktop}`);
});

test("gender is guessed from well-known voice names", () => {
  assert.equal(guessGender("Microsoft Dmitry Online (Natural) - Russian (Russia)"), "m");
  assert.equal(guessGender("Microsoft Pavel - Russian (Russia)"), "m");
  assert.equal(guessGender("Microsoft Svetlana Online (Natural)"), "f");
  assert.equal(guessGender("Milena"), "f");
  assert.equal(guessGender("Google русский"), "f");
  assert.equal(guessGender("Voice 7"), "?");
});

test("the dialogue gets a male voice for A and a female voice for B when both exist", () => {
  const voices = [v("Microsoft Irina - Russian (Russia)"), v("Microsoft Dmitry Online (Natural)", "ru-RU", false), v("Microsoft Svetlana Online (Natural)", "ru-RU", false), v("Samantha", "en-US")];
  const picked = pickVoices(voices, null);
  assert.equal(picked.main?.name, "Microsoft Svetlana Online (Natural)");
  assert.equal(picked.male?.name, "Microsoft Dmitry Online (Natural)");
  assert.equal(picked.female?.name, "Microsoft Svetlana Online (Natural)");
  const chosen = pickVoices(voices, "Microsoft Irina - Russian (Russia)");
  assert.equal(chosen.main?.name, "Microsoft Irina - Russian (Russia)");
  assert.deepEqual(pickVoices([v("Samantha", "en-US")], null), { main: null, male: null, female: null });
});

test("speakable text drops stress marks and editorial symbols", () => {
  assert.equal(speakableText("Меня́ зову́т…"), "Меня зовут…");
  assert.equal(speakableText("— Как тебя́ зову́т? — А́нна."), "Как тебя зовут? — Анна.");
  assert.equal(speakableText("кни́г(а)"), "книга");
});
