// The alphabet studio: the 33 letters in the groups week 1 teaches, each with print and
// handwritten forms, its sound explained for Arabic speakers, an example word, a syllable
// reading drill and a listening quiz.

import { ALPHABET, READING_DRILL } from "../../content/alphabet.ts";
import type { Choice, Letter, LetterGroup } from "../../content/types.ts";
import { shuffle } from "../../core/answers.ts";
import { exerciseRunner } from "../components/exercises.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h, replace } from "../dom.ts";
import { biCtx, btn, chip, icon, playButtons, ru, sectionTitle } from "../ui.ts";

const GROUPS: ReadonlyArray<{ id: LetterGroup; title: { en: string; ar: string }; hint: { en: string; ar: string } }> = [
  { id: "friend", title: { en: "True friends", ar: "أصدقاء حقيقيون" }, hint: { en: "Look and sound as in English.", ar: "شكلها ونطقها كما في الإنجليزية." } },
  { id: "false-friend", title: { en: "False friends", ar: "أصدقاء مزيّفون" }, hint: { en: "Look Latin, sound different.", ar: "تشبه اللاتينية لكن نطقها مختلف." } },
  { id: "new", title: { en: "New shapes", ar: "أشكال جديدة" }, hint: { en: "Letters you have not seen before.", ar: "حروف لم ترها من قبل." } },
  { id: "sign", title: { en: "The two signs", ar: "العلامتان" }, hint: { en: "No sound of their own.", ar: "لا صوت خاص بهما." } },
];

function detail(ctx: Ctx, l: Letter): HTMLElement {
  const showSay = ctx.store.progress.settings.showSay;
  return h(
    "div",
    { class: "letter-detail card" },
    h(
      "div",
      { class: "glyphs" },
      h("span", { class: "glyph print", lang: "ru" }, `${l.upper}${l.lower}`),
      h("span", { class: "glyph hand", lang: "ru", "aria-hidden": "true" }, `${l.upper}${l.lower}`),
    ),
    h("div", { class: "letter-name" }, tr(ctx, { en: "Name:", ar: "الاسم:" }), " ", ru(l.name), playButtons(ctx, l.name, { slow: false }), chip(`/${l.ipa}/`, "ipa")),
    h("div", { class: "letter-sound" }, biCtx(ctx, l.sound)),
    h(
      "div",
      { class: "letter-example" },
      h("div", { class: "ex-line" }, ru(l.example.ru, "big"), playButtons(ctx, l.example.ru)),
      showSay ? h("div", { class: "say" }, l.example.say) : null,
      biCtx(ctx, { en: l.example.en, ar: l.example.ar }, "div", "ex-tr"),
    ),
    l.tip ? h("div", { class: "note" }, icon("pencil", 16), biCtx(ctx, l.tip, "span")) : null,
  );
}

/** Listening quiz: hear an example word, pick the letter it starts with. */
function letterQuiz(seed: number): Choice[] {
  const usable = ALPHABET.filter((l) => l.group !== "sign" && l.upper !== "Ы" && l.upper !== "Й" && l.example.ru.toLowerCase().startsWith(l.lower));
  return shuffle(usable, seed)
    .slice(0, 10)
    .map((l, i) => {
      const others = shuffle(
        usable.filter((o) => o.upper !== l.upper),
        seed + i,
      ).slice(0, 3);
      const options = shuffle([l, ...others], seed * 3 + i);
      return {
        kind: "choice",
        prompt: { en: "Listen. Which letter does the word start with?", ar: "استمع. بأيّ حرف تبدأ الكلمة؟" },
        ru: l.example.ru,
        listen: true,
        options: options.map((o) => `${o.upper} ${o.lower}`),
        answer: options.indexOf(l),
        why: { en: `${l.example.ru} starts with ${l.upper}: ${l.sound.en}`, ar: `${l.example.ru} تبدأ بـ ${l.upper}: ${l.sound.ar}` },
      } satisfies Choice;
    });
}

export function alphabetView(ctx: Ctx): HTMLElement {
  const panel = h("div", { class: "letter-panel" });
  const select = (l: Letter, tile: HTMLElement) => {
    document.querySelectorAll(".letter-tile.active").forEach((t) => t.classList.remove("active"));
    tile.classList.add("active");
    replace(panel, detail(ctx, l));
    void ctx.speak(l.example.ru);
    // On narrow screens the letter card sits above the grid; bring it into view.
    if (window.matchMedia("(max-width: 959px)").matches) {
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      panel.scrollIntoView({ block: "start", behavior: smooth ? "smooth" : "auto" });
    }
  };
  const first = ALPHABET[0];
  if (first) replace(panel, detail(ctx, first));

  const quizHost = h("div", { class: "quiz-host" });
  let quizRound = 0;

  return h(
    "div",
    { class: "view alphabet" },
    sectionTitle(ctx, { en: "Alphabet studio", ar: "استوديو الأبجدية" }),
    h("p", { class: "lead" }, tr(ctx, { en: "33 letters. Tap one to hear it, see how it is handwritten, and meet a word that uses it.", ar: "٣٣ حرفًا. اضغط على حرف لتسمعه وترى كيف يُكتب باليد وتتعرّف على كلمة تستخدمه." })),
    h(
      "div",
      { class: "alphabet-layout" },
      h(
        "div",
        { class: "letter-groups" },
        GROUPS.map((g) =>
          h(
            "section",
            { class: `letter-group group-${g.id}` },
            h("h3", null, tr(ctx, g.title), h("span", { class: "muted" }, ` · ${tr(ctx, g.hint)}`)),
            h(
              "div",
              { class: "letter-grid" },
              ALPHABET.filter((l) => l.group === g.id).map((l) => {
                const tile: HTMLButtonElement = h(
                  "button",
                  { type: "button", class: l === first ? "letter-tile active" : "letter-tile", lang: "ru", "aria-label": `${l.upper} — ${l.name}`, onClick: () => select(l, tile) },
                  h("span", { class: "lt-print" }, `${l.upper}${l.lower}`),
                  h("span", { class: "lt-hand", "aria-hidden": "true" }, l.lower),
                );
                return tile;
              }),
            ),
          ),
        ),
      ),
      panel,
    ),
    h(
      "section",
      { class: "card drill" },
      h("h3", null, tr(ctx, { en: "Reading drill", ar: "تمرين القراءة" })),
      h("p", { class: "muted" }, tr(ctx, { en: "Read each syllable aloud, then tap it to check.", ar: "اقرأ كل مقطع بصوت عالٍ ثم اضغط عليه لتتحقّق." })),
      h("div", { class: "syllables" }, READING_DRILL.map((s) => h("button", { type: "button", class: "syllable", lang: "ru", onClick: () => void ctx.speak(s) }, s))),
    ),
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: "Listening quiz", ar: "اختبار الاستماع" })),
      quizHost,
      btn([icon("play", 18), tr(ctx, { en: "Start the quiz", ar: "ابدأ الاختبار" })], {
        class: "primary",
        onClick: () => {
          quizRound++;
          replace(quizHost, exerciseRunner(ctx, { items: letterQuiz(quizRound * 37), seed: quizRound }));
        },
      }),
    ),
  );
}
