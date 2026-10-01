// The AI tutor. Inside claude.ai it talks through the `sample` capability (on the learner's own
// Claude account); on the web it hands over the exact same prompt to paste into any Claude chat.

import type { Day } from "../../content/types.ts";
import { wordsUpTo } from "../../core/course.ts";
import { buildTutorRules } from "../../core/tutorPrompt.ts";
import type { TutorMode } from "../../core/tutorPrompt.ts";
import { learnerStatus, sampleTools, statusText } from "../../core/tutorTools.ts";
import type { Offer, ToolHost, ToolLog } from "../../core/tutorTools.ts";
import { errorCode, partialText, toolsAvailable } from "../claude.ts";
import type { SampleOptions, SampleTurn } from "../claude.ts";
import type { Ctx } from "../context.ts";
import { explainOf, tr } from "../context.ts";
import { h, replace } from "../dom.ts";
import { ARTIFACT_URL } from "../env.ts";
import { parseRoute, routeToken } from "../router.ts";
import { biCtx, btn, copyText, icon, mixed } from "../ui.ts";
import { keyboardFor } from "./keyboard.ts";

/** What Katya did or offered with the page tools, placed before the reply at turn index `after`. */
type Activity = { after: number; log?: ToolLog & { undone?: boolean }; offer?: Offer };

/** Conversations, their tool activity and any unsent message survive re-renders and navigation for the life of the page. */
const conversations = new Map<string, SampleTurn[]>();
const activities = new Map<string, Activity[]>();
const unsent = new Map<string, string>();

const KICKOFF: Record<TutorMode, string> = {
  coach: "Please look at my progress, tell me the most useful thing to do now and why, then warm me up on my weakest words.",
  roleplay: "Please start the role-play now: greet me in character with your first line.",
  chat: "Please start our conversation with a greeting and one simple question.",
  explain: "Please give me a short overview of today's grammar with two examples, then ask me one question to check.",
  check: "I'm ready. Ask me to write a sentence using today's words.",
};

const MAX_TURNS = 24;

export function errorMessage(code: string): { en: string; ar: string } {
  switch (code) {
    case "not_granted":
    case "sampling_disabled":
    case "capability_disabled":
    case "not_declared":
      return { en: "The tutor isn't allowed in this view. Allow it when claude.ai asks, or open the tutor from your own account.", ar: "المعلّم غير مسموح في هذا العرض. اسمح به عندما يطلب claude.ai ذلك، أو افتحه من حسابك." };
    case "rate_limited":
      return { en: "Too many requests right now. Wait a minute, then send again.", ar: "طلبات كثيرة الآن. انتظر دقيقة ثم أرسل مرة أخرى." };
    case "session_expired":
      return { en: "Your claude.ai session expired. Sign in again, then retry.", ar: "انتهت جلستك في claude.ai. سجّل الدخول مرة أخرى ثم أعد المحاولة." };
    case "prompt_too_large":
      return { en: "The conversation is too long. Start a new one.", ar: "المحادثة طويلة جدًا. ابدأ محادثة جديدة." };
    case "refused":
      return { en: "The tutor declined that message. Try rephrasing it.", ar: "رفض المعلّم هذه الرسالة. جرّب صياغة أخرى." };
    default:
      return { en: "The tutor didn't answer. Check your connection and try again.", ar: "لم يُجب المعلّم. تحقّق من الاتصال وحاول مرة أخرى." };
  }
}

/** The tutor's standing instructions, with the learner's status as it is right now. */
function rulesFor(ctx: Ctx, day: Day, mode: TutorMode, tools: boolean): string {
  const status = statusText(learnerStatus(ctx.store.progress, new Date(ctx.now())));
  return buildTutorRules({ day, known: wordsUpTo(day.n), explain: explainOf(ctx), status }, mode, { tools });
}

export function tutorPanel(ctx: Ctx, day: Day, mode: TutorMode): HTMLElement {
  return ctx.caps.sample ? liveChat(ctx, day, mode) : handoff(ctx, rulesFor(ctx, day, mode, false), mode);
}

/** A chat line for something Katya did (with Undo) or offered (a button the learner may tap). */
function activityNode(ctx: Ctx, a: Activity): HTMLElement {
  if (a.offer) {
    const offer = a.offer;
    const label = offer.kind === "screen" ? offer.label : tr(ctx, { en: "Drill your weak words", ar: "تدرّب على كلماتك الضعيفة" });
    return h(
      "div",
      { class: "activity offer" },
      icon("bolt", 16),
      h("span", null, tr(ctx, { en: "Katya suggests:", ar: "تقترح كاتيا:" })),
      btn([h("span", { dir: "auto" }, label), icon("right", 16)], { class: "primary small", onClick: () => ctx.navigate(offer.kind === "screen" ? offer.token : "weak") }),
    );
  }
  const log = a.log;
  if (!log) return h("div");
  const node = h("div", { class: `activity${log.undone ? " undone" : ""}` });
  const draw = () => {
    replace(
      node,
      icon(log.undone ? "repeat" : "check", 16),
      h("span", { dir: "auto" }, tr(ctx, log.text)),
      log.undone
        ? h("span", { class: "muted" }, tr(ctx, { en: "· undone", ar: "· أُلغي" }))
        : log.undo
          ? btn(tr(ctx, { en: "Undo", ar: "تراجع" }), {
              class: "ghost tiny",
              onClick: () => {
                log.undo?.();
                log.undone = true;
                node.classList.add("undone");
                draw();
              },
            })
          : null,
    );
  };
  draw();
  return node;
}

function handoff(ctx: Ctx, rules: string, mode: TutorMode): HTMLElement {
  const prompt = `${rules}\n\n${KICKOFF[mode]}`;
  return h(
    "div",
    { class: "card handoff" },
    h("h3", null, tr(ctx, { en: "Practise with the AI tutor", ar: "تدرّب مع المعلّم الذكي" })),
    biCtx(ctx, {
      en: "The live tutor runs inside the claude.ai version of this app. Here, copy the prepared prompt and paste it into any Claude chat: it already knows your day, your words and today's scenario.",
      ar: "يعمل المعلّم المباشر داخل نسخة claude.ai من هذا التطبيق. هنا انسخ التعليمات الجاهزة والصقها في أي محادثة مع Claude: فهي تعرف يومك وكلماتك وموقف اليوم.",
    }),
    h(
      "div",
      { class: "row wrap" },
      btn([icon("copy", 18), tr(ctx, { en: "Copy tutor prompt", ar: "انسخ تعليمات المعلّم" })], {
        class: "primary",
        onClick: async () => ctx.toast((await copyText(prompt)) ? { en: "Copied. Paste it into Claude.", ar: "تم النسخ. الصقه في Claude." } : { en: "Copy failed — select the text below.", ar: "فشل النسخ — حدّد النص أدناه." }, "ok"),
      }),
      h("a", { class: "btn ghost", href: "https://claude.ai/new", target: "_blank", rel: "noopener noreferrer" }, icon("external", 18), tr(ctx, { en: "Open Claude", ar: "افتح Claude" })),
      ARTIFACT_URL ? h("a", { class: "btn ghost", href: ARTIFACT_URL, target: "_blank", rel: "noopener noreferrer" }, icon("chat", 18), tr(ctx, { en: "Open the live tutor", ar: "افتح المعلّم المباشر" })) : null,
    ),
    h("details", { class: "prompt-preview" }, h("summary", null, tr(ctx, { en: "Show the prompt", ar: "اعرض التعليمات" })), h("pre", { tabindex: "0" }, prompt)),
  );
}

function liveChat(ctx: Ctx, day: Day, mode: TutorMode): HTMLElement {
  const key = `${day.n}:${mode}`;
  const turns = conversations.get(key) ?? [];
  conversations.set(key, turns);
  const acts = activities.get(key) ?? [];
  activities.set(key, acts);
  let controller: AbortController | null = null;

  const log = h("div", { class: "chat-log", "aria-live": "polite" });
  const status = h("div", { class: "chat-status muted" });
  const input = h("textarea", { id: `chat-${day.n}-${mode}`, class: "chat-input", rows: 2, lang: "ru", dir: "auto", placeholder: tr(ctx, { en: "Write in Russian (or ask in English/Arabic)…", ar: "اكتب بالروسية (أو اسأل بالإنجليزية/العربية)…" }), "aria-label": tr(ctx, { en: "Message to the tutor", ar: "رسالة إلى المعلّم" }) });
  input.value = unsent.get(key) ?? "";
  input.addEventListener("input", () => unsent.set(key, input.value));
  const send = btn([icon("right", 18), tr(ctx, { en: "Send", ar: "أرسل" })], { class: "primary" });
  const stop = btn([icon("stop", 18), tr(ctx, { en: "Stop", ar: "إيقاف" })], { class: "ghost", hidden: true, onClick: () => controller?.abort() });

  const bubble = (role: "user" | "assistant", text: string, hidden = false) =>
    hidden ? null : h("div", { class: `msg ${role}` }, h("div", { class: "msg-body", dir: "auto" }, mixed(text)), role === "assistant" ? h("div", { class: "msg-actions" }, btn([icon("speaker", 16)], { class: "ghost tiny", "aria-label": tr(ctx, { en: "Read aloud", ar: "اقرأ بصوت عالٍ" }), onClick: () => void ctx.speak(russianOnly(text)) })) : null);

  const redraw = () => {
    replace(
      log,
      turns.length === 0
        ? h("div", { class: "chat-empty" }, biCtx(ctx, { en: "Press Start and the tutor will begin. Every reply is written for your level.", ar: "اضغط «ابدأ» وسيبدأ المعلّم. كل ردّ مكتوب بمستواك." }))
        : [
            ...turns.flatMap((t, i) => [...acts.filter((a) => a.after === i).map((a) => activityNode(ctx, a)), bubble(t.role, t.content, i === 0 && t.content === KICKOFF[mode])]),
            ...acts.filter((a) => a.after >= turns.length).map((a) => activityNode(ctx, a)),
          ],
    );
    log.scrollTop = log.scrollHeight;
    startBtn.hidden = turns.length > 0;
  };

  const ask = async (message: string) => {
    const sample = ctx.caps.sample;
    if (!sample || controller) return;
    turns.push({ role: "user", content: message });
    while (turns.length > MAX_TURNS) {
      turns.splice(0, 2);
      // Activity lines follow their turns; those of dropped turns go too.
      for (const a of acts) a.after -= 2;
      acts.splice(0, acts.length, ...acts.filter((a) => a.after >= 0));
    }
    redraw();
    const live = h("div", { class: "msg assistant streaming" }, h("div", { class: "msg-body", dir: "auto" }, tr(ctx, { en: "Thinking…", ar: "يفكّر…" })));
    log.appendChild(live);
    log.scrollTop = log.scrollHeight;
    controller = new AbortController();
    send.disabled = true;
    stop.hidden = false;
    status.textContent = "";
    const signal = controller.signal;
    // What a tool did or offered appears above the reply as it happens.
    const show = (a: Activity) => {
      acts.push(a);
      log.insertBefore(activityNode(ctx, a), live);
      log.scrollTop = log.scrollHeight;
    };
    const host: ToolHost = {
      progress: () => ctx.store.progress,
      update: (fn) => ctx.store.update(fn),
      now: () => ctx.now(),
      offer: (offer) => show({ after: turns.length, offer }),
      log: (line) => show({ after: turns.length, log: line }),
      validRoute: (token) => routeToken(parseRoute(`#${token}`)) === token,
    };
    try {
      const toolCount = await toolsAvailable(sample);
      const options: SampleOptions = {
        signal,
        onText: ({ text: soFar }) => {
          const body = live.querySelector(".msg-body");
          if (body) replace(body, mixed(soFar));
          log.scrollTop = log.scrollHeight;
        },
      };
      // A call with tools is never cached and must not pass `cache`; a plain chat turn opts out of the cache.
      if (toolCount > 0) options.tools = sampleTools(host).slice(0, toolCount);
      else options.cache = false;
      const rules = rulesFor(ctx, day, mode, toolCount > 0);
      const { text } = await sample([{ role: "user", content: rules }, ...turns], options);
      turns.push({ role: "assistant", content: text });
    } catch (e) {
      const code = errorCode(e);
      const partial = partialText(e);
      if (partial) turns.push({ role: "assistant", content: partial });
      if (code !== "cancelled") status.textContent = tr(ctx, errorMessage(code));
    } finally {
      controller = null;
      send.disabled = false;
      stop.hidden = true;
      redraw();
      input.focus();
    }
  };

  send.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    unsent.delete(key);
    void ask(text);
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send.click();
    }
  });

  const startBtn = btn([icon("play", 18), tr(ctx, { en: "Start", ar: "ابدأ" })], { class: "primary", onClick: () => void ask(KICKOFF[mode]) });
  const resetBtn = btn([icon("repeat", 18), tr(ctx, { en: "New conversation", ar: "محادثة جديدة" })], {
    class: "ghost small",
    onClick: () => {
      controller?.abort();
      turns.length = 0;
      acts.length = 0;
      redraw();
    },
  });

  redraw();
  return h(
    "div",
    { class: "card chat" },
    log,
    status,
    h("div", { class: "chat-compose" }, input, h("div", { class: "row" }, startBtn, send, stop)),
    h("div", { class: "row between" }, keyboardFor(ctx, input), resetBtn),
  );
}

/** Keep only the Russian parts of a reply for reading aloud (the voice is Russian). */
export function russianOnly(text: string): string {
  return (text.match(/[А-Яа-яЁё́][А-Яа-яЁё́\s,.!?—–-]*/g) ?? []).join(" ").trim() || text;
}
