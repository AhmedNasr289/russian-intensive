// iCalendar (RFC 5545) export of the study plan: a morning and an evening event for each of the
// 56 days, titled with that day's lesson. Times are "floating" (no time zone), so any calendar
// shows them at the same wall-clock time wherever the learner is.

import { BLOCK_MINUTES, STEP_PLAN, parseISODate } from "./schedule.ts";
import type { Block } from "./schedule.ts";

export type IcsDay = { n: number; title: string };

export type IcsOptions = {
  startDate: string;
  morningStart: string;
  eveningStart: string;
  days: readonly IcsDay[];
  /** Base URL of the app; each event links to `<appUrl>#day-<n>`. */
  appUrl: string;
  now: Date;
};

const pad = (n: number, w = 2) => String(n).padStart(w, "0");
const utf8 = new TextEncoder();

export function escapeIcsText(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}

/** Folds a content line so no physical line exceeds 75 octets, never splitting a UTF-8 character. */
export function foldLine(line: string): string {
  const parts: string[] = [];
  let current = "";
  let bytes = 0;
  for (const ch of line) {
    const size = utf8.encode(ch).length;
    const limit = parts.length === 0 ? 75 : 74; // continuation lines start with one space
    if (bytes + size > limit) {
      parts.push(current);
      current = "";
      bytes = 0;
    }
    current += ch;
    bytes += size;
  }
  parts.push(current);
  return parts.join("\r\n ");
}

/** Floating local date-time `start` + `minutes`, as YYYYMMDDTHHMMSS. */
function floating(dateISO: string, hhmm: string, plusMinutes = 0): string {
  const { y, m, d } = parseISODate(dateISO);
  const [h, mi] = hhmm.split(":").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d, h ?? 0, (mi ?? 0) + plusMinutes));
  return `${t.getUTCFullYear()}${pad(t.getUTCMonth() + 1)}${pad(t.getUTCDate())}T${pad(t.getUTCHours())}${pad(t.getUTCMinutes())}00`;
}

function utcStamp(d: Date): string {
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
}

function addDays(dateISO: string, days: number): string {
  const { y, m, d } = parseISODate(dateISO);
  const t = new Date(Date.UTC(y, m - 1, d + days));
  return `${t.getUTCFullYear()}-${pad(t.getUTCMonth() + 1)}-${pad(t.getUTCDate())}`;
}

const BLOCK_LABEL: Record<Block, string> = { morning: "Morning", evening: "Evening" };

export function buildIcs(opts: IcsOptions): string {
  const stamp = utcStamp(opts.now);
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Russian in 56 Days//Study plan//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Russian in 56 Days",
  ];
  for (const day of opts.days) {
    const date = addDays(opts.startDate, day.n - 1);
    const url = `${opts.appUrl}#day-${day.n}`;
    for (const block of ["morning", "evening"] as const) {
      const start = block === "morning" ? opts.morningStart : opts.eveningStart;
      const minutes = BLOCK_MINUTES[block];
      const steps = STEP_PLAN.filter((s) => s.block === block)
        .map((s) => `• ${s.title.en} (${s.minutes} min)`)
        .join("\n");
      const description = `Day ${day.n}: ${day.title}\n\n${steps}\n\n${url}`;
      lines.push(
        "BEGIN:VEVENT",
        `UID:ru56-d${day.n}-${block}@russian-in-56-days`,
        `DTSTAMP:${stamp}`,
        `DTSTART:${floating(date, start)}`,
        `DTEND:${floating(date, start, minutes)}`,
        `SUMMARY:${escapeIcsText(`Russian · Day ${day.n} · ${BLOCK_LABEL[block]} (${minutes} min)`)}`,
        `DESCRIPTION:${escapeIcsText(description)}`,
        `URL:${url}`,
        "BEGIN:VALARM",
        "ACTION:DISPLAY",
        "TRIGGER:-PT5M",
        `DESCRIPTION:${escapeIcsText(`Russian: ${BLOCK_LABEL[block].toLowerCase()} session in 5 minutes`)}`,
        "END:VALARM",
        "END:VEVENT",
      );
    }
  }
  lines.push("END:VCALENDAR");
  return lines.map(foldLine).join("\r\n") + "\r\n";
}
