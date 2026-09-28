---
description: Show today's plan - the day's lesson, the timed morning and evening blocks, and what to do first
argument-hint: "[day number] [--start YYYY-MM-DD]"
---

Show the learner today's study plan for "Russian in 56 Days".

1. Run `node scripts/day.ts <day> --brief`, where `<day>` is the day number in "$ARGUMENTS" or the word
   `today` when no number is given. Pass `--start YYYY-MM-DD` through if the arguments contain it.
2. Present, in English and then in Arabic:
   - the day number, week and title (Russian with stress marks, English, Arabic) and the goals;
   - the two blocks with their times (defaults, the learner may have changed them in the app's Settings):

     | Time  | Step | Minutes |
     |-------|------|---------|
     | 07:00 | Flashcard review | 15 |
     | 07:15 | Listening and shadowing | 15 |
     | 07:30 | Preview tonight's words | 15 |
     | 20:00 | Lesson: grammar and dialogue | 25 |
     | 20:25 | Drills and speaking | 20 |
     | 20:45 | Conversation with the tutor | 20 |
     | 21:05 | Journal | 10 |

   - which step fits the current time, and the first thing to open in the app.
3. On day 6, 13, 20, 27, 34, 41, 48 and 55 (immersion days) the lesson is a story with real videos; on
   day 7, 14, ... 56 it is a review with a test. Say so when it applies.
4. Offer to start the evening conversation with the `conversation-partner` agent or an explanation with
   the `tutor` agent.
