// Shared building blocks: icons, Russian text with painted stress, bilingual blocks, buttons,
// chips, a progress ring, toasts, an in-page confirm dialog, copy and download helpers.

import type { Bi } from "../content/types.ts";
import type { ExplainLang } from "../core/progress.ts";
import { canSpell } from "../core/spelling.ts";
import { russianRuns, splitStress } from "../core/text.ts";
import type { Ctx, ToastKind } from "./context.ts";
import { explainOf, tr } from "./context.ts";
import { h, s } from "./dom.ts";
import type { Attrs, Child } from "./dom.ts";

// ── Icons (24×24 stroke paths) ────────────────────────────────────────────────

const ICONS = {
  speaker: "M11 5 6 9H3v6h3l5 4V5z M15.5 8.5a5 5 0 0 1 0 7 M18.5 5.5a9 9 0 0 1 0 13",
  wave: "M4 10v4 M8 7v10 M12 4v16 M16 7v10 M20 10v4",
  mic: "M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z M5 11a7 7 0 0 0 14 0 M12 18v3",
  stop: "M7 7h10v10H7z",
  play: "M8 5v14l11-7z",
  check: "M5 12.5l4.5 4.5L19 7.5",
  x: "M6 6l12 12M18 6 6 18",
  left: "M15 18l-6-6 6-6",
  right: "M9 18l6-6-6-6",
  home: "M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  course: "M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z",
  cards: "M8 3h11a1 1 0 0 1 1 1v13 M4 7h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z",
  letters: "M3 19l5-14 5 14 M5 14h6 M15 19V9 M15 13a3 3 0 0 1 6 0v6",
  chat: "M4 5h16v11H9l-5 4z M8 9h8 M8 12h5",
  chart: "M4 20V10 M10 20V4 M16 20v-7 M21 20H3",
  library: "M4 4h4v16H4z M10 4h4v16h-4z M16.5 4.5l3.8 1 -3.9 15-3.8-1z",
  gear: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z",
  more: "M5 12h.01 M12 12h.01 M19 12h.01",
  keyboard: "M3 6h18v12H3z M7 10h.01 M11 10h.01 M15 10h.01 M19 10h.01 M7 14h10",
  download: "M12 4v12 M7 11l5 5 5-5 M5 20h14",
  upload: "M12 20V8 M7 13l5-5 5 5 M5 4h14",
  flame: "M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 2 1 3 3 3 5 1-2 0-5 0-8z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2",
  calendar: "M4 6h16v14H4z M4 10h16 M9 3v4 M15 3v4",
  external: "M14 4h6v6 M20 4l-9 9 M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
  sun: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M12 1v2 M12 21v2 M4.2 4.2l1.4 1.4 M18.4 18.4l1.4 1.4 M1 12h2 M21 12h2 M4.2 19.8l1.4-1.4 M18.4 5.6l1.4-1.4",
  moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
  copy: "M9 9h11v11H9z M5 15H4V4h11v1",
  repeat: "M17 2l4 4-4 4 M3 11V9a3 3 0 0 1 3-3h15 M7 22l-4-4 4-4 M21 13v2a3 3 0 0 1-3 3H3",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  video: "M3 6h13v12H3z M16 10l5-3v10l-5-3z",
  pencil: "M4 20h4L20 8l-4-4L4 16z M13.5 6.5l4 4",
  book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z M4 21V5",
  trash: "M4 7h16 M9 7V4h6v3 M6 7l1 13h10l1-13",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M20 20l-4.2-4.2",
  bolt: "M13 3 5 13.5h6L10 21l8-10.5h-6z",
  pause: "M8 5v14 M16 5v14",
  help: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M9.5 9.2a2.6 2.6 0 0 1 5 .8c0 1.8-2.5 2.2-2.5 3.8 M12 17h.01",
} as const;

export type IconName = keyof typeof ICONS;

/** Arrows that point along the reading direction; they mirror when the page is right-to-left. */
const DIRECTIONAL: ReadonlySet<IconName> = new Set(["left", "right"]);

export function icon(name: IconName, size = 20): SVGSVGElement {
  return s(
    "svg",
    { viewBox: "0 0 24 24", width: size, height: size, fill: "none", stroke: "currentColor", "stroke-width": name === "more" ? 3.2 : 1.8, "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true", class: DIRECTIONAL.has(name) ? "icon dir" : "icon" },
    s("path", { d: ICONS[name] }),
  );
}

// ── Text ──────────────────────────────────────────────────────────────────────

/**
 * Russian with the stressed vowel painted (class "stress"), as learner textbooks mark stress.
 * `data-text` keeps the marked text: a tap on it opens the listen bar (see main.ts).
 */
export function ru(text: string, cls = ""): HTMLSpanElement {
  // dir="ltr" isolates the Russian, so its punctuation stays put inside Arabic text ("Кто там?", not "?Кто там").
  const span = h("span", { lang: "ru", dir: "ltr", class: `ru ${cls}`.trim(), "data-text": text });
  for (const seg of splitStress(text)) {
    span.appendChild(seg.stressed ? h("span", { class: "stress" }, seg.text) : document.createTextNode(seg.text));
  }
  return span;
}

/** Text that may contain Russian: each Russian run gets painted stress, lang="ru" and tap-to-hear. */
export function mixed(text: string): DocumentFragment {
  const f = document.createDocumentFragment();
  for (const run of russianRuns(text)) f.appendChild(run.russian ? ru(run.text) : document.createTextNode(run.text));
  return f;
}

/** A bilingual block: English and/or Arabic according to the learner's setting. */
export function bi(b: Bi, mode: ExplainLang, tag: "p" | "div" | "span" = "p", cls = ""): DocumentFragment {
  const f = document.createDocumentFragment();
  if (mode !== "ar") f.appendChild(h(tag, { lang: "en", class: `t-en ${cls}`.trim() }, mixed(b.en)));
  if (mode !== "en") f.appendChild(h(tag, { lang: "ar", dir: "rtl", class: `t-ar ${cls}`.trim() }, mixed(b.ar)));
  return f;
}

/** A bilingual block using the context's setting. */
export const biCtx = (ctx: Ctx, b: Bi, tag: "p" | "div" | "span" = "p", cls = ""): DocumentFragment => bi(b, explainOf(ctx), tag, cls);

export function chip(text: Child, cls = ""): HTMLSpanElement {
  return h("span", { class: `chip ${cls}`.trim() }, text);
}

export function btn(content: Child, attrs: Attrs = {}): HTMLButtonElement {
  const cls = typeof attrs["class"] === "string" ? attrs["class"] : "";
  return h("button", { type: "button", ...attrs, class: `btn ${cls}`.trim() }, content);
}

export function iconBtn(name: IconName, label: string, attrs: Attrs = {}): HTMLButtonElement {
  const cls = typeof attrs["class"] === "string" ? attrs["class"] : "";
  return h("button", { type: "button", title: label, "aria-label": label, ...attrs, class: `icon-btn ${cls}`.trim() }, icon(name));
}

/**
 * Speaker button for a Russian text, plus a slow-speed button and, for a word or a short phrase,
 * a "spell it" button that opens the listen bar. A button shows while its sound plays; pressing it
 * again stops the sound.
 */
export function playButtons(ctx: Ctx, text: string, opts: { slow?: boolean; who?: "A" | "B"; spell?: boolean } = {}): HTMLSpanElement {
  const wrap = h("span", { class: "play-group" });
  const playing = (button: HTMLButtonElement, speakOpts: { slow?: boolean; who?: "A" | "B" }) => async () => {
    if (button.classList.contains("is-playing")) {
      ctx.stopAudio();
      return;
    }
    button.classList.add("is-playing");
    button.setAttribute("aria-pressed", "true");
    try {
      await ctx.speak(text, speakOpts);
    } finally {
      button.classList.remove("is-playing");
      button.setAttribute("aria-pressed", "false");
    }
  };
  const play = iconBtn("speaker", tr(ctx, { en: "Listen", ar: "استمع" }), { class: "play", "aria-pressed": "false" });
  play.addEventListener("click", playing(play, opts.who ? { who: opts.who } : {}));
  wrap.appendChild(play);
  if (opts.slow !== false) {
    const label = tr(ctx, { en: "Listen slowly", ar: "استمع ببطء" });
    // dir="ltr": in an Arabic page the "×" would otherwise move to the front ("×0.6").
    const slow = h("button", { type: "button", class: "icon-btn slow", dir: "ltr", title: label, "aria-label": label, "aria-pressed": "false" }, "0.6×");
    slow.addEventListener("click", playing(slow, opts.who ? { slow: true, who: opts.who } : { slow: true }));
    wrap.appendChild(slow);
  }
  if (opts.spell !== false && !opts.who && canSpell(text)) {
    wrap.appendChild(iconBtn("letters", tr(ctx, { en: "Spell it letter by letter", ar: "تهجَّها حرفًا حرفًا" }), { class: "spell", onClick: () => ctx.listen(text, "spell") }));
  }
  return wrap;
}

export function sectionTitle(ctx: Ctx, b: Bi, extra?: Child): HTMLElement {
  return h("div", { class: "section-title" }, h("h2", null, tr(ctx, b)), explainOf(ctx) === "both" ? h("span", { class: "sub", lang: "ar", dir: "rtl" }, b.ar) : null, extra ?? null);
}

/** A circular progress ring, 0..1. */
export function ring(fraction: number, size = 64, label?: Child): HTMLElement {
  const r = size / 2 - 5;
  const c = 2 * Math.PI * r;
  const f = Math.max(0, Math.min(1, fraction));
  return h(
    "div",
    { class: "ring", style: `width:${size}px;height:${size}px` },
    s(
      "svg",
      { viewBox: `0 0 ${size} ${size}`, width: size, height: size, "aria-hidden": "true" },
      s("circle", { cx: size / 2, cy: size / 2, r, class: "ring-track", fill: "none", "stroke-width": 6 }),
      s("circle", {
        cx: size / 2,
        cy: size / 2,
        r,
        class: "ring-fill",
        fill: "none",
        "stroke-width": 6,
        // A round cap would draw a dot at 0%.
        "stroke-linecap": f > 0 ? "round" : "butt",
        "stroke-dasharray": `${c * f} ${c}`,
        transform: `rotate(-90 ${size / 2} ${size / 2})`,
      }),
    ),
    label !== undefined ? h("span", { class: "ring-label" }, label) : null,
  );
}

// ── Toasts and the confirm dialog ─────────────────────────────────────────────

export function showToast(host: HTMLElement, text: Child, kind: ToastKind = "info"): void {
  const el = h("div", { class: `toast toast-${kind}`, role: kind === "error" ? "alert" : "status" }, text);
  host.appendChild(el);
  setTimeout(() => el.classList.add("out"), 3200);
  setTimeout(() => el.remove(), 3700);
}

/** An in-page confirmation (the claude.ai frame never shows window.confirm). */
export function confirmDialog(ctx: Ctx, message: Bi, confirmLabel: Bi, danger = false): Promise<boolean> {
  return new Promise((resolve) => {
    const close = (answer: boolean) => {
      dialog.close();
      dialog.remove();
      resolve(answer);
    };
    const dialog = h(
      "dialog",
      { class: "confirm", "aria-labelledby": "confirm-text" },
      h("div", { id: "confirm-text", class: "confirm-text" }, biCtx(ctx, message)),
      h(
        "div",
        { class: "confirm-actions" },
        btn(tr(ctx, { en: "Cancel", ar: "إلغاء" }), { class: "ghost", onClick: () => close(false) }),
        btn(tr(ctx, confirmLabel), { class: danger ? "danger" : "primary", onClick: () => close(true) }),
      ),
    );
    dialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      close(false);
    });
    document.body.appendChild(dialog);
    dialog.showModal();
  });
}

// ── Clipboard and files ───────────────────────────────────────────────────────

/** Copy text; falls back to selecting it in a hidden field when the clipboard API is refused. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = h("textarea", { class: "sr-only", readonly: true }, text);
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    area.remove();
    return ok;
  }
}

export type SaveOutcome = "saved" | "declined" | "unavailable";

/**
 * Offer a file. On the web a normal download; inside claude.ai through the downloads capability,
 * which accepts only some extensions (json, txt, md, csv…, not ics) and asks the viewer first.
 */
export async function saveFile(ctx: Ctx, filename: string, data: string, mime: string): Promise<SaveOutcome> {
  if (ctx.host === "artifact") {
    if (!ctx.caps.downloads) return "unavailable";
    try {
      await ctx.caps.downloads.save({ filename, data });
      return "saved";
    } catch (e) {
      const code = typeof e === "object" && e !== null && "code" in e ? String((e as { code: unknown }).code) : "";
      return code === "declined" || code === "rate_limited" ? "declined" : "unavailable";
    }
  }
  const url = URL.createObjectURL(new Blob([data], { type: mime }));
  const a = h("a", { href: url, download: filename, class: "sr-only" });
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  return "saved";
}
