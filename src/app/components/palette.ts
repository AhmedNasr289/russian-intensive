// The search palette (Ctrl+K, "/" or the header button): words and screens in one list, driven
// by the keyboard (arrows, Enter, Esc) or by touch. A word opens its page, a screen opens itself.

import type { Bi } from "../../content/types.ts";
import { searchScreens, searchWords } from "../../core/search.ts";
import type { ScreenHit, WordHit } from "../../core/search.ts";
import { arCount } from "../../core/text.ts";
import { weakWords } from "../../core/weak.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h, replace } from "../dom.ts";
import { biCtx, icon, ru } from "../ui.ts";

type Option = { id: string; token: string; node: HTMLElement };

const QUICK: readonly ScreenHit[] = [
  { token: "today", title: { en: "Today", ar: "اليوم" }, score: 0 },
  { token: "review", title: { en: "Review cards", ar: "مراجعة البطاقات" }, score: 0 },
  { token: "weak", title: { en: "Weak words", ar: "الكلمات الضعيفة" }, score: 0 },
  { token: "pronounce", title: { en: "Pronounce", ar: "النطق" }, score: 0 },
  { token: "progress", title: { en: "Progress", ar: "التقدّم" }, score: 0 },
];

let open = false;

export function openPalette(ctx: Ctx): void {
  if (open) return;
  open = true;
  const returnTo = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const input = h("input", {
    type: "search",
    class: "palette-input",
    role: "combobox",
    "aria-expanded": "true",
    "aria-controls": "palette-list",
    "aria-autocomplete": "list",
    autocomplete: "off",
    spellcheck: "false",
    placeholder: tr(ctx, { en: "Search words (Russian, English, Arabic) or screens", ar: "ابحث عن كلمة (روسية أو إنجليزية أو عربية) أو شاشة" }),
    "aria-label": tr(ctx, { en: "Search", ar: "بحث" }),
  });
  const list = h("div", { id: "palette-list", class: "palette-list", role: "listbox", "aria-label": tr(ctx, { en: "Results", ar: "النتائج" }) });
  const status = h("p", { class: "sr-only", role: "status" });
  let options: Option[] = [];
  let active = 0;

  const close = () => {
    dialog.close();
    dialog.remove();
    open = false;
    returnTo?.focus();
  };
  const choose = (o: Option | undefined) => {
    if (!o) return;
    close();
    ctx.navigate(o.token);
  };
  const setActive = (i: number) => {
    if (options.length === 0) return;
    active = (i + options.length) % options.length;
    options.forEach((o, k) => o.node.setAttribute("aria-selected", String(k === active)));
    const o = options[active];
    if (o) {
      input.setAttribute("aria-activedescendant", o.id);
      o.node.scrollIntoView({ block: "nearest" });
    }
  };

  const option = (token: string, body: Node[]): Option => {
    const id = `palette-opt-${options.length}`;
    // data-nosay: a tap on the Russian in a result opens the result, not the listen bar.
    const node = h("div", { id, class: "palette-option", role: "option", "aria-selected": "false", "data-nosay": "" }, ...body);
    const o = { id, token, node };
    node.addEventListener("click", () => choose(o));
    node.addEventListener("pointermove", () => setActive(options.indexOf(o)));
    options.push(o);
    return o;
  };
  const wordOption = (hit: Pick<WordHit, "word" | "day">) =>
    option(`word-${hit.word.id}`, [
      h("span", { class: "palette-ru" }, ru(hit.word.ru)),
      h("span", { class: "palette-meaning" }, biCtx(ctx, { en: hit.word.en, ar: hit.word.ar }, "span")),
      h("span", { class: "palette-day" }, tr(ctx, { en: `day ${hit.day}`, ar: `اليوم ${hit.day}` })),
    ]);
  const screenOption = (hit: ScreenHit) =>
    option(hit.token, [h("span", { class: "palette-screen" }, icon(hit.token.startsWith("day-") ? "course" : "right", 16), tr(ctx, hit.title))]);
  const group = (label: Bi, items: Option[]) =>
    items.length ? h("div", { class: "palette-group", role: "group", "aria-label": tr(ctx, label) }, h("div", { class: "palette-label", "aria-hidden": "true" }, tr(ctx, label)), items.map((o) => o.node)) : null;

  const update = () => {
    options = [];
    const q = input.value;
    let groups: Array<HTMLElement | null>;
    if (q.trim() === "") {
      const weak = weakWords(ctx.store.progress, 3).map((w) => wordOption({ word: w.word, day: Number(w.word.id.slice(1, w.word.id.indexOf("-"))) }));
      groups = [group({ en: "Go to", ar: "انتقل إلى" }, QUICK.map(screenOption)), group({ en: "Your weakest words", ar: "أضعف كلماتك" }, weak)];
    } else {
      const screenHits = searchScreens(q, 5);
      const wordHits = searchWords(q, 8);
      const words = group({ en: "Words", ar: "الكلمات" }, wordHits.map(wordOption));
      const screens = group({ en: "Screens", ar: "الشاشات" }, screenHits.map(screenOption));
      // The better match leads ("12" opens day 12 first; "дом" the word); words win a tie.
      groups = (screenHits[0]?.score ?? 0) > (wordHits[0]?.score ?? 0) ? [screens, words] : [words, screens];
    }
    // Keyboard order follows the order on screen.
    const shown = groups.filter((g): g is HTMLElement => g !== null);
    const order = shown.flatMap((g) => [...g.querySelectorAll<HTMLElement>("[role=option]")].map((n) => n.id));
    options.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    replace(list, shown.length ? shown : h("p", { class: "palette-empty" }, tr(ctx, { en: "Nothing found. Try the word without endings, or in another language.", ar: "لا نتائج. جرّب الكلمة دون لواحق، أو بلغة أخرى." })));
    status.textContent = q.trim() === "" ? "" : tr(ctx, { en: `${options.length} results`, ar: arCount(options.length, { one: "نتيجة", two: "نتيجتان", few: "نتائج" }) });
    input.removeAttribute("aria-activedescendant");
    active = 0;
    setActive(0);
  };

  input.addEventListener("input", update);
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(active + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(active - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(options[active]);
    }
  });

  const dialog = h(
    "dialog",
    { class: "palette", "aria-label": tr(ctx, { en: "Search", ar: "بحث" }) },
    h(
      "div",
      { class: "palette-box" },
      h("div", { class: "palette-bar" }, icon("search", 20), input, h("button", { type: "button", class: "palette-esc", onClick: () => close() }, h("kbd", null, "Esc"))),
      list,
      status,
      h("p", { class: "palette-hint", "aria-hidden": "true" }, tr(ctx, { en: "↑ ↓ to move · Enter to open · Esc to close", ar: "↑ ↓ للتنقل · Enter للفتح · Esc للإغلاق" })),
    ),
  );
  dialog.addEventListener("cancel", (e) => {
    e.preventDefault();
    close();
  });
  // A click on the backdrop (the dialog box itself, outside its content) closes it.
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) close();
  });
  document.body.appendChild(dialog);
  dialog.showModal();
  update();
  input.focus();
}
