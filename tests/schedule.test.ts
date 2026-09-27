import { test } from "node:test";
import assert from "node:assert/strict";
import { addMinutes, currentStep, dailySteps, dateOfDay, dayNumber, kindOf, weekOf, validTime } from "../src/core/schedule.ts";
import { buildIcs, escapeIcsText, foldLine } from "../src/core/ics.ts";

const settings = { startDate: "2026-09-28", morningStart: "07:00", eveningStart: "20:00" };
const localNoon = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number) as [number, number, number];
  return new Date(y, m - 1, d, 12, 0);
};

test("dayNumber counts calendar days from the start date", () => {
  assert.equal(dayNumber("2026-09-28", localNoon("2026-09-27")), 0);
  assert.equal(dayNumber("2026-09-28", localNoon("2026-09-28")), 1);
  assert.equal(dayNumber("2026-09-28", localNoon("2026-10-04")), 7);
  assert.equal(dayNumber("2026-09-28", localNoon("2026-11-22")), 56);
  assert.equal(dayNumber("2026-09-28", localNoon("2026-11-23")), 57);
  assert.equal(dayNumber("2026-09-28", new Date(2026, 8, 28, 0, 5)), 1);
  assert.equal(dayNumber("2026-09-28", new Date(2026, 8, 28, 23, 55)), 1);
});

test("dateOfDay is the inverse of dayNumber, across month ends", () => {
  assert.equal(dateOfDay("2026-09-28", 1), "2026-09-28");
  assert.equal(dateOfDay("2026-09-28", 4), "2026-10-01");
  assert.equal(dateOfDay("2026-09-28", 56), "2026-11-22");
});

test("weeks and day kinds follow the seven-day pattern", () => {
  assert.deepEqual([1, 7, 8, 56].map(weekOf), [1, 1, 2, 8]);
  assert.deepEqual([5, 6, 7, 8].map(kindOf), ["lesson", "immersion", "review", "lesson"]);
});

test("the seven daily steps get consecutive start times", () => {
  const steps = dailySteps(settings);
  assert.deepEqual(
    steps.map((s) => `${s.id}@${s.start}+${s.minutes}`),
    ["m-review@07:00+15", "m-listen@07:15+15", "m-preview@07:30+15", "e-lesson@20:00+25", "e-drills@20:25+20", "e-tutor@20:45+20", "e-journal@21:05+10"],
  );
});

test("addMinutes wraps past midnight and validTime rejects bad times", () => {
  assert.equal(addMinutes("23:50", 20), "00:10");
  assert.equal(addMinutes("07:45", 15), "08:00");
  assert.ok(validTime("06:30"));
  assert.ok(!validTime("24:00"));
  assert.ok(!validTime("7:5"));
});

test("currentStep finds the running step and the next one", () => {
  const steps = dailySteps(settings);
  const at = (h: number, m: number) => new Date(2026, 8, 28, h, m);
  assert.equal(currentStep(steps, at(7, 20)).current?.id, "m-listen");
  assert.equal(currentStep(steps, at(7, 20)).next?.id, "m-preview");
  assert.equal(currentStep(steps, at(12, 0)).current, null);
  assert.equal(currentStep(steps, at(12, 0)).next?.id, "e-lesson");
  assert.equal(currentStep(steps, at(22, 0)).next, null);
});

const days = Array.from({ length: 56 }, (_, i) => ({ n: i + 1, title: `Урок ${i + 1}; тема, «кавычки»` }));
const ics = buildIcs({ ...settings, days, appUrl: "https://example.org/app/", now: new Date(Date.UTC(2026, 8, 27, 12, 0, 0)) });

test("the calendar has two events per day with floating local times", () => {
  assert.equal((ics.match(/BEGIN:VEVENT/g) ?? []).length, 112);
  assert.equal((ics.match(/END:VEVENT/g) ?? []).length, 112);
  assert.ok(ics.includes("DTSTART:20260928T070000\r\n"));
  assert.ok(ics.includes("DTEND:20260928T074500\r\n"));
  assert.ok(ics.includes("DTSTART:20261122T200000\r\n"));
  assert.ok(ics.includes("DTEND:20261122T211500\r\n"));
  assert.ok(ics.includes("DTSTAMP:20260927T120000Z\r\n"));
  assert.ok(ics.startsWith("BEGIN:VCALENDAR\r\n") && ics.endsWith("END:VCALENDAR\r\n"));
});

test("every line ends in CRLF and fits in 75 octets", () => {
  const lines = ics.split("\r\n");
  assert.equal(lines.at(-1), "");
  assert.ok(!ics.replace(/\r\n/g, "").includes("\n"), "bare LF found");
  for (const line of lines) assert.ok(Buffer.byteLength(line, "utf8") <= 75, `too long: ${line}`);
});

test("text values are escaped and folded lines unfold to the original", () => {
  assert.equal(escapeIcsText("a,b;c\\d\ne"), "a\\,b\\;c\\\\d\\ne");
  const long = "DESCRIPTION:" + "Приве́т, ".repeat(30);
  const folded = foldLine(long);
  assert.equal(folded.replace(/\r\n /g, ""), long);
  for (const part of folded.split("\r\n")) assert.ok(Buffer.byteLength(part, "utf8") <= 75);
  const unfolded = ics.replace(/\r\n /g, "");
  assert.ok(unfolded.includes("Урок 1\\; тема\\, «кавычки»"));
  assert.ok(unfolded.includes("https://example.org/app/#day-1"));
});
