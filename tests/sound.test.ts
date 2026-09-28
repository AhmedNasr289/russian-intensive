import { test } from "node:test";
import assert from "node:assert/strict";
import { browserOf, graphemes, platformOf, spellSteps, voiceTier, wordSpans } from "../src/core/audio.ts";
import { canSpell, LETTER_NAMES } from "../src/core/spelling.ts";
import { voiceAdvice } from "../src/app/components/soundcheck.ts";

const ACUTE = String.fromCharCode(0x0301);

const UA = {
  claudeApp: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Claude/2.9939.2 Chrome/152.0.7977.130 Electron/41.1.0 Safari/537.36",
  edge: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0",
  chrome: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
  firefox: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:143.0) Gecko/20100101 Firefox/143.0",
  iphone: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1",
  iphoneChrome: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/140.0.0.0 Mobile/15E148 Safari/604.1",
  android: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36",
  mac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Safari/605.1.15",
};

test("the browser family is read from the user agent, embedded app windows first", () => {
  assert.equal(browserOf(UA.claudeApp), "app");
  assert.equal(browserOf(UA.edge), "edge");
  assert.equal(browserOf(UA.chrome), "chrome");
  assert.equal(browserOf(UA.firefox), "firefox");
  assert.equal(browserOf(UA.iphone), "safari");
  assert.equal(browserOf(UA.iphoneChrome), "chrome");
  assert.equal(browserOf(UA.mac), "safari");
  assert.equal(browserOf(""), "other");
});

test("the platform is read from the user agent, Android before Linux", () => {
  assert.equal(platformOf(UA.claudeApp), "windows");
  assert.equal(platformOf(UA.android), "android");
  assert.equal(platformOf(UA.iphone), "ios");
  assert.equal(platformOf(UA.mac), "mac");
  assert.equal(platformOf("Mozilla/5.0 (X11; Linux x86_64)"), "linux");
});

test("network and neural voices count as natural, offline system voices as standard", () => {
  assert.equal(voiceTier({ name: "Google русский", localService: false }), "natural");
  assert.equal(voiceTier({ name: "Microsoft Svetlana Online (Natural) - Russian (Russia)", localService: false }), "natural");
  assert.equal(voiceTier({ name: "Milena (Enhanced)", localService: true }), "natural");
  assert.equal(voiceTier({ name: "Microsoft Irina - Russian (Russia)", localService: true }), "standard");
  assert.equal(voiceTier(null), "none");
});

test("the advice fits the device, and a natural voice needs none", () => {
  assert.equal(voiceAdvice("chrome", "windows", "natural"), null);
  assert.match(voiceAdvice("app", "windows", "none")?.en ?? "", /Chrome.*Google Translate/);
  assert.match(voiceAdvice("safari", "ios", "none")?.en ?? "", /Milena/);
  assert.match(voiceAdvice("chrome", "android", "none")?.en ?? "", /Install voice data/);
  assert.match(voiceAdvice("firefox", "windows", "none")?.en ?? "", /Chrome|Edge/);
  assert.match(voiceAdvice("edge", "windows", "standard")?.en ?? "", /robotic/);
  for (const b of ["app", "edge", "chrome", "firefox", "safari", "other"] as const) {
    for (const p of ["windows", "mac", "ios", "android", "linux", "other"] as const) {
      const a = voiceAdvice(b, p, "none");
      assert.ok(a && a.en.length > 20 && /[؀-ۿ]/.test(a.ar), `${b}/${p}`);
    }
  }
});

test("a stress mark stays with its vowel as one unit on screen", () => {
  assert.deepEqual(graphemes(`молоко${ACUTE}`), ["м", "о", "л", "о", "к", `о${ACUTE}`]);
  assert.deepEqual(graphemes("да!"), ["д", "а", "!"]);
  assert.deepEqual(graphemes(""), []);
});

test("every one of the 33 letters has a name to spell with", () => {
  assert.equal(LETTER_NAMES.size, 33);
  assert.equal(LETTER_NAMES.get("б"), "бэ");
  assert.equal(LETTER_NAMES.get("л"), "эль");
  assert.ok(LETTER_NAMES.get("й")?.startsWith("и кра"));
});

test("spelling names each letter in order, skips punctuation and knows capitals", () => {
  const steps = spellSteps(`Кот${ACUTE}!`, LETTER_NAMES);
  assert.deepEqual(
    steps.map((s) => [s.index, s.letter, s.name]),
    [
      [0, "К", "ка"],
      [1, "о", "о"],
      [2, "т", "тэ"],
    ],
  );
  const withStress = spellSteps(`вода${ACUTE}`, LETTER_NAMES);
  assert.deepEqual(withStress.map((s) => s.index), [0, 1, 2, 3]);
  assert.equal(withStress[3]?.letter, "а");
});

test("word spans cover each word, keep inner hyphens and skip dashes between words", () => {
  const spans = wordSpans(`Как дела${ACUTE}? — Хорошо${ACUTE}, по-ру${ACUTE}сски!`);
  assert.deepEqual(
    spans.map((s) => s.word),
    ["Как", `дела${ACUTE}`, `Хорошо${ACUTE}`, `по-ру${ACUTE}сски`],
  );
  const gs = graphemes(`Как дела${ACUTE}?`);
  const first = spans[0];
  assert.ok(first);
  assert.equal(gs.slice(first.start, first.end).join(""), "Как");
});

test("spelling is offered for words and short phrases, not sentences", () => {
  assert.ok(canSpell(`спаси${ACUTE}бо`));
  assert.ok(canSpell(`до свида${ACUTE}ния`));
  assert.ok(!canSpell(`Меня${ACUTE} зову${ACUTE}т Ка${ACUTE}тя, я из Москвы${ACUTE}.`));
  assert.ok(!canSpell("hello"));
  assert.ok(!canSpell(""));
});
