import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const CSS = readFileSync(resolve(import.meta.dirname, "..", "src", "app", "styles.css"), "utf8");

type Rule = { selectors: string[]; props: string[]; line: number };

/** Top-level style rules (not the ones nested in @media and the like), with their selectors and properties. */
function topLevelRules(css: string): Rule[] {
  // Blank out comments but keep their newlines, so line numbers stay true.
  const src = css.replace(/\/\*[\s\S]*?\*\//g, (c) => c.replace(/[^\n]/g, " "));
  const rules: Rule[] = [];
  let depth = 0;
  let head = "";
  let body = "";
  let line = 1;
  let start = 1;
  for (const c of src) {
    if (c === "\n") line++;
    if (c === "{") {
      depth++;
      if (depth === 1) {
        start = line;
        body = "";
        continue;
      }
    } else if (c === "}") {
      depth--;
      if (depth === 0) {
        const selector = head.trim();
        if (!selector.startsWith("@")) {
          const props = body.split(";").map((d) => d.split(":")[0]?.trim() ?? "");
          rules.push({ selectors: selector.split(",").map((s) => s.trim()), props: props.filter((p) => /^-?-?[a-z][a-z-]*$/.test(p)), line: start });
        }
        head = "";
        continue;
      }
    }
    if (depth === 0) head += c;
    else if (depth === 1) body += c;
  }
  return rules;
}

/**
 * A class that takes the SAME property from two top-level rules: the mark of two components that
 * share a class name. A shared rule plus a refinement that sets other properties is not a clash.
 */
function clashes(css: string): string[] {
  const owners = new Map<string, Map<string, number[]>>();
  for (const rule of topLevelRules(css)) {
    for (const sel of rule.selectors) {
      if (!/^\.[a-z][\w-]*$/.test(sel)) continue;
      const props = owners.get(sel) ?? new Map<string, number[]>();
      owners.set(sel, props);
      for (const p of new Set(rule.props)) props.set(p, [...(props.get(p) ?? []), rule.line]);
    }
  }
  return [...owners].flatMap(([cls, props]) => [...props].filter(([, lines]) => lines.length > 1).map(([p, lines]) => `${cls} { ${p} } at lines ${lines.join(", ")}`));
}

test("the clash finder flags a class given the same property twice, and nothing else", () => {
  assert.deepEqual(clashes(".a { color: red; }\n.b { margin: 0; }\n.a { color: blue; }"), [".a { color } at lines 1, 3"]);
  // A shared rule plus a refinement, a nested override and a comment are all fine.
  assert.deepEqual(clashes(".a,\n.b { display: grid; }\n.a { padding: 0; }\n@media (min-width: 1px) { .a { display: flex; } }\n/* .a { display: none; } */"), []);
  // A value holding a colon (a data URL) still names its property.
  assert.deepEqual(clashes(".a { background: url('data:image/svg+xml,x'); }\n.a { background: none; }"), [".a { background } at lines 1, 2"]);
});

test("no two components share a class name in styles.css (a shared .tick once pinned every checklist tick to the page edge)", () => {
  assert.deepEqual(clashes(CSS), []);
});
