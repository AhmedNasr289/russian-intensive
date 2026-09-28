// Typed access to the claude.ai runtime capabilities this app uses (sample, db, user, downloads).
// Outside claude.ai there is no window.claude and every capability resolves to null.

import type { DbLike } from "../core/storage.ts";

export type SampleTurn = { role: "user" | "assistant"; content: string };
export type SampleOptions = {
  onText?: (u: { text: string; delta: string }) => void;
  signal?: AbortSignal;
  modelTier?: "default" | "complex" | "quick";
  cache?: boolean;
};
export type SampleResult = { text: string; truncated: boolean };

export interface SampleCap {
  (input: string | SampleTurn[], options?: SampleOptions): Promise<SampleResult>;
  json<T = unknown>(input: string | SampleTurn[], options?: SampleOptions): Promise<T>;
}

export type UserCap = { id(): Promise<string | null>; isOwner(): Promise<boolean> };
export type DownloadsCap = { save(request: { filename: string; data: string | Blob }): Promise<{ status: "saved" | "delivered" }> };

type CapabilityMap = { sample: SampleCap; db: DbLike; user: UserCap; downloads: DownloadsCap };

type ClaudeRuntime = { use(name: string): Promise<unknown> };

function runtime(): ClaudeRuntime | null {
  if (typeof window === "undefined") return null;
  const c = (window as unknown as { claude?: { use?: unknown } }).claude;
  return c && typeof c.use === "function" ? (c as ClaudeRuntime) : null;
}

export const hasClaudeRuntime = (): boolean => runtime() !== null;

export async function useCapability<K extends keyof CapabilityMap>(name: K): Promise<CapabilityMap[K] | null> {
  const rt = runtime();
  if (!rt) return null;
  try {
    return ((await rt.use(name)) as CapabilityMap[K] | null) ?? null;
  } catch {
    return null;
  }
}

/** The stable error code on a rejected capability call ("not_granted", "rate_limited", …). */
export function errorCode(e: unknown): string {
  if (typeof e === "object" && e !== null && typeof (e as { code?: unknown }).code === "string") return (e as { code: string }).code;
  return "upstream_error";
}

/** Text that streamed before a failure and may stay on screen. */
export function partialText(e: unknown): string {
  if (typeof e === "object" && e !== null && typeof (e as { text?: unknown }).text === "string") return (e as { text: string }).text;
  return "";
}
