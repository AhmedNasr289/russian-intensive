// Checking what the learner typed or assembled, plus a seeded shuffle for exercises.

import { normalizeAnswer, similarity } from "./text.ts";

export type TypedResult = {
  /** Exactly right (ignoring case, stress marks, ё/е and punctuation). */
  ok: boolean;
  /** Not right, but within a typo of an accepted answer. */
  close: boolean;
  /** The accepted answer closest to the input. */
  best: string;
  score: number;
};

export const CLOSE_THRESHOLD = 0.8;

export function checkTyped(input: string, accepted: readonly string[]): TypedResult {
  const norm = normalizeAnswer(input);
  let best = accepted[0] ?? "";
  let score = 0;
  for (const a of accepted) {
    const s = similarity(input, a);
    if (s > score) {
      score = s;
      best = a;
    }
  }
  const ok = norm !== "" && accepted.some((a) => normalizeAnswer(a) === norm);
  return { ok, close: !ok && norm !== "" && score >= CLOSE_THRESHOLD, best, score };
}

export function checkOrder(tokens: readonly string[], accepted: readonly string[]): boolean {
  const sentence = normalizeAnswer(tokens.join(" "));
  return sentence !== "" && accepted.some((a) => normalizeAnswer(a) === sentence);
}

/** mulberry32: a tiny deterministic PRNG, so a shuffle can be reproduced in tests. */
function prng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher–Yates with a seed; for two or more distinct items the result never equals the input order. */
export function shuffle<T>(items: readonly T[], seed: number): T[] {
  const out = [...items];
  const rand = prng(seed);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = out[i] as T;
    out[i] = out[j] as T;
    out[j] = tmp;
  }
  const unchanged = out.length > 1 && out.every((v, i) => v === items[i]);
  if (unchanged) out.push(out.shift() as T);
  return out;
}
