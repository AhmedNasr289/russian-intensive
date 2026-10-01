// Quiz items generated from course words. Each item names the word it tests, so a wrong answer
// can be remembered against that word.

import type { Choice, Word } from "../content/types.ts";
import { shuffle } from "./answers.ts";

const MEANING = { en: "What does it mean?", ar: "ماذا تعني؟" };
const LISTEN = { en: "Listen. Which word do you hear?", ar: "استمع. أيّ كلمة تسمع؟" };

/** One question on a word: its meaning (Russian shown), or which word is heard (Russian hidden). */
function wordQuestion(w: Word, pool: readonly Word[], listen: boolean, othersSeed: number, orderSeed: number): Choice {
  const others = shuffle(
    pool.filter((o) => o.id !== w.id && o.en !== w.en),
    othersSeed,
  ).slice(0, 3);
  const options = listen ? [w.ru, ...others.map((o) => o.ru)] : [`${w.en} · ${w.ar}`, ...others.map((o) => `${o.en} · ${o.ar}`)];
  const order = shuffle(options.map((_, k) => k), orderSeed);
  return {
    kind: "choice",
    prompt: listen ? LISTEN : MEANING,
    ru: w.ru,
    ...(listen ? { listen: true } : {}),
    options: order.map((k) => options[k] ?? ""),
    answer: order.indexOf(0),
    why: { en: `${w.ru} = ${w.en}`, ar: `${w.ru} = ${w.ar}` },
    wordId: w.id,
  };
}

const quizzable = (w: Word): boolean => w.pos !== "phrase" || w.ru.length <= 24;

/** Meaning and listening questions generated from a day's words. */
export function wordQuestions(words: readonly Word[], pool: readonly Word[], seed: number, count = 6): Choice[] {
  const picks = shuffle(words.filter(quizzable), seed).slice(0, count);
  return picks.map((w, i) => wordQuestion(w, pool, i % 2 === 1, seed + i + 1, seed * 7 + i));
}

/** A drill on chosen words: each one asked twice, once for its meaning and once by ear. */
export function drillQuestions(words: readonly Word[], pool: readonly Word[], seed: number): Choice[] {
  return words.flatMap((w, i) => [
    wordQuestion(w, pool, false, seed + 2 * i + 1, seed * 7 + 2 * i),
    wordQuestion(w, pool, true, seed + 2 * i + 2, seed * 7 + 2 * i + 1),
  ]);
}
