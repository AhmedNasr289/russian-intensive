// Spaced-repetition review: one card at a time, recognition and production alternating,
// four grades with the interval each one leads to, keyboard shortcuts Space and 1–4.

import { findWord } from "../../core/course.ts";
import { applyReview, deckStats, dueCards } from "../../core/progress.ts";
import { GRADES, formatInterval, previewIntervals } from "../../core/srs.ts";
import type { CardState, Grade } from "../../core/srs.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h, replace } from "../dom.ts";
import { biCtx, btn, icon, playButtons, ru, sectionTitle } from "../ui.ts";

const GRADE_LABEL: Record<Grade, { en: string; ar: string }> = {
  0: { en: "Again", ar: "مرة أخرى" },
  1: { en: "Hard", ar: "صعب" },
  2: { en: "Good", ar: "جيد" },
  3: { en: "Easy", ar: "سهل" },
};

export function reviewView(ctx: Ctx): HTMLElement {
  const root = h("div", { class: "view review" });
  let reviewed = 0;
  let current: CardState | null = null;
  let revealed = false;
  let reveal: () => void = () => undefined;
  let grade: (g: Grade) => void = () => undefined;

  const onKey = (e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    if (!revealed && (e.key === " " || e.key === "Enter")) {
      e.preventDefault();
      reveal();
    } else if (revealed && ["1", "2", "3", "4"].includes(e.key)) {
      e.preventDefault();
      grade((Number(e.key) - 1) as Grade);
    }
  };
  document.addEventListener("keydown", onKey);
  ctx.onLeave(() => document.removeEventListener("keydown", onKey));

  const header = (due: number) => {
    const s = deckStats(ctx.store.progress, ctx.now());
    return h(
      "div",
      { class: "review-head" },
      sectionTitle(ctx, { en: "Review cards", ar: "مراجعة البطاقات" }),
      h(
        "div",
        { class: "counts" },
        h("span", { class: "count new" }, h("strong", null, String(s.fresh)), tr(ctx, { en: " new", ar: " جديدة" })),
        h("span", { class: "count learning" }, h("strong", null, String(s.learning)), tr(ctx, { en: " learning", ar: " قيد التعلّم" })),
        h("span", { class: "count due" }, h("strong", null, String(due)), tr(ctx, { en: " due now", ar: " مستحقة الآن" })),
        reviewed ? h("span", { class: "count done" }, h("strong", null, String(reviewed)), tr(ctx, { en: " done", ar: " تمت" })) : null,
      ),
    );
  };

  const next = () => {
    const due = dueCards(ctx.store.progress, ctx.now());
    current = due[0] ?? null;
    revealed = false;
    if (!current) return renderEmpty();
    const word = findWord(current.id);
    if (!word) {
      // A card whose word no longer exists: grade it away quietly so it never blocks the queue.
      ctx.store.update((p) => applyReview(p, current?.id ?? "", 3, ctx.now()));
      return next();
    }
    const card = current;
    const production = card.reps % 2 === 1 && card.phase === "review";
    const settings = ctx.store.progress.settings;
    const front = production
      ? h("div", { class: "card-face" }, h("p", { class: "eyebrow" }, tr(ctx, { en: "Say it in Russian", ar: "قلها بالروسية" })), h("div", { class: "prompt-meaning" }, biCtx(ctx, { en: word.en, ar: word.ar }, "div")))
      : h("div", { class: "card-face" }, h("p", { class: "eyebrow" }, tr(ctx, { en: "What does it mean?", ar: "ماذا تعني؟" })), h("div", { class: "prompt-ru" }, ru(word.ru, "huge"), playButtons(ctx, word.ru)));
    const back = h(
      "div",
      { class: "card-back", hidden: true },
      // A recognition card already shows the word on its front.
      production ? h("div", { class: "prompt-ru" }, ru(word.ru, "huge"), playButtons(ctx, word.ru)) : null,
      settings.showSay ? h("div", { class: "say" }, word.say) : null,
      h("div", { class: "meaning" }, biCtx(ctx, { en: word.en, ar: word.ar }, "div")),
      word.ex ? h("div", { class: "example" }, h("div", { class: "ex-line" }, ru(word.ex.ru), playButtons(ctx, word.ex.ru, { slow: false })), biCtx(ctx, { en: word.ex.en, ar: word.ex.ar }, "div", "ex-tr")) : null,
    );
    const previews = previewIntervals(card, ctx.now());
    const grades = h(
      "div",
      { class: "grades", hidden: true },
      GRADES.map((g) =>
        h(
          "button",
          { type: "button", class: `grade g${g}`, onClick: () => grade(g) },
          h("span", { class: "grade-label" }, tr(ctx, GRADE_LABEL[g])),
          h("span", { class: "grade-when" }, formatInterval(previews[g])),
          h("kbd", null, String(g + 1)),
        ),
      ),
    );
    const showBtn = btn([tr(ctx, { en: "Show answer", ar: "أظهر الإجابة" }), h("kbd", null, "Space")], { class: "primary big", onClick: () => reveal() });

    reveal = () => {
      if (revealed) return;
      revealed = true;
      back.hidden = false;
      grades.hidden = false;
      showBtn.hidden = true;
      if (production) void ctx.speak(word.ru);
      (grades.querySelector("button.g2") as HTMLButtonElement | null)?.focus();
    };
    grade = (g: Grade) => {
      if (!revealed) return;
      ctx.store.update((p) => applyReview(p, card.id, g, ctx.now()));
      ctx.sfx(g === 0 ? "bad" : "tap");
      reviewed++;
      next();
    };

    replace(root, header(dueCards(ctx.store.progress, ctx.now()).length), h("div", { class: "card flash" }, front, back, h("div", { class: "flash-actions" }, showBtn, grades)));
    if (!production && settings.autoplay) void ctx.speak(word.ru);
  };

  const renderEmpty = () => {
    const cards = Object.values(ctx.store.progress.cards);
    const upcoming = cards.map((c) => c.due).filter((d) => d > ctx.now()).sort((a, b) => a - b)[0];
    replace(
      root,
      header(0),
      h(
        "div",
        { class: "card empty" },
        icon("check", 40),
        cards.length === 0
          ? h("div", null, h("h3", null, tr(ctx, { en: "Your deck is empty", ar: "مجموعتك فارغة" })), biCtx(ctx, { en: "Open today's words and they are added to your review cards automatically.", ar: "افتح كلمات اليوم وستُضاف إلى بطاقات المراجعة تلقائيًا." }), btn(tr(ctx, { en: "Go to today", ar: "اذهب إلى اليوم" }), { class: "primary", onClick: () => ctx.navigate("today") }))
          : h(
              "div",
              null,
              h("h3", null, tr(ctx, reviewed ? { en: `All caught up — ${reviewed} cards reviewed`, ar: `أنجزت كل شيء — راجعت ${reviewed} بطاقة` } : { en: "Nothing is due right now", ar: "لا شيء مستحق الآن" })),
              upcoming ? h("p", { class: "muted" }, tr(ctx, { en: `Next card in ${formatInterval(upcoming - ctx.now())}.`, ar: `البطاقة التالية بعد ${formatInterval(upcoming - ctx.now())}.` })) : null,
              btn(tr(ctx, { en: "Back to today", ar: "العودة إلى اليوم" }), { class: "ghost", onClick: () => ctx.navigate("today") }),
            ),
      ),
    );
    if (reviewed) ctx.sfx("done");
  };

  next();
  return root;
}
