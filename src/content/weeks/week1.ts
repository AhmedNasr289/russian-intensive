import type { Day } from "../types.ts";

// Week 1 · Sounds and first words.
// Day 4 is the hand-written exemplar every lesson in the course follows; see docs/content-style-guide.md.

const DAY_1: Day = {
  n: 1,
  week: 1,
  kind: "lesson",
  title: { ru: "Алфави́т 1: знако́мые бу́квы", en: "Alphabet 1: familiar letters", ar: "الأبجدية ١: الحروف المألوفة" },
  goals: [
    {
      en: "Read the five 'true friends' А, К, М, О, Т and the seven 'false friends' В, Е, Н, Р, С, У, Х.",
      ar: "أن تقرأ «الأصدقاء الحقيقيين» الخمسة А، К، М، О، Т و«الأصدقاء المزيّفين» السبعة В، Е، Н، Р، С، У، Х.",
    },
    {
      en: "Read and say your first words — ма́ма, метро́, Москва́ — with the stress in the right place.",
      ar: "أن تقرأ كلماتك الأولى وتنطقها — ма́ма، метро́، Москва́ — والنبر في مكانه الصحيح.",
    },
    {
      en: "Point at things and say where they are: Вот метро́! Теа́тр там.",
      ar: "أن تشير إلى الأشياء وتقول أين هي: Вот метро́! Теа́тр там.",
    },
  ],
  words: [
    { id: "d1-01", ru: "ма́ма", say: "mAma", en: "mum, mom", ar: "ماما، أمّ", pos: "noun", g: "f", ex: { ru: "Вот ма́ма.", en: "Here's Mum.", ar: "ها هي ماما." } },
    {
      id: "d1-02", ru: "кот", say: "kot", en: "cat (a tomcat)", ar: "قطّ (ذكر)", pos: "noun", g: "m",
      ex: { ru: "Там кот.", en: "There's a cat over there.", ar: "هناك قطّ." },
      note: { en: "кот is a male cat, but Russians also use it for a cat in general.", ar: "кот قطّ ذكر، لكن الروس يستخدمونه أيضًا للقطّ عمومًا." },
    },
    { id: "d1-03", ru: "кто", say: "kto", en: "who", ar: "مَن", pos: "pron", ex: { ru: "Кто там?", en: "Who's there?", ar: "مَن الطارق؟" } },
    {
      id: "d1-04", ru: "так", say: "tak", en: "so, like this; right… (to start a sentence)", ar: "هكذا؛ إذن، حسنًا (في أول الجملة)", pos: "adv",
      ex: { ru: "Вот так!", en: "That's it! / Like this!", ar: "هكذا!" },
      note: { en: "Вот так + a noun = 'What a…!': Вот так торт! — What a cake!", ar: "Вот так + اسم = «يا له من…!»: Вот так торт! — يا لها من كعكة!" },
    },
    { id: "d1-05", ru: "там", say: "tam", en: "there, over there", ar: "هناك", pos: "adv", ex: { ru: "Метро́ там.", en: "The metro is over there.", ar: "المترو هناك." } },
    { id: "d1-06", ru: "нет", say: "nyet", en: "no", ar: "لا", pos: "part", ex: { ru: "Нет, теа́тр там.", en: "No, the theatre is over there.", ar: "لا، المسرح هناك." } },
    { id: "d1-07", ru: "вот", say: "vot", en: "here is, there is (when pointing)", ar: "ها هو، ها هي (للإشارة)", pos: "part", ex: { ru: "Вот Москва́!", en: "Here's Moscow!", ar: "ها هي موسكو!" } },
    { id: "d1-08", ru: "сок", say: "sok", en: "juice", ar: "عصير", pos: "noun", g: "m", ex: { ru: "Вот сок.", en: "Here's some juice.", ar: "ها هو العصير." } },
    { id: "d1-09", ru: "торт", say: "tort", en: "cake (a big layered one)", ar: "كعكة، تورتة", pos: "noun", g: "m", ex: { ru: "Вот так торт!", en: "What a cake!", ar: "يا لها من كعكة!" } },
    {
      id: "d1-10", ru: "метро́", say: "mitrO", en: "metro, underground", ar: "مترو الأنفاق", pos: "noun", g: "n",
      ex: { ru: "Метро́ там?", en: "Is the metro over there?", ar: "هل المترو هناك؟" },
      note: { en: "An international word: its form never changes.", ar: "كلمة عالمية لا يتغيّر شكلها أبدًا." },
    },
    { id: "d1-11", ru: "рестора́н", say: "ristarAn", en: "restaurant", ar: "مطعم", pos: "noun", g: "m", ex: { ru: "Там рестора́н.", en: "There's a restaurant over there.", ar: "هناك مطعم." } },
    { id: "d1-12", ru: "теа́тр", say: "tiAtr", en: "theatre", ar: "مسرح", pos: "noun", g: "m", ex: { ru: "Вот теа́тр.", en: "Here's the theatre.", ar: "ها هو المسرح." } },
    { id: "d1-13", ru: "Москва́", say: "maskvA", en: "Moscow", ar: "موسكو", pos: "noun", g: "f", ex: { ru: "Москва́! Ура́!", en: "Moscow! Hooray!", ar: "موسكو! مرحى!" } },
    { id: "d1-14", ru: "у́тро", say: "Utra", en: "morning", ar: "صباح", pos: "noun", g: "n" },
    { id: "d1-15", ru: "ура́", say: "urA", en: "hooray!", ar: "مرحى! (هتاف فرح)", pos: "interj", ex: { ru: "Торт? Ура́!", en: "Cake? Hooray!", ar: "كعكة؟ مرحى!" } },
    { id: "d1-16", ru: "ах", say: "akh", en: "ah! (surprise, delight)", ar: "آه! (للدهشة والإعجاب)", pos: "interj", ex: { ru: "Ах, Москва́!", en: "Ah, Moscow!", ar: "آه، موسكو!" } },
  ],
  grammar: [
    {
      id: "d1-g1",
      title: { en: "The alphabet and five true friends: А К М О Т", ar: "الأبجدية وخمسة أصدقاء حقيقيين: А К М О Т" },
      en: [
        "Russian is written in the Cyrillic alphabet: 33 letters — 10 vowels, 21 consonants and 2 signs with no sound of their own. You will learn them in three groups, one group a day.",
        "Start with five true friends: А, К, М, О and Т look like English letters and sound almost the same.",
        "Russian is read almost exactly as it is written, letter by letter. Take your time and sound out every letter: т-а-м → там.",
      ],
      ar: [
        "تُكتب الروسية بالأبجدية الكيريلية، وفيها ٣٣ حرفًا: ١٠ حروف صوتية، و٢١ حرفًا ساكنًا، وعلامتان لا صوت لهما. ستتعلّمها على ثلاث مجموعات، مجموعة كل يوم.",
        "ابدأ بخمسة «أصدقاء حقيقيين»: А و К و М و О و Т تشبه الحروف الإنجليزية وتُنطق مثلها تقريبًا.",
        "تُقرأ الروسية تقريبًا كما تُكتب، حرفًا حرفًا. خذ وقتك وانطق كل حرف: т-а-м ← там.",
      ],
      tables: [
        {
          caption: { en: "Five true friends", ar: "خمسة أصدقاء حقيقيين" },
          head: ["Letter · الحرف", "Name · الاسم", "Sound · الصوت", "Example · مثال"],
          rows: [
            ["А а", "a", "a in 'father' · مثل «ا»", "ма́ма (mAma)"],
            ["К к", "ka", "k · ك", "кот (kot)"],
            ["М м", "em", "m · م", "Москва́ (maskvA)"],
            ["О о", "o", "o in 'more' (when stressed) · o كما في «يوم» بالنطق المصري", "торт (tort)"],
            ["Т т", "te", "t · ت", "там (tam)"],
          ],
        },
      ],
      examples: [
        { ru: "Там кот.", en: "There's a cat over there.", ar: "هناك قطّ." },
        { ru: "Ма́ма там.", en: "Mum is over there.", ar: "ماما هناك." },
      ],
    },
    {
      id: "d1-g2",
      title: { en: "Seven false friends: В Е Н Р С У Х", ar: "سبعة أصدقاء مزيّفين: В Е Н Р С У Х" },
      en: [
        "Seven letters are false friends: they look like English letters but stand for other sounds. Learn them as brand-new letters.",
        "В is v, Е is ye as in 'yes', Н is n, Р is a rolled r, С is s, У is oo as in 'moon', and Х is kh.",
        "Two of them are easy for you: Р is the Arabic ر and Х is the Arabic خ.",
      ],
      ar: [
        "سبعة حروف هي «الأصدقاء المزيّفون»: تشبه الحروف الإنجليزية لكنها تدلّ على أصوات أخرى. تعلّمها كأنها حروف جديدة تمامًا.",
        "В تُنطق v، و Е تُنطق «يِ» كما في yes، و Н نون، و Р راء، و С سين، و У واو ممدودة كما في «نور»، و Х خاء.",
        "اثنان منها سهلان عليك: Р هي الراء العربية، و Х هي الخاء العربية.",
      ],
      tables: [
        {
          caption: { en: "Seven false friends", ar: "سبعة أصدقاء مزيّفين" },
          head: ["Letter · الحرف", "Name · الاسم", "Sound · الصوت", "Example · مثال"],
          rows: [
            ["В в", "ve", "v, not b · ڤ (v)", "вот (vot)"],
            ["Е е", "ye", "ye in 'yes' · يِ", "нет (nyet)"],
            ["Н н", "en", "n, not h · ن", "рестора́н (ristarAn)"],
            ["Р р", "er", "rolled r, not p · ر", "метро́ (mitrO)"],
            ["С с", "es", "s, never k · س", "сок (sok)"],
            ["У у", "u", "oo in 'moon', not y · واو ممدودة", "у́тро (Utra)"],
            ["Х х", "kha", "kh, not x · خ", "ах (akh)"],
          ],
        },
      ],
      examples: [
        { ru: "Нет, метро́ там.", en: "No, the metro is over there.", ar: "لا، المترو هناك." },
        { ru: "Ах, вот так торт!", en: "Ah, what a cake!", ar: "آه، يا لها من كعكة!" },
      ],
    },
    {
      id: "d1-g3",
      title: { en: "Reading words; no 'a' or 'the'", ar: "قراءة الكلمات؛ لا أدوات تعريف ولا تنكير" },
      en: [
        "Read syllable by syllable, then join them: ма́-ма, ме-тро́, ре-сто-ра́н. In a word with two or more vowels one vowel is stressed — said louder and longer. This course marks it with an accent: ма́ма, метро́.",
        "Russian has no articles. Кот means 'a cat' or 'the cat': the situation tells you which.",
        "There is no 'is' or 'are' in the present tense either: Метро́ там. — The metro is over there. And вот points at something: Вот торт! — Here's the cake!",
      ],
      ar: [
        "اقرأ مقطعًا مقطعًا ثم اجمع المقاطع: ма́-ма، ме-тро́، ре-сто-ра́н. في الكلمة التي فيها حرفان صوتيان أو أكثر يكون حرف واحد منبورًا، أي يُنطق بصوت أعلى وأطول. وهذه الدورة تضع عليه علامة: ма́ма، метро́.",
        "لا توجد في الروسية أدوات تعريف أو تنكير: кот تعني «قطّ» أو «القطّ»، والموقف يوضّح المقصود.",
        "ولا يوجد كذلك فعل «يكون» في الزمن الحاضر: Метро́ там. — المترو هناك. أمّا вот فتشير إلى شيء أمامك: Вот торт! — ها هي الكعكة!",
      ],
      tables: [
        {
          caption: { en: "Read the syllables", ar: "اقرأ المقاطع" },
          head: ["Consonant · الحرف الساكن", "+ а", "+ о", "+ у"],
          rows: [
            ["м", "ма", "мо", "му"],
            ["н", "на", "но", "ну"],
            ["т", "та", "то", "ту"],
            ["к", "ка", "ко", "ку"],
            ["с", "са", "со", "су"],
            ["р", "ра", "ро", "ру"],
            ["в", "ва", "во", "ву"],
          ],
        },
      ],
      examples: [
        { ru: "Вот кот.", en: "Here's a cat. / Here's the cat.", ar: "ها هو قطّ. / ها هو القطّ." },
        { ru: "Метро́ там.", en: "The metro is over there.", ar: "المترو هناك." },
        { ru: "Там рестора́н.", en: "There's a restaurant over there.", ar: "هناك مطعم." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Кто там?", en: "Who's there?", ar: "مَن الطارق؟" },
    setting: {
      en: "Sunday morning in Moscow. Anna and her brother Max (short for Maxim) are at home when someone knocks at the door.",
      ar: "صباح يوم أحد في موسكو. آنا وأخوها ماكس (اختصار اسم مكسيم) في البيت حين يطرق أحدهم الباب.",
    },
    lines: [
      { who: "A", name: "Макс", ru: "Кто там?", en: "Who's there?", ar: "مَن الطارق؟" },
      { who: "B", name: "Ма́ма", ru: "Ма́ма!", en: "It's Mum!", ar: "أنا، ماما!" },
      { who: "A", name: "Макс", ru: "Ма́ма! Ура́!", en: "Mum! Hooray!", ar: "ماما! مرحى!" },
      { who: "B", name: "Ма́ма", ru: "Вот торт. Вот сок.", en: "Here's a cake. And here's some juice.", ar: "هذه كعكة، وهذا عصير." },
      { who: "A", name: "Макс", ru: "Ах, вот так торт!", en: "Ah, what a cake!", ar: "آه، يا لها من كعكة!" },
      { who: "B", name: "А́нна", ru: "Макс! Кот там!", en: "Max! The cat's over there!", ar: "ماكس! القطّ هناك!" },
      { who: "A", name: "Макс", ru: "Кот? Нет! Торт!", en: "The cat? Oh no! The cake!", ar: "القطّ؟ لا! الكعكة!" },
      { who: "B", name: "А́нна", ru: "Нет, кот, нет!", en: "No, cat, no!", ar: "لا يا قطّ، لا!" },
    ],
  },
  pronunciation: {
    title: { en: "Sounds you already have: Р, Х — and the new В", ar: "أصوات تعرفها: Р و Х — و В الجديد" },
    en: [
      "Good news: two false friends are old friends for you. Р is a rolled r, just like the Arabic ر, and Х is the Arabic خ.",
      "В is v, a sound Arabic doesn't have: rest your upper teeth on your lower lip and let your voice buzz, as in ڤ. Don't say f or b.",
    ],
    ar: [
      "خبر سار: اثنان من «الأصدقاء المزيّفين» صديقان قديمان لك. فحرف Р راء مكرّرة مثل الراء العربية تمامًا، وحرف Х هو الخاء العربية.",
      "أمّا В فهو صوت v غير الموجود في العربية: ضع أسنانك العليا على شفتك السفلى ودع صوتك يهتزّ، كما في ڤ. لا تنطقه فاءً ولا باءً.",
    ],
    drills: [
      {
        ru: "рестора́н", say: "ristarAn",
        focus: { en: "Two rolled р, like ر; the stress is on the last syllable.", ar: "راءان مكرّرتان مثل الراء العربية، والنبر على المقطع الأخير." },
      },
      { ru: "метро́", say: "mitrO", focus: { en: "т and р together, then a strong о.", ar: "т و р معًا، ثم о قوية." } },
      { ru: "Ах, вот так торт!", say: "akh, vot tak tort!", focus: { en: "Х is a real خ; в is v.", ar: "Х خاء حقيقية، و в تُنطق v." } },
      { ru: "вот", say: "vot", focus: { en: "Teeth on lip, voice on: v, not f.", ar: "الأسنان على الشفة والصوت يعمل: v وليست فاءً." } },
      {
        ru: "Москва́", say: "maskvA",
        focus: { en: "к and в together, stress at the end; the first о sounds like a.", ar: "к و в معًا، والنبر في الآخر، وحرف о الأول يُنطق a." },
      },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Which letter sounds like 'v'?", ar: "أيّ حرف يُنطق مثل v (ڤ)؟" },
      options: ["В", "Н", "Р", "У"],
      answer: 0,
      why: { en: "В looks like a B but always sounds like v: вот.", ar: "В يشبه B لكنه يُنطق دائمًا v: вот." },
    },
    {
      kind: "choice",
      prompt: { en: "What sound does Н make?", ar: "ما الصوت الذي يمثّله Н؟" },
      options: ["n · ن", "h · هـ", "k · ك"],
      answer: 0,
      why: { en: "Н is n, as in нет.", ar: "Н نون، كما في нет." },
    },
    {
      kind: "choice",
      prompt: { en: "Which letter is the Arabic خ?", ar: "أيّ حرف هو الخاء العربية؟" },
      options: ["Х", "К", "С", "Т"],
      answer: 0,
      why: { en: "Х is kh, exactly like خ: ах.", ar: "Х تُنطق خاءً تمامًا: ах." },
    },
    {
      kind: "choice",
      prompt: { en: "Which letter is a rolled r, like ر?", ar: "أيّ حرف راء مثل الراء العربية؟" },
      options: ["Р", "В", "Н", "Е"],
      answer: 0,
      why: { en: "Р looks like p, but it is r: торт.", ar: "Р يشبه p لكنه راء: торт." },
    },
    {
      kind: "choice",
      prompt: { en: "What does У sound like?", ar: "كيف يُنطق У؟" },
      options: ["oo, as in 'moon' · «و» كما في «نور»", "y, as in 'yes' · «ي»", "a, as in 'father' · «ا»"],
      answer: 0,
      why: { en: "У is oo: у́тро.", ar: "У واو ممدودة: у́тро." },
    },
    {
      kind: "choice",
      prompt: { en: "Which word means 'restaurant'?", ar: "أيّ كلمة تعني «مطعم»؟" },
      options: ["рестора́н", "теа́тр", "метро́"],
      answer: 0,
      why: { en: "рестора́н reads r-e-s-t-o-r-a-n: an international word.", ar: "рестора́н تُقرأ r-e-s-t-o-r-a-n، وهي كلمة عالمية." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Which word do you hear?", ar: "استمع. أيّ كلمة تسمع؟" },
      ru: "теа́тр",
      listen: true,
      options: ["теа́тр", "торт", "там"],
      answer: 0,
      why: { en: "теа́тр has two syllables, stressed on а: tiAtr.", ar: "теа́тр فيها مقطعان، والنبر على а: tiAtr." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does Max ask?", ar: "استمع. عمّ يسأل ماكس؟" },
      ru: "Кто там?",
      listen: true,
      options: ["Who's there? · مَن الطارق؟", "Where's the cat? · أين القطّ؟", "What a cake! · يا لها من كعكة!"],
      answer: 0,
      why: { en: "Кто means 'who' and там means 'there'.", ar: "Кто تعني «مَن»، و там تعني «هناك»." },
    },
    {
      kind: "fill",
      prompt: { en: "Fill in the missing letter: mum.", ar: "أكمل الحرف الناقص: ماما." },
      ru: "м___ма",
      answers: ["а́"],
      why: { en: "ма́ма: the same syllable twice, stressed the first time.", ar: "ма́ма: المقطع نفسه مرّتين، والنبر على الأول." },
    },
    {
      kind: "fill",
      prompt: { en: "Fill in the missing letter: Moscow.", ar: "أكمل الحرف الناقص: موسكو." },
      ru: "Мос___ва́",
      answers: ["к"],
      why: { en: "Москва́: к and в sit together — kv.", ar: "Москва́: يلتقي к و в معًا — kv." },
    },
    {
      kind: "fill",
      prompt: { en: "Fill in the missing letter: no.", ar: "أكمل الحرف الناقص: لا." },
      ru: "н___т",
      answers: ["е"],
      why: { en: "Е after н sounds 'ye': nyet.", ar: "Е بعد н تُنطق «يِ»: nyet." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: No, the metro is over there.", ar: "كوّن الجملة: لا، المترو هناك." },
      tokens: ["там", "Нет", "метро́"],
      answers: ["Нет, метро́ там.", "Нет, там метро́."],
      why: { en: "No verb 'is' is needed: Метро́ там.", ar: "لا نحتاج إلى فعل «يكون»: Метро́ там." },
    },
    {
      kind: "order",
      prompt: { en: "Build the exclamation: Ah, what a cake!", ar: "كوّن جملة التعجّب: آه، يا لها من كعكة!" },
      tokens: ["так", "торт", "Ах", "вот"],
      answers: ["Ах, вот так торт!"],
      why: { en: "Вот так + a noun = 'What a…!'", ar: "Вот так + اسم = «يا له من…!»" },
    },
  ],
  topics: ["alphabet", "pronunciation"],
  search: ["Russian alphabet for beginners lesson 1", "Russian letters that look like English false friends"],
  speaking: {
    scenario: {
      en: "Reading aloud: the tutor shows short words built only from today's 12 letters. You read each one aloud and say what it means.",
      ar: "القراءة بصوت عالٍ: يعرض عليك المعلّم كلمات قصيرة مكوّنة فقط من حروف اليوم الاثني عشر، فتقرأ كل كلمة بصوت عالٍ وتقول معناها.",
    },
    tutorBrief:
      "You are a patient Russian reading coach. The learner can read only 12 letters so far: А К М О Т В Е Н Р С У Х. Show one word at a time, built only from these letters: first кот, там, так, нет, вот, сок, торт, кто, then мама, утро, метро, театр, ресторан, Москва. Ask the learner to read it aloud and then say what it means in English or Arabic. Correct the false friends kindly (В = v, Н = n, Р = rolled r, С = s, У = oo, Х = kh, Е = ye) and check which syllable is stressed. Keep your own Russian to these words plus ура and ах. Finish by having the learner read the whole list once more, faster, and praise one thing they did well.",
    prompts: [
      { ru: "Вот метро́!", en: "Here's the metro!", ar: "ها هو المترو!" },
      { ru: "Там теа́тр.", en: "There's a theatre over there.", ar: "هناك مسرح." },
      { ru: "Нет, там рестора́н.", en: "No, there's a restaurant over there.", ar: "لا، هناك مطعم." },
      { ru: "Кто там? Ма́ма?", en: "Who's there? Mum?", ar: "مَن الطارق؟ ماما؟" },
      { ru: "Москва́! Ура́!", en: "Moscow! Hooray!", ar: "موسكو! مرحى!" },
    ],
  },
  journal: {
    en: "Write 3–5 tiny sentences with вот and там, for example: Вот метро́. Кот там. Then copy today's 12 letters by hand, capital and small.",
    ar: "اكتب من ٣ إلى ٥ جمل قصيرة جدًا باستخدام вот و там، مثل: Вот метро́. Кот там. ثم انسخ بخطّ يدك حروف اليوم الاثني عشر، الكبيرة والصغيرة.",
  },
  culture: {
    en: "Every entrance to the Moscow metro is marked with a big red letter М — your first Russian letter in the wild. The metro opened in 1935, and many of its central stations look like underground palaces, with chandeliers, mosaics and marble.",
    ar: "يُميَّز كل مدخل لمترو موسكو بحرف М أحمر كبير — أول حرف روسي ستقابله في الشارع. افتُتح المترو عام ١٩٣٥، وتبدو كثير من محطاته المركزية كقصور تحت الأرض، بثريّاتها وفسيفسائها ورخامها.",
  },
};

const DAY_2: Day = {
  n: 2,
  week: 1,
  kind: "lesson",
  title: { ru: "Алфави́т 2: но́вые фо́рмы", en: "Alphabet 2: new shapes", ar: "الأبجدية ٢: أشكال جديدة" },
  goals: [
    { en: "Read 13 new letters: Б Г Д З И Й Л П Ф Э Ю Я Ё.", ar: "أن تقرأ ١٣ حرفًا جديدًا: Б Г Д З И Й Л П Ф Э Ю Я Ё." },
    {
      en: "Hear the difference between hard and soft vowels, and between п and б.",
      ar: "أن تميّز بين الحروف الصوتية الصلبة والليّنة، وبين п و б.",
    },
    { en: "Name things with Э́то… and ask where they are with Где…?", ar: "أن تسمّي الأشياء بـ Э́то… وتسأل عن مكانها بـ Где…؟" },
  ],
  words: [
    { id: "d2-01", ru: "да", say: "da", en: "yes", ar: "نعم", pos: "part", ex: { ru: "Да, э́то парк.", en: "Yes, it's a park.", ar: "نعم، هذه حديقة." } },
    {
      id: "d2-02", ru: "э́то", say: "Eta", en: "this is, that is, it is", ar: "هذا، هذه، ذلك", pos: "pron",
      ex: { ru: "Э́то банк.", en: "This is a bank.", ar: "هذا بنك." },
      note: { en: "Э́то never changes: Э́то па́па. Э́то вода́. Э́то фо́то.", ar: "Э́то لا تتغيّر أبدًا: Э́то па́па. Э́то вода́. Э́то фо́то." },
    },
    {
      id: "d2-03", ru: "па́па", say: "pApa", en: "dad", ar: "بابا، أب", pos: "noun", g: "m",
      ex: { ru: "Э́то па́па.", en: "This is Dad.", ar: "هذا بابا." },
      note: { en: "It ends in -а but is masculine: a dad is a man.", ar: "تنتهي بـ -а لكنها مذكّرة، فالأب رجل." },
    },
    { id: "d2-04", ru: "приве́т", say: "privyEt", en: "hi, hello (informal)", ar: "مرحبًا (غير رسمي)", pos: "interj", ex: { ru: "Приве́т, ма́ма!", en: "Hi, Mum!", ar: "مرحبًا يا أمّي!" } },
    { id: "d2-05", ru: "пока́", say: "pakA", en: "bye (informal)", ar: "إلى اللقاء (غير رسمي)", pos: "interj", ex: { ru: "Пока́, па́па!", en: "Bye, Dad!", ar: "إلى اللقاء يا أبي!" } },
    { id: "d2-06", ru: "где", say: "gdye", en: "where", ar: "أين", pos: "adv", ex: { ru: "Где метро́?", en: "Where's the metro?", ar: "أين المترو؟" } },
    { id: "d2-07", ru: "вода́", say: "vadA", en: "water", ar: "ماء", pos: "noun", g: "f", ex: { ru: "Вот вода́.", en: "Here's the water.", ar: "ها هو الماء." } },
    {
      id: "d2-08", ru: "фо́то", say: "fOta", en: "photo", ar: "صورة فوتوغرافية", pos: "noun", g: "n",
      ex: { ru: "Вот фо́то!", en: "Here's a photo!", ar: "ها هي صورة!" },
      note: { en: "Like метро́, фо́то never changes its form.", ar: "مثل метро́، لا يتغيّر شكل фо́то أبدًا." },
    },
    { id: "d2-09", ru: "парк", say: "park", en: "park", ar: "حديقة عامة", pos: "noun", g: "m", ex: { ru: "Парк там.", en: "The park is over there.", ar: "الحديقة هناك." } },
    { id: "d2-10", ru: "банк", say: "bank", en: "bank", ar: "بنك، مصرف", pos: "noun", g: "m", ex: { ru: "Где банк?", en: "Where's the bank?", ar: "أين البنك؟" } },
    { id: "d2-11", ru: "суп", say: "sup", en: "soup", ar: "حساء، شوربة", pos: "noun", g: "m", ex: { ru: "Э́то суп?", en: "Is this soup?", ar: "هل هذا حساء؟" } },
    { id: "d2-12", ru: "я́блоко", say: "yAblaka", en: "apple", ar: "تفاحة", pos: "noun", g: "n", ex: { ru: "Вот я́блоко.", en: "Here's an apple.", ar: "ها هي تفاحة." } },
    { id: "d2-13", ru: "зонт", say: "zont", en: "umbrella", ar: "مظلّة، شمسية", pos: "noun", g: "m", ex: { ru: "Зонт там.", en: "The umbrella is over there.", ar: "المظلّة هناك." } },
    { id: "d2-14", ru: "лифт", say: "lift", en: "lift, elevator", ar: "مصعد", pos: "noun", g: "m", ex: { ru: "Где лифт?", en: "Where's the lift?", ar: "أين المصعد؟" } },
    {
      id: "d2-15", ru: "ёлка", say: "yOlka", en: "fir tree; New Year tree", ar: "شجرة التنّوب؛ شجرة رأس السنة", pos: "noun", g: "f",
      ex: { ru: "Вот ёлка!", en: "Look, a fir tree!", ar: "ها هي شجرة تنّوب!" },
    },
    {
      id: "d2-16", ru: "ой", say: "oy", en: "oh!, oops!, ouch! (surprise or pain)", ar: "أوه! آي! (للدهشة أو الألم)", pos: "interj",
      ex: { ru: "Ой, кот!", en: "Oh, a cat!", ar: "أوه، قطّ!" },
    },
  ],
  grammar: [
    {
      id: "d2-g1",
      title: { en: "Eight new consonants: Б Г Д З Й Л П Ф", ar: "ثمانية حروف ساكنة جديدة: Б Г Д З Й Л П Ф" },
      en: [
        "Most of today's new consonants have an Arabic twin: Б = ب, Д = د, З = ز, Л = ل, Ф = ف. Г is always a hard g, like the Egyptian ج in جمل.",
        "Й is a short 'y' that never makes a syllable on its own: ой (oy) — like the ي in بَيْت.",
        "П is p, a sound Arabic doesn't have. Keep your voice off and let out a small puff of air: па́па. If you voice it, п becomes б and the word changes: пока́ (bye) → бока́ (sides).",
      ],
      ar: [
        "لمعظم الحروف الساكنة الجديدة اليوم توأم في العربية: Б = ب، Д = د، З = ز، Л = ل، Ф = ف. أمّا Г فهو دائمًا g، مثل الجيم المصرية في «جمل».",
        "Й ياء قصيرة لا تكوّن مقطعًا وحدها: ой (oy) — مثل الياء في «بَيْت».",
        "П هو صوت p غير الموجود في العربية. أوقف صوتك وأطلق دفعة هواء صغيرة: па́па. وإذا نطقته مجهورًا صار б وتغيّرت الكلمة: пока́ (إلى اللقاء) ← бока́ (جوانب).",
      ],
      tables: [
        {
          caption: { en: "New consonants", ar: "الحروف الساكنة الجديدة" },
          head: ["Letter · الحرف", "Name · الاسم", "Sound · الصوت", "Example · مثال"],
          rows: [
            ["Б б", "be", "b · ب", "банк (bank)"],
            ["Г г", "ge", "g in 'go' · جيم مصرية", "где (gdye)"],
            ["Д д", "de", "d · د", "да (da)"],
            ["З з", "ze", "z · ز", "зонт (zont)"],
            ["Й й", "i kratkoye (short i)", "short y in 'boy' · ياء ساكنة", "ой (oy)"],
            ["Л л", "el'", "l · ل", "лифт (lift)"],
            ["П п", "pe", "p, not b · p وليست ب", "па́па (pApa)"],
            ["Ф ф", "ef", "f · ف", "фо́то (fOta)"],
          ],
        },
      ],
      examples: [
        { ru: "Где банк?", en: "Where's the bank?", ar: "أين البنك؟" },
        { ru: "Пока́, па́па!", en: "Bye, Dad!", ar: "إلى اللقاء يا أبي!" },
      ],
    },
    {
      id: "d2-g2",
      title: { en: "Five new vowels and the vowel pairs", ar: "خمسة حروف صوتية جديدة وأزواج الحروف الصوتية" },
      en: [
        "Russian has ten vowels in five pairs. Each soft vowel is a 'y' sound plus a hard vowel: я = y + а, е = y + э, ё = y + о, ю = y + у. И is the soft partner of ы, a vowel you will meet tomorrow.",
        "At the start of a word, or after another vowel, you hear the 'y' clearly: я́блоко (yAblaka), ёлка (yOlka). After a consonant, the soft vowel makes that consonant soft instead: нет (nyet), лифт.",
        "Ё is always stressed, so words with ё never need an accent mark. In books and on signs the two dots are often left out, and ё looks like е.",
      ],
      ar: [
        "في الروسية عشرة حروف صوتية في خمسة أزواج. كل حرف ليّن = صوت «ي» + حرف صلب: я = «ي» + а، و е = «ي» + э، و ё = «ي» + о، و ю = «ي» + у. أمّا и فهو الشريك الليّن لـ ы، الذي ستتعرّف عليه غدًا.",
        "في أول الكلمة أو بعد حرف صوتي آخر تسمع «الياء» بوضوح: я́блоко (yAblaka)، ёлка (yOlka). أمّا بعد حرف ساكن فإن الحرف الليّن يليّن الساكن الذي قبله: нет (nyet)، лифт.",
        "Ё منبورة دائمًا، لذلك لا تحتاج الكلمات التي فيها ё إلى علامة نبر. وفي الكتب واللافتات كثيرًا ما تُحذف النقطتان فتبدو ё مثل е.",
      ],
      tables: [
        {
          caption: { en: "Vowel pairs: hard and soft", ar: "أزواج الحروف الصوتية: الصلبة والليّنة" },
          head: ["Hard · صلب", "Example · مثال", "Soft · ليّن", "Example · مثال"],
          rows: [
            ["а (a)", "па́па", "я (ya)", "я́блоко"],
            ["э (e)", "э́то", "е (ye)", "нет"],
            ["ы (y), day 3 · اليوم ٣", "—", "и (i)", "лифт"],
            ["о (o)", "фо́то", "ё (yo)", "ёлка"],
            ["у (u)", "суп", "ю (yu)", "Ю́ля (a name · اسم)"],
          ],
        },
      ],
      examples: [
        { ru: "Вот я́блоко.", en: "Here's an apple.", ar: "ها هي تفاحة." },
        { ru: "Э́то ёлка.", en: "This is a fir tree.", ar: "هذه شجرة تنّوب." },
      ],
    },
    {
      id: "d2-g3",
      title: { en: "Э́то… — this is…", ar: "Э́то… — هذا / هذه…" },
      en: [
        "Э́то means 'this is', 'that is' or 'it is', and it never changes: Э́то парк. — This is a park. Э́то вода́. — That's water.",
        "To ask a yes/no question, keep exactly the same words and raise your voice on the key word: Э́то банк? Answer Да, э́то банк. or Нет, э́то теа́тр.",
        "Где…? asks where something is, and again no verb is needed: — Где лифт? — Лифт там.",
      ],
      ar: [
        "Э́то تعني «هذا» أو «هذه» أو «ذلك»، ولا تتغيّر أبدًا: Э́то парк. — هذه حديقة. Э́то вода́. — هذا ماء.",
        "لطرح سؤال جوابه نعم أو لا، احتفظ بالكلمات نفسها تمامًا وارفع صوتك على الكلمة المهمة: Э́то банк? وأجب: Да, э́то банк. أو Нет, э́то теа́тр.",
        "و Где…? تسأل عن مكان الشيء، ولا نحتاج هنا أيضًا إلى فعل: — Где лифт? — Лифт там.",
      ],
      examples: [
        { ru: "— Э́то банк? — Нет, э́то теа́тр.", en: "— Is that a bank? — No, it's a theatre.", ar: "— هل هذا بنك؟ — لا، هذا مسرح." },
        { ru: "— Где зонт? — Зонт там.", en: "— Where's the umbrella? — It's over there.", ar: "— أين المظلّة؟ — المظلّة هناك." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Э́то парк?", en: "Is that a park?", ar: "هل هذه حديقة؟" },
    setting: {
      en: "Ahmed's first morning in Moscow. He video-calls his mother in Cairo and shows her the street. She studied in Moscow when she was young and loves to practise her Russian.",
      ar: "صباح أحمد الأول في موسكو. يُجري مكالمة فيديو مع أمّه في القاهرة ويريها الشارع. لقد درست في موسكو في شبابها، وتحبّ أن تتمرّن على الروسية.",
    },
    lines: [
      { who: "B", name: "Ма́ма", ru: "Приве́т, Ахме́д! Э́то Москва́?", en: "Hi, Ahmed! Is that Moscow?", ar: "مرحبًا يا أحمد! هل هذه موسكو؟" },
      { who: "A", name: "Ахме́д", ru: "Приве́т, ма́ма! Да, э́то Москва́.", en: "Hi, Mum! Yes, this is Moscow.", ar: "مرحبًا يا أمّي! نعم، هذه موسكو." },
      { who: "B", name: "Ма́ма", ru: "Э́то парк?", en: "Is that a park?", ar: "هل هذه حديقة؟" },
      { who: "A", name: "Ахме́д", ru: "Да, э́то парк. Вот ёлка!", en: "Yes, it's a park. Look, a fir tree!", ar: "نعم، هذه حديقة. وها هي شجرة تنّوب!" },
      { who: "B", name: "Ма́ма", ru: "Э́то банк?", en: "Is that a bank?", ar: "هل هذا بنك؟" },
      { who: "A", name: "Ахме́д", ru: "Нет, э́то теа́тр. Банк там.", en: "No, it's a theatre. The bank is over there.", ar: "لا، هذا مسرح. البنك هناك." },
      { who: "B", name: "Ма́ма", ru: "Где метро́?", en: "Where's the metro?", ar: "أين المترو؟" },
      { who: "A", name: "Ахме́д", ru: "Метро́ там. Вот фо́то!", en: "The metro's over there. Here's a photo!", ar: "المترو هناك. ها هي صورة!" },
      { who: "B", name: "Ма́ма", ru: "Ой! Вот так метро́!", en: "Oh! What a metro!", ar: "أوه! يا له من مترو!" },
      { who: "A", name: "Ахме́д", ru: "Пока́, ма́ма!", en: "Bye, Mum!", ar: "إلى اللقاء يا أمّي!" },
      { who: "B", name: "Ма́ма", ru: "Пока́!", en: "Bye!", ar: "إلى اللقاء!" },
    ],
  },
  pronunciation: {
    title: { en: "П is not Б", ar: "П ليست Б" },
    en: [
      "Arabic has no p, so Arabic speakers often say б where Russian needs п. Russians will usually understand you, but sometimes the word changes: пока́ means 'bye', бока́ means 'sides'.",
      "For п, close your lips, keep your voice off and release a small puff of air — hold your hand in front of your mouth to feel it. For б, your voice is on from the start and there is no puff.",
    ],
    ar: [
      "لا يوجد صوت p في العربية، لذلك كثيرًا ما ينطق العرب б حيث تحتاج الروسية إلى п. سيفهمك الروس غالبًا، لكن الكلمة قد تتغيّر أحيانًا: пока́ تعني «إلى اللقاء»، أمّا бока́ فتعني «جوانب».",
      "لنطق п أغلق شفتيك وأوقف صوتك ثم أطلق دفعة هواء صغيرة — ضع يدك أمام فمك لتشعر بها. أمّا في б فالصوت يعمل منذ البداية ولا توجد دفعة هواء.",
    ],
    drills: [
      { ru: "па́па", say: "pApa", focus: { en: "Two p's with a puff of air and no voice.", ar: "صوتا p مع دفعة هواء ودون جهر." } },
      { ru: "пока́ — бока́", say: "pakA, bakA", focus: { en: "'Bye', then 'sides': only the first sound changes.", ar: "«إلى اللقاء» ثم «جوانب»: يتغيّر الصوت الأول فقط." } },
      { ru: "парк — банк", say: "park, bank", focus: { en: "p, then b: feel the puff only on п.", ar: "p ثم b: تشعر بدفعة الهواء في п فقط." } },
      { ru: "суп", say: "sup", focus: { en: "A clean p at the end: close your lips firmly.", ar: "p واضحة في آخر الكلمة: أغلق شفتيك بإحكام." } },
      { ru: "фо́то — вода́", say: "fOta, vadA", focus: { en: "ф is f; в is v — let your voice buzz on в.", ar: "ф فاء، أمّا в فهي v — دع صوتك يهتزّ عليها." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Which letter sounds like p?", ar: "أيّ حرف يُنطق p؟" },
      options: ["П", "Б", "Р", "Д"],
      answer: 0,
      why: { en: "П is p — Arabic has no p, so practise it: па́па.", ar: "П تُنطق p، وهو صوت غير موجود في العربية فتدرّب عليه: па́па." },
    },
    {
      kind: "choice",
      prompt: { en: "Which letter is the Arabic ف?", ar: "أيّ حرف هو الفاء العربية؟" },
      options: ["Ф", "В", "П", "Б"],
      answer: 0,
      why: { en: "Ф is f: фо́то. В is v.", ar: "Ф فاء: фо́то. أمّا В فتُنطق v." },
    },
    {
      kind: "choice",
      prompt: { en: "Which letter sounds like the Egyptian ج in جمل?", ar: "أيّ حرف يُنطق مثل الجيم المصرية في «جمل»؟" },
      options: ["Г", "Д", "З", "Й"],
      answer: 0,
      why: { en: "Г is always a hard g, as in 'go': где.", ar: "Г جيم قاهرية دائمًا (g): где." },
    },
    {
      kind: "choice",
      prompt: { en: "Which letter sounds like 'ya'?", ar: "أيّ حرف يُنطق «يا»؟" },
      options: ["Я", "Ю", "Ё", "Э"],
      answer: 0,
      why: { en: "Я = y + а: я́блоко.", ar: "Я = «ي» + а: я́блоко." },
    },
    {
      kind: "choice",
      prompt: { en: "Why do words with ё never carry an accent mark?", ar: "لماذا لا توضع علامة النبر أبدًا على الكلمات التي فيها ё؟" },
      options: ["ё is always stressed · لأن ё منبورة دائمًا", "ё is never pronounced · لأن ё لا تُنطق", "ё only comes at the end of a word · لأن ё تأتي في آخر الكلمة فقط"],
      answer: 0,
      why: { en: "Ё is always stressed, so ёлка needs no mark.", ar: "Ё منبورة دائمًا، لذلك لا تحتاج ёлка إلى علامة." },
    },
    {
      kind: "choice",
      prompt: { en: "What does где mean?", ar: "ما معنى где؟" },
      options: ["where · أين", "here is · ها هو", "who · مَن"],
      answer: 0,
      why: { en: "Где метро́? — Where's the metro?", ar: "Где метро́? — أين المترو؟" },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the speaker ask?", ar: "استمع. عمّ يسأل المتكلّم؟" },
      ru: "Э́то банк?",
      listen: true,
      options: ["Is that a bank? · هل هذا بنك؟", "Where's the bank? · أين البنك؟", "The bank is over there. · البنك هناك."],
      answer: 0,
      why: { en: "The voice rises on банк, so it's a yes/no question.", ar: "يرتفع الصوت على банк، فهو سؤال جوابه نعم أو لا." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Which word do you hear?", ar: "استمع. أيّ كلمة تسمع؟" },
      ru: "я́блоко",
      listen: true,
      options: ["я́блоко", "ёлка", "фо́то"],
      answer: 0,
      why: { en: "я́блоко: stress on я; both о's sound like a: yAblaka.", ar: "я́блоко: النبر على я، وحرفا о يُنطقان a: yAblaka." },
    },
    {
      kind: "fill",
      prompt: { en: "Fill in the first letter: dad.", ar: "أكمل الحرف الأول: بابا." },
      ru: "___а́па",
      answers: ["п"],
      why: { en: "па́па starts with п (p), not б (b).", ar: "па́па تبدأ بـ п (p) وليس بـ б (b)." },
    },
    {
      kind: "fill",
      prompt: { en: "Fill in the missing letter: water.", ar: "أكمل الحرف الناقص: ماء." },
      ru: "во___а́",
      answers: ["д"],
      why: { en: "вода́: stress on the last syllable, so the first о sounds like a: vadA.", ar: "вода́: النبر على المقطع الأخير، لذلك يُنطق حرف о الأول a: vadA." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete the answer: — Is this a park? — Yes, it's a park.", ar: "أكمل الإجابة: — هل هذه حديقة؟ — نعم، هذه حديقة." },
      ru: "— Э́то парк? — Да, ___ парк.",
      answers: ["э́то"],
      why: { en: "Э́то + a noun = 'this is…', with no verb.", ar: "Э́то + اسم = «هذا…» دون فعل." },
    },
    {
      kind: "order",
      prompt: { en: "Build the answer: No, it's a bank.", ar: "كوّن الإجابة: لا، هذا بنك." },
      tokens: ["банк", "Нет", "э́то"],
      answers: ["Нет, э́то банк."],
      why: { en: "First нет, then э́то + the right word.", ar: "Нет أولًا، ثم э́то + الكلمة الصحيحة." },
    },
    {
      kind: "translate",
      prompt: { en: "Where's the lift?", ar: "أين المصعد؟" },
      answers: ["Где лифт?"],
      why: { en: "Где + the thing you are looking for.", ar: "Где + الشيء الذي تبحث عنه." },
    },
    {
      kind: "translate",
      prompt: { en: "Bye, Dad!", ar: "إلى اللقاء يا أبي!" },
      answers: ["Пока́, па́па!"],
      why: { en: "Пока́ is the friendly goodbye.", ar: "Пока́ وداع ودّي غير رسمي." },
    },
  ],
  topics: ["alphabet", "pronunciation", "greetings"],
  search: ["Russian alphabet soft vowels я е ё ю и", "Russian это what is this beginner lesson"],
  speaking: {
    scenario: {
      en: "Point and name: the tutor asks Э́то парк? and you answer Да, э́то парк. or Нет, э́то банк.",
      ar: "أشِر وسمِّ: يسألك المعلّم Э́то парк? فتجيب Да, э́то парк. أو Нет, э́то банк.",
    },
    tutorBrief:
      "Play Ahmed's mother on a video call from Cairo: she studied in Moscow long ago and loves practising Russian. Imagine the learner is showing you a Moscow street. Ask yes/no questions with Это...? about places and things the learner knows: парк, банк, театр, ресторан, метро, лифт, зонт, фото, яблоко, вода, суп, ёлка. Sometimes guess wrong on purpose so the learner must answer Нет, это... Also ask Где метро? or Где банк? and accept Там. Start with Привет and end with Пока. Use only these words plus да, нет, вот, ой. Correct п/б and в/ф gently, and make sure the voice rises in questions and falls in answers.",
    prompts: [
      { ru: "Да, э́то парк.", en: "Yes, it's a park.", ar: "نعم، هذه حديقة." },
      { ru: "Нет, э́то банк.", en: "No, it's a bank.", ar: "لا، هذا بنك." },
      { ru: "Где метро́?", en: "Where's the metro?", ar: "أين المترو؟" },
      { ru: "Метро́ там. Вот фо́то!", en: "The metro's over there. Here's a photo!", ar: "المترو هناك. ها هي صورة!" },
      { ru: "Ой, вот ёлка!", en: "Oh, look — a fir tree!", ar: "أوه، ها هي شجرة تنّوب!" },
    ],
  },
  journal: {
    en: "Write 3–5 sentences about things around you with Э́то…, and one question with Где…? — for example: Э́то я́блоко. Э́то вода́. Где лифт?",
    ar: "اكتب من ٣ إلى ٥ جمل عن أشياء حولك باستخدام Э́то…، وسؤالًا واحدًا بـ Где…؟ مثل: Э́то я́блоко. Э́то вода́. Где лифт?",
  },
  culture: {
    en: "The ёлка (fir tree) is the symbol of New Year in Russia, the biggest holiday of the year. Families decorate it for the night of 31 December, when Дед Моро́з (Grandfather Frost) brings the presents. Orthodox Christmas comes later, on 7 January.",
    ar: "شجرة ёлка رمز رأس السنة في روسيا، وهو أكبر عيد في العام. تزيّنها العائلات لليلة ٣١ ديسمبر، حين يحمل الهدايا Дед Моро́з (الجدّ الصقيع). أمّا عيد الميلاد الأرثوذكسي فيأتي لاحقًا، في ٧ يناير.",
  },
};

const DAY_3: Day = {
  n: 3,
  week: 1,
  kind: "lesson",
  title: { ru: "Алфави́т 3: шипя́щие и зна́ки", en: "Alphabet 3: hushing sounds and signs", ar: "الأبجدية ٣: أصوات الشين والعلامات" },
  goals: [
    {
      en: "Read the last eight letters: Ж Ш Щ Ч Ц Ы and the signs Ь and Ъ.",
      ar: "أن تقرأ آخر ثمانية حروف: Ж Ш Щ Ч Ц Ы والعلامتين Ь و Ъ.",
    },
    {
      en: "Hear stress and reduction: молоко́ sounds like malakO, and хлеб like khlyep.",
      ar: "أن تسمع النبر وإضعاف الحروف الصوتية: молоко́ تُنطق malakO، و хлеб تُنطق khlyep.",
    },
    {
      en: "Be polite in a shop: здра́вствуйте, пожа́луйста, спаси́бо, извини́те, до свида́ния.",
      ar: "أن تتحدّث بأدب في المتجر: здра́вствуйте، пожа́луйста، спаси́бо، извини́те، до свида́ния.",
    },
  ],
  words: [
    {
      id: "d3-01", ru: "здра́вствуйте", say: "zdrAstvuytye", en: "hello (polite; also to a group)", ar: "مرحبًا (تحية رسمية، وتُقال أيضًا للجماعة)", pos: "interj",
      ex: { ru: "Здра́вствуйте! Сок, пожа́луйста.", en: "Hello! Some juice, please.", ar: "مرحبًا! عصيرًا، من فضلك." },
      note: { en: "To a friend: Приве́т!", ar: "لصديق: Приве́т!" },
    },
    {
      id: "d3-02", ru: "до свида́ния", say: "da svidAniya", en: "goodbye (polite)", ar: "إلى اللقاء (بصيغة رسمية)", pos: "phrase",
      ex: { ru: "Спаси́бо! До свида́ния!", en: "Thank you! Goodbye!", ar: "شكرًا! إلى اللقاء!" },
      note: { en: "To a friend: Пока́!", ar: "لصديق: Пока́!" },
    },
    { id: "d3-03", ru: "спаси́бо", say: "spasIba", en: "thank you", ar: "شكرًا", pos: "interj", ex: { ru: "Нет, спаси́бо.", en: "No, thank you.", ar: "لا، شكرًا." } },
    {
      id: "d3-04", ru: "пожа́луйста", say: "pazhAlusta", en: "please; you're welcome; here you are", ar: "من فضلك؛ عفوًا (ردًّا على الشكر)؛ تفضّل", pos: "part",
      ex: { ru: "Чай, пожа́луйста.", en: "Tea, please.", ar: "شايًا، من فضلك." },
      note: {
        en: "The answer to спаси́бо is Пожа́луйста! (You're welcome!), and when you hand something over you say Вот, пожа́луйста. (Here you are.)",
        ar: "الردّ على спаси́бо هو Пожа́луйста! (عفوًا!)، وعندما تناول شخصًا شيئًا تقول: Вот, пожа́луйста. (تفضّل.)",
      },
    },
    {
      id: "d3-05", ru: "извини́те", say: "izvinItye", en: "excuse me; sorry (polite)", ar: "عذرًا؛ آسف (بصيغة رسمية)", pos: "phrase",
      ex: { ru: "Извини́те, где метро́?", en: "Excuse me, where's the metro?", ar: "عذرًا، أين المترو؟" },
      note: { en: "To a friend: Извини́!", ar: "لصديق: Извини́!" },
    },
    { id: "d3-06", ru: "хорошо́", say: "kharashO", en: "good, well; OK", ar: "جيّد، حسنًا", pos: "adv", ex: { ru: "— Чай? — Хорошо́, спаси́бо.", en: "— Tea? — OK, thanks.", ar: "— شاي؟ — حسنًا، شكرًا." } },
    { id: "d3-07", ru: "чай", say: "chay", en: "tea", ar: "شاي", pos: "noun", g: "m", ex: { ru: "Вот чай.", en: "Here's the tea.", ar: "ها هو الشاي." } },
    { id: "d3-08", ru: "молоко́", say: "malakO", en: "milk", ar: "حليب", pos: "noun", g: "n", ex: { ru: "Где молоко́?", en: "Where's the milk?", ar: "أين الحليب؟" } },
    { id: "d3-09", ru: "хлеб", say: "khlyep", en: "bread", ar: "خبز", pos: "noun", g: "m", ex: { ru: "Хлеб, пожа́луйста.", en: "Some bread, please.", ar: "خبزًا، من فضلك." } },
    { id: "d3-10", ru: "сыр", say: "syr", en: "cheese", ar: "جبن", pos: "noun", g: "m", ex: { ru: "Э́то сыр?", en: "Is this cheese?", ar: "هل هذا جبن؟" } },
    {
      id: "d3-11", ru: "маши́на", say: "mashIna", en: "car", ar: "سيارة", pos: "noun", g: "f", forms: "мн. ч. маши́ны",
      ex: { ru: "Там маши́на.", en: "There's a car over there.", ar: "هناك سيارة." },
    },
    { id: "d3-12", ru: "здесь", say: "zdyes'", en: "here", ar: "هنا", pos: "adv", ex: { ru: "Метро́ здесь.", en: "The metro is here.", ar: "المترو هنا." } },
    {
      id: "d3-13", ru: "день", say: "dyen'", en: "day", ar: "يوم، نهار", pos: "noun", g: "m", forms: "мн. ч. дни",
      ex: { ru: "Вот так день!", en: "What a day!", ar: "يا له من يوم!" },
      note: { en: "До́брый день! — Good afternoon! (a polite greeting)", ar: "До́брый день! — نهارك سعيد! (تحية مهذّبة)" },
    },
    {
      id: "d3-14", ru: "ночь", say: "noch'", en: "night", ar: "ليل، ليلة", pos: "noun", g: "f", forms: "мн. ч. но́чи",
      ex: { ru: "Здесь ночь, там день.", en: "It's night here and day there.", ar: "هنا ليل، وهناك نهار." },
      note: { en: "Споко́йной но́чи! — Good night!", ar: "Споко́йной но́чи! — تصبح على خير!" },
    },
    {
      id: "d3-15", ru: "Всего́ до́брого!", say: "fsivO dObrava!", en: "All the best! (a polite goodbye)", ar: "أتمنّى لك كل خير! (عند الوداع)", pos: "phrase",
      ex: { ru: "До свида́ния! Всего́ до́брого!", en: "Goodbye! All the best!", ar: "إلى اللقاء! أتمنّى لك كل خير!" },
    },
  ],
  grammar: [
    {
      id: "d3-g1",
      title: { en: "The last letters: Ж Ш Щ Ч Ц Ы, Ь and Ъ", ar: "الحروف الأخيرة: Ж Ш Щ Ч Ц Ы و Ь و Ъ" },
      en: [
        "Today you complete the alphabet. Four new letters are hushing sounds: Ж (zh), Ш (sh), Щ (a long, soft shch) and Ч (ch). Ц is ts, and Ы is a vowel with no English or Arabic match.",
        "For Ы, say и and then pull your tongue back without rounding your lips: сыр. For Ж, think of the ج of Beirut or Damascus, not the Egyptian ج.",
        "Ь and Ъ have no sound. The soft sign Ь softens the consonant before it: день (dyen'), ночь. The hard sign Ъ is rare: it adds a tiny break before я, е, ё, ю, as in подъе́зд (a building's entrance).",
      ],
      ar: [
        "اليوم تُكمل الأبجدية. أربعة حروف جديدة من أصوات الشين: Ж (zh)، و Ш (ش)، و Щ (شين طويلة ليّنة)، و Ч (تش). أمّا Ц فتُنطق «تس»، و Ы حرف صوتي لا مقابل له في الإنجليزية ولا في العربية.",
        "لنطق Ы قل и ثم اسحب لسانك إلى الخلف دون أن تضمّ شفتيك: сыр. ولنطق Ж فكّر في جيم أهل بيروت أو دمشق، لا الجيم المصرية.",
        "Ь و Ъ لا صوت لهما. العلامة الليّنة Ь تليّن الحرف الساكن الذي قبلها: день (dyen')، ночь. أمّا العلامة الصلبة Ъ فنادرة، وتضيف وقفة صغيرة قبل я، е، ё، ю، كما في подъе́зд (مدخل العمارة).",
      ],
      tables: [
        {
          caption: { en: "The last eight letters", ar: "الحروف الثمانية الأخيرة" },
          head: ["Letter · الحرف", "Name · الاسم", "Sound · الصوت", "Example · مثال"],
          rows: [
            ["Ж ж", "zhe", "s in 'pleasure' · ج شامية", "пожа́луйста (pazhAlusta)"],
            ["Ш ш", "sha", "sh · ش", "хорошо́ (kharashO)"],
            ["Щ щ", "shcha", "long soft sh · شين طويلة ليّنة", "борщ (borshch)"],
            ["Ч ч", "che", "ch in 'chair' · تش", "чай (chay)"],
            ["Ц ц", "tse", "ts in 'cats' · تس", "пи́цца (pItsa)"],
            ["Ы ы", "y", "и with the tongue pulled back · «ي» مع سحب اللسان", "сыр (syr)"],
            ["Ь ь", "мя́гкий знак · العلامة الليّنة", "no sound; softens the consonant before it · بلا صوت، يليّن ما قبله", "день (dyen')"],
            ["Ъ ъ", "твёрдый знак · العلامة الصلبة", "no sound; a tiny break · بلا صوت، وقفة صغيرة", "подъе́зд (padyEst)"],
          ],
        },
      ],
      examples: [
        { ru: "Чай, пожа́луйста.", en: "Tea, please.", ar: "شايًا، من فضلك." },
        { ru: "Маши́на здесь.", en: "The car is here.", ar: "السيارة هنا." },
      ],
    },
    {
      id: "d3-g2",
      title: { en: "Stress and vowel reduction", ar: "النبر وإضعاف الحروف الصوتية" },
      en: [
        "In a word with two or more vowels, one vowel is stressed: it is louder, longer and clear. The stress can fall on any syllable and there is no simple rule, so learn every word with its stress — this course always marks it: молоко́.",
        "Unstressed vowels become weaker. The key rule: unstressed о sounds like а. So молоко́ sounds like malakO and хорошо́ like kharashO. Unstressed е and я sound close to и: метро́ → mitrO.",
        "Get the stress wrong and Russians may not recognise even a word you know well, so always say the stressed vowel strongly.",
      ],
      ar: [
        "في الكلمة التي فيها حرفان صوتيان أو أكثر يكون حرف واحد منبورًا: يُنطق بصوت أعلى وأطول وأوضح. قد يقع النبر على أي مقطع ولا توجد قاعدة بسيطة، لذا احفظ كل كلمة مع نبرها — وهذه الدورة تضع علامته دائمًا: молоко́.",
        "تضعف الحروف الصوتية غير المنبورة. والقاعدة الأهم: حرف о غير المنبور يُنطق مثل а. لذلك تُنطق молоко́ هكذا: malakO، و хорошо́ هكذا: kharashO. أمّا е و я غير المنبورين فيُنطقان قريبًا من и: метро́ ← mitrO.",
        "إذا أخطأت في النبر فقد لا يتعرّف الروس حتى على كلمة تعرفها جيدًا، لذا انطق الحرف الصوتي المنبور بقوة دائمًا.",
      ],
      tables: [
        {
          caption: { en: "Written and spoken", ar: "المكتوب والمنطوق" },
          head: ["Written · المكتوب", "Sounds like · يُنطق", "Meaning · المعنى"],
          rows: [
            ["молоко́", "malakO", "milk · حليب"],
            ["хорошо́", "kharashO", "good · جيّد"],
            ["спаси́бо", "spasIba", "thank you · شكرًا"],
            ["я́блоко", "yAblaka", "apple · تفاحة"],
            ["вода́", "vadA", "water · ماء"],
          ],
        },
      ],
      examples: [
        { ru: "Молоко́, пожа́луйста.", en: "Milk, please.", ar: "حليبًا، من فضلك." },
        { ru: "— Спаси́бо! — Пожа́луйста!", en: "— Thank you! — You're welcome!", ar: "— شكرًا! — عفوًا!" },
      ],
    },
    {
      id: "d3-g3",
      title: { en: "Final devoicing: хлеб sounds like 'khlyep'", ar: "همس الحرف الأخير: хлеб تُنطق khlyep" },
      en: [
        "At the end of a word, a voiced consonant loses its voice: б sounds like п, д like т, г like к, в like ф, з like с, and ж like ш. So хлеб sounds like khlyep, and Ахме́д like akhmyEt.",
        "Arabic keeps ب and د voiced at the end of a word (كتاب، بلد), so this takes a little practice. The spelling never changes — only the sound does.",
      ],
      ar: [
        "في آخر الكلمة يفقد الحرف المجهور جهره: б تُنطق п، و д تُنطق т، و г تُنطق к، و в تُنطق ф، و з تُنطق с، و ж تُنطق ш. لذلك تُنطق хлеб هكذا: khlyep، و Ахме́д هكذا: akhmyEt.",
        "في العربية تبقى الباء والدال مجهورتين في آخر الكلمة (كتاب، بلد)، لذا يحتاج هذا إلى قليل من التدريب. والكتابة لا تتغيّر أبدًا، بل النطق فقط.",
      ],
      tables: [
        {
          caption: { en: "Voiced → voiceless at the end of a word", ar: "المجهور ← المهموس في آخر الكلمة" },
          head: ["Letter · الحرف", "At the end sounds like · يُنطق في الآخر", "Example · مثال"],
          rows: [
            ["б", "п (p)", "хлеб (khlyep)"],
            ["д", "т (t)", "Ахме́д (akhmyEt)"],
            ["г", "к (k)", "друг (druk), friend · صديق"],
            ["в", "ф (f)", "Че́хов (chEkhaf), a writer · كاتب"],
            ["з", "с (s)", "моро́з (marOs), frost · صقيع"],
            ["ж", "ш (sh)", "Пари́ж (parIsh), Paris · باريس"],
          ],
        },
      ],
      examples: [
        { ru: "Хлеб, пожа́луйста.", en: "Some bread, please.", ar: "خبزًا، من فضلك." },
        { ru: "Ахме́д здесь.", en: "Ahmed is here.", ar: "أحمد هنا." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Хлеб, пожа́луйста", en: "Some bread, please", ar: "خبزًا، من فضلك" },
    setting: {
      en: "Ahmed goes into a small shop near his student residence to buy breakfast. Natasha works at the counter.",
      ar: "يدخل أحمد متجرًا صغيرًا قرب سكن الطلاب ليشتري فطوره. ناتاشا تعمل عند الطاولة.",
    },
    lines: [
      { who: "A", name: "Ахме́д", ru: "Здра́вствуйте!", en: "Hello!", ar: "مرحبًا!" },
      { who: "B", name: "Ната́ша", ru: "Здра́вствуйте!", en: "Hello!", ar: "أهلًا وسهلًا!" },
      { who: "A", name: "Ахме́д", ru: "Хлеб, пожа́луйста.", en: "Some bread, please.", ar: "خبزًا، من فضلك." },
      { who: "B", name: "Ната́ша", ru: "Вот, пожа́луйста.", en: "Here you are.", ar: "تفضّل." },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо. Извини́те, где чай?", en: "Thank you. Excuse me, where's the tea?", ar: "شكرًا. عذرًا، أين الشاي؟" },
      { who: "B", name: "Ната́ша", ru: "Чай здесь.", en: "The tea is here.", ar: "الشاي هنا." },
      { who: "A", name: "Ахме́д", ru: "Хорошо́. Молоко́, пожа́луйста.", en: "Great. And some milk, please.", ar: "حسنًا. وحليبًا، من فضلك." },
      { who: "B", name: "Ната́ша", ru: "Вот молоко́. Сыр?", en: "Here's the milk. Any cheese?", ar: "تفضّل الحليب. هل تريد جبنًا؟" },
      { who: "A", name: "Ахме́д", ru: "Нет, спаси́бо. До свида́ния!", en: "No, thank you. Goodbye!", ar: "لا، شكرًا. إلى اللقاء!" },
      { who: "B", name: "Ната́ша", ru: "До свида́ния! Всего́ до́брого!", en: "Goodbye! All the best!", ar: "إلى اللقاء! أتمنّى لك كل خير!" },
    ],
  },
  pronunciation: {
    title: { en: "Long words made easy: здра́вствуйте, пожа́луйста", ar: "الكلمات الطويلة بسهولة: здра́вствуйте، пожа́луйста" },
    en: [
      "Здра́вствуйте looks frightening, but the first в is silent: say zdrAst-vuy-tye. Practise it in three parts, then join them.",
      "In everyday speech пожа́луйста is said pazhAlusta — the й drops out — and до свида́ния runs together like one word: dasvidAniya.",
    ],
    ar: [
      "تبدو здра́вствуйте مخيفة، لكن حرف в الأول لا يُنطق: قل zdrAst-vuy-tye. تدرّب عليها في ثلاثة أجزاء ثم اجمعها.",
      "في الكلام اليومي تُنطق пожа́луйста هكذا: pazhAlusta — إذ يسقط حرف й — وتُنطق до свида́ния كأنها كلمة واحدة: dasvidAniya.",
    ],
    drills: [
      { ru: "здра́вствуйте", say: "zdrAstvuytye", focus: { en: "The first в is silent: zdrAst + vuy + tye.", ar: "حرف в الأول صامت: zdrAst + vuy + tye." } },
      { ru: "пожа́луйста", say: "pazhAlusta", focus: { en: "Stress on жа; the й is not heard.", ar: "النبر على жа، وحرف й لا يُسمع." } },
      { ru: "спаси́бо", say: "spasIba", focus: { en: "Stress on си; the final о is a short a.", ar: "النبر على си، وحرف о الأخير a قصيرة." } },
      { ru: "до свида́ния", say: "da svidAniya", focus: { en: "One breath and one stress, on да.", ar: "نَفَس واحد ونبر واحد، على да." } },
      { ru: "сыр — хлеб", say: "syr, khlyep", focus: { en: "ы with the tongue pulled back; the final б sounds like p.", ar: "ы مع سحب اللسان إلى الخلف، و б الأخيرة تُنطق p." } },
      { ru: "извини́те", say: "izvinItye", focus: { en: "Four syllables, stress on ни.", ar: "أربعة مقاطع، والنبر على ни." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Which letter sounds like the Arabic ش?", ar: "أيّ حرف يُنطق مثل الشين العربية؟" },
      options: ["Ш", "Ж", "Ч", "Ц"],
      answer: 0,
      why: { en: "Ш is sh: хорошо́. Щ is a longer, softer sh.", ar: "Ш تُنطق ش: хорошо́. أمّا Щ فشين أطول وأليَن." },
    },
    {
      kind: "choice",
      prompt: { en: "Which letter sounds like 'ts'?", ar: "أيّ حرف يُنطق «تس»؟" },
      options: ["Ц", "Ч", "С", "Щ"],
      answer: 0,
      why: { en: "Ц = ts, as in пи́цца.", ar: "Ц = «تس»، كما في пи́цца." },
    },
    {
      kind: "choice",
      prompt: { en: "Which of these has no sound of its own?", ar: "أيّ هذه لا صوت له؟" },
      options: ["Ь", "Ы", "Й", "Ч"],
      answer: 0,
      why: { en: "Ь only softens the consonant before it: день.", ar: "Ь يليّن الحرف الساكن الذي قبله فقط: день." },
    },
    {
      kind: "choice",
      prompt: { en: "How is молоко́ pronounced?", ar: "كيف تُنطق молоко́؟" },
      options: ["malakO", "molokO", "malOka"],
      answer: 0,
      why: { en: "Only the stressed о sounds like o; the others sound like a.", ar: "حرف о المنبور وحده يُنطق o، والباقي يُنطق a." },
    },
    {
      kind: "choice",
      prompt: { en: "What do you hear at the end of хлеб?", ar: "ماذا تسمع في آخر хлеб؟" },
      options: ["p", "b", "v"],
      answer: 0,
      why: { en: "A final б loses its voice and sounds like п.", ar: "حرف б الأخير يفقد جهره فيُنطق п." },
    },
    {
      kind: "choice",
      prompt: { en: "Which letter is silent in здра́вствуйте?", ar: "أيّ حرف لا يُنطق في здра́вствуйте؟" },
      options: ["the first в · حرف в الأول", "the д · حرف д", "the й · حرف й"],
      answer: 0,
      why: { en: "Say zdrAstvuytye: the first в disappears.", ar: "قل zdrAstvuytye: يختفي حرف в الأول." },
    },
    {
      kind: "choice",
      prompt: { en: "You are leaving the shop. What do you say?", ar: "أنت تغادر المتجر. ماذا تقول؟" },
      options: ["До свида́ния!", "Здра́вствуйте!", "Извини́те!"],
      answer: 0,
      why: { en: "До свида́ния is the polite goodbye; здра́вствуйте is hello.", ar: "До свида́ния وداع مهذّب، أمّا здра́вствуйте فتحية." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does Ahmed say?", ar: "استمع. ماذا يقول أحمد؟" },
      ru: "Спаси́бо!",
      listen: true,
      options: ["Thank you! · شكرًا!", "Please. · من فضلك.", "Excuse me. · عذرًا."],
      answer: 0,
      why: { en: "спаси́бо — spasIba — thank you.", ar: "спаси́бо — spasIba — شكرًا." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is Ahmed looking for?", ar: "استمع. عمّ يبحث أحمد؟" },
      ru: "Извини́те, где чай?",
      listen: true,
      options: ["tea · الشاي", "bread · الخبز", "milk · الحليب"],
      answer: 0,
      why: { en: "Где чай? — Where is the tea?", ar: "Где чай? — أين الشاي؟" },
    },
    {
      kind: "fill",
      prompt: { en: "Fill in the missing letter: tea.", ar: "أكمل الحرف الناقص: شاي." },
      ru: "___ай",
      answers: ["ч"],
      why: { en: "Ч = ch: чай (chay).", ar: "Ч = «تش»: чай (chay)." },
    },
    {
      kind: "fill",
      prompt: { en: "Fill in the missing vowel: cheese.", ar: "أكمل الحرف الصوتي الناقص: جبن." },
      ru: "с___р",
      answers: ["ы"],
      why: { en: "сыр is spelled with ы, the vowel with no Arabic match.", ar: "تُكتب сыр بحرف ы، الحرف الصوتي الذي لا مقابل له في العربية." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Tea, please.", ar: "أكمل: شايًا، من فضلك." },
      ru: "Чай, ___.",
      answers: ["пожа́луйста"],
      why: { en: "пожа́луйста makes any request polite.", ar: "пожа́луйста تجعل أي طلب مهذّبًا." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: Excuse me, where is the bread?", ar: "كوّن السؤال: عذرًا، أين الخبز؟" },
      tokens: ["где", "хлеб", "Извини́те"],
      answers: ["Извини́те, где хлеб?"],
      why: { en: "Start politely with извини́те, then ask with где.", ar: "ابدأ بأدب بـ извини́те ثم اسأل بـ где." },
    },
    {
      kind: "translate",
      prompt: { en: "No, thank you. Goodbye!", ar: "لا، شكرًا. إلى اللقاء!" },
      answers: ["Нет, спаси́бо. До свида́ния!"],
      why: { en: "Нет, спаси́бо refuses politely; до свида́ния ends the visit.", ar: "Нет, спаси́бо رفض مهذّب، و до свида́ния تختم الزيارة." },
    },
  ],
  topics: ["alphabet", "stress", "pronunciation", "greetings", "handwriting"],
  search: ["Russian letters Ж Ш Щ Ч Ц Ы pronunciation", "Russian vowel reduction unstressed o", "Russian polite words здравствуйте пожалуйста спасибо"],
  speaking: {
    scenario: {
      en: "Polite basics in a shop: greet formally, ask for tea and bread with please, say thank you, apologise and say goodbye.",
      ar: "آداب التسوّق: حيِّ البائعة بصيغة رسمية، واطلب الشاي والخبز مع «من فضلك»، واشكرها، واعتذر، ثم ودّعها.",
    },
    tutorBrief:
      "Play Natasha, a shop assistant in a small Moscow grocery shop; the learner is a customer. Greet with Здравствуйте and wait for the learner to ask for items with пожалуйста. Use only these words: здравствуйте, пожалуйста, спасибо, извините, до свидания, всего доброго, хорошо, вот, где, здесь, там, да, нет, чай, хлеб, молоко, сыр, сок, вода, яблоко, суп. Hand things over with Вот, пожалуйста; once, say an item is там so the learner has to ask Извините, где...? Offer one extra item (Сыр?) so they can refuse with Нет, спасибо. Check the stress in молоко, хорошо, спасибо and the silent в in здравствуйте. End with До свидания! Всего доброго! and one sentence of praise in English.",
    prompts: [
      { ru: "Здра́вствуйте!", en: "Hello!", ar: "مرحبًا!" },
      { ru: "Хлеб, пожа́луйста.", en: "Some bread, please.", ar: "خبزًا، من فضلك." },
      { ru: "Извини́те, где молоко́?", en: "Excuse me, where's the milk?", ar: "عذرًا، أين الحليب؟" },
      { ru: "Нет, спаси́бо.", en: "No, thank you.", ar: "لا، شكرًا." },
      { ru: "Спаси́бо! До свида́ния!", en: "Thank you! Goodbye!", ar: "شكرًا! إلى اللقاء!" },
    ],
  },
  journal: {
    en: "Write a shop dialogue of 3–5 lines: greet, ask for two things with пожа́луйста, say thank you and goodbye. Then copy Ж Ш Щ Ч Ц Ы Ь Ъ by hand.",
    ar: "اكتب حوارًا في متجر من ٣ إلى ٥ أسطر: حيِّ البائع، واطلب شيئين مع пожа́луйста، ثم اشكره وودّعه. بعد ذلك انسخ بخطّ يدك Ж Ш Щ Ч Ц Ы Ь Ъ.",
  },
  culture: {
    en: "Russians traditionally welcome honoured guests with bread and salt: a round loaf with a little salt on top. Arabic has the same idea — «بيننا عيش وملح» — sharing bread and salt makes people close.",
    ar: "يستقبل الروس ضيوفهم المكرَّمين تقليديًا بالخبز والملح: رغيف مستدير يعلوه قليل من الملح. وفي العربية الفكرة نفسها — «بيننا عيش وملح» — فمشاركة الخبز والملح تقرّب بين الناس.",
  },
};

const DAY_4: Day = {
  n: 4,
  week: 1,
  kind: "lesson",
  title: { ru: "Знако́мство", en: "Introductions", ar: "التعارف" },
  goals: [
    {
      en: "Say your name and ask other people's names, formally and informally.",
      ar: "أن تقول اسمك وتسأل عن أسماء الآخرين بصيغة رسمية وغير رسمية.",
    },
    {
      en: "Use the personal pronouns я, ты, он, она́, мы, вы, они́.",
      ar: "أن تستخدم الضمائر الشخصية: я، ты، он، она́، мы، вы، они́.",
    },
    {
      en: "Choose between ты and вы, and say where you are from.",
      ar: "أن تختار بين ты و вы، وأن تقول من أين أنت.",
    },
  ],
  words: [
    { id: "d4-01", ru: "я", say: "ya", en: "I", ar: "أنا", pos: "pron", ex: { ru: "Я Ахме́д.", en: "I'm Ahmed.", ar: "أنا أحمد." } },
    {
      id: "d4-02", ru: "ты", say: "ty", en: "you (informal, one person)", ar: "أنتَ / أنتِ (غير رسمي، لشخص واحد)", pos: "pron",
      ex: { ru: "Ты А́нна?", en: "Are you Anna?", ar: "هل أنتِ آنا؟" },
    },
    {
      id: "d4-03", ru: "он", say: "on", en: "he; it (for a masculine noun)", ar: "هو (ويُستخدم أيضًا للأشياء المذكّرة)", pos: "pron",
      ex: { ru: "Он из Каи́ра.", en: "He is from Cairo.", ar: "هو من القاهرة." },
    },
    {
      id: "d4-04", ru: "она́", say: "anA", en: "she; it (for a feminine noun)", ar: "هي (وتُستخدم أيضًا للأشياء المؤنّثة)", pos: "pron",
      ex: { ru: "Она́ из Москвы́.", en: "She is from Moscow.", ar: "هي من موسكو." },
    },
    { id: "d4-05", ru: "мы", say: "my", en: "we", ar: "نحن", pos: "pron", ex: { ru: "Мы из Еги́пта.", en: "We are from Egypt.", ar: "نحن من مصر." } },
    {
      id: "d4-06", ru: "вы", say: "vy", en: "you (formal, or more than one person)", ar: "أنتم / حضرتك (للجمع أو للاحترام)", pos: "pron",
      ex: { ru: "Вы А́нна Серге́евна?", en: "Are you Anna Sergeyevna?", ar: "هل حضرتكِ آنا سيرغييفنا؟" },
    },
    { id: "d4-07", ru: "они́", say: "anI", en: "they", ar: "هم / هنّ", pos: "pron", ex: { ru: "Они́ из Москвы́.", en: "They are from Moscow.", ar: "هم من موسكو." } },
    {
      id: "d4-08", ru: "как", say: "kak", en: "how", ar: "كيف", pos: "adv",
      ex: { ru: "Как тебя́ зову́т?", en: "What's your name? (literally: how do they call you?)", ar: "ما اسمك؟ (حرفيًا: كيف يدعونك؟)" },
    },
    {
      id: "d4-09", ru: "Меня́ зову́т…", say: "minyA zavUt…", en: "My name is… (literally: they call me…)", ar: "اسمي… (حرفيًا: يدعونني…)", pos: "phrase",
      ex: { ru: "Меня́ зову́т Ахме́д.", en: "My name is Ahmed.", ar: "اسمي أحمد." },
    },
    { id: "d4-10", ru: "Как тебя́ зову́т?", say: "kak tibyA zavUt?", en: "What's your name? (informal)", ar: "ما اسمك؟ (غير رسمي)", pos: "phrase" },
    { id: "d4-11", ru: "Как вас зову́т?", say: "kak vas zavUt?", en: "What's your name? (formal)", ar: "ما اسم حضرتك؟ (رسمي)", pos: "phrase" },
    {
      id: "d4-12", ru: "О́чень прия́тно.", say: "Ochin' priyAtna.", en: "Nice to meet you. (literally: very pleasant)", ar: "تشرّفنا. / سعيد بمعرفتك.", pos: "phrase",
    },
    { id: "d4-13", ru: "И мне то́же.", say: "i mnye tOzhe.", en: "Nice to meet you too. / Me too.", ar: "وأنا كذلك. / وأنا أيضًا.", pos: "phrase" },
    {
      id: "d4-14", ru: "то́же", say: "tOzhe", en: "also, too", ar: "أيضًا", pos: "adv",
      ex: { ru: "Я то́же из Еги́пта.", en: "I'm from Egypt too.", ar: "أنا أيضًا من مصر." },
    },
    {
      id: "d4-15", ru: "а", say: "a", en: "and, while (contrast); and what about…?", ar: "أمّا / و (للمقابلة)", pos: "conj",
      ex: { ru: "Я Ахме́д. А ты?", en: "I'm Ahmed. And you?", ar: "أنا أحمد. وأنت؟" },
    },
    { id: "d4-16", ru: "и", say: "i", en: "and", ar: "و", pos: "conj", ex: { ru: "А́нна и Ахме́д", en: "Anna and Ahmed", ar: "آنا وأحمد" } },
    {
      id: "d4-17", ru: "Отку́да вы?", say: "atkUda vy?", en: "Where are you from? (formal)", ar: "من أين حضرتك؟", pos: "phrase",
      note: { en: "To a friend: Отку́да ты?", ar: "لصديق: Отку́да ты?" },
    },
    {
      id: "d4-18", ru: "Я из Еги́пта.", say: "ya iz yigIpta.", en: "I'm from Egypt.", ar: "أنا من مصر.", pos: "phrase",
      note: {
        en: "из + the country's name in the genitive case: из Росси́и, из Москвы́. Learn them as set phrases for now.",
        ar: "из + اسم البلد في حالة الإضافة: из Росси́и، из Москвы́. احفظها الآن كعبارات جاهزة.",
      },
    },
  ],
  grammar: [
    {
      id: "d4-g1",
      title: { en: "Saying your name: Меня́ зову́т…", ar: "كيف تقول اسمك: Меня́ зову́т…" },
      en: [
        "Russians don't say 'my name is'. They say Меня́ зову́т… — literally 'they call me…'.",
        "To ask someone's name, change меня́ (me) to тебя́ (you, informal) or вас (you, formal): Как тебя́ зову́т? / Как вас зову́т?",
        "A short answer with just the name is perfectly natural: — Как тебя́ зову́т? — А́нна.",
      ],
      ar: [
        "لا يقول الروس «اسمي…»، بل يقولون Меня́ зову́т… ومعناها الحرفي «يدعونني…».",
        "للسؤال عن اسم شخص آخر، ضع тебя́ (أنت، غير رسمي) أو вас (حضرتك، رسمي) مكان меня́: Как тебя́ зову́т? / Как вас зову́т?",
        "الإجابة القصيرة بالاسم وحده طبيعية تمامًا: — Как тебя́ зову́т? — А́нна.",
      ],
      examples: [
        { ru: "Меня́ зову́т Ива́н.", en: "My name is Ivan.", ar: "اسمي إيفان." },
        { ru: "— Как вас зову́т? — Меня́ зову́т О́льга Петро́вна.", en: "— What is your name? — My name is Olga Petrovna.", ar: "— ما اسم حضرتك؟ — اسمي أولغا بتروفنا." },
        { ru: "— Как тебя́ зову́т? — Макси́м.", en: "— What's your name? — Maxim.", ar: "— ما اسمك؟ — مكسيم." },
      ],
    },
    {
      id: "d4-g2",
      title: { en: "Personal pronouns and 'to be'", ar: "الضمائر الشخصية وفعل «يكون»" },
      en: [
        "Russian has the same persons as English. Он and она́ are also used for things: a masculine noun is он, a feminine noun is она́, a neuter noun is оно́.",
        "Russian has no verb 'to be' in the present tense. You simply put the words side by side: Я Ахме́д. — I am Ahmed. Она́ из Москвы́. — She is from Moscow.",
      ],
      ar: [
        "في الروسية الأشخاص أنفسهم كما في العربية والإنجليزية. ويُستخدم он و она́ أيضًا للأشياء: الاسم المذكّر يُشار إليه بـ он، والمؤنّث بـ она́، والمحايد بـ оно́.",
        "لا يوجد في الروسية فعل «يكون» في الزمن الحاضر، تمامًا كالجملة الاسمية في العربية: Я Ахме́д. — أنا أحمد. Она́ из Москвы́. — هي من موسكو.",
      ],
      tables: [
        {
          caption: { en: "Personal pronouns", ar: "الضمائر الشخصية" },
          head: ["Person · الشخص", "Singular · المفرد", "Plural · الجمع"],
          rows: [
            ["1st · المتكلّم", "я", "мы"],
            ["2nd · المخاطَب", "ты", "вы"],
            ["3rd · الغائب", "он / она́ / оно́", "они́"],
          ],
        },
      ],
      examples: [
        { ru: "Я Ахме́д, а он Макси́м.", en: "I'm Ahmed, and he is Maxim.", ar: "أنا أحمد، وهو مكسيم." },
        { ru: "Мы из Еги́пта, а они́ из Москвы́.", en: "We are from Egypt, and they are from Moscow.", ar: "نحن من مصر، وهم من موسكو." },
      ],
    },
    {
      id: "d4-g3",
      title: { en: "ты or вы?", ar: "ты أم вы؟" },
      en: [
        "Use ты with one person you know well: a friend, a child, a family member, a classmate your age.",
        "Use вы with one person you should be polite to — a stranger, a teacher, an older person, anyone at work — and always with two or more people.",
        "When in doubt, choose вы. A Russian friend may offer: Дава́й на ты! — 'Let's switch to ты!'",
      ],
      ar: [
        "استخدم ты مع شخص واحد تعرفه جيدًا: صديق، أو طفل، أو أحد أفراد العائلة، أو زميل في مثل سنّك.",
        "استخدم вы مع شخص واحد تخاطبه باحترام — غريب، أو معلّم، أو شخص أكبر سنًّا، أو أي شخص في العمل — ودائمًا مع شخصين أو أكثر.",
        "إذا لم تكن متأكدًا فاختر вы. قد يقترح عليك صديق روسي: Дава́й на ты! — «لنتخاطب بـ ты!»",
      ],
      examples: [
        { ru: "Ты А́нна?", en: "Are you Anna? (to a student)", ar: "هل أنتِ آنا؟ (لطالبة)" },
        { ru: "Вы О́льга Петро́вна?", en: "Are you Olga Petrovna? (to a teacher)", ar: "هل حضرتكِ أولغا بتروفنا؟ (لمعلّمة)" },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Пе́рвый день", en: "The first day", ar: "اليوم الأول" },
    setting: {
      en: "Ahmed, a new student from Cairo, meets Anna on the first day of a Russian course in Moscow. Then their teacher arrives.",
      ar: "أحمد، طالب جديد من القاهرة، يلتقي آنا في اليوم الأول من دورة اللغة الروسية في موسكو، ثم تصل معلّمتهما.",
    },
    lines: [
      { who: "A", name: "Ахме́д", ru: "Приве́т! Меня́ зову́т Ахме́д.", en: "Hi! My name is Ahmed.", ar: "مرحبًا! اسمي أحمد." },
      { who: "B", name: "А́нна", ru: "Приве́т, Ахме́д! А меня́ зову́т А́нна.", en: "Hi, Ahmed! And my name is Anna.", ar: "مرحبًا يا أحمد! وأنا اسمي آنا." },
      { who: "A", name: "Ахме́д", ru: "О́чень прия́тно! Отку́да ты?", en: "Nice to meet you! Where are you from?", ar: "تشرّفنا! من أين أنتِ؟" },
      { who: "B", name: "А́нна", ru: "И мне то́же. Я из Москвы́. А ты?", en: "Nice to meet you too. I'm from Moscow. And you?", ar: "وأنا كذلك. أنا من موسكو. وأنت؟" },
      { who: "A", name: "Ахме́д", ru: "Я из Еги́пта, из Каи́ра.", en: "I'm from Egypt, from Cairo.", ar: "أنا من مصر، من القاهرة." },
      { who: "B", name: "О́льга Петро́вна", ru: "Здра́вствуйте! Вы Ахме́д?", en: "Hello! Are you Ahmed?", ar: "أهلًا وسهلًا! هل أنت أحمد؟" },
      { who: "A", name: "Ахме́д", ru: "Да, я Ахме́д. Здра́вствуйте! Как вас зову́т?", en: "Yes, I'm Ahmed. Hello! What is your name?", ar: "نعم، أنا أحمد. أهلًا بحضرتكِ! ما اسم حضرتكِ؟" },
      { who: "B", name: "О́льга Петро́вна", ru: "Меня́ зову́т О́льга Петро́вна. О́чень прия́тно!", en: "My name is Olga Petrovna. Nice to meet you!", ar: "اسمي أولغا بتروفنا. تشرّفنا!" },
      { who: "A", name: "Ахме́д", ru: "И мне то́же!", en: "Nice to meet you too!", ar: "وأنا كذلك!" },
    ],
  },
  pronunciation: {
    title: { en: "Intonation: statement or question?", ar: "التنغيم: جملة خبرية أم سؤال؟" },
    en: [
      "A yes/no question uses exactly the same words as a statement. Only the voice changes: in a question the pitch jumps up on the key word and falls right after it.",
      "Вы Ахме́д. — a statement, the voice falls. Вы Ахме́д? — a question, the voice rises sharply on Ахме́д.",
      "Questions with a question word (как, кто, отку́да) do not rise: the question word already does the asking.",
    ],
    ar: [
      "سؤال «نعم/لا» يستخدم الكلمات نفسها التي تستخدمها الجملة الخبرية، والذي يتغيّر هو الصوت فقط: في السؤال ترتفع النغمة بحدّة على الكلمة المهمة ثم تهبط بعدها مباشرة.",
      "Вы Ахме́д. — جملة خبرية، ينخفض الصوت. Вы Ахме́д? — سؤال، يرتفع الصوت بحدّة على Ахме́д.",
      "الأسئلة التي تبدأ بأداة استفهام (как، кто، отку́да) لا يرتفع فيها الصوت، لأن أداة الاستفهام تؤدّي معنى السؤال.",
    ],
    drills: [
      { ru: "Вы Ахме́д?", say: "vy akhmyEt?", focus: { en: "Rise sharply on Ахме́д.", ar: "ارفع صوتك بحدّة على Ахме́д." } },
      { ru: "Вы Ахме́д.", say: "vy akhmyEt.", focus: { en: "Now fall: it is a statement.", ar: "الآن اخفض صوتك: إنها جملة خبرية." } },
      { ru: "Ты из Москвы́?", say: "ty iz maskvY?", focus: { en: "Rise on Москвы́.", ar: "ارفع صوتك على Москвы́." } },
      { ru: "Отку́да ты?", say: "atkUda ty?", focus: { en: "A question word: no rise; the stress falls on -ку-.", ar: "أداة استفهام: لا ارتفاع، والنبر على -ку-." } },
      {
        ru: "О́чень прия́тно.", say: "Ochin' priyAtna.",
        focus: { en: "The unstressed о at the end of прия́тно sounds like a short 'a'.", ar: "حرف о غير المنبور في آخر прия́тно يُنطق مثل «a» قصيرة." },
      },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "You meet your new teacher. How do you ask her name?", ar: "تقابل معلّمتك الجديدة. كيف تسألها عن اسمها؟" },
      options: ["Как тебя́ зову́т?", "Как вас зову́т?", "Меня́ зову́т А́нна."],
      answer: 1,
      why: { en: "A teacher gets the polite вас.", ar: "مع المعلّمة نستخدم صيغة الاحترام вас." },
    },
    {
      kind: "choice",
      prompt: { en: "Which pronoun replaces А́нна?", ar: "أيّ ضمير يحلّ محلّ А́нна؟" },
      options: ["он", "она́", "оно́", "они́"],
      answer: 1,
      why: { en: "А́нна is one woman: она́.", ar: "А́нна امرأة واحدة: она́." },
    },
    {
      kind: "choice",
      prompt: { en: "You speak to two friends at once. Which 'you' do you use?", ar: "تتحدّث إلى صديقين معًا. أيّ «أنت» تستخدم؟" },
      options: ["ты", "вы", "они́"],
      answer: 1,
      why: { en: "вы is also the plural 'you', even for friends.", ar: "вы هي أيضًا صيغة الجمع «أنتم»، حتى مع الأصدقاء." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: My name is Anna.", ar: "أكمل: اسمي آنا." },
      ru: "Меня́ ___ А́нна.",
      answers: ["зову́т"],
      why: { en: "Меня́ зову́т… — 'they call me…'.", ar: "Меня́ зову́т… تعني «يدعونني…»." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete the answer.", ar: "أكمل الإجابة." },
      ru: "— Как вас зову́т? — ___ зову́т Макси́м.",
      answers: ["Меня́"],
      why: { en: "The answer is about me: меня́.", ar: "الإجابة عن المتكلّم نفسه: меня́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Nice to meet you too.", ar: "أكمل: وأنا كذلك." },
      ru: "И мне ___.",
      answers: ["то́же"],
      why: { en: "И мне то́же. — literally 'and to me too'.", ar: "И мне то́же — حرفيًا «ولي أيضًا»." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: What's your name? (informal)", ar: "كوّن السؤال: ما اسمك؟ (غير رسمي)" },
      tokens: ["тебя́", "зову́т", "Как"],
      answers: ["Как тебя́ зову́т?"],
      why: { en: "The question word comes first: Как тебя́ зову́т?", ar: "أداة الاستفهام أولًا: Как тебя́ зову́т?" },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I'm from Egypt.", ar: "كوّن الجملة: أنا من مصر." },
      tokens: ["из", "Еги́пта", "Я"],
      answers: ["Я из Еги́пта."],
      why: { en: "Я из Еги́пта. — no verb is needed.", ar: "Я из Еги́пта — لا نحتاج إلى فعل." },
    },
    {
      kind: "translate",
      prompt: { en: "Nice to meet you.", ar: "تشرّفنا." },
      answers: ["О́чень прия́тно."],
      why: { en: "О́чень прия́тно — literally 'very pleasant'.", ar: "О́чень прия́тно — حرفيًا «لطيف جدًّا»." },
    },
    {
      kind: "translate",
      prompt: { en: "Where are you from? (formal)", ar: "من أين حضرتك؟" },
      answers: ["Отку́да вы?"],
      why: { en: "Formal 'you' is вы.", ar: "صيغة الاحترام هي вы." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the person ask?", ar: "استمع. عمّ يسأل الشخص؟" },
      ru: "Отку́да ты?",
      listen: true,
      options: ["What's your name? · ما اسمك؟", "Where are you from? · من أين أنت؟", "How are you? · كيف حالك؟"],
      answer: 1,
      why: { en: "Отку́да means 'from where'.", ar: "Отку́да تعني «من أين»." },
    },
  ],
  topics: ["introductions", "greetings", "questions"],
  search: ["Russian lesson introduce yourself меня зовут", "Russian ты vs вы explained"],
  speaking: {
    scenario: {
      en: "A welcome party for international students in Moscow. Introduce yourself to Anna, a student (use ты), and to Professor Olga Petrovna (use вы). Say your name and where you are from, and ask theirs.",
      ar: "حفل استقبال للطلاب الأجانب في موسكو. عرّف بنفسك لآنا، وهي طالبة (استخدم ты)، وللأستاذة أولغا بتروفنا (استخدم вы). قل اسمك ومن أين أنت، واسألهما عن اسميهما.",
    },
    tutorBrief:
      "Play two characters in turn. First be Anna (Анна), a friendly student from Moscow: greet the learner with привет, ask their name and where they are from using ты, and answer their questions. Then become Professor Olga Petrovna (Ольга Петровна): greet with здравствуйте and use вы. Keep to today's language: привет, здравствуйте, меня зовут, как тебя/вас зовут, откуда ты/вы, я из…, очень приятно, и мне тоже, а ты?, да, нет and the personal pronouns. If the learner uses ты with the professor, correct it kindly. Finish by praising one thing they did well.",
    prompts: [
      { ru: "Приве́т! Меня́ зову́т…", en: "Hi! My name is…", ar: "مرحبًا! اسمي…" },
      { ru: "Как тебя́ зову́т?", en: "What's your name?", ar: "ما اسمك؟" },
      { ru: "Здра́вствуйте! Как вас зову́т?", en: "Hello! What is your name? (formal)", ar: "مرحبًا! ما اسم حضرتك؟" },
      { ru: "Я из Еги́пта. А вы?", en: "I'm from Egypt. And you?", ar: "أنا من مصر. وحضرتك؟" },
      { ru: "О́чень прия́тно!", en: "Nice to meet you!", ar: "تشرّفنا!" },
    ],
  },
  journal: {
    en: "Write 3–5 sentences: your name, where you are from, and one sentence about a friend or a family member (Э́то… Он / Она́ из…).",
    ar: "اكتب من ٣ إلى ٥ جمل: اسمك، ومن أين أنت، وجملة عن صديق أو أحد أفراد عائلتك (Э́то… Он / Она́ из…).",
  },
  culture: {
    en: "In formal situations Russians use the first name plus the patronymic — the father's name with -ович (men) or -овна (women): О́льга Петро́вна, Ива́н Серге́евич. Friends use short forms: А́нна → А́ня, Алекса́ндр → Са́ша.",
    ar: "في المواقف الرسمية يستخدم الروس الاسم الأول مع اسم الأب مضافًا إليه -ович للرجال أو -овна للنساء: О́льга Петро́вна، Ива́н Серге́евич. أمّا الأصدقاء فيستخدمون أسماء مختصرة: А́нна ← А́ня، Алекса́ндр ← Са́ша.",
  },
};

const DAY_5: Day = {
  n: 5,
  week: 1,
  kind: "lesson",
  title: { ru: "Как дела́? Чи́сла от 0 до 10", en: "How are you? Numbers 0–10", ar: "كيف الحال؟ الأعداد من ٠ إلى ١٠" },
  goals: [
    {
      en: "Ask and answer Как дела́?, and return the question with А у тебя́? or А у вас?",
      ar: "أن تسأل Как дела́? وتجيب عنه، وتردّ السؤال بـ А у тебя́? أو А у вас?",
    },
    { en: "Count from 0 to 10 and say a phone number digit by digit.", ar: "أن تعدّ من ٠ إلى ١٠ وتقول رقم هاتف رقمًا رقمًا." },
    {
      en: "Ask yes/no questions with your voice alone, and answer Где? with здесь or там.",
      ar: "أن تطرح أسئلة «نعم/لا» بنبرة صوتك وحدها، وتجيب عن Где? بـ здесь أو там.",
    },
  ],
  words: [
    { id: "d5-01", ru: "ноль", say: "nol'", en: "zero", ar: "صفر", pos: "num", ex: { ru: "Два, ноль, шесть.", en: "Two, zero, six.", ar: "اثنان، صفر، ستة." } },
    {
      id: "d5-02", ru: "оди́н", say: "adIn", en: "one", ar: "واحد", pos: "num", forms: "одна́ (f), одно́ (n)",
      ex: { ru: "Оди́н, два, три!", en: "One, two, three!", ar: "واحد، اثنان، ثلاثة!" },
      note: { en: "When counting aloud, Russians often say раз instead: Раз, два, три!", ar: "عند العدّ بصوت عالٍ كثيرًا ما يقول الروس раз بدلًا منها: Раз, два, три!" },
    },
    {
      id: "d5-03", ru: "два", say: "dva", en: "two", ar: "اثنان", pos: "num", forms: "две (f)",
      ex: { ru: "Два, четы́ре, шесть, во́семь, де́сять!", en: "Two, four, six, eight, ten!", ar: "اثنان، أربعة، ستة، ثمانية، عشرة!" },
    },
    { id: "d5-04", ru: "три", say: "tri", en: "three", ar: "ثلاثة", pos: "num", ex: { ru: "Три, два, оди́н… ура́!", en: "Three, two, one… hooray!", ar: "ثلاثة، اثنان، واحد… مرحى!" } },
    { id: "d5-05", ru: "четы́ре", say: "chitYrye", en: "four", ar: "أربعة", pos: "num" },
    { id: "d5-06", ru: "пять", say: "pyat'", en: "five", ar: "خمسة", pos: "num" },
    { id: "d5-07", ru: "шесть", say: "shest'", en: "six", ar: "ستة", pos: "num" },
    { id: "d5-08", ru: "семь", say: "syem'", en: "seven", ar: "سبعة", pos: "num" },
    { id: "d5-09", ru: "во́семь", say: "vOsim'", en: "eight", ar: "ثمانية", pos: "num" },
    { id: "d5-10", ru: "де́вять", say: "dyEvit'", en: "nine", ar: "تسعة", pos: "num" },
    { id: "d5-11", ru: "де́сять", say: "dyEsit'", en: "ten", ar: "عشرة", pos: "num" },
    {
      id: "d5-12", ru: "Как дела́?", say: "kak dilA?", en: "How are you? (literally: how are things?)", ar: "كيف الحال؟ (حرفيًا: كيف الأمور؟)", pos: "phrase",
      ex: { ru: "Приве́т! Как дела́?", en: "Hi! How are you?", ar: "مرحبًا! كيف الحال؟" },
      note: { en: "More polite: Как у вас дела́?", ar: "بصيغة أكثر تهذيبًا: Как у вас дела́?" },
    },
    { id: "d5-13", ru: "отли́чно", say: "atlIchna", en: "great, excellent", ar: "ممتاز، رائع", pos: "adv", ex: { ru: "— Как дела́? — Отли́чно!", en: "— How are you? — Great!", ar: "— كيف الحال؟ — ممتاز!" } },
    { id: "d5-14", ru: "норма́льно", say: "narmAl'na", en: "OK, fine (literally: normally)", ar: "عادي، لا بأس", pos: "adv", ex: { ru: "Норма́льно, спаси́бо.", en: "OK, thanks.", ar: "عادي، شكرًا." } },
    { id: "d5-15", ru: "пло́хо", say: "plOkha", en: "bad, badly; not well", ar: "سيّئ، لستُ بخير", pos: "adv", ex: { ru: "— Как дела́? — Пло́хо…", en: "— How are you? — Not well…", ar: "— كيف الحال؟ — لستُ بخير…" } },
    {
      id: "d5-16", ru: "А у тебя́?", say: "a u tibyA?", en: "And you? (to a friend; literally: and at you?)", ar: "وأنت؟ (لصديق)", pos: "phrase",
      ex: { ru: "Хорошо́, спаси́бо. А у тебя́?", en: "Fine, thanks. And you?", ar: "بخير، شكرًا. وأنت؟" },
    },
    {
      id: "d5-17", ru: "А у вас?", say: "a u vas?", en: "And you? (polite, or to several people)", ar: "وحضرتك؟ / وأنتم؟", pos: "phrase",
      ex: { ru: "Отли́чно, спаси́бо. А у вас?", en: "Great, thank you. And you?", ar: "ممتاز، شكرًا. وحضرتك؟" },
    },
    { id: "d5-18", ru: "непло́хо", say: "niplOkha", en: "not bad", ar: "لا بأس، ليس سيّئًا", pos: "adv", ex: { ru: "Непло́хо, спаси́бо!", en: "Not bad, thanks!", ar: "لا بأس، شكرًا!" } },
    { id: "d5-19", ru: "Так себе́.", say: "tak sibyE.", en: "So-so.", ar: "بين بين.", pos: "phrase", ex: { ru: "— Как дела́? — Так себе́.", en: "— How are you? — So-so.", ar: "— كيف الحال؟ — بين بين." } },
    {
      id: "d5-20", ru: "Како́й у тебя́ но́мер?", say: "kakOy u tibyA nOmir?", en: "What's your (phone) number? (to a friend)", ar: "ما رقم هاتفك؟ (لصديق)", pos: "phrase",
      note: { en: "Polite: Како́й у вас но́мер?", ar: "بصيغة مهذّبة: Како́й у вас но́мер?" },
    },
    {
      id: "d5-21", ru: "Мой но́мер…", say: "moy nOmir…", en: "My number is…", ar: "رقمي…", pos: "phrase",
      ex: { ru: "Мой но́мер: во́семь, де́вять, три…", en: "My number is eight, nine, three…", ar: "رقمي: ثمانية، تسعة، ثلاثة…" },
    },
    {
      id: "d5-22", ru: "пра́вильно", say: "prAvil'na", en: "right, correct(ly)", ar: "صحيح، بشكل صحيح", pos: "adv",
      ex: { ru: "Да, пра́вильно!", en: "Yes, that's right!", ar: "نعم، صحيح!" },
      note: { en: "With a rising voice, Пра́вильно? means 'Is that right?'", ar: "إذا ارتفع صوتك في آخرها، فإن Пра́вильно? تعني «هل هذا صحيح؟»" },
    },
  ],
  grammar: [
    {
      id: "d5-g1",
      title: { en: "Как дела́? — and how to answer", ar: "Как дела́? — وكيف تجيب" },
      en: [
        "Как дела́? (literally 'how are things?') is the everyday 'How are you?'. It works with friends and people you know; with a teacher or anyone you call вы, make it more polite: Как у вас дела́?",
        "Answer with a word from the table, usually adding спаси́бо, and then return the question: А у тебя́? to a friend, А у вас? to someone you call вы.",
        "Russians tend to answer honestly, and норма́льно is a very common reply. If you say пло́хо, expect a caring follow-up question!",
      ],
      ar: [
        "Как дела́? (حرفيًا: «كيف الأمور؟») هي «كيف حالك؟» اليومية. تصلح مع الأصدقاء ومع من تعرفهم، ومع المعلّم أو أي شخص تخاطبه بـ вы اجعلها أكثر تهذيبًا: Как у вас дела́?",
        "أجب بكلمة من الجدول، وأضف غالبًا спаси́бо، ثم ردّ السؤال: А у тебя́? لصديق، و А у вас? لمن تخاطبه بـ вы.",
        "يميل الروس إلى الإجابة بصدق، و норма́льно إجابة شائعة جدًا. وإذا قلت пло́хо فتوقّع سؤالًا آخر يطمئنّ عليك!",
      ],
      tables: [
        {
          caption: { en: "From great to bad", ar: "من ممتاز إلى سيّئ" },
          head: ["Russian · بالروسية", "Meaning · المعنى"],
          rows: [
            ["Отли́чно!", "Great! · ممتاز!"],
            ["Хорошо́.", "Good, fine. · بخير."],
            ["Непло́хо.", "Not bad. · لا بأس."],
            ["Норма́льно.", "OK. · عادي."],
            ["Так себе́.", "So-so. · بين بين."],
            ["Пло́хо.", "Bad. · سيّئ."],
          ],
        },
      ],
      examples: [
        { ru: "— Как дела́? — Отли́чно, спаси́бо! А у тебя́?", en: "— How are you? — Great, thanks! And you?", ar: "— كيف الحال؟ — ممتاز، شكرًا! وأنت؟" },
        { ru: "— Как у вас дела́? — Непло́хо, спаси́бо. А у вас?", en: "— How are you? (polite) — Not bad, thank you. And you?", ar: "— كيف حال حضرتك؟ — لا بأس، شكرًا. وحضرتك؟" },
      ],
    },
    {
      id: "d5-g2",
      title: { en: "Numbers 0–10 and phone numbers", ar: "الأعداد من ٠ إلى ١٠ وأرقام الهاتف" },
      en: [
        "Learn 0–10 by heart: every bigger number, price and time is built from them.",
        "Give a phone number digit by digit: 8 915 206… — во́семь, де́вять, оди́н, пять, два, ноль, шесть… Russians themselves usually read a number in groups (915 as one number), but digit by digit is always understood.",
        "When counting out loud — one, two, three, go! — Russians often say раз instead of оди́н: Раз, два, три!",
      ],
      ar: [
        "احفظ الأعداد من ٠ إلى ١٠ عن ظهر قلب: منها تُبنى كل الأعداد الأكبر والأسعار والأوقات.",
        "قُل رقم الهاتف رقمًا رقمًا: 8 915 206… — во́семь، де́вять، оди́н، пять، два، ноль، шесть… يقرأ الروس أنفسهم الرقم عادةً في مجموعات (915 كعدد واحد)، لكن النطق رقمًا رقمًا مفهوم دائمًا.",
        "عند العدّ بصوت عالٍ — واحد، اثنان، ثلاثة، انطلق! — كثيرًا ما يقول الروس раз بدلًا من оди́н: Раз, два, три!",
      ],
      tables: [
        {
          caption: { en: "Numbers 0–10", ar: "الأعداد من ٠ إلى ١٠" },
          head: ["Digit · الرقم", "Russian · بالروسية", "Say · النطق"],
          rows: [
            ["0 · ٠", "ноль", "nol'"],
            ["1 · ١", "оди́н", "adIn"],
            ["2 · ٢", "два", "dva"],
            ["3 · ٣", "три", "tri"],
            ["4 · ٤", "четы́ре", "chitYrye"],
            ["5 · ٥", "пять", "pyat'"],
            ["6 · ٦", "шесть", "shest'"],
            ["7 · ٧", "семь", "syem'"],
            ["8 · ٨", "во́семь", "vOsim'"],
            ["9 · ٩", "де́вять", "dyEvit'"],
            ["10 · ١٠", "де́сять", "dyEsit'"],
          ],
        },
      ],
      examples: [
        { ru: "Оди́н, два, три, четы́ре, пять!", en: "One, two, three, four, five!", ar: "واحد، اثنان، ثلاثة، أربعة، خمسة!" },
        { ru: "Мой но́мер: во́семь, де́вять, оди́н, пять…", en: "My number is eight, nine, one, five…", ar: "رقمي: ثمانية، تسعة، واحد، خمسة…" },
      ],
    },
    {
      id: "d5-g3",
      title: { en: "Yes/no questions and Где? — здесь / там", ar: "أسئلة «نعم/لا» و Где? — здесь / там" },
      en: [
        "As you saw on day 4, a yes/no question uses the same words as a statement; only the voice changes. А́нна здесь. — Anna is here. А́нна здесь? — Is Anna here?",
        "The voice rises on the word you are really asking about. In А́нна здесь? a rise on здесь asks 'is she here?'; a rise on А́нна asks 'is it Anna who is here?'",
        "Где? asks where. The short answer is здесь (here) or там (there), with no verb: — Где метро́? — Там.",
      ],
      ar: [
        "كما رأيت في اليوم الرابع، يستخدم سؤال «نعم/لا» كلمات الجملة الخبرية نفسها، والذي يتغيّر هو الصوت فقط: А́нна здесь. — آنا هنا. А́нна здесь? — هل آنا هنا؟",
        "يرتفع الصوت على الكلمة التي تسأل عنها فعلًا. في А́нна здесь? إذا ارتفع الصوت على здесь فأنت تسأل «هل هي هنا؟»، وإذا ارتفع على А́нна فأنت تسأل «هل آنا هي الموجودة هنا؟»",
        "Где? تسأل عن المكان، والإجابة القصيرة: здесь (هنا) أو там (هناك)، دون فعل: — Где метро́? — Там.",
      ],
      examples: [
        { ru: "— А́нна здесь? — Да, здесь.", en: "— Is Anna here? — Yes, she is.", ar: "— هل آنا هنا؟ — نعم، هنا." },
        { ru: "— Где Макси́м? — Он там.", en: "— Where's Maxim? — He's over there.", ar: "— أين مكسيم؟ — هو هناك." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Како́й у тебя́ но́мер?", en: "What's your number?", ar: "ما رقم هاتفك؟" },
    setting: {
      en: "Before class. Olga Petrovna greets Ahmed, then Anna arrives, and the two classmates swap phone numbers.",
      ar: "قبل الدرس. تحيّي أولغا بتروفنا أحمد، ثم تصل آنا فيتبادل الزميلان رقمي هاتفيهما.",
    },
    lines: [
      { who: "B", name: "О́льга Петро́вна", ru: "Здра́вствуйте, Ахме́д! Как дела́?", en: "Hello, Ahmed! How are you?", ar: "مرحبًا يا أحمد! كيف الحال؟" },
      { who: "A", name: "Ахме́д", ru: "Здра́вствуйте! Хорошо́, спаси́бо. А у вас?", en: "Hello! Fine, thank you. And you?", ar: "أهلًا بحضرتكِ! بخير، شكرًا. وحضرتكِ؟" },
      { who: "B", name: "О́льга Петро́вна", ru: "Непло́хо, спаси́бо.", en: "Not bad, thank you.", ar: "لا بأس، شكرًا." },
      { who: "A", name: "Ахме́д", ru: "Приве́т, А́нна! Как дела́?", en: "Hi, Anna! How are things?", ar: "مرحبًا يا آنا! كيف الحال؟" },
      { who: "B", name: "А́нна", ru: "Норма́льно. А у тебя́?", en: "OK. And you?", ar: "عادي. وأنت؟" },
      { who: "A", name: "Ахме́д", ru: "Отли́чно! А́нна, како́й у тебя́ но́мер?", en: "Great! Anna, what's your number?", ar: "ممتاز! آنا، ما رقم هاتفك؟" },
      {
        who: "B", name: "А́нна", ru: "Во́семь, де́вять, оди́н, пять, два, ноль, шесть…",
        en: "Eight, nine, one, five, two, zero, six…", ar: "ثمانية، تسعة، واحد، خمسة، اثنان، صفر، ستة…",
      },
      {
        who: "A", name: "Ахме́д", ru: "Во́семь, де́вять, оди́н, пять, два, ноль, шесть…",
        en: "Eight, nine, one, five, two, zero, six…", ar: "ثمانية، تسعة، واحد، خمسة، اثنان، صفر، ستة…",
      },
      { who: "B", name: "А́нна", ru: "…три, семь, четы́ре, де́вять.", en: "…three, seven, four, nine.", ar: "…ثلاثة، سبعة، أربعة، تسعة." },
      { who: "A", name: "Ахме́д", ru: "Три, семь, четы́ре, де́вять. Пра́вильно?", en: "Three, seven, four, nine. Is that right?", ar: "ثلاثة، سبعة، أربعة، تسعة. صحيح؟" },
      { who: "B", name: "А́нна", ru: "Да, пра́вильно! А како́й у тебя́ но́мер?", en: "Yes, that's right! And what's your number?", ar: "نعم، صحيح! وما رقم هاتفك أنت؟" },
      {
        who: "A", name: "Ахме́д", ru: "Мой но́мер: во́семь, де́вять, шесть, шесть, ноль, три, оди́н, во́семь, пять, два, семь.",
        en: "My number is eight, nine, six, six, zero, three, one, eight, five, two, seven.",
        ar: "رقمي: ثمانية، تسعة، ستة، ستة، صفر، ثلاثة، واحد، ثمانية، خمسة، اثنان، سبعة.",
      },
    ],
  },
  pronunciation: {
    title: { en: "Soft endings: пять, семь, де́сять", ar: "النهايات الليّنة: пять، семь، де́сять" },
    en: [
      "Seven numbers end in a soft consonant, marked by ь: ноль, пять, шесть, семь, во́семь, де́вять, де́сять. Finish them with the middle of your tongue raised towards the roof of your mouth, as if a tiny 'y' were about to follow.",
      "Don't add a vowel after the soft ending: say pyat', not pyati. And keep the stress in its place: четы́ре, во́семь.",
    ],
    ar: [
      "سبعة أعداد تنتهي بحرف ساكن ليّن تدلّ عليه ь: ноль، пять، шесть، семь، во́семь، де́вять، де́сять. اختمها برفع وسط لسانك نحو سقف الحلق، كأن «ياء» صغيرة ستتبعها.",
      "لا تُضف حرفًا صوتيًا بعد النهاية الليّنة: قل pyat' وليس pyati. واحرص على النبر في مكانه: четы́ре، во́семь.",
    ],
    drills: [
      { ru: "пять", say: "pyat'", focus: { en: "A soft т at the end and no extra vowel.", ar: "т ليّنة في الآخر، دون حرف صوتي زائد." } },
      { ru: "семь", say: "syem'", focus: { en: "A soft м: lips closed, tongue raised.", ar: "м ليّنة: الشفتان مغلقتان واللسان مرفوع." } },
      { ru: "во́семь", say: "vOsim'", focus: { en: "Stress on во; the е is a short i.", ar: "النبر على во، و е تُنطق i قصيرة." } },
      { ru: "де́вять — де́сять", say: "dyEvit', dyEsit'", focus: { en: "Nine and ten differ in one sound: в or с.", ar: "تسعة وعشرة تختلفان في صوت واحد: в أو с." } },
      { ru: "четы́ре", say: "chitYrye", focus: { en: "Stress on ы: chi-TY-rye.", ar: "النبر على ы: chi-TY-rye." } },
      { ru: "Как дела́?", say: "kak dilA?", focus: { en: "A question word: the voice falls on дела́, with no rise.", ar: "سؤال بأداة استفهام: ينخفض الصوت على дела́ دون ارتفاع." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Which number is семь?", ar: "أيّ عدد هو семь؟" },
      options: ["7", "6", "8", "9"],
      answer: 0,
      why: { en: "семь = 7; шесть = 6, во́семь = 8.", ar: "семь = ٧، و шесть = ٦، و во́семь = ٨." },
    },
    {
      kind: "choice",
      prompt: { en: "How do you say 4?", ar: "كيف تقول ٤؟" },
      options: ["четы́ре", "три", "пять", "шесть"],
      answer: 0,
      why: { en: "четы́ре, with the stress on ы.", ar: "четы́ре، والنبر على ы." },
    },
    {
      kind: "choice",
      prompt: { en: "A friend asks Как дела́? You feel great. What do you say?", ar: "يسألك صديق Как дела́? وأنت في أحسن حال. ماذا تقول؟" },
      options: ["Отли́чно!", "Пло́хо.", "Так себе́."],
      answer: 0,
      why: { en: "Отли́чно = great, the top of the scale.", ar: "Отли́чно = ممتاز، أعلى درجات السلّم." },
    },
    {
      kind: "choice",
      prompt: { en: "You have answered your teacher's Как дела́? Now return the question politely.", ar: "أجبت عن سؤال معلّمتك Как дела́? والآن ردّ عليها السؤال بأدب." },
      options: ["А у вас?", "А у тебя́?", "Как тебя́ зову́т?"],
      answer: 0,
      why: { en: "Someone you call вы gets А у вас?", ar: "من تخاطبه بـ вы تقول له: А у вас?" },
    },
    {
      kind: "choice",
      prompt: { en: "Which answer means 'so-so'?", ar: "أيّ إجابة تعني «بين بين»؟" },
      options: ["Так себе́.", "Непло́хо.", "Норма́льно."],
      answer: 0,
      why: { en: "Так себе́ is neither good nor bad.", ar: "Так себе́ تعني: لا جيّد ولا سيّئ." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Which number do you hear?", ar: "استمع. أيّ عدد تسمع؟" },
      ru: "де́вять",
      listen: true,
      options: ["9", "10", "5", "7"],
      answer: 0,
      why: { en: "де́вять (dyEvit') is 9; де́сять (dyEsit') is 10.", ar: "де́вять (dyEvit') تعني ٩، و де́сять (dyEsit') تعني ١٠." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Which digits do you hear?", ar: "استمع. أيّ أرقام تسمع؟" },
      ru: "во́семь, де́вять, оди́н, пять",
      listen: true,
      options: ["8 9 1 5", "8 9 5 1", "6 9 1 5"],
      answer: 0,
      why: { en: "во́семь 8, де́вять 9, оди́н 1, пять 5.", ar: "الأرقام بالترتيب: во́семь ٨، де́вять ٩، оди́н ١، пять ٥." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: How are you?", ar: "أكمل: كيف الحال؟" },
      ru: "Как ___?",
      answers: ["дела́"],
      why: { en: "Как дела́? — literally 'how are things?'", ar: "Как дела́? — حرفيًا «كيف الأمور؟»" },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: And you? (to a friend)", ar: "أكمل: وأنت؟ (لصديق)" },
      ru: "А у ___?",
      answers: ["тебя́"],
      why: { en: "A friend is ты, so: А у тебя́?", ar: "الصديق نخاطبه بـ ты، لذلك نقول: А у тебя́?" },
    },
    {
      kind: "fill",
      prompt: { en: "Write the missing number.", ar: "اكتب العدد الناقص." },
      ru: "оди́н, два, ___, четы́ре",
      answers: ["три"],
      why: { en: "1, 2, 3, 4: оди́н, два, три, четы́ре.", ar: "العدّ من ١ إلى ٤: оди́н، два، три، четы́ре." },
    },
    {
      kind: "fill",
      prompt: { en: "Write the next number.", ar: "اكتب العدد التالي." },
      ru: "семь, во́семь, ___, де́сять",
      answers: ["де́вять"],
      why: { en: "7, 8, 9, 10: … де́вять, де́сять.", ar: "العدّ من ٧ إلى ١٠: … де́вять، де́сять." },
    },
    {
      kind: "order",
      prompt: { en: "Build the answer: Fine, thanks. And you?", ar: "كوّن الإجابة: بخير، شكرًا. وأنت؟" },
      tokens: ["спаси́бо", "А", "Хорошо́", "у", "тебя́"],
      answers: ["Хорошо́, спаси́бо. А у тебя́?", "Спаси́бо, хорошо́. А у тебя́?"],
      why: { en: "Answer first, then return the question with А у тебя́?", ar: "أجب أولًا، ثم ردّ السؤال بـ А у тебя́?" },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: What's your number?", ar: "كوّن السؤال: ما رقم هاتفك؟" },
      tokens: ["но́мер", "у", "Како́й", "тебя́"],
      answers: ["Како́й у тебя́ но́мер?", "Како́й но́мер у тебя́?"],
      why: { en: "Како́й ('which') comes first; у тебя́ means 'you have'.", ar: "Како́й («أيّ») في البداية، و у тебя́ تعني «لديك»." },
    },
    {
      kind: "translate",
      prompt: { en: "Not bad, thanks.", ar: "لا بأس، شكرًا." },
      answers: ["Непло́хо, спаси́бо.", "Спаси́бо, непло́хо."],
      why: { en: "Непло́хо — literally 'not badly'.", ar: "Непло́хо — حرفيًا «ليس سيّئًا»." },
    },
  ],
  topics: ["numbers", "greetings", "questions"],
  search: ["Russian numbers 0-10 pronunciation for beginners", "How are you in Russian как дела answers"],
  speaking: {
    scenario: {
      en: "Small talk with a classmate: ask how they are and answer, then swap phone numbers and read them back digit by digit.",
      ar: "دردشة مع زميل في الدراسة: اسأله عن حاله وأجب عن سؤاله، ثم تبادلا رقمي الهاتف واقرآهما رقمًا رقمًا للتأكّد.",
    },
    tutorBrief:
      "Play Anna, a friendly Moscow student in the learner's Russian class. Greet with Привет! Как дела? and accept any answer from the scale (отлично, хорошо, неплохо, нормально, так себе, плохо); if the learner doesn't ask back, prompt them to say А у тебя?. Then ask Какой у тебя номер? and have the learner dictate a phone number digit by digit; read it back with one deliberate mistake so they must correct you (Нет, ...). Then dictate your own number (8 915 206 37 49) in groups, pausing so they can repeat, and confirm with Да, правильно!. Use only numbers 0-10 and week-1 phrases. Watch the soft endings of пять, семь, девять, десять and the stress in четыре and восемь. Finish with Пока! and one specific compliment.",
    prompts: [
      { ru: "Приве́т! Как дела́?", en: "Hi! How are you?", ar: "مرحبًا! كيف الحال؟" },
      { ru: "Отли́чно, спаси́бо! А у тебя́?", en: "Great, thanks! And you?", ar: "ممتاز، شكرًا! وأنت؟" },
      { ru: "Како́й у тебя́ но́мер?", en: "What's your number?", ar: "ما رقم هاتفك؟" },
      { ru: "Мой но́мер: во́семь, де́вять, три…", en: "My number is eight, nine, three…", ar: "رقمي: ثمانية، تسعة، ثلاثة…" },
      { ru: "Да, пра́вильно!", en: "Yes, that's right!", ar: "نعم، صحيح!" },
    ],
  },
  journal: {
    en: "Write a mini dialogue of 4–5 lines: greet a friend, ask Как дела́?, answer, ask for their phone number and write your own in words (во́семь, де́вять…).",
    ar: "اكتب حوارًا قصيرًا من ٤ إلى ٥ أسطر: حيِّ صديقًا، واسأله Как дела́?، وأجب، ثم اطلب رقم هاتفه واكتب رقمك بالكلمات (во́семь، де́вять…).",
  },
  culture: {
    en: "Как дела́? is a real question in Russian, and people often answer it honestly — норма́льно ('OK') is one of the most common replies. Russian mobile numbers start with +7 (or 8 when you dial inside Russia) followed by ten digits; Egypt's country code is +20.",
    ar: "Как дела́? سؤال حقيقي في الروسية، وكثيرًا ما يجيب الناس عنه بصدق — و норма́льно («عادي») من أكثر الإجابات شيوعًا. تبدأ أرقام الهواتف المحمولة الروسية بـ +7 (أو 8 عند الاتصال من داخل روسيا) تليها عشرة أرقام، أمّا رمز مصر الدولي فهو +20.",
  },
};

const DAY_6: Day = {
  n: 6,
  week: 1,
  kind: "immersion",
  title: { ru: "Пе́сни и мультфи́льмы", en: "Songs and cartoons", ar: "أغانٍ ورسوم متحركة" },
  goals: [
    { en: "Follow a short story on the Moscow metro and catch the words you know.", ar: "أن تتابع قصة قصيرة في مترو موسكو وتلتقط الكلمات التي تعرفها." },
    {
      en: "Talk about letters, words, songs and cartoons: бу́ква, сло́во, пе́сня, мультфи́льм.",
      ar: "أن تتحدّث عن الحروف والكلمات والأغاني والرسوم المتحركة: бу́ква، сло́во، пе́сня، мультфи́льм.",
    },
    { en: "Recognise five letters that change shape in handwriting.", ar: "أن تتعرّف على خمسة حروف يتغيّر شكلها بخط اليد." },
  ],
  words: [
    {
      id: "d6-01", ru: "бу́ква", say: "bUkva", en: "letter (of the alphabet)", ar: "حرف (من حروف الأبجدية)", pos: "noun", g: "f", forms: "мн. ч. бу́квы",
      ex: { ru: "Вот бу́ква М.", en: "There's the letter M.", ar: "ها هو حرف М." },
    },
    { id: "d6-02", ru: "звук", say: "zvuk", en: "sound", ar: "صوت", pos: "noun", g: "m", forms: "мн. ч. зву́ки", ex: { ru: "Вот так звук!", en: "What a noise!", ar: "يا له من صوت!" } },
    {
      id: "d6-03", ru: "сло́во", say: "slOva", en: "word", ar: "كلمة", pos: "noun", g: "n", forms: "мн. ч. слова́",
      ex: { ru: "Э́то сло́во «метро́».", en: "That's the word 'metro'.", ar: "هذه كلمة «метро́»." },
    },
    { id: "d6-04", ru: "пе́сня", say: "pyEsnya", en: "song", ar: "أغنية", pos: "noun", g: "f", forms: "мн. ч. пе́сни", ex: { ru: "А вот пе́сня.", en: "And here's a song.", ar: "وها هي أغنية." } },
    {
      id: "d6-05", ru: "мультфи́льм", say: "mul'tfIl'm", en: "cartoon, animated film", ar: "فيلم رسوم متحركة", pos: "noun", g: "m", forms: "мн. ч. мультфи́льмы",
      ex: { ru: "Э́то мультфи́льм «Ма́ша и Медве́дь».", en: "It's the cartoon 'Masha and the Bear'.", ar: "هذا فيلم الرسوم المتحركة «ماشا والدب»." },
      note: { en: "Informally Russians say му́льтик.", ar: "في الكلام غير الرسمي يقول الروس му́льтик." },
    },
    { id: "d6-06", ru: "медве́дь", say: "midvyEt'", en: "bear", ar: "دبّ", pos: "noun", g: "m", forms: "мн. ч. медве́ди", ex: { ru: "Он медве́дь!", en: "He's a bear!", ar: "إنه دبّ!" } },
    {
      id: "d6-07", ru: "де́вочка", say: "dyEvachka", en: "(little) girl", ar: "بنت صغيرة، طفلة", pos: "noun", g: "f", forms: "мн. ч. де́вочки",
      ex: { ru: "Ма́ша — де́вочка.", en: "Masha is a little girl.", ar: "ماشا بنت صغيرة." },
    },
    {
      id: "d6-08", ru: "Смотри́!", say: "smatrI!", en: "Look! (to a friend)", ar: "انظر! (لصديق)", pos: "phrase",
      ex: { ru: "Смотри́! Вот метро́.", en: "Look! There's the metro.", ar: "انظر! ها هو المترو." },
      note: { en: "To someone you call вы: Смотри́те!", ar: "لمن تخاطبه بـ вы: Смотри́те!" },
    },
  ],
  grammar: [
    {
      id: "d6-g1",
      title: { en: "Printed and handwritten letters", ar: "الحروف المطبوعة والمكتوبة بخط اليد" },
      en: [
        "Russians write by hand in joined-up cursive, and a few small letters change shape. You will meet handwriting on menus, in notes and on cards, so learn the five that surprise everyone.",
        "Handwritten т looks like an English m, и like u, п like n, д like g, and ш like w. Many people draw a line over т and under ш so they are easy to tell apart.",
      ],
      ar: [
        "يكتب الروس بخط اليد بحروف متّصلة، ويتغيّر شكل بعض الحروف الصغيرة. ستقابل خط اليد في قوائم الطعام والملاحظات والبطاقات، فتعلّم الحروف الخمسة التي تفاجئ الجميع.",
        "حرف т المكتوب بخط اليد يشبه m الإنجليزية، و и يشبه u، و п يشبه n، و д يشبه g، و ш يشبه w. ويرسم كثيرون خطًّا فوق т وتحت ш ليسهل التمييز بينها.",
      ],
      tables: [
        {
          caption: { en: "Five letters that change in handwriting", ar: "خمسة حروف يتغيّر شكلها بخط اليد" },
          head: ["Printed · مطبوع", "Handwritten looks like · يشبه بخط اليد", "Example · مثال"],
          rows: [
            ["т", "m", "торт"],
            ["и", "u", "лифт"],
            ["п", "n", "па́па"],
            ["д", "g", "да"],
            ["ш", "w", "Ма́ша"],
          ],
        },
      ],
      examples: [
        { ru: "Э́то бу́ква «т».", en: "That's the letter т.", ar: "هذا حرف «т»." },
        { ru: "Э́то сло́во «торт».", en: "That's the word торт (cake).", ar: "هذه كلمة «торт» (كعكة)." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Бу́ква М", en: "The letter M", ar: "حرف М" },
    setting: {
      en: "Anna takes Ahmed on the Moscow metro for the first time. They are going to Teatralnaya station, next to the Bolshoi Theatre. On the way they read the signs, and on the train Anna shows him a famous cartoon on her phone.",
      ar: "تصطحب آنا أحمد في مترو موسكو لأول مرة. إنهما ذاهبان إلى محطة «تياترالنايا» قرب مسرح البولشوي. في الطريق يقرآن اللافتات، وفي القطار تريه آنا فيلم رسوم متحركة مشهورًا على هاتفها.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, смотри́! Вот бу́ква М.", en: "Ahmed, look! There's the letter M.", ar: "انظر يا أحمد! ها هو حرف М." },
      { who: "A", name: "Ахме́д", ru: "Бу́ква М — э́то метро́!", en: "The letter M — that's the metro!", ar: "حرف М يعني المترو!" },
      { who: "B", name: "А́нна", ru: "Пра́вильно! А э́то сло́во?", en: "Right! And this word?", ar: "صحيح! وهذه الكلمة؟" },
      {
        who: "A", name: "Ахме́д", ru: "Те-а-тра́ль-на-я… «Театра́льная»! Там теа́тр?",
        en: "Te-a-tral-na-ya… 'Teatralnaya'! Is there a theatre there?", ar: "تي-آ-ترال-نا-يا… «تياترالنايا»! هل هناك مسرح؟",
      },
      { who: "B", name: "А́нна", ru: "Да, там теа́тр.", en: "Yes, there's a theatre there.", ar: "نعم، هناك مسرح." },
      { who: "A", name: "Ахме́д", ru: "Ой! Вот так звук!", en: "Whoa! What a noise!", ar: "أوه! يا له من صوت!" },
      { who: "B", name: "А́нна", ru: "Э́то метро́, Ахме́д!", en: "That's just the metro, Ahmed!", ar: "إنه المترو يا أحمد!" },
      { who: "A", name: "Ахме́д", ru: "Хорошо́… А́нна, э́то мультфи́льм?", en: "OK… Anna, is that a cartoon?", ar: "حسنًا… آنا، هل هذا فيلم رسوم متحركة؟" },
      { who: "B", name: "А́нна", ru: "Да, «Ма́ша и Медве́дь». Кто э́то?", en: "Yes, 'Masha and the Bear'. Who's that?", ar: "نعم، «ماشا والدب». مَن هذه؟" },
      { who: "A", name: "Ахме́д", ru: "Э́то Ма́ша. Она́ де́вочка.", en: "That's Masha. She's a little girl.", ar: "هذه ماشا. إنها بنت صغيرة." },
      { who: "B", name: "А́нна", ru: "А он?", en: "And him?", ar: "وهو؟" },
      { who: "A", name: "Ахме́д", ru: "Он медве́дь!", en: "He's a bear!", ar: "إنه دبّ!" },
      { who: "B", name: "А́нна", ru: "Пра́вильно! А вот пе́сня.", en: "Right! And here comes the song.", ar: "صحيح! وها هي الأغنية." },
      {
        who: "A", name: "Ахме́д", ru: "Пе́сня! Вот сло́во «Ма́ша», вот сло́во «медве́дь»…",
        en: "A song! There's the word 'Masha', there's the word 'bear'…", ar: "أغنية! ها هي كلمة «ماشا»، وها هي كلمة «دبّ»…",
      },
      { who: "B", name: "А́нна", ru: "Хорошо́, Ахме́д! Вот Театра́льная!", en: "Well done, Ahmed! Here's Teatralnaya!", ar: "أحسنت يا أحمد! ها هي «تياترالنايا»!" },
      {
        who: "A", name: "Ахме́д", ru: "Спаси́бо, А́нна! Метро́, мультфи́льм, пе́сня — ура́!",
        en: "Thanks, Anna! The metro, a cartoon, a song — hooray!", ar: "شكرًا يا آنا! المترو، وفيلم رسوم متحركة، وأغنية — مرحى!",
      },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "What does бу́ква mean?", ar: "ما معنى бу́ква؟" },
      options: ["a letter · حرف", "a word · كلمة", "a sound · صوت"],
      answer: 0,
      why: { en: "бу́ква is a written letter; звук is what you hear.", ar: "бу́ква حرف مكتوب، أمّا звук فهو ما تسمعه." },
    },
    {
      kind: "choice",
      prompt: { en: "Which word means 'song'?", ar: "أيّ كلمة تعني «أغنية»؟" },
      options: ["пе́сня", "сло́во", "звук"],
      answer: 0,
      why: { en: "пе́сня = song; сло́во = word.", ar: "пе́сня = أغنية، و сло́во = كلمة." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Which word do you hear?", ar: "استمع. أيّ كلمة تسمع؟" },
      ru: "мультфи́льм",
      listen: true,
      options: ["мультфи́льм", "медве́дь", "метро́"],
      answer: 0,
      why: { en: "мультфи́льм: a cartoon, stressed on фи.", ar: "мультфи́льм: فيلم رسوم متحركة، والنبر على фи." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: She's a little girl.", ar: "أكمل: هي بنت صغيرة." },
      ru: "Она́ ___.",
      answers: ["де́вочка"],
      why: { en: "No verb 'is': Она́ де́вочка.", ar: "لا فعل «يكون»: Она́ де́вочка." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: He's a bear!", ar: "أكمل: إنه دبّ!" },
      ru: "Он ___!",
      answers: ["медве́дь"],
      why: { en: "медве́дь — the д at the end sounds like т: midvyEt'.", ar: "медве́дь — حرف д في آخرها يُنطق т: midvyEt'." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: Look! Here's the letter M.", ar: "كوّن الجملة: انظر! ها هو حرف М." },
      tokens: ["бу́ква", "Вот", "М", "Смотри́"],
      answers: ["Смотри́! Вот бу́ква М."],
      why: { en: "Смотри́! first, then вот + what you are pointing at.", ar: "Смотри́! أولًا، ثم вот + ما تشير إليه." },
    },
    {
      kind: "translate",
      prompt: { en: "Look! A cartoon!", ar: "انظر! فيلم رسوم متحركة!" },
      answers: ["Смотри́! Мультфи́льм!", "Смотри́, мультфи́льм!"],
      why: { en: "Смотри́ is 'look' to a friend.", ar: "Смотри́ تعني «انظر» لصديق." },
    },
  ],
  topics: ["alphabet", "songs", "cartoon", "handwriting"],
  search: ["Masha and the Bear Russian episode with subtitles", "Russian cursive handwriting for beginners", "Russian children's songs for learners"],
  speaking: {
    scenario: {
      en: "Tell the tutor which words you recognised in today's story, in a song and in a cartoon.",
      ar: "أخبر المعلّم بالكلمات التي تعرّفت عليها في قصة اليوم وفي أغنية وفي فيلم رسوم متحركة.",
    },
    tutorBrief:
      "Play a friendly conversation partner after the learner has listened to today's metro story and watched an episode of Masha and the Bear or listened to a children's song. Ask in simple Russian: Кто это? Это Маша? А он? Это песня? Это слово...? The learner answers with это, он/она, да/нет and the new words буква, звук, слово, песня, мультфильм, медведь, девочка. Ask them to name three words they recognised and to spell one of them letter by letter (for example Москва: эм, о, эс, ка, вэ, а). Keep to week-1 vocabulary, praise every recognised word, and finish by asking which letter is still difficult for them.",
    prompts: [
      { ru: "Э́то мультфи́льм.", en: "It's a cartoon.", ar: "هذا فيلم رسوم متحركة." },
      { ru: "Кто э́то? Э́то Ма́ша.", en: "Who's that? It's Masha.", ar: "مَن هذه؟ هذه ماشا." },
      { ru: "Она́ де́вочка, а он медве́дь.", en: "She's a little girl, and he's a bear.", ar: "هي بنت صغيرة، وهو دبّ." },
      { ru: "Вот сло́во «Москва́».", en: "Here's the word 'Moscow'.", ar: "ها هي كلمة «Москва́»." },
    ],
  },
  journal: {
    en: "Write 3–5 sentences about today's story: where Anna and Ahmed are, who Masha is, who the bear is, and which words you heard in the song.",
    ar: "اكتب من ٣ إلى ٥ جمل عن قصة اليوم: أين آنا وأحمد، ومَن هي ماشا، ومَن هو الدبّ، وأيّ الكلمات سمعتها في الأغنية.",
  },
  culture: {
    en: "Ма́ша и Медве́дь (Masha and the Bear) is a Russian cartoon loved all over the world; in Arabic it is known as «ماشا والدب». One of its episodes is among the most-watched videos ever posted on YouTube.",
    ar: "«Ма́ша и Медве́дь» مسلسل رسوم متحركة روسي يحبّه الأطفال في أنحاء العالم، ويُعرف بالعربية باسم «ماشا والدب». وإحدى حلقاته من أكثر الفيديوهات مشاهدةً في تاريخ يوتيوب.",
  },
  worksheet: {
    before: [
      {
        en: "Listen for words you already know: вот, э́то, там, да, пра́вильно, спаси́бо.",
        ar: "استمع إلى الكلمات التي تعرفها: вот، э́то، там، да، пра́вильно، спаси́бо.",
      },
      {
        en: "Anna shows Ahmed a cartoon: listen for who is a де́вочка (a little girl) and who is a медве́дь (a bear).",
        ar: "تُري آنا أحمدَ فيلم رسوم متحركة: استمع لتعرف مَن هي де́вочка (البنت الصغيرة) ومَن هو медве́дь (الدبّ).",
      },
      {
        en: "Ahmed reads a long station name syllable by syllable. Notice how the stressed syllable is longer and louder.",
        ar: "يقرأ أحمد اسم محطة طويلًا مقطعًا مقطعًا. لاحظ كيف يكون المقطع المنبور أطول وأعلى صوتًا.",
      },
    ],
    questions: [
      {
        kind: "choice",
        prompt: { en: "What does the big letter М mean?", ar: "ماذا يعني حرف М الكبير؟" },
        options: ["the metro · المترو", "Moscow · موسكو", "Masha · ماشا"],
        answer: 0,
        why: { en: "Every metro entrance in Moscow has a red М.", ar: "على كل مدخل لمترو موسكو حرف М أحمر." },
      },
      {
        kind: "choice",
        prompt: { en: "Which word does Ahmed read syllable by syllable?", ar: "أيّ كلمة يقرؤها أحمد مقطعًا مقطعًا؟" },
        options: ["Театра́льная", "Москва́", "мультфи́льм"],
        answer: 0,
        why: { en: "Те-а-тра́ль-на-я: the station next to the theatre.", ar: "Те-а-тра́ль-на-я: المحطة القريبة من المسرح." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. Why does Ahmed say this?", ar: "استمع. لماذا يقول أحمد هذا؟" },
        ru: "Ой! Вот так звук!",
        listen: true,
        options: ["The train is very loud. · القطار صاخب جدًا.", "He hears a song. · يسمع أغنية.", "He sees a bear. · يرى دبًّا."],
        answer: 0,
        why: { en: "Вот так звук! — What a noise! The train is coming in.", ar: "Вот так звук! — يا له من صوت! القطار يدخل المحطة." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. Who is Masha?", ar: "استمع. مَن هي ماشا؟" },
        ru: "Э́то Ма́ша. Она́ де́вочка.",
        listen: true,
        options: ["a little girl · بنت صغيرة", "a bear · دبّ", "a teacher · معلّمة"],
        answer: 0,
        why: { en: "Она́ де́вочка — she's a little girl.", ar: "Она́ де́вочка — إنها بنت صغيرة." },
      },
      {
        kind: "choice",
        prompt: { en: "What does Ahmed say about the other character?", ar: "ماذا يقول أحمد عن الشخصية الأخرى؟" },
        options: ["Он медве́дь!", "Он кот!", "Она́ де́вочка!"],
        answer: 0,
        why: { en: "Он медве́дь! — He's a bear!", ar: "Он медве́дь! — إنه دبّ!" },
      },
      {
        kind: "choice",
        prompt: { en: "Which words does Ahmed catch in the song?", ar: "أيّ الكلمات يلتقطها أحمد في الأغنية؟" },
        options: ["Ма́ша, медве́дь", "метро́, теа́тр", "торт, сок"],
        answer: 0,
        why: { en: "Вот сло́во «Ма́ша», вот сло́во «медве́дь».", ar: "في القصة: Вот сло́во «Ма́ша»، вот сло́во «медве́дь» — ها هي كلمة «ماشا» وها هي كلمة «دبّ»." },
      },
      {
        kind: "choice",
        prompt: { en: "Where do Anna and Ahmed get off?", ar: "في أيّ محطة ينزل أحمد وآنا؟" },
        options: ["at Teatralnaya · في «تياترالنايا»", "at a park · عند حديقة", "at a bank · عند بنك"],
        answer: 0,
        why: { en: "Вот Театра́льная! — Here's Teatralnaya!", ar: "Вот Театра́льная! — ها هي «تياترالنايا»!" },
      },
    ],
    retell: {
      en: "Retell the story in 4–6 short Russian sentences — for example: Вот метро́. Э́то бу́ква М. Ма́ша — де́вочка, а он медве́дь. Then tell the tutor which words you caught.",
      ar: "أعد سرد القصة في ٤ إلى ٦ جمل روسية قصيرة — مثل: Вот метро́. Э́то бу́ква М. Ма́ша — де́вочка, а он медве́дь. ثم أخبر المعلّم بالكلمات التي التقطتها.",
    },
  },
};

const DAY_7: Day = {
  n: 7,
  week: 1,
  kind: "review",
  title: { ru: "Повторе́ние: неде́ля 1", en: "Review: week 1", ar: "مراجعة: الأسبوع ١" },
  goals: [
    {
      en: "Check what you can do after week 1: read all 33 letters and put the stress in the right place.",
      ar: "أن تتحقّق ممّا تستطيعه بعد الأسبوع الأول: قراءة الحروف الثلاثة والثلاثين ووضع النبر في مكانه الصحيح.",
    },
    { en: "Greet, introduce yourself, say where you are from and ask how someone is.", ar: "أن تحيّي وتعرّف بنفسك وتقول من أين أنت وتسأل عن حال الآخرين." },
    { en: "Understand and say the numbers 0–10 and a phone number.", ar: "أن تفهم الأعداد من ٠ إلى ١٠ ورقم هاتف وتنطقها." },
  ],
  words: [],
  grammar: [
    {
      id: "d7-g1",
      title: { en: "Week 1 at a glance", ar: "الأسبوع الأول في لمحة" },
      en: [
        "This week you learned to read all 33 letters, to hear the stressed syllable and to use your first phrases. The table collects the phrases you need for the speaking test.",
        "Remember the two big rules: there is no 'is/are' in the present (Я Ахме́д. Метро́ там.), and a yes/no question differs from a statement only by the rising voice (Вы А́нна?).",
      ],
      ar: [
        "تعلّمت هذا الأسبوع قراءة الحروف الثلاثة والثلاثين، وسماع المقطع المنبور، واستخدام عباراتك الأولى. يجمع الجدول العبارات التي تحتاجها في اختبار المحادثة.",
        "تذكّر القاعدتين الكبيرتين: لا يوجد فعل «يكون» في الحاضر (Я Ахме́д. Метро́ там.)، وسؤال «نعم/لا» لا يختلف عن الجملة الخبرية إلا بارتفاع الصوت (Вы А́нна?).",
      ],
      tables: [
        {
          caption: { en: "Informal and formal phrases", ar: "عبارات غير رسمية ورسمية" },
          head: ["Situation · الموقف", "Informal · غير رسمي", "Formal · رسمي"],
          rows: [
            ["Hello · التحية", "Приве́т!", "Здра́вствуйте!"],
            ["Goodbye · الوداع", "Пока́!", "До свида́ния!"],
            ["Your name? · اسمك؟", "Как тебя́ зову́т?", "Как вас зову́т?"],
            ["Where from? · من أين؟", "Отку́да ты?", "Отку́да вы?"],
            ["How are you? · كيف الحال؟", "Как дела́?", "Как у вас дела́?"],
            ["And you? · وأنت؟", "А у тебя́?", "А у вас?"],
          ],
        },
      ],
      examples: [
        { ru: "Здра́вствуйте! Меня́ зову́т Ахме́д. Я из Еги́пта.", en: "Hello! My name is Ahmed. I'm from Egypt.", ar: "مرحبًا! اسمي أحمد. أنا من مصر." },
        { ru: "— Как дела́? — Хорошо́, спаси́бо. А у тебя́?", en: "— How are you? — Fine, thanks. And you?", ar: "— كيف الحال؟ — بخير، شكرًا. وأنت؟" },
      ],
    },
  ],
  exercises: [],
  topics: ["alphabet", "greetings", "introductions", "numbers"],
  search: ["Russian alphabet review quiz for beginners", "Russian greetings and introductions dialogue for beginners"],
  speaking: {
    scenario: {
      en: "Speaking test: greet the examiner, introduce yourself, say where you are from and read a phone number aloud.",
      ar: "اختبار المحادثة: حيِّ الممتحن، وعرّف بنفسك، وقل من أين أنت، واقرأ رقم هاتف بصوت عالٍ.",
    },
    tutorBrief:
      "Act as Olga Petrovna, a friendly but formal examiner running the week-1 oral exam. Use вы throughout and speak slowly. 1) Greet with Здравствуйте! and ask Как вас зовут? 2) Ask Откуда вы? 3) Ask Как у вас дела? and check that the learner returns the question with А у вас? 4) Ask the learner to dictate their phone number digit by digit, then dictate yours (8 925 614 30 72) and ask them to read it back. 5) Ask them to read aloud: метро, ресторан, молоко, хорошо, здравствуйте, пожалуйста, checking the stress and the silent в. Score each task 0-2 (0 = not done, 1 = understandable with errors, 2 = correct and fluent), give the total out of 10, then name one strength and two things to practise. Keep strictly to week-1 language and repeat a question once if asked.",
    prompts: [
      { ru: "Здра́вствуйте! Меня́ зову́т Ахме́д.", en: "Hello! My name is Ahmed.", ar: "مرحبًا! اسمي أحمد." },
      { ru: "Я из Еги́пта, из Каи́ра.", en: "I'm from Egypt, from Cairo.", ar: "أنا من مصر، من القاهرة." },
      { ru: "Хорошо́, спаси́бо. А у вас?", en: "Fine, thank you. And you?", ar: "بخير، شكرًا. وحضرتك؟" },
      { ru: "Мой но́мер: во́семь, де́вять, два, пять…", en: "My number is eight, nine, two, five…", ar: "رقمي: ثمانية، تسعة، اثنان، خمسة…" },
      { ru: "Спаси́бо! До свида́ния!", en: "Thank you! Goodbye!", ar: "شكرًا! إلى اللقاء!" },
    ],
  },
  journal: {
    en: "Write 5 sentences about yourself using everything from week 1: a greeting, your name, where you are from, how you are, and your phone number in words.",
    ar: "اكتب ٥ جمل عن نفسك مستخدمًا كل ما تعلّمته في الأسبوع الأول: تحية، واسمك، ومن أين أنت، وكيف حالك، ورقم هاتفك بالكلمات.",
  },
  culture: {
    en: "The Russian keyboard layout is called ЙЦУКЕН after the first six letters of its top row, just as the English one is called QWERTY. Add it to your phone or computer so you can type your answers in Cyrillic.",
    ar: "يُسمّى تخطيط لوحة المفاتيح الروسية ЙЦУКЕН نسبةً إلى الحروف الستة الأولى في صفّه العلوي، كما يُسمّى التخطيط الإنجليزي QWERTY. أضِفه إلى هاتفك أو حاسوبك لتكتب إجاباتك بالحروف الكيريلية.",
  },
  test: {
    sections: [
      {
        title: { en: "Letters and sounds", ar: "الحروف والأصوات" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Which letter sounds like the Arabic خ?", ar: "أيّ حرف يُنطق مثل الخاء العربية؟" },
            options: ["Х", "К", "Ж", "Ч"],
            answer: 0,
            why: { en: "Х = kh, like خ: хлеб.", ar: "Х = خ: хлеб." },
          },
          {
            kind: "choice",
            prompt: { en: "Which letter sounds like 'v'?", ar: "أيّ حرف يُنطق v؟" },
            options: ["В", "Б", "Ф", "У"],
            answer: 0,
            why: { en: "В looks like B but sounds like v: вот.", ar: "В يشبه B لكنه يُنطق v: вот." },
          },
          {
            kind: "choice",
            prompt: { en: "Which letter is p, the sound Arabic doesn't have?", ar: "أيّ حرف هو p، الصوت غير الموجود في العربية؟" },
            options: ["П", "Б", "Р", "Н"],
            answer: 0,
            why: { en: "П = p: па́па, пока́.", ar: "حرف П يُنطق مثل p: па́па، пока́." },
          },
          {
            kind: "choice",
            prompt: { en: "Which of these has no sound of its own?", ar: "أيّ هذه لا صوت له؟" },
            options: ["Ь", "Ы", "Щ", "Й"],
            answer: 0,
            why: { en: "The soft sign only softens the consonant before it.", ar: "العلامة الليّنة تليّن الحرف الساكن الذي قبلها فقط." },
          },
          {
            kind: "choice",
            prompt: { en: "Which letter is always stressed?", ar: "أيّ حرف منبور دائمًا؟" },
            options: ["ё", "е", "э", "я"],
            answer: 0,
            why: { en: "Ё is always stressed, so ёлка needs no accent mark.", ar: "Ё منبورة دائمًا، لذلك لا تحتاج ёлка إلى علامة نبر." },
          },
        ],
      },
      {
        title: { en: "Reading and stress", ar: "القراءة والنبر" },
        items: [
          {
            kind: "choice",
            prompt: { en: "How does молоко́ sound?", ar: "كيف تُنطق молоко́؟" },
            options: ["malakO", "molokO", "malOka"],
            answer: 0,
            why: { en: "Unstressed о sounds like а.", ar: "حرف о غير المنبور يُنطق a." },
          },
          {
            kind: "choice",
            prompt: { en: "Which syllable is stressed in пожа́луйста?", ar: "أيّ مقطع منبور في пожа́луйста؟" },
            options: ["жа", "по", "ста"],
            answer: 0,
            why: { en: "pazhAlusta: the stress is on жа.", ar: "pazhAlusta: النبر على жа." },
          },
          {
            kind: "choice",
            prompt: { en: "What do you hear at the end of хлеб?", ar: "ماذا تسمع في آخر хлеб؟" },
            options: ["p", "b", "v"],
            answer: 0,
            why: { en: "A final б is devoiced to п: khlyep.", ar: "حرف б الأخير يُهمس فيُنطق п: khlyep." },
          },
          {
            kind: "choice",
            prompt: { en: "Which word means 'thank you'?", ar: "أيّ كلمة تعني «شكرًا»؟" },
            options: ["спаси́бо", "пожа́луйста", "извини́те"],
            answer: 0,
            why: { en: "спаси́бо = thank you; пожа́луйста = please.", ar: "спаси́бо = شكرًا، و пожа́луйста = من فضلك." },
          },
          {
            kind: "fill",
            prompt: { en: "Fill in the missing letter: Moscow.", ar: "أكمل الحرف الناقص: موسكو." },
            ru: "Мос___ва́",
            answers: ["к"],
            why: { en: "Москва́: к and в together — kv.", ar: "Москва́: к و в معًا — kv." },
          },
        ],
      },
      {
        title: { en: "Listening", ar: "الاستماع" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Listen. What is the question?", ar: "استمع. ما السؤال؟" },
            ru: "Где метро́?",
            listen: true,
            options: ["Where's the metro? · أين المترو؟", "Is that the metro? · هل هذا المترو؟", "Here's the metro. · ها هو المترو."],
            answer: 0,
            why: { en: "Где = where.", ar: "Где تعني «أين»." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. What is her name?", ar: "استمع. ما اسمها؟" },
            ru: "Меня́ зову́т А́нна.",
            listen: true,
            options: ["Anna · آنا", "Masha · ماشا", "Olga · أولغا"],
            answer: 0,
            why: { en: "Меня́ зову́т… = my name is…", ar: "Меня́ зову́т… = اسمي…" },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. Where is he from?", ar: "استمع. من أين هو؟" },
            ru: "Я из Каи́ра.",
            listen: true,
            options: ["Cairo · القاهرة", "Moscow · موسكو", "Alexandria · الإسكندرية"],
            answer: 0,
            why: { en: "из Каи́ра = from Cairo.", ar: "из Каи́ра = من القاهرة." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. Which number do you hear?", ar: "استمع. أيّ عدد تسمع؟" },
            ru: "шесть",
            listen: true,
            options: ["6", "5", "7", "10"],
            answer: 0,
            why: { en: "шесть = 6.", ar: "шесть تعني ستة (٦)." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. How is the person?", ar: "استمع. كيف حال المتكلّم؟" },
            ru: "Норма́льно, спаси́бо.",
            listen: true,
            options: ["OK · عادي", "Great · ممتاز", "Bad · سيّئ"],
            answer: 0,
            why: { en: "Норма́льно = OK, fine.", ar: "Норма́льно = عادي، لا بأس." },
          },
        ],
      },
      {
        title: { en: "Greetings and introductions", ar: "التحية والتعارف" },
        items: [
          {
            kind: "choice",
            prompt: { en: "You meet your teacher in the morning. What do you say?", ar: "تقابل معلّمتك صباحًا. ماذا تقول؟" },
            options: ["Здра́вствуйте!", "Приве́т!", "Пока́!"],
            answer: 0,
            why: { en: "A teacher gets the polite здра́вствуйте.", ar: "مع المعلّمة نستخدم التحية الرسمية здра́вствуйте." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: My name is Ahmed.", ar: "أكمل: اسمي أحمد." },
            ru: "Меня́ ___ Ахме́д.",
            answers: ["зову́т"],
            why: { en: "Меня́ зову́т… — 'they call me…'.", ar: "Меня́ зову́т… — «يدعونني…»." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: Where are you from? (formal)", ar: "أكمل: من أين حضرتك؟" },
            ru: "___ вы?",
            answers: ["Отку́да"],
            why: { en: "Отку́да = from where.", ar: "Отку́да = من أين." },
          },
          {
            kind: "order",
            prompt: { en: "Build the answer: Nice to meet you too.", ar: "كوّن الإجابة: وأنا كذلك." },
            tokens: ["то́же", "мне", "И"],
            answers: ["И мне то́же."],
            why: { en: "И мне то́же — literally 'and to me too'.", ar: "И мне то́же — حرفيًا «ولي أيضًا»." },
          },
          {
            kind: "translate",
            prompt: { en: "Goodbye! (formal)", ar: "إلى اللقاء! (بصيغة رسمية)" },
            answers: ["До свида́ния!"],
            why: { en: "До свида́ния is the polite goodbye; to a friend, Пока́!", ar: "До свида́ния وداع رسمي، ولصديق نقول Пока́!" },
          },
        ],
      },
      {
        title: { en: "Numbers", ar: "الأعداد" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Which number is во́семь?", ar: "أيّ عدد هو во́семь؟" },
            options: ["8", "7", "9", "6"],
            answer: 0,
            why: { en: "во́семь = 8.", ar: "во́семь تعني ثمانية (٨)." },
          },
          {
            kind: "fill",
            prompt: { en: "Write the next number.", ar: "اكتب العدد التالي." },
            ru: "три, четы́ре, ___",
            answers: ["пять"],
            why: { en: "3, 4, 5: три, четы́ре, пять.", ar: "ثلاثة، أربعة، خمسة: три، четы́ре، пять." },
          },
          {
            kind: "choice",
            prompt: { en: "How do you say 916 digit by digit?", ar: "كيف تقول ٩١٦ رقمًا رقمًا؟" },
            options: ["де́вять, оди́н, шесть", "де́вять, шесть, оди́н", "шесть, оди́н, де́вять"],
            answer: 0,
            why: { en: "9 = де́вять, 1 = оди́н, 6 = шесть.", ar: "٩ = де́вять، و١ = оди́н، و٦ = шесть." },
          },
          {
            kind: "translate",
            prompt: { en: "How are you?", ar: "كيف الحال؟" },
            answers: ["Как дела́?", "Как у тебя́ дела́?", "Как у вас дела́?"],
            why: { en: "Как дела́? — or, more politely, Как у вас дела́?", ar: "Как дела́? — أو بصيغة أكثر تهذيبًا: Как у вас дела́?" },
          },
        ],
      },
    ],
    speaking: [
      {
        en: "Greet the examiner politely and introduce yourself: your name and where you are from.",
        ar: "حيِّ الممتحن بأدب وعرّف بنفسك: اسمك ومن أين أنت.",
      },
      { en: "Ask the examiner's name and how they are; answer when they ask you.", ar: "اسأل الممتحن عن اسمه وعن حاله، وأجب حين يسألك." },
      {
        en: "Read aloud with the right stress: метро́, рестора́н, молоко́, хорошо́, здра́вствуйте, пожа́луйста.",
        ar: "اقرأ بصوت عالٍ مع النبر الصحيح: метро́، рестора́н، молоко́، хорошо́، здра́вствуйте، пожа́луйста.",
      },
      {
        en: "Dictate your phone number digit by digit, then read back the examiner's number.",
        ar: "أملِ رقم هاتفك رقمًا رقمًا، ثم أعد قراءة رقم الممتحن.",
      },
      { en: "Thank the examiner and say goodbye.", ar: "اشكر الممتحن وودّعه." },
    ],
  },
};

export const WEEK_1: Day[] = [DAY_1, DAY_2, DAY_3, DAY_4, DAY_5, DAY_6, DAY_7];
