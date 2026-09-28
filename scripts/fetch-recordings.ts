// Finds a native-speaker recording for every word and short phrase of the course on English
// Wiktionary, downloads its MP3 version from Wikimedia Commons into audio-cache/ (git-ignored),
// then packs the recordings the app plays: public/audio/words-NN-<hash>.mp3, the index
// src/content/recordings.ts and public/audio/ATTRIBUTION.md.
//
// A recording is used only when every stressed word of ours appears on the entry with exactly our
// stress, so a homograph (со́рок / соро́к) can never play the wrong word.
//
// Usage: node scripts/fetch-recordings.ts [--offline] [--refresh] [--limit N]
//   --offline   rebuild the packs and the index from audio-cache/ without touching the network
//   --refresh   look up again the items recorded earlier as "none", "ambiguous" or "failed"
//   --limit N   look up at most N new items in this run
// Prints "RECORDINGS items=<i> recorded=<r> packs=<p> kb=<k>".

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { ALPHABET } from "../src/content/alphabet.ts";
import { COURSE } from "../src/content/index.ts";
import { recordingKey } from "../src/core/recordings.ts";
import { ACUTE, hasCyrillic, stripStress, tokenizeRu } from "../src/core/text.ts";
import { accentedForms, russianSection } from "./verify-stress.ts";

const ROOT = resolve(import.meta.dirname, "..");
const CACHE = join(ROOT, "audio-cache");
const MANIFEST = join(CACHE, "manifest.json");
const OUT = join(ROOT, "public", "audio");
const INDEX = join(ROOT, "src", "content", "recordings.ts");
/** A pack is fetched whole the first time one of its words plays, so keep each one small. */
const PACK_LIMIT = 400 * 1024;
const USER_AGENT = "russian-in-56-days-recordings/1.0 (educational course; https://github.com/AhmedNasr289/russian-intensive)";
const AUDIO_EXT = /\.(ogg|oga|opus|wav|mp3|flac)$/i;

export type Item = { key: string; text: string };

type Found = { title: string; file: string };
type Ok = { status: "ok"; text: string; title: string; file: string; bytes: number; sha256: string; author: string; license: string; licenseUrl: string; checked: string };
type Miss = { status: "none" | "ambiguous" | "failed"; text: string; checked: string; note?: string };
type Entry = Ok | Miss;
type Manifest = Record<string, Entry>;

// ── What to look up ───────────────────────────────────────────────────────────

/** Every word and short phrase of the course, in the order a learner meets them. */
export function items(): Item[] {
  const seen = new Set<string>();
  const out: Item[] = [];
  const add = (text: string) => {
    const key = recordingKey(text);
    if (!key || !hasCyrillic(key) || seen.has(key) || key.split(" ").length > 3) return;
    seen.add(key);
    out.push({ key, text: text.trim() });
  };
  for (const day of COURSE) {
    for (const w of day.words) add(w.ru);
    // Pronunciation drills hold minimal pairs ("пока́ — бока́") and lists ("мы, вы"): look up each part.
    for (const d of day.pronunciation?.drills ?? []) for (const part of d.ru.split(/\s[—–]\s|,\s/)) add(part);
  }
  for (const l of ALPHABET) {
    add(l.example.ru);
    add(l.name);
  }
  return out;
}

// ── Reading a Wiktionary entry ────────────────────────────────────────────────

export type AudioEntry = { file: string; form: string | null };

/**
 * Audio files named by {{audio|ru|…}} and {{audios|ru|…}} templates, in page order, each with the
 * stressed form of the {{ru-IPA|…}} line above it (null when none precedes it).
 */
export function audioEntries(section: string): AudioEntry[] {
  const out: AudioEntry[] = [];
  let form: string | null = null;
  for (const m of section.matchAll(/\{\{\s*(ru-IPA|audios?)\s*\|([^{}]*)\}\}/gi)) {
    const params = (m[2] ?? "").split("|").map((p) => p.trim());
    if ((m[1] ?? "").toLowerCase() === "ru-ipa") {
      form = params.find((p) => p !== "" && !p.includes("=")) ?? null;
      continue;
    }
    if (params[0] !== "ru") continue;
    for (const p of params.slice(1)) {
      if (!p.includes("=") && AUDIO_EXT.test(p) && !out.some((e) => e.file === p)) out.push({ file: p, form });
    }
  }
  return out;
}

export const audioFilesIn = (section: string): string[] => audioEntries(section).map((e) => e.file);

/** Studio recordings (Ru-…, mostly the Shtooka Project) first, then Lingua Libre, then the rest. */
export function preferredFile(files: readonly string[]): string | null {
  const rank = (f: string) => (/^Ru-/i.test(f) ? 0 : /^LL-Q7737/i.test(f) ? 1 : 2);
  return [...files].sort((a, b) => rank(a) - rank(b) || files.indexOf(a) - files.indexOf(b))[0] ?? null;
}

/**
 * True when every stressed word of `text` appears on the entry with our stress and no other.
 * Words without a stress mark (one vowel, or ё) cannot disagree.
 */
export function stressConsistent(section: string, text: string): boolean {
  for (const token of tokenizeRu(text)) {
    if (!token.includes(ACUTE)) continue;
    const forms = accentedForms(section, token);
    if (forms.size !== 1 || !forms.has(token.toLowerCase())) return false;
  }
  return true;
}

/**
 * The recording for `text` on this entry: a file recorded under our exact stressed form wins;
 * otherwise any file, but only when no other stress of our words appears on the entry. Returns
 * "ambiguous" when the entry may be about another word, and null when it has no recording.
 */
export function chooseAudio(section: string, text: string): string | "ambiguous" | null {
  const entries = audioEntries(section);
  if (!entries.length) return null;
  const tokens = tokenizeRu(text);
  const only = tokens.length === 1 ? tokens[0] : undefined;
  if (only !== undefined && only.includes(ACUTE)) {
    const mine = entries.filter((e) => e.form !== null && e.form.toLowerCase() === only.toLowerCase());
    if (mine.length) return preferredFile(mine.map((e) => e.file));
  }
  return stressConsistent(section, text) ? preferredFile(entries.map((e) => e.file)) : "ambiguous";
}

// ── Reading a Commons file description ────────────────────────────────────────

const decodeEntities = (s: string): string =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&nbsp;/g, " ");
const plainText = (html: string): string =>
  decodeEntities(html.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:])/g, "$1")
    .trim();

export type ExtMetadata = Record<string, { value?: string } | undefined>;

/** The name to credit: Tsca.bot is the bot that uploaded the Shtooka Project's recordings. */
export const creditName = (author: string): string => (/^tsca\.bot$/i.test(author.trim()) ? "The Shtooka Project" : author.trim());

/** Who to credit: the Lingua Libre speaker, the named artist, the project that provided the sample, or the uploader. */
export function authorFrom(meta: ExtMetadata, uploader = ""): string {
  const artist = meta["Artist"]?.value ?? "";
  if (artist) {
    const speaker = artist.match(/Speaker:\s*(?:<[^>]*>)?([^<\n]+)/i);
    if (speaker?.[1]) return `${plainText(speaker[1])} (Lingua Libre)`;
    const text = plainText(artist);
    if (text) return creditName(text.slice(0, 80));
  }
  const credit = plainText(meta["Credit"]?.value ?? "");
  if (/shtooka/i.test(credit)) return "The Shtooka Project";
  if (credit && !/^own work$/i.test(credit)) return credit.slice(0, 80);
  // Tsca.bot uploaded the Shtooka Project's recordings.
  if (/^tsca\.bot$/i.test(uploader)) return "The Shtooka Project";
  if (uploader && !/bot$/i.test(uploader)) return uploader;
  return "Wikimedia Commons contributor";
}

// ── Packing ───────────────────────────────────────────────────────────────────

export type PackItem = { key: string; bytes: number };

/** Consecutive items in packs of at most `limit` bytes (an item larger than the limit gets its own pack). */
export function packLayout(list: readonly PackItem[], limit: number): PackItem[][] {
  const packs: PackItem[][] = [];
  let current: PackItem[] = [];
  let size = 0;
  for (const item of list) {
    if (current.length && size + item.bytes > limit) {
      packs.push(current);
      current = [];
      size = 0;
    }
    current.push(item);
    size += item.bytes;
  }
  if (current.length) packs.push(current);
  return packs;
}

/** True for data that starts like an MP3 file: an ID3 tag or an MPEG audio frame sync. */
export function looksLikeMp3(buf: Uint8Array): boolean {
  if (buf.length < 4) return false;
  if (buf[0] === 0x49 && buf[1] === 0x44 && buf[2] === 0x33) return true;
  return buf[0] === 0xff && ((buf[1] ?? 0) & 0xe0) === 0xe0;
}

// ── Network ───────────────────────────────────────────────────────────────────

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function getJson(url: string): Promise<unknown> {
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT, "Api-User-Agent": USER_AGENT } });
    if (res.status === 429 || res.status >= 500) {
      await sleep(2000 * (attempt + 1));
      continue;
    }
    return res.json();
  }
  throw new Error(`gave up after retries: ${url}`);
}

async function wikitext(title: string): Promise<string | null> {
  const url = `https://en.wiktionary.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&prop=wikitext&format=json&formatversion=2&redirects=1`;
  const body = (await getJson(url)) as { parse?: { wikitext?: string } };
  return body.parse?.wikitext ?? null;
}

async function find(item: Item): Promise<Found | Miss["status"]> {
  const shown = stripStress(item.text).replace(/[.,!?…«»"]/g, "").replace(/\s+/g, " ").trim();
  const titles = [shown, item.key].filter((t, i, a) => t && a.indexOf(t) === i);
  for (const title of titles) {
    const text = await wikitext(title);
    await sleep(60);
    if (!text) continue;
    const section = russianSection(text);
    if (!section) continue;
    const choice = chooseAudio(section, item.text);
    if (choice === null) continue;
    if (choice === "ambiguous") return "ambiguous";
    return { title, file: choice };
  }
  return "none";
}

type FileInfo = { mp3: string | null; author: string; license: string; licenseUrl: string };

/** Commons descriptions for up to 50 files per request, keyed by the file name we asked for. */
async function fileInfo(files: readonly string[]): Promise<Map<string, FileInfo>> {
  const out = new Map<string, FileInfo>();
  for (let i = 0; i < files.length; i += 50) {
    const batch = files.slice(i, i + 50);
    const titles = batch.map((f) => `File:${f}`).join("|");
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=imageinfo|videoinfo&iiprop=user|extmetadata&viprop=derivatives&format=json&formatversion=2`;
    const body = (await getJson(url)) as {
      query?: {
        normalized?: Array<{ from: string; to: string }>;
        pages?: Array<{ title: string; missing?: boolean; imageinfo?: Array<{ user?: string; extmetadata?: ExtMetadata }>; videoinfo?: Array<{ derivatives?: Array<{ src: string; type: string }> }> }>;
      };
    };
    const renamed = new Map((body.query?.normalized ?? []).map((n) => [n.from, n.to]));
    const pages = new Map((body.query?.pages ?? []).map((p) => [p.title, p]));
    for (const f of batch) {
      const asked = `File:${f}`;
      const page = pages.get(renamed.get(asked) ?? asked);
      if (!page || page.missing) continue;
      const meta = page.imageinfo?.[0]?.extmetadata ?? {};
      const mp3 = page.videoinfo?.[0]?.derivatives?.find((d) => d.type.startsWith("audio/mpeg"))?.src ?? null;
      out.set(f, {
        mp3,
        author: authorFrom(meta, page.imageinfo?.[0]?.user ?? ""),
        license: plainText(meta["LicenseShortName"]?.value ?? "") || "see file page",
        licenseUrl: meta["LicenseUrl"]?.value ?? "",
      });
    }
    await sleep(100);
  }
  return out;
}

async function download(url: string): Promise<Uint8Array> {
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (res.status === 429 || res.status >= 500) {
      await sleep(2000 * (attempt + 1));
      continue;
    }
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return new Uint8Array(await res.arrayBuffer());
  }
  throw new Error("gave up after retries");
}

// ── Cache ─────────────────────────────────────────────────────────────────────

const clipPath = (key: string) => join(CACHE, `${createHash("sha1").update(key).digest("hex").slice(0, 16)}.mp3`);

function readManifest(): Manifest {
  try {
    return JSON.parse(readFileSync(MANIFEST, "utf8")) as Manifest;
  } catch {
    return {};
  }
}

function writeManifest(m: Manifest): void {
  mkdirSync(CACHE, { recursive: true });
  writeFileSync(MANIFEST, `${JSON.stringify(m, null, 1)}\n`);
}

// ── Output ────────────────────────────────────────────────────────────────────

function writeOutputs(all: readonly Item[], manifest: Manifest): { recorded: number; packs: number; bytes: number } {
  const usable = all.filter((it) => {
    const e = manifest[it.key];
    return e?.status === "ok" && existsSync(clipPath(it.key));
  });
  const layout = packLayout(
    usable.map((it) => ({ key: it.key, bytes: (manifest[it.key] as Ok).bytes })),
    PACK_LIMIT,
  );

  const sources: Array<{ author: string; license: string; licenseUrl: string }> = [];
  const sourceIndex = (e: Ok) => {
    const author = creditName(e.author);
    const at = sources.findIndex((s) => s.author === author && s.license === e.license && s.licenseUrl === e.licenseUrl);
    if (at >= 0) return at;
    sources.push({ author, license: e.license, licenseUrl: e.licenseUrl });
    return sources.length - 1;
  };

  mkdirSync(OUT, { recursive: true });
  const packNames: string[] = [];
  const index: Array<[string, [number, number, number, number, string]]> = [];
  let total = 0;
  layout.forEach((pack, p) => {
    const parts: Buffer[] = [];
    let offset = 0;
    for (const { key } of pack) {
      const e = manifest[key] as Ok;
      const clip = readFileSync(clipPath(key));
      index.push([key, [p, offset, clip.length, sourceIndex(e), e.file]]);
      parts.push(clip);
      offset += clip.length;
    }
    const data = Buffer.concat(parts);
    total += data.length;
    const name = `words-${String(p + 1).padStart(2, "0")}-${createHash("sha256").update(data).digest("hex").slice(0, 8)}.mp3`;
    writeFileSync(join(OUT, name), data);
    packNames.push(`audio/${name}`);
  });
  // Packs are generated output: drop the ones this run did not produce.
  for (const f of readdirSync(OUT)) {
    if (/^words-\d+-[0-9a-f]{8}\.mp3$/.test(f) && !packNames.includes(`audio/${f}`)) rmSync(join(OUT, f));
  }

  const q = (s: string) => JSON.stringify(s);
  const ts = [
    "// Generated by scripts/fetch-recordings.ts from Wiktionary and Wikimedia Commons. Do not edit.",
    `// ${index.length} native-speaker recordings in ${packNames.length} packs (${Math.round(total / 1024)} KB).`,
    "// Credits: public/audio/ATTRIBUTION.md and, in the app, Library > Recordings.",
    "",
    "export type RecordingSource = { author: string; license: string; licenseUrl: string };",
    "",
    "/** [pack index, byte offset, byte length, source index, Commons file name] */",
    "export type Recording = readonly [number, number, number, number, string];",
    "",
    "export const RECORDING_PACKS: readonly string[] = [",
    ...packNames.map((n) => `  ${q(n)},`),
    "];",
    "",
    "export const RECORDING_SOURCES: readonly RecordingSource[] = [",
    ...sources.map((s) => `  { author: ${q(s.author)}, license: ${q(s.license)}, licenseUrl: ${q(s.licenseUrl)} },`),
    "];",
    "",
    "export const RECORDINGS: Readonly<Record<string, Recording>> = {",
    ...index.map(([k, r]) => `  ${q(k)}: [${r[0]}, ${r[1]}, ${r[2]}, ${r[3]}, ${q(r[4])}],`),
    "};",
    "",
  ].join("\n");
  writeFileSync(INDEX, ts);

  const md = [
    "# Recordings: sources and licences",
    "",
    "The files in this folder are packs of native-speaker pronunciation recordings from",
    "[Wikimedia Commons](https://commons.wikimedia.org/), found through English Wiktionary by",
    "`scripts/fetch-recordings.ts`. Each recording keeps its own licence, listed below with its",
    "author and its file page, where the full notice lives. They are not covered by the MIT licence",
    "of the code.",
    "",
    "| Word | Author | Licence | File |",
    "| --- | --- | --- | --- |",
    ...index.map(([k, r]) => {
      const s = sources[r[3]];
      const page = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(r[4].replace(/ /g, "_"))}`;
      const lic = s?.licenseUrl ? `[${s.license}](${s.licenseUrl})` : (s?.license ?? "");
      return `| ${k} | ${s?.author ?? ""} | ${lic} | [${r[4].replace(/\|/g, "\\|")}](${page}) |`;
    }),
    "",
  ].join("\n");
  writeFileSync(join(OUT, "ATTRIBUTION.md"), md);
  return { recorded: index.length, packs: packNames.length, bytes: total };
}

// ── Main ──────────────────────────────────────────────────────────────────────

function arg(name: string): string | null {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? (process.argv[i + 1] ?? null) : null;
}

async function main(): Promise<void> {
  const offline = process.argv.includes("--offline");
  const refresh = process.argv.includes("--refresh");
  const limit = Number(arg("limit") ?? Infinity);
  const all = items();
  const manifest = readManifest();
  const today = new Date().toISOString().slice(0, 10);

  if (!offline) {
    const pending = all.filter((it) => {
      const e = manifest[it.key];
      return !e || (refresh && e.status !== "ok") || (e.status === "ok" && !existsSync(clipPath(it.key)));
    });
    const todo = pending.slice(0, Number.isFinite(limit) ? limit : pending.length);
    console.log(`looking up ${todo.length} of ${all.length} items`);

    const found = new Map<string, Found>();
    let n = 0;
    for (const it of todo) {
      const r = await find(it);
      if (typeof r === "string") manifest[it.key] = { status: r, text: it.text, checked: today };
      else found.set(it.key, r);
      if (++n % 50 === 0) {
        console.log(`  ${n}/${todo.length} looked up, ${found.size} with a recording`);
        writeManifest(manifest);
      }
    }

    const info = await fileInfo([...new Set([...found.values()].map((f) => f.file))]);
    n = 0;
    for (const [key, f] of found) {
      const it = todo.find((t) => t.key === key);
      const text = it?.text ?? key;
      const meta = info.get(f.file);
      if (!meta?.mp3) {
        manifest[key] = { status: "failed", text, checked: today, note: `no MP3 version of ${f.file}` };
        continue;
      }
      try {
        const data = await download(meta.mp3);
        if (!looksLikeMp3(data) || data.length < 3000) throw new Error(`not a usable MP3 (${data.length} bytes)`);
        mkdirSync(CACHE, { recursive: true });
        writeFileSync(clipPath(key), data);
        manifest[key] = {
          status: "ok",
          text,
          title: f.title,
          file: f.file,
          bytes: data.length,
          sha256: createHash("sha256").update(data).digest("hex"),
          author: meta.author,
          license: meta.license,
          licenseUrl: meta.licenseUrl,
          checked: today,
        };
      } catch (e) {
        manifest[key] = { status: "failed", text, checked: today, note: e instanceof Error ? e.message : String(e) };
      }
      if (++n % 50 === 0) {
        console.log(`  ${n}/${found.size} downloaded`);
        writeManifest(manifest);
      }
      await sleep(40);
    }
    writeManifest(manifest);
  }

  const out = writeOutputs(all, manifest);
  const counts = Object.values(manifest).reduce<Record<string, number>>((acc, e) => ((acc[e.status] = (acc[e.status] ?? 0) + 1), acc), {});
  console.log(`status ${JSON.stringify(counts)}`);
  console.log(`RECORDINGS items=${all.length} recorded=${out.recorded} packs=${out.packs} kb=${Math.round(out.bytes / 1024)}`);
}

if (process.argv[1]?.replace(/\\/g, "/").endsWith("scripts/fetch-recordings.ts")) {
  main().catch((e: unknown) => {
    console.error(e instanceof Error ? (e.stack ?? e.message) : e);
    process.exitCode = 1;
  });
}
