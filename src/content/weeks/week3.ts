import type { Day } from "../types.ts";

// Week 3 · Where? The prepositional case, places in town, numbers to 100 and prices,
// time and days of the week, жить and о + prepositional. Written to docs/content-style-guide.md.

const DAY_15: Day = {
  n: 15,
  week: 3,
  kind: "lesson",
  title: { ru: "Где? Предло́жный паде́ж", en: "Where? The prepositional case", ar: "أين؟ حالة حرف الجر" },
  goals: [
    {
      en: "Answer the question Где? with в or на and a noun in the prepositional case: в па́рке, на рабо́те.",
      ar: "أن تجيب عن السؤال Где? بـ в أو на واسمٍ في حالة حرف الجر: в па́рке، на рабо́те.",
    },
    {
      en: "Form the prepositional with -е and -и (в Москве́, в Росси́и, в тетра́ди) and say до́ма for 'at home'.",
      ar: "أن تصوغ حالة حرف الجر بالنهايتين -е و-и (в Москве́، в Росси́и، в тетра́ди)، وأن تقول до́ма بمعنى «في البيت».",
    },
    {
      en: "Say where you, your family and your friends are right now, and where you work or study.",
      ar: "أن تقول أين أنت وعائلتك وأصدقاؤك الآن، وأين تعمل أو تدرس.",
    },
  ],
  words: [
    {
      id: "d15-01", ru: "в", say: "v", en: "in, at (inside a place)", ar: "في (داخل مكان)", pos: "prep",
      ex: { ru: "Я в па́рке.", en: "I'm in the park.", ar: "أنا في الحديقة." },
      note: {
        en: "Before a voiceless consonant в sounds like f: в па́рке → fpArkye.",
        ar: "قبل الساكن المهموس يُنطق в مثل f: в па́рке ← fpArkye.",
      },
    },
    {
      id: "d15-02", ru: "на", say: "na", en: "on; at (open places, events, some fixed places)", ar: "على؛ في (للأماكن المفتوحة والمناسبات وبعض الأماكن المحدّدة)", pos: "prep",
      ex: { ru: "Кни́га на столе́.", en: "The book is on the table.", ar: "الكتاب على الطاولة." },
    },
    {
      id: "d15-03", ru: "до́ма", say: "dOma", en: "at home", ar: "في البيت", pos: "adv",
      ex: { ru: "Ма́ма до́ма.", en: "Mum is at home.", ar: "أمي في البيت." },
      note: { en: "No preposition! Don't confuse it with дома́ — 'houses'.", ar: "بلا حرف جر! ولا تخلط بينها وبين дома́ بمعنى «بيوت»." },
    },
    {
      id: "d15-04", ru: "шко́ла", say: "shkOla", en: "school", ar: "مدرسة", pos: "noun", g: "f", forms: "в шко́ле",
      ex: { ru: "Моя́ сестра́ в шко́ле.", en: "My sister is at school.", ar: "أختي في المدرسة." },
    },
    {
      id: "d15-05", ru: "университе́т", say: "univirsityEt", en: "university", ar: "جامعة", pos: "noun", g: "m", forms: "в университе́те",
      ex: { ru: "А́нна сейча́с в университе́те.", en: "Anna is at the university now.", ar: "آنا الآن في الجامعة." },
    },
    {
      id: "d15-06", ru: "магази́н", say: "magazIn", en: "shop, store", ar: "متجر، محلّ", pos: "noun", g: "m", forms: "в магази́не",
      ex: { ru: "Па́па в магази́не.", en: "Dad is at the shop.", ar: "أبي في المتجر." },
    },
    {
      id: "d15-07", ru: "о́фис", say: "Ofis", en: "office", ar: "مكتب (مقرّ العمل)", pos: "noun", g: "m", forms: "в о́фисе",
      ex: { ru: "Макси́м рабо́тает в о́фисе.", en: "Maxim works in an office.", ar: "مكسيم يعمل في مكتب." },
    },
    {
      id: "d15-08", ru: "у́лица", say: "Ulitsa", en: "street", ar: "شارع", pos: "noun", g: "f", forms: "на у́лице",
      ex: { ru: "Моя́ маши́на на у́лице.", en: "My car is in the street.", ar: "سيارتي في الشارع." },
      note: {
        en: "Russians say 'on the street': на у́лице. It also means 'outside, outdoors'.",
        ar: "يقول الروس «على الشارع»: на у́лице. وتعني أيضًا «في الخارج».",
      },
    },
    {
      id: "d15-09", ru: "пло́щадь", say: "plOshchit'", en: "square (in a town)", ar: "ميدان، ساحة", pos: "noun", g: "f", forms: "на пло́щади",
      ex: { ru: "Мы на пло́щади.", en: "We're on the square.", ar: "نحن في الميدان." },
    },
    {
      id: "d15-10", ru: "страна́", say: "stranA", en: "country", ar: "بلد، دولة", pos: "noun", g: "f", forms: "в стране́; мн. ч. стра́ны",
      ex: { ru: "Еги́пет — моя́ страна́.", en: "Egypt is my country.", ar: "مصر بلدي." },
    },
    {
      id: "d15-11", ru: "Росси́я", say: "rasIya", en: "Russia", ar: "روسيا", pos: "noun", g: "f", forms: "в Росси́и",
      ex: { ru: "Я сейча́с в Росси́и.", en: "I'm in Russia now.", ar: "أنا الآن في روسيا." },
    },
    {
      id: "d15-12", ru: "Еги́пет", say: "yigIpit", en: "Egypt", ar: "مصر", pos: "noun", g: "m", forms: "в Еги́пте",
      ex: { ru: "Мои́ роди́тели в Еги́пте.", en: "My parents are in Egypt.", ar: "والداي في مصر." },
      note: { en: "The е before the last letter drops: Еги́пет → в Еги́пте.", ar: "يسقط حرف е الذي قبل الحرف الأخير: Еги́пет ← в Еги́пте." },
    },
    {
      id: "d15-13", ru: "Каи́р", say: "kaIr", en: "Cairo", ar: "القاهرة", pos: "noun", g: "m", forms: "в Каи́ре",
      ex: { ru: "Мой брат в Каи́ре.", en: "My brother is in Cairo.", ar: "أخي في القاهرة." },
    },
    {
      id: "d15-14", ru: "кварти́ра", say: "kvartIra", en: "flat, apartment", ar: "شقّة", pos: "noun", g: "f", forms: "в кварти́ре",
      ex: { ru: "Твоя́ кварти́ра в Москве́?", en: "Is your flat in Moscow?", ar: "هل شقّتك في موسكو؟" },
    },
    {
      id: "d15-15", ru: "на рабо́те", say: "na rabOtye", en: "at work", ar: "في العمل", pos: "phrase",
      ex: { ru: "Па́па сейча́с на рабо́те.", en: "Dad is at work now.", ar: "أبي الآن في العمل." },
      note: { en: "рабо́та (work) takes на: на рабо́те.", ar: "كلمة рабо́та (العمل) تأخذ на: на рабо́те." },
    },
    {
      id: "d15-16", ru: "учи́ться", say: "uchItsa", en: "to study (at a school or university)", ar: "يدرس (في مدرسة أو جامعة)", pos: "verb",
      forms: "учу́сь, у́чишься, у́чится",
      ex: { ru: "Я учу́сь в университе́те.", en: "I study at the university.", ar: "أدرس في الجامعة." },
      note: {
        en: "учи́ть + what you learn: Я учу́ язы́к. учи́ться + where you study: Я учу́сь в шко́ле.",
        ar: "учи́ть + ما تتعلّمه: Я учу́ язы́к. أمّا учи́ться + مكان الدراسة: Я учу́сь в шко́ле.",
      },
    },
    {
      id: "d15-17", ru: "ку́хня", say: "kUkhnya", en: "kitchen", ar: "مطبخ", pos: "noun", g: "f", forms: "на ку́хне",
      ex: { ru: "Ма́ма на ку́хне.", en: "Mum is in the kitchen.", ar: "أمي في المطبخ." },
      note: { en: "The kitchen takes на: на ку́хне.", ar: "المطبخ يأخذ на: на ку́хне." },
    },
    {
      id: "d15-18", ru: "библиоте́ка", say: "bibliatyEka", en: "library", ar: "مكتبة (للقراءة والاستعارة)", pos: "noun", g: "f", forms: "в библиоте́ке",
      ex: { ru: "Студе́нт в библиоте́ке.", en: "The student is in the library.", ar: "الطالب في المكتبة." },
    },
  ],
  grammar: [
    {
      id: "d15-g1",
      title: { en: "Где? — в / на + the prepositional case", ar: "Где? — в / на + حالة حرف الجر" },
      en: [
        "To say where someone or something is, use в (in) or на (on, at) and put the noun in the prepositional case. It is called 'prepositional' because it is only ever used after a preposition.",
        "As in the Arabic nominal sentence, there is no verb 'is': Ма́ма в магази́не. — Mum is at the shop. Макси́м на рабо́те. — Maxim is at work.",
        "в is for inside: buildings, rooms, cities, countries (в шко́ле, в кварти́ре, в Москве́, в Росси́и). на is for surfaces and open spaces (на столе́, на у́лице, на пло́щади) and for some places you simply learn: на рабо́те, на ку́хне.",
      ],
      ar: [
        "لتقول أين يوجد شخص أو شيء، استخدم в (في) أو на (على، في) وضع الاسم في حالة حرف الجر. وسُمّيت بهذا الاسم لأنها لا تأتي أبدًا إلا بعد حرف جر.",
        "كما في الجملة الاسمية العربية، لا يوجد فعل «يكون»: Ма́ма в магази́не. — أمي في المتجر. Макси́м на рабо́те. — مكسيم في العمل.",
        "в للداخل: المباني والغرف والمدن والبلدان (в шко́ле، в кварти́ре، в Москве́، в Росси́и). وна للأسطح والأماكن المفتوحة (на столе́، на у́лице، на пло́щади)، ولبعض الأماكن التي تحفظها كما هي: на рабо́те، на ку́хне.",
      ],
      tables: [
        {
          caption: { en: "в or на?", ar: "в أم на؟" },
          head: ["в (inside) · в (داخل)", "на (on, open place) · на (على، مكان مفتوح)"],
          rows: [
            ["в шко́ле", "на столе́"],
            ["в университе́те", "на у́лице"],
            ["в кварти́ре", "на пло́щади"],
            ["в Москве́", "на рабо́те"],
            ["в Росси́и", "на ку́хне"],
          ],
        },
      ],
      examples: [
        { ru: "— Где А́нна? — В университе́те.", en: "— Where is Anna? — At the university.", ar: "— أين آنا؟ — في الجامعة." },
        { ru: "Ключ на столе́.", en: "The key is on the table.", ar: "المفتاح على الطاولة." },
        { ru: "Мой друг на рабо́те, а подру́га до́ма.", en: "My friend (a man) is at work, and my friend (a woman) is at home.", ar: "صديقي في العمل، وصديقتي في البيت." },
      ],
    },
    {
      id: "d15-g2",
      title: { en: "Prepositional endings: -е and -и", ar: "نهايات حالة حرف الجر: -е و-и" },
      en: [
        "Most nouns take -е. After a consonant it is added (парк → в па́рке), and it replaces -а, -я or -о (Москва́ → в Москве́, ку́хня → на ку́хне, окно́ → на окне́). Nouns in -е keep it: мо́ре → на мо́ре.",
        "Two groups take -и instead: nouns in -ия (Росси́я → в Росси́и, фотогра́фия → на фотогра́фии) and feminine nouns in -ь (пло́щадь → на пло́щади, тетра́дь → в тетра́ди). Masculine nouns in -ь take the usual -е: слова́рь → в словаре́.",
        "Watch for two traps: some nouns lose a vowel (Еги́пет → в Еги́пте), and the stress can jump to the ending (стол → на столе́, страна́ → в стране́). Foreign words ending in a vowel never change: в метро́, на фо́то.",
      ],
      ar: [
        "تأخذ معظم الأسماء النهاية -е: تُضاف بعد الحرف الساكن (парк ← в па́рке)، وتحلّ محلّ -а أو -я أو -о (Москва́ ← в Москве́، ку́хня ← на ку́хне، окно́ ← на окне́). أمّا الأسماء المنتهية بـ -е فتبقى كما هي: мо́ре ← на мо́ре.",
        "وتأخذ مجموعتان النهاية -и بدلًا منها: الأسماء المنتهية بـ -ия (Росси́я ← в Росси́и، фотогра́фия ← на фотогра́фии)، والأسماء المؤنّثة المنتهية بـ -ь (пло́щадь ← на пло́щади، тетра́дь ← в тетра́ди). أمّا الأسماء المذكّرة المنتهية بـ -ь فتأخذ -е المعتادة: слова́рь ← в словаре́.",
        "انتبه إلى فخّين: بعض الأسماء يسقط منها حرف صوتي (Еги́пет ← в Еги́пте)، وقد ينتقل النبر إلى النهاية (стол ← на столе́، страна́ ← в стране́). والكلمات الأجنبية المنتهية بحرف صوتي لا تتغيّر أبدًا: в метро́، на фо́то.",
      ],
      tables: [
        {
          caption: { en: "From 'what?' to 'where?'", ar: "من «ما هذا؟» إلى «أين؟»" },
          head: ["Ending · النهاية", "Nominative · حالة الرفع", "Prepositional · حالة حرف الجر"],
          rows: [
            ["consonant · حرف ساكن", "парк, Каи́р", "в па́рке, в Каи́ре"],
            ["-а / -я", "Москва́, ку́хня", "в Москве́, на ку́хне"],
            ["-о / -е", "окно́, мо́ре", "на окне́, на мо́ре"],
            ["-ия", "Росси́я, фотогра́фия", "в Росси́и, на фотогра́фии"],
            ["-ь (feminine · مؤنّث)", "пло́щадь, тетра́дь", "на пло́щади, в тетра́ди"],
            ["-ь (masculine · مذكّر)", "слова́рь", "в словаре́"],
          ],
        },
      ],
      examples: [
        { ru: "Мы в Росси́и, а роди́тели в Еги́пте.", en: "We are in Russia, and our parents are in Egypt.", ar: "نحن في روسيا، ووالدانا في مصر." },
        { ru: "Сло́во в тетра́ди.", en: "The word is in the notebook.", ar: "الكلمة في الدفتر." },
        { ru: "Кот на окне́.", en: "The cat is on the windowsill (literally: on the window).", ar: "القطّ على حافة النافذة (حرفيًا: على النافذة)." },
      ],
    },
    {
      id: "d15-g3",
      title: { en: "до́ма — at home", ar: "до́ма — في البيت" },
      en: [
        "'At home' is one word with no preposition: до́ма. Ask Где ты? and answer Я до́ма.",
        "Compare: в до́ме means 'in the building', and дома́, with the stress at the end, means 'houses'. Stress changes the meaning!",
      ],
      ar: [
        "«في البيت» كلمة واحدة بلا حرف جر: до́ма. اسأل Где ты? وأجب Я до́ма.",
        "قارن: в до́ме تعني «داخل المبنى»، وдома́ بالنبر على الآخر تعني «بيوت». النبر يغيّر المعنى!",
      ],
      examples: [
        { ru: "— Где ты? — Я до́ма.", en: "— Where are you? — I'm at home.", ar: "— أين أنت؟ — أنا في البيت." },
        { ru: "Па́па на рабо́те, а ма́ма до́ма.", en: "Dad is at work, and Mum is at home.", ar: "أبي في العمل، وأمي في البيت." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Где ты сейча́с?", en: "Where are you now?", ar: "أين أنت الآن؟" },
    setting: {
      en: "Anna phones Ahmed on a quiet evening. They talk about where everyone is right now.",
      ar: "تتصل آنا بأحمد في مساء هادئ، ويتحدّثان عن مكان كلّ واحد منهم الآن.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Приве́т, Ахме́д! Где ты сейча́с?", en: "Hi, Ahmed! Where are you now?", ar: "مرحبًا يا أحمد! أين أنت الآن؟" },
      { who: "A", name: "Ахме́д", ru: "Приве́т! Я до́ма, на ку́хне. А ты?", en: "Hi! I'm at home, in the kitchen. And you?", ar: "مرحبًا! أنا في البيت، في المطبخ. وأنتِ؟" },
      { who: "B", name: "А́нна", ru: "Я в университе́те, в библиоте́ке.", en: "I'm at the university, in the library.", ar: "أنا في الجامعة، في المكتبة." },
      { who: "A", name: "Ахме́д", ru: "А Макси́м? Он то́же в университе́те?", en: "And Maxim? Is he at the university too?", ar: "ومكسيم؟ هل هو أيضًا في الجامعة؟" },
      { who: "B", name: "А́нна", ru: "Нет, он на рабо́те, в о́фисе.", en: "No, he's at work, in the office.", ar: "لا، إنه في العمل، في المكتب." },
      { who: "A", name: "Ахме́д", ru: "А где ва́ши роди́тели?", en: "And where are your parents?", ar: "وأين والداكما؟" },
      {
        who: "B", name: "А́нна", ru: "Ма́ма в магази́не, а па́па до́ма. А где твоя́ семья́?",
        en: "Mum's at the shop, and Dad's at home. And where's your family?", ar: "أمي في المتجر، وأبي في البيت. وأين عائلتك؟",
      },
      { who: "A", name: "Ахме́д", ru: "В Еги́пте, в Каи́ре. Там мой дом.", en: "In Egypt, in Cairo. That's where my home is.", ar: "في مصر، في القاهرة. هناك بيتي." },
      { who: "B", name: "А́нна", ru: "А ты? Ты у́чишься в Москве́?", en: "And you? Do you study in Moscow?", ar: "وأنت؟ هل تدرس في موسكو؟" },
      { who: "A", name: "Ахме́д", ru: "Нет, я рабо́таю в о́фисе. Но я учу́ язы́к!", en: "No, I work in an office. But I'm learning the language!", ar: "لا، أنا أعمل في مكتب. لكنّي أتعلّم اللغة!" },
      { who: "B", name: "А́нна", ru: "Отли́чно! Ну, пока́!", en: "Great! Well, bye!", ar: "رائع! حسنًا، إلى اللقاء!" },
      { who: "A", name: "Ахме́д", ru: "Пока́, А́нна!", en: "Bye, Anna!", ar: "إلى اللقاء يا آنا!" },
    ],
  },
  pronunciation: {
    title: { en: "Prepositions glue onto the next word", ar: "حروف الجر تلتصق بالكلمة التالية" },
    en: [
      "в and на have no stress of their own: say them together with the next word, as one word. в па́рке sounds like one word: fpArkye.",
      "в is a voiced sound, so before a voiceless consonant (п, т, к, с, ш, ф…) it turns into f: в па́рке, в Каи́ре, в шко́ле. Before a vowel or a voiced consonant it stays v: в о́фисе, в Москве́.",
    ],
    ar: [
      "ليس لـ в وна نبر خاصّ بهما: انطقهما مع الكلمة التالية ككلمة واحدة. в па́рке تُنطق ككلمة واحدة: fpArkye.",
      "حرف в مجهور، فإذا جاء قبل ساكن مهموس (п، т، к، с، ш، ф…) صار f: в па́рке، в Каи́ре، в шко́ле. وقبل الحرف الصوتي أو الساكن المجهور يبقى v: в о́фисе، в Москве́.",
    ],
    drills: [
      { ru: "в па́рке", say: "fpArkye", focus: { en: "в becomes f before п.", ar: "в يصبح f قبل п." } },
      { ru: "в шко́ле", say: "fshkOlye", focus: { en: "f before ш — say it as one word.", ar: "f قبل ш — انطقها ككلمة واحدة." } },
      { ru: "в Каи́ре", say: "fkaIrye", focus: { en: "f before к; the stress falls on и.", ar: "f قبل к، والنبر على и." } },
      { ru: "в о́фисе", say: "vOfisye", focus: { en: "Before a vowel в stays v.", ar: "قبل الحرف الصوتي يبقى в على صوت v." } },
      { ru: "на у́лице", say: "naUlitse", focus: { en: "на is unstressed; the stress falls on the first у.", ar: "на غير منبورة، والنبر على أول у." } },
      { ru: "Я до́ма.", say: "ya dOma.", focus: { en: "One word, no preposition: до́ма.", ar: "كلمة واحدة بلا حرف جر: до́ма." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Maxim is in the office. Choose the correct sentence.", ar: "مكسيم في المكتب. اختر الجملة الصحيحة." },
      options: ["Макси́м в о́фис.", "Макси́м в о́фисе.", "Макси́м на о́фисе."],
      answer: 1,
      why: { en: "Where? → в + the prepositional: о́фис → в о́фисе.", ar: "أين؟ ← в + حالة حرف الجر: о́фис ← в о́фисе." },
    },
    {
      kind: "choice",
      prompt: { en: "'In the street' — which is right?", ar: "«في الشارع» — أيّها الصحيح؟" },
      options: ["в у́лице", "на у́лице", "на у́лица"],
      answer: 1,
      why: { en: "Streets and squares take на: на у́лице, на пло́щади.", ar: "الشوارع والميادين تأخذ на: на у́лице، на пло́щади." },
    },
    {
      kind: "choice",
      prompt: { en: "Which word means 'at home'?", ar: "أيّ كلمة تعني «في البيت»؟" },
      options: ["до́ма", "дома́", "в до́ме"],
      answer: 0,
      why: { en: "до́ма = at home; дома́ = houses; в до́ме = in the building.", ar: "до́ма = في البيت؛ дома́ = بيوت؛ в до́ме = داخل المبنى." },
    },
    {
      kind: "fill",
      prompt: { en: "Put Росси́я into the prepositional.", ar: "ضع Росси́я في حالة حرف الجر." },
      ru: "Мы сейча́с в ___.",
      answers: ["Росси́и"],
      why: { en: "Nouns in -ия take -ии: в Росси́и.", ar: "الأسماء المنتهية بـ -ия تصبح -ии: в Росси́и." },
    },
    {
      kind: "fill",
      prompt: { en: "Put Еги́пет into the prepositional.", ar: "ضع Еги́пет في حالة حرف الجر." },
      ru: "Мои́ роди́тели в ___.",
      answers: ["Еги́пте"],
      why: { en: "Еги́пет loses its last е: в Еги́пте.", ar: "يسقط من Еги́пет حرف е الأخير: в Еги́пте." },
    },
    {
      kind: "fill",
      prompt: { en: "Put тетра́дь into the prepositional.", ar: "ضع тетра́дь في حالة حرف الجر." },
      ru: "Сло́во в ___.",
      answers: ["тетра́ди"],
      why: { en: "Feminine nouns in -ь take -и: в тетра́ди.", ar: "الأسماء المؤنّثة المنتهية بـ -ь تأخذ -и: в тетра́ди." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Mum is in the kitchen.", ar: "أكمل: أمي في المطبخ." },
      ru: "Ма́ма на ___.",
      answers: ["ку́хне"],
      why: { en: "ку́хня → на ку́хне: -я becomes -е, and the kitchen takes на.", ar: "ку́хня ← на ку́хне: تتحوّل -я إلى -е، والمطبخ يأخذ на." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Anna is on the square.", ar: "أكمل: آنا في الميدان." },
      ru: "А́нна на ___.",
      answers: ["пло́щади"],
      why: { en: "пло́щадь is feminine in -ь: на пло́щади.", ar: "пло́щадь اسم مؤنّث منتهٍ بـ -ь: на пло́щади." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I study at the university.", ar: "كوّن الجملة: أدرس في الجامعة." },
      tokens: ["университе́те", "учу́сь", "в", "Я"],
      answers: ["Я учу́сь в университе́те."],
      why: { en: "учи́ться + в + the prepositional: where you study.", ar: "учи́ться + в + حالة حرف الجر: مكان الدراسة." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: Dad is at work now.", ar: "كوّن الجملة: أبي الآن في العمل." },
      tokens: ["на", "Па́па", "рабо́те", "сейча́с"],
      answers: ["Па́па сейча́с на рабо́те.", "Сейча́с па́па на рабо́те.", "Па́па на рабо́те сейча́с."],
      why: { en: "No verb 'is' is needed: Па́па на рабо́те.", ar: "لا نحتاج إلى فعل «يكون»: Па́па на рабо́те." },
    },
    {
      kind: "translate",
      prompt: { en: "My family is in Cairo.", ar: "عائلتي في القاهرة." },
      answers: ["Моя́ семья́ в Каи́ре."],
      why: { en: "Каи́р → в Каи́ре, and no verb is needed.", ar: "Каи́р ← в Каи́ре، ولا نحتاج إلى فعل." },
    },
    {
      kind: "translate",
      prompt: { en: "Where is the shop?", ar: "أين المتجر؟" },
      answers: ["Где магази́н?"],
      why: { en: "Где + the noun as it is: Где магази́н?", ar: "Где + الاسم كما هو: Где магази́н?" },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Where is Maxim?", ar: "استمع. أين مكسيم؟" },
      ru: "Макси́м сейча́с на рабо́те.",
      listen: true,
      options: ["at home · في البيت", "at work · في العمل", "at the university · في الجامعة"],
      answer: 1,
      why: { en: "на рабо́те = at work.", ar: "на рабо́те = في العمل." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Where is the speaker?", ar: "استمع. أين المتحدّث؟" },
      ru: "Я в библиоте́ке.",
      listen: true,
      options: ["in the library · في المكتبة", "in the shop · في المتجر", "in the kitchen · في المطبخ"],
      answer: 0,
      why: { en: "библиоте́ка → в библиоте́ке: in the library.", ar: "библиоте́ка ← в библиоте́ке: في المكتبة." },
    },
  ],
  topics: ["prepositional", "city"],
  search: ["Russian prepositional case в на where", "Russian prepositional case endings for beginners"],
  speaking: {
    scenario: {
      en: "A video call with Anna. She asks where you are right now, where your family is, and where you work or study. Answer, then ask her the same questions.",
      ar: "مكالمة فيديو مع آنا. تسألك أين أنت الآن، وأين عائلتك، وأين تعمل أو تدرس. أجب، ثم اسألها الأسئلة نفسها.",
    },
    tutorBrief:
      "Play Anna (Анна), a friendly student in Moscow, on a video call with the learner. Ask where they are right now (Где ты сейчас?), where each family member is, and where they work or study (Где ты работаешь? Где ты учишься?). Keep to known words plus today's: в, на, дома, школа, университет, магазин, офис, улица, площадь, страна, Россия, Египет, Каир, квартира, на работе, учиться, кухня, библиотека. Expect answers with в / на + the prepositional (в Каире, на работе, на кухне). When an ending or preposition is wrong, repeat the sentence correctly and ask the learner to say it again. Finish by summarising where everyone is and praising one correct ending.",
    prompts: [
      { ru: "Я сейча́с до́ма.", en: "I'm at home now.", ar: "أنا الآن في البيت." },
      { ru: "Моя́ семья́ в Еги́пте, в Каи́ре.", en: "My family is in Egypt, in Cairo.", ar: "عائلتي في مصر، في القاهرة." },
      { ru: "Я рабо́таю в о́фисе.", en: "I work in an office.", ar: "أعمل في مكتب." },
      { ru: "Мой брат у́чится в университе́те.", en: "My brother studies at the university.", ar: "أخي يدرس في الجامعة." },
      { ru: "А где ты сейча́с?", en: "And where are you now?", ar: "وأين أنتِ الآن؟" },
    ],
  },
  journal: {
    en: "Write 3–5 sentences: where you are now, where your family and friends are, and where you work or study. Use в or на in every sentence.",
    ar: "اكتب من ٣ إلى ٥ جمل: أين أنت الآن، وأين عائلتك وأصدقاؤك، وأين تعمل أو تدرس. استخدم в أو на في كل جملة.",
  },
  culture: {
    en: "Most people in Russian cities live in flats (кварти́ры) in large apartment blocks, many of them built in Soviet times; a private house is more typical of small towns and the countryside. Guests usually take off their shoes at the door — just as in many Egyptian homes.",
    ar: "يسكن معظم الناس في المدن الروسية في شقق (кварти́ры) داخل عمارات سكنية كبيرة، بُني كثير منها في الحقبة السوفيتية، أمّا البيت الخاص فهو أكثر شيوعًا في البلدات الصغيرة والأرياف. ويخلع الضيوف أحذيتهم عادةً عند الباب — كما في كثير من البيوت المصرية.",
  },
};

const DAY_16: Day = {
  n: 16,
  week: 3,
  kind: "lesson",
  title: { ru: "В го́роде", en: "In the city", ar: "في المدينة" },
  goals: [
    {
      en: "Ask where a place is — Скажи́те, пожа́луйста, где нахо́дится…? — and understand the answer.",
      ar: "أن تسأل عن مكان: Скажи́те, пожа́луйста, где нахо́дится…? وأن تفهم الإجابة.",
    },
    {
      en: "Give simple directions: сле́ва, спра́ва, ря́дом, напро́тив, недалеко́, далеко́.",
      ar: "أن تصف الاتجاهات ببساطة: сле́ва، спра́ва، ря́дом، напро́тив، недалеко́، далеко́.",
    },
    {
      en: "Choose в or на for places in town, and recognise в аэропорту́, в саду́, на мосту́.",
      ar: "أن تختار в أو на لأماكن المدينة، وأن تتعرّف على в аэропорту́، в саду́، на мосту́.",
    },
  ],
  words: [
    {
      id: "d16-01", ru: "апте́ка", say: "aptyEka", en: "pharmacy, chemist's", ar: "صيدلية", pos: "noun", g: "f", forms: "в апте́ке",
      ex: { ru: "Апте́ка спра́ва.", en: "The pharmacy is on the right.", ar: "الصيدلية على اليمين." },
    },
    {
      id: "d16-02", ru: "вокза́л", say: "vagzAl", en: "railway station", ar: "محطة القطارات", pos: "noun", g: "m", forms: "на вокза́ле",
      ex: { ru: "Па́па на вокза́ле.", en: "Dad is at the station.", ar: "أبي في محطة القطارات." },
      note: { en: "A station takes на: на вокза́ле.", ar: "المحطة تأخذ на: на вокза́ле." },
    },
    {
      id: "d16-03", ru: "музе́й", say: "muzyEy", en: "museum", ar: "متحف", pos: "noun", g: "m", forms: "в музе́е",
      ex: { ru: "Мы в музе́е.", en: "We're at the museum.", ar: "نحن في المتحف." },
    },
    {
      id: "d16-04", ru: "кафе́", say: "kafE", en: "café", ar: "مقهى", pos: "noun", g: "n", forms: "в кафе́",
      ex: { ru: "Кафе́ ря́дом.", en: "The café is close by.", ar: "المقهى قريب." },
      note: {
        en: "It never changes: в кафе́. The е is hard here: kafE.",
        ar: "لا تتغيّر أبدًا: в кафе́. وحرف е هنا يُنطق دون تليين: kafE.",
      },
    },
    {
      id: "d16-05", ru: "больни́ца", say: "bal'nItsa", en: "hospital", ar: "مستشفى", pos: "noun", g: "f", forms: "в больни́це",
      ex: { ru: "Врач в больни́це.", en: "The doctor is at the hospital.", ar: "الطبيب في المستشفى." },
    },
    {
      id: "d16-06", ru: "гости́ница", say: "gastInitsa", en: "hotel", ar: "فندق", pos: "noun", g: "f", forms: "в гости́нице",
      ex: { ru: "Гости́ница недалеко́.", en: "The hotel is not far.", ar: "الفندق ليس بعيدًا." },
    },
    {
      id: "d16-07", ru: "остано́вка", say: "astanOfka", en: "(bus, tram) stop", ar: "موقف (الحافلات أو الترام)", pos: "noun", g: "f", forms: "на остано́вке",
      ex: { ru: "Мы на остано́вке.", en: "We're at the stop.", ar: "نحن في الموقف." },
    },
    {
      id: "d16-08", ru: "туале́т", say: "tualyEt", en: "toilet, restroom", ar: "دورة المياه", pos: "noun", g: "m", forms: "в туале́те",
      ex: { ru: "Извини́те, где туале́т?", en: "Excuse me, where's the toilet?", ar: "عفوًا، أين دورة المياه؟" },
    },
    {
      id: "d16-09", ru: "сле́ва", say: "slyEva", en: "on the left", ar: "على اليسار", pos: "adv",
      ex: { ru: "Банк сле́ва.", en: "The bank is on the left.", ar: "البنك على اليسار." },
    },
    {
      id: "d16-10", ru: "спра́ва", say: "sprAva", en: "on the right", ar: "على اليمين", pos: "adv",
      ex: { ru: "Метро́ спра́ва.", en: "The metro is on the right.", ar: "المترو على اليمين." },
    },
    {
      id: "d16-11", ru: "ря́дом", say: "ryAdam", en: "close by, nearby, next door", ar: "قريبًا، بالجوار", pos: "adv",
      ex: { ru: "Парк ря́дом.", en: "The park is close by.", ar: "الحديقة قريبة." },
    },
    {
      id: "d16-12", ru: "далеко́", say: "dalikO", en: "far, far away", ar: "بعيدًا", pos: "adv",
      ex: { ru: "Вокза́л далеко́.", en: "The station is far away.", ar: "المحطة بعيدة." },
    },
    {
      id: "d16-13", ru: "недалеко́", say: "nidalikO", en: "not far", ar: "غير بعيد", pos: "adv",
      ex: { ru: "Музе́й недалеко́.", en: "The museum is not far.", ar: "المتحف ليس بعيدًا." },
    },
    {
      id: "d16-14", ru: "Где нахо́дится…?", say: "gdye nakhOditsa…?", en: "Where is … (located)?", ar: "أين يقع…؟", pos: "phrase",
      ex: { ru: "Где нахо́дится апте́ка?", en: "Where is the pharmacy?", ar: "أين تقع الصيدلية؟" },
      note: {
        en: "For several things: Где нахо́дятся…? You can also simply say Где апте́ка?",
        ar: "لعدّة أشياء: Где нахо́дятся…? ويمكنك أن تقول ببساطة: Где апте́ка?",
      },
    },
    {
      id: "d16-15", ru: "Скажи́те, пожа́луйста…", say: "skazhYtye, pazhAlusta…", en: "Excuse me, could you tell me… (literally: tell me, please)", ar: "لو سمحت، أخبرني… (حرفيًا: قل من فضلك)", pos: "phrase",
      ex: { ru: "Скажи́те, пожа́луйста, где метро́?", en: "Excuse me, where is the metro?", ar: "لو سمحت، أين المترو؟" },
    },
    {
      id: "d16-16", ru: "вон там", say: "von tam", en: "over there (pointing)", ar: "هناك (مع الإشارة)", pos: "phrase",
      ex: { ru: "Гости́ница вон там.", en: "The hotel is over there.", ar: "الفندق هناك." },
    },
    {
      id: "d16-17", ru: "напро́тив", say: "naprOtif", en: "opposite, across the road", ar: "في المقابل، على الجهة المقابلة", pos: "adv",
      ex: { ru: "Апте́ка напро́тив.", en: "The pharmacy is across the road.", ar: "الصيدلية في الجهة المقابلة." },
    },
    {
      id: "d16-18", ru: "по́чта", say: "pOchta", en: "post office; post, mail", ar: "مكتب البريد؛ البريد", pos: "noun", g: "f", forms: "на по́чте",
      ex: { ru: "Ма́ма на по́чте.", en: "Mum is at the post office.", ar: "أمي في مكتب البريد." },
    },
    {
      id: "d16-19", ru: "конце́рт", say: "kantsErt", en: "concert", ar: "حفلة موسيقية", pos: "noun", g: "m", forms: "на конце́рте",
      ex: { ru: "Мы на конце́рте.", en: "We're at a concert.", ar: "نحن في حفلة موسيقية." },
      note: { en: "Events take на: на конце́рте.", ar: "المناسبات تأخذ на: на конце́рте." },
    },
  ],
  grammar: [
    {
      id: "d16-g1",
      title: { en: "Asking the way: Где нахо́дится…?", ar: "السؤال عن المكان: Где нахо́дится…?" },
      en: [
        "Stop someone politely with Извини́те! or Скажи́те, пожа́луйста… and ask Где нахо́дится…? — 'Where is … located?' For several things say нахо́дятся.",
        "The answer is often a single word: сле́ва (on the left), спра́ва (on the right), ря́дом (close by), напро́тив (opposite), недалеко́ (not far), далеко́ (far), вон там (over there).",
        "Or the answer names another place, with в or на: Туале́т в кафе́. — The toilet is in the café.",
      ],
      ar: [
        "استوقف شخصًا بأدب بقولك Извини́те! أو Скажи́те, пожа́луйста… ثم اسأل Где нахо́дится…? أي «أين يقع…؟». ولعدّة أشياء قل нахо́дятся.",
        "غالبًا ما تكون الإجابة كلمة واحدة: сле́ва (على اليسار)، спра́ва (على اليمين)، ря́дом (قريبًا)، напро́тив (في المقابل)، недалеко́ (غير بعيد)، далеко́ (بعيدًا)، вон там (هناك).",
        "أو تذكر الإجابة مكانًا آخر مع в أو на: Туале́т в кафе́. — دورة المياه في المقهى.",
      ],
      tables: [
        {
          caption: { en: "Where is it?", ar: "أين هو؟" },
          head: ["Russian · بالروسية", "English", "العربية"],
          rows: [
            ["сле́ва", "on the left", "على اليسار"],
            ["спра́ва", "on the right", "على اليمين"],
            ["ря́дом", "close by, next door", "قريبًا، بالجوار"],
            ["напро́тив", "opposite", "في المقابل"],
            ["недалеко́", "not far", "غير بعيد"],
            ["далеко́", "far", "بعيدًا"],
            ["вон там", "over there", "هناك"],
          ],
        },
      ],
      examples: [
        {
          ru: "— Скажи́те, пожа́луйста, где нахо́дится апте́ка? — Вон там, спра́ва.",
          en: "— Excuse me, where is the pharmacy? — Over there, on the right.",
          ar: "— لو سمحت، أين تقع الصيدلية؟ — هناك، على اليمين.",
        },
        { ru: "— Музе́й далеко́? — Нет, недалеко́.", en: "— Is the museum far? — No, it's not far.", ar: "— هل المتحف بعيد؟ — لا، ليس بعيدًا." },
      ],
    },
    {
      id: "d16-g2",
      title: { en: "в or на? Places and events", ar: "в أم на؟ الأماكن والمناسبات" },
      en: [
        "в is for enclosed places, and that includes most buildings: в музе́е, в апте́ке, в больни́це, в гости́нице, в кафе́.",
        "на is for open places (на у́лице, на пло́щади) and for events and activities (на конце́рте, на рабо́те). A few buildings take на too, and you simply learn them: на вокза́ле, на по́чте, на остано́вке.",
        "Don't translate from Arabic word for word: Arabic says في الشارع (in the street), but Russian says на у́лице (on the street). Learn every place together with its preposition.",
      ],
      ar: [
        "в للأماكن المغلقة، ومنها معظم المباني: в музе́е، в апте́ке، в больни́це، в гости́нице، в кафе́.",
        "وна للأماكن المفتوحة (на у́лице، на пло́щади) وللمناسبات والأنشطة (на конце́рте، на рабо́те). وبعض المباني تأخذ на أيضًا، فاحفظها كما هي: на вокза́ле، на по́чте، на остано́вке.",
        "لا تترجم من العربية حرفيًا: نقول بالعربية «في الشارع»، أمّا بالروسية فنقول на у́лице (على الشارع). احفظ كل مكان مع حرف الجر الخاص به.",
      ],
      tables: [
        {
          caption: { en: "Learn the place with its preposition", ar: "احفظ المكان مع حرف الجر" },
          head: ["в", "на"],
          rows: [
            ["в апте́ке", "на вокза́ле"],
            ["в музе́е", "на по́чте"],
            ["в гости́нице", "на остано́вке"],
            ["в больни́це", "на конце́рте"],
            ["в кафе́", "на у́лице"],
          ],
        },
      ],
      examples: [
        { ru: "Ба́бушка в больни́це, а де́душка на по́чте.", en: "Grandma is at the hospital, and Grandpa is at the post office.", ar: "جدّتي في المستشفى، وجدّي في مكتب البريد." },
        { ru: "А́нна и Макси́м на конце́рте.", en: "Anna and Maxim are at a concert.", ar: "آنا ومكسيم في حفلة موسيقية." },
      ],
    },
    {
      id: "d16-g3",
      title: { en: "Recognise: в аэропорту́, в саду́, на мосту́", ar: "تعرّف على: в аэропорту́، в саду́، на мосту́" },
      en: [
        "A few short masculine nouns take the ending -у, always stressed, instead of -е after в / на: аэропо́рт → в аэропорту́ (at the airport), сад → в саду́ (in the garden), мост → на мосту́ (on the bridge).",
        "Others you will hear: лес → в лесу́ (in the forest), шкаф → в шкафу́ (in the wardrobe), пол → на полу́ (on the floor). For now just recognise them; you will meet each one again.",
      ],
      ar: [
        "بعض الأسماء المذكّرة القصيرة تأخذ بعد в / на النهاية -у المنبورة دائمًا بدلًا من -е: аэропо́рт ← в аэропорту́ (في المطار)، сад ← в саду́ (في الحديقة)، мост ← на мосту́ (على الجسر).",
        "ومن الأمثلة الأخرى التي ستسمعها: лес ← в лесу́ (في الغابة)، шкаф ← в шкафу́ (في الخزانة)، пол ← на полу́ (على الأرض). يكفي الآن أن تتعرّف عليها، وستقابل كلًّا منها مرّة أخرى.",
      ],
      tables: [
        {
          caption: { en: "The stressed -у ending", ar: "النهاية -у المنبورة" },
          head: ["Nominative · حالة الرفع", "Где? · أين؟", "Meaning · المعنى"],
          rows: [
            ["аэропо́рт", "в аэропорту́", "at the airport · في المطار"],
            ["сад", "в саду́", "in the garden · في الحديقة"],
            ["мост", "на мосту́", "on the bridge · على الجسر"],
            ["лес", "в лесу́", "in the forest · في الغابة"],
            ["шкаф", "в шкафу́", "in the wardrobe · في الخزانة"],
            ["пол", "на полу́", "on the floor · على الأرض"],
          ],
        },
      ],
      examples: [
        { ru: "Па́па сейча́с в аэропорту́.", en: "Dad is at the airport now.", ar: "أبي الآن في المطار." },
        { ru: "Ба́бушка в саду́.", en: "Grandma is in the garden.", ar: "جدّتي في الحديقة." },
        { ru: "Ключ на полу́.", en: "The key is on the floor.", ar: "المفتاح على الأرض." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Скажи́те, пожа́луйста…", en: "Excuse me, could you tell me…", ar: "لو سمحت، أخبرني…" },
    setting: {
      en: "Ahmed is in a part of Moscow he doesn't know. He needs a pharmacy, the metro and a hotel, so he stops a woman in the street.",
      ar: "أحمد في حيّ لا يعرفه في موسكو. يحتاج إلى صيدلية والمترو وفندق، فيستوقف امرأة في الشارع.",
    },
    lines: [
      {
        who: "A", name: "Ахме́д", ru: "Извини́те! Скажи́те, пожа́луйста, где нахо́дится апте́ка?",
        en: "Excuse me! Could you tell me where the pharmacy is?", ar: "عفوًا! لو سمحتِ، أين تقع الصيدلية؟",
      },
      { who: "B", name: "Прохо́жая", ru: "Апте́ка? Вон там, спра́ва. Ря́дом банк.", en: "The pharmacy? Over there, on the right. There's a bank next to it.", ar: "الصيدلية؟ هناك، على اليمين. وبجوارها بنك." },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо! А метро́ далеко́?", en: "Thank you! And is the metro far?", ar: "شكرًا! وهل المترو بعيد؟" },
      { who: "B", name: "Прохо́жая", ru: "Нет, недалеко́. Вот остано́вка, а метро́ сле́ва.", en: "No, it's not far. Here's the stop, and the metro is on the left.", ar: "لا، ليس بعيدًا. هذا هو الموقف، والمترو على اليسار." },
      { who: "A", name: "Ахме́д", ru: "А где нахо́дится гости́ница? Там мой друг.", en: "And where is the hotel? My friend is there.", ar: "وأين يقع الفندق؟ صديقي هناك." },
      {
        who: "B", name: "Прохо́жая", ru: "Гости́ница далеко́. Она́ на пло́щади, ря́дом вокза́л.",
        en: "The hotel is far. It's on the square, right by the station.", ar: "الفندق بعيد. إنه في الميدان، بجوار المحطة.",
      },
      { who: "A", name: "Ахме́д", ru: "Далеко́? Э́то пло́хо…", en: "Far? That's bad…", ar: "بعيد؟ هذا سيّئ…" },
      { who: "B", name: "Прохо́жая", ru: "Ну, не о́чень далеко́. А метро́ ря́дом!", en: "Well, not very far. And the metro is close!", ar: "حسنًا، ليس بعيدًا جدًّا. والمترو قريب!" },
      { who: "A", name: "Ахме́д", ru: "Хорошо́. А где здесь туале́т?", en: "Good. And where's a toilet around here?", ar: "حسنًا. وأين دورة المياه هنا؟" },
      { who: "B", name: "Прохо́жая", ru: "В кафе́. Вот кафе́, напро́тив.", en: "In the café. There's a café, across the road.", ar: "في المقهى. هذا هو المقهى، في الجهة المقابلة." },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо! До свида́ния!", en: "Thank you! Goodbye!", ar: "شكرًا! إلى اللقاء!" },
      { who: "B", name: "Прохо́жая", ru: "Пожа́луйста! До свида́ния!", en: "You're welcome! Goodbye!", ar: "عفوًا! إلى اللقاء!" },
    ],
  },
  pronunciation: {
    title: { en: "The hard sound ц, and -тся in нахо́дится", ar: "الصوت ц الصلب، و-тся في нахо́дится" },
    en: [
      "ц sounds like ts in 'cats', and it is always hard: after ц, и is said like ы and е like э. Listen: гости́ница, больни́ца, на у́лице, конце́рт.",
      "The ending -тся (and -ться) sounds exactly like ц: нахо́дится is said nakhOditsa. The т is not a separate sound.",
    ],
    ar: [
      "حرف ц يُنطق مثل ts في كلمة cats الإنجليزية، وهو صلب دائمًا: بعده يُنطق и مثل ы، وе مثل э. استمع: гости́ница، больни́ца، на у́лице، конце́рт.",
      "والنهاية -тся (و-ться) تُنطق تمامًا مثل ц: نقول нахо́дится هكذا: nakhOditsa، ولا يُنطق т صوتًا مستقلًّا.",
    ],
    drills: [
      { ru: "гости́ница", say: "gastInitsa", focus: { en: "ц at the end: -tsa.", ar: "ц في الآخر: ‎-tsa." } },
      { ru: "больни́ца", say: "bal'nItsa", focus: { en: "A soft л, then ts.", ar: "л ليّنة، ثم ts." } },
      { ru: "на у́лице", say: "naUlitse", focus: { en: "е after ц stays hard.", ar: "حرف е بعد ц يبقى صلبًا." } },
      { ru: "конце́рт", say: "kantsErt", focus: { en: "A hard ц before е.", ar: "ц صلب قبل е." } },
      { ru: "Где нахо́дится апте́ка?", say: "gdye nakhOditsa aptyEka?", focus: { en: "-тся = ts; the stress falls on хо.", ar: "-тся = ts، والنبر على хо." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "The pharmacy is on the right. Choose the sentence.", ar: "الصيدلية على اليمين. اختر الجملة." },
      options: ["Апте́ка сле́ва.", "Апте́ка спра́ва.", "Апте́ка далеко́."],
      answer: 1,
      why: { en: "спра́ва = on the right; сле́ва = on the left.", ar: "спра́ва = على اليمين؛ сле́ва = على اليسار." },
    },
    {
      kind: "choice",
      prompt: { en: "'At the station' — which is right?", ar: "«في المحطة» — أيّها الصحيح؟" },
      options: ["в вокза́ле", "на вокза́ле", "на вокза́л"],
      answer: 1,
      why: { en: "вокза́л is one of the buildings that take на.", ar: "вокза́л من المباني التي تأخذ на." },
    },
    {
      kind: "choice",
      prompt: { en: "'At a concert' — which is right?", ar: "«في حفلة موسيقية» — أيّها الصحيح؟" },
      options: ["в конце́рте", "на конце́рте", "на конце́рт"],
      answer: 1,
      why: { en: "Events take на: на конце́рте, на рабо́те.", ar: "المناسبات تأخذ на: на конце́рте، на рабо́те." },
    },
    {
      kind: "choice",
      prompt: { en: "Recognise the form: 'in the garden'.", ar: "تعرّف على الصيغة: «في الحديقة»." },
      options: ["в са́де", "в саду́", "на саду́"],
      answer: 1,
      why: { en: "сад is one of the nouns with a stressed -у: в саду́.", ar: "сад من الأسماء ذات النهاية -у المنبورة: в саду́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: We are at the museum.", ar: "أكمل: نحن في المتحف." },
      ru: "Мы ___ музе́е.",
      answers: ["в"],
      why: { en: "A museum is an enclosed building: в музе́е.", ar: "المتحف مبنى مغلق: в музе́е." },
    },
    {
      kind: "fill",
      prompt: { en: "Put по́чта into the prepositional.", ar: "ضع по́чта في حالة حرف الجر." },
      ru: "Ма́ма на ___.",
      answers: ["по́чте"],
      why: { en: "по́чта takes на, and -а becomes -е: на по́чте.", ar: "по́чта تأخذ на، وتتحوّل -а إلى -е: на по́чте." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete the question.", ar: "أكمل السؤال." },
      ru: "Скажи́те, пожа́луйста, где ___ апте́ка?",
      answers: ["нахо́дится"],
      why: { en: "Где нахо́дится…? — Where is … located?", ar: "Где нахо́дится…? — أين يقع…؟" },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: The station is not close, it's far.", ar: "أكمل: المحطة ليست قريبة، إنها بعيدة." },
      ru: "Вокза́л не ря́дом, он ___.",
      answers: ["далеко́"],
      why: { en: "далеко́ = far; недалеко́ = not far.", ar: "далеко́ = بعيدًا؛ недалеко́ = غير بعيد." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: Where is the hospital?", ar: "كوّن السؤال: أين يقع المستشفى؟" },
      tokens: ["больни́ца", "Где", "нахо́дится"],
      answers: ["Где нахо́дится больни́ца?"],
      why: { en: "Где нахо́дится + the place.", ar: "Где нахо́дится + المكان." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: The stop is over there, on the left.", ar: "كوّن الجملة: الموقف هناك، على اليسار." },
      tokens: ["там", "Остано́вка", "сле́ва", "вон"],
      answers: ["Остано́вка вон там, сле́ва.", "Остано́вка сле́ва, вон там."],
      why: { en: "вон там points: 'over there'.", ar: "вон там تعني «هناك» مع الإشارة." },
    },
    {
      kind: "translate",
      prompt: { en: "The hotel is not far.", ar: "الفندق ليس بعيدًا." },
      answers: ["Гости́ница недалеко́.", "Гости́ница нахо́дится недалеко́."],
      why: { en: "недалеко́ is one word: 'not far'.", ar: "недалеко́ كلمة واحدة تعني «غير بعيد»." },
    },
    {
      kind: "translate",
      prompt: { en: "Excuse me, where is the toilet?", ar: "عفوًا، أين دورة المياه؟" },
      answers: [
        "Извини́те, где туале́т?",
        "Скажи́те, пожа́луйста, где туале́т?",
        "Извини́те, где нахо́дится туале́т?",
        "Скажи́те, пожа́луйста, где нахо́дится туале́т?",
      ],
      why: { en: "Start politely with Извини́те or Скажи́те, пожа́луйста.", ar: "ابدأ بأدب بـ Извини́те أو Скажи́те, пожа́луйста." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Where is the pharmacy?", ar: "استمع. أين الصيدلية؟" },
      ru: "Апте́ка вон там, сле́ва.",
      listen: true,
      options: ["on the left · على اليسار", "on the right · على اليمين", "far away · بعيدًا"],
      answer: 0,
      why: { en: "сле́ва = on the left.", ar: "сле́ва = على اليسار." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Where is the metro?", ar: "استمع. أين المترو؟" },
      ru: "Метро́ ря́дом, напро́тив.",
      listen: true,
      options: ["far away · بعيدًا", "close by, across the road · قريب، في الجهة المقابلة", "at the station · في المحطة"],
      answer: 1,
      why: { en: "ря́дом = close by; напро́тив = opposite.", ar: "ря́дом = قريبًا؛ напро́тив = في المقابل." },
    },
  ],
  topics: ["city", "directions", "prepositional"],
  search: ["Russian asking for directions где находится", "Russian в or на with places"],
  speaking: {
    scenario: {
      en: "You are lost in Moscow. Stop a passer-by (the tutor) and ask where the pharmacy, the metro and a hotel are. Understand the answers and thank them.",
      ar: "أنت تائه في موسكو. استوقف أحد المارّة (المعلّم) واسأله أين الصيدلية والمترو والفندق. افهم الإجابات واشكره.",
    },
    tutorBrief:
      "Play a friendly Moscow passer-by, a woman in her forties, stopped in the street by the learner. Wait for the learner to ask politely (Извините / Скажите, пожалуйста, где находится…?) about a pharmacy, the metro and a hotel, and answer with today's words: слева, справа, рядом, напротив, недалеко, далеко, вон там, plus places with в / на (на площади, в кафе, на вокзале, на остановке). Make the hotel far away so the learner has to react. If the learner uses the wrong preposition or ending, repeat the correct form in your answer and invite them to say it again. End when the learner has found all three places and thanked you, and praise their most polite phrase.",
    prompts: [
      { ru: "Извини́те, где нахо́дится апте́ка?", en: "Excuse me, where is the pharmacy?", ar: "عفوًا، أين تقع الصيدلية؟" },
      { ru: "Скажи́те, пожа́луйста, метро́ далеко́?", en: "Excuse me, is the metro far?", ar: "لو سمحت، هل المترو بعيد؟" },
      { ru: "Гости́ница спра́ва?", en: "Is the hotel on the right?", ar: "هل الفندق على اليمين؟" },
      { ru: "Спаси́бо! До свида́ния!", en: "Thank you! Goodbye!", ar: "شكرًا! إلى اللقاء!" },
    ],
  },
  journal: {
    en: "Write 3–5 sentences about the street where you live or work: what is on the left, on the right, close by and far away. Use at least one place with на.",
    ar: "اكتب من ٣ إلى ٥ جمل عن الشارع الذي تسكن أو تعمل فيه: ما الذي على اليسار، وعلى اليمين، وبالقرب، وبعيدًا. استخدم مكانًا واحدًا على الأقل مع на.",
  },
  culture: {
    en: "Moscow's big railway stations (вокза́лы) are named after the direction they serve, not after where they stand: Ленингра́дский вокза́л sends trains to St Petersburg, Каза́нский вокза́л to Kazan. Three of them stand on one square, Комсомо́льская пло́щадь, nicknamed 'the square of three stations' (пло́щадь трёх вокза́лов).",
    ar: "تُسمّى محطات القطارات الكبرى في موسكو (вокза́лы) باسم الوجهة التي تخدمها لا باسم مكانها: من Ленингра́дский вокза́л تنطلق القطارات إلى سانت بطرسبورغ، ومن Каза́нский вокза́л إلى قازان. وتقع ثلاث منها في ميدان واحد هو Комсомо́льская пло́щадь، الملقّب بـ «ميدان المحطات الثلاث» (пло́щадь трёх вокза́лов).",
  },
};

const DAY_17: Day = {
  n: 17,
  week: 3,
  kind: "lesson",
  title: { ru: "Ско́лько сто́ит?", en: "How much is it? Numbers to 100", ar: "بكم هذا؟ الأعداد حتى ١٠٠" },
  goals: [
    {
      en: "Count from 11 to 100 and say any number in between: два́дцать пять, девяно́сто де́вять.",
      ar: "أن تعدّ من ١١ إلى ١٠٠ وتقول أيّ عدد بينهما: два́дцать пять، девяно́сто де́вять.",
    },
    {
      en: "Ask Ско́лько сто́ит…? and understand prices with рубль, рубля́ and рубле́й.",
      ar: "أن تسأل Ско́лько сто́ит…? وتفهم الأسعار مع рубль وрубля́ وрубле́й.",
    },
    {
      en: "Say whether something is expensive or cheap: до́рого, дёшево.",
      ar: "أن تقول إن الشيء غالٍ أو رخيص: до́рого، дёшево.",
    },
  ],
  words: [
    {
      id: "d17-01", ru: "оди́ннадцать", say: "adInatsat'", en: "eleven", ar: "أحد عشر", pos: "num",
      ex: { ru: "Кварти́ра оди́ннадцать.", en: "Flat eleven.", ar: "الشقة رقم أحد عشر." },
      note: {
        en: "11–19 = the unit + на + дцать ('on ten'). The ending -дцать sounds like -tsat'.",
        ar: "الأعداد من ١١ إلى ١٩ = الآحاد + на + дцать (أي «على العشرة»). والنهاية -дцать تُنطق ‎-tsat'.",
      },
    },
    {
      id: "d17-02", ru: "двена́дцать", say: "dvinAtsat'", en: "twelve", ar: "اثنا عشر", pos: "num",
      ex: { ru: "Два и де́сять — двена́дцать.", en: "Two and ten is twelve.", ar: "اثنان وعشرة يساويان اثني عشر." },
    },
    {
      id: "d17-03", ru: "трина́дцать", say: "trinAtsat'", en: "thirteen", ar: "ثلاثة عشر", pos: "num",
      ex: { ru: "Три и де́сять — трина́дцать.", en: "Three and ten is thirteen.", ar: "ثلاثة وعشرة يساويان ثلاثة عشر." },
    },
    {
      id: "d17-04", ru: "четы́рнадцать", say: "chitYrnatsat'", en: "fourteen", ar: "أربعة عشر", pos: "num",
      ex: { ru: "Четы́ре и де́сять — четы́рнадцать.", en: "Four and ten is fourteen.", ar: "أربعة وعشرة يساويان أربعة عشر." },
    },
    {
      id: "d17-05", ru: "пятна́дцать", say: "pitnAtsat'", en: "fifteen", ar: "خمسة عشر", pos: "num",
      ex: { ru: "Я́блоко сто́ит пятна́дцать рубле́й.", en: "An apple costs fifteen roubles.", ar: "ثمن التفاحة خمسة عشر روبلًا." },
    },
    { id: "d17-06", ru: "шестна́дцать", say: "shysnAtsat'", en: "sixteen", ar: "ستة عشر", pos: "num" },
    { id: "d17-07", ru: "семна́дцать", say: "simnAtsat'", en: "seventeen", ar: "سبعة عشر", pos: "num" },
    { id: "d17-08", ru: "восемна́дцать", say: "vasimnAtsat'", en: "eighteen", ar: "ثمانية عشر", pos: "num" },
    { id: "d17-09", ru: "девятна́дцать", say: "divitnAtsat'", en: "nineteen", ar: "تسعة عشر", pos: "num" },
    {
      id: "d17-10", ru: "два́дцать", say: "dvAtsat'", en: "twenty", ar: "عشرون", pos: "num",
      ex: { ru: "Два́дцать рубле́й — э́то дёшево.", en: "Twenty roubles is cheap.", ar: "عشرون روبلًا ثمن رخيص." },
    },
    {
      id: "d17-11", ru: "три́дцать", say: "trItsat'", en: "thirty", ar: "ثلاثون", pos: "num",
      ex: { ru: "Вода́ сто́ит три́дцать рубле́й.", en: "The water costs thirty roubles.", ar: "ثمن الماء ثلاثون روبلًا." },
    },
    {
      id: "d17-12", ru: "со́рок", say: "sOrak", en: "forty", ar: "أربعون", pos: "num",
      ex: { ru: "Чай сто́ит со́рок рубле́й.", en: "The tea costs forty roubles.", ar: "ثمن الشاي أربعون روبلًا." },
      note: { en: "40 and 90 break the pattern: со́рок, девяно́сто.", ar: "العددان ٤٠ و٩٠ يخرجان عن القاعدة: со́рок، девяно́сто." },
    },
    {
      id: "d17-13", ru: "пятьдеся́т", say: "pidisyAt", en: "fifty", ar: "خمسون", pos: "num",
      ex: { ru: "Хлеб сто́ит пятьдеся́т рубле́й.", en: "The bread costs fifty roubles.", ar: "ثمن الخبز خمسون روبلًا." },
      note: {
        en: "50–80 = the unit + -десят. Stress: пятьдеся́т, шестьдеся́т at the end, but се́мьдесят, во́семьдесят at the start.",
        ar: "من ٥٠ إلى ٨٠ = الآحاد + ‎-десят. والنبر: пятьдеся́т وшестьдеся́т في الآخر، لكن се́мьдесят وво́семьдесят في البداية.",
      },
    },
    { id: "d17-14", ru: "шестьдеся́т", say: "shyz'disyAt", en: "sixty", ar: "ستون", pos: "num" },
    {
      id: "d17-15", ru: "се́мьдесят", say: "syEm'disyat", en: "seventy", ar: "سبعون", pos: "num",
      ex: { ru: "Се́мьдесят и три́дцать — сто.", en: "Seventy and thirty is a hundred.", ar: "سبعون وثلاثون يساويان مئة." },
    },
    { id: "d17-16", ru: "во́семьдесят", say: "vOsim'disyat", en: "eighty", ar: "ثمانون", pos: "num" },
    {
      id: "d17-17", ru: "девяно́сто", say: "divinOsta", en: "ninety", ar: "تسعون", pos: "num",
      ex: { ru: "Девяно́сто рубле́й? Э́то до́рого!", en: "Ninety roubles? That's expensive!", ar: "تسعون روبلًا؟ هذا غالٍ!" },
    },
    {
      id: "d17-18", ru: "сто", say: "sto", en: "a hundred", ar: "مئة", pos: "num",
      ex: { ru: "Вот сто рубле́й.", en: "Here's a hundred roubles.", ar: "تفضّل، هذه مئة روبل." },
    },
    {
      id: "d17-19", ru: "ско́лько", say: "skOl'ka", en: "how much, how many", ar: "كم", pos: "adv",
      ex: { ru: "Ско́лько сто́ит сыр?", en: "How much is the cheese?", ar: "بكم الجبن؟" },
    },
    {
      id: "d17-20", ru: "сто́ит", say: "stOit", en: "(it) costs", ar: "يكلّف، ثمنه", pos: "verb", forms: "сто́ить (to cost); мн. ч. сто́ят",
      ex: { ru: "Сок сто́ит девяно́сто рубле́й.", en: "The juice costs ninety roubles.", ar: "ثمن العصير تسعون روبلًا." },
      note: {
        en: "Stress on the first syllable: сто́ит (it costs). стои́т means 'it stands'. Several things: сто́ят.",
        ar: "النبر على المقطع الأول: сто́ит (يكلّف)، أمّا стои́т فتعني «يقف». ولعدّة أشياء: сто́ят.",
      },
    },
    {
      id: "d17-21", ru: "рубль", say: "rubl'", en: "rouble", ar: "روبل", pos: "noun", g: "m", forms: "два рубля́, пять рубле́й",
      ex: { ru: "Два́дцать оди́н рубль.", en: "Twenty-one roubles.", ar: "واحد وعشرون روبلًا." },
      note: {
        en: "1, 21, 31… → рубль; 2–4, 22–24… → рубля́; 5–20, 25–30… → рубле́й.",
        ar: "مع ١، ٢١، ٣١… نقول рубль؛ ومع ٢–٤، ٢٢–٢٤… نقول рубля́؛ ومع ٥–٢٠، ٢٥–٣٠… نقول рубле́й.",
      },
    },
    {
      id: "d17-22", ru: "до́рого", say: "dOraga", en: "(it's) expensive", ar: "غالٍ، بسعر مرتفع", pos: "adv",
      ex: { ru: "Сто рубле́й? Э́то до́рого!", en: "A hundred roubles? That's expensive!", ar: "مئة روبل؟ هذا غالٍ!" },
    },
    {
      id: "d17-23", ru: "дёшево", say: "dyOshiva", en: "(it's) cheap", ar: "رخيص، بسعر منخفض", pos: "adv",
      ex: { ru: "Хлеб — со́рок рубле́й. Э́то дёшево.", en: "The bread is forty roubles. That's cheap.", ar: "الخبز بأربعين روبلًا. هذا رخيص." },
    },
    {
      id: "d17-24", ru: "де́ньги", say: "dyEn'gi", en: "money", ar: "نقود، مال", pos: "noun", g: "pl",
      ex: { ru: "Где мои́ де́ньги?", en: "Where's my money?", ar: "أين نقودي؟" },
      note: { en: "Always plural: Где де́ньги? — Вот они́!", ar: "دائمًا بصيغة الجمع: Где де́ньги? — Вот они́!" },
    },
    {
      id: "d17-25", ru: "Ско́лько с меня́?", say: "skOl'ka s minyA?", en: "How much do I owe? (when paying)", ar: "كم عليّ؟ (عند الدفع)", pos: "phrase",
      ex: { ru: "Сок и хлеб. Ско́лько с меня́?", en: "Juice and bread. How much do I owe?", ar: "عصير وخبز. كم عليّ؟" },
    },
  ],
  grammar: [
    {
      id: "d17-g1",
      title: { en: "Numbers 11–19: -на́дцать", ar: "الأعداد من ١١ إلى ١٩: -на́дцать" },
      en: [
        "The teens are built like 'one on ten': the unit + на + дцать. оди́ннадцать = оди́н + на + дцать, пятна́дцать = пять + на + дцать.",
        "In most of them the stress falls on на (двена́дцать, пятна́дцать, девятна́дцать), but оди́ннадцать and четы́рнадцать keep the stress of оди́н and четы́ре. Notice две- in двена́дцать.",
        "In fast speech -дцать sounds like -tsat', and шестна́дцать loses its т: shysnAtsat'.",
      ],
      ar: [
        "تُبنى الأعداد من ١١ إلى ١٩ على طريقة «واحد على العشرة»: الآحاد + на + дцать. فـ оди́ннадцать = оди́н + на + дцать، وпятна́дцать = пять + на + дцать.",
        "يقع النبر في معظمها على на (двена́дцать، пятна́дцать، девятна́дцать)، لكن оди́ннадцать وчеты́рнадцать تحتفظان بنبر оди́н وчеты́ре. ولاحظ две- في двена́дцать.",
        "وفي الكلام السريع تُنطق -дцать مثل ‎-tsat'، ويسقط حرف т من шестна́дцать: shysnAtsat'.",
      ],
      tables: [
        {
          caption: { en: "11–19", ar: "من ١١ إلى ١٩" },
          head: ["Number · العدد", "Russian · بالروسية", "Say · النطق"],
          rows: [
            ["11", "оди́ннадцать", "adInatsat'"],
            ["12", "двена́дцать", "dvinAtsat'"],
            ["13", "трина́дцать", "trinAtsat'"],
            ["14", "четы́рнадцать", "chitYrnatsat'"],
            ["15", "пятна́дцать", "pitnAtsat'"],
            ["16", "шестна́дцать", "shysnAtsat'"],
            ["17", "семна́дцать", "simnAtsat'"],
            ["18", "восемна́дцать", "vasimnAtsat'"],
            ["19", "девятна́дцать", "divitnAtsat'"],
          ],
        },
      ],
      examples: [
        { ru: "Три и де́сять — трина́дцать.", en: "Three and ten is thirteen.", ar: "ثلاثة وعشرة يساويان ثلاثة عشر." },
        { ru: "Пять и де́сять — пятна́дцать.", en: "Five and ten is fifteen.", ar: "خمسة وعشرة يساويان خمسة عشر." },
      ],
    },
    {
      id: "d17-g2",
      title: { en: "Tens and compound numbers up to 100", ar: "العشرات والأعداد المركّبة حتى ١٠٠" },
      en: [
        "20 and 30 follow the teens: два́дцать, три́дцать. 50–80 add -десят to the unit: пятьдеся́т, шестьдеся́т, се́мьдесят, во́семьдесят. 40 and 90 are special: со́рок, девяно́сто. 100 is сто.",
        "Watch the stress: пятьдеся́т and шестьдеся́т are stressed at the end, се́мьдесят and во́семьдесят at the start.",
        "Compound numbers are simply the ten + the unit, with no 'and': два́дцать пять (25), со́рок оди́н (41), девяно́сто де́вять (99). Arabic puts the unit first (خمسة وعشرون); Russian puts it last, like English.",
      ],
      ar: [
        "العددان ٢٠ و٣٠ على نمط الأعداد السابقة: два́дцать، три́дцать. ومن ٥٠ إلى ٨٠ نضيف ‎-десят إلى الآحاد: пятьдеся́т، шестьдеся́т، се́мьдесят، во́семьдесят. أمّا ٤٠ و٩٠ فخاصّان: со́рок، девяно́сто. و١٠٠ هو сто.",
        "انتبه إلى النبر: пятьдеся́т وшестьдеся́т منبوران في الآخر، أمّا се́мьдесят وво́семьдесят ففي البداية.",
        "الأعداد المركّبة هي ببساطة العشرات + الآحاد بلا واو العطف: два́дцать пять (٢٥)، со́рок оди́н (٤١)، девяно́сто де́вять (٩٩). العربية تقدّم الآحاد (خمسة وعشرون)، أمّا الروسية فتؤخّرها كالإنجليزية.",
      ],
      tables: [
        {
          caption: { en: "The tens", ar: "العشرات" },
          head: ["Number · العدد", "Russian · بالروسية", "Say · النطق"],
          rows: [
            ["20", "два́дцать", "dvAtsat'"],
            ["30", "три́дцать", "trItsat'"],
            ["40", "со́рок", "sOrak"],
            ["50", "пятьдеся́т", "pidisyAt"],
            ["60", "шестьдеся́т", "shyz'disyAt"],
            ["70", "се́мьдесят", "syEm'disyat"],
            ["80", "во́семьдесят", "vOsim'disyat"],
            ["90", "девяно́сто", "divinOsta"],
            ["100", "сто", "sto"],
          ],
        },
      ],
      examples: [
        { ru: "Два́дцать пять.", en: "Twenty-five.", ar: "خمسة وعشرون." },
        { ru: "Со́рок оди́н.", en: "Forty-one.", ar: "واحد وأربعون." },
        { ru: "Девяно́сто де́вять.", en: "Ninety-nine.", ar: "تسعة وتسعون." },
      ],
    },
    {
      id: "d17-g3",
      title: { en: "Ско́лько сто́ит…? Prices in roubles", ar: "Ско́лько сто́ит…? الأسعار بالروبل" },
      en: [
        "Ask the price of one thing with Ско́лько сто́ит…? and of several things with Ско́лько сто́ят…?: Ско́лько сто́ит хлеб? Ско́лько сто́ят я́блоки? Ско́лько means both 'how much' and 'how many'.",
        "The word рубль changes with the number, and the last word of the number decides: 1 → рубль (два́дцать оди́н рубль), 2–4 → рубля́ (со́рок два рубля́), 5–20 and round tens → рубле́й (пятьдеся́т рубле́й).",
        "Trap: 11–14 always take рубле́й (оди́ннадцать рубле́й, двена́дцать рубле́й). Learn these forms as chunks for now; the grammar behind them (the genitive) comes in week 5.",
      ],
      ar: [
        "اسأل عن سعر شيء واحد بـ Ско́лько сто́ит…? وعن سعر عدّة أشياء بـ Ско́лько сто́ят…?: Ско́лько сто́ит хлеб? Ско́лько сто́ят я́блоки? وكلمة ско́лько تعني «كم» للمقدار وللعدد معًا.",
        "كلمة рубль تتغيّر مع العدد، والكلمة الأخيرة من العدد هي التي تحدّد الصيغة: ١ ← рубль (два́дцать оди́н рубль)، ٢–٤ ← рубля́ (со́рок два рубля́)، ٥–٢٠ والعشرات الكاملة ← рубле́й (пятьдеся́т рубле́й).",
        "فخّ: الأعداد من ١١ إلى ١٤ تأخذ دائمًا рубле́й (оди́ннадцать рубле́й، двена́дцать рубле́й). احفظ هذه الصيغ الآن كعبارات جاهزة، وستتعرّف على القاعدة التي وراءها (حالة الإضافة) في الأسبوع الخامس.",
      ],
      tables: [
        {
          caption: { en: "рубль after numbers", ar: "рубль بعد الأعداد" },
          head: ["The number ends in… · آخر العدد", "Form · الصيغة", "Example · مثال"],
          rows: [
            ["1 (not 11) · ١ (ما عدا ١١)", "рубль", "два́дцать оди́н рубль"],
            ["2, 3, 4 (not 12–14) · ٢، ٣، ٤ (ما عدا ١٢–١٤)", "рубля́", "три́дцать три рубля́"],
            ["5–9, 0, 11–19 · ٥–٩، ٠، ١١–١٩", "рубле́й", "пятна́дцать рубле́й, сто рубле́й"],
          ],
        },
      ],
      examples: [
        { ru: "— Ско́лько сто́ит сок? — Со́рок два рубля́.", en: "— How much is the juice? — Forty-two roubles.", ar: "— بكم العصير؟ — باثنين وأربعين روبلًا." },
        {
          ru: "— Ско́лько сто́ят я́блоки? — Девяно́сто рубле́й. — Э́то до́рого!",
          en: "— How much are the apples? — Ninety roubles. — That's expensive!",
          ar: "— بكم التفاح؟ — بتسعين روبلًا. — هذا غالٍ!",
        },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Ско́лько с меня́?", en: "How much do I owe?", ar: "كم عليّ؟" },
    setting: {
      en: "Ahmed and Anna stop at a small kiosk near the metro. Ahmed wants some water and something to eat.",
      ar: "يتوقّف أحمد وآنا عند كشك صغير قرب المترو. يريد أحمد ماءً وشيئًا يأكله.",
    },
    lines: [
      { who: "A", name: "Ахме́д", ru: "Здра́вствуйте! Ско́лько сто́ит вода́?", en: "Hello! How much is the water?", ar: "مرحبًا! بكم الماء؟" },
      { who: "B", name: "Продавщи́ца", ru: "Вода́? Пятьдеся́т рубле́й.", en: "Water? Fifty roubles.", ar: "الماء؟ بخمسين روبلًا." },
      { who: "A", name: "Ахме́д", ru: "А сок?", en: "And the juice?", ar: "والعصير؟" },
      { who: "B", name: "Продавщи́ца", ru: "Сок — девяно́сто рубле́й.", en: "The juice is ninety roubles.", ar: "العصير بتسعين روبلًا." },
      { who: "A", name: "Ахме́д", ru: "Девяно́сто? А́нна, э́то до́рого!", en: "Ninety? Anna, that's expensive!", ar: "تسعون؟ يا آنا، هذا غالٍ!" },
      { who: "B", name: "А́нна", ru: "Нет, э́то норма́льно. В Москве́ э́то не до́рого.", en: "No, that's normal. In Moscow that's not expensive.", ar: "لا، هذا سعر عاديّ. في موسكو هذا ليس غاليًا." },
      { who: "A", name: "Ахме́д", ru: "Хорошо́. А ско́лько сто́ят я́блоки?", en: "OK. And how much are the apples?", ar: "حسنًا. وبكم التفاح؟" },
      { who: "B", name: "Продавщи́ца", ru: "Я́блоко — два́дцать два рубля́.", en: "One apple is twenty-two roubles.", ar: "التفاحة باثنين وعشرين روبلًا." },
      {
        who: "A", name: "Ахме́д", ru: "Два́дцать два рубля́? Э́то дёшево! Вода́ и я́блоко, пожа́луйста. Ско́лько с меня́?",
        en: "Twenty-two roubles? That's cheap! Water and an apple, please. How much do I owe?", ar: "اثنان وعشرون روبلًا؟ هذا رخيص! ماء وتفاحة من فضلك. كم عليّ؟",
      },
      { who: "B", name: "Продавщи́ца", ru: "Се́мьдесят два рубля́.", en: "Seventy-two roubles.", ar: "اثنان وسبعون روبلًا." },
      { who: "A", name: "Ахме́д", ru: "Вот сто рубле́й.", en: "Here's a hundred roubles.", ar: "تفضّلي، هذه مئة روبل." },
      {
        who: "B", name: "Продавщи́ца", ru: "Спаси́бо! Вот два́дцать во́семь рубле́й. До свида́ния!",
        en: "Thank you! Here's twenty-eight roubles. Goodbye!", ar: "شكرًا! تفضّل، هذه ثمانية وعشرون روبلًا. إلى اللقاء!",
      },
    ],
  },
  pronunciation: {
    title: { en: "Numbers: -дцать and silent letters", ar: "الأعداد: -дцать والحروف الصامتة" },
    en: [
      "In -дцать the д and ц melt into one sound, ts: два́дцать is said dvAtsat'. The soft sign at the end makes the final т soft.",
      "Some letters disappear in speech: шестна́дцать loses its т (shysnAtsat'), and in пятьдеся́т the ть and д melt into one d (pidisyAt).",
    ],
    ar: [
      "في -дцать يندمج حرفا д وц في صوت واحد هو ts: تُنطق два́дцать هكذا: dvAtsat'. والعلامة الليّنة في الآخر تجعل т الأخيرة ليّنة.",
      "وتختفي بعض الحروف في الكلام: يسقط т من шестна́дцать (shysnAtsat')، وفي пятьдеся́т يندمج ть وд في صوت d واحد (pidisyAt).",
    ],
    drills: [
      { ru: "два́дцать", say: "dvAtsat'", focus: { en: "дц sounds like ts.", ar: "дц تُنطق ts." } },
      { ru: "двена́дцать", say: "dvinAtsat'", focus: { en: "The stress falls on на.", ar: "النبر على на." } },
      { ru: "шестна́дцать", say: "shysnAtsat'", focus: { en: "The т is silent.", ar: "حرف т صامت." } },
      { ru: "пятьдеся́т", say: "pidisyAt", focus: { en: "Stress at the end.", ar: "النبر في الآخر." } },
      { ru: "во́семьдесят", say: "vOsim'disyat", focus: { en: "Stress at the start.", ar: "النبر في البداية." } },
      { ru: "Ско́лько сто́ит?", say: "skOl'ka stOit?", focus: { en: "Both words are stressed on the first syllable.", ar: "الكلمتان منبورتان على المقطع الأول." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Which number is 15?", ar: "أيّ عدد هو ١٥؟" },
      options: ["пятна́дцать", "пятьдеся́т", "пять"],
      answer: 0,
      why: { en: "пять + на + дцать = 15; пятьдеся́т = 50.", ar: "пять + на + дцать = ١٥، أمّا пятьдеся́т فهي ٥٠." },
    },
    {
      kind: "choice",
      prompt: { en: "Which number is 40?", ar: "أيّ عدد هو ٤٠؟" },
      options: ["четы́рнадцать", "со́рок", "четы́ре"],
      answer: 1,
      why: { en: "40 is special: со́рок.", ar: "العدد ٤٠ خاصّ: со́рок." },
    },
    {
      kind: "choice",
      prompt: { en: "3 roubles — choose the right form.", ar: "٣ روبلات — اختر الصيغة الصحيحة." },
      options: ["три рубль", "три рубля́", "три рубле́й"],
      answer: 1,
      why: { en: "After 2, 3, 4 → рубля́.", ar: "بعد ٢، ٣، ٤ ← рубля́." },
    },
    {
      kind: "choice",
      prompt: { en: "12 roubles — choose the right form.", ar: "١٢ روبلًا — اختر الصيغة الصحيحة." },
      options: ["двена́дцать рубль", "двена́дцать рубля́", "двена́дцать рубле́й"],
      answer: 2,
      why: { en: "11–14 always take рубле́й.", ar: "الأعداد من ١١ إلى ١٤ تأخذ دائمًا рубле́й." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete the question: How much is the bread?", ar: "أكمل السؤال: بكم الخبز؟" },
      ru: "Ско́лько ___ хлеб?",
      answers: ["сто́ит"],
      why: { en: "One thing → сто́ит.", ar: "لشيء واحد ← сто́ит." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: 41 roubles.", ar: "أكمل: ٤١ روبلًا." },
      ru: "Со́рок оди́н ___.",
      answers: ["рубль"],
      why: { en: "The number ends in оди́н → рубль.", ar: "العدد ينتهي بـ оди́н ← рубль." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: The bread costs fifty roubles.", ar: "أكمل: ثمن الخبز خمسون روبلًا." },
      ru: "Хлеб сто́ит пятьдеся́т ___.",
      answers: ["рубле́й"],
      why: { en: "Round tens → рубле́й.", ar: "العشرات الكاملة ← рубле́й." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Ninety roubles? That's not cheap, that's expensive!", ar: "أكمل: تسعون روبلًا؟ هذا ليس رخيصًا، هذا غالٍ!" },
      ru: "Девяно́сто рубле́й? Э́то не дёшево, э́то ___!",
      answers: ["до́рого"],
      why: { en: "до́рого = expensive; дёшево = cheap.", ar: "до́рого = غالٍ؛ дёшево = رخيص." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: How much is the juice?", ar: "كوّن السؤال: بكم العصير؟" },
      tokens: ["сто́ит", "сок", "Ско́лько"],
      answers: ["Ско́лько сто́ит сок?"],
      why: { en: "Ско́лько сто́ит + the thing.", ar: "Ско́лько сто́ит + الشيء." },
    },
    {
      kind: "order",
      prompt: { en: "Build the price: twenty-two roubles.", ar: "كوّن السعر: اثنان وعشرون روبلًا." },
      tokens: ["рубля́", "два", "Два́дцать"],
      answers: ["Два́дцать два рубля́."],
      why: { en: "The ten comes first, then the unit: два́дцать два.", ar: "العشرات أولًا ثم الآحاد: два́дцать два." },
    },
    {
      kind: "translate",
      prompt: { en: "How much is the water?", ar: "بكم الماء؟" },
      answers: ["Ско́лько сто́ит вода́?"],
      why: { en: "One thing → сто́ит.", ar: "لشيء واحد ← сто́ит." },
    },
    {
      kind: "translate",
      prompt: { en: "That's cheap!", ar: "هذا رخيص!" },
      answers: ["Э́то дёшево!", "Дёшево!"],
      why: { en: "дёшево — the ё is always stressed.", ar: "дёшево — حرف ё منبور دائمًا." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is the price?", ar: "استمع. كم السعر؟" },
      ru: "Со́рок пять рубле́й.",
      listen: true,
      options: ["45", "54", "15", "40"],
      answer: 0,
      why: { en: "со́рок = 40, пять = 5.", ar: "со́рок تعني ٤٠، وпять تعني ٥." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. How much is it?", ar: "استمع. كم الثمن؟" },
      ru: "Се́мьдесят два рубля́.",
      listen: true,
      options: ["72", "27", "62", "17"],
      answer: 0,
      why: { en: "се́мьдесят = 70, два = 2.", ar: "се́мьдесят تعني ٧٠، وдва تعني ٢." },
    },
  ],
  topics: ["numbers", "shopping"],
  search: ["Russian numbers 11 to 100", "Russian how much does it cost сколько стоит"],
  speaking: {
    scenario: {
      en: "At a kiosk: ask the price of several things (water, juice, bread, apples), understand the answers and say whether each is expensive or cheap. Then pay.",
      ar: "عند كشك: اسأل عن أسعار عدّة أشياء (الماء، العصير، الخبز، التفاح)، وافهم الإجابات، وقل إن كان كلّ منها غاليًا أو رخيصًا. ثم ادفع.",
    },
    tutorBrief:
      "Play a kiosk seller (Продавщица) next to a Moscow metro station. The learner asks prices with Сколько стоит…? / Сколько стоят…? Answer with realistic prices between 15 and 100 roubles, using рубль / рубля / рублей correctly (22 рубля, 41 рубль, 50 рублей). Keep to known words: вода, сок, чай, хлеб, сыр, молоко, яблоко, дорого, дёшево, сколько с меня, вот, спасибо, пожалуйста and the numbers to 100. Say numbers clearly; if the learner misunderstands one, repeat it slowly, then digit by digit. Correct a wrong рубль form by repeating the price correctly. Finish when the learner has paid and counted the change aloud.",
    prompts: [
      { ru: "Ско́лько сто́ит вода́?", en: "How much is the water?", ar: "بكم الماء؟" },
      { ru: "Ско́лько сто́ят я́блоки?", en: "How much are the apples?", ar: "بكم التفاح؟" },
      { ru: "Со́рок рубле́й? Э́то дёшево!", en: "Forty roubles? That's cheap!", ar: "أربعون روبلًا؟ هذا رخيص!" },
      { ru: "Сок и хлеб, пожа́луйста. Ско́лько с меня́?", en: "Juice and bread, please. How much do I owe?", ar: "عصير وخبز من فضلك. كم عليّ؟" },
    ],
  },
  journal: {
    en: "Write 3–5 sentences about prices in roubles: what costs how much at a kiosk or a shop near you, and what is expensive or cheap.",
    ar: "اكتب من ٣ إلى ٥ جمل عن الأسعار بالروبل: كم ثمن الأشياء في كشك أو متجر قريب منك، وما الغالي وما الرخيص.",
  },
  culture: {
    en: "The rouble (рубль) is divided into 100 kopecks (копе́йки), but kopecks are rarely used any more. Prices are written with the sign ₽ or the short form руб. In big cities you can pay by card or phone almost everywhere. And the Egyptian pound is called еги́петский фунт in Russian.",
    ar: "ينقسم الروبل (рубль) إلى ١٠٠ كوبيك (копе́йки)، لكن الكوبيكات نادرًا ما تُستخدم الآن. وتُكتب الأسعار بالرمز ₽ أو بالاختصار руб. ويمكنك في المدن الكبرى أن تدفع بالبطاقة أو بالهاتف في كل مكان تقريبًا. أمّا الجنيه المصري فيُسمّى بالروسية еги́петский фунт.",
  },
};

const DAY_18: Day = {
  n: 18,
  week: 3,
  kind: "lesson",
  title: { ru: "Кото́рый час?", en: "What time is it? Days of the week", ar: "كم الساعة؟ أيام الأسبوع" },
  goals: [
    {
      en: "Ask and tell the time: Кото́рый час? — Два часа́. Пять часо́в два́дцать мину́т.",
      ar: "أن تسأل عن الوقت وتخبر به: Кото́рый час? — Два часа́. Пять часо́в два́дцать мину́т.",
    },
    {
      en: "Name the days of the week and say when: в понеде́льник, во вто́рник, в сре́ду.",
      ar: "أن تسمّي أيام الأسبوع وتقول متى: в понеде́льник، во вто́рник، в сре́ду.",
    },
    {
      en: "Plan your week with у́тром, днём, ве́чером, но́чью, сего́дня and за́втра.",
      ar: "أن تخطّط لأسبوعك باستخدام у́тром، днём، ве́чером، но́чью، сего́дня، за́втра.",
    },
  ],
  words: [
    {
      id: "d18-01", ru: "понеде́льник", say: "panidyEl'nik", en: "Monday", ar: "الاثنين", pos: "noun", g: "m", forms: "в понеде́льник",
      ex: { ru: "В понеде́льник я рабо́таю.", en: "On Monday I work.", ar: "يوم الاثنين أعمل." },
    },
    {
      id: "d18-02", ru: "вто́рник", say: "ftOrnik", en: "Tuesday", ar: "الثلاثاء", pos: "noun", g: "m", forms: "во вто́рник",
      ex: { ru: "Во вто́рник у меня́ уро́к.", en: "On Tuesday I have a lesson.", ar: "يوم الثلاثاء عندي درس." },
      note: {
        en: "Before a word that starts with в + another consonant, the preposition в becomes во: во вто́рник.",
        ar: "قبل كلمة تبدأ بـ в يليه حرف ساكن آخر، يصبح حرف الجر в هو во: во вто́рник.",
      },
    },
    {
      id: "d18-03", ru: "среда́", say: "sridA", en: "Wednesday", ar: "الأربعاء", pos: "noun", g: "f", forms: "в сре́ду",
      ex: { ru: "В сре́ду мы в музе́е.", en: "On Wednesday we're at the museum.", ar: "يوم الأربعاء نكون في المتحف." },
      note: { en: "The stress moves: среда́, but в сре́ду.", ar: "النبر ينتقل: среда́، لكن в сре́ду." },
    },
    {
      id: "d18-04", ru: "четве́рг", say: "chitvyErk", en: "Thursday", ar: "الخميس", pos: "noun", g: "m", forms: "в четве́рг",
      ex: { ru: "В четве́рг А́нна в университе́те.", en: "On Thursday Anna is at the university.", ar: "يوم الخميس تكون آنا في الجامعة." },
    },
    {
      id: "d18-05", ru: "пя́тница", say: "pyAtnitsa", en: "Friday", ar: "الجمعة", pos: "noun", g: "f", forms: "в пя́тницу",
      ex: { ru: "В пя́тницу ве́чером я отдыха́ю.", en: "On Friday evening I relax.", ar: "مساء الجمعة أرتاح." },
    },
    {
      id: "d18-06", ru: "суббо́та", say: "subOta", en: "Saturday", ar: "السبت", pos: "noun", g: "f", forms: "в суббо́ту",
      ex: { ru: "В суббо́ту мы гуля́ем в па́рке.", en: "On Saturday we go for a walk in the park.", ar: "يوم السبت نتنزّه في الحديقة." },
    },
    {
      id: "d18-07", ru: "воскресе́нье", say: "vaskrisyEn'ye", en: "Sunday", ar: "الأحد", pos: "noun", g: "n", forms: "в воскресе́нье",
      ex: { ru: "В воскресе́нье па́па до́ма.", en: "On Sunday Dad is at home.", ar: "يوم الأحد يكون أبي في البيت." },
    },
    {
      id: "d18-08", ru: "час", say: "chas", en: "hour; one o'clock", ar: "ساعة؛ الساعة الواحدة", pos: "noun", g: "m", forms: "два часа́, пять часо́в",
      ex: { ru: "Сейча́с час.", en: "It's one o'clock now.", ar: "الساعة الآن الواحدة." },
      note: { en: "час on its own means one o'clock; with a number it counts the hours.", ar: "كلمة час وحدها تعني الساعة الواحدة، ومع العدد تعدّ الساعات." },
    },
    {
      id: "d18-09", ru: "мину́та", say: "minUta", en: "minute", ar: "دقيقة", pos: "noun", g: "f", forms: "две мину́ты, пять мину́т",
      ex: { ru: "Пять мину́т, пожа́луйста!", en: "Five minutes, please!", ar: "خمس دقائق من فضلك!" },
    },
    {
      id: "d18-10", ru: "у́тром", say: "Utram", en: "in the morning", ar: "صباحًا، في الصباح", pos: "adv",
      ex: { ru: "У́тром я чита́ю.", en: "In the morning I read.", ar: "في الصباح أقرأ." },
    },
    {
      id: "d18-11", ru: "днём", say: "dnyom", en: "in the afternoon, during the day", ar: "نهارًا، بعد الظهر", pos: "adv",
      ex: { ru: "Днём я на рабо́те.", en: "During the day I'm at work.", ar: "في النهار أكون في العمل." },
    },
    {
      id: "d18-12", ru: "ве́чером", say: "vyEchiram", en: "in the evening", ar: "مساءً، في المساء", pos: "adv",
      ex: { ru: "Ве́чером мы до́ма.", en: "In the evening we're at home.", ar: "في المساء نكون في البيت." },
    },
    {
      id: "d18-13", ru: "но́чью", say: "nOch'yu", en: "at night", ar: "ليلًا، في الليل", pos: "adv",
      ex: { ru: "Но́чью я не рабо́таю.", en: "I don't work at night.", ar: "لا أعمل في الليل." },
    },
    {
      id: "d18-14", ru: "сего́дня", say: "sivOdnya", en: "today", ar: "اليوم", pos: "adv",
      ex: { ru: "Сего́дня суббо́та.", en: "Today is Saturday.", ar: "اليوم هو السبت." },
      note: { en: "The г here sounds like v: sivOdnya.", ar: "حرف г هنا يُنطق v: sivOdnya." },
    },
    {
      id: "d18-15", ru: "за́втра", say: "zAftra", en: "tomorrow", ar: "غدًا", pos: "adv",
      ex: { ru: "За́втра воскресе́нье.", en: "Tomorrow is Sunday.", ar: "غدًا الأحد." },
    },
    {
      id: "d18-16", ru: "Кото́рый час?", say: "katOryy chas?", en: "What time is it?", ar: "كم الساعة؟", pos: "phrase",
      ex: { ru: "— Кото́рый час? — Три часа́.", en: "— What time is it? — Three o'clock.", ar: "— كم الساعة؟ — الثالثة." },
    },
    {
      id: "d18-17", ru: "Ско́лько вре́мени?", say: "skOl'ka vryEmini?", en: "What time is it? (everyday)", ar: "كم الساعة؟ (في الحديث اليومي)", pos: "phrase",
      ex: { ru: "— Ско́лько вре́мени? — Шесть часо́в.", en: "— What's the time? — Six o'clock.", ar: "— كم الساعة؟ — السادسة." },
    },
    {
      id: "d18-18", ru: "Во ско́лько?", say: "va skOl'ka?", en: "At what time?", ar: "في أيّ ساعة؟", pos: "phrase",
      ex: { ru: "— Во ско́лько уро́к? — В семь.", en: "— What time is the lesson? — At seven.", ar: "— في أيّ ساعة الدرس؟ — في السابعة." },
    },
    {
      id: "d18-19", ru: "когда́", say: "kagdA", en: "when", ar: "متى", pos: "adv",
      ex: { ru: "Когда́ у тебя́ уро́к?", en: "When do you have a lesson?", ar: "متى عندك درس؟" },
    },
    {
      id: "d18-20", ru: "уро́к", say: "urOk", en: "lesson, class", ar: "درس، حصّة", pos: "noun", g: "m", forms: "на уро́ке; мн. ч. уро́ки",
      ex: { ru: "Уро́к в пять часо́в.", en: "The lesson is at five o'clock.", ar: "الدرس في الساعة الخامسة." },
    },
    {
      id: "d18-21", ru: "трениро́вка", say: "trinirOfka", en: "training session, workout", ar: "تمرين رياضي", pos: "noun", g: "f", forms: "на трениро́вке",
      ex: { ru: "У меня́ трениро́вка в суббо́ту.", en: "I have training on Saturday.", ar: "عندي تمرين يوم السبت." },
    },
    { id: "d18-22", ru: "До за́втра!", say: "da zAftra!", en: "See you tomorrow!", ar: "أراك غدًا! / إلى الغد!", pos: "phrase" },
  ],
  grammar: [
    {
      id: "d18-g1",
      title: { en: "Telling the time: Кото́рый час?", ar: "السؤال عن الوقت: Кото́рый час?" },
      en: [
        "Ask Кото́рый час? or, more casually, Ско́лько вре́мени? The answer is a number + час in the same three forms you learned for рубль: 1 → час, 2–4 → часа́, 5–12 → часо́в.",
        "One o'clock is just час: Сейча́с час. Minutes work the same way: 5–20 and round tens take мину́т (пять часо́в два́дцать мину́т); 2–4 take мину́ты, with две for 'two': две мину́ты.",
        "In everyday speech people often just say the numbers, as on a digital clock: Сейча́с три два́дцать. — It's 3:20.",
      ],
      ar: [
        "اسأل Кото́рый час? أو بصيغة أبسط Ско́лько вре́мени? والإجابة عدد + час بالصيغ الثلاث نفسها التي تعلّمتها مع рубль: ١ ← час، ٢–٤ ← часа́، ٥–١٢ ← часо́в.",
        "الساعة الواحدة هي час فقط: Сейча́с час. والدقائق على النحو نفسه: من ٥ إلى ٢٠ والعشرات الكاملة تأخذ мину́т (пять часо́в два́дцать мину́т)، ومن ٢ إلى ٤ تأخذ мину́ты مع две بمعنى «اثنتان»: две мину́ты.",
        "وفي الحديث اليومي يكتفي الناس غالبًا بذكر الأعداد كما في الساعة الرقمية: Сейча́с три два́дцать. — الساعة ٣:٢٠.",
      ],
      tables: [
        {
          caption: { en: "час after numbers", ar: "час بعد الأعداد" },
          head: ["Number · العدد", "Form · الصيغة", "Example · مثال"],
          rows: [
            ["1", "час", "Сейча́с час."],
            ["2, 3, 4", "часа́", "Сейча́с два часа́."],
            ["5–12", "часо́в", "Сейча́с пять часо́в."],
          ],
        },
      ],
      examples: [
        { ru: "— Кото́рый час? — Четы́ре часа́.", en: "— What time is it? — Four o'clock.", ar: "— كم الساعة؟ — الرابعة." },
        { ru: "Сейча́с де́сять часо́в пятна́дцать мину́т.", en: "It's ten fifteen now.", ar: "الساعة الآن العاشرة وخمس عشرة دقيقة." },
        { ru: "— Ско́лько вре́мени? — Семь со́рок.", en: "— What's the time? — Seven forty.", ar: "— كم الساعة؟ — السابعة وأربعون دقيقة." },
      ],
    },
    {
      id: "d18-g2",
      title: { en: "When? в + a day, в + a time", ar: "متى؟ в + اليوم، в + الساعة" },
      en: [
        "To say on which day, use в + the day: в понеде́льник, в четве́рг, в воскресе́нье. Feminine days change -а to -у: в сре́ду, в пя́тницу, в суббо́ту. (This is the accusative, which you will meet properly in week 4.)",
        "Before вто́рник, в becomes во so that it can be pronounced: во вто́рник. Days of the week are written with a small letter.",
        "At what time? — Во ско́лько? The answer is в + the time: в час, в два часа́, в семь часо́в, or simply в семь.",
      ],
      ar: [
        "لتقول في أيّ يوم، استخدم в + اسم اليوم: в понеде́льник، в четве́рг، в воскресе́нье. والأيام المؤنّثة تتحوّل فيها -а إلى -у: в сре́ду، в пя́тницу، в суббо́ту. (هذه حالة المفعول به، وستدرسها جيدًا في الأسبوع الرابع.)",
        "قبل вто́рник يصبح в هو во ليسهل النطق: во вто́рник. وتُكتب أيام الأسبوع بحرف صغير.",
        "في أيّ ساعة؟ — Во ско́лько? والإجابة в + الوقت: в час، в два часа́، в семь часо́в، أو ببساطة в семь.",
      ],
      tables: [
        {
          caption: { en: "The days of the week", ar: "أيام الأسبوع" },
          head: ["Day · اليوم", "When? · متى؟", "Meaning · المعنى"],
          rows: [
            ["понеде́льник", "в понеде́льник", "Monday · الاثنين"],
            ["вто́рник", "во вто́рник", "Tuesday · الثلاثاء"],
            ["среда́", "в сре́ду", "Wednesday · الأربعاء"],
            ["четве́рг", "в четве́рг", "Thursday · الخميس"],
            ["пя́тница", "в пя́тницу", "Friday · الجمعة"],
            ["суббо́та", "в суббо́ту", "Saturday · السبت"],
            ["воскресе́нье", "в воскресе́нье", "Sunday · الأحد"],
          ],
        },
      ],
      examples: [
        { ru: "Во вто́рник и в четве́рг у меня́ трениро́вка.", en: "On Tuesday and Thursday I have training.", ar: "يومي الثلاثاء والخميس عندي تمرين." },
        { ru: "— Во ско́лько уро́к? — В семь часо́в.", en: "— What time is the lesson? — At seven o'clock.", ar: "— في أيّ ساعة الدرس؟ — في الساعة السابعة." },
      ],
    },
    {
      id: "d18-g3",
      title: { en: "Parts of the day: у́тром, днём, ве́чером, но́чью", ar: "أجزاء اليوم: у́тром، днём، ве́чером، но́чью" },
      en: [
        "'In the morning, during the day, in the evening, at night' are single words with no preposition: у́тром, днём, ве́чером, но́чью. They come from у́тро, день, ве́чер and ночь.",
        "Combine them freely: сего́дня ве́чером (this evening), за́втра у́тром (tomorrow morning), в суббо́ту днём (on Saturday afternoon).",
      ],
      ar: [
        "«في الصباح، في النهار، في المساء، في الليل» كلمات مفردة بلا حرف جر: у́тром، днём، ве́чером، но́чью. وهي مشتقّة من у́тро، день، ве́чер، ночь.",
        "ويمكنك أن تجمع بينها بحرّية: сего́дня ве́чером (هذا المساء)، за́втра у́тром (صباح الغد)، в суббо́ту днём (يوم السبت بعد الظهر).",
      ],
      examples: [
        { ru: "Сего́дня ве́чером я до́ма.", en: "This evening I'm at home.", ar: "هذا المساء أنا في البيت." },
        { ru: "За́втра у́тром у меня́ уро́к.", en: "Tomorrow morning I have a lesson.", ar: "صباح الغد عندي درس." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Когда́ у тебя́ уро́ки?", en: "When are your lessons?", ar: "متى دروسك؟" },
    setting: {
      en: "Monday evening. Anna and Ahmed meet near the university and plan their week.",
      ar: "مساء الاثنين. يلتقي آنا وأحمد قرب الجامعة ويخطّطان لأسبوعهما.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, когда́ у тебя́ уро́ки?", en: "Ahmed, when do you have lessons?", ar: "يا أحمد، متى عندك دروس؟" },
      { who: "A", name: "Ахме́д", ru: "В понеде́льник, в сре́ду и в пя́тницу.", en: "On Monday, Wednesday and Friday.", ar: "يوم الاثنين والأربعاء والجمعة." },
      { who: "B", name: "А́нна", ru: "А во ско́лько?", en: "And at what time?", ar: "وفي أيّ ساعة؟" },
      { who: "A", name: "Ахме́д", ru: "Ве́чером, в семь часо́в. А что?", en: "In the evening, at seven o'clock. Why?", ar: "في المساء، في الساعة السابعة. لماذا؟" },
      {
        who: "B", name: "А́нна", ru: "Во вто́рник и в четве́рг у меня́ трениро́вка в па́рке.",
        en: "On Tuesday and Thursday I have a training session in the park.", ar: "يومي الثلاثاء والخميس عندي تمرين في الحديقة.",
      },
      { who: "A", name: "Ахме́д", ru: "Трениро́вка? Отли́чно! А когда́?", en: "Training? Great! And when?", ar: "تمرين؟ رائع! ومتى؟" },
      { who: "B", name: "А́нна", ru: "У́тром, в семь. За́втра вто́рник!", en: "In the morning, at seven. Tomorrow is Tuesday!", ar: "في الصباح، في السابعة. غدًا الثلاثاء!" },
      { who: "A", name: "Ахме́д", ru: "За́втра у́тром в па́рке? Хорошо́, я то́же!", en: "Tomorrow morning in the park? OK, count me in!", ar: "صباح الغد في الحديقة؟ حسنًا، وأنا معكِ!" },
      { who: "B", name: "А́нна", ru: "Отли́чно! А сего́дня у тебя́ уро́к?", en: "Great! And do you have a lesson today?", ar: "رائع! وهل عندك درس اليوم؟" },
      { who: "A", name: "Ахме́д", ru: "Да, сего́дня понеде́льник. А кото́рый час?", en: "Yes, today is Monday. What time is it?", ar: "نعم، اليوم الاثنين. كم الساعة؟" },
      { who: "B", name: "А́нна", ru: "Сейча́с шесть со́рок пять.", en: "It's six forty-five.", ar: "الساعة الآن السادسة وخمس وأربعون دقيقة." },
      {
        who: "A", name: "Ахме́д", ru: "Шесть со́рок пять?! Уро́к в семь! Пока́, до за́втра!",
        en: "Six forty-five?! The lesson is at seven! Bye, see you tomorrow!", ar: "السادسة وخمس وأربعون؟! الدرس في السابعة! إلى اللقاء، أراكِ غدًا!",
      },
    ],
  },
  pronunciation: {
    title: { en: "Spelling traps: сего́дня, четве́рг, во вто́рник", ar: "فخاخ الإملاء: сего́дня، четве́рг، во вто́рник" },
    en: [
      "Russian spelling is mostly faithful to the sound, but a few words hide surprises. In сего́дня the г is pronounced v: sivOdnya.",
      "At the end of a word a voiced consonant becomes voiceless, so четве́рг ends in k (chitvyErk). And в before a voiceless consonant is f: вто́рник sounds like ftOrnik, в сре́ду like fsryEdu.",
    ],
    ar: [
      "الإملاء الروسي أمين للنطق في معظمه، لكن بعض الكلمات تخفي مفاجآت. في сего́дня يُنطق حرف г مثل v: sivOdnya.",
      "في آخر الكلمة يصبح الساكن المجهور مهموسًا، فتنتهي четве́рг بصوت k (chitvyErk). وحرف в قبل الساكن المهموس يصبح f: تُنطق вто́рник هكذا ftOrnik، وв сре́ду هكذا fsryEdu.",
    ],
    drills: [
      { ru: "сего́дня", say: "sivOdnya", focus: { en: "г sounds like v.", ar: "г تُنطق v." } },
      { ru: "четве́рг", say: "chitvyErk", focus: { en: "The final г sounds like k.", ar: "г الأخيرة تُنطق k." } },
      { ru: "во вто́рник", say: "vaftOrnik", focus: { en: "во is unstressed; вт sounds like ft.", ar: "во غير منبورة، وвт تُنطق ft." } },
      { ru: "в сре́ду", say: "fsryEdu", focus: { en: "в is f before с; the stress falls on сре.", ar: "в تُنطق f قبل с، والنبر على сре." } },
      { ru: "воскресе́нье", say: "vaskrisyEn'ye", focus: { en: "Five syllables, stress on се.", ar: "خمسة مقاطع، والنبر على се." } },
      { ru: "Кото́рый час?", say: "katOryy chas?", focus: { en: "Stress on то; it starts with a question word, so the voice does not rise.", ar: "النبر على то، والسؤال يبدأ بأداة استفهام فلا يرتفع الصوت." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Which day is Wednesday?", ar: "أيّ يوم هو الأربعاء؟" },
      options: ["вто́рник", "среда́", "суббо́та", "четве́рг"],
      answer: 1,
      why: { en: "среда́ = Wednesday — literally 'the middle'.", ar: "среда́ = الأربعاء، ومعناها الحرفي «الوسط»." },
    },
    {
      kind: "choice",
      prompt: { en: "Which day comes after пя́тница?", ar: "أيّ يوم يأتي بعد пя́тница؟" },
      options: ["четве́рг", "суббо́та", "воскресе́нье", "понеде́льник"],
      answer: 1,
      why: { en: "пя́тница (Friday) → суббо́та (Saturday).", ar: "пя́тница (الجمعة) ← суббо́та (السبت)." },
    },
    {
      kind: "choice",
      prompt: { en: "It's five o'clock. Choose the sentence.", ar: "الساعة الخامسة. اختر الجملة." },
      options: ["Сейча́с пять час.", "Сейча́с пять часа́.", "Сейча́с пять часо́в."],
      answer: 2,
      why: { en: "5–12 → часо́в, just like рубле́й.", ar: "من ٥ إلى ١٢ ← часо́в، تمامًا مثل рубле́й." },
    },
    {
      kind: "choice",
      prompt: { en: "It's two o'clock. Choose the right form.", ar: "الساعة الثانية. اختر الصيغة الصحيحة." },
      options: ["два часа́", "два часо́в", "два час"],
      answer: 0,
      why: { en: "2, 3, 4 → часа́.", ar: "بعد ٢، ٣، ٤ نقول часа́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: The lesson is on Wednesday.", ar: "أكمل: الدرس يوم الأربعاء." },
      ru: "Уро́к ___ сре́ду.",
      answers: ["в"],
      why: { en: "в + the day: в сре́ду.", ar: "в + اليوم: в сре́ду." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: The training is on Tuesday.", ar: "أكمل: التمرين يوم الثلاثاء." },
      ru: "Трениро́вка ___ вто́рник.",
      answers: ["во"],
      why: { en: "Before вт we say во: во вто́рник.", ar: "قبل вт نقول во: во вто́рник." },
    },
    {
      kind: "fill",
      prompt: { en: "Put пя́тница into the right form.", ar: "ضع пя́тница في الصيغة الصحيحة." },
      ru: "Уро́к в ___.",
      answers: ["пя́тницу"],
      why: { en: "Feminine days change -а to -у: в пя́тницу.", ar: "الأيام المؤنّثة تتحوّل فيها -а إلى -у: в пя́тницу." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: It's three o'clock now.", ar: "أكمل: الساعة الآن الثالثة." },
      ru: "Сейча́с три ___.",
      answers: ["часа́"],
      why: { en: "After три → часа́.", ar: "بعد три ← часа́." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: What time is it now?", ar: "كوّن السؤال: كم الساعة الآن؟" },
      tokens: ["час", "Кото́рый", "сейча́с"],
      answers: ["Кото́рый сейча́с час?", "Кото́рый час сейча́с?", "Сейча́с кото́рый час?"],
      why: { en: "Кото́рый час? — literally 'Which hour?'", ar: "Кото́рый час? — حرفيًا «أيّ ساعة؟»" },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: Tomorrow morning I have training.", ar: "كوّن الجملة: صباح الغد عندي تمرين." },
      tokens: ["у́тром", "трениро́вка", "За́втра", "у", "меня́"],
      answers: ["За́втра у́тром у меня́ трениро́вка.", "У меня́ трениро́вка за́втра у́тром."],
      why: { en: "Time words often come first: За́втра у́тром…", ar: "كلمات الزمن تأتي غالبًا في البداية: За́втра у́тром…" },
    },
    {
      kind: "translate",
      prompt: { en: "Tomorrow is Saturday.", ar: "غدًا السبت." },
      answers: ["За́втра суббо́та."],
      why: { en: "No verb 'is' is needed: За́втра суббо́та.", ar: "لا نحتاج إلى فعل «يكون»: За́втра суббо́та." },
    },
    {
      kind: "translate",
      prompt: { en: "The lesson is in the evening, at seven o'clock.", ar: "الدرس في المساء، في الساعة السابعة." },
      answers: ["Уро́к ве́чером, в семь часо́в.", "Уро́к ве́чером в семь.", "Уро́к в семь часо́в ве́чера."],
      why: { en: "ве́чером = in the evening; в семь часо́в = at seven o'clock.", ar: "ве́чером = في المساء؛ в семь часо́в = في الساعة السابعة." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What time is it?", ar: "استمع. كم الساعة؟" },
      ru: "Сейча́с де́сять часо́в пятна́дцать мину́т.",
      listen: true,
      options: ["10:15", "10:50", "12:15", "2:15"],
      answer: 0,
      why: { en: "де́сять часо́в = 10, пятна́дцать мину́т = 15.", ar: "де́сять часо́в تعني الساعة ١٠، وпятна́дцать мину́т تعني ١٥ دقيقة." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. When is it?", ar: "استمع. متى؟" },
      ru: "В пя́тницу ве́чером.",
      listen: true,
      options: ["on Friday evening · مساء الجمعة", "on Thursday morning · صباح الخميس", "on Wednesday afternoon · بعد ظهر الأربعاء"],
      answer: 0,
      why: { en: "в пя́тницу = on Friday; ве́чером = in the evening.", ar: "в пя́тницу = يوم الجمعة؛ ве́чером = في المساء." },
    },
  ],
  topics: ["time", "days-week", "numbers"],
  search: ["telling time in Russian который час", "Russian days of the week pronunciation"],
  speaking: {
    scenario: {
      en: "Plan the week with the tutor: agree on days and times for your Russian lessons and for training, using в + a day, в + a time and у́тром / днём / ве́чером.",
      ar: "خطّط للأسبوع مع المعلّم: اتفقا على الأيام والساعات لدروس الروسية وللتمارين، مستخدمًا в + اليوم، وв + الساعة، وу́тром / днём / ве́чером.",
    },
    tutorBrief:
      "Play Anna (Анна), who wants to fit training sessions (тренировка) and Russian lessons (урок) into the week with the learner. Ask Когда у тебя уроки? Во сколько? and propose days and times; the learner answers with в + day (в понедельник, во вторник, в среду) and в + time (в семь часов), plus утром, днём, вечером, ночью, сегодня, завтра. At least once ask Который час? and make the learner tell the time with час / часа / часов. Correct wrong forms by repeating them correctly (во вторник, в пятницу, два часа). Finish by reading back the agreed plan for the week and asking the learner to confirm it with До завтра!",
    prompts: [
      { ru: "В понеде́льник и в сре́ду у меня́ уро́к.", en: "On Monday and Wednesday I have a lesson.", ar: "يومي الاثنين والأربعاء عندي درس." },
      { ru: "Во ско́лько трениро́вка?", en: "What time is the training?", ar: "في أيّ ساعة التمرين؟" },
      { ru: "В суббо́ту у́тром, в де́вять часо́в.", en: "On Saturday morning, at nine o'clock.", ar: "صباح السبت، في الساعة التاسعة." },
      { ru: "Кото́рый час? — Сейча́с два часа́.", en: "What time is it? — It's two o'clock.", ar: "كم الساعة؟ — الساعة الآن الثانية." },
      { ru: "Хорошо́, до за́втра!", en: "OK, see you tomorrow!", ar: "حسنًا، أراك غدًا!" },
    ],
  },
  journal: {
    en: "Write your timetable for the week in 4–5 sentences: what you do on which days and at what time (В понеде́льник у́тром я рабо́таю. Во вто́рник в семь часо́в у меня́ уро́к.).",
    ar: "اكتب جدولك الأسبوعي في ٤–٥ جمل: ماذا تفعل، وفي أيّ الأيام، وفي أيّ ساعة (В понеде́льник у́тром я рабо́таю. Во вто́рник в семь часо́в у меня́ уро́к.).",
  },
  culture: {
    en: "The Russian week begins on Monday, and several day names are numbers: вто́рник is 'the second day', четве́рг 'the fourth', пя́тница 'the fifth'; среда́ means 'the middle'. Arabic counts from Sunday, so الاثنين ('the second') is Monday; Russian counts from Monday, so вто́рник ('the second') is Tuesday. суббо́та comes from the same ancient word for the Sabbath as Arabic السبت. Timetables use the 24-hour clock: 19:00 is девятна́дцать часо́в.",
    ar: "يبدأ الأسبوع الروسي يوم الاثنين، وبعض أسماء الأيام أعداد: вто́рник «اليوم الثاني»، وчетве́рг «الرابع»، وпя́тница «الخامس»، أمّا среда́ فمعناها «الوسط». العربية تعدّ من الأحد، فـ«الاثنين» (أي الثاني) هو يوم الاثنين، أمّا الروسية فتعدّ من الاثنين، فيكون вто́рник («الثاني») هو الثلاثاء. وكلمة суббо́та مأخوذة من الكلمة القديمة نفسها التي جاء منها «السبت» العربي. وتستخدم الجداول نظام الأربع والعشرين ساعة: ١٩:٠٠ هي девятна́дцать часо́в.",
  },
};

const DAY_19: Day = {
  n: 19,
  week: 3,
  kind: "lesson",
  title: { ru: "Где ты живёшь?", en: "Where do you live?", ar: "أين تسكن؟" },
  goals: [
    {
      en: "Conjugate жить and say where you live: Я живу́ в Москве́, в це́нтре, на пя́том этаже́.",
      ar: "أن تصرّف الفعل жить وتقول أين تسكن: Я живу́ в Москве́, в це́нтре, на пя́том этаже́.",
    },
    {
      en: "Talk about someone or something with о / об + the prepositional: о Москве́, об А́нне.",
      ar: "أن تتحدّث عن شخص أو شيء بـ о / об + حالة حرف الجر: о Москве́، об А́нне.",
    },
    {
      en: "Use обо мне, о тебе́, о нём, о ней, and ask О чём…?",
      ar: "أن تستخدم обо мне، о тебе́، о нём، о ней، وأن تسأل О чём…?",
    },
  ],
  words: [
    {
      id: "d19-01", ru: "жить", say: "zhyt'", en: "to live", ar: "يسكن، يعيش", pos: "verb", forms: "живу́, живёшь",
      ex: { ru: "Я живу́ в Москве́.", en: "I live in Moscow.", ar: "أسكن في موسكو." },
    },
    {
      id: "d19-02", ru: "а́дрес", say: "Adris", en: "address", ar: "عنوان", pos: "noun", g: "m", forms: "мн. ч. адреса́",
      ex: {
        ru: "Мой а́дрес: у́лица Пу́шкина, дом де́сять, кварти́ра пять.",
        en: "My address is Pushkin Street, building 10, flat 5.",
        ar: "عنواني: شارع بوشكين، المبنى رقم ١٠، الشقة رقم ٥.",
      },
    },
    {
      id: "d19-03", ru: "эта́ж", say: "etAsh", en: "floor, storey", ar: "طابق، دور", pos: "noun", g: "m",
      forms: "на этаже́; на пе́рвом, второ́м, тре́тьем, пя́том этаже́",
      ex: { ru: "Я живу́ на пя́том этаже́.", en: "I live on the fifth floor.", ar: "أسكن في الطابق الخامس." },
      note: {
        en: "Floors are counted from the ground: пе́рвый эта́ж is the ground floor. 'On the … floor' is на + a number word ending in -ом (or -ем) + этаже́: на пе́рвом (1st), второ́м (2nd), тре́тьем (3rd), пя́том (5th) этаже́.",
        ar: "تُعدّ الطوابق من الأرض: пе́рвый эта́ж هو الطابق الأرضي. و«في الطابق كذا» = на + كلمة عددية تنتهي بـ -ом (أو -ем) + этаже́: на пе́рвом (الأول)، второ́м (الثاني)، тре́тьем (الثالث)، пя́том (الخامس) этаже́.",
      },
    },
    {
      id: "d19-04", ru: "райо́н", say: "rayOn", en: "district, area, neighbourhood", ar: "حيّ، منطقة", pos: "noun", g: "m", forms: "в райо́не",
      ex: { ru: "Я живу́ в райо́не Арба́т.", en: "I live in the Arbat district.", ar: "أسكن في حيّ أربات." },
    },
    {
      id: "d19-05", ru: "центр", say: "tsentr", en: "centre, city centre", ar: "مركز، وسط المدينة", pos: "noun", g: "m", forms: "в це́нтре",
      ex: { ru: "Гости́ница в це́нтре.", en: "The hotel is in the centre.", ar: "الفندق في وسط المدينة." },
    },
    {
      id: "d19-06", ru: "писа́ть", say: "pisAt'", en: "to write", ar: "يكتب", pos: "verb", forms: "пишу́, пи́шешь",
      ex: { ru: "Я пишу́ письмо́.", en: "I'm writing a letter.", ar: "أكتب رسالة." },
      note: { en: "с becomes ш in every form: пишу́, пи́шешь, пи́шут.", ar: "يتحوّل с إلى ш في كل الصيغ: пишу́، пи́шешь، пи́шут." },
    },
    {
      id: "d19-07", ru: "расска́зывать", say: "raskAzyvat'", en: "to tell (about), to talk about", ar: "يحكي، يروي", pos: "verb", forms: "расска́зываю, расска́зываешь",
      ex: { ru: "Ба́бушка расска́зывает о Москве́.", en: "Grandma is telling us about Moscow.", ar: "جدّتي تحكي عن موسكو." },
    },
    {
      id: "d19-08", ru: "мечта́ть", say: "michtAt'", en: "to dream (of), to long for", ar: "يحلم (بـ)، يتمنّى", pos: "verb", forms: "мечта́ю, мечта́ешь",
      ex: { ru: "Я мечта́ю о мо́ре.", en: "I dream of the sea.", ar: "أحلم بالبحر." },
      note: {
        en: "мечта́ть о + the prepositional: to dream of something you want. (The dreams you have in your sleep use a different word.)",
        ar: "мечта́ть о + حالة حرف الجر: أن تحلم بشيء تتمنّاه. (أمّا أحلام النوم فلها كلمة أخرى.)",
      },
    },
    {
      id: "d19-09", ru: "фильм", say: "fil'm", en: "film, movie", ar: "فيلم", pos: "noun", g: "m", forms: "о фи́льме",
      ex: { ru: "Э́то фильм о Москве́.", en: "It's a film about Moscow.", ar: "هذا فيلم عن موسكو." },
    },
    {
      id: "d19-10", ru: "но́вость", say: "nOvast'", en: "(a piece of) news", ar: "خبر", pos: "noun", g: "f", forms: "мн. ч. но́вости",
      ex: { ru: "Я чита́ю но́вости.", en: "I'm reading the news.", ar: "أقرأ الأخبار." },
      note: { en: "'The news' in general is plural: но́вости.", ar: "«الأخبار» بشكل عامّ بصيغة الجمع: но́вости." },
    },
    {
      id: "d19-11", ru: "о", say: "a", en: "about (+ prepositional)", ar: "عن (+ حالة حرف الجر)", pos: "prep",
      ex: { ru: "Мы говори́м о фи́льме.", en: "We're talking about the film.", ar: "نتحدّث عن الفيلم." },
      note: {
        en: "Before а, о, у, и, э it becomes об: об А́нне, об о́фисе. Unstressed, it sounds like a short 'a'.",
        ar: "قبل а، о، у، и، э يصبح об: об А́нне، об о́фисе. ولأنه غير منبور يُنطق مثل «a» قصيرة.",
      },
    },
    {
      id: "d19-12", ru: "обо мне", say: "aba mnyE", en: "about me", ar: "عنّي", pos: "phrase",
      ex: { ru: "Ты ду́маешь обо мне?", en: "Are you thinking about me?", ar: "هل تفكّر فيّ؟" },
    },
    {
      id: "d19-13", ru: "интере́сно", say: "intiryEsna", en: "(it's) interesting; interestingly", ar: "مثير للاهتمام، ممتع", pos: "adv",
      ex: { ru: "Э́то о́чень интере́сно!", en: "That's very interesting!", ar: "هذا ممتع جدًّا!" },
    },
    {
      id: "d19-14", ru: "сосе́д", say: "sasyEt", en: "neighbour (a man)", ar: "جار", pos: "noun", g: "m", forms: "мн. ч. сосе́ди",
      ex: { ru: "Мой сосе́д — врач.", en: "My neighbour is a doctor.", ar: "جاري طبيب." },
    },
    {
      id: "d19-15", ru: "сосе́дка", say: "sasyEtka", en: "neighbour (a woman)", ar: "جارة", pos: "noun", g: "f",
      ex: { ru: "Сосе́дка всегда́ до́ма.", en: "My neighbour is always at home.", ar: "جارتي دائمًا في البيت." },
    },
    {
      id: "d19-16", ru: "Где ты живёшь?", say: "gdye ty zhyvyOsh?", en: "Where do you live?", ar: "أين تسكن؟", pos: "phrase",
      note: { en: "Polite or plural: Где вы живёте?", ar: "بصيغة الاحترام أو الجمع: Где вы живёте?" },
    },
    {
      id: "d19-17", ru: "О чём?", say: "a chyom?", en: "About what? What is it about?", ar: "عن ماذا؟ عمّ؟", pos: "phrase",
      ex: { ru: "— О чём фильм? — О семье́.", en: "— What is the film about? — About a family.", ar: "— عمّ يدور الفيلم؟ — عن عائلة." },
    },
    {
      id: "d19-18", ru: "ти́хо", say: "tIkha", en: "(it's) quiet; quietly", ar: "هادئ؛ بهدوء", pos: "adv",
      ex: { ru: "В кварти́ре ти́хо.", en: "It's quiet in the flat.", ar: "الشقة هادئة." },
    },
    {
      id: "d19-19", ru: "шу́мно", say: "shUmna", en: "(it's) noisy", ar: "صاخب، فيه ضجيج", pos: "adv",
      ex: { ru: "В це́нтре шу́мно.", en: "It's noisy in the centre.", ar: "وسط المدينة صاخب." },
    },
  ],
  grammar: [
    {
      id: "d19-g1",
      title: { en: "жить — to live", ar: "жить — يسكن" },
      en: [
        "жить is stressed on the ending in every form, and four forms are written with ё: живёшь, живёт, живём, живёте.",
        "Where you live is the prepositional again: Я живу́ в Москве́, в це́нтре, в райо́не Арба́т, на у́лице Пу́шкина, на пя́том этаже́.",
        "Two more verbs today: писа́ть changes с to ш (пишу́, пи́шешь), and its stress moves back after the я-form. расска́зывать and мечта́ть are regular, like чита́ть: расска́зываю, мечта́ю.",
      ],
      ar: [
        "الفعل жить منبور على النهاية في كل الصيغ، وتُكتب أربع منها بحرف ё: живёшь، живёт، живём، живёте.",
        "ومكان السكن بحالة حرف الجر مرّة أخرى: Я живу́ в Москве́, в це́нтре, в райо́не Арба́т, на у́лице Пу́шкина, на пя́том этаже́.",
        "وفعلان آخران اليوم: писа́ть يتحوّل فيه с إلى ш (пишу́، пи́шешь)، وينتقل نبره إلى الوراء بعد صيغة я. أمّا расска́зывать وмечта́ть فمنتظمان مثل чита́ть: расска́зываю، мечта́ю.",
      ],
      tables: [
        {
          caption: { en: "жить and писа́ть", ar: "жить وписа́ть" },
          head: ["Person · الشخص", "жить", "писа́ть"],
          rows: [
            ["я", "живу́", "пишу́"],
            ["ты", "живёшь", "пи́шешь"],
            ["он / она́", "живёт", "пи́шет"],
            ["мы", "живём", "пи́шем"],
            ["вы", "живёте", "пи́шете"],
            ["они́", "живу́т", "пи́шут"],
          ],
        },
      ],
      examples: [
        { ru: "— Где ты живёшь? — Я живу́ в це́нтре.", en: "— Where do you live? — I live in the centre.", ar: "— أين تسكن؟ — أسكن في وسط المدينة." },
        { ru: "Мои́ роди́тели живу́т в Каи́ре.", en: "My parents live in Cairo.", ar: "والداي يسكنان في القاهرة." },
        { ru: "А́нна пи́шет письмо́.", en: "Anna is writing a letter.", ar: "آنا تكتب رسالة." },
      ],
    },
    {
      id: "d19-g2",
      title: { en: "о / об + the prepositional: talking about something", ar: "о / об + حالة حرف الجر: الحديث عن شيء" },
      en: [
        "'About' is о + the prepositional, with the same endings as after в and на: о Москве́, о фи́льме, о семье́, о Росси́и. It goes with говори́ть, ду́мать, чита́ть, писа́ть, расска́зывать and мечта́ть.",
        "Before a word that starts with the vowel sound а, о, у, и or э, о becomes об: об А́нне, об Ахме́де, об о́фисе. Before е, ё, ю and я it stays о, because these letters start with a y-sound: о Еги́пте.",
        "To ask, use О чём? (about what?) or О ком? (about whom?): — О чём фильм? — О Москве́.",
      ],
      ar: [
        "«عن» هي о + حالة حرف الجر، بالنهايات نفسها التي بعد в وна: о Москве́، о фи́льме، о семье́، о Росси́и. وتأتي مع الأفعال говори́ть، ду́мать، чита́ть، писа́ть، расска́зывать، мечта́ть.",
        "قبل كلمة تبدأ بصوت а أو о أو у أو и أو э يصبح о هو об: об А́нне، об Ахме́де، об о́фисе. أمّا قبل е وё وю وя فيبقى о، لأن هذه الحروف تبدأ بصوت y: о Еги́пте.",
        "وللسؤال استخدم О чём? (عن ماذا؟) أو О ком? (عن مَن؟): — О чём фильм? — О Москве́.",
      ],
      tables: [
        {
          caption: { en: "о or об?", ar: "о أم об؟" },
          head: ["Word · الكلمة", "About… · عن…"],
          rows: [
            ["Москва́", "о Москве́"],
            ["семья́", "о семье́"],
            ["Еги́пет", "о Еги́пте"],
            ["А́нна", "об А́нне"],
            ["Ахме́д", "об Ахме́де"],
            ["о́фис", "об о́фисе"],
          ],
        },
      ],
      examples: [
        { ru: "Мы говори́м о фи́льме.", en: "We're talking about the film.", ar: "نتحدّث عن الفيلم." },
        { ru: "Ма́ма ча́сто ду́мает об Ахме́де.", en: "Mum often thinks about Ahmed.", ar: "أمي تفكّر كثيرًا في أحمد." },
        { ru: "— О ком ты расска́зываешь? — О бра́те.", en: "— Who are you talking about? — About my brother.", ar: "— عمّن تحكي؟ — عن أخي." },
      ],
    },
    {
      id: "d19-g3",
      title: { en: "Pronouns after о: обо мне, о тебе́, о нём, о ней", ar: "الضمائر بعد о: обо мне، о тебе́، о нём، о ней" },
      en: [
        "Pronouns have their own prepositional forms. With 'me', о becomes обо: обо мне.",
        "After a preposition, он, она́ and они́ start with н: о нём, о ней, о них. You never say о ём.",
      ],
      ar: [
        "للضمائر صيغ خاصّة بها في حالة حرف الجر. ومع «أنا» يصبح о هو обо: обо мне.",
        "بعد حرف الجر تبدأ الضمائر он وона́ وони́ بحرف н: о нём، о ней، о них. ولا يُقال أبدًا о ём.",
      ],
      tables: [
        {
          caption: { en: "About me, about you…", ar: "عنّي، عنك…" },
          head: ["Pronoun · الضمير", "About… · عن…"],
          rows: [
            ["я", "обо мне"],
            ["ты", "о тебе́"],
            ["он / оно́", "о нём"],
            ["она́", "о ней"],
            ["мы", "о нас"],
            ["вы", "о вас"],
            ["они́", "о них"],
          ],
        },
      ],
      examples: [
        { ru: "Ты ду́маешь обо мне?", en: "Are you thinking about me?", ar: "هل تفكّر فيّ؟" },
        { ru: "Мы ча́сто говори́м о тебе́.", en: "We often talk about you.", ar: "نتحدّث عنك كثيرًا." },
        { ru: "Э́то А́нна. Я расска́зываю о ней.", en: "This is Anna. I'm telling you about her.", ar: "هذه آنا. أحكي لك عنها." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Сосе́дка Ни́на", en: "Nina next door", ar: "الجارة نينا" },
    setting: {
      en: "Anna and Ahmed are having tea after class. Anna asks where Ahmed lives and who his neighbours are.",
      ar: "يشرب آنا وأحمد الشاي بعد الدرس. تسأل آنا أحمد أين يسكن ومن هم جيرانه.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, где ты живёшь?", en: "Ahmed, where do you live?", ar: "يا أحمد، أين تسكن؟" },
      { who: "A", name: "Ахме́д", ru: "Я живу́ в це́нтре. Ря́дом метро́ и парк.", en: "I live in the centre. The metro and a park are close by.", ar: "أسكن في وسط المدينة. المترو والحديقة قريبان." },
      { who: "B", name: "А́нна", ru: "В це́нтре? Там шу́мно!", en: "In the centre? It's noisy there!", ar: "في وسط المدينة؟ المكان هناك صاخب!" },
      {
        who: "A", name: "Ахме́д", ru: "На у́лице шу́мно, а в кварти́ре ти́хо. Я живу́ на пя́том этаже́.",
        en: "It's noisy in the street, but quiet in the flat. I live on the fifth floor.", ar: "الشارع صاخب، أمّا الشقة فهادئة. أسكن في الطابق الخامس.",
      },
      { who: "B", name: "А́нна", ru: "А кто твои́ сосе́ди?", en: "And who are your neighbours?", ar: "ومن هم جيرانك؟" },
      {
        who: "A", name: "Ахме́д", ru: "Сосе́д — студе́нт, а сосе́дка — ба́бушка Ни́на. Она́ всегда́ расска́зывает о Москве́.",
        en: "My neighbour is a student, and the lady next door is Granny Nina. She's always telling stories about Moscow.",
        ar: "جاري طالب، وجارتي هي الجدّة نينا. إنها تحكي دائمًا عن موسكو.",
      },
      { who: "B", name: "А́нна", ru: "Интере́сно! А она́ зна́ет о тебе́?", en: "Interesting! And does she know about you?", ar: "مثير للاهتمام! وهل تعرف عنك شيئًا؟" },
      {
        who: "A", name: "Ахме́д", ru: "Да, она́ всё зна́ет обо мне: где я рабо́таю, отку́да я…",
        en: "Yes, she knows everything about me: where I work, where I'm from…", ar: "نعم، إنها تعرف كل شيء عنّي: أين أعمل، ومن أين أنا…",
      },
      { who: "B", name: "А́нна", ru: "А ты расска́зываешь о Еги́пте?", en: "And do you tell her about Egypt?", ar: "وهل تحكي لها عن مصر؟" },
      {
        who: "A", name: "Ахме́д", ru: "Да, ча́сто. Я расска́зываю о Каи́ре, о мо́ре, о семье́.",
        en: "Yes, often. I tell her about Cairo, the sea, my family.", ar: "نعم، كثيرًا. أحكي عن القاهرة، وعن البحر، وعن عائلتي.",
      },
      { who: "B", name: "А́нна", ru: "А я мечта́ю о Еги́пте!", en: "And I dream of Egypt!", ar: "وأنا أحلم بمصر!" },
      { who: "A", name: "Ахме́д", ru: "Мой дом в Каи́ре — твой дом!", en: "My home in Cairo is your home!", ar: "بيتي في القاهرة بيتكِ!" },
    ],
  },
  pronunciation: {
    title: { en: "ж and ш are always hard; ё is always stressed", ar: "ж وш صلبان دائمًا، وё منبور دائمًا" },
    en: [
      "ж and ш are always hard, whatever letter follows, and after them и is pronounced like ы: жить sounds like zhyt', живу́ like zhyvU.",
      "ё is always stressed, so it never needs a mark: живёшь, живёт, живём. At the end of a word ж is devoiced to ш: эта́ж sounds like etAsh.",
    ],
    ar: [
      "حرفا ж وш صلبان دائمًا مهما كان الحرف الذي بعدهما، ويُنطق и بعدهما مثل ы: تُنطق жить هكذا zhyt'، وживу́ هكذا zhyvU.",
      "حرف ё منبور دائمًا، لذلك لا يحتاج إلى علامة: живёшь، живёт، живём. وفي آخر الكلمة يصبح ж مهموسًا مثل ш: تُنطق эта́ж هكذا etAsh.",
    ],
    drills: [
      { ru: "жить", say: "zhyt'", focus: { en: "A hard ж, and и sounds like ы.", ar: "ж صلب، وи يُنطق مثل ы." } },
      { ru: "живу́", say: "zhyvU", focus: { en: "The stress falls on the ending.", ar: "النبر على النهاية." } },
      { ru: "Где ты живёшь?", say: "gdye ty zhyvyOsh?", focus: { en: "ё carries the stress.", ar: "حرف ё يحمل النبر." } },
      { ru: "эта́ж", say: "etAsh", focus: { en: "The final ж sounds like ш.", ar: "ж الأخيرة تُنطق مثل ш." } },
      { ru: "обо мне", say: "aba mnyE", focus: { en: "Say it as one unit; the stress falls on мне.", ar: "انطقها كوحدة واحدة، والنبر على мне." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the right form: Я ___ в Москве́.", ar: "اختر الصيغة الصحيحة: Я ___ в Москве́." },
      options: ["живу́", "живёшь", "живёт", "живу́т"],
      answer: 0,
      why: { en: "я → живу́.", ar: "مع я نقول живу́." },
    },
    {
      kind: "choice",
      prompt: { en: "Choose the right form: Мы ___ в Каи́ре.", ar: "اختر الصيغة الصحيحة: Мы ___ в Каи́ре." },
      options: ["живёт", "живём", "живёте"],
      answer: 1,
      why: { en: "мы → живём.", ar: "مع мы نقول живём." },
    },
    {
      kind: "choice",
      prompt: { en: "'About Anna' — which is right?", ar: "«عن آنا» — أيّها الصحيح؟" },
      options: ["о А́нне", "об А́нне", "об А́нна"],
      answer: 1,
      why: { en: "Before the vowel а, о becomes об.", ar: "قبل الحرف الصوتي а يصبح о هو об." },
    },
    {
      kind: "choice",
      prompt: { en: "'About Egypt' — which is right?", ar: "«عن مصر» — أيّها الصحيح؟" },
      options: ["об Еги́пте", "о Еги́пте", "о Еги́пет"],
      answer: 1,
      why: { en: "Е starts with a y-sound, so о stays: о Еги́пте.", ar: "حرف Е يبدأ بصوت y، لذلك يبقى о: о Еги́пте." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: They live in the centre.", ar: "أكمل: هم يسكنون في وسط المدينة." },
      ru: "Они́ ___ в це́нтре.",
      answers: ["живу́т"],
      why: { en: "они́ → живу́т.", ar: "مع они́ نقول живу́т." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Are you thinking about me?", ar: "أكمل: هل تفكّر فيّ؟" },
      ru: "Ты ду́маешь обо ___?",
      answers: ["мне"],
      why: { en: "'About me' is always обо мне.", ar: "«عنّي» دائمًا обо мне." },
    },
    {
      kind: "fill",
      prompt: { en: "Put Москва́ after о.", ar: "ضع Москва́ بعد о." },
      ru: "Фильм о ___.",
      answers: ["Москве́"],
      why: { en: "о + the prepositional: о Москве́.", ar: "о + حالة حرف الجر: о Москве́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: We're talking about him.", ar: "أكمل: نتحدّث عنه." },
      ru: "Мы говори́м о ___.",
      answers: ["нём"],
      why: { en: "After a preposition он becomes нём: о нём.", ar: "بعد حرف الجر يصبح он هو нём: о нём." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: Where do you live?", ar: "كوّن السؤال: أين تسكن؟" },
      tokens: ["живёшь", "Где", "ты"],
      answers: ["Где ты живёшь?"],
      why: { en: "The question word comes first: Где ты живёшь?", ar: "أداة الاستفهام أولًا: Где ты живёшь?" },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I dream of the sea.", ar: "كوّن الجملة: أحلم بالبحر." },
      tokens: ["мо́ре", "мечта́ю", "о", "Я"],
      answers: ["Я мечта́ю о мо́ре."],
      why: { en: "мечта́ть о + the prepositional.", ar: "мечта́ть о + حالة حرف الجر." },
    },
    {
      kind: "translate",
      prompt: { en: "I live in the centre, on the fifth floor.", ar: "أسكن في وسط المدينة، في الطابق الخامس." },
      answers: ["Я живу́ в це́нтре, на пя́том этаже́.", "Живу́ в це́нтре, на пя́том этаже́."],
      why: { en: "в це́нтре and на этаже́ — both in the prepositional.", ar: "в це́нтре وна этаже́ — كلاهما في حالة حرف الجر." },
    },
    {
      kind: "translate",
      prompt: { en: "What is the film about?", ar: "عمّ يدور الفيلم؟" },
      answers: ["О чём фильм?"],
      why: { en: "О чём? = about what?", ar: "О чём? = عن ماذا؟" },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the neighbour talk about?", ar: "استمع. عمّ تتحدّث الجارة؟" },
      ru: "Сосе́дка всегда́ расска́зывает о Москве́.",
      listen: true,
      options: ["about Moscow · عن موسكو", "about Cairo · عن القاهرة", "about a film · عن فيلم"],
      answer: 0,
      why: { en: "о Москве́ = about Moscow.", ar: "о Москве́ = عن موسكو." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Where is it quiet?", ar: "استمع. أين الهدوء؟" },
      ru: "В кварти́ре ти́хо, а на у́лице шу́мно.",
      listen: true,
      options: ["in the flat · في الشقة", "in the street · في الشارع", "in the centre · في وسط المدينة"],
      answer: 0,
      why: { en: "ти́хо = quiet; шу́мно = noisy.", ar: "ти́хо = هادئ؛ шу́мно = صاخب." },
    },
  ],
  topics: ["prepositional", "city"],
  search: ["Russian verb жить conjugation", "Russian prepositional case о об about"],
  speaking: {
    scenario: {
      en: "Describe where you live — city, district, floor, neighbours — and then talk about a film you like: what it is about and why it is interesting.",
      ar: "صف المكان الذي تسكن فيه — المدينة والحيّ والطابق والجيران — ثم تحدّث عن فيلم تحبّه: عمّ يدور ولماذا هو ممتع.",
    },
    tutorBrief:
      "Play Maxim (Максим), Anna's brother, a programmer who is curious about the learner's new home. Ask where the learner lives (Где ты живёшь? В центре?), which floor the flat is on (Квартира на пятом этаже?), whether it is quiet or noisy (тихо, шумно) and who the neighbours are (сосед, соседка). Then ask about a film they like: О чём фильм? Expect answers with жить, в / на + the prepositional and о / об + the prepositional, including обо мне, о нём, о ней. Recast wrong endings correctly and gently fix о / об. Finish by retelling in two sentences where the learner lives and what the film is about.",
    prompts: [
      { ru: "Я живу́ в Москве́, в це́нтре.", en: "I live in Moscow, in the centre.", ar: "أسكن في موسكو، في وسط المدينة." },
      { ru: "Кварти́ра на пя́том этаже́. Там ти́хо.", en: "The flat is on the fifth floor. It's quiet there.", ar: "الشقة في الطابق الخامس. المكان هناك هادئ." },
      { ru: "Мой сосе́д — инжене́р.", en: "My neighbour is an engineer.", ar: "جاري مهندس." },
      { ru: "Фильм о семье́. Э́то о́чень интере́сно!", en: "The film is about a family. It's very interesting!", ar: "الفيلم عن عائلة. إنه ممتع جدًّا!" },
    ],
  },
  journal: {
    en: "Write 4–5 sentences: where you live (city, district, floor), what is close by, who your neighbours are, and what you dream of (Я мечта́ю о…).",
    ar: "اكتب من ٤ إلى ٥ جمل: أين تسكن (المدينة، والحيّ، والطابق)، وما القريب منك، ومن هم جيرانك، وبماذا تحلم (Я мечта́ю о…).",
  },
  culture: {
    en: "A Russian address names the street, the building (дом) and the flat (кварти́ра): у́лица Пу́шкина, дом 10, кварти́ра 25 — written ул. Пу́шкина, д. 10, кв. 25. Floors are counted from the ground, so the ground floor is пе́рвый эта́ж: a Russian 'fifth floor' is an Egyptian 'fourth floor'. The entrance of an apartment block is called подъе́зд.",
    ar: "يذكر العنوان الروسي الشارع، ثم المبنى (дом)، ثم الشقة (кварти́ра): у́лица Пу́шкина, дом 10, кварти́ра 25 — وتُكتب: ул. Пу́шкина, д. 10, кв. 25. وتُعدّ الطوابق من الأرض، فالطابق الأرضي هو пе́рвый эта́ж، أي إن «الطابق الخامس» في روسيا هو «الطابق الرابع» في مصر. ويُسمّى مدخل العمارة السكنية подъе́зд.",
  },
};

const DAY_20: Day = {
  n: 20,
  week: 3,
  kind: "immersion",
  title: { ru: "Смо́трим: у́лицы го́рода", en: "Watch: city streets", ar: "نشاهد: شوارع المدينة" },
  goals: [
    {
      en: "Follow a short guided walk and catch the places, directions and numbers in it.",
      ar: "أن تتابع جولة قصيرة مع مرشدة وتلتقط ما فيها من أماكن واتجاهات وأعداد.",
    },
    {
      en: "Describe the centre of a city: Спра́ва…, сле́ва…, ря́дом…",
      ar: "أن تصف وسط مدينة: Спра́ва…، сле́ва…، ря́дом…",
    },
  ],
  words: [
    {
      id: "d20-01", ru: "столи́ца", say: "stalItsa", en: "capital (city)", ar: "عاصمة", pos: "noun", g: "f", forms: "в столи́це",
      ex: { ru: "Москва́ — столи́ца Росси́и.", en: "Moscow is the capital of Russia.", ar: "موسكو عاصمة روسيا." },
    },
    {
      id: "d20-02", ru: "проспе́кт", say: "praspyEkt", en: "avenue, wide main street", ar: "جادّة، شارع رئيسي عريض", pos: "noun", g: "m", forms: "на проспе́кте",
      ex: { ru: "Мы гуля́ем на проспе́кте.", en: "We're walking along the avenue.", ar: "نتنزّه في الجادّة." },
      note: { en: "Streets and avenues take на: на у́лице, на проспе́кте.", ar: "الشوارع والجادّات تأخذ на: на у́лице، на проспе́кте." },
    },
    {
      id: "d20-03", ru: "па́мятник", say: "pAmitnik", en: "monument, statue", ar: "نُصب تذكاري، تمثال", pos: "noun", g: "m", forms: "мн. ч. па́мятники",
      ex: { ru: "Спра́ва па́мятник.", en: "On the right there's a monument.", ar: "على اليمين نُصب تذكاري." },
    },
    {
      id: "d20-04", ru: "храм", say: "khram", en: "church, temple (a large place of worship)", ar: "كنيسة، معبد (دار عبادة كبيرة)", pos: "noun", g: "m", forms: "в хра́ме",
      ex: { ru: "Храм сле́ва.", en: "The church is on the left.", ar: "الكنيسة على اليسار." },
    },
    {
      id: "d20-05", ru: "Кремль", say: "kryeml'", en: "the Kremlin (a fortress)", ar: "الكرملين (قلعة)", pos: "noun", g: "m", forms: "в Кремле́",
      ex: { ru: "Кремль ря́дом.", en: "The Kremlin is close by.", ar: "الكرملين قريب." },
    },
    {
      id: "d20-06", ru: "Кра́сная пло́щадь", say: "krAsnaya plOshchit'", en: "Red Square", ar: "الساحة الحمراء", pos: "noun", g: "f", forms: "на Кра́сной пло́щади",
      ex: { ru: "Мы на Кра́сной пло́щади.", en: "We're on Red Square.", ar: "نحن في الساحة الحمراء." },
    },
    {
      id: "d20-07", ru: "река́", say: "rikA", en: "river", ar: "نهر", pos: "noun", g: "f", forms: "на реке́; мн. ч. ре́ки",
      ex: { ru: "Вот река́.", en: "Here's the river.", ar: "ها هو النهر." },
    },
    {
      id: "d20-08", ru: "краси́во", say: "krasIva", en: "(it's) beautiful; beautifully", ar: "جميل؛ بشكل جميل", pos: "adv",
      ex: { ru: "Здесь о́чень краси́во!", en: "It's very beautiful here!", ar: "المكان هنا جميل جدًّا!" },
    },
  ],
  grammar: [
    {
      id: "d20-g1",
      title: { en: "Famous places after в / на", ar: "الأماكن الشهيرة بعد в / на" },
      en: [
        "When a place name has an adjective, both words change: Кра́сная пло́щадь → на Кра́сной пло́щади. Just recognise this for now; adjectives in the prepositional come in week 7.",
        "Some of today's nouns move the stress to the ending: Кремль → в Кремле́, река́ → на реке́. Others behave like any noun: проспе́кт → на проспе́кте, храм → в хра́ме.",
      ],
      ar: [
        "إذا كان في اسم المكان صفة، تتغيّر الكلمتان معًا: Кра́сная пло́щадь ← на Кра́сной пло́щади. يكفي الآن أن تتعرّف على ذلك، وستدرس الصفات في حالة حرف الجر في الأسبوع السابع.",
        "بعض أسماء اليوم ينتقل نبرها إلى النهاية: Кремль ← в Кремле́، река́ ← на реке́. وبعضها يتصرّف كأيّ اسم: проспе́кт ← на проспе́кте، храм ← в хра́ме.",
      ],
      examples: [
        { ru: "Мы на Кра́сной пло́щади.", en: "We're on Red Square.", ar: "نحن في الساحة الحمراء." },
        { ru: "Я живу́ на проспе́кте Ми́ра.", en: "I live on Prospekt Mira (Peace Avenue).", ar: "أسكن في جادّة ميرا (جادّة السلام)." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Воскресе́нье в це́нтре", en: "Sunday in the centre", ar: "يوم الأحد في وسط المدينة" },
    setting: {
      en: "Sunday morning. Ahmed joins a walking tour of central Moscow. The guide, Ira, shows the group Red Square and the river.",
      ar: "صباح الأحد. ينضمّ أحمد إلى جولة سيرًا على الأقدام في وسط موسكو، وتُري المرشدة إيرا المجموعةَ الساحة الحمراء والنهر.",
    },
    lines: [
      {
        who: "B", name: "И́ра", ru: "Здра́вствуйте! Меня́ зову́т И́ра. Сего́дня я расска́зываю о Москве́.",
        en: "Hello! My name is Ira. Today I'm telling you about Moscow.", ar: "مرحبًا! اسمي إيرا. اليوم سأحكي لكم عن موسكو.",
      },
      { who: "A", name: "Ахме́д", ru: "Здра́вствуйте! А где мы сейча́с?", en: "Hello! And where are we now?", ar: "مرحبًا! وأين نحن الآن؟" },
      {
        who: "B", name: "И́ра", ru: "Мы на Кра́сной пло́щади. Москва́ — столи́ца, а э́то её центр.",
        en: "We're on Red Square. Moscow is the capital, and this is its centre.", ar: "نحن في الساحة الحمراء. موسكو هي العاصمة، وهذا قلبها.",
      },
      { who: "A", name: "Ахме́д", ru: "Вот Кремль! Он спра́ва, да?", en: "There's the Kremlin! It's on the right, isn't it?", ar: "ها هو الكرملين! إنه على اليمين، أليس كذلك؟" },
      {
        who: "B", name: "И́ра", ru: "Да, спра́ва Кремль, а сле́ва ГУМ. ГУМ — э́то магази́н. Там о́чень до́рого!",
        en: "Yes, the Kremlin is on the right, and GUM is on the left. GUM is a shop. It's very expensive there!",
        ar: "نعم، الكرملين على اليمين، و«غوم» على اليسار. «غوم» متجر، والأسعار فيه غالية جدًّا!",
      },
      { who: "A", name: "Ахме́д", ru: "А что э́то? Храм?", en: "And what's that? A church?", ar: "وما هذا؟ كنيسة؟" },
      {
        who: "B", name: "И́ра", ru: "Да, э́то храм Васи́лия Блаже́нного. А ря́дом па́мятник: Ми́нин и Пожа́рский.",
        en: "Yes, that's St Basil's Cathedral. And next to it there's a monument: Minin and Pozharsky.",
        ar: "نعم، هذه كاتدرائية القديس باسيل. وبجوارها نُصب تذكاري: مينين وبوجارسكي.",
      },
      { who: "A", name: "Ахме́д", ru: "О́чень краси́во!", en: "It's very beautiful!", ar: "جميل جدًّا!" },
      {
        who: "B", name: "И́ра", ru: "А вот река́. Го́род — Москва́, и река́ то́же Москва́!",
        en: "And here's the river. The city is Moscow, and the river is Moscow too!", ar: "وها هو النهر. المدينة اسمها موسكو، والنهر اسمه موسكو أيضًا!",
      },
      { who: "A", name: "Ахме́д", ru: "Интере́сно! А вы живёте в це́нтре?", en: "Interesting! And do you live in the centre?", ar: "مثير للاهتمام! وهل تسكنين في وسط المدينة؟" },
      {
        who: "B", name: "И́ра", ru: "Нет, я живу́ на проспе́кте Верна́дского. Э́то далеко́. А вы?",
        en: "No, I live on Vernadsky Avenue. It's far away. And you?", ar: "لا، أسكن في جادّة فيرنادسكي. إنها بعيدة. وأنت؟",
      },
      {
        who: "A", name: "Ахме́д", ru: "Я живу́ в це́нтре, недалеко́. Я из Еги́пта, из Каи́ра.",
        en: "I live in the centre, not far from here. I'm from Egypt, from Cairo.", ar: "أسكن في وسط المدينة، ليس بعيدًا من هنا. أنا من مصر، من القاهرة.",
      },
      {
        who: "B", name: "И́ра", ru: "Каи́р — то́же столи́ца, и там то́же река́ — Нил!",
        en: "Cairo is a capital too, and it has a river too — the Nile!", ar: "القاهرة عاصمة أيضًا، وفيها نهر أيضًا — النيل!",
      },
      { who: "A", name: "Ахме́д", ru: "Да, Нил! А кото́рый час?", en: "Yes, the Nile! And what time is it?", ar: "نعم، النيل! وكم الساعة؟" },
      {
        who: "B", name: "И́ра", ru: "Сейча́с оди́ннадцать часо́в. А в суббо́ту здесь, на пло́щади, конце́рт!",
        en: "It's eleven o'clock. And on Saturday there's a concert here, on the square!", ar: "الساعة الآن الحادية عشرة. ويوم السبت ستُقام هنا في الساحة حفلة موسيقية!",
      },
      { who: "A", name: "Ахме́д", ru: "Конце́рт? В суббо́ту я здесь!", en: "A concert? On Saturday I'll be here!", ar: "حفلة موسيقية؟ يوم السبت سأكون هنا!" },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Which word means 'river'?", ar: "أيّ كلمة تعني «نهر»؟" },
      options: ["река́", "храм", "Кремль", "проспе́кт"],
      answer: 0,
      why: { en: "река́ = river. Moscow's river is also called Москва́.", ar: "река́ = نهر، ونهر موسكو اسمه أيضًا Москва́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: We're on Red Square.", ar: "أكمل: نحن في الساحة الحمراء." },
      ru: "Мы на Кра́сной ___.",
      answers: ["пло́щади"],
      why: { en: "A feminine noun in -ь takes -и: на пло́щади.", ar: "الاسم المؤنّث المنتهي بـ -ь يأخذ -и: на пло́щади." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: The Kremlin is on the right, and GUM is on the left.", ar: "أكمل: الكرملين على اليمين، و«غوم» على اليسار." },
      ru: "Спра́ва ___, а сле́ва ГУМ.",
      answers: ["Кремль"],
      why: { en: "Кремль is the old fortress in the heart of Moscow.", ar: "Кремль هو القلعة القديمة في قلب موسكو." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: It's very beautiful here.", ar: "كوّن الجملة: المكان هنا جميل جدًّا." },
      tokens: ["о́чень", "Здесь", "краси́во"],
      answers: ["Здесь о́чень краси́во."],
      why: { en: "Здесь + о́чень + an -о word describes a place.", ar: "Здесь + о́чень + كلمة تنتهي بـ -о تصف المكان." },
    },
    {
      kind: "translate",
      prompt: { en: "It's very beautiful!", ar: "جميل جدًّا!" },
      answers: ["О́чень краси́во!", "Э́то о́чень краси́во!", "Как краси́во!"],
      why: { en: "краси́во works like до́рого and интере́сно: Э́то краси́во.", ar: "كلمة краси́во تُستخدم مثل до́рого وинтере́сно: Э́то краси́во." },
    },
    {
      kind: "translate",
      prompt: { en: "Cairo is a capital too.", ar: "القاهرة عاصمة أيضًا." },
      answers: ["Каи́р — то́же столи́ца.", "Каи́р то́же столи́ца."],
      why: { en: "то́же = too, also; no verb 'is' is needed.", ar: "то́же = أيضًا، ولا نحتاج إلى فعل «يكون»." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is next to the church?", ar: "استمع. ما الذي بجوار الكنيسة؟" },
      ru: "Ря́дом па́мятник.",
      listen: true,
      options: ["a monument · نُصب تذكاري", "a river · نهر", "a shop · متجر"],
      answer: 0,
      why: { en: "па́мятник = monument.", ar: "па́мятник تعني نُصبًا تذكاريًّا." },
    },
  ],
  topics: ["city", "listening", "culture"],
  search: ["Red Square Moscow tour in Russian", "Russian street interviews easy listening"],
  speaking: {
    scenario: {
      en: "Tell the tutor what you saw on the walk (or in the video), then describe the centre of your own city: what is on the square, what is close by, where the river is.",
      ar: "أخبر المعلّم بما رأيته في الجولة (أو في الفيديو)، ثم صف وسط مدينتك: ما الذي في الميدان، وما القريب، وأين النهر.",
    },
    tutorBrief:
      "Play Ira (Ира), a friendly Moscow tour guide chatting with the learner after the walk. First ask what they saw: Что там справа? А слева? Где Кремль? Then ask them to describe the centre of their own city (for an Egyptian learner, Cairo: a big square, the Nile, a museum, a bridge). Keep to known words: столица, проспект, памятник, храм, Кремль, Красная площадь, река, красиво, справа, слева, рядом, далеко, недалеко, в / на + the prepositional, жить, numbers and time. Ask one question at a time and recast errors correctly. Finish by summarising their city in three Russian sentences and asking them to repeat one.",
    prompts: [
      { ru: "Спра́ва Кремль, а сле́ва ГУМ.", en: "The Kremlin is on the right, and GUM is on the left.", ar: "الكرملين على اليمين، و«غوم» على اليسار." },
      { ru: "Ря́дом храм и па́мятник.", en: "Close by there's a church and a monument.", ar: "بالقرب كنيسة ونُصب تذكاري." },
      { ru: "Каи́р — столи́ца Еги́пта.", en: "Cairo is the capital of Egypt.", ar: "القاهرة عاصمة مصر." },
      { ru: "В це́нтре река́ — Нил. Там о́чень краси́во!", en: "In the centre there's a river — the Nile. It's very beautiful there!", ar: "في وسط المدينة نهر — النيل. المكان هناك جميل جدًّا!" },
    ],
  },
  journal: {
    en: "Write 4–5 sentences about the centre of your city: what is there, what is on the left and on the right, and what is beautiful.",
    ar: "اكتب من ٤ إلى ٥ جمل عن وسط مدينتك: ما الموجود فيه، وما الذي على اليسار وعلى اليمين، وما الجميل فيه.",
  },
  culture: {
    en: "In old Russian кра́сный meant 'beautiful', so Кра́сная пло́щадь first meant 'the beautiful square', not 'the red square'. And a кремль is simply a fortress: several old Russian cities, such as Kazan and Novgorod, have one of their own — Moscow's is just the most famous.",
    ar: "في الروسية القديمة كانت كلمة кра́сный تعني «جميل»، فكان معنى Кра́сная пло́щадь في الأصل «الساحة الجميلة» لا «الساحة الحمراء». أمّا кремль فهو ببساطة قلعة: لعدد من المدن الروسية القديمة، مثل قازان ونوفغورود، كرملين خاصّ بها، وكرملين موسكو هو الأشهر فحسب.",
  },
  worksheet: {
    before: [
      {
        en: "Listen for places after в and на: на Кра́сной пло́щади, в це́нтре, на проспе́кте.",
        ar: "استمع إلى الأماكن بعد в وна: на Кра́сной пло́щади، в це́нтре، на проспе́кте.",
      },
      { en: "Catch the directions: спра́ва, сле́ва, ря́дом, далеко́, недалеко́.", ar: "التقط كلمات الاتجاه: спра́ва، сле́ва، ря́дом، далеко́، недалеко́." },
      { en: "At the end, listen for a time and a day of the week.", ar: "في النهاية، استمع إلى ساعة وإلى يوم من أيام الأسبوع." },
    ],
    questions: [
      {
        kind: "choice",
        prompt: { en: "Where are Ahmed and the guide?", ar: "أين أحمد والمرشدة؟" },
        options: ["on Red Square · في الساحة الحمراء", "in a museum · في متحف", "at the station · في المحطة"],
        answer: 0,
        why: { en: "Ira says: Мы на Кра́сной пло́щади.", ar: "تقول إيرا: Мы на Кра́сной пло́щади." },
      },
      {
        kind: "choice",
        prompt: { en: "What is on the right?", ar: "ما الذي على اليمين؟" },
        options: ["the Kremlin · الكرملين", "GUM · «غوم»", "the river · النهر"],
        answer: 0,
        why: { en: "Спра́ва Кремль, а сле́ва ГУМ.", ar: "تقول إيرا: Спра́ва Кремль, а сле́ва ГУМ." },
      },
      {
        kind: "choice",
        prompt: { en: "What is GUM?", ar: "ما هو «غوم»؟" },
        options: ["a church · كنيسة", "a shop · متجر", "a monument · نُصب تذكاري"],
        answer: 1,
        why: { en: "ГУМ — э́то магази́н.", ar: "تقول إيرا: ГУМ — э́то магази́н." },
      },
      {
        kind: "choice",
        prompt: { en: "What does Ahmed say about the church?", ar: "ماذا يقول أحمد عن الكنيسة؟" },
        options: ["It's very beautiful. · إنها جميلة جدًّا.", "It's far away. · إنها بعيدة.", "It's expensive. · إنها غالية."],
        answer: 0,
        why: { en: "Ahmed says: О́чень краси́во!", ar: "يقول أحمد: О́чень краси́во!" },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. Where does Ira live?", ar: "استمع. أين تسكن إيرا؟" },
        ru: "Нет, я живу́ на проспе́кте Верна́дского. Э́то далеко́.",
        listen: true,
        options: ["in the centre · في وسط المدينة", "far away, on an avenue · بعيدًا، في جادّة", "in Cairo · في القاهرة"],
        answer: 1,
        why: { en: "на проспе́кте = on an avenue; далеко́ = far.", ar: "на проспе́кте تعني في جادّة، وдалеко́ تعني بعيدًا." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. What time is it?", ar: "استمع. كم الساعة؟" },
        ru: "Сейча́с оди́ннадцать часо́в.",
        listen: true,
        options: ["10:00", "11:00", "12:00"],
        answer: 1,
        why: { en: "оди́ннадцать = 11.", ar: "оди́ннадцать تعني ١١." },
      },
      {
        kind: "choice",
        prompt: { en: "What is on the square on Saturday?", ar: "ماذا سيكون في الساحة يوم السبت؟" },
        options: ["a concert · حفلة موسيقية", "a lesson · درس", "a training session · تمرين رياضي"],
        answer: 0,
        why: { en: "В суббо́ту здесь, на пло́щади, конце́рт.", ar: "تقول إيرا: В суббо́ту здесь, на пло́щади, конце́рт." },
      },
      {
        kind: "choice",
        prompt: { en: "What do Moscow and Cairo have in common, according to Ira?", ar: "ما المشترك بين موسكو والقاهرة بحسب إيرا؟" },
        options: [
          "Both are capitals with a river. · كلتاهما عاصمة فيها نهر.",
          "Both have a Kremlin. · في كلتيهما كرملين.",
          "Both are far from the sea. · كلتاهما بعيدة عن البحر.",
        ],
        answer: 0,
        why: { en: "Каи́р — то́же столи́ца, и там то́же река́.", ar: "تقول إيرا: Каи́р — то́же столи́ца, и там то́же река́." },
      },
    ],
    retell: {
      en: "Retell the walk in 5–6 sentences: where Ahmed and Ira are, what is on the right and on the left, what is next to the church, where Ira lives and what happens on Saturday. Then describe the centre of your own city: Спра́ва…, сле́ва…, ря́дом…",
      ar: "أعد سرد الجولة في ٥–٦ جمل: أين أحمد وإيرا، وما الذي على اليمين وعلى اليسار، وما الذي بجوار الكنيسة، وأين تسكن إيرا، وماذا سيحدث يوم السبت. ثم صف وسط مدينتك: Спра́ва…، сле́ва…، ря́дом…",
    },
  },
};

const DAY_21: Day = {
  n: 21,
  week: 3,
  kind: "review",
  title: { ru: "Повторе́ние: неде́ля 3", en: "Review: week 3", ar: "مراجعة: الأسبوع ٣" },
  goals: [
    {
      en: "Check what you can do after week 3: say where things are, give prices, tell the time and describe where you live.",
      ar: "أن تختبر ما تستطيع فعله بعد الأسبوع الثالث: أن تقول أين توجد الأشياء، وتذكر الأسعار، وتخبر بالوقت، وتصف مكان سكنك.",
    },
    { en: "Pass the weekly test and the speaking exam.", ar: "أن تجتاز الاختبار الأسبوعي والاختبار الشفهي." },
  ],
  words: [],
  grammar: [
    {
      id: "d21-g1",
      title: { en: "Week 3 at a glance", ar: "الأسبوع الثالث في لمحة" },
      en: [
        "This week you learned to answer Где? with в / на + the prepositional, to name places in town, to count to 100 and give prices, to tell the time and name the days, and to say where you live and what you talk about (о + the prepositional).",
        "Prices and hours follow one rule: 1 → рубль / час, 2–4 → рубля́ / часа́, 5–20 → рубле́й / часо́в. Learn them together.",
      ],
      ar: [
        "تعلّمت هذا الأسبوع أن تجيب عن Где? بـ в / на + حالة حرف الجر، وأن تسمّي أماكن المدينة، وأن تعدّ حتى ١٠٠ وتذكر الأسعار، وأن تخبر بالوقت وتسمّي الأيام، وأن تقول أين تسكن وعمّا تتحدّث (о + حالة حرف الجر).",
        "الأسعار والساعات تتبع قاعدة واحدة: ١ ← рубль / час، ٢–٤ ← рубля́ / часа́، ٥–٢٠ ← рубле́й / часо́в. احفظها معًا.",
      ],
      tables: [
        {
          caption: { en: "The week's patterns", ar: "أنماط الأسبوع" },
          head: ["Pattern · النمط", "Example · مثال"],
          rows: [
            ["в / на + prepositional · в / на + حالة حرف الجر", "в Москве́, на у́лице, в Росси́и, на пло́щади"],
            ["до́ма · في البيت", "Ма́ма до́ма."],
            ["Где нахо́дится…?", "Где нахо́дится апте́ка? — Спра́ва."],
            ["Ско́лько сто́ит…?", "Два́дцать два рубля́."],
            ["Кото́рый час?", "Сейча́с пять часо́в."],
            ["в + day · в + اليوم", "в сре́ду, во вто́рник"],
            ["жить", "живу́, живёшь, живу́т"],
            ["о / об + prepositional · о / об + حالة حرف الجر", "о Москве́, об А́нне, обо мне"],
          ],
        },
      ],
      examples: [
        { ru: "Я живу́ в Москве́, а моя́ семья́ в Каи́ре.", en: "I live in Moscow, and my family is in Cairo.", ar: "أسكن في موسكو، وعائلتي في القاهرة." },
        { ru: "В пя́тницу в семь часо́в у меня́ уро́к.", en: "On Friday at seven o'clock I have a lesson.", ar: "يوم الجمعة في الساعة السابعة عندي درس." },
      ],
    },
  ],
  exercises: [],
  topics: ["prepositional", "numbers", "time"],
  search: ["Russian prepositional case exercises", "Russian numbers 1-100 listening practice", "telling time in Russian practice"],
  speaking: {
    scenario: {
      en: "The week 3 oral exam: describe your neighbourhood, give prices and tell the examiner your weekly timetable.",
      ar: "الاختبار الشفهي للأسبوع الثالث: صف حيّك، واذكر الأسعار، وأخبر الممتحن بجدولك الأسبوعي.",
    },
    tutorBrief:
      "Act as a friendly oral examiner for the week 3 test (days 15–19). Run four parts in Russian, one question at a time, using only words the learner knows: (1) neighbourhood — Где ты живёшь? Что рядом? Что слева, что справа?; (2) prices — play a kiosk seller, give three prices between 11 and 100 roubles and ask the learner to repeat each price and say дорого or дёшево; (3) time and timetable — ask Который час? about a time you state in digits, then Когда и во сколько у тебя уроки?; (4) о + the prepositional — О чём ты часто говоришь? Do not correct during the parts. At the end score each part 0–3 (0 = no answer, 1 = understood with many errors, 2 = clear with a few ending errors, 3 = fluent and accurate) for a total out of 12, then give, in English, the three most important corrections with the right forms and one thing the learner did well.",
    prompts: [
      { ru: "Я живу́ в це́нтре. Ря́дом парк и метро́.", en: "I live in the centre. There's a park and the metro close by.", ar: "أسكن في وسط المدينة. بالقرب حديقة ومترو." },
      { ru: "Со́рок пять рубле́й? Э́то дёшево.", en: "Forty-five roubles? That's cheap.", ar: "خمسة وأربعون روبلًا؟ هذا رخيص." },
      { ru: "В понеде́льник в семь часо́в у меня́ уро́к.", en: "On Monday at seven o'clock I have a lesson.", ar: "يوم الاثنين في الساعة السابعة عندي درس." },
      { ru: "Я ча́сто говорю́ о Еги́пте.", en: "I often talk about Egypt.", ar: "أتحدّث كثيرًا عن مصر." },
    ],
  },
  journal: {
    en: "Write 5 sentences about your week: where you live, where you work or study, what things cost, and your timetable (days and times).",
    ar: "اكتب ٥ جمل عن أسبوعك: أين تسكن، وأين تعمل أو تدرس، وكم أسعار الأشياء، وجدولك (الأيام والساعات).",
  },
  test: {
    sections: [
      {
        title: { en: "Words", ar: "الكلمات" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Which word means 'pharmacy'?", ar: "أيّ كلمة تعني «صيدلية»؟" },
            options: ["апте́ка", "по́чта", "больни́ца", "библиоте́ка"],
            answer: 0,
            why: {
              en: "апте́ка = pharmacy; по́чта = post office; больни́ца = hospital; библиоте́ка = library.",
              ar: "апте́ка صيدلية، وпо́чта مكتب البريد، وбольни́ца مستشفى، وбиблиоте́ка مكتبة.",
            },
          },
          {
            kind: "choice",
            prompt: { en: "Which day is Thursday?", ar: "أيّ يوم هو الخميس؟" },
            options: ["вто́рник", "четве́рг", "пя́тница", "среда́"],
            answer: 1,
            why: { en: "четве́рг is 'the fourth day' of the Russian week.", ar: "четве́рг هو «اليوم الرابع» في الأسبوع الروسي." },
          },
          {
            kind: "choice",
            prompt: { en: "Which number is 70?", ar: "أيّ عدد هو ٧٠؟" },
            options: ["семна́дцать", "се́мьдесят", "семь", "со́рок"],
            answer: 1,
            why: { en: "се́мьдесят = 70; семна́дцать = 17.", ar: "се́мьдесят تعني ٧٠، أمّا семна́дцать فتعني ١٧." },
          },
          {
            kind: "choice",
            prompt: { en: "What is the opposite of далеко́?", ar: "ما عكس далеко́؟" },
            options: ["ря́дом", "спра́ва", "до́рого", "ти́хо"],
            answer: 0,
            why: { en: "далеко́ = far; ря́дом = close by.", ar: "далеко́ تعني بعيدًا، وря́дом تعني قريبًا." },
          },
          {
            kind: "choice",
            prompt: { en: "Which word means 'neighbour' (a woman)?", ar: "أيّ كلمة تعني «جارة»؟" },
            options: ["сосе́д", "сосе́дка", "подру́га", "сестра́"],
            answer: 1,
            why: { en: "сосе́д is a man; сосе́дка is a woman.", ar: "сосе́д للرجل، وсосе́дка للمرأة." },
          },
        ],
      },
      {
        title: { en: "Grammar", ar: "القواعد" },
        items: [
          {
            kind: "fill",
            prompt: { en: "Put о́фис into the prepositional.", ar: "ضع о́фис في حالة حرف الجر." },
            ru: "Я рабо́таю в ___.",
            answers: ["о́фисе"],
            why: { en: "After a consonant, add -е: в о́фисе.", ar: "بعد الحرف الساكن تُضاف -е: в о́фисе." },
          },
          {
            kind: "fill",
            prompt: { en: "Put у́лица into the prepositional.", ar: "ضع у́лица في حالة حرف الجر." },
            ru: "Мы на ___.",
            answers: ["у́лице"],
            why: { en: "-а becomes -е: на у́лице.", ar: "تتحوّل -а إلى -е: на у́лице." },
          },
          {
            kind: "fill",
            prompt: { en: "Put Еги́пет into the prepositional.", ar: "ضع Еги́пет في حالة حرف الجر." },
            ru: "Ба́бушка живёт в ___.",
            answers: ["Еги́пте"],
            why: { en: "The е drops: в Еги́пте.", ar: "يسقط حرف е: в Еги́пте." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: The bread costs forty-two roubles.", ar: "أكمل: ثمن الخبز اثنان وأربعون روبلًا." },
            ru: "Хлеб сто́ит со́рок два ___.",
            answers: ["рубля́"],
            why: { en: "After 2, 3, 4 → рубля́.", ar: "بعد ٢، ٣، ٤ نقول рубля́." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: It's five o'clock now.", ar: "أكمل: الساعة الآن الخامسة." },
            ru: "Сейча́с пять ___.",
            answers: ["часо́в"],
            why: { en: "5–20 → часо́в.", ar: "من ٥ إلى ٢٠ نقول часо́в." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: We live in Moscow.", ar: "أكمل: نسكن في موسكو." },
            ru: "Мы ___ в Москве́.",
            answers: ["живём"],
            why: { en: "мы → живём.", ar: "مع мы نقول живём." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: Are you thinking about her?", ar: "أكمل: هل تفكّر فيها؟" },
            ru: "Ты ду́маешь о ___?",
            answers: ["ней"],
            why: { en: "After о, она́ becomes ней: о ней.", ar: "بعد о يصبح она́ هو ней: о ней." },
          },
        ],
      },
      {
        title: { en: "Listening", ar: "الاستماع" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Listen. What is the person looking for?", ar: "استمع. عمّ يبحث الشخص؟" },
            ru: "Скажи́те, пожа́луйста, где нахо́дится вокза́л?",
            listen: true,
            options: ["the railway station · محطة القطارات", "the post office · مكتب البريد", "the hotel · الفندق"],
            answer: 0,
            why: { en: "вокза́л = railway station.", ar: "вокза́л تعني محطة القطارات." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. What time is it?", ar: "استمع. كم الساعة؟" },
            ru: "Сейча́с два часа́ два́дцать мину́т.",
            listen: true,
            options: ["2:20", "12:20", "2:12", "20:02"],
            answer: 0,
            why: { en: "два часа́ = two o'clock; два́дцать мину́т = twenty minutes.", ar: "два часа́ تعني الساعة الثانية، وдва́дцать мину́т تعني عشرين دقيقة." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. How much is the juice?", ar: "استمع. بكم العصير؟" },
            ru: "Сок сто́ит девяно́сто рубле́й.",
            listen: true,
            options: ["90", "19", "9", "99"],
            answer: 0,
            why: { en: "девяно́сто = 90; девятна́дцать = 19.", ar: "девяно́сто تعني ٩٠، أمّا девятна́дцать فتعني ١٩." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. What happens on Saturday?", ar: "استمع. ماذا يحدث يوم السبت؟" },
            ru: "В суббо́ту у меня́ трениро́вка.",
            listen: true,
            options: ["a training session · تمرين رياضي", "a lesson · درس", "a concert · حفلة موسيقية"],
            answer: 0,
            why: { en: "трениро́вка = training session.", ar: "трениро́вка تعني تمرينًا رياضيًّا." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. Where does the speaker live?", ar: "استمع. أين يسكن المتحدّث؟" },
            ru: "Я живу́ в Каи́ре, на тре́тьем этаже́.",
            listen: true,
            options: [
              "in Cairo, on the 3rd floor · في القاهرة، في الطابق الثالث",
              "in Moscow, on the 3rd floor · في موسكو، في الطابق الثالث",
              "in Cairo, on the 5th floor · في القاهرة، في الطابق الخامس",
            ],
            answer: 0,
            why: { en: "в Каи́ре = in Cairo; на тре́тьем этаже́ = on the third floor.", ar: "в Каи́ре تعني في القاهرة، وна тре́тьем этаже́ تعني في الطابق الثالث." },
          },
        ],
      },
      {
        title: { en: "Sentences", ar: "الجمل" },
        items: [
          {
            kind: "order",
            prompt: { en: "Build the question: Where is the pharmacy?", ar: "كوّن السؤال: أين تقع الصيدلية؟" },
            tokens: ["нахо́дится", "Где", "апте́ка"],
            answers: ["Где нахо́дится апте́ка?"],
            why: { en: "Где нахо́дится + the place.", ar: "Где нахо́дится + المكان." },
          },
          {
            kind: "order",
            prompt: { en: "Build the question: How much is the water?", ar: "كوّن السؤال: بكم الماء؟" },
            tokens: ["сто́ит", "Ско́лько", "вода́"],
            answers: ["Ско́лько сто́ит вода́?"],
            why: { en: "Ско́лько сто́ит + one thing.", ar: "Ско́лько сто́ит + شيء واحد." },
          },
          {
            kind: "order",
            prompt: { en: "Build the sentence: I dream of Moscow.", ar: "كوّن الجملة: أحلم بموسكو." },
            tokens: ["мечта́ю", "о", "Я", "Москве́"],
            answers: ["Я мечта́ю о Москве́."],
            why: { en: "мечта́ть о + the prepositional.", ar: "мечта́ть о + حالة حرف الجر." },
          },
          {
            kind: "order",
            prompt: { en: "Build the sentence: On Tuesday I have a lesson.", ar: "كوّن الجملة: يوم الثلاثاء عندي درس." },
            tokens: ["вто́рник", "Во", "уро́к", "у", "меня́"],
            answers: ["Во вто́рник у меня́ уро́к.", "У меня́ уро́к во вто́рник."],
            why: { en: "во before вто́рник.", ar: "نقول во قبل вто́рник." },
          },
        ],
      },
      {
        title: { en: "Translation", ar: "الترجمة" },
        items: [
          {
            kind: "translate",
            prompt: { en: "I'm at home now.", ar: "أنا الآن في البيت." },
            answers: ["Я сейча́с до́ма.", "Сейча́с я до́ма.", "Я до́ма сейча́с."],
            why: { en: "до́ма needs no preposition.", ar: "до́ма لا تحتاج إلى حرف جر." },
          },
          {
            kind: "translate",
            prompt: { en: "The museum is not far, on the left.", ar: "المتحف ليس بعيدًا، على اليسار." },
            answers: ["Музе́й недалеко́, сле́ва.", "Музе́й сле́ва, недалеко́."],
            why: { en: "недалеко́ = not far; сле́ва = on the left.", ar: "недалеко́ تعني غير بعيد، وсле́ва تعني على اليسار." },
          },
          {
            kind: "translate",
            prompt: { en: "What time is it?", ar: "كم الساعة؟" },
            answers: ["Кото́рый час?", "Ско́лько вре́мени?", "Кото́рый сейча́с час?", "Ско́лько сейча́с вре́мени?"],
            why: { en: "Two ways to ask: Кото́рый час? and Ско́лько вре́мени?", ar: "طريقتان للسؤال: Кото́рый час? وСко́лько вре́мени?" },
          },
          {
            kind: "translate",
            prompt: { en: "Where do you live?", ar: "أين تسكن؟" },
            answers: ["Где ты живёшь?", "Где вы живёте?"],
            why: { en: "жить: ты живёшь, вы живёте.", ar: "من الفعل жить: ты живёшь، вы живёте." },
          },
          {
            kind: "translate",
            prompt: { en: "That's expensive!", ar: "هذا غالٍ!" },
            answers: ["Э́то до́рого!", "До́рого!"],
            why: { en: "до́рого = expensive; дёшево = cheap.", ar: "до́рого تعني غاليًا، وдёшево تعني رخيصًا." },
          },
        ],
      },
    ],
    speaking: [
      {
        en: "Describe your neighbourhood in 5 sentences: where you live, what is close by, and what is on the left and on the right.",
        ar: "صف حيّك في ٥ جمل: أين تسكن، وما القريب منك، وما الذي على اليسار وعلى اليمين.",
      },
      {
        en: "At a kiosk: ask the price of three things and say whether each one is expensive or cheap.",
        ar: "عند كشك: اسأل عن سعر ثلاثة أشياء، وقل إن كان كلّ منها غاليًا أو رخيصًا.",
      },
      {
        en: "Tell the examiner your weekly timetable: what you do on which days and at what time.",
        ar: "أخبر الممتحن بجدولك الأسبوعي: ماذا تفعل، وفي أيّ الأيام، وفي أيّ ساعة.",
      },
      {
        en: "Say what you often talk, read or dream about, using о / об: Я ча́сто говорю́ о…",
        ar: "قل عمّا تتحدّث أو تقرأ أو تحلم به كثيرًا، مستخدمًا о / об: Я ча́сто говорю́ о…",
      },
    ],
  },
};

export const WEEK_3: Day[] = [DAY_15, DAY_16, DAY_17, DAY_18, DAY_19, DAY_20, DAY_21];
