// The 33 letters, grouped the way week 1 teaches them: letters that look and sound familiar,
// "false friends" that look Latin but sound different, new shapes, and the two signs.
// Sound descriptions lean on Arabic where it helps (Г = Egyptian ج, Х = خ, Р = ر).

import type { Letter } from "./types.ts";

export const ALPHABET: readonly Letter[] = [
  { upper: "А", lower: "а", name: "а", group: "friend", ipa: "a", sound: { en: "a as in father.", ar: "مثل الألف الممدودة في «باب»." }, example: { ru: "ма́ма", say: "mAma", en: "mum", ar: "أم" } },
  { upper: "Б", lower: "б", name: "бэ", group: "new", ipa: "b", sound: { en: "b as in book.", ar: "مثل حرف الباء." }, example: { ru: "банк", say: "bank", en: "bank", ar: "بنك" } },
  {
    upper: "В", lower: "в", name: "вэ", group: "false-friend", ipa: "v",
    sound: { en: "v as in very. It looks like B but sounds like V.", ar: "مثل حرف V اللاتيني. يشبه B لكنه يُنطق V." },
    example: { ru: "вода́", say: "vadA", en: "water", ar: "ماء" },
    tip: { en: "The most common beginner mistake: read В as V, never as B.", ar: "أشهر خطأ للمبتدئين: اقرأ В دائمًا V وليس B." },
  },
  {
    upper: "Г", lower: "г", name: "гэ", group: "new", ipa: "ɡ",
    sound: { en: "g as in go.", ar: "مثل الجيم المصرية (g) في «جميل» بالعامية." },
    example: { ru: "го́род", say: "gOrat", en: "city", ar: "مدينة" },
  },
  { upper: "Д", lower: "д", name: "дэ", group: "new", ipa: "d", sound: { en: "d as in do.", ar: "مثل حرف الدال." }, example: { ru: "дом", say: "dom", en: "house", ar: "بيت" } },
  {
    upper: "Е", lower: "е", name: "е", group: "false-friend", ipa: "je",
    sound: { en: "ye as in yes. After a consonant it softens that consonant: нет sounds like nyet.", ar: "مثل «يِه» في أول الكلمة، وبعد الساكن يليّنه: нет تُنطق «نيِت»." },
    example: { ru: "нет", say: "nyet", en: "no", ar: "لا" },
  },
  {
    upper: "Ё", lower: "ё", name: "ё", group: "new", ipa: "jo",
    sound: { en: "yo as in yogurt. It is always stressed.", ar: "مثل «يو»، وهو منبور دائمًا." },
    example: { ru: "ёлка", say: "yOlka", en: "fir tree", ar: "شجرة التنوب" },
    tip: { en: "Books and signs often print Ё without its dots, as Е.", ar: "كثيرًا ما تُطبع Ё في الكتب واللافتات من غير نقطتين، أي Е." },
  },
  {
    upper: "Ж", lower: "ж", name: "жэ", group: "new", ipa: "ʐ",
    sound: { en: "zh, like the s in pleasure but harder.", ar: "مثل الجيم الفرنسية (j في jour): جيم معطّشة بلا دال." },
    example: { ru: "жена́", say: "zhynA", en: "wife", ar: "زوجة" },
  },
  { upper: "З", lower: "з", name: "зэ", group: "new", ipa: "z", sound: { en: "z as in zoo.", ar: "مثل حرف الزاي." }, example: { ru: "зонт", say: "zont", en: "umbrella", ar: "مظلّة" } },
  { upper: "И", lower: "и", name: "и", group: "new", ipa: "i", sound: { en: "ee as in meet.", ar: "مثل الياء الممدودة في «فيل»." }, example: { ru: "и", say: "i", en: "and", ar: "و" } },
  {
    upper: "Й", lower: "й", name: "и кра́ткое", group: "new", ipa: "j",
    sound: { en: "A short y, as in boy.", ar: "مثل الياء الساكنة في «بَيْت»." },
    example: { ru: "мой", say: "moy", en: "my", ar: "ملكي (لي)" },
  },
  { upper: "К", lower: "к", name: "ка", group: "friend", ipa: "k", sound: { en: "k as in kite.", ar: "مثل حرف الكاف." }, example: { ru: "кот", say: "kot", en: "cat", ar: "قط" } },
  {
    upper: "Л", lower: "л", name: "эль", group: "new", ipa: "ɫ",
    sound: { en: "A dark l, as in milk; before е, и, я, ю, ё it becomes soft.", ar: "لام مفخّمة قليلًا كما في «الله»، وتصبح رقيقة قبل е و и و я و ю و ё." },
    example: { ru: "ла́мпа", say: "lAmpa", en: "lamp", ar: "مصباح" },
  },
  { upper: "М", lower: "м", name: "эм", group: "friend", ipa: "m", sound: { en: "m as in mother.", ar: "مثل حرف الميم." }, example: { ru: "мо́ре", say: "mOrye", en: "sea", ar: "بحر" } },
  {
    upper: "Н", lower: "н", name: "эн", group: "false-friend", ipa: "n",
    sound: { en: "n as in no. It looks like H but sounds like N.", ar: "مثل حرف النون. يشبه H لكنه يُنطق N." },
    example: { ru: "нос", say: "nos", en: "nose", ar: "أنف" },
  },
  {
    upper: "О", lower: "о", name: "о", group: "friend", ipa: "o",
    sound: { en: "o as in more when stressed; unstressed it sounds like a.", ar: "مثل «أو» عندما يكون منبورًا، ويُنطق مثل «ا» إذا لم يكن منبورًا." },
    example: { ru: "молоко́", say: "malakO", en: "milk", ar: "حليب" },
    tip: { en: "Only the stressed о sounds like o: молоко́ is malakO.", ar: "حرف о المنبور فقط يُنطق «أو»: молоко́ تُنطق «مالاكو»." },
  },
  {
    upper: "П", lower: "п", name: "пэ", group: "new", ipa: "p",
    sound: { en: "p as in pen.", ar: "مثل حرف P: باء مهموسة بلا اهتزاز للأوتار، وهو غير موجود في العربية." },
    example: { ru: "па́па", say: "pApa", en: "dad", ar: "أب" },
    tip: { en: "Keep П and Б apart: па́па (dad), not ба́ба.", ar: "فرّق بين П و Б: па́па (أب) وليس ба́ба." },
  },
  {
    upper: "Р", lower: "р", name: "эр", group: "false-friend", ipa: "r",
    sound: { en: "A rolled r. It looks like P but sounds like R.", ar: "مثل الراء العربية المكرّرة تمامًا. يشبه P لكنه يُنطق R." },
    example: { ru: "рис", say: "ris", en: "rice", ar: "أرز" },
    tip: { en: "Arabic speakers already have this sound.", ar: "هذا الصوت موجود عندك في العربية." },
  },
  {
    upper: "С", lower: "с", name: "эс", group: "false-friend", ipa: "s",
    sound: { en: "s as in sun. It looks like C but always sounds like S.", ar: "مثل حرف السين. يشبه C لكنه يُنطق دائمًا S." },
    example: { ru: "сок", say: "sok", en: "juice", ar: "عصير" },
  },
  { upper: "Т", lower: "т", name: "тэ", group: "friend", ipa: "t", sound: { en: "t as in stop.", ar: "مثل حرف التاء." }, example: { ru: "торт", say: "tort", en: "cake", ar: "كعكة" } },
  {
    upper: "У", lower: "у", name: "у", group: "false-friend", ipa: "u",
    sound: { en: "oo as in food. It looks like y but sounds like U.", ar: "مثل الواو الممدودة في «فول». يشبه y لكنه يُنطق U." },
    example: { ru: "у́тро", say: "Utra", en: "morning", ar: "صباح" },
  },
  { upper: "Ф", lower: "ф", name: "эф", group: "new", ipa: "f", sound: { en: "f as in fun.", ar: "مثل حرف الفاء." }, example: { ru: "фо́то", say: "fOta", en: "photo", ar: "صورة" } },
  {
    upper: "Х", lower: "х", name: "ха", group: "false-friend", ipa: "x",
    sound: { en: "kh, as in the Scottish loch. It looks like X.", ar: "مثل حرف الخاء تمامًا. يشبه X لكنه يُنطق خ." },
    example: { ru: "хлеб", say: "khlyep", en: "bread", ar: "خبز" },
    tip: { en: "Arabic speakers: it is exactly خ.", ar: "هو حرف الخاء نفسه." },
  },
  { upper: "Ц", lower: "ц", name: "цэ", group: "new", ipa: "ts", sound: { en: "ts as in cats.", ar: "مثل «تس» معًا في نَفَس واحد." }, example: { ru: "центр", say: "tsentr", en: "centre", ar: "مركز" } },
  { upper: "Ч", lower: "ч", name: "че", group: "new", ipa: "tɕ", sound: { en: "A soft ch, as in chair.", ar: "مثل «تش» الرقيقة في «تشاي»." }, example: { ru: "чай", say: "chay", en: "tea", ar: "شاي" } },
  { upper: "Ш", lower: "ш", name: "ша", group: "new", ipa: "ʂ", sound: { en: "A hard sh, as in shop.", ar: "مثل حرف الشين، مفخّمة قليلًا." }, example: { ru: "шко́ла", say: "shkOla", en: "school", ar: "مدرسة" } },
  {
    upper: "Щ", lower: "щ", name: "ща", group: "new", ipa: "ɕː",
    sound: { en: "A long, soft sh, said with a smile.", ar: "شين طويلة رقيقة، كأنك تنطق «ش» ممدودة وأنت تبتسم." },
    example: { ru: "борщ", say: "borshch", en: "borscht (beetroot soup)", ar: "بورش (حساء الشمندر)" },
  },
  {
    upper: "Ъ", lower: "ъ", name: "твёрдый знак", group: "sign", ipa: "‿",
    sound: { en: "The hard sign has no sound. It keeps the next vowel apart with a tiny pause.", ar: "العلامة الصلبة لا صوت لها؛ تفصل الساكن عن الحرف الصوتي بعده بوقفة خفيفة." },
    example: { ru: "подъе́зд", say: "padyEst", en: "building entrance", ar: "مدخل العمارة" },
  },
  {
    upper: "Ы", lower: "ы", name: "ы", group: "new", ipa: "ɨ",
    sound: { en: "A vowel between i and u: say ee with your tongue pulled back.", ar: "صوت بين الكسرة والضمة: انطق «إي» مع سحب اللسان إلى الخلف." },
    example: { ru: "мы", say: "my", en: "we", ar: "نحن" },
    tip: { en: "Compare мы (we) and ми (the note mi): the tongue moves back for ы.", ar: "قارن بين мы (نحن) و ми: يرجع اللسان إلى الخلف مع ы." },
  },
  {
    upper: "Ь", lower: "ь", name: "мя́гкий знак", group: "sign", ipa: "ʲ",
    sound: { en: "The soft sign has no sound. It softens the consonant before it.", ar: "العلامة اللينة لا صوت لها؛ تليّن الساكن الذي قبلها." },
    example: { ru: "день", say: "dyen'", en: "day", ar: "يوم" },
  },
  { upper: "Э", lower: "э", name: "э", group: "new", ipa: "e", sound: { en: "e as in bet.", ar: "مثل «إي» المفتوحة في «إيه»." }, example: { ru: "э́то", say: "Eta", en: "this", ar: "هذا" } },
  { upper: "Ю", lower: "ю", name: "ю", group: "new", ipa: "ju", sound: { en: "yu as in you.", ar: "مثل «يو» في «يوم»." }, example: { ru: "ю́бка", say: "yUpka", en: "skirt", ar: "تنّورة" } },
  { upper: "Я", lower: "я", name: "я", group: "new", ipa: "ja", sound: { en: "ya as in yard.", ar: "مثل «يا»." }, example: { ru: "я", say: "ya", en: "I", ar: "أنا" } },
];

/** Syllables for the reading drill, in teaching order. */
export const READING_DRILL: readonly string[] = [
  "ма", "мо", "му", "ка", "ко", "та", "то", "на", "но", "ра", "со", "ва",
  "да", "ба", "по", "ла", "ли", "мы", "ты", "ня", "лю", "жа", "ша", "ща", "ца", "ча",
];
