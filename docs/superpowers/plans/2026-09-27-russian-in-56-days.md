# Russian in 56 Days — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and ship a static, bilingual (EN/AR) Russian course app — 56 days, audio, speaking, spaced repetition, schedule, verified references, in-app tutor, Claude Code agents — to a public GitHub repo, GitHub Pages and a claude.ai artifact.

**Architecture:** Pure logic lives in `src/core` (unit-tested, no DOM); course data lives in `src/content` (typed, validated by a script); the UI in `src/app` renders with a tiny hyperscript helper and hash-token routing. One build turns it into a self-contained HTML document for Pages and an HTML fragment for claude.ai.

**Tech Stack:** TypeScript 6.0.3 (strict, `tsc --noEmit`), esbuild-wasm 0.28.2 (bundle), Node 24 (runs `.ts` scripts and `node --test` directly via type stripping), Web Speech API, Web Audio, GitHub Actions + Pages, claude.ai runtime capabilities `sample`/`db`/`user`/`downloads`.

**Spec:** `docs/superpowers/specs/2026-09-27-russian-intensive-design.md`

**Execution mode (decided):** inline in the driver session for all code (one coherent codebase), with parallel subagents only for the eight week-content files, the media research and the independent content reviews (Task 5, Task 17). Gates ledger: `.gates/GATES.md`, run with `node ~/.claude/skills/unlazy/scripts/gate-check.mjs .gates/GATES.md`.

## Global Constraints

- Every TypeScript file passes `tsc --noEmit` under `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`, `erasableSyntaxOnly` (no enums, no namespaces with runtime code, no parameter properties).
- Relative imports carry the `.ts` extension (`import { x } from "./text.ts"`); type-only imports use `import type`.
- Zero runtime dependencies. Dev dependencies are exactly `typescript@6.0.3`, `esbuild-wasm@0.28.2`, `@types/node@24`.
- Every Russian string in content: U+0301 after the stressed vowel of every word with ≥2 vowels; none on 1-vowel words; none on words containing ё. Arabic is Modern Standard Arabic.
- Every learner-facing explanation is bilingual `{ en, ar }`; Arabic renders with `lang="ar" dir="rtl"`.
- Routes are bare hash tokens matching `^[A-Za-z0-9._~-]*$` (claude.ai forwards nothing else).
- No `alert/confirm/prompt`, no `innerHTML` with model or content text (build DOM with text nodes), no iframes in the artifact target, no service worker in the artifact target.
- `localStorage` access always inside try/catch; the app renders with no storage.
- No credentials, personal email or local user paths in tracked files. `journal/`, `progress/`, `.gates/`, `dist/` are git-ignored.
- Default start date `2026-09-28`, morning `07:00` (45 min), evening `20:00` (75 min).

## File map

```
package.json, tsconfig.json, .gitignore, LICENSE, README.md, CLAUDE.md
.github/workflows/ci.yml            typecheck + test + validate + build on push/PR
.github/workflows/pages.yml         build and deploy dist/ to Pages on push to main
.github/workflows/links.yml         weekly + manual link check
.claude/agents/*.md                 tutor, conversation-partner, writing-corrector, pronunciation-coach, study-coach
.claude/commands/*.md               today, roleplay, check, week-review
docs/content-style-guide.md         rules every content author follows
src/content/types.ts                content model types
src/content/syllabus.ts             the 56-day backbone (titles, grammar, target words, scenario, topics)
src/content/weeks/week1..8.ts       the full lessons (one file per week, one author each)
src/content/index.ts                COURSE: Day[] assembled from the weeks
src/content/alphabet.ts             33 letters
src/content/media.ts                verified videos, channels, podcasts, sites, books, apps
src/core/text.ts                    stress handling, normalisation, similarity, diff
src/core/srs.ts                     SM-2 scheduler with learning steps
src/core/schedule.ts                course day maths, daily steps, current step
src/core/ics.ts                     calendar export
src/core/answers.ts                 typed/ordered answer checking
src/core/progress.ts                Progress/Settings model, defaults, validation, mutations
src/core/storage.ts                 LocalStore, ArtifactDbStore, debounced saver
src/core/audio.ts                   voice ranking, speech synthesis, synthesized sound effects
src/core/recognition.ts             SpeechRecognition + MediaRecorder wrappers
src/core/tutorPrompt.ts             tutor rules and journal-correction prompt + parser
src/core/course.ts                  course accessors (getDay, wordsUpTo, mediaFor...)
src/core/validate.ts                content validation rules (used by script and tests)
src/app/*.ts, src/app/views/*.ts, src/app/components/*.ts, src/app/styles.css, src/app/template.html
scripts/build.ts, verify.ts, validate-content.ts, check-links.ts, verify-stress.ts, day.ts, vocab.ts, icons.ts
tests/*.test.ts
public/icon.svg
```

---

### Task 1: Scaffold and verification harness

**Files:** Create `tsconfig.json`, `scripts/verify.ts`, `LICENSE`. (`package.json`, `.gitignore` exist.)

**Interfaces — Produces:** `node scripts/verify.ts <step>` printing exactly one line `VERDICT <step> PASS ...` or `VERDICT <step> FAIL <reason>`; steps `typecheck | test | content | stress | links | build | agents | secrets | readme | remote | ci | pages | all`. Failure paths must never print the substring `PASS`.

- [ ] Write `tsconfig.json` with the Global Constraints flags, `lib: ["ES2022","DOM","DOM.Iterable"]`, `types: ["node"]`, `module: "ESNext"`, `moduleResolution: "Bundler"`, `allowImportingTsExtensions`, `noEmit`, `skipLibCheck`, include `src`, `tests`, `scripts`.
- [ ] Write `scripts/verify.ts`: `typecheck` runs `node node_modules/typescript/bin/tsc --noEmit -p .` (PASS iff exit 0); `test` runs `node --test --test-reporter=tap tests/` and parses `# tests N`, `# pass N`, `# fail N` (PASS iff fail=0, N≥1, pass=N; prints `tests=N pass=N `; unparseable → FAIL `unparseable`); other steps delegate to their scripts and parse each script's single summary line.
- [ ] Run `node scripts/verify.ts typecheck` → expect PASS on the empty project. Commit.

### Task 2: Content model, syllabus backbone, style guide

**Files:** Create `src/content/types.ts`, `src/content/syllabus.ts`, `docs/content-style-guide.md`.

**Interfaces — Produces:**
```ts
export type Bi = { en: string; ar: string };
export type Tri = { ru: string; en: string; ar: string };
export type Pos = "noun"|"verb"|"adj"|"adv"|"pron"|"num"|"prep"|"conj"|"part"|"interj"|"phrase";
export type Word = { id: string; ru: string; say: string; en: string; ar: string; pos: Pos; g?: "m"|"f"|"n"|"pl"; forms?: string; ex?: Tri; note?: Bi };
export type Table = { caption: Bi; head: string[]; rows: string[][] };
export type GrammarPoint = { id: string; title: Bi; en: string[]; ar: string[]; tables?: Table[]; examples: Tri[] };
export type Line = { who: "A"|"B"; name: string; ru: string; en: string; ar: string };
export type Dialogue = { title: Tri; setting: Bi; lines: Line[] };
export type Choice = { kind: "choice"; prompt: Bi; ru?: string; options: string[]; answer: number; why: Bi };
export type Fill = { kind: "fill"; prompt: Bi; ru: string; answers: string[]; why: Bi };
export type Order = { kind: "order"; prompt: Bi; tokens: string[]; answers: string[]; why: Bi };
export type Translate = { kind: "translate"; prompt: Bi; answers: string[]; why: Bi };
export type Exercise = Choice | Fill | Order | Translate;
export type Drill = { ru: string; say: string; focus: Bi };
export type Pronunciation = { title: Bi; en: string[]; ar: string[]; drills: Drill[] };
export type Speaking = { scenario: Bi; tutorBrief: string; prompts: Tri[] };
export type Worksheet = { before: Bi[]; questions: Choice[]; retell: Bi };
export type TestSection = { title: Bi; items: Exercise[] };
export type Test = { sections: TestSection[]; speaking: Bi[] };
export type DayKind = "lesson"|"immersion"|"review";
export type Day = { n: number; week: number; kind: DayKind; title: Tri; goals: Bi[]; words: Word[]; grammar: GrammarPoint[]; dialogue?: Dialogue; pronunciation?: Pronunciation; exercises: Exercise[]; topics: string[]; search: string[]; speaking: Speaking; journal: Bi; culture?: Bi; worksheet?: Worksheet; test?: Test };
export type SyllabusDay = { n: number; kind: DayKind; title: Tri; grammar: string[]; words: string[]; scenario: string; topics: string[] };
export type MediaKind = "video"|"channel"|"playlist"|"podcast"|"site"|"book"|"app";
export type MediaItem = { id: string; kind: MediaKind; title: string; by: string; url: string; topics: string[]; level: "A0"|"A1"|"A2"|"B1"; lang: "ru"|"en"|"ru+en"|"ar"; note: Bi; minutes?: number; verified: string };
export type Letter = { upper: string; lower: string; name: string; group: "friend"|"false-friend"|"new"|"sign"; ipa: string; sound: Bi; example: Tri & { say: string }; tip?: Bi };
```
- [ ] Write the types; write `SYLLABUS: SyllabusDay[]` with 56 entries (kind: `n%7===6` immersion, `n%7===0` review, else lesson) and ~14 target words per lesson day; write the style guide (stress rule, `say` respelling rule, word id format `d<n>-<2 digits>`, per-kind minimums, dialogue vocabulary rule, tone). Typecheck, commit.

### Task 3: `core/text.ts` (TDD)

**Produces:** `ACUTE`, `stripStress(s)`, `isRuVowel(ch)`, `countVowels(word)`, `tokenizeRu(s): string[]` (Cyrillic words, hyphen-joined compounds kept whole, stress marks kept), `checkStress(s): StressIssue[]` with `problem: "missing"|"multiple"|"monosyllable"|"with-yo"|"misplaced"`, `normalizeAnswer(s)` (lowercase, strip stress, ё→е, strip `.,!?;:«»"“”„()` and dashes at edges, collapse spaces, keep inner hyphens), `levenshtein(a,b)`, `similarity(a,b)` (1 − lev/maxLen over normalised strings, 1 for two empties), `wordDiff(target, heard): {word; ok}[]`, `splitStress(s): {text; stressed}[]` (vowel + U+0301 → one stressed segment).

Test cases (tests/text.test.ts): `stripStress("молоко́")==="молоко"`; `countVowels("здра́вствуйте")===3`; `tokenizeRu("Как дела́? По-ру́сски!")` → `["Как","дела́","По-ру́сски"]`; `checkStress("молоко́ и хлеб")` → `[]`; `checkStress("молоко")` → one `missing`; `checkStress("мо́локо́")` → `multiple`; `checkStress("да́")` → `monosyllable`; `checkStress("ещё́")` → `with-yo`; `checkStress("м́олоко")` → `misplaced`; `normalizeAnswer("  Ещё́ РАЗ! ")==="еще раз"`; `levenshtein("кот","кит")===1`; `similarity("привет","превет")>0.8`; `wordDiff("я люблю чай","я любил чай")` marks only the middle word wrong; `splitStress("до́м")` has exactly one stressed segment `"о́"`.

- [ ] Write tests, run (fail), implement, run (pass), commit.

### Task 4: Content validator, course assembly, exemplar day

**Files:** Create `src/core/validate.ts`, `scripts/validate-content.ts`, `src/content/index.ts`, `src/content/weeks/week1..8.ts` (week1 holds the hand-written exemplar Day 4; others start as `[]`), `src/content/media.ts` (empty list + `TOPICS` controlled vocabulary), `src/core/course.ts`, `tests/content.test.ts`.

**Produces:** `validateDays(days: Day[], opts: { full: boolean; mediaTopics: Set<string> }): { errors: string[]; warnings: string[]; words: number }`; CLI prints `CONTENT days=<n> errors=<e> words=<w> warnings=<k>` (or `WEEK <n> days=<d> errors=<e> words=<w>` with `--week N`); `COURSE: Day[]`; `getDay(n)`, `wordsUpTo(n)`, `allWords()`.

Rules: day numbering/week/kind; bilingual fields non-empty and Arabic fields contain Arabic letters; `checkStress` clean on every Russian display string (titles, words, examples, grammar examples and Cyrillic table cells, dialogue lines, drills, speaking prompts, Cyrillic choice options, worksheet); word ids unique and well-formed; nouns carry `g`; minimums — lesson: goals≥2, words≥10 (days 1–3: ≥8), grammar≥1 with ≥2 examples, dialogue ≥6 lines, exercises≥8; immersion: words≥5, worksheet with ≥4 questions, exercises≥4; review: test with ≥3 sections and ≥15 items, ≥3 speaking prompts; choice `answer` in range, ≥3 unique options; fill has exactly one `___`; order tokens rebuild an accepted answer; every topic in `TOPICS`; full mode requires 56 days and ≥700 unique words.

- [ ] Write validator + tests (a valid minimal day passes; each broken rule yields its error), write the exemplar Day 4 (Introductions) and make `--week 1` report 0 errors for it, commit.

### Task 5: Dispatch content authors and media researcher (parallel, background)

- [ ] Brief = contract (types, style guide, syllabus rows for the week, exemplar day path) + "own only `src/content/weeks/weekN.ts`" + "run `node scripts/validate-content.ts --week N` until errors=0, then report word count". One agent per week (8), plus one media agent owning `src/content/media.ts` (every `TOPICS` tag covered; every YouTube video verified via oEmbed with recorded title/channel; library of channels, cartoons, podcasts, sites, books, apps; `node scripts/check-links.ts` clean).
- [ ] While they run, continue with Tasks 6–16. On return, re-run each week's validator yourself (never trust the self-report).

### Task 6: `core/srs.ts` (TDD)

**Produces:** `type Grade = 0|1|2|3`; `type CardState = { id; phase: "new"|"learning"|"review"|"relearning"; step; ease; interval; due; reps; lapses; last? }`; `newCard(id, now)`, `review(card, grade, now)`, `isDue(card, now)`, `studyDayStart(ts, cutoffHour=4)`, `previewIntervals(card, now): Record<Grade, number>`, `formatInterval(ms)`.

Rules: learning steps 1 min, 10 min; relearning 10 min; graduating 1 day; easy 4 days; ease 2.5 start, −0.20 on lapse, −0.15 on hard, +0.15 on easy, floor 1.3; review intervals hard `max(i+1, round(i*1.2))`, good `max(i+1, round(i*ease))`, easy `max(i+1, round(i*ease*1.3))`, lapse `max(1, round(i*0.5))`; cap 365 days; review-phase due = `studyDayStart(now) + interval days` (so evening reviews come due the next morning).

Tests: new→good→learning step 1 due +10 min; good again → review, interval 1, due at next study-day start; easy from new → interval 4; again in review → relearning, lapses 1, ease 2.3; ease never below 1.3 after 20 lapses; interval never above 365; `previewIntervals` returns 4 increasing values for a review card.

### Task 7: `core/schedule.ts` + `core/ics.ts` (TDD)

**Produces:** `COURSE_DAYS=56`; `dayNumber(startISO, now): number` (0 before, 1..56, 57 after); `dateOfDay(startISO, n)`; `weekOf(n)`; `kindOf(n)`; `addMinutes("HH:MM", m)`; `dailySteps(settings): Step[]` (7 steps, ids `m-review, m-listen, m-preview, e-lesson, e-drills, e-tutor, e-journal`, each `{ id, block, start, minutes, title: Bi, section }`); `currentStep(steps, now)`; `buildIcs({ settings, days: {n; title}[], appUrl, now }): string`; `escapeIcsText`, `foldLine`.

Tests: before start 0, start day 1, day 56 = start+55, after 57; kinds of 6/7/8; step times with 07:00/20:00 → 07:00,07:15,07:30,20:00,20:25,20:45,21:05; `addMinutes("23:50",20)==="00:10"`; ICS has 112 VEVENTs, CRLF everywhere, no line over 75 octets (UTF-8), escapes `,;\\` and newlines, first event `DTSTART:20260928T070000`.

### Task 8: `core/answers.ts` + `core/progress.ts` (TDD)

**Produces:** `checkTyped(input, accepted): { ok; close; best; score }` (ok = normalised equal; close = similarity ≥ 0.8); `checkOrder(tokens, accepted)`; `Settings`, `Progress` (`version:1`, `settings`, `cards`, `introduced: Record<string, number>`, `steps: Record<string,string[]>`, `scores`, `tests`, `journal[]`, `streak`, `studyLog: Record<iso, minutes>`, `reviewLog: Record<iso,{n;again}>`), `defaultSettings()`, `defaultProgress()`, `validateProgress(x)`, `toggleStep(p, day, stepId, minutes, now)`, `introduceDay(p, day, wordIds, now)`, `applyReview(p, cardId, grade, now)`, `touchStreak(p, isoDate)`, `isoDate(ts)`.

Tests: ё/stress/case-insensitive match; typo is `close` not `ok`; progress defaults validate; junk rejected with a reason; toggling a step twice removes it and minutes return; `introduceDay` twice adds no duplicates; streak 1→2 on consecutive days, reset to 1 after a gap; review log counts `again`.

### Task 9: `core/storage.ts` + capability access (TDD)

**Produces:** `interface ProgressStore { kind: "local"|"artifact"|"memory"; load(): Promise<Progress|null>; save(p: Progress): Promise<void> }`; `LocalStore(storage: StorageLike | null, key)`; `ArtifactDbStore(db: DbLike, uid)` writing `data/users/<uid>/progress` and `data/users/<uid>/journal` (journal only when changed); `createSaver(store, delayMs)` → `{ schedule(p); flush(): Promise<void>; pending(): boolean }` (debounced, one write in flight, latest wins); `src/app/claude.ts` with minimal typed `use()` wrappers returning `null` when absent.

Tests: round-trip through a fake Storage; a throwing Storage degrades to memory without throwing; five schedules in 10 ms produce one save of the last value; a slow save is never overlapped; the db store splits journal out and skips unchanged journal writes.

### Task 10: `core/audio.ts`, `core/recognition.ts`

**Produces:** `rankVoice({name, lang, localService}): number` (Natural/Neural/Online > Google > other ru; non-ru = −1), `guessGender(name)`, `listRussianVoices()`, `speak(text, { rate, voiceURI })`, `speakLines(lines, opts)` with `stop()`, `stopSpeaking()`, `sfx("ok"|"bad"|"done"|"tap")`; `recognitionSupported()`, `listenOnce()`, `recordingSupported()`, `recordClip(ms)`.
- [ ] TDD `rankVoice` and `guessGender` (tests/audio.test.ts); the browser-bound functions are exercised in Task 18.

### Task 11: `core/tutorPrompt.ts` (TDD)

**Produces:** `type TutorMode = "chat"|"roleplay"|"explain"|"check"`; `buildTutorRules({ day, known, explain, mode }): string`; `buildJournalPrompt({ day, known, explain }, text): string`; `type JournalCorrection = { corrected; score; errors: {original; fix; type; en; ar}[]; praise: Bi; next: Bi }`; `parseJournalCorrection(x: unknown): JournalCorrection | null`.
Tests: rules mention the day title, mode and learner level; a day-56 prompt with every known word stays under 60 000 bytes; parser accepts a valid object and rejects missing fields or bad types.

### Task 12: App shell

**Files:** `src/app/dom.ts` (`h()`, `clear()`, `frag()`), `src/app/router.ts` (`parseRoute(token): Route`, `routeToken(route)`), `src/app/env.ts` (host `web|file|artifact`, build id/target from `<meta>`), `src/app/store.ts` (state + saver + subscribers), `src/app/i18n.ts` (`bi(node)` renders en/ar per setting, `ru(text)` renders stress-coloured Russian), `src/app/styles.css`, `src/app/template.html`, `src/app/main.ts`, `src/app/views/shell.ts`; tests/router.test.ts.

Routes: `today`, `course`, `review`, `alphabet`, `tutor`, `tutor-<mode>`, `progress`, `library`, `settings`, `day-<n>`, `day-<n>-<section>` with sections `words|grammar|dialogue|practice|speak|watch|tutor|journal|worksheet|test`; unknown → today. Tests: each form parses and round-trips.

Look: tokens per spec §6 (porcelain/cobalt/rowan, night theme), fonts link, 16 px gutters, bottom tab bar under 768 px and a rail above, focus rings, reduced motion.

### Task 13: Views

- [ ] `today`: countdown before start; day N header; 7 timed steps with Start and Done; current step highlight; due-cards count; streak; words learned; setup checklist (voice test, keyboard, calendar).
- [ ] `course`: 8×7 tile grid with state (done / partial / today / future) and kind marker.
- [ ] `day`: sections per kind; Words (cards, play normal/slow, add to review), Grammar (EN/AR, tables, examples), Dialogue (play all with two voices, per line, shadow mode, translations toggle), Practice (quiz runner over authored + generated items, feedback, score saved), Speak (drills, recognition or self-rating), Watch (verified media, click-to-load embed on web, link-out in artifact, search links), Tutor, Journal (keyboard, save, correct), Worksheet, Test; prev/next day.
- [ ] `review`: SRS session, recognition/production alternation, reveal, four grades with interval labels, shortcuts Space and 1–4, empty state with next due time.
- [ ] `alphabet`: 33 letters by group, print + handwritten, detail with sound EN/AR, IPA, example with audio, reading drill, letter quiz. Data in `src/content/alphabet.ts`.
- [ ] `tutor`: artifact chat via `sample` (modes, Stop, error copy per code); web fallback copies the same prompt and links to claude.ai.
- [ ] `progress`: deck stats, retention (7 days), streak, minutes chart (last 14 days), test scores, journal history, export/import/reset.
- [ ] `library`: media grouped by kind with level/language chips and EN/AR notes, plus voice/keyboard setup guides.
- [ ] `settings`: start date, times, explanation language, respelling toggle, voice + rate + test, sounds, theme (web only), calendar download (web) / info (artifact), data export/import/reset, about (build id, host).

### Task 14: Build and PWA

**Files:** `scripts/build.ts`, `scripts/icons.ts`, `public/icon.svg`.
**Produces:** `dist/index.html` (full document, `<meta name="build-id">`, manifest link, SW registration), `dist/artifact.html` (fragment: `<title>` in first 8 KB, `<style>`, markup, `<script>`, no `<html>/<head>/<body>`), `dist/manifest.webmanifest`, `dist/sw.js` (cache named by build id), `dist/icon.svg`, `dist/icon-192.png`, `dist/icon-512.png`. Build id = first 12 hex of SHA-256 over JS+CSS+template.
- [ ] `verify.ts build`: runs the build, checks files, sizes < 16 MB, equal build ids, fragment rules, manifest parses.

### Task 15: Tooling scripts

- [ ] `scripts/day.ts <n>` prints the day as Markdown; `scripts/vocab.ts --upto <n>` prints cumulative vocabulary; `scripts/check-links.ts` checks every URL (YouTube videos by oEmbed with title/channel match, handles by 200, others by status < 400 with a browser user agent) and prints `LINKS total=<t> ok=<o> broken=<b>`; `scripts/verify-stress.ts --sample 100` compares random content words against Wiktionary headwords and prints `STRESS sampled=<s> checked=<c> agree=<a> disagree=<d>` plus each disagreement.

### Task 16: Agents, commands, CLAUDE.md, README, LICENSE

- [ ] Five agents (frontmatter `name`, `description`, `tools`), four commands (frontmatter `description`, `argument-hint`), `CLAUDE.md` (layout, commands, content rules), README in English and Arabic (what it is, the schedule table, how to start, phone install, voices and keyboards, tutor, agents, development, credits). `verify.ts agents|readme|secrets`.

### Task 17: Content integration and independent review

- [ ] Re-run `--week N` for all eight; run the full validator; fix.
- [ ] Dispatch four reviewer agents (two weeks each) with the style guide: check stress, grammar, naturalness, Arabic and English accuracy; fix in place and list every change.
- [ ] Run `verify.ts stress` and `verify.ts links`; fix disagreements after checking each against Wiktionary by hand.

### Task 18: Browser QA

- [ ] Build; open `dist/index.html` in the built-in browser; visit every route; read console errors; check audio button wiring, quiz flow, review flow, settings persistence, export; resize to 375 px and assert `scrollWidth <= clientWidth` on each screen; dark theme; fix and repeat.

### Task 19: GitHub, CI, Pages

- [ ] Workflows; `gh repo create AhmedNasr289/russian-intensive --public --source . --push`; enable Pages with `build_type=workflow`; wait for CI and Pages; `verify.ts remote|ci|pages`.

### Task 20: Artifact and hand-over

- [ ] Publish `dist/artifact.html` with `capabilities: { sample: {}, db: {}, user: {}, downloads: true }`; open it; ArtifactData `list` on the progress collection after one save; set the artifact URL in `src/app/config.ts`, rebuild, push; run the full gate ledger; report with the ledger pasted.
