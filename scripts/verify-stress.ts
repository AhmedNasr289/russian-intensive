// An independent check of the course's stress marks: a sample of single-word vocabulary items
// is looked up on English Wiktionary and our stressed form is compared with the accented forms
// in the entry's Russian section.
// Usage: node scripts/verify-stress.ts [--sample 120] [--seed 56] [--word молоко́]
// Prints "STRESS sampled=<s> checked=<c> agree=<a> disagree=<d>" and one line per disagreement.

import { COURSE } from "../src/content/index.ts";
import { shuffle } from "../src/core/answers.ts";
import { ACUTE, countVowels, stripStress } from "../src/core/text.ts";

const API = "https://en.wiktionary.org/w/api.php";
const USER_AGENT = "russian-in-56-days-stress-check/1.0 (educational course; https://github.com/AhmedNasr289/russian-intensive)";
const GRAVE = String.fromCharCode(0x0300);
/** A run of Cyrillic letters, stress marks and hyphens. */
const TOKEN = new RegExp(`[А-Яа-яЁё${GRAVE}${ACUTE}-]+`, "g");

function arg(name: string): string | null {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? (process.argv[i + 1] ?? null) : null;
}

/** Single words that carry a stress mark (phrases, ё-words and one-vowel words cannot be compared). */
export function candidates(): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const day of COURSE) {
    for (const w of day.words) {
      const form = w.ru.trim();
      if (w.pos === "phrase" || /[\s.,!?]/.test(form) || !form.includes(ACUTE) || countVowels(form) < 2) continue;
      const key = stripStress(form).toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(form);
    }
  }
  return out;
}

/** The part of a wikitext page between "==Russian==" and the next level-2 heading. */
export function russianSection(wikitext: string): string {
  const start = wikitext.indexOf("==Russian==");
  if (start < 0) return "";
  const rest = wikitext.slice(start + "==Russian==".length);
  const next = rest.search(/\n==[^=]/);
  return next < 0 ? rest : rest.slice(0, next);
}

/** Every accented spelling of `headword` that appears in the section (grave accents removed). */
export function accentedForms(section: string, headword: string): Set<string> {
  const target = stripStress(headword).toLowerCase();
  const forms = new Set<string>();
  for (const m of section.matchAll(TOKEN)) {
    const token = m[0].split(GRAVE).join("");
    if (token.includes(ACUTE) && stripStress(token).toLowerCase() === target) forms.add(token.toLowerCase());
  }
  return forms;
}

async function wikitext(title: string): Promise<string | null> {
  const url = `${API}?action=parse&page=${encodeURIComponent(title)}&prop=wikitext&format=json&formatversion=2&redirects=1`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT, "Api-User-Agent": USER_AGENT } });
    if (res.status === 429 || res.status >= 500) {
      await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
      continue;
    }
    const body = (await res.json()) as { parse?: { wikitext?: string }; error?: { code?: string } };
    return body.parse?.wikitext ?? null;
  }
  return null;
}

type Outcome = { word: string; status: "agree" | "disagree" | "unchecked"; found: string[] };

async function check(word: string): Promise<Outcome> {
  const plain = stripStress(word);
  const titles = [plain, plain.toLowerCase()].filter((t, i, a) => a.indexOf(t) === i);
  for (const title of titles) {
    const text = await wikitext(title);
    if (!text) continue;
    const forms = accentedForms(russianSection(text), plain);
    if (forms.size === 0) continue;
    return { word, status: forms.has(word.toLowerCase()) ? "agree" : "disagree", found: [...forms] };
  }
  return { word, status: "unchecked", found: [] };
}

async function main(): Promise<void> {
  const one = arg("word");
  const size = Number(arg("sample") ?? 120);
  const seed = Number(arg("seed") ?? 56);
  const pool = one ? [one] : shuffle(candidates(), seed).slice(0, size);
  let agree = 0;
  let disagree = 0;
  let checked = 0;
  for (const word of pool) {
    const r = await check(word);
    if (r.status === "unchecked") continue;
    checked++;
    if (r.status === "agree") agree++;
    else {
      disagree++;
      console.log(`DISAGREE ${word} wiktionary=${r.found.join("|")}`);
    }
    await new Promise((res) => setTimeout(res, 120));
  }
  console.log(`STRESS sampled=${pool.length} checked=${checked} agree=${agree} disagree=${disagree}`);
}

if (process.argv[1]?.replace(/\\/g, "/").endsWith("scripts/verify-stress.ts")) {
  main().catch((e: unknown) => {
    console.error(e instanceof Error ? e.message : e);
    process.exitCode = 1;
  });
}
