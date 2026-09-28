import type { Day } from "../types.ts";

// Week 8 · Putting it together: all six cases, complex sentences, calls and invitations, travel,
// telling a story, a longer story to retell, and the final exam. Written to docs/content-style-guide.md.

const DAY_50: Day = {
  n: 50,
  week: 8,
  kind: "lesson",
  title: { ru: "Шесть падеже́й", en: "All six cases", ar: "الحالات الست" },
  goals: [
    {
      en: "Name the six cases, the question each one answers and its main jobs.",
      ar: "أن تسمّي الحالات الست، والسؤال الذي تجيب عنه كل حالة، ووظائفها الأساسية.",
    },
    {
      en: "Put a noun or a pronoun into any case: кни́га, кни́ги, кни́ге, кни́гу, кни́гой, о кни́ге.",
      ar: "أن تضع الاسم أو الضمير في أي حالة: кни́га، кни́ги، кни́ге، кни́гу، кни́гой، о кни́ге.",
    },
    {
      en: "Choose the right case after the most common prepositions.",
      ar: "أن تختار الحالة الصحيحة بعد أكثر حروف الجر استخدامًا.",
    },
  ],
  words: [
    {
      id: "d50-01", ru: "паде́ж", say: "padyEsh", en: "case (in grammar)", ar: "حالة إعرابية (في النحو)", pos: "noun", g: "m",
      forms: "мн. ч. падежи́; шесть падеже́й",
      ex: { ru: "В ру́сском языке́ шесть падеже́й.", en: "Russian has six cases.", ar: "في اللغة الروسية ست حالات إعرابية." },
    },
    {
      id: "d50-02", ru: "оконча́ние", say: "akanchAniye", en: "ending (of a word)", ar: "النهاية (اللاحقة) في آخر الكلمة", pos: "noun", g: "n",
      ex: { ru: "У сло́ва «кни́гу» оконча́ние -у.", en: "The word «кни́гу» has the ending -у.", ar: "كلمة «кни́гу» نهايتها -у." },
    },
    {
      id: "d50-03", ru: "отве́т", say: "atvyEt", en: "answer", ar: "جواب، إجابة", pos: "noun", g: "m",
      ex: { ru: "Спаси́бо, э́то хоро́ший отве́т.", en: "Thank you, that's a good answer.", ar: "شكرًا، هذه إجابة جيدة." },
    },
    {
      id: "d50-04", ru: "пра́вило", say: "prAvila", en: "rule", ar: "قاعدة", pos: "noun", g: "n", forms: "мн. ч. пра́вила",
      ex: { ru: "Я по́мню э́то пра́вило.", en: "I remember this rule.", ar: "أتذكّر هذه القاعدة." },
    },
    {
      id: "d50-05", ru: "приме́р", say: "primyEr", en: "example", ar: "مثال", pos: "noun", g: "m",
      ex: { ru: "Вот приме́р: Я ви́жу А́нну.", en: "Here is an example: I see Anna.", ar: "إليك مثالًا: أرى آنا." },
    },
    {
      id: "d50-06", ru: "оши́бка", say: "ashYpka", en: "mistake, error", ar: "خطأ", pos: "noun", g: "f", forms: "мн. ч. оши́бки",
      ex: { ru: "Тут есть оши́бка.", en: "There is a mistake here.", ar: "هنا خطأ." },
    },
    {
      id: "d50-07", ru: "испра́вить", say: "isprAvit'", en: "to correct, to fix (perfective)", ar: "يصحّح (فعل تام)", pos: "verb",
      forms: "испра́влю, испра́вишь; impf. исправля́ть",
      ex: { ru: "Испра́вь, пожа́луйста, оши́бку.", en: "Please correct the mistake.", ar: "صحّح الخطأ من فضلك." },
    },
    {
      id: "d50-08", ru: "запо́мнить", say: "zapOmnit'", en: "to memorise, to remember (perfective)", ar: "يحفظ، يتذكّر (فعل تام)", pos: "verb",
      forms: "запо́мню, запо́мнишь; impf. запомина́ть",
      ex: { ru: "Я запо́мнил э́то пра́вило.", en: "I've memorised this rule.", ar: "حفظتُ هذه القاعدة." },
    },
    {
      id: "d50-09", ru: "повторя́ть", say: "paftaryAt'", en: "to repeat, to revise (imperfective)", ar: "يكرّر، يراجع (فعل غير تام)", pos: "verb",
      forms: "повторя́ю, повторя́ешь; pf. повтори́ть",
      ex: { ru: "Я повторя́ю слова́ ка́ждый день.", en: "I revise words every day.", ar: "أراجع الكلمات كل يوم." },
    },
    {
      id: "d50-10", ru: "упражне́ние", say: "uprazhnyEniye", en: "exercise", ar: "تمرين", pos: "noun", g: "n", forms: "мн. ч. упражне́ния",
      ex: { ru: "Сего́дня у нас но́вое упражне́ние.", en: "Today we have a new exercise.", ar: "لدينا اليوم تمرين جديد." },
    },
    {
      id: "d50-11", ru: "зна́чит", say: "znAchit", en: "so, that means; (it) means", ar: "إذن، يعني", pos: "part",
      ex: { ru: "Зна́чит, ты из Каи́ра?", en: "So you're from Cairo?", ar: "إذن أنت من القاهرة؟" },
    },
    {
      id: "d50-12", ru: "перево́д", say: "pirivOt", en: "translation", ar: "ترجمة", pos: "noun", g: "m",
      ex: { ru: "Перево́д есть в словаре́.", en: "The translation is in the dictionary.", ar: "الترجمة موجودة في القاموس." },
    },
    {
      id: "d50-13", ru: "переводи́ть", say: "pirivadIt'", en: "to translate (imperfective)", ar: "يترجم (فعل غير تام)", pos: "verb",
      forms: "перевожу́, перево́дишь; pf. перевести́",
      ex: { ru: "А́нна перево́дит письмо́.", en: "Anna is translating the letter.", ar: "آنا تترجم الرسالة." },
    },
    {
      id: "d50-14", ru: "объясне́ние", say: "ab'yasnyEniye", en: "explanation", ar: "شرح، تفسير", pos: "noun", g: "n",
      ex: { ru: "Э́то о́чень хоро́шее объясне́ние.", en: "That's a very good explanation.", ar: "هذا شرح جيد جدًّا." },
    },
    {
      id: "d50-15", ru: "без", say: "byez", en: "without (+ genitive)", ar: "بدون (+ حالة الإضافة)", pos: "prep",
      ex: { ru: "Я пью ко́фе без са́хара.", en: "I drink coffee without sugar.", ar: "أشرب القهوة بدون سكّر." },
    },
    {
      id: "d50-16", ru: "Как пра́вильно?", say: "kak prAvil'na?", en: "Which is right? What's the correct way to say it?", ar: "ما الصواب؟ كيف يُقال بشكل صحيح؟", pos: "phrase",
      ex: { ru: "Как пра́вильно: «в па́рке» и́ли «в парк»?", en: "Which is right: «в па́рке» or «в парк»?", ar: "أيّهما الصحيح: «в па́рке» أم «в парк»؟" },
    },
    {
      id: "d50-17", ru: "Что зна́чит…?", say: "shto znAchit…?", en: "What does … mean?", ar: "ماذا تعني…؟", pos: "phrase",
      ex: { ru: "Что зна́чит «оши́бка»?", en: "What does «оши́бка» mean?", ar: "ماذا تعني «оши́бка»؟" },
    },
    {
      id: "d50-18", ru: "Поня́тно.", say: "panyAtna.", en: "I see. / Got it. (literally: it's clear)", ar: "مفهوم. / فهمت.", pos: "phrase",
    },
    {
      id: "d50-19", ru: "Молоде́ц!", say: "maladyEts!", en: "Well done! Good job!", ar: "أحسنت! أحسنتِ!", pos: "phrase",
      note: { en: "Said to a man or a woman alike: А́нна, молоде́ц!", ar: "تُقال للرجل والمرأة على السواء: А́нна, молоде́ц!" },
    },
  ],
  grammar: [
    {
      id: "d50-g1",
      title: { en: "Six cases, six questions", ar: "ست حالات وستة أسئلة" },
      en: [
        "A Russian noun changes its ending to show its job in the sentence. Each job is a case, and each case answers its own question: кто? что? (nominative), кого́? чего́? (genitive), кому́? чему́? (dative), кого́? что? (accusative), кем? чем? (instrumental), о ком? о чём? (prepositional).",
        "When you are not sure of an ending, ask the question first. Звони́ть — кому́? So the dative: Я звоню́ А́нне. Ви́деть — кого́? So the accusative: Я ви́жу А́нну.",
        "Arabic has three cases, marked mostly by short final vowels that everyday speech often drops. Russian has six, and the endings are always pronounced.",
      ],
      ar: [
        "يغيّر الاسم الروسي نهايته ليبيّن وظيفته في الجملة. كل وظيفة هي حالة، ولكل حالة سؤالها: кто? что? (حالة الرفع)، кого́? чего́? (حالة الإضافة)، кому́? чему́? (حالة المستفيد)، кого́? что? (حالة المفعول به)، кем? чем? (حالة الأداة)، о ком? о чём? (حالة حرف الجر).",
        "إذا لم تكن متأكدًا من النهاية فاطرح السؤال أولًا. Звони́ть — кому́? إذن حالة المستفيد: Я звоню́ А́нне. Ви́деть — кого́? إذن حالة المفعول به: Я ви́жу А́нну.",
        "في العربية ثلاث حالات إعرابية تُعلَّم غالبًا بحركات قصيرة في آخر الكلمة، وكثيرًا ما تُسقطها لغة الكلام اليومية. أمّا الروسية ففيها ست حالات، ونهاياتها تُنطق دائمًا.",
      ],
      tables: [
        {
          caption: { en: "The six cases at a glance", ar: "الحالات الست في لمحة" },
          head: ["Case · الحالة", "Questions · الأسئلة", "Main jobs · الوظائف الأساسية", "Example · مثال"],
          rows: [
            ["Nominative · حالة الرفع", "кто? что?", "the subject; the dictionary form · الفاعل؛ صيغة القاموس", "А́нна чита́ет."],
            ["Genitive · حالة الإضافة", "кого́? чего́?", "of, possession; after нет, мно́го and numbers · الملكية؛ بعد нет و мно́го والأعداد", "У бра́та нет маши́ны."],
            ["Dative · حالة المستفيد", "кому́? чему́?", "to or for a person; мне нра́вится; age · لمن يتّجه الفعل؛ мне нра́вится؛ العمر", "Я звоню́ ма́ме."],
            ["Accusative · حالة المفعول به", "кого́? что?", "the direct object; куда́? with в / на · المفعول به؛ الاتجاه مع в / на", "Я ви́жу А́нну."],
            ["Instrumental · حالة الأداة", "кем? чем?", "with (с); рабо́тать / стать кем; занима́ться чем · «مع»؛ المهنة؛ الهواية", "Я рабо́таю инжене́ром."],
            ["Prepositional · حالة حرف الجر", "о ком? о чём? где?", "where? with в / на; about (о) · المكان مع в / на؛ «عن» مع о", "Мы говори́м о Москве́."],
          ],
        },
      ],
      examples: [
        { ru: "Я звоню́ А́нне, а пото́м ви́жу А́нну в па́рке.", en: "I call Anna, and then I see Anna in the park.", ar: "أتصل بآنا، ثم أرى آنا في الحديقة." },
        { ru: "— О ком ты ду́маешь? — О ма́ме.", en: "— Who are you thinking about? — About Mum.", ar: "— في مَن تفكّر؟ — في أمي." },
        { ru: "— С кем ты гуля́ешь? — С дру́гом.", en: "— Who are you walking with? — With a friend.", ar: "— مع مَن تتمشّى؟ — مع صديقي." },
      ],
    },
    {
      id: "d50-g2",
      title: { en: "One noun through all six cases", ar: "اسم واحد في الحالات الست" },
      en: [
        "Here are three singular nouns in every case. Feminine nouns in -а change the most; masculine and neuter nouns share most of their endings.",
        "Two traps: a masculine noun for a person or an animal looks like the genitive in the accusative (Я ви́жу бра́та), but a thing does not change in the accusative (Я ви́жу стол, окно́).",
        "Pronouns change completely, so learn them as words. After a preposition, он, она́, оно́ and они́ add н-: у него́, к нему́, с ней, о них.",
      ],
      ar: [
        "إليك ثلاثة أسماء مفردة في كل الحالات. الأسماء المؤنّثة المنتهية بـ -а تتغيّر أكثر من غيرها، والأسماء المذكّرة والمحايدة تشترك في معظم نهاياتها.",
        "فخّان: الاسم المذكّر الدالّ على إنسان أو حيوان يشبه في حالة المفعول به حالةَ الإضافة (Я ви́жу бра́та)، أمّا الشيء فلا يتغيّر في حالة المفعول به (Я ви́жу стол، окно́).",
        "الضمائر تتغيّر كليًّا، فاحفظها كلمات مستقلّة. وبعد حرف الجر تُضاف н- إلى он و она́ و оно́ و они́: у него́، к нему́، с ней، о них.",
      ],
      tables: [
        {
          caption: { en: "Three nouns in six cases", ar: "ثلاثة أسماء في ست حالات" },
          head: ["Case · الحالة", "кни́га (f)", "брат (m)", "окно́ (n)"],
          rows: [
            ["Nom. · кто? что?", "кни́га", "брат", "окно́"],
            ["Gen. · кого́? чего́?", "кни́ги", "бра́та", "окна́"],
            ["Dat. · кому́? чему́?", "кни́ге", "бра́ту", "окну́"],
            ["Acc. · кого́? что?", "кни́гу", "бра́та", "окно́"],
            ["Instr. · кем? чем?", "кни́гой", "бра́том", "окно́м"],
            ["Prep. · о ком? о чём?", "о кни́ге", "о бра́те", "об окне́"],
          ],
        },
        {
          caption: { en: "Personal pronouns in six cases", ar: "الضمائر الشخصية في ست حالات" },
          head: ["Nom. · رفع", "Gen. = Acc. · إضافة = مفعول به", "Dat. · مستفيد", "Instr. · أداة", "Prep. · حرف الجر"],
          rows: [
            ["я", "меня́", "мне", "мной", "обо мне"],
            ["ты", "тебя́", "тебе́", "тобо́й", "о тебе́"],
            ["он / оно́", "его́", "ему́", "им", "о нём"],
            ["она́", "её", "ей", "ей", "о ней"],
            ["мы", "нас", "нам", "на́ми", "о нас"],
            ["вы", "вас", "вам", "ва́ми", "о вас"],
            ["они́", "их", "им", "и́ми", "о них"],
          ],
        },
      ],
      examples: [
        { ru: "Я ча́сто ду́маю о бра́те и звоню́ ему́.", en: "I often think about my brother and call him.", ar: "أفكّر كثيرًا في أخي وأتصل به." },
        { ru: "У неё но́вая кни́га. Она́ чита́ет кни́гу ве́чером.", en: "She has a new book. She reads the book in the evening.", ar: "لديها كتاب جديد. تقرأ الكتاب في المساء." },
      ],
    },
    {
      id: "d50-g3",
      title: { en: "A map of prepositions", ar: "خريطة حروف الجر" },
      en: [
        "Most prepositions always take the same case, so learn each one together with its case: из Каи́ра, к врачу́, с дру́гом.",
        "в and на take two cases: the prepositional for где? (в па́рке — in the park) and the accusative for куда́? (в парк — to the park).",
        "о becomes об before a vowel sound (об окне́, об А́нне) and обо in обо мне.",
      ],
      ar: [
        "معظم حروف الجر تأخذ دائمًا الحالة نفسها، فاحفظ كل حرف مع حالته: из Каи́ра، к врачу́، с дру́гом.",
        "أمّا в و на فتأخذان حالتين: حالة حرف الجر للسؤال где? (в па́рке — في الحديقة)، وحالة المفعول به للسؤال куда́? (в парк — إلى الحديقة).",
        "يصبح о هو об قبل صوت متحرّك (об окне́، об А́нне)، ويصبح обо في обо мне.",
      ],
      tables: [
        {
          caption: { en: "Prepositions and their cases", ar: "حروف الجر وحالاتها" },
          head: ["Preposition · حرف الجر", "Case · الحالة", "Meaning · المعنى", "Example · مثال"],
          rows: [
            ["в, на", "Prepositional · حالة حرف الجر", "in, at (где?) · في", "в па́рке, на рабо́те"],
            ["в, на", "Accusative · حالة المفعول به", "to, into (куда́?) · إلى", "в парк, на рабо́ту"],
            ["о (об)", "Prepositional · حالة حرف الجر", "about · عن", "о фи́льме, об А́нне"],
            ["у", "Genitive · حالة الإضافة", "at someone's; to have · عند", "у бра́та, у меня́"],
            ["из, от, до", "Genitive · حالة الإضافة", "from; from (a person); as far as · من؛ من عند؛ حتى", "из Каи́ра, от ма́мы, до ста́нции"],
            ["по́сле, без", "Genitive · حالة الإضافة", "after; without · بعد؛ بدون", "по́сле обе́да, без са́хара"],
            ["к", "Dative · حالة المستفيد", "towards; to see (a person) · إلى (شخص)", "к врачу́, к дру́гу"],
            ["по", "Dative · حالة المستفيد", "by (phone); along · عبر؛ على امتداد", "по телефо́ну"],
            ["с", "Instrumental · حالة الأداة", "with · مع", "с дру́гом, с молоко́м"],
            ["че́рез", "Accusative · حالة المفعول به", "in (a time); across · بعد (مدّة)؛ عبر", "че́рез неде́лю"],
          ],
        },
      ],
      examples: [
        { ru: "По́сле обе́да я е́ду к дру́гу на метро́.", en: "After lunch I go to see a friend by metro.", ar: "بعد الغداء أذهب إلى صديقي بالمترو." },
        { ru: "Че́рез неде́лю А́нна е́дет из Москвы́ в Каи́р.", en: "In a week Anna is going from Moscow to Cairo.", ar: "بعد أسبوع تسافر آنا من موسكو إلى القاهرة." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Две оши́бки", en: "Two mistakes", ar: "خطآن" },
    setting: {
      en: "After class, Olga Petrovna runs a grammar clinic. She asks Ahmed about yesterday and helps him fix two case endings.",
      ar: "بعد الدرس تعقد أولغا بتروفنا جلسة لتصحيح القواعد. تسأل أحمد عن يوم أمس وتساعده على تصحيح نهايتين في الحالات.",
    },
    lines: [
      { who: "B", name: "О́льга Петро́вна", ru: "Ахме́д, сего́дня мы повторя́ем все шесть падеже́й.", en: "Ahmed, today we're revising all six cases.", ar: "يا أحمد، اليوم نراجع الحالات الست كلها." },
      { who: "A", name: "Ахме́д", ru: "Отли́чно! Но я ча́сто де́лаю оши́бки в оконча́ниях.", en: "Great! But I often make mistakes in the endings.", ar: "ممتاز! لكنني كثيرًا ما أخطئ في النهايات." },
      { who: "B", name: "О́льга Петро́вна", ru: "Ничего́, э́то норма́льно. Ну, что вы де́лали вчера́? Отвеча́йте по-ру́сски!", en: "Never mind, that's normal. So, what did you do yesterday? Answer in Russian!", ar: "لا بأس، هذا طبيعي. حسنًا، ماذا فعلت أمس؟ أجب بالروسية!" },
      { who: "A", name: "Ахме́д", ru: "Вчера́ я звони́л А́нну, и мы гуля́ли в парк.", en: "Yesterday I called Anna, and we walked in the park. (He makes two case mistakes.)", ar: "أمس اتصلتُ بآنا وتمشّينا في الحديقة. (وقع في خطأين في الحالات.)" },
      { who: "B", name: "О́льга Петро́вна", ru: "Тут две оши́бки. Испра́вьте их, пожа́луйста.", en: "There are two mistakes here. Correct them, please.", ar: "هنا خطآن. صحّحهما من فضلك." },
      { who: "A", name: "Ахме́д", ru: "Извини́те, а что зна́чит «испра́вить»?", en: "Sorry, what does «испра́вить» mean?", ar: "عذرًا، وماذا تعني «испра́вить»؟" },
      { who: "B", name: "О́льга Петро́вна", ru: "Э́то зна́чит сде́лать пра́вильно. Звони́ть — кому́? Гуля́ть — где?", en: "It means to make it right. Call — whom? Walk — where?", ar: "تعني أن تجعله صحيحًا. يتصل — بمن؟ يتمشّى — أين؟" },
      { who: "A", name: "Ахме́д", ru: "Поня́тно! Вчера́ я звони́л А́нне, и мы гуля́ли в па́рке.", en: "I see! Yesterday I called Anna, and we walked in the park.", ar: "فهمت! أمس اتصلتُ بآنا وتمشّينا في الحديقة." },
      { who: "B", name: "О́льга Петро́вна", ru: "Пра́вильно! Молоде́ц. Запо́мните пра́вило: звони́ть кому́, а ви́деть кого́.", en: "Correct! Well done. Remember the rule: звони́ть takes 'to whom', but ви́деть takes 'whom'.", ar: "صحيح! أحسنت. احفظ القاعدة: звони́ть кому́ (لمن)، أمّا ви́деть فـ кого́ (مَن)." },
      { who: "A", name: "Ахме́д", ru: "Запо́мнил! Я бу́ду повторя́ть пра́вила ка́ждый день.", en: "Got it! I'll revise the rules every day.", ar: "حفظتها! سأراجع القواعد كل يوم." },
      { who: "B", name: "О́льга Петро́вна", ru: "Хорошо́. А за́втра — но́вое упражне́ние и но́вое объясне́ние.", en: "Good. And tomorrow — a new exercise and a new explanation.", ar: "حسنًا. وغدًا تمرين جديد وشرح جديد." },
    ],
  },
  pronunciation: {
    title: { en: "Unstressed endings: listen for the stress", ar: "النهايات غير المنبورة: أنصت إلى النبر" },
    en: [
      "In endings, unstressed е and и both sound like a short 'i', so о кни́ге and две кни́ги end in almost the same sound. The context tells you the case.",
      "When the ending carries the stress, it is loud and clear: в окне́, о письме́, с сестро́й. Say it with full force.",
    ],
    ar: [
      "في النهايات يُنطق е و и غير المنبورين مثل «i» قصيرة، لذلك تنتهي о кни́ге و две кни́ги بصوت متقارب جدًّا، والسياق هو الذي يبيّن الحالة.",
      "أمّا إذا وقع النبر على النهاية فإنها تُسمع بوضوح وقوة: в окне́، о письме́، с сестро́й. انطقها بكامل قوتها.",
    ],
    drills: [
      { ru: "о кни́ге", say: "a knIgi", focus: { en: "The unstressed -е sounds like a short 'i'.", ar: "حرف -е غير المنبور يُنطق مثل «i» قصيرة." } },
      { ru: "две кни́ги", say: "dvye knIgi", focus: { en: "The same final sound as in о кни́ге.", ar: "الصوت الأخير نفسه كما في о кни́ге." } },
      { ru: "в окне́", say: "v aknyE", focus: { en: "A stressed ending: the last syllable of окне́ is loud and clear.", ar: "نهاية منبورة: المقطع الأخير من окне́ يُنطق بوضوح وقوة." } },
      { ru: "о письме́", say: "a pis'myE", focus: { en: "The stress moves to the ending: письмо́ → о письме́.", ar: "ينتقل النبر إلى النهاية: письмо́ ← о письме́." } },
      { ru: "с сестро́й", say: "ssistrOy", focus: { en: "The two с sounds merge into one long 's'.", ar: "يندمج صوتا с في صوت «s» واحد طويل." } },
      { ru: "с бра́том", say: "zbrAtam", focus: { en: "Unstressed -ом sounds like '-am'.", ar: "تُنطق -ом غير المنبورة مثل «-am»." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Which case answers the question кому́?", ar: "أيّ حالة تجيب عن السؤال кому́؟" },
      options: ["Nominative · حالة الرفع", "Genitive · حالة الإضافة", "Dative · حالة المستفيد", "Instrumental · حالة الأداة"],
      answer: 2,
      why: { en: "кому́? — 'to whom?' — is the dative: Я звоню́ ма́ме.", ar: "кому́? — «لمن؟» — هو سؤال حالة المستفيد: Я звоню́ ма́ме." },
    },
    {
      kind: "choice",
      prompt: { en: "Choose the right form: I'm calling Anna.", ar: "اختر الصيغة الصحيحة: أتصل بآنا." },
      ru: "Я звоню́ …",
      options: ["А́нна", "А́нну", "А́нне", "А́нной"],
      answer: 2,
      why: { en: "звони́ть кому́? takes the dative: А́нне.", ar: "звони́ть кому́? يأخذ حالة المستفيد: А́нне." },
    },
    {
      kind: "fill",
      prompt: { en: "Put парк in the right case: We walked in the park.", ar: "ضع парк في الحالة الصحيحة: تمشّينا في الحديقة." },
      ru: "Мы гуля́ли в ___.",
      answers: ["па́рке"],
      why: { en: "где? — в + prepositional: в па́рке.", ar: "где? — в + حالة حرف الجر: в па́рке." },
    },
    {
      kind: "fill",
      prompt: { en: "Put маши́на in the right case: I live without a car.", ar: "ضع маши́на في الحالة الصحيحة: أعيش بدون سيارة." },
      ru: "Я живу́ без ___.",
      answers: ["маши́ны"],
      why: { en: "без takes the genitive: маши́на → маши́ны.", ar: "без يأخذ حالة الإضافة: маши́на ← маши́ны." },
    },
    {
      kind: "fill",
      prompt: { en: "Put врач in the right case: She works as a doctor.", ar: "ضع врач في الحالة الصحيحة: تعمل طبيبة." },
      ru: "Она́ рабо́тает ___.",
      answers: ["врачо́м"],
      why: { en: "рабо́тать кем? takes the instrumental: врачо́м.", ar: "рабо́тать кем? يأخذ حالة الأداة: врачо́м." },
    },
    {
      kind: "fill",
      prompt: { en: "Put Москва́ in the right case: We are talking about Moscow.", ar: "ضع Москва́ في الحالة الصحيحة: نتحدّث عن موسكو." },
      ru: "Мы говори́м о ___.",
      answers: ["Москве́"],
      why: { en: "о ком? о чём? — the prepositional: о Москве́.", ar: "о ком? о чём? — حالة حرف الجر: о Москве́." },
    },
    {
      kind: "fill",
      prompt: { en: "Put брат in the right case: I don't have a brother.", ar: "ضع брат في الحالة الصحيحة: ليس لديّ أخ." },
      ru: "У меня́ нет ___.",
      answers: ["бра́та"],
      why: { en: "нет + genitive: брат → бра́та.", ar: "нет + حالة الإضافة: брат ← бра́та." },
    },
    {
      kind: "choice",
      prompt: { en: "Which preposition always takes the dative?", ar: "أيّ حرف جر يأخذ دائمًا حالة المستفيد؟" },
      options: ["к", "с", "из", "о"],
      answer: 0,
      why: { en: "к + dative: к врачу́, к дру́гу. с takes the instrumental, из the genitive, о the prepositional.", ar: "к + حالة المستفيد: к врачу́، к дру́гу. أمّا с فيأخذ حالة الأداة، و из حالة الإضافة، و о حالة حرف الجر." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: Ahmed is writing a letter to his mum.", ar: "كوّن الجملة: أحمد يكتب رسالة إلى أمه." },
      tokens: ["письмо́", "Ахме́д", "ма́ме", "пи́шет"],
      answers: ["Ахме́д пи́шет письмо́ ма́ме.", "Ахме́д пи́шет ма́ме письмо́."],
      why: { en: "письмо́ is the object (accusative, no change); ма́ме answers кому́? (dative).", ar: "письмо́ هو المفعول به (حالة المفعول به، بلا تغيير)، و ма́ме تجيب عن кому́? (حالة المستفيد)." },
    },
    {
      kind: "translate",
      prompt: { en: "I drink tea without sugar.", ar: "أشرب الشاي بدون سكّر." },
      answers: ["Я пью чай без са́хара.", "Пью чай без са́хара."],
      why: { en: "без + genitive: са́хар → са́хара.", ar: "без + حالة الإضافة: са́хар ← са́хара." },
    },
    {
      kind: "translate",
      prompt: { en: "Maxim works as a programmer.", ar: "مكسيم يعمل مبرمجًا." },
      answers: ["Макси́м рабо́тает программи́стом."],
      why: { en: "рабо́тать + instrumental: программи́ст → программи́стом.", ar: "рабо́тать + حالة الأداة: программи́ст ← программи́стом." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does Anna say?", ar: "استمع. ماذا تقول آنا؟" },
      ru: "Я ду́маю о тебе́.",
      listen: true,
      options: ["I'm thinking about you. · أفكّر فيك.", "I'm calling you. · أتصل بك.", "I'm waiting for you. · أنتظرك."],
      answer: 0,
      why: { en: "о тебе́ is the prepositional after о: 'about you'.", ar: "о тебе́ في حالة حرف الجر بعد о: «عنك / فيك»." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Where are they going?", ar: "استمع. إلى أين يذهبون؟" },
      ru: "Мы е́дем к дру́гу.",
      listen: true,
      options: ["To a friend's place · إلى صديق", "With a friend · مع صديق", "From a friend's place · من عند صديق"],
      answer: 0,
      why: { en: "к + dative means 'to see a person'. 'With a friend' would be с дру́гом.", ar: "к + حالة المستفيد تعني «إلى شخص». أمّا «مع صديق» فهي с дру́гом." },
    },
  ],
  topics: ["cases-overview"],
  search: ["Russian six cases overview", "Russian prepositions and cases chart", "Russian noun declension table explained"],
  speaking: {
    scenario: {
      en: "Grammar clinic: the tutor says mixed sentences with a noun missing. You say the whole sentence with the noun in the right case, then make your own sentence with it.",
      ar: "عيادة القواعد: يقول المعلّم جملًا متنوعة ينقصها اسم، فتقول أنت الجملة كاملة والاسم في الحالة الصحيحة، ثم تكوّن جملة خاصة بك به.",
    },
    tutorBrief:
      "Play Olga Petrovna (Ольга Петровна), a patient Russian teacher running a grammar clinic. Say a sentence with a gap and give the missing noun in the nominative in brackets, e.g. 'Я звоню ... (мама)'. The learner repeats the whole sentence with the noun in the right case. Mix all six cases and the prepositions в, на, о, у, из, от, до, после, без, к, по, с, через, plus pronouns (мне, его, с ней, о них). If they make a mistake, ask the case question (кому? кого? где? куда? с кем?) and let them correct themselves before you give the answer. After every five items, ask them to make their own sentence with one of the nouns. Finish with the number of correct answers and one ending to revise.",
    prompts: [
      { ru: "Я звоню́ ма́ме ка́ждый день.", en: "I call my mum every day.", ar: "أتصل بأمي كل يوم." },
      { ru: "Я живу́ в Москве́ без семьи́.", en: "I live in Moscow without my family.", ar: "أعيش في موسكو بدون عائلتي." },
      { ru: "Я занима́юсь спо́ртом с дру́гом.", en: "I do sport with a friend.", ar: "أمارس الرياضة مع صديقي." },
      { ru: "Что зна́чит э́то сло́во?", en: "What does this word mean?", ar: "ماذا تعني هذه الكلمة؟" },
    ],
  },
  journal: {
    en: "Write 6–8 sentences about one day of your week and use every case at least once: who you saw (кого́?), who you called (кому́?), who you were with (с кем?), where you were (где?), what you talked about (о чём?) and what you did not have (нет чего́?).",
    ar: "اكتب من ٦ إلى ٨ جمل عن يوم واحد من أسبوعك، واستخدم كل حالة مرة واحدة على الأقل: مَن رأيت (кого́?)، وبمن اتصلت (кому́?)، ومع مَن كنت (с кем?)، وأين كنت (где?)، وعمّ تحدّثت (о чём?)، وما الذي لم يكن لديك (нет чего́?).",
  },
  culture: {
    en: "Russian schoolchildren learn the order of the cases with a funny sentence whose words start with И, Р, Д, В, Т, П: «Ива́н роди́л девчо́нку, веле́л тащи́ть пелёнку» — 'Ivan had a baby girl and told them to bring a nappy'. At school they check endings with the same questions you learned today: кто? что? кого́? чего́?…",
    ar: "يتعلّم تلاميذ المدارس في روسيا ترتيب الحالات بجملة طريفة تبدأ كلماتها بالحروف И، Р، Д، В، Т، П: «Ива́н роди́л девчо́нку, веле́л тащи́ть пелёнку» — «إيفان رُزق ببنت وطلب أن يحضروا لها قماطًا». وفي المدرسة يتحقّقون من النهايات بالأسئلة نفسها التي تعلّمتها اليوم: кто? что? кого́? чего́?…",
  },
};

const DAY_51: Day = {
  n: 51,
  week: 8,
  kind: "lesson",
  title: { ru: "Потому́ что и е́сли", en: "Because and if: complex sentences", ar: "لأن وإذا: الجمل المركبة" },
  goals: [
    {
      en: "Give reasons and results with потому́ что, поэ́тому and хотя́, and order them with во-пе́рвых, во-вторы́х, кро́ме того́.",
      ar: "أن تذكر الأسباب والنتائج باستخدام потому́ что و поэ́тому و хотя́، وأن ترتّبها بـ во-пе́рвых و во-вторы́х و кро́ме того́.",
    },
    {
      en: "Talk about conditions and plans with е́сли and когда́, using the future tense in both parts.",
      ar: "أن تتحدّث عن الشروط والخطط باستخدام е́сли و когда́، مع زمن المستقبل في شطري الجملة.",
    },
    {
      en: "Join two sentences with что, что́бы and кото́рый.",
      ar: "أن تربط جملتين باستخدام что و что́бы و кото́рый.",
    },
  ],
  words: [
    {
      id: "d51-01", ru: "потому́ что", say: "patamU shta", en: "because", ar: "لأنّ", pos: "conj",
      ex: { ru: "Я до́ма, потому́ что идёт дождь.", en: "I'm at home because it's raining.", ar: "أنا في البيت لأن المطر يهطل." },
      note: { en: "Put a comma before it.", ar: "ضع فاصلة قبلها." },
    },
    {
      id: "d51-02", ru: "поэ́тому", say: "paEtamu", en: "so, that's why", ar: "لذلك", pos: "adv",
      ex: { ru: "Идёт дождь, поэ́тому я до́ма.", en: "It's raining, so I'm at home.", ar: "المطر يهطل، لذلك أنا في البيت." },
    },
    {
      id: "d51-03", ru: "е́сли", say: "yEsli", en: "if", ar: "إذا، إنْ", pos: "conj",
      ex: { ru: "Е́сли бу́дет хоро́шая пого́да, мы бу́дем гуля́ть.", en: "If the weather is good, we'll go for a walk.", ar: "إذا كان الطقس جميلًا فسنتمشّى." },
      note: { en: "About the future, use the future after е́сли: е́сли бу́дет…", ar: "عند الحديث عن المستقبل استخدم زمن المستقبل بعد е́сли: е́сли бу́дет…" },
    },
    {
      id: "d51-04", ru: "кото́рый", say: "katOryy", en: "who, which, that (joins two sentences)", ar: "الذي، التي", pos: "pron",
      forms: "кото́рая, кото́рое, кото́рые",
      ex: { ru: "Э́то мой друг, кото́рый живёт в Каи́ре.", en: "This is my friend who lives in Cairo.", ar: "هذا صديقي الذي يعيش في القاهرة." },
    },
    {
      id: "d51-05", ru: "хотя́", say: "khatyA", en: "although, though", ar: "مع أنّ، رغم أنّ", pos: "conj",
      ex: { ru: "Я иду́ гуля́ть, хотя́ хо́лодно.", en: "I'm going for a walk, although it's cold.", ar: "سأخرج للتمشّي مع أن الجو بارد." },
    },
    {
      id: "d51-06", ru: "что́бы", say: "shtOby", en: "in order to, so that", ar: "لكي، من أجل أن", pos: "conj",
      ex: { ru: "Я учу́ ру́сский, что́бы говори́ть с друзья́ми.", en: "I'm learning Russian to talk with my friends.", ar: "أتعلّم الروسية لكي أتحدّث مع أصدقائي." },
    },
    {
      id: "d51-07", ru: "тогда́", say: "tagdA", en: "then; in that case", ar: "حينئذٍ؛ إذن", pos: "adv",
      ex: { ru: "— У меня́ сего́дня нет вре́мени. — Тогда́ до за́втра!", en: "— I have no time today. — Then see you tomorrow!", ar: "— ليس عندي وقت اليوم. — إذن إلى الغد!" },
    },
    {
      id: "d51-08", ru: "наве́рное", say: "navyErnaye", en: "probably", ar: "على الأرجح، ربما", pos: "adv",
      ex: { ru: "Наве́рное, за́втра бу́дет снег.", en: "It will probably snow tomorrow.", ar: "على الأرجح سيتساقط الثلج غدًا." },
    },
    {
      id: "d51-09", ru: "коне́чно", say: "kanyEshna", en: "of course", ar: "طبعًا، بالتأكيد", pos: "adv",
      ex: { ru: "— Ты зна́ешь А́нну? — Коне́чно!", en: "— Do you know Anna? — Of course!", ar: "— هل تعرف آنا؟ — طبعًا!" },
      note: { en: "Here чн is pronounced like шн: kanyEshna.", ar: "تُنطق чн هنا مثل шн: kanyEshna." },
    },
    {
      id: "d51-10", ru: "наприме́р", say: "naprimyEr", en: "for example", ar: "مثلًا", pos: "adv",
      ex: { ru: "Я люблю́ спорт, наприме́р, футбо́л.", en: "I love sport, for example football.", ar: "أحبّ الرياضة، كرة القدم مثلًا." },
    },
    {
      id: "d51-11", ru: "во-пе́рвых", say: "va-pyErvykh", en: "firstly, in the first place", ar: "أولًا", pos: "adv",
      ex: { ru: "Во-пе́рвых, я люблю́ Москву́.", en: "Firstly, I love Moscow.", ar: "أولًا، أحبّ موسكو." },
    },
    {
      id: "d51-12", ru: "во-вторы́х", say: "va-ftarYkh", en: "secondly", ar: "ثانيًا", pos: "adv",
      ex: { ru: "Во-вторы́х, тут живу́т мои́ друзья́.", en: "Secondly, my friends live here.", ar: "ثانيًا، يعيش أصدقائي هنا." },
    },
    {
      id: "d51-13", ru: "кро́ме того́", say: "krOmye tavO", en: "besides, moreover", ar: "فضلًا عن ذلك", pos: "phrase",
      ex: { ru: "Кро́ме того́, я рабо́таю в Москве́.", en: "Besides, I work in Moscow.", ar: "فضلًا عن ذلك، أعمل في موسكو." },
    },
    {
      id: "d51-14", ru: "вообще́", say: "vaapshchE", en: "in general, on the whole; (not) at all", ar: "عمومًا؛ إطلاقًا (مع النفي)", pos: "adv",
      ex: { ru: "Я вообще́ не пью ко́фе.", en: "I don't drink coffee at all.", ar: "لا أشرب القهوة إطلاقًا." },
    },
    {
      id: "d51-15", ru: "зато́", say: "zatO", en: "but then, on the other hand (a plus after a minus)", ar: "لكن في المقابل", pos: "conj",
      ex: { ru: "Москва́ — дорого́й го́род, зато́ о́чень краси́вый.", en: "Moscow is an expensive city, but it's very beautiful.", ar: "موسكو مدينة غالية، لكنها في المقابل جميلة جدًّا." },
    },
    {
      id: "d51-16", ru: "Я ду́маю, что…", say: "ya dUmayu, shta…", en: "I think (that)…", ar: "أعتقد أنّ…", pos: "phrase",
      ex: { ru: "Я ду́маю, что за́втра бу́дет тепло́.", en: "I think it will be warm tomorrow.", ar: "أعتقد أن الجو سيكون دافئًا غدًا." },
    },
    {
      id: "d51-17", ru: "уве́рен", say: "uvyErin", en: "sure, certain", ar: "متأكّد", pos: "adj", forms: "уве́рена, уве́рены",
      ex: { ru: "Я уве́рена, что всё бу́дет хорошо́.", en: "I'm sure everything will be fine.", ar: "أنا متأكّدة أن كل شيء سيكون على ما يرام." },
    },
    {
      id: "d51-18", ru: "причи́на", say: "prichIna", en: "reason, cause", ar: "سبب", pos: "noun", g: "f",
      ex: { ru: "Э́то хоро́шая причи́на.", en: "That's a good reason.", ar: "هذا سبب وجيه." },
    },
  ],
  grammar: [
    {
      id: "d51-g1",
      title: { en: "Reasons and results: потому́ что, поэ́тому, хотя́", ar: "الأسباب والنتائج: потому́ что، поэ́тому، хотя́" },
      en: [
        "Почему́? asks for a reason, and the answer starts with потому́ что (because). Поэ́тому (so, that's why) goes the other way: first the reason, then the result.",
        "Both need a comma: Я до́ма, потому́ что идёт дождь. = Идёт дождь, поэ́тому я до́ма. Хотя́ (although) adds a contrast: Я гуля́ю, хотя́ хо́лодно.",
        "To give several reasons, count them: во-пе́рвых…, во-вторы́х…, кро́ме того́… — it sounds organised and very natural in Russian.",
      ],
      ar: [
        "السؤال Почему́? يطلب سببًا، والإجابة تبدأ بـ потому́ что (لأنّ). أمّا поэ́тому (لذلك) فتسير في الاتجاه المعاكس: السبب أولًا ثم النتيجة.",
        "كلتاهما تحتاج إلى فاصلة: Я до́ма, потому́ что идёт дождь. = Идёт дождь, поэ́тому я до́ма. وتضيف хотя́ (مع أنّ) معنى المقابلة: Я гуля́ю, хотя́ хо́лодно.",
        "لذكر عدّة أسباب رتّبها بالعدّ: во-пе́рвых…، во-вторы́х…، кро́ме того́… — وهذا يبدو منظّمًا وطبيعيًّا جدًّا في الروسية.",
      ],
      tables: [
        {
          caption: { en: "Reason, result, contrast", ar: "السبب والنتيجة والمقابلة" },
          head: ["Word · الكلمة", "Meaning · المعنى", "Example · مثال"],
          rows: [
            ["потому́ что", "because (the reason) · لأنّ (السبب)", "Я до́ма, потому́ что идёт дождь."],
            ["поэ́тому", "so, that's why (the result) · لذلك (النتيجة)", "Идёт дождь, поэ́тому я до́ма."],
            ["хотя́", "although (a contrast) · مع أنّ (مقابلة)", "Я гуля́ю, хотя́ идёт дождь."],
            ["зато́", "but on the other hand (a plus) · لكن في المقابل (ميزة)", "Тут до́рого, зато́ вку́сно."],
            ["во-пе́рвых, во-вторы́х, кро́ме того́", "firstly, secondly, besides · أولًا، ثانيًا، فضلًا عن ذلك", "Во-пе́рвых, э́то вку́сно, во-вторы́х, дёшево."],
          ],
        },
      ],
      examples: [
        { ru: "— Почему́ ты у́чишь ру́сский? — Потому́ что я живу́ в Москве́.", en: "— Why are you learning Russian? — Because I live in Moscow.", ar: "— لماذا تتعلّم الروسية؟ — لأنني أعيش في موسكو." },
        { ru: "Сего́дня хо́лодно, поэ́тому я в ку́ртке.", en: "It's cold today, so I'm wearing a jacket.", ar: "الجو بارد اليوم، لذلك ألبس سترة." },
        { ru: "Я люблю́ Москву́, хотя́ зимо́й тут хо́лодно.", en: "I love Moscow, although it's cold here in winter.", ar: "أحبّ موسكو مع أن الجو هنا بارد في الشتاء." },
      ],
    },
    {
      id: "d51-g2",
      title: { en: "If and when: е́сли and когда́", ar: "إذا وعندما: е́сли و когда́" },
      en: [
        "Е́сли means 'if' and когда́ means 'when'. The second part may start with то or тогда́ (then), but often it has neither: Е́сли хо́чешь, я тебе́ позвоню́.",
        "The trap: when you talk about the future, Russian uses the future in both parts. English says 'If it rains tomorrow…', Russian says Е́сли за́втра бу́дет дождь… — literally 'if it will rain'.",
        "Когда́ works the same way: Когда́ я бу́ду в Каи́ре, я позвоню́ тебе́. About the past, use the past: Когда́ я жил в Каи́ре, я рабо́тал в о́фисе.",
      ],
      ar: [
        "е́сли تعني «إذا»، و когда́ تعني «عندما». وقد يبدأ الشطر الثاني بـ то أو тогда́ (فـ، حينئذٍ)، لكنه كثيرًا ما يأتي بدونهما: Е́сли хо́чешь, я тебе́ позвоню́.",
        "الفخّ: عند الحديث عن المستقبل تستخدم الروسية زمن المستقبل في الشطرين كليهما. تقول الإنجليزية «If it rains tomorrow» بالمضارع، أمّا الروسية فتقول Е́сли за́втра бу́дет дождь… — أي حرفيًا «إذا سيهطل المطر».",
        "و когда́ تعمل بالطريقة نفسها: Когда́ я бу́ду в Каи́ре, я позвоню́ тебе́. وعن الماضي استخدم الماضي: Когда́ я жил в Каи́ре, я рабо́тал в о́фисе.",
      ],
      tables: [
        {
          caption: { en: "The future after е́сли and когда́", ar: "المستقبل بعد е́сли و когда́" },
          head: ["English · بالإنجليزية", "Russian · بالروسية"],
          rows: [
            ["If I have time, I'll call. · إذا كان لديّ وقت فسأتصل.", "Е́сли у меня́ бу́дет вре́мя, я позвоню́."],
            ["When I'm in Moscow, I'll write. · عندما أكون في موسكو سأكتب.", "Когда́ я бу́ду в Москве́, я напишу́."],
            ["If it's cold, we'll stay at home. · إذا كان الجو باردًا فسنبقى في البيت.", "Е́сли бу́дет хо́лодно, мы бу́дем до́ма."],
          ],
        },
      ],
      examples: [
        { ru: "Е́сли за́втра бу́дет дождь, мы бу́дем смотре́ть фильм до́ма.", en: "If it rains tomorrow, we'll watch a film at home.", ar: "إذا أمطرت غدًا فسنشاهد فيلمًا في البيت." },
        { ru: "Когда́ я зако́нчу рабо́ту, я тебе́ позвоню́.", en: "When I finish work, I'll call you.", ar: "عندما أنهي العمل سأتصل بك." },
      ],
    },
    {
      id: "d51-g3",
      title: { en: "что, что́бы and кото́рый: joining two sentences", ar: "что و что́бы و кото́рый: ربط جملتين" },
      en: [
        "Что after verbs of saying, thinking and knowing joins a whole sentence: Я зна́ю, что ты из Каи́ра. Он сказа́л, что бу́дет по́здно. Always put a comma before что.",
        "Что́бы means 'in order to': Я учу́ ру́сский, что́бы рабо́тать в Москве́. When the person is the same, что́бы is followed by the infinitive.",
        "Кото́рый (who, which) takes the gender and number of the noun it describes, but its case comes from its own part of the sentence: друг, кото́рый живёт в Каи́ре; кни́га, кото́рую я чита́ю (я чита́ю кни́гу).",
      ],
      ar: [
        "что بعد أفعال القول والتفكير والمعرفة تربط جملة كاملة: Я зна́ю, что ты из Каи́ра. Он сказа́л, что бу́дет по́здно. ضع دائمًا فاصلة قبل что.",
        "что́бы تعني «لكي»: Я учу́ ру́сский, что́бы рабо́тать в Москве́. وإذا كان الفاعل نفسه في الشطرين يأتي بعد что́бы المصدر.",
        "кото́рый (الذي، التي) يأخذ جنس الاسم الذي يصفه وعدده، أمّا حالته فتحدّدها جملته هو: друг, кото́рый живёт в Каи́ре؛ кни́га, кото́рую я чита́ю (я чита́ю кни́гу).",
      ],
      tables: [
        {
          caption: { en: "кото́рый in the nominative and accusative", ar: "кото́рый في حالتي الرفع والمفعول به" },
          head: ["Case · الحالة", "m", "f", "n", "pl"],
          rows: [
            ["Nom. · رفع", "кото́рый", "кото́рая", "кото́рое", "кото́рые"],
            ["Acc. · مفعول به", "кото́рый (thing) / кото́рого (person)", "кото́рую", "кото́рое", "кото́рые (things) / кото́рых (people)"],
          ],
        },
      ],
      examples: [
        { ru: "Я зна́ю, что А́нна лю́бит ко́фе.", en: "I know that Anna loves coffee.", ar: "أعرف أن آنا تحبّ القهوة." },
        { ru: "Э́то де́вушка, кото́рая рабо́тает в апте́ке.", en: "This is the girl who works at the pharmacy.", ar: "هذه هي الفتاة التي تعمل في الصيدلية." },
        { ru: "Фильм, кото́рый мы смотре́ли вчера́, был о́чень хоро́ший.", en: "The film we watched yesterday was very good.", ar: "الفيلم الذي شاهدناه أمس كان جيدًا جدًّا." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Почему́ ру́сский?", en: "Why Russian?", ar: "لماذا الروسية؟" },
    setting: {
      en: "Saturday afternoon at Anna's flat. Her brother Maxim asks Ahmed why he is learning Russian and what he will do on his holiday.",
      ar: "بعد ظهر يوم السبت في شقّة آنا. يسأل أخوها مكسيم أحمدَ لماذا يتعلّم الروسية وماذا سيفعل في إجازته.",
    },
    lines: [
      { who: "A", name: "Макси́м", ru: "Ахме́д, а почему́ ты у́чишь ру́сский язы́к?", en: "Ahmed, why are you learning Russian?", ar: "يا أحمد، لماذا تتعلّم اللغة الروسية؟" },
      { who: "A", name: "Ахме́д", ru: "Во-пе́рвых, потому́ что я живу́ и рабо́таю в Москве́. Во-вторы́х, мне нра́вятся ру́сские фи́льмы.", en: "Firstly, because I live and work in Moscow. Secondly, I like Russian films.", ar: "أولًا، لأنني أعيش وأعمل في موسكو. وثانيًا، تعجبني الأفلام الروسية." },
      { who: "B", name: "А́нна", ru: "А кро́ме того́, у него́ есть ру́сские друзья́!", en: "And besides, he has Russian friends!", ar: "وفضلًا عن ذلك، لديه أصدقاء روس!" },
      { who: "A", name: "Ахме́д", ru: "Коне́чно! Вы мои́ друзья́, поэ́тому я хочу́ говори́ть с ва́ми по-ру́сски.", en: "Of course! You're my friends, so I want to speak Russian with you.", ar: "طبعًا! أنتم أصدقائي، ولذلك أريد أن أتحدّث معكم بالروسية." },
      { who: "A", name: "Макси́м", ru: "Хоро́шая причи́на! Я ду́маю, что ты вообще́ хорошо́ говори́шь.", en: "A good reason! I think you speak well on the whole.", ar: "سبب وجيه! أعتقد أنك تتكلّم جيدًا عمومًا." },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо, но я не уве́рен. Падежи́ — э́то тру́дно, хотя́ я занима́юсь ка́ждый день. Зато́ интере́сно!", en: "Thanks, but I'm not sure. Cases are hard, although I study every day. But they're interesting!", ar: "شكرًا، لكنني لست متأكدًا. الحالات صعبة، مع أنني أدرس كل يوم. لكنها في المقابل ممتعة!" },
      { who: "B", name: "А́нна", ru: "Ничего́! Е́сли ты бу́дешь занима́ться ка́ждый день, ты ско́ро бу́дешь говори́ть о́чень хорошо́.", en: "Never mind! If you study every day, you'll soon speak very well.", ar: "لا بأس! إذا واظبت على الدراسة كل يوم فستتكلّم قريبًا جيدًا جدًّا." },
      { who: "A", name: "Ахме́д", ru: "Я наде́юсь. Я смотрю́ ру́сские фи́льмы, что́бы лу́чше понима́ть лю́дей.", en: "I hope so. I watch Russian films to understand people better.", ar: "أرجو ذلك. أشاهد الأفلام الروسية لكي أفهم الناس أفضل." },
      { who: "A", name: "Макси́м", ru: "А что ты бу́дешь де́лать, когда́ у тебя́ бу́дет о́тпуск?", en: "And what will you do when you have a holiday?", ar: "وماذا ستفعل عندما تحصل على إجازة؟" },
      { who: "A", name: "Ахме́д", ru: "Наве́рное, бу́ду путеше́ствовать по Росси́и. Наприме́р, я хочу́ посмотре́ть Петербу́рг.", en: "I'll probably travel around Russia. For example, I want to see St Petersburg.", ar: "على الأرجح سأسافر في أنحاء روسيا. مثلًا، أريد أن أرى بطرسبورغ." },
      { who: "B", name: "А́нна", ru: "У меня́ есть подру́га, кото́рая живёт в Петербу́рге. Е́сли хо́чешь, я дам тебе́ её телефо́н.", en: "I have a friend who lives in St Petersburg. If you like, I'll give you her number.", ar: "لديّ صديقة تعيش في بطرسبورغ. إذا أردت أعطيك رقم هاتفها." },
      { who: "A", name: "Ахме́д", ru: "Да, хочу́! Тогда́ я обяза́тельно ей позвоню́, когда́ бу́ду в Петербу́рге.", en: "Yes, I'd like that! Then I'll definitely call her when I'm in St Petersburg.", ar: "نعم، أريد! إذن سأتصل بها بالتأكيد عندما أكون في بطرسبورغ." },
    ],
  },
  pronunciation: {
    title: { en: "Intonation in long sentences: rise, pause, fall", ar: "التنغيم في الجمل الطويلة: ارتفاع ثم وقفة ثم انخفاض" },
    en: [
      "A complex sentence has two parts. At the comma, the voice rises a little and pauses, as if saying 'wait, there is more'. At the full stop it falls.",
      "Е́сли бу́дет вре́мя (rise, pause), я позвоню́ (fall). Keep the stress of each word clear: е́сли, бу́дет, вре́мя, позвоню́.",
    ],
    ar: [
      "للجملة المركّبة شطران. عند الفاصلة يرتفع الصوت قليلًا ويتوقّف، كأنه يقول «انتظر، هناك المزيد»، وعند النقطة ينخفض.",
      "Е́сли бу́дет вре́мя (ارتفاع ثم وقفة)، я позвоню́ (انخفاض). حافظ على وضوح النبر في كل كلمة: е́сли، бу́дет، вре́мя، позвоню́.",
    ],
    drills: [
      { ru: "Е́сли бу́дет вре́мя, я позвоню́.", say: "yEsli bUdit vryEmya, ya pazvanyU.", focus: { en: "Rise on вре́мя, pause, then fall on позвоню́.", ar: "ارفع صوتك على вре́мя، ثم توقّف، ثم اخفضه على позвоню́." } },
      { ru: "Я до́ма, потому́ что идёт дождь.", say: "ya dOma, patamU shta idyOt dosht'.", focus: { en: "что in потому́ что sounds like 'shta'.", ar: "تُنطق что في потому́ что مثل «shta»." } },
      { ru: "Когда́ я был в Каи́ре, бы́ло жа́рко.", say: "kagdA ya byl f kaIrye, bYla zhArka.", focus: { en: "в before к sounds like 'f'.", ar: "حرف в قبل к يُنطق مثل «f»." } },
      { ru: "Я зна́ю, что э́то тру́дно.", say: "ya znAyu, shto Eta trUdna.", focus: { en: "A small pause after зна́ю, then one smooth fall.", ar: "وقفة قصيرة بعد зна́ю، ثم انخفاض سلس واحد." } },
      { ru: "Коне́чно!", say: "kanyEshna!", focus: { en: "чн is pronounced шн in коне́чно.", ar: "تُنطق чн مثل шн في коне́чно." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the linking word: — Why are you at home? — Because it's raining.", ar: "اختر أداة الربط: — لماذا أنت في البيت؟ — لأن المطر يهطل." },
      ru: "— Почему́ ты до́ма? — … идёт дождь.",
      options: ["Потому́ что", "Поэ́тому", "Е́сли", "Хотя́"],
      answer: 0,
      why: { en: "An answer to почему́? starts with потому́ что.", ar: "الإجابة عن почему́? تبدأ بـ потому́ что." },
    },
    {
      kind: "choice",
      prompt: { en: "Choose the linking word: It's raining, so I'm at home.", ar: "اختر أداة الربط: المطر يهطل، لذلك أنا في البيت." },
      ru: "Идёт дождь, … я до́ма.",
      options: ["потому́ что", "поэ́тому", "кото́рый", "что́бы"],
      answer: 1,
      why: { en: "The reason comes first and the result second: поэ́тому.", ar: "السبب أولًا ثم النتيجة: поэ́тому." },
    },
    {
      kind: "choice",
      prompt: { en: "Choose the right verb: If the weather is good tomorrow, we'll go for a walk.", ar: "اختر الفعل الصحيح: إذا كان الطقس جميلًا غدًا فسنتمشّى." },
      ru: "Е́сли за́втра … хоро́шая пого́да, мы бу́дем гуля́ть.",
      options: ["бу́дет", "есть", "была́", "бу́ду"],
      answer: 0,
      why: { en: "About the future, Russian uses the future after е́сли: бу́дет.", ar: "عند الحديث عن المستقبل تستخدم الروسية المستقبل بعد е́сли: бу́дет." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: I'll call you when (or if) I'm in Moscow.", ar: "أكمل: سأتصل بك عندما (أو إذا) أكون في موسكو." },
      ru: "Я позвоню́ тебе́, ___ бу́ду в Москве́.",
      answers: ["когда́", "е́сли"],
      why: { en: "Both когда́ and е́сли work here, and both take the future: бу́ду.", ar: "تصلح هنا когда́ و е́сли كلتاهما، وكلتاهما تأخذ المستقبل: бу́ду." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: This is my friend who lives in Cairo.", ar: "أكمل: هذا صديقي الذي يعيش في القاهرة." },
      ru: "Э́то мой друг, ___ живёт в Каи́ре.",
      answers: ["кото́рый"],
      why: { en: "друг is masculine and is the subject of живёт: кото́рый.", ar: "друг مذكّر وهو فاعل живёт: кото́рый." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: This is my sister who works as a doctor.", ar: "أكمل: هذه أختي التي تعمل طبيبة." },
      ru: "Э́то моя́ сестра́, ___ рабо́тает врачо́м.",
      answers: ["кото́рая"],
      why: { en: "сестра́ is feminine, so кото́рая.", ar: "сестра́ مؤنّثة، لذلك кото́рая." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: I'm learning Russian to talk with my friends.", ar: "أكمل: أتعلّم الروسية لكي أتحدّث مع أصدقائي." },
      ru: "Я учу́ ру́сский, ___ говори́ть с друзья́ми.",
      answers: ["что́бы"],
      why: { en: "что́бы + infinitive = in order to.", ar: "что́бы + المصدر = لكي." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I know that you are learning Russian.", ar: "كوّن الجملة: أعرف أنك تتعلّم الروسية." },
      tokens: ["что", "Я", "ты", "зна́ю", "у́чишь", "ру́сский"],
      answers: ["Я зна́ю, что ты у́чишь ру́сский."],
      why: { en: "что joins the second sentence after зна́ю, with a comma before it.", ar: "что تربط الجملة الثانية بعد зна́ю، وقبلها فاصلة." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: It was cold, so we were at home.", ar: "كوّن الجملة: كان الجو باردًا، لذلك كنّا في البيت." },
      tokens: ["поэ́тому", "хо́лодно", "мы", "до́ма", "Бы́ло", "бы́ли"],
      answers: ["Бы́ло хо́лодно, поэ́тому мы бы́ли до́ма."],
      why: { en: "First the reason (бы́ло хо́лодно), then поэ́тому and the result.", ar: "السبب أولًا (бы́ло хо́лодно)، ثم поэ́тому والنتيجة." },
    },
    {
      kind: "translate",
      prompt: { en: "I'm learning Russian because I live in Moscow.", ar: "أتعلّم الروسية لأنني أعيش في موسكو." },
      answers: [
        "Я учу́ ру́сский, потому́ что я живу́ в Москве́.",
        "Я учу́ ру́сский, потому́ что живу́ в Москве́.",
        "Я учу́ ру́сский язы́к, потому́ что я живу́ в Москве́.",
        "Я учу́ ру́сский язы́к, потому́ что живу́ в Москве́.",
      ],
      why: { en: "The reason follows потому́ что, after a comma.", ar: "يأتي السبب بعد потому́ что، وقبلها فاصلة." },
    },
    {
      kind: "translate",
      prompt: { en: "If I have time, I'll call you.", ar: "إذا كان لديّ وقت فسأتصل بك." },
      answers: [
        "Е́сли у меня́ бу́дет вре́мя, я тебе́ позвоню́.",
        "Е́сли у меня́ бу́дет вре́мя, я позвоню́ тебе́.",
        "Е́сли бу́дет вре́мя, я тебе́ позвоню́.",
        "Е́сли бу́дет вре́мя, я позвоню́ тебе́.",
        "Е́сли у меня́ бу́дет вре́мя, то я позвоню́ тебе́.",
      ],
      why: { en: "Future in both parts: бу́дет вре́мя … позвоню́.", ar: "المستقبل في الشطرين: бу́дет вре́мя … позвоню́." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Why were they at home?", ar: "استمع. لماذا كانوا في البيت؟" },
      ru: "Мы бы́ли до́ма, потому́ что шёл дождь.",
      listen: true,
      options: ["Because it was raining · لأن المطر كان يهطل", "Because it was cold · لأن الجو كان باردًا", "Because they were busy · لأنهم كانوا مشغولين"],
      answer: 0,
      why: { en: "шёл дождь = it was raining (the past of идёт дождь).", ar: "шёл дождь = كان المطر يهطل (ماضي идёт дождь)." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. When will the person call?", ar: "استمع. متى سيتصل الشخص؟" },
      ru: "Е́сли бу́дет вре́мя, я позвоню́ тебе́ ве́чером.",
      listen: true,
      options: ["In the evening, if there is time · في المساء إن سمح الوقت", "Tomorrow morning · صباح الغد", "Right now · الآن"],
      answer: 0,
      why: { en: "е́сли бу́дет вре́мя — if there is time; ве́чером — in the evening.", ar: "е́сли бу́дет вре́мя — إن سمح الوقت؛ ве́чером — في المساء." },
    },
  ],
  topics: ["conjunctions"],
  search: ["Russian conjunctions потому что поэтому", "Russian если когда future tense", "Russian который relative clauses"],
  speaking: {
    scenario: {
      en: "Maxim wants to know your reasons: why you are learning Russian, why you live where you live, and what you will do if you have a free week in Russia.",
      ar: "يريد مكسيم أن يعرف أسبابك: لماذا تتعلّم الروسية، ولماذا تعيش حيث تعيش، وماذا ستفعل إذا كان لديك أسبوع حرّ في روسيا.",
    },
    tutorBrief:
      "Play Maxim (Максим), Anna's curious brother, a programmer, chatting with the learner over tea. Ask 'why' and 'what if' questions: Почему ты учишь русский? Почему ты живёшь в Москве? Что ты будешь делать, если у тебя будет свободная неделя? Что ты будешь делать, когда будешь в Каире? Expect answers with потому что, поэтому, хотя, если, когда, что, чтобы, который and во-первых / во-вторых / кроме того. If the learner uses the present after если or когда about the future (если у меня есть время…), repeat the sentence correctly with будет and ask them to say it again. Push for one complex sentence in every answer. Finish by summing up their three best reasons in simple Russian and praising one linking word they used well.",
    prompts: [
      { ru: "Я учу́ ру́сский, потому́ что живу́ в Москве́.", en: "I'm learning Russian because I live in Moscow.", ar: "أتعلّم الروسية لأنني أعيش في موسكو." },
      { ru: "Во-пе́рвых, э́то интере́сно, а во-вторы́х, у меня́ тут друзья́.", en: "Firstly, it's interesting, and secondly, I have friends here.", ar: "أولًا، هذا ممتع، وثانيًا، لديّ أصدقاء هنا." },
      { ru: "Е́сли у меня́ бу́дет о́тпуск, я бу́ду путеше́ствовать.", en: "If I have a holiday, I'll travel.", ar: "إذا حصلتُ على إجازة فسأسافر." },
      { ru: "У меня́ есть друг, кото́рый хорошо́ говори́т по-ру́сски.", en: "I have a friend who speaks Russian well.", ar: "لديّ صديق يتكلّم الروسية جيدًا." },
    ],
  },
  journal: {
    en: "Write 6–8 sentences: why you are learning Russian (во-пе́рвых, во-вторы́х, кро́ме того́), what you will do if you have a free week, and describe a person who helps you (челове́к, кото́рый…).",
    ar: "اكتب من ٦ إلى ٨ جمل: لماذا تتعلّم الروسية (во-пе́рвых، во-вторы́х، кро́ме того́)، وماذا ستفعل إذا كان لديك أسبوع حرّ، وصِف شخصًا يساعدك (челове́к, кото́рый…).",
  },
  culture: {
    en: "Ask a Russian child «Почему́?» one time too many and you may hear the rhyming joke answer «Потому́, что конча́ется на „у“!» — 'Because it ends in у!' (and it does: почему́, потому́). Adults sometimes answer «Потому́ что потому́» — 'just because'.",
    ar: "إذا أكثرتَ من سؤال طفل روسي «Почему́?» فقد تسمع الإجابة المازحة المقفّاة «Потому́, что конча́ется на „у“!» — أي «لأنها تنتهي بـ у!» (وهذا صحيح: почему́، потому́). وأحيانًا يجيب الكبار «Потому́ что потому́» — أي «هكذا وحسب».",
  },
};

const DAY_52: Day = {
  n: 52,
  week: 8,
  kind: "lesson",
  title: { ru: "Дава́й встре́тимся!", en: "Let's meet! Calls and invitations", ar: "هيا نلتقي! المكالمات والدعوات" },
  goals: [
    {
      en: "Give instructions and make requests with the imperative: скажи́(те), дай(те), подожди́(те), позвони́(те).",
      ar: "أن تعطي تعليمات وتقدّم طلبات بصيغة الأمر: скажи́(те)، дай(те)، подожди́(те)، позвони́(те).",
    },
    {
      en: "Invite someone with дава́й + a perfective verb, and accept or decline politely.",
      ar: "أن تدعو شخصًا باستخدام дава́й + فعل تام، وأن تقبل الدعوة أو تعتذر عنها بلطف.",
    },
    {
      en: "Handle a phone call: answer, ask for someone, deal with a bad line and agree on a time.",
      ar: "أن تدير مكالمة هاتفية: ترد، وتطلب شخصًا، وتتعامل مع ضعف الصوت، وتتفق على موعد.",
    },
  ],
  words: [
    {
      id: "d52-01", ru: "дава́й", say: "davAy", en: "let's (to ты); come on", ar: "هيّا (لمن تخاطبه بـ ты)", pos: "part", forms: "дава́йте (to вы)",
      ex: { ru: "Дава́й посмо́трим фильм!", en: "Let's watch a film!", ar: "هيّا نشاهد فيلمًا!" },
    },
    {
      id: "d52-02", ru: "встре́титься", say: "fstryEtitsa", en: "to meet (perfective)", ar: "يلتقي (فعل تام)", pos: "verb",
      forms: "встре́чусь, встре́тишься; impf. встреча́ться",
      ex: { ru: "Дава́й встре́тимся за́втра.", en: "Let's meet tomorrow.", ar: "هيّا نلتقي غدًا." },
    },
    {
      id: "d52-03", ru: "свобо́ден", say: "svabOdin", en: "free (not busy)", ar: "متفرّغ، غير مشغول", pos: "adj", forms: "свобо́дна, свобо́дны",
      ex: { ru: "Ты свобо́ден в пя́тницу?", en: "Are you free on Friday?", ar: "هل أنت متفرّغ يوم الجمعة؟" },
    },
    {
      id: "d52-04", ru: "за́нят", say: "zAnit", en: "busy", ar: "مشغول", pos: "adj", forms: "занята́, за́няты",
      ex: { ru: "Извини́, я сейча́с за́нят.", en: "Sorry, I'm busy right now.", ar: "آسف، أنا مشغول الآن." },
    },
    {
      id: "d52-05", ru: "алло́", say: "alO", en: "hello (on the phone)", ar: "ألو", pos: "interj",
      ex: { ru: "Алло́! Кто э́то?", en: "Hello! Who is it?", ar: "ألو! مَن المتكلّم؟" },
    },
    {
      id: "d52-06", ru: "подожда́ть", say: "padazhdAt'", en: "to wait (a little) (perfective)", ar: "ينتظر قليلًا (فعل تام)", pos: "verb",
      forms: "подожду́, подождёшь; подожди́те!",
      ex: { ru: "Подожди́те мину́ту, пожа́луйста.", en: "Wait a minute, please.", ar: "انتظر دقيقة من فضلك." },
    },
    {
      id: "d52-07", ru: "перезвони́ть", say: "pirizvanIt'", en: "to call back (perfective)", ar: "يعاود الاتصال (فعل تام)", pos: "verb",
      forms: "перезвоню́, перезвони́шь",
      ex: { ru: "Я вам перезвоню́ ве́чером.", en: "I'll call you back in the evening.", ar: "سأعاود الاتصال بك في المساء." },
    },
    {
      id: "d52-08", ru: "слы́шно", say: "slYshna", en: "(can be) heard, audible", ar: "مسموع", pos: "adv",
      ex: { ru: "Тебя́ пло́хо слы́шно.", en: "I can't hear you well.", ar: "صوتك غير واضح." },
    },
    {
      id: "d52-09", ru: "приглаше́ние", say: "priglashEniye", en: "invitation", ar: "دعوة", pos: "noun", g: "n",
      ex: { ru: "Э́то приглаше́ние на день рожде́ния.", en: "This is an invitation to a birthday party.", ar: "هذه دعوة إلى حفلة عيد ميلاد." },
    },
    {
      id: "d52-10", ru: "отказа́ться", say: "atkazAtsa", en: "to decline, to refuse (perfective)", ar: "يرفض، يعتذر عن (فعل تام)", pos: "verb",
      forms: "откажу́сь, отка́жешься; от + genitive",
      ex: { ru: "Мне о́чень жаль, но мне ну́жно отказа́ться.", en: "I'm very sorry, but I have to decline.", ar: "يؤسفني جدًّا، لكن عليّ أن أعتذر." },
    },
    {
      id: "d52-11", ru: "жаль", say: "zhal'", en: "a pity; sorry", ar: "للأسف؛ يا للأسف", pos: "adv",
      ex: { ru: "Мне жаль, но я за́нят.", en: "I'm sorry, but I'm busy.", ar: "يؤسفني ذلك، لكنني مشغول." },
      note: { en: "Жаль! = What a pity! Мне жаль. = I'm sorry.", ar: "Жаль! = يا للأسف! Мне жаль. = يؤسفني." },
    },
    { id: "d52-12", ru: "Договори́лись!", say: "dagavarIlis'!", en: "Agreed! Deal! (literally: we've agreed)", ar: "اتفقنا!", pos: "phrase" },
    {
      id: "d52-13", ru: "Дава́й на ты.", say: "davAy na ty.", en: "Let's say ты to each other.", ar: "لنتخاطب بـ ты (بلا كلفة).", pos: "phrase",
      ex: { ru: "— Мо́жно на ты? — Коне́чно, дава́й на ты!", en: "— May I say ты? — Of course, let's say ты!", ar: "— هل يمكن أن نتخاطب بـ ты؟ — طبعًا، لنتخاطب بـ ты!" },
    },
    {
      id: "d52-14", ru: "в друго́й раз", say: "v drugOy ras", en: "another time", ar: "في مرة أخرى", pos: "phrase",
      ex: { ru: "Сего́дня не могу́. Мо́жет быть, в друго́й раз?", en: "I can't today. Maybe another time?", ar: "لا أستطيع اليوم. ربما في مرة أخرى؟" },
    },
    {
      id: "d52-15", ru: "Слу́шаю!", say: "slUshayu!", en: "Hello? (answering the phone; literally: I'm listening)", ar: "نعم، تفضّل! (عند الرد على الهاتف)", pos: "phrase",
    },
    {
      id: "d52-16", ru: "Позови́те, пожа́луйста…", say: "pazavItye, pazhAlusta…", en: "Could you get … (to the phone), please?", ar: "من فضلك، نادِ… (إلى الهاتف)", pos: "phrase",
      ex: { ru: "Позови́те, пожа́луйста, О́льгу Петро́вну.", en: "Could you get Olga Petrovna, please?", ar: "من فضلك، نادِ أولغا بتروفنا." },
      note: { en: "The person is in the accusative. To a friend: Позови́, пожа́луйста…", ar: "الشخص المطلوب في حالة المفعول به. ولصديق: Позови́, пожа́луйста…" },
    },
    {
      id: "d52-17", ru: "Вас пло́хо слы́шно.", say: "vas plOkha slYshna.", en: "I can't hear you well. (literally: you are badly heard)", ar: "صوتك غير واضح.", pos: "phrase",
      note: { en: "To a friend: Тебя́ пло́хо слы́шно.", ar: "لصديق: Тебя́ пло́хо слы́шно." },
    },
    { id: "d52-18", ru: "Спаси́бо за приглаше́ние!", say: "spasIba za priglashEniye!", en: "Thank you for the invitation!", ar: "شكرًا على الدعوة!", pos: "phrase" },
  ],
  grammar: [
    {
      id: "d52-g1",
      title: { en: "The imperative: скажи́, да́йте, подожди́", ar: "صيغة الأمر: скажи́، да́йте، подожди́" },
      en: [
        "The imperative gives instructions and makes requests. For ты it usually ends in -й (after a vowel) or -и; for вы add -те: чита́й → чита́йте, скажи́ → скажи́те.",
        "Build it from the они́ form: чита́ют → чита́й; подожду́т → подожди́; позвоня́т → позвони́. If the я-form is stressed on the ending (скажу́, позвоню́), so is the imperative: скажи́, позвони́.",
        "Soften it with пожа́луйста. A perfective imperative asks for one concrete action (Позвони́ мне за́втра!); an imperfective one gives general advice or a polite invitation (Звони́ ка́ждый день! Сади́тесь, пожа́луйста!).",
      ],
      ar: [
        "صيغة الأمر تعطي تعليمات وتعبّر عن الطلبات. مع ты تنتهي عادةً بـ -й (بعد حرف متحرّك) أو بـ -и، ومع вы نضيف -те: чита́й ← чита́йте، скажи́ ← скажи́те.",
        "كوّنها من صيغة они́: чита́ют ← чита́й؛ подожду́т ← подожди́؛ позвоня́т ← позвони́. وإذا كان النبر في صيغة я على النهاية (скажу́، позвоню́) فهو كذلك في صيغة الأمر: скажи́، позвони́.",
        "لطّف الأمر بكلمة пожа́луйста. الأمر من الفعل التام يطلب فعلًا محدّدًا واحدًا (Позвони́ мне за́втра!)، والأمر من الفعل غير التام يقدّم نصيحة عامة أو دعوة مهذّبة (Звони́ ка́ждый день! Сади́тесь, пожа́луйста!).",
      ],
      tables: [
        {
          caption: { en: "Everyday imperatives", ar: "أفعال أمر يومية" },
          head: ["Infinitive · المصدر", "ты", "вы", "Meaning · المعنى"],
          rows: [
            ["сказа́ть", "скажи́", "скажи́те", "tell, say · قل"],
            ["дать", "дай", "да́йте", "give · أعطِ"],
            ["подожда́ть", "подожди́", "подожди́те", "wait · انتظر"],
            ["позвони́ть", "позвони́", "позвони́те", "call · اتصل"],
            ["перезвони́ть", "перезвони́", "перезвони́те", "call back · عاوِد الاتصال"],
            ["слу́шать", "слу́шай", "слу́шайте", "listen · استمع"],
            ["извини́ть", "извини́", "извини́те", "excuse me, sorry · اعذرني، عفوًا"],
          ],
        },
      ],
      examples: [
        { ru: "Скажи́те, пожа́луйста, А́нна до́ма?", en: "Could you tell me, please, is Anna at home?", ar: "قل لي من فضلك، هل آنا في البيت؟" },
        { ru: "Подожди́ мину́ту, я сейча́с.", en: "Wait a minute, I'll be right there.", ar: "انتظر دقيقة، سآتي حالًا." },
        { ru: "Позвони́те мне за́втра у́тром.", en: "Call me tomorrow morning.", ar: "اتصل بي صباح الغد." },
      ],
    },
    {
      id: "d52-g2",
      title: { en: "Дава́й + perfective: let's…", ar: "Дава́й + فعل تام: هيّا بنا…" },
      en: [
        "To suggest doing something together, say дава́й (to ты) or дава́йте (to вы) + the мы-form of a perfective verb: Дава́й встре́тимся! — Let's meet! Дава́йте посмо́трим фильм. — Let's watch a film.",
        "With an imperfective verb, use the infinitive: Дава́й говори́ть по-ру́сски! — Let's speak Russian (from now on). Дава́й на ты! — Let's say ты to each other.",
        "To accept: Дава́й! / Договори́лись! / С удово́льствием! To decline politely, thank, say sorry and offer another time: Спаси́бо, но я за́нят. Мо́жет быть, в друго́й раз?",
      ],
      ar: [
        "لاقتراح فعل شيء معًا قل дава́й (لمن تخاطبه بـ ты) أو дава́йте (لمن تخاطبه بـ вы) + صيغة мы من فعل تام: Дава́й встре́тимся! — هيّا نلتقي! Дава́йте посмо́трим фильм. — هيّا نشاهد فيلمًا.",
        "ومع الفعل غير التام استخدم المصدر: Дава́й говори́ть по-ру́сски! — هيّا نتكلّم الروسية (من الآن فصاعدًا). Дава́й на ты! — لنتخاطب بـ ты.",
        "للقبول: Дава́й! / Договори́лись! / С удово́льствием! وللاعتذار بلطف اشكر واعتذر واقترح وقتًا آخر: Спаси́бо, но я за́нят. Мо́жет быть, в друго́й раз?",
      ],
      tables: [
        {
          caption: { en: "Invitations: yes and no", ar: "الدعوات: القبول والاعتذار" },
          head: ["Say yes · للقبول", "Say no politely · للاعتذار بلطف"],
          rows: [
            ["Дава́й! / Дава́йте!", "Извини́, я за́нят (занята́)."],
            ["С удово́льствием!", "К сожале́нию, я не могу́."],
            ["Договори́лись!", "Жаль, но у меня́ нет вре́мени."],
            ["Во ско́лько?", "Мо́жет быть, в друго́й раз?"],
          ],
        },
      ],
      examples: [
        { ru: "Дава́й встре́тимся в суббо́ту у метро́.", en: "Let's meet on Saturday by the metro.", ar: "هيّا نلتقي يوم السبت عند المترو." },
        { ru: "Дава́йте пригото́вим у́жин вме́сте!", en: "Let's cook dinner together!", ar: "هيّا نطبخ العشاء معًا!" },
      ],
    },
    {
      id: "d52-g3",
      title: { en: "On the phone; свобо́ден and за́нят", ar: "على الهاتف؛ свобо́ден و за́нят" },
      en: [
        "Russians answer the phone with Алло́! or, more formally, Слу́шаю! To ask for someone: Позови́те, пожа́луйста, А́нну. — the person is in the accusative.",
        "Свобо́ден (free) and за́нят (busy) are short adjectives that change for gender and number: он свобо́ден, она́ свобо́дна; он за́нят, она́ занята́. Watch the stress in занята́.",
        "When the line is bad: Вас пло́хо слы́шно. Я вам перезвоню́. — I can't hear you well. I'll call you back.",
      ],
      ar: [
        "يرد الروس على الهاتف بقولهم Алло́! أو بصيغة أكثر رسمية Слу́шаю! ولطلب شخص ما: Позови́те, пожа́луйста, А́нну. — والشخص المطلوب في حالة المفعول به.",
        "свобо́ден (متفرّغ) و за́нят (مشغول) صفتان قصيرتان تتغيّران حسب الجنس والعدد: он свобо́ден، она́ свобо́дна؛ он за́нят، она́ занята́. انتبه إلى موضع النبر في занята́.",
        "إذا كان الصوت ضعيفًا: Вас пло́хо слы́шно. Я вам перезвоню́. — صوتك غير واضح. سأعاود الاتصال بك.",
      ],
      tables: [
        {
          caption: { en: "Free and busy", ar: "متفرّغ ومشغول" },
          head: ["Word · الكلمة", "m · مذكّر", "f · مؤنّث", "pl · جمع"],
          rows: [
            ["free · متفرّغ", "свобо́ден", "свобо́дна", "свобо́дны"],
            ["busy · مشغول", "за́нят", "занята́", "за́няты"],
          ],
        },
      ],
      examples: [
        { ru: "— Алло́! Позови́те, пожа́луйста, Макси́ма. — Подожди́те мину́ту.", en: "— Hello! Could you get Maxim, please? — Wait a minute.", ar: "— ألو! من فضلك نادِ مكسيم. — انتظر دقيقة." },
        { ru: "Извини́, сего́дня я занята́. Дава́й за́втра?", en: "Sorry, I'm busy today. How about tomorrow?", ar: "آسفة، أنا مشغولة اليوم. ما رأيك في الغد؟" },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Ты свобо́дна в суббо́ту?", en: "Are you free on Saturday?", ar: "هل أنتِ متفرّغة يوم السبت؟" },
    setting: {
      en: "Ahmed phones Anna's flat to invite her to see a new film. Her brother Maxim answers first, and the line is not very good.",
      ar: "يتصل أحمد بشقّة آنا ليدعوها لمشاهدة فيلم جديد. يردّ أخوها مكسيم أولًا، والصوت ليس واضحًا تمامًا.",
    },
    lines: [
      { who: "A", name: "Макси́м", ru: "Алло́! Слу́шаю!", en: "Hello? (I'm listening!)", ar: "ألو! نعم، تفضّل!" },
      { who: "A", name: "Ахме́д", ru: "Приве́т, Макси́м! Э́то Ахме́д. А́нна до́ма? Позови́ её, пожа́луйста.", en: "Hi, Maxim! It's Ahmed. Is Anna at home? Could you get her, please?", ar: "مرحبًا يا مكسيم! أنا أحمد. هل آنا في البيت؟ نادِها من فضلك." },
      { who: "A", name: "Макси́м", ru: "Приве́т! Подожди́ мину́ту… А́ня, тебя́ к телефо́ну!", en: "Hi! Wait a minute… Anya, the phone's for you!", ar: "مرحبًا! انتظر دقيقة… يا آنيا، الهاتف لكِ!" },
      { who: "B", name: "А́нна", ru: "Алло́, Ахме́д! Приве́т!", en: "Hello, Ahmed! Hi!", ar: "ألو، أحمد! مرحبًا!" },
      { who: "A", name: "Ахме́д", ru: "Приве́т! Слу́шай, ты свобо́дна в суббо́ту? Дава́й посмо́трим но́вый фильм!", en: "Hi! Listen, are you free on Saturday? Let's watch the new film!", ar: "مرحبًا! اسمعي، هل أنتِ متفرّغة يوم السبت؟ هيّا نشاهد الفيلم الجديد!" },
      { who: "B", name: "А́нна", ru: "Извини́, тебя́ пло́хо слы́шно. Что ты сказа́л?", en: "Sorry, I can't hear you well. What did you say?", ar: "عذرًا، صوتك غير واضح. ماذا قلت؟" },
      { who: "A", name: "Ахме́д", ru: "Я говорю́: дава́й встре́тимся в суббо́ту и посмо́трим фильм!", en: "I'm saying: let's meet on Saturday and watch a film!", ar: "أقول: هيّا نلتقي يوم السبت ونشاهد فيلمًا!" },
      { who: "B", name: "А́нна", ru: "Спаси́бо за приглаше́ние, но в суббо́ту я занята́. Мо́жет быть, в друго́й раз?", en: "Thank you for the invitation, but I'm busy on Saturday. Maybe another time?", ar: "شكرًا على الدعوة، لكنني مشغولة يوم السبت. ربما في مرة أخرى؟" },
      { who: "A", name: "Ахме́д", ru: "Жаль! А в воскресе́нье ты свобо́дна?", en: "What a pity! And are you free on Sunday?", ar: "يا للأسف! وهل أنتِ متفرّغة يوم الأحد؟" },
      { who: "B", name: "А́нна", ru: "В воскресе́нье — да. Дава́й в шесть часо́в у метро́?", en: "On Sunday — yes. Shall we say six o'clock by the metro?", ar: "يوم الأحد — نعم. ما رأيك في الساعة السادسة عند المترو؟" },
      { who: "A", name: "Ахме́д", ru: "Договори́лись! Я тебе́ перезвоню́ в воскресе́нье у́тром.", en: "Deal! I'll call you back on Sunday morning.", ar: "اتفقنا! سأعاود الاتصال بكِ صباح الأحد." },
      { who: "B", name: "А́нна", ru: "Хорошо́. Пока́!", en: "Good. Bye!", ar: "حسنًا. إلى اللقاء!" },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Make the imperative for ты: сказа́ть →", ar: "كوّن صيغة الأمر لـ ты: сказа́ть ←" },
      options: ["скажи́", "скажу́", "ска́жешь", "сказа́л"],
      answer: 0,
      why: { en: "The я-form скажу́ is stressed on the ending, so the imperative is скажи́.", ar: "صيغة я скажу́ منبورة على النهاية، لذلك صيغة الأمر скажи́." },
    },
    {
      kind: "choice",
      prompt: { en: "Ask a stranger politely: Wait, please.", ar: "اطلب من شخص غريب بأدب: انتظر من فضلك." },
      options: ["Подожди́те, пожа́луйста.", "Подожди́, пожа́луйста.", "Подожда́ть, пожа́луйста."],
      answer: 0,
      why: { en: "A stranger gets вы, so add -те: подожди́те.", ar: "مع الغريب نستخدم вы، لذلك نضيف -те: подожди́те." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Let's meet on Saturday! (to a friend)", ar: "أكمل: هيّا نلتقي يوم السبت! (لصديق)" },
      ru: "___ встре́тимся в суббо́ту!",
      answers: ["Дава́й", "Дава́йте"],
      why: { en: "дава́й + the мы-form of a perfective verb = let's…", ar: "дава́й + صيغة мы من فعل تام = هيّا بنا…" },
    },
    {
      kind: "fill",
      prompt: { en: "Anna says: Sorry, I'm busy today.", ar: "تقول آنا: آسفة، أنا مشغولة اليوم." },
      ru: "Извини́, сего́дня я ___.",
      answers: ["занята́"],
      why: { en: "A woman says занята́, with the stress on the ending.", ar: "المرأة تقول занята́، والنبر على النهاية." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Maxim is free today, so we can meet.", ar: "أكمل: مكسيم متفرّغ اليوم، لذلك يمكننا أن نلتقي." },
      ru: "Макси́м сего́дня ___, поэ́тому мы мо́жем встре́титься.",
      answers: ["свобо́ден"],
      why: { en: "Masculine short form: свобо́ден (she: свобо́дна).", ar: "الصيغة القصيرة للمذكّر: свобо́ден (وللمؤنّث: свобо́дна)." },
    },
    {
      kind: "fill",
      prompt: { en: "To a friend: Call me in the evening!", ar: "لصديق: اتصل بي في المساء!" },
      ru: "___ мне ве́чером!",
      answers: ["Позвони́", "Звони́"],
      why: { en: "позвони́ть → позвони́ (ты); to вы it would be позвони́те.", ar: "позвони́ть ← позвони́ (لـ ты)؛ ومع вы تصبح позвони́те." },
    },
    {
      kind: "choice",
      prompt: { en: "The phone rings. What do you say first?", ar: "يرنّ الهاتف. ماذا تقول أولًا؟" },
      options: ["Алло́!", "Пока́!", "Договори́лись!", "Жаль!"],
      answer: 0,
      why: { en: "Russians answer the phone with Алло́! (or Слу́шаю!).", ar: "يردّ الروس على الهاتف بـ Алло́! (أو Слу́шаю!)." },
    },
    {
      kind: "choice",
      prompt: { en: "You can't hear the caller well. What do you say?", ar: "لا تسمع المتّصل جيدًا. ماذا تقول؟" },
      options: ["Вас пло́хо слы́шно.", "Вас зову́т А́нна?", "Дава́й на ты."],
      answer: 0,
      why: { en: "Вас пло́хо слы́шно = I can't hear you well.", ar: "Вас пло́хо слы́шно = صوتك غير واضح." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: Let's meet on Sunday by the metro.", ar: "كوّن الجملة: هيّا نلتقي يوم الأحد عند المترو." },
      tokens: ["у", "встре́тимся", "метро́", "Дава́й", "в", "воскресе́нье"],
      answers: ["Дава́й встре́тимся в воскресе́нье у метро́.", "Дава́й встре́тимся у метро́ в воскресе́нье."],
      why: { en: "Дава́й + встре́тимся, then when (в воскресе́нье) and where (у метро́).", ar: "Дава́й + встре́тимся، ثم متى (в воскресе́нье) وأين (у метро́)." },
    },
    {
      kind: "translate",
      prompt: { en: "Thank you for the invitation, but I'm busy.", ar: "شكرًا على الدعوة، لكنني مشغول." },
      answers: ["Спаси́бо за приглаше́ние, но я за́нят.", "Спаси́бо за приглаше́ние, но я занята́."],
      why: { en: "Thank, then decline: но я за́нят (a woman: занята́).", ar: "اشكر ثم اعتذر: но я за́нят (والمرأة تقول: занята́)." },
    },
    {
      kind: "translate",
      prompt: { en: "I'll call you back tomorrow.", ar: "سأعاود الاتصال بك غدًا." },
      answers: [
        "Я перезвоню́ тебе́ за́втра.",
        "Я тебе́ перезвоню́ за́втра.",
        "Я перезвоню́ вам за́втра.",
        "Я вам перезвоню́ за́втра.",
        "За́втра я тебе́ перезвоню́.",
        "За́втра я вам перезвоню́.",
        "Перезвоню́ за́втра.",
      ],
      why: { en: "перезвони́ть is perfective, so перезвоню́ already means 'I will call back'.", ar: "перезвони́ть فعل تام، لذلك перезвоню́ تعني وحدها «سأعاود الاتصال»." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. When do they meet?", ar: "استمع. متى يلتقيان؟" },
      ru: "Дава́й встре́тимся в пя́тницу в семь часо́в.",
      listen: true,
      options: ["Friday at seven · الجمعة في السابعة", "Saturday at seven · السبت في السابعة", "Friday at five · الجمعة في الخامسة"],
      answer: 0,
      why: { en: "в пя́тницу = on Friday, в семь часо́в = at seven o'clock.", ar: "в пя́тницу = يوم الجمعة، в семь часо́в = في الساعة السابعة." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. How does he answer the invitation?", ar: "استمع. كيف يردّ على الدعوة؟" },
      ru: "К сожале́нию, я за́нят. Мо́жет быть, в друго́й раз?",
      listen: true,
      options: ["He declines and suggests another time · يعتذر ويقترح وقتًا آخر", "He accepts with pleasure · يقبل بسرور", "He asks where to meet · يسأل عن مكان اللقاء"],
      answer: 0,
      why: { en: "за́нят = busy; в друго́й раз = another time.", ar: "за́нят = مشغول؛ в друго́й раз = في مرة أخرى." },
    },
  ],
  topics: ["phone-calls", "invitations", "imperative"],
  search: ["Russian imperative mood explained", "Russian phone call phrases", "Russian invitations давай let's"],
  speaking: {
    scenario: {
      en: "Phone a friend (the tutor) to arrange a meeting. Your friend is busy at the time you suggest and declines politely, so you agree on another day and time.",
      ar: "اتصل بصديق (المعلّم) لترتيب لقاء. صديقك مشغول في الوقت الذي تقترحه فيعتذر بلطف، فتتفقان على يوم ووقت آخرين.",
    },
    tutorBrief:
      "Play Anna (Анна) answering her mobile. Start with Алло! or Слушаю! The learner invites you somewhere (cinema, café, a walk). Decline the first suggestion politely (спасибо за приглашение, к сожалению, я занята, мне жаль), then suggest another day yourself or ask the learner to suggest one (Может быть, в другой раз? Ты свободен в воскресенье?). Once, pretend the line is bad (Алло? Тебя плохо слышно!) so the learner has to repeat or say they will call back. Use imperatives naturally: подожди, скажи, позвони, перезвони. Make sure the call ends with an agreed day, time and place (Договорились!). If the learner forgets the -те form or uses the wrong gender in свободен / занята, recast it and let them repeat. Finish by recapping the plan in one sentence and praising their best phrase.",
    prompts: [
      { ru: "Алло́! Позови́те, пожа́луйста, А́нну.", en: "Hello! Could you get Anna, please?", ar: "ألو! من فضلك نادِ آنا." },
      { ru: "Ты свобо́дна в суббо́ту? Дава́й встре́тимся!", en: "Are you free on Saturday? Let's meet!", ar: "هل أنتِ متفرّغة يوم السبت؟ هيّا نلتقي!" },
      { ru: "Жаль! Мо́жет быть, в друго́й раз?", en: "What a pity! Maybe another time?", ar: "يا للأسف! ربما في مرة أخرى؟" },
      { ru: "Договори́лись! До воскресе́нья!", en: "Deal! See you on Sunday!", ar: "اتفقنا! إلى اللقاء يوم الأحد!" },
    ],
  },
  journal: {
    en: "Write a text message of 5–8 sentences inviting a friend to something at the weekend: what, where and when (Дава́й…). Then write your friend's polite refusal and your new plan.",
    ar: "اكتب رسالة نصية من ٥ إلى ٨ جمل تدعو فيها صديقًا إلى نشاط في عطلة نهاية الأسبوع: ماذا وأين ومتى (Дава́й…). ثم اكتب اعتذار صديقك المهذّب وخطتكما الجديدة.",
  },
  culture: {
    en: "Russians answer the phone with Алло́! or simply Да? Calling someone you don't know well late in the evening, after about ten, is considered impolite. And the switch from вы to ты is normally offered by the older or more senior person: Дава́йте на ты!",
    ar: "يردّ الروس على الهاتف بـ Алло́! أو بـ Да? فقط. ويُعدّ الاتصال بشخص لا تعرفه جيدًا في وقت متأخر من المساء، بعد العاشرة تقريبًا، أمرًا غير مهذّب. أمّا الانتقال من вы إلى ты فيقترحه عادةً الأكبر سنًّا أو الأعلى مكانة: Дава́йте на ты!",
  },
};

const DAY_53: Day = {
  n: 53,
  week: 8,
  kind: "lesson",
  title: { ru: "Путеше́ствие", en: "Travel", ar: "السفر" },
  goals: [
    {
      en: "Check in at a hotel: give your booking name and ask about your room and breakfast.",
      ar: "أن تسجّل وصولك في الفندق: تذكر اسم الحجز وتسأل عن غرفتك وعن الفطور.",
    },
    {
      en: "Find your way through an airport: check-in, passport control, the gate and boarding.",
      ar: "أن تجد طريقك في المطار: تسجيل الوصول، ومراقبة الجوازات، وبوابة الصعود، والصعود إلى الطائرة.",
    },
    {
      en: "Explain a problem — a lost suitcase, a missed flight — and ask for help.",
      ar: "أن تشرح مشكلة — حقيبة ضائعة أو رحلة فاتتك — وأن تطلب المساعدة.",
    },
  ],
  words: [
    {
      id: "d53-01", ru: "путеше́ствие", say: "putishEstviye", en: "journey, trip; travelling", ar: "رحلة، سفر", pos: "noun", g: "n", forms: "мн. ч. путеше́ствия",
      ex: { ru: "Я о́чень люблю́ путеше́ствия.", en: "I really love travelling.", ar: "أحبّ الرحلات كثيرًا." },
    },
    {
      id: "d53-02", ru: "аэропо́рт", say: "aerapOrt", en: "airport", ar: "مطار", pos: "noun", g: "m", forms: "в аэропорту́",
      ex: { ru: "Я жду тебя́ в аэропорту́.", en: "I'm waiting for you at the airport.", ar: "أنتظرك في المطار." },
    },
    {
      id: "d53-03", ru: "рейс", say: "ryeys", en: "flight", ar: "رحلة جوية", pos: "noun", g: "m",
      ex: { ru: "Наш рейс в Каи́р в во́семь часо́в.", en: "Our flight to Cairo is at eight o'clock.", ar: "رحلتنا إلى القاهرة في الساعة الثامنة." },
    },
    {
      id: "d53-04", ru: "регистра́ция", say: "rigistrAtsiya", en: "check-in; registration", ar: "تسجيل الوصول؛ التسجيل", pos: "noun", g: "f",
      ex: { ru: "Где регистра́ция на рейс в Каи́р?", en: "Where is check-in for the flight to Cairo?", ar: "أين تسجيل الوصول لرحلة القاهرة؟" },
    },
    {
      id: "d53-05", ru: "поса́дка", say: "pasAtka", en: "boarding (a plane or train)", ar: "الصعود (إلى الطائرة أو القطار)", pos: "noun", g: "f",
      ex: { ru: "Поса́дка начина́ется че́рез два́дцать мину́т.", en: "Boarding starts in twenty minutes.", ar: "يبدأ الصعود بعد عشرين دقيقة." },
    },
    {
      id: "d53-06", ru: "бага́ж", say: "bagAsh", en: "luggage, baggage", ar: "الأمتعة", pos: "noun", g: "m",
      ex: { ru: "Мой бага́ж не прилете́л.", en: "My luggage didn't arrive.", ar: "أمتعتي لم تصل." },
    },
    {
      id: "d53-07", ru: "чемода́н", say: "chimadAn", en: "suitcase", ar: "حقيبة سفر", pos: "noun", g: "m",
      ex: { ru: "У меня́ оди́н большо́й чемода́н.", en: "I have one big suitcase.", ar: "لديّ حقيبة سفر كبيرة واحدة." },
    },
    {
      id: "d53-08", ru: "бронь", say: "bron'", en: "booking, reservation", ar: "حجز", pos: "noun", g: "f",
      ex: { ru: "У вас есть бронь?", en: "Do you have a booking?", ar: "هل لديك حجز؟" },
    },
    {
      id: "d53-09", ru: "но́мер", say: "nOmir", en: "hotel room; number", ar: "غرفة (في فندق)؛ رقم", pos: "noun", g: "m", forms: "мн. ч. номера́",
      ex: { ru: "В но́мере есть душ и телеви́зор.", en: "The room has a shower and a TV.", ar: "في الغرفة دُشّ وتلفاز." },
    },
    {
      id: "d53-10", ru: "потеря́ть", say: "patiryAt'", en: "to lose (perfective)", ar: "يُضيّع، يفقد (فعل تام)", pos: "verb",
      forms: "потеря́ю, потеря́ешь; потеря́л, потеря́ла",
      ex: { ru: "Я потеря́ла ключ от но́мера.", en: "I've lost the key to my room.", ar: "أضعتُ مفتاح غرفتي." },
    },
    {
      id: "d53-11", ru: "Помоги́те!", say: "pamagItye!", en: "Help! Please help me.", ar: "النجدة! ساعدوني!", pos: "phrase",
      note: { en: "To one friend: Помоги́! — from помо́чь, the perfective partner of помога́ть.", ar: "لصديق واحد: Помоги́! — من помо́чь، وهو الفعل التام المقابل لـ помога́ть." },
    },
    {
      id: "d53-12", ru: "ближа́йший", say: "blizhAyshyy", en: "the nearest", ar: "الأقرب", pos: "adj", forms: "ближа́йшая, ближа́йшее, ближа́йшие",
      ex: { ru: "Где ближа́йшая ста́нция метро́?", en: "Where is the nearest metro station?", ar: "أين أقرب محطة مترو؟" },
    },
    {
      id: "d53-13", ru: "опозда́ть", say: "apazdAt'", en: "to be late (for), to miss (perfective)", ar: "يتأخّر عن، تفوته (فعل تام)", pos: "verb",
      forms: "опозда́ю, опозда́ешь; на + accusative",
      ex: { ru: "Я опозда́л на рейс!", en: "I missed my flight! (literally: I was late for the flight)", ar: "فاتتني الرحلة! (حرفيًا: تأخّرتُ عن الرحلة)" },
    },
    {
      id: "d53-14", ru: "па́спортный контро́ль", say: "pAspartnyy kantrOl'", en: "passport control", ar: "مراقبة الجوازات", pos: "noun", g: "m",
      ex: { ru: "Па́спортный контро́ль — нале́во.", en: "Passport control is to the left.", ar: "مراقبة الجوازات على اليسار." },
    },
    {
      id: "d53-15", ru: "У меня́ бронь на и́мя…", say: "u minyA bron' na Imya…", en: "I have a booking under the name…", ar: "لديّ حجز باسم…", pos: "phrase",
      ex: { ru: "У меня́ бронь на и́мя Ахме́д Хаса́н.", en: "I have a booking under the name Ahmed Hassan.", ar: "لديّ حجز باسم أحمد حسن." },
    },
    {
      id: "d53-16", ru: "прилете́ть", say: "prilityEt'", en: "to arrive by plane (perfective)", ar: "يصل بالطائرة (فعل تام)", pos: "verb",
      forms: "прилечу́, прилети́шь",
      ex: { ru: "Я прилечу́ в Москву́ в пя́тницу.", en: "I'll arrive in Moscow on Friday.", ar: "سأصل إلى موسكو يوم الجمعة." },
    },
    {
      id: "d53-17", ru: "найти́", say: "naytI", en: "to find (perfective)", ar: "يجد، يعثر على (فعل تام)", pos: "verb",
      forms: "найду́, найдёшь; нашёл, нашла́",
      ex: { ru: "Мы обяза́тельно найдём ваш чемода́н.", en: "We'll definitely find your suitcase.", ar: "سنجد حقيبتك بالتأكيد." },
    },
    { id: "d53-18", ru: "Во ско́лько за́втрак?", say: "va skOl'ka zAftrak?", en: "What time is breakfast?", ar: "في أيّ ساعة الفطور؟", pos: "phrase" },
  ],
  grammar: [
    {
      id: "d53-g1",
      title: { en: "At the hotel", ar: "في الفندق" },
      en: [
        "Say who you are: У меня́ бронь на и́мя Ахме́д Хаса́н. The receptionist will ask for your passport: Ваш па́спорт, пожа́луйста.",
        "In a hotel, но́мер means a room: Ваш но́мер со́рок два. Useful questions: Во ско́лько за́втрак? Где лифт? В но́мере есть душ?",
      ],
      ar: [
        "عرّف بنفسك: У меня́ бронь на и́мя Ахме́д Хаса́н. وسيطلب موظّف الاستقبال جواز سفرك: Ваш па́спорт, пожа́луйста.",
        "في الفندق تعني но́мер «غرفة»: Ваш но́мер со́рок два. ومن الأسئلة المفيدة: Во ско́лько за́втрак? Где лифт? В но́мере есть душ?",
      ],
      tables: [
        {
          caption: { en: "Guest and receptionist", ar: "النزيل وموظّف الاستقبال" },
          head: ["Guest · النزيل", "Receptionist · موظّف الاستقبال"],
          rows: [
            ["У меня́ бронь на и́мя…", "Ваш па́спорт, пожа́луйста."],
            ["Во ско́лько за́втрак?", "За́втрак в семь часо́в."],
            ["Где мой но́мер?", "Ваш но́мер со́рок два. Вот ключ."],
            ["В но́мере есть душ?", "Да, коне́чно."],
          ],
        },
      ],
      examples: [
        { ru: "Здра́вствуйте! У меня́ бронь на и́мя А́нна Смирно́ва.", en: "Hello! I have a booking under the name Anna Smirnova.", ar: "مرحبًا! لديّ حجز باسم آنا سميرنوفا." },
        { ru: "В но́мере есть телеви́зор и холоди́льник.", en: "The room has a TV and a fridge.", ar: "في الغرفة تلفاز وثلّاجة." },
      ],
    },
    {
      id: "d53-g2",
      title: { en: "At the airport", ar: "في المطار" },
      en: [
        "The key airport words follow your journey: регистра́ция (check-in) → па́спортный контро́ль (passport control) → вы́ход (the gate) → поса́дка (boarding) → рейс (the flight).",
        "Use на + accusative for the flight itself: регистра́ция на рейс, поса́дка на рейс, опозда́ть на рейс. The destination is в + accusative: рейс в Каи́р.",
        "Прилете́ть means to arrive by plane: Когда́ ты прилети́шь? — Я прилечу́ в пя́тницу.",
      ],
      ar: [
        "كلمات المطار الأساسية تتبع رحلتك: регистра́ция (تسجيل الوصول) ← па́спортный контро́ль (مراقبة الجوازات) ← вы́ход (بوابة الصعود) ← поса́дка (الصعود إلى الطائرة) ← рейс (الرحلة).",
        "استخدم на + حالة المفعول به للرحلة نفسها: регистра́ция на рейс، поса́дка на рейс، опозда́ть на рейс. أمّا الوجهة فـ в + حالة المفعول به: рейс в Каи́р.",
        "прилете́ть تعني «يصل بالطائرة»: Когда́ ты прилети́шь? — Я прилечу́ в пя́тницу.",
      ],
      tables: [
        {
          caption: { en: "Your way through the airport", ar: "طريقك داخل المطار" },
          head: ["Step · الخطوة", "Russian · بالروسية", "Useful sentence · جملة مفيدة"],
          rows: [
            ["1 · check-in · تسجيل الوصول", "регистра́ция", "Где регистра́ция на рейс в Каи́р?"],
            ["2 · passport control · مراقبة الجوازات", "па́спортный контро́ль", "Ваш па́спорт, пожа́луйста."],
            ["3 · the gate · بوابة الصعود", "вы́ход", "Вы́ход но́мер пять."],
            ["4 · boarding · الصعود إلى الطائرة", "поса́дка", "Поса́дка начина́ется в де́вять."],
            ["5 · arrival · الوصول", "прилете́ть", "Мы прилети́м в Москву́ ве́чером."],
          ],
        },
      ],
      examples: [
        { ru: "Где регистра́ция на рейс в Каи́р?", en: "Where is check-in for the flight to Cairo?", ar: "أين تسجيل الوصول لرحلة القاهرة؟" },
        { ru: "Поса́дка на рейс начина́ется че́рез час.", en: "Boarding for the flight starts in an hour.", ar: "يبدأ الصعود إلى الطائرة بعد ساعة." },
      ],
    },
    {
      id: "d53-g3",
      title: { en: "When something goes wrong", ar: "عندما تحدث مشكلة" },
      en: [
        "Losing something is one finished event, so use the perfective past — and its ending shows who is speaking: Я потеря́л па́спорт (a man), Я потеря́ла па́спорт (a woman). The same with опозда́ть: Я опозда́л на рейс.",
        "Ближа́йший (the nearest) agrees with its noun: ближа́йший вокза́л, ближа́йшая апте́ка, ближа́йшее кафе́.",
        "In an emergency, call out Помоги́те! and say what you need: Мне ну́жно в больни́цу!",
      ],
      ar: [
        "ضياع الشيء حدث واحد مكتمل، لذلك نستخدم الماضي من الفعل التام، ونهايته تبيّن مَن المتكلّم: Я потеря́л па́спорт (رجل)، Я потеря́ла па́спорт (امرأة). وكذلك مع опозда́ть: Я опозда́л на рейс.",
        "ближа́йший (الأقرب) يتطابق مع الاسم الذي يصفه: ближа́йший вокза́л، ближа́йшая апте́ка، ближа́йшее кафе́.",
        "في حالة الطوارئ نادِ Помоги́те! وقل ما تحتاج إليه: Мне ну́жно в больни́цу!",
      ],
      tables: [
        {
          caption: { en: "ближа́йший with its noun", ar: "ближа́йший مع الاسم" },
          head: ["Gender · الجنس", "Form · الصيغة", "Example · مثال"],
          rows: [
            ["m · مذكّر", "ближа́йший", "ближа́йший вокза́л"],
            ["f · مؤنّث", "ближа́йшая", "ближа́йшая апте́ка"],
            ["n · محايد", "ближа́йшее", "ближа́йшее кафе́"],
            ["pl · جمع", "ближа́йшие", "ближа́йшие магази́ны"],
          ],
        },
      ],
      examples: [
        { ru: "Помоги́те, пожа́луйста! Я потеря́л па́спорт.", en: "Please help me! I've lost my passport.", ar: "ساعدوني من فضلكم! أضعتُ جواز سفري." },
        { ru: "Извини́те, где ближа́йшая апте́ка?", en: "Excuse me, where is the nearest pharmacy?", ar: "عفوًا، أين أقرب صيدلية؟" },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Чемода́н не прилете́л", en: "The suitcase didn't arrive", ar: "الحقيبة لم تصل" },
    setting: {
      en: "Ahmed arrives late in the evening at a small hotel in St Petersburg. His flight was fine, but his suitcase did not arrive.",
      ar: "يصل أحمد في وقت متأخر من المساء إلى فندق صغير في بطرسبورغ. كانت رحلته جيدة، لكن حقيبته لم تصل.",
    },
    lines: [
      { who: "B", name: "Администра́тор", ru: "Здра́вствуйте! Слу́шаю вас.", en: "Hello! How can I help you? (literally: I'm listening to you)", ar: "مرحبًا! تفضّل. (حرفيًا: أنا أسمعك)" },
      { who: "A", name: "Ахме́д", ru: "Здра́вствуйте! У меня́ бронь на и́мя Ахме́д Хаса́н.", en: "Hello! I have a booking under the name Ahmed Hassan.", ar: "مرحبًا! لديّ حجز باسم أحمد حسن." },
      { who: "B", name: "Администра́тор", ru: "Да, вот ва́ша бронь. Ваш па́спорт, пожа́луйста.", en: "Yes, here is your booking. Your passport, please.", ar: "نعم، هذا حجزك. جواز سفرك من فضلك." },
      { who: "A", name: "Ахме́д", ru: "Вот, пожа́луйста. Скажи́те, во ско́лько за́втрак?", en: "Here you are. Tell me, what time is breakfast?", ar: "تفضّلي. قولي لي، في أيّ ساعة الفطور؟" },
      { who: "B", name: "Администра́тор", ru: "За́втрак у́тром в семь часо́в, в на́шем рестора́не. Ваш но́мер со́рок два, вот ключ.", en: "Breakfast is at seven in the morning, in our restaurant. Your room is forty-two; here is the key.", ar: "الفطور في الساعة السابعة صباحًا في مطعمنا. غرفتك رقم اثنين وأربعين، وهذا هو المفتاح." },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо. И ещё одна́ пробле́ма: мой чемода́н не прилете́л. Наве́рное, его́ потеря́ли в аэропорту́.", en: "Thank you. And one more problem: my suitcase didn't arrive. They probably lost it at the airport.", ar: "شكرًا. وهناك مشكلة أخرى: حقيبتي لم تصل. على الأرجح أضاعوها في المطار." },
      { who: "B", name: "Администра́тор", ru: "Ой, как жаль! Вы уже́ говори́ли об э́том в аэропорту́?", en: "Oh, what a pity! Have you already reported it at the airport?", ar: "يا للأسف! هل أبلغت عن ذلك في المطار؟" },
      { who: "A", name: "Ахме́д", ru: "Нет, там была́ о́чень дли́нная о́чередь, а я о́чень спеши́л.", en: "No, there was a very long queue there, and I was in a big hurry.", ar: "لا، كان هناك طابور طويل جدًّا، وكنت مستعجلًا جدًّا." },
      { who: "B", name: "Администра́тор", ru: "Ничего́. Вот телефо́н аэропо́рта. Позвони́те им и скажи́те но́мер ре́йса. Они́ обяза́тельно найду́т ваш бага́ж.", en: "Never mind. Here is the airport's number. Call them and give them the flight number. They'll definitely find your luggage.", ar: "لا بأس. هذا رقم هاتف المطار. اتصل بهم وأعطهم رقم الرحلة. سيجدون أمتعتك بالتأكيد." },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо! А где ближа́йшая апте́ка? У меня́ боли́т голова́.", en: "Thank you! And where is the nearest pharmacy? I have a headache.", ar: "شكرًا! وأين أقرب صيدلية؟ رأسي يؤلمني." },
      { who: "B", name: "Администра́тор", ru: "Ря́дом, сле́ва. Иди́те пря́мо, пять мину́т пешко́м.", en: "Close by, on the left. Go straight on, five minutes on foot.", ar: "قريبة، على اليسار. امشِ إلى الأمام، خمس دقائق سيرًا على الأقدام." },
      { who: "A", name: "Ахме́д", ru: "Большо́е спаси́бо!", en: "Thank you very much!", ar: "شكرًا جزيلًا!" },
    ],
  },
  pronunciation: {
    title: { en: "Long travel words: one strong syllable", ar: "كلمات السفر الطويلة: مقطع قوي واحد" },
    en: [
      "Long words like путеше́ствие or регистра́ция have only one strong syllable. Say it long and loud, and let the other syllables be quick and light.",
      "Unstressed е and я sound like a short 'i' (регистра́ция → rigistrAtsiya), and unstressed о sounds like 'a' (чемода́н → chimadAn).",
    ],
    ar: [
      "الكلمات الطويلة مثل путеше́ствие أو регистра́ция فيها مقطع قوي واحد فقط. انطقه طويلًا وبصوت عالٍ، ودع بقية المقاطع سريعة وخفيفة.",
      "حرفا е و я غير المنبورين يُنطقان مثل «i» قصيرة (регистра́ция ← rigistrAtsiya)، وحرف о غير المنبور يُنطق مثل «a» (чемода́н ← chimadAn).",
    ],
    drills: [
      { ru: "путеше́ствие", say: "putishEstviye", focus: { en: "Only -ше- is strong; the rest is quick.", ar: "المقطع -ше- وحده قوي، والباقي سريع." } },
      { ru: "регистра́ция", say: "rigistrAtsiya", focus: { en: "Both е sound like a short 'i'.", ar: "حرفا е كلاهما يُنطقان مثل «i» قصيرة." } },
      { ru: "аэропо́рт", say: "aerapOrt", focus: { en: "а and э are two separate sounds: a-e.", ar: "а و э صوتان منفصلان: a-e." } },
      { ru: "чемода́н", say: "chimadAn", focus: { en: "Unstressed е → 'i', unstressed о → 'a'.", ar: "е غير المنبور ← «i»، و о غير المنبور ← «a»." } },
      { ru: "па́спортный контро́ль", say: "pAspartnyy kantrOl'", focus: { en: "Two words, two strong syllables: па- and -троль.", ar: "كلمتان ومقطعان قويان: па- و -троль." } },
      { ru: "Помоги́те!", say: "pamagItye!", focus: { en: "A call for help: strong and clear on -ги-.", ar: "نداء استغاثة: قوي وواضح على -ги-." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "At the airport, where do you drop your suitcase and get your boarding pass?", ar: "في المطار، أين تسلّم حقيبتك وتحصل على بطاقة الصعود؟" },
      options: ["регистра́ция", "поса́дка", "па́спортный контро́ль", "бронь"],
      answer: 0,
      why: { en: "регистра́ция is check-in: bags and boarding passes.", ar: "регистра́ция هي تسجيل الوصول: الحقائب وبطاقات الصعود." },
    },
    {
      kind: "choice",
      prompt: { en: "What is поса́дка at the airport?", ar: "ما معنى поса́дка في المطار؟" },
      options: ["boarding · الصعود إلى الطائرة", "check-in · تسجيل الوصول", "luggage · الأمتعة", "a booking · حجز"],
      answer: 0,
      why: { en: "поса́дка is boarding: Поса́дка начина́ется в де́вять.", ar: "поса́дка هي الصعود إلى الطائرة: Поса́дка начина́ется в де́вять." },
    },
    {
      kind: "choice",
      prompt: { en: "In a hotel, what does но́мер mean?", ar: "ماذا تعني но́мер في الفندق؟" },
      options: ["a room · غرفة", "a flight · رحلة", "a ticket · تذكرة"],
      answer: 0,
      why: { en: "In a hotel но́мер is your room; elsewhere it is a number.", ar: "في الفندق تعني но́мер غرفتك، وفي غيره تعني رقمًا." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: I have a booking under the name Ahmed Hassan.", ar: "أكمل: لديّ حجز باسم أحمد حسن." },
      ru: "У меня́ ___ на и́мя Ахме́д Хаса́н.",
      answers: ["бронь"],
      why: { en: "бронь = a booking: У меня́ бронь на и́мя…", ar: "бронь = حجز: У меня́ бронь на и́мя…" },
    },
    {
      kind: "fill",
      prompt: { en: "Anna says: I've lost my passport!", ar: "تقول آنا: أضعتُ جواز سفري!" },
      ru: "Я ___ па́спорт!",
      answers: ["потеря́ла"],
      why: { en: "A woman speaking: the past ends in -ла: потеря́ла.", ar: "المتكلّمة امرأة: ينتهي الماضي بـ -ла: потеря́ла." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Where is the nearest pharmacy?", ar: "أكمل: أين أقرب صيدلية؟" },
      ru: "Где ___ апте́ка?",
      answers: ["ближа́йшая"],
      why: { en: "апте́ка is feminine, so ближа́йшая.", ar: "апте́ка مؤنّثة، لذلك ближа́йшая." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: We missed the flight!", ar: "أكمل: فاتتنا الرحلة!" },
      ru: "Мы ___ на рейс!",
      answers: ["опозда́ли"],
      why: { en: "опозда́ть на + accusative; мы takes -ли: опозда́ли.", ar: "опозда́ть на + حالة المفعول به؛ ومع мы ينتهي الماضي بـ -ли: опозда́ли." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: What time does boarding start?", ar: "كوّن السؤال: في أيّ ساعة يبدأ الصعود؟" },
      tokens: ["начина́ется", "Во", "поса́дка", "ско́лько"],
      answers: ["Во ско́лько начина́ется поса́дка?", "Во ско́лько поса́дка начина́ется?"],
      why: { en: "The question phrase во ско́лько comes first.", ar: "عبارة السؤال во ско́лько تأتي أولًا." },
    },
    {
      kind: "translate",
      prompt: { en: "Help! I've lost my suitcase.", ar: "النجدة! أضعتُ حقيبتي." },
      answers: ["Помоги́те! Я потеря́л чемода́н.", "Помоги́те! Я потеря́ла чемода́н."],
      why: { en: "Помоги́те! then the perfective past: потеря́л (a man) or потеря́ла (a woman).", ar: "Помоги́те! ثم الماضي من الفعل التام: потеря́л (رجل) أو потеря́ла (امرأة)." },
    },
    {
      kind: "translate",
      prompt: { en: "Where is the nearest metro station?", ar: "أين أقرب محطة مترو؟" },
      answers: ["Где ближа́йшая ста́нция метро́?", "Где ближа́йшее метро́?"],
      why: { en: "ста́нция is feminine: ближа́йшая ста́нция метро́.", ar: "ста́нция مؤنّثة: ближа́йшая ста́нция метро́." },
    },
    {
      kind: "choice",
      prompt: { en: "Your friend says «Я опозда́л на рейс». What happened?", ar: "يقول صديقك «Я опозда́л на рейс». ماذا حدث؟" },
      options: ["He missed his flight · فاتته الرحلة", "He lost his luggage · أضاع أمتعته", "He booked a hotel · حجز فندقًا"],
      answer: 0,
      why: { en: "опозда́ть на рейс = to be late for the flight, to miss it.", ar: "опозда́ть на рейс = أن يتأخّر عن الرحلة فتفوته." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. When does boarding start?", ar: "استمع. متى يبدأ الصعود؟" },
      ru: "Поса́дка на рейс в Каи́р начина́ется в де́вять часо́в.",
      listen: true,
      options: ["At nine · في التاسعة", "At five · في الخامسة", "At ten · في العاشرة"],
      answer: 0,
      why: { en: "в де́вять часо́в = at nine o'clock.", ar: "в де́вять часо́в = في الساعة التاسعة." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Which room is it?", ar: "استمع. ما رقم الغرفة؟" },
      ru: "Ваш но́мер со́рок два, а за́втрак в семь часо́в.",
      listen: true,
      options: ["42 · ٤٢", "32 · ٣٢", "24 · ٢٤"],
      answer: 0,
      why: { en: "со́рок два = 42; три́дцать два would be 32.", ar: "со́рок два = ٤٢؛ أمّا ٣٢ فهي три́дцать два." },
    },
  ],
  topics: ["travel", "transport"],
  search: ["Russian travel phrases airport hotel", "Russian hotel check in dialogue", "Russian lost luggage phrases"],
  speaking: {
    scenario: {
      en: "Check in at a Moscow hotel, then phone the airport to report your lost luggage: give the flight number and describe your suitcase.",
      ar: "سجّل وصولك في فندق في موسكو، ثم اتصل بالمطار لتبلغ عن أمتعتك الضائعة: أعطِ رقم الرحلة وصِف حقيبتك.",
    },
    tutorBrief:
      "Play two roles. First, a friendly hotel receptionist in Moscow (администратор): greet the learner, ask for the booking name and passport, give a room number (e.g. сорок два), say when breakfast is, and answer one question about the room. Then become an airport lost-luggage officer on the phone: ask for the flight number, where the learner flew from, what the suitcase looks like (big or small, colour) and a phone number or the hotel's name. Use today's words: бронь, номер, завтрак, рейс, багаж, чемодан, потерять, прилететь, найти, ближайший, опоздать. If the learner uses the wrong gender in the past (потерял / потеряла) or forgets на рейс, recast it and let them repeat. Finish by promising 'Мы обязательно найдём ваш чемодан!' and praising one clear sentence.",
    prompts: [
      { ru: "Здра́вствуйте! У меня́ бронь на и́мя…", en: "Hello! I have a booking under the name…", ar: "مرحبًا! لديّ حجز باسم…" },
      { ru: "Во ско́лько за́втрак?", en: "What time is breakfast?", ar: "في أيّ ساعة الفطور؟" },
      { ru: "Мой чемода́н не прилете́л. Помоги́те, пожа́луйста!", en: "My suitcase didn't arrive. Please help me!", ar: "حقيبتي لم تصل. ساعدوني من فضلكم!" },
      { ru: "Э́то большо́й чёрный чемода́н.", en: "It's a big black suitcase.", ar: "إنها حقيبة سفر كبيرة سوداء." },
      { ru: "Где ближа́йшая апте́ка?", en: "Where is the nearest pharmacy?", ar: "أين أقرب صيدلية؟" },
    ],
  },
  journal: {
    en: "Write 6–8 sentences about a trip, real or imagined: where you flew, what happened at the airport and at the hotel, one problem you had and what you did.",
    ar: "اكتب من ٦ إلى ٨ جمل عن رحلة حقيقية أو متخيَّلة: إلى أين سافرت بالطائرة، وماذا حدث في المطار وفي الفندق، ومشكلة واجهتك وماذا فعلت.",
  },
  culture: {
    en: "At check-in in a Russian hotel you always show your passport: for foreign guests the hotel also handles the official registration of the stay. Keep a photo of your passport and visa on your phone — it helps a lot if your bag goes missing.",
    ar: "عند تسجيل الوصول في فندق روسي تُبرز دائمًا جواز سفرك، إذ يتولّى الفندق أيضًا التسجيل الرسمي لإقامة النزلاء الأجانب. احتفظ بصورة لجواز سفرك وتأشيرتك على هاتفك، فهذا يساعد كثيرًا إذا ضاعت حقيبتك.",
  },
};

const DAY_54: Day = {
  n: 54,
  week: 8,
  kind: "lesson",
  title: { ru: "Расскажи́ исто́рию", en: "Tell a story", ar: "احكِ قصة" },
  goals: [
    {
      en: "Put the events of a story in order with одна́жды, снача́ла, пото́м, зате́м, вдруг, наконе́ц and в конце́ концо́в.",
      ar: "أن ترتّب أحداث القصة باستخدام одна́жды و снача́ла و пото́м و зате́м و вдруг و наконе́ц و в конце́ концо́в.",
    },
    {
      en: "Use the imperfective for the scene and the perfective for the events of a story.",
      ar: "أن تستخدم الفعل غير التام لوصف المشهد، والفعل التام لأحداث القصة.",
    },
    {
      en: "Report what someone said or asked: Он сказа́л, что… / Она́ спроси́ла, где…",
      ar: "أن تنقل ما قاله شخص أو سأل عنه: Он сказа́л, что… / Она́ спроси́ла, где…",
    },
  ],
  words: [
    {
      id: "d54-01", ru: "исто́рия", say: "istOriya", en: "story; history", ar: "قصة؛ تاريخ", pos: "noun", g: "f",
      ex: { ru: "Э́то о́чень смешна́я исто́рия.", en: "It's a very funny story.", ar: "هذه قصة مضحكة جدًّا." },
    },
    {
      id: "d54-02", ru: "одна́жды", say: "adnAzhdy", en: "once, one day", ar: "ذات يوم، ذات مرة", pos: "adv",
      ex: { ru: "Одна́жды я был в Петербу́рге.", en: "Once I was in St Petersburg.", ar: "ذات مرة كنت في بطرسبورغ." },
    },
    {
      id: "d54-03", ru: "вдруг", say: "vdruk", en: "suddenly", ar: "فجأة", pos: "adv",
      ex: { ru: "Вдруг мы услы́шали му́зыку.", en: "Suddenly we heard music.", ar: "فجأة سمعنا موسيقى." },
    },
    {
      id: "d54-04", ru: "зате́м", say: "zatyEm", en: "then, after that", ar: "ثم، بعد ذلك", pos: "adv",
      ex: { ru: "Снача́ла мы гуля́ли, зате́м смотре́ли фильм.", en: "First we went for a walk, then we watched a film.", ar: "في البداية تمشّينا، ثم شاهدنا فيلمًا." },
    },
    {
      id: "d54-05", ru: "случи́ться", say: "sluchItsa", en: "to happen (perfective)", ar: "يحدث (فعل تام)", pos: "verb",
      forms: "случи́лось, случи́лась; impf. случа́ться",
      ex: { ru: "Вчера́ случи́лась смешна́я исто́рия.", en: "A funny thing happened yesterday.", ar: "حدثت أمس قصة مضحكة." },
    },
    {
      id: "d54-06", ru: "уви́деть", say: "uvIdit'", en: "to see, to catch sight of (perfective)", ar: "يرى، يلمح (فعل تام)", pos: "verb",
      forms: "уви́жу, уви́дишь; impf. ви́деть",
      ex: { ru: "Я уви́дел А́нну в метро́.", en: "I saw Anna in the metro.", ar: "رأيت آنا في المترو." },
    },
    {
      id: "d54-07", ru: "услы́шать", say: "uslYshat'", en: "to hear (perfective)", ar: "يسمع (فعل تام)", pos: "verb",
      forms: "услы́шу, услы́шишь; impf. слы́шать",
      ex: { ru: "Но́чью я услы́шал соба́ку.", en: "At night I heard a dog.", ar: "في الليل سمعت كلبًا." },
    },
    {
      id: "d54-08", ru: "поня́ть", say: "panyAt'", en: "to understand, to realise (perfective)", ar: "يفهم، يدرك (فعل تام)", pos: "verb",
      forms: "пойму́, поймёшь; по́нял, поняла́",
      ex: { ru: "Я не по́нял. Повтори́те, пожа́луйста.", en: "I didn't understand. Please repeat.", ar: "لم أفهم. أعد من فضلك." },
    },
    {
      id: "d54-09", ru: "реши́ть", say: "rishYt'", en: "to decide; to solve (perfective)", ar: "يقرّر؛ يحلّ (فعل تام)", pos: "verb",
      forms: "решу́, реши́шь; impf. реша́ть",
      ex: { ru: "Мы реши́ли пригото́вить у́жин до́ма.", en: "We decided to cook dinner at home.", ar: "قرّرنا أن نطبخ العشاء في البيت." },
    },
    {
      id: "d54-10", ru: "испуга́ться", say: "ispugAtsa", en: "to get scared (perfective)", ar: "يخاف، يفزع (فعل تام)", pos: "verb",
      forms: "испуга́юсь, испуга́ешься",
      ex: { ru: "Ребёнок испуга́лся соба́ки.", en: "The child got scared of the dog.", ar: "خاف الطفل من الكلب." },
    },
    {
      id: "d54-11", ru: "смея́ться", say: "smiyAtsa", en: "to laugh (imperfective)", ar: "يضحك (فعل غير تام)", pos: "verb",
      forms: "смею́сь, смеёшься",
      ex: { ru: "Почему́ ты смеёшься?", en: "Why are you laughing?", ar: "لماذا تضحك؟" },
    },
    {
      id: "d54-12", ru: "удиви́ться", say: "udivItsa", en: "to be surprised (perfective)", ar: "يتفاجأ، يندهش (فعل تام)", pos: "verb",
      forms: "удивлю́сь, удиви́шься",
      ex: { ru: "Я о́чень удиви́лась, когда́ уви́дела его́ в Каи́ре.", en: "I was very surprised when I saw him in Cairo.", ar: "تفاجأتُ كثيرًا عندما رأيته في القاهرة." },
    },
    {
      id: "d54-13", ru: "в конце́ концо́в", say: "f kantsE kantsOf", en: "in the end; after all", ar: "في نهاية المطاف", pos: "phrase",
      ex: { ru: "В конце́ концо́в мы нашли́ доро́гу.", en: "In the end we found the way.", ar: "في نهاية المطاف وجدنا الطريق." },
    },
    {
      id: "d54-14", ru: "ска́зка", say: "skAska", en: "fairy tale", ar: "حكاية خرافية", pos: "noun", g: "f", forms: "мн. ч. ска́зки",
      ex: { ru: "Ба́бушка ча́сто расска́зывала мне ска́зки.", en: "Grandma often told me fairy tales.", ar: "كانت جدّتي تحكي لي الحكايات كثيرًا." },
    },
    { id: "d54-15", ru: "Что случи́лось?", say: "shto sluchIlas'?", en: "What happened? What's wrong?", ar: "ماذا حدث؟ ما الأمر؟", pos: "phrase" },
    {
      id: "d54-16", ru: "заблуди́ться", say: "zabludItsa", en: "to get lost (perfective)", ar: "يضلّ الطريق، يتوه (فعل تام)", pos: "verb",
      forms: "заблужу́сь, заблу́дишься",
      ex: { ru: "Я заблуди́лся в Петербу́рге.", en: "I got lost in St Petersburg.", ar: "ضللتُ الطريق في بطرسبورغ." },
    },
    {
      id: "d54-17", ru: "рассказа́ть", say: "rasskazAt'", en: "to tell (a story) (perfective)", ar: "يحكي، يروي (فعل تام)", pos: "verb",
      forms: "расскажу́, расска́жешь; impf. расска́зывать",
      ex: { ru: "Расскажи́, что случи́лось!", en: "Tell me what happened!", ar: "احكِ لي ماذا حدث!" },
    },
    {
      id: "d54-18", ru: "спроси́ть", say: "sprasIt'", en: "to ask (perfective)", ar: "يسأل (فعل تام)", pos: "verb",
      forms: "спрошу́, спро́сишь; impf. спра́шивать",
      ex: { ru: "Я спроси́л, где метро́.", en: "I asked where the metro was.", ar: "سألتُ أين المترو." },
    },
    {
      id: "d54-19", ru: "Предста́вь себе́!", say: "pritstAf' sibyE!", en: "Imagine! Just think!", ar: "تخيّل!", pos: "phrase",
      ex: { ru: "Предста́вь себе́, я заблуди́лся в Москве́!", en: "Imagine, I got lost in Moscow!", ar: "تخيّل، ضللتُ الطريق في موسكو!" },
      note: { en: "To вы: Предста́вьте себе́!", ar: "مع вы: Предста́вьте себе́!" },
    },
  ],
  grammar: [
    {
      id: "d54-g1",
      title: { en: "Putting events in order", ar: "ترتيب الأحداث" },
      en: [
        "A story needs signposts. Start with одна́жды (once, one day), move on with снача́ла (first), пото́м and зате́м (then), and finish with наконе́ц (at last) or в конце́ концо́в (in the end).",
        "Вдруг (suddenly) brings in the surprise. Make a small pause before it: Я гуля́л по па́рку. И вдруг…",
        "Зате́м is a little more formal than пото́м; in everyday speech пото́м is more common.",
      ],
      ar: [
        "تحتاج القصة إلى علامات طريق. ابدأ بـ одна́жды (ذات يوم)، ثم انتقل بـ снача́ла (في البداية) و пото́м و зате́м (ثم)، واختم بـ наконе́ц (أخيرًا) أو в конце́ концо́в (في نهاية المطاف).",
        "вдруг (فجأة) تأتي بالمفاجأة. توقّف وقفة قصيرة قبلها: Я гуля́л по па́рку. И вдруг…",
        "зате́м أكثر رسمية بقليل من пото́м، وفي الكلام اليومي تُستخدم пото́м أكثر.",
      ],
      tables: [
        {
          caption: { en: "Story signposts", ar: "علامات الطريق في القصة" },
          head: ["Word · الكلمة", "Meaning · المعنى", "Example · مثال"],
          rows: [
            ["одна́жды", "once, one day · ذات يوم", "Одна́жды я был в Петербу́рге."],
            ["снача́ла", "first, at first · في البداية", "Снача́ла всё бы́ло хорошо́."],
            ["пото́м / зате́м", "then, after that · ثم، بعد ذلك", "Зате́м я уви́дел мужчи́ну."],
            ["вдруг", "suddenly · فجأة", "И вдруг я услы́шал му́зыку."],
            ["наконе́ц", "at last, finally · أخيرًا", "Наконе́ц я уви́дел метро́."],
            ["в конце́ концо́в", "in the end, after all · في نهاية المطاف", "В конце́ концо́в всё бы́ло хорошо́."],
          ],
        },
      ],
      examples: [
        { ru: "Одна́жды я гуля́л по Москве́ и вдруг уви́дел А́нну.", en: "One day I was walking around Moscow and suddenly saw Anna.", ar: "ذات يوم كنت أتمشّى في موسكو وفجأة رأيت آنا." },
        { ru: "Снача́ла мы смотре́ли фильм, а пото́м гуля́ли в па́рке.", en: "First we watched a film, and then we walked in the park.", ar: "في البداية شاهدنا فيلمًا، ثم تمشّينا في الحديقة." },
      ],
    },
    {
      id: "d54-g2",
      title: { en: "Aspect in a story: the scene and the events", ar: "الفعل التام وغير التام في القصة: المشهد والأحداث" },
      en: [
        "In a story, the imperfective paints the scene — what was going on and what things were like: Шёл дождь. Бы́ло хо́лодно. Я гуля́л по го́роду.",
        "The perfective moves the story forward, one completed event after another: Я уви́дел мужчи́ну, реши́л спроси́ть доро́гу и по́нял, где метро́.",
        "A favourite pattern: background (imperfective) + вдруг + event (perfective): Я смотре́л телеви́зор, и вдруг позвони́ла ма́ма.",
      ],
      ar: [
        "في القصة يرسم الفعل غير التام المشهد: ما كان يجري وكيف كانت الأمور: Шёл дождь. Бы́ло хо́лодно. Я гуля́л по го́роду.",
        "أمّا الفعل التام فيدفع القصة إلى الأمام، حدثًا مكتملًا بعد حدث: Я уви́дел мужчи́ну, реши́л спроси́ть доро́гу и по́нял, где метро́.",
        "ونمط محبّب: الخلفية (فعل غير تام) + вдруг + الحدث (فعل تام): Я смотре́л телеви́зор, и вдруг позвони́ла ма́ма.",
      ],
      tables: [
        {
          caption: { en: "Aspect pairs for stories", ar: "أزواج أفعال للقصص" },
          head: ["Imperfective (scene) · غير التام (المشهد)", "Perfective (event) · التام (الحدث)", "Meaning · المعنى"],
          rows: [
            ["ви́деть", "уви́деть", "see · يرى"],
            ["слы́шать", "услы́шать", "hear · يسمع"],
            ["понима́ть", "поня́ть", "understand · يفهم"],
            ["реша́ть", "реши́ть", "decide · يقرّر"],
            ["расска́зывать", "рассказа́ть", "tell · يحكي"],
            ["спра́шивать", "спроси́ть", "ask · يسأل"],
            ["удивля́ться", "удиви́ться", "be surprised · يتفاجأ"],
          ],
        },
      ],
      examples: [
        { ru: "Я смотре́л телеви́зор, и вдруг позвони́ла ма́ма.", en: "I was watching TV, and suddenly Mum called.", ar: "كنت أشاهد التلفاز، وفجأة اتصلت أمي." },
        { ru: "Бы́ло хо́лодно, и мы реши́ли посмотре́ть фильм до́ма.", en: "It was cold, so we decided to watch a film at home.", ar: "كان الجو باردًا، فقرّرنا أن نشاهد فيلمًا في البيت." },
      ],
    },
    {
      id: "d54-g3",
      title: { en: "Reported speech: Он сказа́л, что…", ar: "الكلام المنقول: Он сказа́л, что…" },
      en: [
        "To report what someone said, use сказа́л(а), что… + their words. Russian keeps the tense of the original: «Я живу́ в Москве́» → Он сказа́л, что живёт в Москве́ (English: 'that he lived').",
        "Change only the person: «Я позвоню́» → Она́ сказа́ла, что позвони́т. For a question, keep the question word: «Где метро́?» → Он спроси́л, где метро́.",
        "For a yes/no question, put ли after the key word: «Ты зна́ешь А́нну?» → Он спроси́л, зна́ю ли я А́нну.",
      ],
      ar: [
        "لنقل ما قاله شخص استخدم сказа́л(а), что… + كلامه. وتحتفظ الروسية بزمن الكلام الأصلي: «Я живу́ в Москве́» ← Он сказа́л, что живёт в Москве́ (أمّا الإنجليزية فتغيّر الزمن إلى الماضي).",
        "غيّر الشخص فقط: «Я позвоню́» ← Она́ сказа́ла, что позвони́т. وفي السؤال احتفظ بأداة الاستفهام: «Где метро́?» ← Он спроси́л, где метро́.",
        "وفي سؤال «نعم/لا» ضع ли بعد الكلمة الأساسية: «Ты зна́ешь А́нну?» ← Он спроси́л, зна́ю ли я А́нну.",
      ],
      tables: [
        {
          caption: { en: "Direct and reported speech", ar: "الكلام المباشر والكلام المنقول" },
          head: ["Direct speech · الكلام المباشر", "Reported speech · الكلام المنقول"],
          rows: [
            ["«Я за́нят».", "Он сказа́л, что за́нят."],
            ["«Я живу́ в Москве́».", "Он сказа́л, что живёт в Москве́."],
            ["«Я позвоню́ ве́чером».", "Она́ сказа́ла, что позвони́т ве́чером."],
            ["«Где метро́?»", "Он спроси́л, где метро́."],
            ["«Ты зна́ешь А́нну?»", "Он спроси́л, зна́ю ли я А́нну."],
          ],
        },
      ],
      examples: [
        { ru: "Макси́м сказа́л, что за́втра бу́дет дождь.", en: "Maxim said it would rain tomorrow.", ar: "قال مكسيم إن المطر سيهطل غدًا." },
        { ru: "А́нна спроси́ла, где я живу́.", en: "Anna asked where I lived.", ar: "سألت آنا أين أسكن." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Смешна́я исто́рия", en: "A funny story", ar: "قصة مضحكة" },
    setting: {
      en: "Back in Moscow, Ahmed meets Anna in a café and tells her what happened to him one rainy evening in St Petersburg.",
      ar: "بعد عودته إلى موسكو يلتقي أحمد آنا في مقهى ويحكي لها ما حدث له في إحدى الأمسيات الممطرة في بطرسبورغ.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, ну как Петербу́рг?", en: "So, Ahmed, how was St Petersburg?", ar: "إذن يا أحمد، كيف كانت بطرسبورغ؟" },
      { who: "A", name: "Ахме́д", ru: "Краси́вый го́род! Но одна́жды там случи́лась смешна́я исто́рия.", en: "A beautiful city! But one day a funny thing happened there.", ar: "مدينة جميلة! لكن ذات يوم حدثت لي هناك قصة مضحكة." },
      { who: "B", name: "А́нна", ru: "Что случи́лось? Расскажи́!", en: "What happened? Tell me!", ar: "ماذا حدث؟ احكِ لي!" },
      { who: "A", name: "Ахме́д", ru: "Бы́ло по́здно, шёл дождь. Я гуля́л по го́роду и смотре́л на ка́рту в телефо́не.", en: "It was late and it was raining. I was walking around the city, looking at the map on my phone.", ar: "كان الوقت متأخرًا والمطر يهطل. كنت أتمشّى في المدينة وأنظر إلى الخريطة في هاتفي." },
      { who: "B", name: "А́нна", ru: "И что?", en: "And then?", ar: "وماذا بعد؟" },
      { who: "A", name: "Ахме́д", ru: "Вдруг я по́нял, что заблуди́лся, а телефо́н не рабо́тает!", en: "Suddenly I realised I was lost, and my phone wasn't working!", ar: "فجأة أدركت أنني ضللت الطريق، وأن الهاتف لا يعمل!" },
      { who: "B", name: "А́нна", ru: "Ой! Ты испуга́лся?", en: "Oh no! Were you scared?", ar: "أوه! هل خفت؟" },
      { who: "A", name: "Ахме́д", ru: "Коне́чно, испуга́лся! Но зате́м я уви́дел мужчи́ну с соба́кой и реши́л спроси́ть, где метро́.", en: "Of course I was! But then I saw a man with a dog and decided to ask where the metro was.", ar: "طبعًا خفت! لكنني بعد ذلك رأيت رجلًا مع كلب وقرّرت أن أسأله أين المترو." },
      { who: "B", name: "А́нна", ru: "А он что сказа́л?", en: "And what did he say?", ar: "وماذا قال؟" },
      { who: "A", name: "Ахме́д", ru: "Он смея́лся и сказа́л, что метро́ пря́мо ря́дом, сле́ва. Я посмотре́л нале́во и о́чень удиви́лся: там был вход в метро́!", en: "He was laughing and said the metro was right there, on the left. I looked left and was really surprised: there was the metro entrance!", ar: "كان يضحك وقال إن المترو قريب جدًّا، على اليسار. نظرتُ إلى اليسار وتفاجأت كثيرًا: كان هناك مدخل المترو!" },
      { who: "B", name: "А́нна", ru: "Вот э́то исто́рия! Как в ска́зке!", en: "What a story! Like in a fairy tale!", ar: "يا لها من قصة! كأنها في حكاية خرافية!" },
      { who: "A", name: "Ахме́д", ru: "В конце́ концо́в я дое́хал до гости́ницы на метро́, и всё бы́ло хорошо́.", en: "In the end I got to the hotel by metro, and everything was fine.", ar: "في نهاية المطاف وصلتُ إلى الفندق بالمترو، وكان كل شيء على ما يرام." },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "An event in a story: It was raining. Suddenly I saw Anna.", ar: "حدث في قصة: كان المطر يهطل. فجأة رأيت آنا." },
      ru: "Шёл дождь. Вдруг я … А́нну.",
      options: ["уви́дел", "ви́дел", "ви́жу"],
      answer: 0,
      why: { en: "A single sudden event is perfective: уви́дел.", ar: "الحدث المفاجئ الواحد يأتي بالفعل التام: уви́дел." },
    },
    {
      kind: "choice",
      prompt: { en: "The background: When I was walking home, it was snowing.", ar: "الخلفية: عندما كنت أمشي إلى البيت كان الثلج يتساقط." },
      ru: "Когда́ я … домо́й, шёл снег.",
      options: ["шёл", "уви́дел", "реши́л"],
      answer: 0,
      why: { en: "A process in the background is imperfective: я шёл домо́й.", ar: "العملية الجارية في الخلفية تأتي بالفعل غير التام: я шёл домо́й." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: First I thought, and then I decided to buy a new phone.", ar: "أكمل: في البداية فكّرت، ثم قرّرت أن أشتري هاتفًا جديدًا." },
      ru: "Снача́ла я ду́мал, а пото́м ___ купи́ть но́вый телефо́н.",
      answers: ["реши́л"],
      why: { en: "The decision is one completed event: реши́л (perfective).", ar: "القرار حدث واحد مكتمل: реши́л (فعل تام)." },
    },
    {
      kind: "fill",
      prompt: { en: "Report it: «I live in Cairo.» → He said he lived in Cairo.", ar: "انقل الكلام: «أعيش في القاهرة» ← قال إنه يعيش في القاهرة." },
      ru: "Он ___, что живёт в Каи́ре.",
      answers: ["сказа́л", "говори́л"],
      why: { en: "сказа́л, что… and the verb stays in the present: живёт.", ar: "сказа́л, что… ويبقى الفعل في المضارع: живёт." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: When I saw the dog, I got scared.", ar: "أكمل: عندما رأيت الكلب خفت." },
      ru: "Когда́ я уви́дел соба́ку, я ___.",
      answers: ["испуга́лся"],
      why: { en: "The speaker is a man (уви́дел), so испуга́лся.", ar: "المتكلّم رجل (уви́дел)، لذلك испуга́лся." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: The film was funny, and we laughed the whole time.", ar: "أكمل: كان الفيلم مضحكًا، وضحكنا طوال الوقت." },
      ru: "Фильм был смешно́й, и мы всё вре́мя ___.",
      answers: ["смея́лись"],
      why: { en: "всё вре́мя (the whole time) is a process: imperfective смея́лись.", ar: "всё вре́мя (طوال الوقت) عملية مستمرة: الفعل غير التام смея́лись." },
    },
    {
      kind: "choice",
      prompt: { en: "Which word brings in a sudden event?", ar: "أيّ كلمة تقدّم حدثًا مفاجئًا؟" },
      options: ["вдруг", "снача́ла", "наконе́ц", "одна́жды"],
      answer: 0,
      why: { en: "вдруг = suddenly.", ar: "вдруг = فجأة." },
    },
    {
      kind: "choice",
      prompt: { en: "Anna said: «Я позвоню́ за́втра». Report it.", ar: "قالت آنا: «Я позвоню́ за́втра». انقل كلامها." },
      options: ["Она́ сказа́ла, что позвони́т за́втра.", "Она́ сказа́ла, что позвони́ла за́втра.", "Она́ сказа́ла, что я позвоню́ за́втра."],
      answer: 0,
      why: { en: "Keep the future and change the person: я позвоню́ → она́ позвони́т.", ar: "احتفظ بالمستقبل وغيّر الشخص: я позвоню́ ← она́ позвони́т." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: Once I got lost in Moscow.", ar: "كوّن الجملة: ذات مرة ضللتُ الطريق في موسكو." },
      tokens: ["я", "в", "Одна́жды", "заблуди́лся", "Москве́"],
      answers: ["Одна́жды я заблуди́лся в Москве́.", "Я одна́жды заблуди́лся в Москве́."],
      why: { en: "Одна́жды usually opens the story.", ar: "одна́жды تفتتح القصة عادةً." },
    },
    {
      kind: "translate",
      prompt: { en: "Suddenly I heard music.", ar: "فجأة سمعت موسيقى." },
      answers: ["Вдруг я услы́шал му́зыку.", "Вдруг я услы́шала му́зыку.", "И вдруг я услы́шал му́зыку.", "И вдруг я услы́шала му́зыку."],
      why: { en: "A sudden event: вдруг + perfective услы́шал(а).", ar: "حدث مفاجئ: вдруг + الفعل التام услы́шал(а)." },
    },
    {
      kind: "translate",
      prompt: { en: "What happened?", ar: "ماذا حدث؟" },
      answers: ["Что случи́лось?"],
      why: { en: "случи́лось — the neuter past of случи́ться, because что is neuter.", ar: "случи́лось — الماضي المحايد من случи́ться، لأن что محايدة." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What happened while he was walking?", ar: "استمع. ماذا حدث بينما كان يتمشّى؟" },
      ru: "Я гуля́л в па́рке, и вдруг уви́дел ста́рого дру́га.",
      listen: true,
      options: ["He saw an old friend · رأى صديقًا قديمًا", "It started to rain · بدأ المطر يهطل", "He lost his phone · أضاع هاتفه"],
      answer: 0,
      why: { en: "уви́дел ста́рого дру́га = he saw an old friend.", ar: "уви́дел ста́рого дру́га = رأى صديقًا قديمًا." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What did they realise in the end?", ar: "استمع. ماذا أدركوا في النهاية؟" },
      ru: "В конце́ концо́в мы по́няли, что заблуди́лись.",
      listen: true,
      options: ["That they were lost · أنهم ضلّوا الطريق", "That the film was funny · أن الفيلم كان مضحكًا", "That they were late · أنهم تأخّروا"],
      answer: 0,
      why: { en: "по́няли, что заблуди́лись = they realised they were lost.", ar: "по́няли, что заблуди́лись = أدركوا أنهم ضلّوا الطريق." },
    },
  ],
  topics: ["storytelling", "aspect"],
  search: ["Russian storytelling past tense aspect", "Russian perfective imperfective in narration", "Russian reported speech сказал что"],
  speaking: {
    scenario: {
      en: "Tell the tutor a short story about a trip or a funny day. Then listen to the tutor's story and retell it in your own words.",
      ar: "احكِ للمعلّم قصة قصيرة عن رحلة أو عن يوم مضحك. ثم استمع إلى قصة المعلّم وأعد روايتها بكلماتك.",
    },
    tutorBrief:
      "Play Anna (Анна), a warm listener in a café. First ask the learner to tell a story about a trip or a funny day (Расскажи! Что случилось?). Keep it going with short questions: А потом? Ты испугался? Что он сказал? Then tell your own short story in 6–8 simple past-tense sentences (e.g. you lost your keys and a neighbour found them) using однажды, сначала, потом, вдруг, в конце концов, and ask the learner to retell it, including one reported sentence (Ты сказала, что…). Listen for aspect: background with imperfective (шёл дождь, я гулял), events with perfective (увидел, решил, понял). If they choose the wrong aspect, say the sentence correctly and let them repeat. Finish by praising the best moment of their story.",
    prompts: [
      { ru: "Одна́жды я заблуди́лся в Москве́.", en: "Once I got lost in Moscow.", ar: "ذات مرة ضللتُ الطريق في موسكو." },
      { ru: "Шёл дождь, и вдруг я уви́дел…", en: "It was raining, and suddenly I saw…", ar: "كان المطر يهطل، وفجأة رأيت…" },
      { ru: "Снача́ла я испуга́лся, а пото́м по́нял, что всё хорошо́.", en: "At first I got scared, and then I realised everything was fine.", ar: "في البداية خفت، ثم أدركت أن كل شيء على ما يرام." },
      { ru: "Он сказа́л, что метро́ ря́дом.", en: "He said the metro was close by.", ar: "قال إن المترو قريب." },
      { ru: "В конце́ концо́в всё бы́ло хорошо́.", en: "In the end everything was fine.", ar: "في نهاية المطاف كان كل شيء على ما يرام." },
    ],
  },
  journal: {
    en: "Write a story of 6–8 sentences that begins with Одна́жды… Include at least one background sentence (imperfective), three events (perfective), вдруг, one reported sentence (… сказа́л, что…) and в конце́ концо́в.",
    ar: "اكتب قصة من ٦ إلى ٨ جمل تبدأ بـ Одна́жды… وضمّنها جملة واحدة على الأقل للخلفية (فعل غير تام)، وثلاثة أحداث (فعل تام)، وكلمة вдруг، وجملة منقولة (… сказа́л, что…)، وعبارة в конце́ концо́в.",
  },
  culture: {
    en: "Pushkin's fairy tales in verse are known by heart all over Russia. The most quoted line comes from «Ска́зка о золото́м петушке́»: «Ска́зка — ложь, да в ней намёк» — 'A fairy tale is a lie, but there is a hint in it'. Russians still use it when a story carries a lesson.",
    ar: "يحفظ الناس في أنحاء روسيا حكايات بوشكين الشعرية عن ظهر قلب. وأكثر أبياتها اقتباسًا من «Ска́зка о золото́м петушке́»: «Ска́зка — ложь, да в ней намёк» — أي «الحكاية كذب، لكن فيها إشارة». وما زال الروس يستشهدون به حين تحمل القصة عبرة.",
  },
};

const DAY_55: Day = {
  n: 55,
  week: 8,
  kind: "immersion",
  title: { ru: "Смо́трим: фильм и переска́з", en: "Watch: a film and retelling", ar: "نشاهد: فيلم وإعادة سرد" },
  goals: [
    {
      en: "Follow a longer story told in Russian and answer questions about it.",
      ar: "أن تتابع قصة أطول تُروى بالروسية وتجيب عن أسئلة حولها.",
    },
    {
      en: "Retell a film plot in the past tense with the right aspect, and say what you liked and why.",
      ar: "أن تعيد سرد قصة فيلم بالزمن الماضي مع الاختيار الصحيح بين الفعل التام وغير التام، وأن تقول ما أعجبك ولماذا.",
    },
  ],
  words: [
    {
      id: "d55-01", ru: "геро́й", say: "girOy", en: "hero; main character", ar: "بطل؛ شخصية رئيسية", pos: "noun", g: "m", forms: "мн. ч. геро́и; she: герои́ня",
      ex: { ru: "Геро́й фи́льма — врач из Москвы́.", en: "The hero of the film is a doctor from Moscow.", ar: "بطل الفيلم طبيب من موسكو." },
    },
    {
      id: "d55-02", ru: "сюже́т", say: "syuzhEt", en: "plot, storyline", ar: "حبكة، قصة (الفيلم أو الكتاب)", pos: "noun", g: "m",
      ex: { ru: "Мне нра́вится сюже́т: он смешно́й и до́брый.", en: "I like the plot: it's funny and kind.", ar: "تعجبني الحبكة: إنها مضحكة ولطيفة." },
    },
    {
      id: "d55-03", ru: "нача́ло", say: "nachAla", en: "beginning, start", ar: "بداية", pos: "noun", g: "n", forms: "в нача́ле",
      ex: { ru: "В нача́ле фи́льма геро́й живёт в Москве́.", en: "At the beginning of the film the hero lives in Moscow.", ar: "في بداية الفيلم يعيش البطل في موسكو." },
    },
    {
      id: "d55-04", ru: "коне́ц", say: "kanyEts", en: "end, ending", ar: "نهاية", pos: "noun", g: "m", forms: "в конце́",
      ex: { ru: "Не расска́зывай коне́ц!", en: "Don't tell me the ending!", ar: "لا تحكِ لي النهاية!" },
    },
    {
      id: "d55-05", ru: "актёр", say: "aktyOr", en: "actor", ar: "ممثّل", pos: "noun", g: "m", forms: "she: актри́са",
      ex: { ru: "Актёры игра́ют о́чень хорошо́.", en: "The actors are very good. (literally: play very well)", ar: "الممثّلون يؤدّون أدوارهم جيدًا جدًّا." },
    },
    {
      id: "d55-06", ru: "режиссёр", say: "rizhyssyOr", en: "film director", ar: "مخرج (سينمائي)", pos: "noun", g: "m",
      ex: { ru: "Режиссёр фи́льма — Эльда́р Ряза́нов.", en: "The film's director is Eldar Ryazanov.", ar: "مخرج الفيلم هو إلدار ريازانوف." },
    },
    {
      id: "d55-07", ru: "сериа́л", say: "siriAl", en: "TV series", ar: "مسلسل", pos: "noun", g: "m",
      ex: { ru: "Ве́чером я смотрю́ ру́сский сериа́л.", en: "In the evening I watch a Russian series.", ar: "في المساء أشاهد مسلسلًا روسيًّا." },
    },
  ],
  grammar: [
    {
      id: "d55-g1",
      title: { en: "Frames for retelling a film", ar: "قوالب لإعادة سرد فيلم" },
      en: [
        "Start with what the film is about: Фильм о том, как… (The film is about how…). Then move through it: в нача́ле фи́льма, пото́м, в конце́ фи́льма.",
        "Tell the events in the past, with the scene in the imperfective and the events in the perfective. Finish with your opinion: Мне понра́вился сюже́т (I liked the plot — понра́виться is the perfective of нра́виться).",
      ],
      ar: [
        "ابدأ بموضوع الفيلم: Фильм о том, как… (الفيلم يدور حول كيف…)، ثم تنقّل خلاله: в нача́ле фи́льма، пото́м، в конце́ фи́льма.",
        "احكِ الأحداث بالماضي: المشهد بالفعل غير التام، والأحداث بالفعل التام. واختم برأيك: Мне понра́вился сюже́т (أعجبتني الحبكة — понра́виться هو الفعل التام المقابل لـ нра́виться).",
      ],
      tables: [
        {
          caption: { en: "Useful frames", ar: "قوالب مفيدة" },
          head: ["Russian · بالروسية", "Meaning · المعنى"],
          rows: [
            ["Фильм о том, как…", "The film is about how… · الفيلم يدور حول كيف…"],
            ["В нача́ле фи́льма…", "At the beginning of the film… · في بداية الفيلم…"],
            ["Гла́вный геро́й — …", "The main character is… · البطل الرئيسي هو…"],
            ["В конце́ фи́льма…", "At the end of the film… · في نهاية الفيلم…"],
            ["Мне понра́вился сюже́т.", "I liked the plot. · أعجبتني الحبكة."],
          ],
        },
      ],
      examples: [
        { ru: "Фильм о том, как Же́ня по оши́бке прилете́л в Ленингра́д.", en: "The film is about how Zhenya flew to Leningrad by mistake.", ar: "الفيلم يدور حول كيف سافر جينيا بالخطأ إلى لينينغراد." },
        { ru: "В конце́ фи́льма геро́и вме́сте.", en: "At the end of the film the two main characters are together.", ar: "في نهاية الفيلم يكون البطلان معًا." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Люби́мый фильм", en: "A favourite film", ar: "فيلم مفضّل" },
    setting: {
      en: "Last night Ahmed watched «The Irony of Fate», an old comedy that Russian television shows every New Year. The next day he tells Anna the plot.",
      ar: "شاهد أحمد أمس فيلم «سخرية القدر»، وهو كوميديا قديمة يعرضها التلفزيون الروسي في كل رأس سنة. وفي اليوم التالي يحكي لآنا قصّته.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, что ты смотре́л вчера́ ве́чером?", en: "Ahmed, what did you watch last night?", ar: "يا أحمد، ماذا شاهدت أمس في المساء؟" },
      { who: "A", name: "Ахме́д", ru: "Ста́рый ру́сский фильм «Иро́ния судьбы́». Режиссёр — Эльда́р Ряза́нов.", en: "An old Russian film, «The Irony of Fate». The director is Eldar Ryazanov.", ar: "فيلمًا روسيًّا قديمًا اسمه «سخرية القدر». المخرج هو إلدار ريازانوف." },
      { who: "B", name: "А́нна", ru: "О, э́то мой люби́мый фильм! Его́ пока́зывают по телеви́зору ка́ждый Но́вый год.", en: "Oh, it's my favourite film! They show it on TV every New Year.", ar: "آه، هذا فيلمي المفضّل! يعرضونه على التلفاز في كل رأس سنة." },
      { who: "A", name: "Ахме́д", ru: "В нача́ле фи́льма геро́й, Же́ня, жил в Москве́ и рабо́тал врачо́м.", en: "At the beginning of the film the hero, Zhenya, lived in Moscow and worked as a doctor.", ar: "في بداية الفيلم كان البطل جينيا يعيش في موسكو ويعمل طبيبًا." },
      { who: "B", name: "А́нна", ru: "И что случи́лось?", en: "And what happened?", ar: "وماذا حدث؟" },
      { who: "A", name: "Ахме́д", ru: "На Но́вый год он был с друзья́ми, а пото́м по оши́бке прилете́л в Ленингра́д!", en: "At New Year he was with his friends, and then by mistake he flew to Leningrad!", ar: "في رأس السنة كان مع أصدقائه، ثم سافر بالخطأ بالطائرة إلى لينينغراد!" },
      { who: "B", name: "А́нна", ru: "Да, а он ду́мал, что он всё ещё в Москве́.", en: "Yes, and he thought he was still in Moscow.", ar: "نعم، وكان يظنّ أنه ما زال في موسكو." },
      { who: "A", name: "Ахме́д", ru: "Он сказа́л води́телю такси́ а́дрес: у́лица Строи́телей, дом два́дцать пять. А в Ленингра́де то́же есть у́лица Строи́телей и дом два́дцать пять!", en: "He gave the taxi driver his address: Builders' Street, building twenty-five. And Leningrad has a Builders' Street and a building twenty-five too!", ar: "أعطى سائق التاكسي عنوانه: شارع البنّائين، المبنى رقم خمسة وعشرين. وفي لينينغراد أيضًا شارع البنّائين ومبنى رقم خمسة وعشرين!" },
      { who: "B", name: "А́нна", ru: "И кварти́ра была́ как его́ кварти́ра в Москве́!", en: "And the flat was just like his flat in Moscow!", ar: "وكانت الشقة مثل شقّته في موسكو تمامًا!" },
      { who: "A", name: "Ахме́д", ru: "Да! Но э́то была́ кварти́ра На́ди. Она́ уви́дела Же́ню и испуга́лась. Снача́ла она́ не понима́ла, кто он.", en: "Yes! But it was Nadya's flat. She saw Zhenya and got scared. At first she didn't understand who he was.", ar: "نعم! لكنها كانت شقة ناديا. رأت جينيا فخافت. وفي البداية لم تفهم من يكون." },
      { who: "B", name: "А́нна", ru: "А коне́ц тебе́ нра́вится?", en: "And do you like the ending?", ar: "وهل تعجبك النهاية؟" },
      { who: "A", name: "Ахме́д", ru: "О́чень! В конце́ фи́льма Же́ня и На́дя вме́сте. Сюже́т смешно́й и до́брый, а актёры игра́ют отли́чно.", en: "Very much! At the end of the film Zhenya and Nadya are together. The plot is funny and kind, and the actors are excellent.", ar: "كثيرًا! في نهاية الفيلم يكون جينيا وناديا معًا. الحبكة مضحكة ولطيفة، والممثّلون يؤدّون أدوارهم ببراعة." },
      { who: "B", name: "А́нна", ru: "Е́сли тебе́ нра́вятся ру́сские фи́льмы, посмотри́ сериа́л «Ку́хня». Он то́же о́чень смешно́й.", en: "If you like Russian films, watch the series «Kitchen». It's very funny too.", ar: "إذا كانت تعجبك الأفلام الروسية فشاهد مسلسل «المطبخ». إنه مضحك جدًّا أيضًا." },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо! Обяза́тельно посмотрю́, а пото́м расскажу́ тебе́ сюже́т.", en: "Thanks! I'll definitely watch it, and then I'll tell you the plot.", ar: "شكرًا! سأشاهده بالتأكيد، ثم أحكي لكِ قصّته." },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "What is сюже́т?", ar: "ما معنى сюже́т؟" },
      options: ["the plot · الحبكة", "the actor · الممثّل", "the series · المسلسل", "the director · المخرج"],
      answer: 0,
      why: { en: "сюже́т is what happens in a film or a book.", ar: "сюже́т هو ما يحدث في الفيلم أو الكتاب." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Eldar Ryazanov is the director of «The Irony of Fate».", ar: "أكمل: إلدار ريازانوف هو مخرج «سخرية القدر»." },
      ru: "Эльда́р Ряза́нов — ___ фи́льма «Иро́ния судьбы́».",
      answers: ["режиссёр"],
      why: { en: "режиссёр is the person who directs a film.", ar: "режиссёр هو الشخص الذي يُخرج الفيلم." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: At the beginning of the film the hero lives in Moscow.", ar: "أكمل: في بداية الفيلم يعيش البطل في موسكو." },
      ru: "В ___ фи́льма геро́й живёт в Москве́.",
      answers: ["нача́ле"],
      why: { en: "в + prepositional: нача́ло → в нача́ле.", ar: "в + حالة حرف الجر: нача́ло ← в нача́ле." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: At the end of the film Zhenya and Nadya are together.", ar: "أكمل: في نهاية الفيلم يكون جينيا وناديا معًا." },
      ru: "В ___ фи́льма Же́ня и На́дя вме́сте.",
      answers: ["конце́"],
      why: { en: "в + prepositional: коне́ц → в конце́ (the е drops out).", ar: "в + حالة حرف الجر: коне́ц ← в конце́ (يسقط حرف е)." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: The actors are very good.", ar: "كوّن الجملة: الممثّلون يؤدّون أدوارهم جيدًا جدًّا." },
      tokens: ["игра́ют", "Актёры", "хорошо́", "о́чень"],
      answers: ["Актёры игра́ют о́чень хорошо́.", "Актёры о́чень хорошо́ игра́ют."],
      why: { en: "Actors 'play' their roles: игра́ть.", ar: "الممثّلون «يلعبون» أدوارهم: игра́ть." },
    },
    {
      kind: "translate",
      prompt: { en: "The hero of the film is a doctor.", ar: "بطل الفيلم طبيب." },
      answers: ["Геро́й фи́льма — врач.", "Геро́й фи́льма врач."],
      why: { en: "геро́й фи́льма — 'the hero of the film', with фильм in the genitive.", ar: "геро́й фи́льма — «بطل الفيلم»، و фильм في حالة الإضافة." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What does the speaker like?", ar: "استمع. ماذا يعجب المتكلّم؟" },
      ru: "Мне нра́вится сюже́т: он смешно́й и до́брый.",
      listen: true,
      options: ["The plot · الحبكة", "The actors · الممثّلون", "The ending · النهاية"],
      answer: 0,
      why: { en: "Мне нра́вится сюже́т = I like the plot.", ar: "Мне нра́вится сюже́т = تعجبني الحبكة." },
    },
  ],
  topics: ["listening", "storytelling", "culture"],
  search: ["Irony of Fate 1975 Soviet film", "Russian film plot retelling practice", "learn Russian with Soviet films"],
  speaking: {
    scenario: {
      en: "Retell the plot of «The Irony of Fate» — or of a film you watched this week — and say what you liked and why.",
      ar: "أعد سرد قصة «سخرية القدر» — أو فيلم شاهدته هذا الأسبوع — وقل ما أعجبك ولماذا.",
    },
    tutorBrief:
      "Play Maxim (Максим), who has never seen «Ирония судьбы» and is curious. Ask the learner to retell it, or any film they watched this week. Guide with short questions: Кто главный герой? Где он жил? Что случилось в начале? А потом? Какой конец? Тебе понравился фильм? Почему? Expect the past tense with the right aspect (жил, думал for the scene; прилетел, увидела, испугалась for events) and the words герой, сюжет, начало, конец, актёр, режиссёр, сериал. If an aspect or a case is wrong, recast the sentence once and move on so the story keeps flowing. At the end, retell their story back in three simple sentences and praise the clearest part of it.",
    prompts: [
      { ru: "Фильм о том, как Же́ня по оши́бке прилете́л в Ленингра́д.", en: "The film is about how Zhenya flew to Leningrad by mistake.", ar: "الفيلم يدور حول كيف سافر جينيا بالخطأ إلى لينينغراد." },
      { ru: "В нача́ле фи́льма геро́й жил в Москве́.", en: "At the beginning of the film the hero lived in Moscow.", ar: "في بداية الفيلم كان البطل يعيش في موسكو." },
      { ru: "Мне нра́вится сюже́т, потому́ что он смешно́й.", en: "I like the plot because it's funny.", ar: "تعجبني الحبكة لأنها مضحكة." },
      { ru: "Актёры игра́ют отли́чно.", en: "The actors are excellent.", ar: "الممثّلون يؤدّون أدوارهم ببراعة." },
    ],
  },
  journal: {
    en: "Write 6–8 sentences about a film or series you love: the director or the actors, the hero, the beginning, one surprising event, the end (no spoilers if you like!) and why you like it.",
    ar: "اكتب من ٦ إلى ٨ جمل عن فيلم أو مسلسل تحبّه: المخرج أو الممثّلون، والبطل، والبداية، وحدث مفاجئ، والنهاية (من دون كشف الأحداث إن شئت!)، ولماذا تحبّه.",
  },
  culture: {
    en: "«Иро́ния судьбы́» (1975) is a New Year classic: Russian television shows it every year on 31 December, and many families have it on while they make оливье́ salad. The joke of the film is that Soviet cities were built so alike that the same street, the same building and even the same key could exist in Moscow and in Leningrad.",
    ar: "فيلم «Иро́ния судьбы́» (١٩٧٥) من كلاسيكيات رأس السنة: يعرضه التلفزيون الروسي كل عام في ٣١ ديسمبر، وتتركه عائلات كثيرة يعمل بينما تحضّر سلطة оливье́. وطرافة الفيلم أن المدن السوفيتية بُنيت متشابهة إلى حدّ أن الشارع نفسه والمبنى نفسه بل والمفتاح نفسه يمكن أن توجد في موسكو وفي لينينغراد.",
  },
  worksheet: {
    before: [
      {
        en: "Listen for the order words: в нача́ле, снача́ла, пото́м, в конце́. They show where you are in the story.",
        ar: "أنصت إلى كلمات الترتيب: в нача́ле، снача́ла، пото́м، в конце́. فهي تبيّن أين أنت من القصة.",
      },
      {
        en: "Catch the aspect: the scene (жил, рабо́тал, ду́мал, понима́ла) and the events (прилете́л, сказа́л, уви́дела, испуга́лась).",
        ar: "التقط الفرق بين المشهد (жил، рабо́тал، ду́мал، понима́ла) والأحداث (прилете́л، сказа́л، уви́дела، испуга́лась).",
      },
      {
        en: "Don't chase every word. Follow the two heroes, Же́ня and На́дя, and the two cities, Москва́ and Ленингра́д.",
        ar: "لا تلاحق كل كلمة. تابع البطلين Же́ня و На́дя، والمدينتين Москва́ و Ленингра́д.",
      },
    ],
    questions: [
      {
        kind: "choice",
        prompt: { en: "Who directed the film?", ar: "مَن أخرج الفيلم؟" },
        options: ["Эльда́р Ряза́нов", "Макси́м", "Же́ня"],
        answer: 0,
        why: { en: "Ahmed says: Режиссёр — Эльда́р Ряза́нов.", ar: "يقول أحمد: Режиссёр — Эльда́р Ряза́нов." },
      },
      {
        kind: "choice",
        prompt: { en: "What was Zhenya's job?", ar: "ما كانت مهنة جينيا؟" },
        options: ["He was a doctor · كان طبيبًا", "He was a taxi driver · كان سائق تاكسي", "He was an actor · كان ممثّلًا"],
        answer: 0,
        why: { en: "Же́ня рабо́тал врачо́м — he worked as a doctor.", ar: "Же́ня рабо́тал врачо́м — كان يعمل طبيبًا." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. Where did Zhenya fly by mistake?", ar: "استمع. إلى أين سافر جينيا بالخطأ؟" },
        ru: "По оши́бке он прилете́л не в Москву́, а в Ленингра́д.",
        listen: true,
        options: ["To Leningrad · إلى لينينغراد", "To Moscow · إلى موسكو", "To Cairo · إلى القاهرة"],
        answer: 0,
        why: { en: "не в Москву́, а в Ленингра́д — not to Moscow but to Leningrad.", ar: "не в Москву́, а в Ленингра́д — ليس إلى موسكو بل إلى لينينغراد." },
      },
      {
        kind: "choice",
        prompt: { en: "What was strange about the flat in Leningrad?", ar: "ما الغريب في الشقة في لينينغراد؟" },
        options: ["It was just like his flat in Moscow · كانت مثل شقته في موسكو تمامًا", "It was very big · كانت كبيرة جدًّا", "It was empty · كانت فارغة"],
        answer: 0,
        why: { en: "Кварти́ра была́ как его́ кварти́ра в Москве́.", ar: "Кварти́ра была́ как его́ кварти́ра в Москве́ — كانت الشقة مثل شقته في موسكو." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. How did Nadya react when she saw Zhenya?", ar: "استمع. كيف كانت ردّة فعل ناديا عندما رأت جينيا؟" },
        ru: "Она́ уви́дела Же́ню и испуга́лась.",
        listen: true,
        options: ["She got scared · خافت", "She laughed · ضحكت", "She was happy · فرحت"],
        answer: 0,
        why: { en: "испуга́лась = she got scared (perfective: one event).", ar: "испуга́лась = خافت (فعل تام: حدث واحد)." },
      },
      {
        kind: "choice",
        prompt: { en: "When does Russian TV show this film?", ar: "متى يعرض التلفزيون الروسي هذا الفيلم؟" },
        options: ["Every New Year · في كل رأس سنة", "Every Sunday · كل يوم أحد", "Every summer · كل صيف"],
        answer: 0,
        why: { en: "Anna says: Его́ пока́зывают по телеви́зору ка́ждый Но́вый год.", ar: "تقول آنا: Его́ пока́зывают по телеви́зору ка́ждый Но́вый год." },
      },
      {
        kind: "choice",
        prompt: { en: "What does Anna recommend at the end?", ar: "بماذا تنصح آنا في النهاية؟" },
        options: ["The series «Ку́хня» · مسلسل «المطبخ»", "A book about Moscow · كتابًا عن موسكو", "A trip to Leningrad · رحلة إلى لينينغراد"],
        answer: 0,
        why: { en: "посмотри́ сериа́л «Ку́хня» — watch the series «Kitchen».", ar: "посмотри́ сериа́л «Ку́хня» — شاهد مسلسل «المطبخ»." },
      },
    ],
    retell: {
      en: "Retell the plot of «Иро́ния судьбы́» in 6–8 sentences in the past tense: who the hero was, what happened by mistake, what Nadya did and how it ended. Then say what you liked and why (… потому́ что…).",
      ar: "أعد سرد قصة «Иро́ния судьбы́» في ٦ إلى ٨ جمل بالزمن الماضي: مَن كان البطل، وماذا حدث بالخطأ، وماذا فعلت ناديا، وكيف انتهت القصة. ثم قل ما أعجبك ولماذا (… потому́ что…).",
    },
  },
};

const DAY_56: Day = {
  n: 56,
  week: 8,
  kind: "review",
  title: { ru: "Фина́льный экза́мен", en: "Final exam", ar: "الاختبار النهائي" },
  goals: [
    {
      en: "Show what you can do after 56 days: read, listen, and use all six cases, three tenses, aspect, verbs of motion and complex sentences.",
      ar: "أن تُظهر ما تستطيعه بعد ٥٦ يومًا: القراءة والاستماع واستخدام الحالات الست والأزمنة الثلاثة والفعل التام وغير التام وأفعال الحركة والجمل المركّبة.",
    },
    {
      en: "Speak for ten minutes about yourself, your routine, a past event and your plans.",
      ar: "أن تتحدّث عشر دقائق عن نفسك وعن يومك المعتاد وعن حدث ماضٍ وعن خططك.",
    },
  ],
  words: [],
  grammar: [
    {
      id: "d56-g1",
      title: { en: "The course in two tables: tenses, aspect and motion", ar: "الدورة في جدولين: الأزمنة والفعل التام وغير التام وأفعال الحركة" },
      en: [
        "Russian has three tenses. The imperfective has all three (чита́л, чита́ю, бу́ду чита́ть); the perfective has only the past and the future (прочита́л, прочита́ю) — its present-tense form already means the future.",
        "Choose the imperfective for processes, habits and the background of a story; choose the perfective for one completed result or event.",
        "For motion, идти́ and е́хать are one trip in one direction, now; ходи́ть and е́здить are regular trips, there and back. On foot: идти́ / ходи́ть; by transport: е́хать / е́здить.",
      ],
      ar: [
        "في الروسية ثلاثة أزمنة. للفعل غير التام الأزمنة الثلاثة (чита́л، чита́ю، бу́ду чита́ть)، أمّا الفعل التام فله الماضي والمستقبل فقط (прочита́л، прочита́ю)، وصيغة المضارع منه تعني المستقبل.",
        "اختر الفعل غير التام للعمليات المستمرة والعادات وخلفية القصة، واختر الفعل التام للنتيجة المكتملة الواحدة أو الحدث الواحد.",
        "وفي الحركة: идти́ و е́хать رحلة واحدة في اتجاه واحد الآن، أمّا ходи́ть و е́здить فرحلات منتظمة ذهابًا وإيابًا. سيرًا على الأقدام: идти́ / ходи́ть؛ وبوسيلة نقل: е́хать / е́здить.",
      ],
      tables: [
        {
          caption: { en: "Three tenses, two aspects", ar: "ثلاثة أزمنة ونوعان من الأفعال" },
          head: ["Aspect · النوع", "Past · الماضي", "Present · المضارع", "Future · المستقبل"],
          rows: [
            ["Imperfective · غير التام", "я чита́л(а)", "я чита́ю", "я бу́ду чита́ть"],
            ["Perfective · التام", "я прочита́л(а)", "—", "я прочита́ю"],
          ],
        },
        {
          caption: { en: "Verbs of motion", ar: "أفعال الحركة" },
          head: ["How · الوسيلة", "One direction, now · اتجاه واحد، الآن", "Regularly, there and back · بانتظام، ذهابًا وإيابًا"],
          rows: [
            ["on foot · سيرًا على الأقدام", "идти́: иду́, идёшь", "ходи́ть: хожу́, хо́дишь"],
            ["by transport · بوسيلة نقل", "е́хать: е́ду, е́дешь", "е́здить: е́зжу, е́здишь"],
          ],
        },
      ],
      examples: [
        { ru: "Я ча́сто чита́ю ру́сские ска́зки. Вчера́ я прочита́л о́чень смешну́ю ска́зку.", en: "I often read Russian fairy tales. Yesterday I read a very funny one.", ar: "كثيرًا ما أقرأ الحكايات الروسية. وأمس قرأت حكاية مضحكة جدًّا." },
        { ru: "Сейча́с я иду́ в университе́т, а за́втра е́ду в Петербу́рг.", en: "Right now I'm walking to the university, and tomorrow I'm going to St Petersburg.", ar: "الآن أنا ذاهب إلى الجامعة مشيًا، وغدًا أسافر إلى بطرسبورغ." },
      ],
    },
  ],
  exercises: [],
  test: {
    sections: [
      {
        title: { en: "Reading", ar: "القراءة" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Read. What does Ivan usually do on Saturdays?", ar: "اقرأ. ماذا يفعل إيفان عادةً يوم السبت؟" },
            ru: "Меня́ зову́т Ива́н. Я живу́ в Петербу́рге и рабо́таю инжене́ром. В суббо́ту я обы́чно игра́ю в футбо́л с дру́гом.",
            options: ["He plays football with a friend · يلعب كرة القدم مع صديقه", "He works as an engineer · يعمل مهندسًا", "He visits Moscow · يزور موسكو"],
            answer: 0,
            why: { en: "В суббо́ту я обы́чно игра́ю в футбо́л с дру́гом.", ar: "В суббо́ту я обы́чно игра́ю в футбо́л с дру́гом — يلعب كرة القدم مع صديقه يوم السبت." },
          },
          {
            kind: "choice",
            prompt: { en: "Read. Why was Marina at home yesterday?", ar: "اقرأ. لماذا كانت مارينا في البيت أمس؟" },
            ru: "Вчера́ Мари́на была́ до́ма, потому́ что шёл дождь. Она́ чита́ла кни́гу и смотре́ла сериа́л.",
            options: ["Because it was raining · لأن المطر كان يهطل", "Because she was ill · لأنها كانت مريضة", "Because she had no money · لأنه لم يكن لديها مال"],
            answer: 0,
            why: { en: "потому́ что шёл дождь — because it was raining.", ar: "потому́ что шёл дождь — لأن المطر كان يهطل." },
          },
          {
            kind: "choice",
            prompt: { en: "Read. What will Ahmed do?", ar: "اقرأ. ماذا سيفعل أحمد؟" },
            ru: "За́втра у Макси́ма день рожде́ния. А́нна ку́пит ему́ пода́рок, а Ахме́д пригото́вит ку́шари.",
            options: ["Cook koshari · سيطبخ الكشري", "Buy a present · سيشتري هدية", "Call Maxim · سيتصل بمكسيم"],
            answer: 0,
            why: { en: "Ахме́д пригото́вит ку́шари — a perfective future: he will cook it.", ar: "Ахме́д пригото́вит ку́шари — مستقبل من فعل تام: سيطبخه." },
          },
          {
            kind: "choice",
            prompt: { en: "Read. What does Lena love?", ar: "اقرأ. ماذا تحبّ لينا؟" },
            ru: "Э́то моя́ подру́га Ле́на. Она́ высо́кая, у неё дли́нные во́лосы. Она́ моло́же меня́ и о́чень лю́бит танцева́ть.",
            options: ["Dancing · الرقص", "Swimming · السباحة", "Cooking · الطبخ"],
            answer: 0,
            why: { en: "о́чень лю́бит танцева́ть — she loves dancing.", ar: "о́чень лю́бит танцева́ть — تحبّ الرقص كثيرًا." },
          },
        ],
      },
      {
        title: { en: "Vocabulary", ar: "المفردات" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Which word means 'yesterday'?", ar: "أيّ كلمة تعني «أمس»؟" },
            options: ["вчера́", "за́втра", "сего́дня", "ско́ро"],
            answer: 0,
            why: { en: "вчера́ = yesterday, за́втра = tomorrow, сего́дня = today.", ar: "вчера́ = أمس، за́втра = غدًا، сего́дня = اليوم." },
          },
          {
            kind: "choice",
            prompt: { en: "Which word does not belong with the others?", ar: "أيّ كلمة لا تنتمي إلى المجموعة؟" },
            options: ["по́езд", "самолёт", "авто́бус", "таре́лка"],
            answer: 3,
            why: { en: "таре́лка is a plate; the others are transport.", ar: "таре́лка طبق، والبقية وسائل نقل." },
          },
          {
            kind: "choice",
            prompt: { en: "What is the opposite of до́рого?", ar: "ما عكس до́рого؟" },
            options: ["дёшево", "далеко́", "пло́хо", "ра́но"],
            answer: 0,
            why: { en: "до́рого = expensive, дёшево = cheap.", ar: "до́рого = غالٍ، дёшево = رخيص." },
          },
          {
            kind: "choice",
            prompt: { en: "Where do you buy medicine?", ar: "أين تشتري الدواء؟" },
            options: ["в апте́ке", "в музе́е", "на вокза́ле", "в теа́тре"],
            answer: 0,
            why: { en: "апте́ка is a pharmacy; лека́рство is sold there.", ar: "апте́ка صيدلية، وفيها يُباع лека́рство (الدواء)." },
          },
          {
            kind: "choice",
            prompt: { en: "You meet someone for the first time. What do you say?", ar: "تقابل شخصًا لأول مرة. ماذا تقول؟" },
            options: ["О́чень прия́тно!", "Договори́лись!", "Помоги́те!", "Жаль!"],
            answer: 0,
            why: { en: "О́чень прия́тно! = Nice to meet you!", ar: "О́чень прия́тно! = تشرّفنا!" },
          },
        ],
      },
      {
        title: { en: "The six cases", ar: "الحالات الست" },
        items: [
          {
            kind: "fill",
            prompt: { en: "Put стул in the right case: There is no chair in the room.", ar: "ضع стул في الحالة الصحيحة: لا يوجد كرسي في الغرفة." },
            ru: "В ко́мнате нет ___.",
            answers: ["сту́ла"],
            why: { en: "нет + genitive: стул → сту́ла.", ar: "нет + حالة الإضافة: стул ← сту́ла." },
          },
          {
            kind: "fill",
            prompt: { en: "Put сестра́ in the right case: I help my sister.", ar: "ضع сестра́ في الحالة الصحيحة: أساعد أختي." },
            ru: "Я помога́ю ___.",
            answers: ["сестре́"],
            why: { en: "помога́ть кому́? takes the dative: сестре́.", ar: "помога́ть кому́? يأخذ حالة المستفيد: сестре́." },
          },
          {
            kind: "fill",
            prompt: { en: "Put му́зыка in the right case: I love music.", ar: "ضع му́зыка في الحالة الصحيحة: أحبّ الموسيقى." },
            ru: "Я люблю́ ___.",
            answers: ["му́зыку"],
            why: { en: "The direct object is accusative: -а → -у.", ar: "المفعول به في حالة المفعول به: -а ← -у." },
          },
          {
            kind: "fill",
            prompt: { en: "Put лимо́н in the right case: I drink tea with lemon.", ar: "ضع лимо́н في الحالة الصحيحة: أشرب الشاي بالليمون." },
            ru: "Я пью чай с ___.",
            answers: ["лимо́ном"],
            why: { en: "с + instrumental: лимо́н → лимо́ном.", ar: "с + حالة الأداة: лимо́н ← лимо́ном." },
          },
          {
            kind: "fill",
            prompt: { en: "Put Росси́я in the right case: We live in Russia.", ar: "ضع Росси́я في الحالة الصحيحة: نعيش في روسيا." },
            ru: "Мы живём в ___.",
            answers: ["Росси́и"],
            why: { en: "где? — в + prepositional; nouns in -ия take -ии.", ar: "где? — в + حالة حرف الجر؛ والأسماء المنتهية بـ -ия تأخذ -ии." },
          },
          {
            kind: "fill",
            prompt: { en: "Put теа́тр in the right case: In the evening I'm going to the theatre.", ar: "ضع теа́тр في الحالة الصحيحة: في المساء أذهب إلى المسرح." },
            ru: "Ве́чером я иду́ в ___.",
            answers: ["теа́тр"],
            why: { en: "куда́? — в + accusative, and a masculine thing does not change: в теа́тр.", ar: "куда́? — в + حالة المفعول به، والشيء المذكّر لا يتغيّر: в теа́тр." },
          },
          {
            kind: "fill",
            prompt: { en: "Put я in the right case: Call me tomorrow!", ar: "ضع я في الحالة الصحيحة: اتصل بي غدًا!" },
            ru: "Позвони́ ___ за́втра!",
            answers: ["мне"],
            why: { en: "звони́ть / позвони́ть кому́? — the dative of я is мне.", ar: "звони́ть / позвони́ть кому́? — حالة المستفيد من я هي мне." },
          },
        ],
      },
      {
        title: { en: "Tenses and aspect", ar: "الأزمنة والفعل التام وغير التام" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Choose the verb: Yesterday we were at the cinema.", ar: "اختر الفعل: أمس كنّا في السينما." },
            ru: "Вчера́ мы … в кино́.",
            options: ["бы́ли", "бу́дем", "есть"],
            answer: 0,
            why: { en: "вчера́ needs the past: мы бы́ли.", ar: "вчера́ تحتاج إلى الماضي: мы бы́ли." },
          },
          {
            kind: "choice",
            prompt: { en: "Choose the verb: Tomorrow I'll work at home.", ar: "اختر الفعل: غدًا سأعمل في البيت." },
            ru: "За́втра я … рабо́тать до́ма.",
            options: ["бу́ду", "был", "бу́дет"],
            answer: 0,
            why: { en: "The imperfective future: я бу́ду + infinitive.", ar: "المستقبل من الفعل غير التام: я бу́ду + المصدر." },
          },
          {
            kind: "fill",
            prompt: { en: "A habit: I often call my mum. (звони́ть / позвони́ть)", ar: "عادة: كثيرًا ما أتصل بأمي. (звони́ть / позвони́ть)" },
            ru: "Я ча́сто ___ ма́ме.",
            answers: ["звоню́"],
            why: { en: "ча́сто signals a habit: imperfective звоню́.", ar: "ча́сто تدلّ على عادة: الفعل غير التام звоню́." },
          },
          {
            kind: "fill",
            prompt: { en: "A result: I've already written the letter. (писа́ть / написа́ть)", ar: "نتيجة: كتبتُ الرسالة بالفعل. (писа́ть / написа́ть)" },
            ru: "Я уже́ ___ письмо́.",
            answers: ["написа́л", "написа́ла"],
            why: { en: "уже́ + a finished result: perfective написа́л(а).", ar: "уже́ + نتيجة مكتملة: الفعل التام написа́л(а)." },
          },
          {
            kind: "choice",
            prompt: { en: "Choose the verb: I was reading when suddenly Mum called.", ar: "اختر الفعل: كنت أقرأ عندما اتصلت أمي فجأة." },
            ru: "Я чита́л, и вдруг … ма́ма.",
            options: ["позвони́ла", "звони́ла", "звони́т"],
            answer: 0,
            why: { en: "One sudden event after вдруг: perfective позвони́ла.", ar: "حدث مفاجئ واحد بعد вдруг: الفعل التام позвони́ла." },
          },
        ],
      },
      {
        title: { en: "Verbs of motion", ar: "أفعال الحركة" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Right now I'm walking to work.", ar: "الآن أنا ذاهب مشيًا إلى العمل." },
            ru: "Сейча́с я … на рабо́ту.",
            options: ["иду́", "хожу́", "е́зжу"],
            answer: 0,
            why: { en: "One trip, now, on foot: иду́.", ar: "رحلة واحدة، الآن، سيرًا على الأقدام: иду́." },
          },
          {
            kind: "choice",
            prompt: { en: "Every day I go to the office by bus.", ar: "كل يوم أذهب إلى المكتب بالحافلة." },
            ru: "Ка́ждый день я … в о́фис на авто́бусе.",
            options: ["е́зжу", "иду́", "хожу́"],
            answer: 0,
            why: { en: "Regular trips by transport: е́здить → е́зжу.", ar: "رحلات منتظمة بوسيلة نقل: е́здить ← е́зжу." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: Tomorrow we're going to St Petersburg by train.", ar: "أكمل: غدًا نسافر إلى بطرسبورغ بالقطار." },
            ru: "За́втра мы ___ в Петербу́рг на по́езде.",
            answers: ["е́дем", "пое́дем"],
            why: { en: "One trip by transport: е́хать → мы е́дем.", ar: "رحلة واحدة بوسيلة نقل: е́хать ← мы е́дем." },
          },
          {
            kind: "choice",
            prompt: { en: "— Куда́ ты идёшь? Choose the right answer.", ar: "— Куда́ ты идёшь? اختر الإجابة الصحيحة." },
            options: ["В магази́н.", "В магази́не.", "Магази́н."],
            answer: 0,
            why: { en: "куда́? takes в + accusative: в магази́н.", ar: "куда́? يأخذ в + حالة المفعول به: в магази́н." },
          },
        ],
      },
      {
        title: { en: "Complex sentences", ar: "الجمل المركّبة" },
        items: [
          {
            kind: "order",
            prompt: { en: "Build the sentence: I'm at home because it's raining.", ar: "كوّن الجملة: أنا في البيت لأن المطر يهطل." },
            tokens: ["потому́", "что", "до́ма", "Я", "идёт", "дождь"],
            answers: ["Я до́ма, потому́ что идёт дождь.", "Я до́ма, потому́ что дождь идёт."],
            why: { en: "The reason comes after потому́ что.", ar: "يأتي السبب بعد потому́ что." },
          },
          {
            kind: "order",
            prompt: { en: "Build the sentence: This is a friend who lives in Cairo.", ar: "كوّن الجملة: هذا صديق يعيش في القاهرة." },
            tokens: ["кото́рый", "Э́то", "в", "друг", "живёт", "Каи́ре"],
            answers: ["Э́то друг, кото́рый живёт в Каи́ре."],
            why: { en: "кото́рый follows the noun it describes: друг, кото́рый…", ar: "кото́рый يأتي بعد الاسم الذي يصفه: друг, кото́рый…" },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: If the weather is good tomorrow, we'll go for a walk.", ar: "أكمل: إذا كان الطقس جميلًا غدًا فسنتمشّى." },
            ru: "Е́сли за́втра ___ хоро́шая пого́да, мы бу́дем гуля́ть.",
            answers: ["бу́дет"],
            why: { en: "The future after е́сли: бу́дет.", ar: "المستقبل بعد е́сли: бу́дет." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: He said that he would call in the evening.", ar: "أكمل: قال إنه سيتصل في المساء." },
            ru: "Он сказа́л, ___ позвони́т ве́чером.",
            answers: ["что"],
            why: { en: "Reported speech: сказа́л, что…", ar: "الكلام المنقول: сказа́л, что…" },
          },
        ],
      },
      {
        title: { en: "Listening", ar: "الاستماع" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Listen. What is the person looking for?", ar: "استمع. عمّ يبحث الشخص؟" },
            ru: "Извини́те, где ближа́йшая ста́нция метро́?",
            listen: true,
            options: ["The nearest metro station · أقرب محطة مترو", "The nearest pharmacy · أقرب صيدلية", "A hotel · فندق"],
            answer: 0,
            why: { en: "ближа́йшая ста́нция метро́ = the nearest metro station.", ar: "ближа́йшая ста́нция метро́ = أقرب محطة مترو." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. How old is the speaker?", ar: "استمع. كم عمر المتكلّم؟" },
            ru: "Мне два́дцать пять лет, и я рабо́таю программи́стом.",
            listen: true,
            options: ["25 · ٢٥", "35 · ٣٥", "52 · ٥٢"],
            answer: 0,
            why: { en: "два́дцать пять = 25; мне … лет gives the age.", ar: "два́дцать пять = ٢٥؛ و мне … лет تعبّر عن العمر." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. Why does the speaker want to become a doctor?", ar: "استمع. لماذا يريد المتكلّم أن يصبح طبيبًا؟" },
            ru: "Я хочу́ стать врачо́м, потому́ что люблю́ помога́ть лю́дям.",
            listen: true,
            options: ["He likes helping people · يحبّ مساعدة الناس", "Doctors earn a lot · الأطباء يكسبون كثيرًا", "His father is a doctor · والده طبيب"],
            answer: 0,
            why: { en: "потому́ что люблю́ помога́ть лю́дям — because I love helping people.", ar: "потому́ что люблю́ помога́ть лю́дям — لأنني أحبّ مساعدة الناس." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. What is wrong with the speaker?", ar: "استمع. ممّ يشكو المتكلّم؟" },
            ru: "У меня́ боли́т голова́, и у меня́ температу́ра.",
            listen: true,
            options: ["A headache and a temperature · صداع وحرارة", "A sore throat · ألم في الحلق", "A stomach ache · ألم في البطن"],
            answer: 0,
            why: { en: "боли́т голова́ = a headache; температу́ра = a temperature.", ar: "боли́т голова́ = صداع؛ температу́ра = حرارة." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. Where will they meet?", ar: "استمع. أين سيلتقيان؟" },
            ru: "Дава́й встре́тимся в суббо́ту в три часа́ у теа́тра.",
            listen: true,
            options: ["By the theatre · عند المسرح", "By the metro · عند المترو", "At a café · في مقهى"],
            answer: 0,
            why: { en: "у теа́тра = by the theatre (у + genitive).", ar: "у теа́тра = عند المسرح (у + حالة الإضافة)." },
          },
        ],
      },
      {
        title: { en: "Translation", ar: "الترجمة" },
        items: [
          {
            kind: "translate",
            prompt: { en: "My brother works as an engineer in Cairo.", ar: "أخي يعمل مهندسًا في القاهرة." },
            answers: ["Мой брат рабо́тает инжене́ром в Каи́ре.", "Мой брат рабо́тает в Каи́ре инжене́ром."],
            why: { en: "рабо́тать + instrumental (инжене́ром) and в + prepositional (в Каи́ре).", ar: "рабо́тать + حالة الأداة (инжене́ром)، و в + حالة حرف الجر (в Каи́ре)." },
          },
          {
            kind: "translate",
            prompt: { en: "Yesterday I bought a new jacket.", ar: "أمس اشتريت سترة جديدة." },
            answers: [
              "Вчера́ я купи́л но́вую ку́ртку.",
              "Вчера́ я купи́ла но́вую ку́ртку.",
              "Я вчера́ купи́л но́вую ку́ртку.",
              "Я вчера́ купи́ла но́вую ку́ртку.",
            ],
            why: { en: "A finished purchase: perfective купи́л(а); ку́ртка → ку́ртку (accusative).", ar: "شراء مكتمل: الفعل التام купи́л(а)؛ و ку́ртка ← ку́ртку (حالة المفعول به)." },
          },
          {
            kind: "translate",
            prompt: { en: "It's warmer in Cairo than in Moscow.", ar: "الجو في القاهرة أدفأ منه في موسكو." },
            answers: ["В Каи́ре тепле́е, чем в Москве́.", "В Каи́ре тепле́е чем в Москве́."],
            why: { en: "Comparative + чем: тепле́е, чем…", ar: "صيغة المقارنة + чем: тепле́е, чем…" },
          },
        ],
      },
    ],
    speaking: [
      {
        en: "Introduce yourself: your name, where you are from, where you live now and what you do.",
        ar: "عرّف بنفسك: اسمك، ومن أين أنت، وأين تعيش الآن، وماذا تعمل.",
      },
      {
        en: "Describe your typical weekday from morning to evening (снача́ла, пото́м, по́сле э́того).",
        ar: "صِف يوم عملك المعتاد من الصباح إلى المساء (снача́ла، пото́м، по́сле э́того).",
      },
      {
        en: "Tell a story in the past: a trip or a day when something unexpected happened. Use вдруг and в конце́ концо́в.",
        ar: "احكِ قصة بالزمن الماضي: رحلة أو يومًا حدث فيه شيء غير متوقَّع. استخدم вдруг و в конце́ концо́в.",
      },
      {
        en: "Make plans with the examiner for the weekend: invite them, agree on a day, a time and a place (Дава́й…).",
        ar: "خطّط مع الممتحِن لعطلة نهاية الأسبوع: ادعُه، واتّفقا على يوم ووقت ومكان (Дава́й…).",
      },
      {
        en: "Compare Cairo and Moscow — weather, food, people — and say which you like more and why (потому́ что…).",
        ar: "قارن بين القاهرة وموسكو — الطقس والطعام والناس — وقل أيّهما تحبّ أكثر ولماذا (потому́ что…).",
      },
    ],
  },
  topics: ["cases-overview", "storytelling", "travel"],
  search: ["Russian A2 exam practice", "Russian speaking test A2 example", "Russian listening practice A2"],
  speaking: {
    scenario: {
      en: "The final interview: ten minutes with a friendly examiner. Introduce yourself, describe your routine and your family, tell a story from the past and make plans together.",
      ar: "المقابلة النهائية: عشر دقائق مع ممتحِن ودود. عرّف بنفسك، وصِف يومك المعتاد وعائلتك، واحكِ قصة من الماضي، وخطّطا معًا لموعد.",
    },
    tutorBrief:
      "Play a friendly but fair examiner running a 10-minute final oral exam in four parts, in simple, slow Russian, one question at a time. Part 1, about 2 minutes, introduction: name, origin, where they live, work or study, family (Расскажите о себе. Кто вы по профессии? У вас большая семья?). Part 2, about 2 minutes, routine: a typical weekday and weekend (Во сколько вы встаёте? Как вы едете на работу?). Part 3, about 3 minutes, a story in the past: a trip or a funny or difficult day; ask follow-ups (А потом? Что случилось? Как это закончилось?) and listen for aspect. Part 4, about 3 minutes, making plans: a role-play where the learner invites you out; you are busy on the first day they suggest, so they must agree on another day, time and place. Do not correct during the exam; note mistakes silently. Then score four criteria from 1 to 5: fluency (keeps talking, few long pauses), accuracy (case endings, tenses, aspect), vocabulary (range and the right word), pronunciation (stress and clear sounds). Give the total out of 20 with one sentence per criterion, quote two things they said well, give two corrections with the correct Russian, and finish warmly and specifically: congratulate them on finishing 56 days and name one next step.",
    prompts: [
      { ru: "Меня́ зову́т Ахме́д, я из Еги́пта, из Каи́ра.", en: "My name is Ahmed, I'm from Egypt, from Cairo.", ar: "اسمي أحمد، أنا من مصر، من القاهرة." },
      { ru: "Обы́чно я встаю́ в семь часо́в и е́ду на рабо́ту на метро́.", en: "I usually get up at seven and go to work by metro.", ar: "عادةً أستيقظ في الساعة السابعة وأذهب إلى العمل بالمترو." },
      { ru: "Одна́жды я заблуди́лся, но в конце́ концо́в всё бы́ло хорошо́.", en: "Once I got lost, but in the end everything was fine.", ar: "ذات مرة ضللتُ الطريق، لكن في نهاية المطاف كان كل شيء على ما يرام." },
      { ru: "Дава́йте встре́тимся в суббо́ту в шесть часо́в!", en: "Let's meet on Saturday at six!", ar: "هيّا نلتقي يوم السبت في الساعة السادسة!" },
      { ru: "Спаси́бо! Я бу́ду говори́ть по-ру́сски ка́ждый день.", en: "Thank you! I'll speak Russian every day.", ar: "شكرًا! سأتكلّم الروسية كل يوم." },
    ],
  },
  journal: {
    en: "Write 6–8 sentences to yourself: what you can do in Russian now that you could not do 56 days ago, what was hardest, what you liked most, and your plan for the next three months (Я бу́ду…, Е́сли…, потому́ что…).",
    ar: "اكتب من ٦ إلى ٨ جمل لنفسك: ما الذي تستطيع فعله بالروسية الآن ولم تكن تستطيعه قبل ٥٦ يومًا، وما كان الأصعب، وما أعجبك أكثر، وخطتك للأشهر الثلاثة القادمة (Я бу́ду…، Е́сли…، потому́ что…).",
  },
  culture: {
    en: "Before an exam, Russians wish each other luck with the old joking phrase «Ни пу́ха ни пера́!» — literally 'neither fluff nor feather', a hunters' superstition. The traditional reply is «К чёрту!» ('to the devil!'), but a simple «Спаси́бо!» is fine too. Ни пу́ха ни пера́!",
    ar: "قبل الامتحان يتمنّى الروس بعضهم لبعض التوفيق بالعبارة المازحة القديمة «Ни пу́ха ни пера́!» — وحرفيًا «لا زغب ولا ريش»، وهي من خرافات الصيّادين. والردّ التقليدي «К чёрту!» («إلى الشيطان!»)، لكن كلمة «Спаси́бо!» البسيطة مقبولة أيضًا. Ни пу́ха ни пера́!",
  },
};

export const WEEK_8: Day[] = [DAY_50, DAY_51, DAY_52, DAY_53, DAY_54, DAY_55, DAY_56];
