# Russian in 56 Days · Ру́сский за 56 дней

An intensive course that takes you from zero (you cannot read Cyrillic yet) to speaking and understanding
everyday Russian in eight weeks, at about two hours a day. Every explanation is in **English and Arabic**.

**Open the app: https://ahmednasr289.github.io/russian-intensive/**

It runs in any current browser, installs on your phone, and keeps working offline once opened.

[العربية ↓](#العربية)

## What is inside

- **56 daily lessons**: words with audio and painted stress, grammar explained in English and Arabic,
  dialogues read by two voices, drills with instant feedback, speaking practice, videos and a journal task.
- **More than 800 words and phrases**, each with a pronunciation respelling and an example sentence.
- **Sound everywhere**: tap any Russian word or sentence to hear it, slowly, **spelled letter by letter**
  (each letter's name, as a teacher spells it) or word by word. Most words play from **real recordings
  by native speakers** (Wikimedia Commons), which work in any browser; sentences use your browser's
  voice, and the Pronounce screen reads anything you type or paste, like a translator's speaker button.
- **Flashcards with spaced repetition** (SM-2): today's words join your deck and come back just before you
  would forget them.
- **An alphabet studio**: the 33 letters, printed and handwritten, with sounds explained for Arabic speakers.
- **Immersion days** (6, 13, 20 …) with real Russian videos and a story worksheet, and **review days**
  (7, 14 … 56) with a test.
- **An AI tutor** that knows your day and your words (see below), and **Claude Code agents** for the terminal.
- **A library** of nearly 200 checked videos, channels, podcasts, dictionaries, books and apps.

## Your daily schedule

Two blocks a day. Change the times in Settings; download all 112 sessions as a calendar file (.ics).

| Time | Block | Steps |
|---|---|---|
| 07:00 | Morning, 45 min | Flashcard review 15 · Listening and shadowing 15 · Preview tonight's words 15 |
| 20:00 | Evening, 75 min | Lesson 25 · Drills and speaking 20 · Conversation with the tutor 20 · Journal 10 |

| Week | Theme |
|---|---|
| 1 | Зву́ки и пе́рвые слова́ · Sounds and first words |
| 2 | Я и мой мир · Me and my world |
| 3 | Где? · Where? |
| 4 | Хочу́ и мо́жно · Wants and needs |
| 5 | Мой день · My day |
| 6 | Пое́хали! · Going places |
| 7 | Лю́ди и вку́сы · People and preferences |
| 8 | Всё вме́сте · Putting it together |

## Start in five minutes

1. Open the app link above. On a phone, use "Add to Home screen" to install it.
2. **Check the sound** in Settings → Sound and voice. Words already play from recordings; for sentences
   the best voices are Chrome's "Google русский" (the voice of Google Translate), Edge's "Svetlana /
   Dmitry Online (Natural)", Google Text-to-Speech on Android and "Milena" on iPhone. An app window such
   as the Claude desktop app has no Russian voice, so open the course in Chrome or Edge.
   Library → Set up your device gives the steps for Windows, Android, iPhone and Mac.
3. **Add a Russian keyboard** (Windows: "Russian – Mnemonic"; phones: add Russian), or use the on-screen
   keyboard that appears under every answer box.
4. In Settings, check the start date and your two block times, then download the calendar.
5. Do the Today screen from top to bottom. Tick each step when it is done.

Your progress is saved in your browser. To move it to another device, use Settings → Export progress
and Import progress.

## The AI tutor

- **In the claude.ai version** the tutor runs inside the app: role-play of the day's scene, free
  conversation, "explain today's grammar", "check my sentence", and journal correction with every error
  explained in English and Arabic. Your progress is saved to your account there.
- **On the web version** the same buttons prepare the exact prompt (your day, your known words, today's
  scene). Copy it and paste it into any Claude chat.

## Claude Code agents

Open a terminal in this folder and run `claude`. The agents in `.claude/agents/` are:

| Agent | Use it for |
|---|---|
| `tutor` | Explanations and drills for the current day, in English and Arabic |
| `conversation-partner` | Role-play of the day's scene in simple Russian, with corrections at the end |
| `writing-corrector` | Correcting your journal or any Russian text, with a score |
| `pronunciation-coach` | Sounds, stress and vowel reduction, explained for Arabic speakers |
| `study-coach` | Reading your exported progress and planning what to do next |

Slash commands: `/today`, `/roleplay [day]`, `/check <text>`, `/week-review [week]`. Private notes go
to `journal/` and exported progress to `progress/`; both folders are ignored by git.

## Development

Node 24 or newer. No runtime dependencies; the dev dependencies are TypeScript and esbuild-wasm.

```
npm ci
npm test
npm run typecheck
npm run validate
npm run build
node scripts/verify.ts all
```

`src/content` holds the course, `src/core` the tested logic, `src/app` the interface, `scripts` the
build and checks. Content rules are in `docs/content-style-guide.md`; the design is in
`docs/superpowers/specs/`. Other checks: `node scripts/check-links.ts` (every link and video) and
`node scripts/verify-stress.ts` (stress marks against Wiktionary). `node scripts/fetch-recordings.ts`
finds a native-speaker recording for each word on Wiktionary, checks that it was recorded with the
course's stress, and packs the MP3s into `public/audio/` (`--offline` rebuilds from its cache).

## Credits

Fonts from Google Fonts under the SIL Open Font License: Golos Text, Oranienbaum, Marck Script and
IBM Plex Sans Arabic. Videos, podcasts and sites in the library belong to their creators and are linked,
not copied. The pronunciation recordings come from Wikimedia Commons, most of them from the Shtooka
Project, and each keeps its own Creative Commons licence: every word, author, licence and file page is
listed in [public/audio/ATTRIBUTION.md](public/audio/ATTRIBUTION.md) and in the app (Library →
Native-speaker recordings). Code and course text: MIT License.

---

<div dir="rtl" lang="ar">

## العربية

# الروسية في ٥٦ يومًا

دورة مكثّفة تنقلك من الصفر (قبل أن تقرأ الحروف الروسية) إلى التحدّث بالروسية اليومية وفهمها خلال ثمانية أسابيع، بمعدّل ساعتين تقريبًا في اليوم. كل شرح في الدورة مكتوب **بالعربية والإنجليزية**.

**افتح التطبيق: https://ahmednasr289.github.io/russian-intensive/**

يعمل التطبيق في أي متصفح حديث، ويمكن تثبيته على الهاتف، ويستمر في العمل من دون إنترنت بعد فتحه أول مرة.

### ماذا ستجد فيه

- **٥٦ درسًا يوميًا**: كلمات بالصوت مع تلوين موضع النبر، وقواعد مشروحة بالعربية والإنجليزية، وحوارات بصوتين، وتمارين بتصحيح فوري، وتدريب على النطق، ومقاطع فيديو، ومهمة كتابة يومية.
- **أكثر من ٨٠٠ كلمة وعبارة**، لكل منها طريقة نطق مكتوبة بالحروف اللاتينية وجملة مثال.
- **الصوت في كل مكان**: اضغط على أي كلمة أو جملة روسية لتسمعها، أو لتسمعها ببطء، أو **متهجّاة حرفًا حرفًا** (اسم كل حرف كما يتهجّاه المعلّم)، أو كلمة كلمة. معظم الكلمات تُسمع من **تسجيلات حقيقية بأصوات متحدثين أصليين** (من ويكيميديا كومنز) تعمل في أي متصفح، والجمل بصوت متصفحك، وشاشة «النطق» تقرأ أي نص تكتبه أو تلصقه مثل زر السماعة في المترجم.
- **بطاقات مراجعة متباعدة**: تدخل كلمات اليوم إلى مجموعتك وتعود إليك قبل أن تنساها مباشرة.
- **استوديو الأبجدية**: الحروف الثلاثة والثلاثون بالخط المطبوع والمكتوب باليد، مع شرح أصواتها لمتحدّثي العربية.
- **أيام انغماس** مع فيديوهات روسية حقيقية، و**أيام مراجعة** في نهاية كل أسبوع مع اختبار.
- **معلّم ذكي** يعرف يومك وكلماتك، و**وكلاء Claude Code** للعمل من الطرفية.

### جدولك اليومي

فترتان في اليوم، ويمكنك تغيير المواعيد من الإعدادات وتنزيل الجلسات الـ ١١٢ كملف تقويم.

| الوقت | الفترة | الخطوات |
|---|---|---|
| 07:00 | الصباح، ٤٥ دقيقة | مراجعة البطاقات ١٥ · الاستماع والترديد ١٥ · معاينة كلمات المساء ١٥ |
| 20:00 | المساء، ٧٥ دقيقة | الدرس ٢٥ · التمارين والنطق ٢٠ · محادثة مع المعلّم ٢٠ · اليوميات ١٠ |

### ابدأ في خمس دقائق

١. افتح رابط التطبيق، وعلى الهاتف اختر «إضافة إلى الشاشة الرئيسية» لتثبيته.

٢. **افحص الصوت** من الإعدادات ← الصوت والنطق. الكلمات تُسمع أصلًا من التسجيلات، أما الجمل فأفضل أصواتها Google русский في Chrome (صوت ترجمة Google نفسه)، وSvetlana وDmitry في متصفح Edge، وخدمة Google لتحويل النص إلى كلام في أندرويد، وصوت Milena في آيفون. نوافذ التطبيقات مثل تطبيق Claude لسطح المكتب لا تحتوي على صوت روسي، فافتح الدورة في Chrome أو Edge. ستجد الخطوات في المكتبة ← جهّز جهازك.

٣. **أضف لوحة مفاتيح روسية**، أو استخدم لوحة المفاتيح التي تظهر على الشاشة تحت كل خانة إجابة.

٤. راجع تاريخ البداية ومواعيد الفترتين في الإعدادات، ثم نزّل ملف التقويم.

٥. اتبع شاشة «اليوم» من الأعلى إلى الأسفل، وضع علامة على كل خطوة عند إنهائها.

يُحفظ تقدّمك في متصفحك، ولنقله إلى جهاز آخر استخدم «تصدير التقدّم» و«استيراد التقدّم» في الإعدادات.

### المعلّم الذكي

في نسخة claude.ai يعمل المعلّم داخل التطبيق: تمثيل موقف اليوم، ومحادثة حرّة، وشرح قواعد اليوم، والتحقق من جملك، وتصحيح يومياتك مع شرح كل خطأ بالعربية والإنجليزية، ويُحفظ تقدّمك في حسابك. وفي نسخة الويب تُعِدّ الأزرار نفسها التعليمات الكاملة لتنسخها وتلصقها في أي محادثة مع Claude.

### وكلاء Claude Code

افتح الطرفية في مجلد المشروع وشغّل `claude`. الوكلاء في المجلد `.claude/agents/` هم: المعلّم، وشريك المحادثة، ومصحّح الكتابة، ومدرّب النطق، ومدرّب الدراسة. والأوامر: `/today` لخطة اليوم، و`/roleplay` لتمثيل موقف، و`/check` لتصحيح نص روسي، و`/week-review` لمراجعة أسبوع كامل مع اختبار.

</div>
