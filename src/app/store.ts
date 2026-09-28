// The single place progress changes. Views call update(); the store saves (debounced) and, when
// asked, re-renders. Loading from the claude.ai database later replaces the state in one step.

import type { Progress } from "../core/progress.ts";
import type { ProgressStore, Saver, StoreKind } from "../core/storage.ts";
import { createSaver } from "../core/storage.ts";

export type Listener = () => void;

/** Saves to every store (the database and the local cache); loads from the first that has data. */
export class MultiStore implements ProgressStore {
  readonly kind: StoreKind;
  private readonly stores: readonly ProgressStore[];

  constructor(stores: readonly ProgressStore[]) {
    this.stores = stores;
    this.kind = stores[0]?.kind ?? "memory";
  }

  async load(): Promise<Progress | null> {
    for (const s of this.stores) {
      const p = await s.load();
      if (p) return p;
    }
    return null;
  }

  async save(p: Progress): Promise<void> {
    for (const s of this.stores) await s.save(p);
  }
}

export class Store {
  private state: Progress;
  private saver: Saver;
  private backend: ProgressStore;
  private readonly listeners = new Set<Listener>();
  private readonly onSaveError: (e: unknown) => void;

  constructor(initial: Progress, backend: ProgressStore, onSaveError: (e: unknown) => void) {
    this.state = initial;
    this.backend = backend;
    this.onSaveError = onSaveError;
    this.saver = createSaver(backend, 800, onSaveError);
  }

  get progress(): Progress {
    return this.state;
  }

  get kind(): StoreKind {
    return this.backend.kind;
  }

  /** Apply a change. `render: true` re-renders the current screen afterwards. */
  update(change: (p: Progress) => Progress, opts: { render?: boolean } = {}): void {
    const next = change(this.state);
    if (next === this.state) return;
    this.state = next;
    this.saver.schedule(next);
    if (opts.render) this.emit();
  }

  /** Swap in a whole new state (import, or data arriving from the database). */
  replace(p: Progress, save = true): void {
    this.state = p;
    if (save) this.saver.schedule(p);
    this.emit();
  }

  /** Move to another backend (the claude.ai database once it is available). */
  async useBackend(backend: ProgressStore): Promise<void> {
    await this.saver.flush();
    this.backend = backend;
    this.saver = createSaver(backend, 800, this.onSaveError);
  }

  flush(): Promise<void> {
    return this.saver.flush();
  }

  pending(): boolean {
    return this.saver.pending();
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private emit(): void {
    for (const fn of this.listeners) fn();
  }
}
