// What the AI tutor is told. The same text powers the in-app tutor on claude.ai (sent as the
// standing first turn of each call) and the "copy prompt" button on GitHub Pages.

import type { Bi, Day, Word } from "../content/types.ts";
import type { ExplainLang } from "./progress.ts";
import { levelOf } from "./course.ts";

export type TutorMode = "coach" | "chat" | "roleplay" | "explain" | "check";

/** `status`: the learner's progress as one paragraph (see tutorTools.statusText). */
export type TutorContext = { day: Day; known: readonly Word[]; explain: ExplainLang; status?: string };

export const TUTOR_MODES: ReadonlyArray<{ id: TutorMode; title: Bi; hint: Bi }> = [
  { id: "coach", title: { en: "Coach me", ar: "درّبني" }, hint: { en: "Katya looks at your progress, plans your next step with you and drills your weak words.", ar: "تنظر كاتيا في تقدّمك وتخطّط معك خطوتك التالية وتدرّبك على كلماتك الضعيفة." } },
  { id: "roleplay", title: { en: "Role-play today's scene", ar: "تمثيل موقف اليوم" }, hint: { en: "The tutor plays a character from today's lesson.", ar: "يؤدّي المعلّم دور شخصية من درس اليوم." } },
  { id: "chat", title: { en: "Free conversation", ar: "محادثة حرّة" }, hint: { en: "Talk about anything, at your level.", ar: "تحدّث عن أي موضوع بمستواك." } },
  { id: "explain", title: { en: "Explain today's grammar", ar: "اشرح قواعد اليوم" }, hint: { en: "Ask about anything in today's lesson.", ar: "اسأل عن أي شيء في درس اليوم." } },
  { id: "check", title: { en: "Check my sentence", ar: "صحّح جملتي" }, hint: { en: "Write a sentence and get it corrected.", ar: "اكتب جملة لتُصحَّح لك." } },
];

const LANGUAGE_RULE: Record<ExplainLang, string> = {
  en: "Explain in English.",
  ar: "Explain in Modern Standard Arabic.",
  both: "Explain in English first, then give the same explanation in Modern Standard Arabic.",
};

function levelRule(n: number): string {
  const level = levelOf(n);
  if (level === "A0") return "The learner is an absolute beginner who is still learning the alphabet: use only single words and very short phrases in Russian, and explain everything else.";
  if (level === "A1") return "The learner is at A1: use short, simple sentences in Russian (one idea per sentence) and introduce at most one new word per reply.";
  return "The learner is at A2: speak mostly Russian in short sentences, recycle known vocabulary and gloss any new word.";
}

const wordLine = (w: Word): string => `${w.ru} = ${w.en}`;

/** Known vocabulary, most recent first, trimmed to a byte budget so any day fits in one call. */
export function knownVocabulary(known: readonly Word[], maxChars = 24_000): string {
  const out: string[] = [];
  let size = 0;
  for (let i = known.length - 1; i >= 0; i--) {
    const w = known[i];
    if (!w) continue;
    const line = wordLine(w);
    if (size + line.length + 2 > maxChars) break;
    out.push(line);
    size += line.length + 2;
  }
  return out.join("; ");
}

function modeRule(mode: TutorMode, day: Day): string {
  switch (mode) {
    case "coach":
      return [
        "COACH. You are the learner's study coach as well as their tutor. Start from the learner status: say in one or two sentences what matters most today (due cards, unfinished days, weak words, the next step) and why.",
        "Then run a short warm-up on their weakest words: ask about one word at a time in Russian, wait for the answer, correct it kindly.",
        "Keep every reply short. Offer a concrete next step at the end of each reply.",
      ].join("\n");
    case "roleplay":
      return [
        `ROLE-PLAY. Scenario: ${day.speaking.scenario.en}`,
        `Director's notes: ${day.speaking.tutorBrief}`,
        "Stay in character and speak Russian. Keep each reply to one to three short sentences and end with a question or a prompt so the learner answers.",
        "After about eight exchanges, step out of character and give feedback: two things done well and two things to improve.",
      ].join("\n");
    case "chat":
      return "FREE CONVERSATION. Ask one question at a time about the learner's life and today's topic. Speak Russian at the learner's level and keep replies short.";
    case "explain":
      return `EXPLAIN. The learner asks about today's lesson. Explain clearly with two or three short Russian examples, then check understanding with one quick question. Today's grammar: ${day.grammar.map((g) => g.title.en).join("; ") || "review of the week"}.`;
    case "check":
      return "CHECK. The learner sends Russian sentences. Reply with the corrected sentence (with stress marks), then a short list of what changed and why. If it is already correct, say so and offer a more natural alternative if there is one.";
  }
}

const TOOL_RULE = [
  "You can act in the learner's app with tools. Use them when they help, not to show off:",
  "get_learner_status for fresh numbers; find_word before talking about a word's id or day;",
  "record_mistake when the learner gets a course word wrong in this chat;",
  "add_words_to_deck only when the learner asks for words to be added;",
  "suggest_screen or suggest_weak_drill to offer a button for the next step (it opens nothing until they tap it).",
  "Never say you did something a tool did not confirm, and never invent word ids or screens.",
].join(" ");

/** The standing instructions for one tutor conversation. With `tools`, the page tools are offered too. */
export function buildTutorRules(ctx: TutorContext, mode: TutorMode, opts: { tools?: boolean } = {}): string {
  const { day } = ctx;
  const todays = day.words.map(wordLine).join("; ");
  return [
    "You are Katya (Катя), a warm, patient Russian tutor from Moscow. Your student is an Arabic-speaking adult from Egypt who also reads English, on an intensive 56-day course focused on speaking and understanding.",
    `Today is day ${day.n} of 56: "${day.title.en}" (${day.title.ru}).`,
    levelRule(day.n),
    LANGUAGE_RULE[ctx.explain],
    "Write Russian in Cyrillic with a stress mark (U+0301, e.g. молоко́) on every word of two or more syllables. Never use transliteration unless the learner asks.",
    "If you use a Russian word that is not in the known vocabulary below, add its meaning in brackets the first time.",
    "When the learner writes Russian with mistakes, first answer naturally, then add a line starting with 'Correction:' giving the corrected sentence and a one-line reason. Correct at most two things per reply; praise what is right.",
    "Plain text only: no tables, no emoji, no headings.",
    modeRule(mode, day),
    ctx.status ? `Learner status: ${ctx.status}` : "",
    opts.tools ? TOOL_RULE : "",
    `Today's new words: ${todays || "none (review day)"}.`,
    `Known vocabulary (most recent first): ${knownVocabulary(ctx.known)}.`,
  ]
    .filter((part) => part !== "")
    .join("\n\n");
}

export type ErrorType = "case" | "agreement" | "verb" | "aspect" | "spelling" | "word-choice" | "word-order" | "other";

export type JournalCorrection = {
  corrected: string;
  score: number;
  errors: Array<{ original: string; fix: string; type: ErrorType; en: string; ar: string }>;
  praise: Bi;
  next: Bi;
};

const ERROR_TYPES: ReadonlySet<string> = new Set(["case", "agreement", "verb", "aspect", "spelling", "word-choice", "word-order", "other"]);

/** The prompt that turns a journal entry into a structured correction (parsed with parseJournalCorrection). */
export function buildJournalPrompt(ctx: TutorContext, text: string): string {
  return [
    buildTutorRules(ctx, "check"),
    `Today's writing task: ${ctx.day.journal.en}`,
    "Correct the learner's journal entry below.",
    'Reply with ONLY a JSON object of this shape: {"corrected": string (the whole text corrected, natural Russian, with stress marks), "score": integer 0-10, "errors": [{"original": string, "fix": string, "type": one of "case" | "agreement" | "verb" | "aspect" | "spelling" | "word-choice" | "word-order" | "other", "en": string (one-sentence reason in English), "ar": string (the same reason in Arabic)}], "praise": {"en": string, "ar": string}, "next": {"en": string (one concrete thing to practise next), "ar": string}}.',
    "Ignore missing stress marks in the learner's text; they are not errors.",
    `Journal entry:\n${text.slice(0, 4000)}`,
  ].join("\n\n");
}

const isStr = (x: unknown): x is string => typeof x === "string";
const isBi = (x: unknown): x is Bi => typeof x === "object" && x !== null && isStr((x as Bi).en) && isStr((x as Bi).ar);

export function parseJournalCorrection(x: unknown): JournalCorrection | null {
  if (typeof x !== "object" || x === null) return null;
  const o = x as Record<string, unknown>;
  if (!isStr(o["corrected"]) || typeof o["score"] !== "number" || !Array.isArray(o["errors"]) || !isBi(o["praise"]) || !isBi(o["next"])) return null;
  const errors: JournalCorrection["errors"] = [];
  for (const e of o["errors"]) {
    if (typeof e !== "object" || e === null) return null;
    const r = e as Record<string, unknown>;
    if (!isStr(r["original"]) || !isStr(r["fix"]) || !isStr(r["en"]) || !isStr(r["ar"])) return null;
    const type = isStr(r["type"]) && ERROR_TYPES.has(r["type"]) ? (r["type"] as ErrorType) : "other";
    errors.push({ original: r["original"], fix: r["fix"], type, en: r["en"], ar: r["ar"] });
  }
  const score = Math.max(0, Math.min(10, Math.round(o["score"])));
  return { corrected: o["corrected"], score, errors, praise: o["praise"], next: o["next"] };
}

// ── Translate for the pronunciation box ──────────────────────────────────────

export const TRANSLATE_LIMIT = 300;

/** Ask for simple, stress-marked Russian for a short English or Arabic text. */
export function buildTranslatePrompt(text: string): string {
  return [
    "You help a beginner learner of Russian whose own languages are English and Arabic.",
    "Translate the text below into natural, simple, everyday Russian, as a native speaker would say it.",
    "Mark the stress: put U+0301 (combining acute accent) right after the stressed vowel of every word that has two or more vowels. One-vowel words and words with ё get no mark.",
    'Reply with JSON only, no prose: {"ru": "<the Russian>"}',
    "",
    "Text:",
    text.slice(0, TRANSLATE_LIMIT),
  ].join("\n");
}

/** The Russian from a translation reply, or null when the reply is not usable. */
export function parseTranslation(x: unknown): string | null {
  if (typeof x !== "object" || x === null) return null;
  const ru = (x as Record<string, unknown>)["ru"];
  if (typeof ru !== "string") return null;
  const text = ru.trim();
  return text && /[А-Яа-яЁё]/.test(text) && text.length <= TRANSLATE_LIMIT * 2 ? text : null;
}
