// Builds dist/: index.html (the complete web app for GitHub Pages and double-click use),
// artifact.html (the same app as a claude.ai page fragment), manifest.webmanifest, sw.js and
// the icons. One bundle and one stylesheet feed both pages, so they share one build id.

import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import * as esbuild from "esbuild-wasm";
import { emblemSvg } from "../src/app/emblem.ts";
import { RECORDING_PACKS } from "../src/content/recordings.ts";
import { iconFiles } from "./icons.ts";

const ROOT = resolve(import.meta.dirname, "..");
const DIST = join(ROOT, "dist");

const TITLE = "Russian in 56 Days";
const DESCRIPTION =
  "A 56-day course from zero to everyday Russian: daily lessons with audio, spaced-repetition cards, speaking practice and an AI tutor, explained in English and Arabic.";
const FONTS =
  "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..700&amp;family=IBM+Plex+Sans+Arabic:wght@400;500;600&amp;family=Marck+Script&amp;family=Oranienbaum&amp;display=swap";
/** Browsers that support every CSS feature the stylesheet uses (color-mix, :has, logical insets). */
const CSS_TARGETS = ["chrome111", "edge111", "firefox121", "safari16.4"];

type Target = "web" | "artifact";

/** Inline code must not end its own <script>/<style> element or open an HTML comment. */
const inlineSafe = (code: string, tag: "script" | "style"): string =>
  code.replace(new RegExp(`</(${tag})`, "gi"), "<\\/$1").replace(/<!--/g, "<\\!--");

const fill = (template: string, values: Record<string, string>): string =>
  template.replace(/\{\{([A-Z]+)\}\}/g, (whole, key: string) => values[key] ?? whole);

function head(target: Target, id: string, css: string): string {
  return [
    `<title>${TITLE}</title>`,
    `<meta name="description" content="${DESCRIPTION}">`,
    `<meta name="build-id" content="${id}">`,
    `<meta name="ru56-target" content="${target}">`,
    `<link rel="preconnect" href="https://fonts.googleapis.com">`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link rel="stylesheet" href="${FONTS}">`,
    `<style>${css}</style>`,
  ].join("\n");
}

function body(js: string): string {
  const splash = [
    `<div id="app">`,
    `<div class="boot" role="status">${emblemSvg({ rounded: true, size: 64 })}`,
    `<p class="boot-name">${TITLE}</p><p class="boot-note">Loading your course…</p></div>`,
    `</div>`,
  ].join("");
  return [
    splash,
    `<noscript><p class="boot-note">This course needs JavaScript. Turn it on for this page, then reload.</p></noscript>`,
    `<script>${js}</script>`,
  ].join("\n");
}

function manifest(): string {
  return JSON.stringify(
    {
      name: TITLE,
      short_name: "Russian 56",
      description: DESCRIPTION,
      lang: "en",
      dir: "ltr",
      start_url: "./",
      scope: "./",
      display: "standalone",
      background_color: "#f3f6fc",
      theme_color: "#1f48b8",
      categories: ["education"],
      icons: [
        { src: "icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
        { src: "icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
        { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
        { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      ],
    },
    null,
    2,
  );
}

/**
 * Offline support: the app shell is cached per build; fonts are kept across builds; a recording
 * pack is kept from the first time one of its words plays (its name holds its hash, so a kept
 * pack is never stale) until a build stops using it.
 */
function serviceWorker(id: string, packs: readonly string[]): string {
  return `// Russian in 56 Days: offline cache for build ${id}.
const CACHE = "ru56-${id}";
const FONTS = "ru56fonts-v1";
const AUDIO = "ru56audio-v1";
const PACKS = ${JSON.stringify(packs)};
const CORE = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("ru56-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => caches.open(AUDIO))
      .then((audio) => audio.keys().then((requests) => Promise.all(requests.filter((r) => !PACKS.some((p) => r.url.endsWith("/" + p))).map((r) => audio.delete(r)))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) caches.open(CACHE).then((cache) => cache.put("index.html", response.clone()));
          return response;
        })
        .catch(() => caches.match("index.html").then((hit) => hit || caches.match("./"))),
    );
    return;
  }
  if (url.origin === self.location.origin && PACKS.some((p) => url.pathname.endsWith("/" + p))) {
    event.respondWith(
      caches.open(AUDIO).then((audio) =>
        audio.match(request).then(
          (hit) =>
            hit ||
            fetch(request).then((response) => {
              if (response.ok && response.status === 200) audio.put(request, response.clone());
              return response;
            }),
        ),
      ),
    );
    return;
  }
  if (url.origin === self.location.origin) {
    event.respondWith(caches.match(request).then((hit) => hit || fetch(request)));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(
      caches.open(FONTS).then((cache) =>
        cache.match(request).then((hit) => {
          const refresh = fetch(request)
            .then((response) => {
              cache.put(request, response.clone());
              return response;
            })
            .catch(() => hit);
          return hit || refresh;
        }),
      ),
    );
  }
});
`;
}

async function main(): Promise<void> {
  const bundle = await esbuild.build({
    entryPoints: [join(ROOT, "src", "app", "main.ts")],
    bundle: true,
    format: "iife",
    platform: "browser",
    target: ["es2022"],
    minify: true,
    write: false,
    charset: "utf8",
    legalComments: "none",
    logLevel: "silent",
  });
  const jsFile = bundle.outputFiles[0];
  if (!jsFile) throw new Error("esbuild produced no output");
  const css = await esbuild.transform(readFileSync(join(ROOT, "src", "app", "styles.css"), "utf8"), {
    loader: "css",
    minify: true,
    target: CSS_TARGETS,
    logLevel: "silent",
  });
  await esbuild.stop();

  const js = inlineSafe(jsFile.text.trim(), "script");
  const style = inlineSafe(css.code.trim(), "style");
  const template = readFileSync(join(ROOT, "src", "app", "template.html"), "utf8");
  const id = createHash("sha256").update(js).update(style).update(template).digest("hex").slice(0, 12);

  const index = fill(template, { HEAD: head("web", id, style), BODY: body(js) });
  const artifact = `${head("artifact", id, style)}\n${body(js)}\n`;

  rmSync(DIST, { recursive: true, force: true });
  mkdirSync(DIST, { recursive: true });
  writeFileSync(join(DIST, "index.html"), index);
  writeFileSync(join(DIST, "artifact.html"), artifact);
  writeFileSync(join(DIST, "manifest.webmanifest"), manifest());
  writeFileSync(join(DIST, "sw.js"), serviceWorker(id, RECORDING_PACKS));
  for (const [name, data] of Object.entries(iconFiles())) writeFileSync(join(DIST, name), data);

  // The recording packs and their credits, exactly the ones the index names.
  let audioBytes = 0;
  if (RECORDING_PACKS.length) mkdirSync(join(DIST, "audio"), { recursive: true });
  for (const pack of RECORDING_PACKS) {
    const from = join(ROOT, "public", pack);
    if (!existsSync(from)) throw new Error(`recording pack missing: public/${pack} (run node scripts/fetch-recordings.ts --offline)`);
    copyFileSync(from, join(DIST, pack));
    audioBytes += statSync(from).size;
  }
  const credits = join(ROOT, "public", "audio", "ATTRIBUTION.md");
  if (RECORDING_PACKS.length && existsSync(credits)) copyFileSync(credits, join(DIST, "audio", "ATTRIBUTION.md"));

  const kb = (s: string) => Math.round(Buffer.byteLength(s) / 1024);
  console.log(`BUILD id=${id} indexKB=${kb(index)} artifactKB=${kb(artifact)} jsKB=${kb(js)} cssKB=${kb(style)} packs=${RECORDING_PACKS.length} audioKB=${Math.round(audioBytes / 1024)}`);
}

main().catch((e: unknown) => {
  console.error(e instanceof Error ? (e.stack ?? e.message) : e);
  process.exitCode = 1;
});
