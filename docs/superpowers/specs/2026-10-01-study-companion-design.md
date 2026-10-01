# Study companion: coach, session runner, weak words, dictionary, agentic tutor

Approved by Ahmed on 2026-10-01 ("Build all six"). The app already teaches; this makes it plan, run and adapt the study day,
and lets the tutor act in the app.

## Goals

1. The learner never has to decide what to do next: the app ranks the best next moves, with a reason and a time estimate.
2. A study block can run hands-free: the app walks through its steps on a timer and ticks them off.
3. The app remembers what the learner gets wrong and drills it until it sticks.
4. Any word or screen is two keystrokes away, and every word has a detail page.
5. In claude.ai the tutor can read the learner's state and act in the app (with consent for anything that moves the screen).
6. Progress shows what is coming (review forecast), what is weak, and time against the plan.

Non-goals: push notifications (needs a server), new course content, accounts. Everything stays offline-capable and static.

## Data

`Progress` gains one optional field, read with a default so every saved progress still loads:

```ts
misses: Record<string, { n: number; last: number }>   // course word id -> times missed, last miss (ms)
```

- `recordMiss(p, id, now)` adds one; `recordHit(p, id, now)` removes one and deletes the entry at zero.
- Only course word ids are stored (unknown ids are ignored). Cap: 400 entries (oldest `last` dropped).
- `validateProgress` reads it (malformed -> invalid file, like every other field); absent -> `{}`.
- It travels in the claude.ai `progress` document with the rest (no new document).

Session runner state is a per-device convenience: `localStorage["ru56.session.v1"]`, read inside try/catch.

## Modules (all pure, all unit-tested, in `src/core/`)

- **weak.ts**: `weakWords(progress, now, limit)` ranks words by `2 * misses + 1.5 * lapses + ease penalty
  (4 * (2.5 - ease) when ease < 2.5) + 2 if relearning`, words with score > 0 only, ties by most recent miss then id.
  Each result carries its reasons (missed n, forgotten n, hard). `weakDrillItems(words, pool, seed)` builds choice items
  (meaning and listening alternating) tagged with `wordId`.
- **coach.ts**: `planMoves(input)` with input `{ progress, now, dayOf(n) }` returns ranked `Move[]`:
  `{ id, kind, title: Bi, why: Bi, minutes, action }`, `action` a route token or `session-morning` / `session-evening`.
  Rules, in priority order:
  1. inside a study block: the block's next unfinished step ("It is 07:10; the morning block runs to 07:45");
  2. cards due now: "Review N cards", about 25 s per card, at least 2 min;
  3. catch-up: earlier course days with fewer than 4 of 7 steps done; `catchUpPlan` puts one missed day per calendar
     day, oldest first, each about 30 min (its words and lesson), and the move names the first;
  4. the next unfinished step of today outside a block, or "Run my evening session" when the evening block is next;
  5. weak words (3 or more): a weak-word drill, about 5 min;
  6. a test day within 2 days: "Test on day 7 in 2 days: review the week";
  7. nothing left: "Day complete" with tomorrow's title.
  Before day 1 the plan is setup (alphabet, sound check); after day 56 it is review and weak words.
- **session.ts**: the runner's state machine over `dailySteps()`: `start(block, now)`, `remainingMs`, `pause`, `resume`,
  `next` (marks the step done), `skip` (does not), `isOver`, plus `parseSession(raw)` that rejects malformed or stale
  (another day) state.
- **search.ts**: `normalizeQuery` for Russian (stress stripped, lower case, ё as е), English (lower case) and Arabic
  (diacritics and tatweel removed, alef/ya/ta-marbuta forms unified); `searchWords(query, limit)` scores exact > prefix >
  word-start > contains across ru/en/ar; `searchScreens(query)` matches screen names and "day 12" / "12";
  `lookupWord(text)` finds a course word from Russian text (for the tutor).
- **forecast.ts**: `dueForecast(progress, now, days)` counts cards due on each of the next study days (overdue counted
  today); `weekMinutes(progress, startDate, now)` sums study minutes of the current course week against 7 x 120.
- **tutorTools.ts**: the tutor's page tools as plain executors over a small host (`progress()`, `update(fn)`,
  `now()`, `offer(action)`), so they are testable without a browser:
  - `get_learner_status()` -> day, title, level, due, deck counts, streak, today's steps, top weak words, missed days;
  - `find_word({query})` -> up to 5 course words with id, ru, en, ar, day, inDeck;
  - `add_words_to_deck({ids})` -> adds up to 10 course words, returns added / alreadyIn / unknown (undoable);
  - `record_mistake({word, note})` -> records a miss on a course word found by id or Russian text;
  - `suggest_screen({token, label})` -> validates the route and OFFERS a button in the chat; nothing moves until the
    learner taps it;
  - `suggest_weak_drill()` -> offers the weak-word drill the same way.
  Inputs are coerced and checked; a bad input throws a message Claude can read.

## Screens and components (`src/app/`)

- **Today**: a "Next move" card at the top (the first move, its reason, minutes, one Start button, then up to three more
  moves), "Run morning / evening session" buttons on each block, and a celebration when all 7 steps of the day are done.
- **Session bar** (`components/session.ts`): fixed under the header (above the tab bar on phones), outside the screen
  area so re-renders keep it: step title, mm:ss left, step dots, Pause, Next, Stop. It opens each step's screen, ticks a
  step done when its time ends or on Next, survives reloads, ends with a summary.
- **Weak words** (route `weak`): the ranked list with reasons, tap to hear, link to each word, and the drill. Right answers
  call `recordHit`, wrong ones `recordMiss`. Linked from Today (coach), Review and Progress.
- **Word page** (route `word-d12-07`): big stress-painted word, listen / slow / spell, respelling, meaning, part of speech,
  gender, forms, example (playable), note, "Taught on day N" link, deck status (not in deck / new / learning / due in X,
  lapses, misses), Add to deck.
- **Search palette** (`components/palette.ts`): Ctrl+K, "/" (when not typing) or the header search button; words and
  screens in one list; arrow keys, Enter, Esc; a word opens its page. Results show stress and meaning in the learner's
  language.
- **Tutor**: new mode "Coach me" (`tutor-coach`). When `sample.limits()` reports `tools`, every tutor mode passes the page
  tools; activity lines appear in the chat ("Katya added 3 words to your deck · Undo", "Katya suggests: Day 5 grammar
  [Open]"). Without tools the chat works as before. The web hand-off prompt adds the learner's status (due, weak words).
- **Progress**: 7-day review forecast chart, weakest words list (top 8, tap to hear, link to drill), this week's minutes
  against the plan.
- **Shortcuts sheet** ("?"): the keys for search, help, review grades, Pronounce, session.
- **Header**: search button; a "next move" button with the top move's short title.
- Practice word quizzes tag their items with `wordId` and record misses and hits.

Everything is bilingual (`{en, ar}`, MSA), works in Arabic (RTL) mode, light and dark, and at 375 px.

## Testing and acceptance

- Unit tests for every core module above, including: catch-up spreading, in-block priority, the before/after-course
  plans, session timing across pause/resume and reload, malformed session and progress input, Arabic and Russian search
  normalization, each tutor tool's coercion and limits and undo, the `word` and `weak` routes, and old progress without
  `misses` still loading.
- Build, type-check, content, secrets, links: all green. 91+ route sweep at 375 and 1280 px with 0 errors and 0 overflow
  (new routes included), screenshots of every new screen in light, dark and Arabic.
- Live check on GitHub Pages after deploy, and the claude.ai copy republished. The tutor's tool calls can only run in the
  owner's signed-in claude.ai viewer: they are verified against a fake `sample` that calls the tools, and that limit is
  stated in the report.
