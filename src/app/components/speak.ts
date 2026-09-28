// Speaking practice for one phrase: listen, then say it. Uses speech recognition where the browser
// has it, record-and-compare where only the microphone works, and self-rating everywhere else
// (always inside claude.ai, whose frame blocks the microphone).

import type { Bi } from "../../content/types.ts";
import { listenErrorMessage, listenOnce, ListenError, recognitionSupported, recordClip, recordingSupported } from "../../core/recognition.ts";
import { similarity, wordDiff } from "../../core/text.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h, replace } from "../dom.ts";
import { biCtx, btn, icon, playButtons, ru } from "../ui.ts";

export type SpeakItem = { ru: string; say?: string; focus?: Bi; meaning?: Bi };

export const PASS_SIMILARITY = 0.85;

type Mode = "recognize" | "record" | "self";

export function speakMode(ctx: Ctx): Mode {
  if (ctx.host === "artifact") return "self";
  if (recognitionSupported()) return "recognize";
  return recordingSupported() ? "record" : "self";
}

export function speakCard(ctx: Ctx, item: SpeakItem): HTMLElement {
  const mode = speakMode(ctx);
  const result = h("div", { class: "speak-result", "aria-live": "polite" });
  const showSay = ctx.store.progress.settings.showSay;

  const recognize = async (button: HTMLButtonElement) => {
    button.disabled = true;
    button.classList.add("listening");
    replace(result, h("span", { class: "muted" }, tr(ctx, { en: "Listening… speak now", ar: "أستمع… تكلّم الآن" })));
    try {
      const heard = await listenOnce({ maxMs: 7000 });
      const best = [heard.transcript, ...heard.alternatives].reduce((a, b) => (similarity(b, item.ru) > similarity(a, item.ru) ? b : a), heard.transcript);
      const score = similarity(best, item.ru);
      const pass = score >= PASS_SIMILARITY;
      ctx.sfx(pass ? "ok" : "bad");
      replace(
        result,
        h("div", { class: `verdict ${pass ? "good" : "bad"}` }, icon(pass ? "check" : "x", 18), h("strong", null, `${Math.round(score * 100)}%`), h("span", null, tr(ctx, pass ? { en: "Clear and correct", ar: "واضح وصحيح" } : { en: "Try once more", ar: "حاول مرة أخرى" }))),
        h("div", { class: "heard" }, h("span", { class: "muted" }, tr(ctx, { en: "I heard: ", ar: "سمعت: " })), h("span", { lang: "ru" }, best || "…")),
        h("div", { class: "diff" }, wordDiff(item.ru, best).map((w) => h("span", { class: w.ok ? "ok" : "miss" }, ru(w.word)))),
      );
    } catch (e) {
      const code = e instanceof ListenError ? e.code : "error";
      replace(result, h("div", { class: "verdict bad" }, icon("x", 18), biCtx(ctx, listenErrorMessage(code), "span")));
    } finally {
      button.disabled = false;
      button.classList.remove("listening");
    }
  };

  const record = async (button: HTMLButtonElement) => {
    button.disabled = true;
    button.classList.add("listening");
    replace(result, h("span", { class: "muted" }, tr(ctx, { en: "Recording for 5 seconds…", ar: "جارٍ التسجيل لمدة ٥ ثوانٍ…" })));
    try {
      const clip = await recordClip(5000);
      const url = URL.createObjectURL(clip);
      replace(
        result,
        h("div", { class: "compare" }, h("span", null, tr(ctx, { en: "You:", ar: "أنت:" })), h("audio", { controls: true, src: url, class: "clip" })),
        h("div", { class: "compare" }, h("span", null, tr(ctx, { en: "Model:", ar: "النموذج:" })), playButtons(ctx, item.ru)),
      );
    } catch (e) {
      const code = e instanceof ListenError ? e.code : "error";
      replace(result, h("div", { class: "verdict bad" }, icon("x", 18), biCtx(ctx, listenErrorMessage(code), "span")));
    } finally {
      button.disabled = false;
      button.classList.remove("listening");
    }
  };

  const selfRate = () =>
    h(
      "div",
      { class: "self-rate" },
      btn([icon("check", 18), tr(ctx, { en: "I said it well", ar: "نطقتها جيدًا" })], { class: "ghost small", onClick: () => { ctx.sfx("ok"); replace(result, h("span", { class: "muted" }, tr(ctx, { en: "Great — say it once more, faster.", ar: "ممتاز — قلها مرة أخرى بسرعة أكبر." }))); } }),
      btn([icon("repeat", 18), tr(ctx, { en: "Again", ar: "مرة أخرى" })], { class: "ghost small", onClick: () => void ctx.speak(item.ru, { slow: true }) }),
    );

  const action =
    mode === "recognize"
      ? btn([icon("mic", 20), tr(ctx, { en: "Say it", ar: "قلها" })], { class: "primary mic", onClick: (e: MouseEvent) => void recognize(e.currentTarget as HTMLButtonElement) })
      : mode === "record"
        ? btn([icon("mic", 20), tr(ctx, { en: "Record and compare", ar: "سجّل وقارن" })], { class: "primary mic", onClick: (e: MouseEvent) => void record(e.currentTarget as HTMLButtonElement) })
        : selfRate();

  return h(
    "div",
    { class: "speak-card" },
    h("div", { class: "speak-top" }, ru(item.ru, "big"), playButtons(ctx, item.ru)),
    showSay && item.say ? h("div", { class: "say" }, item.say) : null,
    item.meaning ? h("div", { class: "meaning" }, biCtx(ctx, item.meaning, "span")) : null,
    item.focus ? h("div", { class: "focus" }, biCtx(ctx, item.focus, "span")) : null,
    h("div", { class: "speak-actions" }, action),
    result,
  );
}
