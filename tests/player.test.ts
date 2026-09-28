import { test } from "node:test";
import type { TestContext } from "node:test";
import assert from "node:assert/strict";
import type { RecordingInfo } from "../src/core/recordings.ts";

// Stand-ins for Web Audio and fetch, installed before the player first asks for an AudioContext.
// A pack's bytes are its own path, so a decoded clip is labelled with the pack it came from, and
// every clip that starts is recorded. A pack whose path holds "slow" arrives only when the test
// releases it; one whose path holds "missing" answers 404.

type FakeSource = {
  buffer: { label: string } | null;
  playbackRate: { value: number };
  onended: (() => void) | null;
  connect(): void;
  start(): void;
  stop(): void;
};

const started: string[] = [];
const sources: FakeSource[] = [];
const held = new Map<string, () => void>();

class FakeAudioContext {
  state = "running";
  destination = {};
  resume(): Promise<void> {
    return Promise.resolve();
  }
  decodeAudioData(data: ArrayBuffer): Promise<{ label: string }> {
    return Promise.resolve({ label: new TextDecoder().decode(data) });
  }
  createBufferSource(): FakeSource {
    const src: FakeSource = {
      buffer: null,
      playbackRate: { value: 1 },
      onended: null,
      connect: () => undefined,
      start: () => void started.push(src.buffer?.label ?? "?"),
      // A real source reports its end asynchronously after stop().
      stop: () => queueMicrotask(() => src.onended?.()),
    };
    sources.push(src);
    return src;
  }
}

function fakeFetch(path: string) {
  const body = new TextEncoder().encode(path);
  const missing = path.includes("missing");
  const response = { ok: !missing, status: missing ? 404 : 200, arrayBuffer: () => Promise.resolve(body.buffer) };
  return new Promise((resolve) => (path.includes("slow") ? held.set(path, () => resolve(response)) : resolve(response)));
}

Object.assign(globalThis, { window: { AudioContext: FakeAudioContext }, fetch: fakeFetch });
const { playRecording, stopRecording } = await import("../src/app/player.ts");

const info = (pack: string): RecordingInfo => ({
  key: pack,
  pack,
  offset: 0,
  length: new TextEncoder().encode(pack).length,
  source: { author: "A", license: "CC BY 4.0", licenseUrl: "" },
  file: "Ru-x.ogg",
  page: "",
});
const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

test("a newer request wins over a recording whose pack is still downloading", async () => {
  started.length = 0;
  const late = playRecording(info("audio/slow-1.mp3"));
  const newer = playRecording(info("audio/fast-1.mp3"));
  await tick();
  assert.deepEqual(started, ["audio/fast-1.mp3"]);
  held.get("audio/slow-1.mp3")?.();
  assert.equal(await late, "stopped");
  assert.deepEqual(started, ["audio/fast-1.mp3"], "the late pack must not play over the newer word");
  sources.at(-1)?.onended?.();
  assert.equal(await newer, "played");
});

test("a stop cancels a recording whose pack is still downloading, and silences one that is playing", async () => {
  started.length = 0;
  const loading = playRecording(info("audio/slow-2.mp3"));
  stopRecording();
  held.get("audio/slow-2.mp3")?.();
  assert.equal(await loading, "stopped");
  assert.deepEqual(started, [], "a stopped request must never start");
  const playing = playRecording(info("audio/fast-2.mp3"));
  await tick();
  assert.deepEqual(started, ["audio/fast-2.mp3"]);
  stopRecording();
  assert.equal(await playing, "stopped");
});

test("a pack that cannot be fetched reports failed, so the caller can fall back to the voice", async (t: TestContext) => {
  t.mock.method(console, "warn", () => undefined);
  assert.equal(await playRecording(info("audio/missing-3.mp3")), "failed");
});
