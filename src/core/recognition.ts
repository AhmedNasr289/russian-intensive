// Listening to the learner: browser speech recognition (Chrome, Edge, Android, iOS Safari) and a
// plain microphone recorder for "record and compare". Both are unavailable inside claude.ai,
// whose frame refuses the microphone; callers check support and fall back to self-rating.

type Alternative = { transcript: string; confidence: number };
type ResultList = ArrayLike<ArrayLike<Alternative> & { isFinal: boolean }>;

type Recognizer = {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  continuous: boolean;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: { results: ResultList }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
};

type RecognizerCtor = new () => Recognizer;

function recognizerCtor(): RecognizerCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: RecognizerCtor; webkitSpeechRecognition?: RecognizerCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export const recognitionSupported = (): boolean => recognizerCtor() !== null;

export type Heard = { transcript: string; alternatives: string[]; confidence: number };

/** Why listening failed, in words a learner can act on. */
export class ListenError extends Error {
  readonly code: string;
  constructor(code: string) {
    super(code);
    this.code = code;
  }
}

export function listenOnce(opts: { lang?: string; maxMs?: number; signal?: AbortSignal } = {}): Promise<Heard> {
  const Ctor = recognizerCtor();
  if (!Ctor) return Promise.reject(new ListenError("unsupported"));
  const rec = new Ctor();
  rec.lang = opts.lang ?? "ru-RU";
  rec.interimResults = false;
  rec.maxAlternatives = 5;
  rec.continuous = false;
  return new Promise<Heard>((resolve, reject) => {
    let settled = false;
    const finish = (fn: () => void) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      opts.signal?.removeEventListener("abort", onAbort);
      fn();
    };
    const onAbort = () => {
      rec.abort();
      finish(() => reject(new ListenError("aborted")));
    };
    const timer = setTimeout(() => rec.stop(), opts.maxMs ?? 7000);
    opts.signal?.addEventListener("abort", onAbort);
    rec.onresult = (e) => {
      const result = e.results[e.results.length - 1];
      if (!result) return;
      const alternatives: string[] = [];
      for (let i = 0; i < result.length; i++) {
        const alt = result[i];
        if (alt) alternatives.push(alt.transcript.trim());
      }
      const best = result[0];
      finish(() => resolve({ transcript: best?.transcript.trim() ?? "", alternatives, confidence: best?.confidence ?? 0 }));
    };
    rec.onerror = (e) => finish(() => reject(new ListenError(e.error || "error")));
    rec.onend = () => finish(() => reject(new ListenError("no-speech")));
    try {
      rec.start();
    } catch {
      finish(() => reject(new ListenError("busy")));
    }
  });
}

export const recordingSupported = (): boolean =>
  typeof navigator !== "undefined" && !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder !== "undefined";

/** Record up to `maxMs` of microphone audio; resolves with the clip. */
export async function recordClip(maxMs = 6000, signal?: AbortSignal): Promise<Blob> {
  if (!recordingSupported()) throw new ListenError("unsupported");
  let stream: MediaStream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch {
    throw new ListenError("not-allowed");
  }
  const recorder = new MediaRecorder(stream);
  const chunks: Blob[] = [];
  recorder.ondataavailable = (e) => {
    if (e.data.size > 0) chunks.push(e.data);
  };
  return new Promise<Blob>((resolve) => {
    const stop = () => {
      if (recorder.state !== "inactive") recorder.stop();
    };
    recorder.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      signal?.removeEventListener("abort", stop);
      resolve(new Blob(chunks, { type: recorder.mimeType || "audio/webm" }));
    };
    signal?.addEventListener("abort", stop);
    recorder.start();
    setTimeout(stop, maxMs);
  });
}

/** Learner-facing explanation of a listening failure. */
export function listenErrorMessage(code: string): { en: string; ar: string } {
  switch (code) {
    case "not-allowed":
    case "service-not-allowed":
      return { en: "The microphone is blocked. Allow it in the browser's site settings and try again.", ar: "الميكروفون محظور. اسمح به من إعدادات الموقع في المتصفح ثم حاول مرة أخرى." };
    case "no-speech":
      return { en: "I didn't hear anything. Press the button, then speak clearly.", ar: "لم أسمع شيئًا. اضغط الزر ثم تكلّم بوضوح." };
    case "network":
      return { en: "Speech recognition needs an internet connection.", ar: "التعرّف على الكلام يحتاج إلى اتصال بالإنترنت." };
    case "audio-capture":
      return { en: "No microphone was found.", ar: "لم يُعثر على ميكروفون." };
    case "unsupported":
      return { en: "This browser can't check your pronunciation. Listen, repeat aloud and rate yourself.", ar: "هذا المتصفح لا يستطيع فحص نطقك. استمع وردّد بصوت عالٍ ثم قيّم نفسك." };
    default:
      return { en: "Listening stopped. Try again.", ar: "توقّف الاستماع. حاول مرة أخرى." };
  }
}
