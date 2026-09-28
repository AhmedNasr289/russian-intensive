// Device setup guides: adding a Russian voice (so the app can speak) and a Russian keyboard
// (so you can type answers). Every URL is checked by scripts/check-links.ts.

import type { Bi } from "./types.ts";

export type Platform = "windows" | "android" | "ios" | "mac";

export type SetupLink = {
  id: string;
  platform: Platform;
  kind: "voice" | "keyboard";
  title: Bi;
  url: string;
  /** Short, numbered-in-order steps as they appear on the device, in English and Arabic. */
  steps: Bi[];
  verified: string;
};

export const SETUP_LINKS: readonly SetupLink[] = [
  {
    id: "setup-windows-voice",
    platform: "windows",
    kind: "voice",
    title: { en: "Add a Russian voice on Windows 11", ar: "إضافة صوت روسي في ويندوز 11" },
    url: "https://support.microsoft.com/en-us/accessibility/windows/narrator/appendix-a-supported-languages-and-voices",
    steps: [
      {
        en: "Open Start > Settings > Time & language > Speech.",
        ar: "افتح «ابدأ» (Start) ثم «الإعدادات» (Settings) ثم «الوقت واللغة» (Time & language) ثم «الكلام» (Speech).",
      },
      {
        en: "Under Manage voices, select Add voices.",
        ar: "ضمن «إدارة الأصوات» (Manage voices) اختر «إضافة أصوات» (Add voices).",
      },
      {
        en: "Search for Russian, tick Russian (Russia) and select Add.",
        ar: "ابحث عن Russian وحدِّد «Russian (Russia)» ثم اختر «إضافة» (Add).",
      },
      {
        en: "Wait for the download to finish, then restart your browser; the Russian voices are called Irina and Pavel.",
        ar: "انتظر حتى ينتهي التنزيل ثم أعد تشغيل المتصفح؛ اسما الصوتين الروسيين Irina و Pavel.",
      },
    ],
    verified: "2026-09-28",
  },
  {
    id: "setup-windows-keyboard",
    platform: "windows",
    kind: "keyboard",
    title: { en: "Add the Russian keyboard on Windows 11", ar: "إضافة لوحة المفاتيح الروسية في ويندوز 11" },
    url: "https://support.microsoft.com/en-us/windows/hardware/input-devices/manage-the-language-and-keyboard-input-layout-settings-in-windows",
    steps: [
      {
        en: "Open Start > Settings > Time & language > Language & region.",
        ar: "افتح «ابدأ» (Start) ثم «الإعدادات» (Settings) ثم «الوقت واللغة» (Time & language) ثم «اللغة والمنطقة» (Language & region).",
      },
      {
        en: "Select Add a language, choose Russian, then Next and Install; leave 'Set as my Windows display language' unticked.",
        ar: "اختر «إضافة لغة» (Add a language) ثم الروسية ثم «التالي» (Next) ثم «تثبيت» (Install)، واترك خيار جعلها لغة عرض ويندوز غير محدد.",
      },
      {
        en: "Select the three dots (…) next to Russian, then Language options.",
        ar: "اضغط النقاط الثلاث (…) بجوار الروسية ثم «خيارات اللغة» (Language options).",
      },
      {
        en: "Under Keyboards, select Add a keyboard and pick Russian - Mnemonic, the easiest layout for beginners: each Russian letter sits on the Latin key that sounds like it (a = а, b = б, d = д).",
        ar: "ضمن «لوحات المفاتيح» (Keyboards) اختر «إضافة لوحة مفاتيح» (Add a keyboard) ثم Russian - Mnemonic، وهي الأسهل للمبتدئين لأن كل حرف روسي يقع على الحرف اللاتيني الشبيه به في النطق (a = а و b = б و d = д).",
      },
      {
        en: "Switch keyboards with the Windows logo key + Spacebar; on Mnemonic, type w for ш and c then h for ч.",
        ar: "بدِّل بين لوحات المفاتيح بمفتاح شعار ويندوز مع مفتاح المسافة؛ وفي Mnemonic اكتب w للحرف ш، واكتب c ثم h للحرف ч.",
      },
    ],
    verified: "2026-09-28",
  },
  {
    id: "setup-android-voice",
    platform: "android",
    kind: "voice",
    title: { en: "Add a Russian voice on Android", ar: "إضافة صوت روسي في أندرويد" },
    url: "https://support.google.com/accessibility/android/answer/6006983?hl=en",
    steps: [
      {
        en: "Open Settings > Accessibility > Text-to-speech output (or search Settings for Text-to-speech).",
        ar: "افتح «الإعدادات» (Settings) ثم «إمكانية الوصول» (Accessibility) ثم «تحويل النص إلى كلام» (Text-to-speech output)، أو ابحث في الإعدادات عن Text-to-speech.",
      },
      {
        en: "Set Preferred engine to Speech Services by Google, installing it from Google Play if it is missing.",
        ar: "اجعل «المحرك المفضل» (Preferred engine) هو Speech Services by Google، وثبّته من Google Play إن لم يكن موجودًا.",
      },
      {
        en: "Tap the gear icon next to the engine, then Install voice data.",
        ar: "اضغط رمز الترس بجوار المحرك ثم «تثبيت بيانات الصوت» (Install voice data).",
      },
      {
        en: "Choose Russian (Russia) and download a voice.",
        ar: "اختر «الروسية (روسيا)» (Russian (Russia)) ونزّل أحد الأصوات.",
      },
      {
        en: "Go back, tap Play to test it, then reload the course in Chrome.",
        ar: "ارجع واضغط «تشغيل» (Play) للتجربة، ثم أعد تحميل الدورة في Chrome.",
      },
    ],
    verified: "2026-09-28",
  },
  {
    id: "setup-android-keyboard",
    platform: "android",
    kind: "keyboard",
    title: { en: "Add the Russian keyboard on Android (Gboard)", ar: "إضافة لوحة المفاتيح الروسية في أندرويد (Gboard)" },
    url: "https://support.google.com/gboard/answer/7068494?hl=en&co=GENIE.Platform%3DAndroid",
    steps: [
      {
        en: "Open any app you can type in and tap a text box so Gboard appears.",
        ar: "افتح أي تطبيق يمكنك الكتابة فيه واضغط على مربع نص لتظهر لوحة Gboard.",
      },
      {
        en: "At the top of the keyboard, tap Settings > Languages > Add keyboard.",
        ar: "في أعلى لوحة المفاتيح اضغط «الإعدادات» (Settings) ثم «اللغات» (Languages) ثم «إضافة لوحة مفاتيح» (Add keyboard).",
      },
      {
        en: "Pick Russian, choose a layout (the standard Russian one is ЙЦУКЕН) and tap Done.",
        ar: "اختر الروسية ثم اختر تخطيطًا (التخطيط الروسي القياسي هو ЙЦУКЕН) واضغط «تم» (Done).",
      },
      {
        en: "Touch and hold the space bar to switch between languages.",
        ar: "المس مفتاح المسافة مع الاستمرار للتبديل بين اللغات.",
      },
    ],
    verified: "2026-09-28",
  },
  {
    id: "setup-ios-voice",
    platform: "ios",
    kind: "voice",
    title: { en: "Add a Russian voice on iPhone", ar: "إضافة صوت روسي في آيفون" },
    url: "https://support.apple.com/guide/iphone/hear-iphone-speak-the-screen-selected-text-iph96b214f0/ios",
    steps: [
      {
        en: "Open Settings > Accessibility > Read & Speak (called Spoken Content on older iOS versions).",
        ar: "افتح «الإعدادات» (Settings) ثم «تسهيلات الاستخدام» (Accessibility) ثم «القراءة والتحدث» (Read & Speak)، واسمها «المحتوى المنطوق» (Spoken Content) في إصدارات iOS الأقدم.",
      },
      {
        en: "Tap Voices, then Russian.",
        ar: "اضغط «الأصوات» (Voices) ثم «الروسية» (Russian).",
      },
      {
        en: "Choose a voice such as Milena and tap the download button.",
        ar: "اختر صوتًا مثل Milena واضغط زر التنزيل.",
      },
      {
        en: "When the download finishes, reload the course in Safari.",
        ar: "بعد انتهاء التنزيل أعد تحميل الدورة في Safari.",
      },
    ],
    verified: "2026-09-28",
  },
  {
    id: "setup-ios-keyboard",
    platform: "ios",
    kind: "keyboard",
    title: { en: "Add the Russian keyboard on iPhone", ar: "إضافة لوحة المفاتيح الروسية في آيفون" },
    url: "https://support.apple.com/guide/iphone/add-or-change-keyboards-iph73b71eb/ios",
    steps: [
      {
        en: "Open Settings > General > Keyboard.",
        ar: "افتح «الإعدادات» (Settings) ثم «عام» (General) ثم «لوحة المفاتيح» (Keyboard).",
      },
      {
        en: "Tap Keyboards > Add New Keyboard.",
        ar: "اضغط «لوحات المفاتيح» (Keyboards) ثم «إضافة لوحة مفاتيح جديدة» (Add New Keyboard).",
      },
      {
        en: "Choose Russian from the list.",
        ar: "اختر الروسية (Russian) من القائمة.",
      },
      {
        en: "While typing, touch and hold the globe key and tap Русский to switch.",
        ar: "أثناء الكتابة المس مفتاح الكرة الأرضية مع الاستمرار ثم اضغط «Русский» للتبديل.",
      },
    ],
    verified: "2026-09-28",
  },
  {
    id: "setup-mac-voice",
    platform: "mac",
    kind: "voice",
    title: { en: "Add a Russian voice on Mac", ar: "إضافة صوت روسي في ماك" },
    url: "https://support.apple.com/guide/mac-help/mchlp2290/mac",
    steps: [
      {
        en: "Choose Apple menu > System Settings > Accessibility > Read & Speak (Spoken Content on older macOS versions).",
        ar: "اختر قائمة Apple ثم «إعدادات النظام» (System Settings) ثم «تسهيلات الاستخدام» (Accessibility) ثم «القراءة والتحدث» (Read & Speak)، واسمها «المحتوى المنطوق» (Spoken Content) في إصدارات macOS الأقدم.",
      },
      {
        en: "Click the info button (i) next to System voice.",
        ar: "انقر زر المعلومات (i) بجوار «صوت النظام» (System voice).",
      },
      {
        en: "Select Russian in the sidebar and click a voice such as Milena to download it.",
        ar: "اختر الروسية (Russian) في الشريط الجانبي وانقر صوتًا مثل Milena لتنزيله.",
      },
      {
        en: "Click Done, then restart your browser so the course can use the new voice.",
        ar: "انقر «تم» (Done) ثم أعد تشغيل المتصفح لتستخدم الدورة الصوت الجديد.",
      },
    ],
    verified: "2026-09-28",
  },
  {
    id: "setup-mac-keyboard",
    platform: "mac",
    kind: "keyboard",
    title: { en: "Add the Russian keyboard on Mac", ar: "إضافة لوحة المفاتيح الروسية في ماك" },
    url: "https://support.apple.com/guide/mac-help/mchlp1406/mac",
    steps: [
      {
        en: "Choose Apple menu > System Settings > Keyboard.",
        ar: "اختر قائمة Apple ثم «إعدادات النظام» (System Settings) ثم «لوحة المفاتيح» (Keyboard).",
      },
      {
        en: "Go to Text Input, click Edit, then click +.",
        ar: "انتقل إلى «إدخال النص» (Text Input) وانقر «تحرير» (Edit) ثم انقر +.",
      },
      {
        en: "Search for Russian, select Russian – Phonetic (letters on the Latin keys that sound alike, the easiest for beginners) and click Add.",
        ar: "ابحث عن Russian واختر Russian – Phonetic (الحروف الروسية على المفاتيح اللاتينية الشبيهة بها في النطق، وهي الأسهل للمبتدئين) ثم انقر «إضافة» (Add).",
      },
      {
        en: "Switch languages from the Input menu in the menu bar, or press Control-Space.",
        ar: "بدِّل اللغة من قائمة الإدخال في شريط القوائم، أو اضغط Control مع مفتاح المسافة.",
      },
    ],
    verified: "2026-09-28",
  },
];
