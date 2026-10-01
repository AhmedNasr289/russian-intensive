// Quiz items generated from course words. Each item names the word it tests, so a wrong answer
// can be remembered against that word.

import type { Choice, Word } from "../content/types.ts";
import { shuffle } from "./answers.ts";

/** Meaning and listening questions generated from a day's words. */
export function wordQuestions(words: readonly Word[], pool: readonly Word[], seed: number, count = 6): Choice[] {
  const usable = words.filter((w) => w.pos !== "phrase" || w.ru.length <= 24);
  const picks = shuffle(usable, seed).slice(0, count);
  return picks.map((w, i) => {
    const others = shuffle(
      pool.filter((o) => o.id !== w.id && o.en !== w.en),
      seed + i + 1,
    ).slice(0, 3);
    const listen = i % 2 === 1;
    const options = listen ? [w.ru, ...others.map((o) => o.ru)] : [`${w.en} · ${w.ar}`, ...others.map((o) => `${o.en} · ${o.ar}`)];
    const order = shuffle(options.map((_, k) => k), seed * 7 + i);
    return {
      kind: "choice",
      prompt: listen ? { en: "Listen. Which word do you hear?", ar: "استمع. أيّ كلمة تسمع؟" } : { en: "What does it mean?", ar: "ماذا تعني؟" },
      ru: w.ru,
      ...(listen ? { listen: true } : {}),
      options: order.map((k) => options[k] ?? ""),
      answer: order.indexOf(0),
      why: { en: `${w.ru} = ${w.en}`, ar: `${w.ru} = ${w.ar}` },
      wordId: w.id,
    } satisfies Choice;
  });
}
