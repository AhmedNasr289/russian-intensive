// Verify every external link the app shows.
//   YouTube videos and playlists: oEmbed must answer 200 AND return exactly the recorded title and
//   channel, so an invented, removed or mislabelled video fails.
//   YouTube channel handles: the channel page must answer 200.
//   Everything else: GET with a browser user agent must end below 400 after redirects.
// Prints one BROKEN line per failure and a final line: LINKS total=<t> ok=<o> broken=<b>

import { MEDIA } from "../src/content/media.ts";
import { SETUP_LINKS } from "../src/content/setup.ts";

type Target = { id: string; url: string; title?: string; by?: string };
type Outcome = { target: Target; ok: boolean; reason: string };

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
const TIMEOUT_MS = 25_000;
const CONCURRENCY = 6;

const args = process.argv.slice(2);
const argAfter = (flag: string): string | undefined => (args.includes(flag) ? args[args.indexOf(flag) + 1] : undefined);
const only = argAfter("--id");
const adhocUrl = argAfter("--url");

// Ad-hoc mode for spot checks and controls: --url <u> [--title <t>] [--by <channel>]
const adhoc: Target | null = adhocUrl
  ? { id: "adhoc", url: adhocUrl, ...(argAfter("--title") !== undefined ? { title: argAfter("--title") as string } : {}), ...(argAfter("--by") !== undefined ? { by: argAfter("--by") as string } : {}) }
  : null;

const targets: Target[] = adhoc
  ? [adhoc]
  : [
      ...MEDIA.map((m) => ({ id: m.id, url: m.url, title: m.title, by: m.by })),
      ...SETUP_LINKS.map((l) => ({ id: l.id, url: l.url })),
    ].filter((t) => only === undefined || t.id === only);

async function fetchWithTimeout(url: string, init: RequestInit = {}): Promise<Response> {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: ctl.signal, redirect: "follow", headers: { "User-Agent": UA, "Accept-Language": "en;q=0.9", ...(init.headers ?? {}) } });
  } finally {
    clearTimeout(timer);
  }
}

const isYouTube = (u: URL) => /(^|\.)youtube\.com$|(^|\.)youtu\.be$/.test(u.hostname);
const isVideoOrPlaylist = (u: URL) =>
  u.hostname === "youtu.be" || (isYouTube(u) && (u.pathname === "/watch" || u.pathname === "/playlist"));

async function checkOne(t: Target): Promise<Outcome> {
  let url: URL;
  try {
    url = new URL(t.url);
  } catch {
    return { target: t, ok: false, reason: "not a valid URL" };
  }
  if (url.protocol !== "https:") return { target: t, ok: false, reason: "must be https" };
  try {
    if (isVideoOrPlaylist(url)) {
      const res = await fetchWithTimeout(`https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(t.url)}`);
      if (res.status !== 200) return { target: t, ok: false, reason: `oEmbed ${res.status}` };
      const data = (await res.json()) as { title?: unknown; author_name?: unknown };
      const title = typeof data.title === "string" ? data.title : "";
      const author = typeof data.author_name === "string" ? data.author_name : "";
      if (t.title !== undefined && title !== t.title) return { target: t, ok: false, reason: `title is "${title}"` };
      if (t.by !== undefined && author !== t.by) return { target: t, ok: false, reason: `channel is "${author}"` };
      return { target: t, ok: true, reason: "oEmbed" };
    }
    const res = await fetchWithTimeout(t.url);
    await res.arrayBuffer().catch(() => undefined);
    return res.status < 400 ? { target: t, ok: true, reason: String(res.status) } : { target: t, ok: false, reason: `HTTP ${res.status}` };
  } catch (e) {
    return { target: t, ok: false, reason: e instanceof Error ? e.message : String(e) };
  }
}

async function checkWithRetry(t: Target): Promise<Outcome> {
  const first = await checkOne(t);
  if (first.ok || /oEmbed 40[0-4]|title is|channel is|not a valid|https/.test(first.reason)) return first;
  await new Promise((r) => setTimeout(r, 1500));
  return checkOne(t);
}

const results: Outcome[] = [];
let next = 0;
async function worker(): Promise<void> {
  while (next < targets.length) {
    const t = targets[next++];
    if (t) results.push(await checkWithRetry(t));
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

const dupes = targets.map((t) => t.id).filter((id, i, all) => all.indexOf(id) !== i);
for (const id of new Set(dupes)) results.push({ target: { id, url: "" }, ok: false, reason: "duplicate id" });

const broken = results.filter((r) => !r.ok);
for (const r of broken) console.log(`BROKEN ${r.target.id} ${r.target.url} — ${r.reason}`);
const ok = results.length - broken.length;
console.log(`LINKS total=${results.length} ok=${ok} broken=${broken.length}`);
process.exitCode = broken.length === 0 && results.length > 0 ? 0 : 1;
