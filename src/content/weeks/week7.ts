import type { Day } from "../types.ts";

// Week 7 · People and preferences.
// Written to docs/content-style-guide.md, imitating the Day 4 exemplar in week1.ts.

const DAY_43: Day = {
  n: 43,
  week: 7,
  kind: "lesson",
  title: { ru: "С кем? Твори́тельный паде́ж", en: "With whom? The instrumental", ar: "مع من؟ حالة الأداة" },
  goals: [
    {
      en: "Say who you do things with: с + the instrumental case (с дру́гом, с сестро́й).",
      ar: "أن تقول مع مَن تفعل الأشياء: с + حالة الأداة (с дру́гом، с сестро́й).",
    },
    {
      en: "Use the pronouns со мной, с тобо́й, с ним, с ней, с на́ми, с ва́ми, с ни́ми.",
      ar: "أن تستخدم الضمائر: со мной، с тобо́й، с ним، с ней، с на́ми، с ва́ми، с ни́ми.",
    },
    {
      en: "Order food and drinks that come 'with' something: чай с лимо́ном, бутербро́д с сы́ром.",
      ar: "أن تطلب طعامًا وشرابًا يأتي «مع» شيء آخر: чай с лимо́ном، бутербро́д с сы́ром.",
    },
  ],
  words: [
    {
      id: "d43-01", ru: "с", say: "s", en: "with (+ instrumental); со before мной and before some consonant groups", ar: "مع (+ حالة الأداة)؛ وتصبح со قبل мной وقبل بعض مجموعات الحروف الساكنة", pos: "prep",
      ex: { ru: "Я живу́ с бра́том.", en: "I live with my brother.", ar: "أعيش مع أخي." },
    },
    {
      id: "d43-02", ru: "вме́сте", say: "vmyEstye", en: "together", ar: "معًا", pos: "adv",
      ex: { ru: "Мы всегда́ гуля́ем вме́сте.", en: "We always go for walks together.", ar: "نحن نتنزّه معًا دائمًا." },
    },
    {
      id: "d43-03", ru: "встреча́ться", say: "fstrichAtsa", en: "to meet up (с + instrumental)", ar: "يلتقي بـ (с + حالة الأداة)", pos: "verb",
      forms: "встреча́юсь, встреча́ешься",
      ex: { ru: "В суббо́ту я встреча́юсь с дру́гом.", en: "On Saturday I'm meeting up with a friend.", ar: "يوم السبت ألتقي بصديقي." },
      note: {
        en: "встреча́ть (day 25) means 'to meet someone who arrives' and takes the accusative: встреча́ть бра́та.",
        ar: "встреча́ть (اليوم ٢٥) تعني «يستقبل شخصًا قادمًا» وتأخذ حالة المفعول به: встреча́ть бра́та.",
      },
    },
    {
      id: "d43-04", ru: "знако́миться", say: "znakOmitsa", en: "to get to know, to meet for the first time (с + instrumental)", ar: "يتعرّف إلى (с + حالة الأداة)", pos: "verb",
      forms: "знако́млюсь, знако́мишься",
      ex: { ru: "Знако́мьтесь: э́то мой друг Ахме́д.", en: "Let me introduce my friend Ahmed. (literally: get acquainted, this is…)", ar: "أقدّم لكم صديقي أحمد. (حرفيًا: تعارفوا، هذا…)" },
    },
    {
      id: "d43-05", ru: "разгова́ривать", say: "razgavArivat'", en: "to talk, to have a conversation (с + instrumental)", ar: "يتحدّث، يتحاور (с + حالة الأداة)", pos: "verb",
      forms: "разгова́риваю, разгова́риваешь",
      ex: { ru: "Ве́чером я разгова́риваю с ма́мой по телефо́ну.", en: "In the evening I talk to my mum on the phone.", ar: "في المساء أتحدّث مع أمّي بالهاتف." },
    },
    {
      id: "d43-06", ru: "дружи́ть", say: "druzhIt'", en: "to be friends (с + instrumental)", ar: "يصادق، تجمعه صداقة بـ (с + حالة الأداة)", pos: "verb",
      forms: "дружу́, дру́жишь",
      ex: { ru: "Я дружу́ с Макси́мом.", en: "I'm friends with Maxim.", ar: "أنا صديق مكسيم." },
    },
    {
      id: "d43-07", ru: "танцева́ть", say: "tantsyvAt'", en: "to dance", ar: "يرقص", pos: "verb",
      forms: "танцу́ю, танцу́ешь",
      ex: { ru: "Ты лю́бишь танцева́ть?", en: "Do you like dancing?", ar: "هل تحبّ الرقص؟" },
      note: { en: "-ева- becomes -у- in the present: танцева́ть → я танцу́ю.", ar: "يتحوّل -ева- إلى -у- في المضارع: танцева́ть → я танцу́ю." },
    },
    {
      id: "d43-08", ru: "проводи́ть", say: "pravadIt'", en: "to spend (time)", ar: "يقضي (الوقت)", pos: "verb",
      forms: "провожу́, прово́дишь",
      ex: { ru: "С кем ты прово́дишь выходны́е?", en: "Who do you spend your weekends with?", ar: "مع مَن تقضي عطلة نهاية الأسبوع؟" },
    },
    {
      id: "d43-09", ru: "лимо́н", say: "limOn", en: "lemon", ar: "ليمون", pos: "noun", g: "m",
      ex: { ru: "Я пью чай с лимо́ном.", en: "I drink tea with lemon.", ar: "أشرب الشاي بالليمون." },
    },
    {
      id: "d43-10", ru: "варе́нье", say: "varyEn'ye", en: "jam (whole-fruit preserve)", ar: "مربّى", pos: "noun", g: "n",
      ex: { ru: "Ба́бушка де́лает варе́нье на да́че.", en: "Grandma makes jam at the dacha.", ar: "جدّتي تصنع المربّى في البيت الريفي." },
    },
    {
      id: "d43-11", ru: "моро́женое", say: "marOzhynaye", en: "ice cream", ar: "مثلّجات (آيس كريم)", pos: "noun", g: "n",
      ex: { ru: "Де́ти лю́бят моро́женое.", en: "Children love ice cream.", ar: "الأطفال يحبّون المثلّجات." },
      note: { en: "It changes like an adjective: с моро́женым.", ar: "تتصرّف مثل الصفة: с моро́женым." },
    },
    {
      id: "d43-12", ru: "бутербро́д", say: "buterbrOt", en: "open sandwich (bread with cheese, butter or sausage on top)", ar: "شطيرة مفتوحة (خبز فوقه جبن أو زبدة أو نقانق)", pos: "noun", g: "m",
      ex: { ru: "Я ем бутербро́д с сы́ром.", en: "I'm eating a cheese sandwich.", ar: "آكل شطيرة بالجبن." },
    },
    {
      id: "d43-13", ru: "пиро́г", say: "pirOk", en: "pie (baked, with a filling)", ar: "فطيرة (محشوّة ومخبوزة)", pos: "noun", g: "m",
      forms: "мн. ч. пироги́",
      ex: { ru: "Ма́ма гото́вит пиро́г с мя́сом.", en: "Mum is making a meat pie.", ar: "أمّي تُعِدّ فطيرة باللحم." },
    },
    {
      id: "d43-14", ru: "смета́на", say: "smitAna", en: "sour cream", ar: "قشدة حامضة (سميتانا)", pos: "noun", g: "f",
      ex: { ru: "Я ем суп со смета́ной.", en: "I eat soup with sour cream.", ar: "آكل الحساء بالقشدة الحامضة." },
    },
    {
      id: "d43-15", ru: "согла́сен", say: "saglAsin", en: "agree(d) (said by a man)", ar: "موافق، متّفق (يقولها الرجل)", pos: "adj",
      forms: "согла́сна (f), согла́сны (pl)",
      ex: { ru: "Я с тобо́й согла́сен.", en: "I agree with you.", ar: "أنا متّفق معك." },
      note: { en: "A short adjective: a woman says Я согла́сна.", ar: "صفة قصيرة: المرأة تقول Я согла́сна." },
    },
    {
      id: "d43-16", ru: "С кем?", say: "s kyem?", en: "With whom? Who with?", ar: "مع مَن؟", pos: "phrase",
      ex: { ru: "С кем ты живёшь?", en: "Who do you live with?", ar: "مع مَن تعيش؟" },
    },
    {
      id: "d43-17", ru: "со мной", say: "sa mnOy", en: "with me", ar: "معي", pos: "phrase",
      ex: { ru: "Ты идёшь со мной?", en: "Are you coming with me?", ar: "هل ستأتي معي؟" },
    },
    {
      id: "d43-18", ru: "свобо́дное вре́мя", say: "svabOdnaye vryEmya", en: "free time", ar: "وقت الفراغ", pos: "phrase",
      ex: { ru: "В свобо́дное вре́мя я танцу́ю.", en: "In my free time I dance.", ar: "في وقت فراغي أرقص." },
    },
  ],
  grammar: [
    {
      id: "d43-g1",
      title: { en: "с + instrumental: 'with'", ar: "с + حالة الأداة: «مع»" },
      en: [
        "The instrumental case (твори́тельный паде́ж) answers the questions кем? (with whom?) and чем? (with what?). After the preposition с it means 'with, together with': Я гуля́ю с дру́гом. — I'm out walking with a friend.",
        "Use it for the people you do things with (с ма́мой, с Макси́мом) and for food that comes 'with' something: чай с лимо́ном, ко́фе с молоко́м, бутербро́д с сы́ром.",
        "Verbs of doing things together take с + instrumental: встреча́ться, разгова́ривать, знако́миться, дружи́ть с кем? And a very Russian pattern: мы с бра́том means 'my brother and I'.",
      ],
      ar: [
        "حالة الأداة (твори́тельный паде́ж) تجيب عن السؤالين кем؟ (مع مَن؟) و чем؟ (مع ماذا؟). وبعد حرف الجر с تعني «مع، بصحبة»: Я гуля́ю с дру́гом. — أتنزّه مع صديقي.",
        "استخدمها مع الأشخاص الذين تفعل معهم شيئًا (с ма́мой، с Макси́мом)، ومع الطعام الذي يأتي «مع» شيء آخر: чай с лимо́ном، ко́фе с молоко́м، бутербро́д с сы́ром.",
        "أفعال المشاركة تأخذ с + حالة الأداة: встреча́ться، разгова́ривать، знако́миться، дружи́ть с кем؟ وهناك تركيب روسي شائع جدًّا: мы с бра́том ومعناه «أنا وأخي».",
      ],
      examples: [
        { ru: "Я живу́ в Москве́ с бра́том.", en: "I live in Moscow with my brother.", ar: "أعيش في موسكو مع أخي." },
        { ru: "Ко́фе с молоко́м, пожа́луйста.", en: "A coffee with milk, please.", ar: "قهوة بالحليب من فضلك." },
        { ru: "Мы с А́нной ча́сто разгова́риваем по-ру́сски.", en: "Anna and I often talk in Russian.", ar: "أنا وآنا نتحدّث بالروسية كثيرًا." },
      ],
    },
    {
      id: "d43-g2",
      title: { en: "Instrumental endings: -ом / -ем, -ой / -ей", ar: "نهايات حالة الأداة: -ом / -ем، -ой / -ей" },
      en: [
        "Masculine and neuter nouns add -ом: брат → с бра́том, молоко́ → с молоко́м. After a soft sign or -й, and in neuter nouns in -е, the ending is -ем: учи́тель → с учи́телем, Серге́й → с Серге́ем, варе́нье → с варе́ньем.",
        "Feminine nouns change -а to -ой and -я to -ей: сестра́ → с сестро́й, Та́ня → с Та́ней. Feminine nouns in -ь take -ью: дочь → с до́черью, мать → с ма́терью (with an extra -ер-).",
        "Spelling trap: after ж, ш, ч, щ and ц an unstressed о is written е: муж → с му́жем, Ма́ша → с Ма́шей, but оте́ц → с отцо́м (stressed). In the plural the ending is -ами / -ями: с роди́телями, с друзья́ми.",
      ],
      ar: [
        "الأسماء المذكّرة والمحايدة تضيف -ом: брат → с бра́том، молоко́ → с молоко́м. وبعد العلامة اللينة أو -й، وفي المحايد المنتهي بـ -е، تكون النهاية -ем: учи́тель → с учи́телем، Серге́й → с Серге́ем، варе́нье → с варе́ньем.",
        "الأسماء المؤنّثة تحوّل -а إلى -ой و -я إلى -ей: сестра́ → с сестро́й، Та́ня → с Та́ней. والمؤنّثة المنتهية بـ -ь تأخذ -ью: дочь → с до́черью، мать → с ма́терью (مع إضافة -ер-).",
        "فخّ إملائي: بعد ж و ш و ч و щ و ц تُكتب о غير المنبورة е: муж → с му́жем، Ма́ша → с Ма́шей، لكن оте́ц → с отцо́м (لأنها منبورة). وفي الجمع تكون النهاية -ами / -ями: с роди́телями، с друзья́ми.",
      ],
      tables: [
        {
          caption: { en: "The instrumental after с", ar: "حالة الأداة بعد с" },
          head: ["Gender · الجنس", "Nominative · حالة الرفع", "с + instrumental · с + حالة الأداة", "Ending · النهاية"],
          rows: [
            ["m · مذكّر", "брат", "с бра́том", "-ом"],
            ["m · مذكّر", "учи́тель", "с учи́телем", "-ем"],
            ["n · محايد", "молоко́", "с молоко́м", "-ом"],
            ["n · محايد", "варе́нье", "с варе́ньем", "-ем"],
            ["f · مؤنّث", "сестра́", "с сестро́й", "-ой"],
            ["f · مؤنّث", "Та́ня", "с Та́ней", "-ей"],
            ["f · مؤنّث", "дочь", "с до́черью", "-ью"],
            ["pl · جمع", "роди́тели", "с роди́телями", "-ами / -ями"],
          ],
        },
      ],
      examples: [
        { ru: "Я разгова́риваю с учи́телем.", en: "I'm talking to the teacher.", ar: "أتحدّث مع المعلّم." },
        { ru: "Он живёт с жено́й и до́черью.", en: "He lives with his wife and daughter.", ar: "يعيش مع زوجته وابنته." },
        { ru: "Та́ня гуля́ет с соба́кой.", en: "Tanya is out walking the dog.", ar: "تانيا تتنزّه مع كلبها." },
      ],
    },
    {
      id: "d43-g3",
      title: { en: "Pronouns: со мной, с тобо́й, с ним…", ar: "الضمائر: со мной، с тобо́й، с ним…" },
      en: [
        "Personal pronouns have their own instrumental forms: со мной, с тобо́й, с ним, с ней, с на́ми, с ва́ми, с ни́ми. The question words are кем (with whom) and чем (with what).",
        "After a preposition он, она́ and они́ start with н-: с ним, с ней, с ни́ми. And с becomes со before мной: со мной.",
        "Two chunks worth learning today: Я с тобо́й согла́сен (a woman: согла́сна). — I agree with you. С удово́льствием! — With pleasure!",
      ],
      ar: [
        "للضمائر الشخصية صيغ خاصة في حالة الأداة: со мной، с тобо́й، с ним، с ней، с на́ми، с ва́ми، с ни́ми. وأداتا الاستفهام هما кем (مع مَن) و чем (مع ماذا).",
        "بعد حرف الجر تبدأ الضمائر он و она́ و они́ بحرف н-: с ним، с ней، с ни́ми. ويصبح حرف الجر с بصيغة со قبل мной: со мной.",
        "عبارتان تستحقّان الحفظ اليوم: Я с тобо́й согла́сен (والمرأة تقول: согла́сна). — أنا متّفق معك. С удово́льствием! — بكلّ سرور!",
      ],
      tables: [
        {
          caption: { en: "Pronouns with с", ar: "الضمائر مع с" },
          head: ["Nominative · حالة الرفع", "с + instrumental · с + حالة الأداة"],
          rows: [
            ["я", "со мной"],
            ["ты", "с тобо́й"],
            ["он / оно́", "с ним"],
            ["она́", "с ней"],
            ["мы", "с на́ми"],
            ["вы", "с ва́ми"],
            ["они́", "с ни́ми"],
            ["кто? / что?", "с кем? / с чем?"],
          ],
        },
      ],
      examples: [
        { ru: "Макси́м, ты игра́ешь в футбо́л с на́ми?", en: "Maxim, are you playing football with us?", ar: "مكسيم، هل تلعب كرة القدم معنا؟" },
        { ru: "— С кем ты живёшь? — С сестро́й. Я живу́ с ней в це́нтре.", en: "— Who do you live with? — With my sister. I live with her in the centre.", ar: "— مع مَن تعيش؟ — مع أختي. أعيش معها في وسط المدينة." },
        { ru: "Я с тобо́й согла́сна.", en: "I agree with you. (a woman speaking)", ar: "أنا متّفقة معك. (تقولها امرأة)" },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Чай с лимо́ном", en: "Tea with lemon", ar: "شاي بالليمون" },
    setting: {
      en: "Saturday afternoon. Ahmed meets Anna in a small café in the centre of Moscow, and a waiter comes to take their order.",
      ar: "بعد ظهر يوم السبت. يلتقي أحمد بآنا في مقهى صغير في وسط موسكو، ويأتي النادل ليأخذ طلبهما.",
    },
    lines: [
      { who: "A", name: "Ахме́д", ru: "Приве́т, А́нна! А где Макси́м? Он не с тобо́й?", en: "Hi, Anna! Where's Maxim? Isn't he with you?", ar: "مرحبًا يا آنا! وأين مكسيم؟ أليس معكِ؟" },
      { who: "B", name: "А́нна", ru: "Нет, сего́дня он встреча́ется с колле́гой. Они́ вме́сте игра́ют в футбо́л.", en: "No, today he's meeting a colleague. They play football together.", ar: "لا، اليوم يلتقي بزميله. إنهما يلعبان كرة القدم معًا." },
      { who: "A", name: "Официа́нт", ru: "Здра́вствуйте! Что вы бу́дете?", en: "Hello! What will you have?", ar: "مرحبًا! ماذا تطلبان؟" },
      { who: "B", name: "А́нна", ru: "Чай с лимо́ном и варе́нье, пожа́луйста.", en: "Tea with lemon and some jam, please.", ar: "شاي بالليمون ومربّى من فضلك." },
      { who: "A", name: "Ахме́д", ru: "А я бу́ду ко́фе с молоко́м и бутербро́д с сы́ром.", en: "And I'll have a coffee with milk and a cheese sandwich.", ar: "وأنا سآخذ قهوة بالحليب وشطيرة بالجبن." },
      { who: "A", name: "Официа́нт", ru: "Хорошо́. А пиро́г? У нас сего́дня пиро́г с мя́сом.", en: "Fine. And some pie? Today we have meat pie.", ar: "حسنًا. وماذا عن الفطيرة؟ لدينا اليوم فطيرة باللحم." },
      { who: "A", name: "Ахме́д", ru: "Да, с удово́льствием!", en: "Yes, I'd love some!", ar: "نعم، بكلّ سرور!" },
      { who: "B", name: "А́нна", ru: "Ахме́д, а с кем ты прово́дишь свобо́дное вре́мя в Москве́?", en: "Ahmed, who do you spend your free time with in Moscow?", ar: "أحمد، مع مَن تقضي وقت فراغك في موسكو؟" },
      {
        who: "A", name: "Ахме́д", ru: "С Макси́мом: мы с ним ча́сто гуля́ем. А ве́чером я разгова́риваю с ма́мой по телефо́ну.",
        en: "With Maxim: he and I often go for walks. And in the evening I talk to my mum on the phone.",
        ar: "مع مكسيم: أنا وهو نتنزّه كثيرًا. وفي المساء أتحدّث مع أمّي بالهاتف.",
      },
      { who: "B", name: "А́нна", ru: "А я ка́ждую суббо́ту танцу́ю с подру́гой. Хо́чешь танцева́ть с на́ми?", en: "And every Saturday I dance with a friend. Do you want to dance with us?", ar: "وأنا أرقص مع صديقتي كلّ يوم سبت. هل تريد أن ترقص معنا؟" },
      { who: "A", name: "Ахме́д", ru: "Согла́сен! Но я танцу́ю о́чень пло́хо.", en: "Deal! But I dance really badly.", ar: "موافق! لكنّني أرقص بشكل سيّئ جدًّا." },
      { who: "B", name: "А́нна", ru: "Ничего́! Бу́дешь танцева́ть со мной.", en: "Never mind! You'll dance with me.", ar: "لا بأس! سترقص معي." },
    ],
  },
  pronunciation: {
    title: { en: "с sticks to the next word", ar: "حرف الجر с يلتصق بالكلمة التالية" },
    en: [
      "A one-letter preposition has no vowel, so you say it together with the next word, as one word: с дру́гом sounds like zdrUgam.",
      "Before б, г, д or з, с turns into a 'z' sound: с бра́том → zbrAtam. Before a vowel or м, н, л, р it stays 's': с ма́мой → smAmay. Before another с you hear one long s: с сестро́й → ssistrOy.",
    ],
    ar: [
      "حرف الجر المكوَّن من حرف واحد لا يحتوي على حرف صوتي، لذلك تنطقه مع الكلمة التالية ككلمة واحدة: с дру́гом تُنطق zdrUgam.",
      "قبل الحروف б و г و д و з يتحوّل с إلى صوت «ز»: с бра́том → zbrAtam. وقبل الحرف الصوتي أو м، н، л، р يبقى «س»: с ма́мой → smAmay. وقبل с أخرى تسمع «س» واحدة طويلة: с сестро́й → ssistrOy.",
    ],
    drills: [
      { ru: "с дру́гом", say: "zdrUgam", focus: { en: "с before д sounds like z: say it as one word.", ar: "с قبل д تُنطق «ز»: انطقها ككلمة واحدة." } },
      { ru: "с бра́том", say: "zbrAtam", focus: { en: "z before б; the ending -ом is a short 'am'.", ar: "«ز» قبل б، والنهاية -ом تُنطق «ام» قصيرة." } },
      { ru: "с ма́мой", say: "smAmay", focus: { en: "Before м the s stays s.", ar: "قبل м يبقى الصوت «س»." } },
      { ru: "с сестро́й", say: "ssistrOy", focus: { en: "Two s sounds merge into one long s.", ar: "يندمج صوتا «س» في «س» واحدة طويلة." } },
      { ru: "со мной", say: "samnOy", focus: { en: "со is unstressed and sounds like 'sa'; the stress is on мной.", ar: "со غير منبورة وتُنطق «سا»، والنبر على мной." } },
      { ru: "С удово́льствием!", say: "s udavOl'stviyem!", focus: { en: "One long word with one stress, on -во-, and a soft л.", ar: "كلمة طويلة بنبر واحد على -во-، مع л لينة." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the right form: tea with lemon.", ar: "اختر الصيغة الصحيحة: شاي بالليمون." },
      options: ["чай с лимо́н", "чай с лимо́ном", "чай с лимо́ной"],
      answer: 1,
      why: { en: "лимо́н is masculine, so it takes -ом in the instrumental.", ar: "лимо́н مذكّر، فيأخذ -ом في حالة الأداة." },
    },
    {
      kind: "choice",
      prompt: { en: "Which form means 'with my sister'?", ar: "أيّ صيغة تعني «مع أختي»؟" },
      options: ["с сестра́", "с сестру́", "с сестро́й", "с сестры́"],
      answer: 2,
      why: { en: "Feminine -а becomes -ой after с.", ar: "المؤنّث المنتهي بـ -а يصبح -ой بعد с." },
    },
    {
      kind: "choice",
      prompt: { en: "'With him' — which is correct?", ar: "«معه» — أيّها صحيح؟" },
      options: ["с он", "с им", "с ним"],
      answer: 2,
      why: { en: "After a preposition the pronoun gets н-: с ним.", ar: "بعد حرف الجر يأخذ الضمير н-: с ним." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with брат in the instrumental.", ar: "أكمل بكلمة брат في حالة الأداة." },
      ru: "Я живу́ с ___.",
      answers: ["бра́том"],
      why: { en: "Masculine nouns add -ом: брат → бра́том.", ar: "الأسماء المذكّرة تضيف -ом: брат → бра́том." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with соба́ка in the instrumental.", ar: "أكمل بكلمة соба́ка في حالة الأداة." },
      ru: "Та́ня гуля́ет с ___.",
      answers: ["соба́кой"],
      why: { en: "-а becomes -ой: соба́ка → соба́кой.", ar: "-а تصبح -ой: соба́ка → соба́кой." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with учи́тель in the instrumental.", ar: "أكمل بكلمة учи́тель في حالة الأداة." },
      ru: "Я разгова́риваю с ___.",
      answers: ["учи́телем"],
      why: { en: "After a soft sign the ending is -ем.", ar: "بعد العلامة اللينة تكون النهاية -ем." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Are you coming with me?", ar: "أكمل: هل ستأتي معي؟" },
      ru: "Ты идёшь со ___?",
      answers: ["мной"],
      why: { en: "The instrumental of я is мной, and с becomes со before it.", ar: "صيغة я في حالة الأداة هي мной، ويصبح с قبلها со." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with она́ in the instrumental.", ar: "أكمل بالضمير она́ في حالة الأداة." },
      ru: "А́нна — моя́ подру́га. Я ча́сто встреча́юсь с ___.",
      answers: ["ней"],
      why: { en: "она́ → с ней: the н- appears after a preposition.", ar: "она́ → с ней: يظهر н- بعد حرف الجر." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I'm friends with Maxim.", ar: "كوّن الجملة: أنا صديق مكسيم." },
      tokens: ["Макси́мом", "дружу́", "Я", "с"],
      answers: ["Я дружу́ с Макси́мом."],
      why: { en: "дружи́ть с + instrumental: to be friends with someone.", ar: "дружи́ть с + حالة الأداة: يصادق شخصًا." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: Anna and I often talk in Russian.", ar: "كوّن الجملة: أنا وآنا نتحدّث بالروسية كثيرًا." },
      tokens: ["с", "по-ру́сски", "Мы", "ча́сто", "разгова́риваем", "А́нной"],
      answers: ["Мы с А́нной ча́сто разгова́риваем по-ру́сски.", "Ча́сто мы с А́нной разгова́риваем по-ру́сски."],
      why: { en: "Мы с А́нной means 'Anna and I' (literally: we with Anna).", ar: "Мы с А́нной تعني «أنا وآنا» (حرفيًا: نحن مع آنا)." },
    },
    {
      kind: "translate",
      prompt: { en: "I agree with you. (a man speaking to a friend)", ar: "أنا متّفق معك. (يقولها رجل لصديقه)" },
      answers: ["Я с тобо́й согла́сен.", "Я согла́сен с тобо́й.", "Согла́сен с тобо́й."],
      why: { en: "согла́сен + с + instrumental; a woman says согла́сна.", ar: "согла́сен + с + حالة الأداة، والمرأة تقول согла́сна." },
    },
    {
      kind: "translate",
      prompt: { en: "A coffee with milk, please.", ar: "قهوة بالحليب من فضلك." },
      answers: ["Ко́фе с молоко́м, пожа́луйста.", "Пожа́луйста, ко́фе с молоко́м.", "Мо́жно ко́фе с молоко́м?"],
      why: { en: "молоко́ → с молоко́м: neuter -о becomes -ом.", ar: "молоко́ → с молоко́м: المحايد المنتهي بـ -о يصبح -ом." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the person answer?", ar: "استمع. بماذا يجيب الشخص؟" },
      ru: "С удово́льствием!",
      listen: true,
      options: ["With pleasure! · بكلّ سرور!", "With whom? · مع مَن؟", "With sugar? · بالسكّر؟"],
      answer: 0,
      why: { en: "С удово́льствием! is a happy 'yes' to an offer or an invitation.", ar: "С удово́льствием! موافقة سعيدة على عرض أو دعوة." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Who is the speaker meeting on Saturday?", ar: "استمع. بمن سيلتقي المتكلّم يوم السبت؟" },
      ru: "В суббо́ту я встреча́юсь с подру́гой.",
      listen: true,
      options: ["a brother · أخ", "a (female) friend · صديقة", "a colleague · زميل"],
      answer: 1,
      why: { en: "подру́гой is the instrumental of подру́га, a female friend.", ar: "подру́гой هي صيغة حالة الأداة من подру́га، أي صديقة." },
    },
  ],
  topics: ["instrumental", "food", "cafe"],
  search: ["Russian instrumental case with с explained", "Russian instrumental pronouns со мной с тобой", "Russian tea with jam варенье tradition"],
  speaking: {
    scenario: {
      en: "A Saturday in Moscow. Tell the tutor who you spend your free time with and what you do together. Then the tutor becomes a waiter: order tea with lemon and jam and a sandwich.",
      ar: "يوم سبت في موسكو. أخبر المعلّم مع مَن تقضي وقت فراغك وماذا تفعلان معًا. ثم يصبح المعلّم نادلًا: اطلب شايًا بالليمون مع مربّى وشطيرة.",
    },
    tutorBrief:
      "First play Anna (Анна), a friendly Moscow student chatting with the learner in a cafe. Ask who they spend their free time with and what they do together: С кем ты проводишь свободное время? С кем ты живёшь? С кем ты часто разговариваешь по телефону? С кем ты дружишь? Push for answers with с + instrumental (с братом, с сестрой, с другом, с мамой, со мной, с ним, с ней) and the pattern мы с братом. Then switch to a waiter (Официант) and let the learner order tea with lemon and jam and a sandwich; ask С сахаром? С молоком? С сыром или с мясом? If an ending is wrong (с сестра), repeat the correct form naturally (А, с сестрой!) and let them say it again. Finish by inviting them to dance on Saturday so they can answer С удовольствием! or Согласен / Согласна!",
    prompts: [
      { ru: "В свобо́дное вре́мя я встреча́юсь с дру́гом.", en: "In my free time I meet up with a friend.", ar: "في وقت فراغي ألتقي بصديقي." },
      { ru: "Я живу́ с бра́том, а по телефо́ну разгова́риваю с ма́мой.", en: "I live with my brother, and I talk to my mum on the phone.", ar: "أعيش مع أخي، وأتحدّث مع أمّي بالهاتف." },
      { ru: "Чай с лимо́ном и варе́нье, пожа́луйста.", en: "Tea with lemon and some jam, please.", ar: "شاي بالليمون ومربّى من فضلك." },
      { ru: "И бутербро́д с сы́ром.", en: "And a cheese sandwich.", ar: "وشطيرة بالجبن." },
      { ru: "С удово́льствием!", en: "With pleasure!", ar: "بكلّ سرور!" },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about the people in your life: who you live with, who you meet at the weekend, who you talk to on the phone, and what you like to eat or drink 'with' something (Я пью чай с…).",
    ar: "اكتب من ٥ إلى ٨ جمل عن الأشخاص في حياتك: مع مَن تعيش، وبمن تلتقي في عطلة نهاية الأسبوع، ومع مَن تتحدّث بالهاتف، وماذا تحبّ أن تأكل أو تشرب «مع» شيء آخر (Я пью чай с…).",
  },
  culture: {
    en: "Russians drink a lot of black tea, often with lemon, and serve it with homemade jam (варе́нье) in small glass dishes — you eat the jam with a spoon between sips. Pies (пироги́) with meat, fish, cabbage or apples are the traditional treat when guests come.",
    ar: "يشرب الروس كثيرًا من الشاي الأسود، غالبًا بالليمون، ويقدّمونه مع مربّى منزلي (варе́нье) في أطباق زجاجية صغيرة، فيؤكل المربّى بالملعقة بين رشفات الشاي. أمّا الفطائر (пироги́) باللحم أو السمك أو الملفوف أو التفاح فهي الضيافة التقليدية عند قدوم الضيوف.",
  },
};

const DAY_44: Day = {
  n: 44,
  week: 7,
  kind: "lesson",
  title: { ru: "Кем ты рабо́таешь?", en: "What do you do? The instrumental 2", ar: "ما عملك؟ حالة الأداة (٢)" },
  goals: [
    {
      en: "Say what you do for a living and what you want to become: Я рабо́таю инжене́ром. Я хочу́ стать врачо́м.",
      ar: "أن تقول ما عملك وماذا تريد أن تصبح: Я рабо́таю инжене́ром. Я хочу́ стать врачо́м.",
    },
    {
      en: "Talk about hobbies with занима́ться, интересова́ться and увлека́ться + the instrumental.",
      ar: "أن تتحدّث عن هواياتك باستخدام занима́ться و интересова́ться و увлека́ться + حالة الأداة.",
    },
    {
      en: "Ask other people: Кем ты рабо́таешь? Чем ты занима́ешься?",
      ar: "أن تسأل الآخرين: Кем ты рабо́таешь؟ Чем ты занима́ешься؟",
    },
  ],
  words: [
    {
      id: "d44-01", ru: "стать", say: "stat'", en: "to become (+ instrumental)", ar: "يصبح (+ حالة الأداة)", pos: "verb",
      forms: "ста́ну, ста́нешь; стал, ста́ла",
      ex: { ru: "Я хочу́ стать врачо́м.", en: "I want to become a doctor.", ar: "أريد أن أصبح طبيبًا." },
      note: { en: "A perfective verb: я ста́ну means 'I will become'.", ar: "فعل تام: я ста́ну تعني «سأصبح»." },
    },
    {
      id: "d44-02", ru: "интересова́ться", say: "intirisavAtsa", en: "to be interested in (+ instrumental)", ar: "يهتمّ بـ (+ حالة الأداة)", pos: "verb",
      forms: "интересу́юсь, интересу́ешься",
      ex: { ru: "Я интересу́юсь му́зыкой.", en: "I'm interested in music.", ar: "أنا مهتمّ بالموسيقى." },
    },
    {
      id: "d44-03", ru: "увлека́ться", say: "uvlikAtsa", en: "to be keen on, to be into (+ instrumental)", ar: "يهوى، يولع بـ (+ حالة الأداة)", pos: "verb",
      forms: "увлека́юсь, увлека́ешься",
      ex: { ru: "Макси́м увлека́ется футбо́лом.", en: "Maxim is into football.", ar: "مكسيم مولع بكرة القدم." },
    },
    {
      id: "d44-04", ru: "хо́бби", say: "khObbi", en: "hobby", ar: "هواية", pos: "noun", g: "n",
      ex: { ru: "Како́е у тебя́ хо́бби?", en: "What's your hobby?", ar: "ما هوايتك؟" },
      note: { en: "It never changes its ending: с хо́бби, о хо́бби.", ar: "لا تتغيّر نهايتها أبدًا: с хо́бби، о хо́бби." },
    },
    {
      id: "d44-05", ru: "жи́вопись", say: "zhIvapis'", en: "painting (the art)", ar: "فنّ الرسم (التصوير)", pos: "noun", g: "f",
      ex: { ru: "Я люблю́ ру́сскую жи́вопись.", en: "I love Russian painting.", ar: "أحبّ فنّ الرسم الروسي." },
    },
    {
      id: "d44-06", ru: "пла́вание", say: "plAvaniye", en: "swimming", ar: "السباحة", pos: "noun", g: "n",
      ex: { ru: "Я занима́юсь пла́ванием.", en: "I go swimming. (literally: I do swimming)", ar: "أمارس السباحة." },
    },
    {
      id: "d44-07", ru: "программи́ст", say: "pragramIst", en: "programmer", ar: "مبرمج", pos: "noun", g: "m",
      ex: { ru: "Макси́м рабо́тает программи́стом.", en: "Maxim works as a programmer.", ar: "يعمل مكسيم مبرمجًا." },
    },
    {
      id: "d44-08", ru: "ме́неджер", say: "mEnedzher", en: "manager", ar: "مدير، مسؤول إداري", pos: "noun", g: "m",
      ex: { ru: "Мой брат — ме́неджер в ба́нке.", en: "My brother is a manager at a bank.", ar: "أخي مدير في بنك." },
      note: { en: "Every е here is said like э: mEnedzher.", ar: "كل е في هذه الكلمة تُنطق مثل э: mEnedzher." },
    },
    {
      id: "d44-09", ru: "бухга́лтер", say: "bugAltir", en: "accountant", ar: "محاسب", pos: "noun", g: "m",
      ex: { ru: "Моя́ ма́ма рабо́тает бухга́лтером.", en: "My mum works as an accountant.", ar: "تعمل أمّي محاسبة." },
      note: {
        en: "The х is silent: bugAltir. Many job words stay masculine for women: Она́ бухга́лтер.",
        ar: "حرف х لا يُنطق: bugAltir. وكثير من أسماء المهن تبقى مذكّرة حتى للنساء: Она́ бухга́лтер.",
      },
    },
    {
      id: "d44-10", ru: "юри́ст", say: "yurIst", en: "lawyer", ar: "محامٍ، حقوقي", pos: "noun", g: "m",
      ex: { ru: "Она́ хо́чет стать юри́стом.", en: "She wants to become a lawyer.", ar: "تريد أن تصبح محامية." },
    },
    {
      id: "d44-11", ru: "води́тель", say: "vadItil'", en: "driver", ar: "سائق", pos: "noun", g: "m",
      ex: { ru: "Он рабо́тает води́телем авто́буса.", en: "He works as a bus driver.", ar: "يعمل سائق حافلة." },
    },
    {
      id: "d44-12", ru: "по́вар", say: "pOvar", en: "cook, chef", ar: "طاهٍ، طبّاخ", pos: "noun", g: "m",
      forms: "мн. ч. повара́",
      ex: { ru: "Мой па́па — хоро́ший по́вар.", en: "My dad is a good cook.", ar: "أبي طبّاخ ماهر." },
    },
    {
      id: "d44-13", ru: "продаве́ц", say: "pradavyEts", en: "shop assistant, seller", ar: "بائع", pos: "noun", g: "m",
      forms: "продавца́; мн. ч. продавцы́",
      ex: { ru: "Она́ рабо́тает продавцо́м в магази́не.", en: "She works as a shop assistant.", ar: "تعمل بائعة في متجر." },
      note: {
        en: "The е drops out in the other forms: продаве́ц → продавцо́м. A woman is also called продавщи́ца.",
        ar: "يسقط حرف е في الصيغ الأخرى: продаве́ц → продавцо́м. وتُسمّى المرأة أيضًا продавщи́ца.",
      },
    },
    {
      id: "d44-14", ru: "мечта́", say: "michtA", en: "dream (a wish for the future)", ar: "حُلم (أمنية)", pos: "noun", g: "f",
      ex: { ru: "Моя́ мечта́ — стать по́варом.", en: "My dream is to become a chef.", ar: "حلمي أن أصبح طاهيًا." },
      note: { en: "The verb is мечта́ть (day 19). A dream in your sleep is сон.", ar: "الفعل هو мечта́ть (اليوم ١٩). أمّا الحلم أثناء النوم فهو сон." },
    },
    {
      id: "d44-15", ru: "рисова́ть", say: "risavAt'", en: "to draw, to paint", ar: "يرسم", pos: "verb",
      forms: "рису́ю, рису́ешь",
      ex: { ru: "Моя́ сестра́ хорошо́ рису́ет.", en: "My sister draws well.", ar: "أختي ترسم جيدًا." },
    },
    {
      id: "d44-16", ru: "ша́хматы", say: "shAkhmaty", en: "chess", ar: "الشطرنج", pos: "noun", g: "pl",
      ex: { ru: "Ты игра́ешь в ша́хматы?", en: "Do you play chess?", ar: "هل تلعب الشطرنج؟" },
    },
    {
      id: "d44-17", ru: "Кем ты рабо́таешь?", say: "kyem ty rabOtayish?", en: "What do you do (for a living)? (informal)", ar: "ما عملك؟ (غير رسمي)", pos: "phrase",
      note: { en: "Formal: Кем вы рабо́таете?", ar: "بصيغة رسمية: Кем вы рабо́таете؟" },
    },
    {
      id: "d44-18", ru: "Чем ты занима́ешься?", say: "chem ty zanimAyishsya?", en: "What do you do? (your job, studies or hobby)", ar: "بماذا تنشغل؟ (عملك أو دراستك أو هوايتك)", pos: "phrase",
      ex: {
        ru: "— Чем ты занима́ешься в свобо́дное вре́мя? — Я занима́юсь спо́ртом.",
        en: "— What do you do in your free time? — I do sport.",
        ar: "— ماذا تفعل في وقت فراغك؟ — أمارس الرياضة.",
      },
    },
  ],
  grammar: [
    {
      id: "d44-g1",
      title: { en: "Кем? Jobs with рабо́тать, быть and стать", ar: "Кем؟ المهن مع рабо́тать و быть و стать" },
      en: [
        "To say what you work as, put the job in the instrumental after рабо́тать: Я рабо́таю инжене́ром. Она́ рабо́тает врачо́м. The question is Кем ты рабо́таешь? (кем is the instrumental of кто).",
        "The instrumental also follows стать (to become) and быть in the past, the future and the infinitive: Он был студе́нтом. Я бу́ду по́варом. Я хочу́ стать юри́стом.",
        "In the present there is no 'to be', so the job stays in the nominative: Мой брат — программи́ст. Both sentences are correct: Мой брат — программи́ст. = Мой брат рабо́тает программи́стом.",
      ],
      ar: [
        "لتقول ما عملك ضع اسم المهنة في حالة الأداة بعد рабо́тать: Я рабо́таю инжене́ром. Она́ рабо́тает врачо́м. والسؤال هو Кем ты рабо́таешь؟ (кем هي صيغة кто في حالة الأداة).",
        "وتأتي حالة الأداة أيضًا بعد стать (يصبح) وبعد быть في الماضي والمستقبل والمصدر: Он был студе́нтом. Я бу́ду по́варом. Я хочу́ стать юри́стом.",
        "في الزمن الحاضر لا يوجد فعل «يكون»، فتبقى المهنة في حالة الرفع: Мой брат — программи́ст. والجملتان صحيحتان: Мой брат — программи́ст. = Мой брат рабо́тает программи́стом.",
      ],
      tables: [
        {
          caption: { en: "Jobs in the instrumental", ar: "المهن في حالة الأداة" },
          head: ["Nominative · حالة الرفع", "Instrumental · حالة الأداة", "Example · مثال"],
          rows: [
            ["врач", "врачо́м", "Он рабо́тает врачо́м."],
            ["инжене́р", "инжене́ром", "Я рабо́таю инжене́ром."],
            ["учи́тель", "учи́телем", "Я хочу́ стать учи́телем."],
            ["по́вар", "по́варом", "Он был по́варом."],
            ["продаве́ц", "продавцо́м", "Она́ рабо́тает продавцо́м."],
            ["студе́нт", "студе́нтом", "Я бу́ду студе́нтом."],
          ],
        },
      ],
      examples: [
        { ru: "— Кем вы рабо́таете? — Я рабо́таю бухга́лтером.", en: "— What do you do? — I work as an accountant.", ar: "— ما عملك؟ — أعمل محاسبًا." },
        { ru: "Ра́ньше он был води́телем, а сейча́с он ме́неджер.", en: "He used to be a driver, and now he is a manager.", ar: "كان سائقًا في السابق، أمّا الآن فهو مدير." },
        { ru: "Кем ты хо́чешь стать?", en: "What do you want to be?", ar: "ماذا تريد أن تصبح؟" },
      ],
    },
    {
      id: "d44-g2",
      title: { en: "Hobbies: занима́ться, интересова́ться, увлека́ться + instrumental", ar: "الهوايات: занима́ться و интересова́ться و увлека́ться + حالة الأداة" },
      en: [
        "Three verbs about how you spend your time take the instrumental: занима́ться (to do, to practise, to study), интересова́ться (to be interested in) and увлека́ться (to be keen on).",
        "Use занима́ться for activities: спо́ртом, пла́ванием, му́зыкой. Use интересова́ться and увлека́ться for interests: Я интересу́юсь жи́вописью. Он увлека́ется ша́хматами. The question is Чем ты занима́ешься?",
        "An adjective before the noun takes -ым / -им (masculine, neuter) or -ой (feminine): Я занима́юсь ру́сским языко́м. In интересова́ться, -ова- becomes -у- in the present: я интересу́юсь, ты интересу́ешься.",
      ],
      ar: [
        "ثلاثة أفعال عن طريقة قضاء الوقت تأخذ حالة الأداة: занима́ться (يمارس، يتدرّب، يدرس)، و интересова́ться (يهتمّ بـ)، و увлека́ться (يولع بـ).",
        "استخدم занима́ться للأنشطة: спо́ртом، пла́ванием، му́зыкой. واستخدم интересова́ться و увлека́ться للاهتمامات: Я интересу́юсь жи́вописью. Он увлека́ется ша́хматами. والسؤال هو Чем ты занима́ешься؟",
        "الصفة التي تسبق الاسم تأخذ -ым / -им (للمذكّر والمحايد) أو -ой (للمؤنّث): Я занима́юсь ру́сским языко́м. وفي интересова́ться يتحوّل -ова- إلى -у- في المضارع: я интересу́юсь، ты интересу́ешься.",
      ],
      tables: [
        {
          caption: { en: "интересова́ться in the present", ar: "تصريف интересова́ться في المضارع" },
          head: ["Person · الشخص", "Form · الصيغة"],
          rows: [
            ["я", "интересу́юсь"],
            ["ты", "интересу́ешься"],
            ["он / она́", "интересу́ется"],
            ["мы", "интересу́емся"],
            ["вы", "интересу́етесь"],
            ["они́", "интересу́ются"],
          ],
        },
      ],
      examples: [
        { ru: "Я занима́юсь ру́сским языко́м ка́ждый день.", en: "I study Russian every day.", ar: "أدرس اللغة الروسية كلّ يوم." },
        { ru: "— Чем ты интересу́ешься? — Жи́вописью и му́зыкой.", en: "— What are you interested in? — Painting and music.", ar: "— بماذا تهتمّ؟ — بفنّ الرسم والموسيقى." },
        { ru: "Мой брат увлека́ется ша́хматами.", en: "My brother is into chess.", ar: "أخي مولع بالشطرنج." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Моя́ мечта́", en: "My dream", ar: "حلمي" },
    setting: {
      en: "After class, Ahmed chats with his teacher, Olga Petrovna, about work, hobbies and dreams.",
      ar: "بعد الدرس يتحدّث أحمد مع معلّمته أولغا بتروفنا عن العمل والهوايات والأحلام.",
    },
    lines: [
      { who: "B", name: "О́льга Петро́вна", ru: "Ахме́д, а кем вы рабо́таете в Каи́ре?", en: "Ahmed, what do you do in Cairo?", ar: "أحمد، ما عملك في القاهرة؟" },
      { who: "A", name: "Ахме́д", ru: "Я инжене́р. Но сейча́с я студе́нт: я занима́юсь ру́сским языко́м.", en: "I'm an engineer. But right now I'm a student: I'm studying Russian.", ar: "أنا مهندس، لكنّني الآن طالب: أدرس اللغة الروسية." },
      { who: "B", name: "О́льга Петро́вна", ru: "А чем вы занима́етесь в свобо́дное вре́мя?", en: "And what do you do in your free time?", ar: "وماذا تفعل في وقت فراغك؟" },
      {
        who: "A", name: "Ахме́д", ru: "Я занима́юсь пла́ванием, а в суббо́ту игра́ю в футбо́л с Макси́мом. И ещё я интересу́юсь жи́вописью.",
        en: "I go swimming, and on Saturdays I play football with Maxim. And I'm also interested in painting.",
        ar: "أمارس السباحة، ويوم السبت ألعب كرة القدم مع مكسيم. وأهتمّ أيضًا بفنّ الرسم.",
      },
      { who: "B", name: "О́льга Петро́вна", ru: "Как интере́сно! Вы рису́ете?", en: "How interesting! Do you paint?", ar: "كم هذا مثير للاهتمام! هل ترسم؟" },
      { who: "A", name: "Ахме́д", ru: "Немно́го. А вы всегда́ рабо́тали учи́телем?", en: "A little. And have you always worked as a teacher?", ar: "قليلًا. وهل عملتِ معلّمة دائمًا؟" },
      {
        who: "B", name: "О́льга Петро́вна", ru: "Нет. Ра́ньше я была́ бухга́лтером. Но я всегда́ мечта́ла стать учи́телем.",
        en: "No. I used to be an accountant. But I always dreamed of becoming a teacher.",
        ar: "لا. كنت محاسبة في السابق، لكنّني كنت أحلم دائمًا بأن أصبح معلّمة.",
      },
      { who: "A", name: "Ахме́д", ru: "И вы ста́ли учи́телем!", en: "And you became a teacher!", ar: "وأصبحتِ معلّمة!" },
      { who: "B", name: "О́льга Петро́вна", ru: "Да, э́то была́ моя́ мечта́. А кем вы хоти́те стать?", en: "Yes, that was my dream. And what do you want to become?", ar: "نعم، كان هذا حلمي. وأنت، ماذا تريد أن تصبح؟" },
      {
        who: "A", name: "Ахме́д", ru: "Моя́ мечта́ — рабо́тать инжене́ром в Москве́ и говори́ть по-ру́сски, как вы!",
        en: "My dream is to work as an engineer in Moscow and to speak Russian like you!",
        ar: "حلمي أن أعمل مهندسًا في موسكو وأن أتكلّم الروسية مثلكِ!",
      },
      {
        who: "B", name: "О́льга Петро́вна", ru: "Вы обяза́тельно ста́нете хоро́шим инжене́ром. А по-ру́сски вы уже́ говори́те непло́хо!",
        en: "You'll definitely become a good engineer. And you already speak Russian quite well!",
        ar: "ستصبح بالتأكيد مهندسًا جيدًا. أمّا الروسية فأنت تتكلّمها جيدًا بالفعل!",
      },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо, О́льга Петро́вна!", en: "Thank you, Olga Petrovna!", ar: "شكرًا يا أولغا بتروفنا!" },
    ],
  },
  pronunciation: {
    title: { en: "-ться and -тся sound like 'tsa'", ar: "-ться و -тся تُنطقان «تسا»" },
    en: [
      "Reflexive verbs end in -ться in the infinitive and -тся in the он / она́ / они́ forms. Both endings sound the same: a short 'tsa'. The soft sign is not heard.",
      "So занима́ться and занима́ется both end in 'tsa': zanimAtsa, zanimAyitsa. In the я form, -юсь sounds like 'yus'': интересу́юсь → intirisUyus'.",
    ],
    ar: [
      "تنتهي الأفعال الانعكاسية بـ -ться في المصدر، وبـ -тся مع он و она́ و они́. والنهايتان تُنطقان بالطريقة نفسها: «تسا» قصيرة، ولا تُسمع العلامة اللينة.",
      "لذلك تنتهي занима́ться و занима́ется كلتاهما بصوت «تسا»: zanimAtsa، zanimAyitsa. ومع я تُنطق -юсь «يُس» لينة: интересу́юсь → intirisUyus'.",
    ],
    drills: [
      { ru: "занима́ться", say: "zanimAtsa", focus: { en: "-ться = 'tsa'.", ar: "-ться تُنطق «تسا»." } },
      { ru: "Он занима́ется спо́ртом.", say: "on zanimAyitsa spOrtam.", focus: { en: "-тся is also 'tsa'; -ом is a short 'am'.", ar: "-тся تُنطق «تسا» أيضًا، و -ом تُنطق «ام» قصيرة." } },
      { ru: "интересова́ться", say: "intirisavAtsa", focus: { en: "A long word with one stress, on -ва-.", ar: "كلمة طويلة بنبر واحد على -ва-." } },
      { ru: "Я интересу́юсь му́зыкой.", say: "ya intirisUyus' mUzykay.", focus: { en: "-ова- became -у-, and the stress is on -су-.", ar: "تحوّل -ова- إلى -у-، والنبر على -су-." } },
      { ru: "Она́ увлека́ется жи́вописью.", say: "anA uvlikAyitsa zhIvapis'yu.", focus: { en: "The unstressed е sounds like 'i': uvli-.", ar: "حرف е غير المنبور يُنطق «i»: uvli-." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the right form: I work as a doctor.", ar: "اختر الصيغة الصحيحة: أعمل طبيبًا." },
      options: ["Я рабо́таю врач.", "Я рабо́таю врача́.", "Я рабо́таю врачо́м."],
      answer: 2,
      why: { en: "After рабо́тать the job goes into the instrumental: врачо́м.", ar: "بعد рабо́тать تأتي المهنة في حالة الأداة: врачо́м." },
    },
    {
      kind: "choice",
      prompt: { en: "How do you ask a friend what they do for a living?", ar: "كيف تسأل صديقًا عن عمله؟" },
      options: ["Где ты рабо́таешь?", "Кем ты рабо́таешь?", "Как ты рабо́таешь?"],
      answer: 1,
      why: { en: "Кем — literally 'as whom' — asks about the job itself.", ar: "Кем — حرفيًا «بصفة مَن» — تسأل عن المهنة نفسها." },
    },
    {
      kind: "choice",
      prompt: { en: "Which sentence is WRONG?", ar: "أيّ جملة خاطئة؟" },
      options: ["Мой брат — программи́ст.", "Мой брат рабо́тает программи́стом.", "Мой брат рабо́тает программи́ст."],
      answer: 2,
      why: { en: "After рабо́тать the job must be in the instrumental: программи́стом.", ar: "بعد рабо́тать يجب أن تأتي المهنة في حالة الأداة: программи́стом." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with спорт in the instrumental.", ar: "أكمل بكلمة спорт في حالة الأداة." },
      ru: "Я занима́юсь ___.",
      answers: ["спо́ртом"],
      why: { en: "занима́ться + instrumental: спорт → спо́ртом.", ar: "занима́ться + حالة الأداة: спорт → спо́ртом." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with му́зыка in the instrumental.", ar: "أكمل بكلمة му́зыка في حالة الأداة." },
      ru: "Она́ интересу́ется ___.",
      answers: ["му́зыкой"],
      why: { en: "-а becomes -ой: му́зыка → му́зыкой.", ar: "-а تصبح -ой: му́зыка → му́зыкой." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: I want to become a lawyer.", ar: "أكمل: أريد أن أصبح محاميًا." },
      ru: "Я хочу́ ___ юри́стом.",
      answers: ["стать"],
      why: { en: "стать + instrumental = to become.", ar: "стать + حالة الأداة = يصبح." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with продаве́ц in the instrumental.", ar: "أكمل بكلمة продаве́ц في حالة الأداة." },
      ru: "Он рабо́тает ___ в магази́не.",
      answers: ["продавцо́м"],
      why: { en: "The е drops out: продаве́ц → продавцо́м.", ar: "يسقط حرف е: продаве́ц → продавцо́м." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: What are you interested in?", ar: "أكمل: بماذا تهتمّ؟" },
      ru: "___ ты интересу́ешься?",
      answers: ["Чем"],
      why: { en: "The instrumental of что is чем.", ar: "صيغة что في حالة الأداة هي чем." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I want to become a chef.", ar: "كوّن الجملة: أريد أن أصبح طاهيًا." },
      tokens: ["по́варом", "стать", "Я", "хочу́"],
      answers: ["Я хочу́ стать по́варом."],
      why: { en: "хоте́ть + стать + instrumental.", ar: "хоте́ть + стать + حالة الأداة." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: What do you do in your free time?", ar: "كوّن السؤال: ماذا تفعل في وقت فراغك؟" },
      tokens: ["вре́мя", "занима́ешься", "свобо́дное", "Чем", "ты", "в"],
      answers: ["Чем ты занима́ешься в свобо́дное вре́мя?", "Чем ты в свобо́дное вре́мя занима́ешься?"],
      why: { en: "The question word чем comes first.", ar: "أداة الاستفهام чем تأتي أولًا." },
    },
    {
      kind: "translate",
      prompt: { en: "My brother works as a driver.", ar: "أخي يعمل سائقًا." },
      answers: ["Мой брат рабо́тает води́телем.", "Брат рабо́тает води́телем."],
      why: { en: "води́тель → води́телем: -ем after a soft sign.", ar: "води́тель → води́телем: النهاية -ем بعد العلامة اللينة." },
    },
    {
      kind: "translate",
      prompt: { en: "I'm interested in painting.", ar: "أنا مهتمّ بفنّ الرسم." },
      answers: ["Я интересу́юсь жи́вописью.", "Интересу́юсь жи́вописью.", "Я увлека́юсь жи́вописью."],
      why: { en: "Feminine nouns in -ь take -ью: жи́вопись → жи́вописью.", ar: "المؤنّث المنتهي بـ -ь يأخذ -ью: жи́вопись → жи́вописью." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the speaker's sister do?", ar: "استمع. ما عمل أخت المتكلّم؟" },
      ru: "Моя́ сестра́ рабо́тает бухга́лтером.",
      listen: true,
      options: ["She is a lawyer. · هي محامية.", "She is an accountant. · هي محاسبة.", "She is a cook. · هي طاهية."],
      answer: 1,
      why: { en: "бухга́лтером is the instrumental of бухга́лтер, accountant.", ar: "бухга́лтером هي صيغة حالة الأداة من бухга́лтер، أي محاسب." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the speaker do in his free time?", ar: "استمع. ماذا يفعل المتكلّم في وقت فراغه؟" },
      ru: "В свобо́дное вре́мя я занима́юсь пла́ванием.",
      listen: true,
      options: ["chess · الشطرنج", "painting · الرسم", "swimming · السباحة"],
      answer: 2,
      why: { en: "пла́ванием is the instrumental of пла́вание, swimming.", ar: "пла́ванием هي صيغة حالة الأداة من пла́вание، أي السباحة." },
    },
  ],
  topics: ["instrumental", "professions"],
  search: ["Russian professions кем ты работаешь", "Russian verbs заниматься интересоваться instrumental case", "Russian hobbies vocabulary for beginners"],
  speaking: {
    scenario: {
      en: "A jobs-and-hobbies interview for a language-exchange club: say what you do, what you are interested in and who you want to become, then ask the tutor the same questions.",
      ar: "مقابلة عن العمل والهوايات لنادي تبادل لغوي: قل ما عملك، وبماذا تهتمّ، وماذا تريد أن تصبح، ثم اطرح الأسئلة نفسها على المعلّم.",
    },
    tutorBrief:
      "Play Maxim (Максим), a friendly Moscow programmer who runs a language-exchange club and is interviewing the learner for the club's page. Ask: Кем ты работаешь? Кем ты был раньше? Кем ты хочешь стать? Чем ты занимаешься в свободное время? Чем ты интересуешься / увлекаешься? Expect the instrumental after работать, быть, стать, заниматься, интересоваться and увлекаться (инженером, врачом, спортом, плаванием, музыкой, живописью, шахматами). Use today's jobs: программист, менеджер, бухгалтер, юрист, водитель, повар, продавец. When the learner uses the nominative after a verb (работаю инженер), recast it correctly (А, ты работаешь инженером!) and ask them to repeat. Let the learner interview you back, then finish by summing up their profile in two sentences.",
    prompts: [
      { ru: "Я инжене́р. Я рабо́таю инжене́ром в Каи́ре.", en: "I'm an engineer. I work as an engineer in Cairo.", ar: "أنا مهندس. أعمل مهندسًا في القاهرة." },
      { ru: "В свобо́дное вре́мя я занима́юсь пла́ванием.", en: "In my free time I go swimming.", ar: "في وقت فراغي أمارس السباحة." },
      { ru: "Я интересу́юсь жи́вописью и увлека́юсь ша́хматами.", en: "I'm interested in painting and I'm into chess.", ar: "أهتمّ بفنّ الرسم وأنا مولع بالشطرنج." },
      { ru: "Моя́ мечта́ — стать хоро́шим программи́стом.", en: "My dream is to become a good programmer.", ar: "حلمي أن أصبح مبرمجًا جيدًا." },
      { ru: "А кем ты рабо́таешь?", en: "And what do you do?", ar: "وأنت، ما عملك؟" },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about work and hobbies: what you and two people in your family do (… рабо́тает…), what you did before, what you are interested in, and what your dream is (Моя́ мечта́ — стать…).",
    ar: "اكتب من ٥ إلى ٨ جمل عن العمل والهوايات: ماذا تعمل أنت وشخصان من عائلتك (… рабо́тает…)، وماذا كنت تعمل من قبل، وبماذا تهتمّ، وما هو حلمك (Моя́ мечта́ — стать…).",
  },
  culture: {
    en: "Chess (ша́хматы) is a national passion in Russia: many children learn it in clubs, and in city parks you can see people playing at outdoor tables. After school, children often go to a се́кция for sport or to a кружо́к, a club for music, painting or chess.",
    ar: "الشطرنج (ша́хматы) شغف وطني في روسيا: يتعلّمه كثير من الأطفال في النوادي، وفي حدائق المدن ترى الناس يلعبونه على طاولات في الهواء الطلق. وبعد المدرسة يذهب الأطفال غالبًا إلى се́кция للرياضة، أو إلى кружо́к، وهو نادٍ للموسيقى أو الرسم أو الشطرنج.",
  },
};

const DAY_45: Day = {
  n: 45,
  week: 7,
  kind: "lesson",
  title: { ru: "Како́й он челове́к?", en: "What is he like? Appearance and character", ar: "كيف هو؟ المظهر والشخصية" },
  goals: [
    { en: "Describe what someone looks like: height, age, hair and eyes.", ar: "أن تصف مظهر شخص ما: الطول والعمر والشعر والعينين." },
    { en: "Describe someone's character with adjectives that agree with the noun.", ar: "أن تصف طبع شخص ما بصفات تتطابق مع الاسم." },
    { en: "Say who someone looks like: Она́ похо́жа на ма́му.", ar: "أن تقول بمن يشبه شخصٌ ما: Она́ похо́жа на ма́му." },
  ],
  words: [
    {
      id: "d45-01", ru: "высо́кий", say: "vysOkiy", en: "tall; high", ar: "طويل؛ عالٍ", pos: "adj",
      ex: { ru: "Макси́м о́чень высо́кий.", en: "Maxim is very tall.", ar: "مكسيم طويل جدًّا." },
    },
    {
      id: "d45-02", ru: "ни́зкий", say: "nIskiy", en: "short (of a person); low", ar: "قصير (للإنسان)؛ منخفض", pos: "adj",
      ex: { ru: "Э́то ни́зкий стол.", en: "This is a low table.", ar: "هذه طاولة منخفضة." },
      note: {
        en: "About a person, невысо́кий (not tall) sounds more polite than ни́зкий.",
        ar: "عند الحديث عن شخص تبدو كلمة невысо́кий (ليس طويلًا) أكثر تهذيبًا من ни́зкий.",
      },
    },
    {
      id: "d45-03", ru: "молодо́й", say: "maladOy", en: "young", ar: "شابّ، صغير السنّ", pos: "adj",
      ex: { ru: "Наш врач о́чень молодо́й.", en: "Our doctor is very young.", ar: "طبيبنا شابّ جدًّا." },
    },
    {
      id: "d45-04", ru: "у́мный", say: "Umnyy", en: "clever, smart", ar: "ذكي", pos: "adj",
      ex: { ru: "Твоя́ сестра́ о́чень у́мная.", en: "Your sister is very clever.", ar: "أختك ذكية جدًّا." },
    },
    {
      id: "d45-05", ru: "до́брый", say: "dObryy", en: "kind, good-hearted", ar: "طيّب، لطيف", pos: "adj",
      ex: { ru: "Ба́бушка — до́брый челове́к.", en: "Grandma is a kind person.", ar: "جدّتي إنسانة طيّبة." },
    },
    {
      id: "d45-06", ru: "весёлый", say: "visyOlyy", en: "cheerful, fun", ar: "مرح", pos: "adj",
      ex: { ru: "У меня́ весёлая семья́.", en: "I have a fun family.", ar: "عائلتي مرحة." },
    },
    {
      id: "d45-07", ru: "серьёзный", say: "sir'yOznyy", en: "serious", ar: "جادّ", pos: "adj",
      ex: { ru: "Оте́ц серьёзный, а мать весёлая.", en: "My father is serious, and my mother is cheerful.", ar: "أبي جادّ، أمّا أمّي فمرحة." },
    },
    {
      id: "d45-08", ru: "лени́вый", say: "linIvyy", en: "lazy", ar: "كسول", pos: "adj",
      ex: { ru: "Мой кот о́чень лени́вый.", en: "My cat is very lazy.", ar: "قطّي كسول جدًّا." },
    },
    {
      id: "d45-09", ru: "во́лосы", say: "vOlasy", en: "hair (on the head)", ar: "شعر (الرأس)", pos: "noun", g: "pl",
      ex: { ru: "У неё дли́нные во́лосы.", en: "She has long hair.", ar: "شعرها طويل." },
      note: { en: "In Russian, hair is plural: во́лосы, like 'many hairs'.", ar: "الشعر في الروسية جمع: во́лосы، كأنها «شعرات كثيرة»." },
    },
    {
      id: "d45-10", ru: "глаза́", say: "glazA", en: "eyes", ar: "عينان، عيون", pos: "noun", g: "pl",
      forms: "ед. ч. глаз",
      ex: { ru: "У тебя́ краси́вые глаза́.", en: "You have beautiful eyes.", ar: "عيناك جميلتان." },
    },
    {
      id: "d45-11", ru: "дли́нный", say: "dlInnyy", en: "long", ar: "طويل (للأشياء)", pos: "adj",
      ex: { ru: "Э́то о́чень дли́нная у́лица.", en: "This is a very long street.", ar: "هذا شارع طويل جدًّا." },
    },
    {
      id: "d45-12", ru: "коро́ткий", say: "karOtkiy", en: "short (in length)", ar: "قصير (في الطول)", pos: "adj",
      ex: { ru: "У Макси́ма коро́ткие во́лосы.", en: "Maxim has short hair.", ar: "شعر مكسيم قصير." },
    },
    {
      id: "d45-13", ru: "похо́ж", say: "pakhOsh", en: "looks like, is similar to (на + accusative)", ar: "يشبه (на + حالة المفعول به)", pos: "adj",
      forms: "похо́жа (f), похо́же (n), похо́жи (pl)",
      ex: { ru: "Ты похо́ж на отца́.", en: "You look like your father.", ar: "أنت تشبه أباك." },
    },
    {
      id: "d45-14", ru: "хара́ктер", say: "kharAktir", en: "character, personality", ar: "طبع، شخصية", pos: "noun", g: "m",
      ex: { ru: "У неё хоро́ший хара́ктер.", en: "She has a nice personality.", ar: "طبعها جميل." },
    },
    {
      id: "d45-15", ru: "голубо́й", say: "galubOy", en: "light blue; blue (eyes, the sky)", ar: "أزرق فاتح (للعيون والسماء)", pos: "adj",
      ex: { ru: "У А́нны голубы́е глаза́.", en: "Anna has blue eyes.", ar: "عينا آنا زرقاوان." },
      note: { en: "Russian has two blues: си́ний (dark blue) and голубо́й (light blue).", ar: "في الروسية لونان أزرقان: си́ний (أزرق داكن) و голубо́й (أزرق فاتح)." },
    },
    {
      id: "d45-16", ru: "ка́рий", say: "kAriy", en: "brown (only of eyes)", ar: "بنّي (للعيون فقط)", pos: "adj",
      ex: { ru: "У меня́ ка́рие глаза́.", en: "I have brown eyes.", ar: "عيناي بنّيتان." },
    },
    {
      id: "d45-17", ru: "све́тлый", say: "svyEtlyy", en: "light, fair (hair); bright (room)", ar: "فاتح (للشعر)؛ مضيء", pos: "adj",
      ex: { ru: "У неё све́тлые во́лосы.", en: "She has fair hair.", ar: "شعرها فاتح اللون." },
    },
    {
      id: "d45-18", ru: "тёмный", say: "tyOmnyy", en: "dark", ar: "داكن، مظلم", pos: "adj",
      ex: { ru: "У Ахме́да тёмные во́лосы.", en: "Ahmed has dark hair.", ar: "شعر أحمد داكن." },
    },
    {
      id: "d45-19", ru: "вы́глядеть", say: "vYglyadit'", en: "to look (appear)", ar: "يبدو (في مظهره)", pos: "verb",
      forms: "вы́гляжу, вы́глядишь",
      ex: { ru: "Как он вы́глядит?", en: "What does he look like?", ar: "كيف يبدو؟" },
    },
    {
      id: "d45-20", ru: "Како́й он челове́к?", say: "kakOy on chilavyEk?", en: "What is he like (as a person)?", ar: "كيف هو كشخص؟ (عن الطبع)", pos: "phrase",
      note: { en: "About a woman you can still say челове́к: Како́й она́ челове́к?", ar: "عن المرأة يمكنك أن تقول челове́к أيضًا: Како́й она́ челове́к؟" },
    },
  ],
  grammar: [
    {
      id: "d45-g1",
      title: { en: "Adjectives agree: nominative, accusative, prepositional", ar: "تطابق الصفة: حالات الرفع والمفعول به وحرف الجر" },
      en: [
        "An adjective takes the gender, number and case of its noun. You know the nominative: до́брый брат, до́брая сестра́, до́брое сло́во, до́брые лю́ди.",
        "In the accusative the feminine changes -ая → -ую: Я ви́жу высо́кую де́вушку. A masculine person or animal takes -ого / -его, like the noun itself: Я зна́ю высо́кого па́рня. Things stay as in the nominative: Я покупа́ю но́вый стол.",
        "In the prepositional the ending is -ом / -ем (masculine, neuter), -ой / -ей (feminine) and -ых / -их (plural): в большо́м до́ме, о молодо́й же́нщине, о ста́рых фотогра́фиях.",
      ],
      ar: [
        "تأخذ الصفة جنس الاسم وعدده وحالته. وأنت تعرف حالة الرفع: до́брый брат، до́брая сестра́، до́брое сло́во، до́брые лю́ди.",
        "في حالة المفعول به يتغيّر المؤنّث من -ая إلى -ую: Я ви́жу высо́кую де́вушку. والمذكّر العاقل أو الحيوان يأخذ -ого / -его مثل الاسم نفسه: Я зна́ю высо́кого па́рня. أمّا الأشياء فتبقى كما في حالة الرفع: Я покупа́ю но́вый стол.",
        "وفي حالة حرف الجر تكون النهاية -ом / -ем (للمذكّر والمحايد)، و -ой / -ей (للمؤنّث)، و -ых / -их (للجمع): в большо́м до́ме، о молодо́й же́нщине، о ста́рых фотогра́фиях.",
      ],
      tables: [
        {
          caption: { en: "Adjective endings: до́брый (kind). * = for people and animals", ar: "نهايات الصفة: до́брый (طيّب). * = للأشخاص والحيوانات" },
          head: ["Case · الحالة", "m · مذكّر", "f · مؤنّث", "n · محايد", "pl · جمع"],
          rows: [
            ["Nom. · الرفع", "до́брый", "до́брая", "до́брое", "до́брые"],
            ["Acc. · المفعول به", "до́брый / до́брого*", "до́брую", "до́брое", "до́брые / до́брых*"],
            ["Prep. · حرف الجر", "о до́бром", "о до́брой", "о до́бром", "о до́брых"],
          ],
        },
      ],
      examples: [
        { ru: "Мы живём в большо́м но́вом до́ме.", en: "We live in a big new house.", ar: "نعيش في بيت كبير جديد." },
        { ru: "Я зна́ю о́чень до́брого врача́.", en: "I know a very kind doctor.", ar: "أعرف طبيبًا طيّبًا جدًّا." },
        { ru: "Мы говори́м о но́вой подру́ге.", en: "We're talking about our new friend.", ar: "نتحدّث عن صديقتنا الجديدة." },
      ],
    },
    {
      id: "d45-g2",
      title: { en: "Describing people: У неё…, Он…, похо́ж на…", ar: "وصف الأشخاص: У неё…، Он…، похо́ж на…" },
      en: [
        "For looks, use у + the genitive, just as for 'have': У неё дли́нные во́лосы и голубы́е глаза́. У него́ коро́ткие тёмные во́лосы. The question is Как он вы́глядит?",
        "For character, put the adjective straight after the person — there is no 'is': Он о́чень до́брый, но немно́го лени́вый. The question is Како́й он челове́к?",
        "похо́ж (a woman: похо́жа, several people: похо́жи) + на + accusative means 'looks like': Ты похо́ж на отца́. Она́ похо́жа на ма́му. Они́ о́чень похо́жи. — They look very alike.",
      ],
      ar: [
        "لوصف المظهر استخدم у + حالة الإضافة، تمامًا كما في التعبير عن الملكية: У неё дли́нные во́лосы и голубы́е глаза́. У него́ коро́ткие тёмные во́лосы. والسؤال هو Как он вы́глядит؟",
        "لوصف الطبع ضع الصفة بعد الشخص مباشرة، فلا يوجد فعل «يكون»: Он о́чень до́брый, но немно́го лени́вый. والسؤال هو Како́й он челове́к؟",
        "похо́ж (للمؤنّث: похо́жа، وللجمع: похо́жи) + на + حالة المفعول به تعني «يشبه»: Ты похо́ж на отца́. Она́ похо́жа на ма́му. Они́ о́чень похо́жи. — إنهم متشابهون جدًّا.",
      ],
      tables: [
        {
          caption: { en: "похо́ж is a short adjective", ar: "похо́ж صفة قصيرة" },
          head: ["Who · مَن", "Form · الصيغة", "Example · مثال"],
          rows: [
            ["он", "похо́ж", "Он похо́ж на ма́му."],
            ["она́", "похо́жа", "Она́ похо́жа на отца́."],
            ["они́", "похо́жи", "Брат и сестра́ о́чень похо́жи."],
          ],
        },
      ],
      examples: [
        { ru: "— Как она́ вы́глядит? — Она́ высо́кая, у неё све́тлые во́лосы.", en: "— What does she look like? — She's tall and she has fair hair.", ar: "— كيف تبدو؟ — هي طويلة وشعرها فاتح." },
        { ru: "— Како́й он челове́к? — Он у́мный и весёлый.", en: "— What is he like? — He's clever and cheerful.", ar: "— كيف هو كشخص؟ — هو ذكي ومرح." },
        { ru: "Макси́м похо́ж на па́пу, а А́нна — на ма́му.", en: "Maxim looks like his dad, and Anna looks like her mum.", ar: "مكسيم يشبه أباه، وآنا تشبه أمّها." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Но́вый сосе́д", en: "The new neighbour", ar: "الجار الجديد" },
    setting: {
      en: "Anna and Ahmed are walking home after class. Ahmed tells her about his new neighbour.",
      ar: "تمشي آنا وأحمد إلى البيت بعد الدرس، ويحدّثها أحمد عن جاره الجديد.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, у тебя́ но́вый сосе́д? Как он вы́глядит?", en: "Ahmed, do you have a new neighbour? What does he look like?", ar: "أحمد، هل عندك جار جديد؟ كيف يبدو؟" },
      {
        who: "A", name: "Ахме́д", ru: "Он молодо́й и высо́кий. У него́ коро́ткие тёмные во́лосы и ка́рие глаза́.",
        en: "He's young and tall. He has short dark hair and brown eyes.",
        ar: "إنه شابّ وطويل. شعره قصير وداكن، وعيناه بنّيتان.",
      },
      { who: "B", name: "А́нна", ru: "А како́й он челове́к?", en: "And what is he like?", ar: "وكيف هو كشخص؟" },
      { who: "A", name: "Ахме́д", ru: "Он у́мный и о́чень весёлый. Он рабо́тает врачо́м.", en: "He's clever and very cheerful. He works as a doctor.", ar: "إنه ذكي ومرح جدًّا، ويعمل طبيبًا." },
      { who: "B", name: "А́нна", ru: "Врачо́м? А как его́ зову́т?", en: "A doctor? And what's his name?", ar: "طبيبًا؟ وما اسمه؟" },
      { who: "A", name: "Ахме́д", ru: "Серге́й. А что?", en: "Sergei. Why?", ar: "سيرغي. لماذا تسألين؟" },
      { who: "B", name: "А́нна", ru: "Я его́ зна́ю! Э́то брат Ле́ны. Ле́на — моя́ подру́га.", en: "I know him! He's Lena's brother. Lena is my friend.", ar: "أنا أعرفه! إنه أخو لينا. لينا صديقتي." },
      { who: "A", name: "Ахме́д", ru: "Да? А он похо́ж на Ле́ну?", en: "Really? Does he look like Lena?", ar: "حقًّا؟ وهل يشبه لينا؟" },
      { who: "B", name: "А́нна", ru: "Да, они́ о́чень похо́жи. Но Ле́на серьёзная, а Серге́й весёлый.", en: "Yes, they look very alike. But Lena is serious, and Sergei is cheerful.", ar: "نعم، إنهما متشابهان جدًّا. لكن لينا جادّة، أمّا سيرغي فمرح." },
      { who: "A", name: "Ахме́д", ru: "И немно́го лени́вый: он встаёт в двена́дцать!", en: "And a bit lazy: he gets up at twelve!", ar: "وكسول قليلًا: إنه يستيقظ في الثانية عشرة!" },
      { who: "B", name: "А́нна", ru: "Он не лени́вый! Врачи́ ча́сто рабо́тают но́чью.", en: "He isn't lazy! Doctors often work at night.", ar: "إنه ليس كسولًا! الأطباء يعملون ليلًا في كثير من الأحيان." },
      { who: "A", name: "Ахме́д", ru: "Хорошо́, хорошо́: он не лени́вый, он до́брый и у́мный!", en: "OK, OK: he isn't lazy, he's kind and clever!", ar: "حسنًا، حسنًا: إنه ليس كسولًا، بل طيّب وذكي!" },
    ],
  },
  pronunciation: {
    title: { en: "-ого sounds like 'ova'", ar: "-ого تُنطق «ova»" },
    en: [
      "In the endings -ого and -его the letter г is pronounced 'v', and the unstressed о sounds like 'a': до́брого → dObrava, молодо́го → maladOva.",
      "You already know this from его́ (yivO) and сего́дня (sivOdnya). It is the same rule, so read every -ого as 'ova'.",
    ],
    ar: [
      "في النهايتين -ого و -его يُنطق حرف г «v»، وحرف о غير المنبور يُنطق «a»: до́брого → dObrava، молодо́го → maladOva.",
      "أنت تعرف هذا من его́ (yivO) و сего́дня (sivOdnya). إنها القاعدة نفسها، فاقرأ كل -ого «ova».",
    ],
    drills: [
      { ru: "до́брого", say: "dObrava", focus: { en: "г = v, and both о's after the stress sound like 'a'.", ar: "г تُنطق v، وحرفا о بعد النبر يُنطقان «a»." } },
      { ru: "молодо́го врача́", say: "maladOva vrachA", focus: { en: "The stress is on -до-; the ending is 'ova'.", ar: "النبر على -до-، والنهاية «ova»." } },
      { ru: "Я зна́ю высо́кого па́рня.", say: "ya znAyu vysOkava pArnya.", focus: { en: "One stress per word: on -со- and on па-.", ar: "نبر واحد في كل كلمة: على -со- وعلى па-." } },
      { ru: "его́ брат", say: "yivO brat", focus: { en: "The same г = v in его́.", ar: "حرف г يُنطق v في его́ أيضًا." } },
      { ru: "У него́ ка́рие глаза́.", say: "u nivO kAriye glazA.", focus: { en: "него́ = nivO; the stress is at the end of глаза́.", ar: "него́ تُنطق nivO، والنبر في آخر глаза́." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose: She has long hair.", ar: "اختر: شعرها طويل." },
      options: ["У неё дли́нный во́лосы.", "У неё дли́нная во́лосы.", "У неё дли́нные во́лосы."],
      answer: 2,
      why: { en: "во́лосы is plural, so the adjective is plural too: дли́нные.", ar: "во́лосы جمع، فتأتي الصفة جمعًا أيضًا: дли́нные." },
    },
    {
      kind: "choice",
      prompt: { en: "Choose: She looks like her mum.", ar: "اختر: هي تشبه أمّها." },
      options: ["Она́ похо́ж на ма́му.", "Она́ похо́жа на ма́му.", "Она́ похо́жи на ма́му."],
      answer: 1,
      why: { en: "For a woman the short form is похо́жа.", ar: "مع المؤنّث تكون الصيغة القصيرة похо́жа." },
    },
    {
      kind: "choice",
      prompt: { en: "Which word describes character, not looks?", ar: "أيّ كلمة تصف الطبع لا المظهر؟" },
      options: ["высо́кий", "молодо́й", "до́брый", "ни́зкий"],
      answer: 2,
      why: { en: "до́брый (kind) is about character; the others describe looks.", ar: "до́брый (طيّب) تصف الطبع، والبقية تصف المظهر." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with высо́кий in the accusative.", ar: "أكمل بالصفة высо́кий في حالة المفعول به." },
      ru: "Я ви́жу ___ де́вушку.",
      answers: ["высо́кую"],
      why: { en: "Feminine accusative: -ая → -ую.", ar: "المؤنّث في حالة المفعول به: -ая → -ую." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with большо́й in the prepositional.", ar: "أكمل بالصفة большо́й في حالة حرف الجر." },
      ru: "Мы живём в ___ до́ме.",
      answers: ["большо́м"],
      why: { en: "Masculine prepositional: -ом.", ar: "المذكّر في حالة حرف الجر: -ом." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with оте́ц in the accusative.", ar: "أكمل بكلمة оте́ц في حالة المفعول به." },
      ru: "Ты похо́ж на ___.",
      answers: ["отца́"],
      why: { en: "похо́ж на + accusative; a male person takes -а: оте́ц → отца́.", ar: "похо́ж на + حالة المفعول به، والمذكّر العاقل يأخذ -а: оте́ц → отца́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: He has brown eyes.", ar: "أكمل: عيناه بنّيتان." },
      ru: "У него́ ___ глаза́.",
      answers: ["ка́рие"],
      why: { en: "ка́рий is used only for eyes; plural ка́рие.", ar: "ка́рий تُستخدم للعيون فقط، وجمعها ка́рие." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: She has blue eyes.", ar: "كوّن الجملة: عيناها زرقاوان." },
      tokens: ["голубы́е", "У", "глаза́", "неё"],
      answers: ["У неё голубы́е глаза́."],
      why: { en: "Looks: у + genitive, then the adjective and the noun.", ar: "المظهر: у + حالة الإضافة، ثم الصفة والاسم." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: He is very kind, but a bit lazy.", ar: "كوّن الجملة: هو طيّب جدًّا لكنه كسول قليلًا." },
      tokens: ["лени́вый", "о́чень", "Он", "немно́го", "до́брый", "но"],
      answers: ["Он о́чень до́брый, но немно́го лени́вый."],
      why: { en: "For character the adjective simply follows the person, with no 'is'.", ar: "في وصف الطبع تأتي الصفة بعد الشخص مباشرة دون فعل «يكون»." },
    },
    {
      kind: "translate",
      prompt: { en: "What does he look like?", ar: "كيف يبدو؟" },
      answers: ["Как он вы́глядит?"],
      why: { en: "вы́глядеть (to look) in the он form is вы́глядит.", ar: "الفعل вы́глядеть (يبدو) مع он يصبح вы́глядит." },
    },
    {
      kind: "translate",
      prompt: { en: "She is clever and kind.", ar: "هي ذكية وطيّبة." },
      answers: ["Она́ у́мная и до́брая.", "Она́ до́брая и у́мная."],
      why: { en: "Feminine adjectives end in -ая.", ar: "الصفات المؤنّثة تنتهي بـ -ая." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What kind of hair does Maxim have?", ar: "استمع. كيف هو شعر مكسيم؟" },
      ru: "У Макси́ма коро́ткие све́тлые во́лосы.",
      listen: true,
      options: ["long and dark · طويل وداكن", "short and fair · قصير وفاتح", "short and dark · قصير وداكن"],
      answer: 1,
      why: { en: "коро́ткие means short, све́тлые means fair.", ar: "коро́ткие تعني قصيرًا، و све́тлые تعني فاتحًا." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is she like?", ar: "استمع. كيف هي كشخص؟" },
      ru: "Она́ весёлая, но немно́го лени́вая.",
      listen: true,
      options: ["serious and clever · جادّة وذكية", "young and tall · شابّة وطويلة", "cheerful but a bit lazy · مرحة لكنها كسولة قليلًا"],
      answer: 2,
      why: { en: "весёлая means cheerful, лени́вая means lazy.", ar: "весёлая تعني مرحة، و лени́вая تعني كسولة." },
    },
  ],
  topics: ["appearance", "adjectives"],
  search: ["Russian describing people appearance and character", "Russian adjective endings accusative prepositional", "Russian похож на meaning"],
  speaking: {
    scenario: {
      en: "Guess who: describe a friend or a famous person — looks and character — while the tutor asks questions and tries to guess who it is. Then swap roles.",
      ar: "لعبة «خمّن مَن»: صِف صديقًا أو شخصًا مشهورًا — مظهره وطبعه — بينما يطرح المعلّم الأسئلة ويحاول أن يخمّن مَن هو. ثم تبادلا الأدوار.",
    },
    tutorBrief:
      "Play a guessing game with the learner. They describe a friend or a famous person, and you ask short questions in simple Russian: Он высокий или низкий? Он молодой? Какие у него волосы? Какие у него глаза? Какой он человек? Он добрый? Он весёлый или серьёзный? На кого он похож? Guess after four or five answers. Then swap: you describe someone the learner surely knows (a famous footballer or singer) and they ask the questions. Watch adjective agreement (высокая девушка, длинные волосы, карие глаза, похожа for a woman) and correct by repeating the right form in your next sentence. Finish by praising the most vivid description.",
    prompts: [
      { ru: "Она́ высо́кая и молода́я.", en: "She is tall and young.", ar: "هي طويلة وشابّة." },
      { ru: "У неё дли́нные све́тлые во́лосы и голубы́е глаза́.", en: "She has long fair hair and blue eyes.", ar: "شعرها طويل وفاتح، وعيناها زرقاوان." },
      { ru: "Она́ о́чень до́брая и весёлая, но немно́го лени́вая.", en: "She is very kind and cheerful, but a bit lazy.", ar: "هي طيّبة ومرحة جدًّا، لكنها كسولة قليلًا." },
      { ru: "Она́ похо́жа на ма́му.", en: "She looks like her mum.", ar: "هي تشبه أمّها." },
      { ru: "Как он вы́глядит? Како́й он челове́к?", en: "What does he look like? What is he like?", ar: "كيف يبدو؟ وكيف هو كشخص؟" },
    ],
  },
  journal: {
    en: "Write 5–8 sentences describing two people you know well: how they look (height, age, hair, eyes), what they are like, and who they look like (похо́ж / похо́жа на…).",
    ar: "اكتب من ٥ إلى ٨ جمل تصف فيها شخصين تعرفهما جيدًا: مظهرهما (الطول والعمر والشعر والعينان)، وطبعهما، وبمن يشبهان (похо́ж / похо́жа на…).",
  },
  culture: {
    en: "Russian fairy tales love character words. The heroine is often Васили́са Прекра́сная (the Beautiful) or Васили́са Прему́драя (the Very Wise). Ива́нушка, the kind and honest 'little fool' (дурачо́к), usually wins in the end, and in the tale «По щу́чьему веле́нью» lazy Еме́ля lies on the stove all day — and still marries the tsar's daughter.",
    ar: "تحبّ الحكايات الشعبية الروسية صفات الشخصية. فالبطلة غالبًا ما تكون Васили́са Прекра́сная (الجميلة) أو Васили́са Прему́драя (الحكيمة جدًّا). أمّا Ива́нушка، «الأحمق الصغير» (дурачо́к) الطيّب الصادق، فينتصر عادةً في النهاية. وفي حكاية «По щу́чьему веле́нью» يستلقي Еме́ля الكسول على الموقد طوال اليوم، ومع ذلك يتزوّج ابنة القيصر.",
  },
};

const DAY_46: Day = {
  n: 46,
  week: 7,
  kind: "lesson",
  title: { ru: "Бо́льше и лу́чше: сравне́ние", en: "Bigger and better: comparisons", ar: "أكبر وأفضل: المقارنة" },
  goals: [
    {
      en: "Compare two things with a comparative and чем: В Каи́ре тепле́е, чем в Москве́.",
      ar: "أن تقارن بين شيئين بصيغة المقارنة و чем: В Каи́ре тепле́е, чем в Москве́.",
    },
    {
      en: "Use the irregular comparatives бо́льше, ме́ньше, лу́чше, ху́же, доро́же, деше́вле, ста́рше, моло́же.",
      ar: "أن تستخدم صيغ المقارنة الشاذّة: бо́льше، ме́ньше، лу́чше، ху́же، доро́же، деше́вле، ста́рше، моло́же.",
    },
    {
      en: "Say what is the most… and what your favourite things are: са́мый, люби́мый, предпочита́ть.",
      ar: "أن تقول ما هو الأكثر… وما هي أشياؤك المفضّلة: са́мый، люби́мый، предпочита́ть.",
    },
  ],
  words: [
    {
      id: "d46-01", ru: "бо́льше", say: "bOl'she", en: "bigger; more", ar: "أكبر؛ أكثر", pos: "adv",
      ex: { ru: "Мой дом бо́льше, чем твой.", en: "My house is bigger than yours.", ar: "بيتي أكبر من بيتك." },
      note: { en: "The comparative of большо́й (big) and мно́го (a lot).", ar: "صيغة المقارنة من большо́й (كبير) و мно́го (كثير)." },
    },
    {
      id: "d46-02", ru: "ме́ньше", say: "myEn'she", en: "smaller; less", ar: "أصغر؛ أقلّ", pos: "adv",
      ex: { ru: "Ко́шка ме́ньше, чем соба́ка.", en: "A cat is smaller than a dog.", ar: "القطّة أصغر من الكلب." },
      note: { en: "The comparative of ма́ленький (small) and ма́ло (a little).", ar: "صيغة المقارنة من ма́ленький (صغير) و ма́ло (قليل)." },
    },
    {
      id: "d46-03", ru: "лу́чше", say: "lUtshe", en: "better", ar: "أفضل", pos: "adv",
      ex: { ru: "Ты говори́шь по-ру́сски лу́чше, чем я.", en: "You speak Russian better than I do.", ar: "أنت تتكلّم الروسية أفضل منّي." },
      note: { en: "The comparative of хоро́ший and хорошо́. The letters чш sound like 'tsh'.", ar: "صيغة المقارنة من хоро́ший و хорошо́. ويُنطق الحرفان чш «تش»." },
    },
    {
      id: "d46-04", ru: "ху́же", say: "khUzhe", en: "worse", ar: "أسوأ", pos: "adv",
      ex: { ru: "Сего́дня мне ху́же, чем вчера́.", en: "Today I feel worse than yesterday.", ar: "حالتي اليوم أسوأ من أمس." },
      note: { en: "The comparative of плохо́й and пло́хо.", ar: "صيغة المقارنة من плохо́й و пло́хо." },
    },
    {
      id: "d46-05", ru: "доро́же", say: "darOzhe", en: "more expensive", ar: "أغلى", pos: "adv",
      ex: { ru: "Такси́ доро́же, чем метро́.", en: "A taxi is more expensive than the metro.", ar: "التاكسي أغلى من المترو." },
    },
    {
      id: "d46-06", ru: "деше́вле", say: "dishEvlye", en: "cheaper", ar: "أرخص", pos: "adv",
      ex: { ru: "На ры́нке фру́кты деше́вле.", en: "Fruit is cheaper at the market.", ar: "الفاكهة أرخص في السوق." },
    },
    {
      id: "d46-07", ru: "ста́рше", say: "stArshe", en: "older (in age)", ar: "أكبر سنًّا", pos: "adv",
      ex: { ru: "Макси́м ста́рше, чем А́нна.", en: "Maxim is older than Anna.", ar: "مكسيم أكبر سنًّا من آنا." },
      note: { en: "It is about age: of people, and also of cities or buildings: Каи́р ста́рше Москвы́.", ar: "تُستخدم للعمر: عمر الأشخاص، وكذلك المدن والمباني: Каи́р ста́рше Москвы́." },
    },
    {
      id: "d46-08", ru: "моло́же", say: "malOzhe", en: "younger", ar: "أصغر سنًّا", pos: "adv",
      ex: { ru: "Моя́ сестра́ моло́же меня́.", en: "My sister is younger than me.", ar: "أختي أصغر منّي سنًّا." },
    },
    {
      id: "d46-09", ru: "быстре́е", say: "bystryEye", en: "faster", ar: "أسرع", pos: "adv",
      ex: { ru: "Мой брат говори́т быстре́е, чем я.", en: "My brother speaks faster than I do.", ar: "أخي يتكلّم أسرع منّي." },
    },
    {
      id: "d46-10", ru: "ме́дленнее", say: "myEdlinniye", en: "more slowly, slower", ar: "أبطأ", pos: "adv",
      ex: { ru: "Говори́те, пожа́луйста, ме́дленнее!", en: "Please speak more slowly!", ar: "تكلّم ببطء أكثر من فضلك!" },
    },
    {
      id: "d46-11", ru: "чем", say: "chem", en: "than", ar: "من (في المقارنة)", pos: "conj",
      ex: { ru: "Метро́ быстре́е, чем авто́бус.", en: "The metro is faster than the bus.", ar: "المترو أسرع من الحافلة." },
      note: { en: "In a comparison, put a comma before чем.", ar: "في المقارنة ضع فاصلة قبل чем." },
    },
    {
      id: "d46-12", ru: "са́мый", say: "sAmyy", en: "the most (+ adjective)", ar: "الأكثر (+ صفة)", pos: "adj",
      ex: { ru: "Э́то са́мый краси́вый парк в Москве́.", en: "This is the most beautiful park in Moscow.", ar: "هذه أجمل حديقة في موسكو." },
    },
    {
      id: "d46-13", ru: "люби́мый", say: "lyubImyy", en: "favourite; beloved", ar: "مفضّل؛ محبوب", pos: "adj",
      ex: { ru: "Како́й твой люби́мый фильм?", en: "What's your favourite film?", ar: "ما فيلمك المفضّل؟" },
    },
    {
      id: "d46-14", ru: "предпочита́ть", say: "pritpachitAt'", en: "to prefer", ar: "يفضّل", pos: "verb",
      forms: "предпочита́ю, предпочита́ешь",
      ex: { ru: "Я предпочита́ю чай.", en: "I prefer tea.", ar: "أفضّل الشاي." },
    },
    {
      id: "d46-15", ru: "интере́снее", say: "intiryEsniye", en: "more interesting", ar: "أكثر إثارة للاهتمام، أمتع", pos: "adv",
      ex: { ru: "Кни́га интере́снее, чем фильм.", en: "The book is more interesting than the film.", ar: "الكتاب أمتع من الفيلم." },
    },
    {
      id: "d46-16", ru: "краси́вее", say: "krasIviye", en: "more beautiful", ar: "أجمل", pos: "adv",
      ex: { ru: "Но́чью го́род ещё краси́вее.", en: "At night the city is even more beautiful.", ar: "في الليل تصبح المدينة أجمل." },
    },
    {
      id: "d46-17", ru: "гора́здо", say: "garAzda", en: "much, far (+ comparative)", ar: "بكثير (مع صيغة المقارنة)", pos: "adv",
      ex: { ru: "В Каи́ре гора́здо тепле́е.", en: "It's much warmer in Cairo.", ar: "الجوّ في القاهرة أدفأ بكثير." },
    },
    {
      id: "d46-18", ru: "по-мо́ему", say: "pa-mOyimu", en: "in my opinion, I think", ar: "في رأيي", pos: "phrase",
      ex: { ru: "По-мо́ему, чай лу́чше, чем ко́фе.", en: "In my opinion, tea is better than coffee.", ar: "في رأيي، الشاي أفضل من القهوة." },
    },
    {
      id: "d46-19", ru: "Мне бо́льше нра́вится…", say: "mnye bOl'she nrAvitsa…", en: "I like … more / better", ar: "يعجبني … أكثر", pos: "phrase",
      ex: { ru: "Мне бо́льше нра́вится Каи́р.", en: "I like Cairo better.", ar: "القاهرة تعجبني أكثر." },
    },
  ],
  grammar: [
    {
      id: "d46-g1",
      title: { en: "Comparatives in -ее and чем (than)", ar: "صيغة المقارنة بـ -ее وكلمة чем (من)" },
      en: [
        "To say 'more …', replace the adjective ending with -ее: интере́сный → интере́снее, краси́вый → краси́вее, бы́стрый → быстре́е. The same form works as an adverb: Говори́те ме́дленнее!",
        "A comparative never changes: он, она́, оно́ and они́ are all краси́вее. Longer words keep the stress on the stem (интере́снее, ме́дленнее); short ones usually move it to -е́е (быстре́е, тепле́е, холодне́е, длинне́е).",
        "'Than' is чем, with a comma before it: В Каи́ре тепле́е, чем в Москве́. After a noun or a pronoun you can drop чем and use the genitive: Он ста́рше меня́. Она́ ста́рше бра́та.",
      ],
      ar: [
        "لتقول «أكثر…» ضع -ее مكان نهاية الصفة: интере́сный → интере́снее، краси́вый → краси́вее، бы́стрый → быстре́е. والصيغة نفسها تعمل كظرف: Говори́те ме́дленнее!",
        "صيغة المقارنة لا تتغيّر أبدًا: он و она́ و оно́ و они́ كلّها краси́вее. والكلمات الطويلة تُبقي النبر على الجذر (интере́снее، ме́дленнее)، أمّا القصيرة فتنقله غالبًا إلى -е́е (быстре́е، тепле́е، холодне́е، длинне́е).",
        "و«من» في المقارنة هي чем وقبلها فاصلة: В Каи́ре тепле́е, чем в Москве́. وبعد الاسم أو الضمير يمكنك حذف чем واستخدام حالة الإضافة: Он ста́рше меня́. Она́ ста́рше бра́та.",
      ],
      tables: [
        {
          caption: { en: "Regular comparatives", ar: "صيغ المقارنة القياسية" },
          head: ["Adjective · الصفة", "Comparative · صيغة المقارنة", "Example · مثال"],
          rows: [
            ["интере́сный", "интере́снее", "Кни́га интере́снее, чем фильм."],
            ["краси́вый", "краси́вее", "Но́чью го́род краси́вее."],
            ["бы́стрый", "быстре́е", "Метро́ быстре́е, чем авто́бус."],
            ["тёплый", "тепле́е", "В Каи́ре тепле́е."],
            ["холо́дный", "холодне́е", "В Москве́ холодне́е."],
            ["ме́дленный", "ме́дленнее", "Говори́те ме́дленнее!"],
          ],
        },
      ],
      examples: [
        { ru: "В Москве́ гора́здо холодне́е, чем в Каи́ре.", en: "It's much colder in Moscow than in Cairo.", ar: "الجوّ في موسكو أبرد بكثير منه في القاهرة." },
        { ru: "Твоя́ сестра́ умне́е меня́!", en: "Your sister is cleverer than me!", ar: "أختك أذكى منّي!" },
        { ru: "Он говори́т быстре́е, чем я.", en: "He speaks faster than I do.", ar: "هو يتكلّم أسرع منّي." },
      ],
    },
    {
      id: "d46-g2",
      title: { en: "Irregular comparatives", ar: "صيغ المقارنة الشاذّة" },
      en: [
        "The most common comparatives are irregular, like 'good → better' in English. Learn them as words: хоро́ший → лу́чше, плохо́й → ху́же, большо́й → бо́льше, ма́ленький → ме́ньше.",
        "Others change the last consonant and end in -е: дорого́й → доро́же, дешёвый → деше́вле, молодо́й → моло́же, высо́кий → вы́ше, коро́ткий → коро́че. ста́рше and моло́же are about age.",
        "бо́льше and ме́ньше also mean 'more' and 'less': Я хочу́ бо́льше вре́мени. And to say what you like more: Мне бо́льше нра́вится чай.",
      ],
      ar: [
        "أكثر صيغ المقارنة شيوعًا شاذّة، مثل good → better في الإنجليزية. احفظها ككلمات مستقلّة: хоро́ший → лу́чше، плохо́й → ху́же، большо́й → бо́льше، ма́ленький → ме́ньше.",
        "وصيغ أخرى يتغيّر فيها الحرف الساكن الأخير وتنتهي بـ -е: дорого́й → доро́же، дешёвый → деше́вле، молодо́й → моло́же، высо́кий → вы́ше، коро́ткий → коро́че. أمّا ста́рше و моло́же فتُستخدمان للحديث عن العمر.",
        "وتعني бо́льше و ме́ньше أيضًا «أكثر» و«أقلّ»: Я хочу́ бо́льше вре́мени. ولتقول ما يعجبك أكثر: Мне бо́льше нра́вится чай.",
      ],
      tables: [
        {
          caption: { en: "Irregular comparatives", ar: "صيغ المقارنة الشاذّة" },
          head: ["Adjective · الصفة", "Comparative · صيغة المقارنة", "Meaning · المعنى"],
          rows: [
            ["хоро́ший", "лу́чше", "better · أفضل"],
            ["плохо́й", "ху́же", "worse · أسوأ"],
            ["большо́й", "бо́льше", "bigger, more · أكبر، أكثر"],
            ["ма́ленький", "ме́ньше", "smaller, less · أصغر، أقلّ"],
            ["дорого́й", "доро́же", "more expensive · أغلى"],
            ["дешёвый", "деше́вле", "cheaper · أرخص"],
            ["ста́рый", "ста́рше", "older (age) · أكبر سنًّا"],
            ["молодо́й", "моло́же", "younger · أصغر سنًّا"],
            ["высо́кий", "вы́ше", "taller, higher · أطول، أعلى"],
            ["коро́ткий", "коро́че", "shorter · أقصر"],
          ],
        },
      ],
      examples: [
        { ru: "Такси́ доро́же, чем метро́, но быстре́е.", en: "A taxi is more expensive than the metro, but faster.", ar: "التاكسي أغلى من المترو، لكنه أسرع." },
        { ru: "Мой брат вы́ше меня́.", en: "My brother is taller than me.", ar: "أخي أطول منّي." },
        { ru: "Мне бо́льше нра́вится Каи́р, а тебе́?", en: "I like Cairo better. And you?", ar: "القاهرة تعجبني أكثر، وأنت؟" },
      ],
    },
    {
      id: "d46-g3",
      title: { en: "The most: са́мый + adjective", ar: "الأكثر: са́мый + صفة" },
      en: [
        "For 'the most …', put са́мый before the adjective. It agrees like any adjective: са́мый большо́й го́род, са́мая дли́нная река́, са́мое вку́сное моро́женое, са́мые у́мные студе́нты.",
        "люби́мый means 'favourite': мой люби́мый фильм, моя́ люби́мая пе́сня. To say what you prefer, use предпочита́ть + accusative: Я предпочита́ю ко́фе.",
      ],
      ar: [
        "لتقول «الأكثر…» ضع са́мый قبل الصفة، وهي تتطابق مثل أيّ صفة: са́мый большо́й го́род، са́мая дли́нная река́، са́мое вку́сное моро́женое، са́мые у́мные студе́нты.",
        "وتعني люби́мый «المفضّل»: мой люби́мый фильм، моя́ люби́мая пе́сня. ولتقول ما تفضّله استخدم предпочита́ть + حالة المفعول به: Я предпочита́ю ко́фе.",
      ],
      tables: [
        {
          caption: { en: "са́мый agrees with its noun", ar: "са́мый تتطابق مع الاسم" },
          head: ["Gender · الجنس", "Example · مثال"],
          rows: [
            ["m · مذكّر", "са́мый большо́й го́род"],
            ["f · مؤنّث", "са́мая дли́нная река́"],
            ["n · محايد", "са́мое вку́сное моро́женое"],
            ["pl · جمع", "са́мые у́мные студе́нты"],
          ],
        },
      ],
      examples: [
        { ru: "Нил — са́мая дли́нная река́ в А́фрике.", en: "The Nile is the longest river in Africa.", ar: "النيل أطول نهر في أفريقيا." },
        { ru: "Москва́ — са́мый большо́й го́род в Росси́и.", en: "Moscow is the biggest city in Russia.", ar: "موسكو أكبر مدينة في روسيا." },
        { ru: "— Како́й твой люби́мый го́род? — Александри́я!", en: "— What's your favourite city? — Alexandria!", ar: "— ما مدينتك المفضّلة؟ — الإسكندرية!" },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Что лу́чше?", en: "Which is better?", ar: "أيّهما أفضل؟" },
    setting: {
      en: "Ahmed is planning a trip to St Petersburg. Around the kitchen table at Anna and Maxim's, the three friends compare drinks, cities and trains.",
      ar: "يخطّط أحمد لرحلة إلى سانت بطرسبرغ. وحول طاولة المطبخ في بيت آنا ومكسيم يقارن الأصدقاء الثلاثة بين المشروبات والمدن والقطارات.",
    },
    lines: [
      { who: "A", name: "Макси́м", ru: "Ахме́д, чай и́ли ко́фе?", en: "Ahmed, tea or coffee?", ar: "أحمد، شاي أم قهوة؟" },
      { who: "A", name: "Ахме́д", ru: "Чай, пожа́луйста. Я предпочита́ю чай.", en: "Tea, please. I prefer tea.", ar: "شاي من فضلك. أنا أفضّل الشاي." },
      { who: "B", name: "А́нна", ru: "Я то́же. По-мо́ему, чай гора́здо лу́чше, чем ко́фе!", en: "Me too. I think tea is much better than coffee!", ar: "وأنا أيضًا. في رأيي، الشاي أفضل بكثير من القهوة!" },
      {
        who: "A", name: "Макси́м", ru: "А по-мо́ему, ко́фе вкусне́е. Ахме́д, а что тебе́ бо́льше нра́вится: Москва́ и́ли Каи́р?",
        en: "And I think coffee tastes better. Ahmed, what do you like more: Moscow or Cairo?",
        ar: "أمّا في رأيي فالقهوة ألذّ. أحمد، أيّهما يعجبك أكثر: موسكو أم القاهرة؟",
      },
      {
        who: "A", name: "Ахме́д", ru: "Тру́дный вопро́с! Москва́ краси́вее, но в Каи́ре тепле́е. И Каи́р ста́рше Москвы́.",
        en: "A difficult question! Moscow is more beautiful, but it's warmer in Cairo. And Cairo is older than Moscow.",
        ar: "سؤال صعب! موسكو أجمل، لكن الجوّ أدفأ في القاهرة. والقاهرة أقدم من موسكو.",
      },
      { who: "B", name: "А́нна", ru: "А в Петербу́рг ты е́дешь на по́езде и́ли на самолёте?", en: "And are you going to St Petersburg by train or by plane?", ar: "وهل ستسافر إلى بطرسبرغ بالقطار أم بالطائرة؟" },
      { who: "A", name: "Ахме́д", ru: "Не зна́ю. Самолёт быстре́е, да?", en: "I don't know. The plane is faster, right?", ar: "لا أعرف. الطائرة أسرع، أليس كذلك؟" },
      {
        who: "A", name: "Макси́м", ru: "Быстре́е, но доро́же. По́езд деше́вле, и он идёт пря́мо в центр.",
        en: "Faster, but more expensive. The train is cheaper, and it goes straight to the centre.",
        ar: "أسرع، لكنها أغلى. القطار أرخص، ويصل مباشرة إلى وسط المدينة.",
      },
      { who: "A", name: "Ахме́д", ru: "Хорошо́, я е́ду на по́езде! А́нна, како́й твой люби́мый го́род?", en: "OK, I'm going by train! Anna, what's your favourite city?", ar: "حسنًا، سأسافر بالقطار! آنا، ما مدينتك المفضّلة؟" },
      { who: "B", name: "А́нна", ru: "Петербу́рг. По-мо́ему, э́то са́мый краси́вый го́род в Росси́и.", en: "St Petersburg. I think it's the most beautiful city in Russia.", ar: "بطرسبرغ. في رأيي، إنها أجمل مدينة في روسيا." },
      { who: "A", name: "Макси́м", ru: "А по-мо́ему, Москва́ лу́чше! Ахме́д, что ты ду́маешь?", en: "And I think Moscow is better! Ahmed, what do you think?", ar: "أمّا في رأيي فموسكو أفضل! أحمد، ما رأيك؟" },
      { who: "A", name: "Ахме́д", ru: "Мо́жно я не бу́ду отвеча́ть?", en: "Can I not answer that?", ar: "هل يمكنني ألّا أجيب؟" },
    ],
  },
  pronunciation: {
    title: { en: "Where is the stress in a comparative?", ar: "أين يقع النبر في صيغة المقارنة؟" },
    en: [
      "Short adjectives usually move the stress onto the ending: бы́стрый → быстре́е, тёплый → тепле́е, у́мный → умне́е. Longer ones keep it on the stem: интере́сный → интере́снее, краси́вый → краси́вее.",
      "In the irregular forms the stress never falls on the ending: лу́чше, ху́же, доро́же, деше́вле, моло́же. The letters чш in лу́чше are read 'tsh'.",
    ],
    ar: [
      "الصفات القصيرة تنقل النبر غالبًا إلى النهاية: бы́стрый → быстре́е، тёплый → тепле́е، у́мный → умне́е. أمّا الطويلة فتُبقيه على الجذر: интере́сный → интере́снее، краси́вый → краси́вее.",
      "في الصيغ الشاذّة لا يقع النبر أبدًا على النهاية: лу́чше، ху́же، доро́же، деше́вле، моло́же. ويُقرأ الحرفان чш في лу́чше «تش».",
    ],
    drills: [
      { ru: "быстре́е", say: "bystryEye", focus: { en: "The stress jumps to the ending.", ar: "ينتقل النبر إلى النهاية." } },
      { ru: "тепле́е", say: "tiplyEye", focus: { en: "тёплый → тепле́е: the ё becomes an unstressed е, said 'i'.", ar: "тёплый → тепле́е: يتحوّل ё إلى е غير منبورة تُنطق «i»." } },
      { ru: "интере́снее", say: "intiryEsniye", focus: { en: "The stress stays on -ре-, as in интере́сно.", ar: "يبقى النبر على -ре- كما في интере́сно." } },
      { ru: "краси́вее", say: "krasIviye", focus: { en: "The stress is on -си-; the ending is a short 'iye'.", ar: "النبر على -си-، والنهاية «iye» قصيرة." } },
      { ru: "лу́чше", say: "lUtshe", focus: { en: "чш = 'tsh'.", ar: "чш تُنطق «تش»." } },
      { ru: "деше́вле", say: "dishEvlye", focus: { en: "The stress is on -ше-; ш is always hard, so the е after it sounds like 'e'.", ar: "النبر على -ше-، و ш صلبة دائمًا فتُنطق е بعدها «e»." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose: The metro is cheaper than a taxi.", ar: "اختر: المترو أرخص من التاكسي." },
      options: ["Метро́ дешёвый, чем такси́.", "Метро́ деше́вле, чем такси́.", "Метро́ дёшево, чем такси́."],
      answer: 1,
      why: { en: "дешёвый has an irregular comparative: деше́вле.", ar: "للصفة дешёвый صيغة مقارنة شاذّة: деше́вле." },
    },
    {
      kind: "choice",
      prompt: { en: "What is the comparative of хоро́ший?", ar: "ما صيغة المقارنة من хоро́ший؟" },
      options: ["лу́чше", "бо́льше", "ху́же"],
      answer: 0,
      why: { en: "хоро́ший → лу́чше is irregular, like good → better.", ar: "хоро́ший → лу́чше صيغة شاذّة، مثل good → better." },
    },
    {
      kind: "choice",
      prompt: { en: "Choose the right form: the most beautiful city.", ar: "اختر الصيغة الصحيحة: أجمل مدينة." },
      options: ["са́мая краси́вый го́род", "са́мый краси́вый го́род", "са́мое краси́вое го́род"],
      answer: 1,
      why: { en: "го́род is masculine, so both words are masculine: са́мый краси́вый.", ar: "го́род مذكّر، فتأتي الكلمتان بالمذكّر: са́мый краси́вый." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with тепло́ in the comparative.", ar: "أكمل بصيغة المقارنة من тепло́." },
      ru: "В Каи́ре ___, чем в Москве́.",
      answers: ["тепле́е"],
      why: { en: "тёплый / тепло́ → тепле́е, with the stress on the ending.", ar: "тёплый / тепло́ → тепле́е، والنبر على النهاية." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with бы́стрый in the comparative.", ar: "أكمل بصيغة المقارنة من бы́стрый." },
      ru: "Самолёт ___, чем по́езд.",
      answers: ["быстре́е"],
      why: { en: "A short adjective takes -е́е with the stress on the ending.", ar: "الصفة القصيرة تأخذ -е́е والنبر على النهاية." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: My brother is older than I am.", ar: "أكمل: أخي أكبر منّي سنًّا." },
      ru: "Мой брат ста́рше, ___ я.",
      answers: ["чем"],
      why: { en: "'Than' is чем, after a comma.", ar: "«من» في المقارنة هي чем، وتأتي بعد فاصلة." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: This is the most beautiful park in Moscow.", ar: "أكمل: هذه أجمل حديقة في موسكو." },
      ru: "Э́то ___ краси́вый парк в Москве́.",
      answers: ["са́мый"],
      why: { en: "са́мый + adjective = the most …", ar: "са́мый + صفة = الأكثر…" },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with интере́сный in the comparative.", ar: "أكمل بصيغة المقارنة من интере́сный." },
      ru: "Кни́га ___, чем фильм.",
      answers: ["интере́снее"],
      why: { en: "A longer adjective keeps its stress: интере́снее.", ar: "الصفة الطويلة تحتفظ بنبرها: интере́снее." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I prefer tea.", ar: "كوّن الجملة: أفضّل الشاي." },
      tokens: ["чай", "предпочита́ю", "Я"],
      answers: ["Я предпочита́ю чай."],
      why: { en: "предпочита́ть + accusative: чай.", ar: "предпочита́ть + حالة المفعول به: чай." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: In my opinion, tea is better than coffee.", ar: "كوّن الجملة: في رأيي، الشاي أفضل من القهوة." },
      tokens: ["чем", "ко́фе", "По-мо́ему", "лу́чше", "чай"],
      answers: ["По-мо́ему, чай лу́чше, чем ко́фе."],
      why: { en: "по-мо́ему opens the sentence, and чем links the two things you compare.", ar: "по-мо́ему تفتتح الجملة، و чем تربط بين الشيئين المقارَنين." },
    },
    {
      kind: "translate",
      prompt: { en: "My favourite city is Alexandria.", ar: "مدينتي المفضّلة هي الإسكندرية." },
      answers: ["Мой люби́мый го́род — Александри́я.", "Мой люби́мый го́род Александри́я.", "Александри́я — мой люби́мый го́род."],
      why: { en: "люби́мый agrees with го́род: мой люби́мый го́род.", ar: "люби́мый تتطابق مع го́род: мой люби́мый го́род." },
    },
    {
      kind: "translate",
      prompt: { en: "Speak more slowly, please.", ar: "تكلّم ببطء أكثر من فضلك." },
      answers: ["Говори́те ме́дленнее, пожа́луйста.", "Говори́те, пожа́луйста, ме́дленнее.", "Пожа́луйста, говори́те ме́дленнее."],
      why: { en: "ме́дленно → ме́дленнее: the stress stays on the first syllable.", ar: "ме́дленно → ме́дленнее: يبقى النبر على المقطع الأول." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the speaker say?", ar: "استمع. ماذا يقول المتكلّم؟" },
      ru: "Такси́ доро́же, чем метро́.",
      listen: true,
      options: [
        "The metro is more expensive than a taxi. · المترو أغلى من التاكسي.",
        "A taxi is more expensive than the metro. · التاكسي أغلى من المترو.",
        "A taxi is faster than the metro. · التاكسي أسرع من المترو.",
      ],
      answer: 1,
      why: { en: "доро́же means more expensive, and the thing named first is the one that costs more.", ar: "доро́же تعني أغلى، والشيء المذكور أولًا هو الأغلى." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Who is younger?", ar: "استمع. مَن الأصغر سنًّا؟" },
      ru: "Моя́ сестра́ моло́же меня́.",
      listen: true,
      options: ["the speaker · المتكلّم", "the speaker's sister · أخت المتكلّم", "They are the same age. · لهما العمر نفسه."],
      answer: 1,
      why: { en: "моло́же меня́ means 'younger than me', so the sister is younger.", ar: "моло́же меня́ تعني «أصغر منّي»، فالأخت هي الأصغر." },
    },
  ],
  topics: ["comparatives", "adjectives"],
  search: ["Russian comparative adjectives explained", "Russian superlative самый", "Russian comparatives лучше хуже больше меньше"],
  speaking: {
    scenario: {
      en: "A friendly debate: compare Cairo and Moscow, tea and coffee, trains and planes, and say what your favourite things are.",
      ar: "نقاش ودّي: قارن بين القاهرة وموسكو، والشاي والقهوة، والقطار والطائرة، وقل ما هي أشياؤك المفضّلة.",
    },
    tutorBrief:
      "Play Maxim (Максим), Anna's cheerful brother, who loves a friendly argument. Ask the learner to compare pairs: Каир или Москва? Чай или кофе? Поезд или самолёт? Метро или такси? Each time give the opposite opinion with a comparative (А по-моему, Москва красивее!) so they must defend theirs with чем, гораздо, лучше / хуже, больше / меньше, дороже / дешевле, быстрее / медленнее, старше / моложе. Then ask about favourites: Какой твой любимый город? Какой твой любимый фильм? Что ты предпочитаешь? Model the stress of comparatives when the learner gets it wrong (быстрЕе, теплЕе, but красИвее, интерЕснее). End by agreeing on one thing (Согласен!).",
    prompts: [
      { ru: "По-мо́ему, Москва́ краси́вее, но в Каи́ре тепле́е.", en: "In my opinion, Moscow is more beautiful, but it's warmer in Cairo.", ar: "في رأيي، موسكو أجمل، لكن الجوّ أدفأ في القاهرة." },
      { ru: "Я предпочита́ю чай: он лу́чше, чем ко́фе.", en: "I prefer tea: it's better than coffee.", ar: "أفضّل الشاي: إنه أفضل من القهوة." },
      { ru: "Самолёт быстре́е, но по́езд деше́вле.", en: "The plane is faster, but the train is cheaper.", ar: "الطائرة أسرع، لكن القطار أرخص." },
      { ru: "Мой люби́мый го́род — Александри́я.", en: "My favourite city is Alexandria.", ar: "مدينتي المفضّلة هي الإسكندرية." },
      { ru: "Э́то са́мый краси́вый го́род в Еги́пте.", en: "It's the most beautiful city in Egypt.", ar: "إنها أجمل مدينة في مصر." },
    ],
  },
  journal: {
    en: "Write 5–8 sentences comparing two cities you know (Cairo and Moscow, or others): which one is bigger, older, warmer, more expensive or more beautiful, and which one you like more. End with your favourite place (Мой люби́мый…).",
    ar: "اكتب من ٥ إلى ٨ جمل تقارن فيها بين مدينتين تعرفهما (القاهرة وموسكو أو غيرهما): أيّهما أكبر وأقدم وأدفأ وأغلى وأجمل، وأيّهما تعجبك أكثر. واختم بمكانك المفضّل (Мой люби́мый…).",
  },
  culture: {
    en: "Moscow and St Petersburg love to compare themselves. Moscow is bigger and faster-paced; Petersburg, the 'northern capital', is famous for its canals and white nights. They even use different words: shawarma is шаурма́ in Moscow but шаве́рма in Petersburg. The fast Сапса́н train links the two cities in about four hours.",
    ar: "تحبّ موسكو وسانت بطرسبرغ المقارنة بينهما. فموسكو أكبر وأسرع إيقاعًا، أمّا بطرسبرغ، «العاصمة الشمالية»، فمشهورة بقنواتها ولياليها البيضاء. بل إنهما تستخدمان كلمات مختلفة: فالشاورما في موسكو шаурма́ وفي بطرسبرغ шаве́рма. ويربط قطار Сапса́н السريع بين المدينتين في نحو أربع ساعات.",
  },
};

const DAY_47: Day = {
  n: 47,
  week: 7,
  kind: "lesson",
  title: { ru: "Пого́да и здоро́вье", en: "Weather and health", ar: "الطقس والصحة" },
  goals: [
    { en: "Talk about the weather: temperature, rain, snow, sun and wind.", ar: "أن تتحدّث عن الطقس: درجة الحرارة والمطر والثلج والشمس والرياح." },
    { en: "Tell a doctor what hurts and since when: У меня́ боли́т голова́.", ar: "أن تخبر الطبيب بما يؤلمك ومنذ متى: У меня́ боли́т голова́." },
    { en: "Say what you need to do with на́до / ну́жно + infinitive.", ar: "أن تقول ما يجب عليك فعله باستخدام на́до / ну́жно + المصدر." },
  ],
  words: [
    {
      id: "d47-01", ru: "пого́да", say: "pagOda", en: "weather", ar: "الطقس", pos: "noun", g: "f",
      ex: { ru: "Кака́я сего́дня пого́да?", en: "What's the weather like today?", ar: "كيف الطقس اليوم؟" },
    },
    {
      id: "d47-02", ru: "дождь", say: "dosht'", en: "rain", ar: "مطر", pos: "noun", g: "m",
      ex: { ru: "Сего́дня идёт дождь.", en: "It's raining today.", ar: "إنها تمطر اليوم." },
      note: { en: "Rain 'goes' in Russian: Идёт дождь. — It's raining. The end sounds like 'sht''.", ar: "المطر «يمشي» في الروسية: Идёт дождь. — إنها تمطر. وتُنطق نهاية الكلمة «شت» لينة." },
    },
    {
      id: "d47-03", ru: "снег", say: "snyek", en: "snow", ar: "ثلج", pos: "noun", g: "m",
      ex: { ru: "Вчера́ шёл снег.", en: "It snowed yesterday.", ar: "تساقط الثلج أمس." },
    },
    {
      id: "d47-04", ru: "со́лнце", say: "sOntse", en: "sun", ar: "شمس", pos: "noun", g: "n",
      ex: { ru: "В Каи́ре всегда́ со́лнце.", en: "It's always sunny in Cairo.", ar: "الشمس مشرقة دائمًا في القاهرة." },
      note: { en: "The л is silent: sOntse.", ar: "حرف л لا يُنطق: sOntse." },
    },
    {
      id: "d47-05", ru: "ве́тер", say: "vyEtir", en: "wind", ar: "ريح، رياح", pos: "noun", g: "m",
      ex: { ru: "На у́лице ве́тер и дождь.", en: "It's windy and rainy outside.", ar: "في الخارج رياح ومطر." },
    },
    {
      id: "d47-06", ru: "гра́дус", say: "grAdus", en: "degree (of temperature)", ar: "درجة (حرارة)", pos: "noun", g: "m",
      forms: "два гра́дуса, пять гра́дусов",
      ex: { ru: "Сего́дня ми́нус пять гра́дусов.", en: "It's minus five degrees today.", ar: "درجة الحرارة اليوم خمس تحت الصفر." },
    },
    {
      id: "d47-07", ru: "жа́рко", say: "zhArka", en: "hot (weather); мне жа́рко = I'm hot", ar: "حارّ (للطقس)؛ мне жа́рко = أشعر بالحرّ", pos: "adv",
      ex: { ru: "Ле́том в Каи́ре о́чень жа́рко.", en: "In summer it's very hot in Cairo.", ar: "الجوّ حارّ جدًّا في القاهرة صيفًا." },
    },
    {
      id: "d47-08", ru: "зима́", say: "zimA", en: "winter", ar: "الشتاء", pos: "noun", g: "f",
      ex: { ru: "Зимо́й в Москве́ хо́лодно.", en: "It's cold in Moscow in winter.", ar: "الجوّ بارد في موسكو شتاءً." },
      note: { en: "In winter: зимо́й (the instrumental).", ar: "في الشتاء: зимо́й (حالة الأداة)." },
    },
    {
      id: "d47-09", ru: "ле́то", say: "lyEta", en: "summer", ar: "الصيف", pos: "noun", g: "n",
      ex: { ru: "Ле́том мы е́здим на мо́ре.", en: "In summer we go to the seaside.", ar: "في الصيف نذهب إلى البحر." },
      note: { en: "In summer: ле́том.", ar: "في الصيف: ле́том." },
    },
    {
      id: "d47-10", ru: "голова́", say: "galavA", en: "head", ar: "رأس", pos: "noun", g: "f",
      ex: { ru: "У меня́ боли́т голова́.", en: "I have a headache.", ar: "رأسي يؤلمني." },
    },
    {
      id: "d47-11", ru: "го́рло", say: "gOrla", en: "throat", ar: "حلق", pos: "noun", g: "n",
      ex: { ru: "У него́ боли́т го́рло.", en: "He has a sore throat.", ar: "حلقه يؤلمه." },
    },
    {
      id: "d47-12", ru: "боли́т", say: "balIt", en: "(it) hurts", ar: "يؤلم", pos: "verb",
      forms: "боли́т, боля́т",
      ex: { ru: "Что у вас боли́т?", en: "What hurts? / Where does it hurt?", ar: "ما الذي يؤلمك؟" },
      note: { en: "For several things use боля́т: У меня́ боля́т глаза́.", ar: "لأكثر من شيء استخدم боля́т: У меня́ боля́т глаза́." },
    },
    {
      id: "d47-13", ru: "температу́ра", say: "timpiratUra", en: "temperature; a fever", ar: "درجة الحرارة؛ حمّى", pos: "noun", g: "f",
      ex: { ru: "У меня́ температу́ра.", en: "I have a fever.", ar: "عندي حمّى." },
    },
    {
      id: "d47-14", ru: "лека́рство", say: "likArstva", en: "medicine", ar: "دواء", pos: "noun", g: "n",
      ex: { ru: "Мне ну́жно купи́ть лека́рство.", en: "I need to buy some medicine.", ar: "أحتاج إلى شراء دواء." },
    },
    {
      id: "d47-15", ru: "на́до", say: "nAda", en: "(it is) necessary, need to", ar: "يجب، يلزم", pos: "adv",
      ex: { ru: "Мне на́до к врачу́.", en: "I need to see a doctor.", ar: "يجب أن أذهب إلى الطبيب." },
      note: { en: "Like ну́жно, with the person in the dative: Тебе́ на́до отдыха́ть.", ar: "مثل ну́жно، ويكون الشخص في حالة المستفيد: Тебе́ на́до отдыха́ть." },
    },
    {
      id: "d47-16", ru: "здоро́вье", say: "zdarOv'ye", en: "health", ar: "الصحّة", pos: "noun", g: "n",
      ex: { ru: "Как здоро́вье?", en: "How's your health? / How are you feeling?", ar: "كيف صحّتك؟" },
    },
    {
      id: "d47-17", ru: "бо́лен", say: "bOlin", en: "ill, sick (of a man)", ar: "مريض (عن رجل)", pos: "adj",
      forms: "больна́ (f), больны́ (pl)",
      ex: { ru: "Сего́дня Ахме́д бо́лен.", en: "Ahmed is ill today.", ar: "أحمد مريض اليوم." },
      note: { en: "A short adjective: Я бо́лен (a man), Я больна́ (a woman).", ar: "صفة قصيرة: Я бо́лен (رجل)، Я больна́ (امرأة)." },
    },
    {
      id: "d47-18", ru: "плюс", say: "plyus", en: "plus (above zero)", ar: "زائد (فوق الصفر)", pos: "noun", g: "m",
      ex: { ru: "Сего́дня плюс два́дцать.", en: "It's plus twenty today.", ar: "الحرارة اليوم عشرون درجة فوق الصفر." },
    },
    {
      id: "d47-19", ru: "ми́нус", say: "mInus", en: "minus (below zero)", ar: "ناقص (تحت الصفر)", pos: "noun", g: "m",
      ex: { ru: "Зимо́й в Москве́ ча́сто ми́нус де́сять.", en: "In winter it's often minus ten in Moscow.", ar: "في الشتاء تنخفض الحرارة في موسكو غالبًا إلى عشر درجات تحت الصفر." },
    },
    {
      id: "d47-20", ru: "живо́т", say: "zhivOt", en: "stomach, belly", ar: "بطن، معدة", pos: "noun", g: "m",
      ex: { ru: "У ребёнка боли́т живо́т.", en: "The child has a stomach ache.", ar: "بطن الطفل يؤلمه." },
    },
    {
      id: "d47-21", ru: "Что с ва́ми?", say: "shto s vAmi?", en: "What's wrong? (formal; literally: what is with you?)", ar: "ما بك؟ (رسمي)", pos: "phrase",
      note: { en: "To a friend: Что с тобо́й?", ar: "لصديق: Что с тобо́й؟" },
    },
    {
      id: "d47-22", ru: "Выздора́вливайте!", say: "vyzdarAvlivaytye!", en: "Get well soon! (formal, or to several people)", ar: "أتمنّى لك الشفاء العاجل! (رسمي أو للجمع)", pos: "phrase",
      note: { en: "To a friend: Выздора́вливай!", ar: "لصديق: Выздора́вливай!" },
    },
  ],
  grammar: [
    {
      id: "d47-g1",
      title: { en: "Talking about the weather", ar: "الحديث عن الطقس" },
      en: [
        "Weather sentences often have no subject, like 'it' in English: Сего́дня хо́лодно. Ле́том жа́рко. The question is Кака́я сего́дня пого́да?",
        "Rain and snow 'go' in Russian: идёт дождь, идёт снег; in the past шёл дождь, шёл снег. Temperature: плюс пять гра́дусов (+5°), ми́нус де́сять гра́дусов (−10°). гра́дус follows the rule you know from рубль: 1 гра́дус, 2–4 гра́дуса, 5–20 гра́дусов.",
        "Seasons in the instrumental answer 'when?' with no preposition: зимо́й (in winter), ле́том (in summer) — just like у́тром and ве́чером.",
      ],
      ar: [
        "جمل الطقس غالبًا بلا فاعل: Сего́дня хо́лодно. Ле́том жа́рко. والسؤال هو Кака́я сего́дня пого́да؟",
        "المطر والثلج «يمشيان» في الروسية: идёт дождь، идёт снег، وفي الماضي: шёл дождь، шёл снег. ودرجة الحرارة: плюс пять гра́дусов (+٥°)، ми́нус де́сять гра́дусов (−١٠°). وكلمة гра́дус تتبع القاعدة التي تعرفها من рубль: 1 гра́дус، 2–4 гра́дуса، 5–20 гра́дусов.",
        "الفصول في حالة الأداة تجيب عن «متى؟» دون حرف جر: зимо́й (في الشتاء)، ле́том (في الصيف)، تمامًا مثل у́тром و ве́чером.",
      ],
      tables: [
        {
          caption: { en: "Weather phrases", ar: "عبارات الطقس" },
          head: ["Russian · بالروسية", "Meaning · المعنى"],
          rows: [
            ["Сего́дня жа́рко.", "It's hot today. · الجوّ حارّ اليوم."],
            ["Сего́дня хо́лодно.", "It's cold today. · الجوّ بارد اليوم."],
            ["Идёт дождь.", "It's raining. · إنها تمطر."],
            ["Идёт снег.", "It's snowing. · إنها تثلج."],
            ["На у́лице со́лнце.", "It's sunny outside. · الشمس مشرقة في الخارج."],
            ["Сего́дня ве́тер.", "It's windy today. · الجوّ عاصف اليوم."],
            ["Плюс два́дцать гра́дусов.", "Plus twenty degrees. · عشرون درجة فوق الصفر."],
            ["Ми́нус пять гра́дусов.", "Minus five degrees. · خمس درجات تحت الصفر."],
          ],
        },
      ],
      examples: [
        { ru: "— Кака́я сего́дня пого́да? — Хо́лодно, ми́нус пять.", en: "— What's the weather like today? — Cold, minus five.", ar: "— كيف الطقس اليوم؟ — بارد، خمس درجات تحت الصفر." },
        { ru: "Вчера́ шёл снег, а сего́дня идёт дождь.", en: "Yesterday it snowed, and today it's raining.", ar: "أمس تساقط الثلج، واليوم تمطر." },
        { ru: "Ле́том в Каи́ре плюс три́дцать пять гра́дусов.", en: "In summer it's plus thirty-five degrees in Cairo.", ar: "في الصيف تبلغ الحرارة في القاهرة خمسًا وثلاثين درجة." },
      ],
    },
    {
      id: "d47-g2",
      title: { en: "Health: У меня́ боли́т…, мне пло́хо, на́до…", ar: "الصحّة: У меня́ боли́т…، мне пло́хо، на́до…" },
      en: [
        "To say what hurts, use у + the genitive + боли́т + the body part in the nominative: У меня́ боли́т голова́. For more than one thing use боля́т: У меня́ боля́т глаза́. The doctor asks: Что у вас боли́т?",
        "How you feel is in the dative, like мне хо́лодно: Мне пло́хо. — I feel bad. Мне лу́чше. — I feel better. 'Ill' is a short adjective: бо́лен (a man), больна́ (a woman).",
        "на́до and ну́жно + infinitive both mean 'need to, must', with the person in the dative: Вам на́до отдыха́ть. Мне ну́жно купи́ть лека́рство.",
      ],
      ar: [
        "لتقول ما يؤلمك استخدم у + حالة الإضافة + боли́т + عضو الجسم في حالة الرفع: У меня́ боли́т голова́. ولأكثر من شيء استخدم боля́т: У меня́ боля́т глаза́. ويسأل الطبيب: Что у вас боли́т؟",
        "الإحساس يُعبَّر عنه بحالة المستفيد، مثل мне хо́лодно: Мне пло́хо. — أشعر بتوعّك. Мне лу́чше. — أشعر بتحسّن. وكلمة «مريض» صفة قصيرة: бо́лен (للرجل)، больна́ (للمرأة).",
        "на́до و ну́жно + المصدر كلتاهما تعني «يجب، يلزم»، ويكون الشخص في حالة المستفيد: Вам на́до отдыха́ть. Мне ну́жно купи́ть лека́рство.",
      ],
      tables: [
        {
          caption: { en: "What hurts?", ar: "ماذا يؤلم؟" },
          head: ["Who · مَن", "Russian · بالروسية"],
          rows: [
            ["я", "У меня́ боли́т голова́."],
            ["ты", "У тебя́ боли́т го́рло?"],
            ["он", "У него́ боли́т живо́т."],
            ["она́", "У неё боля́т глаза́."],
            ["вы", "Что у вас боли́т?"],
          ],
        },
      ],
      examples: [
        { ru: "— Что с ва́ми? — Мне пло́хо, у меня́ температу́ра.", en: "— What's wrong? — I feel bad, I have a fever.", ar: "— ما بك؟ — أشعر بتوعّك، وعندي حمّى." },
        { ru: "Тебе́ на́до пить чай с лимо́ном.", en: "You need to drink tea with lemon.", ar: "يجب أن تشرب الشاي بالليمون." },
        { ru: "Ма́ма больна́: у неё боли́т го́рло.", en: "Mum is ill: she has a sore throat.", ar: "أمّي مريضة: حلقها يؤلمها." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "У врача́", en: "At the doctor's", ar: "عند الطبيب" },
    setting: {
      en: "A cold November morning in Moscow. Ahmed feels ill and goes to see a doctor at the university clinic.",
      ar: "صباح بارد من أيام نوفمبر في موسكو. يشعر أحمد بالمرض فيذهب إلى الطبيبة في عيادة الجامعة.",
    },
    lines: [
      { who: "B", name: "Врач", ru: "Здра́вствуйте! Сади́тесь, пожа́луйста. Что с ва́ми?", en: "Hello! Please sit down. What's wrong?", ar: "مرحبًا! تفضّل بالجلوس. ما بك؟" },
      { who: "A", name: "Ахме́д", ru: "Мне пло́хо. У меня́ боли́т голова́, и го́рло то́же.", en: "I feel bad. I have a headache, and a sore throat too.", ar: "أشعر بتوعّك. رأسي يؤلمني، وحلقي أيضًا." },
      { who: "B", name: "Врач", ru: "Давно́?", en: "For how long? (literally: for long?)", ar: "منذ متى؟" },
      { who: "A", name: "Ахме́д", ru: "Два дня. И ещё у меня́ температу́ра.", en: "Two days. And I also have a fever.", ar: "منذ يومين. وعندي حمّى أيضًا." },
      { who: "B", name: "Врач", ru: "Кака́я?", en: "How high?", ar: "كم درجتها؟" },
      { who: "A", name: "Ахме́д", ru: "Три́дцать во́семь.", en: "Thirty-eight.", ar: "ثمانٍ وثلاثون." },
      { who: "B", name: "Врач", ru: "Так… Вы больны́. Вам на́до два дня отдыха́ть до́ма.", en: "I see… You're ill. You need to rest at home for two days.", ar: "حسنًا… أنت مريض. يجب أن ترتاح في البيت يومين." },
      { who: "A", name: "Ахме́д", ru: "А лека́рство?", en: "And medicine?", ar: "والدواء؟" },
      {
        who: "B", name: "Врач", ru: "Вот лека́рство. Его́ ну́жно пить у́тром и ве́чером. И на́до мно́го пить: чай с лимо́ном, во́ду.",
        en: "Here is the medicine. Take it in the morning and in the evening. And you need to drink a lot: tea with lemon, water.",
        ar: "هذا هو الدواء. يجب أن تتناوله صباحًا ومساءً. ويجب أن تشرب كثيرًا: شايًا بالليمون، وماءً.",
      },
      {
        who: "A", name: "Ахме́д", ru: "Спаси́бо! Как хо́лодно сего́дня! В Каи́ре сейча́с плюс два́дцать пять.",
        en: "Thank you! It's so cold today! In Cairo it's plus twenty-five right now.",
        ar: "شكرًا! ما أشدّ البرد اليوم! الحرارة الآن في القاهرة خمس وعشرون درجة.",
      },
      {
        who: "B", name: "Врач", ru: "А у нас ми́нус пять и идёт снег. Иди́те домо́й и отдыха́йте. Выздора́вливайте!",
        en: "And here it's minus five and snowing. Go home and rest. Get well soon!",
        ar: "أمّا عندنا فخمس درجات تحت الصفر ويتساقط الثلج. اذهب إلى البيت واسترح. أتمنّى لك الشفاء العاجل!",
      },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо, до свида́ния!", en: "Thank you, goodbye!", ar: "شكرًا، إلى اللقاء!" },
    ],
  },
  pronunciation: {
    title: { en: "Silent letters and devoiced endings", ar: "حروف لا تُنطق ونهايات مهموسة" },
    en: [
      "Some consonant groups lose a letter in speech: in со́лнце the л is silent (sOntse), just like the first в in здра́вствуйте.",
      "At the end of a word a voiced consonant becomes voiceless: снег → snyek, дождь → dosht'. And ь before е gives a separate 'y' sound: здоро́вье → zdarOv'ye.",
    ],
    ar: [
      "تفقد بعض مجموعات الحروف الساكنة حرفًا في النطق: في со́лнце لا يُنطق л (sOntse)، تمامًا مثل в الأولى في здра́вствуйте.",
      "في آخر الكلمة يصبح الحرف المجهور مهموسًا: снег → snyek، дождь → dosht'. والعلامة اللينة ь قبل е تُضيف صوت «y» مستقلًّا: здоро́вье → zdarOv'ye.",
    ],
    drills: [
      { ru: "со́лнце", say: "sOntse", focus: { en: "Skip the л.", ar: "لا تنطق л." } },
      { ru: "Идёт дождь.", say: "idyOt dosht'.", focus: { en: "ждь at the end sounds like a soft 'sht''.", ar: "ждь في آخر الكلمة تُنطق «شت» لينة." } },
      { ru: "Идёт снег.", say: "idyOt snyek.", focus: { en: "The final г sounds like k.", ar: "حرف г في آخر الكلمة يُنطق k." } },
      { ru: "Как здоро́вье?", say: "kak zdarOv'ye?", focus: { en: "ье is a separate 'ye'.", ar: "ье تُنطق «يه» منفصلة." } },
      { ru: "У меня́ боли́т го́рло.", say: "u minyA balIt gOrla.", focus: { en: "The unstressed о at the end of го́рло is a short 'a'.", ar: "حرف о غير المنبور في آخر го́рло يُنطق «a» قصيرة." } },
      { ru: "Выздора́вливайте!", say: "vyzdarAvlivaytye!", focus: { en: "One long word with one stress, on -рав-.", ar: "كلمة طويلة بنبر واحد على -рав-." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "How do you ask about the weather?", ar: "كيف تسأل عن الطقس؟" },
      options: ["Кака́я сего́дня пого́да?", "Како́й сего́дня день?", "Что с ва́ми?"],
      answer: 0,
      why: { en: "пого́да means weather, and кака́я agrees with it.", ar: "пого́да تعني الطقس، و кака́я تتطابق معها." },
    },
    {
      kind: "choice",
      prompt: { en: "Which sentence means 'It's snowing'?", ar: "أيّ جملة تعني «إنها تثلج»؟" },
      options: ["Идёт дождь.", "Идёт снег.", "Сего́дня жа́рко."],
      answer: 1,
      why: { en: "Snow 'goes' in Russian: идёт снег.", ar: "الثلج «يمشي» في الروسية: идёт снег." },
    },
    {
      kind: "choice",
      prompt: { en: "Choose: My eyes hurt.", ar: "اختر: عيناي تؤلمانني." },
      options: ["У меня́ боли́т глаза́.", "У меня́ боля́т глаза́.", "Я боли́т глаза́."],
      answer: 1,
      why: { en: "глаза́ is plural, so the verb is боля́т.", ar: "глаза́ جمع، فيكون الفعل боля́т." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: I have a headache.", ar: "أكمل: رأسي يؤلمني." },
      ru: "У меня́ боли́т ___.",
      answers: ["голова́"],
      why: { en: "The body part stays in the nominative: голова́.", ar: "يبقى عضو الجسم في حالة الرفع: голова́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: minus ten degrees.", ar: "أكمل: عشر درجات تحت الصفر." },
      ru: "Сего́дня ми́нус де́сять ___.",
      answers: ["гра́дусов"],
      why: { en: "After 5–20 you need гра́дусов.", ar: "بعد الأعداد من ٥ إلى ٢٠ نستخدم гра́дусов." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: I need to see a doctor.", ar: "أكمل: يجب أن أذهب إلى الطبيب." },
      ru: "Мне ___ к врачу́.",
      answers: ["на́до", "ну́жно"],
      why: { en: "на́до or ну́жно, with the dative мне.", ar: "на́до أو ну́жно، مع صيغة المستفيد мне." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: It's cold in Moscow in winter.", ar: "أكمل: الجوّ بارد في موسكو شتاءً." },
      ru: "___ в Москве́ хо́лодно.",
      answers: ["Зимо́й"],
      why: { en: "'In winter' is зимо́й, the instrumental with no preposition.", ar: "«في الشتاء» هي зимо́й، أي حالة الأداة دون حرف جر." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Mum is ill.", ar: "أكمل: أمّي مريضة." },
      ru: "Ма́ма ___: у неё температу́ра.",
      answers: ["больна́"],
      why: { en: "A woman is больна́; a man is бо́лен.", ar: "المرأة больна́، والرجل бо́лен." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I have a sore throat.", ar: "كوّن الجملة: حلقي يؤلمني." },
      tokens: ["го́рло", "У", "боли́т", "меня́"],
      answers: ["У меня́ боли́т го́рло.", "У меня́ го́рло боли́т."],
      why: { en: "у меня́ + боли́т + the body part.", ar: "у меня́ + боли́т + عضو الجسم." },
    },
    {
      kind: "translate",
      prompt: { en: "It's hot in Cairo in summer.", ar: "الجوّ حارّ في القاهرة صيفًا." },
      answers: ["Ле́том в Каи́ре жа́рко.", "В Каи́ре ле́том жа́рко.", "В Каи́ре жа́рко ле́том."],
      why: { en: "ле́том means 'in summer', and жа́рко needs no subject.", ar: "ле́том تعني «في الصيف»، و жа́рко لا تحتاج إلى فاعل." },
    },
    {
      kind: "translate",
      prompt: { en: "What's wrong? (formal)", ar: "ما بك؟ (رسمي)" },
      answers: ["Что с ва́ми?"],
      why: { en: "с + the instrumental ва́ми; to a friend you say Что с тобо́й?", ar: "с + صيغة حالة الأداة ва́ми، ولصديق تقول Что с тобо́й؟" },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What's the weather like?", ar: "استمع. كيف الطقس؟" },
      ru: "Сего́дня плюс пять и идёт дождь.",
      listen: true,
      options: ["−5 and snowing · خمس تحت الصفر وثلج", "+5 and sunny · خمس فوق الصفر وشمس", "+5 and raining · خمس فوق الصفر ومطر"],
      answer: 2,
      why: { en: "плюс пять is +5, and идёт дождь means it's raining.", ar: "плюс пять تعني خمس درجات فوق الصفر، و идёт дождь تعني أنها تمطر." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What hurts?", ar: "استمع. ما الذي يؤلم؟" },
      ru: "У меня́ боли́т живо́т.",
      listen: true,
      options: ["the stomach · البطن", "the throat · الحلق", "the head · الرأس"],
      answer: 0,
      why: { en: "живо́т means stomach.", ar: "живо́т تعني البطن." },
    },
  ],
  topics: ["weather", "health"],
  search: ["Russian weather vocabulary погода", "Russian at the doctor у меня болит", "Russian seasons зимой летом весной осенью"],
  speaking: {
    scenario: {
      en: "At the doctor's: explain what hurts, since when and what your temperature is, and ask about medicine. Then make small talk about the weather.",
      ar: "عند الطبيب: اشرح ما يؤلمك ومنذ متى وكم درجة حرارتك، واسأل عن الدواء. ثم تبادل حديثًا قصيرًا عن الطقس.",
    },
    tutorBrief:
      "Play a kind doctor (Врач) at a Moscow clinic. Greet the learner (Здравствуйте! Садитесь. Что с вами?) and ask: Что у вас болит? Давно? У вас есть температура? Какая? Guide them to use У меня болит голова / горло / живот, У меня болят глаза, Мне плохо, and numbers for their temperature. Prescribe rest and medicine with надо / нужно + infinitive (Вам надо отдыхать, лекарство нужно пить утром и вечером). Then chat about the weather: Какая сегодня погода? Сколько градусов? Идёт снег? А какая погода в Каире? Correct болит / болят and the endings of градус (градуса, градусов) by repeating the right form. Finish with Выздоравливайте!",
    prompts: [
      { ru: "Мне пло́хо. У меня́ боли́т голова́.", en: "I feel bad. I have a headache.", ar: "أشعر بتوعّك. رأسي يؤلمني." },
      { ru: "У меня́ температу́ра три́дцать во́семь.", en: "I have a temperature of thirty-eight.", ar: "حرارتي ثمانٍ وثلاثون." },
      { ru: "Го́рло боли́т уже́ два дня.", en: "My throat has been hurting for two days now.", ar: "حلقي يؤلمني منذ يومين." },
      { ru: "Како́е лека́рство мне ну́жно?", en: "What medicine do I need?", ar: "ما الدواء الذي أحتاج إليه؟" },
      { ru: "Сего́дня хо́лодно: ми́нус пять и идёт снег.", en: "It's cold today: minus five and snowing.", ar: "الجوّ بارد اليوم: خمس درجات تحت الصفر ويتساقط الثلج." },
    ],
  },
  journal: {
    en: "Write 5–8 sentences: describe today's weather where you are (temperature, sun, rain, wind), compare it with the weather in Moscow, and say what you do when you are ill — what usually hurts and what you need to do (Мне на́до…).",
    ar: "اكتب من ٥ إلى ٨ جمل: صِف طقس اليوم حيث أنت (درجة الحرارة والشمس والمطر والرياح)، وقارنه بطقس موسكو، وقل ماذا تفعل عندما تمرض: ما الذي يؤلمك عادةً وما الذي يجب أن تفعله (Мне на́до…).",
  },
  culture: {
    en: "When someone has a cold, Russians reach for hot tea with lemon, honey or raspberry jam, and a grandmother will insist on a warm hat. When someone sneezes, you say Будь здоро́в! to a man or Будь здоро́ва! to a woman — 'Be healthy!'",
    ar: "عندما يُصاب أحد بالزكام يلجأ الروس إلى الشاي الساخن بالليمون أو العسل أو مربّى التوت، وتصرّ الجدّة على قبّعة دافئة. وعندما يعطس أحدهم تقول له: Будь здоро́в! إن كان رجلًا، أو Будь здоро́ва! إن كانت امرأة، أي «كن بصحّة جيدة!».",
  },
};

const DAY_48: Day = {
  n: 48,
  week: 7,
  kind: "immersion",
  title: { ru: "Смо́трим: мультфи́льм", en: "Watch: a cartoon", ar: "نشاهد: رسوم متحركة" },
  goals: [
    {
      en: "Follow a short cartoon-style story about two friends through the four seasons.",
      ar: "أن تتابع قصة قصيرة على طريقة الرسوم المتحركة عن صديقين عبر فصول السنة الأربعة.",
    },
    {
      en: "Describe the characters' looks and personalities and retell the story season by season.",
      ar: "أن تصف مظهر الشخصيتين وطباعهما، وأن تعيد سرد القصة فصلًا بعد فصل.",
    },
  ],
  words: [
    {
      id: "d48-01", ru: "весна́", say: "visnA", en: "spring", ar: "الربيع", pos: "noun", g: "f",
      ex: { ru: "Весно́й в Москве́ тепло́ и краси́во.", en: "In spring Moscow is warm and beautiful.", ar: "في الربيع تكون موسكو دافئة وجميلة." },
      note: { en: "In spring: весно́й.", ar: "في الربيع: весно́й." },
    },
    {
      id: "d48-02", ru: "о́сень", say: "Osin'", en: "autumn", ar: "الخريف", pos: "noun", g: "f",
      ex: { ru: "О́сенью ча́сто идёт дождь.", en: "It often rains in autumn.", ar: "في الخريف تمطر كثيرًا." },
      note: { en: "In autumn: о́сенью.", ar: "في الخريف: о́сенью." },
    },
    {
      id: "d48-03", ru: "о́блако", say: "Oblaka", en: "cloud", ar: "غيمة، سحابة", pos: "noun", g: "n",
      forms: "мн. ч. облака́",
      ex: { ru: "Смотри́, э́то о́блако похо́же на кота́!", en: "Look, that cloud looks like a cat!", ar: "انظر، هذه الغيمة تشبه قطًّا!" },
    },
    {
      id: "d48-04", ru: "дру́жба", say: "drUzhba", en: "friendship", ar: "صداقة", pos: "noun", g: "f",
      ex: { ru: "Э́то пе́сня о дру́жбе.", en: "This is a song about friendship.", ar: "هذه أغنية عن الصداقة." },
    },
    {
      id: "d48-05", ru: "улы́бка", say: "ulYpka", en: "smile", ar: "ابتسامة", pos: "noun", g: "f",
      ex: { ru: "У неё краси́вая улы́бка.", en: "She has a beautiful smile.", ar: "ابتسامتها جميلة." },
    },
    {
      id: "d48-06", ru: "смешно́й", say: "smishnOy", en: "funny", ar: "مضحك", pos: "adj",
      ex: { ru: "Э́то о́чень смешно́й мультфи́льм.", en: "This is a very funny cartoon.", ar: "هذا فيلم كرتون مضحك جدًّا." },
    },
    {
      id: "d48-07", ru: "друзья́", say: "druz'yA", en: "friends", ar: "أصدقاء", pos: "noun", g: "pl",
      forms: "ед. ч. друг; с друзья́ми",
      ex: { ru: "Мы с друзья́ми гуля́ем в па́рке.", en: "My friends and I are walking in the park.", ar: "أنا وأصدقائي نتنزّه في الحديقة." },
      note: { en: "The irregular plural of друг.", ar: "الجمع الشاذّ لكلمة друг." },
    },
  ],
  grammar: [
    {
      id: "d48-g1",
      title: { en: "When? Seasons in the instrumental", ar: "متى؟ الفصول في حالة الأداة" },
      en: [
        "To say 'in spring' or 'in autumn', Russian puts the season in the instrumental with no preposition: весно́й, о́сенью — just like зимо́й and ле́том.",
        "Parts of the day work the same way, and you already know them: у́тром, днём, ве́чером, но́чью.",
      ],
      ar: [
        "لتقول «في الربيع» أو «في الخريف» تضع الروسية اسم الفصل في حالة الأداة دون حرف جر: весно́й، о́сенью، تمامًا مثل зимо́й و ле́том.",
        "وأجزاء اليوم تعمل بالطريقة نفسها، وأنت تعرفها: у́тром، днём، ве́чером، но́чью.",
      ],
      tables: [
        {
          caption: { en: "The four seasons", ar: "فصول السنة الأربعة" },
          head: ["Season · الفصل", "When? · متى؟"],
          rows: [
            ["зима́", "зимо́й"],
            ["весна́", "весно́й"],
            ["ле́то", "ле́том"],
            ["о́сень", "о́сенью"],
          ],
        },
      ],
      examples: [
        { ru: "Весно́й в па́рке о́чень краси́во.", en: "The park is very beautiful in spring.", ar: "الحديقة جميلة جدًّا في الربيع." },
        { ru: "О́сенью мы с друзья́ми пьём чай с варе́ньем.", en: "In autumn my friends and I drink tea with jam.", ar: "في الخريف نشرب أنا وأصدقائي الشاي بالمربّى." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Медве́дь и Ко́шка", en: "The Bear and the Cat", ar: "الدبّ والقطّة" },
    setting: {
      en: "A cartoon-style story. A big bear and a small cat live side by side near a river, and a narrator follows the two friends through the four seasons.",
      ar: "قصة على طريقة الرسوم المتحركة: دبّ كبير وقطّة صغيرة يعيشان متجاورين قرب نهر، ويتابع الراوي الصديقين عبر فصول السنة الأربعة.",
    },
    lines: [
      {
        who: "A", name: "Расска́зчик", ru: "Э́то мультфи́льм о дру́жбе. Вот Медве́дь: он большо́й, до́брый и немно́го лени́вый.",
        en: "This is a cartoon about friendship. Here is the Bear: he is big, kind and a little lazy.",
        ar: "هذا فيلم كرتون عن الصداقة. هذا هو الدبّ: كبير وطيّب وكسول قليلًا.",
      },
      {
        who: "A", name: "Расска́зчик", ru: "А вот Ко́шка: она́ ма́ленькая, у́мная и о́чень смешна́я. Они́ живу́т ря́дом с реко́й, и они́ друзья́.",
        en: "And here is the Cat: she is small, clever and very funny. They live near a river, and they are friends.",
        ar: "وهذه هي القطّة: صغيرة وذكية ومضحكة جدًّا. يعيشان قرب نهر، وهما صديقان.",
      },
      {
        who: "A", name: "Расска́зчик", ru: "Зима́. Идёт снег, на у́лице ми́нус два́дцать. Медве́дь спит, а Ко́шке ску́чно.",
        en: "Winter. It's snowing, and it's minus twenty outside. The Bear is asleep, and the Cat is bored.",
        ar: "الشتاء. يتساقط الثلج، والحرارة في الخارج عشرون درجة تحت الصفر. الدبّ نائم، والقطّة تشعر بالملل.",
      },
      { who: "B", name: "Ко́шка", ru: "Медве́дь, ты спишь? Мне так ску́чно!", en: "Bear, are you asleep? I'm so bored!", ar: "يا دبّ، هل أنت نائم؟ أشعر بملل شديد!" },
      { who: "A", name: "Расска́зчик", ru: "Весна́. Тепло́, со́лнце. Медве́дь просыпа́ется.", en: "Spring. It's warm and sunny. The Bear wakes up.", ar: "الربيع. الجوّ دافئ ومشمس. يستيقظ الدبّ." },
      { who: "A", name: "Медве́дь", ru: "Ко́шка, приве́т! Как я хочу́ есть!", en: "Hi, Cat! I'm so hungry!", ar: "مرحبًا يا قطّة! كم أنا جائع!" },
      { who: "B", name: "Ко́шка", ru: "Ты спал три ме́сяца! Идём, у меня́ есть пиро́г с ры́бой.", en: "You slept for three months! Come on, I've got a fish pie.", ar: "لقد نمت ثلاثة أشهر! تعال، عندي فطيرة بالسمك." },
      {
        who: "A", name: "Расска́зчик", ru: "Ле́то. Жа́рко, плюс три́дцать. Медве́дь в реке́: он о́чень лю́бит во́ду.",
        en: "Summer. It's hot, plus thirty. The Bear is in the river: he loves water.",
        ar: "الصيف. الجوّ حارّ، ثلاثون درجة. الدبّ في النهر: إنه يحبّ الماء كثيرًا.",
      },
      { who: "A", name: "Медве́дь", ru: "Ко́шка, иди́ сюда́! Вода́ хоро́шая!", en: "Cat, come here! The water's lovely!", ar: "يا قطّة، تعالي إلى هنا! الماء رائع!" },
      {
        who: "B", name: "Ко́шка", ru: "Нет, спаси́бо! Ко́шки не лю́бят во́ду. Я лу́чше бу́ду есть моро́женое.",
        en: "No, thanks! Cats don't like water. I'd rather eat ice cream.",
        ar: "لا، شكرًا! القطط لا تحبّ الماء. أفضّل أن آكل المثلّجات.",
      },
      {
        who: "A", name: "Расска́зчик", ru: "О́сень. Ча́сто идёт дождь. Друзья́ пьют чай с варе́ньем и смо́трят на облака́.",
        en: "Autumn. It often rains. The friends drink tea with jam and look at the clouds.",
        ar: "الخريف. تمطر كثيرًا. يشرب الصديقان الشاي بالمربّى وينظران إلى الغيوم.",
      },
      { who: "B", name: "Ко́шка", ru: "Смотри́, э́то о́блако похо́же на медве́дя!", en: "Look, that cloud looks like a bear!", ar: "انظر، هذه الغيمة تشبه دبًّا!" },
      { who: "A", name: "Медве́дь", ru: "А э́то — на ко́шку. Но ты краси́вее!", en: "And that one looks like a cat. But you're prettier!", ar: "وتلك تشبه قطّة. لكنكِ أجمل!" },
      {
        who: "A", name: "Расска́зчик", ru: "Ско́ро зима́. Медве́дь хо́чет спать, но снача́ла он говори́т:",
        en: "Soon it will be winter. The Bear wants to sleep, but first he says:",
        ar: "سيأتي الشتاء قريبًا. يريد الدبّ أن ينام، لكنه يقول أولًا:",
      },
      { who: "A", name: "Медве́дь", ru: "Ко́шка, ты мой са́мый хоро́ший друг!", en: "Cat, you're my very best friend!", ar: "يا قطّة، أنتِ أعزّ أصدقائي!" },
      {
        who: "B", name: "Ко́шка", ru: "А ты — мой! Весно́й я бу́ду ждать тебя́ с пирого́м и с улы́бкой!",
        en: "And you're mine! In spring I'll be waiting for you with a pie and a smile!",
        ar: "وأنت أعزّ أصدقائي! في الربيع سأنتظرك بفطيرة وابتسامة!",
      },
    ],
  },
  worksheet: {
    before: [
      {
        en: "Each part of the story starts with a season: зима́, весна́, ле́то, о́сень. Use them to follow along.",
        ar: "يبدأ كل جزء من القصة باسم فصل: зима́، весна́، ле́то، о́сень. استعن بها لتتابع الأحداث.",
      },
      {
        en: "Listen for how the two friends are described: большо́й, ма́ленькая, до́брый, лени́вый, у́мная, смешна́я.",
        ar: "انتبه إلى وصف الصديقين: большо́й، ма́ленькая، до́брый، лени́вый، у́мная، смешна́я.",
      },
      {
        en: "Catch the weather in each season: снег, ми́нус два́дцать, со́лнце, плюс три́дцать, дождь.",
        ar: "التقط الطقس في كل فصل: снег، ми́нус два́дцать، со́лнце، плюс три́дцать، дождь.",
      },
    ],
    questions: [
      {
        kind: "choice",
        prompt: { en: "What is the Bear like?", ar: "كيف هو الدبّ؟" },
        options: ["small, clever and funny · صغير وذكي ومضحك", "big, kind and a little lazy · كبير وطيّب وكسول قليلًا", "tall, serious and fast · طويل وجادّ وسريع"],
        answer: 1,
        why: { en: "The narrator says the Bear is большо́й, до́брый и немно́го лени́вый.", ar: "يقول الراوي إن الدبّ большо́й و до́брый و немно́го лени́вый." },
      },
      {
        kind: "choice",
        prompt: { en: "What does the Bear do in winter?", ar: "ماذا يفعل الدبّ في الشتاء؟" },
        options: ["He sleeps. · ينام.", "He swims in the river. · يسبح في النهر.", "He eats ice cream. · يأكل المثلّجات."],
        answer: 0,
        why: { en: "Медве́дь спит — bears sleep through the winter.", ar: "Медве́дь спит — فالدببة تنام طوال الشتاء." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. How long did the Bear sleep?", ar: "استمع. كم نام الدبّ؟" },
        ru: "Ты спал три ме́сяца!",
        listen: true,
        options: ["three days · ثلاثة أيام", "three weeks · ثلاثة أسابيع", "three months · ثلاثة أشهر"],
        answer: 2,
        why: { en: "три ме́сяца means three months.", ar: "три ме́сяца تعني ثلاثة أشهر." },
      },
      {
        kind: "choice",
        prompt: { en: "Why doesn't the Cat go into the river?", ar: "لماذا لا تنزل القطّة إلى النهر؟" },
        options: ["It's too cold. · الجوّ بارد جدًّا.", "Cats don't like water. · القطط لا تحبّ الماء.", "She is ill. · هي مريضة."],
        answer: 1,
        why: { en: "She says: Ко́шки не лю́бят во́ду.", ar: "تقول القطّة: Ко́шки не лю́бят во́ду." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. What do the friends do in autumn?", ar: "استمع. ماذا يفعل الصديقان في الخريف؟" },
        ru: "Друзья́ пьют чай с варе́ньем и смо́трят на облака́.",
        listen: true,
        options: [
          "They eat fish pie by the river. · يأكلان فطيرة السمك قرب النهر.",
          "They go for a walk in the snow. · يتمشّيان في الثلج.",
          "They drink tea with jam and look at the clouds. · يشربان الشاي بالمربّى وينظران إلى الغيوم.",
        ],
        answer: 2,
        why: { en: "чай с варе́ньем is tea with jam, and облака́ are clouds.", ar: "чай с варе́ньем هو الشاي بالمربّى، و облака́ هي الغيوم." },
      },
      {
        kind: "choice",
        prompt: { en: "What does the first cloud look like?", ar: "بماذا تشبه الغيمة الأولى؟" },
        options: ["a bear · دبّ", "a cat · قطّة", "a pie · فطيرة"],
        answer: 0,
        why: { en: "о́блако похо́же на медве́дя: the cloud looks like a bear.", ar: "о́блако похо́же на медве́дя: الغيمة تشبه دبًّا." },
      },
      {
        kind: "choice",
        prompt: { en: "What will the Cat have for the Bear in spring?", ar: "ماذا ستُعِدّ القطّة للدبّ في الربيع؟" },
        options: ["ice cream and tea · مثلّجات وشاي", "a pie and a smile · فطيرة وابتسامة", "fish and jam · سمك ومربّى"],
        answer: 1,
        why: { en: "с пирого́м и с улы́бкой: with a pie and with a smile.", ar: "с пирого́м и с улы́бкой: بفطيرة وابتسامة." },
      },
    ],
    retell: {
      en: "Retell the story in 6–8 sentences, one or two for each season (Зимо́й Медве́дь спит, а Ко́шке ску́чно. Весно́й…). Then describe the two friends: how they look and what they are like.",
      ar: "أعد سرد القصة في ٦ إلى ٨ جمل، جملة أو جملتين لكل فصل (Зимо́й Медве́дь спит, а Ко́шке ску́чно. Весно́й…). ثم صِف الصديقين: مظهرهما وطباعهما.",
    },
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "In which season does it snow in the story?", ar: "في أيّ فصل يتساقط الثلج في القصة؟" },
      options: ["ле́том", "зимо́й", "весно́й"],
      answer: 1,
      why: { en: "Зима́. Идёт снег. — it snows in winter.", ar: "Зима́. Идёт снег. — يتساقط الثلج في الشتاء." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: In spring the Bear wakes up.", ar: "أكمل: في الربيع يستيقظ الدبّ." },
      ru: "___ Медве́дь просыпа́ется.",
      answers: ["Весно́й"],
      why: { en: "'In spring' is весно́й, the instrumental of весна́.", ar: "«في الربيع» هي весно́й، أي حالة الأداة من весна́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with варе́нье in the instrumental.", ar: "أكمل بكلمة варе́нье في حالة الأداة." },
      ru: "Друзья́ пьют чай с ___.",
      answers: ["варе́ньем"],
      why: { en: "A neuter noun in -е takes -ем: варе́нье → с варе́ньем.", ar: "المحايد المنتهي بـ -е يأخذ -ем: варе́нье → с варе́ньем." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: This cloud looks like a bear.", ar: "كوّن الجملة: هذه الغيمة تشبه دبًّا." },
      tokens: ["похо́же", "медве́дя", "Э́то", "на", "о́блако"],
      answers: ["Э́то о́блако похо́же на медве́дя."],
      why: { en: "о́блако is neuter, so похо́же; на + accusative медве́дя.", ar: "о́блако محايد فنقول похо́же، ثم на + حالة المفعول به: медве́дя." },
    },
    {
      kind: "translate",
      prompt: { en: "In autumn it often rains.", ar: "في الخريف تمطر كثيرًا." },
      answers: ["О́сенью ча́сто идёт дождь.", "О́сенью ча́сто иду́т дожди́."],
      why: { en: "о́сенью means 'in autumn', and rain 'goes': идёт дождь.", ar: "о́сенью تعني «في الخريف»، والمطر «يمشي»: идёт дождь." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Who is the speaker out walking with?", ar: "استمع. مع مَن يتنزّه المتكلّم؟" },
      ru: "Мы с друзья́ми гуля́ем в па́рке.",
      listen: true,
      options: ["with a (female) friend · مع صديقة", "with friends · مع أصدقاء", "with a brother · مع أخ"],
      answer: 1,
      why: { en: "с друзья́ми is 'with friends', the instrumental plural of друзья́.", ar: "с друзья́ми تعني «مع الأصدقاء»، وهي صيغة الجمع من друзья́ في حالة الأداة." },
    },
    {
      kind: "choice",
      prompt: { en: "What does смешно́й mean?", ar: "ماذا تعني смешно́й؟" },
      options: ["lazy · كسول", "serious · جادّ", "funny · مضحك"],
      answer: 2,
      why: { en: "смешно́й means funny; for a woman (or a cat!) it is смешна́я.", ar: "смешно́й تعني مضحكًا، وللمؤنّث смешна́я." },
    },
  ],
  topics: ["cartoon", "appearance", "weather", "listening"],
  search: ["Russian cartoons for learners with subtitles", "Hedgehog in the Fog Ёжик в тумане cartoon", "Russian seasons vocabulary весна лето осень зима"],
  speaking: {
    scenario: {
      en: "You have just watched a cartoon with a friend. Describe the characters' looks and personalities and retell the episode season by season.",
      ar: "شاهدت لتوّك فيلم كرتون مع صديق. صِف مظهر الشخصيتين وطباعهما، وأعد سرد الحلقة فصلًا بعد فصل.",
    },
    tutorBrief:
      "Play Anna (Анна), who has just watched the cartoon «Медведь и Кошка» with the learner. Ask them to describe each character (Какой Медведь? Какая Кошка? Кто больше? Кто умнее?) and to retell what happens in each season: Что делает Медведь зимой? Что они делают летом? Что они делают осенью? Encourage the season words зимой, весной, летом, осенью, weather phrases (идёт снег, жарко, плюс тридцать) and the instrumental (чай с вареньем, с пирогом, с улыбкой). If the learner gets stuck, give the first word as a hint rather than the whole sentence. Finish by asking Что тебе больше нравится: зима или лето? and share your own answer.",
    prompts: [
      { ru: "Медве́дь большо́й и до́брый, но немно́го лени́вый.", en: "The Bear is big and kind, but a little lazy.", ar: "الدبّ كبير وطيّب، لكنه كسول قليلًا." },
      { ru: "Ко́шка ма́ленькая, у́мная и о́чень смешна́я.", en: "The Cat is small, clever and very funny.", ar: "القطّة صغيرة وذكية ومضحكة جدًّا." },
      { ru: "Зимо́й Медве́дь спит, а Ко́шке ску́чно.", en: "In winter the Bear sleeps and the Cat is bored.", ar: "في الشتاء ينام الدبّ، والقطّة تشعر بالملل." },
      { ru: "О́сенью друзья́ пьют чай с варе́ньем.", en: "In autumn the friends drink tea with jam.", ar: "في الخريف يشرب الصديقان الشاي بالمربّى." },
      { ru: "Э́то мультфи́льм о дру́жбе.", en: "It's a cartoon about friendship.", ar: "إنه فيلم كرتون عن الصداقة." },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about your year: what the weather is like in each season where you live, and what you do with your friends in winter, spring, summer and autumn (Зимо́й мы…).",
    ar: "اكتب من ٥ إلى ٨ جمل عن سنتك: كيف يكون الطقس في كل فصل حيث تعيش، وماذا تفعل مع أصدقائك في الشتاء والربيع والصيف والخريف (Зимо́й мы…).",
  },
  culture: {
    en: "The Soviet studio Союзмультфи́льм, founded in 1936, made cartoons that every Russian knows: «Ёжик в тума́не» (Hedgehog in the Fog), «Ну, погоди́!» (a wolf chasing a hare) and «Ви́нни-Пух». Today children also love «Ма́ша и Медве́дь». Watching them is excellent listening practice: the speech is clear and the stories are simple.",
    ar: "أنتج استوديو Союзмультфи́льм السوفييتي، الذي تأسّس عام ١٩٣٦، أفلام كرتون يعرفها كل روسي: «Ёжик в тума́не» (القنفذ في الضباب)، و«Ну, погоди́!» (ذئب يطارد أرنبًا)، و«Ви́нни-Пух». واليوم يحبّ الأطفال أيضًا «Ма́ша и Медве́дь». ومشاهدتها تدريب ممتاز على الاستماع، فالكلام واضح والقصص بسيطة.",
  },
};

const DAY_49: Day = {
  n: 49,
  week: 7,
  kind: "review",
  title: { ru: "Повторе́ние: неде́ля 7", en: "Review: week 7", ar: "مراجعة: الأسبوع ٧" },
  goals: [
    {
      en: "Check what you know: the instrumental, adjective agreement, comparisons, weather and health.",
      ar: "أن تتحقّق ممّا تعرفه: حالة الأداة، وتطابق الصفات، والمقارنة، والطقس والصحّة.",
    },
    {
      en: "Pass a short oral exam: describe a friend, compare two cities and explain a health problem to a doctor.",
      ar: "أن تجتاز اختبارًا شفهيًّا قصيرًا: تصف صديقًا، وتقارن بين مدينتين، وتشرح مشكلة صحّية للطبيب.",
    },
  ],
  words: [],
  grammar: [
    {
      id: "d49-g1",
      title: { en: "Week 7 at a glance", ar: "الأسبوع السابع في لمحة" },
      en: [
        "This week you met the instrumental case: after с (с дру́гом), after verbs such as рабо́тать, стать and занима́ться (врачо́м, спо́ртом), and in time words (зимо́й, ле́том).",
        "You also described people with adjectives that agree with their noun, compared things with -ее, чем and са́мый, and talked about the weather and your health.",
      ],
      ar: [
        "تعرّفت هذا الأسبوع إلى حالة الأداة: بعد с (с дру́гом)، وبعد أفعال مثل рабо́тать و стать و занима́ться (врачо́м، спо́ртом)، وفي كلمات الزمن (зимо́й، ле́том).",
        "ووصفت الأشخاص بصفات تتطابق مع الاسم، وقارنت بين الأشياء باستخدام -ее و чем و са́мый، وتحدّثت عن الطقس وعن صحّتك.",
      ],
      tables: [
        {
          caption: { en: "Key structures of week 7", ar: "أهمّ تراكيب الأسبوع السابع" },
          head: ["Structure · التركيب", "Example · مثال"],
          rows: [
            ["с + instrumental · с + حالة الأداة", "Я живу́ с бра́том."],
            ["рабо́тать / стать + instrumental · + حالة الأداة", "Он рабо́тает врачо́м."],
            ["занима́ться + instrumental · + حالة الأداة", "Я занима́юсь спо́ртом."],
            ["у + genitive for looks · у + حالة الإضافة للمظهر", "У неё дли́нные во́лосы."],
            ["похо́ж на + accusative · + حالة المفعول به", "Ты похо́ж на отца́."],
            ["comparative + чем · صيغة المقارنة + чем", "В Каи́ре тепле́е, чем в Москве́."],
            ["са́мый + adjective · са́мый + صفة", "Э́то са́мый краси́вый го́род."],
            ["weather · الطقس", "Идёт снег, ми́нус пять."],
            ["health · الصحّة", "У меня́ боли́т голова́."],
          ],
        },
      ],
      examples: [
        { ru: "Мы с А́нной вме́сте занима́емся ру́сским языко́м.", en: "Anna and I study Russian together.", ar: "أنا وآنا ندرس اللغة الروسية معًا." },
        { ru: "Зимо́й в Москве́ гора́здо холодне́е, чем в Каи́ре.", en: "In winter Moscow is much colder than Cairo.", ar: "في الشتاء تكون موسكو أبرد بكثير من القاهرة." },
      ],
    },
  ],
  exercises: [],
  test: {
    sections: [
      {
        title: { en: "Words", ar: "المفردات" },
        items: [
          {
            kind: "choice",
            prompt: { en: "What does пла́вание mean?", ar: "ماذا تعني пла́вание؟" },
            options: ["painting · الرسم", "swimming · السباحة", "chess · الشطرنج"],
            answer: 1,
            why: { en: "пла́вание is swimming: Я занима́юсь пла́ванием.", ar: "пла́вание هي السباحة: Я занима́юсь пла́ванием." },
          },
          {
            kind: "choice",
            prompt: { en: "Which word means 'lazy'?", ar: "أيّ كلمة تعني «كسول»؟" },
            options: ["весёлый", "серьёзный", "лени́вый", "у́мный"],
            answer: 2,
            why: { en: "лени́вый means lazy; весёлый is cheerful, серьёзный serious, у́мный clever.", ar: "лени́вый تعني كسولًا، و весёлый مرحًا، و серьёзный جادًّا، و у́мный ذكيًّا." },
          },
          {
            kind: "choice",
            prompt: { en: "What do you buy at a pharmacy?", ar: "ماذا تشتري من الصيدلية؟" },
            options: ["лека́рство", "варе́нье", "смета́ну"],
            answer: 0,
            why: { en: "лека́рство (medicine) is sold in an апте́ка.", ar: "лека́рство (الدواء) يُباع في апте́ка." },
          },
          {
            kind: "choice",
            prompt: { en: "What is the opposite of доро́же?", ar: "ما عكس доро́же؟" },
            options: ["бо́льше", "деше́вле", "ху́же"],
            answer: 1,
            why: { en: "доро́же means more expensive; деше́вле means cheaper.", ar: "доро́же تعني أغلى، و деше́вле تعني أرخص." },
          },
          {
            kind: "choice",
            prompt: { en: "Which one is a job?", ar: "أيّها مهنة؟" },
            options: ["хо́бби", "бухга́лтер", "хара́ктер"],
            answer: 1,
            why: { en: "бухга́лтер is an accountant.", ar: "бухга́лтер تعني محاسبًا." },
          },
        ],
      },
      {
        title: { en: "Grammar", ar: "القواعد" },
        items: [
          {
            kind: "fill",
            prompt: { en: "Complete with сестра́ in the instrumental.", ar: "أكمل بكلمة сестра́ في حالة الأداة." },
            ru: "Я живу́ с ___.",
            answers: ["сестро́й"],
            why: { en: "-а becomes -ой after с.", ar: "-а تصبح -ой بعد с." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete with инжене́р in the instrumental.", ar: "أكمل بكلمة инжене́р في حالة الأداة." },
            ru: "Он рабо́тает ___.",
            answers: ["инжене́ром"],
            why: { en: "рабо́тать + instrumental: инжене́р → инжене́ром.", ar: "рабо́тать + حالة الأداة: инжене́р → инжене́ром." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete with му́зыка in the instrumental.", ar: "أكمل بكلمة му́зыка في حالة الأداة." },
            ru: "Мы занима́емся ___.",
            answers: ["му́зыкой"],
            why: { en: "занима́ться + instrumental: му́зыка → му́зыкой.", ar: "занима́ться + حالة الأداة: му́зыка → му́зыкой." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: She looks like her mum.", ar: "أكمل: هي تشبه أمّها." },
            ru: "Она́ ___ на ма́му.",
            answers: ["похо́жа"],
            why: { en: "For a woman the short form is похо́жа.", ar: "مع المؤنّث تكون الصيغة القصيرة похо́жа." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete with хо́лодно in the comparative.", ar: "أكمل بصيغة المقارنة من хо́лодно." },
            ru: "В Москве́ ___, чем в Каи́ре.",
            answers: ["холодне́е"],
            why: { en: "холо́дный / хо́лодно → холодне́е, stressed on the ending.", ar: "холо́дный / хо́лодно → холодне́е، والنبر على النهاية." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: My eyes hurt.", ar: "أكمل: عيناي تؤلمانني." },
            ru: "У меня́ ___ глаза́.",
            answers: ["боля́т"],
            why: { en: "Several things hurt, so the verb is боля́т.", ar: "الشيء المؤلم جمع، فيكون الفعل боля́т." },
          },
        ],
      },
      {
        title: { en: "Listening", ar: "الاستماع" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Listen. What is the question about?", ar: "استمع. عمّ يدور السؤال؟" },
            ru: "Кем ты хо́чешь стать?",
            listen: true,
            options: ["your hobby · هوايتك", "the job you want in the future · المهنة التي تريدها في المستقبل", "who you live with · مع مَن تعيش"],
            answer: 1,
            why: { en: "Кем ты хо́чешь стать? means 'What do you want to become?'", ar: "Кем ты хо́чешь стать؟ تعني «ماذا تريد أن تصبح؟»." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. What is the weather like?", ar: "استمع. كيف الطقس؟" },
            ru: "Сего́дня ми́нус пять и идёт снег.",
            listen: true,
            options: ["−5 and snowing · خمس تحت الصفر وثلج", "+5 and raining · خمس فوق الصفر ومطر", "−5 and sunny · خمس تحت الصفر وشمس"],
            answer: 0,
            why: { en: "ми́нус пять is −5, and идёт снег means it's snowing.", ar: "ми́нус пять تعني خمس درجات تحت الصفر، و идёт снег تعني أن الثلج يتساقط." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. What does he look like?", ar: "استمع. كيف يبدو؟" },
            ru: "У него́ коро́ткие тёмные во́лосы и ка́рие глаза́.",
            listen: true,
            options: [
              "long fair hair, blue eyes · شعر طويل فاتح وعينان زرقاوان",
              "short dark hair, brown eyes · شعر قصير داكن وعينان بنّيتان",
              "short fair hair, brown eyes · شعر قصير فاتح وعينان بنّيتان",
            ],
            answer: 1,
            why: { en: "коро́ткие is short, тёмные is dark, and ка́рие is brown (for eyes).", ar: "коро́ткие تعني قصيرًا، و тёмные داكنًا، و ка́рие بنّيًّا (للعيون)." },
          },
        ],
      },
      {
        title: { en: "Sentences", ar: "الجمل" },
        items: [
          {
            kind: "order",
            prompt: { en: "Build the sentence: Moscow is the biggest city in Russia.", ar: "كوّن الجملة: موسكو أكبر مدينة في روسيا." },
            tokens: ["большо́й", "Москва́", "в", "са́мый", "Росси́и", "го́род"],
            answers: ["Москва́ — са́мый большо́й го́род в Росси́и.", "Москва́ са́мый большо́й го́род в Росси́и."],
            why: { en: "са́мый + adjective + noun: са́мый большо́й го́род.", ar: "са́мый + الصفة + الاسم: са́мый большо́й го́род." },
          },
          {
            kind: "order",
            prompt: { en: "Build the sentence: My brother and I play chess.", ar: "كوّن الجملة: أنا وأخي نلعب الشطرنج." },
            tokens: ["ша́хматы", "с", "игра́ем", "Мы", "бра́том", "в"],
            answers: ["Мы с бра́том игра́ем в ша́хматы."],
            why: { en: "Мы с бра́том means 'my brother and I'.", ar: "Мы с бра́том تعني «أنا وأخي»." },
          },
        ],
      },
      {
        title: { en: "Translation", ar: "الترجمة" },
        items: [
          {
            kind: "translate",
            prompt: { en: "I'm interested in painting.", ar: "أنا مهتمّ بفنّ الرسم." },
            answers: ["Я интересу́юсь жи́вописью.", "Интересу́юсь жи́вописью.", "Я увлека́юсь жи́вописью."],
            why: { en: "интересова́ться + instrumental: жи́вописью.", ar: "интересова́ться + حالة الأداة: жи́вописью." },
          },
          {
            kind: "translate",
            prompt: { en: "Tea is better than coffee.", ar: "الشاي أفضل من القهوة." },
            answers: ["Чай лу́чше, чем ко́фе.", "Чай лу́чше ко́фе."],
            why: { en: "хоро́ший → лу́чше, and 'than' is чем.", ar: "хоро́ший → лу́чше، و«من» في المقارنة هي чем." },
          },
          {
            kind: "translate",
            prompt: { en: "I have a sore throat.", ar: "حلقي يؤلمني." },
            answers: ["У меня́ боли́т го́рло.", "У меня́ го́рло боли́т."],
            why: { en: "у меня́ + боли́т + the body part in the nominative.", ar: "у меня́ + боли́т + عضو الجسم في حالة الرفع." },
          },
        ],
      },
    ],
    speaking: [
      {
        en: "Describe a friend or a family member: their looks (height, hair, eyes), their character and who they look like.",
        ar: "صِف صديقًا أو أحد أفراد عائلتك: مظهره (الطول والشعر والعينان)، وطبعه، وبمن يشبه.",
      },
      {
        en: "Compare Cairo and Moscow (or two cities you know): the weather, prices, what is more beautiful and what you like more.",
        ar: "قارن بين القاهرة وموسكو (أو مدينتين تعرفهما): الطقس والأسعار، وأيّهما أجمل، وأيّهما تعجبك أكثر.",
      },
      {
        en: "At the doctor's: say what hurts, since when and what your temperature is, and ask what you need to do.",
        ar: "عند الطبيب: قل ما يؤلمك ومنذ متى وكم درجة حرارتك، واسأل عمّا يجب أن تفعله.",
      },
      {
        en: "Tell the examiner who you spend your free time with, what you do together and what your hobbies are.",
        ar: "أخبر الممتحن مع مَن تقضي وقت فراغك، وماذا تفعلان معًا، وما هي هواياتك.",
      },
    ],
  },
  topics: ["instrumental", "comparatives", "health", "appearance"],
  search: ["Russian instrumental case practice", "Russian comparatives and superlatives exercises", "Russian speaking practice describe a person"],
  speaking: {
    scenario: {
      en: "The week 7 oral exam: describe a friend, compare two cities, and explain a health problem to a doctor.",
      ar: "الاختبار الشفهي للأسبوع السابع: صِف صديقًا، وقارن بين مدينتين، واشرح مشكلة صحّية للطبيب.",
    },
    tutorBrief:
      "Act as a friendly but exact examiner for a 10-minute oral exam on week 7. Part 1 (3 min): ask the learner to describe a friend's looks and character (Как он выглядит? Какой он человек? На кого он похож?). Part 2 (3 min): ask them to compare Cairo and Moscow or two other cities (Где теплее? Где дороже? Какой город красивее? Какой твой любимый город?). Part 3 (3 min): play a doctor (Что с вами? Что у вас болит? Давно? Какая температура?) and prescribe rest with надо / нужно. Part 4 (1 min): ask who they spend their free time with and what they do (С кем? Чем ты занимаешься?). Do not correct during the exam; note the errors. At the end give a score out of 10 for each of: instrumental endings, adjective agreement, comparatives, vocabulary range and fluency. List the three most important corrections with the right forms, and praise one real strength.",
    prompts: [
      { ru: "Мой друг высо́кий, у него́ тёмные во́лосы и ка́рие глаза́.", en: "My friend is tall; he has dark hair and brown eyes.", ar: "صديقي طويل، شعره داكن وعيناه بنّيتان." },
      { ru: "Он у́мный и весёлый. Он похо́ж на отца́.", en: "He's clever and cheerful. He looks like his father.", ar: "هو ذكي ومرح، ويشبه أباه." },
      { ru: "В Каи́ре тепле́е, а в Москве́ доро́же.", en: "It's warmer in Cairo, and Moscow is more expensive.", ar: "الجوّ أدفأ في القاهرة، والحياة أغلى في موسكو." },
      { ru: "У меня́ боли́т го́рло, и у меня́ температу́ра.", en: "I have a sore throat and a fever.", ar: "حلقي يؤلمني وعندي حمّى." },
      { ru: "В свобо́дное вре́мя я игра́ю в футбо́л с дру́гом.", en: "In my free time I play football with a friend.", ar: "في وقت فراغي ألعب كرة القدم مع صديقي." },
    ],
  },
  journal: {
    en: "Write a short letter (6–8 sentences) to a friend in Cairo about your week in Moscow: who you spend time with, a new person you met (looks and character), the weather compared with Cairo, and how you feel.",
    ar: "اكتب رسالة قصيرة (من ٦ إلى ٨ جمل) إلى صديق في القاهرة عن أسبوعك في موسكو: مع مَن تقضي وقتك، وشخص جديد تعرّفت إليه (مظهره وطبعه)، والطقس مقارنةً بالقاهرة، وكيف تشعر.",
  },
  culture: {
    en: "Russian schools mark from 1 to 5: a пятёрка (5) is excellent, a четвёрка (4) good, a тро́йка (3) satisfactory, and a дво́йка (2) means you have to try again. A 1 is almost never given.",
    ar: "تُقيِّم المدارس الروسية من ١ إلى ٥: пятёрка (٥) ممتاز، و четвёрка (٤) جيد، و тро́йка (٣) مقبول، أمّا дво́йка (٢) فتعني أن عليك أن تحاول من جديد. ونادرًا جدًّا ما تُعطى الدرجة ١.",
  },
};

export const WEEK_7: Day[] = [DAY_43, DAY_44, DAY_45, DAY_46, DAY_47, DAY_48, DAY_49];
