// The whole course on one screen: eight weeks, seven days each, with the state of every day.

import { SYLLABUS, WEEK_THEMES } from "../../content/syllabus.ts";
import { dayNumber, STEP_PLAN } from "../../core/schedule.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h } from "../dom.ts";
import { chip, ru, sectionTitle } from "../ui.ts";

export function courseView(ctx: Ctx): HTMLElement {
  const p = ctx.store.progress;
  const today = dayNumber(p.settings.startDate, new Date(ctx.now()));
  const total = STEP_PLAN.length;

  const cell = (n: number) => {
    const s = SYLLABUS[n - 1];
    if (!s) return null;
    const done = (p.steps[`d${n}`] ?? []).length;
    const state = done >= total ? "complete" : done > 0 ? "partial" : n === today ? "today" : n < today ? "missed" : "future";
    const test = p.tests[`d${n}`];
    return h(
      "a",
      { href: `#day-${n}`, class: `day-cell state-${state} kind-${s.kind}`, "aria-label": `${tr(ctx, { en: "Day", ar: "اليوم" })} ${n}: ${tr(ctx, s.title)}` },
      h("span", { class: "day-num" }, String(n)),
      h("span", { class: "day-ru" }, ru(s.title.ru)),
      h("span", { class: "day-en" }, tr(ctx, s.title)),
      h(
        "span",
        { class: "day-foot" },
        s.kind === "lesson" ? null : chip(tr(ctx, s.kind === "immersion" ? { en: "watch", ar: "مشاهدة" } : { en: "test", ar: "اختبار" }), `kind-${s.kind}`),
        test ? chip(`${Math.round(test.best * 100)}%`, "score") : done > 0 ? chip(`${done}/${total}`, "steps") : null,
      ),
    );
  };

  return h(
    "div",
    { class: "view course" },
    sectionTitle(ctx, { en: "The 56-day course", ar: "دورة الـ ٥٦ يومًا" }),
    h(
      "p",
      { class: "legend" },
      chip(tr(ctx, { en: "today", ar: "اليوم" }), "legend-today"),
      chip(tr(ctx, { en: "started", ar: "بدأته" }), "legend-partial"),
      chip(tr(ctx, { en: "complete", ar: "مكتمل" }), "legend-complete"),
    ),
    WEEK_THEMES.map((theme, w) =>
      h(
        "section",
        { class: "week" },
        h("h3", { class: "week-title" }, h("span", { class: "week-num" }, tr(ctx, { en: `Week ${w + 1}`, ar: `الأسبوع ${w + 1}` })), " ", ru(theme.ru), h("span", { class: "muted" }, ` · ${tr(ctx, theme)}`)),
        h("div", { class: "week-grid" }, Array.from({ length: 7 }, (_, d) => cell(w * 7 + d + 1))),
      ),
    ),
  );
}
