// Hash routing with bare tokens only (#day-12-grammar), because the claude.ai viewer forwards
// nothing but letters, digits and . _ ~ - in the hash.

import { findWord } from "../core/course.ts";
import type { TutorMode } from "../core/tutorPrompt.ts";

export const SECTIONS = ["words", "grammar", "dialogue", "practice", "speak", "watch", "tutor", "journal", "worksheet", "test"] as const;
export type Section = (typeof SECTIONS)[number];

const MODES: readonly TutorMode[] = ["chat", "roleplay", "explain", "check"];
const PLAIN = ["today", "course", "review", "weak", "alphabet", "pronounce", "progress", "library", "settings"] as const;
type PlainView = (typeof PLAIN)[number];

export type Route =
  | { view: PlainView }
  | { view: "tutor"; mode: TutorMode | null }
  | { view: "word"; id: string }
  | { view: "day"; n: number; section: Section | null };

const TODAY: Route = { view: "today" };

export function parseRoute(hash: string): Route {
  const token = hash.replace(/^#/, "");
  if (token === "") return TODAY;
  if ((PLAIN as readonly string[]).includes(token)) return { view: token as PlainView };
  if (token === "tutor") return { view: "tutor", mode: null };
  const tutor = token.match(/^tutor-([a-z]+)$/);
  if (tutor) {
    const mode = MODES.find((m) => m === tutor[1]) ?? null;
    return { view: "tutor", mode };
  }
  const word = token.match(/^word-(d\d{1,2}-\d{2})$/);
  if (word) return word[1] && findWord(word[1]) ? { view: "word", id: word[1] } : TODAY;
  const day = token.match(/^day-(\d{1,2})(?:-([a-z]+))?$/);
  if (day) {
    const n = Number(day[1]);
    if (n < 1 || n > 56) return TODAY;
    const section = SECTIONS.find((s) => s === day[2]) ?? null;
    return { view: "day", n, section };
  }
  return TODAY;
}

/** The navigation entry a route belongs to (a lesson day lives under the course, weak words under review). */
export function navTokenOf(r: Route): PlainView | "tutor" {
  return r.view === "day" || r.view === "word" ? "course" : r.view === "weak" ? "review" : r.view;
}

export function routeToken(r: Route): string {
  switch (r.view) {
    case "day":
      return r.section ? `day-${r.n}-${r.section}` : `day-${r.n}`;
    case "tutor":
      return r.mode ? `tutor-${r.mode}` : "tutor";
    case "word":
      return `word-${r.id}`;
    default:
      return r.view;
  }
}
