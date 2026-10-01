// Weak words: the words the learner keeps getting wrong (quiz misses, forgotten cards, low ease),
// weakest first, with the reason for each, and a drill that pays the misses back.

import { dayNumber } from "../../core/schedule.ts";
import { recordHit, recordMiss } from "../../core/progress.ts";
import { wordsUpTo } from "../../core/course.ts";
import { arCount } from "../../core/text.ts";
import { weakDrillItems, weakWords } from "../../core/weak.ts";
import type { WeakWord } from "../../core/weak.ts";
import { exerciseRunner } from "../components/exercises.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h } from "../dom.ts";
import { biCtx, btn, chip, icon, playButtons, ru, sectionTitle } from "../ui.ts";

/** How many words one drill covers (each asked twice). */
const DRILL_WORDS = 8;

export function reasonChips(ctx: Ctx, w: WeakWord): HTMLElement {
  return h(
    "span",
    { class: "reasons" },
    w.misses ? chip(tr(ctx, { en: `missed ${w.misses}×`, ar: `أخطأت ${arCount(w.misses, { one: "مرة", two: "مرتين", few: "مرات" })}` }), "bad") : null,
    w.lapses ? chip(tr(ctx, { en: `forgotten ${w.lapses}×`, ar: `نُسيت ${arCount(w.lapses, { one: "مرة", two: "مرتين", few: "مرات" })}` }), "warn") : null,
    w.hard && !w.lapses ? chip(tr(ctx, { en: "hard", ar: "صعبة" }), "warn") : null,
  );
}

export function weakRow(ctx: Ctx, w: WeakWord): HTMLElement {
  return h(
    "li",
    { class: "weak-row" },
    h("div", { class: "weak-word" }, ru(w.word.ru, "big"), playButtons(ctx, w.word.ru, { slow: false })),
    h("div", { class: "weak-meaning" }, biCtx(ctx, { en: w.word.en, ar: w.word.ar }, "span")),
    reasonChips(ctx, w),
    h("a", { class: "weak-open", href: `#word-${w.word.id}`, "aria-label": tr(ctx, { en: `Open ${w.word.en}`, ar: `افتح ${w.word.ar}` }) }, icon("right", 18)),
  );
}

export function weakView(ctx: Ctx): HTMLElement {
  const p = ctx.store.progress;
  const weak = weakWords(p, 40);
  const today = Math.max(1, Math.min(56, dayNumber(p.settings.startDate, new Date(ctx.now()))));
  const head = sectionTitle(ctx, { en: "Weak words", ar: "الكلمات الضعيفة" });
  const intro = h(
    "p",
    { class: "lead" },
    tr(ctx, {
      en: "Words you answered wrong in practice, forgot in review, or graded hard. A right answer in a drill pays one miss back; good reviews do the rest.",
      ar: "كلمات أخطأت فيها في التمارين أو نسيتها في المراجعة أو وجدتها صعبة. كل إجابة صحيحة في التدريب تمحو خطأً واحدًا، والمراجعات الجيدة تُكمل الباقي.",
    }),
  );

  if (weak.length === 0) {
    return h(
      "div",
      { class: "view weak" },
      head,
      intro,
      h(
        "div",
        { class: "card empty" },
        icon("check", 40),
        h("h3", null, tr(ctx, { en: "No weak words right now", ar: "لا توجد كلمات ضعيفة الآن" })),
        biCtx(ctx, { en: "Practice and review add words here when they trip you up.", ar: "تُضاف الكلمات هنا عندما تتعثّر فيها أثناء التمارين والمراجعة." }),
        h("div", { class: "row wrap" }, btn(tr(ctx, { en: "Review cards", ar: "راجع البطاقات" }), { class: "primary", onClick: () => ctx.navigate("review") }), btn(tr(ctx, { en: `Day ${today} practice`, ar: `تمارين اليوم ${today}` }), { class: "ghost", onClick: () => ctx.navigate(`day-${today}-practice`) })),
      ),
    );
  }

  const drillWords = weak.slice(0, DRILL_WORDS).map((w) => w.word);
  const lastTaught = Math.max(today, ...drillWords.map((w) => Number(w.id.slice(1, w.id.indexOf("-")))));
  const drill = exerciseRunner(ctx, {
    items: weakDrillItems(drillWords, wordsUpTo(lastTaught), Math.floor(ctx.now() / 86_400_000)),
    seed: 41,
    onAnswer: (item, ok) => {
      if (item.kind !== "choice" || !item.wordId) return;
      const id = item.wordId;
      ctx.store.update((q) => (ok ? recordHit : recordMiss)(q, id, ctx.now()));
    },
    endAction: { label: { en: "Update the list", ar: "حدّث القائمة" }, run: () => ctx.rerender() },
  });

  return h(
    "div",
    { class: "view weak" },
    head,
    intro,
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: `Drill the ${drillWords.length} weakest`, ar: `تدرّب على أضعف ${arCount(drillWords.length, { one: "كلمة", two: "كلمتين", few: "كلمات" })}` })),
      h("p", { class: "muted" }, tr(ctx, { en: "Each word twice: once for its meaning, once by ear.", ar: "كل كلمة مرتين: مرة لمعناها ومرة بالسمع." })),
      drill,
    ),
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: `All weak words (${weak.length})`, ar: `كل الكلمات الضعيفة (${weak.length})` })),
      h("ul", { class: "weak-list" }, weak.map((w) => weakRow(ctx, w))),
    ),
  );
}
