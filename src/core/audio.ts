// Sound: Russian speech synthesis (best available voice, two voices for dialogues) and small
// synthesized sound effects. Voice ranking is pure and tested; everything that touches the browser
// is guarded so the module can be imported in Node.

import { stripStress } from "./text.ts";

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

function context(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  audioCtx ??= new Ctor();
  return audioCtx;
}

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
