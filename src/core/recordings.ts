// Native-speaker recordings: how a Russian text maps to a recording in the packs that
// scripts/fetch-recordings.ts builds, and where each recording came from. Pure and tested; the
// browser side (fetching packs, decoding, playing) lives in src/app/player.ts.

import { RECORDINGS, RECORDING_PACKS, RECORDING_SOURCES } from "../content/recordings.ts";
import type { Recording, RecordingSource } from "../content/recordings.ts";
import { stripStress } from "./text.ts";

export type { Recording, RecordingSource };

/**
 * The lookup key of a text: no stress marks, no punctuation or ellipsis, lower case, single spaces.
 * ё is kept (все and всё are different words) and so are inner hyphens (по-ру́сски).
 */
export function recordingKey(text: string): string {
  return stripStress(text)
    .replace(/…|\.\.\./g, " ")
    .replace(/[.,!?;:«»"“”„()\[\]]/g, " ")
    .replace(/\s[—–-]\s|^[—–-]\s*|\s*[—–-]$/g, " ")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export type RecordingIndex = Readonly<Record<string, Recording>>;

/** The recording for a text, if the course has one. */
export function recordingFor(text: string, index: RecordingIndex = RECORDINGS): Recording | null {
  const key = recordingKey(text);
  return key ? (index[key] ?? null) : null;
}

export type RecordingInfo = { key: string; pack: string; offset: number; length: number; source: RecordingSource; file: string; page: string };

/** Commons page of a recording's file, where its full author and licence notice lives. */
export const commonsPage = (file: string): string => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, "_"))}`;

/** Everything the player and the credits need about one recording. */
export function describe(key: string, r: Recording, packs: readonly string[] = RECORDING_PACKS, sources: readonly RecordingSource[] = RECORDING_SOURCES): RecordingInfo | null {
  const [pack, offset, length, source, file] = r;
  const packPath = packs[pack];
  const src = sources[source];
  if (packPath === undefined || src === undefined) return null;
  return { key, pack: packPath, offset, length, source: src, file, page: commonsPage(file) };
}

export const recordingCount = (index: RecordingIndex = RECORDINGS): number => Object.keys(index).length;

/** Credits grouped by source, largest first, with the words each source recorded. */
export function creditsBySource(index: RecordingIndex = RECORDINGS, sources: readonly RecordingSource[] = RECORDING_SOURCES): Array<{ source: RecordingSource; entries: Array<{ key: string; file: string }> }> {
  const groups = sources.map((source) => ({ source, entries: [] as Array<{ key: string; file: string }> }));
  for (const [key, r] of Object.entries(index)) groups[r[3]]?.entries.push({ key, file: r[4] });
  return groups.filter((g) => g.entries.length > 0).sort((a, b) => b.entries.length - a.entries.length || a.source.author.localeCompare(b.source.author));
}
