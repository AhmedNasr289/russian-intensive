// Prints the course vocabulary: everything up to a day, or one day, as Markdown or as TSV for
// flashcard apps such as Anki (Russian, English, Arabic, day).
// Usage: node scripts/vocab.ts --upto <n> | --day <n> [--tsv]

import { getDay, wordsUpTo } from "../src/core/course.ts";
import { COURSE_DAYS } from "../src/core/schedule.ts";
import type { Word } from "../src/content/types.ts";

function arg(name: string): string | null {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? (process.argv[i + 1] ?? null) : null;
}

const dayOf = (w: Word): number => Number(w.id.slice(1, w.id.indexOf("-")));

function main(): void {
  const one = arg("day");
  const upto = Number(arg("upto") ?? COURSE_DAYS);
  const n = one === null ? upto : Number(one);
  if (!Number.isInteger(n) || n < 1 || n > COURSE_DAYS) {
    console.log(`Use --upto <1-${COURSE_DAYS}> or --day <1-${COURSE_DAYS}>.`);
    process.exitCode = 1;
    return;
  }
  const words = one === null ? wordsUpTo(n) : (getDay(n)?.words ?? []);
  if (process.argv.includes("--tsv")) {
    for (const w of words) console.log([w.ru, w.en, w.ar, `day ${dayOf(w)}`].map((s) => s.replace(/[\t\n]/g, " ")).join("\t"));
    return;
  }
  let current = 0;
  for (const w of words) {
    const d = dayOf(w);
    if (d !== current) {
      current = d;
      console.log(`\n## Day ${d}: ${getDay(d)?.title.ru ?? ""}`);
    }
    console.log(`- ${w.ru} (${w.say}) — ${w.en} — ${w.ar}`);
  }
  console.log(`\n${words.length} words and phrases${one === null ? ` from day 1 to day ${n}` : ` on day ${n}`}.`);
}

main();
