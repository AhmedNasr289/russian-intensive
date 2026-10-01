// The learner's weak words: wrong quiz answers (misses) and the flashcard history together.
// A word is weak while it has any score; it leaves the list as right answers pay misses back
// and good reviews raise its ease.

import type { Choice, Word } from "../content/types.ts";
import { findWord } from "./course.ts";
import type { Miss, Progress } from "./progress.ts";
import { drillQuestions } from "./quiz.ts";
import type { CardState } from "./srs.ts";
import { START_EASE } from "./srs.ts";

export type WeakWord = {
  word: Word;
  score: number;
  /** Wrong quiz answers not yet paid back. */
  misses: number;
  /** Times the card was forgotten after it was learned. */
  lapses: number;
  /** The card's ease has dropped (graded Hard or Again). */
  hard: boolean;
  /** The last miss (ms), 0 if none. */
  last: number;
};

/** 2 per miss, 1.5 per lapse, 4 per point of ease lost, 2 while relearning. */
export function weakScore(miss: Miss | undefined, card: CardState | undefined): number {
  let score = 2 * (miss?.n ?? 0);
  if (card) {
    score += 1.5 * card.lapses;
    if (card.ease < START_EASE) score += 4 * (START_EASE - card.ease);
    if (card.phase === "relearning") score += 2;
  }
  return Math.round(score * 100) / 100;
}

/** Weak course words, weakest first; ties go to the most recent miss, then course order. */
export function weakWords(p: Progress, limit = 20, find: (id: string) => Word | undefined = findWord): WeakWord[] {
  const ids = new Set([...Object.keys(p.misses), ...Object.keys(p.cards)]);
  const out: WeakWord[] = [];
  for (const id of ids) {
    const miss = p.misses[id];
    const card = p.cards[id];
    const score = weakScore(miss, card);
    if (score <= 0) continue;
    const word = find(id);
    if (!word) continue;
    out.push({ word, score, misses: miss?.n ?? 0, lapses: card?.lapses ?? 0, hard: card !== undefined && card.ease < START_EASE, last: miss?.last ?? 0 });
  }
  return out.sort((a, b) => b.score - a.score || b.last - a.last || a.word.id.localeCompare(b.word.id, "en", { numeric: true })).slice(0, limit);
}

/** The drill for weak words: meaning and listening for each, the wrong options from `pool`. */
export function weakDrillItems(weak: readonly Word[], pool: readonly Word[], seed: number): Choice[] {
  return drillQuestions(weak, pool, seed);
}
