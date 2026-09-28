// The AI tutor. Inside claude.ai it talks through the `sample` capability (on the learner's own
// Claude account); on the web it hands over the exact same prompt to paste into any Claude chat.

import type { Day } from "../../content/types.ts";
import { wordsUpTo } from "../../core/course.ts";
import { buildTutorRules } from "../../core/tutorPrompt.ts";
import type { TutorMode } from "../../core/tutorPrompt.ts";
import { errorCode, partialText } from "../claude.ts";
import type { SampleTurn } from "../claude.ts";
import type { Ctx } from "../context.ts";
import { explainOf, tr } from "../context.ts";
import { h, replace } from "../dom.ts";
import { ARTIFACT_URL } from "../env.ts";
import { biCtx, btn, copyText, icon, mixed } from "../ui.ts";
import { keyboardFor } from "./keyboard.ts";

/** Conversations, and any unsent message, survive re-renders and navigation for the life of the page. */
const conversations = new Map<string, SampleTurn[]>();
const unsent = new Map<string, string>();

const KICKOFF: Record<TutorMode, string> = {
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

export function tutorPanel(ctx: Ctx, day: Day, mode: TutorMode): HTMLElement {
  const rules = buildTutorRules({ day, known: wordsUpTo(day.n), explain: explainOf(ctx) }, mode);
  const sample = ctx.caps.sample;
  return sample ? liveChat(ctx, day, mode, rules) : handoff(ctx, rules, mode);
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

function liveChat(ctx: Ctx, day: Day, mode: TutorMode, rules: string): HTMLElement {
  const key = `${day.n}:${mode}`;
  const turns = conversations.get(key) ?? [];
  conversations.set(key, turns);
  let controller: AbortController | null = null;

  const log = h("div", { class: "chat-log", "aria-live": "polite" });
  const status = h("div", { class: "chat-status muted" });
  const input = h("textarea", { id: `chat-${day.n}-${mode}`, class: "chat-input", rows: 2, lang: "ru", placeholder: tr(ctx, { en: "Write in Russian (or ask in English/Arabic)…", ar: "اكتب بالروسية (أو اسأل بالإنجليزية/العربية)…" }), "aria-label": tr(ctx, { en: "Message to the tutor", ar: "رسالة إلى المعلّم" }) });
  input.value = unsent.get(key) ?? "";
  input.addEventListener("input", () => unsent.set(key, input.value));
  const send = btn([icon("right", 18), tr(ctx, { en: "Send", ar: "أرسل" })], { class: "primary" });
  const stop = btn([icon("stop", 18), tr(ctx, { en: "Stop", ar: "إيقاف" })], { class: "ghost", hidden: true, onClick: () => controller?.abort() });

  const bubble = (role: "user" | "assistant", text: string, hidden = false) =>
    hidden ? null : h("div", { class: `msg ${role}` }, h("div", { class: "msg-body" }, mixed(text)), role === "assistant" ? h("div", { class: "msg-actions" }, btn([icon("speaker", 16)], { class: "ghost tiny", "aria-label": tr(ctx, { en: "Read aloud", ar: "اقرأ بصوت عالٍ" }), onClick: () => void ctx.speak(russianOnly(text)) })) : null);

  const redraw = () => {
    replace(
      log,
      turns.length === 0
        ? h("div", { class: "chat-empty" }, biCtx(ctx, { en: "Press Start and the tutor will begin. Every reply is written for your level.", ar: "اضغط «ابدأ» وسيبدأ المعلّم. كل ردّ مكتوب بمستواك." }))
        : turns.map((t, i) => bubble(t.role, t.content, i === 0 && t.content === KICKOFF[mode])),
    );
    log.scrollTop = log.scrollHeight;
  };

  const ask = async (message: string) => {
    const sample = ctx.caps.sample;
    if (!sample || controller) return;
    turns.push({ role: "user", content: message });
    while (turns.length > MAX_TURNS) turns.splice(0, 2);
    redraw();
    const live = h("div", { class: "msg assistant streaming" }, h("div", { class: "msg-body" }, tr(ctx, { en: "Thinking…", ar: "يفكّر…" })));
    log.appendChild(live);
    log.scrollTop = log.scrollHeight;
    controller = new AbortController();
    send.disabled = true;
    stop.hidden = false;
    status.textContent = "";
    try {
      const { text } = await sample([{ role: "user", content: rules }, ...turns], {
        cache: false,
        signal: controller.signal,
        onText: ({ text: soFar }) => {
          const body = live.querySelector(".msg-body");
          if (body) replace(body, mixed(soFar));
          log.scrollTop = log.scrollHeight;
        },
      });
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
      redraw();
    },
  });

  redraw();
  return h(
    "div",
    { class: "card chat" },
    log,
    status,
    h("div", { class: "chat-compose" }, input, h("div", { class: "row" }, turns.length === 0 ? startBtn : null, send, stop)),
    h("div", { class: "row between" }, keyboardFor(ctx, input), resetBtn),
  );
}

/** Keep only the Russian parts of a reply for reading aloud (the voice is Russian). */
export function russianOnly(text: string): string {
  return (text.match(/[А-Яа-яЁё́][А-Яа-яЁё́\s,.!?—–-]*/g) ?? []).join(" ").trim() || text;
}
