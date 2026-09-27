import { test } from "node:test";
import assert from "node:assert/strict";
import { defaultProgress, addJournal } from "../src/core/progress.ts";
import type { Progress } from "../src/core/progress.ts";
import { ArtifactDbStore, LocalStore, createSaver } from "../src/core/storage.ts";
import type { DbLike, ProgressStore, StorageLike } from "../src/core/storage.ts";

const T0 = Date.parse("2026-09-28T19:00:00Z");
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function memoryStorage(): StorageLike & { map: Map<string, string> } {
  const map = new Map<string, string>();
  return { map, getItem: (k) => map.get(k) ?? null, setItem: (k, v) => void map.set(k, v), removeItem: (k) => void map.delete(k) };
}

const throwing: StorageLike = {
  getItem: () => {
    throw new Error("SecurityError");
  },
  setItem: () => {
    throw new Error("QuotaExceededError");
  },
  removeItem: () => undefined,
};

test("LocalStore round-trips progress through storage", async () => {
  const storage = memoryStorage();
  const store = new LocalStore(storage, "k");
  const p = { ...defaultProgress(T0), updatedAt: T0 + 5 };
  await store.save(p);
  assert.ok(storage.map.get("k")?.includes('"version":1'));
  assert.deepEqual(await store.load(), p);
  assert.equal(store.persistent(), true);
});

test("LocalStore keeps working in memory when storage throws", async () => {
  const store = new LocalStore(throwing, "k");
  const p = defaultProgress(T0);
  await store.save(p);
  assert.deepEqual(await store.load(), p);
  assert.equal(store.persistent(), false);
  assert.match(store.lastError ?? "", /Quota|Security/);
});

test("LocalStore ignores corrupt or invalid saved data", async () => {
  const storage = memoryStorage();
  storage.setItem("k", "{not json");
  assert.equal(await new LocalStore(storage, "k").load(), null);
  storage.setItem("k", JSON.stringify({ version: 9 }));
  assert.equal(await new LocalStore(storage, "k").load(), null);
});

class CountingStore implements ProgressStore {
  readonly kind = "memory" as const;
  saves: Progress[] = [];
  active = 0;
  maxActive = 0;
  delay: number;
  constructor(delay: number) {
    this.delay = delay;
  }
  async load(): Promise<Progress | null> {
    return this.saves.at(-1) ?? null;
  }
  async save(p: Progress): Promise<void> {
    this.active++;
    this.maxActive = Math.max(this.maxActive, this.active);
    await sleep(this.delay);
    this.saves.push(p);
    this.active--;
  }
}

test("the saver coalesces a burst of changes into one write of the latest state", async () => {
  const store = new CountingStore(1);
  const saver = createSaver(store, 20);
  for (let i = 1; i <= 5; i++) saver.schedule({ ...defaultProgress(T0), updatedAt: i });
  await sleep(60);
  await saver.flush();
  assert.equal(store.saves.length, 1);
  assert.equal(store.saves[0]?.updatedAt, 5);
  assert.equal(saver.pending(), false);
});

test("the saver never overlaps writes and always ends on the newest state", async () => {
  const store = new CountingStore(40);
  const saver = createSaver(store, 5);
  saver.schedule({ ...defaultProgress(T0), updatedAt: 1 });
  await sleep(15);
  saver.schedule({ ...defaultProgress(T0), updatedAt: 2 });
  await sleep(10);
  saver.schedule({ ...defaultProgress(T0), updatedAt: 3 });
  await saver.flush();
  assert.equal(store.maxActive, 1);
  assert.equal(store.saves.at(-1)?.updatedAt, 3);
});

function fakeDb(): DbLike & { docs: Map<string, Record<string, unknown>>; writes: string[] } {
  const docs = new Map<string, Record<string, unknown>>();
  const writes: string[] = [];
  return {
    docs,
    writes,
    doc: (path: string) => ({
      get: async () => {
        const body = docs.get(path);
        return { exists: body !== undefined, data: () => (body === undefined ? undefined : structuredClone(body)) };
      },
      set: async (data: Record<string, unknown>) => {
        writes.push(path);
        docs.set(path, structuredClone(data));
      },
    }),
  };
}

test("the artifact store keeps the journal in its own document and skips unchanged journals", async () => {
  const db = fakeDb();
  const store = new ArtifactDbStore(db, "u_abc");
  assert.equal(await store.load(), null);
  let p = addJournal(defaultProgress(T0), { day: 4, at: T0, text: "Меня́ зову́т Ахме́д." });
  await store.save(p);
  assert.deepEqual(db.writes, ["data/users/u_abc/progress", "data/users/u_abc/journal"]);
  assert.equal("journal" in (db.docs.get("data/users/u_abc/progress") ?? {}), false);
  p = { ...p, updatedAt: T0 + 1 };
  await store.save(p);
  assert.deepEqual(db.writes.slice(2), ["data/users/u_abc/progress"]);
  const loaded = await new ArtifactDbStore(db, "u_abc").load();
  assert.deepEqual(loaded, p);
});
