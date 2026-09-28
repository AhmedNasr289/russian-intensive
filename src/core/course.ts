// Read access to the course: days, words, levels and the media that fits a day.

import { COURSE } from "../content/index.ts";
import { MEDIA } from "../content/media.ts";
import type { Day, Level, MediaItem, Word } from "../content/types.ts";

const byNumber = new Map<number, Day>(COURSE.map((d) => [d.n, d]));
const byWordId = new Map<string, Word>(COURSE.flatMap((d) => d.words.map((w) => [w.id, w] as const)));

export const allDays = (): readonly Day[] => COURSE;
export const getDay = (n: number): Day | undefined => byNumber.get(n);
export const findWord = (id: string): Word | undefined => byWordId.get(id);

/** Every word taught on days 1..n, in course order. */
export function wordsUpTo(n: number, days: readonly Day[] = COURSE): Word[] {
  return days.filter((d) => d.n <= n).flatMap((d) => d.words);
}

/** The level the learner is working at on day n. */
export const levelOf = (n: number): Level => (n <= 7 ? "A0" : n <= 28 ? "A1" : "A2");

const LEVEL_RANK: Record<Level, number> = { A0: 0, A1: 1, A2: 2, B1: 3 };

/** Videos and playlists for a day: most matching topics first, then the nearest level. */
export function mediaFor(day: Pick<Day, "n" | "topics">, media: readonly MediaItem[] = MEDIA, limit = 6): MediaItem[] {
  const topics = new Set(day.topics);
  const level = LEVEL_RANK[levelOf(day.n)];
  return media
    .filter((m) => m.kind === "video" || m.kind === "playlist")
    .map((m) => ({ m, hits: m.topics.filter((t) => topics.has(t)).length }))
    .filter((x) => x.hits > 0)
    .sort(
      (a, b) =>
        b.hits - a.hits ||
        Math.abs(LEVEL_RANK[a.m.level] - level) - Math.abs(LEVEL_RANK[b.m.level] - level) ||
        a.m.id.localeCompare(b.m.id),
    )
    .slice(0, limit)
    .map((x) => x.m);
}

export const youtubeSearchUrl = (query: string): string =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

/** The 11-character video id of a YouTube watch or youtu.be URL, else null. */
export function youtubeId(url: string): string | null {
  try {
    const u = new URL(url);
    const id = u.hostname === "youtu.be" ? u.pathname.slice(1) : u.pathname === "/watch" ? u.searchParams.get("v") : null;
    return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}
