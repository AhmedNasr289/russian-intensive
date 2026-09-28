// Sound: Russian speech synthesis (best available voice, two voices for dialogues) and small
// synthesized sound effects. Voice ranking is pure and tested; everything that touches the browser
// is guarded so the module can be imported in Node.

import { ACUTE, GRAVE, stripStress } from "./text.ts";

export type VoiceLike = { name: string; lang: string; localService: boolean; voiceURI: string };
export type Gender = "m" | "f" | "?";

export const isRussian = (lang: string): boolean => /^ru([-_]|$)/i.test(lang);

/** Higher is better; -1 for voices that cannot speak Russian. */
export function rankVoice(v: Pick<VoiceLike, "name" | "lang" | "localService">): number {
  if (!isRussian(v.lang)) return -1;
  const n = v.name.toLowerCase();
  let score = 10;
  if (/natural|neural|premium|enhanced|wavenet/.test(n)) score += 60;
  if (/online/.test(n)) score += 20;
  if (/google/.test(n)) score += 30;
  if (!v.localService) score += 5;
  if (/ru-ru/i.test(v.lang)) score += 1;
  return score;
}

const MALE_NAMES = ["dmitry", "dmitri", "pavel", "maxim", "yuri", "aleksandr", "alexander", "ivan", "nikolai", "artem", "sergey"];
const FEMALE_NAMES = ["svetlana", "irina", "milena", "katya", "ekaterina", "tatyana", "alena", "alyona", "dariya", "daria", "elena", "olga", "anna", "google русский"];

export function guessGender(name: string): Gender {
  const n = name.toLowerCase();
  if (MALE_NAMES.some((m) => n.includes(m))) return "m";
  if (FEMALE_NAMES.some((f) => n.includes(f))) return "f";
  return "?";
}

export type VoicePick<V> = { main: V | null; male: V | null; female: V | null };

/** The voice for single words (the learner's choice, else the best one) and a voice per dialogue role. */
export function pickVoices<V extends VoiceLike>(voices: readonly V[], preferredURI: string | null): VoicePick<V> {
  // Ties break towards a female narrator, then by name, so the default never depends on list order.
  const genderOrder: Record<Gender, number> = { f: 0, "?": 1, m: 2 };
  const ru = voices
    .filter((v) => rankVoice(v) >= 0)
    .sort(
      (a, b) =>
        rankVoice(b) - rankVoice(a) || genderOrder[guessGender(a.name)] - genderOrder[guessGender(b.name)] || a.name.localeCompare(b.name),
    );
  const main = ru.find((v) => v.voiceURI === preferredURI) ?? ru[0] ?? null;
  const male = ru.find((v) => guessGender(v.name) === "m") ?? null;
  const female = ru.find((v) => guessGender(v.name) === "f") ?? null;
  return { main, male, female };
}

/**
 * The voice for a dialogue role: A is the male voice, B the female one. When both roles fall on the
 * same voice (or on none), a lower and a higher pitch keep the two speakers apart.
 */
export function roleVoice<V>(pick: VoicePick<V>, who: "A" | "B"): { voice: V | null; pitch: number } {
  const a = pick.male ?? pick.main;
  const b = pick.female ?? pick.main;
  const shared = a === b;
  return who === "A" ? { voice: a, pitch: shared ? 0.85 : 1 } : { voice: b, pitch: shared ? 1.12 : 1 };
}

/** What the synthesizer should read: no stress marks, no leading dialogue dash, no bracket notation. */
export function speakableText(s: string): string {
  return stripStress(s)
    .replace(/^\s*[—–-]\s*/, "")
    .replace(/\(([^)]*)\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

// ── Where the app is running, and how good its Russian voice is ──────────────

export type BrowserKind = "app" | "edge" | "chrome" | "firefox" | "safari" | "other";
export type PlatformKind = "windows" | "mac" | "ios" | "android" | "linux" | "other";

/** The browser family from a user-agent string. "app" is an embedded browser such as the Claude desktop app. */
export function browserOf(ua: string): BrowserKind {
  if (/\bClaude\/\d|\bElectron\//.test(ua)) return "app";
  if (/\bEdg(?:e|A|iOS)?\//.test(ua)) return "edge";
  if (/\bFirefox\/|\bFxiOS\//.test(ua)) return "firefox";
  if (/\bOPR\/|\bSamsungBrowser\//.test(ua)) return "other";
  if (/\bCriOS\/|\bChrome\//.test(ua)) return "chrome";
  if (/\bVersion\/[\d.]+.*\bSafari\//.test(ua)) return "safari";
  return "other";
}

export function platformOf(ua: string): PlatformKind {
  if (/Android/i.test(ua)) return "android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Windows/i.test(ua)) return "windows";
  if (/Mac OS X|Macintosh/i.test(ua)) return "mac";
  if (/Linux|X11/i.test(ua)) return "linux";
  return "other";
}

/** natural: a neural or network voice (Google, Microsoft Natural, Apple Enhanced); standard: an offline system voice. */
export type VoiceTier = "natural" | "standard" | "none";

export function voiceTier(v: Pick<VoiceLike, "name" | "localService"> | null): VoiceTier {
  if (!v) return "none";
  return /natural|neural|premium|enhanced|wavenet|google|online/i.test(v.name) || !v.localService ? "natural" : "standard";
}

// ── Spelling and word-by-word playback ────────────────────────────────────────

/** A character with any combining stress marks that follow it: one unit on screen. */
export function graphemes(text: string): string[] {
  const out: string[] = [];
  for (const ch of text) {
    if ((ch === ACUTE || ch === GRAVE) && out.length) out[out.length - 1] += ch;
    else out.push(ch);
  }
  return out;
}

const isCyrillicLetter = (g: string): boolean => /^[А-Яа-яЁё]/.test(g);

export type SpellStep = { index: number; letter: string; name: string };

/**
 * The letters of `text` to spell aloud, in order: each with its position in `graphemes(text)`,
 * the letter itself and the name to say (from `names`, keyed by lower-case letter).
 */
export function spellSteps(text: string, names: ReadonlyMap<string, string>): SpellStep[] {
  const steps: SpellStep[] = [];
  graphemes(text).forEach((g, index) => {
    if (!isCyrillicLetter(g)) return;
    const letter = [...g][0] ?? "";
    steps.push({ index, letter, name: names.get(letter.toLowerCase()) ?? letter });
  });
  return steps;
}

export type WordSpan = { word: string; start: number; end: number };

/** The Russian words of `text` for word-by-word playback, as grapheme ranges [start, end). */
export function wordSpans(text: string): WordSpan[] {
  const gs = graphemes(text);
  const spans: WordSpan[] = [];
  let start = -1;
  const close = (end: number) => {
    if (start >= 0) spans.push({ word: gs.slice(start, end).join(""), start, end });
    start = -1;
  };
  gs.forEach((g, i) => {
    const inner = g === "-" && start >= 0 && isCyrillicLetter(gs[i + 1] ?? "");
    if (isCyrillicLetter(g) || inner) {
      if (start < 0) start = i;
    } else close(i);
  });
  close(gs.length);
  return spans;
}

// ── Browser speech ────────────────────────────────────────────────────────────

const synth = (): SpeechSynthesis | null =>
  typeof window !== "undefined" && "speechSynthesis" in window ? window.speechSynthesis : null;

export const speechSupported = (): boolean => synth() !== null;

/** Resolves with the browser's voices, waiting briefly for the async list some browsers use. */
export function loadVoices(timeoutMs = 2500): Promise<SpeechSynthesisVoice[]> {
  const s = synth();
  if (!s) return Promise.resolve([]);
  const now = s.getVoices();
  if (now.length) return Promise.resolve(now);
  return new Promise((resolve) => {
    const done = () => {
      s.removeEventListener("voiceschanged", done);
      clearTimeout(timer);
      resolve(s.getVoices());
    };
    const timer = setTimeout(done, timeoutMs);
    s.addEventListener("voiceschanged", done);
  });
}

// Chrome drops utterances that are garbage-collected mid-speech; keep them referenced until they end.
const live = new Set<SpeechSynthesisUtterance>();

/** `pitch` (0–2) separates two dialogue roles when only one Russian voice exists. */
export type SpeakOptions = { rate: number; voice: SpeechSynthesisVoice | null; pitch?: number };

export function speak(text: string, opts: SpeakOptions): Promise<void> {
  const s = synth();
  if (!s) return Promise.resolve();
  const u = new SpeechSynthesisUtterance(speakableText(text));
  u.lang = opts.voice?.lang ?? "ru-RU";
  if (opts.voice) u.voice = opts.voice;
  u.rate = opts.rate;
  if (opts.pitch !== undefined) u.pitch = opts.pitch;
  live.add(u);
  return new Promise((resolve) => {
    const finish = () => {
      live.delete(u);
      resolve();
    };
    u.onend = finish;
    u.onerror = finish;
    s.speak(u);
  });
}

export function stopSpeaking(): void {
  synth()?.cancel();
  live.clear();
}

/** Speak one item now, interrupting whatever is playing (and only then: Chrome can drop an utterance queued right after a needless cancel). */
export function say(text: string, opts: SpeakOptions): Promise<void> {
  const s = synth();
  if (s && (s.speaking || s.pending)) stopSpeaking();
  return speak(text, opts);
}

export type Playback = { stop(): void; done: Promise<void> };

/** Speak lines in order with a pause between them; `onLine` reports the index being spoken. */
export function speakLines(
  lines: ReadonlyArray<{ text: string; voice: SpeechSynthesisVoice | null }>,
  opts: { rate: number; gapMs: number; onLine?: (i: number) => void },
): Playback {
  let stopped = false;
  stopSpeaking();
  const done = (async () => {
    for (let i = 0; i < lines.length && !stopped; i++) {
      const line = lines[i];
      if (!line) continue;
      opts.onLine?.(i);
      await speak(line.text, { rate: opts.rate, voice: line.voice });
      if (!stopped && opts.gapMs > 0) await new Promise((r) => setTimeout(r, opts.gapMs));
    }
    opts.onLine?.(-1);
  })();
  return {
    stop() {
      stopped = true;
      stopSpeaking();
    },
    done,
  };
}

// ── Sound effects (Web Audio, no files) ───────────────────────────────────────

export type Sfx = "ok" | "bad" | "done" | "tap";

let audioCtx: AudioContext | null = null;

/** The page's one Web Audio context, shared by the sound effects and the recordings. */
export function audioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  try {
    audioCtx ??= new Ctor();
  } catch {
    return null;
  }
  return audioCtx;
}

const context = audioContext;

function tone(ctx: AudioContext, freq: number, start: number, length: number, type: OscillatorType, peak: number): void {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(peak, start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + length);
  osc.connect(gain).connect(ctx.destination);
  osc.start(start);
  osc.stop(start + length + 0.02);
}

export function sfx(kind: Sfx): void {
  try {
    const ctx = context();
    if (!ctx) return;
    if (ctx.state === "suspended") void ctx.resume();
    const t = ctx.currentTime + 0.01;
    if (kind === "ok") {
      tone(ctx, 659.25, t, 0.12, "sine", 0.18);
      tone(ctx, 987.77, t + 0.09, 0.18, "sine", 0.16);
    } else if (kind === "bad") {
      tone(ctx, 196, t, 0.22, "triangle", 0.2);
      tone(ctx, 164.81, t + 0.12, 0.26, "triangle", 0.16);
    } else if (kind === "done") {
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(ctx, f, t + i * 0.09, 0.28, "sine", 0.14));
    } else {
      tone(ctx, 880, t, 0.05, "sine", 0.08);
    }
  } catch {
    // Sound is decoration; a blocked or missing audio device must never break the lesson.
  }
}
