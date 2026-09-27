// The course content model. Every lesson file, the validator and the app share these types.

/** A learner-facing text in English and Arabic (Modern Standard Arabic). */
export type Bi = { en: string; ar: string };

/** A Russian text with its English and Arabic meaning. */
export type Tri = { ru: string; en: string; ar: string };

export type Pos = "noun" | "verb" | "adj" | "adv" | "pron" | "num" | "prep" | "conj" | "part" | "interj" | "phrase";

export type Gender = "m" | "f" | "n" | "pl";

export type Word = {
  /** `d<day>-<2 digits>`, unique across the course, e.g. `d12-07`. */
  id: string;
  /** Russian, stress-marked (U+0301 after the stressed vowel of every word with 2+ vowels). */
  ru: string;
  /** Pronunciation respelling for speaking: reduced vowels, devoiced finals, stressed vowel UPPERCASE. */
  say: string;
  en: string;
  ar: string;
  pos: Pos;
  /** Required for nouns. */
  g?: Gender;
  /** Key forms, e.g. "чита́ю, чита́ешь" or "мн. ч. кни́ги". */
  forms?: string;
  ex?: Tri;
  note?: Bi;
};

export type Table = { caption: Bi; head: string[]; rows: string[][] };

export type GrammarPoint = {
  /** `d<day>-g<k>` */
  id: string;
  title: Bi;
  /** Short paragraphs, same content in both languages. */
  en: string[];
  ar: string[];
  tables?: Table[];
  examples: Tri[];
};

export type Line = { who: "A" | "B"; name: string; ru: string; en: string; ar: string };

export type Dialogue = { title: Tri; setting: Bi; lines: Line[] };

export type Choice = {
  kind: "choice";
  prompt: Bi;
  /** Russian shown with the question (and playable). */
  ru?: string;
  /** When true the Russian is hidden until answered: a listening item. Requires `ru`. */
  listen?: boolean;
  options: string[];
  answer: number;
  why: Bi;
};

export type Fill = {
  kind: "fill";
  prompt: Bi;
  /** Russian sentence with exactly one `___` gap. */
  ru: string;
  /** Accepted answers; checking ignores case, stress marks and ё/е. */
  answers: string[];
  why: Bi;
};

export type Order = {
  kind: "order";
  prompt: Bi;
  /** Words (no punctuation) in shuffled order; they must rebuild an accepted answer. */
  tokens: string[];
  answers: string[];
  why: Bi;
};

export type Translate = {
  kind: "translate";
  /** The sentence to put into Russian, given in English and Arabic. */
  prompt: Bi;
  answers: string[];
  why: Bi;
};

export type Exercise = Choice | Fill | Order | Translate;

export type Drill = { ru: string; say: string; focus: Bi };

export type Pronunciation = { title: Bi; en: string[]; ar: string[]; drills: Drill[] };

export type Speaking = {
  scenario: Bi;
  /** English instructions for the AI tutor: role, setting, target structures, allowed words. */
  tutorBrief: string;
  /** Model sentences the learner can say. */
  prompts: Tri[];
};

export type Worksheet = {
  /** Tips before watching. */
  before: Bi[];
  questions: Choice[];
  /** The retelling task after watching. */
  retell: Bi;
};

export type TestSection = { title: Bi; items: Exercise[] };

export type Test = { sections: TestSection[]; speaking: Bi[] };

export type DayKind = "lesson" | "immersion" | "review";

export type Day = {
  n: number;
  week: number;
  kind: DayKind;
  title: Tri;
  /** Can-do statements. */
  goals: Bi[];
  /** New words and phrases of the day. */
  words: Word[];
  grammar: GrammarPoint[];
  dialogue?: Dialogue;
  pronunciation?: Pronunciation;
  exercises: Exercise[];
  /** Tags from TOPICS; they pull verified videos from the media library. */
  topics: string[];
  /** English YouTube search queries: an always-valid fallback. */
  search: string[];
  speaking: Speaking;
  journal: Bi;
  culture?: Bi;
  worksheet?: Worksheet;
  test?: Test;
};

export type SyllabusDay = {
  n: number;
  kind: DayKind;
  title: Tri;
  /** Grammar and skill points, in English. */
  grammar: string[];
  /** Target words and chunks (the author adds stress and may add dialogue phrases). */
  words: string[];
  /** The speaking scenario, in English. */
  scenario: string;
  topics: string[];
};

export type MediaKind = "video" | "channel" | "playlist" | "podcast" | "site" | "book" | "app";

export type Level = "A0" | "A1" | "A2" | "B1";

export type MediaItem = {
  id: string;
  kind: MediaKind;
  title: string;
  /** Channel, author or publisher. */
  by: string;
  url: string;
  topics: string[];
  level: Level;
  /** Language of the explanations. */
  lang: "ru" | "en" | "ru+en" | "ar" | "ru+ar";
  note: Bi;
  minutes?: number;
  /** ISO date on which the URL (and for videos the oEmbed title/channel) was verified. */
  verified: string;
};

export type LetterGroup = "friend" | "false-friend" | "new" | "sign";

export type Letter = {
  upper: string;
  lower: string;
  /** The letter's Russian name, e.g. "бэ". */
  name: string;
  group: LetterGroup;
  ipa: string;
  sound: Bi;
  example: Tri & { say: string };
  tip?: Bi;
};
