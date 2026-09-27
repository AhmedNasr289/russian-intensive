// The whole course, assembled from one file per week and sorted by day.

import type { Day } from "./types.ts";
import { WEEK_1 } from "./weeks/week1.ts";
import { WEEK_2 } from "./weeks/week2.ts";
import { WEEK_3 } from "./weeks/week3.ts";
import { WEEK_4 } from "./weeks/week4.ts";
import { WEEK_5 } from "./weeks/week5.ts";
import { WEEK_6 } from "./weeks/week6.ts";
import { WEEK_7 } from "./weeks/week7.ts";
import { WEEK_8 } from "./weeks/week8.ts";

export const COURSE: readonly Day[] = [WEEK_1, WEEK_2, WEEK_3, WEEK_4, WEEK_5, WEEK_6, WEEK_7, WEEK_8]
  .flat()
  .sort((a, b) => a.n - b.n);
