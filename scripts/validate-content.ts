// Validate course content.
//   node scripts/validate-content.ts            whole course; last line: CONTENT days=.. errors=.. words=.. warnings=..
//   node scripts/validate-content.ts --week 3   one week; last line: WEEK 3 days=.. errors=.. words=.. warnings=..
//   add --quiet to print only the summary line.

import { COURSE } from "../src/content/index.ts";
import { MEDIA } from "../src/content/media.ts";
import { SYLLABUS } from "../src/content/syllabus.ts";
import { validateDays, weekOf } from "../src/core/validate.ts";

const args = process.argv.slice(2);
const quiet = args.includes("--quiet");
const weekIdx = args.indexOf("--week");
const week = weekIdx >= 0 ? Number(args[weekIdx + 1]) : null;

function report(errors: string[], warnings: string[]): void {
  if (quiet) return;
  for (const e of errors.slice(0, 300)) console.log(`ERROR ${e}`);
  if (errors.length > 300) console.log(`ERROR ... and ${errors.length - 300} more`);
  for (const w of warnings.slice(0, 150)) console.log(`WARN  ${w}`);
  if (warnings.length > 150) console.log(`WARN  ... and ${warnings.length - 150} more`);
}

if (week !== null) {
  if (!Number.isInteger(week) || week < 1 || week > 8) {
    console.log(`WEEK ${String(args[weekIdx + 1])} days=0 errors=1 words=0 warnings=0 (week must be 1-8)`);
    process.exit(2);
  }
  const days = COURSE.filter((d) => weekOf(d.n) === week);
  const others = COURSE.filter((d) => weekOf(d.n) !== week);
  const r = validateDays(days, { full: false, syllabus: SYLLABUS, otherDays: others });
  const errors = [...r.errors];
  if (days.length !== 7) errors.push(`week ${week}: has ${days.length} days; needs 7`);
  report(errors, r.warnings);
  console.log(`WEEK ${week} days=${r.days} errors=${errors.length} words=${r.words} warnings=${r.warnings.length}`);
  process.exitCode = errors.length ? 1 : 0;
} else {
  const mediaTopics = new Set(MEDIA.flatMap((m) => m.topics));
  const r = validateDays(COURSE, { full: true, syllabus: SYLLABUS, mediaTopics });
  report(r.errors, r.warnings);
  console.log(`CONTENT days=${r.days} errors=${r.errors.length} words=${r.words} warnings=${r.warnings.length}`);
  process.exitCode = r.errors.length ? 1 : 0;
}
