// The session bar: runs one study block hands-free. It opens each step's screen, times it, ticks
// the step done when its time is up (the learner moves on with Next), and survives a reload. It
// lives outside the screen area, so re-rendering a screen never resets it.

import { stepRoute } from "../../core/coach.ts";
import { getDay } from "../../core/course.ts";
import { toggleStep } from "../../core/progress.ts";
import { COURSE_DAYS, dailySteps, dayNumber, isoDate, kindOf } from "../../core/schedule.ts";
import type { Block, Step } from "../../core/schedule.ts";
import { advanceSession, parseSession, pauseSession, remainingMs, resumeSession, sessionStep, startSession, tickCurrent } from "../../core/session.ts";
import type { SessionState } from "../../core/session.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h, replace } from "../dom.ts";
import { btn, icon, iconBtn } from "../ui.ts";

const KEY = "ru56.session.v1";
const BLOCK_LABEL: Record<Block, { en: string; ar: string }> = {
  morning: { en: "Morning session", ar: "جلسة الصباح" },
  evening: { en: "Evening session", ar: "جلسة المساء" },
};

export type SessionBar = {
  el: HTMLElement;
  start(block: Block): void;
  active(): boolean;
  /** Redraw for the current language and progress (called on every screen render). */
  refresh(): void;
};

function load(today: string): SessionState | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? parseSession(JSON.parse(raw) as unknown, today) : null;
  } catch {
    return null;
  }
}

function save(s: SessionState | null): void {
  try {
    if (s) window.localStorage.setItem(KEY, JSON.stringify(s));
    else window.localStorage.removeItem(KEY);
  } catch {
    // Storage refused (private mode): the session still runs, it just will not survive a reload.
  }
}

const clock = (ms: number): string => {
  const total = Math.ceil(ms / 1000);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
};

export function createSessionBar(getCtx: () => Ctx): SessionBar {
  const el = h("section", { class: "session-bar", hidden: true });
  let state: SessionState | null = load(isoDate(new Date()));
  let timer: ReturnType<typeof setInterval> | null = null;
  let time: HTMLElement | null = null;

  const steps = (ctx: Ctx): Step[] => dailySteps(ctx.store.progress.settings);
  const courseDay = (ctx: Ctx): number => dayNumber(ctx.store.progress.settings.startDate, new Date(ctx.now()));
  const routeOf = (ctx: Ctx, step: Step): string => {
    const n = courseDay(ctx);
    return stepRoute(step.target, n, getDay(n)?.kind ?? kindOf(n));
  };

  /** Tick a step in the saved progress (only if it is not ticked yet: toggleStep toggles). */
  const markInProgress = (ctx: Ctx, step: Step) => {
    const n = courseDay(ctx);
    ctx.store.update((p) => ((p.steps[`d${n}`] ?? []).includes(step.id) ? p : toggleStep(p, n, step.id, ctx.now())), { render: ctx.route.view === "today" });
  };

  const set = (next: SessionState | null) => {
    state = next;
    save(next);
    draw();
  };

  const finish = (ctx: Ctx, s: SessionState) => {
    const list = steps(ctx);
    const minutes = s.ticked.reduce((sum, id) => sum + (list.find((x) => x.id === id)?.minutes ?? 0), 0);
    set(null);
    ctx.sfx("done");
    ctx.toast(
      s.ticked.length
        ? { en: `${BLOCK_LABEL[s.block].en} finished: ${s.ticked.length} steps, ${minutes} min. Молоде́ц!`, ar: `انتهت ${BLOCK_LABEL[s.block].ar}: ${s.ticked.length} خطوات، ${minutes} دقيقة. أحسنت!` }
        : { en: "Session ended.", ar: "انتهت الجلسة." },
      "ok",
    );
    if (ctx.route.view === "today") ctx.rerender();
  };

  const move = (markDone: boolean) => {
    const ctx = getCtx();
    if (!state) return;
    const list = steps(ctx);
    const current = sessionStep(state, list);
    if (markDone && current) markInProgress(ctx, current);
    const next = advanceSession(state, list, ctx.now(), markDone);
    if (!next) return finish(ctx, markDone ? tickCurrent(state, list) : state);
    set(next);
    const step = sessionStep(next, list);
    if (step) ctx.navigate(routeOf(ctx, step));
  };

  const tick = () => {
    const ctx = getCtx();
    if (!state) return;
    const list = steps(ctx);
    const left = remainingMs(state, list, ctx.now());
    const step = sessionStep(state, list);
    if (left === 0 && step && !state.ticked.includes(step.id)) {
      // Time is up: the step counts as done; the learner moves on when ready.
      markInProgress(ctx, step);
      set(tickCurrent(state, list));
      ctx.sfx("done");
      return;
    }
    if (time) time.textContent = left === 0 ? tr(ctx, { en: "Time is up", ar: "انتهى الوقت" }) : clock(left);
  };

  const draw = () => {
    const ctx = getCtx();
    const s = state;
    if (timer !== null) clearInterval(timer);
    timer = null;
    document.documentElement.classList.toggle("has-session", s !== null);
    if (!s) {
      el.hidden = true;
      replace(el);
      return;
    }
    const list = steps(ctx);
    const step = sessionStep(s, list);
    if (!step) return set(null);
    const blockSteps = list.filter((x) => x.block === s.block);
    const position = blockSteps.findIndex((x) => x.id === step.id) + 1;
    const left = remainingMs(s, list, ctx.now());
    const over = s.ticked.includes(step.id);
    const paused = s.pausedAt !== null;
    time = h("span", { class: "session-time", role: "timer", "aria-live": "off" }, over ? tr(ctx, { en: "Time is up", ar: "انتهى الوقت" }) : clock(left));
    el.hidden = false;
    el.setAttribute("aria-label", tr(ctx, BLOCK_LABEL[s.block]));
    el.classList.toggle("is-over", over);
    el.classList.toggle("is-paused", paused);
    replace(
      el,
      h(
        "div",
        { class: "session-info" },
        h("span", { class: "session-eyebrow" }, tr(ctx, BLOCK_LABEL[s.block]), " · ", tr(ctx, { en: `step ${position} of ${blockSteps.length}`, ar: `الخطوة ${position} من ${blockSteps.length}` })),
        h("a", { class: "session-step", href: `#${routeOf(ctx, step)}` }, tr(ctx, step.title)),
        h(
          "span",
          { class: "session-dots", "aria-hidden": "true" },
          blockSteps.map((x) => h("span", { class: `dot${s.done.includes(x.id) ? " done" : ""}${x.id === step.id ? " now" : ""}` })),
        ),
      ),
      time,
      h(
        "div",
        { class: "session-actions" },
        iconBtn(paused ? "play" : "pause", tr(ctx, paused ? { en: "Resume", ar: "استئناف" } : { en: "Pause", ar: "إيقاف مؤقت" }), {
          onClick: () => set(paused ? resumeSession(s, ctx.now()) : pauseSession(s, ctx.now())),
        }),
        iconBtn("right", tr(ctx, { en: "Skip this step (not done)", ar: "تخطَّ هذه الخطوة (دون إكمال)" }), { class: "session-skip", onClick: () => move(false) }),
        btn([icon("check", 18), h("span", { class: "session-next-label" }, tr(ctx, { en: "Done, next", ar: "تمّت، التالي" }))], { class: `primary small${over ? " pulse-once" : ""}`, onClick: () => move(true) }),
        iconBtn("x", tr(ctx, { en: "End the session", ar: "أنهِ الجلسة" }), {
          onClick: () => {
            const cur = state;
            if (cur) finish(ctx, cur);
          },
        }),
      ),
    );
    if (!paused && !over && courseDay(ctx) >= 1) timer = setInterval(tick, 1000);
  };

  return {
    el,
    start(block) {
      const ctx = getCtx();
      const n = courseDay(ctx);
      if (n < 1 || n > COURSE_DAYS) {
        ctx.toast({ en: "Sessions run on course days (1–56).", ar: "تعمل الجلسات في أيام الدورة (١–٥٦)." }, "info");
        return;
      }
      const list = steps(ctx);
      const s = startSession(block, list, ctx.store.progress.steps[`d${n}`] ?? [], ctx.now());
      if (!s) {
        ctx.toast({ en: "Every step of this block is already done.", ar: "كل خطوات هذه الفترة مكتملة بالفعل." }, "info");
        return;
      }
      set(s);
      ctx.sfx("tap");
      const step = sessionStep(s, list);
      if (step) ctx.navigate(routeOf(ctx, step));
    },
    active: () => state !== null,
    refresh() {
      // A session saved yesterday ends quietly.
      if (state && state.date !== isoDate(new Date(getCtx().now()))) state = null;
      draw();
    },
  };
}
