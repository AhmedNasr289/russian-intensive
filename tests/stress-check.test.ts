import { test } from "node:test";
import assert from "node:assert/strict";
import { accentedForms, candidates, russianSection } from "../scripts/verify-stress.ts";
import { stripStress } from "../src/core/text.ts";

const GRAVE = String.fromCharCode(0x0300);
const ACUTE = String.fromCharCode(0x0301);

const PAGE = [
  "==Belarusian==",
  "{{be-noun|малако́}} (not Russian)",
  "==Russian==",
  "===Pronunciation===",
  "* {{ru-IPA|молоко́}}",
  "===Noun===",
  "{{ru-noun+|молоко́|*}}",
  "# [[milk]]; see also [[моло́чный]]",
  "==Ukrainian==",
  "{{uk-noun|молоко́}}",
].join("\n");

test("only the Russian section of a Wiktionary page is read", () => {
  const section = russianSection(PAGE);
  assert.ok(section.includes("ru-noun+"));
  assert.ok(!section.includes("be-noun") && !section.includes("uk-noun"));
  assert.equal(russianSection("==English==\nno Russian here"), "");
});

test("accented spellings of the headword are collected; other words and secondary (grave) stress are ignored", () => {
  assert.deepEqual([...accentedForms(russianSection(PAGE), "молоко́")], ["молоко́"]);
  const compound = `{{ru-noun|ра${GRAVE}диоста${ACUTE}нция|f}}`;
  assert.deepEqual([...accentedForms(compound, "радиостанция")], [`радиоста${ACUTE}нция`]);
  assert.equal(accentedForms("{{ru-noun|кот}}", "кот").size, 0);
});

test("the sample pool holds single stressed words, each once", () => {
  const pool = candidates();
  assert.ok(pool.length > 300, `pool=${pool.length}`);
  assert.ok(pool.every((w) => !/\s/.test(w) && w.includes(ACUTE)));
  const keys = pool.map((w) => stripStress(w).toLowerCase());
  assert.equal(new Set(keys).size, keys.length);
});
