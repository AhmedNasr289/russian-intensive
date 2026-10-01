# Study Companion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> Executed inline by the spec's author (Ahmed's standing rule: no sub-agents unless he asks), so each code step's full
> code lands in its task's commit; this plan pins the interfaces, the tests and the order.

**Goal:** Make Russian in 56 Days plan, run and adapt the study day, remember mistakes, find any word fast, and let the
claude.ai tutor act in the app.

**Architecture:** Pure, tested logic in `src/core/` (weak, coach, session, search, forecast, tutorTools, quiz) feeding
thin DOM views and components in `src/app/`. One optional `misses` field is added to saved progress. The tutor's page
tools use the claude.ai `sample` capability's `tools` option (contract 0.2.61) only when `sample.limits()` reports them.

**Tech Stack:** TypeScript (strict, Node 24 type stripping, `.ts` imports), node:test, esbuild-wasm bundle, no runtime deps.

**Spec:** `docs/superpowers/specs/2026-10-01-study-companion-design.md`

## Global Constraints

- Every learner-facing text is bilingual `{ en, ar }`, Arabic in Modern Standard Arabic.
- Russian shown to the learner carries stress marks (U+0301) where the content rules require them; course words come
  from `src/content`, never typed by hand in UI code.
- Hash routes are bare tokens: `weak`, `word-d12-07`, `tutor-coach`.
- No `alert`/`confirm`/`prompt`, no `innerHTML`, every `localStorage` call in try/catch, no service worker in claude.ai.
- Old saved progress (without `misses`) must load unchanged.
- Light and dark, Arabic RTL, 375 px without horizontal scroll.
- `sample` calls with `tools` never pass `cache` other than `false`.

---

### Task 1: Mistake memory in progress, quiz items carry their word

**Files:**
- Modify: `src/core/progress.ts` (type, defaults, recordMiss, recordHit, removeNewCards, validation)
- Create: `src/core/quiz.ts` (wordQuestions moved here, items tagged `wordId`)
- Modify: `src/content/types.ts` (`Choice.wordId?: string`)
- Modify: `src/app/components/exercises.ts` (import wordQuestions from core; `onAnswer` option)
- Modify: `src/app/views/day.ts` (practice runner records misses/hits)
- Test: `tests/progress.test.ts`, `tests/quiz.test.ts`

**Interfaces (produces):**
```ts
export type Miss = { n: number; last: number };            // Progress.misses: Record<string, Miss>
export const MISSES_LIMIT = 400;
export function recordMiss(p: Progress, id: string, now: number): Progress;   // ignores ids not like d12-07
export function recordHit(p: Progress, id: string, now: number): Progress;    // n-1, deletes at 0, no-op if absent
export function removeNewCards(p: Progress, ids: readonly string[], now: number): Progress; // only phase "new", reps 0
export function wordQuestions(words: readonly Word[], pool: readonly Word[], seed: number, count?: number): Choice[];
// RunnerOptions.onAnswer?: (ex: Exercise, ok: boolean) => void
```

- [ ] Step 1: tests: recordMiss twice -> n 2 and last = now; recordHit -> n 1, again -> entry gone; bad id ignored;
  401st distinct id drops the oldest; validateProgress of an old object without `misses` -> ok with `{}`; a malformed
  `misses` entry -> not ok; removeNewCards removes only untouched new cards; wordQuestions items carry the source word's
  id and the same answers as before.
- [ ] Step 2: run them, see them fail.
- [ ] Step 3: implement; day practice passes `onAnswer` that records a hit or miss for items with `wordId`.
- [ ] Step 4: `npm test`, `npm run typecheck` green.
- [ ] Step 5: commit `feat: remember missed words`.

### Task 2: Weak words and their drill

**Files:**
- Create: `src/core/weak.ts`, `src/app/views/weak.ts`
- Modify: `src/app/router.ts` (`weak` plain route), `src/app/main.ts` (view + title), `src/app/views/review.ts`
  (weak-words link), `src/app/styles.css`
- Test: `tests/weak.test.ts`, `tests/router.test.ts`

**Interfaces:**
```ts
export type WeakWord = { word: Word; score: number; misses: number; lapses: number; hard: boolean; last: number };
export function weakWords(p: Progress, limit?: number, find?: (id: string) => Word | undefined): WeakWord[];
export function weakDrillItems(weak: readonly Word[], pool: readonly Word[], seed: number, count?: number): Choice[];
```

- [ ] Step 1: tests: score formula (2*misses + 1.5*lapses + ease penalty + relearning 2), zero-score words excluded,
  order by score then recency then id, words not in the course ignored, drill items only from the weak list and tagged;
  `parseRoute("#weak")`.
- [ ] Step 2: fail. Step 3: implement view (list with reasons, tap to hear, link to word page, drill runner whose
  `onAnswer` records hits/misses, empty state). Step 4: green. Step 5: commit `feat: weak-word drill`.

### Task 3: Search, word page, palette, shortcuts

**Files:**
- Create: `src/core/search.ts`, `src/app/views/word.ts`, `src/app/components/palette.ts`, `src/app/components/shortcuts.ts`
- Modify: `src/app/router.ts` (`{ view: "word"; id }`), `src/app/main.ts`, `src/app/shell.ts` (search button),
  `src/app/ui.ts` (search icon), `src/app/styles.css`
- Test: `tests/search.test.ts`, `tests/router.test.ts`

**Interfaces:**
```ts
export function normalizeRu(s: string): string; export function normalizeAr(s: string): string;
export function normalizeEn(s: string): string;
export type WordHit = { word: Word; day: number; score: number };
export function searchWords(query: string, limit?: number, words?: readonly Word[]): WordHit[];
export type ScreenHit = { token: string; title: Bi; score: number };
export function searchScreens(query: string): ScreenHit[];
export function lookupWord(text: string, words?: readonly Word[]): Word | null;
export function dayOfWordId(id: string): number;   // "d12-07" -> 12, else 0
```

- [ ] Step 1: tests: Russian with and without stress / ё matches; English exact > prefix > contains; Arabic with
  diacritics and alef variants matches; empty query -> []; "day 12" and "12" -> day-12 screen; lookupWord finds a word
  from stress-marked text with punctuation; `parseRoute("#word-d12-07")` and an unknown id -> today.
- [ ] Step 2: fail. Step 3: implement (palette: dialog, input, grouped results, arrow keys, Enter, Esc, focus return;
  Ctrl+K and "/" when not typing; "?" opens the shortcuts sheet). Step 4: green. Step 5: commit
  `feat: search palette and word pages`.

### Task 4: Progress forecast, weakest words, week minutes

**Files:** Create `src/core/forecast.ts`; modify `src/app/views/progress.ts`, `src/app/styles.css`; test `tests/forecast.test.ts`

**Interfaces:**
```ts
export function dueForecast(p: Progress, now: number, days?: number): Array<{ date: string; n: number }>;
export function weekMinutes(p: Progress, startDate: string, now: Date): { minutes: number; plan: number; week: number };
```

- [ ] Step 1: tests: overdue counted today, a card due in 3 study days lands on day 3 (04:00 cutoff respected), 7
  entries; week minutes sum only the current course week; plan 840.
- [ ] Step 2-5: fail, implement (forecast bar chart reusing the chart look, weakest 8 with drill link, week meter),
  green, commit `feat: progress forecast and weak words`.

### Task 5: Coach

**Files:** Create `src/core/coach.ts`; modify `src/app/views/today.ts`, `src/app/shell.ts` (next-move button),
`src/app/styles.css`; test `tests/coach.test.ts`

**Interfaces:**
```ts
export type MoveKind = "step" | "review" | "catchup" | "session" | "weak" | "test" | "setup" | "done";
export type Move = { id: string; kind: MoveKind; title: Bi; why: Bi; minutes: number; action: string };
export type CoachDay = { n: number; kind: DayKind; title: Tri };
export type CoachInput = { progress: Progress; now: Date; dayOf: (n: number) => CoachDay | undefined; weakCount: number };
export function planMoves(input: CoachInput): Move[];
export function missedDays(p: Progress, today: number): number[];          // earlier days with < 4 of 7 steps
export function catchUpPlan(missed: readonly number[], todayISO: string): Array<{ date: string; day: number }>;
```

- [ ] Step 1: tests (fixed local times): 07:10 on day 4 -> first move is the morning block's next step with a "block runs
  to 07:45" reason; 12:00 with 30 due -> review first, ~13 min; missed days 2 and 3 -> catch-up move for day 2 and a plan
  of day 2 today, day 3 tomorrow; 19:30 -> "Run my evening session"; 4 weak -> weak move; day 5 -> test-on-day-7 move;
  everything done -> "done" move naming tomorrow; before day 1 -> setup; after day 56 -> review/weak.
- [ ] Step 2-5: fail, implement (Today "Next move" card + up to 3 more; header button showing the top move), green,
  commit `feat: study coach`.

### Task 6: Session runner and celebration

**Files:** Create `src/core/session.ts`, `src/app/components/session.ts`; modify `src/app/main.ts` (mount bar,
`ctx.session`), `src/app/context.ts`, `src/app/views/today.ts` (Run buttons, celebration), `src/app/styles.css`;
test `tests/session.test.ts`

**Interfaces:**
```ts
export type SessionState = { v: 1; date: string; block: Block; index: number; stepStart: number;
  pausedAt: number | null; pausedMs: number; done: StepId[] };
export function startSession(block: Block, steps: readonly Step[], doneIds: readonly string[], now: number): SessionState | null;
export function sessionStep(s: SessionState, steps: readonly Step[]): Step | null;
export function remainingMs(s: SessionState, steps: readonly Step[], now: number): number;
export function pauseSession(s: SessionState, now: number): SessionState;
export function resumeSession(s: SessionState, now: number): SessionState;
export function advanceSession(s: SessionState, steps: readonly Step[], now: number, markDone: boolean): SessionState | null;
export function parseSession(raw: unknown, todayISO: string): SessionState | null;
// Ctx.session: { start(block: Block): void; active(): boolean }
```

- [ ] Step 1: tests: start skips done steps and returns null when the block is done; remaining counts down and holds
  while paused; resume shifts the start by the pause; advance marks done and moves to the next not-done step, null after
  the last; parse rejects another day, wrong version, bad block, out-of-range index.
- [ ] Step 2-5: fail, implement (bar outside the screen area; 1 s tick updates only the bar; time-up ticks the step via
  `toggleStep` when not done, chimes, navigates to the next step's screen; Pause/Next/Stop; summary toast; Today shows
  "Run morning/evening session"; completing all 7 steps shows a reduced-motion-aware celebration), green, commit
  `feat: guided study sessions`.

### Task 7: Agentic tutor

**Files:** Create `src/core/tutorTools.ts`; modify `src/core/tutorPrompt.ts` (coach mode, status in prompts),
`src/app/claude.ts` (tools and limits types), `src/app/components/chat.ts` (tools wiring, activity lines, offers, undo),
`src/app/router.ts` (`tutor-coach`), `src/app/styles.css`; test `tests/tutorTools.test.ts`, `tests/course.test.ts`

**Interfaces:**
```ts
export type Offer = { kind: "screen"; token: string; label: string } | { kind: "drill" };
export type ToolHost = { progress(): Progress; update(fn: (p: Progress) => Progress): void; now(): number; offer(o: Offer): void;
  log(line: ToolLog): void };
export type ToolLog = { tool: string; text: Bi; undo?: () => void };
export type TutorTool = { name: string; description: string; inputSchema?: { type: "object"; properties?: Record<string, unknown>; required?: string[] };
  run(input: Record<string, unknown>, host: ToolHost): unknown };
export const TUTOR_TOOLS: readonly TutorTool[];
export type LearnerStatus = { day: number; title: string; level: string; due: number; deck: number; streak: number;
  stepsDone: number; weak: Array<{ ru: string; en: string; misses: number; lapses: number }>; missedDays: number[] };
export function learnerStatus(p: Progress, now: Date): LearnerStatus;
export function statusText(s: LearnerStatus): string;
// SampleOptions.tools?: SampleTool[]; SampleCap.limits?(): Promise<{ tools?: { maxCount: number } }>
```

- [ ] Step 1: tests: status fields from a known progress; find_word ranks; add_words_to_deck adds course words only,
  caps at 10, reports alreadyIn/unknown, and its undo removes only the cards it added; record_mistake by id and by
  Russian text, throws on an unknown word; suggest_screen validates the token (unknown -> throws) and only offers;
  suggest_weak_drill offers; coach-mode rules mention the tools only when tools are on; the web hand-off prompt includes
  the status line; a fake `sample` that calls two tools drives the executors through the chat's tool adapter.
- [ ] Step 2-5: fail, implement (tools only when `limits().tools`; `cache: false` with tools; activity lines with Undo;
  offers as buttons; "Coach me" tab), green, commit `feat: agentic tutor`.

### Task 8: Verify and ship

- [ ] Step 1: `node scripts/verify.ts all` + stress + links green; build.
- [ ] Step 2: screenshots of Today, weak, word page, palette, progress, tutor coach, session bar in light, dark, Arabic.
- [ ] Step 3: 375 and 1280 px sweep over every route (incl. `weak`, a word page, `tutor-coach`) with an overflow control.
- [ ] Step 4: merge to main, push, CI and Pages green, live check of the coach, palette, word page, weak drill, session bar.
- [ ] Step 5: republish the claude.ai copy, verify by containment; update gates and memory.
