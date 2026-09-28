// The library: every verified channel, video, podcast, site, book and app, plus the device
// setup guides for Russian voices and keyboards.

import { MEDIA } from "../../content/media.ts";
import { SETUP_LINKS } from "../../content/setup.ts";
import type { MediaKind } from "../../content/types.ts";
import { commonsPage, creditsBySource, recordingCount } from "../../core/recordings.ts";
import { mediaCard } from "../components/media.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h } from "../dom.ts";
import { biCtx, icon, ru, sectionTitle } from "../ui.ts";

const SHELVES: ReadonlyArray<{ kind: MediaKind; title: { en: string; ar: string } }> = [
  { kind: "channel", title: { en: "YouTube channels", ar: "قنوات يوتيوب" } },
  { kind: "playlist", title: { en: "Playlists", ar: "قوائم تشغيل" } },
  { kind: "podcast", title: { en: "Podcasts", ar: "بودكاست" } },
  { kind: "site", title: { en: "Dictionaries and websites", ar: "قواميس ومواقع" } },
  { kind: "book", title: { en: "Books", ar: "كتب" } },
  { kind: "app", title: { en: "Apps", ar: "تطبيقات" } },
];

const PLATFORM = { windows: "Windows", android: "Android", ios: "iPhone", mac: "Mac" } as const;

/** Credits for the native-speaker recordings, grouped by who made them; each keeps its own licence. */
function recordingsCard(ctx: Ctx): HTMLElement | null {
  const groups = creditsBySource();
  if (!groups.length) return null;
  const total = recordingCount();
  return h(
    "section",
    { class: "card credits" },
    h("h3", null, tr(ctx, { en: "Native-speaker recordings", ar: "تسجيلات المتحدثين الأصليين" })),
    biCtx(ctx, {
      en: `${total} words play from real recordings, found through Wiktionary on Wikimedia Commons. Thank you to the people who made them. Each recording keeps its own licence; tap a word to hear it, or its arrow for the file page.`,
      ar: `${total} كلمة تُسمع من تسجيلات حقيقية وجدناها عبر ويكاموس في ويكيميديا كومنز. شكرًا لمن سجّلوها. لكل تسجيل ترخيصه الخاص؛ اضغط على الكلمة لتسمعها أو على السهم لصفحة الملف.`,
    }),
    h(
      "div",
      { class: "credit-list" },
      groups.map((g) =>
        h(
          "details",
          { class: "credit" },
          h("summary", null, h("span", null, g.source.author), h("span", { class: "muted" }, ` · ${g.source.license} · ${g.entries.length}`)),
          g.source.licenseUrl ? h("p", null, h("a", { href: g.source.licenseUrl, target: "_blank", rel: "noopener noreferrer" }, icon("external", 14), " ", tr(ctx, { en: "Licence", ar: "الترخيص" }), `: ${g.source.license}`)) : null,
          h(
            "ul",
            { class: "credit-words" },
            g.entries.map((e) => h("li", null, ru(e.key), h("a", { href: commonsPage(e.file), target: "_blank", rel: "noopener noreferrer", class: "file-link", title: e.file, "aria-label": e.file }, icon("external", 13)))),
          ),
        ),
      ),
    ),
  );
}

export function libraryView(ctx: Ctx): HTMLElement {
  const videos = MEDIA.filter((m) => m.kind === "video").length;
  return h(
    "div",
    { class: "view library" },
    sectionTitle(ctx, { en: "Library", ar: "المكتبة" }),
    h("p", { class: "lead" }, tr(ctx, { en: `Every link here was checked on ${MEDIA[0]?.verified ?? "the build date"}. The ${videos} lesson videos appear inside each day's Watch tab.`, ar: `تم التحقّق من كل رابط هنا بتاريخ ${MEDIA[0]?.verified ?? "تاريخ البناء"}. تظهر مقاطع الدروس (${videos}) داخل تبويب «شاهد» في كل يوم.` })),
    h(
      "section",
      { class: "card setup-guides" },
      h("h3", null, tr(ctx, { en: "Set up your device", ar: "جهّز جهازك" })),
      h(
        "div",
        { class: "guide-grid" },
        SETUP_LINKS.map((g) =>
          h(
            "details",
            { class: "guide" },
            h("summary", null, icon(g.kind === "voice" ? "speaker" : "keyboard", 18), h("span", null, `${PLATFORM[g.platform]} · ${tr(ctx, g.title)}`)),
            h("ol", null, g.steps.map((s) => h("li", null, biCtx(ctx, s, "span")))),
            h("a", { href: g.url, target: "_blank", rel: "noopener noreferrer", class: "btn ghost small" }, icon("external", 16), tr(ctx, { en: "Official help page", ar: "صفحة المساعدة الرسمية" })),
          ),
        ),
      ),
    ),
    recordingsCard(ctx),
    SHELVES.map((shelf) => {
      const items = MEDIA.filter((m) => m.kind === shelf.kind);
      return items.length ? h("section", { class: "shelf" }, h("h3", null, tr(ctx, shelf.title), h("span", { class: "muted" }, ` · ${items.length}`)), h("div", { class: "media-grid" }, items.map((m) => mediaCard(ctx, m)))) : null;
    }),
  );
}
