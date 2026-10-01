// The coach on screen: the "Next move" card on Today and the header button, both driven by
// planMoves(). A move opens a screen or starts a guided session.

import { planMoves } from "../../core/coach.ts";
import type { Move, MoveKind } from "../../core/coach.ts";
import { arCount } from "../../core/text.ts";
import { weakWords } from "../../core/weak.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h } from "../dom.ts";
import { biCtx, btn, icon } from "../ui.ts";
import type { IconName } from "../ui.ts";

const KIND_ICON: Record<MoveKind, IconName> = {
  step: "play",
  review: "cards",
  catchup: "calendar",
  session: "clock",
  weak: "repeat",
  test: "check",
  setup: "gear",
  done: "check",
};

export function currentMoves(ctx: Ctx): Move[] {
  const p = ctx.store.progress;
  return planMoves({ progress: p, now: new Date(ctx.now()), weakCount: weakWords(p, 99).length });
}

/** Do what a move says: open its screen, or start its block as a guided session. */
export function runMove(ctx: Ctx, move: Move): void {
  const session = move.action.match(/^session-(morning|evening)$/);
  if (session) ctx.session.start(session[1] === "morning" ? "morning" : "evening");
  else ctx.navigate(move.action);
}

const minutesLabel = (ctx: Ctx, m: number): string => (m ? tr(ctx, { en: `${m} min`, ar: arCount(m, { one: "دقيقة", two: "دقيقتان", few: "دقائق" }) }) : "");

export function coachCard(ctx: Ctx, moves: readonly Move[]): HTMLElement | null {
  const [first, ...rest] = moves;
  if (!first) return null;
  const done = first.kind === "done";
  return h(
    "section",
    { class: `card coach${done ? " coach-done" : ""}`, "aria-labelledby": "coach-title" },
    h(
      "div",
      { class: "coach-main" },
      h("p", { class: "eyebrow" }, icon(done ? "check" : "bolt", 16), tr(ctx, done ? { en: "Well done", ar: "أحسنت" } : { en: "Your next move", ar: "خطوتك التالية" })),
      h("h2", { id: "coach-title", class: "coach-title" }, tr(ctx, first.title)),
      h("div", { class: "coach-why" }, biCtx(ctx, first.why)),
      h(
        "div",
        { class: "row wrap coach-actions" },
        btn([icon(KIND_ICON[first.kind], 18), tr(ctx, done ? { en: "Preview tomorrow", ar: "اطّلع على الغد" } : { en: "Start", ar: "ابدأ" })], { class: "primary", onClick: () => runMove(ctx, first) }),
        first.minutes ? h("span", { class: "coach-min" }, icon("clock", 16), minutesLabel(ctx, first.minutes)) : null,
      ),
    ),
    rest.length
      ? h(
          "div",
          { class: "coach-more" },
          h("p", { class: "coach-then" }, tr(ctx, { en: "Then", ar: "بعد ذلك" })),
          h(
            "ul",
            { class: "move-list" },
            rest.slice(0, 3).map((m) =>
              h(
                "li",
                null,
                h(
                  "button",
                  { type: "button", class: "move", onClick: () => runMove(ctx, m), title: tr(ctx, m.why) },
                  h("span", { class: "move-icon" }, icon(KIND_ICON[m.kind], 18)),
                  h("span", { class: "move-title" }, tr(ctx, m.title)),
                  h("span", { class: "move-min" }, minutesLabel(ctx, m.minutes)),
                  icon("right", 16),
                ),
              ),
            ),
          ),
        )
      : null,
  );
}

/** The header's next-move button (hidden on Today, which shows the full card, and during a session). */
export function nextMoveButton(ctx: Ctx): HTMLElement | null {
  if (ctx.route.view === "today" || ctx.session.active()) return null;
  const move = currentMoves(ctx).find((m) => m.kind !== "done");
  if (!move) return null;
  const label = tr(ctx, move.title);
  return h(
    "button",
    { type: "button", class: "next-move", title: `${tr(ctx, { en: "Next move", ar: "الخطوة التالية" })}: ${label} · ${tr(ctx, move.why)}`, "aria-label": `${tr(ctx, { en: "Next move", ar: "الخطوة التالية" })}: ${label}`, onClick: () => runMove(ctx, move) },
    icon("bolt", 18),
    h("span", { class: "next-move-label" }, label),
  );
}
