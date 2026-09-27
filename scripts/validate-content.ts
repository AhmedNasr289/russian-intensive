// Validate course content.
//   node scripts/validate-content.ts            whole course; last line: CONTENT days=.. errors=.. words=.. warnings=..
//   node scripts/validate-content.ts --week 3   one week; last line: WEEK 3 days=.. errors=.. words=.. warnings=..
//   add --quiet to print only the summary line.
//
// Each week file is loaded on its own, so a week that is mid-edit (and fails to load) only
// produces a warning for other weeks and an error for itself.

import { pathToFileURL } from "node:url";
import { join, resolve } from "node:path";
import type { Day } from "../src/content/types.ts";
import { MEDIA } from "../src/content/media.ts";
import { SYLLABUS } from "../src/content/syllabus.ts";
import { validateDays, weekOf } from "../src/core/validate.ts";

const ROOT = resolve(import.meta.dirname, "..");
const args = process.argv.slice(2);
const quiet = args.includes("--quiet");
const weekIdx = args.indexOf("--week");
const week = weekIdx >= 0 ? Number(args[weekIdx + 1]) : null;

type Loaded = { week: number; days: Day[]; error: string | null };

async function loadWeek(w: number): Promise<Loaded> {
  const file = join(ROOT, "src", "content", "weeks", `week${w}.ts`);
  try {
    const mod = (await import(pathToFileURL(file).href)) as Record<string, unknown>;
    const days = mod[`WEEK_${w}`];
    if (!Array.isArray(days)) return { week: w, days: [], error: `week${w}.ts does not export WEEK_${w} as an array` };
    return { week: w, days: days as Day[], error: null };
  } catch (e) {
    const msg = e instanceof Error ? e.message.split("\n")[0] ?? e.message : String(e);
    return { week: w, days: [], error: `week${w}.ts failed to load: ${msg}` };
  }
}

function report(errors: string[], warnings: string[]): void {
  if (quiet) return;
  for (const e of errors.slice(0, 300)) console.log(`ERROR ${e}`);
  if (errors.length > 300) console.log(`ERROR ... and ${errors.length - 300} more`);
  for (const w of warnings.slice(0, 150)) console.log(`WARN  ${w}`);
  if (warnings.length > 150) console.log(`WARN  ... and ${warnings.length - 150} more`);
}

const weeks = await Promise.all([1, 2, 3, 4, 5, 6, 7, 8].map(loadWeek));

if (week !== null) {
  if (!Number.isInteger(week) || week < 1 || week > 8) {
    console.log(`WEEK ${String(args[weekIdx + 1])} days=0 errors=1 words=0 warnings=0 (week must be 1-8)`);
    process.exit(2);
  }
  const mine = weeks.find((l) => l.week === week) as Loaded;
  const others = weeks.filter((l) => l.week !== week);
  const r = validateDays(mine.days, { full: false, syllabus: SYLLABUS, otherDays: others.flatMap((l) => l.days) });
  const errors = [...r.errors];
  const warnings = [...r.warnings];
  if (mine.error) errors.push(mine.error);
  for (const d of mine.days) if (weekOf(d.n) !== week) errors.push(`d${d.n}: does not belong to week ${week}`);
  if (mine.days.length !== 7) errors.push(`week ${week}: has ${mine.days.length} days; needs 7`);
  for (const o of others) if (o.error) warnings.push(`${o.error} (another author's file; duplicates against it were not checked)`);
  report(errors, warnings);
  console.log(`WEEK ${week} days=${r.days} errors=${errors.length} words=${r.words} warnings=${warnings.length}`);
  process.exitCode = errors.length ? 1 : 0;
} else {
  const all = weeks.flatMap((l) => l.days);
  const mediaTopics = new Set(MEDIA.flatMap((m) => m.topics));
  const r = validateDays(all, { full: true, syllabus: SYLLABUS, mediaTopics });
  const errors = [...r.errors, ...weeks.flatMap((l) => (l.error ? [l.error] : []))];
  report(errors, r.warnings);
  console.log(`CONTENT days=${r.days} errors=${errors.length} words=${r.words} warnings=${r.warnings.length}`);
  process.exitCode = errors.length ? 1 : 0;
}
