// The exercise runner used by practice, worksheets and tests: one item at a time, immediate
// feedback with the bilingual "why", a score at the end and a replay that reshuffles.

import type { Bi, Exercise } from "../../content/types.ts";
import { checkOrder, checkTyped, shuffle } from "../../core/answers.ts";
import { hasCyrillic, splitBilingual } from "../../core/text.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h, replace } from "../dom.ts";
import { biCtx, btn, icon, mixed, playButtons, ring, ru } from "../ui.ts";
import { keyboardFor } from "./keyboard.ts";

export type RunnerOptions = {
  items: readonly Exercise[];
  seed: number;
  /** Called once per completed round with the share of correct answers. */
  onDone?: (score: number, correct: number, total: number) => void;
  /** Called once per answered item ("almost" counts as right, as in the score). */
  onAnswer?: (item: Exercise, ok: boolean) => void;
  doneLabel?: Bi;
};

type Result = { ok: boolean; close: boolean };

/** An answer option. "English · Arabic" options follow the learner's language setting, one line each. */
function optionText(ctx: Ctx, s: string): Node {
  const pair = splitBilingual(s);
  if (pair) return biCtx(ctx, pair, "span");
  return hasCyrillic(s) && !/[A-Za-z]/.test(s) ? ru(s) : mixed(s);
}

export function exerciseRunner(ctx: Ctx, opts: RunnerOptions): HTMLElement {
  const root = h("div", { class: "runner" });
  let round = 0;

  const start = () => {
    const items = shuffle(opts.items, opts.seed + round * 101);
    const results: Result[] = [];
    let index = 0;

    const renderItem = () => {
      const ex = items[index];
      if (!ex) return renderEnd();
      const progress = h("div", { class: "runner-top" }, h("span", { class: "runner-count" }, `${index + 1} / ${items.length}`), h("div", { class: "bar" }, h("span", { style: `width:${(index / items.length) * 100}%` })));
      const feedback = h("div", { class: "feedback", "aria-live": "polite" });
      const next = btn([tr(ctx, index + 1 === items.length ? { en: "See results", ar: "النتيجة" } : { en: "Next", ar: "التالي" }), icon("right", 18)], {
        class: "primary",
        hidden: true,
        onClick: () => {
          index++;
          renderItem();
        },
      });
      const finish = (res: Result, reveal: Node | null) => {
        results[index] = res;
        ctx.sfx(res.ok || res.close ? "ok" : "bad");
        opts.onAnswer?.(ex, res.ok || res.close);
        replace(
          feedback,
          h(
            "div",
            { class: `verdict ${res.ok ? "good" : res.close ? "close" : "bad"}` },
            icon(res.ok || res.close ? "check" : "x", 20),
            h("strong", null, tr(ctx, res.ok ? { en: "Correct", ar: "صحيح" } : res.close ? { en: "Almost — check the spelling", ar: "قريب جدًا — انتبه للإملاء" } : { en: "Not quite", ar: "ليس تمامًا" })),
          ),
          reveal ? h("div", { class: "reveal" }, reveal) : null,
          h("div", { class: "why" }, biCtx(ctx, ex.why)),
        );
        next.hidden = false;
        next.focus();
      };
      replace(root, h("div", { class: "card runner-card" }, progress, renderExercise(ctx, ex, opts.seed + index, finish), feedback, h("div", { class: "runner-actions" }, next)));
    };

    const renderEnd = () => {
      const correct = results.filter((r) => r.ok || r.close).length;
      const score = items.length ? correct / items.length : 0;
      ctx.sfx("done");
      opts.onDone?.(score, correct, items.length);
      const missed = items.map((ex, i) => ({ ex, r: results[i] })).filter((x) => x.r && !x.r.ok && !x.r.close);
      replace(
        root,
        h(
          "div",
          { class: "card runner-end" },
          ring(score, 96, `${Math.round(score * 100)}%`),
          h("h3", null, tr(ctx, score >= 0.8 ? { en: "Excellent work", ar: "عمل ممتاز" } : score >= 0.5 ? { en: "Good progress", ar: "تقدّم جيد" } : { en: "Keep practising", ar: "واصل التدريب" })),
          h("p", { class: "muted" }, tr(ctx, { en: `${correct} of ${items.length} correct`, ar: `${correct} من ${items.length} صحيحة` })),
          missed.length
            ? h(
                "details",
                { class: "missed" },
                h("summary", null, tr(ctx, { en: `Review ${missed.length} mistakes`, ar: `راجع ${missed.length} من الأخطاء` })),
                h("ul", null, missed.map(({ ex }) => h("li", null, biCtx(ctx, ex.prompt, "div", "missed-q"), h("div", { class: "missed-a" }, answerNode(ctx, ex))))),
              )
            : null,
          h(
            "div",
            { class: "runner-actions" },
            btn([icon("repeat", 18), tr(ctx, { en: "Try again", ar: "حاول مرة أخرى" })], {
              class: "primary",
              onClick: () => {
                round++;
                start();
              },
            }),
          ),
        ),
      );
    };

    renderItem();
  };

  start();
  return root;
}

function answerNode(ctx: Ctx, ex: Exercise): Node {
  switch (ex.kind) {
    case "choice":
      return optionText(ctx, ex.options[ex.answer] ?? "");
    case "fill":
      return ru(ex.ru.replace("___", ex.answers[0] ?? ""));
    case "order":
    case "translate":
      return ru(ex.answers[0] ?? "");
  }
}

function renderExercise(ctx: Ctx, ex: Exercise, seed: number, finish: (r: Result, reveal: Node | null) => void): HTMLElement {
  const box = h("div", { class: `ex ex-${ex.kind}` }, h("div", { class: "ex-prompt" }, biCtx(ctx, ex.prompt)));
  let answered = false;
  const once = (fn: () => void) => () => {
    if (answered) return;
    answered = true;
    fn();
  };

  if (ex.kind === "choice") {
    if (ex.ru) {
      if (ex.listen) {
        const hiddenText = h("span", { class: "listen-text", hidden: true }, ru(ex.ru));
        box.appendChild(h("div", { class: "listen-row" }, btn([icon("speaker", 22), tr(ctx, { en: "Play", ar: "تشغيل" })], { class: "primary big", onClick: () => void ctx.speak(ex.ru ?? "") }), hiddenText));
        box.dataset["reveal"] = "listen";
        setTimeout(() => void ctx.speak(ex.ru ?? ""), 250);
      } else {
        box.appendChild(h("div", { class: "ex-ru" }, ru(ex.ru, "big"), playButtons(ctx, ex.ru)));
      }
    }
    const order = shuffle(ex.options.map((_, i) => i), seed);
    const buttons = order.map((i) =>
      h(
        "button",
        {
          type: "button",
          class: "option",
          onClick: once(() => {
            for (const b of buttons) b.disabled = true;
            buttons[order.indexOf(ex.answer)]?.classList.add("right");
            if (i !== ex.answer) buttons[order.indexOf(i)]?.classList.add("wrong");
            box.querySelector<HTMLElement>(".listen-text")?.removeAttribute("hidden");
            finish({ ok: i === ex.answer, close: false }, null);
          }),
        },
        optionText(ctx, ex.options[i] ?? ""),
      ),
    );
    box.appendChild(h("div", { class: "options" }, buttons));
    return box;
  }

  if (ex.kind === "order") {
    const pool = h("div", { class: "chips pool" });
    const line = h("div", { class: "chips line", "aria-label": tr(ctx, { en: "Your sentence", ar: "جملتك" }) });
    const chosen: string[] = [];
    const renderChips = (available: string[]) => {
      replace(
        pool,
        available.map((t, k) =>
          h("button", { type: "button", class: "chip-btn", onClick: () => { chosen.push(t); available.splice(k, 1); renderChips(available); } }, ru(t)),
        ),
      );
      replace(
        line,
        chosen.length
          ? chosen.map((t, k) =>
              h("button", { type: "button", class: "chip-btn in", onClick: () => { if (answered) return; available.push(t); chosen.splice(k, 1); renderChips(available); } }, ru(t)),
            )
          : h("span", { class: "muted" }, tr(ctx, { en: "Tap the words in order", ar: "اضغط على الكلمات بالترتيب" })),
      );
    };
    renderChips(shuffle(ex.tokens, seed));
    const check = btn(tr(ctx, { en: "Check", ar: "تحقّق" }), {
      class: "primary",
      onClick: once(() => {
        check.disabled = true;
        const ok = checkOrder(chosen, ex.answers);
        const answer = ex.answers[0] ?? "";
        finish({ ok, close: false }, h("span", null, ru(answer), playButtons(ctx, answer)));
      }),
    });
    box.append(line, pool, h("div", { class: "ex-actions" }, check));
    return box;
  }

  // fill and translate: a typed answer
  const input = h("input", { type: "text", class: "answer", lang: "ru", dir: "ltr", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": tr(ctx, { en: "Your answer", ar: "إجابتك" }) });
  if (ex.kind === "fill") {
    const [before = "", after = ""] = ex.ru.split("___");
    box.appendChild(h("div", { class: "ex-ru fill-line" }, ru(before), input, ru(after)));
  } else {
    box.appendChild(h("div", { class: "ex-ru" }, input));
  }
  const check = btn(tr(ctx, { en: "Check", ar: "تحقّق" }), {
    class: "primary",
    onClick: once(() => {
      check.disabled = true;
      input.readOnly = true;
      const r = checkTyped(input.value, ex.answers);
      const full = ex.kind === "fill" ? ex.ru.replace("___", r.ok ? input.value : (ex.answers[0] ?? "")) : r.best;
      finish({ ok: r.ok, close: r.close }, h("span", null, ru(ex.kind === "fill" ? ex.ru.replace("___", ex.answers[0] ?? "") : r.best), playButtons(ctx, full)));
    }),
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      check.click();
    }
  });
  box.append(h("div", { class: "ex-actions" }, check, keyboardFor(ctx, input)));
  return box;
}
