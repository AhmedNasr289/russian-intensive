// The app frame: a header with the course day, one navigation (a side rail on wide screens, a tab
// bar with a "More" sheet on phones), the main region the screens render into, and the toasts.

import type { Bi } from "../content/types.ts";
import { deckStats } from "../core/progress.ts";
import { COURSE_DAYS, dayNumber } from "../core/schedule.ts";
import type { Ctx } from "./context.ts";
import { tr } from "./context.ts";
import { h, replace, s } from "./dom.ts";
import { EMBLEM, EMBLEM_COLORS } from "./emblem.ts";
import type { Capsule } from "./emblem.ts";
import { navTokenOf } from "./router.ts";
import { icon, iconBtn, ru } from "./ui.ts";
import type { IconName } from "./ui.ts";

type NavToken = ReturnType<typeof navTokenOf>;
type NavItem = { token: NavToken; icon: IconName; label: Bi; primary: boolean };

/** Primary entries sit in the phone tab bar; the rest live under "More" there. The rail shows all. */
const NAV: readonly NavItem[] = [
  { token: "today", icon: "home", label: { en: "Today", ar: "اليوم" }, primary: true },
  { token: "course", icon: "course", label: { en: "Course", ar: "الدورة" }, primary: true },
  { token: "review", icon: "cards", label: { en: "Review", ar: "المراجعة" }, primary: true },
  { token: "tutor", icon: "chat", label: { en: "Tutor", ar: "المعلّم" }, primary: true },
  { token: "alphabet", icon: "letters", label: { en: "Alphabet", ar: "الأبجدية" }, primary: false },
  { token: "pronounce", icon: "wave", label: { en: "Pronounce", ar: "النطق" }, primary: false },
  { token: "progress", icon: "chart", label: { en: "Progress", ar: "التقدّم" }, primary: false },
  { token: "library", icon: "library", label: { en: "Library", ar: "المكتبة" }, primary: false },
  { token: "settings", icon: "gear", label: { en: "Settings", ar: "الإعدادات" }, primary: false },
];

export type Shell = {
  /** Where screens render. */
  main: HTMLElement;
  /** Where toasts stack. */
  toasts: HTMLElement;
  /** Redraw the header and navigation for the current route and state. */
  update(ctx: Ctx): void;
};

export type ShellActions = { toggleTheme(): void; isDark(): boolean; openSearch(): void };

/** The emblem as inline SVG (the same geometry as the app icons). */
export function emblemMark(size: number): SVGSVGElement {
  const line = (c: Capsule, color: string) =>
    s("line", { x1: c.x1, y1: c.y1, x2: c.x2, y2: c.y2, stroke: color, "stroke-width": EMBLEM.stroke, "stroke-linecap": "round" });
  return s(
    "svg",
    { viewBox: "0 0 100 100", width: size, height: size, "aria-hidden": "true", class: "emblem" },
    s("rect", { width: 100, height: 100, rx: EMBLEM.radius, fill: EMBLEM_COLORS.cobalt }),
    s("circle", { cx: EMBLEM.plate.cx, cy: EMBLEM.plate.cy, r: EMBLEM.plate.r, fill: EMBLEM_COLORS.porcelain }),
    EMBLEM.letter.map((c) => line(c, EMBLEM_COLORS.cobalt)),
    line(EMBLEM.accent, EMBLEM_COLORS.rowan),
  );
}

function dayChip(ctx: Ctx): HTMLElement {
  const n = dayNumber(ctx.store.progress.settings.startDate, new Date(ctx.now()));
  const label =
    n === 0
      ? { en: "Starts soon", ar: "تبدأ قريبًا" }
      : n > COURSE_DAYS
        ? { en: "Course complete", ar: "اكتملت الدورة" }
        : { en: `Day ${n} of ${COURSE_DAYS}`, ar: `اليوم ${n} من ${COURSE_DAYS}` };
  const fraction = Math.min(Math.max(n, 0), COURSE_DAYS) / COURSE_DAYS;
  return h("a", { class: "day-chip", href: "#today" }, h("span", { class: "day-meter", style: `--p:${fraction.toFixed(3)}`, "aria-hidden": "true" }), h("span", null, tr(ctx, label)));
}

function headerContent(ctx: Ctx, actions: ShellActions): HTMLElement[] {
  const dark = actions.isDark();
  return [
    h(
      "a",
      { class: "brand", href: "#today" },
      emblemMark(34),
      h("span", { class: "brand-text" }, h("span", { class: "brand-name" }, tr(ctx, { en: "Russian in 56 Days", ar: "الروسية في ٥٦ يومًا" })), ru("Ру́сский за 56 дней", "brand-ru")),
    ),
    h(
      "div",
      { class: "topbar-tools" },
      h(
        "button",
        { type: "button", class: "search-btn", "aria-label": tr(ctx, { en: "Search (Ctrl K)", ar: "بحث (Ctrl K)" }), title: tr(ctx, { en: "Search words and screens (Ctrl K or /)", ar: "ابحث عن الكلمات والشاشات (Ctrl K أو /)" }), onClick: actions.openSearch },
        icon("search", 20),
        h("span", { class: "search-label" }, tr(ctx, { en: "Search", ar: "بحث" })),
        h("kbd", { class: "search-kbd", "aria-hidden": "true" }, "/"),
      ),
      dayChip(ctx),
      ctx.host === "artifact"
        ? null
        : iconBtn(dark ? "sun" : "moon", tr(ctx, dark ? { en: "Use the light theme", ar: "استخدم المظهر الفاتح" } : { en: "Use the dark theme", ar: "استخدم المظهر الداكن" }), {
            class: "theme-toggle",
            onClick: actions.toggleTheme,
          }),
    ),
  ];
}

function navLink(ctx: Ctx, item: NavItem, active: NavToken, due: number): HTMLElement {
  const isActive = item.token === active;
  const showBadge = item.token === "review" && due > 0;
  return h(
    "a",
    { href: `#${item.token}`, class: `nav-item ${item.primary ? "primary" : "secondary"}${isActive ? " active" : ""}`, "aria-current": isActive ? "page" : null },
    h("span", { class: "nav-icon" }, icon(item.icon, 22), showBadge ? h("span", { class: "badge", "aria-hidden": "true" }, due > 99 ? "99+" : String(due)) : null),
    h("span", { class: "nav-label" }, tr(ctx, item.label)),
    showBadge ? h("span", { class: "sr-only" }, tr(ctx, { en: `, ${due} due`, ar: `، ${due} مستحقة` })) : null,
  );
}

export function createShell(root: HTMLElement, actions: ShellActions): Shell {
  const main = h("main", { id: "main", class: "main", tabindex: "-1" });
  const skip = h("button", { type: "button", class: "skip", onClick: () => main.focus() }, "Skip to content");
  const header = h("header", { class: "topbar" });
  const nav = h("nav", { class: "nav" });
  const sheet = h("nav", { class: "more-sheet", id: "more-sheet", hidden: true });
  const toasts = h("div", { class: "toasts", "aria-live": "polite" });
  let moreButton: HTMLButtonElement | null = null;

  const setSheet = (open: boolean) => {
    sheet.hidden = !open;
    moreButton?.setAttribute("aria-expanded", String(open));
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !sheet.hidden) {
      setSheet(false);
      moreButton?.focus();
    }
  });
  document.addEventListener("pointerdown", (e) => {
    const target = e.target;
    if (sheet.hidden || !(target instanceof Node)) return;
    if (sheet.contains(target) || moreButton?.contains(target)) return;
    setSheet(false);
  });

  replace(root, h("div", { class: "app" }, skip, header, nav, sheet, main), toasts);

  return {
    main,
    toasts,
    update(ctx) {
      const active = navTokenOf(ctx.route);
      const due = deckStats(ctx.store.progress, ctx.now()).dueNow;
      const secondaryActive = NAV.some((n) => !n.primary && n.token === active);
      skip.textContent = tr(ctx, { en: "Skip to content", ar: "انتقل إلى المحتوى" });
      replace(header, headerContent(ctx, actions));
      nav.setAttribute("aria-label", tr(ctx, { en: "Main", ar: "القائمة الرئيسية" }));
      moreButton = h(
        "button",
        { type: "button", class: `nav-item more${secondaryActive ? " active" : ""}`, "aria-expanded": "false", "aria-controls": "more-sheet", onClick: () => setSheet(sheet.hidden === true) },
        h("span", { class: "nav-icon" }, icon("more", 22)),
        h("span", { class: "nav-label" }, tr(ctx, { en: "More", ar: "المزيد" })),
      );
      replace(nav, NAV.map((item) => navLink(ctx, item, active, due)), moreButton);
      replace(sheet, NAV.filter((n) => !n.primary).map((item) => navLink(ctx, item, active, due)));
      sheet.setAttribute("aria-label", tr(ctx, { en: "More sections", ar: "أقسام أخرى" }));
      setSheet(false);
    },
  };
}
