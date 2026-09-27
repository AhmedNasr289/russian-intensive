// The learner's saved state and every change to it, as pure functions (each returns a new object).

import { newCard, review } from "./srs.ts";
import type { CardState, Grade, Phase } from "./srs.ts";
import { STEP_PLAN, isoDate, validISODate, validTime } from "./schedule.ts";

export type ExplainLang = "en" | "ar" | "both";
export type Theme = "system" | "light" | "dark";

export type Settings = {
  startDate: string;
  morningStart: string;
  eveningStart: string;
  explain: ExplainLang;
  /** Show the pronunciation respelling under Russian words. */
  showSay: boolean;
  voiceURI: string | null;
  /** Speech rate, 0.5–1.5. */
  rate: number;
  sounds: boolean;
  theme: Theme;
  /** Speak each flashcard as it appears. */
  autoplay: boolean;
};

export type Score = { best: number; last: number; total: number; at: number };
export type JournalEntry = { day: number; at: number; text: string; corrected?: string; notes?: string };
export type ReviewDay = { n: number; again: number };

export type Progress = {
  version: 1;
  settings: Settings;
  cards: Record<string, CardState>;
  /** "d12" → when that day's words entered the deck. */
  introduced: Record<string, number>;
  /** "d12" → completed step ids. */
  steps: Record<string, string[]>;
  scores: Record<string, Score>;
  tests: Record<string, Score>;
  journal: JournalEntry[];
  streak: { current: number; best: number; lastDay: string };
  /** ISO date → minutes studied (from completed steps). */
  studyLog: Record<string, number>;
  /** ISO date → cards reviewed and how many were "Again". */
  reviewLog: Record<string, ReviewDay>;
  updatedAt: number;
};

export const DEFAULT_START = "2026-09-28";
export const JOURNAL_LIMIT = 60;
export const JOURNAL_TEXT_LIMIT = 4000;
export const MATURE_DAYS = 21;

export function defaultSettings(): Settings {
  return {
    startDate: DEFAULT_START,
    morningStart: "07:00",
    eveningStart: "20:00",
    explain: "both",
    showSay: true,
    voiceURI: null,
    rate: 0.9,
    sounds: true,
    theme: "system",
    autoplay: true,
  };
}

export function defaultProgress(now: number): Progress {
  return {
    version: 1,
    settings: defaultSettings(),
    cards: {},
    introduced: {},
    steps: {},
    scores: {},
    tests: {},
    journal: [],
    streak: { current: 0, best: 0, lastDay: "" },
    studyLog: {},
    reviewLog: {},
    updatedAt: now,
  };
}

const today = (now: number): string => isoDate(new Date(now));
const dayKey = (n: number): string => `d${n}`;

function previousISO(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const t = new Date(Date.UTC(y ?? 1970, (m ?? 1) - 1, (d ?? 1) - 1));
  return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`;
}

export function touchStreak(p: Progress, isoToday: string): Progress {
  const { lastDay, current, best } = p.streak;
  if (lastDay === isoToday) return p;
  const next = lastDay !== "" && previousISO(isoToday) === lastDay ? current + 1 : 1;
  return { ...p, streak: { current: next, best: Math.max(best, next), lastDay: isoToday } };
}

export function toggleStep(p: Progress, day: number, stepId: string, now: number): Progress {
  const key = dayKey(day);
  const done = p.steps[key] ?? [];
  const minutes = STEP_PLAN.find((s) => s.id === stepId)?.minutes ?? 0;
  const date = today(now);
  const logged = p.studyLog[date] ?? 0;
  if (done.includes(stepId)) {
    return {
      ...p,
      steps: { ...p.steps, [key]: done.filter((s) => s !== stepId) },
      studyLog: { ...p.studyLog, [date]: Math.max(0, logged - minutes) },
      updatedAt: now,
    };
  }
  const added: Progress = {
    ...p,
    steps: { ...p.steps, [key]: [...done, stepId] },
    studyLog: { ...p.studyLog, [date]: logged + minutes },
    updatedAt: now,
  };
  return touchStreak(added, date);
}

export function introduceDay(p: Progress, day: number, wordIds: readonly string[], now: number): Progress {
  const cards = { ...p.cards };
  let added = 0;
  for (const id of wordIds) {
    if (!cards[id]) {
      cards[id] = newCard(id, now);
      added++;
    }
  }
  const key = dayKey(day);
  if (added === 0 && p.introduced[key] !== undefined) return p;
  return { ...p, cards, introduced: { ...p.introduced, [key]: p.introduced[key] ?? now }, updatedAt: now };
}

export function applyReview(p: Progress, cardId: string, grade: Grade, now: number): Progress {
  const card = p.cards[cardId];
  if (!card) return p;
  const date = today(now);
  const log = p.reviewLog[date] ?? { n: 0, again: 0 };
  const next: Progress = {
    ...p,
    cards: { ...p.cards, [cardId]: review(card, grade, now) },
    reviewLog: { ...p.reviewLog, [date]: { n: log.n + 1, again: log.again + (grade === 0 ? 1 : 0) } },
    updatedAt: now,
  };
  return touchStreak(next, date);
}

export function recordScore(p: Progress, key: string, value: number, now: number): Progress {
  const v = Math.max(0, Math.min(1, value));
  const prev = p.scores[key];
  const score: Score = { best: Math.max(prev?.best ?? 0, v), last: v, total: (prev?.total ?? 0) + 1, at: now };
  return { ...p, scores: { ...p.scores, [key]: score }, updatedAt: now };
}

export function recordTest(p: Progress, day: number, value: number, now: number): Progress {
  const key = dayKey(day);
  const v = Math.max(0, Math.min(1, value));
  const prev = p.tests[key];
  const score: Score = { best: Math.max(prev?.best ?? 0, v), last: v, total: (prev?.total ?? 0) + 1, at: now };
  return touchStreak({ ...p, tests: { ...p.tests, [key]: score }, updatedAt: now }, today(now));
}

export function addJournal(p: Progress, entry: JournalEntry): Progress {
  const clean: JournalEntry = { day: entry.day, at: entry.at, text: entry.text.slice(0, JOURNAL_TEXT_LIMIT) };
  if (entry.corrected !== undefined) clean.corrected = entry.corrected.slice(0, JOURNAL_TEXT_LIMIT);
  if (entry.notes !== undefined) clean.notes = entry.notes.slice(0, JOURNAL_TEXT_LIMIT);
  const journal = [...p.journal, clean].slice(-JOURNAL_LIMIT);
  return { ...p, journal, updatedAt: entry.at };
}

const PHASE_ORDER: Record<Phase, number> = { relearning: 0, learning: 1, review: 2, new: 3 };

/** Cards due now: learning cards first, then reviews, then new cards; ties by due time, then id. */
export function dueCards(p: Progress, now: number): CardState[] {
  return Object.values(p.cards)
    .filter((c) => c.due <= now)
    .sort((a, b) => PHASE_ORDER[a.phase] - PHASE_ORDER[b.phase] || a.due - b.due || a.id.localeCompare(b.id));
}

export type DeckStats = { total: number; fresh: number; learning: number; young: number; mature: number; dueNow: number };

export function deckStats(p: Progress, now: number): DeckStats {
  const cards = Object.values(p.cards);
  return {
    total: cards.length,
    fresh: cards.filter((c) => c.phase === "new").length,
    learning: cards.filter((c) => c.phase === "learning" || c.phase === "relearning").length,
    young: cards.filter((c) => c.phase === "review" && c.interval < MATURE_DAYS).length,
    mature: cards.filter((c) => c.phase === "review" && c.interval >= MATURE_DAYS).length,
    dueNow: cards.filter((c) => c.due <= now).length,
  };
}

/** Share of reviews not graded "Again" over the last `days` days, or null when there were none. */
export function retention(p: Progress, days: number, isoToday: string): number | null {
  let n = 0;
  let again = 0;
  let date = isoToday;
  for (let i = 0; i < days; i++) {
    const log = p.reviewLog[date];
    if (log) {
      n += log.n;
      again += log.again;
    }
    date = previousISO(date);
  }
  return n === 0 ? null : (n - again) / n;
}

// ── Validation of loaded or imported data ─────────────────────────────────────

export type ValidationOutcome = { ok: true; value: Progress } | { ok: false; error: string };

const isObj = (x: unknown): x is Record<string, unknown> => typeof x === "object" && x !== null && !Array.isArray(x);
const isNum = (x: unknown): x is number => typeof x === "number" && Number.isFinite(x);
const PHASES: ReadonlySet<string> = new Set(["new", "learning", "review", "relearning"]);

class Invalid extends Error {}
const fail = (msg: string): never => {
  throw new Invalid(msg);
};

function readSettings(x: unknown): Settings {
  if (!isObj(x)) return fail("settings are missing");
  const s = defaultSettings();
  const str = (k: "startDate" | "morningStart" | "eveningStart", ok: (v: string) => boolean) => {
    if (x[k] === undefined) return;
    if (typeof x[k] !== "string" || !ok(x[k])) fail(`settings.${k} is not valid`);
    s[k] = x[k] as string;
  };
  str("startDate", validISODate);
  str("morningStart", validTime);
  str("eveningStart", validTime);
  if (x["explain"] !== undefined) {
    if (x["explain"] !== "en" && x["explain"] !== "ar" && x["explain"] !== "both") fail("settings.explain is not valid");
    s.explain = x["explain"] as ExplainLang;
  }
  if (x["theme"] !== undefined) {
    if (x["theme"] !== "system" && x["theme"] !== "light" && x["theme"] !== "dark") fail("settings.theme is not valid");
    s.theme = x["theme"] as Theme;
  }
  if (x["voiceURI"] !== undefined) {
    if (x["voiceURI"] !== null && typeof x["voiceURI"] !== "string") fail("settings.voiceURI is not valid");
    s.voiceURI = x["voiceURI"] as string | null;
  }
  if (x["rate"] !== undefined) {
    if (!isNum(x["rate"]) || x["rate"] < 0.5 || x["rate"] > 1.5) fail("settings.rate is not valid");
    s.rate = x["rate"] as number;
  }
  for (const k of ["showSay", "sounds", "autoplay"] as const) {
    if (x[k] === undefined) continue;
    if (typeof x[k] !== "boolean") fail(`settings.${k} is not valid`);
    s[k] = x[k] as boolean;
  }
  return s;
}

function readRecord<T>(x: unknown, name: string, read: (v: unknown, key: string) => T): Record<string, T> {
  if (x === undefined) return {};
  if (!isObj(x)) return fail(`${name} is not an object`);
  const out: Record<string, T> = {};
  for (const [k, v] of Object.entries(x)) out[k] = read(v, k);
  return out;
}

function readCard(v: unknown, key: string): CardState {
  if (!isObj(v) || typeof v["id"] !== "string" || typeof v["phase"] !== "string" || !PHASES.has(v["phase"])) return fail(`card ${key} is malformed`);
  for (const f of ["step", "ease", "interval", "due", "reps", "lapses"]) if (!isNum(v[f])) fail(`card ${key} is malformed (${f})`);
  const card: CardState = {
    id: v["id"],
    phase: v["phase"] as Phase,
    step: v["step"] as number,
    ease: v["ease"] as number,
    interval: v["interval"] as number,
    due: v["due"] as number,
    reps: v["reps"] as number,
    lapses: v["lapses"] as number,
  };
  if (isNum(v["last"])) card.last = v["last"];
  return card;
}

function readScore(v: unknown, key: string): Score {
  if (!isObj(v) || !isNum(v["best"]) || !isNum(v["last"]) || !isNum(v["total"]) || !isNum(v["at"])) return fail(`score ${key} is malformed`);
  return { best: v["best"], last: v["last"], total: v["total"], at: v["at"] };
}

function readJournal(x: unknown): JournalEntry[] {
  if (x === undefined) return [];
  if (!Array.isArray(x)) return fail("journal is not a list");
  return x.map((e, i) => {
    if (!isObj(e) || !isNum(e["day"]) || !isNum(e["at"]) || typeof e["text"] !== "string") return fail(`journal entry ${i} is malformed`);
    const entry: JournalEntry = { day: e["day"], at: e["at"], text: e["text"] };
    if (typeof e["corrected"] === "string") entry.corrected = e["corrected"];
    if (typeof e["notes"] === "string") entry.notes = e["notes"];
    return entry;
  }).slice(-JOURNAL_LIMIT);
}

export function validateProgress(x: unknown): ValidationOutcome {
  try {
    if (!isObj(x)) return fail("the file does not contain a progress object");
    if (x["version"] !== 1) return fail(`unsupported progress version ${String(x["version"])}`);
    const streak = x["streak"];
    const value: Progress = {
      version: 1,
      settings: readSettings(x["settings"]),
      cards: readRecord(x["cards"], "cards", readCard),
      introduced: readRecord(x["introduced"], "introduced", (v, k) => (isNum(v) ? v : fail(`introduced.${k} is not a time`))),
      steps: readRecord(x["steps"], "steps", (v, k) =>
        Array.isArray(v) && v.every((s) => typeof s === "string") ? (v as string[]) : fail(`steps.${k} is not a list of step ids`),
      ),
      scores: readRecord(x["scores"], "scores", readScore),
      tests: readRecord(x["tests"], "tests", readScore),
      journal: readJournal(x["journal"]),
      streak:
        streak === undefined
          ? { current: 0, best: 0, lastDay: "" }
          : isObj(streak) && isNum(streak["current"]) && isNum(streak["best"]) && typeof streak["lastDay"] === "string"
            ? { current: streak["current"], best: streak["best"], lastDay: streak["lastDay"] }
            : fail("streak is malformed"),
      studyLog: readRecord(x["studyLog"], "studyLog", (v, k) => (isNum(v) ? v : fail(`studyLog.${k} is not a number`))),
      reviewLog: readRecord(x["reviewLog"], "reviewLog", (v, k) =>
        isObj(v) && isNum(v["n"]) && isNum(v["again"]) ? { n: v["n"], again: v["again"] } : fail(`reviewLog.${k} is malformed`),
      ),
      updatedAt: isNum(x["updatedAt"]) ? x["updatedAt"] : 0,
    };
    return { ok: true, value };
  } catch (e) {
    if (e instanceof Invalid) return { ok: false, error: e.message };
    throw e;
  }
}
