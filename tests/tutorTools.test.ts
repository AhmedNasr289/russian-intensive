import { test } from "node:test";
import assert from "node:assert/strict";
import { addCards, applyReview, defaultProgress, recordMiss, toggleStep } from "../src/core/progress.ts";
import type { Progress } from "../src/core/progress.ts";
import { TUTOR_TOOLS, learnerStatus, sampleTools, statusText } from "../src/core/tutorTools.ts";
import type { Offer, ToolHost, ToolLog } from "../src/core/tutorTools.ts";
import { buildTutorRules } from "../src/core/tutorPrompt.ts";
import { getDay, wordsUpTo } from "../src/core/course.ts";

process.env.TZ = "UTC";
const NOW = Date.parse("2026-10-01T19:00:00Z"); // day 4

function host(p0: Progress) {
  let p = p0;
  const offers: Offer[] = [];
  const logs: ToolLog[] = [];
  const h: ToolHost = {
    progress: () => p,
    update: (fn) => {
      p = fn(p);
    },
    now: () => NOW,
    offer: (o) => offers.push(o),
    log: (l) => logs.push(l),
    validRoute: (t) => ["today", "review", "weak", "day-4-grammar", "word-d2-04"].includes(t),
  };
  return { h, offers, logs, get: () => p };
}
const tool = (name: string) => {
  const t = TUTOR_TOOLS.find((x) => x.name === name);
  if (!t) throw new Error(`no tool ${name}`);
  return t;
};

function sampleProgress(): Progress {
  let p = addCards(defaultProgress(NOW), ["d1-01", "d2-04", "d3-03"], NOW - 86_400_000);
  p = applyReview(p, "d1-01", 3, NOW - 3600_000); // Easy: not due again for days
  p = recordMiss(p, "d3-03", NOW - 60_000);
  p = toggleStep(p, 4, "m-review", NOW);
  return p;
}

test("the learner status names the day, the deck, today's steps and the weak words", () => {
  const s = learnerStatus(sampleProgress(), new Date(NOW));
  assert.equal(s.day, 4);
  assert.equal(s.title, "Introductions");
  assert.equal(s.level, "A0");
  assert.equal(s.deck, 3);
  assert.equal(s.due, 2);
  assert.equal(s.stepsDone, 1);
  assert.deepEqual(s.missedDays, [1, 2, 3]);
  assert.equal(s.weak[0]?.ru, "спаси́бо");
  const text = statusText(s);
  assert.match(text, /Day 4 of 56/);
  assert.match(text, /спаси́бо \(thank you, missed 1x\)/);
});

test("a word that is only hard says so in the status", () => {
  const p = sampleProgress();
  const card = p.cards["d2-04"];
  if (!card) throw new Error("no card");
  const hard = { ...p, cards: { ...p.cards, "d2-04": { ...card, phase: "review" as const, ease: 2.2, due: NOW + 86_400_000 } } };
  assert.match(statusText(learnerStatus(hard, new Date(NOW))), /приве́т \(hi, hello \(informal\), graded hard\)/);
});

test("find_word returns course words with their day and deck state", () => {
  const { h } = host(sampleProgress());
  const found = tool("find_word").run({ query: "привет" }, h) as Array<{ id: string; day: number; inDeck: boolean }>;
  assert.equal(found[0]?.id, "d2-04");
  assert.equal(found[0]?.day, 2);
  assert.equal(found[0]?.inDeck, true);
  assert.throws(() => tool("find_word").run({}, h), /query/);
});

test("add_words_to_deck adds course words only, at most ten, and its undo takes back only what it added", () => {
  const { h, logs, get } = host(sampleProgress());
  const ids = ["d1-01", "d99-01", ...Array.from({ length: 12 }, (_, i) => `d10-${String(i + 1).padStart(2, "0")}`)];
  const r = tool("add_words_to_deck").run({ ids }, h) as { added: string[]; alreadyIn: string[]; unknown: string[]; skipped: number };
  assert.equal(r.added.length, 10);
  assert.deepEqual(r.alreadyIn, ["d1-01"]);
  assert.deepEqual(r.unknown, ["d99-01"]);
  assert.equal(r.skipped, 2);
  assert.equal(Object.keys(get().cards).length, 13);
  assert.equal(logs.length, 1);
  logs[0]?.undo?.();
  assert.deepEqual(Object.keys(get().cards).sort(), ["d1-01", "d2-04", "d3-03"]);
  assert.throws(() => tool("add_words_to_deck").run({ ids: "nope" }, h), /ids/);
});

test("record_mistake finds the word by id or by its Russian, and refuses anything else", () => {
  const { h, get, logs } = host(sampleProgress());
  tool("record_mistake").run({ word: "d2-04", note: "stress" }, h);
  tool("record_mistake").run({ word: "Спаси́бо!" }, h);
  assert.equal(get().misses["d2-04"]?.n, 1);
  assert.equal(get().misses["d3-03"]?.n, 2);
  assert.equal(logs.length, 2);
  logs[0]?.undo?.();
  assert.equal(get().misses["d2-04"], undefined);
  assert.throws(() => tool("record_mistake").run({ word: "абракадабра" }, h), /not a course word/);
});

test("suggest_screen only offers a valid screen; it never moves the learner", () => {
  const { h, offers } = host(sampleProgress());
  tool("suggest_screen").run({ token: "#day-4-grammar", label: "Day 4 grammar" }, h);
  assert.deepEqual(offers, [{ kind: "screen", token: "day-4-grammar", label: "Day 4 grammar" }]);
  assert.throws(() => tool("suggest_screen").run({ token: "settings-advanced", label: "x" }, h), /not a screen/);
  tool("suggest_weak_drill").run({}, h);
  assert.deepEqual(offers.at(-1), { kind: "drill" });
});

test("the coach rules mention the tools only when they are on, and carry the status", () => {
  const day = getDay(4);
  if (!day) throw new Error("no day 4");
  const base = { day, known: wordsUpTo(4), explain: "both" as const, status: "Day 4 of 56; 2 cards due." };
  const withTools = buildTutorRules(base, "coach", { tools: true });
  const without = buildTutorRules(base, "coach");
  assert.match(withTools, /suggest_screen/);
  assert.doesNotMatch(without, /suggest_screen/);
  assert.match(without, /2 cards due/);
});

test("a model calling the page tools changes the learner's state through the adapter", async () => {
  const { h, get, offers } = host(sampleProgress());
  const tools = sampleTools(h);
  assert.deepEqual(tools.map((t) => t.name).sort(), TUTOR_TOOLS.map((t) => t.name).sort());
  // A stand-in for claude.ai's sample(): it calls two tools, like Claude would, then answers.
  const fakeSample = async (_input: unknown, opts: { tools: typeof tools }) => {
    const call = (name: string, input: Record<string, unknown>) => opts.tools.find((t) => t.name === name)?.execute(input, { signal: new AbortController().signal });
    const status = (await call("get_learner_status", {})) as { due: number };
    await call("add_words_to_deck", { ids: ["d4-01", "d4-02"] });
    await call("suggest_screen", { token: "review", label: "Review now" });
    return { text: `You have ${status.due} cards due.`, truncated: false };
  };
  const reply = await fakeSample([], { tools });
  assert.equal(reply.text, "You have 2 cards due.");
  assert.ok(get().cards["d4-01"] && get().cards["d4-02"]);
  assert.equal(offers[0]?.kind, "screen");
  const bad = tools.find((t) => t.name === "record_mistake");
  assert.throws(() => bad?.execute({ word: 42 }, { signal: new AbortController().signal }), /not a course word/, "a bad input throws so Claude reads the error");
});
