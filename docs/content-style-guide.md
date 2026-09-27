# Content style guide — Russian in 56 Days

Every lesson file is written to this guide. The validator (`node scripts/validate-content.ts --week N`)
enforces the mechanical rules; this document explains them and adds the ones a script cannot check.

## 1. The learner

An Arabic-speaking adult (Egyptian, reads English well) who starts from **zero** — cannot read Cyrillic —
and studies about two hours a day for eight weeks. The priority is **speaking and understanding**.
Every explanation is given in **English and Arabic**. The learner's avatar in dialogues is **Ахме́д**
from Cairo. Tone: warm, direct, encouraging; never childish.

## 2. Files and ownership

- One file per week: `src/content/weeks/weekN.ts`, exporting `export const WEEK_N: Day[]` with **7 days**.
- Import only types: `import type { Day } from "../types.ts";` — no other imports, no helper functions,
  no URLs (videos come from the media library through `topics`), no emoji.
- Types: `src/content/types.ts`. Syllabus: `src/content/syllabus.ts` (titles, grammar, target words,
  scenario, topics per day). The exemplar lesson is **Day 4** in `src/content/weeks/week1.ts` — copy its
  structure, density and tone.
- Done means `node scripts/validate-content.ts --week N` prints `errors=0` and `node scripts/verify.ts typecheck`
  prints `VERDICT typecheck PASS`.

## 3. The stress rule (checked on every string, including Russian inside English/Arabic text)

- Put **U+0301 (combining acute)** right after the stressed vowel: `молоко́`, `Меня́ зову́т`.
- Every word with **two or more vowels** gets exactly one mark. Words with **one vowel** get none
  (`да`, `мне`, `хлеб`). Words with **ё** get none (`ещё`, `её`, `чёрный`).
- Exempt: word fragments with a hyphen at an edge (`-ами`, `чита-`), the clitics `обо, ото, изо, подо, передо`
  (`обо мне`), and all-capital abbreviations (`СССР`).
- Hyphenated words take one mark in total: `по-ру́сски`, `во-пе́рвых`, `како́й-то`.
- Stress must be **correct**, not just present: check any word you are not certain of. Common traps:
  `звони́т` (not зво́нит), `до́ма` (at home) vs `дома́` (houses), `пи́сьма` vs `письмо́`, `мо́жно`, `краси́вее`,
  `начала́` (she began), `по́нял` / `поняла́`. Mobile stress in short forms and past tenses deserves a second look.

## 4. `say` — the pronunciation respelling

Latin letters only, written for **speaking**: show vowel reduction and final devoicing, and write the
**stressed vowel in UPPERCASE** (monosyllables may stay lower case).

| Russian | say | why |
|---|---|---|
| молоко́ | malakO | unstressed о → a |
| сего́дня | sivOdnya | unstressed е → i, г → v |
| хлеб | khlyep | final б → p, soft л |
| Меня́ зову́т | minyA zavUt | each longer word shows its stress |
| здра́вствуйте | zdrAstvuytye | first в is silent |
| пожа́луйста | pazhAlusta | everyday pronunciation |
| О́чень прия́тно. | Ochin' priyAtna. | ь → apostrophe |

Letters: ж=zh, х=kh, ц=ts, ч=ch, ш=sh, щ=shch, ы=y, й=y, ь=', я=ya, ю=yu, ё=yo, soft е=ye after a vowel or
at the start (ест → yest). Keep it readable rather than phonetically perfect.

## 5. Words (`words`)

- Ids: `d<day>-01`, `d<day>-02`, … in order. Unique across the course.
- Teach **every syllabus word** for the day (you may fix an obvious syllabus error — report it), then add
  **useful phrases from your dialogue** (`pos: "phrase"`) until the day has **at least 17 items**
  (days 1–3: 14; immersion days: 6; review days: none required).
- **Never repeat a word taught on an earlier day** (the validator compares without stress and case). If a
  word you want already exists, choose a different phrase.
- Nouns need `g`: `"m" | "f" | "n" | "pl"`. Verbs get `forms` with the я / ты forms (and past or aspect partner
  when relevant): `"чита́ю, чита́ешь"`. Nouns may get the plural or an irregular form in `forms`.
- Give most words an example (`ex`) — a short natural sentence using only known words.
- `en` is a short gloss (add a note in brackets if usage matters); `ar` is Modern Standard Arabic.

## 6. Grammar (`grammar`)

- 1–3 points per lesson, ids `d<day>-g1`, `d<day>-g2`…
- `en` and `ar` carry the **same content** in the same number of short paragraphs (2–4, max ~3 sentences each).
  Explain the pattern, give the rule, point out the trap. Use Russian examples inline with stress.
- Tables for paradigms (every row has as many cells as `head`). At least **2 examples** per point.
- Arabic grammar terms — use these consistently:

| English | Arabic |
|---|---|
| nominative case (Именительный) | حالة الرفع |
| genitive case (Родительный) | حالة الإضافة |
| dative case (Дательный) | حالة المستفيد |
| accusative case (Винительный) | حالة المفعول به |
| instrumental case (Творительный) | حالة الأداة |
| prepositional case (Предложный) | حالة حرف الجر |
| masculine / feminine / neuter | مذكّر / مؤنّث / محايد |
| singular / plural | مفرد / جمع |
| imperfective / perfective aspect | الفعل غير التام / الفعل التام |
| infinitive | المصدر |
| conjugation | التصريف |
| imperative | صيغة الأمر |
| reflexive verb | الفعل الانعكاسي |
| verbs of motion | أفعال الحركة |
| comparative | صيغة المقارنة |
| stress / stressed vowel | النبر / الحرف الصوتي المنبور |
| ending | النهاية (اللاحقة) |

- Useful comparisons for Arabic speakers are welcome when true (no present-tense "to be" — like the Arabic
  nominal sentence; Russian cases vs Arabic إعراب), but keep them brief and accurate.

## 7. Dialogue (`dialogue`)

- Lesson days: **8–12 lines** (minimum 6). Immersion days: a **listening story of 10–16 lines** (see §11).
- `who: "A"` is spoken with a **male** voice, `who: "B"` with a **female** voice; `name` is displayed.
- Recurring cast: **Ахме́д** (A) — the learner, a young engineer from Cairo, new in Moscow;
  **А́нна** (B) — a Moscow student, his friend; **Макси́м** (A) — Anna's brother, a programmer;
  **О́льга Петро́вна** (B) — the Russian teacher. Add others as the scene needs (waiter, doctor, shop assistant).
- Use only words taught **up to and including that day** (see the syllabus word lists of earlier days) plus
  today's words. From day 8 these function words are always allowed: не, но, ну, о́чень, вот, тут, же, ли, всё,
  все, то́лько. Anything else new must be in today's `words`.
- Natural, modern spoken Russian. Every line has stress marks and full `en` and `ar` translations.

## 8. Pronunciation (`pronunciation`)

Every lesson day in weeks 1–4, then at least two lesson days per week. One focus (a sound, stress pattern,
reduction, intonation, a tricky cluster), 2–3 short paragraphs in both languages, **3–6 drills** with `say`.

## 9. Exercises (`exercises`)

- Lesson days: **10–14** items (minimum 8) using **at least 3 kinds**, including 1–2 listening items
  (`kind: "choice"`, `ru` + `listen: true`). Immersion days: at least 4.
- `choice`: 3–4 plausible options, `answer` is the zero-based index. Bilingual options may read `"English · عربي"`.
- `fill`: exactly one `___` in `ru`; `answers` lists every acceptable form (stress marks optional — checking
  ignores stress, case and ё/е).
- `order`: `tokens` are words only (no punctuation); every answer must use exactly those tokens.
- `translate`: the prompt is the meaning in `en` and `ar`; `answers` lists common correct Russian variants
  (different word orders, with and without the pronoun, etc.).
- Every item has `why` in both languages: one sentence that teaches, not just "correct".

## 10. Speaking, journal, culture, topics, search

- `speaking.scenario`: the situation in both languages. `speaking.tutorBrief`: English instructions for the
  AI tutor (80+ characters): who to play, the setting, the structures and words to use, how to correct, how
  to finish. `speaking.prompts`: 3–5 model sentences the learner can say.
- `journal`: a writing task for 3–5 sentences (later weeks: 5–8), in both languages.
- `culture`: optional; one accurate, neutral note (no politics).
- `topics`: 1–4 tags from `src/content/topics.ts` (copy the syllabus tags; add one if clearly relevant).
- `search`: 1–3 English YouTube search queries that find good explanations of the day's point.

## 11. Immersion days (days 6, 13, 20, 27, 34, 41, 48, 55)

- A **listening story** in `dialogue` (10–16 lines) — a narrated scene or conversation that recycles the
  week's language, like a short episode. The app reads it aloud; the worksheet is about it.
- `worksheet.before`: 2–3 tips (what to listen for). `worksheet.questions`: **4–8** `choice` items about the
  story (some with `listen: true`). `worksheet.retell`: the retelling task.
- `words`: 6–8 new words (the syllabus list), `exercises`: at least 4, `grammar`: optional (0–1 light point).
- The day's `topics` pull real videos and cartoons from the media library as extra listening.

## 12. Review days (days 7, 14, 21, 28, 35, 42, 49, 56)

- `words`: none. `grammar`: optional — one "week summary" point with a table is welcome.
- `test.sections`: at least 3 sections and **at least 15 items** in total (day 28 and day 56: 25+). Suggested
  sections: Words (choice), Grammar (fill), Listening (choice with `listen: true`), Sentences (order),
  Translation (translate). Cover the whole week (day 28: weeks 1–4; day 56: the course).
- `test.speaking`: 3–5 speaking tasks in both languages. `exercises` may be empty.
- `speaking`: the examiner role-play (tutorBrief describes the oral exam and how to score it).

## 13. Quality bar

- Accuracy first: correct Russian, correct stress, correct Arabic. Natural over literal.
- Keep sentences short and useful. Prefer what a visitor to Russia actually says and hears.
- Gender-balanced examples; everyday Egyptian context welcome (Cairo, Alexandria, ку́шари…) where natural.
- English: plain and concise. Arabic: clear MSA, Arabic punctuation (، ؛ ؟) around Russian quotations;
  keep the Russian itself exactly as written, with its stress marks.
