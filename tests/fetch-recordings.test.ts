import { test } from "node:test";
import assert from "node:assert/strict";
import { audioEntries, authorFrom, chooseAudio, items, looksLikeMp3, packLayout, preferredFile } from "../scripts/fetch-recordings.ts";
import { recordingKey } from "../src/core/recordings.ts";

const ACUTE = String.fromCharCode(0x0301);

// Two nouns share one spelling on this page: вода́ (water) and во́да (leader).
const HOMOGRAPH = [
  "===Etymology 1===",
  "====Pronunciation====",
  `* {{ru-IPA|вода${ACUTE}}}`,
  "* {{audio|ru|Ru-вода.ogg|Audio}}",
  "===Etymology 2===",
  "====Pronunciation====",
  `* {{ru-IPA|во${ACUTE}да}}`,
].join("\n");

test("each audio file is paired with the stressed form of the pronunciation line above it", () => {
  assert.deepEqual(audioEntries(HOMOGRAPH), [{ file: "Ru-вода.ogg", form: `вода${ACUTE}` }]);
  const many = "{{audios|ru|Ru-кот.ogg|LL-Q7737 (rus)-A-кот.wav|Audio}}\n{{audio|en|en-us-cat.ogg}}";
  assert.deepEqual(
    audioEntries(many).map((e) => e.file),
    ["Ru-кот.ogg", "LL-Q7737 (rus)-A-кот.wav"],
  );
});

test("a homograph plays only the word recorded under our exact stress", () => {
  assert.equal(chooseAudio(HOMOGRAPH, `вода${ACUTE}`), "Ru-вода.ogg");
  assert.equal(chooseAudio(HOMOGRAPH, `во${ACUTE}да`), "ambiguous");
});

test("without a matching pronunciation line, any other stress on the page makes it ambiguous", () => {
  const page = `{{ru-noun+|со${ACUTE}рок}}\nsee also {{m|ru|соро${ACUTE}к}}\n* {{audio|ru|Ru-сорок.ogg}}`;
  assert.equal(chooseAudio(page, `со${ACUTE}рок`), "ambiguous");
  const clean = `{{ru-noun+|ла${ACUTE}мпа}}\n* {{audio|ru|Ru-лампа.ogg}}`;
  assert.equal(chooseAudio(clean, `ла${ACUTE}мпа`), "Ru-лампа.ogg");
  assert.equal(chooseAudio("{{ru-noun+|кот}}", "кот"), null);
});

test("studio recordings are preferred, then Lingua Libre", () => {
  assert.equal(preferredFile(["LL-Q7737 (rus)-A-кот.wav", "Ru-кот.ogg"]), "Ru-кот.ogg");
  assert.equal(preferredFile(["Other.ogg", "LL-Q7737 (rus)-A-кот.wav"]), "LL-Q7737 (rus)-A-кот.wav");
  assert.equal(preferredFile([]), null);
});

test("the credit names the speaker, the project or the uploader", () => {
  const ll = { Artist: { value: '<ul><li>Speaker: <a href="//lingualibre.org/wiki/Q1">Tatiana Kerbush</a></li>\n<li>Recorder: X</li></ul>' } };
  assert.equal(authorFrom(ll), "Tatiana Kerbush (Lingua Libre)");
  assert.equal(authorFrom({ Credit: { value: 'Audio sample provided by <a href="x">The Shtooka Project</a>.' } }), "The Shtooka Project");
  assert.equal(authorFrom({}, "Tsca.bot"), "The Shtooka Project");
  assert.equal(authorFrom({ Artist: { value: "<a href='x'>Сергей Сахно</a>, Vion Nicolas" } }), "Сергей Сахно, Vion Nicolas");
  assert.equal(authorFrom({ Credit: { value: '<span class="int-own-work">Own work</span>' } }, "SomeUser"), "SomeUser");
  assert.equal(authorFrom({}, "OtherBot"), "Wikimedia Commons contributor");
});

test("packs fill up to the limit in order, and an oversized item gets a pack of its own", () => {
  const packs = packLayout(
    [
      { key: "a", bytes: 40 },
      { key: "b", bytes: 50 },
      { key: "c", bytes: 30 },
      { key: "d", bytes: 150 },
      { key: "e", bytes: 10 },
    ],
    100,
  );
  assert.deepEqual(
    packs.map((p) => p.map((i) => i.key)),
    [["a", "b"], ["c"], ["d"], ["e"]],
  );
  assert.deepEqual(packLayout([], 100), []);
});

test("MP3 data is recognised by its ID3 tag or frame sync", () => {
  assert.ok(looksLikeMp3(new Uint8Array([0x49, 0x44, 0x33, 4])));
  assert.ok(looksLikeMp3(new Uint8Array([0xff, 0xfb, 0x90, 0x64])));
  assert.ok(!looksLikeMp3(new Uint8Array([0x4f, 0x67, 0x67, 0x53])));
  assert.ok(!looksLikeMp3(new Uint8Array([0xff])));
});

test("the lookup list holds each word once, as a normalised key, at most three words long", () => {
  const list = items();
  const keys = list.map((i) => i.key);
  assert.ok(list.length > 800, `items=${list.length}`);
  assert.equal(new Set(keys).size, keys.length);
  for (const { key } of list) {
    assert.equal(recordingKey(key), key);
    assert.ok(key.split(" ").length <= 3, key);
  }
});
