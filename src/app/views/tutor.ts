// The tutor hub: pick a mode and a day; the tutor is told that day's words and grammar.

import type { TutorMode } from "../../core/tutorPrompt.ts";
import { TUTOR_MODES } from "../../core/tutorPrompt.ts";
import { getDay } from "../../core/course.ts";
import { COURSE_DAYS, dayNumber } from "../../core/schedule.ts";
import { tutorPanel } from "../components/chat.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h } from "../dom.ts";
import { biCtx, ru, sectionTitle } from "../ui.ts";

export function tutorView(ctx: Ctx, requested: TutorMode | null): HTMLElement {
  const mode: TutorMode = requested ?? "roleplay";
  const today = dayNumber(ctx.store.progress.settings.startDate, new Date(ctx.now()));
  const n = Math.min(Math.max(today, 1), COURSE_DAYS);
  const day = getDay(n);
  const info = TUTOR_MODES.find((m) => m.id === mode);
  return h(
    "div",
    { class: "view tutor" },
    sectionTitle(ctx, { en: "Your tutor Katya", ar: "معلّمتك كاتيا" }),
    h("p", { class: "lead" }, biCtx(ctx, { en: "Katya knows your day, your words and your level. Write in Russian; ask in English or Arabic whenever you need to.", ar: "كاتيا تعرف يومك وكلماتك ومستواك. اكتب بالروسية واسأل بالإنجليزية أو العربية متى احتجت." }, "span")),
    h(
      "nav",
      { class: "tabs", "aria-label": tr(ctx, { en: "Tutor modes", ar: "أوضاع المعلّم" }) },
      TUTOR_MODES.map((m) => h("a", { href: `#tutor-${m.id}`, class: `tab ${m.id === mode ? "active" : ""}`, "aria-current": m.id === mode ? "page" : "false" }, tr(ctx, m.title))),
    ),
    info ? h("p", { class: "muted" }, tr(ctx, info.hint)) : null,
    day ? h("p", { class: "tutor-day" }, tr(ctx, { en: `Working on day ${day.n}: `, ar: `العمل على اليوم ${day.n}: ` }), ru(day.title.ru), ` · ${tr(ctx, { en: day.title.en, ar: day.title.ar })}`) : null,
    day ? tutorPanel(ctx, day, mode) : h("p", null, "—"),
  );
}
