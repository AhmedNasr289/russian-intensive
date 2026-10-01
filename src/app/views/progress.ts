// Progress: the deck, retention, streak, study time (two small charts, one axis each),
// test scores and the journal.

import { getDay } from "../../core/course.ts";
import { dueForecast, weekMinutes } from "../../core/forecast.ts";
import type { WeekMinutes } from "../../core/forecast.ts";
import { deckStats, retention } from "../../core/progress.ts";
import { weakWords } from "../../core/weak.ts";
import { isoDate } from "../../core/schedule.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h } from "../dom.ts";
import { btn, chip, icon, ring, ru, sectionTitle } from "../ui.ts";
import { weakRow } from "./weak.ts";

/** `label` names the day in full (tooltips, the table); `tick` is the short axis text. */
type Point = { date: string; label: string; tick: string; value: number };

const DAILY_GOAL_MIN = 120;

function lastDays(count: number, now: number): string[] {
  const out: string[] = [];
  const d = new Date(now);
  for (let i = count - 1; i >= 0; i--) out.push(isoDate(new Date(d.getFullYear(), d.getMonth(), d.getDate() - i)));
  return out;
}

function shortLabel(iso: string, lang: "en" | "ar"): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y ?? 2026, (m ?? 1) - 1, d ?? 1).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB", { weekday: "narrow", day: "numeric" });
}

/** A single-series bar chart in HTML: bars grow from the baseline, one optional goal line. */
function barChart(ctx: Ctx, opts: { title: string; unit: string; points: Point[]; max: number; goal?: { value: number; label: string }; todayFirst?: boolean }): HTMLElement {
  const max = Math.max(opts.max, ...opts.points.map((p) => p.value), 1);
  const pct = (v: number) => `${(v / max) * 100}%`;
  // History ends today; a forecast starts today.
  const last = opts.todayFirst ? opts.points[0] : opts.points.at(-1);
  return h(
    "figure",
    { class: "chart" },
    h("figcaption", { class: "chart-title" }, opts.title, last ? h("span", { class: "chart-today" }, `${tr(ctx, { en: "Today", ar: "اليوم" })}: ${last.value} ${opts.unit}`) : null),
    h(
      "div",
      { class: "plot", role: "img", "aria-label": `${opts.title}. ${opts.points.map((p) => `${p.label}: ${p.value}`).join(", ")}` },
      h("div", { class: "gridline", style: `bottom:50%` }),
      h("span", { class: "axis-tick", style: "bottom:50%", "aria-hidden": "true" }, String(Math.round(max / 2))),
      h("span", { class: "axis-tick", style: "bottom:100%", "aria-hidden": "true" }, String(max)),
      opts.goal ? h("div", { class: "goal", style: `bottom:${pct(opts.goal.value)}` }, h("span", null, opts.goal.label)) : null,
      h(
        "div",
        { class: "bars" },
        opts.points.map((p) =>
          h(
            "div",
            { class: "bar-col" },
            h("div", { class: `bar ${p.value === 0 ? "zero" : ""}`, style: `height:${pct(p.value)}`, tabindex: "0", "data-tip": `${p.label} · ${p.value} ${opts.unit}`, "aria-label": `${p.label}: ${p.value} ${opts.unit}` }),
          ),
        ),
      ),
    ),
    h("div", { class: "axis", "aria-hidden": "true" }, opts.points.map((p, i) => h("span", { class: (opts.points.length - 1 - i) % 2 === 0 ? "" : "thin" }, p.tick))),
    h(
      "details",
      { class: "chart-table" },
      h("summary", null, tr(ctx, { en: "Show as a table", ar: "اعرض كجدول" })),
      h("table", null, h("thead", null, h("tr", null, h("th", { scope: "col" }, tr(ctx, { en: "Day", ar: "اليوم" })), h("th", { scope: "col" }, opts.unit))), h("tbody", null, opts.points.map((p) => h("tr", null, h("th", { scope: "row" }, p.date), h("td", null, String(p.value)))))),
    ),
  );
}

/** This course week's minutes against the plan, with a mark where a steady pace would be by today. */
function weekPanel(ctx: Ctx, week: WeekMinutes): HTMLElement {
  const pace = Math.round((week.plan * week.day) / 7);
  const status =
    week.minutes >= pace
      ? { en: `${week.minutes} of ${week.plan} min: on pace (${pace} by today).`, ar: `${week.minutes} من ${week.plan} دقيقة: في الموعد (${pace} حتى اليوم).` }
      : { en: `${week.minutes} of ${week.plan} min: ${pace - week.minutes} min behind today's pace (${pace}).`, ar: `${week.minutes} من ${week.plan} دقيقة: متأخر ${pace - week.minutes} دقيقة عن وتيرة اليوم (${pace}).` };
  return h(
    "figure",
    { class: "chart week" },
    h("figcaption", { class: "chart-title" }, tr(ctx, { en: `This week: week ${week.week}, day ${week.day} of 7`, ar: `هذا الأسبوع: الأسبوع ${week.week}، اليوم ${week.day} من ٧` })),
    h(
      "div",
      { class: "week-meter", role: "img", "aria-label": tr(ctx, status) },
      h("span", { class: "week-fill", style: `width:${Math.min(100, (week.minutes / week.plan) * 100).toFixed(1)}%` }),
      h("span", { class: "week-pace", style: `inset-inline-start:${((pace / week.plan) * 100).toFixed(1)}%` }),
    ),
    h("p", null, tr(ctx, status)),
    h("p", { class: "muted" }, tr(ctx, { en: "The line marks where a steady two hours a day would be by today.", ar: "يشير الخط إلى حيث ستكون لو درست ساعتين يوميًا بانتظام حتى اليوم." })),
  );
}

export function progressView(ctx: Ctx): HTMLElement {
  const p = ctx.store.progress;
  const now = ctx.now();
  const lang = p.settings.explain === "ar" ? "ar" : "en";
  const stats = deckStats(p, now);
  const today = isoDate(new Date(now));
  const ret = retention(p, 7, today);
  const days = lastDays(14, now);
  const tick = (d: string) => String(Number(d.slice(8)));
  const minutes = days.map((d) => ({ date: d, label: shortLabel(d, lang), tick: tick(d), value: p.studyLog[d] ?? 0 }));
  const reviews = days.map((d) => ({ date: d, label: shortLabel(d, lang), tick: tick(d), value: p.reviewLog[d]?.n ?? 0 }));
  const totalMinutes = Object.values(p.studyLog).reduce((a, b) => a + b, 0);
  const tests = Object.entries(p.tests).sort(([a], [b]) => Number(a.slice(1)) - Number(b.slice(1)));
  const forecast = dueForecast(p, now).map((d, i) => ({ date: d.date, label: i === 0 ? tr(ctx, { en: "Today", ar: "اليوم" }) : shortLabel(d.date, lang), tick: i === 0 ? tr(ctx, { en: "today", ar: "اليوم" }) : tick(d.date), value: d.n }));
  const week = weekMinutes(p, p.settings.startDate, new Date(now));
  const weak = weakWords(p, 8);

  const tile = (value: string, label: string) => h("div", { class: "stat" }, h("span", { class: "stat-value" }, value), h("span", { class: "stat-label" }, label));

  return h(
    "div",
    { class: "view progress" },
    sectionTitle(ctx, { en: "Your progress", ar: "تقدّمك" }),
    h(
      "div",
      { class: "stats" },
      tile(String(stats.total), tr(ctx, { en: "cards in your deck", ar: "بطاقة في مجموعتك" })),
      tile(String(stats.mature), tr(ctx, { en: "well known (21+ days)", ar: "محفوظة جيدًا (+٢١ يومًا)" })),
      tile(ret === null ? "—" : `${Math.round(ret * 100)}%`, tr(ctx, { en: "recall, last 7 days", ar: "التذكّر في آخر ٧ أيام" })),
      tile(`${p.streak.current}`, tr(ctx, { en: `day streak (best ${p.streak.best})`, ar: `أيام متتالية (الأفضل ${p.streak.best})` })),
      tile(`${Math.round(totalMinutes / 60)} h`, tr(ctx, { en: "studied in total", ar: "إجمالي الدراسة" })),
    ),
    h(
      "section",
      { class: "card charts" },
      barChart(ctx, { title: tr(ctx, { en: "Minutes studied per day", ar: "دقائق الدراسة يوميًا" }), unit: tr(ctx, { en: "min", ar: "دقيقة" }), points: minutes, max: DAILY_GOAL_MIN, goal: { value: DAILY_GOAL_MIN, label: tr(ctx, { en: "2 h goal", ar: "هدف ساعتين" }) } }),
      barChart(ctx, { title: tr(ctx, { en: "Cards reviewed per day", ar: "البطاقات المراجَعة يوميًا" }), unit: tr(ctx, { en: "cards", ar: "بطاقة" }), points: reviews, max: 20 }),
    ),
    h(
      "section",
      { class: "card charts" },
      weekPanel(ctx, week),
      barChart(ctx, { title: tr(ctx, { en: "Cards due in the next 7 days", ar: "البطاقات المستحقة في الأيام السبعة القادمة" }), unit: tr(ctx, { en: "cards", ar: "بطاقة" }), points: forecast, max: 20, todayFirst: true }),
    ),
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: "Weakest words", ar: "أضعف الكلمات" })),
      weak.length
        ? [h("ul", { class: "weak-list" }, weak.map((w) => weakRow(ctx, w))), btn([icon("repeat", 18), tr(ctx, { en: "Drill them", ar: "تدرّب عليها" })], { class: "primary", onClick: () => ctx.navigate("weak") })]
        : h("p", { class: "muted" }, tr(ctx, { en: "No weak words yet: practice and review add them when they trip you up.", ar: "لا كلمات ضعيفة بعد: تُضاف عندما تتعثّر فيها في التمارين والمراجعة." })),
    ),
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: "Deck breakdown", ar: "تفصيل المجموعة" })),
      h(
        "div",
        { class: "deck-rings" },
        ([
          ["fresh", { en: "new", ar: "جديدة" }],
          ["learning", { en: "learning", ar: "قيد التعلّم" }],
          ["young", { en: "young", ar: "حديثة" }],
          ["mature", { en: "mature", ar: "راسخة" }],
        ] as const).map(([k, label]) => h("div", { class: "deck-ring" }, ring(stats.total ? stats[k] / stats.total : 0, 72, String(stats[k])), h("span", null, tr(ctx, label)))),
      ),
    ),
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: "Weekly tests", ar: "الاختبارات الأسبوعية" })),
      tests.length
        ? h(
            "ul",
            { class: "test-list" },
            tests.map(([key, score]) => {
              const n = Number(key.slice(1));
              return h("li", null, h("a", { href: `#day-${n}-test` }, tr(ctx, { en: `Day ${n}`, ar: `اليوم ${n}` })), " ", getDay(n) ? ru(getDay(n)?.title.ru ?? "") : null, chip(`${Math.round(score.best * 100)}%`, score.best >= 0.8 ? "ok" : "score"));
            }),
          )
        : h("p", { class: "muted" }, tr(ctx, { en: "Your first test is on day 7.", ar: "اختبارك الأول في اليوم السابع." })),
    ),
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: "Journal", ar: "اليوميات" })),
      p.journal.length
        ? h(
            "ul",
            { class: "journal-list" },
            [...p.journal].reverse().slice(0, 12).map((e) => h("li", null, h("a", { href: `#day-${e.day}-journal` }, tr(ctx, { en: `Day ${e.day}`, ar: `اليوم ${e.day}` })), h("p", { lang: "ru" }, e.text), e.corrected ? h("p", { class: "corrected" }, icon("check", 14), ru(e.corrected)) : null)),
          )
        : h("p", { class: "muted" }, tr(ctx, { en: "Your journal entries will appear here.", ar: "ستظهر يومياتك هنا." })),
    ),
  );
}
