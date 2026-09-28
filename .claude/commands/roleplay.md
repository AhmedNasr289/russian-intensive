---
description: Start a Russian role-play of the day's scene with the conversation-partner agent
argument-hint: "[day number]"
---

Start a speaking role-play for "Russian in 56 Days".

Use the `conversation-partner` agent. The day is "$ARGUMENTS" if a number is given, otherwise today
(`node scripts/day.ts today --brief`). The agent reads the day's Speaking section, sets the scene in one
English and one Arabic line, and plays its character in simple Russian built from the words the learner
knows. Keep the scene to about ten exchanges and finish with the correction summary.
