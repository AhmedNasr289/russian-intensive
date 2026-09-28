---
description: Review a whole week - its words and grammar summarised, then a 10-question quiz with a score
argument-hint: "[week number 1-8]"
---

Run a weekly review for "Russian in 56 Days". The week is "$ARGUMENTS" if given, otherwise the week that
contains today (`node scripts/day.ts today --brief` shows it).

1. For each of the week's seven days run `node scripts/day.ts <n> --brief`, and read the grammar
   sections with `node scripts/day.ts <n>` where you need them.
2. Give a compact summary: the grammar points in one line each (English, then Arabic), and the 15 most
   useful words and phrases with stress marks.
3. Quiz the learner with 10 questions, one at a time, mixing: meaning of a Russian word, say it in
   Russian, fill the gap, put the words in order, and one short translation. Use only that week's and
   earlier material (`node scripts/vocab.ts --upto <last day of the week>`).
4. After each answer say right or wrong with the correct form. At the end give the score out of 10, the
   three topics to revisit and which day of the app covers each.
