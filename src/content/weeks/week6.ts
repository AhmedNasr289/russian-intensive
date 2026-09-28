import type { Day } from "../types.ts";

// Week 6 · Going places: the dative, the future tense, verbs of motion, directions and the Moscow metro.
// Written to docs/content-style-guide.md, following the Day 4 exemplar in week1.ts.

const DAY_36: Day = {
  n: 36,
  week: 6,
  kind: "lesson",
  title: { ru: "Мне нра́вится: да́тельный паде́ж", en: "I like it: the dative 1", ar: "يعجبني: حالة المستفيد (١)" },
  goals: [
    {
      en: "Say what you like and dislike with мне нра́вится / нра́вятся.",
      ar: "أن تقول ما يعجبك وما لا يعجبك باستخدام мне нра́вится / нра́вятся.",
    },
    {
      en: "Say what you need to do, may do or must not do (мне ну́жно / мо́жно / нельзя́ + infinitive) and how you feel (мне хо́лодно, мне ску́чно).",
      ar: "أن تقول ما عليك فعله وما يجوز لك وما لا يجوز (мне ну́жно / мо́жно / нельзя́ + المصدر)، وأن تعبّر عن شعورك (мне хо́лодно، мне ску́чно).",
    },
    {
      en: "Ask and say how old someone is: Ско́лько тебе́ лет? — Мне два́дцать пять лет.",
      ar: "أن تسأل عن عمر شخص وتجيب: Ско́лько тебе́ лет؟ — Мне два́дцать пять лет.",
    },
  ],
  words: [
    {
      id: "d36-01", ru: "нра́виться", say: "nrAvitsa", en: "to be liked (мне нра́вится… = I like…)", ar: "يُعجِب (мне нра́вится… = يعجبني…)", pos: "verb",
      forms: "нра́влюсь, нра́вишься; мне нра́вится / нра́вятся",
      ex: { ru: "Мне нра́вится Москва́.", en: "I like Moscow.", ar: "تعجبني موسكو." },
      note: {
        en: "The thing you like is the subject; the person who likes is in the dative: Мне нра́вятся фи́льмы.",
        ar: "الشيء الذي يعجبك هو الفاعل، والشخص الذي يُعجَب يأتي في حالة المستفيد: Мне нра́вятся фи́льмы.",
      },
    },
    {
      id: "d36-02", ru: "ну́жно", say: "nUzhna", en: "(it is) necessary; мне ну́жно… = I need to…", ar: "من الضروري؛ мне ну́жно… = عليّ أن…", pos: "adv",
      ex: { ru: "Мне ну́жно рабо́тать.", en: "I need to work.", ar: "عليّ أن أعمل." },
    },
    {
      id: "d36-03", ru: "нельзя́", say: "nil'zyA", en: "(it is) not allowed; you can't", ar: "لا يجوز؛ ممنوع؛ لا يمكن", pos: "adv",
      ex: { ru: "В музе́е нельзя́ есть.", en: "You can't eat in the museum.", ar: "لا يجوز الأكل في المتحف." },
    },
    {
      id: "d36-04", ru: "хо́лодно", say: "khOladna", en: "(it is) cold; мне хо́лодно = I'm cold", ar: "الجو بارد؛ мне хо́лодно = أشعر بالبرد", pos: "adv",
      ex: { ru: "Сего́дня хо́лодно.", en: "It's cold today.", ar: "الجو بارد اليوم." },
    },
    {
      id: "d36-05", ru: "тепло́", say: "tiplO", en: "(it is) warm; мне тепло́ = I'm warm", ar: "الجو دافئ؛ мне тепло́ = أشعر بالدفء", pos: "adv",
      ex: { ru: "В Каи́ре всегда́ тепло́.", en: "It's always warm in Cairo.", ar: "الجو دائمًا دافئ في القاهرة." },
    },
    {
      id: "d36-06", ru: "ску́чно", say: "skUshna", en: "(it is) boring; мне ску́чно = I'm bored", ar: "مملّ؛ мне ску́чно = أشعر بالملل", pos: "adv",
      ex: { ru: "Мне ску́чно до́ма.", en: "I'm bored at home.", ar: "أشعر بالملل في البيت." },
      note: { en: "Say 'skUshna': here чн sounds like шн.", ar: "تُنطق «skUshna»: يُنطق чн هنا مثل шн." },
    },
    {
      id: "d36-07", ru: "ве́село", say: "vyEsila", en: "(it is) fun; мне ве́село = I'm having fun", ar: "ممتع؛ мне ве́село = أنا مستمتع", pos: "adv",
      ex: { ru: "На пра́зднике бы́ло о́чень ве́село.", en: "The celebration was great fun.", ar: "كان الاحتفال ممتعًا جدًّا." },
    },
    {
      id: "d36-08", ru: "тру́дно", say: "trUdna", en: "(it is) difficult; мне тру́дно = it's hard for me", ar: "صعب؛ мне тру́дно = يصعب عليّ", pos: "adv",
      ex: { ru: "Мне тру́дно говори́ть по-ру́сски.", en: "Speaking Russian is hard for me.", ar: "يصعب عليّ التكلّم بالروسية." },
    },
    {
      id: "d36-09", ru: "легко́", say: "likhkO", en: "(it is) easy", ar: "سهل", pos: "adv",
      ex: { ru: "Чита́ть по-ру́сски легко́!", en: "Reading Russian is easy!", ar: "القراءة بالروسية سهلة!" },
      note: { en: "The г sounds like х: 'likhkO'.", ar: "يُنطق г هنا مثل х: «likhkO»." },
    },
    {
      id: "d36-10", ru: "лет", say: "lyet", en: "years (after 5–20 and numbers ending in 5–9 or 0)", ar: "سنة / عامًا (بعد ٥–٢٠ والأعداد المنتهية بـ ٥–٩ أو ٠)", pos: "noun", g: "pl",
      forms: "год, го́да, лет",
      ex: { ru: "Мне два́дцать пять лет.", en: "I'm twenty-five.", ar: "عمري خمسة وعشرون عامًا." },
    },
    {
      id: "d36-11", ru: "во́зраст", say: "vOzrast", en: "age", ar: "العمر، السِّنّ", pos: "noun", g: "m",
      ex: { ru: "Во́зраст: три́дцать лет.", en: "Age: thirty.", ar: "العمر: ثلاثون عامًا." },
      note: {
        en: "Used on forms and in formal speech; in conversation ask Ско́лько вам лет?",
        ar: "تُستخدم في الاستمارات والكلام الرسمي؛ أمّا في الحديث فاسأل: Ско́лько вам лет؟",
      },
    },
    {
      id: "d36-12", ru: "спорт", say: "sport", en: "sport", ar: "الرياضة", pos: "noun", g: "m",
      ex: { ru: "Я люблю́ спорт.", en: "I love sport.", ar: "أحبّ الرياضة." },
    },
    {
      id: "d36-13", ru: "футбо́л", say: "futbOl", en: "football (soccer)", ar: "كرة القدم", pos: "noun", g: "m",
      ex: { ru: "Ему́ нра́вится футбо́л.", en: "He likes football.", ar: "تعجبه كرة القدم." },
    },
    {
      id: "d36-14", ru: "кино́", say: "kinO", en: "the cinema, the movies", ar: "السينما", pos: "noun", g: "n",
      ex: { ru: "Мы ча́сто смо́трим фи́льмы в кино́.", en: "We often watch films at the cinema.", ar: "كثيرًا ما نشاهد الأفلام في السينما." },
      note: { en: "It never changes its ending: в кино́ = at the cinema.", ar: "لا تتغيّر نهايتها أبدًا: в кино́ = في السينما." },
    },
    {
      id: "d36-15", ru: "мне", say: "mnye", en: "(to, for) me — the dative of я", ar: "لي — الضمير я في حالة المستفيد", pos: "pron",
      ex: { ru: "Мне хо́лодно.", en: "I'm cold.", ar: "أشعر بالبرد." },
    },
    {
      id: "d36-16", ru: "тебе́", say: "tibyE", en: "(to, for) you — the dative of ты", ar: "لكَ / لكِ — الضمير ты في حالة المستفيد", pos: "pron",
      ex: { ru: "Тебе́ нра́вится чай?", en: "Do you like tea?", ar: "هل يعجبك الشاي؟" },
    },
    {
      id: "d36-17", ru: "ему́", say: "yimU", en: "(to, for) him — the dative of он", ar: "له — الضمير он في حالة المستفيد", pos: "pron",
      ex: { ru: "Ему́ три́дцать лет.", en: "He is thirty.", ar: "عمره ثلاثون عامًا." },
    },
    {
      id: "d36-18", ru: "ей", say: "yey", en: "(to, for) her — the dative of она́", ar: "لها — الضمير она́ في حالة المستفيد", pos: "pron",
      ex: { ru: "Ей ску́чно.", en: "She is bored.", ar: "هي تشعر بالملل." },
    },
    {
      id: "d36-19", ru: "нам", say: "nam", en: "(to, for) us", ar: "لنا", pos: "pron",
      ex: { ru: "Нам о́чень ве́село!", en: "We're having great fun!", ar: "نحن مستمتعون جدًّا!" },
    },
    {
      id: "d36-20", ru: "вам", say: "vam", en: "(to, for) you — formal or plural", ar: "لكم / لحضرتك", pos: "pron",
      ex: { ru: "Вам нра́вится Москва́?", en: "Do you like Moscow?", ar: "هل تعجبك موسكو؟" },
    },
    {
      id: "d36-21", ru: "им", say: "im", en: "(to, for) them", ar: "لهم", pos: "pron",
      ex: { ru: "Им нра́вятся мультфи́льмы.", en: "They like cartoons.", ar: "تعجبهم الرسوم المتحركة." },
    },
    {
      id: "d36-22", ru: "Ско́лько тебе́ лет?", say: "skOl'ka tibyE lyet?", en: "How old are you? (informal)", ar: "كم عمرك؟ (غير رسمي)", pos: "phrase",
      note: { en: "Formal: Ско́лько вам лет?", ar: "بصيغة الاحترام: Ско́лько вам лет؟" },
    },
  ],
  grammar: [
    {
      id: "d36-g1",
      title: { en: "Мне нра́вится: the dative of pronouns", ar: "Мне нра́вится: الضمائر في حالة المستفيد" },
      en: [
        "The dative case (да́тельный паде́ж) is the case of the person something is given to or happens to — 'to me, for me'. Today it marks the person who likes, feels or needs something. Start with the pronouns: мне, тебе́, ему́, ей, нам, вам, им.",
        "Russian says 'it pleases me', not 'I like it': Мне нра́вится Москва́. Москва́ is the subject, so the verb agrees with it: one thing — нра́вится, several things — нра́вятся (Мне нра́вятся фи́льмы).",
        "Arabic works the same way: in يعجبني الفيلم the film is the subject and 'me' is the object. For 'I don't like it' just add не: Мне не нра́вится футбо́л.",
      ],
      ar: [
        "حالة المستفيد (да́тельный паде́ж) هي حالة الشخص الذي يُعطى له شيء أو يحدث له شيء — «لي، من أجلي». وهي اليوم تدلّ على الشخص الذي يعجبه شيء أو يشعر به أو يحتاج إليه. ابدأ بالضمائر: мне، тебе́، ему́، ей، нам، вам، им.",
        "لا يقول الروس «أنا معجب بهذا»، بل «هذا يعجبني»: Мне нра́вится Москва́. الفاعل هنا Москва́، لذلك يتّفق الفعل معه: شيء واحد ← нра́вится، وأشياء عدّة ← нра́вятся (Мне нра́вятся фи́льмы).",
        "والعربية تعمل بالطريقة نفسها: في «يعجبني الفيلم» الفيلمُ هو الفاعل، وياء المتكلّم مفعول به. وللنفي أضف не فقط: Мне не нра́вится футбо́л.",
      ],
      tables: [
        {
          caption: { en: "Dative pronouns", ar: "الضمائر في حالة المستفيد" },
          head: ["Nominative · حالة الرفع", "Dative · حالة المستفيد", "Example · مثال"],
          rows: [
            ["я", "мне", "Мне нра́вится чай."],
            ["ты", "тебе́", "Тебе́ нра́вится Москва́?"],
            ["он / оно́", "ему́", "Ему́ нра́вится футбо́л."],
            ["она́", "ей", "Ей нра́вятся фи́льмы."],
            ["мы", "нам", "Нам нра́вится кино́."],
            ["вы", "вам", "Вам нра́вится ко́фе?"],
            ["они́", "им", "Им нра́вятся мультфи́льмы."],
          ],
        },
      ],
      examples: [
        { ru: "Мне нра́вится Москва́.", en: "I like Moscow.", ar: "تعجبني موسكو." },
        { ru: "Ей нра́вятся ру́сские пе́сни.", en: "She likes Russian songs.", ar: "تعجبها الأغاني الروسية." },
        { ru: "Нам не нра́вится футбо́л.", en: "We don't like football.", ar: "لا تعجبنا كرة القدم." },
      ],
    },
    {
      id: "d36-g2",
      title: { en: "Мне ну́жно, мо́жно, нельзя́… and мне хо́лодно, ску́чно", ar: "Мне ну́жно، мо́жно، нельзя́… و мне хо́лодно، ску́чно" },
      en: [
        "Many useful sentences have no subject at all: the person goes into the dative, and a word like ну́жно (need to), мо́жно (may) or нельзя́ (must not, can't) takes an infinitive: Мне ну́жно рабо́тать. Тебе́ мо́жно отдыха́ть. Ему́ нельзя́ пить ко́фе.",
        "Feelings and states work the same way: мне хо́лодно (I'm cold), мне тепло́, мне ску́чно (I'm bored), мне ве́село (I'm having fun), мне тру́дно / легко́ (it's hard / easy for me). For the past add бы́ло: Мне бы́ло ску́чно.",
        "The trap: Я ску́чный means 'I am boring', and Я холо́дный means 'I am a cold person'. To say how you feel, always start with мне.",
      ],
      ar: [
        "كثير من الجمل المفيدة ليس فيها فاعل أصلًا: يأتي الشخص في حالة المستفيد، ثم كلمة مثل ну́жно (عليه أن) أو мо́жно (يجوز له) أو нельзя́ (لا يجوز، لا يمكن) ثم المصدر: Мне ну́жно рабо́тать. Тебе́ мо́жно отдыха́ть. Ему́ нельзя́ пить ко́фе.",
        "وكذلك المشاعر والحالات: мне хо́лодно (أشعر بالبرد)، мне тепло́ (أشعر بالدفء)، мне ску́чно (أشعر بالملل)، мне ве́село (أنا مستمتع)، мне тру́дно / легко́ (هذا صعب / سهل عليّ). وللماضي أضف бы́ло: Мне бы́ло ску́чно.",
        "انتبه: Я ску́чный تعني «أنا شخص مملّ»، و Я холо́дный تعني «أنا شخص بارد». للتعبير عن شعورك ابدأ دائمًا بـ мне.",
      ],
      tables: [
        {
          caption: { en: "Person in the dative + state word (+ infinitive)", ar: "الشخص في حالة المستفيد + كلمة الحالة (+ المصدر)" },
          head: ["Dative · حالة المستفيد", "Word · الكلمة", "Example · مثال"],
          rows: [
            ["мне", "ну́жно", "Мне ну́жно рабо́тать."],
            ["тебе́", "мо́жно", "Тебе́ мо́жно отдыха́ть."],
            ["ему́", "нельзя́", "Ему́ нельзя́ пить ко́фе."],
            ["ей", "хо́лодно", "Ей хо́лодно."],
            ["нам", "ве́село", "Нам ве́село!"],
            ["им", "тру́дно", "Им тру́дно говори́ть по-ру́сски."],
          ],
        },
      ],
      examples: [
        { ru: "Мне ну́жно ра́но встава́ть.", en: "I need to get up early.", ar: "عليّ أن أستيقظ مبكرًا." },
        { ru: "Тут нельзя́ пить ко́фе.", en: "You can't drink coffee here.", ar: "لا يجوز شرب القهوة هنا." },
        { ru: "Вчера́ нам бы́ло о́чень ску́чно.", en: "We were very bored yesterday.", ar: "شعرنا بملل شديد أمس." },
      ],
    },
    {
      id: "d36-g3",
      title: { en: "Age: Мне два́дцать пять лет", ar: "العمر: Мне два́дцать пять лет" },
      en: [
        "To say someone's age, put the person in the dative, then the number and год / го́да / лет: Мне два́дцать пять лет. Ему́ три́дцать оди́н год. The question: Ско́лько тебе́ лет? (Ско́лько вам лет? to be polite).",
        "The last word of the number chooses the form: 1 → год; 2, 3, 4 → го́да; 5–9 and 0 → лет. The teens 11–14 always take лет.",
        "Arabic does something similar — ثلاث سنوات but عشرون سنة: the number decides the form of the noun.",
      ],
      ar: [
        "لذكر عمر شخص ضع الشخص في حالة المستفيد، ثم العدد، ثم год / го́да / лет: Мне два́дцать пять лет. Ему́ три́дцать оди́н год. والسؤال: Ско́лько тебе́ лет؟ (وبصيغة الاحترام: Ско́лько вам лет؟).",
        "آخر كلمة في العدد هي التي تحدّد الصيغة: ١ ← год؛ ٢، ٣، ٤ ← го́да؛ ٥–٩ و٠ ← лет. أمّا الأعداد من ١١ إلى ١٤ فتأخذ دائمًا лет.",
        "والعربية تفعل شيئًا مشابهًا: نقول «ثلاث سنوات» لكن «عشرون سنة»؛ فالعدد هو الذي يحدّد صيغة المعدود.",
      ],
      tables: [
        {
          caption: { en: "год, го́да or лет?", ar: "год أم го́да أم лет؟" },
          head: ["The number ends in · آخر العدد", "Form · الصيغة", "Example · مثال"],
          rows: [
            ["1 (21, 31, 41…)", "год", "Ему́ два́дцать оди́н год."],
            ["2, 3, 4 (22, 33, 44…)", "го́да", "Ей три́дцать два го́да."],
            ["5–9, 0, 11–14", "лет", "Мне два́дцать пять лет."],
          ],
        },
      ],
      examples: [
        { ru: "— Ско́лько вам лет? — Мне со́рок оди́н год.", en: "— How old are you? — I'm forty-one.", ar: "— كم عمر حضرتك؟ — عمري واحد وأربعون عامًا." },
        { ru: "Моя́ сестра́ ма́ленькая: ей четы́ре го́да.", en: "My sister is little: she's four.", ar: "أختي صغيرة: عمرها أربع سنوات." },
        { ru: "Мой па́па инжене́р. Ему́ пятьдеся́т лет.", en: "My dad is an engineer. He's fifty.", ar: "أبي مهندس، وعمره خمسون عامًا." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Хо́лодно, но ве́село", en: "Cold, but fun", ar: "بارد، لكنه ممتع" },
    setting: {
      en: "A cold autumn evening in Moscow. Ahmed visits Anna and her brother Maxim at home. Maxim is watching football on TV.",
      ar: "مساء خريفي بارد في موسكو. أحمد يزور آنا وأخاها مكسيم في البيت، ومكسيم يشاهد مباراة كرة قدم على التلفاز.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Приве́т, Ахме́д! Тебе́ хо́лодно?", en: "Hi, Ahmed! Are you cold?", ar: "مرحبًا يا أحمد! هل تشعر بالبرد؟" },
      {
        who: "A", name: "Ахме́д", ru: "О́чень! В Каи́ре сейча́с тепло́, а в Москве́ уже́ хо́лодно.",
        en: "Very! It's warm in Cairo now, but in Moscow it's already cold.", ar: "جدًّا! الجو الآن دافئ في القاهرة، أمّا في موسكو فقد صار باردًا.",
      },
      { who: "B", name: "А́нна", ru: "Вот чай. Тебе́ нра́вится ру́сский чай?", en: "Here's some tea. Do you like Russian tea?", ar: "تفضّل الشاي. هل يعجبك الشاي الروسي؟" },
      {
        who: "A", name: "Ахме́д", ru: "Да, о́чень нра́вится! Макси́м, что ты смо́тришь? Футбо́л?",
        en: "Yes, I like it a lot! Maxim, what are you watching? Football?", ar: "نعم، يعجبني كثيرًا! مكسيم، ماذا تشاهد؟ كرة قدم؟",
      },
      { who: "A", name: "Макси́м", ru: "Да! А тебе́ нра́вится футбо́л?", en: "Yes! And do you like football?", ar: "نعم! وهل تعجبك كرة القدم؟" },
      { who: "A", name: "Ахме́д", ru: "Да, я люблю́ футбо́л. А тебе́, А́нна?", en: "Yes, I love football. And you, Anna?", ar: "نعم، أحبّ كرة القدم. وأنتِ يا آنا؟" },
      {
        who: "B", name: "А́нна", ru: "А мне ску́чно. Мне нра́вится кино́, а не футбо́л.",
        en: "It bores me. I like films, not football.", ar: "أمّا أنا فأشعر بالملل. تعجبني السينما، لا كرة القدم.",
      },
      {
        who: "A", name: "Макси́м", ru: "Ей два́дцать два го́да, а она́ смо́трит мультфи́льмы!",
        en: "She's twenty-two, and she watches cartoons!", ar: "عمرها اثنان وعشرون عامًا، وما زالت تشاهد الرسوم المتحركة!",
      },
      {
        who: "B", name: "А́нна", ru: "А ему́ три́дцать оди́н год, и он смо́трит футбо́л ка́ждый день! Ахме́д, а ско́лько тебе́ лет?",
        en: "And he's thirty-one, and he watches football every day! Ahmed, how old are you?",
        ar: "وهو عمره واحد وثلاثون عامًا، ويشاهد كرة القدم كل يوم! وأنت يا أحمد، كم عمرك؟",
      },
      {
        who: "A", name: "Ахме́д", ru: "Мне два́дцать пять лет, и мне нра́вится всё: и футбо́л, и мультфи́льмы!",
        en: "I'm twenty-five, and I like everything: football and cartoons!", ar: "عمري خمسة وعشرون عامًا، ويعجبني كل شيء: كرة القدم والرسوم المتحركة معًا!",
      },
      { who: "A", name: "Макси́м", ru: "Ахме́д, хо́чешь ко́фе?", en: "Ahmed, would you like a coffee?", ar: "أحمد، هل تريد قهوة؟" },
      {
        who: "A", name: "Ахме́д", ru: "Нет, спаси́бо. Ве́чером мне нельзя́ пить ко́фе: за́втра мне ну́жно ра́но встава́ть.",
        en: "No, thanks. I mustn't drink coffee in the evening: tomorrow I need to get up early.",
        ar: "لا، شكرًا. لا يجوز لي أن أشرب القهوة مساءً، فغدًا عليّ أن أستيقظ مبكرًا.",
      },
    ],
  },
  pronunciation: {
    title: { en: "Not as it is written: -тся, чн and гк", ar: "لا تُنطق كما تُكتب: -тся و чн و гк" },
    en: [
      "Some spellings hide a different sound. The endings -тся and -ться both sound like 'tsa': нра́вится and нра́виться sound the same — 'nrAvitsa'.",
      "In ску́чно the letters чн are said like шн — 'skUshna'. In легко́ the г sounds like х — 'likhkO'.",
      "Unstressed о is still 'a': хо́лодно sounds 'khOladna', and in тепло́ the unstressed е is a short 'i' — 'tiplO'.",
    ],
    ar: [
      "بعض الحروف المكتوبة تخفي صوتًا مختلفًا. النهايتان -тся و -ться تُنطقان كلتاهما «tsa»: كلمتا нра́вится و нра́виться تُنطقان بالطريقة نفسها «nrAvitsa».",
      "في ску́чно يُنطق الحرفان чн مثل шн: «skUshna». وفي легко́ يُنطق г مثل х: «likhkO».",
      "وحرف о غير المنبور يبقى «a»: хо́лодно تُنطق «khOladna»، وفي тепло́ يُنطق е غير المنبور «i» قصيرة: «tiplO».",
    ],
    drills: [
      { ru: "Мне нра́вится футбо́л.", say: "mnye nrAvitsa futbOl.", focus: { en: "-тся sounds 'tsa'.", ar: "-тся تُنطق «tsa»." } },
      { ru: "Им нра́вятся фи́льмы.", say: "im nrAvyatsa fIl'my.", focus: { en: "The same 'tsa' in the plural нра́вятся.", ar: "الصوت نفسه «tsa» في صيغة الجمع нра́вятся." } },
      { ru: "Мне ску́чно.", say: "mnye skUshna.", focus: { en: "чн sounds 'sh': skUshna.", ar: "чн تُنطق «sh»: skUshna." } },
      { ru: "Э́то легко́!", say: "Eta likhkO!", focus: { en: "г before к sounds like х.", ar: "г قبل к تُنطق مثل х." } },
      {
        ru: "Сего́дня хо́лодно.", say: "sivOdnya khOladna.",
        focus: { en: "Both unstressed о in хо́лодно sound 'a'.", ar: "حرفا о غير المنبورين في хо́лодно يُنطقان «a»." },
      },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the correct sentence: 'I like films.'", ar: "اختر الجملة الصحيحة: «تعجبني الأفلام»." },
      options: ["Мне нра́вится фи́льмы.", "Мне нра́вятся фи́льмы.", "Я нра́вятся фи́льмы."],
      answer: 1,
      why: {
        en: "фи́льмы is plural, so the verb is нра́вятся; the person is in the dative: мне.",
        ar: "كلمة фи́льмы جمع، لذلك يأتي الفعل нра́вятся، والشخص في حالة المستفيد: мне.",
      },
    },
    {
      kind: "choice",
      prompt: { en: "What is the dative of она́?", ar: "ما صيغة она́ في حالة المستفيد؟" },
      options: ["ей", "её", "ему́", "им"],
      answer: 0,
      why: {
        en: "она́ → ей: Ей хо́лодно. её is 'her' as a direct object or the possessive 'her'.",
        ar: "она́ ← ей: Ей хо́лодно. أمّا её فهي ضمير المفعول به «ها» أو ضمير الملكية «ـها».",
      },
    },
    {
      kind: "choice",
      prompt: { en: "Your friend is 22. Complete: Ей два́дцать два…", ar: "عمر صديقتك ٢٢ عامًا. أكمل: Ей два́дцать два…" },
      options: ["лет", "год", "го́да"],
      answer: 2,
      why: { en: "After 2, 3 and 4 use го́да.", ar: "بعد ٢ و٣ و٤ نستخدم го́да." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: I'm cold.", ar: "أكمل: أشعر بالبرد." },
      ru: "___ хо́лодно.",
      answers: ["Мне"],
      why: { en: "The person who feels cold is in the dative: мне.", ar: "الشخص الذي يشعر بالبرد يأتي في حالة المستفيد: мне." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: He is thirty-one.", ar: "أكمل: عمره واحد وثلاثون عامًا." },
      ru: "Ему́ три́дцать оди́н ___.",
      answers: ["год"],
      why: { en: "A number ending in оди́н takes год.", ar: "العدد المنتهي بـ оди́н يأخذ год." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Do you like Moscow? (formal)", ar: "أكمل: هل تعجب حضرتك موسكو؟" },
      ru: "Вам ___ Москва́?",
      answers: ["нра́вится"],
      why: { en: "Москва́ is one thing, so нра́вится.", ar: "Москва́ شيء واحد، لذلك نقول нра́вится." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Tomorrow I need to work.", ar: "أكمل: غدًا عليّ أن أعمل." },
      ru: "За́втра мне ___ рабо́тать.",
      answers: ["ну́жно"],
      why: { en: "ну́жно + infinitive = need to do something.", ar: "ну́жно + المصدر = عليّ أن أفعل شيئًا." },
    },
    {
      kind: "order",
      prompt: { en: "Build the question: How old are you? (informal)", ar: "كوّن السؤال: كم عمرك؟ (غير رسمي)" },
      tokens: ["лет", "тебе́", "Ско́лько"],
      answers: ["Ско́лько тебе́ лет?"],
      why: { en: "Ско́лько + the person in the dative + лет.", ar: "Ско́лько + الشخص في حالة المستفيد + лет." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: We don't like football.", ar: "كوّن الجملة: لا تعجبنا كرة القدم." },
      tokens: ["не", "футбо́л", "Нам", "нра́вится"],
      answers: ["Нам не нра́вится футбо́л.", "Футбо́л нам не нра́вится."],
      why: { en: "не goes right before нра́вится.", ar: "توضع не مباشرة قبل нра́вится." },
    },
    {
      kind: "translate",
      prompt: { en: "I'm bored.", ar: "أشعر بالملل." },
      answers: ["Мне ску́чно."],
      why: { en: "Мне ску́чно — Я ску́чный would mean 'I am boring'!", ar: "Мне ску́чно، أمّا Я ску́чный فمعناها «أنا شخص مملّ»!" },
    },
    {
      kind: "translate",
      prompt: { en: "You can't eat here.", ar: "لا يجوز الأكل هنا." },
      answers: ["Здесь нельзя́ есть.", "Тут нельзя́ есть.", "Здесь есть нельзя́.", "Тут есть нельзя́."],
      why: { en: "нельзя́ + infinitive with no person states a general rule.", ar: "нельзя́ + المصدر من دون ذكر شخص تعبّر عن قاعدة عامة." },
    },
    {
      kind: "translate",
      prompt: { en: "Do you like Russian films? (informal)", ar: "هل تعجبك الأفلام الروسية؟ (غير رسمي)" },
      answers: ["Тебе́ нра́вятся ру́сские фи́льмы?", "Ру́сские фи́льмы тебе́ нра́вятся?", "Тебе́ ру́сские фи́льмы нра́вятся?"],
      why: { en: "фи́льмы is plural: нра́вятся.", ar: "фи́льмы جمع: нра́вятся." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. How old is the person?", ar: "استمع. كم عمر الشخص؟" },
      ru: "Мне два́дцать пять лет.",
      listen: true,
      options: ["22 · ٢٢", "25 · ٢٥", "35 · ٣٥"],
      answer: 1,
      why: { en: "два́дцать пять = 25.", ar: "два́дцать пять تعني خمسة وعشرين (٢٥)." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is the problem?", ar: "استمع. ما المشكلة؟" },
      ru: "Ей хо́лодно.",
      listen: true,
      options: ["She is cold. · هي تشعر بالبرد.", "He is cold. · هو يشعر بالبرد.", "She is bored. · هي تشعر بالملل."],
      answer: 0,
      why: { en: "ей = to her (she); хо́лодно = cold.", ar: "ей تعني «لها» (هي)، و хо́лодно تعني «بارد»." },
    },
  ],
  topics: ["dative", "numbers"],
  search: ["Russian dative case pronouns мне нравится", "Russian мне нужно нельзя можно explained", "how to say your age in Russian год года лет"],
  speaking: {
    scenario: {
      en: "At a café with a new Russian friend. Talk about what you like and don't like — sport, films, food and cities — and what is easy or hard for you in Moscow. Then ask how old your friend is and say how old you and two people in your family are.",
      ar: "في مقهى مع صديق روسي جديد. تحدّث عمّا يعجبك وما لا يعجبك — الرياضة والأفلام والطعام والمدن — وعمّا هو سهل أو صعب عليك في موسكو. ثم اسأل صديقك عن عمره، وقل كم عمرك وعمر شخصين من عائلتك.",
    },
    tutorBrief:
      "Play Maxim (Максим), Anna's brother, a friendly 31-year-old programmer from Moscow, chatting with the learner in a café. Ask what they like and don't like (sport, football, films, food, cities) with тебе нравится / нравятся, what is hard or easy for them in Moscow (Тебе трудно? Тебе холодно?), and how old they and their family members are (Сколько тебе лет? У тебя есть брат? Сколько ему лет?). Keep to the dative pronouns мне, тебе, ему, ей, нам, вам, им, the words нравиться, нужно, можно, нельзя, холодно, тепло, скучно, весело, трудно, легко, спорт, футбол, кино and numbers up to 59; do not use nouns in the dative yet. Correct gently: Я нравлюсь футбол → Мне нравится футбол; Я скучный → Мне скучно; год / года / лет after numbers. Finish by naming two things you both like.",
    prompts: [
      { ru: "Мне нра́вится футбо́л, а кино́ мне не нра́вится.", en: "I like football, but I don't like the cinema.", ar: "تعجبني كرة القدم، أمّا السينما فلا تعجبني." },
      { ru: "Мне нра́вятся ру́сские пе́сни.", en: "I like Russian songs.", ar: "تعجبني الأغاني الروسية." },
      { ru: "В Москве́ мне хо́лодно, но ве́село.", en: "In Moscow I'm cold, but I'm having fun.", ar: "أشعر بالبرد في موسكو، لكنّني مستمتع." },
      { ru: "Ско́лько тебе́ лет?", en: "How old are you?", ar: "كم عمرك؟" },
      { ru: "У меня́ есть брат. Ему́ три́дцать лет.", en: "I have a brother. He is thirty.", ar: "لديّ أخ، وعمره ثلاثون عامًا." },
    ],
  },
  journal: {
    en: "Write 5–8 sentences: three things you like and one you don't (Мне нра́вится… / Мне не нра́вится…), what is easy and what is hard for you in Russian, one thing you need to do this week (Мне ну́жно…), and how old you and two family members are (Мне… лет. У меня́ есть сестра́. Ей… лет.).",
    ar: "اكتب من ٥ إلى ٨ جمل: ثلاثة أشياء تعجبك وشيئًا لا يعجبك (Мне нра́вится… / Мне не нра́вится…)، وما هو سهل وما هو صعب عليك في الروسية، وشيئًا عليك فعله هذا الأسبوع (Мне ну́жно…)، وكم عمرك وعمر فردين من عائلتك (Мне… лет. У меня́ есть сестра́. Ей… лет.).",
  },
  culture: {
    en: "Between adults who have just met, Ско́лько вам лет? can sound too personal in Russia, especially to a woman; among students and friends it is a normal question. Round birthdays such as 30, 40 or 50 are called a юбиле́й and are usually celebrated with a big party.",
    ar: "بين البالغين الذين تعارفوا للتوّ قد يبدو السؤال Ско́лько вам лет؟ شخصيًا أكثر من اللازم في روسيا، خاصةً إذا وُجّه إلى امرأة؛ أمّا بين الطلاب والأصدقاء فهو سؤال عادي. وأعياد الميلاد التي تُتمّ عقدًا كاملًا، مثل الثلاثين والأربعين والخمسين، تُسمّى юбиле́й، ويُحتفَل بها عادةً بحفلة كبيرة.",
  },
};

const DAY_37: Day = {
  n: 37,
  week: 6,
  kind: "lesson",
  title: { ru: "Позвони́ мне!", en: "Call me! The dative 2", ar: "اتصل بي! حالة المستفيد (٢)" },
  goals: [
    {
      en: "Put nouns and names into the dative: бра́ту, сестре́, Ива́ну, А́нне.",
      ar: "أن تضع الأسماء في حالة المستفيد: бра́ту، сестре́، Ива́ну، А́нне.",
    },
    {
      en: "Use the verbs that take the dative: звони́ть, дари́ть, дава́ть, помога́ть, отвеча́ть, сове́товать, пока́зывать, объясня́ть, обеща́ть.",
      ar: "أن تستخدم الأفعال التي تأخذ حالة المستفيد: звони́ть، дари́ть، дава́ть، помога́ть، отвеча́ть، сове́товать، пока́зывать، объясня́ть، обеща́ть.",
    },
    {
      en: "Say whom you are going to see with к + dative, and plan birthday presents.",
      ar: "أن تقول إلى مَن تذهب باستخدام к + حالة المستفيد، وأن تخطّط لهدايا عيد ميلاد.",
    },
  ],
  words: [
    {
      id: "d37-01", ru: "дава́ть", say: "davAt'", en: "to give (imperfective: often, in general)", ar: "يعطي (فعل غير تام: عادةً أو بشكل متكرر)", pos: "verb",
      forms: "даю́, даёшь; perfective дать",
      ex: { ru: "Ба́бушка всегда́ даёт мне я́блоко.", en: "Grandma always gives me an apple.", ar: "جدّتي تعطيني دائمًا تفاحة." },
    },
    {
      id: "d37-02", ru: "дать", say: "dat'", en: "to give (perfective: once)", ar: "يعطي (فعل تام: مرة واحدة)", pos: "verb",
      forms: "дам, дашь; past дал, дала́",
      ex: { ru: "Па́па дал мне де́ньги.", en: "Dad gave me money.", ar: "أعطاني أبي نقودًا." },
      note: {
        en: "Irregular. You already know its command form: Да́йте, пожа́луйста…",
        ar: "فعل شاذّ، وأنت تعرف صيغة الأمر منه: Да́йте, пожа́луйста…",
      },
    },
    {
      id: "d37-03", ru: "помога́ть", say: "pamagAt'", en: "to help (+ dative)", ar: "يساعد", pos: "verb",
      forms: "помога́ю, помога́ешь; perfective помо́чь",
      ex: { ru: "Я помога́ю ма́ме.", en: "I help my mum.", ar: "أساعد أمّي." },
      note: {
        en: "In Russian you help TO someone: помога́ть бра́ту, not бра́та.",
        ar: "في الروسية تساعد «لِـ» شخص: помога́ть бра́ту وليس бра́та.",
      },
    },
    {
      id: "d37-04", ru: "отвеча́ть", say: "atvichAt'", en: "to answer, to reply (to someone: + dative)", ar: "يجيب، يردّ على", pos: "verb",
      forms: "отвеча́ю, отвеча́ешь; perfective отве́тить",
      ex: { ru: "Почему́ ты мне не отвеча́ешь?", en: "Why aren't you answering me?", ar: "لماذا لا تردّ عليّ؟" },
    },
    {
      id: "d37-05", ru: "сове́товать", say: "savyEtavat'", en: "to advise, to recommend (+ dative)", ar: "ينصح", pos: "verb",
      forms: "сове́тую, сове́туешь",
      ex: { ru: "Что ты мне сове́туешь?", en: "What do you advise me?", ar: "بماذا تنصحني؟" },
      note: {
        en: "Verbs in -овать change -ова- to -у-: сове́тую, сове́туешь.",
        ar: "في الأفعال المنتهية بـ -овать تتحوّل -ова- إلى -у-: сове́тую، сове́туешь.",
      },
    },
    {
      id: "d37-06", ru: "дари́ть", say: "darIt'", en: "to give (as a present)", ar: "يُهدي", pos: "verb",
      forms: "дарю́, да́ришь; perfective подари́ть",
      ex: { ru: "Я ча́сто дарю́ дру́гу кни́ги.", en: "I often give my friend books.", ar: "كثيرًا ما أُهدي صديقي كتبًا." },
    },
    {
      id: "d37-07", ru: "пока́зывать", say: "pakAzyvat'", en: "to show (+ dative)", ar: "يُري، يعرض على", pos: "verb",
      forms: "пока́зываю, пока́зываешь; perfective показа́ть",
      ex: { ru: "А́нна пока́зывает мне Москву́.", en: "Anna is showing me Moscow.", ar: "آنا تُريني موسكو." },
    },
    {
      id: "d37-08", ru: "объясня́ть", say: "ab'yisnyAt'", en: "to explain (+ dative)", ar: "يشرح", pos: "verb",
      forms: "объясня́ю, объясня́ешь; perfective объясни́ть",
      ex: { ru: "О́льга Петро́вна объясня́ет нам но́вые слова́.", en: "Olga Petrovna explains new words to us.", ar: "أولغا بتروفنا تشرح لنا الكلمات الجديدة." },
    },
    {
      id: "d37-09", ru: "обеща́ть", say: "abishchAt'", en: "to promise (+ dative)", ar: "يَعِد", pos: "verb",
      forms: "обеща́ю, обеща́ешь",
      ex: { ru: "Я обеща́ю тебе́ позвони́ть.", en: "I promise to call you.", ar: "أعدك بأن أتصل بك." },
    },
    {
      id: "d37-10", ru: "сообще́ние", say: "saapshchEniye", en: "(text) message", ar: "رسالة (نصّية)", pos: "noun", g: "n",
      forms: "мн. ч. сообще́ния",
      ex: { ru: "Я написа́л тебе́ сообще́ние.", en: "I wrote you a message.", ar: "كتبتُ لك رسالة." },
    },
    {
      id: "d37-11", ru: "к", say: "k", en: "to, towards (a person: + dative)", ar: "إلى (شخص)", pos: "prep",
      ex: { ru: "Мне ну́жно к врачу́.", en: "I need to go to the doctor.", ar: "عليّ أن أذهب إلى الطبيب." },
      note: { en: "Before мне it becomes ко: ко мне.", ar: "قبل мне تصبح ко: ко мне." },
    },
    {
      id: "d37-12", ru: "по телефо́ну", say: "pa tilifOnu", en: "on the phone, by phone", ar: "بالهاتف، عبر الهاتف", pos: "phrase",
      ex: { ru: "Мы ча́сто говори́м по телефо́ну.", en: "We often talk on the phone.", ar: "كثيرًا ما نتحدّث بالهاتف." },
    },
    {
      id: "d37-13", ru: "день рожде́ния", say: "dyen' razhdyEniya", en: "birthday", ar: "عيد الميلاد", pos: "noun", g: "m",
      forms: "на день рожде́ния",
      ex: { ru: "У меня́ за́втра день рожде́ния!", en: "It's my birthday tomorrow!", ar: "غدًا عيد ميلادي!" },
    },
    {
      id: "d37-14", ru: "подари́ть", say: "padarIt'", en: "to give (a present) — perfective", ar: "يُهدي (فعل تام)", pos: "verb",
      forms: "подарю́, пода́ришь; past подари́л",
      ex: { ru: "Брат подари́л мне кни́гу.", en: "My brother gave me a book.", ar: "أهداني أخي كتابًا." },
    },
    {
      id: "d37-15", ru: "кому́", say: "kamU", en: "to whom? for whom? (the dative of кто)", ar: "لِمَن؟ (кто في حالة المستفيد)", pos: "pron",
      ex: { ru: "Кому́ ты звони́шь?", en: "Who are you calling?", ar: "بمن تتصل؟" },
    },
    {
      id: "d37-16", ru: "Что ему́ подари́ть?", say: "shto yimU padarIt'?", en: "What shall we give him (as a present)?", ar: "ماذا نهديه؟", pos: "phrase",
      note: {
        en: "A question with an infinitive asks what to do: Что ей подари́ть? Что мне сказа́ть?",
        ar: "السؤال بالمصدر يعني «ماذا نفعل؟»: Что ей подари́ть؟ Что мне сказа́ть؟",
      },
    },
    {
      id: "d37-17", ru: "Тебе́ помо́чь?", say: "tibyE pamOch'?", en: "Can I help you? Shall I help?", ar: "هل أساعدك؟", pos: "phrase",
      note: { en: "Formal: Вам помо́чь?", ar: "بصيغة الاحترام: Вам помо́чь؟" },
    },
    {
      id: "d37-18", ru: "Позвони́ мне!", say: "pazvanI mnye!", en: "Call me!", ar: "اتصل بي!", pos: "phrase",
      note: { en: "Formal, or to several people: Позвони́те мне!", ar: "بصيغة الاحترام أو للجمع: Позвони́те мне!" },
    },
    {
      id: "d37-19", ru: "С днём рожде́ния!", say: "z dnyom razhdyEniya!", en: "Happy birthday!", ar: "عيد ميلاد سعيد!", pos: "phrase",
      note: { en: "The с sounds like 'z' before the voiced д.", ar: "يُنطق с هنا «z» لأنه قبل д المجهور." },
    },
  ],
  grammar: [
    {
      id: "d37-g1",
      title: { en: "Nouns in the dative: бра́ту, сестре́", ar: "الأسماء في حالة المستفيد: бра́ту، сестре́" },
      en: [
        "The dative answers кому́? — 'to whom? for whom?'. Masculine and neuter nouns take -у, or -ю when the word ends in -ь, -й or -е: брат → бра́ту, Ива́н → Ива́ну, врач → врачу́, окно́ → окну́, but учи́тель → учи́телю, мо́ре → мо́рю.",
        "Nouns in -а / -я take -е, whether they are feminine or men's names: сестра́ → сестре́, ма́ма → ма́ме, А́нна → А́нне, па́па → па́пе, де́душка → де́душке. Nouns in -ия take -ии (Мари́я → Мари́и), feminine nouns in -ь take -и (тетра́дь → тетра́ди), and мать, дочь become ма́тери, до́чери.",
        "In the plural the ending is -ам / -ям: роди́телям, студе́нтам, де́тям, лю́дям.",
      ],
      ar: [
        "حالة المستفيد تجيب عن السؤال кому́؟ أي «لِمَن؟». الأسماء المذكّرة والمحايدة تأخذ -у، أو -ю إذا انتهت الكلمة بـ -ь أو -й أو -е: брат ← бра́ту، Ива́н ← Ива́ну، врач ← врачу́، окно́ ← окну́، لكن учи́тель ← учи́телю، мо́ре ← мо́рю.",
        "الأسماء المنتهية بـ -а / -я تأخذ -е، سواء كانت مؤنّثة أو أسماء رجال: сестра́ ← сестре́، ма́ма ← ма́ме، А́нна ← А́нне، па́па ← па́пе، де́душка ← де́душке. والأسماء المنتهية بـ -ия تأخذ -ии (Мари́я ← Мари́и)، والأسماء المؤنّثة المنتهية بـ -ь تأخذ -и (тетра́дь ← тетра́ди)، وتصبح мать و дочь: ма́тери و до́чери.",
        "وفي الجمع تكون النهاية -ам / -ям: роди́телям، студе́нтам، де́тям، лю́дям.",
      ],
      tables: [
        {
          caption: { en: "The dative, singular and plural", ar: "حالة المستفيد في المفرد والجمع" },
          head: ["Nominative · حالة الرفع", "Dative · حالة المستفيد", "Ending · النهاية"],
          rows: [
            ["брат, Ива́н", "бра́ту, Ива́ну", "-у"],
            ["учи́тель, Серге́й", "учи́телю, Серге́ю", "-ю"],
            ["окно́, мо́ре", "окну́, мо́рю", "-у / -ю"],
            ["сестра́, па́па", "сестре́, па́пе", "-е"],
            ["Та́ня, дя́дя", "Та́не, дя́де", "-е"],
            ["Мари́я, тетра́дь", "Мари́и, тетра́ди", "-и"],
            ["роди́тели, де́ти", "роди́телям, де́тям", "-ам / -ям"],
          ],
        },
      ],
      examples: [
        { ru: "Я звоню́ бра́ту.", en: "I'm calling my brother.", ar: "أتّصل بأخي." },
        { ru: "Ма́ма пи́шет сообще́ние сестре́.", en: "Mum is writing a message to my sister.", ar: "أمّي تكتب رسالة لأختي." },
        { ru: "Мы помога́ем роди́телям.", en: "We help our parents.", ar: "نحن نساعد والدينا." },
      ],
    },
    {
      id: "d37-g2",
      title: { en: "Verbs with the dative: кому́? что?", ar: "أفعال تأخذ حالة المستفيد: кому́؟ что؟" },
      en: [
        "Verbs of giving and communicating have a receiver in the dative (кому́?) and often a thing in the accusative (что?): Я дарю́ ма́ме кни́гу. А́нна пока́зывает Ахме́ду Москву́.",
        "The trap: some verbs take the dative where English uses a direct object: звони́ть бра́ту (to call my brother), помога́ть ма́ме (to help Mum), отвеча́ть учи́телю (to answer the teacher), сове́товать дру́гу (to advise a friend).",
        "Most come in aspect pairs: дава́ть — дать, дари́ть — подари́ть, звони́ть — позвони́ть, пока́зывать — показа́ть, объясня́ть — объясни́ть, отвеча́ть — отве́тить, помога́ть — помо́чь. The imperfective is for habits and processes, the perfective for one result: Вчера́ я подари́л бра́ту ку́ртку.",
      ],
      ar: [
        "أفعال الإعطاء والتواصل لها مستقبِل في حالة المستفيد (кому́؟) وغالبًا شيء في حالة المفعول به (что؟): Я дарю́ ма́ме кни́гу. А́нна пока́зывает Ахме́ду Москву́.",
        "انتبه: بعض الأفعال تأخذ حالة المستفيد حيث تستخدم الإنجليزية مفعولًا به مباشرًا: звони́ть бра́ту (يتصل بأخيه)، помога́ть ма́ме (يساعد أمّه)، отвеча́ть учи́телю (يجيب المعلّم)، сове́товать дру́гу (ينصح صديقه).",
        "ومعظمها يأتي في أزواج: дава́ть — дать، дари́ть — подари́ть، звони́ть — позвони́ть، пока́зывать — показа́ть، объясня́ть — объясни́ть، отвеча́ть — отве́тить، помога́ть — помо́чь. الفعل غير التام للعادة والعملية، والفعل التام لنتيجة واحدة: Вчера́ я подари́л бра́ту ку́ртку.",
      ],
      tables: [
        {
          caption: { en: "Who gives what to whom", ar: "مَن يعطي ماذا ولِمَن" },
          head: ["Verb · الفعل", "кому́? · لِمَن؟", "что? · ماذا؟"],
          rows: [
            ["дари́ть / подари́ть", "сестре́", "пода́рок"],
            ["дава́ть / дать", "дру́гу", "а́дрес"],
            ["пока́зывать / показа́ть", "го́стю", "го́род"],
            ["объясня́ть / объясни́ть", "студе́нтам", "сло́во"],
            ["звони́ть / позвони́ть", "ба́бушке", "—"],
            ["помога́ть / помо́чь", "па́пе", "—"],
          ],
        },
      ],
      examples: [
        { ru: "Я дарю́ ма́ме кни́гу.", en: "I'm giving Mum a book.", ar: "أُهدي أمّي كتابًا." },
        { ru: "Позвони́ Ива́ну, пожа́луйста.", en: "Call Ivan, please.", ar: "اتصل بإيفان من فضلك." },
        { ru: "Учи́тель отвеча́ет студе́нту.", en: "The teacher answers the student.", ar: "المعلّم يجيب الطالب." },
      ],
    },
    {
      id: "d37-g3",
      title: { en: "к + dative: going to see someone", ar: "к + حالة المستفيد: الذهاب إلى شخص" },
      en: [
        "к + dative means 'to (a person)' or 'to someone's place': к врачу́ (to the doctor), к дру́гу (to a friend's), к ба́бушке (to Grandma's), к нам (to our place). Before мне it becomes ко: ко мне.",
        "With verbs of motion (day 39) it means going to see someone. Even without a verb it works after ну́жно, мо́жно and хоте́ть: Мне ну́жно к врачу́. Мо́жно к вам? — the polite question when you knock on a door.",
        "Use к for people and в / на for places: к врачу́, but в больни́цу.",
      ],
      ar: [
        "к + حالة المستفيد تعني «إلى (شخص)» أو «إلى بيت شخص»: к врачу́ (إلى الطبيب)، к дру́гу (إلى صديقي)، к ба́бушке (إلى جدّتي)، к нам (إلينا، إلى بيتنا). وقبل мне تصبح ко: ко мне.",
        "مع أفعال الحركة (اليوم ٣٩) تعني الذهاب لزيارة شخص. وحتى بدون فعل يمكن استخدامها بعد ну́жно و мо́жно و хоте́ть: Мне ну́жно к врачу́. Мо́жно к вам؟ — وهو السؤال المهذّب عندما تطرق الباب.",
        "استخدم к للأشخاص، و в / на للأماكن: к врачу́، لكن в больни́цу.",
      ],
      examples: [
        { ru: "За́втра нам ну́жно к ба́бушке.", en: "Tomorrow we need to go to Grandma's.", ar: "غدًا علينا أن نذهب إلى جدّتنا." },
        { ru: "Мо́жно к вам?", en: "May I come in? (literally: may I (come) to you?)", ar: "هل يمكنني الدخول؟ (حرفيًا: هل يمكن (المجيء) إليكم؟)" },
        { ru: "В суббо́ту мы приглаша́ем Ива́на к нам.", en: "On Saturday we're inviting Ivan to our place.", ar: "يوم السبت ندعو إيفان إلى بيتنا." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Что ему́ подари́ть?", en: "What shall we give him?", ar: "ماذا نهديه؟" },
    setting: {
      en: "Anna phones Ahmed. Her brother Maxim has a birthday on Saturday, and she is planning presents and a party — but Maxim must not know.",
      ar: "آنا تتصل بأحمد هاتفيًا. عيد ميلاد أخيها مكسيم يوم السبت، وهي تخطّط للهدايا وللحفلة، لكن يجب ألّا يعرف مكسيم شيئًا.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, приве́т! В суббо́ту у Макси́ма день рожде́ния.", en: "Hi, Ahmed! Maxim's birthday is on Saturday.", ar: "مرحبًا يا أحمد! يوم السبت عيد ميلاد مكسيم." },
      { who: "A", name: "Ахме́д", ru: "Да? А что ему́ подари́ть?", en: "Really? So what shall we give him?", ar: "حقًّا؟ وماذا نهديه؟" },
      { who: "B", name: "А́нна", ru: "Не зна́ю. Что ты сове́туешь?", en: "I don't know. What do you suggest?", ar: "لا أعرف. بماذا تنصح؟" },
      {
        who: "A", name: "Ахме́д", ru: "Ему́ нра́вится футбо́л. Мо́жно подари́ть ему́ биле́т на футбо́л.",
        en: "He likes football. We could give him a ticket to a match.", ar: "تعجبه كرة القدم. يمكن أن نهديه تذكرة لمباراة كرة قدم.",
      },
      { who: "B", name: "А́нна", ru: "Хоро́шая иде́я! А я хочу́ подари́ть ему́ ку́ртку.", en: "Good idea! And I want to give him a jacket.", ar: "فكرة جيدة! وأنا أريد أن أهديه سترة." },
      { who: "A", name: "Ахме́д", ru: "Тебе́ помо́чь? Кому́ ну́жно позвони́ть?", en: "Can I help? Who do we need to call?", ar: "هل أساعدك؟ بمن يجب أن نتصل؟" },
      {
        who: "B", name: "А́нна", ru: "Позвони́ Ива́ну, пожа́луйста. Э́то друг Макси́ма. Мы приглаша́ем его́ к нам.",
        en: "Call Ivan, please. He's Maxim's friend. We're inviting him to our place.", ar: "اتصل بإيفان من فضلك، إنه صديق مكسيم. نحن ندعوه إلى بيتنا.",
      },
      { who: "A", name: "Ахме́д", ru: "Хорошо́. А ты что де́лаешь?", en: "OK. And what are you doing?", ar: "حسنًا. وماذا تفعلين أنتِ؟" },
      {
        who: "B", name: "А́нна", ru: "А я пишу́ сообще́ние ба́бушке. Она́ всегда́ да́рит Макси́му де́ньги!",
        en: "I'm writing a message to Grandma. She always gives Maxim money!", ar: "وأنا أكتب رسالة لجدّتي. هي دائمًا تُهدي مكسيم نقودًا!",
      },
      { who: "A", name: "Ахме́д", ru: "А что сказа́ть Ива́ну?", en: "And what should I tell Ivan?", ar: "وماذا أقول لإيفان؟" },
      {
        who: "B", name: "А́нна", ru: "Суббо́та, семь часо́в, у нас до́ма. Но Макси́м ничего́ не зна́ет!",
        en: "Saturday, seven o'clock, at our place. But Maxim doesn't know anything!", ar: "السبت، الساعة السابعة، في بيتنا. لكن مكسيم لا يعرف شيئًا!",
      },
      { who: "A", name: "Ахме́д", ru: "Отли́чно! Звоню́ ему́ сейча́с.", en: "Great! I'm calling him now.", ar: "ممتاز! سأتصل به الآن." },
    ],
  },
  pronunciation: {
    title: { en: "к sticks to the next word", ar: "к تلتصق بالكلمة التالية" },
    en: [
      "A one-letter preposition has no vowel, so it is pronounced together with the next word, as one word: к ма́ме sounds 'kmAmye'.",
      "It can also change its sound: before б, г, д, ж and з, к sounds like 'g' — к дру́гу is 'gdrUgu', к бра́ту is 'gbrAtu'. Before в, м, н, л and р it stays 'k': к врачу́ is 'kvrachU'.",
    ],
    ar: [
      "حرف الجر المكوّن من حرف واحد لا يحتوي على حرف صوتي، لذلك يُنطق مع الكلمة التالية كأنهما كلمة واحدة: к ма́ме تُنطق «kmAmye».",
      "وقد يتغيّر صوته أيضًا: قبل б و г و д و ж و з يُنطق к مثل «g»: к дру́гу ← «gdrUgu»، к бра́ту ← «gbrAtu». أمّا قبل в و м و н و л و р فيبقى «k»: к врачу́ ← «kvrachU».",
    ],
    drills: [
      { ru: "к ма́ме", say: "kmAmye", focus: { en: "One word: 'kmAmye'.", ar: "كلمة واحدة: «kmAmye»." } },
      { ru: "к дру́гу", say: "gdrUgu", focus: { en: "к before д sounds 'g'.", ar: "к قبل д يُنطق «g»." } },
      { ru: "к бра́ту", say: "gbrAtu", focus: { en: "к before б sounds 'g'.", ar: "к قبل б يُنطق «g»." } },
      { ru: "Мне ну́жно к врачу́.", say: "mnye nUzhna kvrachU.", focus: { en: "Before в, к stays 'k'.", ar: "قبل в يبقى к «k»." } },
      { ru: "Позвони́ мне!", say: "pazvanI mnye!", focus: { en: "Both о are unstressed: 'pazvanI'.", ar: "حرفا о غير منبورين: «pazvanI»." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the correct sentence: 'I'm calling my brother.'", ar: "اختر الجملة الصحيحة: «أتّصل بأخي»." },
      options: ["Я звоню́ бра́та.", "Я звоню́ бра́ту.", "Я звоню́ к бра́ту."],
      answer: 1,
      why: { en: "звони́ть takes the dative with no preposition: бра́ту.", ar: "الفعل звони́ть يأخذ حالة المستفيد بدون حرف جر: бра́ту." },
    },
    {
      kind: "choice",
      prompt: { en: "What is the dative of сестра́?", ar: "ما صيغة сестра́ في حالة المستفيد؟" },
      options: ["сестре́", "сестры́", "сестру́"],
      answer: 0,
      why: { en: "The ending -а becomes -е: сестре́.", ar: "النهاية -а تصبح -е: сестре́." },
    },
    {
      kind: "choice",
      prompt: { en: "Which question asks 'to whom?'", ar: "أيّ سؤال يعني «لِمَن؟»" },
      options: ["Кто?", "Где?", "Кому́?"],
      answer: 2,
      why: { en: "кому́ is the dative of кто.", ar: "кому́ هي صيغة кто في حالة المستفيد." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with ма́ма: I help my mum.", ar: "أكمل بكلمة ма́ма: أساعد أمّي." },
      ru: "Я помога́ю ___.",
      answers: ["ма́ме"],
      why: { en: "помога́ть + dative: ма́ма → ма́ме.", ar: "помога́ть + حالة المستفيد: ма́ма ← ма́ме." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with Ива́н: Call Ivan!", ar: "أكمل بكلمة Ива́н: اتصل بإيفان!" },
      ru: "Позвони́ ___!",
      answers: ["Ива́ну"],
      why: { en: "A masculine name ending in a consonant takes -у.", ar: "اسم المذكّر المنتهي بحرف ساكن يأخذ -у." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with врач: I need to see the doctor.", ar: "أكمل بكلمة врач: عليّ أن أذهب إلى الطبيب." },
      ru: "Мне ну́жно к ___.",
      answers: ["врачу́"],
      why: { en: "к + dative; in врач the stress moves to the ending: врачу́.", ar: "к + حالة المستفيد، والنبر في врач ينتقل إلى النهاية: врачу́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with сове́товать: What do you advise me?", ar: "أكمل بالفعل сове́товать: بماذا تنصحني؟" },
      ru: "Что ты мне ___?",
      answers: ["сове́туешь"],
      why: { en: "-овать verbs: сове́тую, сове́туешь.", ar: "أفعال -овать: сове́тую، сове́туешь." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with роди́тели: We help our parents.", ar: "أكمل بكلمة роди́тели: نحن نساعد والدينا." },
      ru: "Мы помога́ем ___.",
      answers: ["роди́телям"],
      why: { en: "The dative plural ends in -ам / -ям.", ar: "حالة المستفيد في الجمع تنتهي بـ -ам / -ям." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I'm giving my sister a book.", ar: "كوّن الجملة: أُهدي أختي كتابًا." },
      tokens: ["кни́гу", "Я", "сестре́", "дарю́"],
      answers: ["Я дарю́ сестре́ кни́гу.", "Я дарю́ кни́гу сестре́."],
      why: {
        en: "The receiver is in the dative (сестре́), the thing in the accusative (кни́гу).",
        ar: "المستقبِل في حالة المستفيد (сестре́)، والشيء في حالة المفعول به (кни́гу).",
      },
    },
    {
      kind: "order",
      prompt: { en: "Build the polite question: May I come in?", ar: "كوّن السؤال المهذّب: هل يمكنني الدخول؟" },
      tokens: ["вам", "Мо́жно", "к"],
      answers: ["Мо́жно к вам?", "К вам мо́жно?"],
      why: { en: "к + dative: к вам — 'to you, to your place'.", ar: "к + حالة المستفيد: к вам أي «إليكم»." },
    },
    {
      kind: "translate",
      prompt: { en: "Call me! (informal)", ar: "اتصل بي! (غير رسمي)" },
      answers: ["Позвони́ мне!", "Звони́ мне!"],
      why: { en: "позвони́ть + dative: мне.", ar: "позвони́ть + حالة المستفيد: мне." },
    },
    {
      kind: "translate",
      prompt: { en: "Happy birthday!", ar: "عيد ميلاد سعيد!" },
      answers: ["С днём рожде́ния!"],
      why: { en: "A fixed phrase: literally '(I congratulate you) on the day of birth'.", ar: "عبارة ثابتة، حرفيًا: «(أهنّئك) بيوم الميلاد»." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is Anna doing?", ar: "استمع. ماذا تفعل آنا؟" },
      ru: "Я пишу́ сообще́ние ба́бушке.",
      listen: true,
      options: [
        "She is writing a message to Grandma. · تكتب رسالة لجدّتها.",
        "Grandma is writing her a message. · جدّتها تكتب لها رسالة.",
        "She is calling Grandma. · تتصل بجدّتها.",
      ],
      answer: 0,
      why: { en: "ба́бушке is dative: the message goes TO Grandma.", ar: "ба́бушке في حالة المستفيد: الرسالة موجّهة إلى الجدّة." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is the question?", ar: "استمع. ما السؤال؟" },
      ru: "Что ему́ подари́ть?",
      listen: true,
      options: ["What does he like? · ماذا يعجبه؟", "What shall we give him? · ماذا نهديه؟", "What did he give? · ماذا أهدى؟"],
      answer: 1,
      why: { en: "ему́ = to him; подари́ть = to give as a present.", ar: "ему́ = له، و подари́ть = يُهدي." },
    },
  ],
  topics: ["dative", "phone-calls", "invitations"],
  search: ["Russian dative case nouns explained", "Russian verbs with the dative звонить помогать", "Russian birthday wishes с днём рождения"],
  speaking: {
    scenario: {
      en: "A friend's birthday is on Saturday. Plan it with Anna on the phone: decide who gives what to whom, whom you need to call to invite, and who helps with what.",
      ar: "عيد ميلاد صديقكما يوم السبت. خطّط له مع آنا عبر الهاتف: قرّرا مَن يُهدي ماذا ولِمَن، وبمن يجب أن تتصلا لدعوته، ومَن يساعد في ماذا.",
    },
    tutorBrief:
      "Play Anna (Анна) on the phone, planning a surprise birthday party for her brother Maxim on Saturday. Ask the learner what to give Maxim and the other guests (Что ему подарить? Что ты советуешь?), whom they need to call to invite (Кому нужно позвонить?) and whether they can help (Тебе помочь? Ты можешь помочь маме?). Make the learner produce nouns in the dative (брату, сестре, Ивану, Анне, маме, бабушке, родителям), the verbs дарить / подарить, давать / дать, звонить / позвонить, помогать, советовать, показывать, объяснять, обещать, and к + dative (к нам, к бабушке). Avoid the future tense: use хочу / можно / нужно + infinitive instead. Correct mistakes like звонить брата → звонить брату and помогать маму → помогать маме. End by summarising the plan: who gives what to whom.",
    prompts: [
      { ru: "Что ему́ подари́ть?", en: "What shall we give him?", ar: "ماذا نهديه؟" },
      { ru: "Я хочу́ подари́ть бра́ту ку́ртку.", en: "I want to give my brother a jacket.", ar: "أريد أن أهدي أخي سترة." },
      { ru: "Мне ну́жно позвони́ть ба́бушке.", en: "I need to call Grandma.", ar: "عليّ أن أتصل بجدّتي." },
      { ru: "Тебе́ помо́чь?", en: "Can I help you?", ar: "هل أساعدك؟" },
      { ru: "Мы приглаша́ем Ива́на к нам в суббо́ту.", en: "We're inviting Ivan to our place on Saturday.", ar: "ندعو إيفان إلى بيتنا يوم السبت." },
    ],
  },
  journal: {
    en: "Write 5–8 sentences: whose birthday comes next in your family; what you want to give three people and why they will like it (Я хочу́ подари́ть ма́ме кни́гу. Ей нра́вятся кни́ги.); whom you often call, help and write messages to.",
    ar: "اكتب من ٥ إلى ٨ جمل: عيد ميلاد مَن في عائلتك هو التالي؛ وماذا تريد أن تُهدي لثلاثة أشخاص ولماذا ستعجبهم الهدية (Я хочу́ подари́ть ма́ме кни́гу. Ей нра́вятся кни́ги.)؛ وبمن تتصل كثيرًا، ومَن تساعد، ولمن تكتب رسائل.",
  },
  culture: {
    en: "Flowers are the classic Russian birthday present, and the number matters: give an odd number (3, 5, 7), because even numbers are for funerals. Many Russians also think it is bad luck to say С днём рожде́ния! before the day itself, so wait for the birthday.",
    ar: "الزهور هي الهدية التقليدية لعيد الميلاد في روسيا، والعدد مهم: قدّم عددًا فرديًا (٣ أو ٥ أو ٧)، لأن الأعداد الزوجية تُقدَّم في الجنازات. ويعتقد كثير من الروس أيضًا أن قول С днём рожде́ния! قبل اليوم نفسه يجلب سوء الحظ، فانتظر حتى يوم الميلاد.",
  },
};

const DAY_38: Day = {
  n: 38,
  week: 6,
  kind: "lesson",
  title: { ru: "За́втра: бу́дущее вре́мя", en: "Tomorrow: the future tense", ar: "غدًا: الزمن المستقبل" },
  goals: [
    {
      en: "Talk about plans with бу́ду + imperfective infinitive: За́втра я бу́ду рабо́тать.",
      ar: "أن تتحدّث عن خططك باستخدام бу́ду + مصدر فعل غير تام: За́втра я бу́ду рабо́тать.",
    },
    {
      en: "Promise one complete result with the perfective future: я позвоню́, я сде́лаю, я куплю́.",
      ar: "أن تَعِد بنتيجة واحدة مكتملة باستخدام المستقبل التام: я позвоню́، я сде́лаю، я куплю́.",
    },
    {
      en: "Place plans in time: послеза́втра, че́рез неде́лю, на сле́дующей неде́ле, в сле́дующем году́.",
      ar: "أن تحدّد زمن خططك: послеза́втра، че́рез неде́лю، на сле́дующей неде́ле، в сле́дующем году́.",
    },
  ],
  words: [
    {
      id: "d38-01", ru: "послеза́втра", say: "paslizAftra", en: "the day after tomorrow", ar: "بعد غد", pos: "adv",
      ex: { ru: "Послеза́втра мы бу́дем до́ма.", en: "The day after tomorrow we'll be at home.", ar: "بعد غد سنكون في البيت." },
    },
    {
      id: "d38-02", ru: "ско́ро", say: "skOra", en: "soon", ar: "قريبًا", pos: "adv",
      ex: { ru: "Ско́ро кани́кулы!", en: "The holidays are coming soon!", ar: "العطلة قريبة!" },
    },
    {
      id: "d38-03", ru: "че́рез", say: "chEris", en: "in (a time from now); across, through (+ accusative)", ar: "بعد (مدّة من الآن)؛ عبر (+ حالة المفعول به)", pos: "prep",
      ex: { ru: "Фильм начина́ется че́рез час.", en: "The film starts in an hour.", ar: "يبدأ الفيلم بعد ساعة." },
      note: {
        en: "че́рез неде́лю = in a week (from now); неде́лю is the accusative.",
        ar: "че́рез неде́лю = بعد أسبوع (من الآن)، و неде́лю في حالة المفعول به.",
      },
    },
    {
      id: "d38-04", ru: "сле́дующий", say: "slyEduyushchiy", en: "next, following", ar: "التالي، القادم", pos: "adj",
      forms: "сле́дующая, сле́дующее, сле́дующие",
      ex: { ru: "В сле́дующий понеде́льник я рабо́таю.", en: "Next Monday I'm working.", ar: "يوم الاثنين القادم أعمل." },
    },
    {
      id: "d38-05", ru: "план", say: "plan", en: "plan", ar: "خطّة", pos: "noun", g: "m",
      forms: "мн. ч. пла́ны",
      ex: { ru: "У меня́ есть план!", en: "I have a plan!", ar: "لديّ خطّة!" },
    },
    {
      id: "d38-06", ru: "бу́дущее", say: "bUdushchiye", en: "the future", ar: "المستقبل", pos: "noun", g: "n",
      forms: "в бу́дущем = in the future",
      ex: { ru: "Я ду́маю о бу́дущем.", en: "I'm thinking about the future.", ar: "أفكّر في المستقبل." },
      note: {
        en: "An adjective used as a noun: бу́дущее вре́мя = the future tense.",
        ar: "صفة تُستخدم اسمًا: бу́дущее вре́мя = الزمن المستقبل.",
      },
    },
    {
      id: "d38-07", ru: "наде́яться", say: "nadyEyitsa", en: "to hope", ar: "يأمل", pos: "verb",
      forms: "наде́юсь, наде́ешься",
      ex: { ru: "Наде́юсь, за́втра бу́дет тепло́.", en: "I hope it will be warm tomorrow.", ar: "آمل أن يكون الجو دافئًا غدًا." },
    },
    {
      id: "d38-08", ru: "собира́ться", say: "sabirAtsa", en: "to be going to, to plan to (+ infinitive)", ar: "ينوي، يعتزم", pos: "verb",
      forms: "собира́юсь, собира́ешься",
      ex: { ru: "Я собира́юсь купи́ть маши́ну.", en: "I'm going to buy a car.", ar: "أنوي أن أشتري سيارة." },
    },
    {
      id: "d38-09", ru: "обяза́тельно", say: "abizAtil'na", en: "definitely, without fail", ar: "حتمًا، بالتأكيد", pos: "adv",
      ex: { ru: "Я обяза́тельно позвоню́!", en: "I'll definitely call!", ar: "سأتصل حتمًا!" },
    },
    {
      id: "d38-10", ru: "мо́жет быть", say: "mOzhyt byt'", en: "maybe, perhaps", ar: "ربّما", pos: "phrase",
      ex: { ru: "Мо́жет быть, я бу́ду до́ма.", en: "Maybe I'll be at home.", ar: "ربّما أكون في البيت." },
    },
    {
      id: "d38-11", ru: "путеше́ствовать", say: "putishEstvavat'", en: "to travel", ar: "يسافر (للسياحة)", pos: "verb",
      forms: "путеше́ствую, путеше́ствуешь",
      ex: { ru: "Мы лю́бим путеше́ствовать.", en: "We love travelling.", ar: "نحبّ السفر." },
    },
    {
      id: "d38-12", ru: "выходны́е", say: "vykhadnYye", en: "the weekend, days off", ar: "عطلة نهاية الأسبوع", pos: "noun", g: "pl",
      forms: "на выходны́х = at the weekend",
      ex: { ru: "На выходны́х мы бу́дем отдыха́ть.", en: "At the weekend we'll rest.", ar: "سنرتاح في عطلة نهاية الأسبوع." },
    },
    {
      id: "d38-13", ru: "начина́ть", say: "nachinAt'", en: "to begin, to start (imperfective)", ar: "يبدأ (فعل غير تام)", pos: "verb",
      forms: "начина́ю, начина́ешь; perfective нача́ть (начну́, начнёшь)",
      ex: { ru: "За́втра я начина́ю рабо́тать в о́фисе.", en: "Tomorrow I start working in the office.", ar: "غدًا أبدأ العمل في المكتب." },
    },
    {
      id: "d38-14", ru: "зако́нчить", say: "zakOnchit'", en: "to finish (perfective)", ar: "يُنهي (فعل تام)", pos: "verb",
      forms: "зако́нчу, зако́нчишь; imperfective зака́нчивать",
      ex: { ru: "Я зако́нчу рабо́ту в шесть часо́в.", en: "I'll finish work at six o'clock.", ar: "سأنهي العمل في الساعة السادسة." },
    },
    {
      id: "d38-15", ru: "Что ты бу́дешь де́лать?", say: "shto ty bUdish' dyElat'?", en: "What will you do? What are you going to do?", ar: "ماذا ستفعل؟", pos: "phrase",
      note: { en: "Add a time: Что ты бу́дешь де́лать в суббо́ту?", ar: "أضف زمنًا: Что ты бу́дешь де́лать в суббо́ту؟" },
    },
    {
      id: "d38-16", ru: "Каки́е у тебя́ пла́ны?", say: "kakIye u tibyA plAny?", en: "What are your plans?", ar: "ما خططك؟", pos: "phrase",
      note: {
        en: "Plans for the weekend: Каки́е у тебя́ пла́ны на выходны́е?",
        ar: "الخطط لعطلة نهاية الأسبوع: Каки́е у тебя́ пла́ны на выходны́е؟",
      },
    },
    {
      id: "d38-17", ru: "на сле́дующей неде́ле", say: "na slyEduyushchey nidyElye", en: "next week", ar: "في الأسبوع القادم", pos: "phrase",
      ex: { ru: "На сле́дующей неде́ле я бу́ду в Каи́ре.", en: "Next week I'll be in Cairo.", ar: "في الأسبوع القادم سأكون في القاهرة." },
    },
    {
      id: "d38-18", ru: "в сле́дующем году́", say: "f slyEduyushchim gadU", en: "next year", ar: "في العام القادم", pos: "phrase",
      note: { en: "году́ has a special stressed ending, like в саду́.", ar: "لكلمة году́ نهاية خاصة منبورة، مثل в саду́." },
    },
    {
      id: "d38-19", ru: "Посмо́трим.", say: "pasmOtrim.", en: "We'll see.", ar: "سنرى.", pos: "phrase",
      note: {
        en: "The perfective future of посмотре́ть, used as a polite 'maybe'.",
        ar: "المستقبل التام من посмотре́ть، ويُستخدم بمعنى «ربّما» بلطف.",
      },
    },
  ],
  grammar: [
    {
      id: "d38-g1",
      title: { en: "The imperfective future: бу́ду + infinitive", ar: "المستقبل غير التام: бу́ду + المصدر" },
      en: [
        "To talk about a future activity, process or habit without stressing the result, use the future of быть — бу́ду, бу́дешь, бу́дет, бу́дем, бу́дете, бу́дут — plus an imperfective infinitive: За́втра я бу́ду рабо́тать. Что ты бу́дешь де́лать?",
        "On its own, бу́ду means 'I will be': За́втра я бу́ду до́ма. With the dative from day 36 use бу́дет: Мне бу́дет ску́чно. — I'll be bored.",
        "The trap: бу́ду never goes with a perfective verb. Я бу́ду сде́лать is wrong — say Я бу́ду де́лать or Я сде́лаю.",
      ],
      ar: [
        "للحديث عن نشاط أو عملية أو عادة في المستقبل دون التركيز على النتيجة، استخدم مستقبل الفعل быть — бу́ду، бу́дешь، бу́дет، бу́дем، бу́дете، бу́дут — ثم مصدر فعل غير تام: За́втра я бу́ду рабо́тать. Что ты бу́дешь де́лать؟",
        "وحدها تعني бу́ду «سأكون»: За́втра я бу́ду до́ма. ومع حالة المستفيد التي تعلّمتها في اليوم ٣٦ نستخدم бу́дет: Мне бу́дет ску́чно — سأشعر بالملل.",
        "انتبه: لا تأتي бу́ду أبدًا مع فعل تام. جملة Я бу́ду сде́лать خاطئة — قل Я бу́ду де́лать أو Я сде́лаю.",
      ],
      tables: [
        {
          caption: { en: "быть in the future + infinitive", ar: "быть في المستقبل + المصدر" },
          head: ["Person · الشخص", "быть", "Example · مثال"],
          rows: [
            ["я", "бу́ду", "Я бу́ду чита́ть."],
            ["ты", "бу́дешь", "Ты бу́дешь рабо́тать?"],
            ["он / она́", "бу́дет", "Она́ бу́дет отдыха́ть."],
            ["мы", "бу́дем", "Мы бу́дем гуля́ть."],
            ["вы", "бу́дете", "Вы бу́дете смотре́ть фильм?"],
            ["они́", "бу́дут", "Они́ бу́дут до́ма."],
          ],
        },
      ],
      examples: [
        { ru: "В суббо́ту мы бу́дем гуля́ть в па́рке.", en: "On Saturday we'll go for a walk in the park.", ar: "يوم السبت سنتمشّى في الحديقة." },
        { ru: "Что вы бу́дете де́лать ве́чером?", en: "What will you do this evening?", ar: "ماذا ستفعلون مساءً؟" },
      ],
    },
    {
      id: "d38-g2",
      title: { en: "The perfective future: сде́лаю, позвоню́", ar: "المستقبل التام: сде́лаю، позвоню́" },
      en: [
        "A perfective verb has no present tense. Give it present-tense endings and you get the future of one complete action: сде́лать → я сде́лаю (I'll get it done), прочита́ть → я прочита́ю, позвони́ть → я позвоню́.",
        "Use it for promises and single results: Я позвоню́ тебе́ за́втра. Я куплю́ биле́т. Compare: За́втра я бу́ду писа́ть пи́сьма (a process) — За́втра я напишу́ письмо́ (one letter, finished).",
        "Watch the stress: some verbs move it back after the я-form — скажу́, ска́жешь; куплю́, ку́пишь; напишу́, напи́шешь — while others keep it on the ending: позвоню́, позвони́шь.",
      ],
      ar: [
        "الفعل التام ليس له زمن حاضر. وعندما تضيف إليه نهايات الحاضر تحصل على مستقبل فعل واحد مكتمل: сде́лать ← я сде́лаю (سأنجزه)، прочита́ть ← я прочита́ю، позвони́ть ← я позвоню́.",
        "استخدمه للوعود وللنتائج الواحدة: Я позвоню́ тебе́ за́втра. Я куплю́ биле́т. قارن: За́втра я бу́ду писа́ть пи́сьма (عملية) — За́втра я напишу́ письмо́ (رسالة واحدة مكتملة).",
        "انتبه إلى النبر: بعض الأفعال ينتقل نبرها إلى الوراء بعد صيغة я — скажу́، ска́жешь؛ куплю́، ку́пишь؛ напишу́، напи́шешь — وبعضها يبقى نبره على النهاية: позвоню́، позвони́шь.",
      ],
      tables: [
        {
          caption: { en: "One verb, two futures", ar: "فعل واحد ومستقبلان" },
          head: ["Imperfective future · المستقبل غير التام", "Perfective future · المستقبل التام", "Meaning · المعنى"],
          rows: [
            ["бу́ду де́лать", "сде́лаю", "do · أفعل"],
            ["бу́ду чита́ть", "прочита́ю", "read · أقرأ"],
            ["бу́ду писа́ть", "напишу́", "write · أكتب"],
            ["бу́ду покупа́ть", "куплю́", "buy · أشتري"],
            ["бу́ду говори́ть", "скажу́", "say · أقول"],
            ["бу́ду звони́ть", "позвоню́", "call · أتصل"],
          ],
        },
      ],
      examples: [
        { ru: "Я обяза́тельно тебе́ позвоню́.", en: "I'll definitely call you.", ar: "سأتصل بك حتمًا." },
        { ru: "Ве́чером я прочита́ю твоё письмо́.", en: "This evening I'll read your letter.", ar: "سأقرأ رسالتك مساءً." },
        { ru: "Что ты ска́жешь ма́ме?", en: "What will you tell Mum?", ar: "ماذا ستقول لأمّك؟" },
      ],
    },
    {
      id: "d38-g3",
      title: { en: "When? Future time words", ar: "متى؟ كلمات زمن المستقبل" },
      en: [
        "Close to now: сего́дня ве́чером, за́втра, послеза́втра, ско́ро. Later: че́рез + accusative — 'in … (from now)': че́рез час, че́рез неде́лю, че́рез ме́сяц, че́рез год.",
        "'Next' is сле́дующий, and it needs the right case: на сле́дующей неде́ле (next week), в сле́дующем ме́сяце (next month), в сле́дующем году́ (next year — note the stressed ending of году́), в сле́дующий понеде́льник (next Monday).",
      ],
      ar: [
        "قريبًا من الآن: сего́дня ве́чером، за́втра، послеза́втра، ско́ро. ولاحقًا: че́рез + حالة المفعول به بمعنى «بعد … (من الآن)»: че́рез час، че́рез неде́лю، че́рез ме́сяц، че́рез год.",
        "كلمة «القادم» هي сле́дующий، وتحتاج إلى الحالة المناسبة: на сле́дующей неде́ле (الأسبوع القادم)، в сле́дующем ме́сяце (الشهر القادم)، в сле́дующем году́ (العام القادم — لاحظ النهاية المنبورة في году́)، в сле́дующий понеде́льник (يوم الاثنين القادم).",
      ],
      tables: [
        {
          caption: { en: "Time expressions for the future", ar: "تعبيرات الزمن للمستقبل" },
          head: ["Russian · الروسية", "English", "العربية"],
          rows: [
            ["послеза́втра", "the day after tomorrow", "بعد غد"],
            ["че́рез час", "in an hour", "بعد ساعة"],
            ["че́рез неде́лю", "in a week", "بعد أسبوع"],
            ["на сле́дующей неде́ле", "next week", "في الأسبوع القادم"],
            ["в сле́дующем ме́сяце", "next month", "في الشهر القادم"],
            ["в сле́дующем году́", "next year", "في العام القادم"],
          ],
        },
      ],
      examples: [
        { ru: "Че́рез неде́лю я бу́ду в Каи́ре.", en: "In a week I'll be in Cairo.", ar: "بعد أسبوع سأكون في القاهرة." },
        { ru: "На сле́дующей неде́ле мы начина́ем рабо́тать.", en: "Next week we start working.", ar: "في الأسبوع القادم نبدأ العمل." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Пла́ны на выходны́е", en: "Weekend plans", ar: "خطط عطلة نهاية الأسبوع" },
    setting: {
      en: "Friday afternoon, the end of the Russian class. Olga Petrovna asks Ahmed and Anna about their plans.",
      ar: "بعد ظهر يوم الجمعة، في نهاية درس اللغة الروسية. أولغا بتروفنا تسأل أحمد وآنا عن خططهما.",
    },
    lines: [
      {
        who: "B", name: "О́льга Петро́вна", ru: "Сего́дня пя́тница, ско́ро выходны́е! Ахме́д, что вы бу́дете де́лать?",
        en: "Today is Friday — the weekend is coming! Ahmed, what will you do?", ar: "اليوم الجمعة، وعطلة نهاية الأسبوع قريبة! ماذا ستفعل يا أحمد؟",
      },
      {
        who: "A", name: "Ахме́д", ru: "За́втра я бу́ду отдыха́ть, а послеза́втра мы бу́дем гуля́ть в па́рке.",
        en: "Tomorrow I'll rest, and the day after tomorrow we'll go for a walk in the park.", ar: "غدًا سأرتاح، وبعد غد سنتمشّى في الحديقة.",
      },
      { who: "B", name: "О́льга Петро́вна", ru: "А на сле́дующей неде́ле?", en: "And next week?", ar: "وفي الأسبوع القادم؟" },
      {
        who: "A", name: "Ахме́д", ru: "В понеде́льник я начина́ю рабо́тать в о́фисе. Я бу́ду рабо́тать ка́ждый день.",
        en: "On Monday I start working in the office. I'll be working every day.", ar: "يوم الاثنين أبدأ العمل في المكتب. سأعمل كل يوم.",
      },
      { who: "B", name: "О́льга Петро́вна", ru: "А вы, А́нна? Каки́е у вас пла́ны?", en: "And you, Anna? What are your plans?", ar: "وأنتِ يا آنا؟ ما خططكِ؟" },
      {
        who: "B", name: "А́нна", ru: "Я собира́юсь путеше́ствовать! Че́рез ме́сяц у меня́ кани́кулы.",
        en: "I'm going to travel! In a month I have my holidays.", ar: "أنوي أن أسافر! بعد شهر تبدأ عطلتي.",
      },
      { who: "B", name: "О́льга Петро́вна", ru: "Интере́сно! А где вы бу́дете?", en: "How interesting! And where will you be?", ar: "رائع! وأين ستكونين؟" },
      {
        who: "B", name: "А́нна", ru: "Мо́жет быть, в Еги́пте! Ахме́д, ты мне помо́жешь?",
        en: "Maybe in Egypt! Ahmed, will you help me?", ar: "ربّما في مصر! أحمد، هل ستساعدني؟",
      },
      {
        who: "A", name: "Ахме́д", ru: "Обяза́тельно! Я напишу́ тебе́ всё: где жить, что смотре́ть и что есть.",
        en: "Definitely! I'll write down everything for you: where to stay, what to see and what to eat.",
        ar: "بالتأكيد! سأكتب لكِ كل شيء: أين تسكنين، وماذا تشاهدين، وماذا تأكلين.",
      },
      {
        who: "B", name: "О́льга Петро́вна", ru: "А в сле́дующем году́, Ахме́д? Вы бу́дете жить в Москве́?",
        en: "And next year, Ahmed? Will you live in Moscow?", ar: "وفي العام القادم يا أحمد؟ هل ستعيش في موسكو؟",
      },
      {
        who: "A", name: "Ахме́д", ru: "Наде́юсь, да. Я хочу́ хорошо́ говори́ть по-ру́сски!",
        en: "I hope so. I want to speak Russian well!", ar: "آمل ذلك. أريد أن أتكلّم الروسية جيدًا!",
      },
      {
        who: "B", name: "О́льга Петро́вна", ru: "Вы обяза́тельно бу́дете хорошо́ говори́ть! До понеде́льника!",
        en: "You'll definitely speak it well! See you on Monday!", ar: "ستتكلّمها جيدًا بالتأكيد! إلى اللقاء يوم الاثنين!",
      },
    ],
  },
  pronunciation: {
    title: { en: "Moving stress in the future: скажу́ — ска́жешь", ar: "النبر المتحرّك في المستقبل: скажу́ — ска́жешь" },
    en: [
      "In many verbs the stress is on the ending in the я-form and jumps back to the stem in all the other forms: скажу́, ска́жешь, ска́жет; куплю́, ку́пишь; напишу́, напи́шешь; посмотрю́, посмо́трите.",
      "Other verbs keep the stress on the ending everywhere: позвоню́, позвони́шь, позвони́т. Learn the я- and ты-forms together, as the word lists give them.",
    ],
    ar: [
      "في كثير من الأفعال يقع النبر على النهاية في صيغة я، ثم يقفز إلى جذر الكلمة في باقي الصيغ: скажу́، ска́жешь، ска́жет؛ куплю́، ку́пишь؛ напишу́، напи́шешь؛ посмотрю́، посмо́трите.",
      "وأفعال أخرى تُبقي النبر على النهاية في كل الصيغ: позвоню́، позвони́шь، позвони́т. احفظ صيغتي я و ты معًا كما تظهران في قوائم الكلمات.",
    ],
    drills: [
      {
        ru: "Я скажу́. Что ты ска́жешь?", say: "ya skazhU. shto ty skAzhysh'?",
        focus: { en: "скажу́ — stress on the ending; ска́жешь — on the stem.", ar: "скажу́: النبر على النهاية؛ ска́жешь: على الجذر." },
      },
      {
        ru: "Я куплю́ биле́т. А ты что ку́пишь?", say: "ya kuplyU bilyEt. a ty shto kUpish'?",
        focus: { en: "The stress jumps back: куплю́ — ку́пишь.", ar: "يقفز النبر إلى الوراء: куплю́ — ку́пишь." },
      },
      {
        ru: "Я напишу́ тебе́. Ты мне напи́шешь?", say: "ya napishU tibyE. ty mnye napIshysh'?",
        focus: { en: "The stress jumps back: напишу́ — напи́шешь.", ar: "يقفز النبر إلى الوراء: напишу́ — напи́шешь." },
      },
      {
        ru: "Я позвоню́. Ты позвони́шь?", say: "ya pazvanyU. ty pazvanIsh'?",
        focus: { en: "No jump here: the stress stays on the ending — позвони́шь.", ar: "لا قفز هنا: يبقى النبر على النهاية — позвони́шь." },
      },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose the correct sentence: 'Tomorrow I'll be working.'", ar: "اختر الجملة الصحيحة: «غدًا سأعمل»." },
      options: ["За́втра я бу́ду рабо́таю.", "За́втра я бу́ду рабо́тать.", "За́втра я рабо́тал."],
      answer: 1,
      why: { en: "бу́ду + infinitive: бу́ду рабо́тать.", ar: "бу́ду + المصدر: бу́ду рабо́тать." },
    },
    {
      kind: "choice",
      prompt: { en: "Which sentence is wrong?", ar: "أيّ جملة خاطئة؟" },
      options: ["Я сде́лаю.", "Я бу́ду де́лать.", "Я бу́ду сде́лать."],
      answer: 2,
      why: { en: "бу́ду never goes with a perfective verb like сде́лать.", ar: "لا تأتي бу́ду أبدًا مع فعل تام مثل сде́лать." },
    },
    {
      kind: "choice",
      prompt: { en: "Which form means 'I'll read it (to the end)'?", ar: "أيّ صيغة تعني «سأقرؤه (حتى النهاية)»؟" },
      options: ["прочита́ю", "чита́ю", "прочита́л"],
      answer: 0,
      why: { en: "A perfective verb with present endings is the future.", ar: "الفعل التام مع نهايات الحاضر يدلّ على المستقبل." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: What will you do on Saturday?", ar: "أكمل: ماذا ستفعل يوم السبت؟" },
      ru: "Что ты ___ де́лать в суббо́ту?",
      answers: ["бу́дешь"],
      why: { en: "ты → бу́дешь.", ar: "مع ты نقول бу́дешь." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: We'll watch a film.", ar: "أكمل: سنشاهد فيلمًا." },
      ru: "Мы ___ смотре́ть фильм.",
      answers: ["бу́дем"],
      why: { en: "мы → бу́дем.", ar: "مع мы نقول бу́дем." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with позвони́ть: I'll call you tomorrow.", ar: "أكمل بالفعل позвони́ть: سأتصل بك غدًا." },
      ru: "Я ___ тебе́ за́втра.",
      answers: ["позвоню́"],
      why: { en: "Perfective future: позвоню́ — one call, a promise.", ar: "المستقبل التام: позвоню́ — اتصال واحد ووعد." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: The film starts in an hour.", ar: "أكمل: يبدأ الفيلم بعد ساعة." },
      ru: "Фильм начина́ется ___ час.",
      answers: ["че́рез"],
      why: { en: "че́рез + accusative = in (a time from now).", ar: "че́рез + حالة المفعول به = بعد (مدّة من الآن)." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Next year I'll live in Moscow.", ar: "أكمل: في العام القادم سأعيش في موسكو." },
      ru: "В сле́дующем ___ я бу́ду жить в Москве́.",
      answers: ["году́"],
      why: { en: "в сле́дующем году́ — году́ has a special stressed ending.", ar: "в сле́дующем году́ — لكلمة году́ نهاية خاصة منبورة." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I'm going to travel.", ar: "كوّن الجملة: أنوي أن أسافر." },
      tokens: ["путеше́ствовать", "Я", "собира́юсь"],
      answers: ["Я собира́юсь путеше́ствовать."],
      why: { en: "собира́ться + infinitive = to be going to.", ar: "собира́ться + المصدر = ينوي أن." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: Next week I'll be in Cairo.", ar: "كوّن الجملة: في الأسبوع القادم سأكون في القاهرة." },
      tokens: ["неде́ле", "бу́ду", "На", "в", "сле́дующей", "я", "Каи́ре"],
      answers: ["На сле́дующей неде́ле я бу́ду в Каи́ре.", "Я бу́ду в Каи́ре на сле́дующей неде́ле.", "Я на сле́дующей неде́ле бу́ду в Каи́ре."],
      why: { en: "Time expressions usually come first.", ar: "تأتي تعبيرات الزمن عادةً في أول الجملة." },
    },
    {
      kind: "translate",
      prompt: { en: "The day after tomorrow I'll be at home.", ar: "بعد غد سأكون في البيت." },
      answers: ["Послеза́втра я бу́ду до́ма.", "Я бу́ду до́ма послеза́втра.", "Послеза́втра бу́ду до́ма.", "Я послеза́втра бу́ду до́ма."],
      why: { en: "бу́ду on its own means 'I'll be'.", ar: "бу́ду وحدها تعني «سأكون»." },
    },
    {
      kind: "translate",
      prompt: { en: "I'll definitely call you.", ar: "سأتصل بك حتمًا." },
      answers: [
        "Я обяза́тельно тебе́ позвоню́.",
        "Я обяза́тельно позвоню́ тебе́.",
        "Обяза́тельно тебе́ позвоню́.",
        "Я обяза́тельно вам позвоню́.",
        "Я обяза́тельно позвоню́ вам.",
        "Я тебе́ обяза́тельно позвоню́.",
        "Я вам обяза́тельно позвоню́.",
      ],
      why: { en: "A promise of one result: perfective позвоню́.", ar: "وعد بنتيجة واحدة: الفعل التام позвоню́." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. When do the holidays start?", ar: "استمع. متى تبدأ العطلة؟" },
      ru: "Че́рез ме́сяц у меня́ кани́кулы.",
      listen: true,
      options: ["In a week · بعد أسبوع", "In a month · بعد شهر", "Next year · في العام القادم"],
      answer: 1,
      why: { en: "че́рез ме́сяц = in a month.", ar: "че́рез ме́сяц = بعد شهر." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What is the question?", ar: "استمع. ما السؤال؟" },
      ru: "Что вы бу́дете де́лать на выходны́х?",
      listen: true,
      options: [
        "What did you do at the weekend? · ماذا فعلتم في عطلة نهاية الأسبوع؟",
        "What are you doing now? · ماذا تفعلون الآن؟",
        "What will you do at the weekend? · ماذا ستفعلون في عطلة نهاية الأسبوع؟",
      ],
      answer: 2,
      why: { en: "бу́дете де́лать is the future.", ar: "бу́дете де́лать صيغة مستقبل." },
    },
  ],
  topics: ["future-tense", "aspect"],
  search: ["Russian future tense буду explained", "Russian perfective future tense", "Russian time expressions через следующий"],
  speaking: {
    scenario: {
      en: "A friend asks about your plans. Talk about this weekend, next week, next month and next year: what you will do, what you hope for and what you will definitely finish.",
      ar: "صديق يسألك عن خططك. تحدّث عن عطلة نهاية هذا الأسبوع، والأسبوع القادم، والشهر القادم، والعام القادم: ماذا ستفعل، وبماذا تأمل، وماذا ستُنهي بالتأكيد.",
    },
    tutorBrief:
      "Play Olga Petrovna (Ольга Петровна), the learner's Russian teacher, at the end of a Friday lesson; use вы with the learner. Ask about plans for the weekend, next week, next month and next year (Что вы будете делать в субботу? Какие у вас планы? А на следующей неделе? А в следующем году?). Expect the imperfective future (буду работать, будем гулять) for activities and the perfective future (сделаю, позвоню, куплю, напишу, закончу) for single results, and ask at least one question that needs a promise (Вы позвоните маме?). Encourage послезавтра, скоро, через неделю / месяц, собираюсь, надеюсь, обязательно, может быть, путешествовать, выходные. Correct gently: буду сделать → сделаю or буду делать; the stress in скажу / скажешь and куплю / купишь. Finish with one encouraging sentence in Russian and one tip in English.",
    prompts: [
      { ru: "На выходны́х я бу́ду отдыха́ть.", en: "At the weekend I'll rest.", ar: "سأرتاح في عطلة نهاية الأسبوع." },
      { ru: "На сле́дующей неде́ле я начина́ю рабо́тать.", en: "Next week I start working.", ar: "في الأسبوع القادم أبدأ العمل." },
      { ru: "Че́рез ме́сяц я собира́юсь путеше́ствовать.", en: "In a month I'm going to travel.", ar: "بعد شهر أنوي أن أسافر." },
      { ru: "Я обяза́тельно позвоню́ ма́ме.", en: "I'll definitely call Mum.", ar: "سأتصل بأمّي حتمًا." },
      { ru: "В сле́дующем году́, мо́жет быть, я бу́ду жить в Москве́.", en: "Next year I may live in Moscow.", ar: "في العام القادم ربّما أعيش في موسكو." },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about your future: what you will do this weekend (Я бу́ду…), one thing you will definitely finish (Я обяза́тельно зако́нчу / сде́лаю…), your plans for next month and next year, and one hope (Наде́юсь, …).",
    ar: "اكتب من ٥ إلى ٨ جمل عن مستقبلك: ماذا ستفعل في عطلة نهاية هذا الأسبوع (Я бу́ду…)، وشيئًا ستُنهيه حتمًا (Я обяза́тельно зако́нчу / сде́лаю…)، وخططك للشهر القادم وللعام القادم، وأمنية واحدة (Наде́юсь, …).",
  },
  culture: {
    en: "In Russia the weekend is Saturday and Sunday, and on Friday people wish each other Хоро́ших выходны́х! — 'Have a good weekend!'. From spring to autumn many city families spend it at the да́ча, their country cottage with a garden.",
    ar: "عطلة نهاية الأسبوع في روسيا هي السبت والأحد، ويوم الجمعة يتمنّى الناس بعضهم لبعض: Хоро́ших выходны́х! أي «عطلة سعيدة!». ومن الربيع إلى الخريف تقضيها أسر كثيرة من سكّان المدن في «да́ча»، أي البيت الريفي الصغير ذي الحديقة.",
  },
};

const DAY_39: Day = {
  n: 39,
  week: 6,
  kind: "lesson",
  title: { ru: "Иду́ и е́ду: глаго́лы движе́ния", en: "Going on foot and by transport: verbs of motion", ar: "أذهب ماشيًا وراكبًا: أفعال الحركة" },
  goals: [
    {
      en: "Choose between идти́ and ходи́ть (on foot), and between е́хать and е́здить (by transport).",
      ar: "أن تختار بين идти́ و ходи́ть (سيرًا على الأقدام)، وبين е́хать و е́здить (بوسيلة نقل).",
    },
    {
      en: "Say how you travel: на авто́бусе, на метро́, на такси́, пешко́м.",
      ar: "أن تقول كيف تتنقّل: на авто́бусе، на метро́، на такси́، пешко́м.",
    },
    {
      en: "Ask and answer Куда́? (в шко́лу, домо́й, к дру́гу) and keep it apart from Где? (в шко́ле, до́ма).",
      ar: "أن تسأل وتجيب عن Куда́؟ (в шко́лу، домо́й، к дру́гу) وتميّزه عن Где؟ (в шко́ле، до́ма).",
    },
  ],
  words: [
    {
      id: "d39-01", ru: "идти́", say: "ittI", en: "to go on foot, to walk (now, in one direction)", ar: "يذهب ماشيًا (الآن، في اتجاه واحد)", pos: "verb",
      forms: "иду́, идёшь; past шёл, шла",
      ex: { ru: "Я иду́ в магази́н.", en: "I'm going to the shop.", ar: "أنا ذاهب إلى المتجر." },
    },
    {
      id: "d39-02", ru: "ходи́ть", say: "khadIt'", en: "to go on foot (regularly, there and back); to walk", ar: "يذهب ماشيًا (بانتظام، ذهابًا وإيابًا)", pos: "verb",
      forms: "хожу́, хо́дишь; past ходи́л",
      ex: { ru: "Я ча́сто хожу́ в парк.", en: "I often go to the park.", ar: "أذهب إلى الحديقة كثيرًا." },
    },
    {
      id: "d39-03", ru: "е́хать", say: "yEkhat'", en: "to go by transport, to ride, to drive (now, in one direction)", ar: "يذهب راكبًا (الآن، في اتجاه واحد)", pos: "verb",
      forms: "е́ду, е́дешь; past е́хал",
      ex: { ru: "Я е́ду на рабо́ту.", en: "I'm on my way to work (by transport).", ar: "أنا في طريقي إلى العمل (راكبًا)." },
    },
    {
      id: "d39-04", ru: "е́здить", say: "yEzdit'", en: "to go by transport (regularly, there and back)", ar: "يذهب راكبًا (بانتظام، ذهابًا وإيابًا)", pos: "verb",
      forms: "е́зжу, е́здишь; past е́здил",
      ex: { ru: "Мы ча́сто е́здим на да́чу.", en: "We often go to the dacha.", ar: "نذهب كثيرًا إلى بيتنا الريفي." },
    },
    {
      id: "d39-05", ru: "куда́", say: "kudA", en: "where (to)?", ar: "إلى أين؟", pos: "adv",
      ex: { ru: "Куда́ вы е́дете?", en: "Where are you going?", ar: "إلى أين تذهبون؟" },
    },
    {
      id: "d39-06", ru: "туда́", say: "tudA", en: "(to) there", ar: "إلى هناك", pos: "adv",
      ex: { ru: "Я то́же иду́ туда́!", en: "I'm going there too!", ar: "وأنا أيضًا ذاهب إلى هناك!" },
    },
    {
      id: "d39-07", ru: "сюда́", say: "syudA", en: "(to) here", ar: "إلى هنا", pos: "adv",
      ex: { ru: "Макси́м е́дет сюда́ на такси́.", en: "Maxim is coming here by taxi.", ar: "مكسيم قادم إلى هنا بسيارة أجرة." },
    },
    {
      id: "d39-08", ru: "домо́й", say: "damOy", en: "(to) home", ar: "إلى البيت", pos: "adv",
      ex: { ru: "Уже́ по́здно, я иду́ домо́й.", en: "It's late already — I'm going home.", ar: "الوقت متأخر، سأعود إلى البيت." },
      note: { en: "до́ма = at home (где?); домо́й = home (куда́?).", ar: "до́ма = في البيت (где؟)؛ домо́й = إلى البيت (куда́؟)." },
    },
    {
      id: "d39-09", ru: "пешко́м", say: "pishkOm", en: "on foot", ar: "سيرًا على الأقدام", pos: "adv",
      ex: { ru: "Я хожу́ на рабо́ту пешко́м.", en: "I walk to work.", ar: "أذهب إلى العمل سيرًا على الأقدام." },
    },
    {
      id: "d39-10", ru: "авто́бус", say: "aftObus", en: "bus", ar: "حافلة، أوتوبيس", pos: "noun", g: "m",
      forms: "на авто́бусе = by bus",
      ex: { ru: "Вот мой авто́бус!", en: "Here's my bus!", ar: "ها هي حافلتي!" },
    },
    {
      id: "d39-11", ru: "трамва́й", say: "tramvAy", en: "tram", ar: "ترام", pos: "noun", g: "m",
      forms: "на трамва́е = by tram",
      ex: { ru: "Трамва́й идёт в центр.", en: "The tram goes to the centre.", ar: "الترام يتّجه إلى وسط المدينة." },
      note: { en: "Vehicles 'walk' in Russian: авто́бус идёт, по́езд идёт.", ar: "في الروسية «تمشي» المركبات: авто́бус идёт، по́езд идёт." },
    },
    {
      id: "d39-12", ru: "такси́", say: "taksI", en: "taxi", ar: "سيارة أجرة، تاكسي", pos: "noun", g: "n",
      forms: "never changes: на такси́",
      ex: { ru: "Я е́ду домо́й на такси́.", en: "I'm going home by taxi.", ar: "أعود إلى البيت بسيارة أجرة." },
    },
    {
      id: "d39-13", ru: "по́езд", say: "pOyist", en: "train", ar: "قطار", pos: "noun", g: "m",
      forms: "мн. ч. поезда́; на по́езде",
      ex: { ru: "Мы е́дем на да́чу на по́езде.", en: "We're going to the dacha by train.", ar: "نحن ذاهبون إلى البيت الريفي بالقطار." },
    },
    {
      id: "d39-14", ru: "самолёт", say: "samalyOt", en: "plane", ar: "طائرة", pos: "noun", g: "m",
      forms: "на самолёте",
      ex: { ru: "Я люблю́ путеше́ствовать на самолёте.", en: "I love travelling by plane.", ar: "أحبّ السفر بالطائرة." },
    },
    {
      id: "d39-15", ru: "Куда́ ты идёшь?", say: "kudA ty idyOsh?", en: "Where are you going?", ar: "إلى أين تذهب؟", pos: "phrase",
      note: { en: "Formal: Куда́ вы идёте?", ar: "بصيغة الاحترام: Куда́ вы идёте؟" },
    },
    {
      id: "d39-16", ru: "Иди́ сюда́!", say: "idI syudA!", en: "Come here!", ar: "تعال إلى هنا!", pos: "phrase",
      note: {
        en: "Formal: Иди́те сюда́! Russians use идти́ for 'come' too.",
        ar: "بصيغة الاحترام: Иди́те сюда́! ويستخدم الروس идти́ بمعنى «يأتي» أيضًا.",
      },
    },
    {
      id: "d39-17", ru: "в го́сти", say: "v gOsti", en: "(to go) visiting, as a guest", ar: "(الذهاب) في زيارة", pos: "phrase",
      ex: { ru: "В суббо́ту мы идём в го́сти к ба́бушке.", en: "On Saturday we're going to visit Grandma.", ar: "يوم السبت سنذهب لزيارة جدّتنا." },
    },
    {
      id: "d39-18", ru: "туда́ и обра́тно", say: "tudA i abrAtna", en: "there and back", ar: "ذهابًا وإيابًا", pos: "phrase",
      ex: { ru: "Биле́т туда́ и обра́тно, пожа́луйста.", en: "A return ticket, please.", ar: "تذكرة ذهاب وإياب من فضلك." },
    },
    {
      id: "d39-19", ru: "Как ты е́здишь на рабо́ту?", say: "kak ty yEzdish' na rabOtu?", en: "How do you get to work?", ar: "كيف تذهب إلى العمل؟", pos: "phrase",
    },
  ],
  grammar: [
    {
      id: "d39-g1",
      title: { en: "идти́ or ходи́ть? On foot", ar: "идти́ أم ходи́ть؟ سيرًا على الأقدام" },
      en: [
        "Russian has two verbs for 'go on foot'. идти́ is one trip in one direction, happening now or at a given moment: Я иду́ в магази́н. — I'm on my way to the shop. Куда́ ты идёшь?",
        "ходи́ть is movement that repeats or goes there and back: Я ча́сто хожу́ в кино́. In the past, ходи́л means 'went and came back': Вчера́ я ходи́л в музе́й.",
        "Signal words help: сейча́с, вот → идти́; ча́сто, всегда́, ка́ждый день, обы́чно → ходи́ть.",
      ],
      ar: [
        "في الروسية فعلان لمعنى «يذهب ماشيًا». الفعل идти́ رحلة واحدة في اتجاه واحد تحدث الآن أو في لحظة محدّدة: Я иду́ в магази́н — أنا في طريقي إلى المتجر. Куда́ ты идёшь؟",
        "أمّا ходи́ть فحركة تتكرّر أو ذهاب وعودة: Я ча́сто хожу́ в кино́. وفي الماضي تعني ходи́л «ذهب ثم عاد»: Вчера́ я ходи́л в музе́й.",
        "كلمات الإشارة تساعدك: сейча́с، вот ← идти́؛ ча́сто، всегда́، ка́ждый день، обы́чно ← ходи́ть.",
      ],
      tables: [
        {
          caption: { en: "идти́ and ходи́ть", ar: "идти́ و ходи́ть" },
          head: ["Person · الشخص", "идти́ (now · الآن)", "ходи́ть (regularly · بانتظام)"],
          rows: [
            ["я", "иду́", "хожу́"],
            ["ты", "идёшь", "хо́дишь"],
            ["он / она́", "идёт", "хо́дит"],
            ["мы", "идём", "хо́дим"],
            ["вы", "идёте", "хо́дите"],
            ["они́", "иду́т", "хо́дят"],
            ["past · الماضي", "шёл, шла, шли", "ходи́л, ходи́ла, ходи́ли"],
          ],
        },
      ],
      examples: [
        { ru: "— Куда́ ты идёшь? — Я иду́ домо́й.", en: "— Where are you going? — I'm going home.", ar: "— إلى أين تذهب؟ — أنا ذاهب إلى البيت." },
        { ru: "Ка́ждый день я хожу́ в о́фис пешко́м.", en: "Every day I walk to the office.", ar: "كل يوم أذهب إلى المكتب سيرًا على الأقدام." },
        { ru: "Вчера́ мы ходи́ли в теа́тр.", en: "Yesterday we went to the theatre.", ar: "أمس ذهبنا إلى المسرح." },
      ],
    },
    {
      id: "d39-g2",
      title: { en: "е́хать or е́здить? By transport", ar: "е́хать أم е́здить؟ بوسيلة نقل" },
      en: [
        "When you use any transport — bus, car, train, plane — Russian needs a different pair: е́хать (one trip, now) and е́здить (regularly, there and back): Я е́ду в центр. Мы ча́сто е́здим на мо́ре.",
        "The means of transport is на + prepositional: на авто́бусе, на трамва́е, на по́езде, на самолёте, на маши́не. метро́ and такси́ never change: на метро́, на такси́. On foot is пешко́м.",
        "The trap: you cannot 'walk by bus'. Я иду́ на авто́бусе is wrong — say Я е́ду на авто́бусе. But the vehicles themselves use идти́: Авто́бус идёт.",
      ],
      ar: [
        "عندما تستخدم أي وسيلة نقل — حافلة أو سيارة أو قطار أو طائرة — تحتاج الروسية إلى زوج آخر من الأفعال: е́хать (رحلة واحدة، الآن) و е́здить (بانتظام، ذهابًا وإيابًا): Я е́ду в центр. Мы ча́сто е́здим на мо́ре.",
        "وسيلة النقل تأتي بعد на + حالة حرف الجر: на авто́бусе، на трамва́е، на по́езде، на самолёте، на маши́не. أمّا метро́ و такси́ فلا تتغيّران: на метро́، на такси́. وسيرًا على الأقدام: пешко́м.",
        "انتبه: لا يمكنك أن «تمشي بالحافلة». جملة Я иду́ на авто́бусе خاطئة، والصواب: Я е́ду на авто́бусе. لكن المركبات نفسها تستخدم идти́: Авто́бус идёт.",
      ],
      tables: [
        {
          caption: { en: "е́хать and е́здить", ar: "е́хать و е́здить" },
          head: ["Person · الشخص", "е́хать (now · الآن)", "е́здить (regularly · بانتظام)"],
          rows: [
            ["я", "е́ду", "е́зжу"],
            ["ты", "е́дешь", "е́здишь"],
            ["он / она́", "е́дет", "е́здит"],
            ["мы", "е́дем", "е́здим"],
            ["вы", "е́дете", "е́здите"],
            ["они́", "е́дут", "е́здят"],
            ["past · الماضي", "е́хал, е́хала, е́хали", "е́здил, е́здила, е́здили"],
          ],
        },
      ],
      examples: [
        { ru: "Сейча́с я е́ду на рабо́ту на метро́.", en: "Right now I'm going to work by metro.", ar: "الآن أنا في طريقي إلى العمل بالمترو." },
        { ru: "Обы́чно А́нна е́здит в университе́т на авто́бусе.", en: "Anna usually goes to the university by bus.", ar: "عادةً تذهب آنا إلى الجامعة بالحافلة." },
      ],
    },
    {
      id: "d39-g3",
      title: { en: "Куда́? or Где? Direction or place", ar: "Куда́؟ أم Где؟ الاتجاه أم المكان" },
      en: [
        "Где? asks about a place: в / на + prepositional — Я в шко́ле. Куда́? asks about a direction: в / на + accusative — Я иду́ в шко́лу. The preposition stays; the case changes.",
        "Arabic shows the difference with the preposition: في المدرسة 'in the school' — إلى المدرسة 'to the school'. Russian keeps в and changes the ending instead: в шко́ле — в шко́лу.",
        "Some words have their own pairs: до́ма — домо́й, здесь — сюда́, там — туда́. For people use к + dative: к дру́гу.",
      ],
      ar: [
        "السؤال Где؟ يسأل عن المكان: в / на + حالة حرف الجر — Я в шко́ле. أمّا Куда́؟ فيسأل عن الاتجاه: в / на + حالة المفعول به — Я иду́ в шко́лу. حرف الجر يبقى كما هو، والحالة هي التي تتغيّر.",
        "العربية تُظهر الفرق بحرف الجر: «في المدرسة» — «إلى المدرسة». أمّا الروسية فتُبقي в وتغيّر النهاية: в шко́ле — в шко́лу.",
        "ولبعض الكلمات أزواج خاصة: до́ма — домо́й، здесь — сюда́، там — туда́. وللأشخاص استخدم к + حالة المستفيد: к дру́гу.",
      ],
      tables: [
        {
          caption: { en: "Где? and Куда́?", ar: "Где؟ و Куда́؟" },
          head: ["Где? (place · المكان)", "Куда́? (direction · الاتجاه)"],
          rows: [
            ["в шко́ле", "в шко́лу"],
            ["на рабо́те", "на рабо́ту"],
            ["в Москве́", "в Москву́"],
            ["в па́рке", "в парк"],
            ["до́ма", "домо́й"],
            ["здесь", "сюда́"],
            ["там", "туда́"],
            ["у дру́га", "к дру́гу"],
          ],
        },
      ],
      examples: [
        { ru: "— Где ты? — Я на рабо́те.", en: "— Where are you? — I'm at work.", ar: "— أين أنت؟ — أنا في العمل." },
        { ru: "— Куда́ ты е́дешь? — На рабо́ту.", en: "— Where are you going? — To work.", ar: "— إلى أين تذهب؟ — إلى العمل." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Куда́ ты идёшь?", en: "Where are you going?", ar: "إلى أين تذهب؟" },
    setting: {
      en: "Saturday morning. Ahmed meets Anna in the street near his house.",
      ar: "صباح يوم السبت. أحمد يلتقي آنا في الشارع قرب بيته.",
    },
    lines: [
      { who: "B", name: "А́нна", ru: "Ахме́д, приве́т! Куда́ ты идёшь?", en: "Hi, Ahmed! Where are you going?", ar: "مرحبًا يا أحمد! إلى أين تذهب؟" },
      {
        who: "A", name: "Ахме́д", ru: "Приве́т! Я иду́ в магази́н, а пото́м домо́й. А ты?",
        en: "Hi! I'm going to the shop, and then home. And you?", ar: "مرحبًا! أنا ذاهب إلى المتجر، ثم إلى البيت. وأنتِ؟",
      },
      {
        who: "B", name: "А́нна", ru: "А я иду́ на остано́вку. Я е́ду в университе́т.",
        en: "I'm going to the bus stop. I'm going to the university.", ar: "وأنا ذاهبة إلى الموقف، فأنا في طريقي إلى الجامعة.",
      },
      {
        who: "A", name: "Ахме́д", ru: "В суббо́ту? Ты всегда́ е́здишь туда́ на авто́бусе?",
        en: "On a Saturday? Do you always go there by bus?", ar: "يوم السبت؟ هل تذهبين إلى هناك دائمًا بالحافلة؟",
      },
      {
        who: "B", name: "А́нна", ru: "Нет, обы́чно я е́зжу на метро́. А ты? Как ты е́здишь на рабо́ту?",
        en: "No, I usually take the metro. And you? How do you get to work?", ar: "لا، عادةً أذهب بالمترو. وأنت؟ كيف تذهب إلى العمل؟",
      },
      {
        who: "A", name: "Ахме́д", ru: "Я хожу́ пешко́м. Мой о́фис недалеко́.",
        en: "I walk. My office isn't far.", ar: "أذهب سيرًا على الأقدام، فمكتبي ليس بعيدًا.",
      },
      {
        who: "B", name: "А́нна", ru: "Как хорошо́! А Макси́м ка́ждый день е́здит на рабо́ту на такси́.",
        en: "How nice! And Maxim goes to work by taxi every day.", ar: "ما أجمل هذا! أمّا مكسيم فيذهب إلى العمل كل يوم بسيارة أجرة.",
      },
      { who: "A", name: "Ахме́д", ru: "На такси́? Э́то до́рого!", en: "By taxi? That's expensive!", ar: "بسيارة أجرة؟ هذا مكلف!" },
      {
        who: "B", name: "А́нна", ru: "Да! А за́втра мы е́дем в го́сти к ба́бушке, на да́чу.",
        en: "Yes! And tomorrow we're going to visit Grandma at her dacha.", ar: "نعم! وغدًا سنذهب لزيارة جدّتنا في بيتها الريفي.",
      },
      { who: "A", name: "Ахме́д", ru: "На маши́не?", en: "By car?", ar: "بالسيارة؟" },
      {
        who: "B", name: "А́нна", ru: "Нет, на по́езде. А вот и мой авто́бус! Пока́!",
        en: "No, by train. And here comes my bus! Bye!", ar: "لا، بالقطار. وها هي حافلتي قد وصلت! إلى اللقاء!",
      },
      { who: "A", name: "Ахме́д", ru: "Пока́! Приве́т ба́бушке!", en: "Bye! Say hello to Grandma!", ar: "إلى اللقاء! سلّمي لي على جدّتك!" },
    ],
  },
  pronunciation: {
    title: { en: "Stress in verbs of motion", ar: "النبر في أفعال الحركة" },
    en: [
      "идти́ keeps the stress on the ending: иду́, идёшь, идёт (ё is always stressed). ходи́ть moves it back after the я-form: хожу́, but хо́дишь, хо́дит.",
      "е́хать and е́здить are always stressed on the first syllable: е́ду, е́дешь; е́зжу, е́здишь. In е́зжу the зж sounds like a long 'zh': 'yEzhzhu'.",
    ],
    ar: [
      "الفعل идти́ يُبقي النبر على النهاية: иду́، идёшь، идёт (وحرف ё منبور دائمًا). أمّا ходи́ть فينقل النبر إلى الوراء بعد صيغة я: хожу́، لكن хо́дишь، хо́дит.",
      "الفعلان е́хать و е́здить منبوران دائمًا على المقطع الأول: е́ду، е́дешь؛ е́зжу، е́здишь. وفي е́зжу يُنطق зж مثل «zh» طويلة: «yEzhzhu».",
    ],
    drills: [
      { ru: "Я иду́ домо́й.", say: "ya idU damOy.", focus: { en: "The stress is on the ending: иду́.", ar: "النبر على النهاية: иду́." } },
      { ru: "Куда́ ты идёшь?", say: "kudA ty idyOsh?", focus: { en: "ё is always stressed.", ar: "حرف ё منبور دائمًا." } },
      { ru: "Я хожу́ пешко́м.", say: "ya khazhU pishkOm.", focus: { en: "хожу́: the stress is on the ending.", ar: "хожу́: النبر على النهاية." } },
      {
        ru: "Ты ча́сто хо́дишь в парк?", say: "ty chAsta khOdish' f park?",
        focus: { en: "хо́дишь: the stress jumps back; в before п sounds 'f'.", ar: "хо́дишь: يقفز النبر إلى الوراء، و в قبل п تُنطق «f»." },
      },
      { ru: "Я е́зжу на метро́.", say: "ya yEzhzhu na mitrO.", focus: { en: "зж sounds like a long 'zh'.", ar: "зж تُنطق مثل «zh» طويلة." } },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "You are walking to the shop right now. Choose the sentence.", ar: "أنت الآن تمشي إلى المتجر. اختر الجملة." },
      options: ["Я хожу́ в магази́н.", "Я иду́ в магази́н.", "Я е́ду в магази́н."],
      answer: 1,
      why: { en: "One trip, now, on foot: идти́ → иду́.", ar: "رحلة واحدة، الآن، سيرًا على الأقدام: идти́ ← иду́." },
    },
    {
      kind: "choice",
      prompt: { en: "'Every day I go to work by metro.' Choose the sentence.", ar: "«كل يوم أذهب إلى العمل بالمترو». اختر الجملة." },
      options: ["Ка́ждый день я хожу́ на рабо́ту на метро́.", "Ка́ждый день я иду́ на рабо́ту на метро́.", "Ка́ждый день я е́зжу на рабо́ту на метро́."],
      answer: 2,
      why: { en: "Transport + every day: е́здить → е́зжу.", ar: "وسيلة نقل + كل يوم: е́здить ← е́зжу." },
    },
    {
      kind: "choice",
      prompt: { en: "Choose the question word: ___ ты живёшь? — В Москве́.", ar: "اختر أداة الاستفهام: ___ ты живёшь؟ — В Москве́." },
      options: ["Куда́", "Где", "Отку́да"],
      answer: 1,
      why: { en: "В Москве́ is a place (prepositional): Где?", ar: "В Москве́ مكان (حالة حرف الجر): Где؟" },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: I'm going home.", ar: "أكمل: أنا ذاهب إلى البيت." },
      ru: "Я иду́ ___.",
      answers: ["домо́й"],
      why: { en: "Direction: домо́й (до́ма means 'at home').", ar: "للاتجاه: домо́й (أمّا до́ма فتعني «في البيت»)." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with по́езд: We're going to the dacha by train.", ar: "أكمل بكلمة по́езд: نحن ذاهبون إلى البيت الريفي بالقطار." },
      ru: "Мы е́дем на да́чу на ___.",
      answers: ["по́езде"],
      why: { en: "на + prepositional: на по́езде.", ar: "на + حالة حرف الجر: на по́езде." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with ходи́ть: Do you often go to the cinema?", ar: "أكمل بالفعل ходи́ть: هل تذهب إلى السينما كثيرًا؟" },
      ru: "Ты ча́сто ___ в кино́?",
      answers: ["хо́дишь"],
      why: { en: "Regular trips: ходи́ть → хо́дишь (the stress moves back).", ar: "رحلات متكرّرة: ходи́ть ← хо́дишь (ينتقل النبر إلى الوراء)." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with е́хать: Where are you going (by car)?", ar: "أكمل بالفعل е́хать: إلى أين تذهبون (بالسيارة)؟" },
      ru: "Куда́ вы ___?",
      answers: ["е́дете"],
      why: { en: "One trip now, by transport: е́хать → е́дете.", ar: "رحلة واحدة الآن بوسيلة نقل: е́хать ← е́дете." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with шко́ла: I'm going to school.", ar: "أكمل بكلمة шко́ла: أنا ذاهب إلى المدرسة." },
      ru: "Я иду́ в ___.",
      answers: ["шко́лу"],
      why: { en: "Куда́? → accusative: шко́лу.", ar: "Куда́؟ ← حالة المفعول به: шко́лу." },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I go to work by bus.", ar: "كوّن الجملة: أذهب إلى العمل بالحافلة." },
      tokens: ["на", "авто́бусе", "Я", "рабо́ту", "е́зжу", "на"],
      answers: ["Я е́зжу на рабо́ту на авто́бусе.", "На рабо́ту я е́зжу на авто́бусе.", "Я е́зжу на авто́бусе на рабо́ту."],
      why: { en: "на рабо́ту = where to; на авто́бусе = how.", ar: "на рабо́ту = إلى أين، و на авто́бусе = كيف." },
    },
    {
      kind: "translate",
      prompt: { en: "Where are you going? (to a friend, on foot)", ar: "إلى أين تذهب؟ (لصديق، سيرًا على الأقدام)" },
      answers: ["Куда́ ты идёшь?", "Ты куда́ идёшь?"],
      why: { en: "Куда́ + идти́ for a trip on foot happening now.", ar: "Куда́ + идти́ لرحلة سيرًا على الأقدام تحدث الآن." },
    },
    {
      kind: "translate",
      prompt: { en: "I walk to work.", ar: "أذهب إلى العمل سيرًا على الأقدام." },
      answers: ["Я хожу́ на рабо́ту пешко́м.", "Я хожу́ пешко́м на рабо́ту.", "На рабо́ту я хожу́ пешко́м.", "Я хожу́ на рабо́ту."],
      why: { en: "A regular trip on foot: ходи́ть (+ пешко́м).", ar: "رحلة منتظمة سيرًا على الأقدام: ходи́ть (+ пешко́м)." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Where are they going, and how?", ar: "استمع. إلى أين يذهبون، وكيف؟" },
      ru: "За́втра мы е́дем к ба́бушке на да́чу на по́езде.",
      listen: true,
      options: [
        "To Grandma's dacha by train · إلى بيت الجدّة الريفي بالقطار",
        "To Grandma's dacha by car · إلى بيت الجدّة الريفي بالسيارة",
        "To the station on foot · إلى المحطة سيرًا على الأقدام",
      ],
      answer: 0,
      why: { en: "к ба́бушке на да́чу = to Grandma's dacha; на по́езде = by train.", ar: "к ба́бушке на да́чу = إلى بيت الجدّة الريفي، و на по́езде = بالقطار." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. How does this person usually get to work?", ar: "استمع. كيف يذهب هذا الشخص إلى العمل عادةً؟" },
      ru: "Обы́чно я е́зжу на рабо́ту на трамва́е.",
      listen: true,
      options: ["By bus · بالحافلة", "By tram · بالترام", "On foot · سيرًا على الأقدام"],
      answer: 1,
      why: { en: "на трамва́е = by tram.", ar: "на трамва́е = بالترام." },
    },
  ],
  topics: ["motion-verbs", "transport"],
  search: ["Russian verbs of motion идти ходить", "Russian ехать ездить difference", "Russian куда vs где accusative prepositional"],
  speaking: {
    scenario: {
      en: "A new colleague asks about your day. Say where you are going right now, how you usually get to work, to the shops and to see friends, and where you went yesterday.",
      ar: "زميل جديد يسألك عن يومك. قل إلى أين تذهب الآن، وكيف تذهب عادةً إلى العمل وإلى المتاجر ولزيارة أصدقائك، وإلى أين ذهبت أمس.",
    },
    tutorBrief:
      "Play Maxim (Максим), a friendly colleague who meets the learner in the street on a weekday morning. Ask Куда ты идёшь / едешь? about right now, then how they usually get to work, to the shops and to friends (Как ты ездишь на работу? Ты ходишь пешком?), and where they went yesterday (Куда ты ходил / ездил вчера?). Use and elicit идти / ходить, ехать / ездить, куда, туда, сюда, домой, пешком, на автобусе, на трамвае, на метро, на такси, на поезде, на самолёте, в гости and к + dative. Correct the classic mistakes: иду на автобусе → еду на автобусе; хожу for one trip now → иду; где for a direction → куда; иду в школе → иду в школу. Keep to the present and the past, and finish by summarising the learner's usual route.",
    prompts: [
      { ru: "Сейча́с я иду́ в магази́н.", en: "Right now I'm going to the shop.", ar: "الآن أنا ذاهب إلى المتجر." },
      { ru: "Обы́чно я е́зжу на рабо́ту на метро́.", en: "I usually go to work by metro.", ar: "عادةً أذهب إلى العمل بالمترو." },
      { ru: "В магази́н я хожу́ пешко́м.", en: "I walk to the shops.", ar: "أذهب إلى المتجر سيرًا على الأقدام." },
      { ru: "В суббо́ту я е́ду в го́сти к дру́гу.", en: "On Saturday I'm going to visit a friend.", ar: "يوم السبت سأذهب لزيارة صديق." },
      { ru: "Вчера́ я ходи́л в кино́.", en: "Yesterday I went to the cinema.", ar: "أمس ذهبتُ إلى السينما." },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about how you get around: where you go every day and how (Я е́зжу… на…, Я хожу́…), where you are going today, and where you went last weekend (ходи́л / е́здил). Compare transport in Cairo and in Moscow.",
    ar: "اكتب من ٥ إلى ٨ جمل عن تنقّلاتك: إلى أين تذهب كل يوم وكيف (Я е́зжу… на…، Я хожу́…)، وإلى أين تذهب اليوم، وإلى أين ذهبت في عطلة نهاية الأسبوع الماضية (ходи́л / е́здил). وقارن بين المواصلات في القاهرة وفي موسكو.",
  },
  culture: {
    en: "Moscow has one transport card for the metro, buses and trams: «Тро́йка», named after the Russian team of three horses. You top it up at the metro, and many people simply tap a bank card or a phone at the gate instead.",
    ar: "في موسكو بطاقة مواصلات واحدة للمترو والحافلات والترام اسمها «Тро́йка»، على اسم العربة الروسية التي تجرّها ثلاثة خيول. تشحنها في المترو، وكثير من الناس يكتفون بتمرير بطاقة مصرفية أو هاتف عند البوابة.",
  },
};

const DAY_40: Day = {
  n: 40,
  week: 6,
  kind: "lesson",
  title: { ru: "Как дое́хать?", en: "How do I get there? Directions", ar: "كيف أصل؟ الاتجاهات" },
  goals: [
    {
      en: "Ask the way politely: Извини́те, вы не подска́жете, как пройти́ к метро́ / как дое́хать до вокза́ла?",
      ar: "أن تسأل عن الطريق بأدب: Извини́те, вы не подска́жете, как пройти́ к метро́ / как дое́хать до вокза́ла؟",
    },
    {
      en: "Understand and give directions: пря́мо, напра́во, нале́во, до перекрёстка, на углу́.",
      ar: "أن تفهم الاتجاهات وتعطيها: пря́мо، напра́во، нале́во، до перекрёстка، на углу́.",
    },
    {
      en: "Use imperatives for directions and transport: иди́те, поверни́те, сади́тесь, выходи́те.",
      ar: "أن تستخدم صيغة الأمر في الاتجاهات والمواصلات: иди́те، поверни́те، сади́тесь، выходи́те.",
    },
  ],
  words: [
    {
      id: "d40-01", ru: "пря́мо", say: "pryAma", en: "straight on, straight ahead", ar: "إلى الأمام مباشرة", pos: "adv",
      ex: { ru: "Иди́те пря́мо.", en: "Go straight on.", ar: "امشِ إلى الأمام مباشرة." },
    },
    {
      id: "d40-02", ru: "напра́во", say: "naprAva", en: "to the right", ar: "إلى اليمين", pos: "adv",
      ex: { ru: "Поверни́те напра́во.", en: "Turn right.", ar: "انعطف يمينًا." },
      note: {
        en: "напра́во = to the right (куда́?); спра́ва = on the right (где?).",
        ar: "напра́во = إلى اليمين (куда́؟)؛ спра́ва = على اليمين (где؟).",
      },
    },
    {
      id: "d40-03", ru: "нале́во", say: "nalyEva", en: "to the left", ar: "إلى اليسار", pos: "adv",
      ex: { ru: "Пото́м нале́во.", en: "Then left.", ar: "ثم إلى اليسار." },
    },
    {
      id: "d40-04", ru: "поверну́ть", say: "pavirnUt'", en: "to turn (perfective)", ar: "ينعطف (فعل تام)", pos: "verb",
      forms: "поверну́, повернёшь; поверни́те!",
      ex: { ru: "На светофо́ре поверни́те нале́во.", en: "Turn left at the traffic lights.", ar: "انعطف يسارًا عند إشارة المرور." },
    },
    {
      id: "d40-05", ru: "перекрёсток", say: "pirikryOstak", en: "crossroads, intersection", ar: "تقاطع طرق", pos: "noun", g: "m",
      forms: "до перекрёстка",
      ex: { ru: "Иди́те пря́мо до перекрёстка.", en: "Go straight on to the crossroads.", ar: "امشِ مباشرة حتى التقاطع." },
    },
    {
      id: "d40-06", ru: "светофо́р", say: "svitafOr", en: "traffic lights", ar: "إشارة المرور", pos: "noun", g: "m",
      forms: "на светофо́ре",
      ex: { ru: "Остано́вка у светофо́ра.", en: "The stop is by the traffic lights.", ar: "الموقف عند إشارة المرور." },
    },
    {
      id: "d40-07", ru: "переса́дка", say: "pirisAtka", en: "change (of trains or lines), transfer", ar: "تغيير الخطّ، تحويلة", pos: "noun", g: "f",
      ex: { ru: "Здесь ну́жно сде́лать переса́дку.", en: "You need to change here.", ar: "هنا عليك أن تغيّر الخط." },
    },
    {
      id: "d40-08", ru: "ста́нция", say: "stAntsyya", en: "station (metro, railway)", ar: "محطة", pos: "noun", g: "f",
      forms: "на ста́нции",
      ex: { ru: "Где ста́нция метро́?", en: "Where is the metro station?", ar: "أين محطة المترو؟" },
    },
    {
      id: "d40-09", ru: "вы́ход", say: "vYkhat", en: "exit, way out", ar: "مخرج", pos: "noun", g: "m",
      ex: { ru: "Извини́те, где вы́ход?", en: "Excuse me, where's the exit?", ar: "عفوًا، أين المخرج؟" },
    },
    {
      id: "d40-10", ru: "вход", say: "fkhot", en: "entrance, way in", ar: "مدخل", pos: "noun", g: "m",
      ex: { ru: "Вход здесь, а вы́ход там.", en: "The entrance is here, and the exit is over there.", ar: "المدخل هنا، والمخرج هناك." },
    },
    {
      id: "d40-11", ru: "ка́рта", say: "kArta", en: "map; (bank or transport) card", ar: "خريطة؛ بطاقة", pos: "noun", g: "f",
      ex: { ru: "У вас есть ка́рта Москвы́?", en: "Do you have a map of Moscow?", ar: "هل لديك خريطة لموسكو؟" },
    },
    {
      id: "d40-12", ru: "у́гол", say: "Ugal", en: "corner", ar: "زاوية، ناصية", pos: "noun", g: "m",
      forms: "на углу́ (on the corner), до угла́",
      ex: { ru: "Апте́ка на углу́.", en: "The pharmacy is on the corner.", ar: "الصيدلية على الناصية." },
    },
    {
      id: "d40-13", ru: "пройти́", say: "praytI", en: "to get to (on foot); to go along, to pass", ar: "يصل ماشيًا؛ يمرّ", pos: "verb",
      forms: "пройду́, пройдёшь; пройди́те!",
      ex: { ru: "Как пройти́ к метро́?", en: "How do I get to the metro (on foot)?", ar: "كيف أصل إلى المترو ماشيًا؟" },
    },
    {
      id: "d40-14", ru: "дое́хать", say: "dayEkhat'", en: "to get to (by transport)", ar: "يصل راكبًا", pos: "verb",
      forms: "дое́ду, дое́дешь",
      ex: { ru: "Как дое́хать до вокза́ла?", en: "How do I get to the railway station?", ar: "كيف أصل إلى محطة القطارات؟" },
    },
    {
      id: "d40-15", ru: "Вы не подска́жете…?", say: "vy ni patskAzhytye…?", en: "Could you tell me…? (polite)", ar: "هل يمكن أن تدلّني…؟ (بأدب)", pos: "phrase",
      ex: { ru: "Вы не подска́жете, где апте́ка?", en: "Could you tell me where the pharmacy is?", ar: "هل يمكن أن تدلّني أين الصيدلية؟" },
    },
    {
      id: "d40-16", ru: "Я заблуди́лся.", say: "ya zabludIlsya.", en: "I'm lost. (said by a man)", ar: "لقد ضللتُ الطريق. (يقولها رجل)", pos: "phrase",
      note: { en: "A woman says: Я заблуди́лась.", ar: "المرأة تقول: Я заблуди́лась." },
    },
    {
      id: "d40-17", ru: "Сади́тесь на…", say: "sadItis' na…", en: "Take the… (bus, tram) — literally 'sit down onto…'", ar: "اركبوا… (الحافلة، الترام) — حرفيًا: «اجلسوا على…»", pos: "phrase",
      ex: { ru: "Сади́тесь на трамва́й.", en: "Take the tram.", ar: "اركب الترام." },
    },
    {
      id: "d40-18", ru: "Выходи́те на…", say: "vykhadItye na…", en: "Get off at… (a stop or a station)", ar: "انزلوا في… (موقف أو محطة)", pos: "phrase",
      ex: { ru: "Выходи́те на ста́нции «Арба́тская».", en: "Get off at Arbatskaya station.", ar: "انزل في محطة «أرباتسكايا»." },
    },
  ],
  grammar: [
    {
      id: "d40-g1",
      title: { en: "Asking the way: Как пройти́…? Как дое́хать…?", ar: "السؤال عن الطريق: Как пройти́…؟ Как дое́хать…؟" },
      en: [
        "On foot ask Как пройти́…?, by transport Как дое́хать…? Both are perfective because you want to arrive. The goal is до + genitive ('as far as'): до вокза́ла, до ста́нции, до Кра́сной пло́щади. With пройти́ you can also use к + dative: Как пройти́ к метро́?",
        "Start politely: Извини́те, вы не подска́жете, как пройти́ к метро́? — literally 'Excuse me, won't you prompt me…'. Russians use this negative question to be polite, and the answer is simply the directions.",
      ],
      ar: [
        "إذا كنت ماشيًا فاسأل Как пройти́…؟، وإذا كنت راكبًا فاسأل Как дое́хать…؟ وكلاهما فعل تام لأنك تريد الوصول. والوجهة تأتي بعد до + حالة الإضافة (حتى): до вокза́ла، до ста́нции، до Кра́сной пло́щади. ومع пройти́ يمكنك أيضًا استخدام к + حالة المستفيد: Как пройти́ к метро́؟",
        "ابدأ بأدب: Извини́те, вы не подска́жете, как пройти́ к метро́؟ — وحرفيًا: «عفوًا، ألا تدلّني…؟». يستخدم الروس هذا السؤال المنفي للتأدّب، والجواب هو الاتجاهات مباشرة.",
      ],
      tables: [
        {
          caption: { en: "Where to? The destination", ar: "إلى أين؟ الوجهة" },
          head: ["Place · المكان", "до + genitive · до + حالة الإضافة", "Question · السؤال"],
          rows: [
            ["вокза́л", "до вокза́ла", "Как дое́хать до вокза́ла?"],
            ["центр", "до це́нтра", "Как дое́хать до це́нтра?"],
            ["ста́нция", "до ста́нции", "Как пройти́ до ста́нции?"],
            ["Кра́сная пло́щадь", "до Кра́сной пло́щади", "Как пройти́ до Кра́сной пло́щади?"],
            ["метро́", "до метро́ / к метро́", "Как пройти́ к метро́?"],
          ],
        },
      ],
      examples: [
        {
          ru: "Извини́те, вы не подска́жете, как пройти́ к метро́?", en: "Excuse me, could you tell me how to get to the metro?",
          ar: "عفوًا، هل يمكن أن تدلّني كيف أصل إلى المترو؟",
        },
        { ru: "Как дое́хать до Кра́сной пло́щади?", en: "How do I get to Red Square?", ar: "كيف أصل إلى الساحة الحمراء؟" },
      ],
    },
    {
      id: "d40-g2",
      title: { en: "Directions: пря́мо, напра́во, нале́во", ar: "الاتجاهات: пря́мо، напра́во، нале́во" },
      en: [
        "Direction words answer куда́?: пря́мо (straight on), напра́во (to the right), нале́во (to the left). Position words answer где?: спра́ва (on the right), сле́ва (on the left) — the same где / куда́ pair as yesterday.",
        "'As far as' is до + genitive: до перекрёстка, до светофо́ра, до угла́. 'At' a landmark is на + prepositional: на перекрёстке, на светофо́ре, and the special form на углу́ (on the corner).",
      ],
      ar: [
        "كلمات الاتجاه تجيب عن куда́؟: пря́мо (إلى الأمام مباشرة)، напра́во (إلى اليمين)، нале́во (إلى اليسار). وكلمات الموقع تجيب عن где؟: спра́ва (على اليمين)، сле́ва (على اليسار) — وهو زوج где / куда́ نفسه الذي تعلّمته أمس.",
        "«حتى» تكون до + حالة الإضافة: до перекрёстка، до светофо́ра، до угла́. و«عند» معلَم ما تكون на + حالة حرف الجر: на перекрёстке، на светофо́ре، والصيغة الخاصة на углу́ (على الناصية).",
      ],
      tables: [
        {
          caption: { en: "Where? and where to?", ar: "أين؟ وإلى أين؟" },
          head: ["Где? · أين؟", "Куда́? · إلى أين؟"],
          rows: [
            ["спра́ва", "напра́во"],
            ["сле́ва", "нале́во"],
            ["здесь", "сюда́"],
            ["там", "туда́"],
            ["на перекрёстке", "до перекрёстка"],
          ],
        },
      ],
      examples: [
        {
          ru: "Иди́те пря́мо до светофо́ра, пото́м поверни́те напра́во.", en: "Go straight on to the traffic lights, then turn right.",
          ar: "امشِ مباشرة حتى إشارة المرور، ثم انعطف يمينًا.",
        },
        { ru: "Апте́ка на углу́, сле́ва.", en: "The pharmacy is on the corner, on the left.", ar: "الصيدلية على الناصية، على اليسار." },
      ],
    },
    {
      id: "d40-g3",
      title: { en: "Imperatives: иди́те, поверни́те, сади́тесь, выходи́те", ar: "صيغة الأمر: иди́те، поверни́те، сади́тесь، выходи́те" },
      en: [
        "To give directions you need the imperative (a command). In most verbs, take the они́-form and drop the ending: after a consonant add -и, after a vowel add -й. Then add -те for вы: иду́т → иди́ → иди́те; поверну́т → поверни́ → поверни́те; чита́ют → чита́й → чита́йте.",
        "Reflexive verbs keep -сь after -те: сади́ться → сади́тесь (sit down; get on). On public transport Russians say Сади́тесь на авто́бус (take the bus) and Выходи́те на ста́нции… (get off at … station).",
        "Careful with the stress: Выходи́те! is a command, but Вы выхо́дите? is a question — 'Are you getting off?'.",
      ],
      ar: [
        "لإعطاء الاتجاهات تحتاج إلى صيغة الأمر. في معظم الأفعال خذ صيغة они́ واحذف النهاية: إذا انتهى ما تبقّى بحرف ساكن فأضف -и، وإذا انتهى بحرف صوتي فأضف -й. ثم أضف -те مع вы: иду́т ← иди́ ← иди́те؛ поверну́т ← поверни́ ← поверни́те؛ чита́ют ← чита́й ← чита́йте.",
        "الأفعال الانعكاسية تحتفظ بـ -сь بعد -те: сади́ться ← сади́тесь (اجلس؛ اركب). وفي المواصلات يقول الروس: Сади́тесь на авто́бус (اركب الحافلة) و Выходи́те на ста́нции… (انزل في محطة…).",
        "انتبه إلى النبر: Выходи́те! أمر، لكن Вы выхо́дите؟ سؤال بمعنى «هل ستنزل؟».",
      ],
      tables: [
        {
          caption: { en: "Imperatives for directions", ar: "صيغة الأمر في الاتجاهات" },
          head: ["Infinitive · المصدر", "ты", "вы", "Meaning · المعنى"],
          rows: [
            ["идти́", "иди́", "иди́те", "go · امشِ"],
            ["поверну́ть", "поверни́", "поверни́те", "turn · انعطف"],
            ["пройти́", "пройди́", "пройди́те", "go on · امضِ"],
            ["сади́ться", "сади́сь", "сади́тесь", "get on, sit down · اركب، اجلس"],
            ["выходи́ть", "выходи́", "выходи́те", "get off, go out · انزل، اخرج"],
          ],
        },
      ],
      examples: [
        { ru: "Сади́тесь на авто́бус и выходи́те на пло́щади.", en: "Take the bus and get off at the square.", ar: "اركب الحافلة وانزل عند الساحة." },
        { ru: "Пройди́те пря́мо, пото́м поверни́те нале́во.", en: "Go straight on, then turn left.", ar: "امضِ إلى الأمام، ثم انعطف يسارًا." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Я заблуди́лся", en: "I'm lost", ar: "ضللتُ الطريق" },
    setting: {
      en: "Ahmed is in a part of Moscow he doesn't know. He needs a pharmacy and then the railway station, so he asks a woman in the street.",
      ar: "أحمد في حيّ لا يعرفه في موسكو. يحتاج إلى صيدلية ثم إلى محطة القطارات، فيسأل امرأة في الشارع.",
    },
    lines: [
      {
        who: "A", name: "Ахме́д", ru: "Извини́те, я заблуди́лся. Вы не подска́жете, где здесь апте́ка?",
        en: "Excuse me, I'm lost. Could you tell me where there's a pharmacy around here?", ar: "عفوًا، لقد ضللتُ الطريق. هل يمكن أن تدلّيني أين توجد صيدلية هنا؟",
      },
      {
        who: "B", name: "Же́нщина", ru: "Апте́ка? Иди́те пря́мо до перекрёстка, пото́м поверни́те нале́во.",
        en: "A pharmacy? Go straight on to the crossroads, then turn left.", ar: "صيدلية؟ امشِ مباشرة حتى التقاطع، ثم انعطف يسارًا.",
      },
      {
        who: "A", name: "Ахме́д", ru: "Пря́мо до перекрёстка, пото́м нале́во. А э́то далеко́?",
        en: "Straight on to the crossroads, then left. Is it far?", ar: "مباشرة حتى التقاطع، ثم يسارًا. وهل هي بعيدة؟",
      },
      { who: "B", name: "Же́нщина", ru: "Нет, недалеко́. Апте́ка на углу́, спра́ва.", en: "No, it's not far. The pharmacy is on the corner, on the right.", ar: "لا، ليست بعيدة. الصيدلية على الناصية، على اليمين." },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо! А как дое́хать до вокза́ла?", en: "Thank you! And how do I get to the railway station?", ar: "شكرًا! وكيف أصل إلى محطة القطارات؟" },
      {
        who: "B", name: "Же́нщина", ru: "Мо́жно на метро́, но там переса́дка. На трамва́е легко́: переса́дки нет.",
        en: "You can take the metro, but you have to change. The tram is easy: there's no change.", ar: "يمكنك أن تركب المترو، لكن فيه تغيير للخط. أمّا بالترام فالأمر سهل: لا يوجد تغيير.",
      },
      { who: "A", name: "Ахме́д", ru: "А где остано́вка трамва́я?", en: "And where's the tram stop?", ar: "وأين موقف الترام؟" },
      {
        who: "B", name: "Же́нщина", ru: "Вот там, у светофо́ра. Сади́тесь на трамва́й и выходи́те на остано́вке «Вокза́л».",
        en: "Over there, by the traffic lights. Take the tram and get off at the 'Vokzal' stop.", ar: "هناك، عند إشارة المرور. اركب الترام وانزل في موقف «فوكزال» (المحطة).",
      },
      { who: "A", name: "Ахме́д", ru: "Трамва́й, остано́вка «Вокза́л». Спаси́бо большо́е!", en: "Tram, the 'Vokzal' stop. Thank you very much!", ar: "الترام، موقف «فوكزال». شكرًا جزيلًا!" },
      { who: "B", name: "Же́нщина", ru: "Пожа́луйста! До вокза́ла пять мину́т.", en: "You're welcome! It's five minutes to the station.", ar: "عفوًا! إلى المحطة خمس دقائق." },
    ],
  },
  pronunciation: {
    title: { en: "Polite intonation: Вы не подска́жете…?", ar: "التنغيم المهذّب: Вы не подска́жете…؟" },
    en: [
      "A polite request for directions is a yes/no question, so the voice rises sharply on the key word — подска́жете — and then falls: Вы не подска́жете, где апте́ка?",
      "Directions themselves are calm statements: the voice falls at the end of each step — Иди́те пря́мо. Пото́м нале́во. Short pauses between the steps make them easy to follow.",
    ],
    ar: [
      "طلب الاتجاهات بأدب سؤالُ «نعم/لا»، لذلك يرتفع الصوت بحدّة على الكلمة المهمة — подска́жете — ثم يهبط: Вы не подска́жете, где апте́ка؟",
      "أمّا الاتجاهات نفسها فجمل خبرية هادئة: ينخفض الصوت في نهاية كل خطوة — Иди́те пря́мо. Пото́м нале́во. والوقفات القصيرة بين الخطوات تجعلها سهلة الفهم.",
    ],
    drills: [
      { ru: "Вы не подска́жете, где апте́ка?", say: "vy ni patskAzhytye, gdye aptyEka?", focus: { en: "Rise on подска́жете.", ar: "ارفع صوتك على подска́жете." } },
      { ru: "Иди́те пря́мо.", say: "idItye pryAma.", focus: { en: "A calm fall at the end.", ar: "انخفاض هادئ في النهاية." } },
      {
        ru: "Поверни́те напра́во.", say: "pavirnItye naprAva.",
        focus: { en: "The unstressed е in поверни́те is a short 'i'.", ar: "حرف е غير المنبور في поверни́те يُنطق «i» قصيرة." },
      },
      {
        ru: "Вход здесь, вы́ход там.", say: "fkhot zdyes', vYkhat tam.",
        focus: { en: "в before х sounds 'f'; a final д sounds 't'.", ar: "в قبل х تُنطق «f»، و д في آخر الكلمة تُنطق «t»." },
      },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "Choose: 'Turn left.'", ar: "اختر: «انعطف يسارًا»." },
      options: ["Поверни́те сле́ва.", "Поверни́те нале́во.", "Поверни́те пря́мо."],
      answer: 1,
      why: {
        en: "A direction (куда́?) is нале́во; сле́ва means 'on the left' (где?).",
        ar: "الاتجاه (куда́؟) هو нале́во، أمّا сле́ва فتعني «على اليسار» (где؟).",
      },
    },
    {
      kind: "choice",
      prompt: { en: "You want to go to the railway station by metro. What do you ask?", ar: "تريد الذهاب إلى محطة القطارات بالمترو. ماذا تسأل؟" },
      options: ["Как дое́хать до вокза́ла?", "Как дое́хать в вокза́л?", "Как дое́хать вокза́л?"],
      answer: 0,
      why: { en: "дое́хать до + genitive: до вокза́ла.", ar: "дое́хать до + حالة الإضافة: до вокза́ла." },
    },
    {
      kind: "choice",
      prompt: { en: "Which sign means 'Way out'?", ar: "أيّ لافتة تعني «مخرج»؟" },
      options: ["Вход", "Переса́дка", "Вы́ход"],
      answer: 2,
      why: { en: "вы́ход = exit; вход = entrance.", ar: "вы́ход = مخرج، و вход = مدخل." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with перекрёсток: Go straight on to the crossroads.", ar: "أكمل بكلمة перекрёсток: امشِ مباشرة حتى التقاطع." },
      ru: "Иди́те пря́мо до ___.",
      answers: ["перекрёстка"],
      why: { en: "до + genitive: перекрёстка.", ar: "до + حالة الإضافة: перекрёстка." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with у́гол: The café is on the corner.", ar: "أكمل بكلمة у́гол: المقهى على الناصية." },
      ru: "Кафе́ на ___.",
      answers: ["углу́"],
      why: { en: "A special form: на углу́.", ar: "صيغة خاصة: на углу́." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: Take the tram. (formal)", ar: "أكمل: اركب الترام. (بصيغة الاحترام)" },
      ru: "___ на трамва́й.",
      answers: ["Сади́тесь"],
      why: { en: "сади́ться на + accusative = to take (a bus, a tram).", ar: "сади́ться на + حالة المفعول به = يركب (حافلة، ترامًا)." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete: How do I get to the metro (on foot)?", ar: "أكمل: كيف أصل إلى المترو (ماشيًا)؟" },
      ru: "Как ___ к метро́?",
      answers: ["пройти́"],
      why: { en: "On foot: пройти́; by transport: дое́хать.", ar: "سيرًا على الأقدام: пройти́، وبوسيلة نقل: дое́хать." },
    },
    {
      kind: "fill",
      prompt: { en: "Complete with поверну́ть: Turn right at the traffic lights. (formal)", ar: "أكمل بالفعل поверну́ть: انعطف يمينًا عند إشارة المرور. (بصيغة الاحترام)" },
      ru: "На светофо́ре ___ напра́во.",
      answers: ["поверни́те"],
      why: { en: "From the они́-form: поверну́т → поверни́ → поверни́те.", ar: "من صيغة они́: поверну́т ← поверни́ ← поверни́те." },
    },
    {
      kind: "order",
      prompt: { en: "Build the polite question: Could you tell me where the metro station is?", ar: "كوّن السؤال المهذّب: هل يمكن أن تدلّني أين محطة المترو؟" },
      tokens: ["где", "метро́", "Вы", "ста́нция", "подска́жете", "не"],
      answers: ["Вы не подска́жете, где ста́нция метро́?"],
      why: { en: "Вы не подска́жете… is the polite start; the question follows.", ar: "Вы не подска́жете… بداية مهذّبة، ثم يأتي السؤال." },
    },
    {
      kind: "translate",
      prompt: { en: "Go straight on, then turn left. (formal)", ar: "امشِ مباشرة، ثم انعطف يسارًا. (بصيغة الاحترام)" },
      answers: [
        "Иди́те пря́мо, пото́м поверни́те нале́во.",
        "Иди́те пря́мо, а пото́м поверни́те нале́во.",
        "Иди́те пря́мо, пото́м нале́во.",
        "Пройди́те пря́мо, пото́м поверни́те нале́во.",
        "Пройди́те пря́мо, а пото́м поверни́те нале́во.",
      ],
      why: { en: "Imperatives with -те for вы: иди́те, поверни́те.", ar: "صيغة الأمر مع -те لـ вы: иди́те، поверни́те." },
    },
    {
      kind: "translate",
      prompt: { en: "I'm lost. (a man speaking)", ar: "لقد ضللتُ الطريق. (يقولها رجل)" },
      answers: ["Я заблуди́лся."],
      why: { en: "A woman would say Я заблуди́лась.", ar: "المرأة تقول: Я заблуди́лась." },
    },
    {
      kind: "translate",
      prompt: { en: "Excuse me, how do I get to the centre? (by transport)", ar: "عفوًا، كيف أصل إلى وسط المدينة؟ (بوسيلة نقل)" },
      answers: ["Извини́те, как дое́хать до це́нтра?", "Извини́те, вы не подска́жете, как дое́хать до це́нтра?", "Извини́те, как мне дое́хать до це́нтра?"],
      why: { en: "дое́хать до + genitive: до це́нтра.", ar: "дое́хать до + حالة الإضافة: до це́нтра." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What are the directions?", ar: "استمع. ما الاتجاهات؟" },
      ru: "Иди́те пря́мо до светофо́ра, пото́м поверни́те напра́во.",
      listen: true,
      options: [
        "Straight on to the crossroads, then left · مباشرة حتى التقاطع ثم يسارًا",
        "Straight on to the traffic lights, then right · مباشرة حتى الإشارة ثم يمينًا",
        "Right at the corner, then straight on · يمينًا عند الناصية ثم مباشرة",
      ],
      answer: 1,
      why: { en: "до светофо́ра = to the lights; напра́во = right.", ar: "до светофо́ра = حتى الإشارة، و напра́во = يمينًا." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. What should you do?", ar: "استمع. ماذا يجب أن تفعل؟" },
      ru: "Выходи́те на сле́дующей остано́вке.",
      listen: true,
      options: [
        "Get on at the next stop · اركب في الموقف التالي",
        "The next stop is the station · الموقف التالي هو المحطة",
        "Get off at the next stop · انزل في الموقف التالي",
      ],
      answer: 2,
      why: { en: "выходи́те = get off; на сле́дующей остано́вке = at the next stop.", ar: "выходи́те = انزل، و на сле́дующей остано́вке = في الموقف التالي." },
    },
  ],
  topics: ["directions", "transport", "imperative", "city"],
  search: ["Russian asking for directions как пройти", "Russian directions направо налево прямо", "Russian imperative mood explained"],
  speaking: {
    scenario: {
      en: "First the tutor is a tourist lost in Cairo: give directions from Khan el-Khalili to a café and to a metro station. Then you are lost in Moscow: stop a passer-by and ask how to get to Red Square and to the railway station.",
      ar: "أولًا، المعلّم سائح ضلّ طريقه في القاهرة: صف له الطريق من خان الخليلي إلى مقهى وإلى محطة مترو. ثم تكون أنت تائهًا في موسكو: أوقف أحد المارّة واسأله كيف تصل إلى الساحة الحمراء وإلى محطة القطارات.",
    },
    tutorBrief:
      "Two role-plays. First play a Russian tourist lost in Cairo who asks the learner the way (Извините, вы не подскажете, как пройти к метро? Как доехать до музея?); make the learner give directions with прямо, направо, налево, до перекрёстка, до светофора, на углу and imperatives with вы (идите, поверните, садитесь на…, выходите на…). Then swap: play a friendly Moscow passer-by and answer the learner's questions about getting to Red Square and to the railway station, with one change on the metro (пересадка) and a tram stop; ask the learner to repeat the route back. Correct справа / слева vs направо / налево, до + genitive (до вокзала), к + dative (к метро) and the -те imperatives. Finish by confirming the whole route in one sentence.",
    prompts: [
      { ru: "Извини́те, вы не подска́жете, как пройти́ к метро́?", en: "Excuse me, could you tell me how to get to the metro?", ar: "عفوًا، هل يمكن أن تدلّني كيف أصل إلى المترو؟" },
      { ru: "Иди́те пря́мо до перекрёстка, пото́м поверни́те напра́во.", en: "Go straight on to the crossroads, then turn right.", ar: "امشِ مباشرة حتى التقاطع، ثم انعطف يمينًا." },
      { ru: "Сади́тесь на авто́бус и выходи́те на пло́щади.", en: "Take the bus and get off at the square.", ar: "اركب الحافلة وانزل عند الساحة." },
      { ru: "Кафе́ на углу́, сле́ва.", en: "The café is on the corner, on the left.", ar: "المقهى على الناصية، على اليسار." },
      { ru: "Как дое́хать до вокза́ла?", en: "How do I get to the railway station?", ar: "كيف أصل إلى محطة القطارات؟" },
    ],
  },
  journal: {
    en: "Write 5–8 sentences explaining the way from your home to your favourite café or shop — first on foot, then by transport. Use пря́мо, напра́во, нале́во, до…, на углу́ and the imperatives иди́те, поверни́те, сади́тесь, выходи́те.",
    ar: "اكتب من ٥ إلى ٨ جمل تشرح فيها الطريق من بيتك إلى مقهاك أو متجرك المفضّل — أولًا سيرًا على الأقدام، ثم بوسيلة نقل. استخدم пря́мо، напра́во، нале́во، до…، на углу́ وصيغ الأمر иди́те، поверни́те، сади́тесь، выходи́те.",
  },
  culture: {
    en: "Russians rarely use north or south when they give directions; they count stops and turns — «три остано́вки на трамва́е» (three stops by tram) — and name landmarks: the metro, a shop, the traffic lights. Moscow buildings carry a plate with the street name and the house number, which helps a lot when you are lost.",
    ar: "نادرًا ما يستخدم الروس الشمال أو الجنوب عند وصف الطريق؛ فهم يعدّون المواقف والمنعطفات — «три остано́вки на трамва́е» (ثلاثة مواقف بالترام) — ويذكرون المعالم: المترو، أو متجرًا، أو إشارة المرور. وعلى مباني موسكو لوحات تحمل اسم الشارع ورقم البيت، وهي مفيدة جدًّا عندما تضلّ طريقك.",
  },
};

const DAY_41: Day = {
  n: 41,
  week: 6,
  kind: "immersion",
  title: { ru: "Смо́трим: моско́вское метро́", en: "Watch: the Moscow metro", ar: "نشاهد: مترو موسكو" },
  goals: [
    {
      en: "Understand metro announcements: Осторо́жно, две́ри закрыва́ются! Сле́дующая ста́нция…",
      ar: "أن تفهم إعلانات المترو: Осторо́жно, две́ри закрыва́ются! Сле́дующая ста́нция…",
    },
    {
      en: "Follow a metro trip with one change of line, and retell it.",
      ar: "أن تتابع رحلة بالمترو فيها تغيير واحد للخط، وأن تعيد سردها.",
    },
  ],
  words: [
    {
      id: "d41-01", ru: "ваго́н", say: "vagOn", en: "(train) carriage, car", ar: "عربة (قطار)", pos: "noun", g: "m",
      ex: { ru: "В ваго́не мно́го пассажи́ров.", en: "There are a lot of passengers in the carriage.", ar: "في العربة ركّاب كثيرون." },
    },
    {
      id: "d41-02", ru: "эскала́тор", say: "eskalAtar", en: "escalator", ar: "سلّم متحرّك", pos: "noun", g: "m",
      ex: { ru: "Я е́ду на эскала́торе.", en: "I'm riding the escalator.", ar: "أنا على السلّم المتحرّك." },
    },
    {
      id: "d41-03", ru: "ли́ния", say: "lIniya", en: "(metro) line", ar: "خطّ (مترو)", pos: "noun", g: "f",
      ex: { ru: "Мне ну́жно на кра́сную ли́нию.", en: "I need the red line.", ar: "أحتاج إلى الخط الأحمر." },
    },
    {
      id: "d41-04", ru: "осторо́жно", say: "astarOzhna", en: "careful! mind (the doors)!", ar: "انتبه! احذر!", pos: "adv",
      ex: { ru: "Осторо́жно! Здесь эскала́тор.", en: "Careful! There's an escalator here.", ar: "انتبه! هنا سلّم متحرّك." },
    },
    {
      id: "d41-05", ru: "Две́ри закрыва́ются.", say: "dvyEri zakryvAyutsa.", en: "The doors are closing.", ar: "الأبواب تُغلق.", pos: "phrase",
      note: { en: "The full announcement: Осторо́жно, две́ри закрыва́ются!", ar: "الإعلان كاملًا: Осторо́жно, две́ри закрыва́ются!" },
    },
    {
      id: "d41-06", ru: "Сле́дующая ста́нция…", say: "slyEduyushchaya stAntsyya…", en: "The next station is…", ar: "المحطة التالية…", pos: "phrase",
      ex: { ru: "Сле́дующая ста́нция — «Парк культу́ры».", en: "The next station is Park Kultury.", ar: "المحطة التالية: «بارك كولتوري»." },
    },
    {
      id: "d41-07", ru: "пассажи́р", say: "pasazhYr", en: "passenger", ar: "راكب", pos: "noun", g: "m",
      forms: "мн. ч. пассажи́ры",
      ex: { ru: "Пассажи́ры выхо́дят из ваго́на.", en: "The passengers get out of the carriage.", ar: "الركّاب ينزلون من العربة." },
    },
    {
      id: "d41-08", ru: "Вы выхо́дите?", say: "vy vykhOditye?", en: "Are you getting off? (asked on crowded transport)", ar: "هل ستنزل؟ (سؤال في المواصلات المزدحمة)", pos: "phrase",
      note: { en: "If you are not getting off, say Нет and let the person pass.", ar: "إن لم تكن نازلًا فقل Нет وأفسح الطريق." },
    },
  ],
  grammar: [
    {
      id: "d41-g1",
      title: { en: "Вы выхо́дите? or Выходи́те! — the stress changes the meaning", ar: "Вы выхо́дите؟ أم Выходи́те! — النبر يغيّر المعنى" },
      en: [
        "In many -ить verbs the вы-form of the present and the вы-imperative are spelled the same. When the verb has a moving stress, the stress is the only difference: вы выхо́дите (you are getting off) — выходи́те! (get off!).",
        "Listen for the stress: on the stem (выхо́дите) it is a statement or a question; on the и before -те (выходи́те) it is a command. The same happens with хо́дите — ходи́те and смо́трите — смотри́те.",
      ],
      ar: [
        "في كثير من الأفعال المنتهية بـ -ить تُكتب صيغة вы في الحاضر وصيغة الأمر لـ вы بالحروف نفسها. وإذا كان نبر الفعل متحرّكًا فلا يفرّق بينهما إلا النبر: вы выхо́дите (أنتم تنزلون) — выходи́те! (انزلوا!).",
        "انتبه إلى النبر: إذا وقع على الجذر (выхо́дите) فهي جملة خبرية أو سؤال، وإذا وقع على и قبل -те (выходи́те) فهي أمر. ويحدث الشيء نفسه في хо́дите — ходи́те و смо́трите — смотри́те.",
      ],
      tables: [
        {
          caption: { en: "Same letters, different stress", ar: "الحروف نفسها والنبر مختلف" },
          head: ["Present · الحاضر", "Imperative · صيغة الأمر"],
          rows: [
            ["Вы выхо́дите?", "Выходи́те!"],
            ["Вы хо́дите пешко́м?", "Ходи́те пешко́м!"],
            ["Вы смо́трите фильм?", "Смотри́те!"],
          ],
        },
      ],
      examples: [
        {
          ru: "— Вы выхо́дите? — Нет, я выхожу́ на ста́нции «Университе́т».", en: "— Are you getting off? — No, I'm getting off at Universitet.",
          ar: "— هل ستنزل؟ — لا، سأنزل في محطة «أونيفيرسيتيت» (الجامعة).",
        },
        { ru: "Выходи́те на сле́дующей ста́нции.", en: "Get off at the next station.", ar: "انزل في المحطة التالية." },
      ],
    },
  ],
  dialogue: {
    title: { ru: "Ахме́д в метро́", en: "Ahmed in the metro", ar: "أحمد في المترو" },
    setting: {
      en: "Saturday. Ahmed takes the Moscow metro on his own for the first time: from Kiyevskaya station to Universitet, changing lines once at Park Kultury. Anna is waiting for him at the end.",
      ar: "يوم السبت. أحمد يركب مترو موسكو وحده لأول مرة: من محطة «كييفسكايا» إلى محطة «أونيفيرسيتيت»، مع تغيير واحد للخط في «بارك كولتوري». وفي نهاية الرحلة تنتظره آنا.",
    },
    lines: [
      {
        who: "A", name: "Расска́зчик", ru: "Суббо́та. Ахме́д е́дет к А́нне в университе́т. Он ещё пло́хо зна́ет метро́.",
        en: "Saturday. Ahmed is going to see Anna at the university. He doesn't know the metro well yet.", ar: "يوم السبت. أحمد ذاهب لزيارة آنا في الجامعة، وهو لا يعرف المترو جيدًا بعد.",
      },
      {
        who: "A", name: "Расска́зчик", ru: "Вот ста́нция «Ки́евская». Ахме́д е́дет на эскала́торе и смо́трит: как краси́во!",
        en: "Here is Kiyevskaya station. Ahmed rides the escalator and looks around: how beautiful!", ar: "ها هي محطة «كييفسكايا». يركب أحمد السلّم المتحرّك وينظر حوله: ما أجملها!",
      },
      {
        who: "B", name: "Го́лос в метро́", ru: "Осторо́жно, две́ри закрыва́ются! Сле́дующая ста́нция — «Парк культу́ры».",
        en: "Careful, the doors are closing! The next station is Park Kultury.", ar: "انتبهوا، الأبواب تُغلق! المحطة التالية: «بارك كولتوري».",
      },
      {
        who: "A", name: "Расска́зчик", ru: "В ваго́не мно́го пассажи́ров. Ахме́д смо́трит ка́рту метро́.",
        en: "The carriage is full of passengers. Ahmed looks at the metro map.", ar: "في العربة ركّاب كثيرون. أحمد ينظر إلى خريطة المترو.",
      },
      {
        who: "A", name: "Ахме́д", ru: "Так… Мне ну́жно на кра́сную ли́нию. Где здесь переса́дка?",
        en: "So… I need the red line. Where do I change?", ar: "حسنًا… عليّ أن أنتقل إلى الخط الأحمر. أين أغيّر الخط هنا؟",
      },
      { who: "B", name: "Го́лос в метро́", ru: "Ста́нция «Парк культу́ры».", en: "Park Kultury station.", ar: "محطة «بارك كولتوري»." },
      {
        who: "A", name: "Ахме́д", ru: "Извини́те, как дое́хать до ста́нции «Университе́т»?",
        en: "Excuse me, how do I get to Universitet station?", ar: "عفوًا، كيف أصل إلى محطة «أونيفيرسيتيت»؟",
      },
      {
        who: "B", name: "Же́нщина", ru: "Вам ну́жно на кра́сную ли́нию. Иди́те пря́мо, пото́м напра́во — там переса́дка. Э́то четы́ре ста́нции.",
        en: "You need the red line. Go straight on, then right — that's where you change. It's four stations.",
        ar: "تحتاج إلى الخط الأحمر. امشِ مباشرة ثم يمينًا — هناك تغيّر الخط. المسافة أربع محطات.",
      },
      { who: "A", name: "Ахме́д", ru: "Спаси́бо большо́е!", en: "Thank you very much!", ar: "شكرًا جزيلًا!" },
      {
        who: "A", name: "Расска́зчик", ru: "Ахме́д уже́ на кра́сной ли́нии. Ста́нция «Воробьёвы го́ры» — на мосту́! Ахме́д смо́трит в окно́: там река́.",
        en: "Now Ahmed is on the red line. Vorobyovy Gory station is on a bridge! Ahmed looks out of the window: there's the river.",
        ar: "أحمد الآن على الخط الأحمر. محطة «فوروبيوفي غوري» تقع على جسر! ينظر أحمد من النافذة: هناك النهر.",
      },
      { who: "B", name: "Де́вушка", ru: "Извини́те, вы выхо́дите?", en: "Excuse me, are you getting off?", ar: "عفوًا، هل ستنزل؟" },
      {
        who: "A", name: "Ахме́д", ru: "Нет, я выхожу́ на ста́нции «Университе́т».",
        en: "No, I'm getting off at Universitet.", ar: "لا، سأنزل في محطة «أونيفيرسيتيت».",
      },
      { who: "B", name: "Го́лос в метро́", ru: "Ста́нция «Университе́т».", en: "Universitet station.", ar: "محطة «أونيفيرسيتيت»." },
      {
        who: "A", name: "Расска́зчик", ru: "Ахме́д выхо́дит из ваго́на. А вот и А́нна! Она́ ждёт его́ у вы́хода.",
        en: "Ahmed gets out of the carriage. And there's Anna! She is waiting for him by the exit.", ar: "يخرج أحمد من العربة. وها هي آنا! إنها تنتظره عند المخرج.",
      },
      { who: "B", name: "А́нна", ru: "Ахме́д, приве́т! Ну как метро́?", en: "Hi, Ahmed! So, how was the metro?", ar: "مرحبًا يا أحمد! كيف كان المترو؟" },
      {
        who: "A", name: "Ахме́д", ru: "Метро́ о́чень краси́вое! И я не заблуди́лся!",
        en: "The metro is really beautiful! And I didn't get lost!", ar: "المترو جميل جدًّا! ولم أضلّ الطريق!",
      },
    ],
  },
  exercises: [
    {
      kind: "choice",
      prompt: { en: "What do you hear just before the doors close?", ar: "ماذا تسمع قبل أن تُغلق الأبواب مباشرة؟" },
      options: ["Сле́дующая ста́нция.", "Осторо́жно, две́ри закрыва́ются!", "Вы выхо́дите?"],
      answer: 1,
      why: {
        en: "Осторо́жно, две́ри закрыва́ются! — careful, the doors are closing.",
        ar: "Осторо́жно, две́ри закрыва́ются! أي: انتبهوا، الأبواب تُغلق.",
      },
    },
    {
      kind: "fill",
      prompt: { en: "Complete the announcement: The next station is Universitet.", ar: "أكمل الإعلان: المحطة التالية «أونيفيرسيتيت»." },
      ru: "Сле́дующая ___ — «Университе́т».",
      answers: ["ста́нция"],
      why: { en: "ста́нция is feminine, so сле́дующая.", ar: "ста́нция مؤنّثة، لذلك نقول сле́дующая." },
    },
    {
      kind: "choice",
      prompt: { en: "A man in a crowded carriage wants to get past you. What does he ask?", ar: "رجل في عربة مزدحمة يريد أن يمرّ. ماذا يسأل؟" },
      options: ["Выходи́те!", "Вы выхо́дите?", "Где вы́ход?"],
      answer: 1,
      why: {
        en: "Вы выхо́дите? (stress on the stem) is the polite question; Выходи́те! is a command.",
        ar: "Вы выхо́дите؟ (النبر على الجذر) هو السؤال المهذّب، أمّا Выходи́те! فأمر.",
      },
    },
    {
      kind: "order",
      prompt: { en: "Build the sentence: I need the red line.", ar: "كوّن الجملة: أحتاج إلى الخط الأحمر." },
      tokens: ["ли́нию", "Мне", "кра́сную", "на", "ну́жно"],
      answers: ["Мне ну́жно на кра́сную ли́нию."],
      why: { en: "Мне ну́жно на + accusative: where you need to go.", ar: "Мне ну́жно на + حالة المفعول به: إلى أين تحتاج أن تذهب." },
    },
    {
      kind: "translate",
      prompt: { en: "There are a lot of passengers in the carriage.", ar: "في العربة ركّاب كثيرون." },
      answers: ["В ваго́не мно́го пассажи́ров.", "Мно́го пассажи́ров в ваго́не."],
      why: { en: "мно́го + genitive plural: пассажи́ров.", ar: "мно́го + حالة الإضافة في الجمع: пассажи́ров." },
    },
    {
      kind: "choice",
      prompt: { en: "Listen. Where is the exit?", ar: "استمع. أين المخرج؟" },
      ru: "Эскала́тор спра́ва, а вы́ход сле́ва.",
      listen: true,
      options: ["On the left · على اليسار", "On the right · على اليمين", "Straight ahead · إلى الأمام"],
      answer: 0,
      why: { en: "вы́ход сле́ва = the exit is on the left.", ar: "вы́ход сле́ва = المخرج على اليسار." },
    },
  ],
  topics: ["transport", "culture", "listening"],
  search: ["Moscow metro announcements осторожно двери закрываются", "Moscow metro tour in Russian with subtitles", "how to use the Moscow metro in Russian"],
  speaking: {
    scenario: {
      en: "A friend is visiting Moscow and wants to meet you. Plan a metro route for them between two stations with one change, and explain it: which line, where to change, how many stations and where to get off.",
      ar: "صديق يزور موسكو ويريد أن يلتقي بك. خطّط له طريقًا بالمترو بين محطتين مع تغيير واحد للخط، واشرحه: أيّ خط، وأين يغيّر، وكم محطة، وأين ينزل.",
    },
    tutorBrief:
      "Play Anna (Анна), a Moscow student, who phones the learner and asks them to explain a metro route with one change for her visiting friend. Pick a real pair of stations (for example Киевская to Университет, changing at Парк культуры to the red line) and ask: Какая линия? Где пересадка? Сколько станций? Где выходить? Use and elicit линия, станция, пересадка, вагон, эскалатор, выход, вход, осторожно, следующая станция, двери закрываются and Вы выходите?, plus the imperatives садитесь, выходите, идите and доехать до + genitive. Correct gently: на станции (where) vs на станцию (where to), and the stress in выхо́дите vs выходи́те. Finish by having the learner repeat the whole route in 3–4 sentences.",
    prompts: [
      { ru: "Сади́тесь на метро́ на ста́нции «Ки́евская».", en: "Take the metro at Kiyevskaya station.", ar: "اركب المترو من محطة «كييفسكايا»." },
      {
        ru: "На ста́нции «Парк культу́ры» — переса́дка на кра́сную ли́нию.", en: "At Park Kultury, change to the red line.",
        ar: "في محطة «بارك كولتوري» غيّر إلى الخط الأحمر.",
      },
      { ru: "Э́то четы́ре ста́нции.", en: "It's four stations.", ar: "المسافة أربع محطات." },
      { ru: "Выходи́те на ста́нции «Университе́т».", en: "Get off at Universitet station.", ar: "انزل في محطة «أونيفيرسيتيت»." },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about a trip on the metro or another kind of transport in your city: where you went, where you got on and off, what you saw and heard, and whether it was easy or hard (Мне бы́ло легко́ / тру́дно).",
    ar: "اكتب من ٥ إلى ٨ جمل عن رحلة بالمترو أو بوسيلة نقل أخرى في مدينتك: إلى أين ذهبت، وأين ركبت وأين نزلت، وماذا رأيت وسمعت، وهل كان ذلك سهلًا أم صعبًا (Мне бы́ло легко́ / тру́дно).",
  },
  culture: {
    en: "The Moscow metro opened in 1935, and many stations — «Комсомо́льская», «Маяко́вская», «Ки́евская» — look like palaces, with mosaics, marble and chandeliers. Listen to the voices, too: on most lines, trains going towards the city centre have a man announcing the stations, and trains going away from the centre a woman.",
    ar: "افتُتح مترو موسكو عام ١٩٣٥، وكثير من محطاته — «Комсомо́льская»، «Маяко́вская»، «Ки́евская» — تشبه القصور بما فيها من فسيفساء ورخام وثريّات. واستمع إلى الأصوات أيضًا: في معظم الخطوط، يعلن رجلٌ أسماءَ المحطات في القطارات المتّجهة إلى وسط المدينة، وتعلنها امرأة في القطارات المتّجهة بعيدًا عن الوسط.",
  },
  worksheet: {
    before: [
      {
        en: "Listen for three station names: «Ки́евская», «Парк культу́ры», «Университе́т». Where does Ahmed start, where does he change, and where does he get off?",
        ar: "استمع إلى أسماء ثلاث محطات: «Ки́евская»، «Парк культу́ры»، «Университе́т». أين يبدأ أحمد رحلته، وأين يغيّر الخط، وأين ينزل؟",
      },
      {
        en: "The announcements always use the same words: Осторо́жно, две́ри закрыва́ются! and Сле́дующая ста́нция… — the station name comes last.",
        ar: "الإعلانات تستخدم دائمًا الكلمات نفسها: Осторо́жно, две́ри закрыва́ются! و Сле́дующая ста́нция… — واسم المحطة يأتي في النهاية.",
      },
      {
        en: "Notice two questions between passengers: Как дое́хать до…? and Вы выхо́дите?",
        ar: "لاحظ سؤالين بين الركّاب: Как дое́хать до…؟ و Вы выхо́дите؟",
      },
    ],
    questions: [
      {
        kind: "choice",
        prompt: { en: "Where is Ahmed going?", ar: "إلى أين يذهب أحمد؟" },
        options: ["To work · إلى العمل", "To Anna at the university · إلى آنا في الجامعة", "To the railway station · إلى محطة القطارات"],
        answer: 1,
        why: { en: "The story says: Ахме́д е́дет к А́нне в университе́т.", ar: "تقول القصة: Ахме́д е́дет к А́нне в университе́т." },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. What does the announcement say?", ar: "استمع. ماذا يقول الإعلان؟" },
        ru: "Осторо́жно, две́ри закрыва́ются! Сле́дующая ста́нция — «Парк культу́ры».",
        listen: true,
        options: [
          "The doors are opening; this is Park Kultury. · الأبواب تُفتح، وهذه «بارك كولتوري».",
          "Careful, the doors are closing; the next station is Park Kultury. · انتبهوا، الأبواب تُغلق، والمحطة التالية «بارك كولتوري».",
          "Change here for Park Kultury. · غيّروا الخط هنا إلى «بارك كولتوري».",
        ],
        answer: 1,
        why: { en: "закрыва́ются = are closing; сле́дующая = next.", ar: "закрыва́ются = تُغلق، و сле́дующая = التالية." },
      },
      {
        kind: "choice",
        prompt: { en: "Where does Ahmed change lines?", ar: "أين يغيّر أحمد الخط؟" },
        options: ["At Kiyevskaya · في «كييفسكايا»", "At Universitet · في «أونيفيرسيتيت»", "At Park Kultury · في «بارك كولتوري»"],
        answer: 2,
        why: { en: "At Park Kultury he changes to the red line.", ar: "في «بارك كولتوري» ينتقل إلى الخط الأحمر." },
      },
      {
        kind: "choice",
        prompt: { en: "How many stations is it on the red line to Universitet?", ar: "كم محطة على الخط الأحمر حتى «أونيفيرسيتيت»؟" },
        options: ["Two · اثنتان", "Four · أربع", "Seven · سبع"],
        answer: 1,
        why: { en: "Э́то четы́ре ста́нции — four stations.", ar: "Э́то четы́ре ста́нции — أربع محطات." },
      },
      {
        kind: "choice",
        prompt: { en: "What is special about Vorobyovy Gory station?", ar: "ما المميّز في محطة «فوروبيوفي غوري»؟" },
        options: [
          "It is on a bridge over the river. · تقع على جسر فوق النهر.",
          "It has no exit. · ليس لها مخرج.",
          "It is where you change to the red line. · فيها تغيير إلى الخط الأحمر.",
        ],
        answer: 0,
        why: {
          en: "Ста́нция «Воробьёвы го́ры» — на мосту́, so Ahmed sees the river.",
          ar: "Ста́нция «Воробьёвы го́ры» — на мосту́، لذلك يرى أحمد النهر.",
        },
      },
      {
        kind: "choice",
        prompt: { en: "Listen. What does the young woman ask?", ar: "استمع. ماذا تسأل الفتاة؟" },
        ru: "Извини́те, вы выхо́дите?",
        listen: true,
        options: ["Where are you going? · إلى أين تذهب؟", "Do you need to change? · هل تحتاج إلى تغيير الخط؟", "Are you getting off? · هل ستنزل؟"],
        answer: 2,
        why: { en: "вы выхо́дите is the present tense: 'are you getting off?'.", ar: "вы выхо́дите في الزمن الحاضر: «هل ستنزل؟»." },
      },
      {
        kind: "choice",
        prompt: { en: "Where is Anna waiting?", ar: "أين تنتظر آنا؟" },
        options: ["By the exit · عند المخرج", "On the escalator · على السلّم المتحرّك", "In the carriage · في العربة"],
        answer: 0,
        why: { en: "The story says: Она́ ждёт его́ у вы́хода — by the exit.", ar: "تقول القصة: Она́ ждёт его́ у вы́хода — أي عند المخرج." },
      },
    ],
    retell: {
      en: "Retell Ahmed's trip in 6–8 sentences in the present tense: where he is going, where he starts, what he hears, where he changes lines, what he sees from the window and who meets him. Then describe a real metro route between two Moscow stations with one change.",
      ar: "أعد سرد رحلة أحمد في ٦ إلى ٨ جمل بالزمن الحاضر: إلى أين يذهب، ومن أين يبدأ، وماذا يسمع، وأين يغيّر الخط، وماذا يرى من النافذة، ومَن يستقبله. ثم صف طريقًا حقيقيًا بالمترو بين محطتين في موسكو فيه تغيير واحد للخط.",
    },
  },
};

const DAY_42: Day = {
  n: 42,
  week: 6,
  kind: "review",
  title: { ru: "Повторе́ние: неде́ля 6", en: "Review: week 6", ar: "مراجعة: الأسبوع ٦" },
  goals: [
    {
      en: "Check the dative, the future tense, verbs of motion and directions from days 36–40.",
      ar: "أن تراجع حالة المستفيد، والزمن المستقبل، وأفعال الحركة، والاتجاهات من الأيام ٣٦–٤٠.",
    },
    {
      en: "Pass a short oral exam: likes and needs, the way to a café and next week's plans.",
      ar: "أن تجتاز اختبارًا شفويًا قصيرًا: ما يعجبك وما تحتاج إليه، والطريق إلى مقهى، وخططك للأسبوع القادم.",
    },
  ],
  words: [],
  grammar: [
    {
      id: "d42-g1",
      title: { en: "Week 6 in one table", ar: "الأسبوع السادس في جدول واحد" },
      en: [
        "The dative (кому́?) marks the person who likes, needs or receives something: Мне нра́вится… Мне ну́жно… Я звоню́ бра́ту. к + dative means 'to a person': к врачу́.",
        "The future is бу́ду + an imperfective infinitive for activities (бу́ду рабо́тать) and a perfective verb with present endings for one result (сде́лаю, позвоню́).",
        "Motion: идти́ / е́хать for one trip now, ходи́ть / е́здить for regular trips; куда́? takes the accusative, где? the prepositional. For directions: пря́мо, напра́во, нале́во and the imperatives иди́те, поверни́те, сади́тесь, выходи́те.",
      ],
      ar: [
        "حالة المستفيد (кому́؟) تدلّ على الشخص الذي يعجبه شيء أو يحتاج إليه أو يستقبله: Мне нра́вится… Мне ну́жно… Я звоню́ бра́ту. و к + حالة المستفيد تعني «إلى شخص»: к врачу́.",
        "المستقبل هو бу́ду + مصدر فعل غير تام للأنشطة (бу́ду рабо́тать)، والفعل التام مع نهايات الحاضر لنتيجة واحدة (сде́лаю، позвоню́).",
        "الحركة: идти́ / е́хать لرحلة واحدة الآن، و ходи́ть / е́здить للرحلات المنتظمة؛ السؤال куда́؟ يأخذ حالة المفعول به، و где؟ يأخذ حالة حرف الجر. وللاتجاهات: пря́мо، напра́во، нале́во وصيغ الأمر иди́те، поверни́те، сади́тесь، выходи́те.",
      ],
      tables: [
        {
          caption: { en: "Week 6 at a glance", ar: "الأسبوع السادس في لمحة" },
          head: ["Structure · التركيب", "Example · مثال", "Meaning · المعنى"],
          rows: [
            ["dative + нра́вится / нра́вятся", "Мне нра́вятся фи́льмы.", "I like films. · تعجبني الأفلام."],
            ["dative + ну́жно / нельзя́ + infinitive", "Ему́ ну́жно рабо́тать.", "He needs to work. · عليه أن يعمل."],
            ["dative + number + год / го́да / лет", "Ей два́дцать два го́да.", "She is 22. · عمرها ٢٢ عامًا."],
            ["verb + dative (+ accusative)", "Я дарю́ ма́ме кни́гу.", "I give Mum a book. · أُهدي أمّي كتابًا."],
            ["бу́ду + imperfective infinitive", "За́втра я бу́ду отдыха́ть.", "Tomorrow I'll rest. · غدًا سأرتاح."],
            ["perfective future", "Я позвоню́ тебе́.", "I'll call you. · سأتصل بك."],
            ["идти́ / ходи́ть", "Я иду́ домо́й. Я ча́сто хожу́ в парк.", "I'm going home. I often go to the park. · أنا ذاهب إلى البيت. أذهب إلى الحديقة كثيرًا."],
            ["е́хать / е́здить + на…", "Я е́зжу на рабо́ту на метро́.", "I go to work by metro. · أذهب إلى العمل بالمترو."],
            ["imperative", "Поверни́те нале́во.", "Turn left. · انعطف يسارًا."],
          ],
        },
      ],
      examples: [
        {
          ru: "Мне ну́жно к врачу́, но за́втра я бу́ду рабо́тать.", en: "I need to see the doctor, but tomorrow I'll be working.",
          ar: "عليّ أن أذهب إلى الطبيب، لكنّني سأعمل غدًا.",
        },
        { ru: "Я е́ду к бра́ту на по́езде.", en: "I'm going to my brother's by train.", ar: "أنا ذاهب إلى أخي بالقطار." },
      ],
    },
  ],
  exercises: [],
  topics: ["dative", "future-tense", "motion-verbs", "directions"],
  search: ["Russian dative case review", "Russian verbs of motion practice", "Russian future tense practice"],
  speaking: {
    scenario: {
      en: "Your week-6 oral exam. The examiner asks what you like and need, how old people in your family are, how to get from your home to a café, and what you will do next week.",
      ar: "اختبارك الشفوي للأسبوع السادس. يسألك الممتحن عمّا يعجبك وما تحتاج إليه، وعن أعمار أفراد عائلتك، وعن الطريق من بيتك إلى مقهى، وعمّا ستفعله في الأسبوع القادم.",
    },
    tutorBrief:
      "Act as a friendly but precise examiner for the week-6 oral exam (about 8 minutes; use вы). Task 1 — likes, dislikes and needs: Что вам нравится? Что вам не нравится? Что вам нужно делать в понедельник? Task 2 — ages: Сколько вам лет? У вас есть брат? А сестра? Сколько ему / ей лет? Task 3 — directions from their home to a café, first on foot and then by transport (Как пройти / доехать…?), expecting прямо, направо, налево, до + genitive, на углу, imperatives with -те, and идти / ходить, ехать / ездить. Task 4 — plans for next weekend and next week with the future (буду + imperfective, the perfective future) and one promise. Ask one follow-up question per task and do not correct during a task. Afterwards give a score out of 20: up to 5 per task (2 for completing the task, 2 for grammar — dative forms, год / года / лет, the future, verbs of motion, куда / где — and 1 for pronunciation and stress). Then list the three most useful corrections and end with encouragement.",
    prompts: [
      { ru: "Мне нра́вится кино́, а футбо́л мне не нра́вится.", en: "I like the cinema, but I don't like football.", ar: "تعجبني السينما، أمّا كرة القدم فلا تعجبني." },
      { ru: "У меня́ есть сестра́. Ей два́дцать лет.", en: "I have a sister. She is twenty.", ar: "لديّ أخت، وعمرها عشرون عامًا." },
      { ru: "Иди́те пря́мо, пото́м поверни́те нале́во. Кафе́ на углу́.", en: "Go straight on, then turn left. The café is on the corner.", ar: "امشِ مباشرة، ثم انعطف يسارًا. المقهى على الناصية." },
      { ru: "На сле́дующей неде́ле я бу́ду мно́го рабо́тать.", en: "Next week I'll work a lot.", ar: "في الأسبوع القادم سأعمل كثيرًا." },
      { ru: "Я обяза́тельно зако́нчу рабо́ту в пя́тницу.", en: "I'll definitely finish the work on Friday.", ar: "سأنهي العمل حتمًا يوم الجمعة." },
    ],
  },
  journal: {
    en: "Write 5–8 sentences about this week and the next: what you liked and what was hard for you (Мне бы́ло тру́дно…), where you went and how (ходи́л / е́здил), whom you called or helped, and what you will do next week.",
    ar: "اكتب من ٥ إلى ٨ جمل عن هذا الأسبوع والأسبوع القادم: ما الذي أعجبك وما الذي كان صعبًا عليك (Мне бы́ло тру́дно…)، وإلى أين ذهبت وكيف (ходи́л / е́здил)، وبمن اتصلت أو مَن ساعدت، وماذا ستفعل في الأسبوع القادم.",
  },
  test: {
    sections: [
      {
        title: { en: "Words", ar: "الكلمات" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Which word means 'on foot'?", ar: "أيّ كلمة تعني «سيرًا على الأقدام»؟" },
            options: ["пешко́м", "пря́мо", "домо́й"],
            answer: 0,
            why: {
              en: "пешко́м = on foot; пря́мо = straight on; домо́й = (to) home.",
              ar: "пешко́м = سيرًا على الأقدام، пря́мо = إلى الأمام مباشرة، домо́й = إلى البيت.",
            },
          },
          {
            kind: "choice",
            prompt: { en: "What does послеза́втра mean?", ar: "ماذا تعني послеза́втра؟" },
            options: ["yesterday · أمس", "the day after tomorrow · بعد غد", "soon · قريبًا"],
            answer: 1,
            why: { en: "по́сле + за́втра = after tomorrow.", ar: "по́сле + за́втра = بعد غد." },
          },
          {
            kind: "choice",
            prompt: { en: "Which word is a place where two roads cross?", ar: "أيّ كلمة تعني مكان تقاطع طريقين؟" },
            options: ["светофо́р", "у́гол", "перекрёсток"],
            answer: 2,
            why: {
              en: "перекрёсток = crossroads; светофо́р = traffic lights; у́гол = corner.",
              ar: "перекрёсток = تقاطع، светофо́р = إشارة المرور، у́гол = ناصية.",
            },
          },
          {
            kind: "choice",
            prompt: { en: "How do you say 'I'm bored'?", ar: "كيف تقول «أشعر بالملل»؟" },
            options: ["Я ску́чный.", "Мне ску́чно.", "Мне ве́село."],
            answer: 1,
            why: { en: "Мне ску́чно; Я ску́чный means 'I am boring'.", ar: "Мне ску́чно، أمّا Я ску́чный فتعني «أنا شخص مملّ»." },
          },
          {
            kind: "choice",
            prompt: { en: "What do you give with дари́ть?", ar: "ماذا تعطي مع الفعل дари́ть؟" },
            options: ["a present · هدية", "an answer · جوابًا", "advice · نصيحة"],
            answer: 0,
            why: { en: "дари́ть / подари́ть = to give as a present.", ar: "дари́ть / подари́ть = يُهدي." },
          },
        ],
      },
      {
        title: { en: "Grammar", ar: "القواعد" },
        items: [
          {
            kind: "fill",
            prompt: { en: "Complete with я: I like Cairo.", ar: "أكمل بالضمير я: تعجبني القاهرة." },
            ru: "___ нра́вится Каи́р.",
            answers: ["Мне"],
            why: { en: "The person who likes is in the dative: мне.", ar: "مَن يعجبه الشيء يأتي في حالة المستفيد: мне." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: She is twenty-three.", ar: "أكمل: عمرها ثلاثة وعشرون عامًا." },
            ru: "Ей два́дцать три ___.",
            answers: ["го́да"],
            why: { en: "After 2, 3 and 4: го́да.", ar: "بعد ٢ و٣ و٤: го́да." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete with сестра́: I'm calling my sister.", ar: "أكمل بكلمة сестра́: أتّصل بأختي." },
            ru: "Я звоню́ ___.",
            answers: ["сестре́"],
            why: { en: "звони́ть + dative: сестре́.", ar: "звони́ть + حالة المستفيد: сестре́." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete: Tomorrow we will rest.", ar: "أكمل: غدًا سنرتاح." },
            ru: "За́втра мы ___ отдыха́ть.",
            answers: ["бу́дем"],
            why: { en: "мы → бу́дем + infinitive.", ar: "مع мы: бу́дем + المصدر." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete with ходи́ть: I often go to the park.", ar: "أكمل بالفعل ходи́ть: أذهب إلى الحديقة كثيرًا." },
            ru: "Я ча́сто ___ в парк.",
            answers: ["хожу́"],
            why: { en: "Regular trips on foot: хожу́.", ar: "رحلات منتظمة سيرًا على الأقدام: хожу́." },
          },
          {
            kind: "fill",
            prompt: { en: "Complete with Москва́: We're going to Moscow.", ar: "أكمل بكلمة Москва́: نحن ذاهبون إلى موسكو." },
            ru: "Мы е́дем в ___.",
            answers: ["Москву́"],
            why: { en: "Куда́? → accusative: в Москву́.", ar: "Куда́؟ ← حالة المفعول به: в Москву́." },
          },
        ],
      },
      {
        title: { en: "Listening", ar: "الاستماع" },
        items: [
          {
            kind: "choice",
            prompt: { en: "Listen. How old is Maxim?", ar: "استمع. كم عمر مكسيم؟" },
            ru: "Макси́му три́дцать оди́н год.",
            listen: true,
            options: ["21 · ٢١", "31 · ٣١", "41 · ٤١"],
            answer: 1,
            why: { en: "три́дцать оди́н = 31.", ar: "три́дцать оди́н تعني واحدًا وثلاثين (٣١)." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. What will the person do tomorrow?", ar: "استمع. ماذا سيفعل الشخص غدًا؟" },
            ru: "За́втра я бу́ду рабо́тать, а послеза́втра отдыха́ть.",
            listen: true,
            options: [
              "Rest tomorrow, work the day after · يرتاح غدًا ويعمل بعد غد",
              "Work tomorrow, rest the day after · يعمل غدًا ويرتاح بعد غد",
              "Work tomorrow and the day after · يعمل غدًا وبعد غد",
            ],
            answer: 1,
            why: { en: "за́втра — рабо́тать, послеза́втра — отдыха́ть.", ar: "за́втра — рабо́тать، و послеза́втра — отдыха́ть." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. How does the person get to work?", ar: "استمع. كيف يذهب الشخص إلى العمل؟" },
            ru: "Я е́зжу на рабо́ту на авто́бусе.",
            listen: true,
            options: ["On foot · سيرًا على الأقدام", "By tram · بالترام", "By bus · بالحافلة"],
            answer: 2,
            why: { en: "на авто́бусе = by bus.", ar: "на авто́бусе = بالحافلة." },
          },
          {
            kind: "choice",
            prompt: { en: "Listen. Where is the café?", ar: "استمع. أين المقهى؟" },
            ru: "Иди́те пря́мо, пото́м нале́во. Кафе́ на углу́.",
            listen: true,
            options: [
              "Straight on, then left, on the corner · مباشرة ثم يسارًا، على الناصية",
              "Straight on, then right, by the lights · مباشرة ثم يمينًا، عند الإشارة",
              "Left, then straight on, at the station · يسارًا ثم مباشرة، عند المحطة",
            ],
            answer: 0,
            why: { en: "пря́мо, нале́во, на углу́.", ar: "إلى الأمام، ثم يسارًا، عند الزاوية: пря́мо، нале́во، на углу́." },
          },
        ],
      },
      {
        title: { en: "Sentences", ar: "الجمل" },
        items: [
          {
            kind: "order",
            prompt: { en: "Build: I need to go to the doctor.", ar: "كوّن: عليّ أن أذهب إلى الطبيب." },
            tokens: ["к", "Мне", "врачу́", "ну́жно"],
            answers: ["Мне ну́жно к врачу́."],
            why: { en: "Мне ну́жно + к + dative.", ar: "Мне ну́жно + к + حالة المستفيد." },
          },
          {
            kind: "order",
            prompt: { en: "Build: Next week I'll travel.", ar: "كوّن: في الأسبوع القادم سأسافر." },
            tokens: ["бу́ду", "неде́ле", "я", "На", "путеше́ствовать", "сле́дующей"],
            answers: ["На сле́дующей неде́ле я бу́ду путеше́ствовать.", "Я бу́ду путеше́ствовать на сле́дующей неде́ле.", "Я на сле́дующей неде́ле бу́ду путеше́ствовать."],
            why: { en: "бу́ду + an imperfective infinitive for an activity.", ar: "бу́ду + مصدر فعل غير تام لنشاط." },
          },
          {
            kind: "order",
            prompt: { en: "Build: Where are you going? (formal, by transport)", ar: "كوّن: إلى أين تذهب حضرتك؟ (بوسيلة نقل)" },
            tokens: ["е́дете", "вы", "Куда́"],
            answers: ["Куда́ вы е́дете?", "Вы куда́ е́дете?"],
            why: { en: "Куда́ + е́хать for one trip by transport.", ar: "Куда́ + е́хать لرحلة واحدة بوسيلة نقل." },
          },
        ],
      },
      {
        title: { en: "Translation", ar: "الترجمة" },
        items: [
          {
            kind: "translate",
            prompt: { en: "Do you like football? (informal)", ar: "هل تعجبك كرة القدم؟ (غير رسمي)" },
            answers: ["Тебе́ нра́вится футбо́л?", "Тебе́ футбо́л нра́вится?", "Футбо́л тебе́ нра́вится?"],
            why: { en: "Тебе́ + нра́вится + the thing.", ar: "Тебе́ + нра́вится + الشيء." },
          },
          {
            kind: "translate",
            prompt: { en: "I'll call you tomorrow.", ar: "سأتصل بك غدًا." },
            answers: [
              "Я позвоню́ тебе́ за́втра.",
              "За́втра я позвоню́ тебе́.",
              "Я тебе́ позвоню́ за́втра.",
              "За́втра я тебе́ позвоню́.",
              "Я позвоню́ вам за́втра.",
              "За́втра я вам позвоню́.",
              "За́втра я позвоню́ вам.",
              "Я вам позвоню́ за́втра.",
            ],
            why: { en: "One promised call: perfective позвоню́ + dative.", ar: "اتصال واحد موعود: الفعل التام позвоню́ + حالة المستفيد." },
          },
          {
            kind: "translate",
            prompt: { en: "Turn right at the traffic lights. (formal)", ar: "انعطف يمينًا عند إشارة المرور. (بصيغة الاحترام)" },
            answers: ["Поверни́те напра́во на светофо́ре.", "На светофо́ре поверни́те напра́во."],
            why: { en: "поверни́те + напра́во; на светофо́ре = at the lights.", ar: "поверни́те + напра́во، و на светофо́ре = عند الإشارة." },
          },
          {
            kind: "translate",
            prompt: { en: "How do I get to the railway station? (by transport)", ar: "كيف أصل إلى محطة القطارات؟ (بوسيلة نقل)" },
            answers: ["Как дое́хать до вокза́ла?", "Как мне дое́хать до вокза́ла?"],
            why: { en: "дое́хать до + genitive.", ar: "дое́хать до + حالة الإضافة." },
          },
        ],
      },
    ],
    speaking: [
      {
        en: "Say three things you like and one you don't, and one thing you need to do this week.",
        ar: "قل ثلاثة أشياء تعجبك وشيئًا لا يعجبك، وشيئًا عليك فعله هذا الأسبوع.",
      },
      { en: "Say how old you are and how old two people in your family are.", ar: "قل كم عمرك وكم عمر شخصين من عائلتك." },
      {
        en: "Explain the way from your home to a café: first on foot, then by transport.",
        ar: "اشرح الطريق من بيتك إلى مقهى: أولًا سيرًا على الأقدام، ثم بوسيلة نقل.",
      },
      {
        en: "Describe your plans for next weekend and next week, with one promise (Я обяза́тельно…).",
        ar: "صف خططك لعطلة نهاية الأسبوع القادمة وللأسبوع القادم، مع وعد واحد (Я обяза́тельно…).",
      },
    ],
  },
};

export const WEEK_6: Day[] = [DAY_36, DAY_37, DAY_38, DAY_39, DAY_40, DAY_41, DAY_42];
