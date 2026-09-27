// Where progress lives: browser localStorage (GitHub Pages / local file), the claude.ai artifact
// database (private per-viewer documents), or memory as a last resort. Writes go through a
// debounced saver that keeps one write in flight and always ends on the newest state.

import { validateProgress } from "./progress.ts";
import type { Progress } from "./progress.ts";

export type StoreKind = "local" | "artifact" | "memory";

export interface ProgressStore {
  readonly kind: StoreKind;
  load(): Promise<Progress | null>;
  save(p: Progress): Promise<void>;
}

/** The part of the Web Storage API the app uses. */
export type StorageLike = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
};

export const LOCAL_KEY = "ru56.progress.v1";

const message = (e: unknown): string => (e instanceof Error ? `${e.name}: ${e.message}` : String(e));

export class LocalStore implements ProgressStore {
  readonly kind: StoreKind;
  lastError: string | null = null;
  private readonly storage: StorageLike | null;
  private readonly key: string;
  private memory: string | null = null;
  private failed = false;

  constructor(storage: StorageLike | null, key: string = LOCAL_KEY) {
    this.storage = storage;
    this.key = key;
    this.kind = storage ? "local" : "memory";
  }

  /** False once the browser refused to store data (private window, blocked site data, full quota). */
  persistent(): boolean {
    return this.storage !== null && !this.failed;
  }

  async load(): Promise<Progress | null> {
    let raw: string | null = this.memory;
    if (raw === null && this.storage) {
      try {
        raw = this.storage.getItem(this.key);
      } catch (e) {
        this.failed = true;
        this.lastError = message(e);
      }
    }
    if (raw === null) return null;
    try {
      const r = validateProgress(JSON.parse(raw));
      return r.ok ? r.value : null;
    } catch {
      return null;
    }
  }

  async save(p: Progress): Promise<void> {
    const raw = JSON.stringify(p);
    if (this.storage && !this.failed) {
      try {
        this.storage.setItem(this.key, raw);
        return;
      } catch (e) {
        this.failed = true;
        this.lastError = message(e);
      }
    }
    this.memory = raw;
  }
}

// The subset of the claude.ai `db` capability the store needs.
export type DocSnapshotLike = { exists: boolean; data(): Record<string, unknown> | undefined };
export type DocRefLike = { get(): Promise<DocSnapshotLike>; set(data: Record<string, unknown>): Promise<void> };
export type DbLike = { doc(path: string): DocRefLike };

/**
 * Progress in the artifact's database, under the viewer's private `data/users/<id>/` subtree.
 * The journal is kept in its own document so the main document stays small, and it is only
 * rewritten when it actually changed.
 */
export class ArtifactDbStore implements ProgressStore {
  readonly kind: StoreKind = "artifact";
  private readonly db: DbLike;
  private readonly uid: string;
  private lastJournal = "";

  constructor(db: DbLike, uid: string) {
    this.db = db;
    this.uid = uid;
  }

  private ref(name: "progress" | "journal"): DocRefLike {
    return this.db.doc(`data/users/${this.uid}/${name}`);
  }

  async load(): Promise<Progress | null> {
    const [ps, js] = await Promise.all([this.ref("progress").get(), this.ref("journal").get()]);
    if (!ps.exists) return null;
    const entries = js.exists ? js.data()?.["entries"] : undefined;
    const r = validateProgress({ ...ps.data(), journal: Array.isArray(entries) ? entries : [] });
    if (!r.ok) return null;
    this.lastJournal = JSON.stringify(r.value.journal);
    return r.value;
  }

  async save(p: Progress): Promise<void> {
    const { journal, ...rest } = p;
    await this.ref("progress").set(JSON.parse(JSON.stringify(rest)) as Record<string, unknown>);
    const serialized = JSON.stringify(journal);
    if (serialized !== this.lastJournal) {
      await this.ref("journal").set({ entries: JSON.parse(serialized) as unknown[] });
      this.lastJournal = serialized;
    }
  }
}

export type Saver = {
  /** Queue a state to save; a burst of calls becomes one write of the last state. */
  schedule(p: Progress): void;
  /** Write anything queued now and wait for it. */
  flush(): Promise<void>;
  pending(): boolean;
};

export function createSaver(store: ProgressStore, delayMs = 800, onError?: (e: unknown) => void): Saver {
  let queued: Progress | null = null;
  let timer: ReturnType<typeof setTimeout> | null = null;
  let inflight: Promise<void> | null = null;

  const drain = async (): Promise<void> => {
    while (inflight) await inflight;
    const value = queued;
    queued = null;
    if (!value) return;
    inflight = store
      .save(value)
      .catch((e: unknown) => onError?.(e))
      .finally(() => {
        inflight = null;
      });
    await inflight;
    if (queued) await drain();
  };

  return {
    schedule(p) {
      queued = p;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        void drain();
      }, delayMs);
    },
    async flush() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      await drain();
      while (inflight) await inflight;
    },
    pending() {
      return queued !== null || inflight !== null || timer !== null;
    },
  };
}
