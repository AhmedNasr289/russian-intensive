// Pronounce: type or paste any Russian and hear it at normal speed, slowly, letter by letter or
// word by word, like the speaker button of a translation site. Inside claude.ai the tutor can
// first turn English or Arabic into Russian.

import { getDay } from "../../core/course.ts";
import { dayNumber, COURSE_DAYS } from "../../core/schedule.ts";
import { canSpell } from "../../core/spelling.ts";
import { hasCyrillic } from "../../core/text.ts";
import { wordSpans } from "../../core/audio.ts";
import { buildTranslatePrompt, parseTranslation, TRANSLATE_LIMIT } from "../../core/tutorPrompt.ts";
import { errorCode } from "../claude.ts";
import { errorMessage } from "../components/chat.ts";
import { keyboardFor } from "../components/keyboard.ts";
import { soundCheck } from "../components/soundcheck.ts";
import type { Ctx, ListenMode } from "../context.ts";
import { tr } from "../context.ts";
import { h, replace } from "../dom.ts";
import { biCtx, btn, icon, ru, sectionTitle } from "../ui.ts";

const LIMIT = 400;

/** What the learner typed, kept across redraws of the screen. */
const draft = { ru: "", source: "" };

/** Everyday phrases to try when the box is empty. */
const STARTERS = ["Приве́т!", "Здра́вствуйте!", "Спаси́бо", "Пожа́луйста", "До свида́ния", "Меня́ зову́т Ахме́д.", "Я из Еги́пта.", "Я не понима́ю."];

export function pronounceView(ctx: Ctx): HTMLElement {
  const area = h("textarea", {
    id: "pronounce-text",
    class: "pronounce-input",
    rows: 3,
    lang: "ru",
    dir: "ltr",
    maxlength: LIMIT,
    spellcheck: "false",
    placeholder: "Приве́т! Как дела́?",
    "aria-label": tr(ctx, { en: "Russian text to hear", ar: "نص روسي لتسمعه" }),
  });
  area.value = draft.ru;

  const hint = h("p", { class: "field-hint", "aria-live": "polite" });
  const run = (mode: ListenMode) => {
    const text = area.value.trim();
    if (!hasCyrillic(text)) {
      hint.textContent = tr(ctx, { en: "Type Russian letters first; the keyboard button opens an on-screen Russian keyboard.", ar: "اكتب بحروف روسية أولًا؛ زر لوحة المفاتيح يفتح لوحة روسية على الشاشة." });
      area.focus();
      return;
    }
    hint.textContent = "";
    ctx.listen(text, mode);
  };

  const listenBtn = btn([icon("speaker", 18), tr(ctx, { en: "Listen", ar: "استمع" })], { class: "primary", onClick: () => run("say") });
  const slowBtn = btn([h("span", { class: "lb-rate", "aria-hidden": "true" }, "0.6×"), tr(ctx, { en: "Slowly", ar: "ببطء" })], { class: "ghost", onClick: () => run("slow") });
  const spellBtn = btn([icon("letters", 18), tr(ctx, { en: "Spell it", ar: "تهجئة" })], { class: "ghost", onClick: () => run("spell") });
  const wordsBtn = btn([icon("repeat", 18), tr(ctx, { en: "Word by word", ar: "كلمة كلمة" })], { class: "ghost", onClick: () => run("words") });
  const clearBtn = btn([icon("x", 18), tr(ctx, { en: "Clear", ar: "امسح" })], {
    class: "ghost",
    onClick: () => {
      area.value = "";
      draft.ru = "";
      sync();
      area.focus();
    },
  });
  const count = h("span", { class: "muted small counter", dir: "ltr" });
  const sync = () => {
    const text = area.value.trim();
    const ok = hasCyrillic(text);
    listenBtn.disabled = !ok;
    slowBtn.disabled = !ok;
    spellBtn.disabled = !ok || !canSpell(text);
    wordsBtn.disabled = !ok || wordSpans(text).length < 2;
    clearBtn.disabled = area.value === "";
    count.textContent = `${area.value.length} / ${LIMIT}`;
  };
  area.addEventListener("input", () => {
    draft.ru = area.value;
    sync();
  });
  area.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      run("say");
    }
  });
  sync();

  const load = (text: string) => {
    area.value = text;
    draft.ru = text;
    sync();
    ctx.listen(text, "say");
  };

  const today = dayNumber(ctx.store.progress.settings.startDate, new Date(ctx.now()));
  const day = getDay(Math.min(Math.max(today, 1), COURSE_DAYS));
  const todays = (day?.words ?? []).slice(0, 8).map((w) => w.ru);

  return h(
    "div",
    { class: "view pronounce" },
    sectionTitle(ctx, { en: "Pronounce anything", ar: "انطق أي شيء" }),
    h("p", { class: "lead" }, tr(ctx, { en: "Type or paste Russian and hear it: at normal speed, slowly, letter by letter or word by word. Anywhere in the course, tap a Russian word to get the same tools.", ar: "اكتب نصًا روسيًا أو الصقه واسمعه: بالسرعة العادية أو ببطء أو حرفًا حرفًا أو كلمة كلمة. وفي أي مكان في الدورة اضغط على كلمة روسية لتحصل على الأدوات نفسها." })),
    h(
      "section",
      { class: "card pronounce-card" },
      area,
      keyboardFor(ctx, area),
      hint,
      h("div", { class: "row wrap pronounce-actions" }, listenBtn, slowBtn, spellBtn, wordsBtn, clearBtn),
      h("p", { class: "muted small row between" }, h("span", null, tr(ctx, { en: "Tip: Ctrl + Enter plays the text.", ar: "تلميح: Ctrl + Enter يشغّل النص." })), count),
    ),
    ctx.caps.sample ? translateCard(ctx, load) : null,
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: "Try these", ar: "جرّب هذه" })),
      h("div", { class: "chips try-chips" }, [...STARTERS, ...todays].filter((t, i, a) => a.indexOf(t) === i).map((t) => h("button", { type: "button", class: "chip-btn", onClick: () => load(t) }, ru(t)))),
    ),
    h("section", { class: "card" }, h("h3", null, tr(ctx, { en: "Sound in this browser", ar: "الصوت في هذا المتصفح" })), soundCheck(ctx)),
  );
}

/** English or Arabic in, stress-marked Russian out (claude.ai only: it asks the tutor). */
function translateCard(ctx: Ctx, load: (text: string) => void): HTMLElement {
  const input = h("input", {
    type: "text",
    id: "pronounce-source",
    class: "answer",
    dir: "auto",
    maxlength: TRANSLATE_LIMIT,
    placeholder: tr(ctx, { en: "Where is the metro?", ar: "أين المترو؟" }),
    "aria-label": tr(ctx, { en: "English or Arabic text to translate", ar: "نص إنجليزي أو عربي للترجمة" }),
  });
  input.value = draft.source;
  input.addEventListener("input", () => (draft.source = input.value));
  const status = h("p", { class: "field-hint", "aria-live": "polite" });
  const go = btn([icon("chat", 18), tr(ctx, { en: "Translate and play", ar: "ترجم وشغّل" })], { class: "primary" });
  const translate = async () => {
    const text = input.value.trim();
    const sample = ctx.caps.sample;
    if (!text || !sample) return;
    go.disabled = true;
    status.textContent = tr(ctx, { en: "The tutor is translating…", ar: "المعلّم يترجم…" });
    try {
      const ruText = parseTranslation(await sample.json(buildTranslatePrompt(text), { modelTier: "quick" }));
      if (!ruText) throw Object.assign(new Error("invalid"), { code: "invalid_json" });
      status.textContent = "";
      load(ruText);
    } catch (e) {
      replace(status, tr(ctx, errorMessage(errorCode(e))));
    } finally {
      go.disabled = false;
    }
  };
  go.addEventListener("click", () => void translate());
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      void translate();
    }
  });
  return h(
    "section",
    { class: "card" },
    h("h3", null, tr(ctx, { en: "Don't know the Russian yet?", ar: "لا تعرف الروسية بعد؟" })),
    biCtx(ctx, { en: "Write it in English or Arabic; the tutor translates it with stress marks and plays it.", ar: "اكتبه بالإنجليزية أو العربية، ويترجمه المعلّم مع علامات النبر ويشغّله." }),
    h("div", { class: "row wrap translate-row" }, input, go),
    status,
  );
}
