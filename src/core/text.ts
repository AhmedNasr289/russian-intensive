// Russian text utilities: stress marks, tokenising, answer normalisation and fuzzy comparison.
// Pure functions with no DOM access, shared by the app, the content validator and the tests.

/** COMBINING ACUTE ACCENT, written after the stressed vowel: молоко́. */
export const ACUTE = "́";
const GRAVE = "̀";

const VOWELS = "аеёиоуыэюяАЕЁИОУЫЭЮЯ";

export const isRuVowel = (ch: string): boolean => ch.length === 1 && VOWELS.includes(ch);

export const hasCyrillic = (s: string): boolean => /[А-Яа-яЁё]/.test(s);

// Arabic LETTERS (not digits or punctuation): a field of Arabic-Indic digits alone is not a translation.
const isArabicLetter = (cp: number): boolean => (cp >= 0x0621 && cp <= 0x063a) || (cp >= 0x0641 && cp <= 0x064a);
export const hasArabic = (s: string): boolean => [...s].some((ch) => isArabicLetter(ch.codePointAt(0) ?? 0));

/** Splits option text written as "English · Arabic" into its halves, or returns null. */
export function splitBilingual(s: string): { en: string; ar: string } | null {
  const at = s.lastIndexOf(" · ");
  if (at <= 0) return null;
  const en = s.slice(0, at).trim();
  const ar = s.slice(at + 3).trim();
  return en && hasArabic(ar) && !hasArabic(en) ? { en, ar } : null;
}

export const stripStress = (s: string): string => s.split(ACUTE).join("").split(GRAVE).join("");

export function countVowels(word: string): number {
  let n = 0;
  for (const ch of stripStress(word)) if (isRuVowel(ch)) n++;
  return n;
}

const WORD = "[А-Яа-яЁё\\u0300\\u0301]+";
const TOKEN_RE = new RegExp(`-?${WORD}(?:-${WORD})*-?`, "g");

/**
 * Cyrillic word tokens in order. Hyphenated words stay whole (по-ру́сски); a leading or trailing
 * hyphen is kept so callers can recognise word fragments such as endings (-ами) and stems (чита-).
 */
export function tokenizeRu(s: string): string[] {
  return s.match(TOKEN_RE) ?? [];
}

export type StressProblem = "missing" | "multiple" | "monosyllable" | "with-yo" | "misplaced";
export type StressIssue = { token: string; problem: StressProblem };

/** Prepositions that are written unstressed before the word they lean on (обо мне́). */
const UNSTRESSED_CLITICS = new Set(["обо", "ото", "изо", "подо", "передо", "предо"]);

/** The particle не takes the stress before the past of быть: не́ был, не́ было, не́ были. */
function isStressedParticle(plain: string, next: string | undefined): boolean {
  return plain.toLowerCase() === "не" && next !== undefined && /^был[оиа]?$/i.test(stripStress(next));
}

/** After a stressed не́ the form of быть is unstressed: не́ было, не́ были. */
function followsStressedNe(previous: string | undefined, plain: string): boolean {
  return previous !== undefined && previous.toLowerCase() === "не" + ACUTE && /^был[оиа]?$/i.test(plain);
}

function isExempt(plain: string, next: string | undefined): boolean {
  const lower = plain.toLowerCase();
  if (UNSTRESSED_CLITICS.has(lower)) return true;
  if (lower === "надо" && next !== undefined && /^мно[йю]$/i.test(stripStress(next))) return true;
  // Abbreviations such as СССР or ООН are read letter by letter or as acronyms.
  return plain.length >= 2 && plain === plain.toUpperCase();
}

/**
 * The course stress rule: every word with two or more vowels carries exactly one U+0301 right
 * after its stressed vowel; one-vowel words carry none; words with ё carry none (ё is always
 * stressed). Word fragments, unstressed clitics and abbreviations are exempt.
 */
export function checkStress(s: string): StressIssue[] {
  const tokens = tokenizeRu(s);
  const issues: StressIssue[] = [];
  tokens.forEach((token, i) => {
    const fragment = token.startsWith("-") || token.endsWith("-");
    const core = token.replace(/^-+|-+$/g, "");
    const chars = [...core];
    const plain = stripStress(core);
    const vowels = countVowels(plain);
    const marks = chars.filter((c) => c === ACUTE).length;
    const hasYo = /[ёЁ]/.test(core);
    const misplaced = chars.some((c, j) => c === ACUTE && (j === 0 || !isRuVowel(chars[j - 1] ?? "")));
    if (misplaced) issues.push({ token, problem: "misplaced" });
    else if (marks > 1) issues.push({ token, problem: "multiple" });
    else if (hasYo && marks > 0) issues.push({ token, problem: "with-yo" });
    else if (marks === 1 && vowels < 2 && !fragment && !isStressedParticle(plain, tokens[i + 1])) {
      issues.push({ token, problem: "monosyllable" });
    }
    else if (marks === 0 && vowels >= 2 && !hasYo && !fragment && !isExempt(plain, tokens[i + 1]) && !followsStressedNe(tokens[i - 1], plain)) {
      issues.push({ token, problem: "missing" });
    }
  });
  return issues;
}

/**
 * The form used to compare a learner's answer with an accepted one: lower case, no stress marks,
 * ё → е, punctuation and free-standing dashes removed, single spaces. Inner hyphens are kept.
 */
export function normalizeAnswer(s: string): string {
  return stripStress(s)
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[.,!?;:«»"“”„()…\[\]]/g, " ")
    .replace(/[—–]/g, " ")
    .replace(/(^|\s)-+|-+(?=\s|$)/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function levenshtein(a: string, b: string): number {
  const A = [...a];
  const B = [...b];
  if (A.length === 0) return B.length;
  if (B.length === 0) return A.length;
  let prev: number[] = Array.from({ length: B.length + 1 }, (_, j) => j);
  for (let i = 1; i <= A.length; i++) {
    const cur: number[] = [i];
    for (let j = 1; j <= B.length; j++) {
      const cost = A[i - 1] === B[j - 1] ? 0 : 1;
      cur[j] = Math.min((prev[j] ?? 0) + 1, (cur[j - 1] ?? 0) + 1, (prev[j - 1] ?? 0) + cost);
    }
    prev = cur;
  }
  return prev[B.length] ?? 0;
}

/** 1 for identical normalised text, falling towards 0 as the edit distance grows. */
export function similarity(a: string, b: string): number {
  const na = normalizeAnswer(a);
  const nb = normalizeAnswer(b);
  const longest = Math.max([...na].length, [...nb].length);
  if (longest === 0) return 1;
  return 1 - levenshtein(na, nb) / longest;
}

export type DiffWord = { word: string; ok: boolean };

/** Marks each word of `target` as heard (in order) or missed, using the longest common subsequence. */
export function wordDiff(target: string, heard: string): DiffWord[] {
  const words = target.split(/\s+/).filter((w) => normalizeAnswer(w) !== "");
  const want = words.map(normalizeAnswer);
  const got = normalizeAnswer(heard).split(" ").filter(Boolean);
  const rows = want.length + 1;
  const cols = got.length + 1;
  const lcs: number[][] = Array.from({ length: rows }, () => new Array<number>(cols).fill(0));
  for (let i = want.length - 1; i >= 0; i--) {
    for (let j = got.length - 1; j >= 0; j--) {
      const row = lcs[i] as number[];
      const below = lcs[i + 1] as number[];
      row[j] = want[i] === got[j] ? (below[j + 1] ?? 0) + 1 : Math.max(below[j] ?? 0, row[j + 1] ?? 0);
    }
  }
  const ok = new Array<boolean>(want.length).fill(false);
  let i = 0;
  let j = 0;
  while (i < want.length && j < got.length) {
    if (want[i] === got[j]) {
      ok[i] = true;
      i++;
      j++;
    } else if ((lcs[i + 1]?.[j] ?? 0) >= (lcs[i]?.[j + 1] ?? 0)) i++;
    else j++;
  }
  return words.map((word, k) => ({ word, ok: ok[k] ?? false }));
}

export type StressSegment = { text: string; stressed: boolean };

/**
 * Splits text so the stressed vowel (a vowel followed by U+0301, or any ё) can be painted
 * differently. Concatenating the segments returns the input unchanged.
 */
export function splitStress(s: string): StressSegment[] {
  const out: StressSegment[] = [];
  const chars = [...s];
  let plain = "";
  const flush = () => {
    if (plain) out.push({ text: plain, stressed: false });
    plain = "";
  };
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i] ?? "";
    if (isRuVowel(ch) && chars[i + 1] === ACUTE) {
      flush();
      out.push({ text: ch + ACUTE, stressed: true });
      i++;
    } else if (ch === "ё" || ch === "Ё") {
      flush();
      out.push({ text: ch, stressed: true });
    } else {
      plain += ch;
    }
  }
  flush();
  return out;
}
