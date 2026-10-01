// The keyboard shortcuts sheet ("?"), plus the global keys that open search and this sheet.

import type { Bi } from "../../content/types.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h } from "../dom.ts";
import { biCtx, btn } from "../ui.ts";
import { openPalette } from "./palette.ts";

const KEYS: ReadonlyArray<{ keys: string[]; what: Bi }> = [
  { keys: ["Ctrl K", "/"], what: { en: "Search words and screens", ar: "ابحث عن الكلمات والشاشات" } },
  { keys: ["?"], what: { en: "Show these shortcuts", ar: "اعرض هذه الاختصارات" } },
  { keys: ["Space"], what: { en: "Review: show the answer", ar: "المراجعة: أظهر الإجابة" } },
  { keys: ["1", "2", "3", "4"], what: { en: "Review: Again, Hard, Good, Easy", ar: "المراجعة: مرة أخرى، صعب، جيد، سهل" } },
  { keys: ["Enter"], what: { en: "Practice: check a typed answer", ar: "التمارين: تحقّق من الإجابة المكتوبة" } },
  { keys: ["Ctrl Enter"], what: { en: "Pronounce: read the text aloud", ar: "النطق: اقرأ النص بصوت عالٍ" } },
  { keys: ["Esc"], what: { en: "Close the listen bar, a sheet or search", ar: "أغلق شريط الاستماع أو النافذة أو البحث" } },
];

export function openShortcuts(ctx: Ctx): void {
  if (document.querySelector("dialog.shortcuts")) return;
  const returnTo = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const close = () => {
    dialog.close();
    dialog.remove();
    returnTo?.focus();
  };
  const dialog = h(
    "dialog",
    { class: "shortcuts", "aria-labelledby": "shortcuts-title" },
    h("h2", { id: "shortcuts-title" }, tr(ctx, { en: "Keyboard shortcuts", ar: "اختصارات لوحة المفاتيح" })),
    h(
      "dl",
      { class: "shortcut-list" },
      KEYS.flatMap((k) => [h("dt", { dir: "ltr" }, k.keys.flatMap((key, i) => [i ? " " : "", h("kbd", null, key)])), h("dd", null, biCtx(ctx, k.what, "span"))]),
    ),
    h("div", { class: "confirm-actions" }, btn(tr(ctx, { en: "Close", ar: "إغلاق" }), { class: "primary", onClick: close })),
  );
  dialog.addEventListener("cancel", (e) => {
    e.preventDefault();
    close();
  });
  document.body.appendChild(dialog);
  dialog.showModal();
}

/** True while the learner is typing, so single-key shortcuts must not fire. */
function typing(target: EventTarget | null): boolean {
  return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement || (target instanceof HTMLElement && target.isContentEditable);
}

/** Ctrl+K (or ⌘K) and "/" open search; "?" opens the shortcuts. `getCtx` gives the current screen's context. */
export function installGlobalKeys(getCtx: () => Ctx | null): void {
  document.addEventListener("keydown", (e) => {
    const ctx = getCtx();
    if (!ctx || e.defaultPrevented || e.altKey) return;
    const modal = document.querySelector("dialog[open]") !== null;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      if (modal) return;
      e.preventDefault();
      openPalette(ctx);
      return;
    }
    if (e.ctrlKey || e.metaKey || modal || typing(e.target)) return;
    if (e.key === "/") {
      e.preventDefault();
      openPalette(ctx);
    } else if (e.key === "?") {
      e.preventDefault();
      openShortcuts(ctx);
    }
  });
}
