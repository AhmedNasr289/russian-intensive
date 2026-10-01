// Search over the course: words by their Russian, English or Arabic, and screens by name, keyword
// or day number. Matching forgives what learners leave out: stress marks, the dots of ё, Arabic
// short vowels and the spelling variants of alef, ya and ta marbuta.

import type { Bi, Word } from "../content/types.ts";
import { allDays } from "./course.ts";
import { hasArabic, hasCyrillic, stripStress } from "./text.ts";

const ARABIC_DIGITS = /[٠-٩۰-۹]/g;
const toAsciiDigits = (s: string): string => s.replace(ARABIC_DIGITS, (d) => String((d.codePointAt(0) ?? 0) % 16));

export function normalizeRu(s: string): string {
  return stripStress(s)
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeEn(s: string): string {
  return s.toLowerCase().replace(/\s+/g, " ").trim();
}

export function normalizeAr(s: string): string {
  return toAsciiDigits(s)
    .replace(/[ً-ْٰـ]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/\s+/g, " ")
    .trim();
}

type Lang = "ru" | "en" | "ar";

const langOf = (q: string): Lang => (hasCyrillic(q) ? "ru" : hasArabic(q) ? "ar" : "en");
const normalizeFor = (lang: Lang, s: string): string => (lang === "ru" ? normalizeRu(s) : lang === "ar" ? normalizeAr(s) : normalizeEn(s));

/** The separate meanings of a field: "hi, hello (informal)" → ["hi", "hello"]. */
function partsOf(field: string): string[] {
  return field
    .replace(/\([^)]*\)/g, " ")
    .split(/[,;/،؛]/)
    .map((p) => p.replace(/[^\p{L}\p{N}\s'-]/gu, " ").replace(/\s+/g, " ").trim())
    .filter((p) => p !== "");
}

type Field = { text: string; parts: string[] };
const field = (text: string): Field => ({ text, parts: partsOf(text) });

/** 100 exact, 95 one listed meaning exactly, 80 prefix, 75 a meaning's prefix, 60 a word's start, 40 inside. */
function matchScore(f: Field, q: string): number {
  if (f.text === q) return 100;
  if (f.parts.includes(q)) return 95;
  if (f.text.startsWith(q)) return 80;
  if (f.parts.some((p) => p.startsWith(q))) return 75;
  if (q.length < 2) return 0;
  if (new RegExp(`(^|[^\\p{L}\\p{N}])${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "u").test(f.text)) return 60;
  return f.text.includes(q) ? 40 : 0;
}

type Indexed = { word: Word; day: number; ru: Field; en: Field; ar: Field };
const indexes = new WeakMap<readonly Word[], Indexed[]>();

function indexOf(words: readonly Word[]): Indexed[] {
  let index = indexes.get(words);
  if (!index) {
    index = words.map((word) => ({ word, day: dayOfWordId(word.id), ru: field(normalizeRu(word.ru)), en: field(normalizeEn(word.en)), ar: field(normalizeAr(word.ar)) }));
    indexes.set(words, index);
  }
  return index;
}

const COURSE_WORDS: readonly Word[] = allDays().flatMap((d) => d.words);

export type WordHit = { word: Word; day: number; score: number };

/** Course words matching the query, best first (then shorter, then earlier in the course). */
export function searchWords(query: string, limit = 8, words: readonly Word[] = COURSE_WORDS): WordHit[] {
  const lang = langOf(query);
  const q = normalizeFor(lang, query);
  if (q === "") return [];
  const hits: Array<WordHit & { len: number }> = [];
  for (const entry of indexOf(words)) {
    const f = entry[lang];
    const score = matchScore(f, q);
    if (score === 0 || (q.length < 2 && score < 95)) continue;
    hits.push({ word: entry.word, day: entry.day, score, len: f.text.length });
  }
  hits.sort((a, b) => b.score - a.score || a.len - b.len || a.day - b.day || a.word.id.localeCompare(b.word.id, "en", { numeric: true }));
  return hits.slice(0, limit).map(({ word, day, score }) => ({ word, day, score }));
}

// ── Screens ──────────────────────────────────────────────────────────────────

export type ScreenHit = { token: string; title: Bi; score: number };

type Screen = { token: string; title: Bi; keys: string[] };

const SCREENS: readonly Screen[] = [
  { token: "today", title: { en: "Today", ar: "اليوم" }, keys: ["home", "plan", "schedule", "сегодня"] },
  { token: "course", title: { en: "Course", ar: "الدورة" }, keys: ["days", "lessons", "syllabus", "calendar", "الدروس", "курс"] },
  { token: "review", title: { en: "Review cards", ar: "مراجعة البطاقات" }, keys: ["review", "flashcards", "cards", "deck", "srs", "المراجعة", "بطاقات"] },
  { token: "weak", title: { en: "Weak words", ar: "الكلمات الضعيفة" }, keys: ["mistakes", "errors", "drill", "difficult", "أخطاء", "تدريب"] },
  { token: "alphabet", title: { en: "Alphabet", ar: "الأبجدية" }, keys: ["letters", "cyrillic", "abc", "الحروف", "алфавит"] },
  { token: "pronounce", title: { en: "Pronounce", ar: "النطق" }, keys: ["speak", "pronunciation", "listen", "say", "read aloud", "استماع", "произношение"] },
  { token: "progress", title: { en: "Progress", ar: "التقدّم" }, keys: ["stats", "statistics", "streak", "forecast", "charts", "الإحصاءات"] },
  { token: "library", title: { en: "Library", ar: "المكتبة" }, keys: ["videos", "resources", "youtube", "books", "credits", "فيديو"] },
  { token: "settings", title: { en: "Settings", ar: "الإعدادات" }, keys: ["voice", "sound", "theme", "language", "start date", "backup", "export", "import", "الصوت"] },
  { token: "tutor", title: { en: "Tutor", ar: "المعلّم" }, keys: ["katya", "chat", "ai", "claude", "conversation", "المحادثة"] },
  { token: "tutor-roleplay", title: { en: "Tutor: role play", ar: "المعلّم: لعب الأدوار" }, keys: ["role play", "roleplay", "scene"] },
  { token: "tutor-explain", title: { en: "Tutor: explain", ar: "المعلّم: اشرح" }, keys: ["explain", "grammar question", "why"] },
  { token: "tutor-check", title: { en: "Tutor: check my Russian", ar: "المعلّم: صحّح لغتي" }, keys: ["check", "correct", "correction"] },
];

const DAY_SCREENS: readonly Screen[] = allDays().map((d) => ({
  token: `day-${d.n}`,
  title: { en: `Day ${d.n} · ${d.title.en}`, ar: `اليوم ${d.n} · ${d.title.ar}` },
  keys: [d.title.en, d.title.ar, stripStress(d.title.ru)],
}));

const DAY_QUERY = /^(?:day|d|يوم|اليوم|день)?\s*(\d{1,2})$/;

function screenScore(screen: Screen, q: string, lang: Lang): number {
  const titles = lang === "ar" ? [screen.title.ar] : lang === "en" ? [screen.title.en] : [];
  let best = 0;
  for (const text of [...titles, ...screen.keys]) {
    if (langOf(text) !== lang) continue;
    best = Math.max(best, matchScore(field(normalizeFor(lang, text)), q));
  }
  return best;
}

/** Screens matching the query: "day 12" or "12" opens that day; names and keywords find the rest. */
export function searchScreens(query: string, limit = 6): ScreenHit[] {
  const plain = toAsciiDigits(query).toLowerCase().trim();
  const day = plain.match(DAY_QUERY);
  if (day) {
    const n = Number(day[1]);
    const screen = DAY_SCREENS.find((s) => s.token === `day-${n}`);
    return screen ? [{ token: screen.token, title: screen.title, score: 100 }] : [];
  }
  const lang = langOf(query);
  const q = normalizeFor(lang, query);
  if (q.length < 2) return [];
  return [...SCREENS, ...DAY_SCREENS]
    .map((s, i) => ({ s, i, score: screenScore(s, q, lang) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .slice(0, limit)
    .map(({ s, score }) => ({ token: s.token, title: s.title, score }));
}

// ── Words from text ──────────────────────────────────────────────────────────

/** The course word written exactly as `text` (ignoring stress, case, ё and punctuation), or null. */
export function lookupWord(text: string, words: readonly Word[] = COURSE_WORDS): Word | null {
  const q = normalizeRu(text);
  if (q === "") return null;
  return indexOf(words).find((e) => e.ru.text === q)?.word ?? null;
}

/** The course day a word id belongs to ("d12-07" → 12), or 0. */
export function dayOfWordId(id: string): number {
  const m = id.match(/^d(\d{1,2})-\d{2}$/);
  return m ? Number(m[1]) : 0;
}
