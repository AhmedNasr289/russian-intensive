// A video, channel, podcast, site, book or app from the verified library. On the web version a
// verified YouTube video can play in place (privacy-enhanced embed, loaded only on click); inside
// claude.ai, which cannot embed other sites, every item opens in a new tab.

import type { MediaItem } from "../../content/types.ts";
import { youtubeId } from "../../core/course.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h, replace } from "../dom.ts";
import { biCtx, chip, icon } from "../ui.ts";
import type { IconName } from "../ui.ts";

const KIND_ICON: Record<MediaItem["kind"], IconName> = {
  video: "video",
  playlist: "video",
  channel: "video",
  podcast: "speaker",
  site: "external",
  book: "book",
  app: "cards",
};

const LANG_LABEL: Record<MediaItem["lang"], string> = { ru: "RU", en: "EN", "ru+en": "RU·EN", ar: "AR", "ru+ar": "RU·AR" };

export function mediaCard(ctx: Ctx, m: MediaItem): HTMLElement {
  const id = m.kind === "video" ? youtubeId(m.url) : null;
  const canEmbed = id !== null && ctx.host !== "artifact";
  const player = h("div", { class: "player" });

  if (canEmbed) {
    const thumb = h("img", { src: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`, alt: "", loading: "lazy", width: 320, height: 180 });
    const play = h(
      "button",
      {
        type: "button",
        class: "facade",
        "aria-label": `${tr(ctx, { en: "Play", ar: "تشغيل" })}: ${m.title}`,
        onClick: () =>
          replace(
            player,
            h("iframe", {
              src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
              title: m.title,
              allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
              allowfullscreen: true,
              loading: "lazy",
              referrerpolicy: "strict-origin-when-cross-origin",
            }),
          ),
      },
      thumb,
      h("span", { class: "facade-play" }, icon("play", 28)),
    );
    player.appendChild(play);
  }

  return h(
    "article",
    { class: `media-card kind-${m.kind}` },
    canEmbed ? player : null,
    h(
      "div",
      { class: "media-body" },
      h("div", { class: "media-head" }, h("span", { class: "media-icon" }, icon(KIND_ICON[m.kind], 18)), h("h3", { class: "media-title" }, m.title)),
      h("div", { class: "media-meta" }, h("span", { class: "muted" }, m.by), chip(m.level, "lvl"), chip(LANG_LABEL[m.lang]), m.minutes ? chip(`${m.minutes} min`) : null),
      h("div", { class: "media-note" }, biCtx(ctx, m.note)),
      h("a", { class: "btn ghost small", href: m.url, target: "_blank", rel: "noopener noreferrer" }, icon("external", 16), tr(ctx, { en: canEmbed ? "Open on YouTube" : "Open", ar: canEmbed ? "افتح في يوتيوب" : "افتح" })),
    ),
  );
}

/** A plain link that opens a YouTube search for a query (always valid, never invented). */
export function searchLink(ctx: Ctx, query: string, url: string): HTMLElement {
  return h("a", { class: "search-link", href: url, target: "_blank", rel: "noopener noreferrer" }, icon("video", 16), h("span", null, query), h("span", { class: "sr-only" }, tr(ctx, { en: "(opens YouTube search)", ar: "(يفتح بحث يوتيوب)" })));
}

export function emptyMedia(ctx: Ctx): HTMLElement {
  return h("p", { class: "muted" }, tr(ctx, { en: "No videos for this topic yet — use the search links below.", ar: "لا توجد مقاطع لهذا الموضوع بعد — استخدم روابط البحث أدناه." }));
}

