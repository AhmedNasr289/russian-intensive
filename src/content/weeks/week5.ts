import type { Day } from "../types.ts";

// Week 5 · My day: the past tense, daily routine, the genitive and verb aspect.
// Written to docs/content-style-guide.md, following the Day 4 exemplar in week1.ts.

const DAY_29: Day = {
  n: 29,
  week: 5,
  kind: "lesson",
  title: { ru: "Вчера́: проше́дшее вре́мя", en: "Yesterday: the past tense", ar: "أمس: الزمن الماضي" },
  goals: [
    {
      en: "Say what you did yesterday and last week, using the past tense.",
      ar: "أن تقول ماذا فعلت أمس وفي الأسبوع الماضي باستخدام الزمن الماضي.",
    },
    {
      en: "Use был, была́, бы́ло, бы́ли to say where you were.",
      ar: "أن تستخدم был، была́، бы́ло، бы́ли لتقول أين كنت.",
    },
    {
      en: "Place events in time: вчера́, позавчера́, на про́шлой неде́ле, год наза́д.",
      ar: "أن تحدّد زمن الأحداث: вчера́، позавчера́، на про́шлой неде́ле، год наза́д.",
    },
  ],
  words: [
    {
      id: "d29-01", ru: "быть", say: "byt'", en: "to be", ar: "يكون / كان", pos: "verb", forms: "был, была́, бы́ло, бы́ли",
      ex: { ru: "Вчера́ я был в теа́тре.", en: "Yesterday I was at the theatre.", ar: "أمس كنتُ في المسرح." },
      note: {
        en: "In the present быть is normally left out: Я до́ма. In the past it must be there: Я был до́ма.",
        ar: "في الحاضر يُحذف быть عادةً: Я до́ма. أمّا في الماضي فلا بدّ منه: Я был до́ма.",
      },
    },
    {
      id: "d29-02", ru: "вчера́", say: "fchirA", en: "yesterday", ar: "أمس", pos: "adv",
      ex: { ru: "Вчера́ она́ была́ на рабо́те.", en: "Yesterday she was at work.", ar: "أمس كانت في العمل." },
    },
    {
      id: "d29-03", ru: "позавчера́", say: "pazafchirA", en: "the day before yesterday", ar: "أوّل أمس", pos: "adv",
      ex: { ru: "Позавчера́ мы бы́ли в музе́е.", en: "The day before yesterday we were at the museum.", ar: "أوّل أمس كنّا في المتحف." },
    },
    {
      id: "d29-04", ru: "ра́ньше", say: "rAn'she", en: "before, earlier; used to (with a past verb)", ar: "سابقًا، من قبل؛ «كان يفعل» (مع الماضي)", pos: "adv",
      ex: { ru: "Ра́ньше я жил в Каи́ре.", en: "I used to live in Cairo.", ar: "كنتُ أسكن في القاهرة سابقًا." },
    },
    {
      id: "d29-05", ru: "давно́", say: "davnO", en: "long ago; for a long time", ar: "منذ زمن بعيد؛ منذ مدّة طويلة", pos: "adv",
      ex: { ru: "Э́то бы́ло давно́.", en: "That was a long time ago.", ar: "كان ذلك منذ زمن بعيد." },
    },
    {
      id: "d29-06", ru: "неда́вно", say: "nidAvna", en: "recently, not long ago", ar: "مؤخّرًا، منذ وقت قريب", pos: "adv",
      ex: { ru: "Неда́вно я была́ в Москве́.", en: "I was in Moscow recently. (a woman speaking)", ar: "كنتُ في موسكو مؤخّرًا. (امرأة تتكلّم)" },
    },
    {
      id: "d29-07", ru: "пото́м", say: "patOm", en: "then, afterwards, later", ar: "ثمّ، بعد ذلك", pos: "adv",
      ex: { ru: "Я чита́л, пото́м гуля́л.", en: "I read, then I went for a walk.", ar: "قرأتُ، ثمّ تمشّيت." },
    },
    {
      id: "d29-08", ru: "неде́ля", say: "nidyElya", en: "week", ar: "أسبوع", pos: "noun", g: "f", forms: "мн. ч. неде́ли",
      ex: { ru: "Я был в Москве́ неде́лю.", en: "I was in Moscow for a week.", ar: "كنتُ في موسكو أسبوعًا." },
    },
    {
      id: "d29-09", ru: "ме́сяц", say: "myEsits", en: "month", ar: "شهر", pos: "noun", g: "m", forms: "мн. ч. ме́сяцы",
      ex: { ru: "Она́ жила́ в Каи́ре ме́сяц.", en: "She lived in Cairo for a month.", ar: "عاشت في القاهرة شهرًا." },
    },
    {
      id: "d29-10", ru: "год", say: "got", en: "year", ar: "سنة، عام", pos: "noun", g: "m", forms: "два го́да; в про́шлом году́",
      ex: { ru: "Мы бы́ли в Росси́и год наза́д.", en: "We were in Russia a year ago.", ar: "كنّا في روسيا قبل سنة." },
    },
    {
      id: "d29-11", ru: "про́шлый", say: "prOshlyy", en: "last, previous", ar: "الماضي، السابق", pos: "adj", forms: "про́шлая, про́шлое, про́шлые",
      ex: { ru: "В про́шлом ме́сяце я рабо́тал в Каи́ре.", en: "Last month I worked in Cairo.", ar: "في الشهر الماضي عملتُ في القاهرة." },
    },
    {
      id: "d29-12", ru: "о́тпуск", say: "Otpusk", en: "leave, vacation (from work)", ar: "إجازة (من العمل)", pos: "noun", g: "m",
      ex: { ru: "Оте́ц был в о́тпуске.", en: "Father was on leave.", ar: "كان الأب في إجازة." },
      note: { en: "в о́тпуске = on leave, on holiday from work.", ar: "в о́тпуске = في إجازة من العمل." },
    },
    {
      id: "d29-13", ru: "кани́кулы", say: "kanIkuly", en: "holidays (school or university)", ar: "العطلة (المدرسية أو الجامعية)", pos: "noun", g: "pl",
      ex: { ru: "У меня́ бы́ли кани́кулы.", en: "I had holidays.", ar: "كانت لديّ عطلة." },
      note: { en: "Always plural: кани́кулы бы́ли, never был.", ar: "تأتي دائمًا بصيغة الجمع: кани́кулы бы́ли، وليس был." },
    },
    {
      id: "d29-14", ru: "пра́здник", say: "prAznik", en: "holiday, festival, celebration", ar: "عيد، احتفال", pos: "noun", g: "m",
      ex: { ru: "Вчера́ был пра́здник.", en: "Yesterday was a holiday.", ar: "أمس كان يوم عيد." },
      note: { en: "The д is silent: [praznik].", ar: "حرف д لا يُنطق: [praznik]." },
    },
    {
      id: "d29-15", ru: "наза́д", say: "nazAt", en: "ago (after a length of time)", ar: "مضى، قبل (بعد المدّة الزمنية)", pos: "adv",
      ex: { ru: "Я был в Каи́ре неде́лю наза́д.", en: "I was in Cairo a week ago.", ar: "كنتُ في القاهرة قبل أسبوع." },
      note: {
        en: "It follows the time: год наза́д, ме́сяц наза́д, неде́лю наза́д.",
        ar: "تأتي بعد المدّة الزمنية: год наза́д، ме́сяц наза́д، неде́лю наза́д.",
      },
    },
    {
      id: "d29-16", ru: "на про́шлой неде́ле", say: "na prOshlay nidyElye", en: "last week", ar: "في الأسبوع الماضي", pos: "phrase",
      ex: { ru: "На про́шлой неде́ле мы бы́ли в теа́тре.", en: "Last week we were at the theatre.", ar: "في الأسبوع الماضي كنّا في المسرح." },
    },
    {
      id: "d29-17", ru: "в про́шлом году́", say: "f prOshlam gadU", en: "last year", ar: "في العام الماضي", pos: "phrase",
      ex: { ru: "В про́шлом году́ я жил в Каи́ре.", en: "Last year I lived in Cairo.", ar: "في العام الماضي كنتُ أعيش في القاهرة." },
      note: { en: "году́ is a special form used after в: в про́шлом году́.", ar: "году́ صيغة خاصّة تُستخدم بعد в: в про́шлом году́." },
    },
    {
      id: "d29-18", ru: "Что ты де́лал вчера́?", say: "shto ty dyElal fchirA?", en: "What did you do yesterday?", ar: "ماذا فعلتَ أمس؟", pos: "phrase",
      note: {
        en: "To a woman: Что ты де́лала вчера́? Formal or plural: Что вы де́лали вчера́?",
        ar: "لامرأة: Что ты де́лала вчера́? وبصيغة الاحترام أو الجمع: Что вы де́лали вчера́?",
      },
    },
    { id: "d29-19", ru: "Где вы бы́ли?", say: "gdye vy bYli?", en: "Where were you? (formal or plural)", ar: "أين كنتم؟ / أين كنتَ؟ (بصيغة الاحترام)", pos: "phrase" },
    {
      id: "d29-20", ru: "Бы́ло интере́сно.", say: "bYla intiryEsna.", en: "It was interesting.", ar: "كان ممتعًا.", pos: "phrase",
      ex: { ru: "Вчера́ я был в музе́е. Бы́ло о́чень интере́сно!", en: "Yesterday I was at the museum. It was very interesting!", ar: "أمس كنتُ في المتحف. كان ممتعًا جدًّا!" },
    },
  ],
  grammar: [
    {
      id: "d29-g1",
      title: { en: "The past tense: -л, -ла, -ло, -ли", ar: "الزمن الماضي: -л، -ла، -ло، -ли" },
      en: [
        "To form the past tense, take the infinitive, drop -ть and add -л: чита́ть → чита́л, говори́ть → говори́л. The stress usually stays where it is in the infinitive.",
        "The past tense does not change for я, ты, он… It changes for gender and number: -л for a man, -ла for a woman, -ло for a neuter noun (оно́), -ли for the plural. A man says Я чита́л; a woman says Я чита́ла.",
        "Вы always takes -ли, even when you speak politely to one person: Вы бы́ли до́ма? Russian has no separate forms for 'I read', 'I was reading' and 'I have read': this past covers them all. On day 33 you will meet a second form for a finished result.",
      ],
      ar: [
        "لتكوين الزمن الماضي خذ المصدر، واحذف منه -ть، وأضف -л: чита́ть ← чита́л، говори́ть ← говори́л. ويبقى النبر في الغالب في مكانه كما في المصدر.",
        "لا يتغيّر الفعل الماضي حسب الشخص (я، ты، он…)، بل حسب الجنس والعدد: -л للمذكّر، و-ла للمؤنّث، و-ло للمحايد (оно́)، و-ли للجمع. فالرجل يقول Я чита́л، والمرأة تقول Я чита́ла.",
        "مع вы نستخدم دائمًا -ли، حتى عند مخاطبة شخص واحد باحترام: Вы бы́ли до́ма? ولا توجد في الروسية صيغ منفصلة لـ«قرأتُ» و«كنتُ أقرأ»: هذا الماضي يشملها كلّها. وفي اليوم ٣٣ ستتعرّف على صيغة ثانية للنتيجة المكتملة.",
      ],
      tables: [
        {
          caption: { en: "The past tense of four verbs", ar: "الماضي لأربعة أفعال" },
          head: ["Infinitive · المصدر", "он (-л)", "она́ (-ла)", "оно́ (-ло)", "мы, вы, они́ (-ли)"],
          rows: [
            ["чита́ть", "чита́л", "чита́ла", "чита́ло", "чита́ли"],
            ["де́лать", "де́лал", "де́лала", "де́лало", "де́лали"],
            ["говори́ть", "говори́л", "говори́ла", "говори́ло", "говори́ли"],
            ["жить", "жил", "жила́", "жи́ло", "жи́ли"],
          ],
        },
      ],
      examples: [
        { ru: "Вчера́ я рабо́тал, а А́нна отдыха́ла.", en: "Yesterday I worked, and Anna rested.", ar: "أمس عملتُ، أمّا آنا فاستراحت." },
        { ru: "Вы смотре́ли фильм?", en: "Did you watch the film?", ar: "هل شاهدتم الفيلم؟" },
        { ru: "Ра́ньше мы жи́ли в Каи́ре.", en: "We used to live in Cairo.", ar: "كنّا نعيش في القاهرة سابقًا." },
      ],
    },
    {
      id: "d29-g2",
      title: { en: "быть in the past: был, была́, бы́ло, бы́ли", ar: "الفعل быть في الماضي: был، была́، бы́ло، бы́ли" },
      en: [
        "In the present, 'to be' disappears: Я до́ма. In the past it comes back as был, была́, бы́ло, бы́ли. Watch the stress: была́ is stressed on the ending, бы́ло and бы́ли on the stem.",
        "Где ты был? — Я был в па́рке. Use в / на + the prepositional exactly as in the present: в теа́тре, на рабо́те.",
        "The past of У меня́ есть… is У меня́ был / была́ / бы́ло / бы́ли… The verb agrees with the thing you had: У меня́ был о́тпуск (он). У меня́ бы́ли кани́кулы (они́).",
      ],
      ar: [
        "في الحاضر يختفي فعل «يكون»: Я до́ма. أمّا في الماضي فيعود بالصيغ был، была́، бы́ло، бы́ли. انتبه للنبر: была́ منبورة على النهاية، أمّا бы́ло وбы́ли فعلى الجذر.",
        "Где ты был? — Я был в па́рке. استخدم в / на مع حالة حرف الجر كما في الحاضر تمامًا: в теа́тре، на рабо́те.",
        "ماضي У меня́ есть… هو У меня́ был / была́ / бы́ло / бы́ли… ويتّفق الفعل مع الشيء الذي كان لديك: У меня́ был о́тпуск (он)، У меня́ бы́ли кани́кулы (они́).",
      ],
      tables: [
        {
          caption: { en: "быть in the past", ar: "быть في الماضي" },
          head: ["Subject · الفاعل", "Past · الماضي", "Example · مثال"],
          rows: [
            ["я, ты, он (a man · رجل)", "был", "Он был до́ма."],
            ["я, ты, она́ (a woman · امرأة)", "была́", "Она́ была́ на рабо́те."],
            ["оно́", "бы́ло", "Бы́ло интере́сно."],
            ["мы, вы, они́", "бы́ли", "Мы бы́ли в теа́тре."],
          ],
        },
      ],
      examples: [
        {
          ru: "— Где вы бы́ли вчера́? — Мы бы́ли на Кра́сной пло́щади.",
          en: "— Where were you yesterday? — We were on Red Square.",
          ar: "— أين كنتم أمس؟ — كنّا في الساحة الحمراء.",
        },
        { ru: "В про́шлом ме́сяце у меня́ был о́тпуск.", en: "Last month I had leave.", ar: "في الشهر الماضي كانت لديّ إجازة." },
      ],
    },
    {
      id: "d29-g3",
      title: { en: "When? Time words for the past", ar: "متى؟ كلمات الزمن للماضي" },
      en: [
        "Time words usually come first in the sentence: Вчера́ я был в музе́е. Позавчера́ is 'the day before yesterday'.",
        "Last week, month, year: на про́шлой неде́ле, в про́шлом ме́сяце, в про́шлом году́. Note the prepositions: на with неде́ля, в with ме́сяц and год.",
        "For 'ago', put наза́д after the time: год наза́д, ме́сяц наза́д, неде́лю наза́д. Ра́ньше with the past means 'used to': Ра́ньше я жил в Каи́ре.",
      ],
      ar: [
        "تأتي كلمات الزمن عادةً في أوّل الجملة: Вчера́ я был в музе́е. أمّا Позавчера́ فمعناها «أوّل أمس».",
        "الأسبوع والشهر والعام الماضي: на про́шлой неде́ле، в про́шлом ме́сяце، в про́шлом году́. انتبه لحروف الجر: на مع неде́ля، وв مع ме́сяц وгод.",
        "للتعبير عن «قبل (مدّة)» ضع наза́д بعد المدّة: год наза́д، ме́сяц наза́д، неде́лю наза́д. وكلمة Ра́ньше مع الماضي تعني «كان يفعل سابقًا»: Ра́ньше я жил в Каи́ре.",
      ],
      tables: [
        {
          caption: { en: "Time expressions for the past", ar: "تعابير الزمن الماضي" },
          head: ["Russian · بالروسية", "English", "العربية"],
          rows: [
            ["вчера́", "yesterday", "أمس"],
            ["позавчера́", "the day before yesterday", "أوّل أمس"],
            ["на про́шлой неде́ле", "last week", "في الأسبوع الماضي"],
            ["в про́шлом ме́сяце", "last month", "في الشهر الماضي"],
            ["в про́шлом году́", "last year", "في العام الماضي"],
            ["год наза́д", "a year ago", "قبل سنة"],
            ["неда́вно / давно́", "recently / long ago", "مؤخّرًا / منذ زمن بعيد"],
          ],
        },
      ],
      examples: [
        { ru: "Неде́лю наза́д мы бы́ли в Кремле́.", en: "A week ago we were in the Kremlin.", ar: "قبل أسبوع كنّا في الكرملين." },
        {
          ru: "Позавчера́ А́нна была́ до́ма, а вчера́ — на рабо́те.",
          en: "The day before yesterday Anna was at home, and yesterday at work.",
          ar: "أوّل أمس كانت آنا في البيت، أمّا أمس ففي العمل.",
        },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Понеде́льник, у́тро", en: "Monday morning", ar: "صباح الاثنين" },
    setting: {
      en: "Monday morning in the university café. Anna asks Ahmed about his Sunday and tells him about her holidays.",
      ar: "صباح الاثنين في مقهى الجامعة. آنا تسأل أحمد عن يوم الأحد وتحكي له عن عطلتها.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Приве́т, Ахме́д! Что ты де́лал вчера́?", en: "Hi, Ahmed! What did you do yesterday?", ar: "مرحبًا يا أحمد! ماذا فعلتَ أمس؟" },
      { who: "A", name: "Ахме́д", ru: "Приве́т! Вчера́ я был в Кремле́. Бы́ло о́чень интере́сно!", en: "Hi! Yesterday I was in the Kremlin. It was very interesting!", ar: "مرحبًا! أمس كنتُ في الكرملين. كان ممتعًا جدًّا!" },
      { who: "B", name: "А́нна", ru: "Как хорошо́! А пото́м?", en: "How nice! And then?", ar: "ما أجمل ذلك! وبعدها؟" },
      {
        who: "A", name: "Ахме́д", ru: "Пото́м я гуля́л в па́рке и слу́шал му́зыку. А ты? Где ты была́?",
        en: "Then I walked in the park and listened to music. And you? Where were you?", ar: "ثمّ تمشّيتُ في الحديقة واستمعتُ إلى الموسيقى. وأنتِ؟ أين كنتِ؟",
      },
      {
        who: "B", name: "А́нна", ru: "Я была́ до́ма. У́тром я чита́ла, а ве́чером смотре́ла фильм.",
        en: "I was at home. In the morning I read, and in the evening I watched a film.", ar: "كنتُ في البيت. في الصباح قرأتُ، وفي المساء شاهدتُ فيلمًا.",
      },
      { who: "A", name: "Ахме́д", ru: "А Макси́м? Он то́же был до́ма?", en: "And Maxim? Was he at home too?", ar: "ومكسيم؟ هل كان في البيت أيضًا؟" },
      { who: "B", name: "А́нна", ru: "Нет, он рабо́тал. Он всегда́ рабо́тает!", en: "No, he was working. He always works!", ar: "لا، كان يعمل. إنّه يعمل دائمًا!" },
      {
        who: "A", name: "Ахме́д", ru: "А на про́шлой неде́ле у тебя́ бы́ли кани́кулы, да?",
        en: "And last week you had your holidays, right?", ar: "وفي الأسبوع الماضي كانت لديكِ عطلة، أليس كذلك؟",
      },
      { who: "B", name: "А́нна", ru: "Да! Мы бы́ли на мо́ре. Бы́ло о́чень хорошо́!", en: "Yes! We were at the seaside. It was really nice!", ar: "نعم! كنّا على البحر. كان الأمر رائعًا جدًّا!" },
      { who: "A", name: "Ахме́д", ru: "А я был на мо́ре год наза́д, в Еги́пте.", en: "And I was at the seaside a year ago, in Egypt.", ar: "أمّا أنا فكنتُ على البحر قبل سنة، في مصر." },
      { who: "B", name: "А́нна", ru: "Я то́же была́ в Еги́пте, но давно́, в Каи́ре.", en: "I was in Egypt too, but long ago, in Cairo.", ar: "أنا أيضًا كنتُ في مصر، لكن منذ زمن بعيد، في القاهرة." },
      { who: "A", name: "Ахме́д", ru: "В Каи́ре? Э́то мой го́род!", en: "In Cairo? That's my city!", ar: "في القاهرة؟ إنّها مدينتي!" },
    ],
  },
  pronunciation: {
    title: { en: "Moving stress in the past tense", ar: "النبر المتنقّل في الزمن الماضي" },
    en: [
      "In most verbs the stress stays put: чита́л, чита́ла, чита́ли. But a few short, very common verbs move the stress onto the feminine ending: был — была́, жил — жила́.",
      "In the other forms the stress goes back to the stem: бы́ло, бы́ли, жи́ли. With не the stress jumps onto не: не был sounds like one word, [NYE-byl].",
      "The letter в before a voiceless consonant sounds like f: вчера́ is said [fchira].",
    ],
    ar: [
      "في معظم الأفعال يبقى النبر في مكانه: чита́л، чита́ла، чита́ли. لكنّ بعض الأفعال القصيرة الشائعة جدًّا تنقل النبر إلى نهاية المؤنّث: был — была́، жил — жила́.",
      "وفي الصيغ الأخرى يعود النبر إلى الجذر: бы́ло، бы́ли، жи́ли. ومع не ينتقل النبر إلى не نفسها: не был تُنطق ككلمة واحدة [NYE-byl].",
      "حرف в قبل حرف ساكن مهموس يُنطق مثل f: كلمة вчера́ تُنطق [fchira].",
    ],
    drills: [
      { ru: "был — была́ — бы́ло — бы́ли", say: "byl, bylA, bYla, bYli", focus: { en: "Only была́ is stressed on the ending.", ar: "была́ وحدها منبورة على النهاية." } },
      { ru: "жил — жила́ — жи́ли", say: "zhyl, zhylA, zhYli", focus: { en: "The same pattern as быть.", ar: "النمط نفسه كما في быть." } },
      { ru: "Она́ была́ до́ма.", say: "anA bylA dOma.", focus: { en: "Three stresses: она́, была́, до́ма.", ar: "ثلاثة مواضع للنبر: она́، была́، до́ма." } },
      { ru: "Я не был в Москве́.", say: "ya NYE byl v maskvYe.", focus: { en: "не был is one sound group, stressed on не.", ar: "не был مجموعة صوتية واحدة، والنبر على не." } },
      { ru: "Вчера́ я чита́ла.", say: "fchirA ya chitAla.", focus: { en: "в before ч sounds like f.", ar: "حرف в قبل ч يُنطق f." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Anna talks about yesterday. Which sentence is correct?", ar: "آنا تتحدّث عن أمس. أيّ جملة صحيحة؟" },
      options: ["Вчера́ я был до́ма.", "Вчера́ я была́ до́ма.", "Вчера́ я бы́ли до́ма."],
      answer: 1,
      why: { en: "Anna is a woman, so the past ends in -ла: была́.", ar: "آنا امرأة، لذلك ينتهي الماضي بـ -ла: была́." },
    },
    {
      kind: "fill",
      prompt: { en: "Put рабо́тать in the past: Maxim worked yesterday.", ar: "ضع рабо́тать في الماضي: عمل مكسيم أمس." },
      ru: "Макси́м вчера́ ___.",
      answers: ["рабо́тал"],
      why: { en: "Макси́м is a man: drop -ть and add -л.", ar: "Макси́м رجل: احذف -ть وأضف -л." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: We were at the theatre.", ar: "أكمل: كنّا في المسرح." },
      ru: "Мы ___ в теа́тре.",
      answers: ["бы́ли"],
      why: { en: "мы is plural: бы́ли.", ar: "мы جمع: бы́ли." },
    },
    {
      kind: "fill",
      prompt: { en: "Put чита́ть in the past: Anna read a book.", ar: "ضع чита́ть في الماضي: قرأت آنا كتابًا." },
      ru: "А́нна ___ кни́гу.",
      answers: ["чита́ла"],
      why: { en: "А́нна is a woman: -ла.", ar: "А́нна امرأة: -ла." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete the polite question: Were you at home yesterday?", ar: "أكمل السؤال بصيغة الاحترام: هل كنتَ في البيت أمس؟" },
      ru: "Вы вчера́ ___ до́ма?",
      answers: ["бы́ли"],
      why: { en: "вы always takes -ли, even for one person.", ar: "مع вы نستخدم دائمًا -ли، حتى لشخص واحد." },
    },
    {
      kind: "choice",
      prompt: { en: "Which one means 'last year'?", ar: "أيّها تعني «في العام الماضي»؟" },
      options: ["в про́шлом году́", "на про́шлой неде́ле", "в про́шлом ме́сяце"],
      answer: 0,
      why: { en: "год becomes в про́шлом году́, with a special stressed ending.", ar: "год تصبح в про́шлом году́ بنهاية خاصّة منبورة." },
    },
    {
      kind: "choice",
      prompt: { en: "What does this sentence mean?", ar: "ما معنى هذه الجملة؟" },
      ru: "Ра́ньше я жил в Каи́ре.",
      options: ["I used to live in Cairo. · كنتُ أعيش في القاهرة سابقًا.", "I live in Cairo now. · أعيش في القاهرة الآن.", "I lived in Cairo for a year. · عشتُ في القاهرة سنة."],
      answer: 0,
      why: { en: "Ра́ньше + a past verb = 'used to'.", ar: "Ра́ньше مع فعل ماضٍ تعني «كان يفعل سابقًا»." },
    },
    {
      kind: "choice",
      prompt: { en: "The film was good. Which form is right?", ar: "كان الفيلم جيّدًا. أيّ صيغة صحيحة؟" },
      options: ["Фильм был хоро́ший.", "Фильм была́ хоро́ший.", "Фильм бы́ло хоро́ший."],
      answer: 0,
      why: { en: "фильм is masculine (он), so был.", ar: "фильм مذكّر (он)، لذلك был." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: Yesterday I was at the theatre.", ar: "كوّن الجملة: أمس كنتُ في المسرح." },
      tokens: ["в", "был", "Вчера́", "теа́тре", "я"],
      answers: ["Вчера́ я был в теа́тре.", "Я был в теа́тре вчера́.", "Я вчера́ был в теа́тре."],
      why: { en: "The time word usually comes first: Вчера́ я был…", ar: "تأتي كلمة الزمن عادةً أوّلًا: Вчера́ я был…" },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: What did you do yesterday?", ar: "كوّن السؤال: ماذا فعلتَ أمس؟" },
      tokens: ["ты", "вчера́", "Что", "де́лал"],
      answers: ["Что ты де́лал вчера́?", "Что ты вчера́ де́лал?"],
      why: { en: "The question word что comes first.", ar: "أداة الاستفهام что تأتي أوّلًا." },
    },
    {
      kind: "translate",
      prompt: { en: "Yesterday I was at home.", ar: "أمس كنتُ في البيت." },
      answers: ["Вчера́ я был до́ма.", "Вчера́ я была́ до́ма.", "Я был до́ма вчера́.", "Я была́ до́ма вчера́.", "Я вчера́ был до́ма.", "Я вчера́ была́ до́ма."],
      why: { en: "был for a man, была́ for a woman; до́ма needs no preposition.", ar: "был للرجل وбыла́ للمرأة، وكلمة до́ма لا تحتاج إلى حرف جر." },
    },
    {
      kind: "translate",
      prompt: { en: "We watched a film.", ar: "شاهدنا فيلمًا." },
      answers: ["Мы смотре́ли фильм."],
      why: { en: "смотре́ть becomes смотре́ли with мы.", ar: "смотре́ть تصبح смотре́ли مع мы." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. When was she at the museum?", ar: "استمع. متى كانت في المتحف؟" },
      ru: "Позавчера́ она́ была́ в музе́е.",
      listen: true,
      options: ["yesterday · أمس", "the day before yesterday · أوّل أمس", "last week · في الأسبوع الماضي"],
      answer: 1,
      why: { en: "Позавчера́ = the day before yesterday.", ar: "Позавчера́ تعني «أوّل أمس»." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. When were the speakers at the seaside?", ar: "استمع. متى كان المتكلّمون على البحر؟" },
      ru: "Мы бы́ли на мо́ре год наза́д.",
      listen: true,
      options: ["a year ago · قبل سنة", "a month ago · قبل شهر", "last week · في الأسبوع الماضي"],
      answer: 0,
      why: { en: "год наза́д = a year ago.", ar: "год наза́д تعني «قبل سنة»." },
    },
  ],
  topics: ["past-tense", "time"],
  search: ["Russian past tense explained был была было были", "Russian past tense verbs for beginners"],
  speaking: {
    scenario: {
      en: "It's Monday. Anna, a Russian friend, asks what you did yesterday and last weekend. Tell her where you were and what you did, then ask about her weekend.",
      ar: "اليوم هو الاثنين. آنا، صديقتك الروسية، تسألك ماذا فعلت أمس وفي عطلة نهاية الأسبوع الماضية. أخبرها أين كنت وماذا فعلت، ثمّ اسألها عن عطلتها.",
    },
    tutorBrief:
      "Play Anna (Анна), a friendly Moscow student, meeting the learner on Monday morning. Ask what they did yesterday, on Saturday and last week, with follow-up questions (Где ты был / была? А потом? Было интересно?). Use only the past tense of known verbs (был, работал, читал, гулял, смотрел, слушал, отдыхал, жил) and today's time words: вчера, позавчера, на прошлой неделе, в прошлом году, год назад, раньше, давно, недавно. Watch the gender ending: if a woman says я был, recast it kindly as я была. Share your own weekend in two or three sentences. Finish by summarising what the learner did and praising one correct past-tense form.",
    prompts: [
      { ru: "Вчера́ я был в па́рке.", en: "Yesterday I was in the park.", ar: "أمس كنتُ في الحديقة." },
      { ru: "Пото́м я чита́л и слу́шал му́зыку.", en: "Then I read and listened to music.", ar: "ثمّ قرأتُ واستمعتُ إلى الموسيقى." },
      { ru: "Что ты де́лала в суббо́ту?", en: "What did you do on Saturday? (to a woman)", ar: "ماذا فعلتِ يوم السبت؟ (لامرأة)" },
      { ru: "На про́шлой неде́ле я рабо́тал.", en: "Last week I worked.", ar: "في الأسبوع الماضي عملتُ." },
      { ru: "Бы́ло о́чень интере́сно!", en: "It was very interesting!", ar: "كان ممتعًا جدًّا!" },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about yesterday or last weekend: where you were, what you did in the morning, in the afternoon and in the evening, and one thing that was interesting (Бы́ло интере́сно…). Use your own ending: я был (a man) or я была́ (a woman).",
    ar: "اكتب من ٥ إلى ٨ جمل عن أمس أو عن عطلة نهاية الأسبوع الماضية: أين كنت، وماذا فعلت في الصباح وبعد الظهر وفي المساء، وشيئًا واحدًا كان ممتعًا (Бы́ло интере́сно…). استخدم النهاية المناسبة لك: я был (للرجل) أو я была́ (للمرأة).",
  },
  culture: {
    en: "Russian has three words for time off. О́тпуск is paid leave from work — by law at least 28 calendar days a year. Кани́кулы are school or university holidays; the long summer ones run from June to August. A пра́здник is a festive day: the biggest is Но́вый год (New Year), followed by official days off in early January.",
    ar: "في الروسية ثلاث كلمات للإجازة. о́тпуск هي الإجازة المدفوعة من العمل، وهي بحكم القانون ٢٨ يومًا تقويميًّا على الأقل في السنة. أمّا кани́кулы فهي العطلة المدرسية أو الجامعية، وتمتدّ العطلة الصيفية من يونيو إلى أغسطس. وпра́здник هو يوم العيد أو الاحتفال، وأكبرها Но́вый год (رأس السنة)، وتليه أيام عطلة رسمية في أوائل يناير.",
  },
};

const DAY_30: Day = {
  n: 30,
  week: 5,
  kind: "lesson",
  title: { ru: "Мой день: глаго́лы на -ся", en: "My day: reflexive verbs", ar: "يومي: الأفعال الانعكاسية" },
  goals: [
    { en: "Describe your daily routine from waking up to going to bed.", ar: "أن تصف روتينك اليومي من الاستيقاظ حتى النوم." },
    { en: "Conjugate reflexive verbs in -ся / -сь in the present and the past.", ar: "أن تصرّف الأفعال الانعكاسية المنتهية بـ -ся / -сь في الحاضر والماضي." },
    {
      en: "Put actions in order and say when they happen: снача́ла, пото́м, по́сле э́того, в семь часо́в.",
      ar: "أن ترتّب الأفعال وتقول متى تحدث: снача́ла، пото́м، по́сле э́того، в семь часо́в.",
    },
  ],
  words: [
    {
      id: "d30-01", ru: "просыпа́ться", say: "prasypAtsa", en: "to wake up", ar: "يستيقظ", pos: "verb", forms: "просыпа́юсь, просыпа́ешься",
      ex: { ru: "Я просыпа́юсь в семь часо́в.", en: "I wake up at seven o'clock.", ar: "أستيقظ في الساعة السابعة." },
    },
    {
      id: "d30-02", ru: "встава́ть", say: "fstavAt'", en: "to get up", ar: "ينهض (من الفراش)", pos: "verb", forms: "встаю́, встаёшь",
      ex: { ru: "Я встаю́ ра́но.", en: "I get up early.", ar: "أنهض مبكّرًا." },
      note: { en: "-ва- disappears in the present: встаю́, встаёшь, встаю́т.", ar: "يختفي المقطع -ва- في الحاضر: встаю́، встаёшь، встаю́т." },
    },
    {
      id: "d30-03", ru: "умыва́ться", say: "umyvAtsa", en: "to wash (face and hands)", ar: "يغتسل (يغسل وجهه ويديه)", pos: "verb", forms: "умыва́юсь, умыва́ешься",
      ex: { ru: "Снача́ла я умыва́юсь.", en: "First I wash.", ar: "أوّلًا أغتسل." },
    },
    {
      id: "d30-04", ru: "одева́ться", say: "adivAtsa", en: "to get dressed", ar: "يرتدي ملابسه", pos: "verb", forms: "одева́юсь, одева́ешься",
      ex: { ru: "Пото́м я одева́юсь.", en: "Then I get dressed.", ar: "ثمّ أرتدي ملابسي." },
    },
    {
      id: "d30-05", ru: "занима́ться", say: "zanimAtsa", en: "to study, do homework; to do (an activity)", ar: "يذاكر، يدرس؛ يمارس (نشاطًا)", pos: "verb", forms: "занима́юсь, занима́ешься",
      ex: { ru: "Ве́чером я занима́юсь.", en: "In the evening I study.", ar: "في المساء أذاكر." },
    },
    {
      id: "d30-06", ru: "возвраща́ться", say: "vazvrashchAtsa", en: "to come back, return", ar: "يعود، يرجع", pos: "verb", forms: "возвраща́юсь, возвраща́ешься",
      ex: { ru: "Я возвраща́юсь в шесть часо́в.", en: "I come back at six o'clock.", ar: "أعود في الساعة السادسة." },
    },
    {
      id: "d30-07", ru: "ложи́ться спать", say: "lazhYtsa spat'", en: "to go to bed", ar: "يذهب إلى النوم", pos: "phrase", forms: "ложу́сь, ложи́шься спать",
      ex: { ru: "Я ложу́сь спать в оди́ннадцать.", en: "I go to bed at eleven.", ar: "أذهب إلى النوم في الحادية عشرة." },
    },
    {
      id: "d30-08", ru: "начина́ться", say: "nachinAtsa", en: "to begin, start (of events)", ar: "يبدأ (عن الأحداث)", pos: "verb", forms: "начина́ется, начина́ются",
      ex: { ru: "Рабо́та начина́ется в де́вять.", en: "Work starts at nine.", ar: "يبدأ العمل في التاسعة." },
    },
    {
      id: "d30-09", ru: "зака́нчиваться", say: "zakAnchivatsa", en: "to end, finish (of events)", ar: "ينتهي (عن الأحداث)", pos: "verb", forms: "зака́нчивается, зака́нчиваются",
      ex: { ru: "Фильм зака́нчивается по́здно.", en: "The film ends late.", ar: "ينتهي الفيلم متأخّرًا." },
    },
    {
      id: "d30-10", ru: "обы́чно", say: "abYchna", en: "usually", ar: "عادةً", pos: "adv",
      ex: { ru: "Обы́чно я встаю́ в семь.", en: "I usually get up at seven.", ar: "عادةً أنهض في السابعة." },
    },
    {
      id: "d30-11", ru: "ра́но", say: "rAna", en: "early", ar: "مبكّرًا", pos: "adv",
      ex: { ru: "Ма́ма всегда́ встаёт ра́но.", en: "Mum always gets up early.", ar: "أمّي تنهض دائمًا مبكّرًا." },
    },
    {
      id: "d30-12", ru: "по́здно", say: "pOzna", en: "late", ar: "متأخّرًا", pos: "adv",
      ex: { ru: "Макси́м ложи́тся спать по́здно.", en: "Maxim goes to bed late.", ar: "مكسيم يذهب إلى النوم متأخّرًا." },
      note: { en: "The д is silent: [pozna].", ar: "حرف д لا يُنطق: [pozna]." },
    },
    {
      id: "d30-13", ru: "снача́ла", say: "snachAla", en: "first, at first", ar: "أوّلًا، في البداية", pos: "adv",
      ex: { ru: "Снача́ла я умыва́юсь, пото́м одева́юсь.", en: "First I wash, then I get dressed.", ar: "أوّلًا أغتسل، ثمّ أرتدي ملابسي." },
    },
    {
      id: "d30-14", ru: "душ", say: "dush", en: "shower", ar: "دُشّ", pos: "noun", g: "m",
      ex: { ru: "Где здесь душ?", en: "Where is the shower here?", ar: "أين الدُّشّ هنا؟" },
    },
    {
      id: "d30-15", ru: "принима́ть душ", say: "prinimAt' dush", en: "to take a shower", ar: "يستحمّ", pos: "phrase", forms: "принима́ю, принима́ешь душ",
      ex: { ru: "У́тром я принима́ю душ.", en: "In the morning I take a shower.", ar: "في الصباح أستحمّ." },
    },
    {
      id: "d30-16", ru: "по́сле э́того", say: "pOsli Etava", en: "after that", ar: "بعد ذلك", pos: "phrase",
      ex: { ru: "Я пью ко́фе, а по́сле э́того чита́ю.", en: "I drink coffee, and after that I read.", ar: "أشرب القهوة، وبعد ذلك أقرأ." },
    },
    {
      id: "d30-17", ru: "в полови́не восьмо́го", say: "f palavIni vas'mOva", en: "at half past seven (7:30)", ar: "في السابعة والنصف", pos: "phrase",
      ex: { ru: "Я встаю́ в полови́не восьмо́го.", en: "I get up at half past seven.", ar: "أنهض في السابعة والنصف." },
      note: {
        en: "Literally 'in the half of the eighth (hour)': Russians count towards the next hour.",
        ar: "حرفيًا «في نصف الساعة الثامنة»: يعدّ الروس نحو الساعة التالية.",
      },
    },
    {
      id: "d30-18", ru: "в бу́дни", say: "v bUdni", en: "on weekdays", ar: "في أيام العمل (من الاثنين إلى الجمعة)", pos: "phrase",
      ex: { ru: "В бу́дни я встаю́ ра́но.", en: "On weekdays I get up early.", ar: "في أيام العمل أنهض مبكّرًا." },
    },
    {
      id: "d30-19", ru: "жа́воронок", say: "zhAvaranak", en: "lark; an early riser", ar: "قُبّرة؛ شخص يستيقظ مبكّرًا", pos: "noun", g: "m", forms: "мн. ч. жа́воронки",
      ex: { ru: "Я жа́воронок: я встаю́ ра́но.", en: "I'm a morning person: I get up early.", ar: "أنا من محبّي الصباح: أنهض مبكّرًا." },
    },
    {
      id: "d30-20", ru: "сова́", say: "savA", en: "owl; a night owl", ar: "بومة؛ شخص يسهر ليلًا", pos: "noun", g: "f", forms: "мн. ч. со́вы",
      ex: { ru: "Макси́м — сова́: он ложи́тся спать по́здно.", en: "Maxim is a night owl: he goes to bed late.", ar: "مكسيم من محبّي السهر: يذهب إلى النوم متأخّرًا." },
    },
  ],
  grammar: [
    {
      id: "d30-g1",
      title: { en: "Reflexive verbs: -ся and -сь", ar: "الأفعال الانعكاسية: -ся و-сь" },
      en: [
        "Many routine verbs end in -ся: просыпа́ться (to wake up), умыва́ться (to wash), одева́ться (to get dressed). Conjugate the verb as usual, then add -ся after a consonant and -сь after a vowel: я просыпа́юсь, ты просыпа́ешься.",
        "-ся often means you do the action to yourself: Ма́ма одева́ет ребёнка (dresses the child) — Ма́ма одева́ется (gets dressed). With events it means 'by itself': Рабо́та начина́ется в де́вять.",
        "The past follows the same rule: просыпа́лся (a man), просыпа́лась (a woman), просыпа́лись (plural).",
      ],
      ar: [
        "كثير من أفعال الروتين اليومي تنتهي بـ -ся: просыпа́ться (يستيقظ)، умыва́ться (يغتسل)، одева́ться (يرتدي ملابسه). صرِّف الفعل كالمعتاد، ثمّ أضف -ся بعد الحرف الساكن و-сь بعد الحرف الصوتي: я просыпа́юсь، ты просыпа́ешься.",
        "غالبًا ما تعني -ся أنّ الفاعل يقع عليه الفعل نفسه: Ма́ма одева́ет ребёнка (تُلبِس الطفل) — Ма́ма одева́ется (ترتدي ملابسها). ومع الأحداث تعني أنّ الشيء يحدث من تلقاء نفسه: Рабо́та начина́ется в де́вять.",
        "وفي الماضي تنطبق القاعدة نفسها: просыпа́лся (للرجل)، просыпа́лась (للمرأة)، просыпа́лись (للجمع).",
      ],
      tables: [
        {
          caption: { en: "просыпа́ться: present and past", ar: "просыпа́ться: الحاضر والماضي" },
          head: ["Person · الشخص", "Present · الحاضر", "Past · الماضي"],
          rows: [
            ["я", "просыпа́юсь", "просыпа́лся / просыпа́лась"],
            ["ты", "просыпа́ешься", "просыпа́лся / просыпа́лась"],
            ["он / она́", "просыпа́ется", "просыпа́лся / просыпа́лась"],
            ["мы", "просыпа́емся", "просыпа́лись"],
            ["вы", "просыпа́етесь", "просыпа́лись"],
            ["они́", "просыпа́ются", "просыпа́лись"],
          ],
        },
      ],
      examples: [
        { ru: "Ты обы́чно просыпа́ешься ра́но?", en: "Do you usually wake up early?", ar: "هل تستيقظ عادةً مبكّرًا؟" },
        { ru: "Ра́ньше я просыпа́лась в шесть часо́в.", en: "I used to wake up at six o'clock. (a woman speaking)", ar: "كنتُ أستيقظ سابقًا في السادسة. (امرأة تتكلّم)" },
        { ru: "Фильм начина́ется в семь, а зака́нчивается в де́вять.", en: "The film starts at seven and ends at nine.", ar: "يبدأ الفيلم في السابعة وينتهي في التاسعة." },
      ],
    },
    {
      id: "d30-g2",
      title: { en: "Two special verbs: встава́ть and ложи́ться", ar: "فعلان خاصّان: встава́ть وложи́ться" },
      en: [
        "встава́ть (to get up) loses -ва- in the present: встаю́, встаёшь, встаёт, встаём, встаёте, встаю́т. The stress falls on the ending.",
        "ложи́ться (to lie down) belongs to the second conjugation: ложу́сь, ложи́шься, ложи́тся… With спать it means 'to go to bed': Я ложу́сь спать в оди́ннадцать.",
        "In the past both are regular: встава́л, встава́ла; ложи́лся, ложи́лась.",
      ],
      ar: [
        "الفعل встава́ть (ينهض) يفقد -ва- في الحاضر: встаю́، встаёшь، встаёт، встаём، встаёте، встаю́т. ويقع النبر على النهاية.",
        "الفعل ложи́ться (يستلقي) من التصريف الثاني: ложу́сь، ложи́шься، ложи́тся… ومع спать يعني «يذهب إلى النوم»: Я ложу́сь спать в оди́ннадцать.",
        "وفي الماضي كلاهما منتظم: встава́л، встава́ла؛ ложи́лся، ложи́лась.",
      ],
      tables: [
        {
          caption: { en: "встава́ть and ложи́ться in the present", ar: "встава́ть وложи́ться في الحاضر" },
          head: ["Person · الشخص", "встава́ть", "ложи́ться"],
          rows: [
            ["я", "встаю́", "ложу́сь"],
            ["ты", "встаёшь", "ложи́шься"],
            ["он / она́", "встаёт", "ложи́тся"],
            ["мы", "встаём", "ложи́мся"],
            ["вы", "встаёте", "ложи́тесь"],
            ["они́", "встаю́т", "ложа́тся"],
          ],
        },
      ],
      examples: [
        { ru: "Во ско́лько вы встаёте?", en: "What time do you get up?", ar: "في أيّ ساعة تنهضون؟" },
        { ru: "Де́ти ложа́тся спать в де́вять.", en: "The children go to bed at nine.", ar: "يذهب الأطفال إلى النوم في التاسعة." },
      ],
    },
    {
      id: "d30-g3",
      title: { en: "Telling your day in order, with times", ar: "سرد يومك بالترتيب مع الأوقات" },
      en: [
        "Order your actions with снача́ла (first), пото́м (then) and по́сле э́того (after that): Снача́ла я умыва́юсь, пото́м одева́юсь, а по́сле э́того пью ко́фе.",
        "On the hour, use в + the number + час / часа́ / часо́в, as on day 18: в час, в два часа́, в семь часо́в.",
        "For half past, Russians look ahead to the next hour: в полови́не восьмо́го is 7:30, literally 'in the half of the eighth'. Learn a few as chunks.",
      ],
      ar: [
        "رتّب أفعالك باستخدام снача́ла (أوّلًا) وпото́м (ثمّ) وпо́сле э́того (بعد ذلك): Снача́ла я умыва́юсь, пото́м одева́юсь, а по́сле э́того пью ко́фе.",
        "عند الساعة تمامًا استخدم в + العدد + час / часа́ / часо́в كما في اليوم ١٨: в час، в два часа́، в семь часо́в.",
        "وعند النصف ينظر الروس إلى الساعة التالية: в полови́не восьмо́го تعني ٧:٣٠، وحرفيًا «في نصف الساعة الثامنة». احفظ بعضها كعبارات جاهزة.",
      ],
      tables: [
        {
          caption: { en: "Clock times as chunks", ar: "الأوقات كعبارات جاهزة" },
          head: ["Time · الوقت", "Russian · بالروسية"],
          rows: [
            ["7:00", "в семь часо́в"],
            ["7:30", "в полови́не восьмо́го"],
            ["8:30", "в полови́не девя́того"],
            ["9:00", "в де́вять часо́в"],
            ["12:30", "в полови́не пе́рвого"],
            ["23:00", "в оди́ннадцать часо́в"],
          ],
        },
      ],
      examples: [
        {
          ru: "Я встаю́ в семь часо́в, а в полови́не восьмо́го пью ко́фе.",
          en: "I get up at seven, and at half past seven I drink coffee.",
          ar: "أنهض في السابعة، وفي السابعة والنصف أشرب القهوة.",
        },
        { ru: "Снача́ла я рабо́таю, а по́сле э́того отдыха́ю.", en: "First I work, and after that I rest.", ar: "أوّلًا أعمل، وبعد ذلك أستريح." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Жа́воронок и сова́", en: "The lark and the owl", ar: "القُبّرة والبومة" },
    setting: {
      en: "Saturday afternoon. Maxim, Anna's brother, and Ahmed compare their weekdays.",
      ar: "بعد ظهر يوم السبت. مكسيم، أخو آنا، وأحمد يقارنان بين أيام عملهما.",
    },
    lines: [
      { who: "A", name: "Макси́м", ru: "Ахме́д, во ско́лько ты обы́чно встаёшь?", en: "Ahmed, what time do you usually get up?", ar: "يا أحمد، في أيّ ساعة تنهض عادةً؟" },
      { who: "A", name: "Ахме́д", ru: "Ра́но, в шесть часо́в. Я жа́воронок!", en: "Early, at six o'clock. I'm a lark!", ar: "مبكّرًا، في السادسة. أنا قُبّرة!" },
      { who: "A", name: "Макси́м", ru: "В шесть? А я сова́. Я просыпа́юсь в де́сять.", en: "At six? Well, I'm an owl. I wake up at ten.", ar: "في السادسة؟ أمّا أنا فبومة. أستيقظ في العاشرة." },
      {
        who: "A", name: "Ахме́д", ru: "Снача́ла я умыва́юсь и принима́ю душ. Пото́м одева́юсь и пью ко́фе.",
        en: "First I wash and take a shower. Then I get dressed and drink coffee.", ar: "أوّلًا أغتسل وأستحمّ. ثمّ أرتدي ملابسي وأشرب القهوة.",
      },
      { who: "A", name: "Макси́м", ru: "А во ско́лько начина́ется твоя́ рабо́та?", en: "And what time does your work start?", ar: "وفي أيّ ساعة يبدأ عملك؟" },
      { who: "A", name: "Ахме́д", ru: "В полови́не девя́того. А зака́нчивается в шесть.", en: "At half past eight. And it ends at six.", ar: "في الثامنة والنصف. وينتهي في السادسة." },
      { who: "A", name: "Макси́м", ru: "А по́сле э́того? Ты отдыха́ешь?", en: "And after that? Do you rest?", ar: "وبعد ذلك؟ هل تستريح؟" },
      {
        who: "A", name: "Ахме́д", ru: "Нет, я возвраща́юсь в семь и занима́юсь: чита́ю и пишу́ по-ру́сски.",
        en: "No, I come back at seven and study: I read and write in Russian.", ar: "لا، أعود في السابعة وأذاكر: أقرأ وأكتب بالروسية.",
      },
      {
        who: "A", name: "Макси́м", ru: "Хорошо́! А я рабо́таю до́ма. Моя́ рабо́та начина́ется в оди́ннадцать.",
        en: "Good for you! I work from home. My work starts at eleven.", ar: "رائع! أمّا أنا فأعمل من البيت. يبدأ عملي في الحادية عشرة.",
      },
      { who: "A", name: "Ахме́д", ru: "А во ско́лько ты ложи́шься спать?", en: "And what time do you go to bed?", ar: "وفي أيّ ساعة تذهب إلى النوم؟" },
      { who: "A", name: "Макси́м", ru: "По́здно, в два часа́ но́чи. А ты?", en: "Late, at two in the morning. And you?", ar: "متأخّرًا، في الثانية بعد منتصف الليل. وأنت؟" },
      {
        who: "A", name: "Ахме́д", ru: "В оди́ннадцать. Вот почему́ я жа́воронок, а ты сова́!",
        en: "At eleven. That's why I'm a lark and you're an owl!", ar: "في الحادية عشرة. لهذا أنا قُبّرة وأنت بومة!",
      },
    ],
  },
  pronunciation: {
    title: { en: "-ться and -тся: one sound, [tsa]", ar: "-ться و-тся: صوت واحد [tsa]" },
    en: [
      "The endings -ться (the infinitive) and -тся (he, she, they) are spelled differently but sound the same: a short [tsa]. The soft sign changes nothing here.",
      "After a vowel the particle is -сь, a soft [s']: просыпа́юсь sounds like [prasypAyus'].",
    ],
    ar: [
      "النهايتان -ться (في المصدر) و-тся (مع هو وهي وهم) تُكتبان بشكل مختلف لكنّهما تُنطقان بالطريقة نفسها: [tsa] قصيرة. والعلامة اللينة هنا لا تغيّر شيئًا.",
      "وبعد الحرف الصوتي تكون الأداة -сь، وتُنطق [s'] لينة: просыпа́юсь تُنطق [prasypAyus'].",
    ],
    drills: [
      { ru: "просыпа́ться", say: "prasypAtsa", focus: { en: "-ться is a short [tsa].", ar: "تُنطق -ться [tsa] قصيرة." } },
      { ru: "Он просыпа́ется.", say: "on prasypAyetsa.", focus: { en: "-тся sounds exactly like -ться.", ar: "-тся تُنطق تمامًا مثل -ться." } },
      { ru: "Я умыва́юсь.", say: "ya umyvAyus'.", focus: { en: "After a vowel: a soft -сь.", ar: "بعد الحرف الصوتي: -сь لينة." } },
      { ru: "Рабо́та начина́ется в де́вять.", say: "rabOta nachinAyetsa v dyEvit'.", focus: { en: "Keep -ется short and light.", ar: "انطق -ется قصيرة وخفيفة." } },
      { ru: "Я ложу́сь спать.", say: "ya lazhUs' spat'.", focus: { en: "ложу́сь: the stress is on the ending.", ar: "ложу́сь: النبر على النهاية." } },
    ],
  },
  exercises: [
    {
      kind: "fill",
      prompt: { en: "Use просыпа́ться: I wake up at seven.", ar: "استخدم просыпа́ться: أستيقظ في السابعة." },
      ru: "Я ___ в семь часо́в.",
      answers: ["просыпа́юсь"],
      why: { en: "я takes -ю, then -сь after the vowel: просыпа́юсь.", ar: "مع я نضيف -ю، ثمّ -сь بعد الحرف الصوتي: просыпа́юсь." },
    },
    {
      kind: "fill",
      prompt: { en: "Use одева́ться: Anna is getting dressed.", ar: "استخدم одева́ться: آنا ترتدي ملابسها." },
      ru: "А́нна ___.",
      answers: ["одева́ется"],
      why: { en: "она́ takes -ет, then -ся after the consonant.", ar: "مع она́ نضيف -ет، ثمّ -ся بعد الحرف الساكن." },
    },
    {
      kind: "fill",
      prompt: { en: "Use встава́ть: What time do you get up?", ar: "استخدم встава́ть: في أيّ ساعة تنهض؟" },
      ru: "Во ско́лько ты ___?",
      answers: ["встаёшь", "встаешь"],
      why: { en: "встава́ть loses -ва- in the present: встаёшь.", ar: "встава́ть يفقد -ва- في الحاضر: встаёшь." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Work starts at nine o'clock.", ar: "أكمل: يبدأ العمل في الساعة التاسعة." },
      ru: "Рабо́та ___ в де́вять часо́в.",
      answers: ["начина́ется"],
      why: { en: "An event starts by itself: начина́ется, with -ся.", ar: "الحدث يبدأ من تلقاء نفسه: начина́ется مع -ся." },
    },
    {
      kind: "fill",
      prompt: { en: "Put возвраща́ться in the past: Yesterday Maxim came back late.", ar: "ضع возвраща́ться في الماضي: أمس عاد مكسيم متأخّرًا." },
      ru: "Вчера́ Макси́м ___ по́здно.",
      answers: ["возвраща́лся"],
      why: { en: "A man in the past: -л, then -ся after the consonant.", ar: "رجل في الماضي: -л، ثمّ -ся بعد الحرف الساكن." },
    },
    {
      kind: "choice",
      prompt: { en: "Which form is right? Мы ___ в семь часо́в. (we wake up)", ar: "أيّ صيغة صحيحة؟ Мы ___ в семь часо́в. (نستيقظ)" },
      options: ["просыпа́емся", "просыпа́емсь", "просыпа́ется"],
      answer: 0,
      why: { en: "After a consonant (м) the particle is -ся.", ar: "بعد الحرف الساكن (м) تكون الأداة -ся." },
    },
    {
      kind: "choice",
      prompt: { en: "What time is в полови́не восьмо́го?", ar: "كم الساعة في عبارة в полови́не восьмо́го؟" },
      options: ["7:30", "8:30", "8:00"],
      answer: 0,
      why: { en: "Russians count towards the next hour: half of the eighth hour is 7:30.", ar: "يعدّ الروس نحو الساعة التالية: نصف الساعة الثامنة هو ٧:٣٠." },
    },
    {
      kind: "choice",
      prompt: { en: "Maxim goes to bed at 2 a.m. What is he?", ar: "مكسيم يذهب إلى النوم في الثانية ليلًا. ماذا نسمّيه؟" },
      options: ["сова́", "жа́воронок", "душ"],
      answer: 0,
      why: { en: "A сова́ (owl) goes to bed late; a жа́воронок (lark) gets up early.", ar: "сова́ (البومة) تنام متأخّرة، وжа́воронок (القُبّرة) تستيقظ مبكّرًا." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: First I wash, then I get dressed.", ar: "كوّن الجملة: أوّلًا أغتسل، ثمّ أرتدي ملابسي." },
      tokens: ["пото́м", "умыва́юсь", "Снача́ла", "одева́юсь", "я"],
      answers: ["Снача́ла я умыва́юсь, пото́м одева́юсь."],
      why: { en: "снача́ла … пото́м … puts actions in order.", ar: "снача́ла … пото́м … ترتّب الأفعال." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I usually go to bed late.", ar: "كوّن الجملة: عادةً أذهب إلى النوم متأخّرًا." },
      tokens: ["спать", "Я", "по́здно", "ложу́сь", "обы́чно"],
      answers: ["Я обы́чно ложу́сь спать по́здно.", "Обы́чно я ложу́сь спать по́здно.", "Я обы́чно по́здно ложу́сь спать."],
      why: { en: "ложи́ться спать = to go to bed; обы́чно usually comes before the verb.", ar: "ложи́ться спать = يذهب إلى النوم، وكلمة обы́чно تأتي عادةً قبل الفعل." },
    },
    {
      kind: "translate",
      prompt: { en: "I get up at seven o'clock.", ar: "أنهض في الساعة السابعة." },
      answers: ["Я встаю́ в семь часо́в.", "Я встаю́ в семь.", "В семь часо́в я встаю́."],
      why: { en: "встава́ть gives я встаю́; 'at seven' is в семь часо́в.", ar: "встава́ть تعطي я встаю́، و«في السابعة» هي в семь часо́в." },
    },
    {
      kind: "translate",
      prompt: { en: "The film ends late.", ar: "ينتهي الفيلم متأخّرًا." },
      answers: ["Фильм зака́нчивается по́здно.", "Фильм по́здно зака́нчивается."],
      why: { en: "An event ends by itself: зака́нчивается.", ar: "الحدث ينتهي من تلقاء نفسه: зака́нчивается." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What time does Anna get up?", ar: "استمع. في أيّ ساعة تنهض آنا؟" },
      ru: "А́нна встаёт в полови́не восьмо́го.",
      listen: true,
      options: ["7:30", "8:30", "7:00"],
      answer: 0,
      why: { en: "в полови́не восьмо́го = 7:30.", ar: "в полови́не восьмо́го تعني السابعة والنصف (٧:٣٠)." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the man do first?", ar: "استمع. ماذا يفعل الرجل أوّلًا؟" },
      ru: "Снача́ла я принима́ю душ, а пото́м пью ко́фе.",
      listen: true,
      options: ["He takes a shower. · يستحمّ.", "He drinks coffee. · يشرب القهوة.", "He goes to bed. · يذهب إلى النوم."],
      answer: 0,
      why: { en: "Снача́ла (first) goes with принима́ю душ.", ar: "كلمة Снача́ла (أوّلًا) جاءت مع принима́ю душ." },
    },
  ],
  topics: ["daily-routine", "reflexive-verbs", "time"],
  search: ["Russian reflexive verbs ся сь explained", "Russian daily routine vocabulary lesson"],
  speaking: {
    scenario: {
      en: "Describe your typical weekday from waking up to going to bed, then ask the tutor about theirs and compare: who is the lark and who is the owl?",
      ar: "صف يوم عملك المعتاد من الاستيقاظ حتى النوم، ثمّ اسأل المدرّس عن يومه وقارِن: من القُبّرة ومن البومة؟",
    },
    tutorBrief:
      "Play Maxim (Максим), Anna's brother, a programmer who works from home and is a night owl (сова). Ask the learner about their typical weekday: во сколько ты просыпаешься и встаёшь, что ты делаешь сначала, потом, после этого, во сколько начинается и заканчивается работа, во сколько ты ложишься спать. Describe your own late routine for contrast. Use the -ся verbs просыпаться, умываться, одеваться, заниматься, возвращаться, ложиться спать, начинаться, заканчиваться, plus встаю / встаёшь, обычно, рано, поздно and clock times (в семь часов, в половине восьмого). If the learner drops -ся / -сь, repeat the sentence correctly once. Finish by saying who is the lark (жаворонок) and who is the owl.",
    prompts: [
      { ru: "Обы́чно я просыпа́юсь в семь часо́в.", en: "I usually wake up at seven o'clock.", ar: "عادةً أستيقظ في السابعة." },
      { ru: "Снача́ла я умыва́юсь, пото́м одева́юсь.", en: "First I wash, then I get dressed.", ar: "أوّلًا أغتسل، ثمّ أرتدي ملابسي." },
      { ru: "Моя́ рабо́та начина́ется в де́вять.", en: "My work starts at nine.", ar: "يبدأ عملي في التاسعة." },
      { ru: "Во ско́лько ты ложи́шься спать?", en: "What time do you go to bed?", ar: "في أيّ ساعة تذهب إلى النوم؟" },
      { ru: "Я жа́воронок, а ты сова́!", en: "I'm a lark, and you're an owl!", ar: "أنا قُبّرة، وأنت بومة!" },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about your typical weekday: when you wake up and get up, what you do first and after that, when your work or classes start and end, when you come back and when you go to bed. Are you a жа́воронок or a сова́?",
    ar: "اكتب من ٥ إلى ٨ جمل عن يوم عملك المعتاد: متى تستيقظ وتنهض، وماذا تفعل أوّلًا وبعد ذلك، ومتى يبدأ عملك أو دروسك وينتهي، ومتى تعود ومتى تذهب إلى النوم. هل أنت жа́воронок أم сова́؟",
  },
  culture: {
    en: "Russians sort people into жа́воронки (larks), who get up early, and со́вы (owls), who go to bed late. Asking a new colleague Ты жа́воронок? or Ты сова́? is friendly small talk.",
    ar: "يقسّم الروس الناس إلى жа́воронки (القُبّرات) الذين يستيقظون مبكّرًا، وсо́вы (البوم) الذين ينامون متأخّرين. وسؤال زميل جديد: Ты жа́воронок? أو Ты сова́? من أحاديث التعارف الودّية الشائعة.",
  },
};

const DAY_31: Day = {
  n: 31,
  week: 5,
  kind: "lesson",
  title: { ru: "У меня́ нет вре́мени", en: "I have no time: the genitive 1", ar: "ليس عندي وقت: حالة الإضافة (١)" },
  goals: [
    {
      en: "Say what you and other people have and don't have: у меня́ есть… / у меня́ нет…",
      ar: "أن تقول ما لديك ولدى الآخرين وما ليس لديكم: у меня́ есть… / у меня́ нет…",
    },
    { en: "Form the genitive singular of nouns: -а / -я, -ы / -и.", ar: "أن تكوّن صيغة الإضافة المفردة للأسماء: -а / -я، -ы / -и." },
    { en: "Make polite excuses: К сожале́нию, у меня́ нет вре́мени.", ar: "أن تعتذر بلطف: К сожале́нию, у меня́ нет вре́мени." },
  ],
  words: [
    {
      id: "d31-01", ru: "вре́мя", say: "vryEmya", en: "time", ar: "وقت", pos: "noun", g: "n", forms: "род. п. вре́мени",
      ex: { ru: "Сейча́с у меня́ есть вре́мя.", en: "I have time now.", ar: "لديّ وقت الآن." },
      note: { en: "A neuter noun in -мя; its genitive is вре́мени.", ar: "اسم محايد ينتهي بـ -мя، وصيغة الإضافة منه вре́мени." },
    },
    {
      id: "d31-02", ru: "соба́ка", say: "sabAka", en: "dog", ar: "كلب", pos: "noun", g: "f",
      ex: { ru: "У бра́та есть соба́ка.", en: "My brother has a dog.", ar: "لدى أخي كلب." },
    },
    {
      id: "d31-03", ru: "ко́шка", say: "kOshka", en: "cat", ar: "قطّة", pos: "noun", g: "f",
      ex: { ru: "У нас нет ко́шки.", en: "We don't have a cat.", ar: "ليست لدينا قطّة." },
      note: { en: "кот is a tomcat; ко́шка is a cat in general.", ar: "кот هو القطّ الذكر، أمّا ко́шка فهي القطّة بوجه عام." },
    },
    {
      id: "d31-04", ru: "да́ча", say: "dAcha", en: "dacha, country house", ar: "بيت ريفي (داتشا)", pos: "noun", g: "f",
      ex: { ru: "У ба́бушки есть да́ча.", en: "Grandma has a dacha.", ar: "لدى الجدّة بيت ريفي." },
    },
    {
      id: "d31-05", ru: "вопро́с", say: "vaprOs", en: "question", ar: "سؤال", pos: "noun", g: "m",
      ex: { ru: "У меня́ вопро́с.", en: "I have a question.", ar: "لديّ سؤال." },
    },
    {
      id: "d31-06", ru: "пробле́ма", say: "prablyEma", en: "problem", ar: "مشكلة", pos: "noun", g: "f",
      ex: { ru: "У нас пробле́ма.", en: "We have a problem.", ar: "لدينا مشكلة." },
    },
    {
      id: "d31-07", ru: "иде́я", say: "idyEya", en: "idea", ar: "فكرة", pos: "noun", g: "f",
      ex: { ru: "У меня́ есть иде́я!", en: "I have an idea!", ar: "لديّ فكرة!" },
    },
    {
      id: "d31-08", ru: "па́спорт", say: "pAspart", en: "passport", ar: "جواز سفر", pos: "noun", g: "m", forms: "мн. ч. паспорта́",
      ex: { ru: "У вас есть па́спорт?", en: "Do you have a passport?", ar: "هل لديك جواز سفر؟" },
    },
    {
      id: "d31-09", ru: "кошелёк", say: "kashylYok", en: "wallet, purse", ar: "محفظة", pos: "noun", g: "m", forms: "род. п. кошелька́",
      ex: { ru: "Где мой кошелёк?", en: "Where is my wallet?", ar: "أين محفظتي؟" },
      note: { en: "The ё drops out when an ending is added: кошелька́.", ar: "يسقط حرف ё عند إضافة نهاية: кошелька́." },
    },
    {
      id: "d31-10", ru: "телеви́зор", say: "tilivIzar", en: "television, TV set", ar: "تلفاز", pos: "noun", g: "m",
      ex: { ru: "В ко́мнате нет телеви́зора.", en: "There is no TV in the room.", ar: "لا يوجد تلفاز في الغرفة." },
    },
    {
      id: "d31-11", ru: "холоди́льник", say: "khaladIl'nik", en: "fridge", ar: "ثلّاجة", pos: "noun", g: "m",
      ex: { ru: "Молоко́ в холоди́льнике.", en: "The milk is in the fridge.", ar: "الحليب في الثلّاجة." },
    },
    {
      id: "d31-12", ru: "вещь", say: "vyeshch'", en: "thing; (plural) belongings", ar: "شيء؛ (بالجمع) أغراض", pos: "noun", g: "f", forms: "мн. ч. ве́щи",
      ex: { ru: "Где мои́ ве́щи?", en: "Where are my things?", ar: "أين أغراضي؟" },
    },
    {
      id: "d31-13", ru: "к сожале́нию", say: "k sazhylyEniyu", en: "unfortunately", ar: "للأسف", pos: "phrase",
      ex: { ru: "К сожале́нию, у меня́ нет вре́мени.", en: "Unfortunately, I have no time.", ar: "للأسف، ليس لديّ وقت." },
    },
    {
      id: "d31-14", ru: "ничего́", say: "nichivO", en: "nothing; (as a reply) that's all right", ar: "لا شيء؛ (كردّ) لا بأس", pos: "pron",
      ex: { ru: "— Извини́те! — Ничего́.", en: "— Sorry! — That's all right.", ar: "— آسف! — لا بأس." },
      note: { en: "г in -его / -ого sounds like v: [nichivO].", ar: "حرف г في -его / -ого يُنطق v: [nichivO]." },
    },
    { id: "d31-15", ru: "У меня́ нет вре́мени.", say: "u minyA nyet vryEmini.", en: "I have no time. / I'm busy.", ar: "ليس لديّ وقت.", pos: "phrase" },
    {
      id: "d31-16", ru: "Нет пробле́м!", say: "nyet prablyEm!", en: "No problem!", ar: "لا مشكلة!", pos: "phrase",
      note: { en: "пробле́м is the genitive plural; learn the phrase as a whole.", ar: "пробле́м صيغة إضافة في الجمع؛ احفظ العبارة كاملة." },
    },
    { id: "d31-17", ru: "Ничего́ стра́шного.", say: "nichivO strAshnava.", en: "It's no big deal. / Don't worry.", ar: "لا بأس، الأمر ليس خطيرًا.", pos: "phrase" },
    {
      id: "d31-18", ru: "Вот он!", say: "vot on!", en: "There it is! (for a masculine noun)", ar: "ها هو!", pos: "phrase",
      note: { en: "For a feminine noun: Вот она́!", ar: "للاسم المؤنّث: Вот она́!" },
    },
  ],
  grammar: [
    {
      id: "d31-g1",
      title: { en: "The genitive singular: endings", ar: "صيغة الإضافة في المفرد: النهايات" },
      en: [
        "The genitive answers кого́? / чего́? — the genitive forms of 'who?' and 'what?'. Today it follows нет and у; tomorrow it follows numbers, мно́го and several prepositions.",
        "Masculine and neuter nouns take -а (after a hard consonant or -о) or -я (after -й, -ь or -е): па́спорт → па́спорта, слова́рь → словаря́, молоко́ → молока́, мо́ре → мо́ря.",
        "Feminine nouns take -ы, or -и after -я, -ь or г к х ж ш ч щ: маши́на → маши́ны, иде́я → иде́и, вещь → ве́щи, соба́ка → соба́ки. Two special ones: вре́мя → вре́мени, and кошелёк → кошелька́ (the ё drops out).",
      ],
      ar: [
        "تجيب حالة الإضافة عن السؤالين кого́? / чего́? وهما صيغتا «مَن؟» و«ماذا؟» في حالة الإضافة. وتأتي اليوم بعد нет وу، وغدًا بعد الأعداد وмно́го وعدد من حروف الجر.",
        "الأسماء المذكّرة والمحايدة تأخذ -а (بعد الحرف الساكن الصلب أو -о) أو -я (بعد -й أو -ь أو -е): па́спорт ← па́спорта، слова́рь ← словаря́، молоко́ ← молока́، мо́ре ← мо́ря.",
        "الأسماء المؤنّثة تأخذ -ы، أو -и بعد -я أو -ь أو الحروف г к х ж ш ч щ: маши́на ← маши́ны، иде́я ← иде́и، вещь ← ве́щи، соба́ка ← соба́ки. وهناك حالتان خاصّتان: вре́мя ← вре́мени، وкошелёк ← кошелька́ (يسقط حرف ё).",
      ],
      tables: [
        {
          caption: { en: "Genitive singular endings", ar: "نهايات صيغة الإضافة في المفرد" },
          head: ["Nominative · حالة الرفع", "Genitive · حالة الإضافة", "Ending · النهاية"],
          rows: [
            ["па́спорт (m)", "па́спорта", "-а"],
            ["музе́й (m)", "музе́я", "-я"],
            ["молоко́ (n)", "молока́", "-а"],
            ["мо́ре (n)", "мо́ря", "-я"],
            ["маши́на (f)", "маши́ны", "-ы"],
            ["соба́ка (f)", "соба́ки", "-и"],
            ["иде́я (f)", "иде́и", "-и"],
            ["вещь (f)", "ве́щи", "-и"],
          ],
        },
      ],
      examples: [
        { ru: "Здесь нет холоди́льника.", en: "There is no fridge here.", ar: "لا توجد ثلّاجة هنا." },
        { ru: "У меня́ нет соба́ки, но есть ко́шка.", en: "I don't have a dog, but I have a cat.", ar: "ليس لديّ كلب، لكن لديّ قطّة." },
      ],
    },
    {
      id: "d31-g2",
      title: { en: "нет + genitive: 'there is no…', 'I don't have…'", ar: "нет + حالة الإضافة: «لا يوجد…»، «ليس لديّ…»" },
      en: [
        "есть (there is) takes the nominative; нет (there is no) takes the genitive: Здесь есть телеви́зор. — Здесь нет телеви́зора.",
        "The same with 'have': У меня́ есть маши́на. — У меня́ нет маши́ны. Think of нет as 'there is none of…': the noun after it goes into the genitive, whatever its gender.",
        "It works for people too: Ма́мы нет до́ма. — Mum isn't at home.",
      ],
      ar: [
        "بعد есть (يوجد) يأتي الاسم في حالة الرفع، أمّا بعد нет (لا يوجد) فيأتي في حالة الإضافة: Здесь есть телеви́зор. — Здесь нет телеви́зора.",
        "وكذلك مع التملّك: У меня́ есть маши́на. — У меня́ нет маши́ны. فكّر في нет على أنّها «لا يوجد شيء من…»: يأتي الاسم بعدها في حالة الإضافة أيًّا كان جنسه.",
        "ويصحّ ذلك مع الأشخاص أيضًا: Ма́мы нет до́ма. — أمّي ليست في البيت.",
      ],
      tables: [
        {
          caption: { en: "есть + nominative, нет + genitive", ar: "есть + حالة الرفع، нет + حالة الإضافة" },
          head: ["есть · يوجد", "нет · لا يوجد"],
          rows: [
            ["У меня́ есть па́спорт.", "У меня́ нет па́спорта."],
            ["Здесь есть душ.", "Здесь нет ду́ша."],
            ["У нас есть да́ча.", "У нас нет да́чи."],
            ["У него́ есть вре́мя.", "У него́ нет вре́мени."],
          ],
        },
      ],
      examples: [
        { ru: "К сожале́нию, у меня́ нет вре́мени.", en: "Unfortunately, I have no time.", ar: "للأسف، ليس لديّ وقت." },
        { ru: "Ма́мы нет до́ма.", en: "Mum isn't at home.", ar: "أمّي ليست في البيت." },
      ],
    },
    {
      id: "d31-g3",
      title: { en: "у + genitive: who has it", ar: "у + حالة الإضافة: مَن لديه الشيء" },
      en: [
        "'I have' is literally 'at me there is' — very like the Arabic عندي: у меня́ есть… Put the owner in the genitive after у: у бра́та, у сестры́, у А́нны, у Макси́ма.",
        "Pronouns take an extra н- after у: у него́, у неё, у них — never у его́. The full set: у меня́, у тебя́, у него́, у неё, у нас, у вас, у них.",
        "When you are not stressing that the thing exists at all, есть is often dropped: У меня́ вопро́с. У нас пробле́ма.",
      ],
      ar: [
        "عبارة у меня́ есть… تشبه كثيرًا «عندي» في العربية، فمعناها الحرفي «عندي يوجد». ضع المالك بعد у في حالة الإضافة: у бра́та، у сестры́، у А́нны، у Макси́ма.",
        "الضمائر تأخذ حرف н- إضافيًّا بعد у: у него́، у неё، у них — ولا نقول у его́ أبدًا. والمجموعة كاملة: у меня́، у тебя́، у него́، у неё، у нас، у вас، у них.",
        "وعندما لا يكون التركيز على وجود الشيء أصلًا تُحذف есть غالبًا: У меня́ вопро́с. У нас пробле́ма.",
      ],
      tables: [
        {
          caption: { en: "у + pronouns", ar: "у + الضمائر" },
          head: ["Pronoun · الضمير", "у + genitive · у + حالة الإضافة", "Meaning · المعنى"],
          rows: [
            ["я", "у меня́", "I have · لديّ"],
            ["ты", "у тебя́", "you have · لديك"],
            ["он", "у него́", "he has · لديه"],
            ["она́", "у неё", "she has · لديها"],
            ["мы", "у нас", "we have · لدينا"],
            ["вы", "у вас", "you have · لديكم"],
            ["они́", "у них", "they have · لديهم"],
          ],
        },
      ],
      examples: [
        { ru: "У неё есть соба́ка, а у него́ — ко́шка.", en: "She has a dog, and he has a cat.", ar: "لديها كلب، ولديه قطّة." },
        { ru: "У Макси́ма нет маши́ны.", en: "Maxim doesn't have a car.", ar: "ليست لدى مكسيم سيّارة." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Где мой кошелёк?", en: "Where is my wallet?", ar: "أين محفظتي؟" },
    setting: {
      en: "Evening at Ahmed's flat. He and Anna are about to leave for the cinema, but he can't find his wallet.",
      ar: "مساءً في شقّة أحمد. هو وآنا على وشك الخروج إلى السينما، لكنّه لا يجد محفظته.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, фильм начина́ется в во́семь! У нас нет вре́мени!", en: "Ahmed, the film starts at eight! We have no time!", ar: "يا أحمد، الفيلم يبدأ في الثامنة! ليس لدينا وقت!" },
      { who: "A", name: "Ахме́д", ru: "Да, да… Но у меня́ пробле́ма. Где мой кошелёк?", en: "Yes, yes… But I have a problem. Where is my wallet?", ar: "نعم، نعم… لكن لديّ مشكلة. أين محفظتي؟" },
      { who: "B", name: "А́нна", ru: "Его́ нет в су́мке?", en: "Isn't it in your bag?", ar: "أليست في الحقيبة؟" },
      {
        who: "A", name: "Ахме́д", ru: "Нет. В су́мке нет кошелька́, и па́спорта то́же нет!",
        en: "No. There's no wallet in the bag, and no passport either!", ar: "لا. المحفظة ليست في الحقيبة، ولا جواز السفر أيضًا!",
      },
      { who: "B", name: "А́нна", ru: "Ничего́ стра́шного. Что ты де́лал ве́чером?", en: "Don't worry. What did you do this evening?", ar: "لا بأس. ماذا فعلتَ هذا المساء؟" },
      { who: "A", name: "Ахме́д", ru: "Я чита́л, пото́м смотре́л телеви́зор и пил чай.", en: "I read, then I watched TV and drank tea.", ar: "قرأتُ، ثمّ شاهدتُ التلفاز وشربتُ الشاي." },
      { who: "B", name: "А́нна", ru: "А где молоко́? В холоди́льнике?", en: "And where's the milk? In the fridge?", ar: "وأين الحليب؟ في الثلّاجة؟" },
      {
        who: "A", name: "Ахме́д", ru: "Холоди́льник! Вот он! Мой кошелёк в холоди́льнике!",
        en: "The fridge! There it is! My wallet is in the fridge!", ar: "الثلّاجة! ها هي! محفظتي في الثلّاجة!",
      },
      { who: "B", name: "А́нна", ru: "В холоди́льнике?! А па́спорт?", en: "In the fridge?! And the passport?", ar: "في الثلّاجة؟! وجواز السفر؟" },
      { who: "A", name: "Ахме́д", ru: "Па́спорт тут, на столе́. Нет пробле́м!", en: "The passport is here, on the table. No problem!", ar: "جواز السفر هنا، على الطاولة. لا مشكلة!" },
      { who: "B", name: "А́нна", ru: "Отли́чно! А у тебя́ есть биле́ты?", en: "Great! And do you have the tickets?", ar: "ممتاز! وهل التذاكر معك؟" },
      { who: "A", name: "Ахме́д", ru: "Биле́ты? Они́ у тебя́, А́нна!", en: "The tickets? You've got them, Anna!", ar: "التذاكر؟ إنّها معكِ يا آنا!" },
    ],
  },
  pronunciation: {
    title: { en: "г sounds like [v] in -ого and -его", ar: "حرف г يُنطق [v] في -ого و-его" },
    en: [
      "In the endings -ого and -его the letter г is pronounced [v]: его́ [yivO], ничего́ [nichivO], сего́дня [sivOdnya].",
      "The same happens in у него́ [u nivO]. Elsewhere г keeps its normal sound: где, го́род. At the very end of a word it becomes [k]: друг [druk].",
    ],
    ar: [
      "في النهايتين -ого و-его يُنطق حرف г مثل [v]: его́ [yivO]، ничего́ [nichivO]، сего́дня [sivOdnya].",
      "ويحدث الشيء نفسه في у него́ [u nivO]. وفي غير ذلك يحتفظ г بصوته العادي: где، го́род. وفي آخر الكلمة يصبح [k]: друг [druk].",
    ],
    drills: [
      { ru: "ничего́", say: "nichivO", focus: { en: "г sounds like v.", ar: "حرف г يُنطق v." } },
      { ru: "Ничего́ стра́шного.", say: "nichivO strAshnava.", focus: { en: "Two -ого endings, both with [v].", ar: "نهايتان -ого، وكلتاهما بصوت [v]." } },
      { ru: "У него́ нет маши́ны.", say: "u nivO nyet mashYny.", focus: { en: "у него́ is [u nivO], stressed at the end.", ar: "у него́ تُنطق [u nivO]، والنبر في آخرها." } },
      { ru: "У неё нет вре́мени.", say: "u niyO nyet vryEmini.", focus: { en: "In неё the ё carries the stress.", ar: "في неё يحمل حرف ё النبر." } },
      { ru: "Здесь нет холоди́льника.", say: "zdyes' nyet khaladIl'nika.", focus: { en: "One stress in a long word: холоди́льника.", ar: "نبر واحد في الكلمة الطويلة: холоди́льника." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the genitive of маши́на.", ar: "اختر صيغة الإضافة من маши́на." },
      options: ["маши́ны", "маши́на", "маши́ну", "маши́не"],
      answer: 0,
      why: { en: "A feminine noun in -а takes -ы in the genitive.", ar: "الاسم المؤنّث المنتهي بـ -а يأخذ -ы في حالة الإضافة." },
    },
    {
      kind: "choice",
      prompt: { en: "Choose the genitive of соба́ка.", ar: "اختر صيغة الإضافة من соба́ка." },
      options: ["соба́кы", "соба́ки", "соба́ка"],
      answer: 1,
      why: { en: "After к write и, never ы: соба́ки.", ar: "بعد к نكتب и وليس ы أبدًا: соба́ки." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: I don't have a passport.", ar: "أكمل: ليس لديّ جواز سفر." },
      ru: "У меня́ нет ___.",
      answers: ["па́спорта"],
      why: { en: "нет + genitive: па́спорт → па́спорта.", ar: "нет + حالة الإضافة: па́спорт ← па́спорта." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: There is no TV here.", ar: "أكمل: لا يوجد تلفاز هنا." },
      ru: "Здесь нет ___.",
      answers: ["телеви́зора"],
      why: { en: "A masculine noun takes -а after нет.", ar: "الاسم المذكّر يأخذ -а بعد нет." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Sorry, I have no time.", ar: "أكمل: آسف، ليس لديّ وقت." },
      ru: "Извини́те, у меня́ нет ___.",
      answers: ["вре́мени"],
      why: { en: "вре́мя has a special genitive: вре́мени.", ar: "لكلمة вре́мя صيغة إضافة خاصّة: вре́мени." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with a pronoun: He has a dog.", ar: "أكمل بضمير: لديه كلب." },
      ru: "У ___ есть соба́ка.",
      answers: ["него́"],
      why: { en: "After у, он becomes него́ — with an extra н.", ar: "بعد у يصبح он: него́، بحرف н إضافي." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Mum has a dacha.", ar: "أكمل: لدى أمّي بيت ريفي." },
      ru: "У ___ есть да́ча.",
      answers: ["ма́мы"],
      why: { en: "The owner after у goes into the genitive: ма́ма → ма́мы.", ar: "المالك بعد у يأتي في حالة الإضافة: ма́ма ← ма́мы." },
    },
    {
      kind: "choice",
      prompt: { en: "A friend invites you out, but you are busy. What do you say?", ar: "صديقك يدعوك للخروج لكنّك مشغول. ماذا تقول؟" },
      options: ["К сожале́нию, у меня́ нет вре́мени.", "У меня́ есть вре́мя.", "Нет пробле́м!"],
      answer: 0,
      why: { en: "к сожале́нию + нет вре́мени is a polite excuse.", ar: "к сожале́нию مع нет вре́мени اعتذار مهذّب." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: We don't have a car.", ar: "كوّن الجملة: ليست لدينا سيّارة." },
      tokens: ["нас", "маши́ны", "У", "нет"],
      answers: ["У нас нет маши́ны."],
      why: { en: "у нас нет + genitive.", ar: "у нас нет + حالة الإضافة." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: Maxim has a question.", ar: "كوّن الجملة: لدى مكسيم سؤال." },
      tokens: ["Макси́ма", "вопро́с", "У", "есть"],
      answers: ["У Макси́ма есть вопро́с."],
      why: { en: "The owner after у is in the genitive: Макси́ма.", ar: "المالك بعد у في حالة الإضافة: Макси́ма." },
    },
    {
      kind: "translate",
      prompt: { en: "She doesn't have a cat.", ar: "ليست لديها قطّة." },
      answers: ["У неё нет ко́шки."],
      why: { en: "у неё нет + genitive: ко́шка → ко́шки.", ar: "у неё нет + حالة الإضافة: ко́шка ← ко́шки." },
    },
    {
      kind: "translate",
      prompt: { en: "Where is my wallet?", ar: "أين محفظتي؟" },
      answers: ["Где мой кошелёк?"],
      why: { en: "кошелёк is masculine, so мой.", ar: "кошелёк مذكّر، لذلك мой." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is missing from the room?", ar: "استمع. ما الشيء غير الموجود في الغرفة؟" },
      ru: "В ко́мнате нет холоди́льника.",
      listen: true,
      options: ["a fridge · ثلّاجة", "a TV · تلفاز", "a table · طاولة"],
      answer: 0,
      why: { en: "холоди́льника is the genitive of холоди́льник.", ar: "холоди́льника هي صيغة الإضافة من холоди́льник." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Who has a dog?", ar: "استمع. مَن لديه كلب؟" },
      ru: "У сестры́ есть соба́ка, а у бра́та — ко́шка.",
      listen: true,
      options: ["the sister · الأخت", "the brother · الأخ", "nobody · لا أحد"],
      answer: 0,
      why: { en: "у сестры́ есть соба́ка: the sister has the dog.", ar: "у сестры́ есть соба́ка: الأخت لديها الكلب." },
    },
  ],
  topics: ["genitive", "family"],
  search: ["Russian genitive case у меня нет explained", "Russian genitive singular endings for beginners"],
  speaking: {
    scenario: {
      en: "Tell the tutor what you and your family have and don't have (a car, a dacha, a dog or a cat…), then turn down three invitations with polite excuses.",
      ar: "أخبر المدرّس بما لديك ولدى عائلتك وما ليس لديكم (سيّارة، بيت ريفي، كلب أو قطّة…)، ثمّ اعتذر بلطف عن ثلاث دعوات.",
    },
    tutorBrief:
      "Play Anna (Анна), a friendly student. First ask the learner what they and their family have: У тебя есть машина / собака / кошка / дача? А у брата? А у сестры? Expect answers with у + genitive and нет + genitive (у меня нет машины, у брата есть собака). Then invite the learner three times (в театр, в музей, в парк) so that they practise polite refusals: К сожалению, у меня нет времени. Reply kindly: Ничего страшного! Stay within today's words (время, собака, кошка, дача, вопрос, проблема, идея, паспорт, кошелёк, телевизор, холодильник, вещь, к сожалению, ничего) and earlier ones. When the learner uses the nominative after нет, repeat the correct genitive once. End on a positive note: Нет проблем!",
    prompts: [
      { ru: "У меня́ есть брат и сестра́.", en: "I have a brother and a sister.", ar: "لديّ أخ وأخت." },
      { ru: "У нас нет да́чи.", en: "We don't have a dacha.", ar: "ليس لدينا بيت ريفي." },
      { ru: "У бра́та есть соба́ка.", en: "My brother has a dog.", ar: "لدى أخي كلب." },
      { ru: "К сожале́нию, у меня́ нет вре́мени.", en: "Unfortunately, I have no time.", ar: "للأسف، ليس لديّ وقت." },
      { ru: "Ничего́ стра́шного!", en: "No big deal!", ar: "لا بأس!" },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about what you and the people in your family have and don't have: pets, a car, a dacha, a TV… Use у + genitive and нет + genitive: У бра́та есть…, у меня́ нет…",
    ar: "اكتب من ٥ إلى ٨ جمل عمّا لديك ولدى أفراد عائلتك وما ليس لديكم: حيوانات أليفة، سيّارة، بيت ريفي، تلفاز… استخدم у + حالة الإضافة وнет + حالة الإضافة: У бра́та есть…، у меня́ нет…",
  },
  culture: {
    en: "A да́ча is a country house with a garden outside the city. Many city families have one: they spend summer weekends there, grow vegetables and fruit, and rest from the city.",
    ar: "да́ча بيت ريفي مع حديقة خارج المدينة. لدى كثير من العائلات في المدن داتشا: يقضون فيها عطلات نهاية الأسبوع في الصيف، ويزرعون الخضروات والفواكه، ويستريحون من صخب المدينة.",
  },
};

const DAY_32: Day = {
  n: 32,
  week: 5,
  kind: "lesson",
  title: { ru: "Мно́го и ма́ло", en: "A lot and a little: the genitive 2", ar: "كثير وقليل: حالة الإضافة (٢)" },
  goals: [
    {
      en: "Talk about quantities: мно́го, ма́ло, ско́лько, не́сколько + genitive.",
      ar: "أن تتحدّث عن الكمّيات: мно́го، ма́ло، ско́лько، не́сколько + حالة الإضافة.",
    },
    { en: "Use numbers with nouns: оди́н паке́т, два паке́та, пять паке́тов.", ar: "أن تستخدم الأعداد مع الأسماء: оди́н паке́т، два паке́та، пять паке́тов." },
    { en: "Show possession and use из, от, до, по́сле + genitive.", ar: "أن تعبّر عن الملكية وتستخدم из، от، до، по́сле + حالة الإضافة." },
  ],
  words: [
    {
      id: "d32-01", ru: "мно́го", say: "mnOga", en: "a lot, many, much", ar: "كثير", pos: "adv",
      ex: { ru: "У меня́ мно́го вопро́сов.", en: "I have a lot of questions.", ar: "لديّ أسئلة كثيرة." },
    },
    {
      id: "d32-02", ru: "ма́ло", say: "mAla", en: "little, few, not enough", ar: "قليل", pos: "adv",
      ex: { ru: "У нас ма́ло вре́мени.", en: "We have little time.", ar: "لدينا وقت قليل." },
    },
    {
      id: "d32-03", ru: "не́сколько", say: "nyEskal'ka", en: "several, a few", ar: "بضعة، عدّة", pos: "num",
      ex: { ru: "В па́рке не́сколько кафе́.", en: "There are several cafés in the park.", ar: "في الحديقة عدّة مقاهٍ." },
    },
    {
      id: "d32-04", ru: "килогра́мм", say: "kilagrAm", en: "kilogram", ar: "كيلوغرام", pos: "noun", g: "m", forms: "два килогра́мма, пять килогра́ммов",
      ex: { ru: "Килогра́мм я́блок, пожа́луйста.", en: "A kilo of apples, please.", ar: "كيلوغرام تفّاح، من فضلك." },
    },
    {
      id: "d32-05", ru: "литр", say: "litr", en: "litre", ar: "لتر", pos: "noun", g: "m", forms: "два ли́тра, пять ли́тров",
      ex: { ru: "Литр молока́, пожа́луйста.", en: "A litre of milk, please.", ar: "لتر حليب، من فضلك." },
    },
    {
      id: "d32-06", ru: "буты́лка", say: "butYlka", en: "bottle", ar: "زجاجة", pos: "noun", g: "f", forms: "две буты́лки, пять буты́лок",
      ex: { ru: "Буты́лка воды́ сто́ит пятьдеся́т рубле́й.", en: "A bottle of water costs fifty roubles.", ar: "زجاجة الماء بخمسين روبلًا." },
    },
    {
      id: "d32-07", ru: "паке́т", say: "pakyEt", en: "carton, packet; plastic bag", ar: "علبة (من الورق المقوّى)؛ كيس", pos: "noun", g: "m", forms: "два паке́та, пять паке́тов",
      ex: { ru: "Паке́т молока́ в холоди́льнике.", en: "The carton of milk is in the fridge.", ar: "علبة الحليب في الثلّاجة." },
      note: {
        en: "Milk and juice come in паке́ты (cartons); a plastic bag in a shop is also a паке́т.",
        ar: "يُباع الحليب والعصير في паке́ты (علب)، والكيس البلاستيكي في المتجر اسمه أيضًا паке́т.",
      },
    },
    {
      id: "d32-08", ru: "кусо́к", say: "kusOk", en: "piece", ar: "قطعة", pos: "noun", g: "m", forms: "род. п. куска́",
      ex: { ru: "Кусо́к сы́ра, пожа́луйста.", en: "A piece of cheese, please.", ar: "قطعة جبن، من فضلك." },
      note: { en: "The о drops out when an ending is added: два куска́.", ar: "يسقط حرف о عند إضافة نهاية: два куска́." },
    },
    {
      id: "d32-09", ru: "па́чка", say: "pAchka", en: "pack, packet (of tea, butter…)", ar: "علبة (شاي، زبدة…)", pos: "noun", g: "f", forms: "две па́чки, пять па́чек",
      ex: { ru: "Па́чка ча́я, пожа́луйста.", en: "A packet of tea, please.", ar: "علبة شاي، من فضلك." },
    },
    {
      id: "d32-10", ru: "шту́ка", say: "shtUka", en: "piece, item (when counting things)", ar: "حبّة، قطعة (عند العدّ)", pos: "noun", g: "f", forms: "две шту́ки, пять штук",
      ex: { ru: "— Ско́лько вам? — Три шту́ки.", en: "— How many would you like? — Three.", ar: "— كم تريد؟ — ثلاث حبّات." },
    },
    {
      id: "d32-11", ru: "из", say: "iz", en: "from, out of (a place)", ar: "من (مكان)، من داخل", pos: "prep",
      ex: { ru: "Э́то сыр из Росси́и.", en: "This is cheese from Russia.", ar: "هذا جبن من روسيا." },
      note: { en: "из + genitive: из Москвы́, из магази́на.", ar: "из + حالة الإضافة: из Москвы́، из магази́на." },
    },
    {
      id: "d32-12", ru: "от", say: "ot", en: "from (a person); from (a starting point)", ar: "من (شخص)؛ من (نقطة انطلاق)", pos: "prep",
      ex: { ru: "Э́то письмо́ от ма́мы.", en: "This is a letter from Mum.", ar: "هذه رسالة من أمّي." },
    },
    {
      id: "d32-13", ru: "до", say: "do", en: "until; as far as", ar: "حتى، إلى", pos: "prep",
      ex: { ru: "Я был на рабо́те до обе́да.", en: "I was at work until lunch.", ar: "كنتُ في العمل حتى الغداء." },
    },
    {
      id: "d32-14", ru: "по́сле", say: "pOsli", en: "after", ar: "بعد", pos: "prep",
      ex: { ru: "По́сле рабо́ты я отдыха́ю.", en: "After work I rest.", ar: "بعد العمل أستريح." },
    },
    {
      id: "d32-15", ru: "одна́", say: "adnA", en: "one (with a feminine noun)", ar: "واحدة (مع الاسم المؤنّث)", pos: "num", forms: "оди́н (m), одна́ (f), одно́ (n)",
      ex: { ru: "Одна́ буты́лка воды́, пожа́луйста.", en: "One bottle of water, please.", ar: "زجاجة ماء واحدة، من فضلك." },
    },
    {
      id: "d32-16", ru: "две", say: "dvye", en: "two (with a feminine noun)", ar: "اثنتان (مع الاسم المؤنّث)", pos: "num", forms: "два (m, n), две (f)",
      ex: { ru: "Две па́чки ча́я, пожа́луйста.", en: "Two packets of tea, please.", ar: "علبتا شاي، من فضلك." },
    },
    {
      id: "d32-17", ru: "спи́сок", say: "spIsak", en: "list", ar: "قائمة", pos: "noun", g: "m", forms: "род. п. спи́ска",
      ex: { ru: "Вот спи́сок: хлеб, молоко́, сыр.", en: "Here's the list: bread, milk, cheese.", ar: "هذه هي القائمة: خبز، حليب، جبن." },
    },
    {
      id: "d32-18", ru: "Ско́лько вам?", say: "skOl'ka vam?", en: "How much / how many would you like? (a seller asks)", ar: "كم تريد؟ (يسأل البائع)", pos: "phrase",
      note: { en: "Answer with a quantity: Килогра́мм. / Три шту́ки.", ar: "أجب بكمّية: Килогра́мм. / Три шту́ки." },
    },
  ],
  grammar: [
    {
      id: "d32-g1",
      title: { en: "мно́го, ма́ло, ско́лько, не́сколько + genitive", ar: "мно́го، ма́ло، ско́лько، не́сколько + حالة الإضافة" },
      en: [
        "Words of quantity are followed by the genitive. With things you cannot count, use the genitive singular: мно́го вре́мени, ма́ло воды́, ско́лько молока́?",
        "With things you can count, use the genitive plural: мно́го вопро́сов, не́сколько буты́лок, ско́лько я́блок? For now learn it in chunks: masculine nouns usually add -ов; feminine and neuter nouns in -а / -о usually drop their ending.",
        "Some words insert a vowel when the ending drops: буты́лка → буты́лок, па́чка → па́чек. Others simply lose it: шту́ка → штук, я́блоко → я́блок.",
      ],
      ar: [
        "تأتي بعد كلمات الكمّية حالة الإضافة. مع الأشياء غير المعدودة استخدم صيغة الإضافة المفردة: мно́го вре́мени، ма́ло воды́، ско́лько молока́?",
        "ومع الأشياء المعدودة استخدم صيغة الإضافة في الجمع: мно́го вопро́сов، не́сколько буты́лок، ско́лько я́блок? واحفظها الآن كعبارات جاهزة: الأسماء المذكّرة تضيف عادةً -ов، والأسماء المؤنّثة والمحايدة المنتهية بـ -а / -о تُسقط نهايتها عادةً.",
        "بعض الكلمات يُضاف إليها حرف صوتي عندما تسقط النهاية: буты́лка ← буты́лок، па́чка ← па́чек. وبعضها يُسقطها فقط: шту́ка ← штук، я́блоко ← я́блок.",
      ],
      tables: [
        {
          caption: { en: "The genitive plural as chunks", ar: "صيغة الإضافة في الجمع كعبارات جاهزة" },
          head: ["Nominative · حالة الرفع", "Genitive plural · الإضافة في الجمع"],
          rows: [
            ["вопро́с", "вопро́сов"],
            ["паке́т", "паке́тов"],
            ["килогра́мм", "килогра́ммов"],
            ["буты́лка", "буты́лок"],
            ["па́чка", "па́чек"],
            ["шту́ка", "штук"],
            ["я́блоко", "я́блок"],
            ["яйцо́", "яи́ц"],
          ],
        },
      ],
      examples: [
        { ru: "У меня́ ма́ло вре́мени.", en: "I have little time.", ar: "لديّ وقت قليل." },
        { ru: "Ско́лько вам я́блок?", en: "How many apples would you like?", ar: "كم تفّاحة تريد؟" },
        { ru: "В Москве́ мно́го па́рков.", en: "There are many parks in Moscow.", ar: "في موسكو حدائق كثيرة." },
      ],
    },
    {
      id: "d32-g2",
      title: { en: "Numbers and nouns: 1, 2–4, 5 and up", ar: "الأعداد والأسماء: ١، ٢–٤، ٥ فما فوق" },
      en: [
        "After 1 the noun stays in the nominative: оди́н паке́т, одна́ буты́лка. After 2, 3 and 4 it takes the genitive singular: два паке́та, три буты́лки. From 5 to 20 it takes the genitive plural: пять паке́тов, де́сять буты́лок.",
        "One and two change with gender: оди́н (m), одна́ (f), одно́ (n); два (m, n), две (f). So два килогра́мма, but две па́чки.",
        "In bigger numbers only the last word counts: два́дцать оди́н рубль, два́дцать два рубля́, два́дцать пять рубле́й — just like the prices on day 17.",
      ],
      ar: [
        "بعد العدد ١ يبقى الاسم في حالة الرفع: оди́н паке́т، одна́ буты́лка. وبعد ٢ و٣ و٤ يأتي في صيغة الإضافة المفردة: два паке́та، три буты́лки. ومن ٥ إلى ٢٠ يأتي في صيغة الإضافة في الجمع: пять паке́тов، де́сять буты́лок.",
        "العددان «واحد» و«اثنان» يتغيّران حسب الجنس: оди́н (مذكّر)، одна́ (مؤنّث)، одно́ (محايد)؛ два (مذكّر ومحايد)، две (مؤنّث). فنقول два килогра́мма، لكن две па́чки.",
        "وفي الأعداد الأكبر العبرة بالكلمة الأخيرة فقط: два́дцать оди́н рубль، два́дцать два рубля́، два́дцать пять рубле́й — تمامًا مثل الأسعار في اليوم ١٧.",
      ],
      tables: [
        {
          caption: { en: "Counting with four nouns", ar: "العدّ مع أربعة أسماء" },
          head: ["Noun · الاسم", "1", "2–4", "5–20"],
          rows: [
            ["паке́т (m)", "оди́н паке́т", "два паке́та", "пять паке́тов"],
            ["литр (m)", "оди́н литр", "три ли́тра", "шесть ли́тров"],
            ["буты́лка (f)", "одна́ буты́лка", "две буты́лки", "пять буты́лок"],
            ["шту́ка (f)", "одна́ шту́ка", "четы́ре шту́ки", "де́сять штук"],
          ],
        },
      ],
      examples: [
        {
          ru: "Два ли́тра молока́ и одна́ па́чка ча́я, пожа́луйста.",
          en: "Two litres of milk and one packet of tea, please.",
          ar: "لتران من الحليب وعلبة شاي واحدة، من فضلك.",
        },
        { ru: "Де́сять яи́ц и три буты́лки воды́.", en: "Ten eggs and three bottles of water.", ar: "عشر بيضات وثلاث زجاجات ماء." },
      ],
    },
    {
      id: "d32-g3",
      title: { en: "Whose? And из, от, до, по́сле + genitive", ar: "لِمَن؟ وحروف الجر из، от، до، по́сле + حالة الإضافة" },
      en: [
        "To say whose something is, put the owner after the thing, in the genitive: маши́на бра́та (my brother's car), ко́мната А́нны (Anna's room). The order is the same as in the Arabic idafa.",
        "из = out of, from a place: из Каи́ра, из магази́на. от = from a person, or from a starting point: письмо́ от ма́мы, от до́ма до метро́.",
        "до = until, as far as: до обе́да, до метро́. по́сле = after: по́сле рабо́ты, по́сле у́жина. All four take the genitive.",
      ],
      ar: [
        "للتعبير عن الملكية ضع المالك بعد الشيء في حالة الإضافة: маши́на бра́та (سيّارة الأخ)، ко́мната А́нны (غرفة آنا). والترتيب هو نفسه في الإضافة العربية.",
        "из تعني «من داخل مكان»: из Каи́ра، из магази́на. وот تعني «من شخص» أو «من نقطة انطلاق»: письмо́ от ма́мы، от до́ма до метро́.",
        "до تعني «حتى، إلى»: до обе́да، до метро́. وпо́сле تعني «بعد»: по́сле рабо́ты، по́сле у́жина. وبعد هذه الحروف الأربعة يأتي الاسم في حالة الإضافة.",
      ],
      tables: [
        {
          caption: { en: "Prepositions with the genitive", ar: "حروف الجر مع حالة الإضافة" },
          head: ["Preposition · حرف الجر", "Meaning · المعنى", "Example · مثال"],
          rows: [
            ["из", "from, out of · من (داخل)", "из Каи́ра"],
            ["от", "from (a person, a point) · من (شخص، نقطة)", "от ма́мы"],
            ["до", "until, as far as · حتى، إلى", "до обе́да"],
            ["по́сле", "after · بعد", "по́сле рабо́ты"],
            ["у", "at, by; have · عند، لدى", "у бра́та"],
          ],
        },
      ],
      examples: [
        { ru: "Э́то ко́мната А́нны, а э́то маши́на её бра́та.", en: "This is Anna's room, and this is her brother's car.", ar: "هذه غرفة آنا، وهذه سيّارة أخيها." },
        { ru: "По́сле рабо́ты я был в магази́не, а пото́м у дру́га.", en: "After work I was at the shop, and then at a friend's.", ar: "بعد العمل كنتُ في المتجر، ثمّ عند صديق." },
        { ru: "От до́ма до метро́ пять мину́т.", en: "It's five minutes from the house to the metro.", ar: "من البيت إلى المترو خمس دقائق." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "У нас го́сти!", en: "We have guests!", ar: "لدينا ضيوف!" },
    setting: {
      en: "Saturday. Anna's parents are coming to dinner. Anna and Ahmed check what they have and write a list, then buy everything at a small shop.",
      ar: "يوم السبت. والدا آنا قادمان إلى العشاء. تتفقّد آنا وأحمد ما لديهما ويكتبان قائمة، ثمّ يشتريان كلّ شيء من متجر صغير.",
    },
    lines: [
      {
        who: "B", name: "А́нна", ru: "Ахме́д, сего́дня у нас го́сти — мои́ роди́тели! Что у нас есть?",
        en: "Ahmed, we have guests today — my parents! What have we got?", ar: "يا أحمد، لدينا ضيوف اليوم — والداي! ماذا لدينا؟",
      },
      {
        who: "A", name: "Ахме́д", ru: "Хле́ба нет, молока́ ма́ло, а сы́ра то́лько кусо́к.",
        en: "There's no bread, not much milk, and only a piece of cheese.", ar: "لا يوجد خبز، والحليب قليل، ولم يبقَ من الجبن إلا قطعة.",
      },
      { who: "B", name: "А́нна", ru: "А я́йца? Ско́лько у нас яи́ц?", en: "And eggs? How many eggs have we got?", ar: "والبيض؟ كم بيضة لدينا؟" },
      { who: "A", name: "Ахме́д", ru: "Два. И воды́ то́же нет.", en: "Two. And there's no water either.", ar: "اثنتان. ولا يوجد ماء أيضًا." },
      {
        who: "B", name: "А́нна", ru: "Хорошо́. Вот спи́сок: хлеб, два ли́тра молока́, де́сять яи́ц и три буты́лки воды́.",
        en: "OK. Here's the list: bread, two litres of milk, ten eggs and three bottles of water.", ar: "حسنًا. هذه هي القائمة: خبز، ولتران من الحليب، وعشر بيضات، وثلاث زجاجات ماء.",
      },
      { who: "A", name: "Ахме́д", ru: "А фру́кты? Твой па́па лю́бит я́блоки.", en: "And fruit? Your dad loves apples.", ar: "والفاكهة؟ والدكِ يحبّ التفّاح." },
      { who: "B", name: "А́нна", ru: "Да, и килогра́мм я́блок. Всё!", en: "Yes, and a kilo of apples. That's all!", ar: "نعم، وكيلوغرام تفّاح. هذا كلّ شيء!" },
      { who: "B", name: "Ни́на", ru: "Здра́вствуйте! Слу́шаю вас.", en: "Hello! What can I get you?", ar: "مرحبًا! تفضّلوا، ماذا تريدون؟" },
      {
        who: "A", name: "Ахме́д", ru: "Здра́вствуйте! Хлеб, два ли́тра молока́ и три буты́лки воды́, пожа́луйста.",
        en: "Hello! Bread, two litres of milk and three bottles of water, please.", ar: "مرحبًا! خبز، ولتران من الحليب، وثلاث زجاجات ماء، من فضلك.",
      },
      { who: "B", name: "Ни́на", ru: "Вот, пожа́луйста. Всё?", en: "Here you are. Is that all?", ar: "تفضّل. هل هذا كلّ شيء؟" },
      { who: "A", name: "Ахме́д", ru: "Нет. Де́сять яи́ц и килогра́мм я́блок.", en: "No. Ten eggs and a kilo of apples.", ar: "لا. عشر بيضات وكيلوغرام تفّاح." },
      {
        who: "B", name: "Ни́на", ru: "Я́блок, к сожале́нию, нет. Бы́ли у́тром!",
        en: "Unfortunately, there are no apples. We had some this morning!", ar: "للأسف، لا يوجد تفّاح. كان لدينا في الصباح!",
      },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Two bottles. Which is correct?", ar: "زجاجتان. أيّها صحيح؟" },
      options: ["две буты́лки", "два буты́лки", "две буты́лок"],
      answer: 0,
      why: { en: "буты́лка is feminine: две + the genitive singular буты́лки.", ar: "буты́лка مؤنّثة: две + صيغة الإضافة المفردة буты́лки." },
    },
    {
      kind: "choice",
      prompt: { en: "Five cartons (паке́т). Choose the right form.", ar: "خمس علب (паке́т). اختر الصيغة الصحيحة." },
      options: ["пять паке́тов", "пять паке́та", "пять паке́т"],
      answer: 0,
      why: { en: "From 5 upwards: the genitive plural, -ов for masculine nouns.", ar: "من ٥ فما فوق: صيغة الإضافة في الجمع، و-ов للأسماء المذكّرة." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: a litre of milk.", ar: "أكمل: لتر من الحليب." },
      ru: "литр ___",
      answers: ["молока́"],
      why: { en: "A quantity takes the genitive: молоко́ → молока́.", ar: "بعد الكمّية تأتي حالة الإضافة: молоко́ ← молока́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: We have little time.", ar: "أكمل: لدينا وقت قليل." },
      ru: "У нас ма́ло ___.",
      answers: ["вре́мени"],
      why: { en: "ма́ло + genitive: вре́мени.", ar: "ма́ло + حالة الإضافة: вре́мени." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with килогра́мм: three kilos of potatoes.", ar: "أكمل بكلمة килогра́мм: ثلاثة كيلوغرامات من البطاطس." },
      ru: "три ___ карто́шки",
      answers: ["килогра́мма"],
      why: { en: "After 2–4: the genitive singular, килогра́мма.", ar: "بعد ٢–٤: صيغة الإضافة المفردة килогра́мма." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: This is a letter from Mum.", ar: "أكمل: هذه رسالة من أمّي." },
      ru: "Э́то письмо́ от ___.",
      answers: ["ма́мы"],
      why: { en: "от + genitive: ма́ма → ма́мы.", ar: "от + حالة الإضافة: ма́ма ← ма́мы." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: After work I rest.", ar: "أكمل: بعد العمل أستريح." },
      ru: "По́сле ___ я отдыха́ю.",
      answers: ["рабо́ты"],
      why: { en: "по́сле + genitive: рабо́та → рабо́ты.", ar: "по́сле + حالة الإضافة: рабо́та ← рабо́ты." },
    },
    {
      kind: "choice",
      prompt: { en: "How do you say 'my brother's car'?", ar: "كيف تقول «سيّارة أخي»؟" },
      options: ["маши́на бра́та", "бра́та маши́на", "маши́на брат"],
      answer: 0,
      why: { en: "The owner comes after the thing, in the genitive — as in the Arabic idafa.", ar: "يأتي المالك بعد الشيء في حالة الإضافة — كما في الإضافة العربية." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: A kilo of apples, please.", ar: "كوّن الجملة: كيلوغرام تفّاح، من فضلك." },
      tokens: ["я́блок", "пожа́луйста", "Килогра́мм"],
      answers: ["Килогра́мм я́блок, пожа́луйста."],
      why: { en: "килогра́мм + the genitive plural я́блок.", ar: "килогра́мм + صيغة الإضافة في الجمع я́блок." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: It's five minutes from the house to the metro.", ar: "كوّن الجملة: من البيت إلى المترو خمس دقائق." },
      tokens: ["до", "мину́т", "От", "метро́", "пять", "до́ма"],
      answers: ["От до́ма до метро́ пять мину́т."],
      why: { en: "от … до … = from … to …, both with the genitive.", ar: "от … до … = من … إلى …، وكلاهما مع حالة الإضافة." },
    },
    {
      kind: "translate",
      prompt: { en: "Two packets of tea, please.", ar: "علبتا شاي، من فضلك." },
      answers: ["Две па́чки ча́я, пожа́луйста.", "Две па́чки ча́я."],
      why: { en: "па́чка is feminine, so две па́чки; tea goes into the genitive: ча́я.", ar: "па́чка مؤنّثة، لذلك две па́чки، والشاي في حالة الإضافة: ча́я." },
    },
    {
      kind: "translate",
      prompt: { en: "I have a lot of questions.", ar: "لديّ أسئلة كثيرة." },
      answers: ["У меня́ мно́го вопро́сов."],
      why: { en: "мно́го + the genitive plural: вопро́сов.", ar: "мно́го + صيغة الإضافة في الجمع: вопро́сов." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. How many eggs does she want?", ar: "استمع. كم بيضة تريد؟" },
      ru: "Де́сять яи́ц, пожа́луйста.",
      listen: true,
      options: ["10", "2", "5"],
      answer: 0,
      why: { en: "де́сять = ten; яи́ц is the genitive plural of яйцо́.", ar: "де́сять = عشرة، وяи́ц صيغة الإضافة في الجمع من яйцо́." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the customer buy?", ar: "استمع. ماذا يشتري الزبون؟" },
      ru: "Две буты́лки воды́ и кусо́к сы́ра.",
      listen: true,
      options: ["water and cheese · ماء وجبن", "milk and bread · حليب وخبز", "juice and apples · عصير وتفّاح"],
      answer: 0,
      why: { en: "воды́ = of water, сы́ра = of cheese.", ar: "воды́ = من الماء، сы́ра = من الجبن." },
    },
  ],
  topics: ["genitive", "shopping", "food"],
  search: ["Russian numbers with nouns два пять genitive explained", "Russian genitive plural for beginners"],
  speaking: {
    scenario: {
      en: "Make a shopping list for a family dinner with quantities and packages, then buy everything from the tutor, who plays the shop assistant.",
      ar: "اكتب قائمة مشتريات لعشاء عائلي بالكمّيات والعبوات، ثمّ اشترِ كلّ شيء من المدرّس الذي يؤدّي دور البائعة.",
    },
    tutorBrief:
      "Play Nina (Нина), a friendly assistant in a small Moscow grocery shop. Greet the learner (Здравствуйте! Слушаю вас.), take the order item by item and ask Сколько вам? Expect quantities with the genitive: литр / два литра молока, килограмм яблок, пачка чая, две бутылки воды, кусок сыра, десять яиц, несколько, много, мало. One item is sold out: say К сожалению, … нет. Give prices in roubles up to 100 (пятьдесят рублей). Correct number agreement gently by repeating the right form (две бутылки, not два бутылки; пять пакетов, not пять пакета). Finish with Спасибо! До свидания! and a one-line summary of what they bought.",
    prompts: [
      { ru: "Литр молока́, пожа́луйста.", en: "A litre of milk, please.", ar: "لتر حليب، من فضلك." },
      { ru: "Две буты́лки воды́ и кусо́к сы́ра.", en: "Two bottles of water and a piece of cheese.", ar: "زجاجتا ماء وقطعة جبن." },
      { ru: "Килогра́мм я́блок, пожа́луйста.", en: "A kilo of apples, please.", ar: "كيلوغرام تفّاح، من فضلك." },
      { ru: "Ско́лько сто́ит па́чка ча́я?", en: "How much is a packet of tea?", ar: "بكم علبة الشاي؟" },
      { ru: "Спаси́бо, э́то всё.", en: "Thank you, that's all.", ar: "شكرًا، هذا كلّ شيء." },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about a dinner with friends: what you have at home and what you don't have (У меня́ нет…), then your shopping list with quantities: два ли́тра молока́, па́чка ча́я, килогра́мм я́блок…",
    ar: "اكتب من ٥ إلى ٨ جمل عن عشاء مع الأصدقاء: ما الموجود لديك في البيت وما غير الموجود (У меня́ нет…)، ثمّ قائمة مشترياتك بالكمّيات: два ли́тра молока́، па́чка ча́я، килогра́мм я́блок…",
  },
  culture: {
    en: "In Russian shops and markets, fruit, vegetables and cheese are usually priced per килогра́мм, and eggs are usually sold in packs of ten.",
    ar: "في المتاجر والأسواق الروسية تُسعَّر الفاكهة والخضروات والجبن عادةً بالـ килогра́мм، ويُباع البيض عادةً في علب من عشر بيضات.",
  },
};

const DAY_33: Day = {
  n: 33,
  week: 5,
  kind: "lesson",
  title: { ru: "Сде́лал и́ли де́лал?", en: "Did or was doing? Verb aspect", ar: "فعلتُ أم كنتُ أفعل؟ الفعل التام وغير التام" },
  goals: [
    {
      en: "Tell a finished result (perfective) from a process or a habit (imperfective).",
      ar: "أن تميّز النتيجة المكتملة (الفعل التام) من العملية أو العادة (الفعل غير التام).",
    },
    { en: "Use eight common aspect pairs in the past tense.", ar: "أن تستخدم ثمانية أزواج شائعة من الأفعال في الزمن الماضي." },
    {
      en: "Say what you have already done and what you haven't done yet: уже́, ещё не, наконе́ц.",
      ar: "أن تقول ما أنجزته بالفعل وما لم تنجزه بعد: уже́، ещё не، наконе́ц.",
    },
  ],
  words: [
    {
      id: "d33-01", ru: "сде́лать", say: "zdyElat'", en: "to do, make (and finish); perfective of де́лать", ar: "يفعل، يصنع (وينجز)؛ الفعل التام من де́лать", pos: "verb", forms: "сде́лал, сде́лала",
      ex: { ru: "Я сде́лал дома́шнее зада́ние.", en: "I've done my homework.", ar: "أنجزتُ واجبي المنزلي." },
    },
    {
      id: "d33-02", ru: "прочита́ть", say: "prachitAt'", en: "to read (to the end); perfective of чита́ть", ar: "يقرأ (حتى النهاية)؛ الفعل التام من чита́ть", pos: "verb", forms: "прочита́л, прочита́ла",
      ex: { ru: "Она́ прочита́ла кни́гу.", en: "She has read the book (to the end).", ar: "قرأت الكتاب (حتى نهايته)." },
    },
    {
      id: "d33-03", ru: "написа́ть", say: "napisAt'", en: "to write (and finish); perfective of писа́ть", ar: "يكتب (وينتهي)؛ الفعل التام من писа́ть", pos: "verb", forms: "написа́л, написа́ла",
      ex: { ru: "Макси́м написа́л письмо́.", en: "Maxim has written the letter.", ar: "كتب مكسيم الرسالة." },
    },
    {
      id: "d33-04", ru: "купи́ть", say: "kupIt'", en: "to buy; perfective of покупа́ть", ar: "يشتري؛ الفعل التام من покупа́ть", pos: "verb", forms: "купи́л, купи́ла",
      ex: { ru: "Я купи́л биле́ты!", en: "I've bought the tickets!", ar: "اشتريتُ التذاكر!" },
    },
    {
      id: "d33-05", ru: "сказа́ть", say: "skazAt'", en: "to say, tell; perfective of говори́ть", ar: "يقول؛ الفعل التام من говори́ть", pos: "verb", forms: "сказа́л, сказа́ла",
      ex: { ru: "Что он сказа́л?", en: "What did he say?", ar: "ماذا قال؟" },
    },
    {
      id: "d33-06", ru: "посмотре́ть", say: "pasmatryEt'", en: "to watch, have a look; perfective of смотре́ть", ar: "يشاهد، يلقي نظرة؛ الفعل التام من смотре́ть", pos: "verb", forms: "посмотре́л, посмотре́ла",
      ex: { ru: "Мы посмотре́ли фильм.", en: "We watched the film (all of it).", ar: "شاهدنا الفيلم (كاملًا)." },
    },
    {
      id: "d33-07", ru: "позвони́ть", say: "pazvanIt'", en: "to call, phone; perfective of звони́ть", ar: "يتّصل هاتفيًّا؛ الفعل التام من звони́ть", pos: "verb", forms: "позвони́л, позвони́ла",
      ex: { ru: "А́нна позвони́ла ве́чером.", en: "Anna called in the evening.", ar: "اتّصلت آنا في المساء." },
    },
    {
      id: "d33-08", ru: "пригото́вить", say: "prigatOvit'", en: "to cook, make (a meal); perfective of гото́вить", ar: "يطبخ، يحضّر (وجبة)؛ الفعل التام من гото́вить", pos: "verb", forms: "пригото́вил, пригото́вила",
      ex: { ru: "Ма́ма пригото́вила у́жин.", en: "Mum has made dinner.", ar: "حضّرت أمّي العشاء." },
    },
    {
      id: "d33-09", ru: "гото́вить", say: "gatOvit'", en: "to cook, prepare", ar: "يطبخ، يحضّر", pos: "verb", forms: "гото́влю, гото́вишь",
      ex: { ru: "Па́па ча́сто гото́вит.", en: "Dad often cooks.", ar: "كثيرًا ما يطبخ أبي." },
    },
    {
      id: "d33-10", ru: "уже́", say: "uzhE", en: "already", ar: "بالفعل، قد", pos: "adv",
      ex: { ru: "Я уже́ купи́л хлеб.", en: "I've already bought bread.", ar: "لقد اشتريتُ الخبز بالفعل." },
    },
    {
      id: "d33-11", ru: "ещё", say: "yishchO", en: "still; (with не) not yet; more", ar: "لا يزال؛ (مع не) ليس بعد؛ أيضًا، المزيد", pos: "adv",
      ex: { ru: "Он ещё рабо́тает.", en: "He is still working.", ar: "لا يزال يعمل." },
    },
    {
      id: "d33-12", ru: "наконе́ц", say: "nakanyEts", en: "at last, finally", ar: "أخيرًا", pos: "adv",
      ex: { ru: "Наконе́ц я купи́л биле́т!", en: "At last I've bought a ticket!", ar: "أخيرًا اشتريتُ تذكرة!" },
    },
    {
      id: "d33-13", ru: "ка́ждый день", say: "kAzhdyy dyen'", en: "every day", ar: "كلّ يوم", pos: "phrase",
      ex: { ru: "Я чита́ю ка́ждый день.", en: "I read every day.", ar: "أقرأ كلّ يوم." },
    },
    {
      id: "d33-14", ru: "успе́ть", say: "uspyEt'", en: "to manage (in time), have time to", ar: "يلحق، يتمكّن (من إنجاز شيء في الوقت)", pos: "verb", forms: "успе́л, успе́ла",
      ex: { ru: "Я не успе́л пригото́вить у́жин.", en: "I didn't manage to make dinner.", ar: "لم ألحق بتحضير العشاء." },
      note: { en: "It takes a perfective infinitive: успе́ть сде́лать, успе́ть купи́ть.", ar: "يأتي بعده مصدر تام: успе́ть сде́лать، успе́ть купи́ть." },
    },
    {
      id: "d33-15", ru: "Ещё нет.", say: "yishchO nyet.", en: "Not yet.", ar: "ليس بعد.", pos: "phrase",
      ex: { ru: "— Ты уже́ купи́л хлеб? — Ещё нет.", en: "— Have you bought bread yet? — Not yet.", ar: "— هل اشتريتَ الخبز؟ — ليس بعد." },
    },
    {
      id: "d33-16", ru: "дома́шнее зада́ние", say: "damAshniye zadAniye", en: "homework", ar: "الواجب المنزلي", pos: "noun", g: "n",
      ex: { ru: "Вы сде́лали дома́шнее зада́ние?", en: "Have you done your homework?", ar: "هل أنجزتم الواجب المنزلي؟" },
    },
    {
      id: "d33-17", ru: "Я не успе́л.", say: "ya ni uspyEl.", en: "I didn't have time. / I didn't manage.", ar: "لم ألحق. / لم يكفِني الوقت.", pos: "phrase",
      note: { en: "A woman says: Я не успе́ла.", ar: "المرأة تقول: Я не успе́ла." },
    },
    {
      id: "d33-18", ru: "весь день", say: "vyes' dyen'", en: "all day (long)", ar: "طوال اليوم", pos: "phrase",
      ex: { ru: "Вчера́ я весь день чита́л.", en: "Yesterday I read all day.", ar: "أمس قرأتُ طوال اليوم." },
      note: { en: "A length of time goes with the imperfective: весь день чита́л.", ar: "المدّة الزمنية تأتي مع الفعل غير التام: весь день чита́л." },
    },
  ],
  grammar: [
    {
      id: "d33-g1",
      title: { en: "Two aspects: process or result", ar: "نوعا الفعل: العملية أم النتيجة" },
      en: [
        "Most Russian verbs come in pairs. The imperfective (де́лать, чита́ть) describes a process, a habit or a repeated action. The perfective (сде́лать, прочита́ть) describes one completed action with a result.",
        "Compare: Вчера́ я чита́л кни́гу. — I was reading a book (a process; maybe I didn't finish). Вчера́ я прочита́л кни́гу. — I read the book to the end (a result).",
        "Russian has no separate 'have done' tense: the perfective past covers it. Я уже́ купи́л биле́ты. — I have already bought the tickets.",
      ],
      ar: [
        "معظم الأفعال الروسية تأتي في أزواج. الفعل غير التام (де́лать، чита́ть) يصف عملية أو عادة أو فعلًا متكرّرًا. أمّا الفعل التام (сде́лать، прочита́ть) فيصف فعلًا واحدًا مكتملًا له نتيجة.",
        "قارِن: Вчера́ я чита́л кни́гу. — كنتُ أقرأ كتابًا (عملية، وربّما لم أُنهِه). Вчера́ я прочита́л кни́гу. — قرأتُ الكتاب حتى نهايته (نتيجة).",
        "لا يوجد في الروسية زمن خاصّ بمعنى «قد فعلتُ»، فالماضي التام يؤدّي هذا المعنى: Я уже́ купи́л биле́ты. — لقد اشتريتُ التذاكر بالفعل.",
      ],
      tables: [
        {
          caption: { en: "Eight aspect pairs", ar: "ثمانية أزواج من الأفعال" },
          head: ["Imperfective · غير التام", "Perfective · التام", "Meaning · المعنى"],
          rows: [
            ["де́лать", "сде́лать", "do · يفعل"],
            ["чита́ть", "прочита́ть", "read · يقرأ"],
            ["писа́ть", "написа́ть", "write · يكتب"],
            ["смотре́ть", "посмотре́ть", "watch · يشاهد"],
            ["звони́ть", "позвони́ть", "call · يتّصل"],
            ["гото́вить", "пригото́вить", "cook · يطبخ"],
            ["покупа́ть", "купи́ть", "buy · يشتري"],
            ["говори́ть", "сказа́ть", "say · يقول"],
          ],
        },
      ],
      examples: [
        { ru: "Вчера́ я гото́вил у́жин три часа́.", en: "Yesterday I spent three hours cooking dinner.", ar: "أمس قضيتُ ثلاث ساعات في تحضير العشاء." },
        { ru: "Наконе́ц я пригото́вил у́жин!", en: "At last I've made dinner!", ar: "أخيرًا حضّرتُ العشاء!" },
      ],
    },
    {
      id: "d33-g2",
      title: { en: "How the pairs are made", ar: "كيف تتكوّن الأزواج" },
      en: [
        "Most perfectives add a prefix: с-, про-, на-, по-, при- (де́лать → сде́лать, писа́ть → написа́ть, смотре́ть → посмотре́ть). Learn which prefix goes with which verb.",
        "Some pairs change the suffix (покупа́ть → купи́ть), and a few are different words (говори́ть → сказа́ть). Learn every new verb together with its partner.",
        "A perfective verb has no present tense, because it is only about a result. You will meet its future on day 38.",
      ],
      ar: [
        "معظم الأفعال التامّة تُضاف إليها سابقة: с-، про-، на-، по-، при- (де́лать ← сде́лать، писа́ть ← написа́ть، смотре́ть ← посмотре́ть). احفظ أيّ سابقة تأتي مع أيّ فعل.",
        "بعض الأزواج يتغيّر فيها المقطع اللاحق (покупа́ть ← купи́ть)، وقليل منها كلمتان مختلفتان (говори́ть ← сказа́ть). احفظ كلّ فعل جديد مع شريكه.",
        "الفعل التام ليس له زمن حاضر، لأنّه يتحدّث عن النتيجة فقط. وستتعرّف على مستقبله في اليوم ٣٨.",
      ],
      examples: [
        { ru: "Он говори́л о Москве́, а пото́м сказа́л: «Пока́!»", en: "He was talking about Moscow, and then he said: 'Bye!'", ar: "كان يتحدّث عن موسكو، ثمّ قال: «إلى اللقاء!»" },
        { ru: "Макси́м ча́сто покупа́ет ко́фе, а сего́дня купи́л чай.", en: "Maxim often buys coffee, but today he bought tea.", ar: "مكسيم يشتري القهوة كثيرًا، لكنّه اشترى اليوم الشاي." },
      ],
    },
    {
      id: "d33-g3",
      title: { en: "Signal words: ча́сто, ка́ждый день, уже́, наконе́ц", ar: "كلمات دالّة: ча́сто، ка́ждый день، уже́، наконе́ц" },
      en: [
        "Words of habit and repetition — ча́сто, всегда́, иногда́, обы́чно, ка́ждый день — call for the imperfective: Ка́ждый день я чита́л газе́ту.",
        "Words of result — уже́ (already), наконе́ц (at last) — usually go with the perfective: Я уже́ прочита́л газе́ту. Наконе́ц она́ позвони́ла!",
        "To say 'not yet', use ещё не: Я ещё не сде́лал дома́шнее зада́ние. The short answer is Ещё нет.",
      ],
      ar: [
        "كلمات العادة والتكرار — ча́сто، всегда́، иногда́، обы́чно، ка́ждый день — تستدعي الفعل غير التام: Ка́ждый день я чита́л газе́ту.",
        "أمّا كلمات النتيجة — уже́ (بالفعل)، наконе́ц (أخيرًا) — فتأتي عادةً مع الفعل التام: Я уже́ прочита́л газе́ту. Наконе́ц она́ позвони́ла!",
        "وللتعبير عن «ليس بعد» استخدم ещё не: Я ещё не сде́лал дома́шнее зада́ние. والجواب القصير: Ещё нет.",
      ],
      tables: [
        {
          caption: { en: "Which aspect?", ar: "أيّ نوع من الفعل؟" },
          head: ["Signal · الكلمة الدالّة", "Aspect · النوع", "Example · مثال"],
          rows: [
            ["ча́сто, всегда́, ка́ждый день", "imperfective · غير التام", "Он всегда́ гото́вил у́жин."],
            ["уже́, наконе́ц", "perfective · التام", "Он уже́ пригото́вил у́жин."],
            ["ещё не", "usually perfective · غالبًا التام", "Он ещё не пригото́вил у́жин."],
          ],
        },
      ],
      examples: [
        {
          ru: "— Ты уже́ посмотре́л фильм? — Да, уже́ посмотре́л.",
          en: "— Have you watched the film yet? — Yes, I have.",
          ar: "— هل شاهدتَ الفيلم؟ — نعم، شاهدتُه.",
        },
        { ru: "Я ча́сто покупа́ю фру́кты на ры́нке.", en: "I often buy fruit at the market.", ar: "كثيرًا ما أشتري الفاكهة من السوق." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Дома́шнее зада́ние", en: "Homework", ar: "الواجب المنزلي" },
    setting: {
      en: "Friday at the Russian course. Olga Petrovna, the teacher, asks Ahmed about his week.",
      ar: "يوم الجمعة في دورة اللغة الروسية. المعلّمة أولغا بتروفنا تسأل أحمد عن أسبوعه.",
    },
    lines: [
      { who: "B", name: "О́льга Петро́вна", ru: "Ахме́д, вы сде́лали дома́шнее зада́ние?", en: "Ahmed, have you done your homework?", ar: "يا أحمد، هل أنجزتَ الواجب المنزلي؟" },
      { who: "A", name: "Ахме́д", ru: "Да, наконе́ц сде́лал! Я де́лал его́ три часа́.", en: "Yes, I finally did it! I worked on it for three hours.", ar: "نعم، أنجزتُه أخيرًا! عملتُ عليه ثلاث ساعات." },
      { who: "B", name: "О́льга Петро́вна", ru: "Отли́чно! А кни́гу вы уже́ прочита́ли?", en: "Excellent! And have you finished the book yet?", ar: "ممتاز! وهل أنهيتَ قراءة الكتاب؟" },
      {
        who: "A", name: "Ахме́д", ru: "Ещё нет. Я чита́л ка́ждый день, но не успе́л.",
        en: "Not yet. I read every day, but I didn't manage to finish.", ar: "ليس بعد. كنتُ أقرأ كلّ يوم، لكنّي لم ألحق.",
      },
      { who: "B", name: "О́льга Петро́вна", ru: "Ничего́. А письмо́ вы написа́ли?", en: "That's all right. And have you written the letter?", ar: "لا بأس. وهل كتبتَ الرسالة؟" },
      { who: "A", name: "Ахме́д", ru: "Да, написа́л. Вот оно́!", en: "Yes, I have. Here it is!", ar: "نعم، كتبتُها. ها هي!" },
      { who: "B", name: "О́льга Петро́вна", ru: "Хорошо́. А что вы де́лали в суббо́ту?", en: "Good. And what did you do on Saturday?", ar: "جيّد. وماذا فعلتَ يوم السبت؟" },
      { who: "A", name: "Ахме́д", ru: "Я гото́вил. Я пригото́вил ку́шари!", en: "I was cooking. I made koshari!", ar: "كنتُ أطبخ. حضّرتُ الكشري!" },
      { who: "B", name: "О́льга Петро́вна", ru: "Ку́шари? Что э́то?", en: "Koshari? What's that?", ar: "الكشري؟ ما هذا؟" },
      {
        who: "A", name: "Ахме́д", ru: "Рис, о́вощи… О́чень вку́сно! В Каи́ре все его́ лю́бят.",
        en: "Rice, vegetables… Very tasty! Everyone in Cairo loves it.", ar: "أرزّ وخضروات… لذيذ جدًّا! الجميع في القاهرة يحبّونه.",
      },
      { who: "B", name: "О́льга Петро́вна", ru: "Как интере́сно! Вы мно́го сде́лали, Ахме́д.", en: "How interesting! You've done a lot, Ahmed.", ar: "ما أمتع ذلك! لقد أنجزتَ الكثير يا أحمد." },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо! Но кни́гу я ещё не прочита́л.", en: "Thank you! But I still haven't finished the book.", ar: "شكرًا! لكنّي لم أُنهِ قراءة الكتاب بعد." },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Which sentence means the book is finished?", ar: "أيّ جملة تعني أنّ قراءة الكتاب انتهت؟" },
      options: ["Я прочита́л кни́гу.", "Я чита́л кни́гу.", "Я чита́ю кни́гу."],
      answer: 0,
      why: { en: "The perfective прочита́л shows a result: the whole book.", ar: "الفعل التام прочита́л يدلّ على نتيجة: الكتاب كلّه." },
    },
    {
      kind: "choice",
      prompt: { en: "I often watched films. Which verb fits? Я ча́сто ___ фи́льмы.", ar: "كنتُ أشاهد الأفلام كثيرًا. أيّ فعل يناسب؟ Я ча́сто ___ фи́льмы." },
      options: ["смотре́л", "посмотре́л", "посмотре́ть"],
      answer: 0,
      why: { en: "ча́сто means repetition, so the imperfective.", ar: "ча́сто تدلّ على التكرار، لذلك نستخدم الفعل غير التام." },
    },
    {
      kind: "choice",
      prompt: { en: "Find the perfective partner of покупа́ть.", ar: "اختر الشريك التام للفعل покупа́ть." },
      options: ["купи́ть", "сказа́ть", "успе́ть"],
      answer: 0,
      why: { en: "покупа́ть — купи́ть: here the suffix changes.", ar: "покупа́ть — купи́ть: هنا يتغيّر المقطع اللاحق." },
    },
    {
      kind: "fill",
      prompt: { en: "Use the perfective of де́лать: I've already done my homework.", ar: "استخدم الفعل التام من де́лать: لقد أنجزتُ واجبي المنزلي بالفعل." },
      ru: "Я уже́ ___ дома́шнее зада́ние.",
      answers: ["сде́лал", "сде́лала"],
      why: { en: "уже́ + a finished result: сде́лал (a woman: сде́лала).", ar: "уже́ + نتيجة مكتملة: сде́лал (والمرأة: сде́лала)." },
    },
    {
      kind: "fill",
      prompt: { en: "Use the perfective of звони́ть: At last Anna called!", ar: "استخدم الفعل التام من звони́ть: أخيرًا اتّصلت آنا!" },
      ru: "Наконе́ц А́нна ___!",
      answers: ["позвони́ла"],
      why: { en: "наконе́ц points to a result: позвони́ла.", ar: "наконе́ц تشير إلى نتيجة: позвони́ла." },
    },
    {
      kind: "fill",
      prompt: { en: "Use the imperfective: Every day Mum cooked dinner.", ar: "استخدم الفعل غير التام: كانت أمّي تطبخ العشاء كلّ يوم." },
      ru: "Ка́ждый день ма́ма ___ у́жин.",
      answers: ["гото́вила"],
      why: { en: "ка́ждый день is a habit: гото́вила.", ar: "ка́ждый день عادة: гото́вила." },
    },
    {
      kind: "fill",
      prompt: { en: "Use сказа́ть: What did he say?", ar: "استخدم сказа́ть: ماذا قال؟" },
      ru: "Что он ___?",
      answers: ["сказа́л"],
      why: { en: "сказа́ть is the perfective partner of говори́ть.", ar: "сказа́ть هو الشريك التام للفعل говори́ть." },
    },
    {
      kind: "choice",
      prompt: { en: "Answer 'Not yet'.", ar: "أجب بـ«ليس بعد»." },
      ru: "Ты уже́ купи́л биле́ты?",
      options: ["Ещё нет.", "Ка́ждый день.", "Наконе́ц."],
      answer: 0,
      why: { en: "Ещё нет = not yet.", ar: "Ещё нет تعني «ليس بعد»." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I didn't manage to make dinner.", ar: "كوّن الجملة: لم ألحق بتحضير العشاء." },
      tokens: ["у́жин", "не", "пригото́вить", "успе́л", "Я"],
      answers: ["Я не успе́л пригото́вить у́жин."],
      why: { en: "успе́ть + a perfective infinitive.", ar: "успе́ть + مصدر تام." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: We watched the film (to the end).", ar: "كوّن الجملة: شاهدنا الفيلم (حتى النهاية)." },
      tokens: ["фильм", "Мы", "посмотре́ли"],
      answers: ["Мы посмотре́ли фильм."],
      why: { en: "посмотре́ли: the whole film, a result.", ar: "посмотре́ли: الفيلم كلّه، أي نتيجة." },
    },
    {
      kind: "translate",
      prompt: { en: "I've already bought bread.", ar: "لقد اشتريتُ الخبز بالفعل." },
      answers: ["Я уже́ купи́л хлеб.", "Я уже́ купи́ла хлеб.", "Уже́ купи́л хлеб.", "Уже́ купи́ла хлеб."],
      why: { en: "уже́ + the perfective: купи́л (a woman: купи́ла).", ar: "уже́ + الفعل التام: купи́л (والمرأة: купи́ла)." },
    },
    {
      kind: "translate",
      prompt: { en: "Yesterday I read all day.", ar: "أمس قرأتُ طوال اليوم." },
      answers: ["Вчера́ я весь день чита́л.", "Вчера́ я весь день чита́ла.", "Я вчера́ весь день чита́л.", "Я вчера́ весь день чита́ла.", "Вчера́ я чита́л весь день.", "Вчера́ я чита́ла весь день."],
      why: { en: "A length of time (весь день) takes the imperfective: чита́л.", ar: "المدّة الزمنية (весь день) تأتي مع الفعل غير التام: чита́л." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Did she finish the letter?", ar: "استمع. هل أنهت الرسالة؟" },
      ru: "Она́ написа́ла письмо́.",
      listen: true,
      options: ["Yes, it's written. · نعم، كتبتها.", "No, she was still writing. · لا، كانت لا تزال تكتب.", "She didn't start. · لم تبدأ."],
      answer: 0,
      why: { en: "написа́ла is perfective: the letter is finished.", ar: "написа́ла فعل تام: الرسالة انتهت." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. How often did he cook?", ar: "استمع. كم مرّة كان يطبخ؟" },
      ru: "Ра́ньше он гото́вил ка́ждый день.",
      listen: true,
      options: ["every day · كلّ يوم", "once · مرّة واحدة", "never · أبدًا"],
      answer: 0,
      why: { en: "ка́ждый день + the imperfective гото́вил: a habit.", ar: "ка́ждый день + غير التام гото́вил: عادة." },
    },
  ],
  topics: ["aspect", "past-tense"],
  search: ["Russian verb aspect perfective imperfective explained", "Russian aspect pairs сделать делать for beginners"],
  speaking: {
    scenario: {
      en: "It's Friday. Tell the tutor what you were doing this week (processes and habits) and what you managed to finish (results). The tutor checks a to-do list with you: уже́ or ещё нет?",
      ar: "اليوم الجمعة. أخبر المدرّس بما كنت تفعله هذا الأسبوع (عمليات وعادات) وبما تمكّنت من إنجازه (نتائج). المدرّس يراجع معك قائمة المهام: уже́ أم ещё нет؟",
    },
    tutorBrief:
      "Play Olga Petrovna (Ольга Петровна), the learner's Russian teacher, on a Friday. Go through a to-do list with the learner using вы: Вы уже сделали домашнее задание? Вы прочитали книгу? Вы купили билеты? Вы позвонили в банк? Expect the perfective for results (Да, уже сделал / сделала), ещё не / ещё нет for unfinished tasks, and the imperfective for process and habit (Я читал каждый день, но не успел). Ask one or two follow-ups (Что вы делали в субботу? Что вы приготовили?). Use only the pairs делать–сделать, читать–прочитать, писать–написать, покупать–купить, говорить–сказать, смотреть–посмотреть, звонить–позвонить, готовить–приготовить, plus уже, ещё, наконец, каждый день, успеть. If the learner mixes up the aspects, contrast the two forms in one short sentence. Finish by listing what the learner has already done this week.",
    prompts: [
      { ru: "Я уже́ сде́лал дома́шнее зада́ние.", en: "I've already done my homework.", ar: "لقد أنجزتُ واجبي المنزلي بالفعل." },
      { ru: "Кни́гу я ещё не прочита́л.", en: "I haven't finished the book yet.", ar: "لم أُنهِ قراءة الكتاب بعد." },
      { ru: "Я чита́л ка́ждый день, но не успе́л.", en: "I read every day, but I didn't manage to finish.", ar: "كنتُ أقرأ كلّ يوم، لكنّي لم ألحق." },
      { ru: "Наконе́ц я купи́л биле́ты!", en: "At last I've bought the tickets!", ar: "أخيرًا اشتريتُ التذاكر!" },
      { ru: "В суббо́ту я пригото́вил у́жин.", en: "On Saturday I made dinner.", ar: "يوم السبت حضّرتُ العشاء." },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about your week: what you did regularly (ка́ждый день, ча́сто — imperfective), what you finished (уже́, наконе́ц — perfective) and one thing you didn't manage to do (Я не успе́л / не успе́ла…).",
    ar: "اكتب من ٥ إلى ٨ جمل عن أسبوعك: ما كنت تفعله بانتظام (ка́ждый день، ча́сто — غير التام)، وما أنجزته (уже́، наконе́ц — التام)، وشيئًا واحدًا لم تتمكّن من فعله (Я не успе́л / не успе́ла…).",
  },
  culture: {
    en: "Russian schoolchildren keep a дневни́к, a school diary where they write down their homework and teachers put marks on a five-point scale (5 is the best). Parents often sign it every week.",
    ar: "يحمل تلاميذ المدارس الروسية دفترًا يُسمّى дневни́к، يكتبون فيه واجباتهم المنزلية، ويضع فيه المعلّمون الدرجات على مقياس من خمس درجات (٥ هي الأفضل). وكثيرًا ما يوقّع عليه الوالدان كلّ أسبوع.",
  },
};

const DAY_34: Day = {
  n: 34,
  week: 5,
  kind: "immersion",
  title: { ru: "Смо́трим: оди́н день в Москве́", en: "Watch: a day in Moscow", ar: "نشاهد: يوم في موسكو" },
  goals: [
    { en: "Follow a story about a busy day told in the past tense.", ar: "أن تتابع قصّة عن يوم مزدحم تُروى بالزمن الماضي." },
    { en: "Retell a day in order: снача́ла, пото́м, ве́чером.", ar: "أن تعيد سرد يوم بالترتيب: снача́ла، пото́м، ве́чером." },
  ],
  words: [
    {
      id: "d34-01", ru: "буди́льник", say: "budIl'nik", en: "alarm clock", ar: "منبّه", pos: "noun", g: "m",
      ex: { ru: "Мой буди́льник звони́т в семь.", en: "My alarm clock rings at seven.", ar: "يرنّ منبّهي في السابعة." },
    },
    {
      id: "d34-02", ru: "спеши́ть", say: "spishYt'", en: "to hurry, be in a hurry", ar: "يستعجل، يُسرع", pos: "verb", forms: "спешу́, спеши́шь",
      ex: { ru: "Извини́те, я спешу́!", en: "Sorry, I'm in a hurry!", ar: "عذرًا، أنا مستعجل!" },
    },
    {
      id: "d34-03", ru: "про́бка", say: "prOpka", en: "traffic jam; (also) a cork", ar: "زحمة مرور؛ (وأيضًا) سدادة", pos: "noun", g: "f",
      ex: { ru: "У́тром на доро́ге была́ про́бка.", en: "In the morning there was a traffic jam on the road.", ar: "في الصباح كانت هناك زحمة على الطريق." },
    },
    {
      id: "d34-04", ru: "переры́в", say: "pirirYf", en: "break (at work or school)", ar: "استراحة (في العمل أو الدراسة)", pos: "noun", g: "m",
      ex: { ru: "У меня́ переры́в в час.", en: "I have a break at one.", ar: "لديّ استراحة في الساعة الواحدة." },
    },
    {
      id: "d34-05", ru: "устава́ть", say: "ustavAt'", en: "to get tired", ar: "يتعب", pos: "verb", forms: "устаю́, устаёшь",
      ex: { ru: "Я о́чень устаю́ на рабо́те.", en: "I get very tired at work.", ar: "أتعب كثيرًا في العمل." },
      note: { en: "Like встава́ть, it loses -ва- in the present: устаю́, устаёшь.", ar: "مثل встава́ть، يفقد -ва- في الحاضر: устаю́، устаёшь." },
    },
    {
      id: "d34-06", ru: "выходно́й", say: "vykhadnOy", en: "day off", ar: "يوم عطلة", pos: "noun", g: "m", forms: "мн. ч. выходны́е",
      ex: { ru: "За́втра у меня́ выходно́й.", en: "Tomorrow is my day off.", ar: "غدًا يوم عطلتي." },
      note: { en: "An adjective used as a noun: выходно́й день → выходно́й.", ar: "صفة تُستخدم اسمًا: выходно́й день ← выходно́й." },
    },
    {
      id: "d34-07", ru: "доро́га", say: "darOga", en: "road; way, journey", ar: "طريق؛ مشوار", pos: "noun", g: "f",
      ex: { ru: "Доро́га на рабо́ту — час.", en: "The way to work takes an hour.", ar: "الطريق إلى العمل يستغرق ساعة." },
    },
    {
      id: "d34-08", ru: "встать", say: "fstat'", en: "to get up (once); perfective of встава́ть", ar: "ينهض (مرّة واحدة)؛ الفعل التام من встава́ть", pos: "verb", forms: "встал, вста́ла",
      ex: { ru: "Сего́дня я встал в де́вять!", en: "Today I got up at nine!", ar: "اليوم نهضتُ في التاسعة!" },
    },
  ],
  grammar: [
    {
      id: "d34-g1",
      title: { en: "встава́ть / встать and устава́ть", ar: "встава́ть / встать وустава́ть" },
      en: [
        "встава́ть is the imperfective, for a habit: Я обы́чно встаю́ в семь. встать is the perfective, for one event: Сего́дня я встал в де́вять.",
        "устава́ть (to get tired) is conjugated like встава́ть: устаю́, устаёшь, устаёт… Я всегда́ устаю́ в понеде́льник.",
      ],
      ar: [
        "встава́ть هو الفعل غير التام، للعادة: Я обы́чно встаю́ в семь. أمّا встать فهو الفعل التام، لحدث واحد: Сего́дня я встал в де́вять.",
        "ويُصرَّف устава́ть (يتعب) مثل встава́ть: устаю́، устаёшь، устаёт… Я всегда́ устаю́ в понеде́льник.",
      ],
      tables: [
        {
          caption: { en: "The present of встава́ть and устава́ть", ar: "حاضر встава́ть وустава́ть" },
          head: ["Person · الشخص", "встава́ть", "устава́ть"],
          rows: [
            ["я", "встаю́", "устаю́"],
            ["ты", "встаёшь", "устаёшь"],
            ["он / она́", "встаёт", "устаёт"],
            ["они́", "встаю́т", "устаю́т"],
          ],
        },
      ],
      examples: [
        {
          ru: "Обы́чно Макси́м встаёт в де́сять, но вчера́ он встал в семь.",
          en: "Maxim usually gets up at ten, but yesterday he got up at seven.",
          ar: "عادةً ينهض مكسيم في العاشرة، لكنّه أمس نهض في السابعة.",
        },
        { ru: "Ты ча́сто устаёшь?", en: "Do you often get tired?", ar: "هل تتعب كثيرًا؟" },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Оди́н день Макси́ма", en: "One day in Maxim's life", ar: "يوم من حياة مكسيم" },
    setting: {
      en: "Evening. Anna phones her brother Maxim, and he tells her about his crazy day in Moscow: the alarm clock, the traffic, work and the way home.",
      ar: "في المساء تتّصل آنا بأخيها مكسيم، فيحكي لها عن يومه المجنون في موسكو: المنبّه، والزحمة، والعمل، وطريق العودة.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Приве́т, Макси́м! Почему́ ты у́тром не позвони́л?", en: "Hi, Maxim! Why didn't you call this morning?", ar: "مرحبًا يا مكسيم! لماذا لم تتّصل في الصباح؟" },
      { who: "A", name: "Макси́м", ru: "А́нна, сего́дня был о́чень плохо́й день!", en: "Anna, today was a really bad day!", ar: "يا آنا، كان اليوم يومًا سيّئًا جدًّا!" },
      {
        who: "A", name: "Макси́м", ru: "Снача́ла мой буди́льник не звони́л, и я встал в де́вять.",
        en: "First, my alarm clock didn't ring, and I got up at nine.", ar: "أوّلًا لم يرنّ منبّهي، فنهضتُ في التاسعة.",
      },
      { who: "B", name: "А́нна", ru: "В де́вять? А рабо́та начина́ется в де́вять!", en: "At nine? But work starts at nine!", ar: "في التاسعة؟ لكنّ العمل يبدأ في التاسعة!" },
      { who: "A", name: "Макси́м", ru: "Да! Я не ел, не пил ко́фе — я о́чень спеши́л.", en: "Yes! I didn't eat or have coffee — I was in a real hurry.", ar: "نعم! لم آكل ولم أشرب القهوة — كنتُ مستعجلًا جدًّا." },
      {
        who: "A", name: "Макси́м", ru: "Но на доро́ге была́ про́бка. Я был в про́бке час!",
        en: "But there was a traffic jam on the road. I was stuck in traffic for an hour!", ar: "لكن كانت هناك زحمة على الطريق. بقيتُ في الزحمة ساعة كاملة!",
      },
      { who: "B", name: "А́нна", ru: "Час! А что сказа́ли на рабо́те?", en: "An hour! And what did they say at work?", ar: "ساعة! وماذا قالوا في العمل؟" },
      {
        who: "A", name: "Макси́м", ru: "Ничего́. Но у нас была́ больша́я пробле́ма, и я мно́го рабо́тал.",
        en: "Nothing. But we had a big problem, and I worked a lot.", ar: "لا شيء. لكن كانت لدينا مشكلة كبيرة، فعملتُ كثيرًا.",
      },
      { who: "B", name: "А́нна", ru: "А переры́в?", en: "And your break?", ar: "والاستراحة؟" },
      {
        who: "A", name: "Макси́м", ru: "Обы́чно у меня́ переры́в час, а сего́дня — то́лько де́сять мину́т.",
        en: "Usually my break is an hour, but today it was only ten minutes.", ar: "عادةً تكون استراحتي ساعة، أمّا اليوم فعشر دقائق فقط.",
      },
      {
        who: "A", name: "Макси́м", ru: "Ве́чером на доро́ге то́же была́ про́бка. Я возвраща́лся два часа́!",
        en: "In the evening there was a jam on the road too. It took me two hours to get back!", ar: "وفي المساء كانت هناك زحمة على الطريق أيضًا. استغرقت عودتي ساعتين!",
      },
      { who: "B", name: "А́нна", ru: "Два часа́! А что ты де́лал в про́бке?", en: "Two hours! And what did you do in the traffic jam?", ar: "ساعتان! وماذا فعلتَ في الزحمة؟" },
      { who: "A", name: "Макси́м", ru: "Слу́шал му́зыку и ду́мал о выходно́м.", en: "I listened to music and thought about my day off.", ar: "استمعتُ إلى الموسيقى وفكّرتُ في يوم العطلة." },
      { who: "B", name: "А́нна", ru: "Ты мно́го рабо́таешь и о́чень устаёшь.", en: "You work a lot and you get very tired.", ar: "أنت تعمل كثيرًا وتتعب جدًّا." },
      { who: "A", name: "Макси́м", ru: "Да, я о́чень устаю́. Но за́втра у меня́ выходно́й!", en: "Yes, I get very tired. But tomorrow is my day off!", ar: "نعم، أتعب كثيرًا. لكن غدًا يوم عطلتي!" },
      {
        who: "B", name: "А́нна", ru: "Отли́чно! Хо́чешь гуля́ть в па́рке? Но не ра́но!",
        en: "Great! Do you want to go for a walk in the park? But not early!", ar: "رائع! هل تريد أن نتمشّى في الحديقة؟ لكن ليس مبكّرًا!",
      },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "What is a про́бка in the city?", ar: "ما معنى про́бка في المدينة؟" },
      options: ["a traffic jam · زحمة مرور", "a break · استراحة", "an alarm clock · منبّه"],
      answer: 0,
      why: { en: "In the city про́бка is a traffic jam; it also means a cork.", ar: "في المدينة تعني про́бка زحمة المرور، وتعني أيضًا سدادة الزجاجة." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Sorry, I'm in a hurry!", ar: "أكمل: عذرًا، أنا مستعجل!" },
      ru: "Извини́те, я ___!",
      answers: ["спешу́"],
      why: { en: "спеши́ть: я спешу́ — after ш write у, never ю.", ar: "спеши́ть: я спешу́ — بعد ш نكتب у وليس ю أبدًا." },
    },
    {
      kind: "fill",
      prompt: { en: "Use встать: Yesterday Anna got up at six.", ar: "استخدم встать: أمس نهضت آنا في السادسة." },
      ru: "Вчера́ А́нна ___ в шесть.",
      answers: ["вста́ла"],
      why: { en: "One event in the past: the perfective вста́ла.", ar: "حدث واحد في الماضي: الفعل التام вста́ла." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Do you get tired at work?", ar: "أكمل: هل تتعب في العمل؟" },
      ru: "Ты ___ на рабо́те?",
      answers: ["устаёшь", "устаешь"],
      why: { en: "устава́ть loses -ва-: ты устаёшь.", ar: "устава́ть يفقد -ва-: ты устаёшь." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: Tomorrow is my day off.", ar: "كوّن الجملة: غدًا يوم عطلتي." },
      tokens: ["у", "выходно́й", "За́втра", "меня́"],
      answers: ["За́втра у меня́ выходно́й.", "У меня́ за́втра выходно́й."],
      why: { en: "у меня́ + выходно́й: literally 'at me (there is) a day off'.", ar: "у меня́ + выходно́й: حرفيًا «عندي يوم عطلة»." },
    },
    {
      kind: "translate",
      prompt: { en: "There was a traffic jam on the road.", ar: "كانت هناك زحمة على الطريق." },
      answers: ["На доро́ге была́ про́бка.", "Была́ про́бка на доро́ге."],
      why: { en: "про́бка is feminine, so была́.", ar: "про́бка مؤنّثة، لذلك была́." },
    },
  ],
  topics: ["daily-routine", "listening", "culture"],
  search: ["Russian vlog my day in Moscow", "Russian listening practice daily routine past tense"],
  speaking: {
    scenario: {
      en: "Retell Maxim's day (or the video you watched) in the past tense, then describe your own busiest day.",
      ar: "أعد سرد يوم مكسيم (أو الفيديو الذي شاهدته) بالزمن الماضي، ثمّ صف أكثر أيامك انشغالًا.",
    },
    tutorBrief:
      "Play a curious Russian friend. First ask the learner to retell Maxim's day from the story (будильник не звонил, встал в девять, спешил, пробка, много работал, перерыв десять минут, возвращался два часа, выходной), prompting with Что было сначала? А потом? А вечером? Then ask about the learner's own busiest day: Во сколько ты встал / встала? Была пробка? Был перерыв? Ты часто устаёшь? Accept the past tense of known verbs; if a form is wrong, repeat it correctly once. Keep your own sentences short and slow, because this is a listening day. Finish by saying whose day sounds harder, Maxim's or the learner's.",
    prompts: [
      { ru: "Снача́ла буди́льник не звони́л.", en: "First the alarm clock didn't ring.", ar: "أوّلًا لم يرنّ المنبّه." },
      { ru: "Макси́м встал в де́вять и о́чень спеши́л.", en: "Maxim got up at nine and was in a big hurry.", ar: "نهض مكسيم في التاسعة وكان مستعجلًا جدًّا." },
      { ru: "На доро́ге была́ про́бка.", en: "There was a traffic jam on the road.", ar: "كانت هناك زحمة على الطريق." },
      { ru: "Переры́в был то́лько де́сять мину́т.", en: "The break was only ten minutes.", ar: "كانت الاستراحة عشر دقائق فقط." },
      { ru: "За́втра у него́ выходно́й.", en: "Tomorrow is his day off.", ar: "غدًا يوم عطلته." },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about your busiest day this month: when you got up, what happened on the way, how long your break was, when you came back and whether you often get tired.",
    ar: "اكتب من ٥ إلى ٨ جمل عن أكثر أيامك انشغالًا هذا الشهر: متى نهضت، وماذا حدث في الطريق، وكم كانت مدّة استراحتك، ومتى عدت، وهل تتعب كثيرًا.",
  },
  culture: {
    en: "Moscow is famous for its про́бки, so many people prefer the metro: it is fast, trains come every few minutes at rush hour, and it runs from about 5:30 in the morning until 1 at night.",
    ar: "تشتهر موسكو بزحمة المرور (про́бки)، لذلك يفضّل كثيرون المترو: فهو سريع، وتمرّ القطارات كلّ بضع دقائق في ساعات الذروة، ويعمل من نحو الخامسة والنصف صباحًا حتى الواحدة بعد منتصف الليل.",
  },
  worksheet: {
    before: [
      {
        en: "Listen for time words: снача́ла, пото́м, у́тром, ве́чером, обы́чно, сего́дня. They give the order of Maxim's day.",
        ar: "انتبه لكلمات الزمن: снача́ла، пото́м، у́тром، ве́чером، обы́чно، сего́дня. إنّها ترتّب أحداث يوم مكسيم.",
      },
      { en: "Catch the times: в де́вять, час, де́сять мину́т, два часа́.", ar: "التقط الأوقات: в де́вять، час، де́сять мину́т، два часа́." },
      {
        en: "Notice the past tense: Maxim says встал, спеши́л, рабо́тал, возвраща́лся.",
        ar: "لاحظ الزمن الماضي: مكسيم يقول встал، спеши́л، рабо́тал، возвраща́лся.",
      },
    ],
    questions: [
      {
        kind: "choice",
        prompt: { en: "What went wrong first?", ar: "ما أوّل شيء سار على نحو خاطئ؟" },
        options: ["The alarm clock didn't ring. · لم يرنّ المنبّه.", "The car broke down. · تعطّلت السيّارة.", "He lost his wallet. · أضاع محفظته."],
        answer: 0,
        why: { en: "Maxim says: Снача́ла мой буди́льник не звони́л.", ar: "يقول مكسيم: Снача́ла мой буди́льник не звони́л." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. What time did Maxim get up?", ar: "استمع. في أيّ ساعة نهض مكسيم؟" },
        ru: "Я встал в де́вять.",
        listen: true,
        options: ["at nine · في التاسعة", "at seven · في السابعة", "at ten · في العاشرة"],
        answer: 0,
        why: { en: "в де́вять = at nine.", ar: "в де́вять تعني «في التاسعة»." },
      },
      {
        kind: "choice",
        prompt: { en: "How long was he stuck in the morning traffic jam?", ar: "كم بقي في زحمة الصباح؟" },
        options: ["an hour · ساعة", "ten minutes · عشر دقائق", "two hours · ساعتين"],
        answer: 0,
        why: { en: "He says: Я был в про́бке час!", ar: "يقول: Я был в про́бке час!" },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. How long was his break today?", ar: "استمع. كم كانت مدّة استراحته اليوم؟" },
        ru: "Обы́чно у меня́ переры́в час, а сего́дня — то́лько де́сять мину́т.",
        listen: true,
        options: ["ten minutes · عشر دقائق", "an hour · ساعة", "two hours · ساعتان"],
        answer: 0,
        why: { en: "сего́дня — то́лько де́сять мину́т: today only ten minutes.", ar: "сего́дня — то́лько де́сять мину́т: اليوم عشر دقائق فقط." },
      },
      {
        kind: "choice",
        prompt: { en: "What did Maxim do in the evening traffic jam?", ar: "ماذا فعل مكسيم في زحمة المساء؟" },
        options: ["He listened to music. · استمع إلى الموسيقى.", "He read a book. · قرأ كتابًا.", "He phoned Anna. · اتّصل بآنا."],
        answer: 0,
        why: { en: "He says: Слу́шал му́зыку и ду́мал о выходно́м.", ar: "يقول: Слу́шал му́зыку и ду́мал о выходно́м." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. Why is Maxim happy at the end?", ar: "استمع. لماذا مكسيم سعيد في النهاية؟" },
        ru: "Но за́втра у меня́ выходно́й!",
        listen: true,
        options: ["Tomorrow is his day off. · غدًا يوم عطلته.", "He finished work early. · أنهى العمل مبكّرًا.", "There was no traffic. · لم تكن هناك زحمة."],
        answer: 0,
        why: { en: "выходно́й = a day off.", ar: "выходно́й تعني «يوم عطلة»." },
      },
    ],
    retell: {
      en: "Retell Maxim's day in 6–8 sentences, in the past tense and in the third person: Снача́ла буди́льник не звони́л, и Макси́м встал в де́вять… Then tell the tutor about your own busiest day.",
      ar: "أعد سرد يوم مكسيم في ٦ إلى ٨ جمل، بالزمن الماضي وبضمير الغائب: Снача́ла буди́льник не звони́л, и Макси́м встал в де́вять… ثمّ احكِ للمدرّس عن أكثر أيامك انشغالًا.",
    },
  },
};

const DAY_35: Day = {
  n: 35,
  week: 5,
  kind: "review",
  title: { ru: "Повторе́ние: неде́ля 5", en: "Review: week 5", ar: "مراجعة: الأسبوع ٥" },
  goals: [
    {
      en: "Check that you can use the past tense, -ся verbs, the genitive and aspect without help.",
      ar: "أن تتأكّد من قدرتك على استخدام الزمن الماضي والأفعال المنتهية بـ -ся وحالة الإضافة ونوعَي الفعل دون مساعدة.",
    },
    {
      en: "Pass an oral exam: describe yesterday, what you have and don't have, and what you finished this week.",
      ar: "أن تجتاز اختبارًا شفهيًّا: تصف يوم أمس، وما لديك وما ليس لديك، وما أنجزته هذا الأسبوع.",
    },
  ],
  words: [],
  grammar: [
    {
      id: "d35-g1",
      title: { en: "Week 5 at a glance", ar: "الأسبوع ٥ في لمحة" },
      en: [
        "Past tense: stem + -л / -ла / -ло / -ли, and быть → был, была́, бы́ло, бы́ли. Reflexive verbs add -ся after a consonant and -сь after a vowel: я просыпа́юсь, он просыпа́ется.",
        "Genitive: -а / -я, -ы / -и after нет, у, мно́го, ма́ло, ско́лько, the numbers 2–4 and из, от, до, по́сле. Aspect: the imperfective for a process or a habit, the perfective for one finished result.",
      ],
      ar: [
        "الزمن الماضي: الجذر + -л / -ла / -ло / -ли، وбыть ← был، была́، бы́ло، бы́ли. والأفعال الانعكاسية تضيف -ся بعد الحرف الساكن و-сь بعد الحرف الصوتي: я просыпа́юсь، он просыпа́ется.",
        "حالة الإضافة: -а / -я، -ы / -и بعد нет وу وмно́го وма́ло وско́лько والأعداد ٢–٤ وحروف الجر из، от، до، по́сле. ونوعا الفعل: غير التام للعملية أو العادة، والتام لنتيجة واحدة مكتملة.",
      ],
      tables: [
        {
          caption: { en: "The week's key forms", ar: "أهمّ صيغ الأسبوع" },
          head: ["Topic · الموضوع", "Pattern · القاعدة", "Example · مثال"],
          rows: [
            ["Past · الماضي", "-л / -ла / -ли", "Она́ была́ до́ма."],
            ["-ся verbs · الأفعال الانعكاسية", "-юсь, -ешься, -ется", "Я просыпа́юсь в семь."],
            ["нет + genitive · нет + الإضافة", "-а / -я / -ы / -и", "У меня́ нет маши́ны."],
            ["2–4 + genitive singular · ٢–٤ + الإضافة المفردة", "два / две + -а / -ы / -и", "две буты́лки воды́"],
            ["5+ + genitive plural · ٥ فما فوق + الإضافة في الجمع", "-ов / no ending · بلا نهاية", "пять паке́тов"],
            ["Aspect · نوع الفعل", "process / result · عملية / نتيجة", "чита́л — прочита́л"],
          ],
        },
      ],
      examples: [
        { ru: "Вчера́ я встал в семь, а пото́м весь день рабо́тал.", en: "Yesterday I got up at seven and then worked all day.", ar: "أمس نهضتُ في السابعة، ثمّ عملتُ طوال اليوم." },
        {
          ru: "У меня́ нет вре́мени: я ещё не сде́лал дома́шнее зада́ние.",
          en: "I have no time: I haven't done my homework yet.",
          ar: "ليس لديّ وقت: لم أُنجز واجبي المنزلي بعد.",
        },
      ],
    },
  ],
  exercises: [],
  topics: ["past-tense", "genitive", "aspect", "reflexive-verbs"],
  search: ["Russian past tense and verb aspect practice", "Russian genitive case practice for beginners"],
  speaking: {
    scenario: {
      en: "Speaking test: describe yesterday in detail, say what you have and don't have, and tell the examiner what you finished this week.",
      ar: "اختبار شفهي: صف يوم أمس بالتفصيل، وقل ما لديك وما ليس لديك، وأخبر الممتحن بما أنجزته هذا الأسبوع.",
    },
    tutorBrief:
      "Run a 10-minute oral exam for week 5 as Olga Petrovna (Ольга Петровна), the teacher; use вы. Part 1, past tense: Что вы делали вчера? Где вы были в субботу? plus one follow-up (А потом? Было интересно?). Part 2, routine: Во сколько вы обычно просыпаетесь, встаёте, ложитесь спать? Expect -ся verbs and clock times (в семь часов, в половине восьмого). Part 3, genitive: Что у вас есть дома? Чего у вас нет? Expect у + genitive and нет + genitive, then ask for a short shopping list with quantities (два литра молока, пачка чая, две бутылки воды). Part 4, aspect: Что вы уже сделали? Что вы ещё не сделали? Expect perfective results and ещё не. Do not correct during the exam; note the errors. At the end give a score out of 20: 5 points per part (2 for correct forms — past endings, -ся, genitive, aspect; 2 for range and fluency; 1 for pronunciation and stress). Then name two strengths and the two most important errors with their correct forms.",
    prompts: [
      { ru: "Вчера́ я был до́ма, а пото́м гуля́л в па́рке.", en: "Yesterday I was at home, and then I walked in the park.", ar: "أمس كنتُ في البيت، ثمّ تمشّيتُ في الحديقة." },
      { ru: "Обы́чно я встаю́ в полови́не восьмо́го.", en: "I usually get up at half past seven.", ar: "عادةً أنهض في السابعة والنصف." },
      { ru: "У меня́ нет маши́ны, но есть соба́ка.", en: "I don't have a car, but I have a dog.", ar: "ليست لديّ سيّارة، لكن لديّ كلب." },
      { ru: "Я уже́ сде́лал дома́шнее зада́ние.", en: "I've already done my homework.", ar: "لقد أنجزتُ واجبي المنزلي بالفعل." },
      { ru: "Кни́гу я ещё не прочита́л.", en: "I haven't finished the book yet.", ar: "لم أُنهِ قراءة الكتاب بعد." },
    ],
  },
  journal: {
    en: "Write 6–8 sentences about your week: one thing you did each day, one thing you have and one you don't have, and what you finished and didn't finish. Then underline every past-tense verb and check its ending.",
    ar: "اكتب من ٦ إلى ٨ جمل عن أسبوعك: شيئًا واحدًا فعلته كلّ يوم، وشيئًا لديك وشيئًا ليس لديك، وما أنجزته وما لم تنجزه. ثمّ ضع خطًّا تحت كلّ فعل في الماضي وتحقّق من نهايته.",
  },
  test: {
    sections: [
      {
        title: { en: "Words", ar: "المفردات" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Which word means 'the day before yesterday'?", ar: "أيّ كلمة تعني «أوّل أمس»؟" },
            options: ["позавчера́", "вчера́", "неда́вно", "давно́"],
            answer: 0,
            why: { en: "позавчера́ = the day before yesterday; вчера́ = yesterday.", ar: "позавчера́ = أوّل أمس، وвчера́ = أمس." },
          },
          {
            kind: "choice",
            prompt: { en: "Someone who goes to bed very late is a…", ar: "الشخص الذي يذهب إلى النوم متأخّرًا جدًّا هو…" },
            options: ["сова́", "жа́воронок", "буди́льник"],
            answer: 0,
            why: { en: "сова́ = owl, a night person.", ar: "сова́ = البومة، أي من يسهر ليلًا." },
          },
          {
            kind: "choice",
            prompt: { en: "What do you say when you have no time?", ar: "ماذا تقول عندما لا يكون لديك وقت؟" },
            options: ["У меня́ нет вре́мени.", "Ничего́ стра́шного.", "Нет пробле́м!"],
            answer: 0,
            why: { en: "нет вре́мени = no time.", ar: "нет вре́мени تعني «لا يوجد وقت»." },
          },
          {
            kind: "choice",
            prompt: { en: "Which word is a container for milk or juice?", ar: "أيّ كلمة تدلّ على عبوة للحليب أو العصير؟" },
            options: ["паке́т", "переры́в", "про́бка", "кошелёк"],
            answer: 0,
            why: { en: "паке́т молока́ = a carton of milk.", ar: "паке́т молока́ = علبة حليب." },
          },
        ],
      },
      {
        title: { en: "Grammar", ar: "القواعد" },
        items: [
          {
            kind: "fill",
            prompt: { en: "Past of быть: Anna was at work.", ar: "ماضي быть: كانت آنا في العمل." },
            ru: "А́нна ___ на рабо́те.",
            answers: ["была́"],
            why: { en: "A woman: была́, stressed on the ending.", ar: "امرأة: была́، والنبر على النهاية." },
          },
          {
            kind: "fill",
            prompt: { en: "Use занима́ться: In the evening we study.", ar: "استخدم занима́ться: في المساء نذاكر." },
            ru: "Ве́чером мы ___.",
            answers: ["занима́емся"],
            why: { en: "мы takes -ем, then -ся after the consonant.", ar: "مع мы نضيف -ем، ثمّ -ся بعد الحرف الساكن." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: We don't have a dog.", ar: "أكمل: ليس لدينا كلب." },
            ru: "У нас нет ___.",
            answers: ["соба́ки"],
            why: { en: "нет + genitive; after к write и.", ar: "нет + حالة الإضافة، وبعد к نكتب и." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: three bottles of water.", ar: "أكمل: ثلاث زجاجات ماء." },
            ru: "три буты́лки ___",
            answers: ["воды́"],
            why: { en: "A quantity takes the genitive: вода́ → воды́.", ar: "بعد الكمّية تأتي حالة الإضافة: вода́ ← воды́." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: after lunch.", ar: "أكمل: بعد الغداء." },
            ru: "по́сле ___",
            answers: ["обе́да"],
            why: { en: "по́сле + genitive: обе́д → обе́да.", ar: "по́сле + حالة الإضافة: обе́д ← обе́да." },
          },
          {
            kind: "fill",
            prompt: { en: "Use the perfective: At last I've bought the tickets.", ar: "استخدم الفعل التام: أخيرًا اشتريتُ التذاكر." },
            ru: "Наконе́ц я ___ биле́ты.",
            answers: ["купи́л", "купи́ла"],
            why: { en: "наконе́ц + a result: купи́л (a woman: купи́ла).", ar: "наконе́ц + نتيجة: купи́л (والمرأة: купи́ла)." },
          },
        ],
      },
      {
        title: { en: "Listening", ar: "الاستماع" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Listen. Where was he yesterday?", ar: "استمع. أين كان أمس؟" },
            ru: "Вчера́ он был в музе́е.",
            listen: true,
            options: ["at the museum · في المتحف", "at work · في العمل", "at home · في البيت"],
            answer: 0,
            why: { en: "в музе́е = at the museum.", ar: "в музе́е تعني «في المتحف»." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. What time does her work start?", ar: "استمع. متى يبدأ عملها؟" },
            ru: "Моя́ рабо́та начина́ется в полови́не девя́того.",
            listen: true,
            options: ["8:30", "9:30", "9:00"],
            answer: 0,
            why: { en: "в полови́не девя́того = half of the ninth hour = 8:30.", ar: "в полови́не девя́того = نصف الساعة التاسعة = ٨:٣٠." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. Has he finished the book?", ar: "استمع. هل أنهى الكتاب؟" },
            ru: "Кни́гу я ещё не прочита́л.",
            listen: true,
            options: ["Not yet. · ليس بعد.", "Yes, all of it. · نعم، كلّه.", "He read it every day. · كان يقرؤه كلّ يوم."],
            answer: 0,
            why: { en: "ещё не = not yet.", ar: "ещё не تعني «ليس بعد»." },
          },
        ],
      },
      {
        title: { en: "Sentences", ar: "الجمل" },
        items: [
          {
            kind: "order",
            prompt: { en: "Build: I usually wake up at seven.", ar: "كوّن: عادةً أستيقظ في السابعة." },
            tokens: ["в", "просыпа́юсь", "Я", "семь", "обы́чно"],
            answers: ["Я обы́чно просыпа́юсь в семь.", "Обы́чно я просыпа́юсь в семь."],
            why: { en: "обы́чно goes before the verb; в + the hour.", ar: "обы́чно قبل الفعل، وв + الساعة." },
          },
          {
            kind: "order",
            prompt: { en: "Build: My brother has a car.", ar: "كوّن: لدى أخي سيّارة." },
            tokens: ["бра́та", "есть", "У", "маши́на"],
            answers: ["У бра́та есть маши́на."],
            why: { en: "у + the owner in the genitive + есть.", ar: "у + المالك في حالة الإضافة + есть." },
          },
          {
            kind: "order",
            prompt: { en: "Build: Last week we were at the theatre.", ar: "كوّن: في الأسبوع الماضي كنّا في المسرح." },
            tokens: ["неде́ле", "бы́ли", "На", "мы", "в", "про́шлой", "теа́тре"],
            answers: ["На про́шлой неде́ле мы бы́ли в теа́тре.", "Мы бы́ли в теа́тре на про́шлой неде́ле."],
            why: { en: "на про́шлой неде́ле = last week; мы бы́ли.", ar: "на про́шлой неде́ле = في الأسبوع الماضي؛ мы бы́ли." },
          },
        ],
      },
      {
        title: { en: "Translation", ar: "الترجمة" },
        items: [
          {
            kind: "translate",
            prompt: { en: "Yesterday I got up late.", ar: "أمس نهضتُ متأخّرًا." },
            answers: ["Вчера́ я встал по́здно.", "Вчера́ я вста́ла по́здно.", "Я вчера́ встал по́здно.", "Я вчера́ вста́ла по́здно."],
            why: { en: "One event: the perfective встал / вста́ла.", ar: "حدث واحد: الفعل التام встал / вста́ла." },
          },
          {
            kind: "translate",
            prompt: { en: "Unfortunately, I have no time.", ar: "للأسف، ليس لديّ وقت." },
            answers: ["К сожале́нию, у меня́ нет вре́мени.", "У меня́, к сожале́нию, нет вре́мени."],
            why: { en: "нет + the genitive вре́мени.", ar: "нет + صيغة الإضافة вре́мени." },
          },
          {
            kind: "translate",
            prompt: { en: "Two kilos of apples, please.", ar: "كيلوغرامان من التفّاح، من فضلك." },
            answers: ["Два килогра́мма я́блок, пожа́луйста.", "Два килогра́мма я́блок."],
            why: { en: "два + килогра́мма (genitive singular) + я́блок (genitive plural).", ar: "два + килогра́мма (الإضافة المفردة) + я́блок (الإضافة في الجمع)." },
          },
        ],
      },
    ],
    speaking: [
      {
        en: "Describe yesterday in detail, from getting up to going to bed (6–8 sentences in the past tense).",
        ar: "صف يوم أمس بالتفصيل، من النهوض حتى النوم (من ٦ إلى ٨ جمل بالزمن الماضي).",
      },
      {
        en: "Describe your typical weekday with -ся verbs and times: Я просыпа́юсь в…, пото́м…",
        ar: "صف يوم عملك المعتاد بالأفعال المنتهية بـ -ся والأوقات: Я просыпа́юсь в…، пото́м…",
      },
      {
        en: "Say what you and your family have and don't have: У меня́ есть…, у бра́та нет…",
        ar: "قل ما لديك ولدى عائلتك وما ليس لديكم: У меня́ есть…، у бра́та нет…",
      },
      {
        en: "Say what you finished this week and what you haven't done yet (уже́ / ещё не).",
        ar: "قل ما أنجزته هذا الأسبوع وما لم تنجزه بعد (уже́ / ещё не).",
      },
    ],
  },
};

export const WEEK_5: Day[] = [DAY_29, DAY_30, DAY_31, DAY_32, DAY_33, DAY_34, DAY_35];
