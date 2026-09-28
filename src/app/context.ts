// What every screen receives: the store, the route, the host's abilities and a few services.

import type { Bi } from "../content/types.ts";
import type { Sfx } from "../core/audio.ts";
import type { ExplainLang } from "../core/progress.ts";
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
  all: SpeechSynthesisVoice[];
};

export type ToastKind = "ok" | "info" | "error";

export type Ctx = {
  store: Store;
  route: Route;
  host: Host;
  caps: Caps;
  voices: Voices;
  navigate(token: string): void;
  rerender(): void;
  toast(message: Bi, kind?: ToastKind): void;
  /** Speak Russian with the learner's voice and rate (slow = 0.65×). */
  speak(text: string, opts?: { slow?: boolean; who?: "A" | "B" }): Promise<void>;
  /** Run when the learner leaves the current screen (detach listeners, stop timers). */
  onLeave(cleanup: () => void): void;
  stopAudio(): void;
  sfx(kind: Sfx): void;
  now(): number;
};

export const explainOf = (ctx: Ctx): ExplainLang => ctx.store.progress.settings.explain;

/** Short interface text in the learner's chosen language (English when both). */
export const tr = (ctx: Ctx, b: Bi): string => (explainOf(ctx) === "ar" ? b.ar : b.en);
