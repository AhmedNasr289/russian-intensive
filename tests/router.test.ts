import { test } from "node:test";
import assert from "node:assert/strict";
import { navTokenOf, parseRoute, routeToken } from "../src/app/router.ts";

test("plain view tokens parse, with or without the hash", () => {
  assert.deepEqual(parseRoute(""), { view: "today" });
  assert.deepEqual(parseRoute("#today"), { view: "today" });
  assert.deepEqual(parseRoute("#review"), { view: "review" });
  assert.deepEqual(parseRoute("settings"), { view: "settings" });
});

test("day routes carry the number and an optional section", () => {
  assert.deepEqual(parseRoute("#day-12"), { view: "day", n: 12, section: null });
  assert.deepEqual(parseRoute("#day-12-grammar"), { view: "day", n: 12, section: "grammar" });
  assert.deepEqual(parseRoute("#day-3-bogus"), { view: "day", n: 3, section: null });
});

test("tutor routes carry the mode", () => {
  assert.deepEqual(parseRoute("#tutor"), { view: "tutor", mode: null });
  assert.deepEqual(parseRoute("#tutor-roleplay"), { view: "tutor", mode: "roleplay" });
  assert.deepEqual(parseRoute("#tutor-sing"), { view: "tutor", mode: null });
});

test("unknown or out-of-range routes fall back to today", () => {
  for (const bad of ["#nope", "#day-0", "#day-57", "#day-x", "#day-12-grammar-extra", "#key=value"]) {
    assert.deepEqual(parseRoute(bad), { view: "today" }, bad);
  }
});

test("a lesson day highlights the course in the navigation; other views highlight themselves", () => {
  assert.equal(navTokenOf(parseRoute("#day-12-grammar")), "course");
  assert.equal(navTokenOf(parseRoute("#tutor-roleplay")), "tutor");
  assert.equal(navTokenOf(parseRoute("#review")), "review");
  assert.equal(navTokenOf(parseRoute("")), "today");
});

test("tokens round-trip and only use characters claude.ai forwards", () => {
  const routes = [
    { view: "today" },
    { view: "course" },
    { view: "day", n: 5, section: null },
    { view: "day", n: 56, section: "test" },
    { view: "tutor", mode: "explain" },
    { view: "tutor", mode: null },
  ] as const;
  for (const r of routes) {
    const token = routeToken(r);
    assert.match(token, /^[A-Za-z0-9._~-]+$/);
    assert.deepEqual(parseRoute(`#${token}`), r);
  }
});
