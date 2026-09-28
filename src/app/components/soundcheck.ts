// The sound check: what this browser can play (native-speaker recordings for words, a voice for
// sentences), how natural its Russian voice is, and, when something is missing, the fix for this
// device, with a one-tap way to open the course in a browser that has Google's or Microsoft's voice.

import type { Bi } from "../../content/types.ts";
import { browserOf, platformOf, speechSupported, voiceTier } from "../../core/audio.ts";
import type { BrowserKind, PlatformKind, VoiceTier } from "../../core/audio.ts";
import { recordingCount } from "../../core/recordings.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h } from "../dom.ts";
import { PAGES_URL } from "../env.ts";
import { biCtx, btn, icon } from "../ui.ts";

/** The fix for a missing or basic Russian voice, for this browser on this device. */
export function voiceAdvice(browser: BrowserKind, platform: PlatformKind, tier: VoiceTier): Bi | null {
  if (tier === "natural") return null;
  if (tier === "standard") {
    return {
      en: "This voice works but sounds robotic. Chrome has Google's Russian voice (the one Google Translate uses) and Edge has Microsoft's natural voices, Svetlana and Dmitry.",
      ar: "هذا الصوت يعمل لكنه آلي. في Chrome صوت Google الروسي (نفس صوت ترجمة Google)، وفي Edge أصوات Microsoft الطبيعية سفيتلانا ودميتري.",
    };
  }
  if (browser === "app") {
    return {
      en: "You are in an app window (such as the Claude desktop app) that has no Russian voice, so words play from recordings but sentences stay silent. Open the course in Chrome for Google's Russian voice (the one Google Translate uses) or in Edge for Microsoft's natural voices.",
      ar: "أنت في نافذة تطبيق (مثل تطبيق Claude لسطح المكتب) لا يحتوي على صوت روسي، لذا تُسمع الكلمات من التسجيلات وتبقى الجمل صامتة. افتح الدورة في Chrome لتسمع صوت Google الروسي (نفس صوت ترجمة Google) أو في Edge لتسمع أصوات Microsoft الطبيعية.",
    };
  }
  if (platform === "ios") {
    return { en: "Add the Russian voice: Settings > Accessibility > Spoken Content > Voices > Russian > Milena (Enhanced), then reload.", ar: "أضف الصوت الروسي: الإعدادات > تسهيلات الاستخدام > المحتوى المنطوق > الأصوات > الروسية > Milena (محسّن)، ثم أعد التحميل." };
  }
  if (platform === "android") {
    return { en: "Add Russian voice data: Settings > Accessibility > Text-to-speech output > Speech Services by Google > Install voice data > Russian, then reload.", ar: "أضف بيانات الصوت الروسي: الإعدادات > إمكانية الوصول > تحويل النص إلى كلام > Speech Services by Google > تثبيت بيانات الصوت > الروسية، ثم أعد التحميل." };
  }
  if (browser === "chrome" || browser === "edge") {
    return { en: "Chrome and Edge load their natural Russian voices from the internet. Check your connection, then reload the page.", ar: "يحمّل Chrome و Edge أصواتهما الروسية الطبيعية من الإنترنت. تحقّق من اتصالك ثم أعد تحميل الصفحة." };
  }
  if (platform === "mac") {
    return { en: "Add a Russian voice in System Settings > Accessibility > Spoken Content > System voice > Manage Voices, or open the course in Chrome.", ar: "أضف صوتًا روسيًا من إعدادات النظام > تسهيلات الاستخدام > المحتوى المنطوق > صوت النظام > إدارة الأصوات، أو افتح الدورة في Chrome." };
  }
  return {
    en: "This browser has no Russian voice. Open the course in Chrome (Google's voice) or Edge (Microsoft's natural voices), or add a Russian voice to your system: Library > Set up your device.",
    ar: "لا يوجد صوت روسي في هذا المتصفح. افتح الدورة في Chrome (صوت Google) أو Edge (أصوات Microsoft الطبيعية)، أو أضف صوتًا روسيًا إلى نظامك: المكتبة > جهّز جهازك.",
  };
}

export function soundCheck(ctx: Ctx): HTMLElement {
  const ua = typeof navigator === "undefined" ? "" : navigator.userAgent;
  const browser = browserOf(ua);
  const platform = platformOf(ua);
  const voice = ctx.voices.main;
  const tier = voiceTier(voice);
  const recordings = ctx.store.progress.settings.recordings ? recordingCount() : 0;
  const listed = ctx.voices.total > 0;

  const row = (state: "ok" | "warn" | "bad", text: string) =>
    h("li", { class: `check-row ${state}` }, h("span", { class: "tick" }, icon(state === "bad" ? "x" : "check", 16)), h("span", null, text));

  const voiceRow = !speechSupported()
    ? row("bad", tr(ctx, { en: "This browser cannot speak at all.", ar: "هذا المتصفح لا ينطق إطلاقًا." }))
    : voice
      ? row(tier === "natural" ? "ok" : "warn", tr(ctx, tier === "natural" ? { en: `Sentences: ${voice.name}, a natural voice`, ar: `الجمل: ${voice.name}، صوت طبيعي` } : { en: `Sentences: ${voice.name}, a basic voice`, ar: `الجمل: ${voice.name}، صوت بسيط` }))
      : listed
        ? row("bad", tr(ctx, { en: "Sentences: no Russian voice in this browser", ar: "الجمل: لا يوجد صوت روسي في هذا المتصفح" }))
        : row("warn", tr(ctx, { en: "Sentences: this browser has not listed its voices yet", ar: "الجمل: لم يعرض هذا المتصفح أصواته بعد" }));

  // Only a certain "no voice" deserves the fix; an unlisted voice list may still speak by language.
  const advice = voice || listed ? voiceAdvice(browser, platform, tier) : null;
  const elsewhere = advice !== null && (browser === "app" || browser === "firefox" || browser === "other" || tier !== "natural");

  return h(
    "div",
    { class: "sound-check" },
    h(
      "ul",
      { class: "checklist" },
      recordings > 0
        ? row("ok", tr(ctx, { en: `Words: ${recordings} recorded by native speakers, playable in any browser`, ar: `الكلمات: ${recordings} مسجّلة بأصوات متحدثين أصليين، تعمل في أي متصفح` }))
        : ctx.store.progress.settings.recordings
          ? null
          : row("warn", tr(ctx, { en: "Words: native-speaker recordings are switched off", ar: "الكلمات: تسجيلات المتحدثين الأصليين متوقفة" })),
      voiceRow,
    ),
    advice ? h("div", { class: "note advice" }, icon("speaker", 16), biCtx(ctx, advice, "div")) : null,
    h(
      "div",
      { class: "row wrap" },
      btn([icon("speaker", 18), tr(ctx, { en: "Test a word", ar: "جرّب كلمة" })], { class: "ghost", onClick: () => ctx.listen("спаси́бо", "say") }),
      btn([icon("speaker", 18), tr(ctx, { en: "Test a sentence", ar: "جرّب جملة" })], { class: "ghost", onClick: () => ctx.listen("Приве́т! Меня́ зову́т Ка́тя.", "say") }),
      elsewhere
        ? h(
            "a",
            { class: "btn primary", href: PAGES_URL, target: "_blank", rel: "noopener noreferrer" },
            icon("external", 18),
            tr(ctx, ctx.host === "artifact" ? { en: "Open the web version", ar: "افتح نسخة الويب" } : { en: "Open in your browser", ar: "افتح في متصفحك" }),
          )
        : null,
    ),
  );
}
