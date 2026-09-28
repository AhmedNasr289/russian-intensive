import type { Day } from "../types.ts";

// Week 2 · Me and my world (days 8–14).
// Written to docs/content-style-guide.md, following the Day 4 exemplar in week1.ts.

const DAY_8: Day = {
  n: 8,
  week: 2,
  kind: "lesson",
  title: { ru: "Он, она́, оно́: род", en: "He, she, it: gender", ar: "المذكر والمؤنث والمحايد" },
  goals: [
    {
      en: "Tell from its ending whether a noun is masculine, feminine or neuter.",
      ar: "أن تعرف من نهاية الاسم إن كان مذكّرًا أو مؤنّثًا أو محايدًا.",
    },
    {
      en: "Say 'my' and 'your' with the right ending: мой стол, моя́ кни́га, моё окно́.",
      ar: "أن تقول «ـي» و«ـك» بالنهاية الصحيحة: мой стол، моя́ кни́га، моё окно́.",
    },
    {
      en: "Show someone your room and ask whose things are whose: Чей? Чья? Чьё?",
      ar: "أن تُري أحدًا غرفتك وتسأل لمن هذه الأشياء: Чей؟ Чья؟ Чьё؟",
    },
  ],
  words: [
    {
      id: "d8-01", ru: "стол", say: "stol", en: "table; desk", ar: "طاولة؛ مكتب", pos: "noun", g: "m", forms: "мн. ч. столы́",
      ex: { ru: "Э́то мой стол.", en: "This is my desk.", ar: "هذا مكتبي." },
    },
    {
      id: "d8-02", ru: "стул", say: "stul", en: "chair", ar: "كرسي", pos: "noun", g: "m", forms: "мн. ч. сту́лья",
      ex: { ru: "Вот стул.", en: "Here's a chair.", ar: "ها هو كرسي." },
    },
    {
      id: "d8-03", ru: "кни́га", say: "knIga", en: "book", ar: "كتاب", pos: "noun", g: "f",
      ex: { ru: "Э́то моя́ кни́га.", en: "This is my book.", ar: "هذا كتابي." },
      note: {
        en: "Gender belongs to the Russian word: كتاب is masculine in Arabic, but кни́га is feminine.",
        ar: "الجنس صفة للكلمة الروسية: «كتاب» مذكّر في العربية، لكنّ кни́га مؤنّث.",
      },
    },
    {
      id: "d8-04", ru: "окно́", say: "aknO", en: "window", ar: "نافذة", pos: "noun", g: "n", forms: "мн. ч. о́кна",
      ex: { ru: "Где окно́? — Вот оно́.", en: "Where's the window? — Here it is.", ar: "أين النافذة؟ — ها هي." },
    },
    {
      id: "d8-05", ru: "ко́мната", say: "kOmnata", en: "room", ar: "غرفة", pos: "noun", g: "f",
      ex: { ru: "Э́то моя́ ко́мната.", en: "This is my room.", ar: "هذه غرفتي." },
    },
    {
      id: "d8-06", ru: "дверь", say: "dvyer'", en: "door", ar: "باب", pos: "noun", g: "f",
      ex: { ru: "Где дверь?", en: "Where's the door?", ar: "أين الباب؟" },
      note: { en: "Ends in -ь and is feminine: моя́ дверь.", ar: "تنتهي بـ -ь وهي مؤنّثة: моя́ дверь." },
    },
    {
      id: "d8-07", ru: "телефо́н", say: "tilifOn", en: "phone", ar: "هاتف", pos: "noun", g: "m",
      ex: { ru: "Э́то твой телефо́н?", en: "Is this your phone?", ar: "هل هذا هاتفك؟" },
    },
    {
      id: "d8-08", ru: "компью́тер", say: "kampyUter", en: "computer", ar: "حاسوب (كمبيوتر)", pos: "noun", g: "m",
      ex: { ru: "Вот мой компью́тер.", en: "Here's my computer.", ar: "ها هو حاسوبي." },
    },
    {
      id: "d8-09", ru: "су́мка", say: "sUmka", en: "bag", ar: "حقيبة", pos: "noun", g: "f",
      ex: { ru: "Чья э́то су́мка?", en: "Whose bag is this?", ar: "لمن هذه الحقيبة؟" },
    },
    {
      id: "d8-10", ru: "ключ", say: "klyuch", en: "key", ar: "مفتاح", pos: "noun", g: "m", forms: "мн. ч. ключи́",
      ex: { ru: "Где мой ключ?", en: "Where's my key?", ar: "أين مفتاحي؟" },
      note: { en: "No ь after ч, so it is masculine. Compare ночь (feminine).", ar: "لا توجد ь بعد ч، لذلك هو مذكّر. قارن بـ ночь (مؤنّث)." },
    },
    {
      id: "d8-11", ru: "письмо́", say: "pis'mO", en: "letter (that you send)", ar: "رسالة", pos: "noun", g: "n", forms: "мн. ч. пи́сьма",
      ex: { ru: "Э́то твоё письмо́.", en: "This is your letter.", ar: "هذه رسالتك." },
      note: { en: "A letter of the alphabet is бу́ква.", ar: "أمّا الحرف من حروف الأبجدية فهو бу́ква." },
    },
    {
      id: "d8-12", ru: "мо́ре", say: "mOrye", en: "sea", ar: "بحر", pos: "noun", g: "n", forms: "мн. ч. моря́",
      ex: { ru: "Вот мо́ре!", en: "There's the sea!", ar: "ها هو البحر!" },
    },
    {
      id: "d8-13", ru: "мой", say: "moy", en: "my, mine", ar: "ـي (ضمير الملكية للمتكلّم: كتابي)", pos: "pron",
      forms: "моя́ (f), моё (n), мои́ (мн. ч.)",
      ex: { ru: "Э́то мой ключ, а э́то моя́ су́мка.", en: "This is my key, and this is my bag.", ar: "هذا مفتاحي، وهذه حقيبتي." },
    },
    {
      id: "d8-14", ru: "твой", say: "tvoy", en: "your, yours (informal, one person)", ar: "ـكَ / ـكِ (ضمير الملكية للمخاطَب، غير رسمي)", pos: "pron",
      forms: "твоя́ (f), твоё (n), твои́ (мн. ч.)",
      ex: { ru: "Э́то твоя́ кни́га?", en: "Is this your book?", ar: "هل هذا كتابك؟" },
    },
    {
      id: "d8-15", ru: "оно́", say: "anO", en: "it (for a neuter noun)", ar: "هو / هي (ضمير الغائب للاسم المحايد)", pos: "pron",
      ex: { ru: "Где мо́ре? — Вот оно́!", en: "Where's the sea? — There it is!", ar: "أين البحر؟ — ها هو!" },
    },
    {
      id: "d8-16", ru: "чей", say: "chey", en: "whose?", ar: "لِمَن؟", pos: "pron", forms: "чья (f), чьё (n), чьи (мн. ч.)",
      ex: { ru: "Чей э́то стол?", en: "Whose desk is this?", ar: "لمن هذا المكتب؟" },
      note: {
        en: "Like мой, it agrees with the thing: чей стол, чья су́мка, чьё окно́.",
        ar: "مثل мой، يطابق الشيء المملوك: чей стол، чья су́мка، чьё окно́.",
      },
    },
    {
      id: "d8-17", ru: "ла́мпа", say: "lAmpa", en: "lamp", ar: "مصباح", pos: "noun", g: "f",
      ex: { ru: "Где ла́мпа? — Вот она́.", en: "Where's the lamp? — Here it is.", ar: "أين المصباح؟ — ها هو." },
    },
    {
      id: "d8-18", ru: "крова́ть", say: "kravAt'", en: "bed", ar: "سرير", pos: "noun", g: "f",
      ex: { ru: "Э́то моя́ крова́ть.", en: "This is my bed.", ar: "هذا سريري." },
      note: { en: "Ends in -ь and is feminine: моя́ крова́ть.", ar: "تنتهي بـ -ь وهي مؤنّثة: моя́ крова́ть." },
    },
    {
      id: "d8-19", ru: "шкаф", say: "shkaf", en: "wardrobe; cupboard", ar: "خزانة (دولاب)", pos: "noun", g: "m", forms: "мн. ч. шкафы́",
      ex: { ru: "Э́то твой шкаф?", en: "Is this your wardrobe?", ar: "هل هذه خزانتك؟" },
    },
    {
      id: "d8-20", ru: "Как так?", say: "kak tak?", en: "How come? How can that be?", ar: "كيف ذلك؟ / كيف يُعقل؟", pos: "phrase",
      ex: { ru: "Мо́ре? Как так?", en: "The sea? How come?", ar: "البحر؟ كيف ذلك؟" },
    },
  ],
  grammar: [
    {
      id: "d8-g1",
      title: { en: "Three genders: look at the ending", ar: "ثلاثة أجناس: انظر إلى نهاية الكلمة" },
      en: [
        "Every Russian noun is masculine, feminine or neuter — even a table or a window. The good news: the last letter almost always tells you which.",
        "A consonant or -й → masculine (он): стол, ключ, чай. The ending -а or -я → feminine (она́): кни́га, пе́сня. The ending -о or -е → neuter (оно́): окно́, мо́ре. Much like Arabic ة, the ending -а usually marks a feminine word.",
        "Gender belongs to the Russian word, not to the thing: كتاب is masculine in Arabic, but кни́га is feminine. Only for people does meaning win: па́па ends in -а, but it is он.",
      ],
      ar: [
        "كلّ اسم روسي إمّا مذكّر أو مؤنّث أو محايد، حتى الطاولة والنافذة. والخبر السارّ أنّ الحرف الأخير يدلّك على الجنس في أغلب الأحيان.",
        "حرف صامت أو -й ← مذكّر (он): стол، ключ، чай. النهاية -а أو -я ← مؤنّث (она́): кни́га، пе́сня. النهاية -о أو -е ← محايد (оно́): окно́، мо́ре. ومثل التاء المربوطة في العربية، تدلّ -а عادةً على المؤنّث.",
        "الجنس صفة للكلمة الروسية لا للشيء نفسه: «كتاب» مذكّر في العربية، لكنّ кни́га مؤنّث. وفي الأشخاص وحدهم يغلب المعنى: كلمة па́па تنتهي بـ -а لكنّها مذكّرة (он).",
      ],
      tables: [
        {
          caption: { en: "Gender by ending", ar: "الجنس حسب النهاية" },
          head: ["Gender · الجنس", "Ending · النهاية", "Examples · أمثلة"],
          rows: [
            ["он · مذكّر", "consonant, -й · حرف صامت، -й", "стол, ключ, чай"],
            ["она́ · مؤنّث", "-а, -я", "кни́га, ко́мната, пе́сня"],
            ["оно́ · محايد", "-о, -е", "окно́, письмо́, мо́ре"],
          ],
        },
      ],
      examples: [
        { ru: "Где стол? — Вот он.", en: "Where's the table? — Here it is.", ar: "أين الطاولة؟ — ها هي." },
        { ru: "Где кни́га? — Вот она́.", en: "Where's the book? — Here it is.", ar: "أين الكتاب؟ — ها هو." },
        { ru: "Где окно́? — Вот оно́.", en: "Where's the window? — Here it is.", ar: "أين النافذة؟ — ها هي." },
      ],
    },
    {
      id: "d8-g2",
      title: { en: "Nouns in -ь: learn the gender", ar: "الأسماء المنتهية بـ ь: احفظ جنسها" },
      en: [
        "A noun ending in the soft sign ь can be masculine or feminine, and the ending will not tell you which. Learn it together with a word that shows the gender: мой день, моя́ ночь.",
        "Masculine: день, медве́дь. Feminine: ночь, дверь, крова́ть.",
        "One sure clue: after ж, ш, ч, щ a final ь means feminine (ночь), while a masculine noun has no ь there (ключ).",
      ],
      ar: [
        "الاسم الذي ينتهي بالعلامة اللينة ь قد يكون مذكّرًا أو مؤنّثًا، والنهاية لا تخبرك بذلك. احفظه مع كلمة تُظهر جنسه: мой день، моя́ ночь.",
        "مذكّر: день، медве́дь. مؤنّث: ночь، дверь، крова́ть.",
        "وهناك علامة أكيدة: بعد ж وш وч وщ تدلّ ь الأخيرة على المؤنّث (ночь)، أمّا الاسم المذكّر فلا تُكتب فيه ь هناك (ключ).",
      ],
      tables: [
        {
          caption: { en: "Soft-sign nouns", ar: "الأسماء المنتهية بـ ь" },
          head: ["он · مذكّر", "она́ · مؤنّث"],
          rows: [
            ["день", "ночь"],
            ["медве́дь", "дверь"],
            ["ключ (no ь · بلا ь)", "крова́ть"],
          ],
        },
      ],
      examples: [
        { ru: "Э́то моя́ дверь, а э́то мой ключ.", en: "This is my door, and this is my key.", ar: "هذا بابي، وهذا مفتاحي." },
        { ru: "Где твоя́ крова́ть? — Вот она́.", en: "Where's your bed? — Here it is.", ar: "أين سريرك؟ — ها هو." },
      ],
    },
    {
      id: "d8-g3",
      title: { en: "мой / моя́ / моё and твой / твоя́ / твоё", ar: "мой / моя́ / моё و твой / твоя́ / твоё" },
      en: [
        "'My' and 'your' change their ending to match the noun: мой стол, моя́ кни́га, моё окно́. твой works the same way: твой ключ, твоя́ су́мка, твоё письмо́.",
        "The ending follows the thing, not the owner: Anna says мой телефо́н and Ahmed says моя́ су́мка. Arabic works the other way round: كتابه and كتابها change with the owner.",
        "'Whose?' agrees in the same way: Чей э́то стол? Чья э́то су́мка? Чьё э́то письмо́? A short answer is enough: — Чья э́то кни́га? — Моя́.",
      ],
      ar: [
        "تتغيّر نهاية «ـي» و«ـك» لتطابق الاسم: мой стол، моя́ кни́га، моё окно́. وكذلك твой: твой ключ، твоя́ су́мка، твоё письмо́.",
        "النهاية تتبع الشيء المملوك لا المالك: تقول آنا мой телефо́н ويقول أحمد моя́ су́мка. أمّا العربية فعلى العكس: «كتابه» و«كتابها» يتغيّران بحسب المالك.",
        "وسؤال «لمن؟» يطابق الاسم بالطريقة نفسها: Чей э́то стол؟ Чья э́то су́мка؟ Чьё э́то письмо́؟ ويكفي جواب قصير: — Чья э́то кни́га؟ — Моя́.",
      ],
      tables: [
        {
          caption: { en: "My, your, whose?", ar: "ـي، ـك، لمن؟" },
          head: ["Gender · الجنس", "my · ـي", "your · ـك", "whose? · لمن؟"],
          rows: [
            ["он · مذكّر", "мой стол", "твой ключ", "чей?"],
            ["она́ · مؤنّث", "моя́ кни́га", "твоя́ су́мка", "чья?"],
            ["оно́ · محايد", "моё окно́", "твоё письмо́", "чьё?"],
          ],
        },
      ],
      examples: [
        { ru: "— Чья э́то су́мка? — Моя́.", en: "— Whose bag is this? — Mine.", ar: "— لمن هذه الحقيبة؟ — لي." },
        { ru: "Э́то твоё письмо́, а э́то мой телефо́н.", en: "This is your letter, and this is my phone.", ar: "هذه رسالتك، وهذا هاتفي." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Моя́ ко́мната", en: "My room", ar: "غرفتي" },
    setting: {
      en: "Ahmed has just moved into a room in Moscow. He calls Anna on video and shows her around.",
      ar: "انتقل أحمد للتوّ إلى غرفة في موسكو. يتّصل بآنا مكالمةَ فيديو ويُريها غرفته.",
    },
    lines: [
      { who: "A", name: "Ахме́д", ru: "А́нна, приве́т! Вот моя́ ко́мната.", en: "Anna, hi! Here's my room.", ar: "آنا، مرحبًا! هذه غرفتي." },
      { who: "B", name: "А́нна", ru: "Приве́т, Ахме́д! Э́то твой стол?", en: "Hi, Ahmed! Is that your desk?", ar: "مرحبًا يا أحمد! هل هذا مكتبك؟" },
      { who: "A", name: "Ахме́д", ru: "Да, э́то мой стол, а вот мой компью́тер.", en: "Yes, that's my desk, and here's my computer.", ar: "نعم، هذا مكتبي، وهذا حاسوبي." },
      { who: "B", name: "А́нна", ru: "А где окно́?", en: "And where's the window?", ar: "وأين النافذة؟" },
      { who: "A", name: "Ахме́д", ru: "Вот оно́. А тут мо́ре!", en: "Here it is. And here's the sea!", ar: "ها هي. وهنا البحر!" },
      { who: "B", name: "А́нна", ru: "Мо́ре? Как так?", en: "The sea? How come?", ar: "البحر؟ كيف ذلك؟" },
      { who: "A", name: "Ахме́д", ru: "Э́то то́лько фо́то. Мо́ре там, а я здесь.", en: "It's only a photo. The sea is there, and I'm here.", ar: "إنّها مجرّد صورة. البحر هناك، وأنا هنا." },
      { who: "B", name: "А́нна", ru: "А чья э́то су́мка?", en: "And whose bag is that?", ar: "ولمن هذه الحقيبة؟" },
      { who: "A", name: "Ахме́д", ru: "Не моя́. Твоя́?", en: "Not mine. Yours?", ar: "ليست لي. أهي لكِ؟" },
      { who: "B", name: "А́нна", ru: "Да, моя́! А где мой ключ?", en: "Yes, it's mine! And where's my key?", ar: "نعم، إنّها لي! وأين مفتاحي؟" },
      { who: "A", name: "Ахме́д", ru: "Вот он, твой ключ.", en: "Here it is, your key.", ar: "ها هو مفتاحكِ." },
      { who: "B", name: "А́нна", ru: "Спаси́бо, Ахме́д!", en: "Thank you, Ahmed!", ar: "شكرًا يا أحمد!" },
    ],
  },
  pronunciation: {
    title: { en: "Soft consonants at the end of a word", ar: "الحروف الليّنة في آخر الكلمة" },
    en: [
      "The soft sign ь has no sound of its own. It makes the consonant before it soft: the middle of the tongue rises towards the roof of the mouth, as if a short 'y' were about to follow.",
      "At the end of a word you hear that light 'y' colour: дверь, день, крова́ть. Without it the word sounds foreign — or turns into another word.",
      "Final devoicing still applies: медве́дь ends in a soft 't', not a 'd'.",
    ],
    ar: [
      "العلامة اللينة ь لا صوت لها، لكنّها تُليّن الحرف الذي قبلها: يرتفع وسط اللسان نحو سقف الحلق كأنّ «ي» قصيرة ستأتي بعده.",
      "في آخر الكلمة تسمع لمسة الـ«ي» الخفيفة هذه: дверь، день، крова́ть. ومن دونها تبدو الكلمة أجنبية، أو تصبح كلمة أخرى.",
      "وتبقى قاعدة آخر الكلمة سارية، فالحرف المجهور يُنطق مهموسًا: медве́дь تنتهي بصوت «ت» ليّن لا «د».",
    ],
    drills: [
      { ru: "дверь", say: "dvyer'", focus: { en: "A soft р at the end: a quick tap, then a light 'y'.", ar: "р ليّنة في الآخر: نقرة سريعة ثم «ي» خفيفة." } },
      { ru: "день", say: "dyen'", focus: { en: "Both д and н are soft.", ar: "كلٌّ من д وн ليّن." } },
      { ru: "крова́ть", say: "kravAt'", focus: { en: "A soft т at the end; the unstressed о sounds like 'a'.", ar: "т ليّنة في الآخر، وо غير المنبورة تُنطق «a»." } },
      { ru: "медве́дь", say: "midvyEt'", focus: { en: "Soft and devoiced: the final д sounds like a soft 't'.", ar: "ليّنة ومهموسة: д الأخيرة تُنطق «ت» ليّنة." } },
      { ru: "Где твоя́ крова́ть?", say: "gdye tvayA kravAt'?", focus: { en: "A question word: the voice does not rise.", ar: "أداة استفهام: لا يرتفع الصوت." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Which pronoun replaces кни́га?", ar: "أيّ ضمير يحلّ محلّ кни́га؟" },
      options: ["он", "она́", "оно́"],
      answer: 1,
      why: { en: "кни́га ends in -а, so it is feminine: она́.", ar: "кни́га تنتهي بـ -а، فهي مؤنّثة: она́." },
    },
    {
      kind: "choice",
      prompt: { en: "Which pronoun replaces окно́?", ar: "أيّ ضمير يحلّ محلّ окно́؟" },
      options: ["он", "она́", "оно́"],
      answer: 2,
      why: { en: "окно́ ends in -о, so it is neuter: оно́.", ar: "окно́ تنتهي بـ -о، فهي محايدة: оно́." },
    },
    {
      kind: "choice",
      prompt: { en: "Which noun is masculine?", ar: "أيّ اسم مذكّر؟" },
      options: ["ко́мната", "стул", "мо́ре", "дверь"],
      answer: 1,
      why: { en: "стул ends in a consonant: он. дверь ends in -ь but is feminine.", ar: "стул ينتهي بحرف صامت: он. أمّا дверь فتنتهي بـ -ь لكنّها مؤنّثة." },
    },
    {
      kind: "choice",
      prompt: { en: "па́па ends in -а. Which pronoun replaces it?", ar: "па́па تنتهي بـ -а. أيّ ضمير يحلّ محلّها؟" },
      options: ["он", "она́", "оно́"],
      answer: 0,
      why: { en: "For people, meaning wins: a father is он.", ar: "في الأشخاص يغلب المعنى: الأب هو он." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: This is my room.", ar: "أكمل: هذه غرفتي." },
      ru: "Э́то ___ ко́мната.",
      answers: ["моя́"],
      why: { en: "ко́мната is feminine, so 'my' is моя́.", ar: "ко́мната مؤنّثة، لذلك نقول моя́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Is this your letter?", ar: "أكمل: هل هذه رسالتك؟" },
      ru: "Э́то ___ письмо́?",
      answers: ["твоё"],
      why: { en: "письмо́ is neuter, so 'your' is твоё.", ar: "письмо́ محايدة، لذلك نقول твоё." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Whose key is this?", ar: "أكمل: لمن هذا المفتاح؟" },
      ru: "___ э́то ключ?",
      answers: ["Чей"],
      why: { en: "ключ is masculine, so 'whose' is чей.", ar: "ключ مذكّر، لذلك نقول чей." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: This is my bag.", ar: "كوّن الجملة: هذه حقيبتي." },
      tokens: ["моя́", "Э́то", "су́мка"],
      answers: ["Э́то моя́ су́мка."],
      why: { en: "Э́то + моя́ + a feminine noun; no verb 'is' is needed.", ar: "Э́то + моя́ + اسم مؤنّث، ولا نحتاج إلى فعل «يكون»." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: Where is your phone?", ar: "كوّن السؤال: أين هاتفك؟" },
      tokens: ["твой", "Где", "телефо́н"],
      answers: ["Где твой телефо́н?"],
      why: { en: "The question word comes first; телефо́н is masculine, so твой.", ar: "أداة الاستفهام أولًا، وтелефо́н مذكّر لذلك نقول твой." },
    },
    {
      kind: "translate",
      prompt: { en: "This is my book.", ar: "هذا كتابي." },
      answers: ["Э́то моя́ кни́га."],
      why: { en: "кни́га is feminine in Russian, even though كتاب is masculine: моя́ кни́га.", ar: "кни́га مؤنّثة في الروسية وإن كانت «كتاب» مذكّرة: моя́ кни́га." },
    },
    {
      kind: "translate",
      prompt: { en: "Is this your key? (informal)", ar: "هل هذا مفتاحك؟ (غير رسمي)" },
      answers: ["Э́то твой ключ?", "Твой ключ?", "Э́то твой ключ"],
      why: { en: "ключ is masculine: твой ключ. A rising voice makes it a question.", ar: "ключ مذكّر: твой ключ. ويحوّله ارتفاع الصوت إلى سؤال." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is the person looking for?", ar: "استمع. عن أيّ شيء يبحث الشخص؟" },
      ru: "Где моё письмо́?",
      listen: true,
      options: ["a letter · رسالة", "a key · مفتاح", "a bag · حقيبة"],
      answer: 0,
      why: { en: "письмо́ is a letter; моё shows it is neuter.", ar: "письмо́ تعني رسالة، وмоё تدلّ على أنّها محايدة." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the person ask?", ar: "استمع. عمّ يسأل الشخص؟" },
      ru: "Чья э́то су́мка?",
      listen: true,
      options: ["Whose bag is this? · لمن هذه الحقيبة؟", "Where is the bag? · أين الحقيبة؟", "Is this your bag? · هل هذه حقيبتك؟"],
      answer: 0,
      why: { en: "Чья is 'whose' for a feminine noun such as су́мка.", ar: "Чья تعني «لمن» مع اسم مؤنّث مثل су́мка." },
    },
  ],
  topics: ["gender", "possessives"],
  search: ["Russian noun gender for beginners", "Russian possessive pronouns мой моя моё"],
  speaking: {
    scenario: {
      en: "A video call with Anna: show her around your room. Name each thing and say whose it is: Э́то мой стол. Э́то моя́ ко́мната.",
      ar: "مكالمة فيديو مع آنا: أرِها غرفتك. سمِّ كلّ شيء وقل لمن هو: Э́то мой стол. Э́то моя́ ко́мната.",
    },
    tutorBrief:
      "Play Anna (Анна), a friendly Moscow student, on a video call. The learner shows you their room. Ask about objects one by one (Это твой стол? А где окно? Чья это сумка?) and let them answer with это, мой / моя / моё, твой / твоя / твоё and вот он / она / оно. Keep to today's words (стол, стул, книга, окно, комната, дверь, телефон, компьютер, сумка, ключ, письмо, море, лампа, кровать, шкаф) and earlier ones; no plurals yet. When the learner uses the wrong gender form (мой книга), repeat the correct form naturally (моя книга!) and ask them to say it again. Finish by naming the thing you liked most in their room.",
    prompts: [
      { ru: "Вот моя́ ко́мната.", en: "Here's my room.", ar: "هذه غرفتي." },
      { ru: "Э́то мой стол, а э́то мой стул.", en: "This is my desk, and this is my chair.", ar: "هذا مكتبي، وهذا كرسيّي." },
      { ru: "Где мой ключ? — Вот он!", en: "Where's my key? — Here it is!", ar: "أين مفتاحي؟ — ها هو!" },
      { ru: "Чья э́то су́мка? — Моя́.", en: "Whose bag is this? — Mine.", ar: "لمن هذه الحقيبة؟ — لي." },
    ],
  },
  journal: {
    en: "Write 3–5 sentences about your room. Name the things in it with мой / моя́ / моё: Вот моя́ ко́мната. Э́то мой стол…",
    ar: "اكتب من ٣ إلى ٥ جمل عن غرفتك. سمِّ الأشياء التي فيها مع мой / моя́ / моё: Вот моя́ ко́мната. Э́то мой стол…",
  },
  culture: {
    en: "Russians take off their outdoor shoes as soon as they walk into a home, and the host will often offer you slippers — та́почки. So keep your socks presentable!",
    ar: "يخلع الروس أحذيتهم فور دخول البيت، وكثيرًا ما يقدّم لك المضيف خُفًّا منزليًّا — та́почки. فاحرص على أن تكون جواربك لائقة!",
  },
};

const DAY_9: Day = {
  n: 9,
  week: 2,
  kind: "lesson",
  title: { ru: "Мно́жественное число́", en: "Plurals", ar: "الجمع" },
  goals: [
    {
      en: "Make the plural of nouns: столы́, кни́ги, о́кна.",
      ar: "أن تصوغ جمع الأسماء: столы́، кни́ги، о́кна.",
    },
    {
      en: "Apply the spelling rule: after г, к, х, ж, ш, ч, щ write и, never ы.",
      ar: "أن تطبّق قاعدة الإملاء: بعد г وк وх وж وш وч وщ تُكتب и لا ы.",
    },
    {
      en: "Say whose things are whose with наш, ваш, его́, её, их.",
      ar: "أن تقول لمن هذه الأشياء باستخدام наш وваш وего́ وеё وих.",
    },
  ],
  words: [
    {
      id: "d9-01", ru: "наш", say: "nash", en: "our, ours", ar: "ـنا (ضمير الملكية: بيتنا)", pos: "pron",
      forms: "на́ша (f), на́ше (n), на́ши (мн. ч.)",
      ex: { ru: "Э́то наш дом.", en: "This is our house.", ar: "هذا بيتنا." },
    },
    {
      id: "d9-02", ru: "ваш", say: "vash", en: "your, yours (formal, or more than one person)", ar: "ـكم / ـكَ (للجمع أو للاحترام)", pos: "pron",
      forms: "ва́ша (f), ва́ше (n), ва́ши (мн. ч.)",
      ex: { ru: "Э́то ва́ша су́мка, О́льга Петро́вна?", en: "Is this your bag, Olga Petrovna?", ar: "هل هذه حقيبتكِ يا أولغا بتروفنا؟" },
    },
    {
      id: "d9-03", ru: "его́", say: "yivO", en: "his; its", ar: "ـه (له)", pos: "pron",
      ex: { ru: "Э́то Макси́м, а э́то его́ компью́тер.", en: "This is Maxim, and this is his computer.", ar: "هذا مكسيم، وهذا حاسوبه." },
      note: {
        en: "Said 'yivO': the г sounds like v. It never changes: его́ стол, его́ кни́га.",
        ar: "تُنطق «yivO»: حرف г يُنطق v. ولا تتغيّر أبدًا: его́ стол، его́ кни́га.",
      },
    },
    {
      id: "d9-04", ru: "её", say: "yiyO", en: "her, hers; its", ar: "ـها (لها)", pos: "pron",
      ex: { ru: "Э́то А́нна, а э́то её ко́мната.", en: "This is Anna, and this is her room.", ar: "هذه آنا، وهذه غرفتها." },
    },
    {
      id: "d9-05", ru: "их", say: "ikh", en: "their, theirs", ar: "ـهم / ـهنّ (لهم)", pos: "pron",
      ex: { ru: "Э́то их дом.", en: "This is their house.", ar: "هذا بيتهم." },
    },
    {
      id: "d9-06", ru: "ру́чка", say: "rUchka", en: "pen", ar: "قلم حبر", pos: "noun", g: "f", forms: "мн. ч. ру́чки",
      ex: { ru: "Где моя́ ру́чка?", en: "Where's my pen?", ar: "أين قلمي؟" },
    },
    {
      id: "d9-07", ru: "каранда́ш", say: "karandAsh", en: "pencil", ar: "قلم رصاص", pos: "noun", g: "m", forms: "мн. ч. карандаши́",
      ex: { ru: "Вот твой каранда́ш.", en: "Here's your pencil.", ar: "ها هو قلمك الرصاص." },
    },
    {
      id: "d9-08", ru: "тетра́дь", say: "titrAt'", en: "exercise book, notebook", ar: "دفتر", pos: "noun", g: "f", forms: "мн. ч. тетра́ди",
      ex: { ru: "Э́то её тетра́дь.", en: "This is her notebook.", ar: "هذا دفترها." },
      note: { en: "Ends in -ь and is feminine: моя́ тетра́дь.", ar: "تنتهي بـ -ь وهي مؤنّثة: моя́ тетра́дь." },
    },
    {
      id: "d9-09", ru: "слова́рь", say: "slavAr'", en: "dictionary", ar: "قاموس", pos: "noun", g: "m", forms: "мн. ч. словари́",
      ex: { ru: "Э́то мой слова́рь.", en: "This is my dictionary.", ar: "هذا قاموسي." },
      note: { en: "Ends in -ь and is masculine: мой слова́рь.", ar: "ينتهي بـ -ь وهو مذكّر: мой слова́рь." },
    },
    {
      id: "d9-10", ru: "друг", say: "druk", en: "friend (a man; also friend in general)", ar: "صديق", pos: "noun", g: "m", forms: "мн. ч. друзья́",
      ex: { ru: "Макси́м — мой друг.", en: "Maxim is my friend.", ar: "مكسيم صديقي." },
      note: { en: "The plural is irregular: друзья́.", ar: "جمعه شاذّ: друзья́." },
    },
    {
      id: "d9-11", ru: "подру́га", say: "padrUga", en: "friend (a woman); girlfriend", ar: "صديقة", pos: "noun", g: "f", forms: "мн. ч. подру́ги",
      ex: { ru: "Та́ня — её подру́га.", en: "Tanya is her friend.", ar: "تانيا صديقتها." },
      note: {
        en: "A man saying моя́ подру́га may mean 'my girlfriend'; context decides.",
        ar: "حين يقول رجل моя́ подру́га فقد يعني «حبيبتي»، والسياق يحدّد المعنى.",
      },
    },
    {
      id: "d9-12", ru: "фотогра́фия", say: "fatagrAfiya", en: "photograph", ar: "صورة فوتوغرافية", pos: "noun", g: "f", forms: "мн. ч. фотогра́фии",
      ex: { ru: "Э́то на́ши фотогра́фии.", en: "These are our photos.", ar: "هذه صورنا." },
      note: { en: "фо́то is the short everyday word.", ar: "фо́то هي الكلمة القصيرة المستعملة يوميًّا." },
    },
    {
      id: "d9-13", ru: "го́род", say: "gOrat", en: "city, town", ar: "مدينة", pos: "noun", g: "m", forms: "мн. ч. города́",
      ex: { ru: "Э́то наш го́род.", en: "This is our town.", ar: "هذه مدينتنا." },
      note: { en: "The plural takes a stressed -а́: города́.", ar: "يُجمع بـ -а́ المنبورة: города́." },
    },
    {
      id: "d9-14", ru: "дом", say: "dom", en: "house; block of flats", ar: "بيت؛ مبنى سكني", pos: "noun", g: "m", forms: "мн. ч. дома́",
      ex: { ru: "Вот мой дом.", en: "Here's my house.", ar: "ها هو بيتي." },
      note: {
        en: "дома́ (houses) is not до́ма (at home): the stress changes the meaning.",
        ar: "дома́ (بيوت) ليست до́ма (في البيت): النبر يغيّر المعنى.",
      },
    },
    {
      id: "d9-15", ru: "уче́бник", say: "uchEbnik", en: "textbook", ar: "كتاب مدرسي", pos: "noun", g: "m", forms: "мн. ч. уче́бники",
      ex: { ru: "Где мои́ уче́бники?", en: "Where are my textbooks?", ar: "أين كتبي المدرسية؟" },
    },
    {
      id: "d9-16", ru: "рюкза́к", say: "ryugzAk", en: "backpack", ar: "حقيبة ظهر", pos: "noun", g: "m", forms: "мн. ч. рюкзаки́",
      ex: { ru: "Э́то твой рюкза́к?", en: "Is this your backpack?", ar: "هل هذه حقيبة ظهرك؟" },
    },
    {
      id: "d9-17", ru: "ша́пка", say: "shApka", en: "hat (a warm one)", ar: "قبّعة (شتوية)", pos: "noun", g: "f", forms: "мн. ч. ша́пки",
      ex: { ru: "Чья э́то ша́пка?", en: "Whose hat is this?", ar: "لمن هذه القبّعة؟" },
    },
    {
      id: "d9-18", ru: "очки́", say: "achkI", en: "glasses (spectacles)", ar: "نظّارة", pos: "noun", g: "pl",
      ex: { ru: "Где мои́ очки́?", en: "Where are my glasses?", ar: "أين نظّارتي؟" },
      note: { en: "Plural only, like 'glasses' in English: мои́ очки́.", ar: "لا تأتي إلّا بصيغة الجمع: мои́ очки́." },
    },
  ],
  grammar: [
    {
      id: "d9-g1",
      title: { en: "The plural: -ы / -и and -а / -я", ar: "الجمع: -ы / -и و -а / -я" },
      en: [
        "Masculine and feminine nouns make the plural with -ы or -и: стол → столы́, ко́мната → ко́мнаты. The endings -я, -й and -ь become -и: пе́сня → пе́сни, слова́рь → словари́. Good news for an Arabic speaker: there are almost no 'broken' plurals — the stem stays and only the ending changes.",
        "Neuter nouns take -а or -я: окно́ → о́кна, мо́ре → моря́. The stress often moves in the plural (письмо́ → пи́сьма), so learn the plural together with the word.",
        "A few common words break the rule: го́род → города́, дом → дома́ (stressed -а́), стул → сту́лья, друг → друзья́. And some nouns exist only in the plural: очки́ (glasses).",
      ],
      ar: [
        "تصوغ الأسماء المذكّرة والمؤنّثة الجمع بـ -ы أو -и: стол ← столы́، ко́мната ← ко́мнаты. والنهايات -я و-й و-ь تصبح -и: пе́сня ← пе́сни، слова́рь ← словари́. وهذا خبر سارّ لمتكلّم العربية: لا يكاد يوجد «جمع تكسير»، فالجذر يبقى وتتغيّر النهاية وحدها.",
        "الأسماء المحايدة تأخذ -а أو -я: окно́ ← о́кна، мо́ре ← моря́. وكثيرًا ما ينتقل النبر في الجمع (письмо́ ← пи́сьма)، لذا احفظ الجمع مع الكلمة.",
        "بعض الكلمات الشائعة تخالف القاعدة: го́род ← города́، дом ← дома́ (بـ -а́ منبورة)، стул ← сту́лья، друг ← друзья́. وبعض الأسماء لا تأتي إلّا بصيغة الجمع: очки́ (نظّارة).",
      ],
      tables: [
        {
          caption: { en: "Plural endings", ar: "نهايات الجمع" },
          head: ["Singular · المفرد", "Change · التغيير", "Plural · الجمع"],
          rows: [
            ["стол", "+ ы", "столы́"],
            ["ко́мната", "а → ы", "ко́мнаты"],
            ["пе́сня", "я → и", "пе́сни"],
            ["слова́рь", "ь → и", "словари́"],
            ["окно́", "о → а", "о́кна"],
            ["мо́ре", "е → я", "моря́"],
          ],
        },
      ],
      examples: [
        { ru: "Э́то моя́ кни́га, а э́то мои́ кни́ги.", en: "This is my book, and these are my books.", ar: "هذا كتابي، وهذه كتبي." },
        { ru: "Где на́ши пи́сьма?", en: "Where are our letters?", ar: "أين رسائلنا؟" },
        { ru: "Вот на́ши столы́ и сту́лья.", en: "Here are our tables and chairs.", ar: "ها هي طاولاتنا وكراسينا." },
      ],
    },
    {
      id: "d9-g2",
      title: { en: "The spelling rule: и, never ы, after г к х ж ш ч щ", ar: "قاعدة الإملاء: и لا ы بعد г к х ж ш ч щ" },
      en: [
        "After the seven letters г, к, х, ж, ш, ч, щ Russian never writes ы — it writes и instead. So the plural of кни́га is кни́ги, never «кни́гы».",
        "The rule is about spelling, and it works everywhere: ру́чка → ру́чки, подру́га → подру́ги, каранда́ш → карандаши́, ключ → ключи́.",
        "Listen, though: after ж and ш the written и still sounds like ы — карандаши́ sounds 'karandashY'.",
      ],
      ar: [
        "بعد الحروف السبعة г وк وх وж وш وч وщ لا تُكتب ы أبدًا في الروسية، بل تُكتب и مكانها. فجمع кни́га هو кни́ги، ولا يكون «кни́гы» أبدًا.",
        "القاعدة إملائية وتنطبق في كلّ مكان: ру́чка ← ру́чки، подру́га ← подру́ги، каранда́ш ← карандаши́، ключ ← ключи́.",
        "لكن انتبه للنطق: بعد ж وш تُكتب и وتُنطق مثل ы، فـкарандаши́ تُسمع «karandashY».",
      ],
      tables: [
        {
          caption: { en: "и after г к х ж ш ч щ", ar: "и بعد г к х ж ш ч щ" },
          head: ["Singular · المفرد", "Plural · الجمع"],
          rows: [
            ["кни́га", "кни́ги"],
            ["ру́чка", "ру́чки"],
            ["подру́га", "подру́ги"],
            ["каранда́ш", "карандаши́"],
            ["ключ", "ключи́"],
          ],
        },
      ],
      examples: [
        { ru: "Где мои́ ру́чки и карандаши́?", en: "Where are my pens and pencils?", ar: "أين أقلامي الحبر والرصاص؟" },
        { ru: "Э́то её кни́ги.", en: "These are her books.", ar: "هذه كتبها." },
      ],
    },
    {
      id: "d9-g3",
      title: { en: "Possessives: наш, ваш, его́, её, их", ar: "ضمائر الملكية: наш، ваш، его́، её، их" },
      en: [
        "наш (our) and ваш (your: formal, or to several people) change like мой: наш дом, на́ша ко́мната, на́ше окно́, на́ши кни́ги. In the plural мой and твой become мои́ and твои́.",
        "его́ (his), её (her) and их (their) never change: его́ стол, его́ кни́га, её тетра́ди, их дом. They work like the Arabic suffixes ـه، ـها، ـهم: they show the owner, not the thing.",
        "Say его́ as 'yivO' — the г sounds like v. To ask about several things, use чьи: Чьи э́то очки́?",
      ],
      ar: [
        "تتغيّر наш (ـنا) وваш (ـكم، أو للاحترام) مثل мой: наш дом، на́ша ко́мната، на́ше окно́، на́ши кни́ги. وفي الجمع تصبح мой وтвой: мои́ وтвои́.",
        "أمّا его́ (ـه) وеё (ـها) وих (ـهم) فلا تتغيّر أبدًا: его́ стол، его́ кни́га، её тетра́ди، их дом. وهي تعمل مثل الضمائر المتّصلة في العربية ـه وـها وـهم: تدلّ على المالك لا على الشيء.",
        "انطق его́ هكذا: «yivO»، أي إنّ г تُنطق v. وللسؤال عن عدّة أشياء استخدم чьи: Чьи э́то очки́؟",
      ],
      tables: [
        {
          caption: { en: "Possessives: the owner (left) and the thing owned (top)", ar: "ضمائر الملكية: المالك (يسارًا) والشيء المملوك (أعلى)" },
          head: ["Owner · المالك", "он · مذكّر", "она́ · مؤنّث", "оно́ · محايد", "plural · الجمع"],
          rows: [
            ["я", "мой", "моя́", "моё", "мои́"],
            ["ты", "твой", "твоя́", "твоё", "твои́"],
            ["мы", "наш", "на́ша", "на́ше", "на́ши"],
            ["вы", "ваш", "ва́ша", "ва́ше", "ва́ши"],
            ["он / оно́", "его́", "его́", "его́", "его́"],
            ["она́", "её", "её", "её", "её"],
            ["они́", "их", "их", "их", "их"],
            ["whose? · لمن؟", "чей", "чья", "чьё", "чьи"],
          ],
        },
      ],
      examples: [
        { ru: "Э́то наш го́род, а э́то их дом.", en: "This is our town, and this is their house.", ar: "هذه مدينتنا، وهذا بيتهم." },
        { ru: "— Чьи э́то тетра́ди? — Её.", en: "— Whose notebooks are these? — Hers.", ar: "— لمن هذه الدفاتر؟ — لها." },
        { ru: "Э́то ва́ши очки́, О́льга Петро́вна?", en: "Are these your glasses, Olga Petrovna?", ar: "هل هذه نظّارتكِ يا أولغا بتروفنا؟" },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Чьё э́то всё?", en: "Whose is all this?", ar: "لمن كلّ هذا؟" },
    setting: {
      en: "Anna and her brother Maxim have moved into a new flat. Ahmed helps them unpack a big bag.",
      ar: "انتقلت آنا وأخوها مكسيم إلى شقّة جديدة، وأحمد يساعدهما في إفراغ حقيبة كبيرة.",
    },
    lines: [
      { who: "A", name: "Ахме́д", ru: "Так… Вот кни́ги. Чьи э́то кни́ги?", en: "Right… Here are some books. Whose books are these?", ar: "حسنًا… ها هي كتب. لمن هذه الكتب؟" },
      { who: "B", name: "А́нна", ru: "Э́то мои́ кни́ги.", en: "They're my books.", ar: "هذه كتبي." },
      { who: "A", name: "Ахме́д", ru: "А э́то чьи словари́?", en: "And whose dictionaries are these?", ar: "ولمن هذه القواميس؟" },
      { who: "A", name: "Макси́м", ru: "Мои́. И ру́чки, и карандаши́ то́же мои́.", en: "Mine. And the pens and the pencils are mine too.", ar: "لي. والأقلام وأقلام الرصاص لي أيضًا." },
      { who: "B", name: "А́нна", ru: "Нет, ру́чки на́ши!", en: "No, the pens are ours!", ar: "لا، الأقلام لنا!" },
      { who: "A", name: "Ахме́д", ru: "Хорошо́, хорошо́! А э́то ва́ши фотогра́фии?", en: "OK, OK! And are these your photos?", ar: "حسنًا، حسنًا! وهل هذه صوركما؟" },
      { who: "B", name: "А́нна", ru: "Да, на́ши. Э́то наш го́род, а э́то наш дом.", en: "Yes, ours. That's our town, and that's our house.", ar: "نعم، صورنا. هذه مدينتنا، وهذا بيتنا." },
      { who: "A", name: "Ахме́д", ru: "А э́то кто?", en: "And who's this?", ar: "ومن هذان؟" },
      {
        who: "B", name: "А́нна", ru: "Э́то мой друг Са́ша и моя́ подру́га Ка́тя, а э́то их дом.",
        en: "That's my friend Sasha and my friend Katya, and that's their house.", ar: "هذا صديقي ساشا وصديقتي كاتيا، وهذا بيتهما.",
      },
      { who: "A", name: "Ахме́д", ru: "А чьи э́то очки́?", en: "And whose glasses are these?", ar: "ولمن هذه النظّارة؟" },
      { who: "A", name: "Макси́м", ru: "Э́то мои́ очки́! Спаси́бо, Ахме́д!", en: "Those are my glasses! Thanks, Ahmed!", ar: "هذه نظّارتي! شكرًا يا أحمد!" },
    ],
  },
  pronunciation: {
    title: { en: "The sound ы", ar: "الصوت ы" },
    en: [
      "ы has no match in English or Arabic. Say 'ee', then pull your tongue back while keeping your lips spread, not rounded: the sound comes from the middle of the mouth.",
      "You need it for the plural — столы́, ко́мнаты, телефо́ны — and in мы and вы, which you already know.",
      "After ж and ш you write и but say ы: карандаши́ sounds 'karandashY'. After г and к, и stays a clear 'i': кни́ги, ру́чки.",
    ],
    ar: [
      "لا مقابل للصوت ы في الإنجليزية ولا في العربية. قل «ي» ممدودة، ثم اسحب لسانك إلى الخلف مع إبقاء الشفتين مفرودتين غير مستديرتين، فيخرج الصوت من وسط الفم.",
      "ستحتاجه في الجمع — столы́، ко́мнаты، телефо́ны — وفي мы وвы اللتين تعرفهما.",
      "بعد ж وш تُكتب и وتُنطق ы: карандаши́ تُسمع «karandashY». أمّا بعد г وк فتبقى и «i» واضحة: кни́ги، ру́чки.",
    ],
    drills: [
      { ru: "мы, вы", say: "my, vy", focus: { en: "Warm up with words you know: a short, central ы.", ar: "ابدأ بكلمات تعرفها: ы قصيرة من وسط الفم." } },
      { ru: "столы́", say: "stalY", focus: { en: "A stressed ы; the unstressed о sounds like 'a'.", ar: "ы منبورة، وо غير المنبورة تُنطق «a»." } },
      { ru: "ко́мнаты", say: "kOmnaty", focus: { en: "ы in an unstressed ending: short but still ы.", ar: "ы في نهاية غير منبورة: قصيرة لكنّها تبقى ы." } },
      { ru: "карандаши́", say: "karandashY", focus: { en: "Written и, heard ы after ш.", ar: "تُكتب и وتُسمع ы بعد ш." } },
      { ru: "кни́ги и ру́чки", say: "knIgi i rUchki", focus: { en: "After г and к: a clear 'i'.", ar: "بعد г وк: «i» واضحة." } },
      { ru: "Э́то мои́ очки́.", say: "Eta maI achkI.", focus: { en: "мои́ has two separate vowels: ma-I.", ar: "في мои́ حرفان صوتيان منفصلان: ma-I." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "What is the plural of стол?", ar: "ما جمع стол؟" },
      options: ["столы́", "столи́", "стола́"],
      answer: 0,
      why: { en: "A masculine noun ending in a consonant adds -ы: столы́.", ar: "الاسم المذكّر المنتهي بحرف صامت تُضاف إليه -ы: столы́." },
    },
    {
      kind: "choice",
      prompt: { en: "What is the plural of кни́га?", ar: "ما جمع кни́га؟" },
      options: ["кни́гы", "кни́ги", "кни́га"],
      answer: 1,
      why: { en: "After г you write и, never ы: кни́ги.", ar: "بعد г تُكتب и لا ы: кни́ги." },
    },
    {
      kind: "choice",
      prompt: { en: "What is the plural of окно́?", ar: "ما جمع окно́؟" },
      options: ["о́кна", "окны́", "окни́"],
      answer: 0,
      why: { en: "Neuter -о becomes -а, and the stress moves: о́кна.", ar: "في الاسم المحايد تتحوّل -о إلى -а، وينتقل النبر: о́кна." },
    },
    {
      kind: "choice",
      prompt: { en: "What is the plural of го́род?", ar: "ما جمع го́род؟" },
      options: ["го́роды", "города́", "городи́"],
      answer: 1,
      why: { en: "го́род is one of the words with a stressed -а́: города́.", ar: "го́род من الكلمات التي تُجمع بـ -а́ المنبورة: города́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: This is Anna, and this is her bag.", ar: "أكمل: هذه آنا، وهذه حقيبتها." },
      ru: "Э́то А́нна, а э́то ___ су́мка.",
      answers: ["её"],
      why: { en: "'Her' is её, and it never changes.", ar: "«ـها» هي её، ولا تتغيّر أبدًا." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: This is Maxim, and these are his glasses.", ar: "أكمل: هذا مكسيم، وهذه نظّارته." },
      ru: "Э́то Макси́м, а э́то ___ очки́.",
      answers: ["его́"],
      why: { en: "'His' is его́, said 'yivO'.", ar: "«ـه» هي его́، وتُنطق «yivO»." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: We are here, and here is our house.", ar: "أكمل: نحن هنا، وها هو بيتنا." },
      ru: "Мы здесь, а вот ___ дом.",
      answers: ["наш"],
      why: { en: "дом is masculine, so 'our' is наш.", ar: "дом مذكّر، لذلك نقول наш." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Are these your notebooks, Olga Petrovna?", ar: "أكمل: هل هذه دفاتركِ يا أولغا بتروفنا؟" },
      ru: "Э́то ___ тетра́ди, О́льга Петро́вна?",
      answers: ["ва́ши"],
      why: { en: "A teacher gets the polite вы, and тетра́ди is plural: ва́ши.", ar: "مع المعلّمة نستخدم вы للاحترام، وтетра́ди جمع: ва́ши." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: These are my books.", ar: "كوّن الجملة: هذه كتبي." },
      tokens: ["кни́ги", "мои́", "Э́то"],
      answers: ["Э́то мои́ кни́ги."],
      why: { en: "Э́то also means 'these are': Э́то мои́ кни́ги.", ar: "Э́то تعني أيضًا «هذه (للجمع)»: Э́то мои́ кни́ги." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: This is not their house.", ar: "كوّن الجملة: هذا ليس بيتهم." },
      tokens: ["их", "Э́то", "дом", "не"],
      answers: ["Э́то не их дом."],
      why: { en: "не goes right before the words it denies: не их дом.", ar: "توضع не مباشرة قبل ما تنفيه: не их дом." },
    },
    {
      kind: "translate",
      prompt: { en: "These are my friends (women).", ar: "هؤلاء صديقاتي." },
      answers: ["Э́то мои́ подру́ги."],
      why: { en: "подру́га → подру́ги: after г write и.", ar: "подру́га ← подру́ги: بعد г تُكتب и." },
    },
    {
      kind: "translate",
      prompt: { en: "Where are the keys?", ar: "أين المفاتيح؟" },
      answers: ["Где ключи́?"],
      why: { en: "ключ → ключи́: after ч write и, and the stress moves to the end.", ar: "ключ ← ключи́: بعد ч تُكتب и، وينتقل النبر إلى الآخر." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What do you hear?", ar: "استمع. ماذا تسمع؟" },
      ru: "Э́то её ру́чки.",
      listen: true,
      options: ["These are her pens. · هذه أقلامها.", "These are his pens. · هذه أقلامه.", "This is her pen. · هذا قلمها."],
      answer: 0,
      why: { en: "её is 'her' and ру́чки is plural.", ar: "её تعني «ـها»، وру́чки جمع." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the person ask?", ar: "استمع. عمّ يسأل الشخص؟" },
      ru: "Чьи э́то словари́?",
      listen: true,
      options: ["Whose dictionaries are these? · لمن هذه القواميس؟", "Where are the dictionaries? · أين القواميس؟", "Are these your dictionaries? · هل هذه قواميسك؟"],
      answer: 0,
      why: { en: "Чьи is 'whose' for plural things.", ar: "Чьи تعني «لمن» مع الأشياء المجموعة." },
    },
  ],
  topics: ["plurals", "possessives"],
  search: ["Russian plural nouns for beginners", "Russian possessive pronouns наш ваш его её их"],
  speaking: {
    scenario: {
      en: "Unpack a bag with Anna after class. Take things out one by one and say whose they are: Э́то мои́ кни́ги? — Нет, э́то её кни́ги.",
      ar: "أفرغ حقيبة مع آنا بعد الدرس. أخرج الأشياء واحدًا تلو الآخر وقل لمن هي: Э́то мои́ кни́ги؟ — Нет, э́то её кни́ги.",
    },
    tutorBrief:
      "Play Anna (Анна), unpacking a big bag of shared study things with the learner after class; Maxim's and Olga Petrovna's things are mixed in. Take items out one by one — pens, pencils, notebooks, dictionaries, textbooks, books, photos, glasses, a hat — and ask Чьи это…? Это твои…? The learner answers with plurals and possessives: мои, твои, наши, ваши, его, её, их. Use only words taught up to day 9. If the learner builds a wrong plural (книгы) or writes ы after г, к, х, ж, ш, ч, щ, correct it and have them repeat. End by summing up whose things are whose.",
    prompts: [
      { ru: "Чьи э́то кни́ги?", en: "Whose books are these?", ar: "لمن هذه الكتب؟" },
      { ru: "Э́то мои́ ру́чки и мои́ тетра́ди.", en: "These are my pens and my notebooks.", ar: "هذه أقلامي ودفاتري." },
      { ru: "Нет, э́то не мои́ кни́ги. Э́то её кни́ги.", en: "No, these aren't my books. They're her books.", ar: "لا، هذه ليست كتبي. إنّها كتبها." },
      { ru: "Э́то наш го́род, а э́то наш дом.", en: "This is our town, and this is our house.", ar: "هذه مدينتنا، وهذا بيتنا." },
    ],
  },
  journal: {
    en: "Write 3–5 sentences about the things in your bag and your friends' things, using plurals: Э́то мои́ кни́ги. Э́то его́ ру́чки…",
    ar: "اكتب من ٣ إلى ٥ جمل عن الأشياء التي في حقيبتك وأشياء أصدقائك، مستخدمًا الجمع: Э́то мои́ кни́ги. Э́то его́ ру́чки…",
  },
  culture: {
    en: "Russian students still write a lot by hand, in paper exercise books (тетра́ди) with squared or lined pages. School marks run from 1 to 5, and 5 — отли́чно — is the best.",
    ar: "ما زال الطلاب الروس يكتبون كثيرًا بخطّ اليد في دفاتر ورقية (тетра́ди) بصفحات مربّعة أو مسطّرة. والدرجات المدرسية من ١ إلى ٥، و٥ — отли́чно — هي الأعلى.",
  },
};

const DAY_10: Day = {
  n: 10,
  week: 2,
  kind: "lesson",
  title: { ru: "Что ты де́лаешь?", en: "What are you doing? Verbs 1", ar: "ماذا تفعل؟ الأفعال (١)" },
  goals: [
    {
      en: "Conjugate first-conjugation verbs in the present: чита́ю, чита́ешь, чита́ет…",
      ar: "أن تصرّف أفعال التصريف الأول في المضارع: чита́ю، чита́ешь، чита́ет…",
    },
    {
      en: "Ask questions with что, кто, где, как and почему́.",
      ar: "أن تسأل باستخدام что وкто وгде وкак وпочему́.",
    },
    {
      en: "Say what you are doing now and what you do often or sometimes.",
      ar: "أن تقول ماذا تفعل الآن وماذا تفعل كثيرًا أو أحيانًا.",
    },
  ],
  words: [
    {
      id: "d10-01", ru: "чита́ть", say: "chitAt'", en: "to read", ar: "يقرأ", pos: "verb", forms: "чита́ю, чита́ешь",
      ex: { ru: "Я чита́ю письмо́.", en: "I'm reading a letter.", ar: "أقرأ رسالة." },
    },
    {
      id: "d10-02", ru: "знать", say: "znat'", en: "to know", ar: "يعرف", pos: "verb", forms: "зна́ю, зна́ешь",
      ex: { ru: "Макси́м всё зна́ет.", en: "Maxim knows everything.", ar: "مكسيم يعرف كلّ شيء." },
    },
    {
      id: "d10-03", ru: "рабо́тать", say: "rabOtat'", en: "to work", ar: "يعمل", pos: "verb", forms: "рабо́таю, рабо́таешь",
      ex: { ru: "Сейча́с мы рабо́таем.", en: "We're working now.", ar: "نحن نعمل الآن." },
    },
    {
      id: "d10-04", ru: "де́лать", say: "dyElat'", en: "to do; to make", ar: "يفعل؛ يصنع", pos: "verb", forms: "де́лаю, де́лаешь",
      ex: { ru: "Что вы де́лаете?", en: "What are you doing?", ar: "ماذا تفعلون؟" },
    },
    {
      id: "d10-05", ru: "понима́ть", say: "panimAt'", en: "to understand", ar: "يفهم", pos: "verb", forms: "понима́ю, понима́ешь",
      ex: { ru: "— Ты понима́ешь? — Да, понима́ю.", en: "— Do you understand? — Yes, I do.", ar: "— هل تفهم؟ — نعم، أفهم." },
    },
    {
      id: "d10-06", ru: "слу́шать", say: "slUshat'", en: "to listen (to)", ar: "يستمع (إلى)", pos: "verb", forms: "слу́шаю, слу́шаешь",
      ex: { ru: "Я слу́шаю ра́дио.", en: "I'm listening to the radio.", ar: "أستمع إلى الراديو." },
      note: { en: "No preposition is needed: слу́шать ра́дио = to listen to the radio.", ar: "لا حاجة إلى حرف جرّ: слу́шать ра́дио = يستمع إلى الراديو." },
    },
    {
      id: "d10-07", ru: "отдыха́ть", say: "addykhAt'", en: "to rest, to relax; to be on holiday", ar: "يرتاح؛ يقضي عطلة", pos: "verb", forms: "отдыха́ю, отдыха́ешь",
      ex: { ru: "Сейча́с я отдыха́ю.", en: "I'm relaxing now.", ar: "أنا أرتاح الآن." },
    },
    {
      id: "d10-08", ru: "гуля́ть", say: "gulyAt'", en: "to go for a walk, to stroll", ar: "يتنزّه؛ يتمشّى", pos: "verb", forms: "гуля́ю, гуля́ешь",
      ex: { ru: "Мы ча́сто гуля́ем.", en: "We often go for walks.", ar: "نتنزّه كثيرًا." },
    },
    {
      id: "d10-09", ru: "игра́ть", say: "igrAt'", en: "to play", ar: "يلعب", pos: "verb", forms: "игра́ю, игра́ешь",
      ex: { ru: "Де́вочка игра́ет.", en: "The girl is playing.", ar: "البنت تلعب." },
    },
    {
      id: "d10-10", ru: "ду́мать", say: "dUmat'", en: "to think", ar: "يفكّر؛ يظنّ", pos: "verb", forms: "ду́маю, ду́маешь",
      ex: { ru: "Как ты ду́маешь?", en: "What do you think?", ar: "ما رأيك؟" },
      note: {
        en: "Как ты ду́маешь? — literally 'how do you think?' — is the normal way to ask 'What do you think?'",
        ar: "Как ты ду́маешь؟ — حرفيًّا «كيف تفكّر؟» — هي الطريقة المعتادة لسؤال «ما رأيك؟»",
      },
    },
    {
      id: "d10-11", ru: "сейча́с", say: "sichAs", en: "now, right now", ar: "الآن", pos: "adv",
      ex: { ru: "Что ты сейча́с де́лаешь?", en: "What are you doing right now?", ar: "ماذا تفعل الآن؟" },
    },
    {
      id: "d10-12", ru: "всегда́", say: "fsigdA", en: "always", ar: "دائمًا", pos: "adv",
      ex: { ru: "Он всегда́ рабо́тает.", en: "He's always working.", ar: "هو يعمل دائمًا." },
    },
    {
      id: "d10-13", ru: "ча́сто", say: "chAsta", en: "often", ar: "كثيرًا؛ غالبًا", pos: "adv",
      ex: { ru: "Я ча́сто слу́шаю ра́дио.", en: "I often listen to the radio.", ar: "أستمع إلى الراديو كثيرًا." },
    },
    {
      id: "d10-14", ru: "иногда́", say: "inagdA", en: "sometimes", ar: "أحيانًا", pos: "adv",
      ex: { ru: "Иногда́ я игра́ю.", en: "Sometimes I play.", ar: "أحيانًا ألعب." },
    },
    {
      id: "d10-15", ru: "что", say: "shto", en: "what", ar: "ماذا؛ ما", pos: "pron",
      ex: { ru: "Что э́то?", en: "What is this?", ar: "ما هذا؟" },
      note: { en: "Said 'shto': here ч sounds like ш.", ar: "تُنطق «shto»: حرف ч يُنطق هنا ш." },
    },
    {
      id: "d10-16", ru: "почему́", say: "pachimU", en: "why", ar: "لماذا", pos: "adv",
      ex: { ru: "Почему́ ты не отдыха́ешь?", en: "Why aren't you resting?", ar: "لماذا لا ترتاح؟" },
    },
    {
      id: "d10-17", ru: "Что ты де́лаешь?", say: "shto ty dyElayish?", en: "What are you doing? (informal)", ar: "ماذا تفعل؟ (غير رسمي)", pos: "phrase",
      note: { en: "To someone you call вы: Что вы де́лаете?", ar: "لمن تخاطبه بـ вы: Что вы де́лаете؟" },
    },
    { id: "d10-18", ru: "Я не зна́ю.", say: "ya ni znAyu.", en: "I don't know.", ar: "لا أعرف.", pos: "phrase" },
    { id: "d10-19", ru: "Я не понима́ю.", say: "ya ni panimAyu.", en: "I don't understand.", ar: "لا أفهم.", pos: "phrase" },
    {
      id: "d10-20", ru: "ра́дио", say: "rAdio", en: "radio", ar: "راديو (مذياع)", pos: "noun", g: "n",
      ex: { ru: "Вот моё ра́дио.", en: "Here's my radio.", ar: "ها هو الراديو الخاص بي." },
      note: { en: "It never changes its ending, not even in the plural.", ar: "لا تتغيّر نهايتها أبدًا، ولا حتى في الجمع." },
    },
  ],
  grammar: [
    {
      id: "d10-g1",
      title: { en: "First conjugation: чита́ть → я чита́ю", ar: "التصريف الأول: чита́ть ← я чита́ю" },
      en: [
        "A Russian verb changes its ending for every person, just as an Arabic present-tense verb does (أقرأ، تقرأ، يقرأ). Russian uses endings only: take чита́ть (to read), drop -ть and add -ю, -ешь, -ет, -ем, -ете, -ют.",
        "Most verbs in -ать and -ять work exactly like this: де́лать → я де́лаю, рабо́тать → ты рабо́таешь, гуля́ть → они́ гуля́ют. The stress stays on the same syllable in every form.",
        "To say 'not', put не right before the verb: Я не зна́ю. Он не рабо́тает.",
      ],
      ar: [
        "يتغيّر الفعل الروسي بحسب الضمير كما يتغيّر الفعل المضارع في العربية (أقرأ، تقرأ، يقرأ)، لكنّ الروسية تستخدم النهايات وحدها: خذ المصدر чита́ть (يقرأ)، واحذف -ть، ثم أضف -ю، -ешь، -ет، -ем، -ете، -ют.",
        "معظم الأفعال المنتهية بـ -ать و-ять تُصرَّف هكذا تمامًا: де́лать ← я де́лаю، рабо́тать ← ты рабо́таешь، гуля́ть ← они́ гуля́ют. ويبقى النبر على المقطع نفسه في كلّ الصيغ.",
        "وللنفي ضع не مباشرة قبل الفعل: Я не зна́ю. Он не рабо́тает.",
      ],
      tables: [
        {
          caption: { en: "The present tense of first-conjugation verbs", ar: "المضارع في أفعال التصريف الأول" },
          head: ["Person · الضمير", "чита́ть", "знать", "гуля́ть"],
          rows: [
            ["я", "чита́ю", "зна́ю", "гуля́ю"],
            ["ты", "чита́ешь", "зна́ешь", "гуля́ешь"],
            ["он / она́", "чита́ет", "зна́ет", "гуля́ет"],
            ["мы", "чита́ем", "зна́ем", "гуля́ем"],
            ["вы", "чита́ете", "зна́ете", "гуля́ете"],
            ["они́", "чита́ют", "зна́ют", "гуля́ют"],
          ],
        },
      ],
      examples: [
        { ru: "Я чита́ю, а ты слу́шаешь.", en: "I'm reading, and you're listening.", ar: "أنا أقرأ، وأنت تستمع." },
        { ru: "Они́ не рабо́тают, они́ отдыха́ют.", en: "They aren't working, they're resting.", ar: "هم لا يعملون، إنّهم يرتاحون." },
      ],
    },
    {
      id: "d10-g2",
      title: { en: "Question words: что, кто, где, как, почему́", ar: "أدوات الاستفهام: что، кто، где، как، почему́" },
      en: [
        "The question word goes first, and the voice falls on it — there is no rise at the end: Что ты де́лаешь? Где он рабо́тает?",
        "кто (who) takes the он-form of the verb, even when you expect several people: Кто зна́ет? Кто игра́ет?",
        "что is pronounced 'shto'. And a 'why' question often contains не: Почему́ ты не гуля́ешь? — Why don't you go for a walk?",
      ],
      ar: [
        "تأتي أداة الاستفهام أولًا، وينخفض الصوت عليها — ولا يرتفع في آخر الجملة: Что ты де́лаешь؟ Где он рабо́тает؟",
        "تأخذ кто (مَن) صيغة он من الفعل، حتى لو توقّعت عدّة أشخاص: Кто зна́ет؟ Кто игра́ет؟",
        "تُنطق что «shto». وكثيرًا ما يحتوي سؤال «لماذا» على не: Почему́ ты не гуля́ешь؟ — لماذا لا تتنزّه؟",
      ],
      tables: [
        {
          caption: { en: "Five question words", ar: "خمس أدوات استفهام" },
          head: ["Word · الكلمة", "Meaning · المعنى", "Example · مثال"],
          rows: [
            ["что", "what · ماذا / ما", "Что ты чита́ешь?"],
            ["кто", "who · مَن", "Кто там?"],
            ["где", "where · أين", "Где ты рабо́таешь?"],
            ["как", "how · كيف", "Как ты ду́маешь?"],
            ["почему́", "why · لماذا", "Почему́ ты не отдыха́ешь?"],
          ],
        },
      ],
      examples: [
        { ru: "— Кто там? — Э́то я, Ахме́д!", en: "— Who's there? — It's me, Ahmed!", ar: "— مَن هناك؟ — هذا أنا، أحمد!" },
        { ru: "— Почему́ ты не гуля́ешь? — Я рабо́таю.", en: "— Why aren't you out for a walk? — I'm working.", ar: "— لماذا لا تتنزّه؟ — أنا أعمل." },
      ],
    },
    {
      id: "d10-g3",
      title: { en: "One present tense: 'I read' and 'I am reading'", ar: "مضارع واحد: «أقرأ» و«أقرأ الآن»" },
      en: [
        "Russian has only one present tense: Я чита́ю means both 'I read' and 'I am reading'. Context and time words tell them apart. Arabic works the same way: أقرأ covers both.",
        "сейча́с (now) points to what is happening at this moment; всегда́, ча́сто and иногда́ describe habits: Сейча́с я чита́ю. Я ча́сто чита́ю.",
        "These time words usually stand before the verb (Я иногда́ гуля́ю) or open the sentence (Иногда́ я гуля́ю).",
      ],
      ar: [
        "في الروسية زمن مضارع واحد فقط: Я чита́ю تعني «أقرأ» و«أقرأ الآن» معًا، والسياق وكلمات الزمن تفرّق بينهما. والعربية كذلك: «أقرأ» تشمل المعنيين.",
        "تدلّ сейча́с (الآن) على ما يحدث في هذه اللحظة، أمّا всегда́ وча́сто وиногда́ فتصف العادات: Сейча́с я чита́ю. Я ча́сто чита́ю.",
        "تقف كلمات الزمن هذه عادةً قبل الفعل (Я иногда́ гуля́ю) أو في أول الجملة (Иногда́ я гуля́ю).",
      ],
      examples: [
        { ru: "Сейча́с Макси́м рабо́тает.", en: "Maxim is working right now.", ar: "مكسيم يعمل الآن." },
        { ru: "Макси́м всегда́ рабо́тает.", en: "Maxim always works.", ar: "مكسيم يعمل دائمًا." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Что ты де́лаешь?", en: "What are you doing?", ar: "ماذا تفعل؟" },
    setting: {
      en: "A Saturday afternoon. Anna phones Ahmed, and she can hear a computer game in the background.",
      ar: "بعد ظهر يوم سبت. تتّصل آنا بأحمد، وتسمع صوت لعبة حاسوب في الخلفية.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Приве́т, Ахме́д! Что ты де́лаешь?", en: "Hi, Ahmed! What are you doing?", ar: "مرحبًا يا أحمد! ماذا تفعل؟" },
      { who: "A", name: "Ахме́д", ru: "Приве́т! Я рабо́таю.", en: "Hi! I'm working.", ar: "مرحبًا! أنا أعمل." },
      { who: "B", name: "А́нна", ru: "Рабо́таешь? А что э́то? Ты игра́ешь?", en: "Working? Then what's that? Are you playing?", ar: "تعمل؟ وما هذا إذن؟ هل تلعب؟" },
      { who: "A", name: "Ахме́д", ru: "Ну… Иногда́ я игра́ю. Сейча́с я отдыха́ю!", en: "Well… Sometimes I play. Right now I'm resting!", ar: "حسنًا… أحيانًا ألعب. أنا أرتاح الآن!" },
      { who: "B", name: "А́нна", ru: "Ты ча́сто отдыха́ешь!", en: "You rest a lot!", ar: "أنت ترتاح كثيرًا!" },
      { who: "A", name: "Ахме́д", ru: "А ты? Что ты де́лаешь?", en: "And you? What are you doing?", ar: "وأنتِ؟ ماذا تفعلين؟" },
      { who: "B", name: "А́нна", ru: "Я чита́ю, а Макси́м слу́шает ра́дио.", en: "I'm reading, and Maxim is listening to the radio.", ar: "أنا أقرأ، ومكسيم يستمع إلى الراديو." },
      {
        who: "A", name: "Ахме́д", ru: "А О́льга Петро́вна? Как ты ду́маешь, что она́ сейча́с де́лает?",
        en: "And Olga Petrovna? What do you think she's doing now?", ar: "وأولغا بتروفنا؟ ما رأيكِ، ماذا تفعل الآن؟",
      },
      { who: "B", name: "А́нна", ru: "Я не зна́ю. Она́ всегда́ рабо́тает!", en: "I don't know. She's always working!", ar: "لا أعرف. إنّها تعمل دائمًا!" },
      { who: "A", name: "Ахме́д", ru: "Почему́ ты так ду́маешь?", en: "Why do you think so?", ar: "لماذا تظنّين ذلك؟" },
      { who: "B", name: "А́нна", ru: "Она́ всё зна́ет!", en: "She knows everything!", ar: "إنّها تعرف كلّ شيء!" },
      { who: "A", name: "Ахме́д", ru: "Пра́вильно!", en: "That's right!", ar: "صحيح!" },
    ],
  },
  pronunciation: {
    title: { en: "The hidden 'y': чита́ю, чита́ешь", ar: "الـ«ي» الخفيّة: чита́ю، чита́ешь" },
    en: [
      "After a vowel, the letters ю, е and я start with a 'y' sound: чита́ю is 'chi-tA-yu', чита́ешь is 'chi-tA-yish'. Keep that 'y' — it carries the ending.",
      "In an unstressed ending, е sounds like a short 'i': зна́ешь ≈ 'znAyish', де́лает ≈ 'dyElayit'.",
      "The stress never moves in these verbs: чита́ю, чита́ешь, чита́ют are all stressed on -та́-.",
    ],
    ar: [
      "بعد حرف صوتي تبدأ الحروف ю وе وя بصوت «ي»: чита́ю تُنطق «chi-tA-yu»، وчита́ешь تُنطق «chi-tA-yish». حافظ على هذه الـ«ي»، فهي التي تحمل النهاية.",
      "في النهاية غير المنبورة تُنطق е مثل «i» قصيرة: зна́ешь ≈ «znAyish»، де́лает ≈ «dyElayit».",
      "النبر لا يتحرّك أبدًا في هذه الأفعال: чита́ю وчита́ешь وчита́ют كلّها منبورة على -та́-.",
    ],
    drills: [
      { ru: "чита́ю", say: "chitAyu", focus: { en: "A clear 'y' before the final 'u'.", ar: "«ي» واضحة قبل «u» الأخيرة." } },
      { ru: "чита́ешь", say: "chitAyish", focus: { en: "The unstressed е becomes a short 'i'; ш is hard.", ar: "е غير المنبورة تصبح «i» قصيرة، وш صلبة." } },
      { ru: "они́ гуля́ют", say: "anI gulyAyut", focus: { en: "A soft л, then a 'y' before the ending.", ar: "л ليّنة، ثم «ي» قبل النهاية." } },
      { ru: "Что ты де́лаешь?", say: "shto ty dyElayish?", focus: { en: "что is 'shto'; the voice falls on the question word.", ar: "что تُنطق «shto»، وينخفض الصوت على أداة الاستفهام." } },
      { ru: "Я не понима́ю.", say: "ya ni panimAyu.", focus: { en: "не is unstressed: a quick 'ni' glued to the verb.", ar: "не غير منبورة: «ni» سريعة ملتصقة بالفعل." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the right form: Я ___ (чита́ть).", ar: "اختر الصيغة الصحيحة: Я ___ (чита́ть)." },
      options: ["чита́ю", "чита́ешь", "чита́ет", "чита́ют"],
      answer: 0,
      why: { en: "я takes -ю: я чита́ю.", ar: "مع я نضيف -ю: я чита́ю." },
    },
    {
      kind: "choice",
      prompt: { en: "Which question is correct?", ar: "أيّ سؤال صحيح؟" },
      options: ["Кто зна́ет?", "Кто зна́ют?", "Кто зна́ешь?"],
      answer: 0,
      why: { en: "кто takes the он-form: Кто зна́ет?", ar: "تأخذ кто صيغة он: Кто зна́ет؟" },
    },
    {
      kind: "choice",
      prompt: { en: "Which question word fits? — ___ ты не отдыха́ешь? — Я рабо́таю.", ar: "أيّ أداة استفهام تناسب؟ — ___ ты не отдыха́ешь؟ — Я рабо́таю." },
      options: ["Почему́", "Где", "Кто"],
      answer: 0,
      why: { en: "The answer gives a reason, so the question is почему́ (why).", ar: "الجواب يذكر سببًا، فالسؤال بـ почему́ (لماذا)." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: We are listening to the radio.", ar: "أكمل: نحن نستمع إلى الراديو." },
      ru: "Мы ___ ра́дио.",
      answers: ["слу́шаем"],
      why: { en: "мы takes -ем: мы слу́шаем.", ar: "مع мы نضيف -ем: мы слу́шаем." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with гуля́ть: They often go for walks.", ar: "أكمل بالفعل гуля́ть: هم يتنزّهون كثيرًا." },
      ru: "Они́ ча́сто ___.",
      answers: ["гуля́ют"],
      why: { en: "они́ takes -ют: они́ гуля́ют.", ar: "مع они́ نضيف -ют: они́ гуля́ют." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with рабо́тать: Are you working now? (formal)", ar: "أكمل بالفعل рабо́тать: هل تعمل حضرتك الآن؟" },
      ru: "Вы сейча́с ___?",
      answers: ["рабо́таете"],
      why: { en: "вы takes -ете: вы рабо́таете.", ar: "مع вы نضيف -ете: вы рабо́таете." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with де́лать: What are you doing? (informal)", ar: "أكمل بالفعل де́лать: ماذا تفعل؟ (غير رسمي)" },
      ru: "Что ты ___?",
      answers: ["де́лаешь"],
      why: { en: "ты takes -ешь: ты де́лаешь.", ar: "مع ты نضيف -ешь: ты де́лаешь." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: What are you doing?", ar: "كوّن السؤال: ماذا تفعل؟" },
      tokens: ["ты", "Что", "де́лаешь"],
      answers: ["Что ты де́лаешь?"],
      why: { en: "The question word comes first.", ar: "أداة الاستفهام أولًا." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I sometimes go for a walk.", ar: "كوّن الجملة: أتنزّه أحيانًا." },
      tokens: ["иногда́", "Я", "гуля́ю"],
      answers: ["Я иногда́ гуля́ю.", "Иногда́ я гуля́ю."],
      why: { en: "Time words stand before the verb or open the sentence.", ar: "تقف كلمات الزمن قبل الفعل أو في أول الجملة." },
    },
    {
      kind: "translate",
      prompt: { en: "I don't understand.", ar: "لا أفهم." },
      answers: ["Я не понима́ю.", "Не понима́ю."],
      why: { en: "не goes right before the verb.", ar: "توضع не مباشرة قبل الفعل." },
    },
    {
      kind: "translate",
      prompt: { en: "She is reading now.", ar: "هي تقرأ الآن." },
      answers: ["Она́ сейча́с чита́ет.", "Сейча́с она́ чита́ет.", "Она́ чита́ет сейча́с."],
      why: { en: "One present tense: чита́ет is 'reads' and 'is reading'; сейча́с shows 'now'.", ar: "مضارع واحد: чита́ет تعني «تقرأ» و«تقرأ الآن»، وсейча́с تدلّ على اللحظة." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the person ask?", ar: "استمع. عمّ يسأل الشخص؟" },
      ru: "Что вы де́лаете?",
      listen: true,
      options: ["What are you doing? · ماذا تفعلون؟", "Where do you work? · أين تعملون؟", "What do you think? · ما رأيكم؟"],
      answer: 0,
      why: { en: "Что… де́лаете? — what are you doing?", ar: "Что… де́лаете؟ — ماذا تفعلون؟" },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. How often does the person listen to the radio?", ar: "استمع. كم مرّة يستمع الشخص إلى الراديو؟" },
      ru: "Я всегда́ слу́шаю ра́дио.",
      listen: true,
      options: ["always · دائمًا", "often · كثيرًا", "sometimes · أحيانًا"],
      answer: 0,
      why: { en: "всегда́ means 'always'.", ar: "всегда́ تعني «دائمًا»." },
    },
  ],
  topics: ["present-tense", "questions"],
  search: ["Russian first conjugation verbs present tense", "Russian question words что кто где как почему"],
  speaking: {
    scenario: {
      en: "A phone call with Maxim: tell him what you are doing right now and what you do often, sometimes and always: Сейча́с я чита́ю. Иногда́ я гуля́ю.",
      ar: "مكالمة هاتفية مع مكسيم: قل له ماذا تفعل الآن، وماذا تفعل كثيرًا وأحيانًا ودائمًا: Сейча́с я чита́ю. Иногда́ я гуля́ю.",
    },
    tutorBrief:
      "Play Maxim (Максим), Anna's brother, a programmer who is always working, chatting with the learner by phone. Ask what they are doing right now (Что ты сейчас делаешь?) and what they do often, sometimes and always, and answer their questions about yourself. Use first-conjugation verbs only: читать, знать, работать, делать, понимать, слушать, отдыхать, гулять, играть, думать, with сейчас, всегда, часто, иногда and the question words что, кто, где, как, почему. If the learner uses a wrong ending (я читает), give the correct form and ask them to repeat the whole sentence. Finish by naming one thing you both do.",
    prompts: [
      { ru: "Сейча́с я чита́ю.", en: "I'm reading right now.", ar: "أنا أقرأ الآن." },
      { ru: "Я ча́сто слу́шаю ра́дио.", en: "I often listen to the radio.", ar: "أستمع إلى الراديو كثيرًا." },
      { ru: "Иногда́ я игра́ю, а иногда́ гуля́ю.", en: "Sometimes I play, and sometimes I go for a walk.", ar: "أحيانًا ألعب، وأحيانًا أتنزّه." },
      { ru: "А ты? Что ты де́лаешь?", en: "And you? What are you doing?", ar: "وأنت؟ ماذا تفعل؟" },
      { ru: "Почему́ ты не отдыха́ешь?", en: "Why aren't you resting?", ar: "لماذا لا ترتاح؟" },
    ],
  },
  journal: {
    en: "Write 3–5 sentences about what you do: what you are doing right now, what you always do and what you sometimes do (Сейча́с я… Я всегда́… Иногда́ я…).",
    ar: "اكتب من ٣ إلى ٥ جمل عمّا تفعله: ماذا تفعل الآن، وماذا تفعل دائمًا، وماذا تفعل أحيانًا (Сейча́с я… Я всегда́… Иногда́ я…).",
  },
  culture: {
    en: "Russians love to гуля́ть: a walk with no goal at all — through a park, along a river, round the city centre — is a normal way to spend free time or even a first date, in almost any weather.",
    ar: "يحبّ الروس أن «يتنزّهوا» (гуля́ть): المشي بلا هدف في حديقة أو على ضفّة نهر أو في وسط المدينة طريقة عادية لقضاء وقت الفراغ، بل وللقاء الأول أيضًا، في أيّ طقس تقريبًا.",
  },
};

const DAY_11: Day = {
  n: 11,
  week: 2,
  kind: "lesson",
  title: { ru: "Я говорю́ по-ру́сски", en: "I speak Russian: verbs 2", ar: "أتكلم الروسية: الأفعال (٢)" },
  goals: [
    {
      en: "Conjugate second-conjugation verbs: говорю́, говори́шь, говори́т…",
      ar: "أن تصرّف أفعال التصريف الثاني: говорю́، говори́шь، говори́т…",
    },
    {
      en: "Use the changed я-forms люблю́ and ви́жу.",
      ar: "أن تستخدم صيغتَي я المتغيّرتين: люблю́ وви́жу.",
    },
    {
      en: "Say which languages you speak, and ask someone to repeat or to speak slowly.",
      ar: "أن تقول أيّ اللغات تتكلّم، وأن تطلب من أحد أن يعيد أو أن يتكلّم ببطء.",
    },
  ],
  words: [
    {
      id: "d11-01", ru: "говори́ть", say: "gavarIt'", en: "to speak, to talk; to say", ar: "يتكلّم؛ يقول", pos: "verb", forms: "говорю́, говори́шь",
      ex: { ru: "Я говорю́ по-ара́бски.", en: "I speak Arabic.", ar: "أتكلّم العربية." },
    },
    {
      id: "d11-02", ru: "люби́ть", say: "lyubIt'", en: "to love; to like", ar: "يحبّ", pos: "verb", forms: "люблю́, лю́бишь",
      ex: { ru: "Я люблю́ чай.", en: "I love tea.", ar: "أحبّ الشاي." },
      note: {
        en: "The я-form gains an л: люблю́. Then the stress moves back: лю́бишь, лю́бит.",
        ar: "تكتسب صيغة я حرف л: люблю́. ثم يرجع النبر إلى الوراء: лю́бишь، лю́бит.",
      },
    },
    {
      id: "d11-03", ru: "смотре́ть", say: "smatryEt'", en: "to watch, to look (at)", ar: "يشاهد؛ ينظر", pos: "verb", forms: "смотрю́, смо́тришь",
      ex: { ru: "Мы смо́трим мультфи́льм.", en: "We're watching a cartoon.", ar: "نشاهد رسومًا متحركة." },
    },
    {
      id: "d11-04", ru: "звони́ть", say: "zvanIt'", en: "to call, to phone; to ring", ar: "يتّصل هاتفيًّا؛ يرنّ", pos: "verb", forms: "звоню́, звони́шь",
      ex: { ru: "Кто звони́т?", en: "Who's calling?", ar: "مَن المتّصل؟" },
      note: { en: "The stress stays on the ending: звони́т, not зво́нит.", ar: "يبقى النبر على النهاية: звони́т لا зво́нит." },
    },
    {
      id: "d11-05", ru: "учи́ть", say: "uchIt'", en: "to learn (words, a language); to teach", ar: "يتعلّم؛ يحفظ؛ يعلّم", pos: "verb", forms: "учу́, у́чишь",
      ex: { ru: "Я учу́ слова́.", en: "I'm learning words.", ar: "أحفظ كلمات." },
      note: { en: "After ч the endings are -у and -ат: учу́, у́чат.", ar: "بعد ч تكون النهايتان -у و-ат: учу́، у́чат." },
    },
    {
      id: "d11-06", ru: "по́мнить", say: "pOmnit'", en: "to remember", ar: "يتذكّر", pos: "verb", forms: "по́мню, по́мнишь",
      ex: { ru: "Ты по́мнишь сло́во?", en: "Do you remember the word?", ar: "هل تتذكّر الكلمة؟" },
    },
    {
      id: "d11-07", ru: "ви́деть", say: "vIdit'", en: "to see", ar: "يرى", pos: "verb", forms: "ви́жу, ви́дишь",
      ex: { ru: "Я ви́жу мо́ре!", en: "I can see the sea!", ar: "أرى البحر!" },
      note: { en: "д becomes ж in the я-form only: ви́жу, but ты ви́дишь.", ar: "تتحوّل д إلى ж في صيغة я فقط: ви́жу، لكن ты ви́дишь." },
    },
    {
      id: "d11-08", ru: "язы́к", say: "yizYk", en: "language; tongue", ar: "لغة؛ لسان", pos: "noun", g: "m", forms: "мн. ч. языки́",
      ex: { ru: "Я люблю́ ру́сский язы́к.", en: "I love the Russian language.", ar: "أحبّ اللغة الروسية." },
      note: { en: "Like Arabic لسان, язы́к is also the tongue in your mouth.", ar: "مثل «لسان» في العربية، تعني язы́к أيضًا العضو الذي في الفم." },
    },
    {
      id: "d11-09", ru: "по-ру́сски", say: "pa-rUski", en: "in Russian", ar: "بالروسية", pos: "adv",
      ex: { ru: "Вы говори́те по-ру́сски?", en: "Do you speak Russian?", ar: "هل تتكلّم الروسية؟" },
    },
    {
      id: "d11-10", ru: "по-англи́йски", say: "pa-anglIyski", en: "in English", ar: "بالإنجليزية", pos: "adv",
      ex: { ru: "Она́ говори́т по-англи́йски.", en: "She speaks English.", ar: "هي تتكلّم الإنجليزية." },
    },
    {
      id: "d11-11", ru: "по-ара́бски", say: "pa-arApski", en: "in Arabic", ar: "بالعربية", pos: "adv",
      ex: { ru: "Ахме́д ду́мает по-ара́бски.", en: "Ahmed thinks in Arabic.", ar: "أحمد يفكّر بالعربية." },
    },
    {
      id: "d11-12", ru: "немно́го", say: "nimnOga", en: "a little", ar: "قليلًا", pos: "adv",
      ex: { ru: "Я немно́го понима́ю по-ру́сски.", en: "I understand a little Russian.", ar: "أفهم الروسية قليلًا." },
    },
    {
      id: "d11-13", ru: "ме́дленно", say: "myEdlinna", en: "slowly", ar: "ببطء", pos: "adv",
      ex: { ru: "Говори́те ме́дленно, пожа́луйста.", en: "Please speak slowly.", ar: "تكلّم ببطء من فضلك." },
    },
    {
      id: "d11-14", ru: "Повтори́те, пожа́луйста.", say: "paftarItye, pazhAlusta.", en: "Please repeat (that).", ar: "أعد من فضلك.", pos: "phrase",
      note: { en: "To a friend: Повтори́, пожа́луйста.", ar: "لصديق: Повтори́, пожа́луйста." },
    },
    {
      id: "d11-15", ru: "бы́стро", say: "bYstra", en: "fast, quickly", ar: "بسرعة", pos: "adv",
      ex: { ru: "Вы говори́те бы́стро!", en: "You speak fast!", ar: "أنت تتكلّم بسرعة!" },
    },
    {
      id: "d11-16", ru: "ру́сский язы́к", say: "rUskiy yizYk", en: "the Russian language", ar: "اللغة الروسية", pos: "phrase",
      ex: { ru: "Я учу́ ру́сский язы́к.", en: "I'm learning Russian.", ar: "أتعلّم اللغة الروسية." },
      note: {
        en: "Use it with учи́ть: Я учу́ ру́сский язы́к. With говори́ть and понима́ть use по-ру́сски.",
        ar: "استخدمها مع учи́ть: Я учу́ ру́сский язы́к. ومع говори́ть وпонима́ть استخدم по-ру́сски.",
      },
    },
    {
      id: "d11-17", ru: "Как по-ру́сски…?", say: "kak pa-rUski…?", en: "How do you say … in Russian?", ar: "كيف نقول … بالروسية؟", pos: "phrase",
      ex: { ru: "Как по-ру́сски «key»?", en: "How do you say 'key' in Russian?", ar: "كيف نقول «key» بالروسية؟" },
    },
    {
      id: "d11-18", ru: "Мой родно́й язы́к — ара́бский.", say: "moy radnOy yizYk, arApskiy.", en: "My native language is Arabic.", ar: "لغتي الأم هي العربية.", pos: "phrase",
      note: { en: "родно́й = native; ара́бский = Arabic.", ar: "родно́й = الأم (الأصلية)؛ ара́бский = العربية." },
    },
  ],
  grammar: [
    {
      id: "d11-g1",
      title: { en: "Second conjugation: говори́ть → я говорю́", ar: "التصريف الثاني: говори́ть ← я говорю́" },
      en: [
        "The second conjugation has и in its endings: -ю (-у), -ишь, -ит, -им, -ите, -ят (-ат). Most verbs in -ить belong here, and some in -еть: говори́ть, звони́ть, смотре́ть, ви́деть.",
        "Drop -ить or -еть and add the endings: говорю́, говори́шь, говоря́т. Compare the first conjugation: чита́ешь, чита́ют — but говори́шь, говоря́т.",
        "Two traps. In some verbs the stress jumps back after the я-form: смотрю́ but смо́тришь; учу́ but у́чишь. And after ж, ш, ч, щ you write -у and -ат: учу́, у́чат.",
      ],
      ar: [
        "يحمل التصريف الثاني حرف и في نهاياته: -ю (-у)، -ишь، -ит، -им، -ите، -ят (-ат). وتنتمي إليه معظم الأفعال المنتهية بـ -ить وبعض المنتهية بـ -еть: говори́ть، звони́ть، смотре́ть، ви́деть.",
        "احذف -ить أو -еть وأضف النهايات: говорю́، говори́шь، говоря́т. وقارن بالتصريف الأول: чита́ешь، чита́ют — لكن говори́шь، говоря́т.",
        "انتبه لفخّين: في بعض الأفعال يرجع النبر إلى الوراء بعد صيغة я: смотрю́ لكن смо́тришь، وучу́ لكن у́чишь. وبعد ж وш وч وщ تُكتب -у و-ат: учу́، у́чат.",
      ],
      tables: [
        {
          caption: { en: "The present tense of second-conjugation verbs", ar: "المضارع في أفعال التصريف الثاني" },
          head: ["Person · الضمير", "говори́ть", "смотре́ть", "учи́ть"],
          rows: [
            ["я", "говорю́", "смотрю́", "учу́"],
            ["ты", "говори́шь", "смо́тришь", "у́чишь"],
            ["он / она́", "говори́т", "смо́трит", "у́чит"],
            ["мы", "говори́м", "смо́трим", "у́чим"],
            ["вы", "говори́те", "смо́трите", "у́чите"],
            ["они́", "говоря́т", "смо́трят", "у́чат"],
          ],
        },
      ],
      examples: [
        { ru: "Мы говори́м по-ру́сски, а они́ говоря́т по-англи́йски.", en: "We speak Russian, and they speak English.", ar: "نحن نتكلّم الروسية، وهم يتكلّمون الإنجليزية." },
        { ru: "— Что ты смо́тришь? — Мультфи́льм.", en: "— What are you watching? — A cartoon.", ar: "— ماذا تشاهد؟ — رسومًا متحركة." },
      ],
    },
    {
      id: "d11-g2",
      title: { en: "A new consonant in the я-form: люблю́, ви́жу", ar: "حرف جديد في صيغة я: люблю́، ви́жу" },
      en: [
        "In some second-conjugation verbs the я-form alone changes its consonant. After б, в, м, п, ф an л appears: люби́ть → люблю́.",
        "д becomes ж: ви́деть → ви́жу. Later you will also meet т → ч and с → ш.",
        "All the other forms keep the ordinary stem: люблю́ but лю́бишь, лю́бит, лю́бят; ви́жу but ви́дишь, ви́дит, ви́дят. After люблю́ you can also put a verb: Я люблю́ чита́ть.",
      ],
      ar: [
        "في بعض أفعال التصريف الثاني تتغيّر صيغة я وحدها بحرف جديد. فبعد б وв وм وп وф تظهر л: люби́ть ← люблю́.",
        "وتتحوّل д إلى ж: ви́деть ← ви́жу. وستلتقي لاحقًا بـ т ← ч وс ← ш أيضًا.",
        "أمّا بقية الصيغ فتحافظ على الجذر العادي: люблю́ لكن лю́бишь، лю́бит، лю́бят؛ وви́жу لكن ви́дишь، ви́дит، ви́дят. ويمكن أن يأتي بعد люблю́ فعل في المصدر: Я люблю́ чита́ть.",
      ],
      tables: [
        {
          caption: { en: "Only the я-form changes", ar: "صيغة я وحدها تتغيّر" },
          head: ["Person · الضمير", "люби́ть", "ви́деть"],
          rows: [
            ["я", "люблю́", "ви́жу"],
            ["ты", "лю́бишь", "ви́дишь"],
            ["он / она́", "лю́бит", "ви́дит"],
            ["мы", "лю́бим", "ви́дим"],
            ["вы", "лю́бите", "ви́дите"],
            ["они́", "лю́бят", "ви́дят"],
          ],
        },
      ],
      examples: [
        { ru: "Я люблю́ мо́ре, а ты лю́бишь парк.", en: "I love the sea, and you love the park.", ar: "أنا أحبّ البحر، وأنت تحبّ الحديقة." },
        { ru: "— Ты ви́дишь? — Да, ви́жу!", en: "— Can you see? — Yes, I can!", ar: "— هل ترى؟ — نعم، أرى!" },
        { ru: "Я люблю́ гуля́ть.", en: "I love going for walks.", ar: "أحبّ التنزّه." },
      ],
    },
    {
      id: "d11-g3",
      title: { en: "Languages: по-ру́сски or ру́сский язы́к?", ar: "اللغات: по-ру́сски أم ру́сский язы́к؟" },
      en: [
        "To say in which language you speak or understand, use по- + the language + -ски: Я говорю́ по-ру́сски. Я понима́ю по-англи́йски. It answers как? (how?) and is written with a hyphen.",
        "With учи́ть (to learn) you need the name of the language instead: Я учу́ ру́сский язы́к — never «учу́ по-ру́сски».",
        "Add how well: хорошо́, пло́хо, немно́го, бы́стро, ме́дленно — Я немно́го говорю́ по-ру́сски. To ask for a word, say Как по-ру́сски…?",
      ],
      ar: [
        "لتقول بأيّ لغة تتكلّم أو تفهم استخدم по- + اسم اللغة + -ски: Я говорю́ по-ру́сски. Я понима́ю по-англи́йски. وهي تجيب عن как؟ (كيف؟) وتُكتب بشرطة.",
        "مع учи́ть (يتعلّم) تحتاج بدلًا منها إلى اسم اللغة: Я учу́ ру́сский язы́к — ولا تقل أبدًا «учу́ по-ру́сски».",
        "وأضف مستوى الإتقان: хорошо́، пло́хо، немно́го، бы́стро، ме́дленно — Я немно́го говорю́ по-ру́сски. وللسؤال عن كلمة قل: Как по-ру́сски…؟",
      ],
      tables: [
        {
          caption: { en: "Three languages, two patterns", ar: "ثلاث لغات ونمطان" },
          head: ["Language · اللغة", "говори́ть / понима́ть", "учи́ть"],
          rows: [
            ["Russian · الروسية", "по-ру́сски", "ру́сский язы́к"],
            ["English · الإنجليزية", "по-англи́йски", "англи́йский язы́к"],
            ["Arabic · العربية", "по-ара́бски", "ара́бский язы́к"],
          ],
        },
      ],
      examples: [
        { ru: "Я говорю́ по-ара́бски и по-англи́йски.", en: "I speak Arabic and English.", ar: "أتكلّم العربية والإنجليزية." },
        { ru: "Я учу́ ру́сский язы́к и немно́го понима́ю по-ру́сски.", en: "I'm learning Russian, and I understand a little.", ar: "أتعلّم اللغة الروسية وأفهمها قليلًا." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Вы говори́те по-ара́бски?", en: "Do you speak Arabic?", ar: "هل تتكلّمين العربية؟" },
    setting: {
      en: "A language-exchange evening at a Moscow café. Ahmed meets Irina, who is learning Arabic. They have only just met, so they use вы.",
      ar: "أمسية لتبادل اللغات في مقهى بموسكو. يلتقي أحمد بإيرينا التي تتعلّم العربية. تعارفا للتوّ، لذلك يستخدمان вы.",
    },
    lines: [
      { who: "B", name: "Ири́на", ru: "Здра́вствуйте! Вы Ахме́д?", en: "Hello! Are you Ahmed?", ar: "مرحبًا! هل أنت أحمد؟" },
      { who: "A", name: "Ахме́д", ru: "Да. А вы Ири́на? О́чень прия́тно!", en: "Yes. And you're Irina? Nice to meet you!", ar: "نعم. وحضرتكِ إيرينا؟ تشرّفنا!" },
      { who: "B", name: "Ири́на", ru: "И мне то́же. Вы говори́те по-англи́йски?", en: "Nice to meet you too. Do you speak English?", ar: "وأنا كذلك. هل تتكلّم الإنجليزية؟" },
      {
        who: "A", name: "Ахме́д", ru: "Да. Мой родно́й язы́к — ара́бский, но я говорю́ и по-англи́йски.",
        en: "Yes. My native language is Arabic, but I speak English too.", ar: "نعم. لغتي الأم هي العربية، لكنّي أتكلّم الإنجليزية أيضًا.",
      },
      { who: "B", name: "Ири́на", ru: "А по-ру́сски?", en: "And Russian?", ar: "والروسية؟" },
      {
        who: "A", name: "Ахме́д", ru: "Немно́го. Я учу́ ру́сский язы́к. Я понима́ю, но говорю́ ме́дленно.",
        en: "A little. I'm learning Russian. I understand, but I speak slowly.", ar: "قليلًا. أتعلّم اللغة الروسية. أفهم، لكنّي أتكلّم ببطء.",
      },
      {
        who: "B", name: "Ири́на", ru: "А я учу́ ара́бский! Я о́чень люблю́ язы́к, ча́сто слу́шаю пе́сни по-ара́бски и по́мню слова́!",
        en: "And I'm learning Arabic! I really love the language — I often listen to songs in Arabic and I remember the words!",
        ar: "وأنا أتعلّم العربية! أحبّ هذه اللغة كثيرًا، وكثيرًا ما أستمع إلى أغانٍ بالعربية وأتذكّر كلماتها!",
      },
      {
        who: "A", name: "Ахме́д", ru: "Извини́те, вы говори́те бы́стро. Повтори́те, пожа́луйста, ме́дленно.",
        en: "Sorry, you speak fast. Please say it again slowly.", ar: "عذرًا، حضرتكِ تتكلّمين بسرعة. أعيدي من فضلك ببطء.",
      },
      { who: "B", name: "Ири́на", ru: "Я. Ча́сто. Слу́шаю. Пе́сни. По-ара́бски!", en: "I. Often. Listen. To songs. In Arabic!", ar: "أنا. كثيرًا. أستمع. إلى أغانٍ. بالعربية!" },
      {
        who: "A", name: "Ахме́д", ru: "А, понима́ю! Вы по́мните слова́? Как по-ара́бски «мо́ре»?",
        en: "Ah, I understand! So you remember the words? How do you say 'sea' in Arabic?", ar: "آه، فهمت! هل تتذكّرين الكلمات؟ كيف نقول «мо́ре» بالعربية؟",
      },
      { who: "B", name: "Ири́на", ru: "«Бахр»!", en: "'Bahr'!", ar: "«بحر»!" },
      { who: "A", name: "Ахме́д", ru: "Отли́чно! Вы хорошо́ говори́те по-ара́бски!", en: "Excellent! You speak Arabic well!", ar: "ممتاز! حضرتكِ تتكلّمين العربية جيدًا!" },
    ],
  },
  pronunciation: {
    title: { en: "Hard л and soft л: стол — люблю́", ar: "л الصلبة وл الليّنة: стол — люблю́" },
    en: [
      "Russian has two l's. Hard л is dark and deep: the back of the tongue rises, much like the heavy L of the Arabic word الله. You hear it in стол, ла́мпа, сло́во.",
      "Soft л — before я, е, и, ё, ю or ь — is light and bright: the middle of the tongue presses up, as in Arabic لي. Today's words have it: люблю́, ме́дленно, по-англи́йски.",
      "Keep them apart and you already sound more Russian: стол with one dark l, люблю́ with two light ones.",
    ],
    ar: [
      "في الروسية لامان. л الصلبة غليظة عميقة: يرتفع مؤخّر اللسان، قريبًا من اللام المفخّمة في لفظ الجلالة «الله». تسمعها في стол وла́мпа وсло́во.",
      "أمّا л الليّنة — قبل я وе وи وё وю أو ь — فخفيفة مرقّقة: يضغط وسط اللسان إلى الأعلى كما في «لي». وهي في كلمات اليوم: люблю́، ме́дленно، по-англи́йски.",
      "افصل بينهما وستبدو روسيًّا أكثر: стол بلام مفخّمة واحدة، وлюблю́ بلامين مرقّقتين.",
    ],
    drills: [
      { ru: "стол, ла́мпа", say: "stol, lAmpa", focus: { en: "A dark, heavy л.", ar: "لام مفخّمة غليظة." } },
      { ru: "люблю́", say: "lyublyU", focus: { en: "Two light, soft л's.", ar: "لامان مرقّقتان." } },
      { ru: "ме́дленно", say: "myEdlinna", focus: { en: "Soft м and soft л, then a long нн.", ar: "м ليّنة وл ليّنة، ثم нн ممدودة." } },
      {
        ru: "Я люблю́ говори́ть по-ру́сски.", say: "ya lyublyU gavarIt' pa-rUski.",
        focus: { en: "A soft л in люблю́ and a soft т at the end of говори́ть.", ar: "л ليّنة في люблю́، وт ليّنة في آخر говори́ть." },
      },
      {
        ru: "Повтори́те, пожа́луйста.", say: "paftarItye, pazhAlusta.",
        focus: { en: "в before т sounds like 'f'; the л of пожа́луйста is dark.", ar: "в قبل т تُنطق «f»، وл في пожа́луйста مفخّمة." },
      },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the right form: Он ___ по-ру́сски.", ar: "اختر الصيغة الصحيحة: Он ___ по-ру́сски." },
      options: ["говори́т", "говорю́", "говоря́т"],
      answer: 0,
      why: { en: "он takes -ит: он говори́т.", ar: "مع он نضيف -ит: он говори́т." },
    },
    {
      kind: "choice",
      prompt: { en: "What is the я-form of ви́деть?", ar: "ما صيغة я من ви́деть؟" },
      options: ["ви́дю", "ви́жу", "ви́дишь"],
      answer: 1,
      why: { en: "д becomes ж in the я-form: ви́жу.", ar: "تتحوّل д إلى ж في صيغة я: ви́жу." },
    },
    {
      kind: "choice",
      prompt: { en: "How do you say 'I'm learning Russian'?", ar: "كيف تقول «أتعلّم الروسية»؟" },
      options: ["Я учу́ по-ру́сски.", "Я учу́ ру́сский язы́к.", "Я говорю́ ру́сский язы́к."],
      answer: 1,
      why: { en: "учи́ть needs the name of the language: ру́сский язы́к.", ar: "يحتاج учи́ть إلى اسم اللغة: ру́сский язы́к." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with люби́ть: I love tea.", ar: "أكمل بالفعل люби́ть: أحبّ الشاي." },
      ru: "Я ___ чай.",
      answers: ["люблю́"],
      why: { en: "The я-form of люби́ть gains an л: люблю́.", ar: "صيغة я من люби́ть تكتسب л: люблю́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with говори́ть: Do you speak Arabic? (formal)", ar: "أكمل بالفعل говори́ть: هل تتكلّم حضرتك العربية؟" },
      ru: "Вы ___ по-ара́бски?",
      answers: ["говори́те"],
      why: { en: "вы takes -ите: вы говори́те.", ar: "مع вы نضيف -ите: вы говори́те." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with смотре́ть: They are watching a cartoon.", ar: "أكمل بالفعل смотре́ть: هم يشاهدون رسومًا متحركة." },
      ru: "Они́ ___ мультфи́льм.",
      answers: ["смо́трят"],
      why: { en: "они́ takes -ят, and the stress moves back: смо́трят.", ar: "مع они́ نضيف -ят، ويرجع النبر إلى الوراء: смо́трят." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with по́мнить: Do you remember the word?", ar: "أكمل بالفعل по́мнить: هل تتذكّر الكلمة؟" },
      ru: "Ты ___ сло́во?",
      answers: ["по́мнишь"],
      why: { en: "ты takes -ишь: ты по́мнишь.", ar: "مع ты نضيف -ишь: ты по́мнишь." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I speak a little Russian.", ar: "كوّن الجملة: أتكلّم الروسية قليلًا." },
      tokens: ["по-ру́сски", "говорю́", "Я", "немно́го"],
      answers: ["Я немно́го говорю́ по-ру́сски.", "Я говорю́ по-ру́сски немно́го.", "Я говорю́ немно́го по-ру́сски."],
      why: { en: "немно́го usually comes before the verb, but the other orders are fine too.", ar: "تأتي немно́го عادةً قبل الفعل، لكنّ الترتيبات الأخرى صحيحة أيضًا." },
    },
    {
      kind: "order",
      prompt: { en: "Build the request: Please speak slowly.", ar: "كوّن الطلب: تكلّم ببطء من فضلك." },
      tokens: ["ме́дленно", "Говори́те", "пожа́луйста"],
      answers: ["Говори́те ме́дленно, пожа́луйста.", "Говори́те, пожа́луйста, ме́дленно.", "Пожа́луйста, говори́те ме́дленно."],
      why: { en: "Говори́те is also the polite request 'speak'; пожа́луйста can move.", ar: "Говори́те هي أيضًا صيغة الطلب المهذّبة «تكلّم»، ويمكن أن تنتقل пожа́луйста." },
    },
    {
      kind: "translate",
      prompt: { en: "Do you speak English? (formal)", ar: "هل تتكلّم حضرتك الإنجليزية؟" },
      answers: ["Вы говори́те по-англи́йски?", "Вы по-англи́йски говори́те?"],
      why: { en: "говори́ть + по-англи́йски, with the polite вы.", ar: "говори́ть + по-англи́йски، مع вы للاحترام." },
    },
    {
      kind: "translate",
      prompt: { en: "I understand Russian a little.", ar: "أفهم الروسية قليلًا." },
      answers: ["Я немно́го понима́ю по-ру́сски.", "Я понима́ю по-ру́сски немно́го.", "Я понима́ю немно́го по-ру́сски.", "Немно́го понима́ю по-ру́сски."],
      why: { en: "понима́ть takes по-ру́сски, just like говори́ть.", ar: "يأخذ понима́ть по-ру́сски مثل говори́ть تمامًا." },
    },
    {
      kind: "translate",
      prompt: { en: "Please repeat. (formal)", ar: "أعد من فضلك. (رسمي)" },
      answers: ["Повтори́те, пожа́луйста.", "Пожа́луйста, повтори́те."],
      why: { en: "The polite request ends in -те: Повтори́те.", ar: "الطلب المهذّب ينتهي بـ -те: Повтори́те." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the person ask?", ar: "استمع. عمّ يسأل الشخص؟" },
      ru: "Как по-ру́сски «key»?",
      listen: true,
      options: ["How do you say 'key' in Russian? · كيف نقول «key» بالروسية؟", "Do you speak Russian? · هل تتكلّم الروسية؟", "Where is the key? · أين المفتاح؟"],
      answer: 0,
      why: { en: "Как по-ру́сски…? asks for a word in Russian.", ar: "Как по-ру́сски…؟ سؤال عن كلمة بالروسية." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. How do they speak?", ar: "استمع. كيف يتكلّمون؟" },
      ru: "Они́ говоря́т бы́стро.",
      listen: true,
      options: ["They speak fast. · يتكلّمون بسرعة.", "They speak slowly. · يتكلّمون ببطء.", "We speak fast. · نتكلّم بسرعة."],
      answer: 0,
      why: { en: "говоря́т is 'they speak'; бы́стро is 'fast'.", ar: "говоря́т تعني «يتكلّمون»، وбы́стро تعني «بسرعة»." },
    },
  ],
  topics: ["present-tense", "languages"],
  search: ["Russian second conjugation verbs говорить", "Russian consonant change люблю вижу", "how to say languages in Russian по-русски"],
  speaking: {
    scenario: {
      en: "A language exchange: say which languages you speak and how well, and ask your partner to speak slowly and to repeat.",
      ar: "تبادل لغوي: قل أيّ اللغات تتكلّم وبأيّ مستوى، واطلب من شريكك أن يتكلّم ببطء وأن يعيد.",
    },
    tutorBrief:
      "Play Irina (Ирина), a friendly Russian woman who is learning Arabic, at a language-exchange café in Moscow. Use вы, since you have just met. Ask which languages the learner speaks and how well (Вы говорите по-английски? А по-русски?), and tell them you are learning Arabic. Once or twice, speak a little too fast on purpose so the learner practises Повторите, пожалуйста and Говорите медленно, пожалуйста — then repeat slowly. Target language: говорить, понимать, учить, любить, смотреть, помнить, видеть, звонить, по-русски / по-английски / по-арабски, немного, хорошо, плохо, быстро, медленно, Как по-русски…? Correct second-conjugation endings (говоришь, not говорешь) and the я-forms люблю and вижу. Finish by asking the learner to teach you one Arabic word.",
    prompts: [
      { ru: "Я говорю́ по-ара́бски и по-англи́йски.", en: "I speak Arabic and English.", ar: "أتكلّم العربية والإنجليزية." },
      { ru: "Я немно́го говорю́ по-ру́сски.", en: "I speak a little Russian.", ar: "أتكلّم الروسية قليلًا." },
      { ru: "Повтори́те, пожа́луйста.", en: "Please repeat.", ar: "أعد من فضلك." },
      { ru: "Говори́те ме́дленно, пожа́луйста.", en: "Please speak slowly.", ar: "تكلّم ببطء من فضلك." },
      { ru: "Мой родно́й язы́к — ара́бский.", en: "My native language is Arabic.", ar: "لغتي الأم هي العربية." },
    ],
  },
  journal: {
    en: "Write 3–5 sentences about languages: which ones you speak and understand, how well, and which one you are learning (Я говорю́ по-… Я учу́…).",
    ar: "اكتب من ٣ إلى ٥ جمل عن اللغات: أيّها تتكلّم وتفهم، وبأيّ مستوى، وأيّها تتعلّم (Я говорю́ по-… Я учу́…).",
  },
  culture: {
    en: "Russians are delighted when a foreigner tries their language, so you will often hear Вы хорошо́ говори́те по-ру́сски! Egypt is also one of the most popular holiday destinations for Russians — Hurghada and Sharm el-Sheikh especially — so many people you meet will have been there.",
    ar: "يفرح الروس كثيرًا حين يحاول أجنبي التكلّم بلغتهم، لذلك ستسمع كثيرًا: Вы хорошо́ говори́те по-ру́сски! ومصر من أكثر وجهات العطلات شعبية لدى الروس، ولا سيّما الغردقة وشرم الشيخ، فكثير ممّن تقابلهم قد زاروها.",
  },
};

const DAY_12: Day = {
  n: 12,
  week: 2,
  kind: "lesson",
  title: { ru: "Моя́ семья́ и рабо́та", en: "My family and work", ar: "عائلتي وعملي" },
  goals: [
    {
      en: "Name family members and say who has whom: У меня́ есть брат.",
      ar: "أن تسمّي أفراد العائلة وتقول مَن لديه مَن: У меня́ есть брат.",
    },
    {
      en: "Say what people do: Я инжене́р. Она́ врач.",
      ar: "أن تقول ماذا يعمل الناس: Я инжене́р. Она́ врач.",
    },
    {
      en: "Ask about someone's family, name and job: Кто он? Как его́ зову́т?",
      ar: "أن تسأل عن عائلة شخص واسمه وعمله: Кто он؟ Как его́ зову́т؟",
    },
  ],
  words: [
    {
      id: "d12-01", ru: "семья́", say: "simyA", en: "family", ar: "عائلة؛ أسرة", pos: "noun", g: "f", forms: "мн. ч. се́мьи",
      ex: { ru: "Э́то моя́ семья́.", en: "This is my family.", ar: "هذه عائلتي." },
    },
    {
      id: "d12-02", ru: "оте́ц", say: "atyEts", en: "father", ar: "أب؛ والد", pos: "noun", g: "m", forms: "мн. ч. отцы́",
      ex: { ru: "Мой оте́ц — врач.", en: "My father is a doctor.", ar: "أبي طبيب." },
      note: { en: "In everyday speech people usually say па́па.", ar: "في الكلام اليومي يقول الناس عادةً па́па." },
    },
    {
      id: "d12-03", ru: "мать", say: "mat'", en: "mother", ar: "أمّ؛ والدة", pos: "noun", g: "f", forms: "мн. ч. ма́тери",
      ex: { ru: "Моя́ мать — учи́тель.", en: "My mother is a teacher.", ar: "أمّي معلّمة." },
      note: { en: "Ends in -ь and is feminine. In everyday speech: ма́ма.", ar: "تنتهي بـ -ь وهي مؤنّثة. وفي الكلام اليومي: ма́ма." },
    },
    {
      id: "d12-04", ru: "брат", say: "brat", en: "brother", ar: "أخ", pos: "noun", g: "m", forms: "мн. ч. бра́тья",
      ex: { ru: "У меня́ есть брат.", en: "I have a brother.", ar: "لديّ أخ." },
    },
    {
      id: "d12-05", ru: "сестра́", say: "sistrA", en: "sister", ar: "أخت", pos: "noun", g: "f", forms: "мн. ч. сёстры",
      ex: { ru: "Моя́ сестра́ — студе́нтка.", en: "My sister is a student.", ar: "أختي طالبة." },
    },
    {
      id: "d12-06", ru: "сын", say: "syn", en: "son", ar: "ابن", pos: "noun", g: "m", forms: "мн. ч. сыновья́",
      ex: { ru: "Э́то их сын.", en: "This is their son.", ar: "هذا ابنهم." },
    },
    {
      id: "d12-07", ru: "дочь", say: "doch'", en: "daughter", ar: "ابنة", pos: "noun", g: "f", forms: "мн. ч. до́чери",
      ex: { ru: "У неё есть дочь.", en: "She has a daughter.", ar: "لديها ابنة." },
      note: { en: "ь after ч, so it is feminine, like ночь.", ar: "ь بعد ч، فهي مؤنّثة مثل ночь." },
    },
    {
      id: "d12-08", ru: "муж", say: "mush", en: "husband", ar: "زوج", pos: "noun", g: "m", forms: "мн. ч. мужья́",
      ex: { ru: "Её муж — инжене́р.", en: "Her husband is an engineer.", ar: "زوجها مهندس." },
    },
    {
      id: "d12-09", ru: "жена́", say: "zhynA", en: "wife", ar: "زوجة", pos: "noun", g: "f", forms: "мн. ч. жёны",
      ex: { ru: "Э́то его́ жена́.", en: "This is his wife.", ar: "هذه زوجته." },
    },
    {
      id: "d12-10", ru: "роди́тели", say: "radItili", en: "parents", ar: "الوالدان؛ الأهل", pos: "noun", g: "pl",
      ex: { ru: "Э́то мои́ роди́тели.", en: "These are my parents.", ar: "هذان والداي." },
    },
    {
      id: "d12-11", ru: "врач", say: "vrach", en: "doctor", ar: "طبيب", pos: "noun", g: "m", forms: "мн. ч. врачи́",
      ex: { ru: "Она́ врач.", en: "She's a doctor.", ar: "هي طبيبة." },
      note: { en: "Used for women too: Она́ врач.", ar: "تُستخدم للمرأة أيضًا: Она́ врач." },
    },
    {
      id: "d12-12", ru: "инжене́р", say: "inzhynyEr", en: "engineer", ar: "مهندس", pos: "noun", g: "m",
      ex: { ru: "Я инжене́р.", en: "I'm an engineer.", ar: "أنا مهندس." },
    },
    {
      id: "d12-13", ru: "учи́тель", say: "uchItil'", en: "teacher (at a school)", ar: "معلّم؛ مدرّس", pos: "noun", g: "m",
      forms: "мн. ч. учителя́; ж. р. учи́тельница",
      ex: { ru: "Он учи́тель.", en: "He's a teacher.", ar: "هو معلّم." },
      note: { en: "A woman can say Я учи́тель or Я учи́тельница.", ar: "يمكن للمرأة أن تقول Я учи́тель أو Я учи́тельница." },
    },
    {
      id: "d12-14", ru: "студе́нт", say: "studyEnt", en: "(university) student", ar: "طالب جامعي", pos: "noun", g: "m", forms: "ж. р. студе́нтка",
      ex: { ru: "Ты студе́нт?", en: "Are you a student?", ar: "هل أنت طالب؟" },
      note: { en: "A woman student is a студе́нтка.", ar: "والطالبة هي студе́нтка." },
    },
    {
      id: "d12-15", ru: "У меня́ есть…", say: "u minyA yest'…", en: "I have…", ar: "لديّ… / عندي…", pos: "phrase",
      ex: { ru: "У меня́ есть сестра́.", en: "I have a sister.", ar: "لديّ أخت." },
    },
    {
      id: "d12-16", ru: "рабо́та", say: "rabOta", en: "work, job", ar: "عمل؛ وظيفة", pos: "noun", g: "f",
      ex: { ru: "Как рабо́та?", en: "How's work?", ar: "كيف العمل؟" },
    },
    {
      id: "d12-17", ru: "У тебя́ есть…?", say: "u tibyA yest'…?", en: "Do you have…? (informal)", ar: "هل لديك…؟ (غير رسمي)", pos: "phrase",
      ex: { ru: "У тебя́ есть брат?", en: "Do you have a brother?", ar: "هل لديك أخ؟" },
      note: { en: "Formal: У вас есть…?", ar: "بصيغة الاحترام: У вас есть…؟" },
    },
    {
      id: "d12-18", ru: "профе́ссия", say: "prafyEssiya", en: "profession, occupation", ar: "مهنة", pos: "noun", g: "f",
      ex: { ru: "Кто вы по профе́ссии?", en: "What do you do for a living?", ar: "ما مهنتك؟" },
      note: { en: "Кто вы по профе́ссии? is a set question: 'What is your profession?'", ar: "Кто вы по профе́ссии؟ سؤال جاهز معناه «ما مهنتك؟»" },
    },
    {
      id: "d12-19", ru: "Как его́ зову́т?", say: "kak yivO zavUt?", en: "What's his name?", ar: "ما اسمه؟", pos: "phrase",
      ex: { ru: "— Как его́ зову́т? — Его́ зову́т Кари́м.", en: "— What's his name? — His name is Karim.", ar: "— ما اسمه؟ — اسمه كريم." },
      note: { en: "About a woman: Как её зову́т?", ar: "عن امرأة: Как её зову́т؟" },
    },
  ],
  grammar: [
    {
      id: "d12-g1",
      title: { en: "У меня́ есть… = I have…", ar: "У меня́ есть… = لديّ…" },
      en: [
        "Russian has no everyday verb 'to have'. It says У меня́ есть… — literally 'by me there is…' — just like Arabic عندي or لديّ: У меня́ есть брат. — I have a brother.",
        "Change only the person inside the chunk: у тебя́, у него́, у неё, у нас, у вас, у них. What you have stays in its dictionary form: У неё есть муж.",
        "To ask, simply raise your voice: У тебя́ есть сестра́? A short 'yes' is Да, есть. Saying 'I don't have' needs a new form, which comes in week 5.",
      ],
      ar: [
        "لا يوجد في الروسية فعل يومي بمعنى «يملك»، بل تقول У меня́ есть… — حرفيًّا «عندي يوجد…» — تمامًا مثل «عندي» أو «لديّ» في العربية: У меня́ есть брат. — لديّ أخ.",
        "غيّر الشخص وحده داخل العبارة: у тебя́، у него́، у неё، у нас، у вас، у них. أمّا الشيء المملوك فيبقى في صيغته المعجمية: У неё есть муж.",
        "وللسؤال ارفع صوتك فقط: У тебя́ есть сестра́؟ والجواب القصير بالإيجاب: Да, есть. أمّا «ليس لديّ» فتحتاج صيغة جديدة ستتعلّمها في الأسبوع الخامس.",
      ],
      tables: [
        {
          caption: { en: "Who has it?", ar: "مَن يملك؟" },
          head: ["Person · الضمير", "have · يملك", "Example · مثال"],
          rows: [
            ["я", "у меня́ есть", "У меня́ есть брат."],
            ["ты", "у тебя́ есть", "У тебя́ есть сестра́?"],
            ["он", "у него́ есть", "У него́ есть сын."],
            ["она́", "у неё есть", "У неё есть муж."],
            ["мы", "у нас есть", "У нас есть дочь."],
            ["вы", "у вас есть", "У вас есть семья́?"],
            ["они́", "у них есть", "У них есть сын и дочь."],
          ],
        },
      ],
      examples: [
        { ru: "— У тебя́ есть брат? — Да, есть.", en: "— Do you have a brother? — Yes, I do.", ar: "— هل لديك أخ؟ — نعم، لديّ." },
        { ru: "У меня́ есть брат и сестра́.", en: "I have a brother and a sister.", ar: "لديّ أخ وأخت." },
      ],
    },
    {
      id: "d12-g2",
      title: { en: "Jobs: Я инжене́р — no article, no 'am'", ar: "المهن: Я инжене́р — بلا أداة وبلا فعل «يكون»" },
      en: [
        "To say what someone does, put the person and the job side by side — no 'a', no 'am': Я инжене́р. Он врач. It is the Arabic nominal sentence again: أنا مهندس.",
        "Many job words are masculine but work for women too: Она́ врач. Она́ инжене́р. Some have a feminine form: студе́нт → студе́нтка, учи́тель → учи́тельница.",
        "In writing, a dash often stands between two nouns where English has 'is': Мой оте́ц — врач. You don't pronounce the dash; just make a short pause.",
      ],
      ar: [
        "لتقول ما يعمله شخص ضع الشخص والمهنة جنبًا إلى جنب — بلا أداة وبلا فعل «يكون»: Я инжене́р. Он врач. إنّها الجملة الاسمية العربية من جديد: أنا مهندس.",
        "كثير من أسماء المهن مذكّرة لكنّها تُستخدم للنساء أيضًا: Она́ врач. Она́ инжене́р. ولبعضها صيغة مؤنّثة: студе́нт ← студе́нтка، учи́тель ← учи́тельница.",
        "في الكتابة كثيرًا ما تقف شرطة بين اسمين حيث تستخدم الإنجليزية «is»: Мой оте́ц — врач. لا تُنطق الشرطة، بل تكفي وقفة قصيرة.",
      ],
      tables: [
        {
          caption: { en: "He and she at work", ar: "هو وهي في العمل" },
          head: ["Job · المهنة", "он · هو", "она́ · هي"],
          rows: [
            ["doctor · طبيب", "Он врач.", "Она́ врач."],
            ["engineer · مهندس", "Он инжене́р.", "Она́ инжене́р."],
            ["teacher · معلّم", "Он учи́тель.", "Она́ учи́тель / учи́тельница."],
            ["student · طالب", "Он студе́нт.", "Она́ студе́нтка."],
          ],
        },
      ],
      examples: [
        { ru: "Я инжене́р, а моя́ жена́ — врач.", en: "I'm an engineer, and my wife is a doctor.", ar: "أنا مهندس، وزوجتي طبيبة." },
        { ru: "Мой брат — студе́нт.", en: "My brother is a student.", ar: "أخي طالب." },
      ],
    },
    {
      id: "d12-g3",
      title: { en: "Asking about people: Кто э́то? Кто он? Как его́ зову́т?", ar: "السؤال عن الأشخاص: Кто э́то؟ Кто он؟ Как его́ зову́т؟" },
      en: [
        "Кто э́то? asks who someone is: — Кто э́то? — Э́то мой брат.",
        "Кто он? or Кто она́? usually asks what the person does: — Кто он? — Он врач. To be completely clear, ask Кто он по профе́ссии?",
        "To ask a name, reuse the chunk you know with его́ or её: Как его́ зову́т? — Его́ зову́т Кари́м. Как её зову́т? — Её зову́т Мари́я.",
      ],
      ar: [
        "Кто э́то؟ سؤال عن هويّة الشخص: — Кто э́то؟ — Э́то мой брат.",
        "Кто он؟ أو Кто она́؟ سؤال عادةً عن عمل الشخص: — Кто он؟ — Он врач. ولمزيد من الوضوح اسأل: Кто он по профе́ссии؟",
        "وللسؤال عن الاسم استخدم العبارة التي تعرفها مع его́ أو её: Как его́ зову́т؟ — Его́ зову́т Кари́м. Как её зову́т؟ — Её зову́т Мари́я.",
      ],
      examples: [
        { ru: "— Кто э́то? — Э́то моя́ сестра́.", en: "— Who's this? — This is my sister.", ar: "— مَن هذه؟ — هذه أختي." },
        { ru: "— Кто она́? — Она́ учи́тель.", en: "— What does she do? — She's a teacher.", ar: "— ما عملها؟ — هي معلّمة." },
        { ru: "— Как её зову́т? — Её зову́т Мари́я.", en: "— What's her name? — Her name is Maria.", ar: "— ما اسمها؟ — اسمها ماريا." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Моя́ семья́", en: "My family", ar: "عائلتي" },
    setting: {
      en: "Ahmed and Anna are having tea after class. Ahmed shows her a family photo on his phone.",
      ar: "يشرب أحمد وآنا الشاي بعد الدرس، ويُريها أحمد صورة عائلته على هاتفه.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, э́то твоя́ семья́?", en: "Ahmed, is this your family?", ar: "أحمد، هل هذه عائلتك؟" },
      { who: "A", name: "Ахме́д", ru: "Да. Вот мои́ роди́тели: мой оте́ц и моя́ мать.", en: "Yes. Here are my parents: my father and my mother.", ar: "نعم. هذان والداي: أبي وأمّي." },
      { who: "B", name: "А́нна", ru: "Кто твой оте́ц?", en: "What does your father do?", ar: "ما عمل أبيك؟" },
      { who: "A", name: "Ахме́д", ru: "Он врач. А моя́ мать — учи́тель.", en: "He's a doctor. And my mother is a teacher.", ar: "هو طبيب. وأمّي معلّمة." },
      { who: "B", name: "А́нна", ru: "А э́то кто?", en: "And who's this?", ar: "ومَن هؤلاء؟" },
      { who: "A", name: "Ахме́д", ru: "Э́то мой брат, а э́то его́ жена́ и их сын.", en: "That's my brother, and that's his wife and their son.", ar: "هذا أخي، وهذه زوجته وابنهما." },
      { who: "B", name: "А́нна", ru: "Как его́ зову́т?", en: "What's his name?", ar: "ما اسمه؟" },
      { who: "A", name: "Ахме́д", ru: "Его́ зову́т Кари́м.", en: "His name is Karim.", ar: "اسمه كريم." },
      { who: "B", name: "А́нна", ru: "А у тебя́ есть сестра́?", en: "And do you have a sister?", ar: "وهل لديك أخت؟" },
      { who: "A", name: "Ахме́д", ru: "Да, есть. Она́ студе́нтка. А у тебя́?", en: "Yes, I do. She's a student. And you?", ar: "نعم، لديّ. هي طالبة. وأنتِ؟" },
      {
        who: "B", name: "А́нна", ru: "У меня́ есть брат, Макси́м. Ты его́ зна́ешь! А мой па́па — инжене́р, как ты.",
        en: "I have a brother, Maxim. You know him! And my dad is an engineer, like you.", ar: "لديّ أخ، مكسيم. أنت تعرفه! وأبي مهندس، مثلك.",
      },
      { who: "A", name: "Ахме́д", ru: "Инжене́р? Отли́чно!", en: "An engineer? Great!", ar: "مهندس؟ رائع!" },
    ],
  },
  pronunciation: {
    title: { en: "Unstressed е and я: a short 'i'", ar: "е وя غير المنبورتين: «i» قصيرة" },
    en: [
      "When е or я is not stressed, it loses its full sound and becomes a short 'i': сестра́ sounds 'sistrA', семья́ — 'simyA', роди́тели — 'radItili'.",
      "At the start of a word an unstressed я sounds 'yi': язы́к is 'yizYk'. Under the stress both keep their full sound: оте́ц — 'atyEts', меня́ — 'minyA'.",
      "After ж, ш and ц an unstressed е sounds closer to ы: жена́ is 'zhynA'.",
    ],
    ar: [
      "حين لا تكون е أو я منبورة تفقد صوتها الكامل وتصبح «i» قصيرة: сестра́ تُنطق «sistrA»، وсемья́ «simyA»، وроди́тели «radItili».",
      "وفي أول الكلمة تُنطق я غير المنبورة «yi»: язы́к تُنطق «yizYk». أمّا تحت النبر فتحتفظ كلتاهما بصوتها الكامل: оте́ц — «atyEts»، меня́ — «minyA».",
      "وبعد ж وш وц تقترب е غير المنبورة من ы: жена́ تُنطق «zhynA».",
    ],
    drills: [
      { ru: "сестра́", say: "sistrA", focus: { en: "The unstressed е becomes a short 'i'.", ar: "е غير المنبورة تصبح «i» قصيرة." } },
      { ru: "семья́", say: "simyA", focus: { en: "е → 'i'; then ья is 'ya' under the stress.", ar: "е ← «i»، ثم ья تُنطق «ya» تحت النبر." } },
      { ru: "роди́тели", say: "radItili", focus: { en: "Two unstressed е's, both a short 'i'.", ar: "حرفا е غير منبورين، وكلاهما «i» قصيرة." } },
      { ru: "оте́ц", say: "atyEts", focus: { en: "о → 'a'; the stressed е keeps its full sound; ц at the end.", ar: "о ← «a»، وе المنبورة تحتفظ بصوتها، ثم ц في الآخر." } },
      { ru: "У меня́ есть сестра́.", say: "u minyA yest' sistrA.", focus: { en: "меня́ is 'minyA'; есть is 'yest''.", ar: "меня́ تُنطق «minyA»، وесть تُنطق «yest'»." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "What does мать mean?", ar: "ما معنى мать؟" },
      options: ["mother · أمّ", "father · أب", "sister · أخت"],
      answer: 0,
      why: { en: "мать is 'mother'; in everyday speech people say ма́ма.", ar: "мать تعني «أمّ»، وفي الكلام اليومي يقول الناس ма́ма." },
    },
    {
      kind: "choice",
      prompt: { en: "муж (husband) pairs with…", ar: "муж (زوج) يقابلها…" },
      options: ["жена́", "сестра́", "дочь"],
      answer: 0,
      why: { en: "муж and жена́ are husband and wife.", ar: "муж وжена́ هما الزوج والزوجة." },
    },
    {
      kind: "choice",
      prompt: { en: "A friend asks about your father's job: Кто твой оте́ц? What do you answer?", ar: "يسألك صديق عن عمل أبيك: Кто твой оте́ц؟ بماذا تجيب؟" },
      options: ["Он инжене́р.", "Его́ зову́т Ива́н.", "У меня́ есть оте́ц."],
      answer: 0,
      why: { en: "Кто он? asks what someone does: Он инжене́р.", ar: "Кто он؟ سؤال عمّا يعمله الشخص: Он инжене́р." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: I have a brother.", ar: "أكمل: لديّ أخ." },
      ru: "У ___ есть брат.",
      answers: ["меня́"],
      why: { en: "У меня́ есть… — literally 'by me there is…'.", ar: "У меня́ есть… — حرفيًّا «عندي يوجد…»." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete the short answer: — Do you have a sister? — Yes, I do.", ar: "أكمل الجواب القصير: — هل لديك أخت؟ — نعم، لديّ." },
      ru: "— У тебя́ есть сестра́? — Да, ___.",
      answers: ["есть"],
      why: { en: "The short 'yes' repeats есть: Да, есть.", ar: "الجواب القصير يكرّر есть: Да, есть." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: My sister is a student.", ar: "أكمل: أختي طالبة." },
      ru: "Моя́ сестра́ — ___.",
      answers: ["студе́нтка"],
      why: { en: "A woman student is a студе́нтка.", ar: "الطالبة هي студе́нтка." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: What's her name?", ar: "أكمل: ما اسمها؟" },
      ru: "Как ___ зову́т?",
      answers: ["её"],
      why: { en: "About a woman: Как её зову́т?", ar: "عن امرأة: Как её зову́т؟" },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I have a son.", ar: "كوّن الجملة: لديّ ابن." },
      tokens: ["есть", "меня́", "У", "сын"],
      answers: ["У меня́ есть сын."],
      why: { en: "У меня́ есть + what you have.", ar: "У меня́ есть + الشيء المملوك." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: My mother is a doctor.", ar: "كوّن الجملة: أمّي طبيبة." },
      tokens: ["врач", "мать", "Моя́"],
      answers: ["Моя́ мать — врач.", "Моя́ мать врач."],
      why: { en: "No 'is': the two nouns stand side by side, often with a dash.", ar: "لا فعل «يكون»: يقف الاسمان جنبًا إلى جنب، وغالبًا بينهما شرطة." },
    },
    {
      kind: "translate",
      prompt: { en: "I am an engineer.", ar: "أنا مهندس." },
      answers: ["Я инжене́р."],
      why: { en: "No article and no 'am': Я инжене́р.", ar: "بلا أداة وبلا «يكون»: Я инжене́р." },
    },
    {
      kind: "translate",
      prompt: { en: "Do you have a family? (informal)", ar: "هل لديك عائلة؟ (غير رسمي)" },
      answers: ["У тебя́ есть семья́?"],
      why: { en: "A rising voice turns У тебя́ есть… into a question.", ar: "يحوّل ارتفاع الصوت У тебя́ есть… إلى سؤال." },
    },
    {
      kind: "translate",
      prompt: { en: "My wife is a doctor.", ar: "زوجتي طبيبة." },
      answers: ["Моя́ жена́ — врач.", "Моя́ жена́ врач."],
      why: { en: "врач works for women too: Моя́ жена́ — врач.", ar: "تُستخدم врач للمرأة أيضًا: Моя́ жена́ — врач." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What do you hear?", ar: "استمع. ماذا تسمع؟" },
      ru: "У неё есть муж и сын.",
      listen: true,
      options: ["She has a husband and a son. · لديها زوج وابن.", "He has a wife and a son. · لديه زوجة وابن.", "She has a husband and a daughter. · لديها زوج وابنة."],
      answer: 0,
      why: { en: "у неё = she has; муж = husband; сын = son.", ar: "у неё = لديها؛ муж = زوج؛ сын = ابن." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Who is a student?", ar: "استمع. مَن الطالب؟" },
      ru: "Мой брат — студе́нт.",
      listen: true,
      options: ["my brother · أخي", "my sister · أختي", "my father · أبي"],
      answer: 0,
      why: { en: "брат is 'brother'.", ar: "брат تعني «أخ»." },
    },
  ],
  topics: ["family", "professions"],
  search: ["Russian family members vocabulary", "Russian У меня есть I have explained", "Russian professions vocabulary for beginners"],
  speaking: {
    scenario: {
      en: "Describe a family photo, then ask about your partner's family and job.",
      ar: "صِف صورة عائلية، ثم اسأل شريكك عن عائلته وعمله.",
    },
    tutorBrief:
      "Play Anna (Анна), looking at the learner's family photos on their phone. Point at people and ask Кто это? Кто он? Как его зовут? У тебя есть брат / сестра? The learner answers with family words (семья, отец, мать, брат, сестра, сын, дочь, муж, жена, родители), professions (врач, инженер, учитель, студент / студентка) and У меня есть… Then let them ask about your family: your brother Maxim works all the time, your father is an engineer and your mother is a doctor. Never use articles or 'to be'; if the learner says Он есть врач, recast it as Он врач. Finish by saying which member of their family you would most like to meet.",
    prompts: [
      { ru: "Э́то моя́ семья́.", en: "This is my family.", ar: "هذه عائلتي." },
      { ru: "Мой оте́ц — врач, а моя́ мать — учи́тель.", en: "My father is a doctor, and my mother is a teacher.", ar: "أبي طبيب، وأمّي معلّمة." },
      { ru: "У меня́ есть брат и сестра́.", en: "I have a brother and a sister.", ar: "لديّ أخ وأخت." },
      { ru: "А у тебя́ есть брат?", en: "And do you have a brother?", ar: "وهل لديك أخ؟" },
      { ru: "Кто он? Как его́ зову́т?", en: "What does he do? What's his name?", ar: "ما عمله؟ وما اسمه؟" },
    ],
  },
  journal: {
    en: "Write 3–5 sentences about your family: who is in it, what their names are and what they do (У меня́ есть… Его́ зову́т… Он врач…).",
    ar: "اكتب من ٣ إلى ٥ جمل عن عائلتك: مَن فيها، وما أسماؤهم، وماذا يعملون (У меня́ есть… Его́ зову́т… Он врач…).",
  },
  culture: {
    en: "Russian surnames change with gender: a man is Ивано́в, his wife and daughter are Ивано́ва. So a brother and a sister share one surname in two forms, and a wife traditionally takes her husband's surname in its feminine form.",
    ar: "تتغيّر أسماء العائلة الروسية بحسب الجنس: الرجل Ивано́в، وزوجته وابنته Ивано́ва. فالأخ والأخت يحملان اسم العائلة نفسه بصيغتين، وتأخذ الزوجة تقليديًّا اسم عائلة زوجها بصيغته المؤنّثة.",
  },
};

const DAY_13: Day = {
  n: 13,
  week: 2,
  kind: "immersion",
  title: { ru: "Смо́трим: семья́", en: "Watch: family", ar: "نشاهد: العائلة" },
  goals: [
    {
      en: "Follow a short story about a family and say who is who.",
      ar: "أن تتابع قصة قصيرة عن عائلة وتقول مَن هو كلّ شخص.",
    },
    {
      en: "Understand family words and jobs in natural speech: де́душка, ба́бушка, дя́дя, тётя.",
      ar: "أن تفهم كلمات العائلة والمهن في الكلام الطبيعي: де́душка، ба́бушка، дя́дя، тётя.",
    },
  ],
  words: [
    {
      id: "d13-01", ru: "де́душка", say: "dyEdushka", en: "grandfather, grandpa", ar: "جدّ", pos: "noun", g: "m", forms: "мн. ч. де́душки",
      ex: { ru: "Мой де́душка — инжене́р.", en: "My grandfather is an engineer.", ar: "جدّي مهندس." },
      note: { en: "Ends in -а but is masculine: мой де́душка.", ar: "تنتهي بـ -а لكنّها مذكّرة: мой де́душка." },
    },
    {
      id: "d13-02", ru: "ба́бушка", say: "bAbushka", en: "grandmother, grandma", ar: "جدّة", pos: "noun", g: "f", forms: "мн. ч. ба́бушки",
      ex: { ru: "Моя́ ба́бушка лю́бит кни́ги.", en: "My grandmother loves books.", ar: "جدّتي تحبّ الكتب." },
    },
    {
      id: "d13-03", ru: "внук", say: "vnuk", en: "grandson", ar: "حفيد", pos: "noun", g: "m", forms: "мн. ч. вну́ки",
      ex: { ru: "Макси́м — их внук.", en: "Maxim is their grandson.", ar: "مكسيم حفيدهما." },
    },
    {
      id: "d13-04", ru: "вну́чка", say: "vnUchka", en: "granddaughter", ar: "حفيدة", pos: "noun", g: "f", forms: "мн. ч. вну́чки",
      ex: { ru: "А́нна — их вну́чка.", en: "Anna is their granddaughter.", ar: "آنا حفيدتهما." },
    },
    {
      id: "d13-05", ru: "дя́дя", say: "dyAdya", en: "uncle", ar: "عمّ؛ خال", pos: "noun", g: "m", forms: "мн. ч. дя́ди",
      ex: { ru: "Мой дя́дя — врач.", en: "My uncle is a doctor.", ar: "عمّي طبيب." },
      note: {
        en: "Ends in -я but is masculine: мой дя́дя. One word covers both عمّ and خال.",
        ar: "تنتهي بـ -я لكنّها مذكّرة: мой дя́дя. وهي كلمة واحدة تعني «عمّ» و«خال» معًا.",
      },
    },
    {
      id: "d13-06", ru: "тётя", say: "tyOtya", en: "aunt", ar: "عمّة؛ خالة", pos: "noun", g: "f", forms: "мн. ч. тёти",
      ex: { ru: "Моя́ тётя говори́т по-англи́йски.", en: "My aunt speaks English.", ar: "عمّتي تتكلّم الإنجليزية." },
      note: { en: "One word covers both عمّة and خالة.", ar: "كلمة واحدة تعني «عمّة» و«خالة» معًا." },
    },
    {
      id: "d13-07", ru: "двою́родный брат", say: "dvayUradnyy brat", en: "cousin (a man)", ar: "ابن العمّ أو الخال (أو العمّة أو الخالة)", pos: "phrase",
      ex: { ru: "Ди́ма — мой двою́родный брат.", en: "Dima is my cousin.", ar: "ديما ابن عمّي." },
      note: { en: "Literally 'a second-degree brother'.", ar: "حرفيًّا «أخ من الدرجة الثانية»." },
    },
    {
      id: "d13-08", ru: "двою́родная сестра́", say: "dvayUradnaya sistrA", en: "cousin (a woman)", ar: "ابنة العمّ أو الخال (أو العمّة أو الخالة)", pos: "phrase",
      ex: { ru: "Ка́тя — его́ двою́родная сестра́.", en: "Katya is his cousin.", ar: "كاتيا ابنة عمّه." },
    },
  ],
  grammar: [
    {
      id: "d13-g1",
      title: { en: "Words for men in -а and -я: де́душка, дя́дя", ar: "كلمات للرجال تنتهي بـ -а و-я: де́душка، дя́дя" },
      en: [
        "A few words for men end in -а or -я, yet they are masculine because of their meaning — like па́па: де́душка, дя́дя. So it is мой де́душка and мой дя́дя, never «моя́ дя́дя».",
        "Their plurals follow the rules you already know: де́душки, ба́бушки, вну́чки (и after к), дя́ди, тёти.",
      ],
      ar: [
        "بعض الكلمات الدالّة على الرجال تنتهي بـ -а أو -я، لكنّها مذكّرة بسبب معناها — مثل па́па: де́душка، дя́дя. فنقول мой де́душка وмой дя́дя، ولا نقول أبدًا «моя́ дя́дя».",
        "ويتبع جمعها القواعد التي تعرفها: де́душки، ба́бушки، вну́чки (и بعد к)، дя́ди، тёти.",
      ],
      examples: [
        { ru: "Э́то мой де́душка, а э́то моя́ ба́бушка.", en: "This is my grandfather, and this is my grandmother.", ar: "هذا جدّي، وهذه جدّتي." },
        { ru: "Мой дя́дя — инжене́р.", en: "My uncle is an engineer.", ar: "عمّي مهندس." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "На́ши фотогра́фии", en: "Our photos", ar: "صورنا" },
    setting: {
      en: "Ahmed visits Anna and Maxim. Anna opens the family photos on her laptop and tells him who is who.",
      ar: "يزور أحمد آنا ومكسيم. تفتح آنا صور العائلة على حاسوبها وتخبره مَن هو كلّ واحد.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, смотри́! Вот на́ши фотогра́фии.", en: "Look, Ahmed! Here are our photos.", ar: "انظر يا أحمد! هذه صورنا." },
      { who: "A", name: "Ахме́д", ru: "Э́то твоя́ семья́? А кто э́то?", en: "Is this your family? And who's this?", ar: "هل هذه عائلتك؟ ومَن هذا؟" },
      {
        who: "B", name: "А́нна", ru: "Э́то мой де́душка. Его́ зову́т Ви́ктор. Он инжене́р, как мой па́па.",
        en: "This is my grandfather. His name is Viktor. He's an engineer, like my dad.", ar: "هذا جدّي. اسمه فيكتور. هو مهندس، مثل أبي.",
      },
      { who: "A", name: "Ахме́д", ru: "А э́то твоя́ ба́бушка?", en: "And is this your grandmother?", ar: "وهل هذه جدّتك؟" },
      {
        who: "B", name: "А́нна", ru: "Да, э́то моя́ ба́бушка Ни́на. Она́ учи́тель и о́чень лю́бит кни́ги.",
        en: "Yes, this is my grandmother Nina. She's a teacher, and she really loves books.", ar: "نعم، هذه جدّتي نينا. هي معلّمة، وتحبّ الكتب كثيرًا.",
      },
      { who: "A", name: "Ахме́д", ru: "А э́то кто? Твой па́па?", en: "And who's this? Your dad?", ar: "ومَن هذا؟ أبوكِ؟" },
      {
        who: "B", name: "А́нна", ru: "Нет, э́то мой дя́дя Серге́й, а э́то его́ жена́, моя́ тётя Ле́на.",
        en: "No, that's my uncle Sergei, and that's his wife, my aunt Lena.", ar: "لا، هذا عمّي سيرغي، وهذه زوجته لينا.",
      },
      { who: "A", name: "Ахме́д", ru: "Кто они́?", en: "What do they do?", ar: "ما عملهما؟" },
      {
        who: "B", name: "А́нна", ru: "Дя́дя Серге́й — врач, а тётя Ле́на — учи́тель, как ба́бушка. Она́ говори́т по-англи́йски.",
        en: "Uncle Sergei is a doctor, and aunt Lena is a teacher, like grandma. She speaks English.", ar: "عمّي سيرغي طبيب، ولينا معلّمة مثل جدّتي. وهي تتكلّم الإنجليزية.",
      },
      { who: "A", name: "Ахме́д", ru: "А э́то кто? Макси́м?", en: "And who's this? Maxim?", ar: "ومَن هذا؟ مكسيم؟" },
      {
        who: "B", name: "А́нна", ru: "Нет, э́то Ди́ма, их сын. Он мой двою́родный брат и студе́нт.",
        en: "No, that's Dima, their son. He's my cousin, and he's a student.", ar: "لا، هذا ديما، ابنهما. هو ابن عمّي، وهو طالب.",
      },
      { who: "A", name: "Ахме́д", ru: "А где Макси́м?", en: "So where's Maxim?", ar: "وأين مكسيم؟" },
      {
        who: "B", name: "А́нна", ru: "Вот он! А вот я. Макси́м — внук, а я — вну́чка.",
        en: "Here he is! And here's me. Maxim is the grandson, and I'm the granddaughter.", ar: "ها هو! وها أنا. مكسيم هو الحفيد، وأنا الحفيدة.",
      },
      {
        who: "A", name: "Ахме́д", ru: "Я всё понима́ю: де́душка, ба́бушка, дя́дя, тётя…",
        en: "I've got it all: grandfather, grandmother, uncle, aunt…", ar: "فهمت كلّ شيء: الجدّ، والجدّة، والعمّ، والعمّة…",
      },
      { who: "B", name: "А́нна", ru: "Отли́чно! А у тебя́ есть двою́родный брат?", en: "Great! And do you have a cousin?", ar: "ممتاز! وهل لديك ابن عمّ؟" },
      { who: "A", name: "Ахме́д", ru: "Да… де́сять!", en: "Yes… ten!", ar: "نعم… عشرة!" },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "What does ба́бушка mean?", ar: "ما معنى ба́бушка؟" },
      options: ["grandmother · جدّة", "aunt · عمّة / خالة", "granddaughter · حفيدة"],
      answer: 0,
      why: { en: "ба́бушка is 'grandmother'.", ar: "ба́бушка تعني «جدّة»." },
    },
    {
      kind: "choice",
      prompt: { en: "Which word is masculine? Careful!", ar: "أيّ كلمة مذكّرة؟ انتبه!" },
      options: ["де́душка", "тётя", "вну́чка"],
      answer: 0,
      why: { en: "де́душка ends in -а, but a grandfather is он.", ar: "де́душка تنتهي بـ -а، لكنّ الجدّ هو он." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: My uncle is a doctor.", ar: "أكمل: عمّي طبيب." },
      ru: "Мой ___ — врач.",
      answers: ["дя́дя"],
      why: { en: "дя́дя is masculine, so it goes with мой.", ar: "дя́дя مذكّرة، لذلك تأتي مع мой." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: He is my cousin.", ar: "كوّن الجملة: هو ابن عمّي." },
      tokens: ["двою́родный", "Он", "брат", "мой"],
      answers: ["Он мой двою́родный брат."],
      why: { en: "двою́родный stands right before брат.", ar: "تقف двою́родный مباشرة قبل брат." },
    },
    {
      kind: "translate",
      prompt: { en: "I have a grandmother and a grandfather.", ar: "لديّ جدّة وجدّ." },
      answers: ["У меня́ есть ба́бушка и де́душка.", "У меня́ есть де́душка и ба́бушка."],
      why: { en: "У меня́ есть + the people you have.", ar: "У меня́ есть + الأشخاص الذين لديك." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Who is it?", ar: "استمع. مَن هذه؟" },
      ru: "Э́то моя́ тётя.",
      listen: true,
      options: ["my aunt · عمّتي / خالتي", "my uncle · عمّي / خالي", "my granddaughter · حفيدتي"],
      answer: 0,
      why: { en: "тётя is 'aunt'.", ar: "тётя تعني «عمّة» أو «خالة»." },
    },
  ],
  topics: ["family", "cartoon", "listening"],
  search: ["Russian family vocabulary listening practice", "Russian cartoon about family for beginners"],
  speaking: {
    scenario: {
      en: "Retell who is who in Anna's family photos (or in the video you watched), then describe your own grandparents, uncles, aunts and cousins.",
      ar: "أعد سرد مَن هو كلّ شخص في صور عائلة آنا (أو في الفيديو الذي شاهدته)، ثم صِف أجدادك وأعمامك وأخوالك وعمّاتك وخالاتك وأبناءهم.",
    },
    tutorBrief:
      "Play Olga Petrovna (Ольга Петровна), the teacher, and use вы. First ask the learner to retell who is who in Anna's family photos (дедушка Виктор — инженер, бабушка Нина — учитель, дядя Сергей — врач, тётя Лена — учитель, Дима — двоюродный брат, Максим — внук, Анна — внучка), using Кто это? Как его / её зовут? Кто он / она? Then ask about their own grandparents, uncles, aunts and cousins with У вас есть…? Accept short answers, and correct gender slips such as мой бабушка (моя бабушка) or моя дедушка (мой дедушка). Finish with one follow-up question about the relative they mention most.",
    prompts: [
      { ru: "Э́то её де́душка. Его́ зову́т Ви́ктор.", en: "This is her grandfather. His name is Viktor.", ar: "هذا جدّها. اسمه فيكتور." },
      { ru: "Он инжене́р, а ба́бушка — учи́тель.", en: "He's an engineer, and grandma is a teacher.", ar: "هو مهندس، والجدّة معلّمة." },
      { ru: "Ди́ма — её двою́родный брат.", en: "Dima is her cousin.", ar: "ديما ابن عمّها." },
      { ru: "У меня́ есть ба́бушка и де́душка.", en: "I have a grandmother and a grandfather.", ar: "لديّ جدّة وجدّ." },
    ],
  },
  journal: {
    en: "Write 3–5 sentences about your grandparents, an uncle, an aunt or a cousin: their names, their jobs and the languages they speak.",
    ar: "اكتب من ٣ إلى ٥ جمل عن أجدادك أو عن عمّ أو خال أو عمّة أو خالة أو ابن عمّ: أسماؤهم وأعمالهم واللغات التي يتكلّمونها.",
  },
  culture: {
    en: "Grandmothers — ба́бушки — are a pillar of many Russian families and often help raise their grandchildren. Small children also call any elderly woman ба́бушка and any elderly man де́душка, a little like Egyptians saying يا حاجّة or يا عمّ.",
    ar: "الجدّات — ба́бушки — ركيزة في كثير من العائلات الروسية، وكثيرًا ما يساعدن في تربية الأحفاد. ويسمّي الأطفال الصغار أيّ امرأة مسنّة ба́бушка وأيّ رجل مسنّ де́душка، كما يقول المصريون «يا حاجّة» أو «يا عمّ».",
  },
  worksheet: {
    before: [
      {
        en: "Listen for the family words first: де́душка, ба́бушка, дя́дя, тётя, двою́родный брат. Each person also gets a name and a job.",
        ar: "استمع أولًا إلى كلمات العائلة: де́душка، ба́бушка، дя́дя، тётя، двою́родный брат. ولكلّ شخص أيضًا اسم وعمل.",
      },
      {
        en: "Кто они́? here means 'What do they do?' — so listen for врач, инжене́р, учи́тель, студе́нт.",
        ar: "Кто они́؟ هنا تعني «ما عملهم؟»، فاستمع إلى врач وинжене́р وучи́тель وстуде́нт.",
      },
      {
        en: "Russians call an uncle's wife тётя and an aunt's husband дя́дя, just as English says 'aunt' and 'uncle'.",
        ar: "يسمّي الروس زوجة العمّ أو الخال тётя، وزوج العمّة أو الخالة дя́дя، كما تفعل الإنجليزية.",
      },
    ],
    questions: [
      {
        kind: "choice",
        prompt: { en: "Who is Viktor?", ar: "مَن فيكتور؟" },
        options: ["Anna's grandfather · جدّ آنا", "Anna's uncle · عمّ آنا", "Anna's father · والد آنا"],
        answer: 0,
        why: { en: "Anna says: Э́то мой де́душка. Его́ зову́т Ви́ктор.", ar: "تقول آنا: Э́то мой де́душка. Его́ зову́т Ви́ктор." },
      },
      {
        kind: "choice",
        prompt: { en: "What does grandmother Nina do?", ar: "ما عمل الجدّة نينا؟" },
        options: ["She's a teacher. · هي معلّمة.", "She's a doctor. · هي طبيبة.", "She's an engineer. · هي مهندسة."],
        answer: 0,
        why: { en: "Она́ учи́тель и о́чень лю́бит кни́ги.", ar: "Она́ учи́тель и о́чень лю́бит кни́ги — هي معلّمة." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. What does uncle Sergei do?", ar: "استمع. ما عمل العمّ سيرغي؟" },
        ru: "Дя́дя Серге́й — врач, а тётя Ле́на — учи́тель.",
        listen: true,
        options: ["He's a doctor. · هو طبيب.", "He's a teacher. · هو معلّم.", "He's a student. · هو طالب."],
        answer: 0,
        why: { en: "Дя́дя Серге́й — врач: uncle Sergei is a doctor.", ar: "Дя́дя Серге́й — врач: العمّ سيرغي طبيب." },
      },
      {
        kind: "choice",
        prompt: { en: "Who is Dima?", ar: "مَن ديما؟" },
        options: ["Anna's cousin · ابن عمّ آنا", "Anna's brother · أخو آنا", "Anna's uncle · عمّ آنا"],
        answer: 0,
        why: { en: "Он мой двою́родный брат — the son of Sergei and Lena.", ar: "Он мой двою́родный брат — ابن سيرغي ولينا." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. Who is the granddaughter?", ar: "استمع. مَن الحفيدة؟" },
        ru: "Макси́м — внук, а я — вну́чка.",
        listen: true,
        options: ["Anna · آنا", "aunt Lena · لينا", "grandmother Nina · الجدّة نينا"],
        answer: 0,
        why: { en: "Anna says я — вну́чка: she is the granddaughter.", ar: "تقول آنا я — вну́чка: فهي الحفيدة." },
      },
      {
        kind: "choice",
        prompt: { en: "Which language does Lena speak?", ar: "أيّ لغة تتكلّمها لينا؟" },
        options: ["English · الإنجليزية", "Arabic · العربية", "only Russian · الروسية فقط"],
        answer: 0,
        why: { en: "Она́ говори́т по-англи́йски.", ar: "Она́ говори́т по-англи́йски — تتكلّم الإنجليزية." },
      },
      {
        kind: "choice",
        prompt: { en: "How many cousins does Ahmed have?", ar: "كم ابن عمّ لدى أحمد؟" },
        options: ["ten · عشرة", "two · اثنان", "one · واحد"],
        answer: 0,
        why: { en: "Да… де́сять! — ten.", ar: "Да… де́сять! — عشرة." },
      },
    ],
    retell: {
      en: "Retell who is who in Anna's family. Name each person, say how they are related to Anna and what they do: Э́то её де́душка. Его́ зову́т Ви́ктор. Он инжене́р…",
      ar: "أعد سرد مَن هو كلّ شخص في عائلة آنا: سمِّ كلّ شخص، وقل ما صلته بآنا وما عمله: Э́то её де́душка. Его́ зову́т Ви́ктор. Он инжене́р…",
    },
  },
};

const DAY_14: Day = {
  n: 14,
  week: 2,
  kind: "review",
  title: { ru: "Повторе́ние: неде́ля 2", en: "Review: week 2", ar: "مراجعة: الأسبوع ٢" },
  goals: [
    {
      en: "Check what you know from week 2: gender, plurals, possessives, both verb conjugations, family and jobs.",
      ar: "أن تراجع ما تعلّمته في الأسبوع الثاني: الجنس، والجمع، وضمائر الملكية، والتصريفين، والعائلة والمهن.",
    },
    {
      en: "Pass a short speaking test about your room, your family, your day and your languages.",
      ar: "أن تجتاز اختبار محادثة قصيرًا عن غرفتك وعائلتك ويومك واللغات التي تتكلّمها.",
    },
  ],
  words: [],
  grammar: [
    {
      id: "d14-g1",
      title: { en: "Week 2 at a glance", ar: "الأسبوع الثاني في لمحة" },
      en: [
        "Nouns: the ending shows the gender (стол — он, кни́га — она́, окно́ — оно́), and 'my, your, our' agree with it: мой стол, моя́ кни́га, на́ши кни́ги. его́, её and их never change.",
        "Verbs: first conjugation чита́ю, чита́ешь… чита́ют; second conjugation говорю́, говори́шь… говоря́т. Watch the я-forms люблю́ and ви́жу.",
        "People: У меня́ есть брат. Я инжене́р. Кто он? — Он врач. Как его́ зову́т?",
      ],
      ar: [
        "الأسماء: النهاية تدلّ على الجنس (стол — он، кни́га — она́، окно́ — оно́)، وضمائر الملكية تطابقه: мой стол، моя́ кни́га، на́ши кни́ги. أمّا его́ وеё وих فلا تتغيّر.",
        "الأفعال: التصريف الأول чита́ю، чита́ешь… чита́ют، والتصريف الثاني говорю́، говори́шь… говоря́т. وانتبه لصيغتَي я: люблю́ وви́жу.",
        "الأشخاص: У меня́ есть брат. Я инжене́р. Кто он؟ — Он врач. Как его́ зову́т؟",
      ],
      tables: [
        {
          caption: { en: "Nouns: gender and plural", ar: "الأسماء: الجنس والجمع" },
          head: ["Gender · الجنس", "Singular · المفرد", "Plural · الجمع", "my · ـي"],
          rows: [
            ["он · مذكّر", "стол", "столы́", "мой / мои́"],
            ["она́ · مؤنّث", "кни́га", "кни́ги", "моя́ / мои́"],
            ["оно́ · محايد", "окно́", "о́кна", "моё / мои́"],
          ],
        },
        {
          caption: { en: "Verbs: the two conjugations", ar: "الأفعال: التصريفان" },
          head: ["Person · الضمير", "чита́ть (1)", "говори́ть (2)"],
          rows: [
            ["я", "чита́ю", "говорю́"],
            ["ты", "чита́ешь", "говори́шь"],
            ["он / она́", "чита́ет", "говори́т"],
            ["мы", "чита́ем", "говори́м"],
            ["вы", "чита́ете", "говори́те"],
            ["они́", "чита́ют", "говоря́т"],
          ],
        },
      ],
      examples: [
        { ru: "Э́то моя́ ко́мната, а э́то мои́ кни́ги.", en: "This is my room, and these are my books.", ar: "هذه غرفتي، وهذه كتبي." },
        { ru: "У меня́ есть брат. Он инжене́р и говори́т по-англи́йски.", en: "I have a brother. He's an engineer, and he speaks English.", ar: "لديّ أخ. هو مهندس ويتكلّم الإنجليزية." },
      ],
    },
  ],
  exercises: [],
  topics: ["gender", "plurals", "present-tense", "family"],
  search: ["Russian for beginners review gender plural present tense", "Russian speaking practice family and daily routine A1"],
  speaking: {
    scenario: {
      en: "Speaking test: describe your family and what each person does, and say what you do every day.",
      ar: "اختبار المحادثة: صِف عائلتك وما يعمله كلّ فرد فيها، وقل ماذا تفعل كلّ يوم.",
    },
    tutorBrief:
      "Act as a friendly oral examiner for the week-2 test. Speak Russian only, slowly, with words from days 1–13, and use вы. Four parts of about two minutes each: (1) room — the learner names things in their room and says whose they are (Это ваш стол? Чья это сумка?); (2) family — who is in their family, names and jobs (У вас есть брат? Кто он? Как его зовут?); (3) routine — what they are doing now and what they do often, sometimes and always (Что вы делаете? Вы часто гуляете?); (4) languages — which languages they speak and how well. Score each part 0–3: 3 = clear and mostly correct (мой / моя / моё agreement, plural endings, the endings of both conjugations, У меня есть), 2 = understandable with some errors, 1 = single words only, 0 = no answer. Do not correct during the test. At the end give the total out of 12, two strengths and the two most important corrections, each with the correct Russian form.",
    prompts: [
      { ru: "У меня́ есть оте́ц, мать и сестра́.", en: "I have a father, a mother and a sister.", ar: "لديّ أب وأمّ وأخت." },
      { ru: "Мой оте́ц — врач, а моя́ сестра́ — студе́нтка.", en: "My father is a doctor, and my sister is a student.", ar: "أبي طبيب، وأختي طالبة." },
      { ru: "Я ча́сто чита́ю и иногда́ гуля́ю.", en: "I often read and sometimes go for a walk.", ar: "أقرأ كثيرًا وأتنزّه أحيانًا." },
      { ru: "Я говорю́ по-ара́бски, по-англи́йски и немно́го по-ру́сски.", en: "I speak Arabic, English and a little Russian.", ar: "أتكلّم العربية والإنجليزية وقليلًا من الروسية." },
    ],
  },
  journal: {
    en: "Write 5 sentences that sum up your week: your room, your family, what you do and which languages you speak.",
    ar: "اكتب ٥ جمل تلخّص أسبوعك: غرفتك، وعائلتك، وما تفعله، واللغات التي تتكلّمها.",
  },
  test: {
    sections: [
      {
        title: { en: "Words", ar: "الكلمات" },
        items: [
          {
            kind: "choice",
            prompt: { en: "окно́ means…", ar: "окно́ تعني…" },
            options: ["window · نافذة", "door · باب", "room · غرفة"],
            answer: 0,
            why: { en: "окно́ is a window; a door is дверь.", ar: "окно́ نافذة، أمّا الباب فهو дверь." },
          },
          {
            kind: "choice",
            prompt: { en: "Which pronoun replaces дверь?", ar: "أيّ ضمير يحلّ محلّ дверь؟" },
            options: ["она́", "он", "оно́"],
            answer: 0,
            why: { en: "дверь ends in -ь and is feminine: она́.", ar: "дверь تنتهي بـ -ь وهي مؤنّثة: она́." },
          },
          {
            kind: "choice",
            prompt: { en: "Which word is a job?", ar: "أيّ كلمة تدلّ على مهنة؟" },
            options: ["врач", "брат", "дверь"],
            answer: 0,
            why: { en: "врач is a doctor.", ar: "врач تعني «طبيب»." },
          },
          {
            kind: "choice",
            prompt: { en: "ча́сто means…", ar: "ча́сто تعني…" },
            options: ["often · كثيرًا", "always · دائمًا", "sometimes · أحيانًا"],
            answer: 0,
            why: { en: "ча́сто = often; всегда́ = always; иногда́ = sometimes.", ar: "ча́сто = كثيرًا؛ всегда́ = دائمًا؛ иногда́ = أحيانًا." },
          },
          {
            kind: "choice",
            prompt: { en: "роди́тели means…", ar: "роди́тели تعني…" },
            options: ["parents · الوالدان", "grandparents · الأجداد", "cousins · أبناء العمومة"],
            answer: 0,
            why: { en: "роди́тели are your mother and father.", ar: "роди́тели هما الأمّ والأب." },
          },
        ],
      },
      {
        title: { en: "Grammar", ar: "القواعد" },
        items: [
          {
            kind: "fill",
            prompt: { en: "Complete: This is my book.", ar: "أكمل: هذا كتابي." },
            ru: "Э́то ___ кни́га.",
            answers: ["моя́"],
            why: { en: "кни́га is feminine: моя́.", ar: "кни́га مؤنّثة: моя́." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: Is this your window? (informal)", ar: "أكمل: هل هذه نافذتك؟ (غير رسمي)" },
            ru: "Э́то ___ окно́?",
            answers: ["твоё"],
            why: { en: "окно́ is neuter: твоё.", ar: "окно́ محايدة: твоё." },
          },
          {
            kind: "fill",
            prompt: { en: "Put кни́га in the plural: Here are my books.", ar: "ضع кни́га في الجمع: ها هي كتبي." },
            ru: "Вот мои́ ___.",
            answers: ["кни́ги"],
            why: { en: "After г you write и: кни́ги.", ar: "بعد г تُكتب и: кни́ги." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete with чита́ть: We are reading.", ar: "أكمل بالفعل чита́ть: نحن نقرأ." },
            ru: "Мы ___.",
            answers: ["чита́ем"],
            why: { en: "мы takes -ем: чита́ем.", ar: "مع мы نضيف -ем: чита́ем." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete with говори́ть: They speak Russian.", ar: "أكمل بالفعل говори́ть: هم يتكلّمون الروسية." },
            ru: "Они́ ___ по-ру́сски.",
            answers: ["говоря́т"],
            why: { en: "Second conjugation: они́ говоря́т.", ar: "التصريف الثاني: они́ говоря́т." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete with люби́ть: I love the sea.", ar: "أكمل بالفعل люби́ть: أحبّ البحر." },
            ru: "Я ___ мо́ре.",
            answers: ["люблю́"],
            why: { en: "The я-form gains an л: люблю́.", ar: "صيغة я تكتسب л: люблю́." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: Do you have a brother? (informal)", ar: "أكمل: هل لديك أخ؟ (غير رسمي)" },
            ru: "У ___ есть брат?",
            answers: ["тебя́"],
            why: { en: "у тебя́ = you have (informal).", ar: "у тебя́ = لديك (غير رسمي)." },
          },
        ],
      },
      {
        title: { en: "Listening", ar: "الاستماع" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Listen. What is the person asking?", ar: "استمع. عمّ يسأل الشخص؟" },
            ru: "Где мои́ ключи́?",
            listen: true,
            options: ["Where are my keys? · أين مفاتيحي؟", "Where is my key? · أين مفتاحي؟", "Whose keys are these? · لمن هذه المفاتيح؟"],
            answer: 0,
            why: { en: "мои́ ключи́ is plural: my keys.", ar: "мои́ ключи́ جمع: مفاتيحي." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. What do you learn?", ar: "استمع. ماذا عرفت؟" },
            ru: "Мой брат — инжене́р.",
            listen: true,
            options: ["My brother is an engineer. · أخي مهندس.", "My father is an engineer. · أبي مهندس.", "My brother is a doctor. · أخي طبيب."],
            answer: 0,
            why: { en: "брат = brother; инжене́р = engineer.", ar: "брат = أخ؛ инжене́р = مهندس." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. How well does the person speak Arabic?", ar: "استمع. ما مستوى الشخص في العربية؟" },
            ru: "Я немно́го говорю́ по-ара́бски.",
            listen: true,
            options: ["a little · قليلًا", "well · جيدًا", "not at all · لا يتكلّمها"],
            answer: 0,
            why: { en: "немно́го = a little.", ar: "немно́го = قليلًا." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. What is the question?", ar: "استمع. ما السؤال؟" },
            ru: "Что вы сейча́с де́лаете?",
            listen: true,
            options: ["What are you doing now? · ماذا تفعلون الآن؟", "What do you always do? · ماذا تفعلون دائمًا؟", "Why are you resting? · لماذا ترتاحون؟"],
            answer: 0,
            why: { en: "сейча́с = now; де́лаете = you are doing.", ar: "сейча́с = الآن؛ де́лаете = تفعلون." },
          },
        ],
      },
      {
        title: { en: "Sentences", ar: "الجمل" },
        items: [
          {
            kind: "order",
            prompt: { en: "Build the sentence: These are her notebooks.", ar: "كوّن الجملة: هذه دفاترها." },
            tokens: ["её", "Э́то", "тетра́ди"],
            answers: ["Э́то её тетра́ди."],
            why: { en: "её never changes: её тетра́ди.", ar: "её لا تتغيّر: её тетра́ди." },
          },
          {
            kind: "order",
            prompt: { en: "Build the sentence: We sometimes go for walks.", ar: "كوّن الجملة: نتنزّه أحيانًا." },
            tokens: ["иногда́", "Мы", "гуля́ем"],
            answers: ["Мы иногда́ гуля́ем.", "Иногда́ мы гуля́ем."],
            why: { en: "Time words stand before the verb or open the sentence.", ar: "تقف كلمات الزمن قبل الفعل أو في أول الجملة." },
          },
          {
            kind: "order",
            prompt: { en: "Build the sentence: I have a sister.", ar: "كوّن الجملة: لديّ أخت." },
            tokens: ["есть", "сестра́", "меня́", "У"],
            answers: ["У меня́ есть сестра́."],
            why: { en: "У меня́ есть + what you have.", ar: "У меня́ есть + الشيء المملوك." },
          },
        ],
      },
      {
        title: { en: "Translation", ar: "الترجمة" },
        items: [
          {
            kind: "translate",
            prompt: { en: "This is our house.", ar: "هذا بيتنا." },
            answers: ["Э́то наш дом."],
            why: { en: "дом is masculine: наш дом.", ar: "дом مذكّر: наш дом." },
          },
          {
            kind: "translate",
            prompt: { en: "I don't understand. Please repeat.", ar: "لا أفهم. أعد من فضلك." },
            answers: ["Я не понима́ю. Повтори́те, пожа́луйста.", "Не понима́ю. Повтори́те, пожа́луйста.", "Я не понима́ю. Пожа́луйста, повтори́те.", "Я не понима́ю. Повтори́, пожа́луйста."],
            why: { en: "Two phrases worth knowing by heart.", ar: "عبارتان تستحقّان الحفظ عن ظهر قلب." },
          },
          {
            kind: "translate",
            prompt: { en: "My mother is a doctor.", ar: "أمّي طبيبة." },
            answers: ["Моя́ мать — врач.", "Моя́ ма́ма — врач.", "Моя́ мать врач.", "Моя́ ма́ма врач."],
            why: { en: "No 'is', and врач works for women too.", ar: "لا فعل «يكون»، وتُستخدم врач للمرأة أيضًا." },
          },
        ],
      },
    ],
    speaking: [
      {
        en: "Describe your room: name five things in it and say whose they are (мой / моя́ / моё).",
        ar: "صِف غرفتك: سمِّ خمسة أشياء فيها وقل لمن هي (мой / моя́ / моё).",
      },
      {
        en: "Describe your family: who is in it, their names and their jobs (У меня́ есть… Его́ зову́т… Он врач…).",
        ar: "صِف عائلتك: مَن فيها، وما أسماؤهم وأعمالهم (У меня́ есть… Его́ зову́т… Он врач…).",
      },
      {
        en: "Say what you do: one thing you are doing now, and things you do often, sometimes and always.",
        ar: "قل ماذا تفعل: شيئًا تفعله الآن، وأشياء تفعلها كثيرًا وأحيانًا ودائمًا.",
      },
      {
        en: "Say which languages you speak and how well, then ask the examiner to repeat slowly.",
        ar: "قل أيّ اللغات تتكلّم وبأيّ مستوى، ثم اطلب من الممتحن أن يعيد ببطء.",
      },
    ],
  },
};

export const WEEK_2: Day[] = [DAY_8, DAY_9, DAY_10, DAY_11, DAY_12, DAY_13, DAY_14];
