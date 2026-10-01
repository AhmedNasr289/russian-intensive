// Start-up: load progress, build the frame, route, and light up voices and the claude.ai
// capabilities as they arrive. Storage, voices and the runtime are all optional; the app renders
// without any of them.

import type { Bi } from "../content/types.ts";
import { isRussian, loadVoices, pickVoices, roleVoice, say, sfx as playSfx, speechSupported, stopSpeaking } from "../core/audio.ts";
import type { Sfx } from "../core/audio.ts";
import { defaultProgress } from "../core/progress.ts";
import type { ExplainLang, Progress, Theme } from "../core/progress.ts";
import { isoDate } from "../core/schedule.ts";
import { ArtifactDbStore, LocalStore } from "../core/storage.ts";
import { hasCyrillic } from "../core/text.ts";
import { errorCode, useCapability } from "./claude.ts";
import { createListenBar } from "./components/listenbar.ts";
import type { Caps, Ctx, Spoken, ToastKind, Voices } from "./context.ts";
import { tr } from "./context.ts";
import { h, replace } from "./dom.ts";
import { buildTarget, detectHost, safeLocalStorage } from "./env.ts";
import { playRecording, recordingInfo, stopRecording } from "./player.ts";
import { parseRoute } from "./router.ts";
import type { Route } from "./router.ts";
import { createShell } from "./shell.ts";
import { MultiStore, Store } from "./store.ts";
import { btn, showToast } from "./ui.ts";
import { alphabetView } from "./views/alphabet.ts";
import { courseView } from "./views/course.ts";
import { dayView } from "./views/day.ts";
import { libraryView } from "./views/library.ts";
import { pronounceView } from "./views/pronounce.ts";
import { progressView } from "./views/progress.ts";
import { reviewView } from "./views/review.ts";
import { settingsView } from "./views/settings.ts";
import { todayView } from "./views/today.ts";
import { tutorView } from "./views/tutor.ts";
import { weakView } from "./views/weak.ts";

const TITLES: Record<Exclude<Route["view"], "day">, Bi> = {
  today: { en: "Today", ar: "اليوم" },
  course: { en: "Course", ar: "الدورة" },
  review: { en: "Review cards", ar: "مراجعة البطاقات" },
  weak: { en: "Weak words", ar: "الكلمات الضعيفة" },
  alphabet: { en: "Alphabet", ar: "الأبجدية" },
  pronounce: { en: "Pronounce", ar: "النطق" },
  progress: { en: "Progress", ar: "التقدّم" },
  library: { en: "Library", ar: "المكتبة" },
  settings: { en: "Settings", ar: "الإعدادات" },
  tutor: { en: "Tutor", ar: "المعلّم" },
};

/** A tap on Russian text inside these is a tap on the control, not a request to hear the text. */
const NOT_A_TEXT_TAP = "a, button, input, textarea, select, label, summary, dialog, [role='button'], [role='checkbox'], [role='switch'], [data-nosay]";

/** Codes that mean this view can never write to the claude.ai database. */
const PERMANENT_DB_ERRORS = new Set(["invalid_argument", "not_granted", "revoked", "capability_disabled", "capability_removed"]);

function viewFor(ctx: Ctx): HTMLElement {
  const r = ctx.route;
  switch (r.view) {
    case "today":
      return todayView(ctx);
    case "course":
      return courseView(ctx);
    case "review":
      return reviewView(ctx);
    case "weak":
      return weakView(ctx);
    case "alphabet":
      return alphabetView(ctx);
    case "pronounce":
      return pronounceView(ctx);
    case "progress":
      return progressView(ctx);
    case "library":
      return libraryView(ctx);
    case "settings":
      return settingsView(ctx);
    case "tutor":
      return tutorView(ctx, r.mode);
    case "day":
      return dayView(ctx, r.n, r.section);
  }
}

/** A selector that finds "the same" control after a re-render, so keyboard focus is not lost. */
function focusKey(el: Element | null): string | null {
  if (!el || el === document.body) return null;
  if (el.id) return `#${CSS.escape(el.id)}`;
  const label = el.getAttribute("aria-label");
  return label ? `${el.tagName.toLowerCase()}[aria-label="${CSS.escape(label)}"]` : null;
}

async function boot(root: HTMLElement): Promise<void> {
  const host = detectHost();
  const local = new LocalStore(safeLocalStorage());
  // A fresh state carries updatedAt 0 so it can never outrank progress saved on another device.
  const initial: Progress = (await local.load()) ?? { ...defaultProgress(Date.now()), updatedAt: 0 };
  const caps: Caps = { sample: null, downloads: null, synced: false };
  let ruVoices: SpeechSynthesisVoice[] = [];
  let voicesTotal = 0;
  let lastCtx: Ctx | null = null;
  let leaveFns: Array<() => void> = [];
  let lastRoute = "";
  let lastRenderDate = "";
  const warned = new Set<string>();
  const pendingSpeech = new Set<() => void>();

  const store = new Store(initial, local, (e) => onSaveError(e));

  // ── Theme and language ──────────────────────────────────────────────────────
  const prefersDark = typeof window.matchMedia === "function" ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  const isDark = (): boolean => {
    if (host === "artifact") {
      const stamped = document.documentElement.getAttribute("data-theme");
      return stamped ? stamped === "dark" : (prefersDark?.matches ?? false);
    }
    const t = store.progress.settings.theme;
    return t === "system" ? (prefersDark?.matches ?? false) : t === "dark";
  };
  const applyTheme = (theme: Theme) => {
    if (host === "artifact") return; // the claude.ai viewer owns data-theme
    if (theme === "system") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", theme);
  };
  const applyLanguage = (explain: ExplainLang) => {
    document.documentElement.lang = explain === "ar" ? "ar" : "en";
    document.documentElement.dir = explain === "ar" ? "rtl" : "ltr";
  };

  const shell = createShell(root, {
    isDark,
    toggleTheme: () => {
      const next: Theme = isDark() ? "light" : "dark";
      store.update((p) => ({ ...p, settings: { ...p.settings, theme: next }, updatedAt: Date.now() }), { render: true });
    },
  });

  // ── Services handed to every screen ─────────────────────────────────────────
  const toast = (message: Bi, kind: ToastKind = "info") => {
    const mode = store.progress.settings.explain;
    const content =
      mode === "both"
        ? [h("span", { lang: "en" }, message.en), h("span", { class: "toast-ar", lang: "ar", dir: "rtl" }, message.ar)]
        : h("span", { lang: mode, dir: mode === "ar" ? "rtl" : "ltr" }, mode === "ar" ? message.ar : message.en);
    showToast(shell.toasts, content, kind);
  };
  const warnOnce = (key: string, message: Bi, kind: ToastKind = "info") => {
    if (warned.has(key)) return;
    warned.add(key);
    toast(message, kind);
  };

  const currentVoices = (): Voices => {
    const pick = pickVoices(ruVoices, store.progress.settings.voiceURI);
    return { main: pick.main, male: pick.male, female: pick.female, all: ruVoices, total: voicesTotal };
  };

  /** Moves on every sound request and every stop: a request or a sequence that sees it move was interrupted. */
  let turn = 0;
  const STOPPED: Spoken = { kind: "stopped" };

  const stopAudio = () => {
    turn++;
    stopSpeaking();
    stopRecording();
    for (const finish of [...pendingSpeech]) finish();
  };

  const speakRu = async (text: string, opts: { slow?: boolean; who?: "A" | "B" } = {}): Promise<Spoken> => {
    // The newest request wins: whatever is sounding, or still loading, stops first.
    stopAudio();
    const mine = turn;
    const settings = store.progress.settings;
    const pick = pickVoices(ruVoices, settings.voiceURI);
    // A native speaker beats a synthetic voice for a word. A slowed word goes to the voice when
    // there is one: a recording can only slow down by dropping its pitch.
    const rec = settings.recordings && !opts.who ? recordingInfo(text) : null;
    if (rec && !(opts.slow && pick.main)) {
      const outcome = await playRecording(rec);
      if (outcome === "played") {
        return { kind: "recording", author: rec.source.author, license: rec.source.license, licenseUrl: rec.source.licenseUrl, page: rec.page };
      }
      // Stopped, or replaced by a newer request, while it played or loaded: the voice must not take over.
      if (outcome === "stopped" || turn !== mine) return STOPPED;
    }
    if (!speechSupported()) {
      warnOnce("no-speech", { en: "This browser cannot speak. Open the course in Chrome or Edge.", ar: "هذا المتصفح لا ينطق. افتح الدورة في Chrome أو Edge." });
      return { kind: "silent", reason: "unsupported" };
    }
    // With the voice list in and no Russian voice on it, the browser would hand Cyrillic to an
    // English voice, which reads it as silence or noise.
    if (!pick.main && voicesTotal > 0) {
      warnOnce("no-voice", {
        en: "This browser has no Russian voice, so only single words (from recordings) can play here. Settings → Sound and voice shows how to hear everything.",
        ar: "لا يوجد صوت روسي في هذا المتصفح، لذا تُسمع هنا الكلمات المفردة فقط (من التسجيلات). الإعدادات ← الصوت والنطق تشرح كيف تسمع كل شيء.",
      });
      return { kind: "silent", reason: "no-voice" };
    }
    const role = opts.who ? roleVoice(pick, opts.who) : { voice: pick.main, pitch: 1 };
    const rate = Math.min(2, Math.max(0.3, settings.rate * (opts.slow ? 0.65 : 1)));
    await new Promise<void>((resolve) => {
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        pendingSpeech.delete(finish);
        clearTimeout(watchdog);
        resolve();
      };
      // Some engines never report the end of an utterance; never let a "play all" loop hang on one.
      const watchdog = setTimeout(finish, 4000 + (text.length * 260) / rate);
      pendingSpeech.add(finish);
      void say(text, { rate, voice: role.voice, pitch: role.pitch }).then(finish);
    });
    return turn === mine ? { kind: "voice", name: role.voice?.name ?? "ru-RU" } : STOPPED;
  };

  const pause = async (ms: number): Promise<boolean> => {
    const at = turn;
    await new Promise((resolve) => setTimeout(resolve, ms));
    return turn === at;
  };

  const bar = createListenBar(() => {
    if (!lastCtx) throw new Error("the listen bar opened before the first render");
    return lastCtx;
  });
  root.appendChild(bar.el);

  const sfx = (kind: Sfx) => {
    if (store.progress.settings.sounds) playSfx(kind);
  };

  // ── Rendering ───────────────────────────────────────────────────────────────
  const render = (routeChanged: boolean) => {
    const route = parseRoute(location.hash);
    const token = location.hash.replace(/^#/, "");
    const changed = routeChanged || token !== lastRoute;
    const key = changed ? null : focusKey(document.activeElement);
    for (const fn of leaveFns) fn();
    leaveFns = [];
    if (changed) {
      stopAudio();
      bar.close();
    }

    const settings = store.progress.settings;
    applyTheme(settings.theme);
    applyLanguage(settings.explain);

    const ctx: Ctx = {
      store,
      route,
      host,
      caps,
      voices: currentVoices(),
      navigate: (next) => {
        if (location.hash.replace(/^#/, "") === next) render(true);
        else location.hash = next;
      },
      rerender: () => render(false),
      toast,
      speak: speakRu,
      pause,
      // Called from buttons (spell, Pronounce, sound check): the bar takes keyboard focus.
      listen: (text, play) => bar.open(text, play, { focus: true }),
      onLeave: (fn) => {
        leaveFns.push(fn);
      },
      stopAudio,
      sfx,
      now: () => Date.now(),
    };
    lastCtx = ctx;

    let view: HTMLElement;
    try {
      view = viewFor(ctx);
    } catch (e) {
      console.error("Screen failed to render:", e);
      view = h(
        "div",
        { class: "view" },
        h(
          "div",
          { class: "card error-card" },
          h("h2", null, tr(ctx, { en: "This screen could not be shown", ar: "تعذّر عرض هذه الشاشة" })),
          h("p", { class: "muted" }, e instanceof Error ? e.message : String(e)),
          btn(tr(ctx, { en: "Go to today", ar: "اذهب إلى اليوم" }), { class: "primary", onClick: () => ctx.navigate("today") }),
        ),
      );
    }
    if (changed) view.classList.add("view-enter");
    shell.update(ctx);
    replace(shell.main, view);

    if (host !== "artifact") {
      const title = route.view === "day" ? { en: `Day ${route.n}`, ar: `اليوم ${route.n}` } : TITLES[route.view];
      document.title = `${tr(ctx, title)} · Russian in 56 Days`;
    }
    if (changed && lastRoute !== "") {
      window.scrollTo(0, 0);
      shell.main.focus({ preventScroll: true });
    } else if (key) {
      shell.main.querySelector<HTMLElement>(key)?.focus({ preventScroll: true });
    }
    lastRoute = token;
    lastRenderDate = isoDate(new Date());
  };

  // ── Saving ──────────────────────────────────────────────────────────────────
  function onSaveError(e: unknown): void {
    const code = errorCode(e);
    console.warn("Saving progress failed:", code, e);
    if (caps.synced && PERMANENT_DB_ERRORS.has(code)) {
      caps.synced = false;
      setTimeout(() => void store.useBackend(local), 0);
      toast({ en: "Progress can't be saved to your claude.ai account from this view, so it is kept in this browser.", ar: "لا يمكن حفظ التقدّم في حسابك على claude.ai من هذا العرض، لذا يُحفظ في هذا المتصفح." }, "error");
    } else {
      warnOnce("save-failed", { en: "Saving to claude.ai failed just now. Your next change will try again.", ar: "فشل الحفظ في claude.ai الآن. سيُعاد المحاولة مع تغييرك التالي." }, "error");
    }
  }

  // ── claude.ai capabilities (resolve later, or to null elsewhere) ──────────
  const connectClaude = async () => {
    const [sample, downloads, db, user] = await Promise.all([useCapability("sample"), useCapability("downloads"), useCapability("db"), useCapability("user")]);
    caps.sample = sample;
    caps.downloads = downloads;
    let needsRender = sample !== null || downloads !== null;
    const uid = db && user ? await user.id() : null;
    if (db && uid) {
      const remote = new ArtifactDbStore(db, uid);
      try {
        const saved = await remote.load();
        const mine = store.progress;
        await store.useBackend(new MultiStore([remote, local]));
        caps.synced = true;
        if (saved && saved.updatedAt >= mine.updatedAt) {
          await local.save(saved);
          store.replace(saved, false);
          needsRender = false; // replace() already re-rendered
        } else if (mine.updatedAt > 0) {
          // Progress made in this browser before the account copy existed (or newer than it).
          store.replace(mine);
          needsRender = false;
        } else {
          needsRender = true; // a new learner: the first real change creates the account copy
        }
      } catch (e) {
        console.warn("claude.ai storage is unavailable here:", errorCode(e));
      }
    }
    if (needsRender) render(false);
  };

  // ── Voices ──────────────────────────────────────────────────────────────────
  const refreshVoices = (list: SpeechSynthesisVoice[]) => {
    const next = list.filter((v) => isRussian(v.lang));
    const same = next.length === ruVoices.length && next.every((v, i) => v.voiceURI === ruVoices[i]?.voiceURI) && (list.length > 0) === (voicesTotal > 0);
    ruVoices = next;
    voicesTotal = list.length;
    const view = parseRoute(location.hash).view;
    if (!same && (view === "today" || view === "settings" || view === "pronounce")) render(false);
  };

  // ── Tap any Russian text to hear it ─────────────────────────────────────────
  shell.main.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const span = target.closest<HTMLElement>(".ru");
    if (!span || span.closest(NOT_A_TEXT_TAP)) return;
    // A drag that selects text is the learner copying, not tapping.
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) return;
    const text = span.dataset["text"] ?? span.textContent ?? "";
    if (!hasCyrillic(text)) return;
    span.classList.remove("tapped");
    void span.offsetWidth;
    span.classList.add("tapped");
    bar.open(text, "say");
  });

  // ── Wiring ──────────────────────────────────────────────────────────────────
  store.subscribe(() => render(false));
  window.addEventListener("hashchange", () => render(true));
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") void store.flush();
    else if (isoDate(new Date()) !== lastRenderDate) render(false); // a new day while the tab slept
  });
  window.addEventListener("pagehide", () => void store.flush());
  prefersDark?.addEventListener("change", () => {
    if (store.progress.settings.theme === "system") render(false);
  });

  render(true);

  if (speechSupported()) {
    void loadVoices().then(refreshVoices);
    window.speechSynthesis.addEventListener("voiceschanged", () => refreshVoices(window.speechSynthesis.getVoices()));
  }
  if (host === "artifact") void connectClaude();
  if (host === "web" && buildTarget() === "web" && "serviceWorker" in navigator && window.isSecureContext) {
    navigator.serviceWorker.register("sw.js").catch((e: unknown) => console.warn("Offline mode is unavailable:", e));
  }
}

const root = document.getElementById("app");
if (root) {
  boot(root).catch((e: unknown) => {
    console.error("The app failed to start:", e);
    replace(
      root,
      h(
        "div",
        { class: "boot-error" },
        h("h1", null, "Russian in 56 Days"),
        h("p", null, "The app could not start in this browser. Reload the page, or open it in a current version of Chrome, Edge, Firefox or Safari."),
        h("p", { class: "muted" }, e instanceof Error ? e.message : String(e)),
      ),
    );
  });
}
