import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { RECORDINGS, RECORDING_PACKS, RECORDING_SOURCES } from "../src/content/recordings.ts";
import type { Recording } from "../src/content/recordings.ts";
import { commonsPage, creditsBySource, describe, recordingFor, recordingKey } from "../src/core/recordings.ts";
import { looksLikeMp3 } from "../scripts/fetch-recordings.ts";

const ACUTE = String.fromCharCode(0x0301);
const ROOT = resolve(import.meta.dirname, "..");

test("the lookup key drops stress, punctuation, ellipses and case, and keeps ё and inner hyphens", () => {
  assert.equal(recordingKey(`Приве${ACUTE}т!`), "привет");
  assert.equal(recordingKey(`Меня${ACUTE} зову${ACUTE}т…`), "меня зовут");
  assert.equal(recordingKey(`— Да.`), "да");
  assert.equal(recordingKey("всё"), "всё");
  assert.equal(recordingKey(`по-ру${ACUTE}сски`), "по-русски");
  assert.equal(recordingKey(`пока${ACUTE} — бока${ACUTE}`), "пока бока");
  assert.equal(recordingKey("  "), "");
});

test("a text finds its recording through the key, and only then", () => {
  const index = { привет: [0, 0, 100, 0, "Ru-привет.ogg"] as Recording };
  assert.deepEqual(recordingFor(`Приве${ACUTE}т!`, index), index["привет"]);
  assert.equal(recordingFor("пока", index), null);
  assert.equal(recordingFor("", index), null);
  // The index is a plain object: a key that names one of Object.prototype's members is not a recording.
  for (const inherited of ["constructor", "__proto__", "toString"]) {
    assert.equal(recordingFor(inherited, index), null, inherited);
    assert.equal(recordingFor(inherited), null, `${inherited} in the real index`);
  }
});

test("a recording is described with its pack, source and Commons page", () => {
  const info = describe("кот", [1, 50, 70, 0, "Ru-кот.ogg"], ["audio/a.mp3", "audio/b.mp3"], [{ author: "The Shtooka Project", license: "CC BY 2.0 fr", licenseUrl: "https://example.org" }]);
  assert.ok(info);
  assert.equal(info.pack, "audio/b.mp3");
  assert.equal(info.offset, 50);
  assert.equal(info.length, 70);
  assert.equal(info.source.author, "The Shtooka Project");
  assert.equal(info.page, commonsPage("Ru-кот.ogg"));
  assert.equal(describe("кот", [5, 0, 1, 0, "x.ogg"], ["audio/a.mp3"], []), null);
  assert.equal(commonsPage("LL-Q7737 (rus)-A B-кот.wav"), `https://commons.wikimedia.org/wiki/File:${encodeURIComponent("LL-Q7737_(rus)-A_B-кот.wav")}`);
});

test("credits group the words by who recorded them, largest group first", () => {
  const sources = [
    { author: "A", license: "CC BY 4.0", licenseUrl: "" },
    { author: "B", license: "CC BY-SA 4.0", licenseUrl: "" },
  ];
  const index = { да: [0, 0, 1, 1, "d.ogg"] as Recording, нет: [0, 1, 1, 1, "n.ogg"] as Recording, кот: [0, 2, 1, 0, "k.ogg"] as Recording };
  const groups = creditsBySource(index, sources);
  assert.deepEqual(
    groups.map((g) => [g.source.author, g.entries.length]),
    [
      ["B", 2],
      ["A", 1],
    ],
  );
});

/** The word a Commons pronunciation file is named after: Ru-кот.ogg, Ru-ru-нет.ogg, LL-Q7737 (rus)-Speaker-кот.wav, Ru-01-буква-А.ogg. */
function namedWord(file: string): string {
  const base = file.replace(/\.[a-z0-9]+$/i, "");
  const letter = base.match(/^Ru-\d+-буква-(.+)$/i);
  if (letter?.[1]) return letter[1];
  const lingua = base.match(/-([А-Яа-яЁё́̀ -]+)$/);
  if (base.startsWith("LL-") && lingua?.[1]) return lingua[1];
  return base.replace(/^(Ru-)+(ru-)?/i, "").replace(/\d+$/, "");
}

test("every recording's file name names the word that plays it (a check independent of the stress matcher)", () => {
  // The name reader itself, on each file-name shape the packs hold.
  assert.equal(namedWord("Ru-кот.ogg"), "кот");
  assert.equal(namedWord("Ru-ru-нет.ogg"), "нет");
  assert.equal(namedWord("LL-Q7737 (rus)-Tatiana Kerbush-ветер.wav"), "ветер");
  assert.equal(namedWord("Ru-01-буква-А.ogg"), "А");
  // Negative control: an entry whose file names another word must be reported.
  const planted = { ...RECORDINGS, дом: [0, 0, 1, 0, "Ru-кот.ogg"] as Recording };
  assert.deepEqual(
    Object.entries(planted).filter(([key, r]) => recordingKey(namedWord(r[4])) !== key).map(([key]) => key),
    ["дом"],
  );
  const differ = Object.entries(RECORDINGS)
    .filter(([key, r]) => recordingKey(namedWord(r[4])) !== key)
    .map(([key, r]) => `${key} <- ${r[4]}`);
  assert.deepEqual(differ, []);
});

test("the generated index is whole: every entry points into a real pack and source, packed back to back", () => {
  const byPack = new Map<number, Array<[number, number]>>();
  for (const [key, r] of Object.entries(RECORDINGS)) {
    assert.equal(recordingKey(key), key, `key is not normalised: ${key}`);
    assert.ok(r[0] >= 0 && r[0] < RECORDING_PACKS.length, `pack index of ${key}`);
    assert.ok(r[3] >= 0 && r[3] < RECORDING_SOURCES.length, `source index of ${key}`);
    assert.ok(r[2] > 0, `empty clip for ${key}`);
    const list = byPack.get(r[0]) ?? [];
    list.push([r[1], r[2]]);
    byPack.set(r[0], list);
  }
  for (const [p, list] of byPack) {
    list.sort((a, b) => a[0] - b[0]);
    let next = 0;
    for (const [offset, length] of list) {
      assert.equal(offset, next, `gap or overlap in pack ${p}`);
      next = offset + length;
    }
    // When the packs are on disk, each is exactly its clips and every clip starts like an MP3.
    const file = join(ROOT, "public", RECORDING_PACKS[p] ?? "");
    if (existsSync(file)) {
      const data = readFileSync(file);
      assert.equal(data.length, next, `size of ${RECORDING_PACKS[p]}`);
      for (const [offset] of list) assert.ok(looksLikeMp3(data.subarray(offset, offset + 4)), `clip at ${offset} in pack ${p}`);
    }
  }
  for (const s of RECORDING_SOURCES) assert.ok(s.author && s.license, `a source without author or licence: ${JSON.stringify(s)}`);
});
