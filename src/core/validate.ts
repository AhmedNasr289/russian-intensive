// Content validation rules. Used by scripts/validate-content.ts (authors run it after every edit)
// and by the test suite. Every rule reports "d<day> <where>: <problem>" so an author can find it.

import type { Bi, Day, Exercise, Tri, Word, SyllabusDay } from "../content/types.ts";
import { TOPIC_SET } from "../content/topics.ts";
import { checkStress, countVowels, hasArabic, hasCyrillic, normalizeAnswer, stripStress } from "./text.ts";
import { kindOf, weekOf } from "./schedule.ts";

export type ValidateOptions = {
  /** Require the whole course: days 1..56 and the course-wide word total. */
  full: boolean;
  /** Topic tags that have at least one media item; days whose topics lack media get a warning. */
  mediaTopics?: ReadonlySet<string>;
  /** When given, syllabus target words missing from a day produce warnings. */
  syllabus?: readonly SyllabusDay[];
  /** Days from other weeks, used to catch duplicate words across weeks in per-week runs. */
  otherDays?: readonly Day[];
};

export type ValidationResult = { days: number; errors: string[]; warnings: string[]; words: number };

export const COURSE_DAYS = 56;
export const MIN_UNIQUE_WORDS = 700;
const POS = new Set(["noun", "verb", "adj", "adv", "pron", "num", "prep", "conj", "part", "interj", "phrase"]);
const GAP = "___";

export { kindOf, weekOf };

export function minWords(n: number): number {
  const kind = kindOf(n);
  if (kind === "review") return 0;
  if (kind === "immersion") return 6;
  return n <= 3 ? 14 : 17;
}

/** The comparison key for "is this the same word": no stress, lower case, no punctuation. */
export const wordKey = (ru: string): string => normalizeAnswer(ru);

class Collector {
  errors: string[] = [];
  warnings: string[] = [];
  err(where: string, msg: string): void {
    this.errors.push(`${where}: ${msg}`);
  }
  warn(where: string, msg: string): void {
    this.warnings.push(`${where}: ${msg}`);
  }
  stress(where: string, text: string): void {
    for (const issue of checkStress(text)) this.err(where, `stress ${issue.problem} in "${issue.token}"`);
  }
  text(where: string, value: unknown): value is string {
    if (typeof value !== "string" || value.trim() === "") {
      this.err(where, "empty text");
      return false;
    }
    return true;
  }
  bi(where: string, v: Bi | undefined): void {
    if (!v) return this.err(where, "missing");
    if (this.text(`${where}.en`, v.en)) this.stress(`${where}.en`, v.en);
    if (this.text(`${where}.ar`, v.ar)) {
      if (!hasArabic(v.ar)) this.err(`${where}.ar`, "has no Arabic letters");
      this.stress(`${where}.ar`, v.ar);
    }
  }
  tri(where: string, v: Tri | undefined): void {
    if (!v) return this.err(where, "missing");
    if (this.text(`${where}.ru`, v.ru)) {
      if (!hasCyrillic(v.ru)) this.err(`${where}.ru`, "has no Cyrillic");
      this.stress(`${where}.ru`, v.ru);
    }
    this.bi(where, { en: v.en, ar: v.ar });
  }
  say(where: string, ru: string, say: string): void {
    if (!this.text(where, say)) return;
    if (!/^[A-Za-z' .,?!…\-]+$/.test(say)) this.err(where, `respelling "${say}" must use Latin letters only`);
    const hasPolysyllable = stripStress(ru)
      .split(/[\s-]+/)
      .some((w) => countVowels(w) >= 2);
    if (hasPolysyllable && !/[AEIOUY]/.test(say)) this.err(where, `respelling "${say}" must uppercase the stressed vowel`);
  }
}

function checkExercise(c: Collector, where: string, ex: Exercise): void {
  c.bi(`${where}.prompt`, ex.prompt);
  c.bi(`${where}.why`, ex.why);
  switch (ex.kind) {
    case "choice": {
      if (ex.options.length < 3) c.err(where, "needs at least 3 options");
      const keys = ex.options.map((o) => o.trim().toLowerCase());
      if (new Set(keys).size !== keys.length) c.err(where, "options repeat");
      ex.options.forEach((o, i) => {
        if (c.text(`${where}.options[${i}]`, o)) c.stress(`${where}.options[${i}]`, o);
      });
      if (!Number.isInteger(ex.answer) || ex.answer < 0 || ex.answer >= ex.options.length) c.err(where, "answer index out of range");
      if (ex.ru !== undefined && c.text(`${where}.ru`, ex.ru)) c.stress(`${where}.ru`, ex.ru);
      if (ex.listen && !ex.ru) c.err(where, "a listening item needs ru");
      break;
    }
    case "fill": {
      if (c.text(`${where}.ru`, ex.ru)) {
        if (ex.ru.split(GAP).length !== 2) c.err(where, `ru must contain exactly one ${GAP}`);
        // Check the sentence as the learner will see it once the gap is filled with the first answer.
        c.stress(`${where}.ru`, ex.ru.split(GAP).join(ex.answers[0] ?? " "));
      }
      if (ex.answers.length === 0) c.err(where, "needs at least one answer");
      ex.answers.forEach((a, i) => c.text(`${where}.answers[${i}]`, a));
      break;
    }
    case "order": {
      if (ex.tokens.length < 3) c.err(where, "needs at least 3 tokens");
      ex.tokens.forEach((t, i) => {
        if (c.text(`${where}.tokens[${i}]`, t)) c.stress(`${where}.tokens[${i}]`, t);
      });
      if (ex.answers.length === 0) c.err(where, "needs at least one answer");
      const bag = (words: string[]) => words.map(normalizeAnswer).filter(Boolean).sort().join("|");
      const tokenBag = bag(ex.tokens);
      ex.answers.forEach((a, i) => {
        if (c.text(`${where}.answers[${i}]`, a) && bag(normalizeAnswer(a).split(" ")) !== tokenBag) {
          c.err(`${where}.answers[${i}]`, "does not use exactly the given tokens");
        }
      });
      break;
    }
    case "translate": {
      if (ex.answers.length === 0) c.err(where, "needs at least one answer");
      ex.answers.forEach((a, i) => {
        if (c.text(`${where}.answers[${i}]`, a) && !hasCyrillic(a)) c.err(`${where}.answers[${i}]`, "must be Russian");
      });
      break;
    }
  }
}

function checkWord(c: Collector, where: string, w: Word, n: number): void {
  const idOk = new RegExp(`^d${n}-\\d{2}$`).test(w.id);
  if (!idOk) c.err(where, `id "${w.id}" must look like d${n}-01`);
  if (c.text(`${where}.ru`, w.ru)) {
    if (!hasCyrillic(w.ru)) c.err(`${where}.ru`, "has no Cyrillic");
    c.stress(`${where}.ru`, w.ru);
  }
  c.say(`${where}.say`, w.ru, w.say);
  c.bi(where, { en: w.en, ar: w.ar });
  if (!POS.has(w.pos)) c.err(where, `unknown pos "${w.pos}"`);
  if (w.pos === "noun" && !w.g) c.err(where, "a noun needs g (m, f, n or pl)");
  if (w.forms !== undefined && c.text(`${where}.forms`, w.forms)) c.stress(`${where}.forms`, w.forms);
  if (w.ex) c.tri(`${where}.ex`, w.ex);
  if (w.note) c.bi(`${where}.note`, w.note);
}

function checkDay(c: Collector, d: Day, seen: Map<string, number>, opts: ValidateOptions): void {
  const at = `d${d.n}`;
  // A file that is mid-edit can hold a half-built day; report it instead of crashing the whole run.
  const loose = d as unknown as Record<string, unknown>;
  const missing = ["goals", "words", "grammar", "exercises", "topics", "search"].filter((k) => !Array.isArray(loose[k]));
  const sp = loose["speaking"] as Record<string, unknown> | undefined;
  if (typeof sp !== "object" || sp === null || !Array.isArray(sp["prompts"])) missing.push("speaking");
  if (typeof loose["journal"] !== "object" || loose["journal"] === null) missing.push("journal");
  if (typeof loose["title"] !== "object" || loose["title"] === null) missing.push("title");
  if (missing.length) return c.err(at, `incomplete day: missing ${missing.join(", ")}`);
  if (!Number.isInteger(d.n) || d.n < 1 || d.n > COURSE_DAYS) return c.err(at, `day number ${d.n} out of range`);
  if (d.week !== weekOf(d.n)) c.err(at, `week must be ${weekOf(d.n)}`);
  if (d.kind !== kindOf(d.n)) c.err(at, `kind must be ${kindOf(d.n)}`);
  c.tri(`${at} title`, d.title);

  const minGoals = d.kind === "lesson" ? 2 : 1;
  if (d.goals.length < minGoals) c.err(at, `needs at least ${minGoals} goals`);
  d.goals.forEach((g, i) => c.bi(`${at} goals[${i}]`, g));

  if (d.words.length < minWords(d.n)) c.err(at, `has ${d.words.length} words; needs at least ${minWords(d.n)}`);
  d.words.forEach((w, i) => {
    const where = `${at} words[${i}] ${w.ru}`;
    checkWord(c, where, w, d.n);
    const key = wordKey(w.ru);
    const first = seen.get(key);
    if (first !== undefined && first !== d.n) c.err(where, `duplicates a word already taught on day ${first}`);
    else if (first === d.n) c.err(where, "appears twice on this day");
    else seen.set(key, d.n);
  });
  const ids = d.words.map((w) => w.id);
  if (new Set(ids).size !== ids.length) c.err(at, "word ids repeat");

  if (d.kind === "lesson" && d.grammar.length < 1) c.err(at, "a lesson needs a grammar point");
  d.grammar.forEach((g, i) => {
    const where = `${at} grammar[${i}]`;
    if (!new RegExp(`^d${d.n}-g\\d+$`).test(g.id)) c.err(where, `id "${g.id}" must look like d${d.n}-g1`);
    c.bi(`${where}.title`, g.title);
    if (g.en.length === 0 || g.ar.length === 0) c.err(where, "needs paragraphs in en and ar");
    if (g.en.length !== g.ar.length) c.warn(where, `en has ${g.en.length} paragraphs, ar has ${g.ar.length}`);
    g.en.forEach((p, k) => {
      if (c.text(`${where}.en[${k}]`, p)) c.stress(`${where}.en[${k}]`, p);
    });
    g.ar.forEach((p, k) => {
      if (c.text(`${where}.ar[${k}]`, p)) {
        if (!hasArabic(p)) c.err(`${where}.ar[${k}]`, "has no Arabic letters");
        c.stress(`${where}.ar[${k}]`, p);
      }
    });
    if (g.examples.length < 2) c.err(where, "needs at least 2 examples");
    g.examples.forEach((e, k) => c.tri(`${where}.examples[${k}]`, e));
    (g.tables ?? []).forEach((t, k) => {
      c.bi(`${where}.tables[${k}].caption`, t.caption);
      if (t.head.length === 0) c.err(`${where}.tables[${k}]`, "empty head");
      t.rows.forEach((row, r) => {
        if (row.length !== t.head.length) c.err(`${where}.tables[${k}].rows[${r}]`, `has ${row.length} cells; head has ${t.head.length}`);
        row.forEach((cell) => c.stress(`${where}.tables[${k}].rows[${r}]`, cell));
      });
      t.head.forEach((cell) => c.stress(`${where}.tables[${k}].head`, cell));
    });
  });

  if (d.kind === "lesson" && !d.dialogue) c.err(at, "a lesson needs a dialogue");
  if (d.kind === "immersion" && !d.dialogue) c.err(at, "an immersion day needs a listening story (dialogue)");
  if (d.dialogue) {
    const where = `${at} dialogue`;
    const minLines = d.kind === "immersion" ? 10 : 6;
    c.tri(`${where}.title`, d.dialogue.title);
    c.bi(`${where}.setting`, d.dialogue.setting);
    if (d.dialogue.lines.length < minLines) c.err(where, `needs at least ${minLines} lines`);
    d.dialogue.lines.forEach((l, i) => {
      if (l.who !== "A" && l.who !== "B") c.err(`${where}.lines[${i}]`, "who must be A or B");
      if (c.text(`${where}.lines[${i}].name`, l.name)) c.stress(`${where}.lines[${i}].name`, l.name);
      c.tri(`${where}.lines[${i}]`, l);
    });
  }

  if (d.pronunciation) {
    const p = d.pronunciation;
    const where = `${at} pronunciation`;
    c.bi(`${where}.title`, p.title);
    if (p.en.length === 0 || p.ar.length === 0) c.err(where, "needs paragraphs in en and ar");
    p.en.forEach((t, k) => c.stress(`${where}.en[${k}]`, t));
    p.ar.forEach((t, k) => c.stress(`${where}.ar[${k}]`, t));
    if (p.drills.length < 3) c.err(where, "needs at least 3 drills");
    p.drills.forEach((dr, k) => {
      if (c.text(`${where}.drills[${k}].ru`, dr.ru)) c.stress(`${where}.drills[${k}].ru`, dr.ru);
      c.say(`${where}.drills[${k}].say`, dr.ru, dr.say);
      c.bi(`${where}.drills[${k}].focus`, dr.focus);
    });
  }

  const minEx = d.kind === "lesson" ? 8 : d.kind === "immersion" ? 4 : 0;
  if (d.exercises.length < minEx) c.err(at, `has ${d.exercises.length} exercises; needs at least ${minEx}`);
  if (d.kind === "lesson" && new Set(d.exercises.map((e) => e.kind)).size < 3) c.err(at, "a lesson needs at least 3 exercise kinds");
  d.exercises.forEach((e, i) => checkExercise(c, `${at} exercises[${i}]`, e));

  if (d.topics.length === 0) c.err(at, "needs at least one topic");
  d.topics.forEach((t) => {
    if (!TOPIC_SET.has(t)) c.err(at, `unknown topic "${t}"`);
    else if (opts.mediaTopics && !opts.mediaTopics.has(t)) c.warn(at, `topic "${t}" has no media yet`);
  });
  if (d.search.length === 0 || d.search.some((s) => s.trim() === "")) c.err(at, "needs at least one search query");

  c.bi(`${at} speaking.scenario`, d.speaking.scenario);
  if (d.speaking.tutorBrief.trim().length < 80) c.err(at, "speaking.tutorBrief is too short (80+ characters)");
  if (d.speaking.prompts.length < 3) c.err(at, "speaking needs at least 3 prompts");
  d.speaking.prompts.forEach((p, i) => c.tri(`${at} speaking.prompts[${i}]`, p));
  c.bi(`${at} journal`, d.journal);
  if (d.culture) c.bi(`${at} culture`, d.culture);

  if (d.kind === "immersion") {
    if (!d.worksheet) c.err(at, "an immersion day needs a worksheet");
    else {
      if (d.worksheet.before.length === 0) c.err(at, "worksheet needs tips before watching");
      d.worksheet.before.forEach((b, i) => c.bi(`${at} worksheet.before[${i}]`, b));
      if (d.worksheet.questions.length < 4) c.err(at, "worksheet needs at least 4 questions");
      d.worksheet.questions.forEach((q, i) => checkExercise(c, `${at} worksheet.questions[${i}]`, q));
      c.bi(`${at} worksheet.retell`, d.worksheet.retell);
    }
  }
  if (d.kind === "review") {
    if (!d.test) c.err(at, "a review day needs a test");
    else {
      if (d.test.sections.length < 3) c.err(at, "test needs at least 3 sections");
      const items = d.test.sections.reduce((a, s) => a + s.items.length, 0);
      if (items < 15) c.err(at, `test has ${items} items; needs at least 15`);
      d.test.sections.forEach((s, i) => {
        c.bi(`${at} test.sections[${i}].title`, s.title);
        s.items.forEach((e, k) => checkExercise(c, `${at} test.sections[${i}].items[${k}]`, e));
      });
      if (d.test.speaking.length < 3) c.err(at, "test needs at least 3 speaking tasks");
      d.test.speaking.forEach((s, i) => c.bi(`${at} test.speaking[${i}]`, s));
    }
  }

  const planned = opts.syllabus?.find((s) => s.n === d.n);
  if (planned) {
    const have = new Set(d.words.map((w) => wordKey(w.ru)));
    const missing = planned.words.filter((w) => !have.has(wordKey(w)));
    if (missing.length) c.warn(at, `syllabus words not taught: ${missing.join(", ")}`);
    if (stripStress(planned.title.ru) !== stripStress(d.title.ru)) c.warn(at, `title differs from the syllabus ("${planned.title.ru}")`);
  }
}

export function validateDays(days: readonly Day[], opts: ValidateOptions): ValidationResult {
  const c = new Collector();
  const seen = new Map<string, number>();
  // Words from other weeks that come earlier claim their key first, so a later duplicate is the one reported.
  for (const other of opts.otherDays ?? []) {
    for (const w of other.words) {
      const key = wordKey(w.ru);
      const prev = seen.get(key);
      if (prev === undefined || other.n < prev) seen.set(key, other.n);
    }
  }
  const sorted = [...days].sort((a, b) => a.n - b.n);
  const numbers = sorted.map((d) => d.n);
  if (new Set(numbers).size !== numbers.length) c.err("course", "a day number appears twice");
  for (const d of sorted) {
    // A day in this run must win over a later day from another week.
    for (const w of d.words) {
      const key = wordKey(w.ru);
      if ((seen.get(key) ?? Infinity) > d.n) seen.delete(key);
    }
    checkDay(c, d, seen, opts);
  }
  if (opts.full) {
    for (let n = 1; n <= COURSE_DAYS; n++) if (!numbers.includes(n)) c.err("course", `day ${n} is missing`);
  }
  const unique = new Set(sorted.flatMap((d) => d.words.map((w) => wordKey(w.ru)))).size;
  if (opts.full && unique < MIN_UNIQUE_WORDS) c.err("course", `${unique} unique words; needs at least ${MIN_UNIQUE_WORDS}`);
  return { days: sorted.length, errors: c.errors, warnings: c.warnings, words: unique };
}
