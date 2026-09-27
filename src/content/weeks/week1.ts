import type { Day } from "../types.ts";

// Week 1 · Sounds and first words.
// Day 4 is the hand-written exemplar every lesson in the course follows; see docs/content-style-guide.md.

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

export const WEEK_1: Day[] = [DAY_4];
