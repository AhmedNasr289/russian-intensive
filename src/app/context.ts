// What every screen receives: the store, the route, the host's abilities and a few services.

import type { Bi } from "../content/types.ts";
import type { Sfx } from "../core/audio.ts";
import type { ExplainLang } from "../core/progress.ts";
import type { Block } from "../core/schedule.ts";
import type { DownloadsCap, SampleCap } from "./claude.ts";
import type { Host } from "./env.ts";
import type { Route } from "./router.ts";
import type { Store } from "./store.ts";

export type Caps = {
  sample: SampleCap | null;
  downloads: DownloadsCap | null;
  /** Progress is being saved to the claude.ai database. */
  synced: boolean;
};

export type Voices = {
  main: SpeechSynthesisVoice | null;
  male: SpeechSynthesisVoice | null;
  female: SpeechSynthesisVoice | null;
  /** The Russian voices. */
  all: SpeechSynthesisVoice[];
  /** Every voice the browser reported, any language: 0 means the list has not arrived (or there is none). */
  total: number;
};

export type ToastKind = "ok" | "info" | "error";

/**
 * What actually sounded: a native-speaker recording, the browser's voice, or nothing. "stopped"
 * means a stop or a newer sound came first; a sequence that gets it ends there.
 */
export type Spoken =
  | { kind: "recording"; author: string; license: string; licenseUrl: string; page: string }
  | { kind: "voice"; name: string }
  | { kind: "silent"; reason: "no-voice" | "unsupported" }
  | { kind: "stopped" };

/** How the listen bar plays a text: as it is, slowly, letter by letter, or word by word. */
export type ListenMode = "say" | "slow" | "spell" | "words";

export type Ctx = {
  store: Store;
  route: Route;
  host: Host;
  caps: Caps;
  voices: Voices;
  navigate(token: string): void;
  rerender(): void;
  toast(message: Bi, kind?: ToastKind): void;
  /**
   * Speak Russian: a native-speaker recording when the course has one for this word, otherwise
   * the learner's voice and rate (slow = 0.65×). The newest request wins: it stops whatever is
   * sounding or still loading. Resolves when it has finished, with what sounded.
   */
  speak(text: string, opts?: { slow?: boolean; who?: "A" | "B" }): Promise<Spoken>;
  /**
   * Wait between the steps of a sequence. Resolves false when a stop or another sound came
   * meanwhile, so the sequence ends instead of cutting that sound off.
   */
  pause(ms: number): Promise<boolean>;
  /** Open the listen bar for a Russian text and play it the given way (nothing plays when omitted). */
  listen(text: string, play?: ListenMode): void;
  /** Run when the learner leaves the current screen (detach listeners, stop timers). */
  onLeave(cleanup: () => void): void;
  stopAudio(): void;
  sfx(kind: Sfx): void;
  now(): number;
  /** The guided study session (the bar under the header). */
  session: { start(block: Block): void; active(): boolean };
};

export const explainOf = (ctx: Ctx): ExplainLang => ctx.store.progress.settings.explain;

/** Short interface text in the learner's chosen language (English when both). */
export const tr = (ctx: Ctx, b: Bi): string => (explainOf(ctx) === "ar" ? b.ar : b.en);
