// Plays the native-speaker recordings: fetches a pack the first time one of its words is needed,
// decodes that word's slice with the Web Audio API and plays it. Web Audio needs no media
// element, so it works inside the claude.ai frame too. Every failure is soft: the caller falls
// back to the browser's voice. The newest request wins: a stop, or a newer request, cancels a
// recording whose pack is still downloading, so a late pack never plays over what came after it.

import { audioContext } from "../core/audio.ts";
import { describe, recordingFor, recordingKey } from "../core/recordings.ts";
import type { RecordingInfo } from "../core/recordings.ts";

/** played: to its end; stopped: stopped, or replaced by a newer request; failed: could not play. */
export type PlayOutcome = "played" | "stopped" | "failed";

const packs = new Map<string, Promise<ArrayBuffer>>();
const decoded = new Map<string, Promise<AudioBuffer>>();
/** Decoded clips kept in memory (about 90 KB each); the packs themselves stay cached whole. */
const MAX_DECODED = 80;

let current: AudioBufferSourceNode | null = null;
let finishCurrent: (() => void) | null = null;
/** Moves on every play request and every stop: a request that sees it move was cancelled. */
let generation = 0;

export function recordingInfo(text: string): RecordingInfo | null {
  const r = recordingFor(text);
  return r ? describe(recordingKey(text), r) : null;
}

function pack(path: string): Promise<ArrayBuffer> {
  let p = packs.get(path);
  if (!p) {
    p = fetch(path).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${path}`);
      return res.arrayBuffer();
    });
    packs.set(path, p);
    // A failed fetch may succeed later (offline, then online again).
    p.catch(() => packs.delete(path));
  }
  return p;
}

function clip(ctx: AudioContext, info: RecordingInfo): Promise<AudioBuffer> {
  let b = decoded.get(info.key);
  if (!b) {
    // decodeAudioData detaches its input, so decode a copy of the slice and keep the pack intact.
    b = pack(info.pack).then((data) => ctx.decodeAudioData(data.slice(info.offset, info.offset + info.length)));
    decoded.set(info.key, b);
    b.catch(() => decoded.delete(info.key));
    if (decoded.size > MAX_DECODED) {
      const oldest = decoded.keys().next().value;
      if (oldest !== undefined) decoded.delete(oldest);
    }
  }
  return b;
}

/** Starts downloading the pack that holds a text's recording, so its first tap plays at once. */
export function prefetchRecording(text: string): void {
  const info = recordingInfo(text);
  if (info) pack(info.pack).catch(() => undefined);
}

/** Silences the clip that is sounding now, if any; its request resolves "stopped". */
function halt(): void {
  const src = current;
  current = null;
  if (src) {
    try {
      src.stop();
    } catch {
      // Already stopped.
    }
  }
  const finish = finishCurrent;
  finishCurrent = null;
  finish?.();
}

/** Stops the recording that is playing and cancels any whose pack is still downloading. */
export function stopRecording(): void {
  generation++;
  halt();
}

/** A suspended context resumes on a click; never wait long for it in a frame that refuses. */
async function running(ctx: AudioContext): Promise<boolean> {
  // Read through a call: the state changes while we wait, which narrowing cannot see.
  const state = (): AudioContextState => ctx.state;
  if (state() === "running") return true;
  await Promise.race([ctx.resume().catch(() => undefined), new Promise((r) => setTimeout(r, 1500))]);
  return state() === "running";
}

/**
 * Plays a recording to its end. Resolves "stopped" when a stop or a newer request came first,
 * including while its pack was still downloading (it then never starts), and "failed" when it
 * could not play: no Web Audio, the pack could not be fetched, or the slice could not be decoded.
 */
export async function playRecording(info: RecordingInfo, rate = 1): Promise<PlayOutcome> {
  const ctx = audioContext();
  if (!ctx) return "failed";
  const mine = ++generation;
  try {
    const [buffer, ready] = await Promise.all([clip(ctx, info), running(ctx)]);
    if (mine !== generation) return "stopped";
    if (!ready) return "failed";
    halt();
    return await new Promise<PlayOutcome>((resolve) => {
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.playbackRate.value = rate;
      src.connect(ctx.destination);
      current = src;
      finishCurrent = () => resolve("stopped");
      src.onended = () => {
        if (current === src) {
          current = null;
          finishCurrent = null;
        }
        resolve("played");
      };
      src.start();
    });
  } catch (e) {
    if (mine !== generation) return "stopped";
    console.warn("A recording could not play:", info.file, e);
    return "failed";
  }
}
