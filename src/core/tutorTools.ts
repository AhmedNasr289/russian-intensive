// The tutor's page tools: what Katya may read and do in the app when claude.ai lets the page offer
// tools. Each tool is a plain executor over a small host, so it is testable without a browser.
// Anything that changes progress is undoable; anything that would move the learner is only OFFERED
// as a button the learner taps.

import type { Bi } from "../content/types.ts";
import { findWord, getDay, levelOf } from "./course.ts";
import { missedDays } from "./coach.ts";
import { addCards, deckStats, recordHit, recordMiss, removeNewCards } from "./progress.ts";
import type { Progress } from "./progress.ts";
import { COURSE_DAYS, dayNumber } from "./schedule.ts";
import { dayOfWordId, lookupWord, searchWords } from "./search.ts";
import { weakWords } from "./weak.ts";

export type Offer = { kind: "screen"; token: string; label: string } | { kind: "drill" };

/** A line in the chat saying what a tool did, with an undo when the change can be taken back. */
export type ToolLog = { tool: string; text: Bi; undo?: () => void };

export type ToolHost = {
  progress(): Progress;
  update(fn: (p: Progress) => Progress): void;
  now(): number;
  /** Show a button in the chat; nothing happens until the learner taps it. */
  offer(o: Offer): void;
  log(line: ToolLog): void;
  /** True for a route token the app can open (`day-4-grammar`, `review`, `word-d2-04`…). */
  validRoute(token: string): boolean;
};

type Schema = { type: "object"; properties?: Record<string, unknown>; required?: string[] };
export type TutorTool = { name: string; description: string; inputSchema?: Schema; run(input: Record<string, unknown>, host: ToolHost): unknown };

export const MAX_ADD = 10;

export type LearnerStatus = {
  day: number;
  title: string;
  level: string;
  due: number;
  deck: number;
  streak: number;
  stepsDone: number;
  weak: Array<{ id: string; ru: string; en: string; misses: number; lapses: number; hard: boolean }>;
  missedDays: number[];
};

export function learnerStatus(p: Progress, now: Date): LearnerStatus {
  const raw = dayNumber(p.settings.startDate, now);
  const day = Math.min(Math.max(raw, 1), COURSE_DAYS);
  const stats = deckStats(p, now.getTime());
  return {
    day: raw,
    title: getDay(day)?.title.en ?? "",
    level: levelOf(day),
    due: stats.dueNow,
    deck: stats.total,
    streak: p.streak.current,
    stepsDone: raw >= 1 && raw <= COURSE_DAYS ? (p.steps[`d${raw}`]?.length ?? 0) : 0,
    weak: weakWords(p, 5).map((w) => ({ id: w.word.id, ru: w.word.ru, en: w.word.en, misses: w.misses, lapses: w.lapses, hard: w.hard })),
    missedDays: raw >= 1 ? missedDays(p, raw) : [],
  };
}

/** The status as one paragraph for a prompt. */
export function statusText(s: LearnerStatus): string {
  const when = s.day < 1 ? "The course has not started yet." : s.day > COURSE_DAYS ? "The course is finished." : `Day ${s.day} of 56 (${s.title}), level ${s.level}; ${s.stepsDone} of 7 study steps done today.`;
  const weak = s.weak.length ? `Weak words: ${s.weak.map((w) => `${w.ru} (${w.en}${w.misses ? `, missed ${w.misses}x` : ""}${w.lapses ? `, forgotten ${w.lapses}x` : ""}${w.hard && !w.misses && !w.lapses ? ", graded hard" : ""})`).join("; ")}.` : "No weak words yet.";
  const missed = s.missedDays.length ? `Unfinished earlier days: ${s.missedDays.join(", ")}.` : "No unfinished earlier days.";
  return `${when} Cards due now: ${s.due} of ${s.deck} in the deck. Streak: ${s.streak} days. ${weak} ${missed}`;
}

const text = (x: unknown, name: string): string => {
  if (typeof x !== "string" || x.trim() === "") throw new Error(`"${name}" must be a non-empty string`);
  return x.trim();
};

function idsOf(x: unknown): string[] {
  const list = Array.isArray(x) ? x : typeof x === "string" && x.includes(",") ? x.split(",") : null;
  if (!list) throw new Error('"ids" must be a list of course word ids such as ["d4-01", "d4-02"]');
  return [...new Set(list.map((v) => String(v).trim()).filter((v) => v !== ""))];
}

/** A course word from an id ("d12-07") or its Russian (stress and case ignored). */
function resolveWord(x: unknown) {
  const s = typeof x === "string" ? x.trim() : "";
  const word = findWord(s) ?? lookupWord(s);
  if (!word) throw new Error(`"${String(x)}" is not a course word; use find_word first`);
  return word;
}

export const TUTOR_TOOLS: readonly TutorTool[] = [
  {
    name: "get_learner_status",
    description: "Returns the learner's current state: course day and level, cards due, deck size, streak, today's steps done, weakest words and unfinished earlier days.",
    run: (_input, host) => learnerStatus(host.progress(), new Date(host.now())),
  },
  {
    name: "find_word",
    description: "Searches the course vocabulary (Russian with or without stress, English or Arabic). Returns up to 5 words with id, ru, en, ar, the day that teaches it and whether it is in the learner's review deck.",
    inputSchema: { type: "object", properties: { query: { type: "string", description: "A word or meaning to look up" } }, required: ["query"] },
    run: (input, host) => {
      const q = text(input["query"], "query");
      const cards = host.progress().cards;
      return searchWords(q, 5).map((hit) => ({ id: hit.word.id, ru: hit.word.ru, en: hit.word.en, ar: hit.word.ar, day: hit.day, inDeck: cards[hit.word.id] !== undefined }));
    },
  },
  {
    name: "add_words_to_deck",
    description: `Adds course words (by id, from find_word) to the learner's flashcard deck, at most ${MAX_ADD} per call. Use only when the learner wants them. Returns which were added, already in the deck, or unknown. The learner can undo it.`,
    inputSchema: { type: "object", properties: { ids: { type: "array", items: { type: "string" }, description: 'Course word ids, e.g. ["d4-01"]' } }, required: ["ids"] },
    run: (input, host) => {
      const ids = idsOf(input["ids"]);
      const cards = host.progress().cards;
      const unknown = ids.filter((id) => !findWord(id));
      const alreadyIn = ids.filter((id) => findWord(id) && cards[id]);
      const fresh = ids.filter((id) => findWord(id) && !cards[id]);
      const added = fresh.slice(0, MAX_ADD);
      if (added.length) {
        host.update((p) => addCards(p, added, host.now()));
        const words = added.map((id) => findWord(id)?.ru ?? id).join(", ");
        host.log({
          tool: "add_words_to_deck",
          text: { en: `Added ${added.length} to your deck: ${words}`, ar: `أُضيفت ${added.length} إلى مجموعتك: ${words}` },
          undo: () => host.update((p) => removeNewCards(p, added, host.now())),
        });
      }
      return { added, alreadyIn, unknown, skipped: fresh.length - added.length };
    },
  },
  {
    name: "record_mistake",
    description: "Records that the learner got a course word wrong in this conversation, so it joins their weak-word drill. Pass the word id or the Russian word. Returns the word and its miss count.",
    inputSchema: { type: "object", properties: { word: { type: "string", description: "Course word id or the Russian word" }, note: { type: "string", description: "What went wrong, briefly" } }, required: ["word"] },
    run: (input, host) => {
      const word = resolveWord(input["word"]);
      host.update((p) => recordMiss(p, word.id, host.now()));
      const note = typeof input["note"] === "string" ? input["note"].slice(0, 120) : "";
      host.log({
        tool: "record_mistake",
        text: { en: `Noted a mistake on ${word.ru}${note ? ` (${note})` : ""}: it joins your weak words`, ar: `سُجّل خطأ في ${word.ru}${note ? ` (${note})` : ""}: أُضيفت إلى كلماتك الضعيفة` },
        undo: () => host.update((p) => recordHit(p, word.id, host.now())),
      });
      return { id: word.id, ru: word.ru, day: dayOfWordId(word.id), misses: host.progress().misses[word.id]?.n ?? 0 };
    },
  },
  {
    name: "suggest_screen",
    description: 'Offers the learner a button that opens a screen of the app; nothing moves until they tap it. Tokens: "today", "review", "weak", "progress", "alphabet", "pronounce", "day-N" or "day-N-SECTION" (SECTION: words, grammar, dialogue, practice, speak, watch, journal), "word-ID" (ID from find_word). Returns once offered.',
    inputSchema: { type: "object", properties: { token: { type: "string" }, label: { type: "string", description: "Short button text in the learner's language" } }, required: ["token", "label"] },
    run: (input, host) => {
      const token = text(input["token"], "token").replace(/^#/, "");
      if (!host.validRoute(token)) throw new Error(`"${token}" is not a screen of the app; see the token list in the description`);
      const label = text(input["label"], "label").slice(0, 60);
      host.offer({ kind: "screen", token, label });
      return "Offered. The learner decides whether to open it.";
    },
  },
  {
    name: "suggest_weak_drill",
    description: "Offers the learner a button for the weak-word drill (meaning and listening questions on the words they keep missing). Returns how many weak words there are.",
    run: (_input, host) => {
      host.offer({ kind: "drill" });
      return { weakWords: weakWords(host.progress(), 99).length };
    },
  },
];

/** The tools in the shape claude.ai's `sample({tools})` takes, bound to a host. */
export function sampleTools(host: ToolHost): Array<{ name: string; description: string; inputSchema?: Schema; execute(input: Record<string, unknown>, context: { signal: AbortSignal }): unknown }> {
  return TUTOR_TOOLS.map((t) => ({
    name: t.name,
    description: t.description,
    ...(t.inputSchema ? { inputSchema: t.inputSchema } : {}),
    execute: (input: Record<string, unknown>, context: { signal: AbortSignal }) => {
      if (context.signal.aborted) throw new Error("stopped by the learner");
      return t.run(typeof input === "object" && input !== null ? input : {}, host);
    },
  }));
}
