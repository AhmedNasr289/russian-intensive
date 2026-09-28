// An on-screen ЙЦУКЕН keyboard for learners without a Russian layout installed.
// Keys use pointerdown + preventDefault so the text field keeps focus and its caret.

import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h } from "../dom.ts";
import { icon } from "../ui.ts";

const ROWS = ["ёйцукенгшщзхъ", "фывапролджэ", "ячсмитьбю"];

export type TextField = HTMLInputElement | HTMLTextAreaElement;

function insert(el: TextField, text: string): void {
  const start = el.selectionStart ?? el.value.length;
  const end = el.selectionEnd ?? start;
  el.setRangeText(text, start, end, "end");
  el.dispatchEvent(new Event("input", { bubbles: true }));
}

function backspace(el: TextField): void {
  const start = el.selectionStart ?? el.value.length;
  const end = el.selectionEnd ?? start;
  if (start === end && start > 0) el.setRangeText("", start - 1, start, "end");
  else el.setRangeText("", start, end, "end");
  el.dispatchEvent(new Event("input", { bubbles: true }));
}

/** A toggle button plus the keyboard panel it opens, typing into `target`. */
export function keyboardFor(ctx: Ctx, target: TextField): HTMLElement {
  let upper = false;
  const keys: HTMLButtonElement[] = [];
  const press = (fn: () => void) => (e: PointerEvent) => {
    e.preventDefault();
    fn();
  };
  const panel = h(
    "div",
    { class: "kbd", hidden: true, lang: "ru", "aria-label": tr(ctx, { en: "Russian keyboard", ar: "لوحة المفاتيح الروسية" }) },
    ROWS.map((row) =>
      h(
        "div",
        { class: "kbd-row" },
        [...row].map((ch) => {
          const key = h("button", { type: "button", class: "kbd-key", "data-ch": ch, onPointerdown: press(() => insert(target, upper ? ch.toUpperCase() : ch)) }, ch);
          keys.push(key);
          return key;
        }),
      ),
    ),
    h(
      "div",
      { class: "kbd-row" },
      h(
        "button",
        {
          type: "button",
          class: "kbd-key wide",
          "aria-pressed": "false",
          onPointerdown: press(() => {
            upper = !upper;
            for (const k of keys) k.textContent = upper ? (k.dataset["ch"] ?? "").toUpperCase() : (k.dataset["ch"] ?? "");
          }),
        },
        "⇧",
      ),
      h("button", { type: "button", class: "kbd-key space", onPointerdown: press(() => insert(target, " ")) }, tr(ctx, { en: "space", ar: "مسافة" })),
      h("button", { type: "button", class: "kbd-key wide", "aria-label": "Backspace", onPointerdown: press(() => backspace(target)) }, "⌫"),
    ),
  );
  const toggle = h(
    "button",
    {
      type: "button",
      class: "btn ghost small",
      "aria-expanded": "false",
      onClick: () => {
        panel.hidden = !panel.hidden;
        toggle.setAttribute("aria-expanded", String(!panel.hidden));
        target.focus();
      },
    },
    icon("keyboard", 18),
    tr(ctx, { en: "Russian keyboard", ar: "لوحة مفاتيح روسية" }),
  );
  return h("div", { class: "kbd-wrap" }, toggle, panel);
}
