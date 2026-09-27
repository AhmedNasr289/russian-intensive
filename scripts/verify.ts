// Single entry point for every acceptance gate.
// Usage: node scripts/verify.ts <step>
// Prints exactly one line per step: "VERDICT <step> PASS ..." or "VERDICT <step> FAIL <reason>".
// Failure paths never print the word PASS, so a gate that greps for it cannot be fooled.

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

type Verdict = { step: string; pass: boolean; detail: string };
type RunResult = { code: number; out: string; error: string };

const ROOT = resolve(import.meta.dirname, "..");
const REPO = "AhmedNasr289/russian-intensive";
const PAGES_URL = "https://ahmednasr289.github.io/russian-intensive/";
const NODE = process.execPath;

function run(cmd: string, args: string[], timeoutMs = 900_000): RunResult {
  const r = spawnSync(cmd, args, {
    cwd: ROOT,
    encoding: "utf8",
    timeout: timeoutMs,
    maxBuffer: 128 * 1024 * 1024,
    env: process.env,
  });
  return { code: r.status ?? -1, out: `${r.stdout ?? ""}\n${r.stderr ?? ""}`, error: r.error ? r.error.message : "" };
}

function lastLines(text: string, n = 3): string {
  return text.split(/\r?\n/).map((s) => s.trim()).filter(Boolean).slice(-n).join(" | ").slice(0, 300);
}

function num(m: RegExpMatchArray | null, i: number): number | null {
  const v = m?.[i];
  return v === undefined ? null : Number(v);
}

const verdict = (step: string, pass: boolean, detail: string): Verdict => ({ step, pass, detail });

function typecheck(): Verdict {
  const tsc = join(ROOT, "node_modules", "typescript", "bin", "tsc");
  if (!existsSync(tsc)) return verdict("typecheck", false, "typescript not installed (run npm ci)");
  const r = run(NODE, [tsc, "--noEmit", "-p", "."]);
  const errors = (r.out.match(/error TS\d+/g) ?? []).length;
  return r.code === 0 ? verdict("typecheck", true, "errors=0") : verdict("typecheck", false, `errors=${errors} ${lastLines(r.out)}`);
}

function test(): Verdict {
  const r = run(NODE, ["--test", "--test-reporter=tap", "tests/**/*.test.ts"]);
  const tests = num(r.out.match(/^# tests (\d+)/m), 1);
  const pass = num(r.out.match(/^# pass (\d+)/m), 1);
  const fail = num(r.out.match(/^# fail (\d+)/m), 1);
  if (tests === null || pass === null || fail === null) return verdict("test", false, `unparseable ${lastLines(r.out)}`);
  const ok = r.code === 0 && fail === 0 && tests > 0 && pass === tests;
  if (ok) return verdict("test", true, `tests=${tests} pass=${pass} `);
  const failing = [...r.out.matchAll(/^not ok \d+ - (.+)$/gm)].map((m) => m[1]).slice(0, 5).join("; ");
  return verdict("test", false, `tests=${tests} passed=${pass} fail=${fail} ${failing}`);
}

function content(): Verdict {
  const r = run(NODE, ["scripts/validate-content.ts"]);
  const m = r.out.match(/CONTENT days=(\d+) errors=(\d+) words=(\d+)/);
  if (!m) return verdict("content", false, `unparseable ${lastLines(r.out)}`);
  const [days, errors, words] = [num(m, 1), num(m, 2), num(m, 3)];
  const ok = r.code === 0 && days === 56 && errors === 0 && (words ?? 0) >= 700;
  return ok
    ? verdict("content", true, `days=${days} errors=${errors} words=${words} `)
    : verdict("content", false, `days=${days} errs=${errors} words=${words} ${lastLines(r.out, 2)}`);
}

function stress(): Verdict {
  const r = run(NODE, ["scripts/verify-stress.ts", "--sample", "120"]);
  const m = r.out.match(/STRESS sampled=(\d+) checked=(\d+) agree=(\d+) disagree=(\d+)/);
  if (!m) return verdict("stress", false, `unparseable ${lastLines(r.out)}`);
  const checked = num(m, 2) ?? 0;
  const agree = num(m, 3) ?? 0;
  const rate = checked > 0 ? agree / checked : 0;
  const ok = checked >= 80 && rate >= 0.95;
  const detail = `checked=${checked} agree=${agree} rate=${(rate * 100).toFixed(1)}%`;
  return ok ? verdict("stress", true, detail) : verdict("stress", false, `${detail} (need >=80 checked, >=95%)`);
}

function links(): Verdict {
  const r = run(NODE, ["scripts/check-links.ts"]);
  const m = r.out.match(/LINKS total=(\d+) ok=(\d+) broken=(\d+)/);
  if (!m) return verdict("links", false, `unparseable ${lastLines(r.out)}`);
  const [total, ok, broken] = [num(m, 1) ?? 0, num(m, 2) ?? 0, num(m, 3) ?? 0];
  return total > 0 && ok === total && broken === 0
    ? verdict("links", true, `total=${total} ok=${ok} broken=0`)
    : verdict("links", false, `total=${total} good=${ok} broken=${broken} ${lastLines(r.out, 4)}`);
}

function buildIdOf(html: string): string | null {
  return html.match(/<meta name="build-id" content="([0-9a-f]{12})">/)?.[1] ?? null;
}

function build(): Verdict {
  const r = run(NODE, ["scripts/build.ts"]);
  if (r.code !== 0) return verdict("build", false, `build exited ${r.code} ${lastLines(r.out)}`);
  const dist = join(ROOT, "dist");
  const need = ["index.html", "artifact.html", "manifest.webmanifest", "sw.js", "icon.svg", "icon-192.png", "icon-512.png"];
  const missing = need.filter((f) => !existsSync(join(dist, f)));
  if (missing.length) return verdict("build", false, `missing ${missing.join(",")}`);
  const index = readFileSync(join(dist, "index.html"), "utf8");
  const frag = readFileSync(join(dist, "artifact.html"), "utf8");
  const limit = 16 * 1024 * 1024;
  const sizes = need.map((f) => statSync(join(dist, f)).size);
  if (sizes.some((s) => s > limit || s === 0)) return verdict("build", false, "a file is empty or over 16 MB");
  const idIndex = buildIdOf(index);
  const idFrag = buildIdOf(frag);
  if (!idIndex || idIndex !== idFrag) return verdict("build", false, `build ids differ index=${idIndex} artifact=${idFrag}`);
  if (/<\/?(html|head|body)[\s>]/i.test(frag)) return verdict("build", false, "artifact fragment contains html/head/body tags");
  if (!/<title>[^<]{3,}<\/title>/.test(frag.slice(0, 8192))) return verdict("build", false, "artifact <title> not in first 8 KB");
  if (!/^<!doctype html>/i.test(index.trimStart())) return verdict("build", false, "index.html lacks doctype");
  if (!readFileSync(join(dist, "sw.js"), "utf8").includes(idIndex)) return verdict("build", false, "sw.js cache not keyed by build id");
  try {
    const manifest: unknown = JSON.parse(readFileSync(join(dist, "manifest.webmanifest"), "utf8"));
    if (typeof manifest !== "object" || manifest === null || !("icons" in manifest)) throw new Error("no icons");
  } catch (e) {
    return verdict("build", false, `manifest invalid: ${e instanceof Error ? e.message : String(e)}`);
  }
  const kb = (s: number) => Math.round(s / 1024);
  return verdict("build", true, `id=${idIndex} indexKB=${kb(sizes[0] ?? 0)} artifactKB=${kb(sizes[1] ?? 0)}`);
}

function frontmatter(text: string): Map<string, string> | null {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m?.[1]) return null;
  const map = new Map<string, string>();
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z-]+):\s*(.*)$/);
    if (kv?.[1] && kv[2] !== undefined) map.set(kv[1], kv[2].trim());
  }
  return map;
}

function agents(): Verdict {
  const problems: string[] = [];
  const list = (dir: string) => (existsSync(join(ROOT, dir)) ? readdirSync(join(ROOT, dir)).filter((f) => f.endsWith(".md")) : []);
  const agentFiles = list(".claude/agents");
  const commandFiles = list(".claude/commands");
  for (const f of agentFiles) {
    const fm = frontmatter(readFileSync(join(ROOT, ".claude/agents", f), "utf8"));
    if (!fm) { problems.push(`${f}: no frontmatter`); continue; }
    if (fm.get("name") !== f.replace(/\.md$/, "")) problems.push(`${f}: name must equal file name`);
    if ((fm.get("description") ?? "").length < 40) problems.push(`${f}: description too short`);
  }
  for (const f of commandFiles) {
    const fm = frontmatter(readFileSync(join(ROOT, ".claude/commands", f), "utf8"));
    if (!fm || (fm.get("description") ?? "").length < 20) problems.push(`${f}: missing description`);
  }
  const ok = problems.length === 0 && agentFiles.length === 5 && commandFiles.length === 4;
  return ok
    ? verdict("agents", true, `agents=5 commands=4`)
    : verdict("agents", false, `agents=${agentFiles.length} commands=${commandFiles.length} ${problems.join("; ")}`);
}

function secrets(): Verdict {
  // Patterns are assembled from fragments so this file never matches itself.
  const patterns: Array<[string, RegExp]> = [
    ["aws-key", new RegExp("AK" + "IA[0-9A-Z]{16}")],
    ["github-token", new RegExp("gh" + "[pousr]_[A-Za-z0-9]{36}")],
    ["anthropic-key", new RegExp("sk-" + "ant-[A-Za-z0-9_-]{10,}")],
    ["openai-or-router-key", new RegExp("sk-" + "(or|proj)-[A-Za-z0-9_-]{10,}")],
    ["private-key", new RegExp("-----BEGIN " + "(RSA |EC |OPENSSH )?PRIVATE KEY")],
    ["personal-email", new RegExp(["ahmednasr", "281094"].join(""), "i")],
    ["user-name", new RegExp(["oka", "sha"].join(""), "i")],
    ["windows-user-path", new RegExp("[A-Za-z]:" + "[\\\\/]" + "Users" + "[\\\\/]", "i")],
    ["password-literal", new RegExp("(pass" + "word|pass" + "wd)\\s*[:=]\\s*[\"'][^\"']{6,}", "i")],
  ];
  const r = run("git", ["ls-files", "-z"]);
  if (r.code !== 0) return verdict("secrets", false, `git ls-files failed ${lastLines(r.out)}`);
  const files = r.out.split("\0").map((s) => s.trim()).filter((f) => f && !/\.(png|jpg|jpeg|gif|webp|ico|wasm|woff2?)$/i.test(f));
  const hits: string[] = [];
  for (const f of files) {
    const abs = join(ROOT, f);
    if (!existsSync(abs)) continue;
    const lines = readFileSync(abs, "utf8").split(/\r?\n/);
    lines.forEach((line, i) => {
      for (const [name, rx] of patterns) if (rx.test(line)) hits.push(`${f}:${i + 1} ${name}`);
    });
  }
  return hits.length === 0
    ? verdict("secrets", true, `hits=0 files=${files.length}`)
    : verdict("secrets", false, `hits=${hits.length} ${hits.slice(0, 8).join("; ")}`);
}

function readme(): Verdict {
  const p = join(ROOT, "README.md");
  if (!existsSync(p)) return verdict("readme", false, "README.md missing");
  const text = readFileSync(p, "utf8");
  const arabic = (text.match(/[؀-ۿ]/g) ?? []).length;
  const checks: Array<[string, boolean]> = [
    ["arabic>=600", arabic >= 600],
    ["schedule-table", /\|\s*07:00/.test(text) && /\|\s*20:00/.test(text)],
    ["agents-section", text.includes(".claude/agents")],
    ["pages-link", text.includes(PAGES_URL)],
    ["setup-voices", /voice/i.test(text)],
  ];
  const failed = checks.filter(([, ok]) => !ok).map(([n]) => n);
  return failed.length === 0 ? verdict("readme", true, `arabic=${arabic}`) : verdict("readme", false, `missing ${failed.join(",")}`);
}

function gh(args: string[]): RunResult {
  return run(process.env["GH_BIN"] ?? "gh", args, 60_000);
}

function headSha(): string {
  return run("git", ["rev-parse", "HEAD"]).out.trim().split(/\s+/)[0] ?? "";
}

function remote(): Verdict {
  const v = gh(["repo", "view", REPO, "--json", "visibility"]);
  if (v.error) return verdict("remote", false, `gh unavailable (${v.error}); set GH_BIN`);
  const visibility = v.out.match(/"visibility":"(\w+)"/)?.[1] ?? "unknown";
  const head = headSha();
  const ls = run("git", ["ls-remote", "origin", "refs/heads/main"]).out.trim().split(/\s+/)[0] ?? "";
  const ok = visibility === "PUBLIC" && head.length === 40 && head === ls;
  return ok ? verdict("remote", true, `head=${head.slice(0, 7)}`) : verdict("remote", false, `visibility=${visibility} head=${head.slice(0, 7)} origin=${ls.slice(0, 7)}`);
}

function ci(): Verdict {
  const head = headSha();
  const r = gh(["run", "list", "--repo", REPO, "--workflow", "ci.yml", "--limit", "30", "--json", "headSha,conclusion,status"]);
  if (r.error) return verdict("ci", false, `gh unavailable (${r.error}); set GH_BIN`);
  let runs: Array<{ headSha: string; conclusion: string; status: string }> = [];
  try {
    const json = r.out.slice(r.out.indexOf("["), r.out.lastIndexOf("]") + 1);
    runs = JSON.parse(json) as typeof runs;
  } catch {
    return verdict("ci", false, `unparseable ${lastLines(r.out)}`);
  }
  const mine = runs.find((x) => x.headSha === head);
  if (!mine) return verdict("ci", false, `no ci run for ${head.slice(0, 7)}`);
  return mine.status === "completed" && mine.conclusion === "success"
    ? verdict("ci", true, `head=${head.slice(0, 7)}`)
    : verdict("ci", false, `status=${mine.status} conclusion=${mine.conclusion}`);
}

async function pages(): Promise<Verdict> {
  const localPath = join(ROOT, "dist", "index.html");
  if (!existsSync(localPath)) return verdict("pages", false, "no local dist/index.html (build first)");
  const local = buildIdOf(readFileSync(localPath, "utf8"));
  try {
    const res = await fetch(`${PAGES_URL}?v=${Date.now()}`, { cache: "no-store" });
    const html = await res.text();
    const live = buildIdOf(html);
    return res.status === 200 && live !== null && live === local
      ? verdict("pages", true, `id=${live}`)
      : verdict("pages", false, `status=${res.status} live=${live} local=${local}`);
  } catch (e) {
    return verdict("pages", false, `fetch error ${e instanceof Error ? e.message : String(e)}`);
  }
}

const LOCAL_STEPS: Record<string, () => Verdict> = { typecheck, test, content, build, agents, secrets, readme };
const ALL_STEPS: Record<string, () => Verdict | Promise<Verdict>> = { ...LOCAL_STEPS, stress, links, remote, ci, pages };

function print(v: Verdict): void {
  console.log(`VERDICT ${v.step} ${v.pass ? "PASS" : "FAIL"} ${v.detail}`);
}

const step = process.argv[2] ?? "";
if (step === "all") {
  const results = Object.values(LOCAL_STEPS).map((fn) => fn());
  results.forEach(print);
  const failed = results.filter((v) => !v.pass).map((v) => v.step);
  print(verdict("all", failed.length === 0, failed.length ? `failed=${failed.join(",")}` : `steps=${results.length}`));
  process.exitCode = failed.length ? 1 : 0;
} else {
  const fn = ALL_STEPS[step];
  if (!fn) {
    console.log(`VERDICT ${step || "(none)"} FAIL unknown step; use one of: all, ${Object.keys(ALL_STEPS).join(", ")}`);
    process.exitCode = 2;
  } else {
    const v = await fn();
    print(v);
    process.exitCode = v.pass ? 0 : 1;
  }
}
