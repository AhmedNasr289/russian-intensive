// A tiny hyperscript helper. Text always goes in as text nodes, never as HTML, so content and
// model output can never inject markup.

export type Child = Node | string | number | false | null | undefined | readonly Child[];

/** Any one-argument handler; attached as an event listener named after the `on…` key. */
export type Handler = (e: never) => void;

export type Attrs = Record<string, string | number | boolean | null | undefined | Handler>;

const PROPS = new Set(["value", "checked", "disabled", "selected", "indeterminate"]);

function setAttr(el: Element, key: string, value: Attrs[string]): void {
  if (value === null || value === undefined || value === false) return;
  if (typeof value === "function") {
    el.addEventListener(key.slice(2).toLowerCase(), value as unknown as EventListener);
  } else if (key === "class") {
    el.setAttribute("class", String(value));
  } else if (PROPS.has(key)) {
    (el as unknown as Record<string, unknown>)[key] = value;
  } else {
    el.setAttribute(key, value === true ? "" : String(value));
  }
}

export function appendChildren(parent: Node, children: readonly Child[]): void {
  for (const c of children) {
    if (c === null || c === undefined || c === false) continue;
    if (Array.isArray(c)) appendChildren(parent, c);
    else if (typeof c === "string" || typeof c === "number") parent.appendChild(document.createTextNode(String(c)));
    else parent.appendChild(c as Node);
  }
}

export function h<K extends keyof HTMLElementTagNameMap>(tag: K, attrs?: Attrs | null, ...children: Child[]): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) setAttr(el, k.startsWith("on") && typeof v === "function" ? k : k, v);
  appendChildren(el, children);
  return el;
}

const SVG_NS = "http://www.w3.org/2000/svg";

export function s<K extends keyof SVGElementTagNameMap>(tag: K, attrs?: Record<string, string | number> | null, ...children: Child[]): SVGElementTagNameMap[K] {
  const el = document.createElementNS(SVG_NS, tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
  appendChildren(el, children);
  return el;
}

export function frag(...children: Child[]): DocumentFragment {
  const f = document.createDocumentFragment();
  appendChildren(f, children);
  return f;
}

export function replace(el: Element, ...children: Child[]): void {
  el.replaceChildren();
  appendChildren(el, children);
}
