# Russian in 56 Days — Design Spec

Date: 2026-09-27 · Status: approved (approach A, routine, hosting and agents chosen in chat; build authorised with "proceed")

## 1. Goal and honest outcome

One learner, starting from **zero** (cannot read Cyrillic), studying **~2 hours a day for 8 weeks**
(Monday 2026-09-28 → Sunday 2026-11-22, start date configurable), with **speaking and understanding**
as the priority and every explanation in **English and Arabic**.

About 112 hours of study. Realistic target: **complete A1, early A2** —
fluent Cyrillic reading, ~750 active words and chunks, survival conversations (introductions, café,
shopping, directions, transport, daily routine, phone calls, health, travel), all six cases in their
high-frequency patterns, present/past/future tense, and the aspect distinction in its common uses.
Fluency is not promised and the app never claims it.

## 2. Method (why the day looks the way it does)

| Principle | Where it lives in the app |
|---|---|
| Retrieval practice + spaced repetition (SM-2 family, Anki-style learning steps) | Morning review, every card graded Again/Hard/Good/Easy |
| Frequency first | Vocabulary chosen for everyday speech; function words early |
| Comprehensible input | Dialogues built from words already taught; graded video links |
| Shadowing | Listen → repeat at 0.8× and 1.0× on every word, phrase and dialogue line |
| Output with feedback | Tutor role-play every evening; journal corrected every day |
| Explicit pronunciation | Stress on every word, vowel reduction, soft/hard consonants, ы, final devoicing |
| Interleaving and cumulative review | Saturday immersion, Sunday review and test, week-4 and week-8 checkpoints |

## 3. The daily routine (defaults, editable in Settings)

| Block | Time | Step |
|---|---|---|
| Morning 45 min | 07:00–07:15 | Spaced-repetition review (audio on every card) |
| | 07:15–07:30 | Listening: the day's video or dialogue, with shadowing |
| | 07:30–07:45 | Preview of tonight's new words: listen and repeat |
| Evening 75 min | 20:00–20:25 | Lesson: grammar point + dialogue (EN / AR explanations) |
| | 20:25–20:45 | Drills: quizzes, listening, typing, speak-and-check |
| | 20:45–21:05 | Conversation with the tutor on the day's scenario |
| | 21:05–21:15 | Journal: 3–5 sentences, corrected; progress logged |

Weekdays teach new material. **Saturday** is immersion (a cartoon or real video with a worksheet and a
few words). **Sunday** is review and a weekly test with a speaking part — no new material.

## 4. Curriculum (56 days)

| Week | Theme | Grammar spine | Scenario |
|---|---|---|---|
| 1 | Sounds and first words | Alphabet in 3 groups, stress and reduction, "no *to be*", pronouns | Greeting, introducing yourself |
| 2 | Me and my world | Gender, plurals and the spelling rule, 1st and 2nd conjugation, possessives | Talking about family and work |
| 3 | Where? | Prepositional case (в/на, о), numbers to 100, time, жить | Finding places in a city, telling the time |
| 4 | Wants and needs | Accusative (inanimate, animate, pronouns), хотеть, мочь, есть/пить, adjectives | Café and shopping (A1 checkpoint on day 28) |
| 5 | My day | Past tense, reflexive verbs, genitive (нет, у, quantity, possession), aspect intro | Daily routine, yesterday |
| 6 | Going places | Dative (нравиться, нужно, age), future tense, verbs of motion, куда vs где | Transport and directions |
| 7 | People and preferences | Instrumental, adjective agreement, comparatives, weather and health | Describing people, at the doctor |
| 8 | Putting it together | Six-case overview, complex sentences, imperative, storytelling | Plans, travel, telling a story (final test day 56) |

The exact per-day titles, goals, grammar points and target word lists live in
`src/content/syllabus.ts` — the single backbone every lesson file is written from.

## 5. Content model

Every Russian string carries a **stress mark** (U+0301 after the stressed vowel) on every word with
two or more vowels, none on words with one vowel, none on words containing ё. Every learner-facing
explanation is bilingual (`{en, ar}`). Arabic is Modern Standard Arabic.

A day holds: title (ru/en/ar), can-do goals, words and phrases (ru, pronunciation respelling, en, ar,
part of speech, gender or forms, example sentence), grammar sections with tables, one dialogue (lesson
days), authored exercises (choice, fill, order, translate), pronunciation drills, topic tags that pull
verified videos from the media library, a tutor scenario, a journal prompt and a culture note.
Saturdays add a watch-and-answer worksheet; Sundays hold a test.

The pronunciation respelling (`say`) is written for speaking, not for strict transliteration: it
shows vowel reduction and final devoicing, and uppercases the stressed vowel (молоко → `malakO`).

## 6. The app

**Stack.** Strict TypeScript, no framework, no runtime dependencies. `tsc --noEmit` type-checks;
`esbuild-wasm` bundles (a pure-WASM build, because npm on this workstation has silently skipped the
native binaries esbuild and Rollup depend on). One build produces:

- `dist/index.html` — a complete, self-contained document for GitHub Pages and double-click use,
  plus `manifest.webmanifest`, `sw.js` and icons so the phone can install it and use it offline;
- `dist/artifact.html` — the same app as a page fragment for claude.ai, where the tutor and synced
  progress are available.

**Screens** (bare hash tokens, because claude.ai only forwards `#token` hashes): `#today`, `#day-N`,
`#review`, `#alphabet`, `#course`, `#tutor`, `#progress`, `#library`, `#settings`.

**Audio.** Browser speech synthesis in Russian, preferring the natural/neural voices (Edge
"Svetlana/Dmitry Online (Natural)", Chrome "Google русский", Android Google TTS, iOS "Milena"); stress
marks are stripped before speaking; two voices alternate in dialogues when available; speed 0.6–1.2×.
If no Russian voice exists, the app says so and explains how to add one (Windows, Android, iOS) in
EN/AR. Correct/incorrect chimes are synthesised with Web Audio — no audio files.

**Speaking.** Where the browser offers `SpeechRecognition` with `ru-RU` (Chrome/Edge, Android,
iOS Safari) the learner says the word or sentence and gets a similarity score and a word-level diff.
Where it does not — and always inside claude.ai, whose frame blocks the microphone — the drill falls
back to listen, repeat aloud and self-rate.

**Typing.** An on-screen ЙЦУКЕН keyboard for answers and the journal, plus instructions for adding the
Windows "Russian – Mnemonic" and phone Russian keyboards.

**Tutor.** On claude.ai the `sample` capability powers: free conversation, the day's role-play, "explain
this grammar", "check my sentence" and journal correction (structured JSON: corrected text, errors with
EN/AR explanations). The tutor is told the learner's day, known vocabulary and grammar so it stays
at level. On GitHub Pages the same buttons build the identical prompt and copy it for use in any
Claude chat, and link to the claude.ai copy.

**Progress.** SRS card states, completed steps, quiz and test scores, streak and journal. Stored in
`localStorage` on Pages (with JSON export/import to move between devices) and in the private `db`
document `data/users/<id>/progress` on claude.ai (saves debounced, one write in flight at a time).

**Calendar.** An `.ics` file with 112 events (morning and evening block for each of the 56 days, each
titled with that day's lesson) — downloadable from the Pages version.

**Look.** A Gzhel-porcelain identity: cobalt on porcelain white, a deep-cobalt night theme, and rowan
red reserved for the stressed vowel — the app paints every stressed vowel the way learner
textbooks mark stress. Faces: Oranienbaum (display, Cyrillic Didone), Golos Text (body and UI, built
for Russian), Marck Script (handwritten Cyrillic in the alphabet module), IBM Plex Sans Arabic
(Arabic). Works at 375 px, both themes, keyboard focus visible, reduced motion respected.

## 7. Claude Code agents (in the repo)

| Agent | Job |
|---|---|
| `tutor` | Runs the evening lesson for day N from the course data; teaches, drills, checks answers |
| `conversation-partner` | Role-plays the day's scenario using only vocabulary taught so far; corrects after each turn |
| `writing-corrector` | Corrects journal entries: corrected text with stress, error list by type, EN/AR explanations, follow-up drills |
| `pronunciation-coach` | Targeted drills: stress, reduction, soft/hard pairs, ы/и, ш/щ, devoicing |
| `study-coach` | Reads an exported progress file, finds weak areas, adjusts next week, writes a weekly report |

Slash commands wrap the common calls (`/today`, `/roleplay`, `/check`, `/week-review`), and
`scripts/day.ts` / `scripts/vocab.ts` print a day's lesson or the cumulative vocabulary as Markdown so
the agents read course data rather than guess. Journal and progress folders are git-ignored: the repo
is public and those are personal.

## 8. Quality bar (each is a runnable check)

- `tsc --noEmit` strict passes; unit tests pass (SRS, schedule and ICS, text normalisation and
  stress handling, answer checking, storage, content model).
- Content validator: 56 days, week/day numbering, bilingual fields non-empty, unique ids, stress-mark
  rule on every Russian string, exercise answers well-formed, media tags resolve, volume targets met.
- Independent stress check: a random sample of words compared against Wiktionary headwords.
- Link check: every URL answers; every YouTube video verified through oEmbed with its recorded title
  and channel (a fabricated or dead video fails the build).
- Separate reviewer agents proof-read every week for Russian and Arabic accuracy.
- Rendered check in a real browser: every screen, console clean, 375 px without horizontal scroll,
  both themes.
- CI on every push; Pages deploys from `main`; the live page is fetched and matched to the build id.

## 9. Delivery

- Local: `C:\dev\russian-intensive`; commits under the GitHub no-reply address.
- GitHub: public repo `AhmedNasr289/russian-intensive`, Pages via Actions.
- claude.ai: the artifact copy with `sample`, `db`, `user` and `downloads`.

## 10. Out of scope

Accounts or a backend, native apps, recorded human audio (links to Forvo/OpenRussian cover native
recordings), FSRS, leaderboards. Creating calendar events in the learner's Google Calendar is offered
after delivery, never done silently.
