// Spelling a Russian word aloud: every letter's name as a teacher says it (бэ, вэ, эль…), and
// which texts are short enough to spell.

import { ALPHABET } from "../content/alphabet.ts";
import { spellSteps, wordSpans } from "./audio.ts";

/** Letter (lower case) → its name. */
export const LETTER_NAMES: ReadonlyMap<string, string> = new Map(ALPHABET.map((l) => [l.lower, l.name]));

/** Spelling is offered for a word or a short phrase, not for a whole sentence. */
export function canSpell(text: string): boolean {
  const words = wordSpans(text).length;
  return words >= 1 && words <= 3 && spellSteps(text, LETTER_NAMES).length <= 28;
}
