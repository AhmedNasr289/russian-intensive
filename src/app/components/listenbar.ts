// The listen bar: tap any Russian text in the course (or a "Spell" button) and it opens at the
// bottom of the screen with the text large and four ways to hear it: as it is, slowly, letter by
// letter (each letter's name, the way a teacher spells a word) and word by word. It says what it
// played: a native speaker's recording with its credit, or the browser's voice.

import { graphemes, spellSteps, wordSpans } from "../../core/audio.ts";
import type { SpellStep, WordSpan } from "../../core/audio.ts";
import { canSpell, LETTER_NAMES } from "../../core/spelling.ts";
import { ACUTE } from "../../core/text.ts";
import type { Ctx, ListenMode, Spoken } from "../context.ts";
import { tr } from "../context.ts";
import { h, replace } from "../dom.ts";
import { icon } from "../ui.ts";

const report = (e: unknown) => console.error("The listen bar failed:", e);

export type ListenBar = {
  el: HTMLElement;
  /**
   * Show a text and optionally play it. `focus` moves keyboard focus into the bar (when a button
   * opened it) and returns it to that button on close; a tap on text leaves focus where it is.
   */
  open(text: string, play?: ListenMode, opts?: { focus?: boolean }): void;
  close(): void;
  readonly isOpen: boolean;
};

export function createListenBar(getCtx: () => Ctx): ListenBar {
  const textBox = h("div", { class: "lb-text", lang: "ru", dir: "ltr" });
  const caption = h("div", { class: "lb-caption", "aria-live": "polite" });
  const actions = h("div", { class: "lb-actions" });
  const closeBtn = h(
    "button",
    { type: "button", class: "icon-btn lb-close", onClick: () => bar.close() },
    icon("x", 18),
  );
  const el = h(
    "aside",
    { class: "listen-bar", hidden: true },
    h("div", { class: "lb-head" }, textBox, closeBtn),
    caption,
    actions,
  );

  let text = "";
  /** The control that opened the bar from the keyboard, to return focus to on close. */
  let opener: HTMLElement | null = null;
  /** One entry per grapheme of the text; spaces and punctuation are holes (undefined). */
  let letters: Array<HTMLElement | undefined> = [];
  let words: Array<{ span: WordSpan; el: HTMLElement }> = [];
  let steps: SpellStep[] = [];
  let run = 0;
  let active: ListenMode | null = null;
  const buttons = new Map<ListenMode, HTMLButtonElement>();

  const unmark = () => {
    for (const l of letters) l?.classList.remove("on");
    for (const w of words) w.el.classList.remove("on");
  };

  const setActive = (mode: ListenMode | null) => {
    active = mode;
    for (const [m, b] of buttons) {
      const on = m === mode;
      b.classList.toggle("is-playing", on);
      b.setAttribute("aria-pressed", String(on));
    }
    el.classList.toggle("is-busy", mode !== null);
  };

  const describe = (spoken: Spoken) => {
    // Interrupted by a newer sound: that sound's own control reports it.
    if (spoken.kind === "stopped") return;
    const ctx = getCtx();
    if (spoken.kind === "recording") {
      replace(
        caption,
        icon("mic", 15),
        h("span", null, tr(ctx, { en: "Native speaker", ar: "متحدث أصلي" })),
        h("span", { class: "lb-dot", "aria-hidden": "true" }, "·"),
        h("a", { href: spoken.page, target: "_blank", rel: "noopener noreferrer", title: tr(ctx, { en: "The recording's page and licence", ar: "صفحة التسجيل وترخيصه" }) }, `${spoken.author} · ${spoken.license}`),
      );
    } else if (spoken.kind === "voice") {
      replace(caption, icon("speaker", 15), h("span", null, `${tr(ctx, { en: "Voice", ar: "الصوت" })}: ${spoken.name}`));
    } else {
      replace(
        caption,
        h("span", { class: "lb-warn" }, icon("x", 15), tr(ctx, spoken.reason === "unsupported" ? { en: "This browser cannot speak.", ar: "هذا المتصفح لا ينطق." } : { en: "No Russian voice here for this text.", ar: "لا يوجد صوت روسي هنا لهذا النص." })),
        h("a", { href: "#settings" }, tr(ctx, { en: "How to fix it", ar: "كيف تصلح ذلك" })),
      );
    }
  };

  const play = async (mode: ListenMode) => {
    const ctx = getCtx();
    const mine = ++run;
    ctx.stopAudio();
    unmark();
    if (active === mode) {
      // Pressing the playing button again stops it.
      setActive(null);
      return;
    }
    setActive(mode);
    const alive = () => mine === run && !el.hidden;
    try {
      if (mode === "say" || mode === "slow") {
        const spoken = await ctx.speak(text, { slow: mode === "slow" });
        if (alive()) describe(spoken);
      } else if (mode === "spell") {
        for (const step of steps) {
          if (!alive()) return;
          unmark();
          letters[step.index]?.classList.add("on");
          replace(caption, h("span", { class: "lb-letter", lang: "ru" }, `${step.letter.toUpperCase()}${step.letter.toLowerCase()}`), h("span", { class: "lb-dot", "aria-hidden": "true" }, "→"), h("span", { lang: "ru" }, step.name.split(ACUTE).join("")));
          const said = await ctx.speak(step.name);
          // Another sound started (a button elsewhere on the page): stop spelling rather than cut it off.
          if (said.kind === "stopped" || !(await ctx.pause(220))) return;
        }
        if (!alive()) return;
        unmark();
        const spoken = await ctx.speak(text);
        if (alive()) describe(spoken);
      } else {
        let last: Spoken | null = null;
        for (const w of words) {
          if (!alive()) return;
          unmark();
          w.el.classList.add("on");
          last = await ctx.speak(w.span.word, { slow: true });
          if (last.kind === "stopped" || !(await ctx.pause(320))) return;
        }
        if (alive() && last) describe(last);
      }
    } finally {
      if (mine === run) {
        unmark();
        setActive(null);
      }
    }
  };

  const sayLetter = async (index: number, name: string) => {
    const ctx = getCtx();
    const mine = ++run;
    ctx.stopAudio();
    setActive(null);
    unmark();
    letters[index]?.classList.add("on");
    replace(caption, h("span", { class: "lb-letter", lang: "ru" }, letters[index]?.textContent ?? ""), h("span", { class: "lb-dot", "aria-hidden": "true" }, "→"), h("span", { lang: "ru" }, name.split(ACUTE).join("")));
    await ctx.speak(name);
    if (mine === run) unmark();
  };

  const render = () => {
    const ctx = getCtx();
    const gs = graphemes(text);
    const spans = wordSpans(text);
    steps = spellSteps(text, LETTER_NAMES);
    letters = [];
    words = [];
    const nodes: Node[] = [];
    let w = 0;
    let wordEl: HTMLElement | null = null;
    gs.forEach((g, i) => {
      const span = spans[w];
      if (span && i === span.start) {
        wordEl = h("span", { class: "lb-word" });
        words.push({ span, el: wordEl });
        nodes.push(wordEl);
      }
      const stressed = g.includes(ACUTE) || g === "ё" || g === "Ё";
      // A tap on one letter says that letter's name.
      const letterName = LETTER_NAMES.get((g[0] ?? "").toLowerCase());
      const node = /^[А-Яа-яЁё]/.test(g)
        ? h("span", { class: stressed ? "lb-ch stress" : "lb-ch", title: letterName ?? "", onClick: () => letterName && void sayLetter(i, letterName).catch(report) }, g)
        : document.createTextNode(g);
      if (node instanceof HTMLElement) letters[i] = node;
      if (wordEl) wordEl.appendChild(node);
      else nodes.push(node);
      if (span && i === span.end - 1) {
        wordEl = null;
        w++;
      }
    });
    replace(textBox, nodes);
    textBox.classList.toggle("long", gs.length > 34);

    buttons.clear();
    const make = (mode: ListenMode, label: { en: string; ar: string }, content: Node) => {
      const b = h("button", { type: "button", class: "lb-btn", "aria-pressed": "false", onClick: () => void play(mode).catch(report) }, content, h("span", null, tr(ctx, label)));
      buttons.set(mode, b);
      return b;
    };
    replace(
      actions,
      make("say", { en: "Listen", ar: "استمع" }, icon("speaker", 18)),
      make("slow", { en: "Slowly", ar: "ببطء" }, h("span", { class: "lb-rate", "aria-hidden": "true" }, "0.6×")),
      canSpell(text) ? make("spell", { en: "Spell it", ar: "تهجئة" }, icon("letters", 18)) : null,
      spans.length >= 2 ? make("words", { en: "Word by word", ar: "كلمة كلمة" }, icon("repeat", 18)) : null,
    );
    closeBtn.setAttribute("aria-label", tr(ctx, { en: "Close", ar: "إغلاق" }));
    closeBtn.setAttribute("title", tr(ctx, { en: "Close", ar: "إغلاق" }));
    el.setAttribute("aria-label", tr(ctx, { en: "Listen and spell", ar: "استمع وتهجَّ" }));
    replace(caption, h("span", { class: "muted" }, tr(ctx, { en: "Tap any Russian word in the course to hear it.", ar: "اضغط على أي كلمة روسية في الدورة لتسمعها." })));
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape" && !el.hidden && !document.querySelector("dialog[open]")) bar.close();
  };
  document.addEventListener("keydown", onKey);

  const bar: ListenBar = {
    el,
    get isOpen() {
      return !el.hidden;
    },
    open(next, mode, opts = {}) {
      const trimmed = next.trim();
      if (!trimmed) return;
      run++;
      getCtx().stopAudio();
      setActive(null);
      text = trimmed;
      const from = document.activeElement;
      if (opts.focus && from instanceof HTMLElement && !el.contains(from)) opener = from;
      else if (!opts.focus) opener = null;
      render();
      if (el.hidden) {
        el.hidden = false;
        document.body.classList.add("listen-open");
      }
      el.classList.remove("pulse");
      void el.offsetWidth;
      el.classList.add("pulse");
      if (opts.focus) (buttons.get(mode ?? "say") ?? closeBtn).focus({ preventScroll: true });
      if (mode) void play(mode).catch(report);
    },
    close() {
      if (el.hidden) return;
      run++;
      getCtx().stopAudio();
      setActive(null);
      const hadFocus = el.contains(document.activeElement);
      el.hidden = true;
      document.body.classList.remove("listen-open");
      // Give focus back to the button that opened the bar, if it is still on the page.
      if (hadFocus && opener?.isConnected) opener.focus({ preventScroll: true });
      opener = null;
    },
  };
  return bar;
}
