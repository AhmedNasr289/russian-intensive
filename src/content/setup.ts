// Device setup guides: adding a Russian voice (so the app can speak) and a Russian keyboard
// (so you can type answers). Every URL is checked by scripts/check-links.ts.

import type { Bi } from "./types.ts";

export type Platform = "windows" | "android" | "ios" | "mac";

export type SetupLink = {
  id: string;
  platform: Platform;
  kind: "voice" | "keyboard";
  title: Bi;
  url: string;
  /** Short, numbered-in-order steps as they appear on the device, in English and Arabic. */
  steps: Bi[];
  verified: string;
};

export const SETUP_LINKS: readonly SetupLink[] = [];
