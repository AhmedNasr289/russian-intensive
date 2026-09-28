// Settings: course dates and times, languages, voice, sounds, theme, calendar export and
// the learner's data (export, import, reset).

import { SYLLABUS } from "../../content/syllabus.ts";
import { buildIcs } from "../../core/ics.ts";
import { defaultProgress, validateProgress } from "../../core/progress.ts";
import type { ExplainLang, Settings, Theme } from "../../core/progress.ts";
import { validISODate, validTime } from "../../core/schedule.ts";
import type { Ctx } from "../context.ts";
import { tr } from "../context.ts";
import { h } from "../dom.ts";
import { buildId, PAGES_URL, REPO_URL } from "../env.ts";
import { biCtx, btn, confirmDialog, icon, saveFile, sectionTitle } from "../ui.ts";

function setSetting<K extends keyof Settings>(ctx: Ctx, key: K, value: Settings[K], rerender = true): void {
  ctx.store.update((p) => ({ ...p, settings: { ...p.settings, [key]: value }, updatedAt: ctx.now() }), { render: rerender });
}

function field(label: string, control: HTMLElement, hint?: Node): HTMLElement {
  return h("label", { class: "field" }, h("span", { class: "field-label" }, label), control, hint ? h("span", { class: "field-hint" }, hint) : null);
}

function toggle(ctx: Ctx, key: "showSay" | "sounds" | "autoplay", label: { en: string; ar: string }): HTMLElement {
  const on = ctx.store.progress.settings[key];
  return h(
    "button",
    { type: "button", class: `switch ${on ? "on" : ""}`, role: "switch", "aria-checked": String(on), onClick: () => setSetting(ctx, key, !on) },
    h("span", { class: "switch-track" }, h("span", { class: "switch-thumb" })),
    h("span", null, tr(ctx, label)),
  );
}

function segmented<T extends string>(ctx: Ctx, name: string, value: T, options: ReadonlyArray<{ value: T; label: string }>, onPick: (v: T) => void): HTMLElement {
  return h(
    "div",
    { class: "segmented", role: "radiogroup", "aria-label": name },
    options.map((o) => h("button", { type: "button", role: "radio", "aria-checked": String(o.value === value), class: o.value === value ? "on" : "", onClick: () => onPick(o.value) }, o.label)),
  );
}

export function settingsView(ctx: Ctx): HTMLElement {
  const s = ctx.store.progress.settings;

  const start = h("input", { type: "date", value: s.startDate, id: "set-start" });
  start.addEventListener("change", () => (validISODate(start.value) ? setSetting(ctx, "startDate", start.value) : ctx.toast({ en: "Pick a valid date.", ar: "اختر تاريخًا صحيحًا." }, "error")));
  const morning = h("input", { type: "time", value: s.morningStart, id: "set-morning" });
  morning.addEventListener("change", () => validTime(morning.value) && setSetting(ctx, "morningStart", morning.value));
  const evening = h("input", { type: "time", value: s.eveningStart, id: "set-evening" });
  evening.addEventListener("change", () => validTime(evening.value) && setSetting(ctx, "eveningStart", evening.value));

  const voices = ctx.voices.all;
  const voiceSelect = h(
    "select",
    { id: "set-voice" },
    h("option", { value: "" }, tr(ctx, { en: "Automatic (best available)", ar: "تلقائي (الأفضل المتاح)" })),
    voices.map((v) => h("option", { value: v.voiceURI, selected: v.voiceURI === s.voiceURI }, `${v.name}${v.localService ? "" : " · online"}`)),
  );
  voiceSelect.addEventListener("change", () => setSetting(ctx, "voiceURI", voiceSelect.value || null, false));
  const rate = h("input", { type: "range", min: "0.6", max: "1.2", step: "0.05", value: String(s.rate), id: "set-rate" });
  const rateOut = h("output", { for: "set-rate" }, `${s.rate.toFixed(2)}×`);
  rate.addEventListener("input", () => (rateOut.textContent = `${Number(rate.value).toFixed(2)}×`));
  rate.addEventListener("change", () => setSetting(ctx, "rate", Number(rate.value), false));

  const fileInput = h("input", { type: "file", accept: "application/json,.json", class: "sr-only", id: "set-import" });
  fileInput.addEventListener("change", async () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    try {
      const parsed = validateProgress(JSON.parse(await file.text()));
      if (!parsed.ok) return ctx.toast({ en: `That file can't be imported: ${parsed.error}.`, ar: `لا يمكن استيراد هذا الملف: ${parsed.error}.` }, "error");
      if (await confirmDialog(ctx, { en: "Replace your current progress with the imported file?", ar: "هل تريد استبدال تقدّمك الحالي بالملف المستورد؟" }, { en: "Import", ar: "استيراد" })) {
        ctx.store.replace(parsed.value);
        ctx.toast({ en: "Progress imported.", ar: "تم استيراد التقدّم." }, "ok");
      }
    } catch {
      ctx.toast({ en: "That file is not valid JSON.", ar: "هذا الملف ليس JSON صالحًا." }, "error");
    } finally {
      fileInput.value = "";
    }
  });

  const storageNote =
    ctx.host === "artifact"
      ? ctx.caps.synced
        ? { en: "Your progress is saved to your claude.ai account and follows you between devices.", ar: "يُحفظ تقدّمك في حسابك على claude.ai وينتقل معك بين الأجهزة." }
        : { en: "Your progress is saved in this browser. Allow the app to store data to sync it across devices.", ar: "يُحفظ تقدّمك في هذا المتصفح. اسمح للتطبيق بحفظ البيانات لمزامنته بين الأجهزة." }
      : ctx.store.kind === "memory"
        ? { en: "This browser is not keeping data (private mode?). Export your progress before closing.", ar: "هذا المتصفح لا يحفظ البيانات (وضع خاص؟). صدّر تقدّمك قبل الإغلاق." }
        : { en: "Your progress is saved in this browser. Use export and import to move it to another device.", ar: "يُحفظ تقدّمك في هذا المتصفح. استخدم التصدير والاستيراد لنقله إلى جهاز آخر." };

  return h(
    "div",
    { class: "view settings" },
    sectionTitle(ctx, { en: "Settings", ar: "الإعدادات" }),
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: "Course and daily times", ar: "الدورة والمواعيد اليومية" })),
      h(
        "div",
        { class: "fields" },
        field(tr(ctx, { en: "Day 1 of the course", ar: "اليوم الأول من الدورة" }), start),
        field(tr(ctx, { en: "Morning block starts (45 min)", ar: "يبدأ الصباح (٤٥ دقيقة)" }), morning),
        field(tr(ctx, { en: "Evening block starts (75 min)", ar: "يبدأ المساء (٧٥ دقيقة)" }), evening),
      ),
    ),
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: "Language and display", ar: "اللغة والعرض" })),
      field(
        tr(ctx, { en: "Explanations", ar: "الشروحات" }),
        segmented<ExplainLang>(ctx, "Explanations", s.explain, [{ value: "en", label: "English" }, { value: "ar", label: "العربية" }, { value: "both", label: "English + العربية" }], (v) => setSetting(ctx, "explain", v)),
      ),
      ctx.host === "artifact"
        ? null
        : field(
            tr(ctx, { en: "Theme", ar: "المظهر" }),
            segmented<Theme>(ctx, "Theme", s.theme, [{ value: "system", label: tr(ctx, { en: "System", ar: "النظام" }) }, { value: "light", label: tr(ctx, { en: "Light", ar: "فاتح" }) }, { value: "dark", label: tr(ctx, { en: "Dark", ar: "داكن" }) }], (v) => setSetting(ctx, "theme", v)),
          ),
      h("div", { class: "switches" }, toggle(ctx, "showSay", { en: "Show pronunciation respelling", ar: "اعرض كتابة النطق باللاتينية" }), toggle(ctx, "autoplay", { en: "Speak each flashcard", ar: "انطق كل بطاقة" }), toggle(ctx, "sounds", { en: "Sound effects", ar: "المؤثرات الصوتية" })),
    ),
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: "Russian voice", ar: "الصوت الروسي" })),
      voices.length
        ? h("div", { class: "fields" }, field(tr(ctx, { en: "Voice", ar: "الصوت" }), voiceSelect), field(tr(ctx, { en: "Speed", ar: "السرعة" }), h("div", { class: "range-row" }, rate, rateOut)))
        : h("p", { class: "verdict bad" }, icon("x", 18), biCtx(ctx, { en: "No Russian voice is installed in this browser. Add one (see Library → Set up your device), then reload.", ar: "لا يوجد صوت روسي مثبّت في هذا المتصفح. أضف صوتًا (المكتبة ← جهّز جهازك) ثم أعد التحميل." }, "span")),
      btn([icon("speaker", 18), tr(ctx, { en: "Test the voice", ar: "جرّب الصوت" })], { class: "ghost", onClick: () => void ctx.speak("Приве́т! Меня́ зову́т Ка́тя. Дава́й говори́ть по-ру́сски!") }),
    ),
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: "Calendar", ar: "التقويم" })),
      ctx.host === "artifact"
        ? h("p", null, biCtx(ctx, { en: "Calendar files can't be downloaded inside claude.ai. Open the web version to get them:", ar: "لا يمكن تنزيل ملفات التقويم داخل claude.ai. افتح نسخة الويب للحصول عليها:" }, "span"), " ", h("a", { href: PAGES_URL, target: "_blank", rel: "noopener noreferrer" }, PAGES_URL))
        : h(
            "div",
            null,
            biCtx(ctx, { en: "112 events — a morning and an evening session for each of the 56 days, titled with that day's lesson and a 5-minute reminder. Import the file into Google Calendar, Outlook or Apple Calendar.", ar: "١١٢ حدثًا — جلسة صباحية وأخرى مسائية لكل يوم من الأيام الـ ٥٦، بعنوان درس ذلك اليوم وتذكير قبل ٥ دقائق. استورد الملف إلى تقويم Google أو Outlook أو Apple." }),
            btn([icon("calendar", 18), tr(ctx, { en: "Download calendar (.ics)", ar: "نزّل التقويم (.ics)" })], {
              class: "primary",
              onClick: () => {
                const cur = ctx.store.progress.settings;
                const ics = buildIcs({
                  startDate: cur.startDate,
                  morningStart: cur.morningStart,
                  eveningStart: cur.eveningStart,
                  days: SYLLABUS.map((d) => ({ n: d.n, title: `${d.title.en} — ${d.title.ru}` })),
                  appUrl: location.protocol === "file:" ? PAGES_URL : `${location.origin}${location.pathname}`,
                  now: new Date(ctx.now()),
                });
                void saveFile(ctx, "russian-in-56-days.ics", ics, "text/calendar");
              },
            }),
          ),
    ),
    h(
      "section",
      { class: "card" },
      h("h3", null, tr(ctx, { en: "Your data", ar: "بياناتك" })),
      h("p", { class: "muted" }, tr(ctx, storageNote)),
      h(
        "div",
        { class: "row wrap" },
        btn([icon("download", 18), tr(ctx, { en: "Export progress", ar: "صدّر التقدّم" })], {
          class: "ghost",
          onClick: async () => {
            const ok = await saveFile(ctx, `russian-progress-${new Date(ctx.now()).toISOString().slice(0, 10)}.json`, JSON.stringify(ctx.store.progress, null, 1), "application/json");
            if (!ok) ctx.toast({ en: "Export isn't available in this view.", ar: "التصدير غير متاح في هذا العرض." }, "error");
          },
        }),
        h("label", { class: "btn ghost", for: "set-import" }, icon("upload", 18), tr(ctx, { en: "Import progress", ar: "استورد التقدّم" })),
        fileInput,
        btn([icon("trash", 18), tr(ctx, { en: "Reset everything", ar: "إعادة ضبط كل شيء" })], {
          class: "danger",
          onClick: async () => {
            if (await confirmDialog(ctx, { en: "Delete all progress, cards and journal entries? This cannot be undone. Export first if you want a copy.", ar: "حذف كل التقدّم والبطاقات واليوميات؟ لا يمكن التراجع. صدّر نسخة أولًا إن أردت." }, { en: "Delete everything", ar: "احذف كل شيء" }, true)) {
              const fresh = defaultProgress(ctx.now());
              ctx.store.replace({ ...fresh, settings: ctx.store.progress.settings });
              ctx.toast({ en: "Progress reset.", ar: "تمت إعادة الضبط." }, "ok");
            }
          },
        }),
      ),
    ),
    h(
      "section",
      { class: "card about" },
      h("h3", null, tr(ctx, { en: "About", ar: "حول" })),
      h("p", { class: "muted" }, `Russian in 56 Days · build ${buildId()} · ${ctx.host}`),
      h("p", null, h("a", { href: REPO_URL, target: "_blank", rel: "noopener noreferrer" }, REPO_URL)),
    ),
  );
}
