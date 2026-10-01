// What is coming: cards due on each of the next study days, and this course week's minutes.

import type { Progress } from "./progress.ts";
import { COURSE_DAYS, STEP_PLAN, dateOfDay, dayNumber, isoDate, weekOf } from "./schedule.ts";
import { studyDayStart } from "./srs.ts";

export type ForecastDay = { date: string; n: number };

/** The start of the study day `i` days after the one that begins at `start` (DST-safe). */
function shift(start: number, i: number): number {
  const d = new Date(start);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + i, d.getHours()).getTime();
}

/** Cards due on each of the next `days` study days (days begin at 04:00); overdue cards count today. */
export function dueForecast(p: Progress, now: number, days = 7): ForecastDay[] {
  const start = studyDayStart(now);
  const starts = Array.from({ length: days + 1 }, (_, i) => shift(start, i));
  const out: ForecastDay[] = starts.slice(0, days).map((s) => ({ date: isoDate(new Date(s)), n: 0 }));
  for (const card of Object.values(p.cards)) {
    let i = 0;
    while (i < days && card.due >= (starts[i + 1] ?? Infinity)) i++;
    const slot = out[i];
    if (slot && i < days) slot.n++;
  }
  return out;
}

export const DAILY_MINUTES = STEP_PLAN.reduce((sum, s) => sum + s.minutes, 0);

export type WeekMinutes = { week: number; minutes: number; plan: number; day: number };

/** Minutes logged in the current course week (day `day` of 7) against the plan of 7 × the daily steps. */
export function weekMinutes(p: Progress, startDate: string, now: Date): WeekMinutes {
  const n = Math.min(Math.max(dayNumber(startDate, now), 1), COURSE_DAYS);
  const week = weekOf(n);
  const first = (week - 1) * 7 + 1;
  let minutes = 0;
  for (let d = first; d < first + 7; d++) minutes += p.studyLog[dateOfDay(startDate, d)] ?? 0;
  return { week, minutes, plan: 7 * DAILY_MINUTES, day: n - first + 1 };
}
