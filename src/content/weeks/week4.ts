import type { Day } from "../types.ts";

// Week 4 · Wants and needs: the accusative (things, people, pronouns), хотеть, есть / пить, мочь,
// adjectives and colours; day 27 is the market listening story, day 28 the A1 checkpoint.

const DAY_22: Day = {
  n: 22,
  week: 4,
  kind: "lesson",
  title: { ru: "Я хочу́ ко́фе: вини́тельный паде́ж", en: "I want a coffee: the accusative", ar: "أريد قهوة: حالة المفعول به" },
  goals: [
    {
      en: "Say what you want with хоте́ть: Я хочу́ ко́фе. Я хочу́ гуля́ть.",
      ar: "أن تقول ما تريده بالفعل хоте́ть: Я хочу́ ко́фе. Я хочу́ гуля́ть.",
    },
    {
      en: "Put the thing you want, buy or read into the accusative: feminine -а becomes -у, -я becomes -ю.",
      ar: "أن تضع الشيء الذي تريده أو تشتريه أو تقرؤه في حالة المفعول به: المؤنّث المنتهي بـ -а يأخذ -у، والمنتهي بـ -я يأخذ -ю.",
    },
    {
      en: "Buy presents in a shop: understand Что вы хоти́те? and answer Я беру́…",
      ar: "أن تشتري الهدايا في متجر: أن تفهم سؤال Что вы хоти́те? وتجيب بـ Я беру́…",
    },
  ],
  words: [
    {
      id: "d22-01", ru: "хоте́ть", say: "khatyEt'", en: "to want; would like", ar: "يريد", pos: "verb",
      forms: "хочу́, хо́чешь, хо́чет; хоти́м, хоти́те, хотя́т",
      ex: { ru: "Я хочу́ ко́фе.", en: "I'd like a coffee.", ar: "أريد قهوة." },
      note: { en: "Irregular: see the grammar table.", ar: "فعل شاذّ: انظر جدول القواعد." },
    },
    {
      id: "d22-02", ru: "покупа́ть", say: "pakupAt'", en: "to buy (be buying, buy regularly)", ar: "يشتري", pos: "verb",
      forms: "покупа́ю, покупа́ешь",
      ex: { ru: "Я ча́сто покупа́ю кни́ги.", en: "I often buy books.", ar: "كثيرًا ما أشتري الكتب." },
      note: {
        en: "For one single purchase Russians use купи́ть, which you will learn in week 5.",
        ar: "لعملية شراء واحدة يستخدم الروس купи́ть، وستتعلّمه في الأسبوع الخامس.",
      },
    },
    {
      id: "d22-03", ru: "брать", say: "brat'", en: "to take; (in a shop) to take, to buy", ar: "يأخذ", pos: "verb",
      forms: "беру́, берёшь … беру́т",
      ex: { ru: "Я беру́ газе́ту.", en: "I'll take the newspaper.", ar: "سآخذ الجريدة." },
      note: { en: "In a shop Я беру́… means 'I'll take it, I'm buying it'.", ar: "في المتجر تعني Я беру́… «سآخذه، سأشتريه»." },
    },
    {
      id: "d22-04", ru: "му́зыка", say: "mUzyka", en: "music", ar: "موسيقى", pos: "noun", g: "f",
      ex: { ru: "Я люблю́ му́зыку.", en: "I love music.", ar: "أحبّ الموسيقى." },
    },
    {
      id: "d22-05", ru: "газе́та", say: "gazyEta", en: "newspaper", ar: "جريدة", pos: "noun", g: "f",
      ex: { ru: "Па́па чита́ет газе́ту.", en: "Dad is reading the newspaper.", ar: "أبي يقرأ الجريدة." },
    },
    {
      id: "d22-06", ru: "журна́л", say: "zhurnAl", en: "magazine", ar: "مجلّة", pos: "noun", g: "m",
      ex: { ru: "Она́ покупа́ет журна́л.", en: "She is buying a magazine.", ar: "هي تشتري مجلّة." },
    },
    {
      id: "d22-07", ru: "биле́т", say: "bilyEt", en: "ticket", ar: "تذكرة", pos: "noun", g: "m",
      ex: { ru: "Вот ваш биле́т.", en: "Here is your ticket.", ar: "ها هي تذكرتك." },
    },
    {
      id: "d22-08", ru: "пода́рок", say: "padArak", en: "present, gift", ar: "هديّة", pos: "noun", g: "m",
      forms: "мн. ч. пода́рки",
      ex: { ru: "Вот мой пода́рок.", en: "Here's my present.", ar: "ها هي هديّتي." },
      note: { en: "The о disappears in the plural: пода́рок, пода́рки.", ar: "يسقط حرف о في الجمع: пода́рок، пода́рки." },
    },
    {
      id: "d22-09", ru: "ку́ртка", say: "kUrtka", en: "jacket", ar: "سترة (جاكيت)", pos: "noun", g: "f",
      ex: { ru: "Я хочу́ ку́ртку.", en: "I want a jacket.", ar: "أريد سترة." },
    },
    {
      id: "d22-10", ru: "пла́тье", say: "plAt'ye", en: "dress", ar: "فستان", pos: "noun", g: "n",
      forms: "мн. ч. пла́тья",
      ex: { ru: "А́нна покупа́ет пла́тье.", en: "Anna is buying a dress.", ar: "آنا تشتري فستانًا." },
    },
    {
      id: "d22-11", ru: "руба́шка", say: "rubAshka", en: "shirt", ar: "قميص", pos: "noun", g: "f",
      ex: { ru: "Я беру́ руба́шку.", en: "I'll take the shirt.", ar: "سآخذ القميص." },
    },
    {
      id: "d22-12", ru: "ту́фли", say: "tUfli", en: "shoes (low, smart shoes)", ar: "حذاء (أحذية منخفضة أنيقة)", pos: "noun", g: "pl",
      forms: "ед. ч. ту́фля",
      ex: { ru: "Она́ хо́чет ту́фли.", en: "She wants shoes.", ar: "هي تريد حذاءً." },
      note: {
        en: "Almost always plural. Plurals of things do not change in the accusative.",
        ar: "تُستخدم غالبًا بصيغة الجمع، وجمع الأشياء لا يتغيّر في حالة المفعول به.",
      },
    },
    {
      id: "d22-13", ru: "откры́тка", say: "atkrYtka", en: "postcard; greeting card", ar: "بطاقة بريدية؛ بطاقة تهنئة", pos: "noun", g: "f",
      ex: { ru: "Я пишу́ откры́тку.", en: "I'm writing a postcard.", ar: "أكتب بطاقة." },
    },
    {
      id: "d22-14", ru: "ко́фе", say: "kOfye", en: "coffee", ar: "قهوة", pos: "noun", g: "m",
      ex: { ru: "Ты хо́чешь ко́фе?", en: "Do you want some coffee?", ar: "هل تريد قهوة؟" },
      note: {
        en: "ко́фе is masculine (мой ко́фе) and never changes its ending.",
        ar: "كلمة ко́фе مذكّرة (мой ко́фе) ولا تتغيّر نهايتها أبدًا.",
      },
    },
    {
      id: "d22-15", ru: "для", say: "dlya", en: "for (someone)", ar: "لـ، من أجل", pos: "prep",
      ex: { ru: "Э́то пода́рок для па́пы.", en: "This is a present for Dad.", ar: "هذه هديّة لأبي." },
      note: {
        en: "для takes the genitive case (week 5). For now learn the chunks: для ма́мы, для па́пы, для бра́та, для сестры́.",
        ar: "يأتي بعد для اسم في حالة الإضافة (الأسبوع الخامس). احفظ الآن هذه العبارات الجاهزة: для ма́мы، для па́пы، для бра́та، для сестры́.",
      },
    },
    {
      id: "d22-16", ru: "Что вы хоти́те?", say: "shto vy khatItye?", en: "What would you like? (literally: what do you want?)",
      ar: "ماذا تريد؟ (بصيغة الاحترام أو للجمع)", pos: "phrase",
      note: { en: "In что the ч is pronounced like ш: [shto].", ar: "في что يُنطق ч مثل ш: [shto]." },
    },
    {
      id: "d22-17", ru: "Беру́!", say: "birU!", en: "I'll take it!", ar: "سآخذه!", pos: "phrase",
      note: { en: "A short, natural answer in a shop, from брать.", ar: "جواب قصير وطبيعي في المتجر، من الفعل брать." },
    },
  ],
  grammar: [
    {
      id: "d22-g1",
      title: { en: "The accusative: what you want, buy or read", ar: "حالة المفعول به: ما تريده أو تشتريه أو تقرؤه" },
      en: [
        "The direct object — the thing you want, buy, read or love — goes into the accusative case. It answers the question что? (what?): Что ты чита́ешь? — Я чита́ю кни́гу.",
        "Good news: masculine and neuter things do not change, and neither do plurals of things: Я хочу́ ко́фе. Она́ покупа́ет пла́тье. Он чита́ет журна́лы.",
        "Feminine nouns change: -а becomes -у and -я becomes -ю: газе́та → газе́ту, пе́сня → пе́сню. Feminine nouns in -ь stay the same: Я беру́ тетра́дь.",
        "Arabic marks the object too (قرأتُ الكتابَ), but with a short vowel that is usually not written. In Russian you see and hear the change on feminine nouns. People follow their own rule — that comes on day 25.",
      ],
      ar: [
        "المفعول به المباشر — أي الشيء الذي تريده أو تشتريه أو تقرؤه أو تحبّه — يأتي في حالة المفعول به، ويجيب عن السؤال что? (ماذا؟): Что ты чита́ешь? — Я чита́ю кни́гу.",
        "الخبر السارّ: الأشياء المذكّرة والمحايدة لا تتغيّر، ولا يتغيّر جمع الأشياء كذلك: Я хочу́ ко́фе. Она́ покупа́ет пла́тье. Он чита́ет журна́лы.",
        "أمّا الأسماء المؤنّثة فتتغيّر: النهاية -а تصبح -у، والنهاية -я تصبح -ю: من газе́та إلى газе́ту، ومن пе́сня إلى пе́сню. والمؤنّث المنتهي بـ -ь لا يتغيّر: Я беру́ тетра́дь.",
        "العربية أيضًا تميّز المفعول به (قرأتُ الكتابَ)، لكن بحركة قصيرة لا تُكتب عادةً. أمّا في الروسية فترى التغيير وتسمعه في الأسماء المؤنّثة. وللأشخاص قاعدتهم الخاصة، وستتعلّمها في اليوم ٢٥.",
      ],
      tables: [
        {
          caption: { en: "Things in the accusative", ar: "الأشياء في حالة المفعول به" },
          head: ["Gender · الجنس", "Nominative · حالة الرفع", "Accusative · حالة المفعول به", "Example · مثال"],
          rows: [
            ["m · مذكّر", "журна́л", "журна́л", "Я покупа́ю журна́л."],
            ["n · محايد", "пла́тье", "пла́тье", "Она́ хо́чет пла́тье."],
            ["f -а · مؤنّث", "газе́та", "газе́ту", "Па́па чита́ет газе́ту."],
            ["f -я · مؤنّث", "пе́сня", "пе́сню", "Мы слу́шаем пе́сню."],
            ["f -ь · مؤنّث", "тетра́дь", "тетра́дь", "Я беру́ тетра́дь."],
            ["pl · جمع", "кни́ги", "кни́ги", "Я люблю́ кни́ги."],
          ],
        },
      ],
      examples: [
        { ru: "Я чита́ю кни́гу, а он чита́ет журна́л.", en: "I'm reading a book, and he is reading a magazine.", ar: "أنا أقرأ كتابًا، وهو يقرأ مجلّة." },
        { ru: "Ты слу́шаешь му́зыку?", en: "Are you listening to music?", ar: "هل تستمع إلى الموسيقى؟" },
        { ru: "Мы покупа́ем ку́ртку и ту́фли.", en: "We are buying a jacket and shoes.", ar: "نحن نشتري سترة وحذاءً." },
      ],
    },
    {
      id: "d22-g2",
      title: { en: "хоте́ть — to want: a mixed verb", ar: "الفعل хоте́ть (يريد): فعل مختلط" },
      en: [
        "хоте́ть mixes the two conjugations. The singular looks like the first conjugation, with т changing to ч: хочу́, хо́чешь, хо́чет. The plural looks like the second: хоти́м, хоти́те, хотя́т.",
        "Watch the stress: it is on the ending in хочу́, moves to the stem in хо́чешь and хо́чет, and goes back to the ending in the plural.",
        "After хоте́ть use a noun in the accusative (Я хочу́ ку́ртку) or a verb in the infinitive (Я хочу́ гуля́ть). Я хочу́… is normal in a shop or a café; with a friend you can answer just Хочу́!",
      ],
      ar: [
        "يمزج الفعل хоте́ть بين التصريفين: المفرد يشبه التصريف الأول مع تحوّل т إلى ч: хочу́، хо́чешь، хо́чет، والجمع يشبه التصريف الثاني: хоти́м، хоти́те، хотя́т.",
        "انتبه إلى النبر: يقع على النهاية في хочу́، ثم ينتقل إلى الجذر في хо́чешь و хо́чет، ثم يعود إلى النهاية في الجمع.",
        "بعد хоте́ть ضع اسمًا في حالة المفعول به (Я хочу́ ку́ртку) أو فعلًا في صيغة المصدر (Я хочу́ гуля́ть). عبارة Я хочу́… عادية في المتجر أو المقهى، ومع صديق يكفي أن تجيب: Хочу́!",
      ],
      tables: [
        {
          caption: { en: "хоте́ть — to want", ar: "хоте́ть — يريد" },
          head: ["Pronoun · الضمير", "хоте́ть"],
          rows: [
            ["я", "хочу́"],
            ["ты", "хо́чешь"],
            ["он / она́", "хо́чет"],
            ["мы", "хоти́м"],
            ["вы", "хоти́те"],
            ["они́", "хотя́т"],
          ],
        },
      ],
      examples: [
        { ru: "— Что ты хо́чешь? — Я хочу́ ко́фе.", en: "— What do you want? — I'd like a coffee.", ar: "— ماذا تريد؟ — أريد قهوة." },
        { ru: "Мы хоти́м слу́шать му́зыку.", en: "We want to listen to music.", ar: "نريد أن نستمع إلى الموسيقى." },
        { ru: "Они́ хотя́т смотре́ть фильм.", en: "They want to watch a film.", ar: "هم يريدون أن يشاهدوا فيلمًا." },
      ],
    },
    {
      id: "d22-g3",
      title: { en: "Shopping verbs: покупа́ть and брать", ar: "أفعال التسوّق: покупа́ть و брать" },
      en: [
        "покупа́ть is a regular first-conjugation verb: покупа́ю, покупа́ешь, покупа́ют. Use it for buying in general or right now: Что ты покупа́ешь?",
        "брать changes its stem: беру́, берёшь, берёт, берём, берёте, беру́т. In a shop Я беру́… means 'I'll take…': Я беру́ руба́шку.",
      ],
      ar: [
        "покупа́ть فعل منتظم من التصريف الأول: покупа́ю، покупа́ешь، покупа́ют. استخدمه للشراء عمومًا أو للشراء الآن: Что ты покупа́ешь?",
        "أمّا брать فيتغيّر جذره: беру́، берёшь، берёт، берём، берёте، беру́т. وفي المتجر تعني Я беру́… «سآخذ…»: Я беру́ руба́шку.",
      ],
      tables: [
        {
          caption: { en: "брать — to take", ar: "брать — يأخذ" },
          head: ["Pronoun · الضمير", "брать"],
          rows: [
            ["я", "беру́"],
            ["ты", "берёшь"],
            ["он / она́", "берёт"],
            ["мы", "берём"],
            ["вы", "берёте"],
            ["они́", "беру́т"],
          ],
        },
      ],
      examples: [
        { ru: "— Что вы покупа́ете? — Пода́рки.", en: "— What are you buying? — Presents.", ar: "— ماذا تشترون؟ — هدايا." },
        { ru: "Я беру́ откры́тку и газе́ту.", en: "I'll take a postcard and a newspaper.", ar: "سآخذ بطاقة وجريدة." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Пода́рок для па́пы", en: "A present for Dad", ar: "هديّة لأبي" },
    setting: {
      en: "Ahmed wants to send presents to his family in Cairo. Anna helps him in a big shop in the centre of Moscow; Natasha is the shop assistant.",
      ar: "يريد أحمد أن يرسل هدايا إلى عائلته في القاهرة. تساعده آنا في متجر كبير في وسط موسكو، وناتاشا هي البائعة.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, что ты покупа́ешь?", en: "Ahmed, what are you buying?", ar: "يا أحمد، ماذا تشتري؟" },
      {
        who: "A", name: "Ахме́д", ru: "Пода́рки. Я хочу́ пода́рок для ма́мы и пода́рок для па́пы.",
        en: "Presents. I want a present for Mum and a present for Dad.", ar: "هدايا. أريد هديّة لأمّي وهديّة لأبي.",
      },
      { who: "B", name: "А́нна", ru: "А что ма́ма лю́бит?", en: "And what does your mum like?", ar: "وماذا تحبّ أمّك؟" },
      {
        who: "A", name: "Ахме́д", ru: "Она́ лю́бит му́зыку и ча́сто чита́ет журна́лы.",
        en: "She loves music and often reads magazines.", ar: "هي تحبّ الموسيقى، وكثيرًا ما تقرأ المجلّات.",
      },
      { who: "B", name: "А́нна", ru: "Вот журна́л о му́зыке!", en: "Here's a magazine about music!", ar: "ها هي مجلّة عن الموسيقى!" },
      {
        who: "A", name: "Ахме́д", ru: "Отли́чно, беру́! А па́па всегда́ чита́ет газе́ту.",
        en: "Great, I'll take it! And Dad always reads the newspaper.", ar: "ممتاز، سآخذها! وأبي يقرأ الجريدة دائمًا.",
      },
      {
        who: "B", name: "А́нна", ru: "Газе́ту? Нет, газе́та — не пода́рок. Вот руба́шки!",
        en: "A newspaper? No, a newspaper isn't a present. Here are some shirts!", ar: "جريدة؟ لا، الجريدة ليست هديّة. ها هي القمصان!",
      },
      { who: "A", name: "Ахме́д", ru: "Здра́вствуйте! Я хочу́ руба́шку для па́пы.", en: "Hello! I'd like a shirt for my dad.", ar: "مرحبًا! أريد قميصًا لأبي." },
      {
        who: "B", name: "Ната́ша", ru: "Здра́вствуйте! Пожа́луйста, вот руба́шки, а вот ку́ртки.",
        en: "Hello! Here are the shirts, and here are the jackets.", ar: "مرحبًا! تفضّل، هذه هي القمصان، وهذه هي السترات.",
      },
      {
        who: "A", name: "Ахме́д", ru: "Спаси́бо. Я беру́ руба́шку и откры́тку.",
        en: "Thank you. I'll take a shirt and a postcard.", ar: "شكرًا. سآخذ قميصًا وبطاقة.",
      },
      { who: "B", name: "А́нна", ru: "А я хочу́ ко́фе!", en: "And I want a coffee!", ar: "وأنا أريد قهوة!" },
      { who: "A", name: "Ахме́д", ru: "Я то́же хочу́ ко́фе!", en: "I want a coffee too!", ar: "وأنا أيضًا أريد قهوة!" },
    ],
  },
  pronunciation: {
    title: { en: "Moving stress in хоте́ть", ar: "النبر المتنقّل في хоте́ть" },
    en: [
      "In хоте́ть the stress jumps: хочу́ (on the ending), хо́чешь and хо́чет (on the stem), then хоти́м, хоти́те, хотя́т (on the ending again).",
      "An unstressed о sounds like a short 'a': хоти́м [khatIm]. After ч an unstressed е sounds like 'i': хо́чешь [khOchish].",
      "The letter ч is always soft, like 'ch' in the English word 'cheese'.",
    ],
    ar: [
      "في хоте́ть يقفز النبر: хочу́ (على النهاية)، ثم хо́чешь و хо́чет (على الجذر)، ثم хоти́м، хоти́те، хотя́т (على النهاية مرة أخرى).",
      "حرف о غير المنبور يُنطق مثل «a» قصيرة: хоти́м [khatIm]. وبعد ч يُنطق حرف е غير المنبور مثل «i»: хо́чешь [khOchish].",
      "حرف ч ليّن دائمًا، مثل «تش» في الكلمة الإنجليزية cheese.",
    ],
    drills: [
      { ru: "хочу́", say: "khachU", focus: { en: "Stress on the ending: хочу́.", ar: "النبر على النهاية: хочу́." } },
      { ru: "хо́чешь", say: "khOchish", focus: { en: "Stress on the stem; the е sounds like 'i'.", ar: "النبر على الجذر، وحرف е يُنطق «i»." } },
      { ru: "хоти́м", say: "khatIm", focus: { en: "Back on the ending; the о sounds like 'a'.", ar: "يعود النبر إلى النهاية، وحرف о يُنطق «a»." } },
      { ru: "хотя́т", say: "khatyAt", focus: { en: "The 'they' form: stress on the last syllable.", ar: "صيغة «هم»: النبر على المقطع الأخير." } },
      { ru: "Я хочу́ ко́фе.", say: "ya khachU kOfye.", focus: { en: "Two stresses, one in each long word: хочу́, ко́фе.", ar: "نبران، واحد في كل كلمة طويلة: хочу́، ко́фе." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the right form: Па́па чита́ет …", ar: "اختر الصيغة الصحيحة: Па́па чита́ет …" },
      options: ["газе́та", "газе́ту", "газе́те"],
      answer: 1,
      why: { en: "A feminine object in -а takes -у: газе́ту.", ar: "المفعول به المؤنّث المنتهي بـ -а يأخذ -у: газе́ту." },
    },
    {
      kind: "choice",
      prompt: { en: "Which noun keeps the same form after Я хочу́…?", ar: "أيّ اسم يبقى على حاله بعد Я хочу́…؟" },
      options: ["ку́ртка", "руба́шка", "откры́тка", "пла́тье"],
      answer: 3,
      why: { en: "пла́тье is neuter, and neuter things do not change.", ar: "пла́тье اسم محايد، والأشياء المحايدة لا تتغيّر." },
    },
    {
      kind: "fill",
      prompt: { en: "Put му́зыка into the accusative.", ar: "ضع му́зыка في حالة المفعول به." },
      ru: "Я люблю́ ___.",
      answers: ["му́зыку"],
      why: { en: "-а becomes -у: му́зыку.", ar: "النهاية -а تصبح -у: му́зыку." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with ко́фе in the right form.", ar: "أكمل بكلمة ко́фе بالصيغة الصحيحة." },
      ru: "Ты хо́чешь ___?",
      answers: ["ко́фе"],
      why: { en: "ко́фе never changes its form.", ar: "كلمة ко́фе لا تتغيّر أبدًا." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with хоте́ть: we want", ar: "أكمل بالفعل хоте́ть: نحن نريد" },
      ru: "Мы ___ гуля́ть.",
      answers: ["хоти́м"],
      why: { en: "мы → хоти́м, an ending of the second conjugation.", ar: "مع мы نقول хоти́м، بنهاية من التصريف الثاني." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with хоте́ть: you (informal) want", ar: "أكمل بالفعل хоте́ть: أنت تريد" },
      ru: "Что ты ___?",
      answers: ["хо́чешь"],
      why: { en: "ты → хо́чешь: т becomes ч and the stress moves to the stem.", ar: "مع ты نقول хо́чешь: يتحوّل т إلى ч وينتقل النبر إلى الجذر." },
    },
    {
      kind: "choice",
      prompt: { en: "Choose the right form of хоте́ть.", ar: "اختر الصيغة الصحيحة من хоте́ть." },
      ru: "Они́ … смотре́ть фильм.",
      options: ["хо́чет", "хоти́те", "хотя́т", "хочу́"],
      answer: 2,
      why: { en: "они́ → хотя́т.", ar: "مع они́ نقول хотя́т." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with брать: I'll take", ar: "أكمل بالفعل брать: سآخذ" },
      ru: "Я ___ руба́шку.",
      answers: ["беру́"],
      why: { en: "брать → я беру́: the stem changes.", ar: "من брать نقول я беру́: يتغيّر الجذر." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I want a present for Mum.", ar: "كوّن الجملة: أريد هديّة لأمّي." },
      tokens: ["пода́рок", "Я", "ма́мы", "хочу́", "для"],
      answers: ["Я хочу́ пода́рок для ма́мы.", "Я хочу́ для ма́мы пода́рок."],
      why: { en: "Subject, verb, object, then для ма́мы.", ar: "الفاعل ثم الفعل ثم المفعول به، ثم для ма́мы." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: What would you like? (formal)", ar: "كوّن السؤال: ماذا تريد؟ (رسمي)" },
      tokens: ["хоти́те", "Что", "вы"],
      answers: ["Что вы хоти́те?"],
      why: { en: "The question word что comes first.", ar: "أداة الاستفهام что تأتي أولًا." },
    },
    {
      kind: "translate",
      prompt: { en: "I'd like a coffee.", ar: "أريد قهوة." },
      answers: ["Я хочу́ ко́фе.", "Хочу́ ко́фе."],
      why: { en: "хочу́ + ко́фе, which never changes.", ar: "хочу́ ثم ко́фе التي لا تتغيّر." },
    },
    {
      kind: "translate",
      prompt: { en: "She is buying a jacket.", ar: "هي تشتري سترة." },
      answers: ["Она́ покупа́ет ку́ртку."],
      why: { en: "ку́ртка is feminine: ку́ртку.", ar: "ку́ртка مؤنّثة: ку́ртку." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the person take?", ar: "استمع. ماذا يأخذ الشخص؟" },
      ru: "Я беру́ газе́ту и журна́л.",
      listen: true,
      options: ["a shirt and a jacket · قميصًا وسترة", "a newspaper and a magazine · جريدة ومجلّة", "a ticket and a postcard · تذكرة وبطاقة"],
      answer: 1,
      why: { en: "газе́ту = a newspaper, журна́л = a magazine.", ar: "газе́ту تعني جريدة، و журна́л تعني مجلّة." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the shop assistant ask?", ar: "استمع. عمّ تسأل البائعة؟" },
      ru: "Что вы хоти́те?",
      listen: true,
      options: ["What would you like? · ماذا تريد؟", "Where are you from? · من أين أنت؟", "What are you reading? · ماذا تقرأ؟"],
      answer: 0,
      why: { en: "хоти́те is a form of хоте́ть, to want.", ar: "хоти́те صيغة من الفعل хоте́ть، أي «يريد»." },
    },
  ],
  topics: ["accusative", "shopping"],
  search: ["Russian accusative case inanimate nouns", "Russian verb хотеть conjugation"],
  speaking: {
    scenario: {
      en: "You are flying home to Cairo next week. Tell the tutor what present you want for each person in your family — Mum, Dad, a brother or a sister — and why: what they love, read or listen to.",
      ar: "ستسافر إلى القاهرة الأسبوع القادم. أخبر المعلّم بالهديّة التي تريدها لكل فرد في عائلتك — لأمّك وأبيك وأخيك أو أختك — ولماذا: ماذا يحبّون أو يقرؤون أو يسمعون.",
    },
    tutorBrief:
      "Play Anna (Анна), a friendly Moscow student helping the learner choose presents in a shop; use ты. Ask what they want for each family member (Что ты хочешь для мамы? А для папы?) and what that person likes (Что мама любит? Что папа читает?). Use today's language: хотеть in all forms, покупать, брать (беру), музыка, газета, журнал, билет, подарок, куртка, платье, рубашка, туфли, открытка, кофе, для мамы / папы / брата / сестры, plus the known verbs любить, читать, слушать. Listen for the accusative: if the learner says 'Я хочу рубашка', recast it kindly (Рубашку? Отлично!) and explain -а → -у once. Finish by asking what they want for themselves, and praise one correct accusative form.",
    prompts: [
      { ru: "Я хочу́ пода́рок для ма́мы.", en: "I want a present for my mum.", ar: "أريد هديّة لأمّي." },
      { ru: "Ма́ма лю́бит му́зыку.", en: "Mum loves music.", ar: "أمّي تحبّ الموسيقى." },
      { ru: "Для па́пы я беру́ руба́шку.", en: "For Dad I'll take a shirt.", ar: "لأبي سآخذ قميصًا." },
      { ru: "Сестра́ ча́сто чита́ет журна́лы.", en: "My sister often reads magazines.", ar: "أختي كثيرًا ما تقرأ المجلّات." },
      { ru: "А что ты хо́чешь?", en: "And what do you want?", ar: "وأنت، ماذا تريد؟" },
    ],
  },
  journal: {
    en: "Write 3–5 sentences: what you want today, what you often buy, and what one person in your family loves (Мой брат лю́бит…).",
    ar: "اكتب من ٣ إلى ٥ جمل: ماذا تريد اليوم، وماذا تشتري كثيرًا، وماذا يحبّ أحد أفراد عائلتك (Мой брат лю́бит…).",
  },
  culture: {
    en: "Russians love giving presents. When you visit someone's home, bring something small: a cake (торт), chocolates or flowers. Flowers are given in odd numbers — even numbers are for funerals.",
    ar: "يحبّ الروس تقديم الهدايا. عندما تزور بيت أحدهم، أحضر شيئًا صغيرًا: كعكة (торт) أو شوكولاتة أو زهورًا. وتُهدى الزهور بعدد فردي، لأن العدد الزوجي خاص بالجنازات.",
  },
};

const DAY_23: Day = {
  n: 23,
  week: 4,
  kind: "lesson",
  title: { ru: "Еда́ и напи́тки", en: "Food and drink", ar: "الطعام والمشروبات" },
  goals: [
    { en: "Say what you eat and drink with есть and пить.", ar: "أن تقول ماذا تأكل وتشرب باستخدام есть و пить." },
    {
      en: "Name everyday food and use it in the accusative: Я ем ры́бу и пью во́ду.",
      ar: "أن تسمّي الأطعمة اليومية وتستخدمها في حالة المفعول به: Я ем ры́бу и пью во́ду.",
    },
    { en: "Talk about breakfast, lunch and dinner in Egypt and in Russia.", ar: "أن تتحدّث عن الفطور والغداء والعشاء في مصر وفي روسيا." },
  ],
  words: [
    {
      id: "d23-01", ru: "есть", say: "yest'", en: "to eat", ar: "يأكل", pos: "verb",
      forms: "ем, ешь, ест, еди́м, еди́те, едя́т",
      ex: { ru: "Я ем сала́т.", en: "I'm eating a salad.", ar: "أنا آكل سلطة." },
      note: { en: "Not the same word as есть 'there is' in У меня́ есть…", ar: "هذه ليست كلمة есть التي تعني «يوجد» في У меня́ есть…" },
    },
    {
      id: "d23-02", ru: "пить", say: "pit'", en: "to drink", ar: "يشرب", pos: "verb",
      forms: "пью, пьёшь, пьёт, пьём, пьёте, пьют",
      ex: { ru: "Ты пьёшь чай?", en: "Do you drink tea?", ar: "هل تشرب الشاي؟" },
    },
    {
      id: "d23-03", ru: "мя́со", say: "myAsa", en: "meat", ar: "لحم", pos: "noun", g: "n",
      ex: { ru: "Я не ем мя́со.", en: "I don't eat meat.", ar: "أنا لا آكل اللحم." },
    },
    {
      id: "d23-04", ru: "ры́ба", say: "rYba", en: "fish", ar: "سمك", pos: "noun", g: "f",
      ex: { ru: "Мы еди́м ры́бу.", en: "We are eating fish.", ar: "نحن نأكل السمك." },
    },
    {
      id: "d23-05", ru: "ку́рица", say: "kUritsa", en: "chicken", ar: "دجاج", pos: "noun", g: "f",
      ex: { ru: "Она́ ест ку́рицу и рис.", en: "She is eating chicken and rice.", ar: "هي تأكل الدجاج والأرز." },
    },
    {
      id: "d23-06", ru: "сала́т", say: "salAt", en: "salad", ar: "سلطة", pos: "noun", g: "m",
      ex: { ru: "Вот ваш сала́т.", en: "Here is your salad.", ar: "ها هي سلطتك." },
    },
    {
      id: "d23-07", ru: "рис", say: "ris", en: "rice", ar: "أرز", pos: "noun", g: "m",
      ex: { ru: "В Еги́пте мы ча́сто еди́м рис.", en: "In Egypt we often eat rice.", ar: "في مصر كثيرًا ما نأكل الأرز." },
    },
    {
      id: "d23-08", ru: "карто́шка", say: "kartOshka", en: "potatoes (everyday word)", ar: "بطاطس", pos: "noun", g: "f",
      ex: { ru: "Я люблю́ карто́шку.", en: "I love potatoes.", ar: "أحبّ البطاطس." },
      note: {
        en: "A collective word: one карто́шка means 'potatoes' in general.",
        ar: "كلمة جمعية: карто́шка بصيغة المفرد تعني البطاطس عمومًا.",
      },
    },
    {
      id: "d23-09", ru: "о́вощи", say: "Ovashchi", en: "vegetables", ar: "خضروات", pos: "noun", g: "pl",
      forms: "ед. ч. о́вощ",
      ex: { ru: "Мы покупа́ем о́вощи.", en: "We are buying vegetables.", ar: "نحن نشتري الخضروات." },
    },
    {
      id: "d23-10", ru: "фру́кты", say: "frUkty", en: "fruit", ar: "فواكه", pos: "noun", g: "pl",
      forms: "ед. ч. фрукт",
      ex: { ru: "Сестра́ лю́бит фру́кты.", en: "My sister loves fruit.", ar: "أختي تحبّ الفواكه." },
    },
    {
      id: "d23-11", ru: "за́втрак", say: "zAftrak", en: "breakfast", ar: "فطور", pos: "noun", g: "m",
      ex: { ru: "Сейча́с за́втрак.", en: "It's breakfast time.", ar: "الآن وقت الفطور." },
    },
    {
      id: "d23-12", ru: "обе́д", say: "abyEt", en: "lunch (the main midday meal)", ar: "غداء", pos: "noun", g: "m",
      ex: { ru: "Сейча́с обе́д, я хочу́ есть!", en: "It's lunchtime and I'm hungry!", ar: "إنه وقت الغداء، وأنا جائع!" },
    },
    { id: "d23-13", ru: "у́жин", say: "Uzhin", en: "dinner, supper", ar: "عشاء", pos: "noun", g: "m" },
    {
      id: "d23-14", ru: "вку́сно", say: "fkUsna", en: "tasty, delicious (it's tasty)", ar: "لذيذ", pos: "adv",
      ex: { ru: "О́чень вку́сно!", en: "Very tasty!", ar: "لذيذ جدًّا!" },
    },
    {
      id: "d23-15", ru: "и́ли", say: "Ili", en: "or", ar: "أو؛ أم", pos: "conj",
      ex: { ru: "Чай и́ли ко́фе?", en: "Tea or coffee?", ar: "شاي أم قهوة؟" },
    },
    {
      id: "d23-16", ru: "яйцо́", say: "yaytsO", en: "egg", ar: "بيضة", pos: "noun", g: "n",
      forms: "мн. ч. я́йца",
      ex: { ru: "На за́втрак я ем я́йца.", en: "I eat eggs for breakfast.", ar: "آكل البيض على الفطور." },
      note: { en: "The stress moves in the plural: яйцо́, я́йца.", ar: "ينتقل النبر في الجمع: яйцо́، я́йца." },
    },
    {
      id: "d23-17", ru: "ка́ша", say: "kAsha", en: "porridge (buckwheat, oats or rice)", ar: "عصيدة (من الحنطة السوداء أو الشوفان أو الأرز)", pos: "noun", g: "f",
      ex: { ru: "В Росси́и на за́втрак ча́сто едя́т ка́шу.", en: "In Russia people often eat porridge for breakfast.", ar: "في روسيا كثيرًا ما يأكلون العصيدة على الفطور." },
    },
    {
      id: "d23-18", ru: "свини́на", say: "svinIna", en: "pork", ar: "لحم الخنزير", pos: "noun", g: "f",
      ex: { ru: "Я не ем свини́ну.", en: "I don't eat pork.", ar: "أنا لا آكل لحم الخنزير." },
      note: {
        en: "Useful when you order: many Russian dishes contain pork. Beef is говя́дина.",
        ar: "كلمة مفيدة عند الطلب، فكثير من الأطباق الروسية فيها لحم خنزير. أمّا لحم البقر فاسمه говя́дина.",
      },
    },
    {
      id: "d23-19", ru: "на за́втрак", say: "na zAftrak", en: "for breakfast", ar: "على الفطور", pos: "phrase",
      ex: { ru: "Что ты ешь на за́втрак?", en: "What do you eat for breakfast?", ar: "ماذا تأكل على الفطور؟" },
      note: { en: "The same pattern: на обе́д (for lunch), на у́жин (for dinner).", ar: "وبالطريقة نفسها: на обе́д (على الغداء)، на у́жин (على العشاء)." },
    },
    {
      id: "d23-20", ru: "Я хочу́ есть.", say: "ya khachU yest'.", en: "I'm hungry. (literally: I want to eat)", ar: "أنا جائع. (حرفيًا: أريد أن آكل)", pos: "phrase",
      note: { en: "And Я хочу́ пить. — I'm thirsty.", ar: "و Я хочу́ пить — أنا عطشان." },
    },
    {
      id: "d23-21", ru: "Прия́тного аппети́та!", say: "priyAtnava apitIta!", en: "Enjoy your meal!", ar: "بالهناء والشفاء!", pos: "phrase",
      note: { en: "Said to people who are eating; the answer is Спаси́бо!", ar: "تُقال لمن يأكل، والجواب: Спаси́бо!" },
    },
  ],
  grammar: [
    {
      id: "d23-g1",
      title: { en: "есть and пить: two irregular verbs", ar: "есть و пить: فعلان شاذّان" },
      en: [
        "есть (to eat) is one of the few truly irregular verbs in Russian, so learn its six forms as they are: ем, ешь, ест, еди́м, еди́те, едя́т.",
        "пить (to drink) keeps a soft sign in every form: пью, пьёшь, пьёт, пьём, пьёте, пьют. The ь adds a 'y' sound before the vowel: пью sounds like [p'yu].",
        "Trap: есть 'to eat' looks exactly like есть 'there is' in У меня́ есть… The sentence tells you which one it is: Я хочу́ есть = I'm hungry.",
      ],
      ar: [
        "الفعل есть (يأكل) من الأفعال القليلة الشاذّة تمامًا في الروسية، فاحفظ صيغه الست كما هي: ем، ешь، ест، еди́м، еди́те، едя́т.",
        "الفعل пить (يشرب) يحتفظ بالعلامة اللينة ь في كل صيغه: пью، пьёшь، пьёт، пьём، пьёте، пьют. وتضيف ь صوت «ي» قبل حرف العلّة: пью تُنطق [p'yu].",
        "انتبه: есть بمعنى «يأكل» تشبه تمامًا есть بمعنى «يوجد» في У меня́ есть…، والجملة هي التي تحدّد المعنى: Я хочу́ есть تعني «أنا جائع».",
      ],
      tables: [
        {
          caption: { en: "есть and пить", ar: "есть و пить" },
          head: ["Pronoun · الضمير", "есть · يأكل", "пить · يشرب"],
          rows: [
            ["я", "ем", "пью"],
            ["ты", "ешь", "пьёшь"],
            ["он / она́", "ест", "пьёт"],
            ["мы", "еди́м", "пьём"],
            ["вы", "еди́те", "пьёте"],
            ["они́", "едя́т", "пьют"],
          ],
        },
      ],
      examples: [
        { ru: "Что ты ешь?", en: "What are you eating?", ar: "ماذا تأكل؟" },
        { ru: "Мы пьём чай, а они́ пьют ко́фе.", en: "We drink tea, and they drink coffee.", ar: "نحن نشرب الشاي، وهم يشربون القهوة." },
      ],
    },
    {
      id: "d23-g2",
      title: { en: "Food in the accusative", ar: "الطعام في حالة المفعول به" },
      en: [
        "What you eat and drink is a direct object, so yesterday's rule works: feminine -а becomes -у: ры́ба → ры́бу, ку́рица → ку́рицу, карто́шка → карто́шку. Masculine, neuter and plural words stay the same: рис, мя́со, фру́кты.",
        "Trap: вода́ also moves its stress: Я пью во́ду.",
        "For meals use на + the accusative: на за́втрак (for breakfast), на обе́д (for lunch), на у́жин (for dinner): Что ты ешь на за́втрак?",
      ],
      ar: [
        "ما تأكله وتشربه مفعول به مباشر، لذلك تنطبق قاعدة الأمس: المؤنّث المنتهي بـ -а يأخذ -у: ры́ба تصبح ры́бу، و ку́рица تصبح ку́рицу، و карто́шка تصبح карто́шку. أمّا المذكّر والمحايد والجمع فلا تتغيّر: рис، мя́со، фру́кты.",
        "انتبه: كلمة вода́ ينتقل نبرها أيضًا: Я пью во́ду.",
        "مع الوجبات استخدم на + حالة المفعول به: на за́втрак (على الفطور)، на обе́д (على الغداء)، на у́жин (على العشاء): Что ты ешь на за́втрак?",
      ],
      tables: [
        {
          caption: { en: "What do you eat and drink?", ar: "ماذا تأكل وماذا تشرب؟" },
          head: ["Nominative · حالة الرفع", "Accusative · حالة المفعول به", "Example · مثال"],
          rows: [
            ["ры́ба", "ры́бу", "Я ем ры́бу."],
            ["ку́рица", "ку́рицу", "Она́ ест ку́рицу."],
            ["вода́", "во́ду", "Мы пьём во́ду."],
            ["ка́ша", "ка́шу", "Они́ едя́т ка́шу."],
            ["сала́т", "сала́т", "Ты ешь сала́т?"],
            ["мя́со", "мя́со", "Я не ем мя́со."],
            ["о́вощи", "о́вощи", "Мы еди́м о́вощи."],
          ],
        },
      ],
      examples: [
        { ru: "Я ем ры́бу и пью во́ду.", en: "I eat fish and drink water.", ar: "آكل السمك وأشرب الماء." },
        { ru: "На обе́д мы еди́м суп и ку́рицу.", en: "For lunch we have soup and chicken.", ar: "على الغداء نأكل الحساء والدجاج." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Обе́д в университе́те", en: "Lunch at the university", ar: "الغداء في الجامعة" },
    setting: {
      en: "Lunchtime in the university canteen. Anna and Ahmed choose their food and talk about breakfast in Egypt and in Russia.",
      ar: "وقت الغداء في مطعم الجامعة. يختار أحمد وآنا طعامهما ويتحدّثان عن الفطور في مصر وفي روسيا.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, сейча́с обе́д. Ты хо́чешь есть?", en: "Ahmed, it's lunchtime. Are you hungry?", ar: "يا أحمد، إنه وقت الغداء. هل أنت جائع؟" },
      { who: "A", name: "Ахме́д", ru: "Да, я о́чень хочу́ есть! А что ты ешь?", en: "Yes, I'm very hungry! What are you having?", ar: "نعم، أنا جائع جدًّا! وماذا تأكلين؟" },
      { who: "B", name: "А́нна", ru: "Я ем сала́т и ры́бу. А ты?", en: "I'm having a salad and fish. And you?", ar: "آكل سلطة وسمكًا. وأنت؟" },
      {
        who: "A", name: "Ахме́д", ru: "Я не о́чень люблю́ ры́бу. А э́то мя́со — свини́на?",
        en: "I don't really like fish. And this meat — is it pork?", ar: "لا أحبّ السمك كثيرًا. وهذا اللحم، هل هو لحم خنزير؟",
      },
      { who: "B", name: "А́нна", ru: "Нет, э́то ку́рица. О́чень вку́сно!", en: "No, it's chicken. Very tasty!", ar: "لا، هذا دجاج. لذيذ جدًّا!" },
      { who: "A", name: "Ахме́д", ru: "Хорошо́, я беру́ ку́рицу и рис.", en: "OK, I'll take the chicken and rice.", ar: "حسنًا، سآخذ الدجاج والأرز." },
      { who: "B", name: "А́нна", ru: "А что ты пьёшь? Чай и́ли сок?", en: "And what are you drinking? Tea or juice?", ar: "وماذا تشرب؟ شايًا أم عصيرًا؟" },
      { who: "A", name: "Ахме́д", ru: "Я пью во́ду. Прия́тного аппети́та!", en: "I'm drinking water. Enjoy your meal!", ar: "أشرب الماء. بالهناء والشفاء!" },
      {
        who: "B", name: "А́нна", ru: "Спаси́бо! Ахме́д, а что вы еди́те на за́втрак в Еги́пте?",
        en: "Thanks! Ahmed, what do you eat for breakfast in Egypt?", ar: "شكرًا! يا أحمد، وماذا تأكلون على الفطور في مصر؟",
      },
      { who: "A", name: "Ахме́д", ru: "Хлеб, сыр, я́йца… и мы пьём чай.", en: "Bread, cheese, eggs… and we drink tea.", ar: "الخبز والجبن والبيض… ونشرب الشاي." },
      {
        who: "B", name: "А́нна", ru: "А в Росси́и на за́втрак ча́сто едя́т ка́шу.",
        en: "And in Russia people often eat porridge for breakfast.", ar: "أمّا في روسيا فكثيرًا ما يأكلون العصيدة على الفطور.",
      },
      {
        who: "A", name: "Ахме́д", ru: "Ка́шу? Интере́сно! За́втра я хочу́ ка́шу на за́втрак.",
        en: "Porridge? Interesting! Tomorrow I want porridge for breakfast.", ar: "العصيدة؟ مثير للاهتمام! غدًا أريد العصيدة على الفطور.",
      },
    ],
  },
  pronunciation: {
    title: { en: "The hidden 'y': е at the start, ь before a vowel", ar: "صوت «ي» الخفيّ: حرف е في أول الكلمة و ь قبل حرف العلّة" },
    en: [
      "At the start of a word е is pronounced 'ye': ем [yem], ешь [yesh], ест [yest]. When it is unstressed it becomes a short 'yi': еди́м [yidIm].",
      "A soft sign before a vowel works like a small 'y' between the consonant and the vowel: пью [p'yu], пьёт [p'yot]. Without it, пью would sound like 'pu'.",
    ],
    ar: [
      "في أول الكلمة يُنطق حرف е «يِه»: ем [yem]، ешь [yesh]، ест [yest]. وإذا لم يكن منبورًا صار «يِ» قصيرة: еди́м [yidIm].",
      "العلامة اللينة قبل حرف العلّة تعمل مثل «ي» صغيرة بين الساكن وحرف العلّة: пью [p'yu]، пьёт [p'yot]. ومن دونها كانت пью ستُنطق «pu».",
    ],
    drills: [
      { ru: "Я ем.", say: "ya yem.", focus: { en: "е at the start of a word: 'yem'.", ar: "حرف е في أول الكلمة: «يِم»." } },
      { ru: "Мы еди́м рис.", say: "my yidIm ris.", focus: { en: "Unstressed е sounds like 'yi'; the stress is on еди́м.", ar: "حرف е غير المنبور يُنطق «يِ»، والنبر في еди́м." } },
      { ru: "пью", say: "p'yu", focus: { en: "A clear 'y' after p.", ar: "صوت «ي» واضح بعد p." } },
      { ru: "Ты пьёшь чай?", say: "ty p'yosh chay?", focus: { en: "ё is always stressed; the voice rises on чай.", ar: "حرف ё منبور دائمًا، ويرتفع الصوت على чай." } },
      { ru: "Они́ пьют во́ду.", say: "anI p'yut vOdu.", focus: { en: "пьют: the same 'y' again, then во́ду with the stress on во-.", ar: "في пьют صوت «ي» نفسه، ثم во́ду والنبر على المقطع الأول." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the right form of есть.", ar: "اختر الصيغة الصحيحة من есть." },
      ru: "Мы … сала́т.",
      options: ["ем", "ест", "еди́м", "едя́т"],
      answer: 2,
      why: { en: "мы → еди́м.", ar: "مع мы نقول еди́м." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with пить: you (informal) drink", ar: "أكمل بالفعل пить: أنت تشرب" },
      ru: "Ты ___ ко́фе?",
      answers: ["пьёшь"],
      why: { en: "ты → пьёшь, with ь and ё.", ar: "مع ты نقول пьёшь، بالحرفين ь و ё." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with есть: they eat", ar: "أكمل بالفعل есть: هم يأكلون" },
      ru: "Они́ ___ ка́шу.",
      answers: ["едя́т"],
      why: { en: "они́ → едя́т.", ar: "مع они́ نقول едя́т." },
    },
    {
      kind: "fill",
      prompt: { en: "Put ры́ба into the accusative.", ar: "ضع ры́ба في حالة المفعول به." },
      ru: "Я ем ___.",
      answers: ["ры́бу"],
      why: { en: "Feminine -а becomes -у: ры́бу.", ar: "المؤنّث المنتهي بـ -а يأخذ -у: ры́бу." },
    },
    {
      kind: "fill",
      prompt: { en: "Put вода́ into the accusative. Mind the stress!", ar: "ضع вода́ في حالة المفعول به، وانتبه إلى النبر!" },
      ru: "Мы пьём ___.",
      answers: ["во́ду"],
      why: { en: "вода́ → во́ду: the ending changes and the stress moves.", ar: "вода́ تصبح во́ду: تتغيّر النهاية وينتقل النبر." },
    },
    {
      kind: "choice",
      prompt: { en: "Which word does NOT change after Я ем…?", ar: "أيّ كلمة لا تتغيّر بعد Я ем…؟" },
      options: ["ку́рица", "карто́шка", "рис", "ры́ба"],
      answer: 2,
      why: { en: "рис is masculine, and masculine things stay the same.", ar: "рис مذكّر، والأشياء المذكّرة لا تتغيّر." },
    },
    {
      kind: "choice",
      prompt: { en: "You are very hungry. What do you say?", ar: "أنت جائع جدًّا. ماذا تقول؟" },
      options: ["Я хочу́ пить.", "Прия́тного аппети́та!", "Я о́чень хочу́ есть."],
      answer: 2,
      why: { en: "Я хочу́ есть — literally 'I want to eat'.", ar: "Я хочу́ есть تعني حرفيًا «أريد أن آكل»." },
    },
    {
      kind: "choice",
      prompt: { en: "Your friend starts eating. What do you say?", ar: "صديقك يبدأ الأكل. ماذا تقول له؟" },
      options: ["Прия́тного аппети́та!", "О́чень прия́тно!", "До свида́ния!"],
      answer: 0,
      why: { en: "Прия́тного аппети́та! = Enjoy your meal!", ar: "Прия́тного аппети́та! تعني «بالهناء والشفاء!»." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I eat fish and drink water.", ar: "كوّن الجملة: آكل السمك وأشرب الماء." },
      tokens: ["пью", "Я", "ры́бу", "и", "ем", "во́ду"],
      answers: ["Я ем ры́бу и пью во́ду."],
      why: { en: "Two verbs share one subject: Я ем… и пью…", ar: "فعلان لفاعل واحد: Я ем… и пью…" },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: What do you eat for breakfast?", ar: "كوّن السؤال: ماذا تأكل على الفطور؟" },
      tokens: ["ешь", "за́втрак", "Что", "на", "ты"],
      answers: ["Что ты ешь на за́втрак?", "Что ты на за́втрак ешь?"],
      why: { en: "Question word first, then ты ешь, then на за́втрак.", ar: "أداة الاستفهام أولًا، ثم ты ешь، ثم на за́втрак." },
    },
    {
      kind: "translate",
      prompt: { en: "I don't eat pork.", ar: "أنا لا آكل لحم الخنزير." },
      answers: ["Я не ем свини́ну.", "Я не ем свини́ны."],
      why: { en: "не comes before the verb; свини́на is feminine: свини́ну.", ar: "تأتي не قبل الفعل، و свини́на مؤنّثة: свини́ну." },
    },
    {
      kind: "translate",
      prompt: { en: "Tea or coffee?", ar: "شاي أم قهوة؟" },
      answers: ["Чай и́ли ко́фе?"],
      why: { en: "и́ли = or.", ar: "и́ли تعني «أو» أو «أم»." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is Anna eating?", ar: "استمع. ماذا تأكل آنا؟" },
      ru: "Я ем сала́т и ку́рицу.",
      listen: true,
      options: ["fish and rice · سمك وأرز", "salad and chicken · سلطة ودجاج", "porridge and eggs · عصيدة وبيض"],
      answer: 1,
      why: { en: "сала́т = salad, ку́рицу = chicken.", ar: "сала́т تعني سلطة، و ку́рицу تعني دجاجًا." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the person drink?", ar: "استمع. ماذا يشرب الشخص؟" },
      ru: "Я пью во́ду и сок.",
      listen: true,
      options: ["tea and milk · شاي وحليب", "coffee · قهوة", "water and juice · ماء وعصير"],
      answer: 2,
      why: { en: "во́ду = water, сок = juice.", ar: "во́ду تعني ماء، و сок تعني عصيرًا." },
    },
  ],
  topics: ["food", "accusative"],
  search: ["Russian food vocabulary for beginners", "Russian verbs есть and пить conjugation"],
  speaking: {
    scenario: {
      en: "Tell the tutor what you usually eat and drink for breakfast, lunch and dinner. Then ask what Russians eat and compare the two countries.",
      ar: "أخبر المعلّم بما تأكله وتشربه عادةً على الفطور والغداء والعشاء، ثم اسأله عمّا يأكله الروس وقارن بين البلدين.",
    },
    tutorBrief:
      "Play Olga Petrovna (Ольга Петровна), the learner's Russian teacher, chatting over tea after class; use вы. Ask what the learner eats and drinks for breakfast, lunch and dinner (Что вы едите на завтрак? на обед? на ужин?) and tell them about Russian habits: каша for breakfast, soup at обед, a lighter ужин. Use есть and пить in all forms, the food words мясо, рыба, курица, салат, рис, картошка, овощи, фрукты, каша, яйца, хлеб, сыр, суп, чай, кофе, сок, вода, and вкусно, или, Я хочу есть, Приятного аппетита. If the learner uses the nominative for a feminine object (Я ем рыба), repeat the sentence correctly (Вы едите рыбу? Хорошо!) and move on. End by wishing Приятного аппетита!",
    prompts: [
      { ru: "На за́втрак я ем хлеб, сыр и я́йца.", en: "For breakfast I eat bread, cheese and eggs.", ar: "على الفطور آكل الخبز والجبن والبيض." },
      { ru: "Я пью чай, а мой брат пьёт ко́фе.", en: "I drink tea, and my brother drinks coffee.", ar: "أنا أشرب الشاي، وأخي يشرب القهوة." },
      { ru: "На обе́д мы еди́м рис и ку́рицу.", en: "For lunch we eat rice and chicken.", ar: "على الغداء نأكل الأرز والدجاج." },
      { ru: "Я не ем свини́ну.", en: "I don't eat pork.", ar: "لا آكل لحم الخنزير." },
      { ru: "А что вы еди́те на у́жин?", en: "And what do you eat for dinner?", ar: "وماذا تأكلون على العشاء؟" },
    ],
  },
  journal: {
    en: "Write 3–5 sentences about a normal day: what you eat and drink for breakfast, lunch and dinner (на за́втрак, на обе́д, на у́жин), and one dish you love (Я люблю́ ку́шари).",
    ar: "اكتب من ٣ إلى ٥ جمل عن يوم عادي: ماذا تأكل وتشرب على الفطور والغداء والعشاء (на за́втрак، на обе́д، на у́жин)، وطبقًا تحبّه (Я люблю́ ку́шари).",
  },
  culture: {
    en: "For Russians обе́д, in the early afternoon, is the main hot meal: often a soup first (борщ or щи), then meat or fish with potatoes or rice. On weekdays many cafés offer a cheap fixed lunch, the би́знес-ланч.",
    ar: "عند الروس يكون الغداء (обе́д) في أول فترة ما بعد الظهر، وهو الوجبة الساخنة الرئيسية: غالبًا حساء أولًا (борщ أو щи)، ثم لحم أو سمك مع البطاطس أو الأرز. وفي أيام العمل تقدّم مقاهٍ كثيرة غداءً ثابتًا رخيصًا يُسمّى би́знес-ланч.",
  },
};

const DAY_24: Day = {
  n: 24,
  week: 4,
  kind: "lesson",
  title: { ru: "В кафе́", en: "At the café", ar: "في المقهى" },
  goals: [
    {
      en: "Order food and drinks politely: Я бу́ду…, Мо́жно…?, Да́йте, пожа́луйста…",
      ar: "أن تطلب الطعام والمشروبات بأدب: Я бу́ду…، Мо́жно…?، Да́йте, пожа́луйста…",
    },
    { en: "Use мочь: Я могу́…, Вы мо́жете…?", ar: "أن تستخدم الفعل мочь: Я могу́…، Вы мо́жете…?" },
    {
      en: "Ask for what is missing on the table and for the bill: ло́жка, ви́лка, нож, Счёт, пожа́луйста.",
      ar: "أن تطلب ما ينقص على المائدة ثم الحساب: ло́жка، ви́лка، нож، Счёт, пожа́луйста.",
    },
  ],
  words: [
    {
      id: "d24-01", ru: "мочь", say: "moch'", en: "can, to be able to", ar: "يستطيع", pos: "verb",
      forms: "могу́, мо́жешь, мо́жет; мо́жем, мо́жете, мо́гут",
      ex: { ru: "Я могу́ чита́ть по-ру́сски.", en: "I can read Russian.", ar: "أستطيع أن أقرأ بالروسية." },
    },
    {
      id: "d24-02", ru: "мо́жно", say: "mOzhna", en: "one may, it's possible; May I…? Can I have…?", ar: "يمكن، مسموح؛ هل يمكن…؟", pos: "adv",
      ex: { ru: "Мо́жно меню́?", en: "Can I have the menu?", ar: "هل يمكن أن أحصل على قائمة الطعام؟" },
    },
    {
      id: "d24-03", ru: "меню́", say: "minyU", en: "menu", ar: "قائمة الطعام", pos: "noun", g: "n",
      ex: { ru: "Вот меню́.", en: "Here is the menu.", ar: "ها هي قائمة الطعام." },
      note: { en: "Neuter, and it never changes, like ко́фе.", ar: "كلمة محايدة لا تتغيّر أبدًا، مثل ко́фе." },
    },
    {
      id: "d24-04", ru: "счёт", say: "shchot", en: "bill, check", ar: "الحساب (الفاتورة)", pos: "noun", g: "m",
      ex: { ru: "Вот ваш счёт.", en: "Here is your bill.", ar: "ها هو حسابك." },
    },
    {
      id: "d24-05", ru: "официа́нт", say: "afitsiAnt", en: "waiter", ar: "نادل", pos: "noun", g: "m",
      ex: { ru: "Наш официа́нт — студе́нт.", en: "Our waiter is a student.", ar: "نادلنا طالب." },
      note: { en: "A waitress is официа́нтка.", ar: "والنادلة اسمها официа́нтка." },
    },
    {
      id: "d24-06", ru: "стака́н", say: "stakAn", en: "glass (for water, juice or tea)", ar: "كوب", pos: "noun", g: "m",
      ex: { ru: "Мо́жно стака́н?", en: "Can I have a glass?", ar: "هل يمكن أن أحصل على كوب؟" },
    },
    {
      id: "d24-07", ru: "ча́шка", say: "chAshka", en: "cup", ar: "فنجان", pos: "noun", g: "f",
      ex: { ru: "Ча́шку ко́фе, пожа́луйста.", en: "A cup of coffee, please.", ar: "فنجان قهوة من فضلك." },
    },
    {
      id: "d24-08", ru: "таре́лка", say: "taryElka", en: "plate", ar: "صحن", pos: "noun", g: "f",
      ex: { ru: "Да́йте, пожа́луйста, таре́лку.", en: "Could I have a plate, please?", ar: "أعطني صحنًا من فضلك." },
    },
    {
      id: "d24-09", ru: "ло́жка", say: "lOshka", en: "spoon", ar: "ملعقة", pos: "noun", g: "f",
      ex: { ru: "Мо́жно ло́жку?", en: "Can I have a spoon?", ar: "هل يمكن أن أحصل على ملعقة؟" },
    },
    {
      id: "d24-10", ru: "ви́лка", say: "vIlka", en: "fork", ar: "شوكة", pos: "noun", g: "f",
      ex: { ru: "Где моя́ ви́лка?", en: "Where's my fork?", ar: "أين شوكتي؟" },
    },
    {
      id: "d24-11", ru: "нож", say: "nosh", en: "knife", ar: "سكّين", pos: "noun", g: "m",
      forms: "мн. ч. ножи́",
      ex: { ru: "Вот нож и ви́лка.", en: "Here are a knife and a fork.", ar: "ها هما السكّين والشوكة." },
    },
    {
      id: "d24-12", ru: "са́хар", say: "sAkhar", en: "sugar", ar: "سكّر", pos: "noun", g: "m",
      ex: { ru: "Ты хо́чешь са́хар?", en: "Do you want sugar?", ar: "هل تريد سكّرًا؟" },
    },
    {
      id: "d24-13", ru: "соль", say: "sol'", en: "salt", ar: "ملح", pos: "noun", g: "f",
      ex: { ru: "Да́йте, пожа́луйста, соль.", en: "Could you pass the salt, please?", ar: "أعطني الملح من فضلك." },
      note: {
        en: "Feminine, like other nouns in -ь whose gender you must learn: соль, дверь, ночь.",
        ar: "مؤنّثة، مثل أسماء أخرى تنتهي بـ -ь يجب حفظ جنسها: соль، дверь، ночь.",
      },
    },
    {
      id: "d24-14", ru: "Я бу́ду…", say: "ya bUdu…", en: "I'll have… (when ordering)", ar: "سآخذ… (عند الطلب)", pos: "phrase",
      ex: { ru: "Я бу́ду суп и сала́т.", en: "I'll have the soup and a salad.", ar: "سآخذ الحساء والسلطة." },
      note: {
        en: "Literally 'I will be…'. Put the dish in the accusative: Я бу́ду ры́бу.",
        ar: "حرفيًا «سأكون…». ضع الطبق في حالة المفعول به: Я бу́ду ры́бу.",
      },
    },
    { id: "d24-15", ru: "Что вы бу́дете?", say: "shto vy bUditye?", en: "What will you have?", ar: "ماذا ستطلب؟", pos: "phrase" },
    {
      id: "d24-16", ru: "Да́йте, пожа́луйста…", say: "dAytye, pazhAlusta…", en: "Could I have…, please? (literally: give, please…)",
      ar: "أعطني… من فضلك", pos: "phrase",
      note: {
        en: "Polite and normal in shops and cafés; the thing you want goes into the accusative.",
        ar: "صيغة مهذّبة وعادية في المتاجر والمقاهي، والشيء المطلوب يأتي في حالة المفعول به.",
      },
    },
    { id: "d24-17", ru: "Счёт, пожа́луйста.", say: "shchot, pazhAlusta.", en: "The bill, please.", ar: "الحساب من فضلك.", pos: "phrase" },
    {
      id: "d24-18", ru: "Вот, пожа́луйста.", say: "vot, pazhAlusta.", en: "Here you are.", ar: "تفضّل.", pos: "phrase",
      note: { en: "Said when you hand something to someone.", ar: "تُقال عندما تناول شخصًا شيئًا." },
    },
    {
      id: "d24-19", ru: "без са́хара", say: "bis sAkhara", en: "without sugar", ar: "بدون سكّر", pos: "phrase",
      ex: { ru: "Чай без са́хара, пожа́луйста.", en: "Tea without sugar, please.", ar: "شاي بدون سكّر من فضلك." },
      note: {
        en: "без takes the genitive case (week 5); learn this one as a chunk.",
        ar: "يأتي بعد без اسم في حالة الإضافة (الأسبوع الخامس)، فاحفظ هذه العبارة جاهزة.",
      },
    },
    { id: "d24-20", ru: "Мо́жно ка́ртой?", say: "mOzhna kArtay?", en: "Can I pay by card?", ar: "هل يمكن الدفع بالبطاقة؟", pos: "phrase" },
    {
      id: "d24-21", ru: "У вас есть…?", say: "u vas yest'…?", en: "Do you have…?", ar: "هل عندكم…؟", pos: "phrase",
      ex: { ru: "У вас есть меню́ по-англи́йски?", en: "Do you have a menu in English?", ar: "هل عندكم قائمة طعام بالإنجليزية؟" },
    },
  ],
  grammar: [
    {
      id: "d24-g1",
      title: { en: "мочь — can, to be able to", ar: "мочь — يستطيع" },
      en: [
        "мочь is a first-conjugation verb with a consonant change: г in the я and они́ forms, ж in all the others: могу́, мо́жешь, мо́жет, мо́жем, мо́жете, мо́гут.",
        "The stress is on the ending only in могу́; all the other forms are stressed on the stem.",
        "мочь + infinitive: Я могу́ чита́ть по-ру́сски. Вы мо́жете говори́ть ме́дленно? — a very useful question for a learner.",
      ],
      ar: [
        "мочь فعل من التصريف الأول يتبدّل فيه الساكن: حرف г في صيغتي я و они́، وحرف ж في باقي الصيغ: могу́، мо́жешь، мо́жет، мо́жем، мо́жете، мо́гут.",
        "النبر على النهاية في могу́ وحدها، أمّا باقي الصيغ فالنبر فيها على الجذر.",
        "мочь + المصدر: Я могу́ чита́ть по-ру́сски. Вы мо́жете говори́ть ме́дленно? — سؤال مفيد جدًّا لمن يتعلّم اللغة.",
      ],
      tables: [
        {
          caption: { en: "мочь — can", ar: "мочь — يستطيع" },
          head: ["Pronoun · الضمير", "мочь"],
          rows: [
            ["я", "могу́"],
            ["ты", "мо́жешь"],
            ["он / она́", "мо́жет"],
            ["мы", "мо́жем"],
            ["вы", "мо́жете"],
            ["они́", "мо́гут"],
          ],
        },
      ],
      examples: [
        { ru: "Вы мо́жете говори́ть ме́дленно?", en: "Can you speak slowly?", ar: "هل يمكنك أن تتكلّم ببطء؟" },
        { ru: "Я не могу́ есть свини́ну.", en: "I can't eat pork.", ar: "لا أستطيع أن آكل لحم الخنزير." },
        { ru: "Мы мо́жем гуля́ть в па́рке.", en: "We can go for a walk in the park.", ar: "يمكننا أن نتنزّه في الحديقة." },
      ],
    },
    {
      id: "d24-g2",
      title: { en: "Ordering politely: Я бу́ду…, Мо́жно…?, Да́йте…", ar: "الطلب بأدب: Я бу́ду…، Мо́жно…?، Да́йте…" },
      en: [
        "To order, Russians say Я бу́ду… (literally 'I will be…') + the dish in the accusative: Я бу́ду ры́бу. The waiter asks: Что вы бу́дете?",
        "Мо́жно…? (May I…? / Can I have…?) needs no person and no verb: Мо́жно меню́? Мо́жно ка́ртой? Да́йте, пожа́луйста… (Give me, please…) is polite too, thanks to пожа́луйста.",
        "If something is not available you will hear …нет: Ко́фе сейча́с нет. ко́фе never changes, but other nouns take a new form after нет — you will learn it in week 5. At the end: Счёт, пожа́луйста.",
      ],
      ar: [
        "للطلب يقول الروس Я бу́ду… (حرفيًا «سأكون…») + الطبق في حالة المفعول به: Я бу́ду ры́бу. والنادل يسأل: Что вы бу́дете?",
        "عبارة Мо́жно…? (هل يمكن…؟) لا تحتاج إلى فاعل ولا إلى فعل: Мо́жно меню́? Мо́жно ка́ртой? وعبارة Да́йте, пожа́луйста… (أعطني من فضلك…) مهذّبة أيضًا بفضل пожа́луйста.",
        "إذا لم يكن شيء متوفّرًا فستسمع …нет: Ко́фе сейча́с нет. كلمة ко́фе لا تتغيّر، لكن الأسماء الأخرى تأخذ صيغة جديدة بعد нет، وستتعلّمها في الأسبوع الخامس. وفي النهاية: Счёт, пожа́луйста.",
      ],
      tables: [
        {
          caption: { en: "Café phrases", ar: "عبارات المقهى" },
          head: ["Russian · بالروسية", "English · بالإنجليزية", "Arabic · بالعربية"],
          rows: [
            ["Я бу́ду суп.", "I'll have the soup.", "سآخذ الحساء."],
            ["Мо́жно ча́шку ко́фе?", "Can I have a cup of coffee?", "هل يمكن أن أحصل على فنجان قهوة؟"],
            ["Да́йте, пожа́луйста, ви́лку.", "Could I have a fork, please?", "أعطني شوكة من فضلك."],
            ["У вас есть сок?", "Do you have juice?", "هل عندكم عصير؟"],
            ["Счёт, пожа́луйста.", "The bill, please.", "الحساب من فضلك."],
            ["Мо́жно ка́ртой?", "Can I pay by card?", "هل يمكن الدفع بالبطاقة؟"],
          ],
        },
      ],
      examples: [
        { ru: "— Что вы бу́дете? — Я бу́ду ку́рицу и сала́т.", en: "— What will you have? — I'll have the chicken and a salad.", ar: "— ماذا ستطلب؟ — سآخذ الدجاج والسلطة." },
        { ru: "Да́йте, пожа́луйста, соль.", en: "Could you pass the salt, please?", ar: "أعطني الملح من فضلك." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Счёт, пожа́луйста!", en: "The bill, please!", ar: "الحساب من فضلك!" },
    setting: {
      en: "Ahmed has lunch alone in a small café near his office. The waitress speaks fast, and one thing on the menu is not available today.",
      ar: "يتناول أحمد الغداء وحده في مقهى صغير قرب مكتبه. النادلة تتكلّم بسرعة، وأحد الأشياء في القائمة غير متوفّر اليوم.",
    },
    lines: [
      {
        who: "B", name: "Официа́нтка", ru: "Здра́вствуйте! Вот меню́. Что вы бу́дете?",
        en: "Hello! Here's the menu. What will you have?", ar: "مرحبًا! ها هي قائمة الطعام. ماذا ستطلب؟",
      },
      {
        who: "A", name: "Ахме́д", ru: "Извини́те, я немно́го понима́ю по-ру́сски. Вы мо́жете говори́ть ме́дленно?",
        en: "Sorry, I understand a little Russian. Can you speak slowly?", ar: "عذرًا، أفهم الروسية قليلًا. هل يمكنكِ أن تتكلّمي ببطء؟",
      },
      { who: "B", name: "Официа́нтка", ru: "Да, могу́. Что вы бу́дете?", en: "Yes, I can. What will you have?", ar: "نعم، أستطيع. ماذا ستطلب؟" },
      {
        who: "A", name: "Ахме́д", ru: "Я бу́ду суп, ку́рицу и рис. И ча́шку ко́фе, пожа́луйста.",
        en: "I'll have the soup, the chicken and rice. And a cup of coffee, please.", ar: "سآخذ الحساء والدجاج والأرز. وفنجان قهوة من فضلك.",
      },
      {
        who: "B", name: "Официа́нтка", ru: "Извини́те, ко́фе сейча́с нет. Есть чай и сок.",
        en: "Sorry, there's no coffee right now. There's tea and juice.", ar: "عذرًا، لا توجد قهوة الآن. يوجد شاي وعصير.",
      },
      {
        who: "A", name: "Ахме́д", ru: "Хорошо́, я бу́ду чай. Без са́хара, пожа́луйста.",
        en: "OK, I'll have tea. Without sugar, please.", ar: "حسنًا، سآخذ الشاي. بدون سكّر من فضلك.",
      },
      {
        who: "B", name: "Официа́нтка", ru: "Вот ваш суп и ваш чай. Прия́тного аппети́та!",
        en: "Here's your soup and your tea. Enjoy your meal!", ar: "ها هو حساؤك وشايك. بالهناء والشفاء!",
      },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо! Извини́те, мо́жно ло́жку?", en: "Thank you! Excuse me, can I have a spoon?", ar: "شكرًا! عذرًا، هل يمكن أن أحصل على ملعقة؟" },
      { who: "B", name: "Официа́нтка", ru: "Извини́те! Вот, пожа́луйста.", en: "Sorry! Here you are.", ar: "آسفة! تفضّل." },
      {
        who: "A", name: "Ахме́д", ru: "Всё о́чень вку́сно! Счёт, пожа́луйста. Мо́жно ка́ртой?",
        en: "Everything is very tasty! The bill, please. Can I pay by card?", ar: "كل شيء لذيذ جدًّا! الحساب من فضلك. هل يمكن الدفع بالبطاقة؟",
      },
      { who: "B", name: "Официа́нтка", ru: "Да, мо́жно. Вот ваш счёт.", en: "Yes, you can. Here's your bill.", ar: "نعم، يمكن. ها هو حسابك." },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо! До свида́ния!", en: "Thank you! Goodbye!", ar: "شكرًا! مع السلامة!" },
    ],
  },
  pronunciation: {
    title: { en: "Hidden sounds: счёт, нож, ло́жка", ar: "أصوات مخفية: счёт، нож، ло́жка" },
    en: [
      "The letters сч together sound like щ, one long soft 'shch': счёт [shchot].",
      "A voiced consonant becomes voiceless at the end of a word and before a voiceless consonant: нож [nosh], ло́жка [lOshka], без са́хара [bis sAkhara].",
    ],
    ar: [
      "الحرفان сч معًا يُنطقان مثل щ، أي صوت «ش» طويل وليّن: счёт [shchot].",
      "الساكن المجهور يصبح مهموسًا في آخر الكلمة وقبل ساكن مهموس: нож [nosh]، ло́жка [lOshka]، без са́хара [bis sAkhara].",
    ],
    drills: [
      { ru: "счёт", say: "shchot", focus: { en: "One long soft sound at the start, like щ.", ar: "صوت واحد طويل وليّن في البداية مثل щ." } },
      { ru: "Счёт, пожа́луйста.", say: "shchot, pazhAlusta.", focus: { en: "пожа́луйста is said quickly: pa-ZHA-lus-ta.", ar: "تُنطق пожа́луйста بسرعة: pa-ZHA-lus-ta." } },
      { ru: "нож", say: "nosh", focus: { en: "A final ж sounds like ш.", ar: "حرف ж في آخر الكلمة يُنطق مثل ш." } },
      { ru: "ло́жка", say: "lOshka", focus: { en: "ж before к sounds like ш.", ar: "حرف ж قبل к يُنطق مثل ш." } },
      { ru: "Чай без са́хара.", say: "chay bis sAkhara.", focus: { en: "з before с sounds like с: [bis].", ar: "حرف з قبل с يُنطق مثل с: [bis]." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the right form of мочь.", ar: "اختر الصيغة الصحيحة من мочь." },
      ru: "Вы … говори́ть ме́дленно?",
      options: ["могу́", "мо́жете", "мо́гут", "мо́жет"],
      answer: 1,
      why: { en: "вы → мо́жете.", ar: "مع вы نقول мо́жете." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with мочь: I can", ar: "أكمل بالفعل мочь: أنا أستطيع" },
      ru: "Я ___ чита́ть по-ру́сски.",
      answers: ["могу́"],
      why: { en: "я → могу́: г, and the stress on the ending.", ar: "مع я نقول могу́: بحرف г والنبر على النهاية." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with мочь: they can", ar: "أكمل بالفعل мочь: هم يستطيعون" },
      ru: "Они́ ___ гуля́ть ве́чером.",
      answers: ["мо́гут"],
      why: { en: "они́ → мо́гут: г again, stress on the stem.", ar: "مع они́ نقول мо́гут: يعود حرف г، والنبر على الجذر." },
    },
    {
      kind: "fill",
      prompt: { en: "Order: I'll have the fish.", ar: "اطلب: سآخذ السمك." },
      ru: "Я бу́ду ___.",
      answers: ["ры́бу"],
      why: { en: "Я бу́ду + accusative: ры́ба → ры́бу.", ar: "Я бу́ду + حالة المفعول به: ры́ба تصبح ры́бу." },
    },
    {
      kind: "fill",
      prompt: { en: "Ask for a spoon.", ar: "اطلب ملعقة." },
      ru: "Мо́жно ___?",
      answers: ["ло́жку"],
      why: { en: "Мо́жно + accusative: ло́жка → ло́жку.", ar: "Мо́жно + حالة المفعول به: ло́жка تصبح ло́жку." },
    },
    {
      kind: "choice",
      prompt: { en: "You want to pay. What do you say?", ar: "تريد أن تدفع. ماذا تقول؟" },
      options: ["Меню́, пожа́луйста.", "Прия́тного аппети́та!", "Счёт, пожа́луйста."],
      answer: 2,
      why: { en: "счёт = the bill.", ar: "счёт تعني الحساب." },
    },
    {
      kind: "choice",
      prompt: { en: "What do you need for soup?", ar: "ماذا تحتاج لتأكل الحساء؟" },
      options: ["нож", "ло́жка", "ви́лка", "стака́н"],
      answer: 1,
      why: { en: "Soup is eaten with a spoon: ло́жка.", ar: "يُؤكل الحساء بالملعقة: ло́жка." },
    },
    {
      kind: "choice",
      prompt: { en: "The waiter asks: Что вы бу́дете? What does he want to know?", ar: "يسأل النادل: Что вы бу́дете? ماذا يريد أن يعرف؟" },
      options: ["where you are from · من أين أنت", "what you will order · ماذا ستطلب", "what your name is · ما اسمك"],
      answer: 1,
      why: { en: "Что вы бу́дете? = What will you have?", ar: "Что вы бу́дете? تعني «ماذا ستطلب؟»." },
    },
    {
      kind: "order",
      prompt: { en: "Build the request: Could I have the salt, please?", ar: "كوّن الطلب: أعطني الملح من فضلك." },
      tokens: ["пожа́луйста", "соль", "Да́йте"],
      answers: ["Да́йте, пожа́луйста, соль.", "Да́йте соль, пожа́луйста."],
      why: { en: "The verb first; пожа́луйста can go before or after the thing.", ar: "الفعل أولًا، ويمكن أن تأتي пожа́луйста قبل الشيء المطلوب أو بعده." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: Can you speak slowly?", ar: "كوّن السؤال: هل يمكنك أن تتكلّم ببطء؟" },
      tokens: ["мо́жете", "ме́дленно", "Вы", "говори́ть"],
      answers: ["Вы мо́жете говори́ть ме́дленно?", "Вы мо́жете ме́дленно говори́ть?"],
      why: { en: "мочь + infinitive: мо́жете говори́ть.", ar: "мочь + المصدر: мо́жете говори́ть." },
    },
    {
      kind: "translate",
      prompt: { en: "I'll have the soup and a salad.", ar: "سآخذ الحساء والسلطة." },
      answers: ["Я бу́ду суп и сала́т."],
      why: { en: "Я бу́ду… is the normal way to order.", ar: "Я бу́ду… هي الطريقة العادية للطلب." },
    },
    {
      kind: "translate",
      prompt: { en: "Can I have the menu?", ar: "هل يمكن أن أحصل على قائمة الطعام؟" },
      answers: ["Мо́жно меню́?", "Мо́жно меню́, пожа́луйста?", "Да́йте, пожа́луйста, меню́."],
      why: { en: "Мо́жно + the thing: Мо́жно меню́?", ar: "Мо́жно + الشيء المطلوب: Мо́жно меню́?" },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is not available?", ar: "استمع. ما الشيء غير المتوفّر؟" },
      ru: "Извини́те, ко́фе сейча́с нет. Есть чай.",
      listen: true,
      options: ["tea · الشاي", "juice · العصير", "coffee · القهوة"],
      answer: 2,
      why: { en: "ко́фе … нет = there is no coffee.", ar: "ко́фе … нет تعني «لا توجد قهوة»." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the customer ask for?", ar: "استمع. ماذا يطلب الزبون؟" },
      ru: "Да́йте, пожа́луйста, стака́н и ви́лку.",
      listen: true,
      options: ["a glass and a fork · كوبًا وشوكة", "a cup and a spoon · فنجانًا وملعقة", "a plate and a knife · صحنًا وسكّينًا"],
      answer: 0,
      why: { en: "стака́н = a glass, ви́лку = a fork.", ar: "стака́н تعني كوبًا، و ви́лку تعني شوكة." },
    },
  ],
  topics: ["cafe", "food"],
  search: ["Russian restaurant phrases ordering food", "Russian verb мочь conjugation"],
  speaking: {
    scenario: {
      en: "A café in Moscow; the tutor is the waiter. Order a full meal — a soup or salad, a main dish and a drink — ask for anything missing on the table, then ask for the bill. One thing you order is not available, so choose something else.",
      ar: "مقهى في موسكو، والمعلّم هو النادل. اطلب وجبة كاملة — حساء أو سلطة، وطبقًا رئيسيًّا، ومشروبًا — واطلب ما ينقص على المائدة، ثم اطلب الحساب. أحد الأشياء التي تطلبها غير متوفّر، فاختر شيئًا آخر.",
    },
    tutorBrief:
      "Play a polite waiter (официант) in a Moscow café; use вы. Greet the learner (Здравствуйте! Вот меню.), ask Что вы будете? and take a full order: soup or salad, a main dish, a drink. When the learner orders coffee, say Извините, кофе сейчас нет. Есть чай и сок. — so they must choose again. Bring the food with Вот, пожалуйста and Приятного аппетита!, and 'forget' a spoon or a fork so they have to ask (Можно ложку?). Accept Я буду…, Можно…?, Дайте, пожалуйста… with the accusative, and мочь (могу, можете). Speak slowly if asked Вы можете говорить медленно? When they ask for the bill, answer Вот ваш счёт and allow Можно картой? Correct wrong endings briefly after the order, not in the middle of it.",
    prompts: [
      { ru: "Я бу́ду сала́т и ры́бу.", en: "I'll have the salad and the fish.", ar: "سآخذ السلطة والسمك." },
      { ru: "У вас есть сок?", en: "Do you have juice?", ar: "هل عندكم عصير؟" },
      { ru: "Вы мо́жете говори́ть ме́дленно?", en: "Can you speak slowly?", ar: "هل يمكنك أن تتكلّم ببطء؟" },
      { ru: "Да́йте, пожа́луйста, ви́лку.", en: "Could I have a fork, please?", ar: "أعطني شوكة من فضلك." },
      { ru: "Счёт, пожа́луйста. Мо́жно ка́ртой?", en: "The bill, please. Can I pay by card?", ar: "الحساب من فضلك. هل يمكن الدفع بالبطاقة؟" },
    ],
  },
  journal: {
    en: "Write 3–5 sentences: a café you like (in Cairo or in Moscow), what you usually order there (Я бу́ду… / Я беру́…), and what you can and can't eat.",
    ar: "اكتب من ٣ إلى ٥ جمل: مقهى تحبّه (في القاهرة أو في موسكو)، وماذا تطلب هناك عادةً (Я бу́ду… / Я беру́…)، وماذا تستطيع أن تأكل وماذا لا تستطيع.",
  },
  culture: {
    en: "In a Russian café the waiter does not bring the bill until you ask for it: Счёт, пожа́луйста. A tip of about ten per cent is usual but not required, and you can pay by card almost everywhere.",
    ar: "في المقهى الروسي لا يُحضر النادل الحساب حتى تطلبه: Счёт, пожа́луйста. والبقشيش بنحو عشرة في المئة معتاد لكنه غير إلزامي، ويمكنك الدفع بالبطاقة في كل مكان تقريبًا.",
  },
};

const DAY_25: Day = {
  n: 25,
  week: 4,
  kind: "lesson",
  title: { ru: "Я тебя́ люблю́", en: "I love you: people in the accusative", ar: "أحبك: المفعول به للأشخاص" },
  goals: [
    {
      en: "Use the accusative pronouns меня́, тебя́, его́, её, нас, вас, их.",
      ar: "أن تستخدم ضمائر المفعول به: меня́، тебя́، его́، её، нас، вас، их.",
    },
    { en: "Put people into the accusative: Я жду бра́та. Я зна́ю А́нну.", ar: "أن تضع الأشخاص في حالة المفعول به: Я жду бра́та. Я зна́ю А́нну." },
    {
      en: "Invite someone and accept an invitation: Я тебя́ приглаша́ю! — С удово́льствием!",
      ar: "أن تدعو شخصًا وتقبل دعوة: Я тебя́ приглаша́ю! — С удово́льствием!",
    },
  ],
  words: [
    {
      id: "d25-01", ru: "ждать", say: "zhdat'", en: "to wait (for)", ar: "ينتظر", pos: "verb",
      forms: "жду, ждёшь … ждут",
      ex: { ru: "Я жду тебя́.", en: "I'm waiting for you.", ar: "أنا أنتظرك." },
      note: {
        en: "No preposition: ждать + accusative, although English says 'wait for'.",
        ar: "بدون حرف جر: ждать + حالة المفعول به، تمامًا مثل «أنتظرك» في العربية.",
      },
    },
    {
      id: "d25-02", ru: "спра́шивать", say: "sprAshivat'", en: "to ask (a question)", ar: "يسأل", pos: "verb",
      forms: "спра́шиваю, спра́шиваешь",
      ex: { ru: "Учи́тель спра́шивает студе́нта.", en: "The teacher asks the student.", ar: "المعلّم يسأل الطالب." },
    },
    {
      id: "d25-03", ru: "встреча́ть", say: "fstrichAt'", en: "to meet (someone who arrives), to welcome", ar: "يستقبل، يلاقي", pos: "verb",
      forms: "встреча́ю, встреча́ешь",
      ex: { ru: "Мы встреча́ем ба́бушку на вокза́ле.", en: "We are meeting Grandma at the station.", ar: "نحن نستقبل جدّتنا في المحطة." },
    },
    {
      id: "d25-04", ru: "приглаша́ть", say: "priglashAt'", en: "to invite", ar: "يدعو", pos: "verb",
      forms: "приглаша́ю, приглаша́ешь",
      ex: { ru: "Я вас приглаша́ю!", en: "I'm inviting you!", ar: "أنا أدعوكم!" },
    },
    {
      id: "d25-05", ru: "челове́к", say: "chilavyEk", en: "person, human being", ar: "إنسان، شخص", pos: "noun", g: "m",
      forms: "мн. ч. лю́ди",
      ex: { ru: "Там челове́к. Кто он?", en: "There's a person over there. Who is he?", ar: "هناك شخص. من هو؟" },
    },
    {
      id: "d25-06", ru: "лю́ди", say: "lyUdi", en: "people", ar: "ناس", pos: "noun", g: "pl",
      ex: { ru: "Тут всегда́ лю́ди.", en: "There are always people here.", ar: "هنا يوجد ناس دائمًا." },
      note: { en: "The plural of челове́к.", ar: "جمع челове́к." },
    },
    {
      id: "d25-07", ru: "мужчи́на", say: "mushchIna", en: "man", ar: "رجل", pos: "noun", g: "m",
      ex: { ru: "Там мужчи́на и же́нщина.", en: "There's a man and a woman over there.", ar: "هناك رجل وامرأة." },
      note: {
        en: "Masculine, although it ends in -а; in the accusative it changes like ма́ма: мужчи́ну.",
        ar: "مذكّر مع أنه ينتهي بـ -а، وفي حالة المفعول به يتغيّر مثل ма́ма: мужчи́ну.",
      },
    },
    {
      id: "d25-08", ru: "же́нщина", say: "zhEnshchina", en: "woman", ar: "امرأة", pos: "noun", g: "f",
      ex: { ru: "Же́нщина спра́шивает, где метро́.", en: "A woman is asking where the metro is.", ar: "امرأة تسأل أين المترو." },
    },
    {
      id: "d25-09", ru: "ребёнок", say: "ribyOnak", en: "child", ar: "طفل", pos: "noun", g: "m",
      forms: "мн. ч. де́ти",
      ex: { ru: "Ребёнок игра́ет в па́рке.", en: "A child is playing in the park.", ar: "طفل يلعب في الحديقة." },
    },
    {
      id: "d25-10", ru: "де́ти", say: "dyEti", en: "children", ar: "أطفال", pos: "noun", g: "pl",
      ex: { ru: "— Где де́ти? — Они́ до́ма.", en: "— Where are the children? — They're at home.", ar: "— أين الأطفال؟ — هم في البيت." },
    },
    {
      id: "d25-11", ru: "де́вушка", say: "dyEvushka", en: "young woman; girlfriend", ar: "فتاة، شابّة؛ حبيبة", pos: "noun", g: "f",
      ex: { ru: "Э́то моя́ де́вушка.", en: "This is my girlfriend.", ar: "هذه حبيبتي." },
      note: {
        en: "Also the polite way to call a young waitress or shop assistant: Де́вушка, мо́жно меню́?",
        ar: "وتُستخدم أيضًا لمناداة نادلة أو بائعة شابّة بأدب: Де́вушка, мо́жно меню́?",
      },
    },
    {
      id: "d25-12", ru: "па́рень", say: "pArin'", en: "guy, young man; boyfriend", ar: "شابّ؛ حبيب", pos: "noun", g: "m",
      forms: "мн. ч. па́рни",
      ex: { ru: "Её па́рень — инжене́р.", en: "Her boyfriend is an engineer.", ar: "حبيبها مهندس." },
    },
    {
      id: "d25-13", ru: "колле́га", say: "kalyEga", en: "colleague", ar: "زميل، زميلة", pos: "noun", g: "m",
      ex: { ru: "Я жду колле́гу.", en: "I'm waiting for a colleague.", ar: "أنتظر زميلًا." },
      note: {
        en: "Masculine or feminine, depending on the person: мой колле́га, моя́ колле́га. Accusative: колле́гу.",
        ar: "مذكّر أو مؤنّث حسب الشخص: мой колле́га، моя́ колле́га. وفي حالة المفعول به: колле́гу.",
      },
    },
    {
      id: "d25-14", ru: "гость", say: "gost'", en: "guest", ar: "ضيف", pos: "noun", g: "m",
      forms: "мн. ч. го́сти",
      ex: { ru: "Мы ждём го́стя.", en: "We're expecting a guest.", ar: "نحن ننتظر ضيفًا." },
    },
    {
      id: "d25-15", ru: "кого́", say: "kavO", en: "whom? (кто in the accusative)", ar: "مَن؟ (кто في حالة المفعول به)", pos: "pron",
      ex: { ru: "Кого́ ты ждёшь?", en: "Who are you waiting for?", ar: "من تنتظر؟" },
      note: { en: "The г is pronounced like в: [kavO].", ar: "حرف г يُنطق هنا مثل в: [kavO]." },
    },
    {
      id: "d25-16", ru: "нас", say: "nas", en: "us (мы in the accusative)", ar: "ـنا (ضمير мы في حالة المفعول به)", pos: "pron",
      ex: { ru: "А́нна нас приглаша́ет.", en: "Anna is inviting us.", ar: "آنا تدعونا." },
    },
    {
      id: "d25-17", ru: "Я тебя́ люблю́.", say: "ya tibyA lyublyU.", en: "I love you.", ar: "أحبّك.", pos: "phrase",
      note: { en: "The pronoun usually comes before the verb.", ar: "يأتي الضمير عادةً قبل الفعل." },
    },
    {
      id: "d25-18", ru: "вечери́нка", say: "vichirInka", en: "party", ar: "حفلة", pos: "noun", g: "f",
      ex: { ru: "В суббо́ту у нас вечери́нка.", en: "We're having a party on Saturday.", ar: "عندنا حفلة يوم السبت." },
    },
    { id: "d25-19", ru: "С удово́льствием!", say: "s udavOl'stviyem!", en: "With pleasure! I'd love to!", ar: "بكلّ سرور!", pos: "phrase" },
    {
      id: "d25-20", ru: "Приходи́!", say: "prikhadI!", en: "Come (over)! (to one friend)", ar: "تعال!", pos: "phrase",
      ex: { ru: "Приходи́ в суббо́ту!", en: "Come on Saturday!", ar: "تعال يوم السبت!" },
      note: { en: "To several people, or politely: Приходи́те!", ar: "لعدّة أشخاص أو بأدب: Приходи́те!" },
    },
  ],
  grammar: [
    {
      id: "d25-g1",
      title: { en: "Accusative pronouns: меня́, тебя́, его́…", ar: "ضمائر المفعول به: меня́، тебя́، его́…" },
      en: [
        "You already know some of them: Меня́ зову́т… literally means 'they call me…'. The full set is меня́, тебя́, его́, её, нас, вас, их.",
        "его́, её and их look exactly like the possessives 'his, her, their'. In его́ the г is pronounced like в: [yivO].",
        "The pronoun usually comes before the verb: Я тебя́ люблю́. Я его́ зна́ю. Ты меня́ ждёшь?",
      ],
      ar: [
        "أنت تعرف بعضها: Меня́ зову́т… تعني حرفيًا «يدعونني…». والمجموعة كاملة: меня́، тебя́، его́، её، нас، вас، их.",
        "الضمائر его́ و её و их تشبه تمامًا ضمائر الملكية «ـه، ـها، ـهم». وفي его́ يُنطق حرف г مثل в: [yivO].",
        "يأتي الضمير عادةً قبل الفعل: Я тебя́ люблю́. Я его́ зна́ю. Ты меня́ ждёшь?",
      ],
      tables: [
        {
          caption: { en: "Who? — Whom?", ar: "الضمائر في حالة الرفع وفي حالة المفعول به" },
          head: ["Nominative · حالة الرفع", "Accusative · حالة المفعول به", "Example · مثال"],
          rows: [
            ["я", "меня́", "Ты меня́ зна́ешь?"],
            ["ты", "тебя́", "Я тебя́ жду."],
            ["он", "его́", "Я его́ ви́жу."],
            ["она́", "её", "Мы её лю́бим."],
            ["мы", "нас", "А́нна нас приглаша́ет."],
            ["вы", "вас", "Я вас не понима́ю."],
            ["они́", "их", "Я их встреча́ю."],
          ],
        },
      ],
      examples: [
        { ru: "— Ты зна́ешь Макси́ма? — Да, я его́ зна́ю.", en: "— Do you know Maxim? — Yes, I know him.", ar: "— هل تعرف مكسيم؟ — نعم، أعرفه." },
        { ru: "Я тебя́ люблю́.", en: "I love you.", ar: "أحبّك." },
      ],
    },
    {
      id: "d25-g2",
      title: { en: "People in the accusative", ar: "الأشخاص في حالة المفعول به" },
      en: [
        "Masculine nouns for people and animals add -а, or -я after -й or -ь: брат → бра́та, Макси́м → Макси́ма, гость → го́стя, учи́тель → учи́теля. Some lose a vowel: оте́ц → отца́.",
        "Feminine people change just like things: ма́ма → ма́му, А́нна → А́нну. Masculine nouns in -а follow the same pattern: па́па → па́пу, мужчи́на → мужчи́ну.",
        "Trap: only masculine people and animals take -а; masculine things stay the same: Я зна́ю го́род, but Я зна́ю Макси́ма. Plurals of people change too — later in the course.",
      ],
      ar: [
        "الأسماء المذكّرة للأشخاص والحيوانات تأخذ -а، أو -я بعد -й أو -ь: брат تصبح бра́та، و Макси́м تصبح Макси́ма، و гость تصبح го́стя، و учи́тель تصبح учи́теля. وبعضها يسقط منه حرف علّة: оте́ц تصبح отца́.",
        "المؤنّث من الأشخاص يتغيّر مثل الأشياء تمامًا: ма́ма تصبح ма́му، و А́нна تصبح А́нну. والأسماء المذكّرة المنتهية بـ -а تتبع النمط نفسه: па́па تصبح па́пу، و мужчи́на تصبح мужчи́ну.",
        "انتبه: المذكّر من الأشخاص والحيوانات وحده يأخذ -а، أمّا الأشياء المذكّرة فتبقى كما هي: Я зна́ю го́род، لكن Я зна́ю Макси́ма. وجمع الأشخاص يتغيّر أيضًا، وسنتعلّمه لاحقًا.",
      ],
      tables: [
        {
          caption: { en: "People in the accusative", ar: "الأشخاص في حالة المفعول به" },
          head: ["Nominative · حالة الرفع", "Accusative · حالة المفعول به", "Example · مثال"],
          rows: [
            ["брат", "бра́та", "Я жду бра́та."],
            ["оте́ц", "отца́", "Я люблю́ отца́."],
            ["гость", "го́стя", "Мы встреча́ем го́стя."],
            ["па́рень", "па́рня", "Ты зна́ешь её па́рня?"],
            ["ма́ма", "ма́му", "Я встреча́ю ма́му."],
            ["па́па", "па́пу", "Мы ждём па́пу."],
            ["де́вушка", "де́вушку", "Он приглаша́ет де́вушку."],
          ],
        },
      ],
      examples: [
        { ru: "Я жду бра́та и сестру́.", en: "I'm waiting for my brother and sister.", ar: "أنتظر أخي وأختي." },
        { ru: "Ты зна́ешь А́нну и Макси́ма?", en: "Do you know Anna and Maxim?", ar: "هل تعرف آنا ومكسيم؟" },
      ],
    },
    {
      id: "d25-g3",
      title: { en: "Verbs that take the accusative", ar: "أفعال تأخذ المفعول به" },
      en: [
        "These verbs take a direct object in the accusative, with no preposition: люби́ть, знать, ви́деть, ждать, спра́шивать, встреча́ть, приглаша́ть.",
        "ждать changes its stem: жду, ждёшь, ждёт, ждём, ждёте, ждут. ви́деть changes д to ж in the я form: ви́жу.",
        "Russian says Я жду тебя́ with no 'for' — just like Arabic أنتظرك — and Я спра́шиваю учи́теля, 'I ask the teacher'.",
      ],
      ar: [
        "هذه الأفعال تأخذ مفعولًا به مباشرًا في حالة المفعول به بدون حرف جر: люби́ть، знать، ви́деть، ждать، спра́шивать، встреча́ть، приглаша́ть.",
        "يتغيّر جذر ждать: жду، ждёшь، ждёт، ждём، ждёте، ждут. وفي ви́деть يتحوّل д إلى ж في صيغة я: ви́жу.",
        "يقول الروس Я жду тебя́ بدون حرف جر، تمامًا كالعربية «أنتظرك»، و Я спра́шиваю учи́теля أي «أسأل المعلّم».",
      ],
      tables: [
        {
          caption: { en: "ждать — to wait", ar: "ждать — ينتظر" },
          head: ["Pronoun · الضمير", "ждать"],
          rows: [
            ["я", "жду"],
            ["ты", "ждёшь"],
            ["он / она́", "ждёт"],
            ["мы", "ждём"],
            ["вы", "ждёте"],
            ["они́", "ждут"],
          ],
        },
      ],
      examples: [
        { ru: "— Кого́ ты ждёшь? — Я жду колле́гу.", en: "— Who are you waiting for? — I'm waiting for a colleague.", ar: "— من تنتظر؟ — أنتظر زميلًا." },
        { ru: "Я спра́шиваю учи́теля, а он спра́шивает меня́.", en: "I ask the teacher, and he asks me.", ar: "أنا أسأل المعلّم، وهو يسألني." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Я тебя́ приглаша́ю!", en: "I'm inviting you!", ar: "أنا أدعوك!" },
    setting: {
      en: "Ahmed meets Anna at a café after class. She is already there, and she has news about Saturday.",
      ar: "يلتقي أحمد آنا في مقهى بعد الدرس. لقد سبقته إلى هناك، ولديها خبر عن يوم السبت.",
    },
    lines: [
      { who: "A", name: "Ахме́д", ru: "Приве́т, А́нна! Ты меня́ ждёшь?", en: "Hi, Anna! Are you waiting for me?", ar: "مرحبًا يا آنا! هل تنتظرينني؟" },
      {
        who: "B", name: "А́нна", ru: "Да, жду! Ахме́д, в суббо́ту у нас вечери́нка. Я тебя́ приглаша́ю!",
        en: "Yes, I am! Ahmed, we're having a party on Saturday. I'm inviting you!", ar: "نعم، أنتظرك! يا أحمد، عندنا حفلة يوم السبت، وأنا أدعوك!",
      },
      {
        who: "A", name: "Ахме́д", ru: "Спаси́бо, с удово́льствием! А кого́ ты приглаша́ешь?",
        en: "Thanks, I'd love to! And who are you inviting?", ar: "شكرًا، بكلّ سرور! ومن تدعين؟",
      },
      { who: "B", name: "А́нна", ru: "Бра́та, Макси́ма. Ты его́ зна́ешь?", en: "My brother, Maxim. Do you know him?", ar: "أخي مكسيم. هل تعرفه؟" },
      { who: "A", name: "Ахме́д", ru: "Нет, я его́ не зна́ю.", en: "No, I don't know him.", ar: "لا، لا أعرفه." },
      {
        who: "B", name: "А́нна", ru: "Он рабо́тает в о́фисе и то́же лю́бит му́зыку. И я приглаша́ю подру́гу Ири́ну и её му́жа.",
        en: "He works in an office and loves music too. And I'm inviting my friend Irina and her husband.",
        ar: "هو يعمل في مكتب ويحبّ الموسيقى أيضًا. وأدعو كذلك صديقتي إيرينا وزوجها.",
      },
      { who: "A", name: "Ахме́д", ru: "А они́ меня́ зна́ют?", en: "And do they know me?", ar: "وهل يعرفونني؟" },
      { who: "B", name: "А́нна", ru: "Да! Я ча́сто расска́зываю о тебе́.", en: "Yes! I often talk about you.", ar: "نعم! أنا أتحدّث عنك كثيرًا." },
      { who: "A", name: "Ахме́д", ru: "Интере́сно! А где ты живёшь?", en: "Interesting! And where do you live?", ar: "مثير للاهتمام! وأين تسكنين؟" },
      {
        who: "B", name: "А́нна", ru: "Недалеко́. Приходи́ в суббо́ту ве́чером, я жду тебя́ у метро́.",
        en: "Not far. Come on Saturday evening — I'll be waiting for you at the metro.", ar: "ليس بعيدًا. تعال يوم السبت مساءً، سأنتظرك عند المترو.",
      },
      { who: "A", name: "Ахме́д", ru: "Отли́чно! Спаси́бо, А́нна!", en: "Great! Thank you, Anna!", ar: "ممتاز! شكرًا يا آنا!" },
    ],
  },
  pronunciation: {
    title: { en: "г that sounds like в: его́, кого́", ar: "حرف г الذي يُنطق в: его́، кого́" },
    en: [
      "In the endings -ого and -его the letter г is pronounced в: его́ [yivO], кого́ [kavO]. You will meet this ending again in adjectives.",
      "In меня́ and тебя́ the unstressed е sounds like 'i': [minyA], [tibyA]. Keep the stress on the last syllable.",
    ],
    ar: [
      "في النهايتين -ого و -его يُنطق حرف г مثل в: его́ [yivO]، кого́ [kavO]. وستقابل هذه النهاية مرة أخرى في الصفات.",
      "في меня́ و тебя́ يُنطق حرف е غير المنبور مثل «i»: [minyA]، [tibyA]. واجعل النبر على المقطع الأخير.",
    ],
    drills: [
      { ru: "его́", say: "yivO", focus: { en: "г sounds like в; stress on the last syllable.", ar: "حرف г يُنطق в، والنبر على المقطع الأخير." } },
      { ru: "Я его́ зна́ю.", say: "ya yivO znAyu.", focus: { en: "The pronoun comes before the verb.", ar: "الضمير قبل الفعل." } },
      { ru: "Кого́ ты ждёшь?", say: "kavO ty zhdyosh?", focus: { en: "A question word: the voice does not rise.", ar: "أداة استفهام: لا يرتفع الصوت." } },
      { ru: "Я тебя́ люблю́.", say: "ya tibyA lyublyU.", focus: { en: "Two stresses: тебя́, люблю́.", ar: "نبران: тебя́، люблю́." } },
      { ru: "Мы ждём го́стя.", say: "my zhdyom gOstya.", focus: { en: "го́стя: a soft т before -я.", ar: "في го́стя يكون حرف т ليّنًا قبل -я." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the pronoun: Do you know HIM?", ar: "اختر الضمير: هل تعرفه؟" },
      ru: "Ты … зна́ешь?",
      options: ["он", "её", "его́"],
      answer: 2,
      why: { en: "он → его́ in the accusative.", ar: "он يصبح его́ في حالة المفعول به." },
    },
    {
      kind: "fill",
      prompt: { en: "Put А́нна into the accusative.", ar: "ضع А́нна في حالة المفعول به." },
      ru: "Я зна́ю ___.",
      answers: ["А́нну"],
      why: { en: "Feminine people change like things: А́нну.", ar: "المؤنّث من الأشخاص يتغيّر مثل الأشياء: А́нну." },
    },
    {
      kind: "fill",
      prompt: { en: "Put брат into the accusative.", ar: "ضع брат في حالة المفعول به." },
      ru: "Я жду ___.",
      answers: ["бра́та"],
      why: { en: "A masculine person adds -а: бра́та.", ar: "المذكّر من الأشخاص يأخذ -а: бра́та." },
    },
    {
      kind: "fill",
      prompt: { en: "Put па́па into the accusative.", ar: "ضع па́па في حالة المفعول به." },
      ru: "Мы встреча́ем ___.",
      answers: ["па́пу"],
      why: { en: "A masculine noun in -а changes like ма́ма: па́пу.", ar: "المذكّر المنتهي بـ -а يتغيّر مثل ма́ма: па́пу." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with ждать: we are waiting", ar: "أكمل بالفعل ждать: نحن ننتظر" },
      ru: "Мы ___ го́стя.",
      answers: ["ждём"],
      why: { en: "мы → ждём.", ar: "مع мы نقول ждём." },
    },
    {
      kind: "fill",
      prompt: { en: "Put мы into the accusative: Anna is inviting us.", ar: "ضع мы في حالة المفعول به: آنا تدعونا." },
      ru: "А́нна ___ приглаша́ет.",
      answers: ["нас"],
      why: { en: "мы → нас.", ar: "мы يصبح нас." },
    },
    {
      kind: "choice",
      prompt: { en: "Which sentence is correct?", ar: "أيّ جملة صحيحة؟" },
      options: ["Я жду Макси́м.", "Я жду Макси́му.", "Я жду Макси́ма."],
      answer: 2,
      why: { en: "Макси́м is a masculine person: Макси́ма.", ar: "Макси́м مذكّر عاقل: Макси́ма." },
    },
    {
      kind: "choice",
      prompt: { en: "A friend invites you to a party. How do you accept?", ar: "صديق يدعوك إلى حفلة. كيف تقبل الدعوة؟" },
      options: ["С удово́льствием!", "Прия́тного аппети́та!", "Счёт, пожа́луйста."],
      answer: 0,
      why: { en: "С удово́льствием! = With pleasure!", ar: "С удово́льствием! تعني «بكلّ سرور!»." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I love you.", ar: "كوّن الجملة: أحبّك." },
      tokens: ["люблю́", "тебя́", "Я"],
      answers: ["Я тебя́ люблю́.", "Я люблю́ тебя́."],
      why: { en: "The most common order puts the pronoun before the verb.", ar: "الترتيب الأكثر شيوعًا يضع الضمير قبل الفعل." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: Who are you waiting for?", ar: "كوّن السؤال: من تنتظر؟" },
      tokens: ["ждёшь", "ты", "Кого́"],
      answers: ["Кого́ ты ждёшь?"],
      why: { en: "кого́ (whom?) opens the question.", ar: "تبدأ السؤالَ أداةُ الاستفهام кого́ (مَن؟)." },
    },
    {
      kind: "translate",
      prompt: { en: "I'm waiting for my brother.", ar: "أنتظر أخي." },
      answers: ["Я жду бра́та.", "Я жду моего́ бра́та."],
      why: { en: "No preposition after ждать; брат → бра́та.", ar: "لا حرف جر بعد ждать، و брат تصبح бра́та." },
    },
    {
      kind: "translate",
      prompt: { en: "Do you know her? (informal)", ar: "هل تعرفها؟ (غير رسمي)" },
      answers: ["Ты её зна́ешь?", "Ты зна́ешь её?"],
      why: { en: "она́ → её.", ar: "она́ تصبح её." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Who is Anna waiting for?", ar: "استمع. من تنتظر آنا؟" },
      ru: "Я жду бра́та и его́ колле́гу.",
      listen: true,
      options: ["her mother and father · أمّها وأباها", "her brother and his colleague · أخاها وزميله", "a guest from Egypt · ضيفًا من مصر"],
      answer: 1,
      why: { en: "бра́та = her brother, его́ колле́гу = his colleague.", ar: "бра́та تعني أخاها، و его́ колле́гу تعني زميله." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is the person doing?", ar: "استمع. ماذا يفعل الشخص؟" },
      ru: "Я приглаша́ю вас в суббо́ту.",
      listen: true,
      options: ["inviting you for Saturday · يدعوكم يوم السبت", "waiting for you on Saturday · ينتظركم يوم السبت", "asking about Saturday · يسأل عن يوم السبت"],
      answer: 0,
      why: { en: "приглаша́ю = I invite.", ar: "приглаша́ю تعني «أدعو»." },
    },
  ],
  topics: ["accusative", "family", "invitations"],
  search: ["Russian accusative pronouns меня тебя его", "Russian animate accusative masculine nouns"],
  speaking: {
    scenario: {
      en: "Talk with the tutor about the people in your life: who you know in Moscow, who you love and who you are waiting for. Then invite the tutor to your party on Saturday.",
      ar: "تحدّث مع المعلّم عن الناس في حياتك: من تعرف في موسكو، ومن تحبّ، ومن تنتظر. ثم ادعُ المعلّم إلى حفلتك يوم السبت.",
    },
    tutorBrief:
      "Play Maxim (Максим), Anna's brother, meeting the learner for the first time in a café; use ты. Ask about people: Кого ты знаешь в Москве? Ты знаешь Ольгу Петровну? Кого ты ждёшь? Кого ты любишь? — and answer the learner's questions about your own family. Practise the accusative of people and pronouns: меня, тебя, его, её, нас, вас, их, брата, сестру, маму, папу, and the verbs любить, знать, видеть, ждать, спрашивать, встречать, приглашать. When the learner invites you to a party, accept with С удовольствием! and ask when and where. If a masculine person has no -а (Я жду Максим), recast it (Ты ждёшь Максима? Хорошо!). End by agreeing to meet on Saturday.",
    prompts: [
      { ru: "Я зна́ю А́нну и её бра́та.", en: "I know Anna and her brother.", ar: "أعرف آنا وأخاها." },
      { ru: "Я люблю́ ма́му и па́пу.", en: "I love my mum and dad.", ar: "أحبّ أمّي وأبي." },
      { ru: "Я жду колле́гу.", en: "I'm waiting for a colleague.", ar: "أنتظر زميلًا." },
      { ru: "В суббо́ту у меня́ вечери́нка. Я тебя́ приглаша́ю!", en: "I'm having a party on Saturday. I'm inviting you!", ar: "عندي حفلة يوم السبت. أنا أدعوك!" },
      { ru: "Приходи́ в суббо́ту ве́чером!", en: "Come on Saturday evening!", ar: "تعال يوم السبت مساءً!" },
    ],
  },
  journal: {
    en: "Write 3–5 sentences about people: who you know well, who you love, who you often see or wait for (Я ча́сто ви́жу…, Я жду…). Use at least two pronouns (его́, её, их).",
    ar: "اكتب من ٣ إلى ٥ جمل عن أشخاص: من تعرفه جيدًا، ومن تحبّه، ومن تراه أو تنتظره كثيرًا (Я ча́сто ви́жу…، Я жду…). استخدم ضميرين على الأقل (его́، её، их).",
  },
  culture: {
    en: "If Russians invite you home, bring a small gift and expect to take your shoes off — hosts often offer slippers (та́почки). Many people avoid shaking hands or passing things across the threshold, so step inside first.",
    ar: "إذا دعاك الروس إلى بيتهم فأحضر هديّة صغيرة، وتوقّع أن تخلع حذاءك، فكثيرًا ما يقدّم المضيفون خُفًّا منزليًّا (та́почки). ويتجنّب كثيرون المصافحة أو مناولة الأشياء عبر عتبة الباب، فادخل أولًا.",
  },
};

const DAY_26: Day = {
  n: 26,
  week: 4,
  kind: "lesson",
  title: { ru: "Како́й? Прилага́тельные и цвета́", en: "Which one? Adjectives and colours", ar: "أيّ؟ الصفات والألوان" },
  goals: [
    {
      en: "Make adjectives agree with nouns: но́вый дом, но́вая кни́га, но́вое окно́, но́вые кни́ги.",
      ar: "أن تجعل الصفة تطابق الاسم: но́вый дом، но́вая кни́га، но́вое окно́، но́вые кни́ги.",
    },
    {
      en: "Ask Како́й? Кака́я? Како́е? Каки́е? and describe colour, size and price.",
      ar: "أن تسأل Како́й? Кака́я? Како́е? Каки́е? وتصف اللون والمقاس والسعر.",
    },
    { en: "Choose clothes in a shop: Я беру́ си́нюю ку́ртку.", ar: "أن تختار الملابس في المتجر: Я беру́ си́нюю ку́ртку." },
  ],
  words: [
    {
      id: "d26-01", ru: "но́вый", say: "nOvyy", en: "new", ar: "جديد", pos: "adj",
      forms: "но́вая, но́вое, но́вые",
      ex: { ru: "У меня́ но́вый телефо́н.", en: "I have a new phone.", ar: "عندي هاتف جديد." },
    },
    {
      id: "d26-02", ru: "ста́рый", say: "stAryy", en: "old", ar: "قديم؛ عجوز", pos: "adj",
      forms: "ста́рая, ста́рое, ста́рые",
      ex: { ru: "Э́то ста́рый го́род.", en: "This is an old town.", ar: "هذه مدينة قديمة." },
    },
    {
      id: "d26-03", ru: "большо́й", say: "bal'shOy", en: "big, large", ar: "كبير", pos: "adj",
      forms: "больша́я, большо́е, больши́е",
      ex: { ru: "Москва́ — большо́й го́род.", en: "Moscow is a big city.", ar: "موسكو مدينة كبيرة." },
    },
    {
      id: "d26-04", ru: "ма́ленький", say: "mAlin'kiy", en: "small, little", ar: "صغير", pos: "adj",
      forms: "ма́ленькая, ма́ленькое, ма́ленькие",
      ex: { ru: "У меня́ ма́ленькая кварти́ра.", en: "I have a small flat.", ar: "عندي شقّة صغيرة." },
    },
    {
      id: "d26-05", ru: "хоро́ший", say: "kharOshiy", en: "good", ar: "جيّد", pos: "adj",
      forms: "хоро́шая, хоро́шее, хоро́шие",
      ex: { ru: "Она́ хоро́ший врач.", en: "She's a good doctor.", ar: "هي طبيبة جيّدة." },
    },
    {
      id: "d26-06", ru: "плохо́й", say: "plakhOy", en: "bad", ar: "سيّئ", pos: "adj",
      forms: "плоха́я, плохо́е, плохи́е",
      ex: { ru: "Э́то плохо́й слова́рь.", en: "This is a bad dictionary.", ar: "هذا قاموس سيّئ." },
    },
    {
      id: "d26-07", ru: "краси́вый", say: "krasIvyy", en: "beautiful, pretty; handsome", ar: "جميل", pos: "adj",
      forms: "краси́вая, краси́вое, краси́вые",
      ex: { ru: "Кака́я краси́вая пло́щадь!", en: "What a beautiful square!", ar: "ما أجمل هذه الساحة!" },
    },
    {
      id: "d26-08", ru: "дорого́й", say: "daragOy", en: "expensive; dear", ar: "غالٍ؛ عزيز", pos: "adj",
      forms: "дорога́я, дорого́е, дороги́е",
      ex: { ru: "Э́то о́чень дорого́й рестора́н.", en: "This is a very expensive restaurant.", ar: "هذا مطعم غالٍ جدًّا." },
      note: { en: "Also 'dear' at the start of a letter: Дорого́й Макси́м!", ar: "وتعني أيضًا «عزيزي» في أول الرسالة: Дорого́й Макси́м!" },
    },
    {
      id: "d26-09", ru: "дешёвый", say: "dishOvyy", en: "cheap", ar: "رخيص", pos: "adj",
      forms: "дешёвая, дешёвое, дешёвые",
      ex: { ru: "Тут дешёвые фру́кты.", en: "The fruit is cheap here.", ar: "الفواكه رخيصة هنا." },
    },
    {
      id: "d26-10", ru: "кра́сный", say: "krAsnyy", en: "red", ar: "أحمر", pos: "adj",
      forms: "кра́сная, кра́сное, кра́сные",
      ex: { ru: "Я хочу́ кра́сное пла́тье.", en: "I want a red dress.", ar: "أريد فستانًا أحمر." },
    },
    {
      id: "d26-11", ru: "си́ний", say: "sIniy", en: "dark blue", ar: "أزرق داكن", pos: "adj",
      forms: "си́няя, си́нее, си́ние",
      ex: { ru: "Вот си́няя руба́шка.", en: "Here's a dark blue shirt.", ar: "ها هو قميص أزرق داكن." },
      note: { en: "A soft adjective: -ий, -яя, -ее, -ие.", ar: "صفة ليّنة: -ий، -яя، -ее، -ие." },
    },
    {
      id: "d26-12", ru: "бе́лый", say: "byElyy", en: "white", ar: "أبيض", pos: "adj",
      forms: "бе́лая, бе́лое, бе́лые",
      ex: { ru: "У меня́ бе́лая маши́на.", en: "I have a white car.", ar: "عندي سيارة بيضاء." },
    },
    {
      id: "d26-13", ru: "чёрный", say: "chOrnyy", en: "black", ar: "أسود", pos: "adj",
      forms: "чёрная, чёрное, чёрные",
      ex: { ru: "Я пью чёрный ко́фе.", en: "I drink black coffee.", ar: "أشرب القهوة السوداء." },
    },
    {
      id: "d26-14", ru: "зелёный", say: "zilyOnyy", en: "green", ar: "أخضر", pos: "adj",
      forms: "зелёная, зелёное, зелёные",
      ex: { ru: "Я люблю́ зелёный чай.", en: "I love green tea.", ar: "أحبّ الشاي الأخضر." },
    },
    {
      id: "d26-15", ru: "како́й", say: "kakOy", en: "which? what kind of?; what a…!", ar: "أيّ؟ ما نوع…؟؛ يا له من…! (للتعجّب)", pos: "pron",
      forms: "кака́я, како́е, каки́е",
      ex: { ru: "Кака́я ку́ртка твоя́?", en: "Which jacket is yours?", ar: "أيّ سترة لك؟" },
    },
    {
      id: "d26-16", ru: "жёлтый", say: "zhOltyy", en: "yellow", ar: "أصفر", pos: "adj",
      forms: "жёлтая, жёлтое, жёлтые",
      ex: { ru: "Вот жёлтое я́блоко.", en: "Here's a yellow apple.", ar: "ها هي تفاحة صفراء." },
    },
    {
      id: "d26-17", ru: "э́тот", say: "Etat", en: "this (one)", ar: "هذا", pos: "pron",
      forms: "э́та, э́то, э́ти",
      ex: { ru: "Я беру́ э́ту ку́ртку.", en: "I'll take this jacket.", ar: "سآخذ هذه السترة." },
      note: {
        en: "It agrees like an adjective; the feminine accusative is э́ту. Do not confuse it with Э́то… 'This is…'.",
        ar: "يطابق الاسم مثل الصفة، والمؤنّث في حالة المفعول به هو э́ту. لا تخلط بينه وبين Э́то… بمعنى «هذا هو…».",
      },
    },
    {
      id: "d26-18", ru: "цвет", say: "tsvyet", en: "colour", ar: "لون", pos: "noun", g: "m",
      forms: "мн. ч. цвета́",
      ex: { ru: "Како́й цвет ты хо́чешь?", en: "What colour do you want?", ar: "أيّ لون تريد؟" },
    },
    {
      id: "d26-19", ru: "разме́р", say: "razmyEr", en: "size", ar: "مقاس", pos: "noun", g: "m",
      ex: { ru: "Како́й у вас разме́р?", en: "What size are you?", ar: "ما مقاسك؟" },
    },
    {
      id: "d26-20", ru: "Мо́жно приме́рить?", say: "mOzhna primyErit'?", en: "Can I try it on?", ar: "هل يمكن أن أجرّبه؟", pos: "phrase",
      note: { en: "In everyday speech you will also hear Мо́жно поме́рить?", ar: "وفي الكلام اليومي ستسمع أيضًا Мо́жно поме́рить?" },
    },
  ],
  grammar: [
    {
      id: "d26-g1",
      title: { en: "Adjectives agree with the noun", ar: "الصفة تطابق الموصوف" },
      en: [
        "A Russian adjective takes the gender and number of its noun, just as in Arabic (بيت جديد، سيارة جديدة): но́вый дом, но́вая кни́га, но́вое окно́, но́вые кни́ги.",
        "The ending tells you everything: -ый (masculine), -ая (feminine), -ое (neuter), -ые (plural). A dictionary gives the masculine form.",
        "Soft adjectives like си́ний use -ий, -яя, -ее, -ие.",
      ],
      ar: [
        "الصفة الروسية تأخذ جنس الاسم وعدده، تمامًا كما في العربية (بيت جديد، سيارة جديدة): но́вый дом، но́вая кни́га، но́вое окно́، но́вые кни́ги.",
        "النهاية تخبرك بكل شيء: -ый للمذكّر، و -ая للمؤنّث، و -ое للمحايد، و -ые للجمع. والقاموس يذكر الصفة بصيغة المذكّر.",
        "والصفات الليّنة مثل си́ний تأخذ -ий، -яя، -ее، -ие.",
      ],
      tables: [
        {
          caption: { en: "Adjective endings", ar: "نهايات الصفات" },
          head: ["Type · النوع", "m · مذكّر", "f · مؤنّث", "n · محايد", "pl · جمع"],
          rows: [
            ["-ый", "но́вый", "но́вая", "но́вое", "но́вые"],
            ["-ой (stressed · منبورة)", "большо́й", "больша́я", "большо́е", "больши́е"],
            ["-ий (soft · ليّنة)", "си́ний", "си́няя", "си́нее", "си́ние"],
            ["-ий (after ш · بعد ш)", "хоро́ший", "хоро́шая", "хоро́шее", "хоро́шие"],
          ],
        },
      ],
      examples: [
        { ru: "Э́то но́вая кни́га, а э́то ста́рый журна́л.", en: "This is a new book, and this is an old magazine.", ar: "هذا كتاب جديد، وهذه مجلّة قديمة." },
        { ru: "Каки́е краси́вые ту́фли!", en: "What beautiful shoes!", ar: "ما أجمل هذا الحذاء!" },
      ],
    },
    {
      id: "d26-g2",
      title: { en: "Stressed -ой and the spelling rule", ar: "النهاية المنبورة -ой وقاعدة الإملاء" },
      en: [
        "When the stress falls on the ending, the masculine ends in -ой instead of -ый: большо́й, плохо́й, дорого́й, како́й. The other forms are regular: больша́я, большо́е.",
        "The spelling rule from week 2 still works: after г к х ж ш ч щ write и, never ы: ру́сский, ма́ленький, хоро́ший, больши́е, каки́е.",
        "After ж ш ч щ an unstressed о is written е: хоро́шее, not хоро́шое.",
      ],
      ar: [
        "عندما يقع النبر على النهاية، ينتهي المذكّر بـ -ой بدلًا من -ый: большо́й، плохо́й، дорого́й، како́й. أمّا باقي الصيغ فمنتظمة: больша́я، большо́е.",
        "قاعدة الإملاء من الأسبوع الثاني ما زالت تعمل: بعد г к х ж ш ч щ نكتب и ولا نكتب ы أبدًا: ру́сский، ма́ленький، хоро́ший، больши́е، каки́е.",
        "وبعد ж ш ч щ يُكتب حرف о غير المنبور е: хоро́шее، وليس хоро́шое.",
      ],
      examples: [
        { ru: "Москва́ — большо́й и краси́вый го́род.", en: "Moscow is a big and beautiful city.", ar: "موسكو مدينة كبيرة وجميلة." },
        { ru: "Э́то хоро́шее пла́тье, но о́чень дорого́е.", en: "This is a good dress, but a very expensive one.", ar: "هذا فستان جيّد، لكنه غالٍ جدًّا." },
      ],
    },
    {
      id: "d26-g3",
      title: { en: "Како́й? and adjectives in the accusative", ar: "Како́й? والصفات في حالة المفعول به" },
      en: [
        "The question word agrees too: Како́й дом? Кака́я ку́ртка? Како́е пла́тье? Каки́е ту́фли? In a shop the answer is often Вот э́тот (this one here).",
        "In the accusative only the feminine changes, like its noun: -ая → -ую, -яя → -юю: Я беру́ си́нюю ку́ртку. Masculine and neuter things and all plurals of things stay the same: Я хочу́ чёрный ко́фе и бе́лые ту́фли.",
      ],
      ar: [
        "أداة الاستفهام تطابق الاسم أيضًا: Како́й дом? Кака́я ку́ртка? Како́е пла́тье? Каки́е ту́фли? وفي المتجر يكون الجواب غالبًا: Вот э́тот (هذا هنا).",
        "في حالة المفعول به يتغيّر المؤنّث وحده، مثل اسمه: -ая تصبح -ую، و -яя تصبح -юю: Я беру́ си́нюю ку́ртку. أمّا الأشياء المذكّرة والمحايدة وكل جموع الأشياء فتبقى كما هي: Я хочу́ чёрный ко́фе и бе́лые ту́фли.",
      ],
      tables: [
        {
          caption: { en: "Feminine adjectives in the accusative", ar: "الصفات المؤنّثة في حالة المفعول به" },
          head: ["Nominative · حالة الرفع", "Accusative · حالة المفعول به"],
          rows: [
            ["но́вая ку́ртка", "но́вую ку́ртку"],
            ["си́няя руба́шка", "си́нюю руба́шку"],
            ["кра́сная су́мка", "кра́сную су́мку"],
            ["кака́я ку́ртка?", "каку́ю ку́ртку?"],
            ["э́та руба́шка", "э́ту руба́шку"],
          ],
        },
      ],
      examples: [
        { ru: "— Каку́ю ку́ртку вы хоти́те? — Вот э́ту, кра́сную.", en: "— Which jacket would you like? — This one, the red one.", ar: "— أيّ سترة تريد؟ — هذه، الحمراء." },
        { ru: "Я беру́ бе́лую руба́шку и чёрные ту́фли.", en: "I'll take the white shirt and the black shoes.", ar: "سآخذ القميص الأبيض والحذاء الأسود." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Каку́ю ку́ртку?", en: "Which jacket?", ar: "أيّ سترة؟" },
    setting: {
      en: "Autumn is coming and Ahmed needs a warm jacket. He goes back to the shop where Natasha works.",
      ar: "الخريف يقترب، وأحمد يحتاج إلى سترة دافئة. يعود إلى المتجر الذي تعمل فيه ناتاشا.",
    },
    lines: [
      { who: "B", name: "Ната́ша", ru: "Здра́вствуйте! Что вы хоти́те?", en: "Hello! What would you like?", ar: "مرحبًا! ماذا تريد؟" },
      { who: "A", name: "Ахме́д", ru: "Здра́вствуйте! Я хочу́ но́вую ку́ртку.", en: "Hello! I'd like a new jacket.", ar: "مرحبًا! أريد سترة جديدة." },
      { who: "B", name: "Ната́ша", ru: "Како́й у вас разме́р?", en: "What size are you?", ar: "ما مقاسك؟" },
      { who: "A", name: "Ахме́д", ru: "Пятьдеся́т.", en: "Fifty.", ar: "خمسون." },
      {
        who: "B", name: "Ната́ша", ru: "Вот ку́ртки. Каку́ю вы хоти́те: чёрную и́ли си́нюю?",
        en: "Here are the jackets. Which one would you like: the black one or the dark blue one?", ar: "ها هي السترات. أيّها تريد: السوداء أم الزرقاء الداكنة؟",
      },
      { who: "A", name: "Ахме́д", ru: "А кра́сная есть?", en: "Is there a red one?", ar: "وهل توجد سترة حمراء؟" },
      {
        who: "B", name: "Ната́ша", ru: "Есть. Вот кра́сная, она́ о́чень краси́вая.",
        en: "Yes, there is. Here's a red one — it's very pretty.", ar: "نعم، توجد. ها هي الحمراء، وهي جميلة جدًّا.",
      },
      { who: "A", name: "Ахме́д", ru: "Да, краси́вая! Мо́жно приме́рить?", en: "Yes, it's pretty! Can I try it on?", ar: "نعم، جميلة! هل يمكن أن أجرّبها؟" },
      { who: "B", name: "Ната́ша", ru: "Да, пожа́луйста. Ну как?", en: "Yes, go ahead. Well, how is it?", ar: "نعم، تفضّل. ما رأيك؟" },
      {
        who: "A", name: "Ахме́д", ru: "Хоро́шая ку́ртка, но о́чень дорога́я. Ско́лько сто́ит си́няя?",
        en: "It's a good jacket, but very expensive. How much is the dark blue one?", ar: "سترة جيّدة، لكنها غالية جدًّا. بكم الزرقاء الداكنة؟",
      },
      {
        who: "B", name: "Ната́ша", ru: "Си́няя не о́чень дорога́я, и она́ то́же хоро́шая.",
        en: "The dark blue one isn't very expensive, and it's good too.", ar: "الزرقاء الداكنة ليست غالية جدًّا، وهي جيّدة أيضًا.",
      },
      { who: "A", name: "Ахме́д", ru: "Хорошо́, я беру́ си́нюю!", en: "OK, I'll take the dark blue one!", ar: "حسنًا، سآخذ الزرقاء الداكنة!" },
    ],
  },
  pronunciation: {
    title: { en: "Adjective endings: stress on the stem or on the ending", ar: "نهايات الصفات: النبر على الجذر أو على النهاية" },
    en: [
      "In но́вый, кра́сный and си́ний the stress stays on the stem, so the ending is short and weak: но́вая [nOvaya], но́вое [nOvaye].",
      "In большо́й, плохо́й and дорого́й the ending is stressed, long and clear: [bal'shOy], [bal'shAya].",
      "Say the ы in -ый as a short, deep sound, with the tongue pulled back.",
    ],
    ar: [
      "في но́вый و кра́сный و си́ний يبقى النبر على الجذر، فتكون النهاية قصيرة وضعيفة: но́вая [nOvaya]، но́вое [nOvaye].",
      "أمّا في большо́й و плохо́й و дорого́й فالنهاية منبورة وطويلة وواضحة: [bal'shOy]، [bal'shAya].",
      "انطق ы في -ый صوتًا قصيرًا عميقًا، مع سحب اللسان إلى الخلف.",
    ],
    drills: [
      { ru: "но́вый", say: "nOvyy", focus: { en: "Stress on the stem; a short, deep ы.", ar: "النبر على الجذر، و ы قصيرة عميقة." } },
      { ru: "но́вая ку́ртка", say: "nOvaya kUrtka", focus: { en: "The ending -ая is weak.", ar: "النهاية -ая ضعيفة." } },
      { ru: "большо́й", say: "bal'shOy", focus: { en: "The ending carries the stress.", ar: "النبر على النهاية." } },
      { ru: "больша́я ку́ртка", say: "bal'shAya kUrtka", focus: { en: "The stress stays on the ending: больша́я.", ar: "يبقى النبر على النهاية: больша́я." } },
      { ru: "зелёный", say: "zilyOnyy", focus: { en: "ё is always stressed; the first е sounds like 'i'.", ar: "حرف ё منبور دائمًا، وحرف е الأول يُنطق «i»." } },
      { ru: "Каку́ю ку́ртку?", say: "kakUyu kUrtku?", focus: { en: "Feminine accusative: -ую on the adjective, -у on the noun.", ar: "المؤنّث في حالة المفعول به: -ую في الصفة و -у في الاسم." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the right adjective: … кни́га", ar: "اختر الصفة الصحيحة: … кни́га" },
      options: ["но́вый", "но́вая", "но́вое", "но́вые"],
      answer: 1,
      why: { en: "кни́га is feminine: но́вая.", ar: "кни́га مؤنّثة: но́вая." },
    },
    {
      kind: "choice",
      prompt: { en: "Choose the right adjective: … окно́", ar: "اختر الصفة الصحيحة: … окно́" },
      options: ["большо́й", "больша́я", "больши́е", "большо́е"],
      answer: 3,
      why: { en: "окно́ is neuter: большо́е.", ar: "окно́ محايد: большо́е." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with ста́рый.", ar: "أكمل بالصفة ста́рый." },
      ru: "Э́то ___ маши́на.",
      answers: ["ста́рая"],
      why: { en: "маши́на is feminine: ста́рая.", ar: "маши́на مؤنّثة: ста́рая." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with хоро́ший. Mind the spelling rule!", ar: "أكمل بالصفة хоро́ший، وانتبه لقاعدة الإملاء!" },
      ru: "Э́то ___ ту́фли.",
      answers: ["хоро́шие"],
      why: { en: "Plural -ие, because after ш we write и: хоро́шие.", ar: "الجمع ينتهي بـ -ие، لأننا نكتب и بعد ш: хоро́шие." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with си́ний.", ar: "أكمل بالصفة си́ний." },
      ru: "Вот ___ руба́шка.",
      answers: ["си́няя"],
      why: { en: "A soft adjective in the feminine: си́няя.", ar: "صفة ليّنة بصيغة المؤنّث: си́няя." },
    },
    {
      kind: "fill",
      prompt: { en: "Put the adjective into the accusative: I'll take the red jacket.", ar: "ضع الصفة في حالة المفعول به: سآخذ السترة الحمراء." },
      ru: "Я беру́ ___ ку́ртку.",
      answers: ["кра́сную"],
      why: { en: "Feminine accusative: -ая → -ую.", ar: "المؤنّث في حالة المفعول به: -ая تصبح -ую." },
    },
    {
      kind: "choice",
      prompt: { en: "Which question fits пла́тье?", ar: "أيّ سؤال يناسب пла́тье؟" },
      options: ["Како́й?", "Кака́я?", "Како́е?", "Каки́е?"],
      answer: 2,
      why: { en: "пла́тье is neuter: Како́е?", ar: "пла́тье محايد: Како́е?" },
    },
    {
      kind: "choice",
      prompt: { en: "What is the opposite of дорого́й?", ar: "ما عكس дорого́й؟" },
      options: ["большо́й", "дешёвый", "краси́вый", "плохо́й"],
      answer: 1,
      why: { en: "дорого́й (expensive) ↔ дешёвый (cheap).", ar: "дорого́й (غالٍ) عكس дешёвый (رخيص)." },
    },
    {
      kind: "choice",
      prompt: { en: "What colour is snow?", ar: "ما لون الثلج؟" },
      options: ["чёрный", "зелёный", "кра́сный", "бе́лый"],
      answer: 3,
      why: { en: "Snow is white: бе́лый.", ar: "الثلج أبيض: бе́лый." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I want a black dress.", ar: "كوّن الجملة: أريد فستانًا أسود." },
      tokens: ["пла́тье", "хочу́", "чёрное", "Я"],
      answers: ["Я хочу́ чёрное пла́тье."],
      why: { en: "The adjective goes before the noun and agrees with it: чёрное пла́тье.", ar: "تأتي الصفة قبل الاسم وتطابقه: чёрное пла́тье." },
    },
    {
      kind: "translate",
      prompt: { en: "Moscow is a big and beautiful city.", ar: "موسكو مدينة كبيرة وجميلة." },
      answers: ["Москва́ — большо́й и краси́вый го́род.", "Москва́ большо́й и краси́вый го́род."],
      why: { en: "го́род is masculine, so both adjectives are masculine.", ar: "го́род مذكّر، لذلك تأتي الصفتان بصيغة المذكّر." },
    },
    {
      kind: "translate",
      prompt: { en: "Can I try it on?", ar: "هل يمكن أن أجرّبه؟" },
      answers: ["Мо́жно приме́рить?", "Мо́жно поме́рить?"],
      why: { en: "Мо́жно + infinitive: Мо́жно приме́рить?", ar: "Мо́жно + المصدر: Мо́жно приме́рить?" },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Which jacket does the customer take?", ar: "استمع. أيّ سترة يأخذ الزبون؟" },
      ru: "Я беру́ зелёную ку́ртку.",
      listen: true,
      options: ["the red one · الحمراء", "the black one · السوداء", "the green one · الخضراء", "the white one · البيضاء"],
      answer: 2,
      why: { en: "зелёную = green (feminine accusative).", ar: "зелёную تعني الخضراء (مؤنّث في حالة المفعول به)." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is the problem?", ar: "استمع. ما المشكلة؟" },
      ru: "Краси́вое пла́тье, но о́чень дорого́е.",
      listen: true,
      options: ["The dress is very expensive. · الفستان غالٍ جدًّا.", "The dress is too small. · الفستان صغير جدًّا.", "The dress is old. · الفستان قديم."],
      answer: 0,
      why: { en: "дорого́е = expensive.", ar: "дорого́е تعني «غالٍ»." },
    },
  ],
  topics: ["adjectives", "colors", "shopping"],
  search: ["Russian adjectives gender agreement", "Russian colours vocabulary"],
  speaking: {
    scenario: {
      en: "A clothes shop in Moscow; the tutor is the shop assistant. Ask for a jacket, a shirt or a dress, say your size and the colour you want, compare two items (big or small, cheap or expensive) and choose one.",
      ar: "متجر ملابس في موسكو، والمعلّم هو البائع. اطلب سترة أو قميصًا أو فستانًا، وقل مقاسك واللون الذي تريده، وقارن بين قطعتين (كبيرة أو صغيرة، رخيصة أو غالية)، ثم اختر واحدة.",
    },
    tutorBrief:
      "Play Natasha (Наташа), a shop assistant in a Moscow clothes shop; use вы. Greet the learner (Здравствуйте! Что вы хотите?), ask Какой у вас размер? and Какой цвет?, and show two items (Вот чёрная куртка, а вот синяя). Use today's adjectives in all genders — новый, старый, большой, маленький, хороший, плохой, красивый, дорогой, дешёвый, красный, синий, белый, чёрный, зелёный, жёлтый — plus какой / какая / какое / какие, этот, цвет, размер and Можно примерить? Keep prices simple (up to сто рублей) or just say дорого / не очень дорого. Check agreement: if the learner says красный куртка, repeat красная куртка naturally. Make them choose with the accusative (Я беру синюю куртку) and finish the sale.",
    prompts: [
      { ru: "Я хочу́ но́вую ку́ртку.", en: "I'd like a new jacket.", ar: "أريد سترة جديدة." },
      { ru: "Како́й цвет? Си́ний и́ли чёрный?", en: "What colour? Dark blue or black?", ar: "أيّ لون؟ أزرق داكن أم أسود؟" },
      { ru: "Мо́жно приме́рить?", en: "Can I try it on?", ar: "هل يمكن أن أجرّبها؟" },
      { ru: "Э́та ку́ртка краси́вая, но дорога́я.", en: "This jacket is pretty, but expensive.", ar: "هذه السترة جميلة، لكنها غالية." },
      { ru: "Я беру́ бе́лую руба́шку.", en: "I'll take the white shirt.", ar: "سآخذ القميص الأبيض." },
    ],
  },
  journal: {
    en: "Write 4–5 sentences about your home or your city with adjectives: Мой дом ма́ленький, но краси́вый. Name at least three colours.",
    ar: "اكتب من ٤ إلى ٥ جمل عن بيتك أو مدينتك باستخدام الصفات: Мой дом ма́ленький, но краси́вый. واذكر ثلاثة ألوان على الأقل.",
  },
  culture: {
    en: "Russian has two basic blues: си́ний (dark blue) and голубо́й (light blue, like the sky). For Russians they are two different colours, as different as red and pink, while Arabic uses أزرق for both.",
    ar: "في الروسية لونان أزرقان أساسيان: си́ний (الأزرق الداكن) و голубо́й (الأزرق الفاتح، لون السماء). وهما عند الروس لونان مختلفان، كاختلاف الأحمر عن الوردي، أمّا العربية فتستخدم كلمة «أزرق» للاثنين.",
  },
};

const DAY_27: Day = {
  n: 27,
  week: 4,
  kind: "immersion",
  title: { ru: "Смо́трим: ры́нок", en: "Watch: the market", ar: "نشاهد: السوق" },
  goals: [
    {
      en: "Follow a conversation at a market: prices, polite requests and change.",
      ar: "أن تتابع حوارًا في السوق: الأسعار والطلبات المهذّبة والباقي من النقود.",
    },
    {
      en: "Queue and pay the Russian way: Кто после́дний? Ва́ша сда́ча.",
      ar: "أن تقف في الطابور وتدفع على الطريقة الروسية: Кто после́дний? Ва́ша сда́ча.",
    },
  ],
  words: [
    {
      id: "d27-01", ru: "ры́нок", say: "rYnak", en: "market", ar: "سوق", pos: "noun", g: "m",
      forms: "мн. ч. ры́нки",
      ex: { ru: "Ры́нок ря́дом.", en: "The market is nearby.", ar: "السوق قريب." },
      note: { en: "At the market: на ры́нке (the о disappears).", ar: "في السوق: на ры́нке (يسقط حرف о)." },
    },
    {
      id: "d27-02", ru: "покупа́тель", say: "pakupAtil'", en: "customer, buyer", ar: "زبون، مشترٍ", pos: "noun", g: "m",
      ex: { ru: "Покупа́тель спра́шивает, ско́лько сто́ит сыр.", en: "The customer asks how much the cheese is.", ar: "الزبون يسأل بكم الجبن." },
    },
    {
      id: "d27-03", ru: "ка́сса", say: "kAssa", en: "cash desk, till", ar: "صندوق الدفع", pos: "noun", g: "f",
      ex: { ru: "Где ка́сса?", en: "Where is the cash desk?", ar: "أين صندوق الدفع؟" },
    },
    {
      id: "d27-04", ru: "ски́дка", say: "skItka", en: "discount", ar: "خصم، تخفيض", pos: "noun", g: "f",
      ex: { ru: "Для вас ски́дка!", en: "A discount for you!", ar: "لك خصم!" },
    },
    {
      id: "d27-05", ru: "сда́ча", say: "zdAcha", en: "change (money you get back)", ar: "الباقي (من النقود)", pos: "noun", g: "f",
      ex: { ru: "Ва́ша сда́ча — три́дцать рубле́й.", en: "Your change is thirty rubles.", ar: "الباقي لك ثلاثون روبلًا." },
    },
    {
      id: "d27-06", ru: "о́чередь", say: "Ochirit'", en: "queue, line", ar: "طابور", pos: "noun", g: "f",
      ex: { ru: "Тут больша́я о́чередь.", en: "There's a long queue here.", ar: "هنا طابور طويل." },
    },
    {
      id: "d27-07", ru: "све́жий", say: "svyEzhiy", en: "fresh", ar: "طازج", pos: "adj",
      forms: "све́жая, све́жее, све́жие",
      ex: { ru: "Тут всё о́чень све́жее.", en: "Everything here is very fresh.", ar: "كل شيء هنا طازج جدًّا." },
    },
    {
      id: "d27-08", ru: "Кто после́дний?", say: "kto paslyEdniy?", en: "Who's last in the queue?", ar: "من آخر واحد في الطابور؟", pos: "phrase",
      note: {
        en: "Russians ask this when they join a queue; the last person answers Я.",
        ar: "يسأل الروس هذا السؤال عندما ينضمّون إلى طابور، ويجيب آخر شخص: Я.",
      },
    },
  ],
  grammar: [
    {
      id: "d27-g1",
      title: { en: "One or many: Ско́лько сто́ит? — Ско́лько сто́ят?", ar: "المفرد والجمع: Ско́лько сто́ит? — Ско́лько сто́ят?" },
      en: [
        "For one thing ask Ско́лько сто́ит…? For several things, or a plural word like фру́кты, о́вощи, я́блоки, ask Ско́лько сто́ят…?",
        "The answer does not change: Сто рубле́й.",
      ],
      ar: [
        "عن شيء واحد اسأل Ско́лько сто́ит…? وعن عدّة أشياء، أو عن كلمة بصيغة الجمع مثل фру́кты، о́вощи، я́блоки، اسأل Ско́лько сто́ят…?",
        "والجواب لا يتغيّر: Сто рубле́й.",
      ],
      examples: [
        { ru: "Ско́лько сто́ит ры́ба?", en: "How much is the fish?", ar: "بكم السمك؟" },
        { ru: "Ско́лько сто́ят я́блоки?", en: "How much are the apples?", ar: "بكم التفاح؟" },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Суббо́та на ры́нке", en: "Saturday at the market", ar: "السبت في السوق" },
    setting: {
      en: "Saturday morning. Anna takes Ahmed to a big market in Moscow. There is a queue at the fruit stall, where Nina sells fruit and vegetables.",
      ar: "صباح السبت. تأخذ آنا أحمد إلى سوق كبير في موسكو. هناك طابور عند كشك الفواكه، حيث تبيع نينا الفواكه والخضروات.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, вот ры́нок! Тут всё о́чень све́жее.", en: "Ahmed, here's the market! Everything here is very fresh.", ar: "يا أحمد، ها هو السوق! كل شيء هنا طازج جدًّا." },
      { who: "A", name: "Ахме́д", ru: "Каки́е краси́вые фру́кты! Но тут о́чередь.", en: "What beautiful fruit! But there's a queue.", ar: "ما أجمل هذه الفواكه! لكن هنا طابور." },
      { who: "B", name: "Же́нщина", ru: "Извини́те, кто после́дний?", en: "Excuse me, who's last in the queue?", ar: "عذرًا، من آخر واحد في الطابور؟" },
      { who: "A", name: "Ахме́д", ru: "Я после́дний.", en: "I am.", ar: "أنا الأخير." },
      { who: "B", name: "А́нна", ru: "Ахме́д, ты говори́шь, как ру́сский!", en: "Ahmed, you talk like a Russian!", ar: "يا أحمد، أنت تتكلّم مثل الروس!" },
      { who: "A", name: "Ахме́д", ru: "Здра́вствуйте! Ско́лько сто́ят я́блоки?", en: "Hello! How much are the apples?", ar: "مرحبًا! بكم التفاح؟" },
      {
        who: "B", name: "Ни́на", ru: "Сто рубле́й. Они́ о́чень све́жие! А вы отку́да?",
        en: "A hundred rubles. They're very fresh! And where are you from?", ar: "مئة روبل. إنه طازج جدًّا! ومن أين أنت؟",
      },
      {
        who: "A", name: "Ахме́д", ru: "Я из Еги́пта. Я беру́ я́блоки и карто́шку.",
        en: "I'm from Egypt. I'll take the apples and some potatoes.", ar: "أنا من مصر. سآخذ التفاح والبطاطس.",
      },
      {
        who: "B", name: "Ни́на", ru: "Из Еги́пта? Вы наш гость! Сто пятьдеся́т рубле́й, но для вас ски́дка: сто два́дцать.",
        en: "From Egypt? You're our guest! A hundred and fifty rubles, but there's a discount for you: a hundred and twenty.",
        ar: "من مصر؟ أنت ضيفنا! مئة وخمسون روبلًا، لكنّ لك خصمًا: مئة وعشرون.",
      },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо! А где ка́сса?", en: "Thank you! And where's the cash desk?", ar: "شكرًا! وأين صندوق الدفع؟" },
      { who: "B", name: "Ни́на", ru: "Ка́сса — э́то я!", en: "I'm the cash desk!", ar: "صندوق الدفع هو أنا!" },
      { who: "A", name: "Ахме́д", ru: "Хорошо́. Вот сто пятьдеся́т.", en: "OK. Here's a hundred and fifty.", ar: "حسنًا. تفضّلي، هذه مئة وخمسون." },
      {
        who: "B", name: "Ни́на", ru: "Ва́ша сда́ча — три́дцать рубле́й. Прия́тного аппети́та!",
        en: "Your change is thirty rubles. Enjoy your food!", ar: "الباقي لك ثلاثون روبلًا. بالهناء والشفاء!",
      },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо! До свида́ния!", en: "Thank you! Goodbye!", ar: "شكرًا! مع السلامة!" },
      { who: "B", name: "А́нна", ru: "Ахме́д, ты о́чень хоро́ший покупа́тель!", en: "Ahmed, you're a very good customer!", ar: "يا أحمد، أنت زبون ممتاز!" },
      { who: "A", name: "Ахме́д", ru: "А ты о́чень хоро́шая подру́га!", en: "And you're a very good friend!", ar: "وأنتِ صديقة رائعة!" },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "You join a queue. What do you ask?", ar: "تنضمّ إلى طابور. ماذا تسأل؟" },
      options: ["Где ка́сса?", "Кто после́дний?", "Ско́лько сто́ит?"],
      answer: 1,
      why: { en: "Кто после́дний? = Who's last? — then you stand behind that person.", ar: "Кто после́дний? تعني «من الأخير؟»، ثم تقف خلف ذلك الشخص." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Your change is thirty rubles.", ar: "أكمل: الباقي لك ثلاثون روبلًا." },
      ru: "Ва́ша ___ — три́дцать рубле́й.",
      answers: ["сда́ча"],
      why: { en: "сда́ча = the change you get back.", ar: "сда́ча تعني الباقي من النقود." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with све́жий: The apples are very fresh.", ar: "أكمل بالصفة све́жий: التفاح طازج جدًّا." },
      ru: "Я́блоки о́чень ___.",
      answers: ["све́жие"],
      why: { en: "я́блоки is plural: све́жие (after ж write и).", ar: "я́блоки جمع: све́жие (بعد ж نكتب и)." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: How much are the apples?", ar: "كوّن السؤال: بكم التفاح؟" },
      tokens: ["я́блоки", "сто́ят", "Ско́лько"],
      answers: ["Ско́лько сто́ят я́блоки?"],
      why: { en: "Plural thing, plural verb: сто́ят.", ar: "الشيء بصيغة الجمع، فيأتي الفعل بصيغة الجمع: сто́ят." },
    },
    {
      kind: "translate",
      prompt: { en: "Is there a discount?", ar: "هل يوجد خصم؟" },
      answers: ["Есть ски́дка?", "Ски́дка есть?", "У вас есть ски́дка?", "А ски́дка есть?"],
      why: { en: "Есть…? asks whether something exists: Есть ски́дка?", ar: "Есть…? تسأل عن وجود الشيء: Есть ски́дка?" },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. How much does it cost?", ar: "استمع. كم السعر؟" },
      ru: "Сто два́дцать рубле́й.",
      listen: true,
      options: ["112 · ١١٢", "102 · ١٠٢", "120 · ١٢٠"],
      answer: 2,
      why: { en: "сто (100) + два́дцать (20) = 120.", ar: "مئة وعشرون: сто (١٠٠) + два́дцать (٢٠) = ١٢٠." },
    },
  ],
  topics: ["shopping", "food", "listening"],
  search: ["Russian market vocabulary", "Russian at the market dialogue for beginners", "Moscow market walk"],
  speaking: {
    scenario: {
      en: "Retell what Ahmed bought at the market. Then buy fruit and vegetables from the tutor, a market seller: ask the prices, ask for a discount, pay and get your change.",
      ar: "أعد سرد ما اشتراه أحمد في السوق. ثم اشترِ فواكه وخضروات من المعلّم، وهو بائع في السوق: اسأل عن الأسعار، واطلب خصمًا، وادفع وخذ الباقي.",
    },
    tutorBrief:
      "First ask the learner to retell the market story in the present tense (Где Анна и Ахмед? Что покупает Ахмед? Сколько стоят яблоки?). Then play a cheerful market seller in Moscow; use вы. Sell fruit and vegetables — яблоки, фрукты, овощи, картошка, рыба, мясо, сыр — with prices up to сто рублей or сто пятьдесят. Use this week's language: Что вы хотите?, Сколько стоит / стоят…?, Я беру…, свежий, скидка, сдача, касса, очередь, Кто последний?, Вот, пожалуйста. Let the learner ask for a discount and give one; when they pay, count the change aloud (Ваша сдача — двадцать рублей). Correct prices and adjective endings gently. Finish with Приятного аппетита!",
    prompts: [
      { ru: "Кто после́дний?", en: "Who's last in the queue?", ar: "من آخر واحد في الطابور؟" },
      { ru: "Ско́лько сто́ят я́блоки?", en: "How much are the apples?", ar: "بكم التفاح؟" },
      { ru: "Я беру́ фру́кты и о́вощи.", en: "I'll take fruit and vegetables.", ar: "سآخذ الفواكه والخضروات." },
      { ru: "А ски́дка есть?", en: "Is there a discount?", ar: "وهل يوجد خصم؟" },
      { ru: "Спаси́бо! Вот сто рубле́й.", en: "Thank you! Here's a hundred rubles.", ar: "شكرًا! تفضّل، هذه مئة روبل." },
    ],
  },
  journal: {
    en: "Write 4–5 sentences about a market or a shop you know in Cairo or Moscow: what people buy there, what is fresh, cheap or expensive, and whether there is a queue.",
    ar: "اكتب من ٤ إلى ٥ جمل عن سوق أو متجر تعرفه في القاهرة أو موسكو: ماذا يشتري الناس هناك، وما الطازج والرخيص والغالي، وهل يوجد طابور.",
  },
  culture: {
    en: "Moscow has large covered markets, such as the Danilovsky market, with fresh fruit, vegetables, meat and fish, and often food stalls too. People bargain less than in Egyptian markets, but a friendly regular customer may still get a small discount.",
    ar: "في موسكو أسواق كبيرة مسقوفة، مثل سوق دانيلوفسكي، فيها فواكه وخضروات ولحوم وأسماك طازجة، وغالبًا أكشاك للطعام أيضًا. والمساومة فيها أقلّ ممّا في الأسواق المصرية، لكن الزبون الدائم اللطيف قد يحصل على خصم صغير.",
  },
  worksheet: {
    before: [
      { en: "Listen for prices: сто, пятьдеся́т, два́дцать, три́дцать.", ar: "استمع إلى الأسعار: сто، пятьдеся́т، два́дцать، три́дцать." },
      { en: "Listen for what Ahmed buys and what he says in the queue.", ar: "انتبه إلى ما يشتريه أحمد وما يقوله في الطابور." },
      { en: "Don't try to catch every word: listen for the words you know and guess the rest.", ar: "لا تحاول أن تلتقط كل كلمة: استمع إلى الكلمات التي تعرفها وخمّن الباقي." },
    ],
    questions: [
      {
        kind: "choice",
        prompt: { en: "Where are Anna and Ahmed?", ar: "أين آنا وأحمد؟" },
        options: ["in a café · في مقهى", "at a market · في السوق", "at the station · في المحطة"],
        answer: 1,
        why: { en: "Anna says: Ахме́д, вот ры́нок! — here's the market.", ar: "تقول آنا: Ахме́д, вот ры́нок! أي «ها هو السوق»." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. What does the woman ask?", ar: "استمع. ماذا تسأل المرأة؟" },
        ru: "Извини́те, кто после́дний?",
        listen: true,
        options: ["who is last in the queue · من الأخير في الطابور", "where the cash desk is · أين صندوق الدفع", "how much the apples are · بكم التفاح"],
        answer: 0,
        why: { en: "Кто после́дний? is the queue question.", ar: "Кто после́дний? هو سؤال الطابور." },
      },
      {
        kind: "choice",
        prompt: { en: "How much are the apples?", ar: "بكم التفاح؟" },
        options: ["50 rubles · ٥٠ روبلًا", "120 rubles · ١٢٠ روبلًا", "100 rubles · ١٠٠ روبل"],
        answer: 2,
        why: { en: "Nina says: Сто рубле́й.", ar: "تقول نينا: Сто рубле́й." },
      },
      {
        kind: "choice",
        prompt: { en: "What does Ahmed buy?", ar: "ماذا يشتري أحمد؟" },
        options: ["fish and rice · سمكًا وأرزًا", "apples and potatoes · تفاحًا وبطاطس", "fruit and cheese · فواكه وجبنًا"],
        answer: 1,
        why: { en: "Я беру́ я́блоки и карто́шку.", ar: "يقول: Я беру́ я́блоки и карто́шку." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. Why does Nina give a discount?", ar: "استمع. لماذا تعطي نينا خصمًا؟" },
        ru: "Из Еги́пта? Вы наш гость!",
        listen: true,
        options: ["Ahmed is a guest from Egypt. · أحمد ضيف من مصر.", "Ahmed buys a lot. · أحمد يشتري كثيرًا.", "It is Saturday. · اليوم هو السبت."],
        answer: 0,
        why: { en: "Вы наш гость! = You're our guest!", ar: "Вы наш гость! تعني «أنت ضيفنا!»." },
      },
      {
        kind: "choice",
        prompt: { en: "How much change does Ahmed get?", ar: "كم الباقي الذي يأخذه أحمد؟" },
        options: ["20 rubles · ٢٠ روبلًا", "50 rubles · ٥٠ روبلًا", "30 rubles · ٣٠ روبلًا"],
        answer: 2,
        why: { en: "He pays 150 for 120: Ва́ша сда́ча — три́дцать рубле́й.", ar: "يدفع ١٥٠ عن ١٢٠: Ва́ша сда́ча — три́дцать рубле́й." },
      },
    ],
    retell: {
      en: "Retell the story in 5–6 sentences in the present tense: where Anna and Ahmed are, what Ahmed says in the queue, what he buys, the price, the discount and the change. Start with: В суббо́ту А́нна и Ахме́д…",
      ar: "أعد سرد القصة في ٥ إلى ٦ جمل بالزمن الحاضر: أين آنا وأحمد، وماذا يقول أحمد في الطابور، وماذا يشتري، والسعر والخصم والباقي. ابدأ هكذا: В суббо́ту А́нна и Ахме́д…",
    },
  },
};

const DAY_28: Day = {
  n: 28,
  week: 4,
  kind: "review",
  title: { ru: "Контро́льная то́чка A1", en: "A1 checkpoint", ar: "نقطة التقييم A1" },
  goals: [
    {
      en: "Check what you can do after four weeks: read Cyrillic, greet, introduce yourself, count, find places, tell the time, order food and shop.",
      ar: "أن تتحقّق ممّا تستطيع فعله بعد أربعة أسابيع: قراءة الحروف الروسية، والتحية، والتعريف بنفسك، والعدّ، وإيجاد الأماكن، ومعرفة الوقت، وطلب الطعام، والتسوّق.",
    },
    { en: "Pass a 10-minute A1 speaking test.", ar: "أن تجتاز اختبار محادثة A1 مدّته ١٠ دقائق." },
  ],
  words: [],
  grammar: [
    {
      id: "d28-g1",
      title: { en: "Week 4 summary: the accusative at a glance", ar: "ملخّص الأسبوع الرابع: حالة المفعول به في لمحة" },
      en: [
        "One big new idea this week: the direct object changes its form. Things: only feminine nouns change (-у, -ю). People: feminine nouns change the same way, and masculine nouns add -а / -я.",
        "Pronouns have their own forms (меня́, тебя́, его́, её, нас, вас, их), and feminine adjectives take -ую / -юю: Я беру́ си́нюю ку́ртку.",
      ],
      ar: [
        "فكرة جديدة كبيرة واحدة هذا الأسبوع: المفعول به المباشر يغيّر صيغته. في الأشياء تتغيّر الأسماء المؤنّثة وحدها (-у، -ю)، وفي الأشخاص يتغيّر المؤنّث بالطريقة نفسها ويأخذ المذكّر -а / -я.",
        "للضمائر صيغها الخاصة (меня́، тебя́، его́، её، нас، вас، их)، والصفات المؤنّثة تأخذ -ую / -юю: Я беру́ си́нюю ку́ртку.",
      ],
      tables: [
        {
          caption: { en: "From the nominative to the accusative", ar: "من حالة الرفع إلى حالة المفعول به" },
          head: ["Type · النوع", "Nominative · حالة الرفع", "Accusative · حالة المفعول به"],
          rows: [
            ["masculine thing · شيء مذكّر", "но́вый журна́л", "но́вый журна́л"],
            ["neuter thing · شيء محايد", "большо́е окно́", "большо́е окно́"],
            ["feminine thing · شيء مؤنّث", "кра́сная ку́ртка", "кра́сную ку́ртку"],
            ["plural things · جمع الأشياء", "но́вые ту́фли", "но́вые ту́фли"],
            ["masculine person · شخص مذكّر", "брат, гость", "бра́та, го́стя"],
            ["feminine person · شخص مؤنّث", "сестра́, ма́ма", "сестру́, ма́му"],
            ["pronouns · الضمائر", "я, ты, он, она́, мы, вы, они́", "меня́, тебя́, его́, её, нас, вас, их"],
          ],
        },
      ],
      examples: [
        { ru: "Я беру́ кра́сную ку́ртку и чёрные ту́фли.", en: "I'll take the red jacket and the black shoes.", ar: "سآخذ السترة الحمراء والحذاء الأسود." },
        { ru: "Я жду бра́та, а он ждёт меня́.", en: "I'm waiting for my brother, and he is waiting for me.", ar: "أنا أنتظر أخي، وهو ينتظرني." },
      ],
    },
  ],
  exercises: [],
  topics: ["accusative", "food", "cafe", "adjectives"],
  search: ["Russian A1 speaking test practice", "Russian A1 grammar review accusative"],
  speaking: {
    scenario: {
      en: "Your A1 speaking test: introduce yourself, order in a café, buy clothes and describe your home. The tutor is the examiner.",
      ar: "اختبار المحادثة A1: عرّف بنفسك، واطلب في مقهى، واشترِ ملابس، وصف بيتك. المعلّم هو الممتحِن.",
    },
    tutorBrief:
      "You are a friendly examiner running a 10-minute A1 oral exam; use вы and speak slowly and clearly. Part 1 (3 min): greet the learner and ask Как вас зовут? Откуда вы? Где вы живёте? Где вы работаете? and two questions about their family. Part 2 (3 min): role-play a café — you are the waiter, take a full order (Что вы будете?), and say that one item is not available (Извините, кофе сейчас нет). Part 3 (2 min): role-play a clothes shop — ask size and colour, show two items, give a price up to сто рублей, and let them choose. Part 4 (2 min): ask them to describe their home and their week (days of the week, times, what they do). Stay within weeks 1–4: present tense, the prepositional and accusative cases, хотеть, мочь, есть, пить, adjectives, numbers to 100. Do not correct during the exam. At the end, give feedback in English: a score out of 20 (up to 5 points each for vocabulary; grammar — verb endings, prepositional and accusative case, adjective agreement; pronunciation and stress; fluency), three things the learner did well, and the three most important corrections, each with the correct Russian sentence.",
    prompts: [
      {
        ru: "Меня́ зову́т Ахме́д. Я из Еги́пта, но сейча́с я живу́ в Москве́.",
        en: "My name is Ahmed. I'm from Egypt, but now I live in Moscow.", ar: "اسمي أحمد. أنا من مصر، لكنني أسكن الآن في موسكو.",
      },
      { ru: "Я бу́ду суп и ку́рицу. Счёт, пожа́луйста.", en: "I'll have the soup and the chicken. The bill, please.", ar: "سآخذ الحساء والدجاج. الحساب من فضلك." },
      { ru: "Я хочу́ си́нюю ку́ртку. Мо́жно приме́рить?", en: "I'd like a dark blue jacket. Can I try it on?", ar: "أريد سترة زرقاء داكنة. هل يمكن أن أجرّبها؟" },
      {
        ru: "У меня́ ма́ленькая, но краси́вая кварти́ра в це́нтре.",
        en: "I have a small but beautiful flat in the centre.", ar: "عندي شقّة صغيرة لكنها جميلة في وسط المدينة.",
      },
      {
        ru: "В понеде́льник я рабо́таю, а в суббо́ту гуля́ю в па́рке.",
        en: "On Monday I work, and on Saturday I go for a walk in the park.", ar: "يوم الاثنين أعمل، ويوم السبت أتنزّه في الحديقة.",
      },
    ],
  },
  journal: {
    en: "Write 6–8 sentences about yourself for a new Russian friend: your name, city and family, your work or studies, what you eat and drink, what you like and what you want to buy this month.",
    ar: "اكتب من ٦ إلى ٨ جمل عن نفسك لصديق روسي جديد: اسمك ومدينتك وعائلتك، وعملك أو دراستك، وماذا تأكل وتشرب، وماذا تحبّ، وماذا تريد أن تشتري هذا الشهر.",
  },
  culture: {
    en: "Russia's official exam for foreigners is called ТРКИ (TORFL). Its first level, the elementary level, corresponds to A1 — the level this checkpoint is about.",
    ar: "الاختبار الرسمي للأجانب في روسيا اسمه ТРКИ (TORFL). ومستواه الأول، المستوى الابتدائي، يعادل المستوى A1، وهو المستوى الذي تقيسه نقطة التقييم هذه.",
  },
  test: {
    sections: [
      {
        title: { en: "Reading and words", ar: "القراءة والمفردات" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Read the words. Which one means 'restaurant'?", ar: "اقرأ الكلمات. أيّها تعني «مطعم»؟" },
            options: ["теа́тр", "метро́", "рестора́н", "торт"],
            answer: 2,
            why: { en: "рестора́н: Р sounds like 'r' and С like 's' — two false friends.", ar: "рестора́н: حرف Р يُنطق «ر» وحرف С يُنطق «س»، وهما صديقان مخادعان." },
          },
          {
            kind: "choice",
            prompt: { en: "How is the Russian letter В pronounced?", ar: "كيف يُنطق الحرف الروسي В؟" },
            options: ["like English b · مثل b", "like English v · مثل v", "like English w · مثل w"],
            answer: 1,
            why: { en: "В looks like B but sounds like 'v': вода́.", ar: "В يشبه B لكنه يُنطق «v»: вода́." },
          },
          {
            kind: "choice",
            prompt: { en: "You meet your teacher in the morning. What do you say?", ar: "تقابل معلّمك في الصباح. ماذا تقول؟" },
            options: ["Пока́!", "Приве́т!", "Здра́вствуйте!"],
            answer: 2,
            why: { en: "Здра́вствуйте is the polite hello; приве́т is for friends.", ar: "Здра́вствуйте هي التحية المهذّبة، أمّا приве́т فللأصدقاء." },
          },
          {
            kind: "choice",
            prompt: { en: "Which noun is feminine?", ar: "أيّ اسم مؤنّث؟" },
            options: ["стол", "дверь", "окно́", "телефо́н"],
            answer: 1,
            why: { en: "дверь ends in -ь and is feminine; learn the gender of such nouns by heart.", ar: "дверь تنتهي بـ -ь وهي مؤنّثة، ويجب حفظ جنس هذه الأسماء." },
          },
          {
            kind: "choice",
            prompt: { en: "Your father's mother is your…", ar: "أمّ أبيك هي…" },
            options: ["ба́бушка", "тётя", "сестра́", "дочь"],
            answer: 0,
            why: { en: "ба́бушка = grandmother.", ar: "ба́бушка تعني الجدّة." },
          },
          {
            kind: "choice",
            prompt: { en: "Which word means 'expensive'?", ar: "أيّ كلمة تعني «غالٍ»؟" },
            options: ["дёшево", "далеко́", "ря́дом", "до́рого"],
            answer: 3,
            why: { en: "до́рого = expensive; дёшево = cheap.", ar: "до́рого تعني «غالٍ»، و дёшево تعني «رخيص»." },
          },
          {
            kind: "choice",
            prompt: { en: "At the end of a meal you ask the waiter for…", ar: "في نهاية الوجبة تطلب من النادل…" },
            options: ["меню́", "счёт", "ло́жку", "стака́н"],
            answer: 1,
            why: { en: "Счёт, пожа́луйста. — The bill, please.", ar: "Счёт, пожа́луйста. — الحساب من فضلك." },
          },
          {
            kind: "choice",
            prompt: { en: "Which day comes after пя́тница?", ar: "أيّ يوم يأتي بعد пя́тница؟" },
            options: ["четве́рг", "воскресе́нье", "суббо́та", "понеде́льник"],
            answer: 2,
            why: { en: "пя́тница (Friday), then суббо́та (Saturday).", ar: "пя́тница (الجمعة)، ثم суббо́та (السبت)." },
          },
        ],
      },
      {
        title: { en: "Grammar", ar: "القواعد" },
        items: [
          {
            kind: "fill",
            prompt: { en: "Plural: кни́га", ar: "الجمع: кни́га" },
            ru: "Э́то мои́ ___.",
            answers: ["кни́ги"],
            why: { en: "After г, к, х write и: кни́ги.", ar: "بعد г و к و х نكتب и: кни́ги." },
          },
          {
            kind: "fill",
            prompt: { en: "чита́ть: they read", ar: "чита́ть: هم يقرؤون" },
            ru: "Они́ ___ газе́ту.",
            answers: ["чита́ют"],
            why: { en: "First conjugation: они́ чита́ют.", ar: "التصريف الأول: они́ чита́ют." },
          },
          {
            kind: "fill",
            prompt: { en: "говори́ть: you (informal) speak", ar: "говори́ть: أنت تتكلّم" },
            ru: "Ты ___ по-ара́бски?",
            answers: ["говори́шь"],
            why: { en: "Second conjugation: ты говори́шь.", ar: "التصريف الثاني: ты говори́шь." },
          },
          {
            kind: "fill",
            prompt: { en: "Prepositional case: I live in Moscow.", ar: "حالة حرف الجر: أسكن في موسكو." },
            ru: "Я живу́ в ___.",
            answers: ["Москве́"],
            why: { en: "в + prepositional: Москва́ → Москве́.", ar: "в + حالة حرف الجر: Москва́ تصبح Москве́." },
          },
          {
            kind: "fill",
            prompt: { en: "Prepositional case: We are in Russia now.", ar: "حالة حرف الجر: نحن في روسيا الآن." },
            ru: "Мы сейча́с в ___.",
            answers: ["Росси́и"],
            why: { en: "Nouns in -ия take -ии: в Росси́и.", ar: "الأسماء المنتهية بـ -ия تأخذ -ии: в Росси́и." },
          },
          {
            kind: "fill",
            prompt: { en: "Accusative: I love music.", ar: "حالة المفعول به: أحبّ الموسيقى." },
            ru: "Я люблю́ ___.",
            answers: ["му́зыку"],
            why: { en: "Feminine -а → -у: му́зыку.", ar: "المؤنّث: -а تصبح -у: му́зыку." },
          },
          {
            kind: "fill",
            prompt: { en: "A person in the accusative: I'm waiting for my brother.", ar: "الأشخاص في حالة المفعول به: أنتظر أخي." },
            ru: "Я жду ___.",
            answers: ["бра́та"],
            why: { en: "A masculine person adds -а: бра́та.", ar: "المذكّر من الأشخاص يأخذ -а: бра́та." },
          },
          {
            kind: "fill",
            prompt: { en: "Pronoun: Do you know him?", ar: "الضمير: هل تعرفه؟" },
            ru: "Ты ___ зна́ешь?",
            answers: ["его́"],
            why: { en: "он → его́.", ar: "он يصبح его́." },
          },
          {
            kind: "fill",
            prompt: { en: "Adjective: This is a new jacket.", ar: "الصفة: هذه سترة جديدة." },
            ru: "Э́то ___ ку́ртка.",
            answers: ["но́вая"],
            why: { en: "ку́ртка is feminine: но́вая.", ar: "ку́ртка مؤنّثة: но́вая." },
          },
          {
            kind: "fill",
            prompt: { en: "хоте́ть: What would you like? (formal)", ar: "хоте́ть: ماذا تريد؟ (رسمي)" },
            ru: "Что вы ___?",
            answers: ["хоти́те"],
            why: { en: "вы → хоти́те.", ar: "مع вы نقول хоти́те." },
          },
          {
            kind: "fill",
            prompt: { en: "мочь: I can't eat meat.", ar: "мочь: لا أستطيع أن آكل اللحم." },
            ru: "Я не ___ есть мя́со.",
            answers: ["могу́"],
            why: { en: "я → могу́.", ar: "مع я نقول могу́." },
          },
          {
            kind: "fill",
            prompt: { en: "пить: we drink", ar: "пить: نحن نشرب" },
            ru: "Мы ___ чай.",
            answers: ["пьём"],
            why: { en: "мы → пьём.", ar: "مع мы نقول пьём." },
          },
        ],
      },
      {
        title: { en: "Listening", ar: "الاستماع" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Listen. Which phone number do you hear?", ar: "استمع. أيّ رقم هاتف تسمع؟" },
            ru: "Во́семь, де́вять, шесть, три, ноль.",
            listen: true,
            options: ["8 6 9 3 0", "8 9 6 3 0", "8 9 6 0 3"],
            answer: 1,
            why: { en: "во́семь (8), де́вять (9), шесть (6), три (3), ноль (0).", ar: "الرقم هو: во́семь (٨)، де́вять (٩)، шесть (٦)، три (٣)، ноль (٠)." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. How much is it?", ar: "استمع. كم السعر؟" },
            ru: "Со́рок пять рубле́й.",
            listen: true,
            options: ["54 · ٥٤", "15 · ١٥", "45 · ٤٥"],
            answer: 2,
            why: { en: "со́рок (40) + пять (5) = 45.", ar: "خمسة وأربعون: со́рок (٤٠) + пять (٥) = ٤٥." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. What time is it?", ar: "استمع. كم الساعة؟" },
            ru: "Сейча́с три часа́.",
            listen: true,
            options: ["2:00", "3:00", "10:00"],
            answer: 1,
            why: { en: "три часа́ = three o'clock.", ar: "три часа́ تعني الساعة الثالثة." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. Where is the pharmacy?", ar: "استمع. أين الصيدلية؟" },
            ru: "Апте́ка спра́ва, недалеко́.",
            listen: true,
            options: ["on the left, far away · على اليسار، بعيدة", "on the right, not far · على اليمين، ليست بعيدة", "at the station · في المحطة"],
            answer: 1,
            why: { en: "спра́ва = on the right, недалеко́ = not far.", ar: "спра́ва تعني على اليمين، و недалеко́ تعني ليست بعيدة." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. Where is the woman from?", ar: "استمع. من أين المرأة؟" },
            ru: "Меня́ зову́т О́льга. Я из Москвы́.",
            listen: true,
            options: ["from Moscow · من موسكو", "from Cairo · من القاهرة", "from Egypt · من مصر"],
            answer: 0,
            why: { en: "из Москвы́ = from Moscow.", ar: "из Москвы́ تعني من موسكو." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. What does the customer order?", ar: "استمع. ماذا يطلب الزبون؟" },
            ru: "Я бу́ду ры́бу, сала́т и чай.",
            listen: true,
            options: ["chicken, rice and coffee · دجاج وأرز وقهوة", "soup and juice · حساء وعصير", "fish, salad and tea · سمك وسلطة وشاي"],
            answer: 2,
            why: { en: "ры́бу = fish, сала́т = salad, чай = tea.", ar: "ры́бу تعني سمكًا، و сала́т سلطة، و чай شايًا." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. When do they go for a walk?", ar: "استمع. متى يتنزّهون؟" },
            ru: "Мы гуля́ем в сре́ду ве́чером.",
            listen: true,
            options: ["on Wednesday evening · يوم الأربعاء مساءً", "on Tuesday morning · يوم الثلاثاء صباحًا", "on Sunday afternoon · يوم الأحد بعد الظهر"],
            answer: 0,
            why: { en: "в сре́ду = on Wednesday, ве́чером = in the evening.", ar: "в сре́ду تعني يوم الأربعاء، و ве́чером تعني مساءً." },
          },
        ],
      },
      {
        title: { en: "Sentences", ar: "الجمل" },
        items: [
          {
            kind: "order",
            prompt: { en: "Build: My name is Ahmed.", ar: "كوّن الجملة: اسمي أحمد." },
            tokens: ["зову́т", "Ахме́д", "Меня́"],
            answers: ["Меня́ зову́т Ахме́д."],
            why: { en: "Меня́ зову́т… — literally 'they call me…'.", ar: "Меня́ зову́т… تعني حرفيًا «يدعونني…»." },
          },
          {
            kind: "order",
            prompt: { en: "Build: Where is the metro?", ar: "كوّن السؤال: أين المترو؟" },
            tokens: ["нахо́дится", "метро́", "Где"],
            answers: ["Где нахо́дится метро́?"],
            why: { en: "Где нахо́дится…? — Where is…?", ar: "Где нахо́дится…? تعني «أين يقع…؟»." },
          },
          {
            kind: "order",
            prompt: { en: "Build: I'll take the dark blue shirt.", ar: "كوّن الجملة: سآخذ القميص الأزرق الداكن." },
            tokens: ["си́нюю", "беру́", "руба́шку", "Я"],
            answers: ["Я беру́ си́нюю руба́шку."],
            why: { en: "Feminine accusative on both words: си́нюю руба́шку.", ar: "المؤنّث في حالة المفعول به في الكلمتين: си́нюю руба́шку." },
          },
          {
            kind: "order",
            prompt: { en: "Build: I have a brother and a sister.", ar: "كوّن الجملة: عندي أخ وأخت." },
            tokens: ["есть", "брат", "У", "и", "меня́", "сестра́"],
            answers: ["У меня́ есть брат и сестра́."],
            why: { en: "У меня́ есть… = I have…", ar: "У меня́ есть… تعني «عندي…»." },
          },
        ],
      },
      {
        title: { en: "Translation", ar: "الترجمة" },
        items: [
          {
            kind: "translate",
            prompt: { en: "Nice to meet you.", ar: "تشرّفنا." },
            answers: ["О́чень прия́тно."],
            why: { en: "О́чень прия́тно — literally 'very pleasant'.", ar: "О́чень прия́тно — حرفيًا «لطيف جدًّا»." },
          },
          {
            kind: "translate",
            prompt: { en: "How much is the coffee?", ar: "بكم القهوة؟" },
            answers: ["Ско́лько сто́ит ко́фе?"],
            why: { en: "One thing: Ско́лько сто́ит…?", ar: "عن شيء واحد: Ско́лько сто́ит…?" },
          },
          {
            kind: "translate",
            prompt: { en: "I work in an office.", ar: "أعمل في مكتب." },
            answers: ["Я рабо́таю в о́фисе."],
            why: { en: "в + prepositional: в о́фисе.", ar: "в + حالة حرف الجر: в о́фисе." },
          },
          {
            kind: "translate",
            prompt: { en: "The bill, please.", ar: "الحساب من فضلك." },
            answers: ["Счёт, пожа́луйста."],
            why: { en: "Счёт, пожа́луйста — the bill never comes until you ask.", ar: "Счёт, пожа́луйста — لا يأتي الحساب حتى تطلبه." },
          },
          {
            kind: "translate",
            prompt: { en: "I love you.", ar: "أحبّك." },
            answers: ["Я тебя́ люблю́.", "Я люблю́ тебя́.", "Я вас люблю́.", "Я люблю́ вас."],
            why: { en: "The pronoun usually comes before the verb: Я тебя́ люблю́.", ar: "يأتي الضمير عادةً قبل الفعل: Я тебя́ люблю́." },
          },
        ],
      },
    ],
    speaking: [
      {
        en: "Introduce yourself: your name, where you are from, where you live now and what you do.",
        ar: "عرّف بنفسك: اسمك، ومن أين أنت، وأين تسكن الآن، وماذا تعمل.",
      },
      { en: "Describe your family: who they are, what they do and what they like.", ar: "صف عائلتك: من هم، وماذا يعملون، وماذا يحبّون." },
      {
        en: "Order a meal in a café: a soup or salad, a main dish and a drink; ask for something missing on the table, then for the bill.",
        ar: "اطلب وجبة في مقهى: حساء أو سلطة، وطبقًا رئيسيًّا، ومشروبًا؛ واطلب شيئًا ينقص على المائدة، ثم اطلب الحساب.",
      },
      {
        en: "Buy clothes: say what you want, your size and the colour, ask the price and choose.",
        ar: "اشترِ ملابس: قل ماذا تريد، ومقاسك واللون، واسأل عن السعر ثم اختر.",
      },
      {
        en: "Describe your home and your week: your flat, your district and what you do on each day.",
        ar: "صف بيتك وأسبوعك: شقّتك وحيّك، وماذا تفعل في كل يوم.",
      },
    ],
  },
};

export const WEEK_4: Day[] = [DAY_22, DAY_23, DAY_24, DAY_25, DAY_26, DAY_27, DAY_28];
