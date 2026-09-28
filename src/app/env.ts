// Where the app is running and which build it is.

import { hasClaudeRuntime } from "./claude.ts";

/** artifact: inside claude.ai (tutor + synced progress). web: GitHub Pages. file: opened from disk. */
export type Host = "artifact" | "web" | "file";

export function detectHost(): Host {
  if (hasClaudeRuntime()) return "artifact";
  return typeof location !== "undefined" && location.protocol === "file:" ? "file" : "web";
}

function meta(name: string): string | null {
  return typeof document === "undefined" ? null : (document.querySelector(`meta[name="${name}"]`)?.getAttribute("content") ?? null);
}

export const buildId = (): string => meta("build-id") ?? "dev";
export const buildTarget = (): "web" | "artifact" => (meta("ru56-target") === "artifact" ? "artifact" : "web");

/** Public home of the web version, and the private claude.ai copy with the tutor. */
export const PAGES_URL = "https://ahmednasr289.github.io/russian-intensive/";
export const REPO_URL = "https://github.com/AhmedNasr289/russian-intensive";

/** Set after the artifact is first published; empty until then (the link is hidden). */
export const ARTIFACT_URL = "";

/** localStorage, or null when the browser refuses it (private mode, blocked site data). */
export function safeLocalStorage(): Storage | null {
  try {
    const s = window.localStorage;
    const probe = "__ru56_probe__";
    s.setItem(probe, "1");
    s.removeItem(probe);
    return s;
  } catch {
    return null;
  }
}
