// Today: where the learner is in the 56 days, the seven timed steps of the day, and what is due.

import type { Day } from "../../content/types.ts";
import { WEEK_THEMES } from "../../content/syllabus.ts";
import { getDay } from "../../core/course.ts";
import { deckStats, toggleStep } from "../../core/progress.ts";
import { COURSE_DAYS, currentStep, dailySteps, dateOfDay, dayNumber, weekOf } from "../../core/schedule.ts";
import type { Step } from "../../core/schedule.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h } from "../dom.ts";
import { biCtx, btn, chip, icon, ring, ru, sectionTitle } from "../ui.ts";

/** Where each step of the day leads, depending on the kind of day. */
export function stepTarget(step: Step, day: Day): string {
  const n = day.n;
  switch (step.target) {
    case "review":
      return "review";
    case "listen":
      return day.kind === "review" ? `day-${n}-test` : day.kind === "immersion" ? `day-${n}-worksheet` : `day-${n}-dialogue`;
    case "words":
      return day.kind === "review" ? "review" : `day-${n}-words`;
    case "lesson":
      return day.kind === "review" ? `day-${n}-test` : day.kind === "immersion" ? `day-${n}-worksheet` : `day-${n}-grammar`;
    case "practice":
      return day.kind === "review" ? `day-${n}-test` : `day-${n}-practice`;
    case "tutor":
      return `day-${n}-tutor`;
    case "journal":
      return `day-${n}-journal`;
  }
}

const KIND_LABEL = {
  lesson: { en: "Lesson", ar: "درس" },
  immersion: { en: "Immersion day", ar: "يوم انغماس" },
  review: { en: "Review and test", ar: "مراجعة واختبار" },
} as const;

export const kindLabel = (ctx: Ctx, kind: Day["kind"]): string => tr(ctx, KIND_LABEL[kind]);

function formatDate(iso: string, lang: "en" | "ar"): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y ?? 2026, (m ?? 1) - 1, d ?? 1);
  return date.toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB", { weekday: "long", day: "numeric", month: "long" });
}

function statTile(label: string, value: string | number, iconName: Parameters<typeof icon>[0]): HTMLElement {
  return h("div", { class: "stat" }, h("span", { class: "stat-icon" }, icon(iconName, 20)), h("span", { class: "stat-value" }, String(value)), h("span", { class: "stat-label" }, label));
}

function setupChecklist(ctx: Ctx): HTMLElement {
  const hasVoice = ctx.voices.main !== null;
  const item = (ok: boolean, label: { en: string; ar: string }, href: string) =>
    h("li", { class: ok ? "done" : "" }, h("span", { class: "tick" }, icon(ok ? "check" : "right", 16)), h("a", { href: `#${href}` }, tr(ctx, label)));
  return h(
    "section",
    { class: "card setup" },
    sectionTitle(ctx, { en: "Before you start", ar: "قبل أن تبدأ" }),
    h(
      "ul",
      { class: "checklist" },
      item(hasVoice, hasVoice ? { en: `Russian voice ready: ${ctx.voices.main?.name ?? ""}`, ar: `الصوت الروسي جاهز: ${ctx.voices.main?.name ?? ""}` } : { en: "Add a Russian voice so the app can speak", ar: "أضف صوتًا روسيًا ليتمكن التطبيق من النطق" }, hasVoice ? "settings" : "library"),
      item(false, { en: "Add a Russian keyboard (or use the one on screen)", ar: "أضف لوحة مفاتيح روسية (أو استخدم لوحة الشاشة)" }, "library"),
      ctx.host === "artifact" ? null : item(false, { en: "Put the 112 study sessions in your calendar", ar: "أضف جلسات الدراسة الـ ١١٢ إلى تقويمك" }, "settings"),
      item(false, { en: "Learn the 33 letters in the alphabet studio", ar: "تعلّم الحروف الـ ٣٣ في استوديو الأبجدية" }, "alphabet"),
    ),
  );
}

export function todayView(ctx: Ctx): HTMLElement {
  const p = ctx.store.progress;
  const now = new Date(ctx.now());
  const n = dayNumber(p.settings.startDate, now);
  const stats = deckStats(p, ctx.now());
  const streak = p.streak.current;
  const learned = Object.keys(p.cards).length;

  const tiles = h(
    "div",
    { class: "stats" },
    statTile(tr(ctx, { en: "cards due", ar: "بطاقات مستحقة" }), stats.dueNow, "cards"),
    statTile(tr(ctx, { en: "day streak", ar: "أيام متتالية" }), streak, "flame"),
    statTile(tr(ctx, { en: "words in your deck", ar: "كلمة في مجموعتك" }), learned, "book"),
  );

  if (n === 0) {
    const start = p.settings.startDate;
    const days = Math.round((new Date(`${start}T00:00:00`).getTime() - new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()) / 86_400_000);
    return h(
      "div",
      { class: "view today" },
      h(
        "section",
        { class: "hero card" },
        h("p", { class: "eyebrow" }, tr(ctx, { en: "Your course starts soon", ar: "دورتك تبدأ قريبًا" })),
        h("h1", null, tr(ctx, { en: `Day 1 is ${formatDate(start, "en")}`, ar: `اليوم الأول هو ${formatDate(start, "ar")}` })),
        h("p", { class: "lead" }, tr(ctx, { en: `${days} ${days === 1 ? "day" : "days"} to go. Get ready below, or preview the first lessons now.`, ar: `بقي ${days} يوم. استعدّ أدناه أو اطّلع على الدروس الأولى الآن.` })),
        h("div", { class: "row wrap" }, btn(tr(ctx, { en: "Preview day 1", ar: "معاينة اليوم الأول" }), { class: "primary", onClick: () => ctx.navigate("day-1") }), btn(tr(ctx, { en: "Alphabet studio", ar: "استوديو الأبجدية" }), { class: "ghost", onClick: () => ctx.navigate("alphabet") })),
      ),
      setupChecklist(ctx),
      tiles,
    );
  }

  if (n > COURSE_DAYS) {
    const tests = Object.values(p.tests);
    const avg = tests.length ? tests.reduce((a, t) => a + t.best, 0) / tests.length : 0;
    return h(
      "div",
      { class: "view today" },
      h(
        "section",
        { class: "hero card done-hero" },
        h("p", { class: "eyebrow" }, tr(ctx, { en: "Course complete", ar: "اكتملت الدورة" })),
        h("h1", null, ru("Молоде́ц!"), " ", tr(ctx, { en: "You finished all 56 days.", ar: "أنهيت الأيام الـ ٥٦ كلها." })),
        h("p", { class: "lead" }, tr(ctx, { en: `Average best test score: ${Math.round(avg * 100)}%. Keep your words alive with a short daily review.`, ar: `متوسط أفضل نتائج الاختبارات: ${Math.round(avg * 100)}٪. حافظ على كلماتك بمراجعة يومية قصيرة.` })),
        h("div", { class: "row wrap" }, btn(tr(ctx, { en: "Review cards", ar: "راجع البطاقات" }), { class: "primary", onClick: () => ctx.navigate("review") }), btn(tr(ctx, { en: "See progress", ar: "اعرض التقدّم" }), { class: "ghost", onClick: () => ctx.navigate("progress") })),
      ),
      tiles,
    );
  }

  const day = getDay(n);
  const week = weekOf(n);
  const steps = dailySteps(p.settings);
  const done = new Set(p.steps[`d${n}`] ?? []);
  const { current } = currentStep(steps, now);
  const theme = WEEK_THEMES[week - 1];

  const stepRow = (step: Step) => {
    const isDone = done.has(step.id);
    const isNow = current?.id === step.id;
    const target = day ? stepTarget(step, day) : `day-${n}`;
    return h(
      "li",
      { class: `step ${isDone ? "is-done" : ""} ${isNow ? "is-now" : ""}`.trim() },
      h("span", { class: "step-time" }, step.start),
      h("div", { class: "step-main" }, h("span", { class: "step-title" }, tr(ctx, step.title)), h("span", { class: "step-min muted" }, `${step.minutes} ${tr(ctx, { en: "min", ar: "دقيقة" })}`), isNow ? chip(tr(ctx, { en: "now", ar: "الآن" }), "now") : null),
      h(
        "div",
        { class: "step-actions" },
        btn(tr(ctx, { en: "Start", ar: "ابدأ" }), { class: "ghost small", onClick: () => ctx.navigate(target) }),
        h(
          "button",
          {
            type: "button",
            class: `check ${isDone ? "on" : ""}`,
            role: "checkbox",
            "aria-checked": String(isDone),
            "aria-label": tr(ctx, { en: `Mark "${step.title.en}" done`, ar: `علّم «${step.title.ar}» كمكتمل` }),
            onClick: () => {
              ctx.store.update((q) => toggleStep(q, n, step.id, ctx.now()), { render: true });
              if (!isDone) ctx.sfx("tap");
            },
          },
          icon("check", 16),
        ),
      ),
    );
  };

  const block = (name: "morning" | "evening") =>
    h(
      "div",
      { class: `block block-${name}` },
      h("h3", { class: "block-title" }, tr(ctx, name === "morning" ? { en: "Morning · 45 min", ar: "الصباح · ٤٥ دقيقة" } : { en: "Evening · 75 min", ar: "المساء · ٧٥ دقيقة" })),
      h("ol", { class: "steps" }, steps.filter((s) => s.block === name).map(stepRow)),
    );

  return h(
    "div",
    { class: "view today" },
    h(
      "section",
      { class: "hero card" },
      h(
        "div",
        { class: "hero-text" },
        h("p", { class: "eyebrow" }, tr(ctx, { en: `Day ${n} of ${COURSE_DAYS} · Week ${week}`, ar: `اليوم ${n} من ${COURSE_DAYS} · الأسبوع ${week}` }), theme ? h("span", { class: "eyebrow-theme" }, " · ", tr(ctx, theme)) : null),
        day ? h("h1", { class: "day-title" }, ru(day.title.ru)) : h("h1", null, tr(ctx, { en: "This day's lesson is being prepared", ar: "درس هذا اليوم قيد الإعداد" })),
        day ? h("p", { class: "lead" }, biCtx(ctx, { en: day.title.en, ar: day.title.ar }, "span")) : null,
        day ? chip(kindLabel(ctx, day.kind), `kind-${day.kind}`) : null,
        day ? h("ul", { class: "goals" }, day.goals.map((g) => h("li", null, biCtx(ctx, g, "span")))) : null,
        h("p", { class: "muted small" }, formatDate(dateOfDay(p.settings.startDate, n), ctx.store.progress.settings.explain === "ar" ? "ar" : "en")),
      ),
      h("div", { class: "hero-ring" }, ring(done.size / steps.length, 104, h("span", null, h("strong", null, `${done.size}/${steps.length}`), h("small", null, tr(ctx, { en: "steps", ar: "خطوات" }))))),
    ),
    tiles,
    h("section", { class: "card timeline" }, sectionTitle(ctx, { en: "Today's plan", ar: "خطة اليوم" }), h("div", { class: "blocks" }, block("morning"), block("evening"))),
    n <= 3 || stats.total === 0 ? setupChecklist(ctx) : null,
  );
}
