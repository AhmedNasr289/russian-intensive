// One course word in full: how it sounds and is spelled, what it means, its forms and example,
// the day that teaches it, and where it stands in the learner's deck and mistake memory.

import type { Word } from "../../content/types.ts";
import { findWord, getDay } from "../../core/course.ts";
import { addCards } from "../../core/progress.ts";
import { dayNumber } from "../../core/schedule.ts";
import { dayOfWordId } from "../../core/search.ts";
import { formatInterval } from "../../core/srs.ts";
import { weakScore } from "../../core/weak.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h } from "../dom.ts";
import { biCtx, btn, chip, icon, mixed, playButtons, ru } from "../ui.ts";
import { GENDER_LABEL, POS_LABEL } from "./day.ts";

function deckCard(ctx: Ctx, w: Word): HTMLElement {
  const p = ctx.store.progress;
  const card = p.cards[w.id];
  const miss = p.misses[w.id];
  const now = ctx.now();
  const rows: Array<[{ en: string; ar: string }, string]> = [];
  let status: { en: string; ar: string };
  let action: HTMLElement | null = null;
  if (!card) {
    status = { en: "Not in your review deck yet.", ar: "ليست في مجموعة المراجعة بعد." };
    action = btn([icon("cards", 18), tr(ctx, { en: "Add to my deck", ar: "أضفها إلى مجموعتي" })], {
      class: "primary",
      onClick: () => {
        ctx.store.update((q) => addCards(q, [w.id], ctx.now()), { render: true });
        ctx.toast({ en: "Added: it comes up in your next review.", ar: "أُضيفت: ستظهر في مراجعتك القادمة." }, "ok");
      },
    });
  } else {
    const wait = card.due - now;
    status =
      card.phase === "new"
        ? { en: "New card: it waits for its first review.", ar: "بطاقة جديدة: تنتظر مراجعتها الأولى." }
        : wait <= 0
          ? { en: "Due now.", ar: "مستحقة الآن." }
          : { en: `Next review in ${formatInterval(wait)}.`, ar: `المراجعة التالية بعد ${formatInterval(wait)}.` };
    if (wait <= 0) action = btn([icon("cards", 18), tr(ctx, { en: "Review now", ar: "راجع الآن" })], { class: "primary", onClick: () => ctx.navigate("review") });
    rows.push([{ en: "Reviews", ar: "المراجعات" }, String(card.reps)]);
    rows.push([{ en: "Forgotten", ar: "مرات النسيان" }, String(card.lapses)]);
    if (card.phase === "review") rows.push([{ en: "Interval", ar: "الفاصل" }, `${card.interval} d`]);
  }
  if (miss) rows.push([{ en: "Missed in quizzes", ar: "أخطاء في الاختبارات" }, String(miss.n)]);
  const weak = weakScore(miss, card) > 0;
  return h(
    "section",
    { class: "card deck-status" },
    h("h3", null, tr(ctx, { en: "In your study", ar: "في دراستك" })),
    h("p", null, tr(ctx, status)),
    rows.length ? h("dl", { class: "facts" }, rows.map(([k, v]) => h("div", null, h("dt", null, tr(ctx, k)), h("dd", null, v)))) : null,
    h("div", { class: "row wrap" }, action, weak ? btn([icon("repeat", 18), tr(ctx, { en: "Drill weak words", ar: "تدرّب على الكلمات الضعيفة" })], { class: "ghost", onClick: () => ctx.navigate("weak") }) : null),
  );
}

export function wordView(ctx: Ctx, id: string): HTMLElement {
  const w = findWord(id);
  const n = dayOfWordId(id);
  const day = getDay(n);
  if (!w || !day) return h("div", { class: "view" }, h("p", null, tr(ctx, { en: "This word is not in the course.", ar: "هذه الكلمة ليست في الدورة." })));
  const today = dayNumber(ctx.store.progress.settings.startDate, new Date(ctx.now()));
  const index = day.words.findIndex((x) => x.id === id);
  const prev = day.words[index - 1];
  const next = day.words[index + 1];
  const showSay = ctx.store.progress.settings.showSay;
  const step = (target: Word | undefined, dir: "left" | "right", label: { en: string; ar: string }) =>
    target ? h("a", { class: "icon-btn", href: `#word-${target.id}`, title: tr(ctx, label), "aria-label": `${tr(ctx, label)}: ${target.en}` }, icon(dir)) : h("span", { class: "icon-btn", "aria-hidden": "true" });

  return h(
    "div",
    { class: "view word-page" },
    h(
      "nav",
      { class: "word-nav", "aria-label": tr(ctx, { en: "Words of this day", ar: "كلمات هذا اليوم" }) },
      h("a", { class: "back", href: `#day-${n}-words` }, icon("left", 18), tr(ctx, { en: `Day ${n}`, ar: `اليوم ${n}` }), " · ", ru(day.title.ru)),
      h("span", { class: "word-step" }, step(prev, "left", { en: "Previous word", ar: "الكلمة السابقة" }), h("span", { class: "muted" }, `${index + 1} / ${day.words.length}`), step(next, "right", { en: "Next word", ar: "الكلمة التالية" })),
    ),
    h(
      "section",
      { class: "card word-hero" },
      h("div", { class: "word-hero-ru" }, ru(w.ru, "huge")),
      playButtons(ctx, w.ru),
      showSay ? h("div", { class: "say" }, w.say) : null,
      h("div", { class: "word-tags" }, chip(tr(ctx, POS_LABEL[w.pos])), w.g ? chip(tr(ctx, GENDER_LABEL[w.g]), `g-${w.g}`) : null, n > today ? chip(tr(ctx, { en: `coming on day ${n}`, ar: `في اليوم ${n}` }), "now") : null),
      h("div", { class: "meaning big-meaning" }, biCtx(ctx, { en: w.en, ar: w.ar }, "div")),
    ),
    w.forms || w.ex || w.note
      ? h(
          "section",
          { class: "card word-details" },
          w.forms ? h("div", null, h("h3", null, tr(ctx, { en: "Forms", ar: "الصيغ" })), h("p", { class: "forms" }, mixed(w.forms))) : null,
          w.ex ? h("div", null, h("h3", null, tr(ctx, { en: "Example", ar: "مثال" })), h("div", { class: "ex-line" }, ru(w.ex.ru), playButtons(ctx, w.ex.ru, { slow: true })), biCtx(ctx, { en: w.ex.en, ar: w.ex.ar }, "div", "ex-tr")) : null,
          w.note ? h("div", { class: "note" }, biCtx(ctx, w.note, "div")) : null,
        )
      : null,
    deckCard(ctx, w),
  );
}
