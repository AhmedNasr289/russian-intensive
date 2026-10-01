// One course day: words, grammar, dialogue, practice, speaking, videos, tutor and journal
// (or a story worksheet on immersion days, or a test on review days).

import type { Day, Dialogue, GrammarPoint, Table, Word } from "../../content/types.ts";
import { getDay, mediaFor, wordsUpTo, youtubeSearchUrl } from "../../core/course.ts";
import { addJournal, introduceDay, recordHit, recordMiss, recordScore, recordTest } from "../../core/progress.ts";
import { wordQuestions } from "../../core/quiz.ts";
import { dayNumber, COURSE_DAYS } from "../../core/schedule.ts";
import { stripStress } from "../../core/text.ts";
import { buildJournalPrompt, parseJournalCorrection } from "../../core/tutorPrompt.ts";
import type { JournalCorrection } from "../../core/tutorPrompt.ts";
import { errorCode } from "../claude.ts";
import { tutorPanel, errorMessage } from "../components/chat.ts";
import { exerciseRunner } from "../components/exercises.ts";
import { keyboardFor } from "../components/keyboard.ts";
import { emptyMedia, mediaCard, searchLink } from "../components/media.ts";
import { speakCard } from "../components/speak.ts";
import { prefetchRecording } from "../player.ts";
import type { Ctx } from "../context.ts";
import { explainOf, tr } from "../context.ts";
import { h, replace } from "../dom.ts";
import type { Section } from "../router.ts";
import { biCtx, btn, chip, copyText, icon, mixed, playButtons, ru, sectionTitle } from "../ui.ts";
import { kindLabel } from "./today.ts";

const SECTION_LABEL: Record<Section, { en: string; ar: string }> = {
  words: { en: "Words", ar: "الكلمات" },
  grammar: { en: "Grammar", ar: "القواعد" },
  dialogue: { en: "Dialogue", ar: "الحوار" },
  practice: { en: "Practice", ar: "التمارين" },
  speak: { en: "Speak", ar: "النطق" },
  watch: { en: "Watch", ar: "شاهد" },
  tutor: { en: "Tutor", ar: "المعلّم" },
  journal: { en: "Journal", ar: "اليوميات" },
  worksheet: { en: "Story", ar: "القصة" },
  test: { en: "Test", ar: "الاختبار" },
};

export function sectionsFor(day: Day): Section[] {
  if (day.kind === "review") return ["test", "speak", "watch", "tutor", "journal"];
  if (day.kind === "immersion") return ["worksheet", "words", "practice", "speak", "watch", "tutor", "journal"];
  return ["words", "grammar", "dialogue", "practice", "speak", "watch", "tutor", "journal"];
}

export const POS_LABEL: Record<Word["pos"], { en: string; ar: string }> = {
  noun: { en: "noun", ar: "اسم" },
  verb: { en: "verb", ar: "فعل" },
  adj: { en: "adjective", ar: "صفة" },
  adv: { en: "adverb", ar: "ظرف" },
  pron: { en: "pronoun", ar: "ضمير" },
  num: { en: "number", ar: "عدد" },
  prep: { en: "preposition", ar: "حرف جر" },
  conj: { en: "conjunction", ar: "حرف عطف" },
  part: { en: "particle", ar: "أداة" },
  interj: { en: "interjection", ar: "تعجّب" },
  phrase: { en: "phrase", ar: "عبارة" },
};

export const GENDER_LABEL = { m: { en: "masc.", ar: "مذكّر" }, f: { en: "fem.", ar: "مؤنّث" }, n: { en: "neut.", ar: "محايد" }, pl: { en: "plural", ar: "جمع" } } as const;

// ── Words ─────────────────────────────────────────────────────────────────────

function wordCard(ctx: Ctx, w: Word): HTMLElement {
  const showSay = ctx.store.progress.settings.showSay;
  return h(
    "article",
    { class: "word-card", id: w.id },
    h(
      "div",
      { class: "word-top" },
      ru(w.ru, "word-ru"),
      playButtons(ctx, w.ru),
      h("a", { class: "word-more", href: `#word-${w.id}`, title: tr(ctx, { en: "Word details", ar: "تفاصيل الكلمة" }), "aria-label": tr(ctx, { en: `Details: ${w.en}`, ar: `التفاصيل: ${w.ar}` }) }, icon("right", 18)),
    ),
    showSay ? h("div", { class: "say" }, w.say) : null,
    h(
      "div",
      { class: "word-tags" },
      chip(tr(ctx, POS_LABEL[w.pos])),
      w.g ? chip(tr(ctx, GENDER_LABEL[w.g]), `g-${w.g}`) : null,
      w.forms ? h("span", { class: "forms" }, mixed(w.forms)) : null,
    ),
    h("div", { class: "meaning" }, biCtx(ctx, { en: w.en, ar: w.ar }, "span")),
    w.ex ? h("div", { class: "example" }, h("div", { class: "ex-line" }, ru(w.ex.ru), playButtons(ctx, w.ex.ru, { slow: false })), biCtx(ctx, { en: w.ex.en, ar: w.ex.ar }, "div", "ex-tr")) : null,
    w.note ? h("div", { class: "note" }, biCtx(ctx, w.note, "div")) : null,
  );
}

function wordsSection(ctx: Ctx, day: Day, today: number): HTMLElement {
  const introduced = ctx.store.progress.introduced[`d${day.n}`] !== undefined;
  if (!introduced && day.n <= today && day.words.length) {
    ctx.store.update((p) => introduceDay(p, day.n, day.words.map((w) => w.id), ctx.now()));
  }
  const inDeck = ctx.store.progress.introduced[`d${day.n}`] !== undefined;
  // A day's words sit together in the recording packs: fetch them before the first tap.
  if (day.words[0]) prefetchRecording(day.words[0].ru);
  let playing = false;
  const playAll = btn([icon("play", 18), tr(ctx, { en: "Play all", ar: "شغّل الكل" })], {
    class: "ghost",
    onClick: async () => {
      if (playing) {
        playing = false;
        ctx.stopAudio();
        return;
      }
      playing = true;
      for (const w of day.words) {
        if (!playing) break;
        document.getElementById(w.id)?.classList.add("speaking");
        const said = await ctx.speak(w.ru);
        document.getElementById(w.id)?.classList.remove("speaking");
        // A tap on a word (or any other sound) ends the run instead of being cut off by its next word.
        if (said.kind === "stopped" || !(await ctx.pause(700))) break;
      }
      playing = false;
    },
  });
  return h(
    "section",
    { class: "sec sec-words" },
    h(
      "div",
      { class: "sec-head" },
      sectionTitle(ctx, { en: `${day.words.length} new words and phrases`, ar: `${day.words.length} كلمة وعبارة جديدة` }),
      h(
        "div",
        { class: "row wrap" },
        playAll,
        inDeck
          ? chip(tr(ctx, { en: "In your review cards", ar: "في بطاقات المراجعة" }), "ok")
          : btn([icon("cards", 18), tr(ctx, { en: "Add to my review cards", ar: "أضف إلى بطاقات المراجعة" })], {
              class: "primary",
              onClick: () => {
                ctx.store.update((p) => introduceDay(p, day.n, day.words.map((w) => w.id), ctx.now()), { render: true });
                ctx.toast({ en: `${day.words.length} cards added to your review deck.`, ar: `أُضيفت ${day.words.length} بطاقة إلى مراجعتك.` }, "ok");
              },
            }),
      ),
    ),
    h("div", { class: "word-grid" }, day.words.map((w) => wordCard(ctx, w))),
    day.culture ? h("aside", { class: "card culture" }, h("h3", null, tr(ctx, { en: "Culture note", ar: "ملاحظة ثقافية" })), biCtx(ctx, day.culture)) : null,
  );
}

// ── Grammar ───────────────────────────────────────────────────────────────────

function tableView(t: Table, ctx: Ctx): HTMLElement {
  return h(
    "div",
    { class: "table-wrap" },
    h(
      "table",
      { class: "gtable" },
      h("caption", null, tr(ctx, t.caption)),
      h("thead", null, h("tr", null, t.head.map((c) => h("th", { scope: "col" }, mixed(c))))),
      h("tbody", null, t.rows.map((row) => h("tr", null, row.map((c, i) => (i === 0 ? h("th", { scope: "row" }, mixed(c)) : h("td", null, mixed(c))))))),
    ),
  );
}

function grammarCard(ctx: Ctx, g: GrammarPoint): HTMLElement {
  const mode = explainOf(ctx);
  return h(
    "article",
    { class: "card grammar" },
    h("h3", null, mixed(tr(ctx, g.title))),
    mode !== "ar" ? h("div", { class: "g-text", lang: "en" }, g.en.map((p) => h("p", null, mixed(p)))) : null,
    mode !== "en" ? h("div", { class: "g-text", lang: "ar", dir: "rtl" }, g.ar.map((p) => h("p", null, mixed(p)))) : null,
    (g.tables ?? []).map((t) => tableView(t, ctx)),
    h(
      "ul",
      { class: "examples" },
      g.examples.map((e) => h("li", null, h("div", { class: "ex-line" }, ru(e.ru), playButtons(ctx, e.ru, { slow: false })), biCtx(ctx, { en: e.en, ar: e.ar }, "div", "ex-tr"))),
    ),
  );
}

// ── Dialogue (also the story of an immersion day) ────────────────────────────

function dialogueBlock(ctx: Ctx, d: Dialogue): HTMLElement {
  let showTr = true;
  /** Each Play all or Shadow run takes a new number; a run that sees the number change ends. */
  let run = 0;
  const lines = d.lines.map((l) =>
    h(
      "li",
      { class: `line who-${l.who}` },
      h("span", { class: "who" }, ru(l.name)),
      h("div", { class: "line-body" }, h("div", { class: "ex-line" }, ru(l.ru), playButtons(ctx, l.ru, { slow: true, who: l.who })), h("div", { class: "line-tr" }, biCtx(ctx, { en: l.en, ar: l.ar }, "div"))),
    ),
  );
  const mark = (i: number) => lines.forEach((li, k) => li.classList.toggle("speaking", k === i));
  const stopAll = () => {
    run++;
    ctx.stopAudio();
    mark(-1);
  };
  /** Speaks every line in turn; shadowing speaks slowly and leaves time to repeat each line aloud. */
  const playLines = async (slow: boolean) => {
    stopAll();
    const mine = run;
    for (let i = 0; i < d.lines.length; i++) {
      const l = d.lines[i];
      if (!l) continue;
      mark(i);
      const said = await ctx.speak(l.ru, slow ? { who: l.who, slow: true } : { who: l.who });
      const gap = slow ? Math.max(1800, [...stripStress(l.ru)].length * 120) : 450;
      // A newer run, the Stop button or any other sound ends this run; only the run still current clears the marks.
      if (mine !== run || said.kind === "stopped" || !(await ctx.pause(gap))) break;
    }
    if (mine === run) mark(-1);
  };
  const playAll = btn([icon("play", 18), tr(ctx, { en: "Play all", ar: "شغّل الكل" })], { class: "primary", onClick: () => void playLines(false) });
  const shadow = btn([icon("repeat", 18), tr(ctx, { en: "Shadow: listen and repeat", ar: "الترديد: استمع وردّد" })], { class: "ghost", onClick: () => void playLines(true) });
  const stop = btn([icon("stop", 18), tr(ctx, { en: "Stop", ar: "إيقاف" })], { class: "ghost", onClick: stopAll });
  const list = h("ol", { class: "dialogue" }, lines);
  const toggle = btn([icon("eye", 18), tr(ctx, { en: "Translations", ar: "الترجمات" })], {
    class: "ghost",
    "aria-pressed": "true",
    onClick: () => {
      showTr = !showTr;
      list.classList.toggle("hide-tr", !showTr);
      toggle.setAttribute("aria-pressed", String(showTr));
    },
  });
  return h(
    "div",
    { class: "card dialogue-card" },
    h("h3", null, ru(d.title.ru), h("span", { class: "muted" }, ` · ${tr(ctx, { en: d.title.en, ar: d.title.ar })}`)),
    h("div", { class: "setting" }, biCtx(ctx, d.setting)),
    h("div", { class: "row wrap controls" }, playAll, shadow, stop, toggle),
    list,
  );
}

// ── Speak ─────────────────────────────────────────────────────────────────────

function speakSection(ctx: Ctx, day: Day): HTMLElement {
  const pr = day.pronunciation;
  const mode = explainOf(ctx);
  return h(
    "section",
    { class: "sec sec-speak" },
    pr
      ? h(
          "div",
          { class: "card" },
          h("h3", null, mixed(tr(ctx, pr.title))),
          mode !== "ar" ? h("div", { lang: "en" }, pr.en.map((p) => h("p", null, mixed(p)))) : null,
          mode !== "en" ? h("div", { lang: "ar", dir: "rtl" }, pr.ar.map((p) => h("p", null, mixed(p)))) : null,
          h("div", { class: "speak-grid" }, pr.drills.map((d) => speakCard(ctx, { ru: d.ru, say: d.say, focus: d.focus }))),
        )
      : null,
    h(
      "div",
      { class: "card" },
      h("h3", null, tr(ctx, { en: "Say it yourself", ar: "قلها بنفسك" })),
      h("div", { class: "setting" }, biCtx(ctx, day.speaking.scenario)),
      h("div", { class: "speak-grid" }, day.speaking.prompts.map((p) => speakCard(ctx, { ru: p.ru, meaning: { en: p.en, ar: p.ar } }))),
    ),
  );
}

// ── Journal ───────────────────────────────────────────────────────────────────

function correctionView(ctx: Ctx, c: JournalCorrection): HTMLElement {
  return h(
    "div",
    { class: "correction" },
    h("div", { class: "score-line" }, chip(`${c.score}/10`, "score"), biCtx(ctx, c.praise, "span")),
    h("div", { class: "corrected" }, h("h4", null, tr(ctx, { en: "Corrected text", ar: "النص المصحّح" })), h("p", null, ru(c.corrected)), playButtons(ctx, c.corrected)),
    c.errors.length
      ? h(
          "ul",
          { class: "errors" },
          c.errors.map((e) => h("li", null, h("span", { class: "orig" }, e.original), " → ", h("span", { class: "fix" }, ru(e.fix)), chip(e.type), h("div", { class: "why" }, biCtx(ctx, { en: e.en, ar: e.ar }, "span")))),
        )
      : null,
    h("div", { class: "next" }, h("strong", null, tr(ctx, { en: "Next: ", ar: "التالي: " })), biCtx(ctx, c.next, "span")),
  );
}

/** Unsaved journal text per day, so a redraw of the screen never loses what the learner typed. */
const journalDrafts = new Map<number, string>();

function journalSection(ctx: Ctx, day: Day): HTMLElement {
  const area = h("textarea", { id: `journal-${day.n}`, class: "journal-input", rows: 6, lang: "ru", dir: "ltr", placeholder: "Меня́ зову́т…", "aria-label": tr(ctx, { en: "Your journal entry in Russian", ar: "يومياتك بالروسية" }) });
  area.value = journalDrafts.get(day.n) ?? "";
  area.addEventListener("input", () => journalDrafts.set(day.n, area.value));
  const out = h("div", { class: "journal-out", "aria-live": "polite" });
  const entries = ctx.store.progress.journal.filter((e) => e.day === day.n);

  const save = (corrected?: JournalCorrection) => {
    const text = area.value.trim();
    if (!text) return;
    ctx.store.update((p) =>
      addJournal(p, { day: day.n, at: ctx.now(), text, ...(corrected ? { corrected: corrected.corrected, notes: corrected.next.en } : {}) }),
    );
  };

  const correct = async (button: HTMLButtonElement) => {
    const text = area.value.trim();
    if (!text) return ctx.toast({ en: "Write a few sentences first.", ar: "اكتب بضع جمل أولًا." }, "info");
    const prompt = buildJournalPrompt({ day, known: wordsUpTo(day.n), explain: explainOf(ctx) }, text);
    const sample = ctx.caps.sample;
    if (!sample) {
      const ok = await copyText(prompt);
      ctx.toast(ok ? { en: "Correction prompt copied. Paste it into Claude.", ar: "نُسخت تعليمات التصحيح. الصقها في Claude." } : { en: "Copy failed.", ar: "فشل النسخ." }, ok ? "ok" : "error");
      save();
      return;
    }
    button.disabled = true;
    replace(out, h("p", { class: "muted" }, tr(ctx, { en: "The tutor is reading your text…", ar: "المعلّم يقرأ نصّك…" })));
    try {
      const parsed = parseJournalCorrection(await sample.json(prompt));
      if (!parsed) throw Object.assign(new Error("invalid"), { code: "invalid_json" });
      replace(out, correctionView(ctx, parsed));
      save(parsed);
      ctx.sfx("done");
    } catch (e) {
      replace(out, h("p", { class: "verdict bad" }, tr(ctx, errorMessage(errorCode(e)))));
      save();
    } finally {
      button.disabled = false;
    }
  };

  return h(
    "section",
    { class: "sec sec-journal" },
    h("div", { class: "card" }, h("h3", null, tr(ctx, { en: "Today's writing task", ar: "مهمة الكتابة اليوم" })), biCtx(ctx, day.journal), area, keyboardFor(ctx, area),
      h(
        "div",
        { class: "row wrap" },
        btn([icon("check", 18), tr(ctx, { en: "Save", ar: "احفظ" })], { class: "ghost", onClick: () => { save(); ctx.toast({ en: "Saved to your journal.", ar: "حُفظت في يومياتك." }, "ok"); } }),
        btn([icon("pencil", 18), tr(ctx, ctx.caps.sample ? { en: "Correct it with the tutor", ar: "صحّحها مع المعلّم" } : { en: "Copy a correction prompt", ar: "انسخ تعليمات التصحيح" })], { class: "primary", onClick: (e: MouseEvent) => void correct(e.currentTarget as HTMLButtonElement) }),
      ),
      out,
    ),
    entries.length
      ? h(
          "div",
          { class: "card" },
          h("h3", null, tr(ctx, { en: "Earlier entries for this day", ar: "إدخالات سابقة لهذا اليوم" })),
          h("ul", { class: "journal-list" }, entries.map((e) => h("li", null, h("p", { lang: "ru", dir: "auto" }, e.text), e.corrected ? h("p", { class: "corrected" }, ru(e.corrected)) : null))),
        )
      : null,
  );
}

// ── The view ──────────────────────────────────────────────────────────────────

export function dayView(ctx: Ctx, n: number, requested: Section | null): HTMLElement {
  const day = getDay(n);
  const today = dayNumber(ctx.store.progress.settings.startDate, new Date(ctx.now()));
  const nav = h(
    "div",
    { class: "day-nav" },
    n > 1 ? h("a", { class: "btn ghost small", href: `#day-${n - 1}` }, icon("left", 16), tr(ctx, { en: `Day ${n - 1}`, ar: `اليوم ${n - 1}` })) : h("span"),
    h("a", { class: "btn ghost small", href: "#course" }, icon("course", 16), tr(ctx, { en: "All days", ar: "كل الأيام" })),
    n < COURSE_DAYS ? h("a", { class: "btn ghost small", href: `#day-${n + 1}` }, tr(ctx, { en: `Day ${n + 1}`, ar: `اليوم ${n + 1}` }), icon("right", 16)) : h("span"),
  );
  if (!day) {
    return h("div", { class: "view day" }, nav, h("div", { class: "card" }, h("h1", null, tr(ctx, { en: `Day ${n}`, ar: `اليوم ${n}` })), h("p", null, tr(ctx, { en: "This lesson is not available yet.", ar: "هذا الدرس غير متاح بعد." }))));
  }
  const sections = sectionsFor(day);
  const section = requested && sections.includes(requested) ? requested : (sections[0] as Section);

  const tabs = h(
    "nav",
    { class: "tabs", "aria-label": tr(ctx, { en: "Lesson sections", ar: "أقسام الدرس" }) },
    sections.map((s) => h("a", { href: `#day-${n}-${s}`, class: `tab ${s === section ? "active" : ""}`, "aria-current": s === section ? "page" : "false" }, tr(ctx, SECTION_LABEL[s]))),
  );

  let body: HTMLElement;
  switch (section) {
    case "words":
      body = wordsSection(ctx, day, today);
      break;
    case "grammar":
      body = h("section", { class: "sec" }, day.grammar.map((g) => grammarCard(ctx, g)));
      break;
    case "dialogue":
      body = h("section", { class: "sec" }, day.dialogue ? dialogueBlock(ctx, day.dialogue) : h("p", null, "—"));
      break;
    case "practice":
      body = h(
        "section",
        { class: "sec" },
        exerciseRunner(ctx, {
          items: [...day.exercises, ...wordQuestions(day.words, wordsUpTo(day.n), day.n * 31)],
          seed: day.n * 17,
          onDone: (score) => ctx.store.update((p) => recordScore(p, `d${day.n}-practice`, score, ctx.now())),
          onAnswer: (item, ok) => {
            if (item.kind !== "choice" || !item.wordId) return;
            const id = item.wordId;
            ctx.store.update((p) => (ok ? recordHit : recordMiss)(p, id, ctx.now()));
          },
        }),
      );
      break;
    case "speak":
      body = speakSection(ctx, day);
      break;
    case "watch": {
      const media = mediaFor(day);
      body = h(
        "section",
        { class: "sec" },
        h("div", { class: "media-grid" }, media.length ? media.map((m) => mediaCard(ctx, m)) : emptyMedia(ctx)),
        h("div", { class: "card searches" }, h("h3", null, tr(ctx, { en: "Search YouTube for more", ar: "ابحث في يوتيوب عن المزيد" })), h("div", { class: "row wrap" }, day.search.map((q) => searchLink(ctx, q, youtubeSearchUrl(q))))),
      );
      break;
    }
    case "tutor":
      body = h("section", { class: "sec" }, h("div", { class: "setting card" }, h("h3", null, tr(ctx, { en: "Today's scene", ar: "موقف اليوم" })), biCtx(ctx, day.speaking.scenario)), tutorPanel(ctx, day, "roleplay"));
      break;
    case "journal":
      body = journalSection(ctx, day);
      break;
    case "worksheet": {
      const ws = day.worksheet;
      body = h(
        "section",
        { class: "sec" },
        ws ? h("div", { class: "card" }, h("h3", null, tr(ctx, { en: "Before you listen", ar: "قبل أن تستمع" })), h("ul", { class: "tips" }, ws.before.map((b) => h("li", null, biCtx(ctx, b, "span"))))) : null,
        day.dialogue ? dialogueBlock(ctx, day.dialogue) : null,
        ws ? exerciseRunner(ctx, { items: ws.questions, seed: day.n * 13, onDone: (score) => ctx.store.update((p) => recordScore(p, `d${day.n}-worksheet`, score, ctx.now())) }) : null,
        ws ? h("div", { class: "card" }, h("h3", null, tr(ctx, { en: "Retell it", ar: "أعد سردها" })), biCtx(ctx, ws.retell), btn([icon("chat", 18), tr(ctx, { en: "Retell it to the tutor", ar: "احكِها للمعلّم" })], { class: "ghost", onClick: () => ctx.navigate(`day-${day.n}-tutor`) })) : null,
      );
      break;
    }
    case "test": {
      const test = day.test;
      const items = test ? test.sections.flatMap((s) => s.items) : [];
      body = h(
        "section",
        { class: "sec" },
        test
          ? h(
              "div",
              { class: "card" },
              h("h3", null, tr(ctx, { en: "What the test covers", ar: "ما يغطيه الاختبار" })),
              h("ul", { class: "tips" }, test.sections.map((s) => h("li", null, tr(ctx, s.title), h("span", { class: "muted" }, ` · ${s.items.length}`)))),
              ctx.store.progress.tests[`d${day.n}`] ? h("p", null, chip(tr(ctx, { en: `Best so far: ${Math.round((ctx.store.progress.tests[`d${day.n}`]?.best ?? 0) * 100)}%`, ar: `أفضل نتيجة: ${Math.round((ctx.store.progress.tests[`d${day.n}`]?.best ?? 0) * 100)}٪` }), "score")) : null,
            )
          : null,
        exerciseRunner(ctx, { items, seed: day.n * 7, onDone: (score) => ctx.store.update((p) => recordTest(p, day.n, score, ctx.now())) }),
        test
          ? h(
              "div",
              { class: "card" },
              h("h3", null, tr(ctx, { en: "Speaking part", ar: "الجزء الشفهي" })),
              h("ol", { class: "tips" }, test.speaking.map((s) => h("li", null, biCtx(ctx, s, "span")))),
              btn([icon("chat", 18), tr(ctx, { en: "Take the oral exam with the tutor", ar: "أدِّ الاختبار الشفهي مع المعلّم" })], { class: "primary", onClick: () => ctx.navigate(`day-${day.n}-tutor`) }),
            )
          : null,
      );
      break;
    }
  }

  return h(
    "div",
    { class: "view day" },
    nav,
    h(
      "header",
      { class: "day-head card" },
      h("p", { class: "eyebrow" }, tr(ctx, { en: `Day ${n} · Week ${day.week}`, ar: `اليوم ${n} · الأسبوع ${day.week}` }), " ", chip(kindLabel(ctx, day.kind), `kind-${day.kind}`)),
      h("h1", { class: "day-title" }, ru(day.title.ru)),
      h("p", { class: "lead" }, biCtx(ctx, { en: day.title.en, ar: day.title.ar }, "span")),
      h("ul", { class: "goals" }, day.goals.map((g) => h("li", null, biCtx(ctx, g, "span")))),
    ),
    tabs,
    body,
  );
}
