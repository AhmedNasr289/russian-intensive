// Prints one course day as Markdown, for reading in a terminal and for the Claude Code agents.
// Usage: node scripts/day.ts <n|today> [--start 2026-09-28] [--lang en|ar|both] [--brief]

import { getDay, levelOf, mediaFor } from "../src/core/course.ts";
import { DEFAULT_START } from "../src/core/progress.ts";
import { COURSE_DAYS, dateOfDay, dayNumber, validISODate } from "../src/core/schedule.ts";
import type { Bi, Day, Exercise } from "../src/content/types.ts";

type Lang = "en" | "ar" | "both";

function arg(name: string): string | null {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? (process.argv[i + 1] ?? null) : null;
}

const cell = (s: string) => s.replace(/\|/g, "\\|").replace(/\n/g, " ");

function bi(b: Bi, lang: Lang): string {
  if (lang === "en") return b.en;
  if (lang === "ar") return b.ar;
  return `${b.en}\n  ${b.ar}`;
}

function exercise(ex: Exercise, i: number): string {
  const head = `${i + 1}. ${ex.prompt.en}`;
  switch (ex.kind) {
    case "choice":
      return `${head}${ex.ru ? ` — ${ex.ru}` : ""}\n   Options: ${ex.options.map((o, k) => (k === ex.answer ? `**${o}**` : o)).join(" / ")}`;
    case "fill":
      return `${head}\n   ${ex.ru}  →  ${ex.answers.join(" | ")}`;
    case "order":
      return `${head}\n   ${ex.tokens.join(" · ")}  →  ${ex.answers[0] ?? ""}`;
    case "translate":
      return `${head}\n   →  ${ex.answers.join(" | ")}`;
  }
}

export function dayMarkdown(day: Day, opts: { start: string; lang: Lang; brief: boolean }): string {
  const { lang } = opts;
  const out: string[] = [];
  const date = new Date(`${dateOfDay(opts.start, day.n)}T12:00:00`);
  out.push(`# Day ${day.n} · Week ${day.week} · ${day.kind} — ${day.title.ru}`);
  out.push(`${day.title.en} · ${day.title.ar}`);
  out.push(`Level ${levelOf(day.n)} · ${date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} (course start ${opts.start})`);
  out.push("", "## Goals", ...day.goals.map((g) => `- ${bi(g, lang)}`));
  if (day.words.length) {
    out.push("", `## Words (${day.words.length})`, "", "| Russian | say | English | Arabic |", "|---|---|---|---|");
    for (const w of day.words) out.push(`| ${cell(w.ru)} | ${cell(w.say)} | ${cell(w.en)} | ${cell(w.ar)} |`);
  }
  if (opts.brief) return out.join("\n");

  for (const g of day.grammar) {
    out.push("", `## Grammar: ${g.title.en}`, ...(lang === "ar" ? g.ar : g.en));
    if (lang === "both") out.push(...g.ar);
    for (const t of g.tables ?? []) {
      out.push("", `**${t.caption.en}**`, "", `| ${t.head.map(cell).join(" | ")} |`, `|${t.head.map(() => "---").join("|")}|`, ...t.rows.map((r) => `| ${r.map(cell).join(" | ")} |`));
    }
    out.push("", ...g.examples.map((e) => `- ${e.ru} — ${e.en}`));
  }
  if (day.dialogue) {
    const d = day.dialogue;
    out.push("", `## Dialogue: ${d.title.ru} (${d.title.en})`, bi(d.setting, lang), "", ...d.lines.map((l) => `- **${l.name}:** ${l.ru} — ${l.en}`));
  }
  if (day.pronunciation) {
    const p = day.pronunciation;
    out.push("", `## Pronunciation: ${p.title.en}`, ...p.en, "", ...p.drills.map((d) => `- ${d.ru} (${d.say}) — ${d.focus.en}`));
  }
  if (day.exercises.length) out.push("", `## Exercises (${day.exercises.length})`, ...day.exercises.map(exercise));
  if (day.worksheet) {
    out.push("", "## Story worksheet", ...day.worksheet.before.map((b) => `- ${bi(b, lang)}`), ...day.worksheet.questions.map(exercise), `Retell: ${bi(day.worksheet.retell, lang)}`);
  }
  if (day.test) {
    for (const s of day.test.sections) out.push("", `## Test: ${s.title.en}`, ...s.items.map(exercise));
    out.push("", "## Oral exam", ...day.test.speaking.map((s) => `- ${bi(s, lang)}`));
  }
  out.push("", "## Speaking", bi(day.speaking.scenario, lang), "", `Tutor brief: ${day.speaking.tutorBrief}`, "", ...day.speaking.prompts.map((p) => `- ${p.ru} — ${p.en}`));
  out.push("", "## Journal task", bi(day.journal, lang));
  if (day.culture) out.push("", "## Culture", bi(day.culture, lang));
  const media = mediaFor(day);
  if (media.length) out.push("", "## Watch and listen", ...media.map((m) => `- ${m.title} (${m.by}, ${m.level}) — ${m.url}`));
  if (day.search.length) out.push("", "## Search YouTube for", ...day.search.map((q) => `- ${q}`));
  return out.join("\n");
}

function main(): void {
  const start = arg("start") ?? DEFAULT_START;
  if (!validISODate(start)) throw new Error(`--start must be YYYY-MM-DD, got ${start}`);
  const which = process.argv[2] ?? "today";
  const n = which === "today" ? dayNumber(start, new Date()) : Number(which);
  if (!Number.isInteger(n) || n < 1 || n > COURSE_DAYS) {
    console.log(n === 0 ? `The course starts on ${start}. Day 1 is next.` : n > COURSE_DAYS ? "The 56 days are complete." : `Day must be 1-${COURSE_DAYS} or "today".`);
    process.exitCode = n === 0 || n > COURSE_DAYS ? 0 : 1;
    return;
  }
  const day = getDay(n);
  if (!day) throw new Error(`Day ${n} is missing from the course`);
  const lang = (arg("lang") ?? "both") as Lang;
  console.log(dayMarkdown(day, { start, lang: lang === "en" || lang === "ar" ? lang : "both", brief: process.argv.includes("--brief") }));
}

if (process.argv[1]?.replace(/\\/g, "/").endsWith("scripts/day.ts")) main();
