// The app's emblem: a porcelain plate on cobalt with a painted Ж and a rowan-red stress mark.
// One geometry (a 100 × 100 box) drives the header mark, public/icon.svg and the PNG icons.

export type Capsule = { x1: number; y1: number; x2: number; y2: number };

export const EMBLEM_COLORS = {
  cobalt: "#1f48b8",
  porcelain: "#f6f8fd",
  rowan: "#cf3f24",
} as const;

export const EMBLEM = {
  /** Corner radius of the square ground (the SVG and header mark; PNGs are full-bleed for masking). */
  radius: 22,
  plate: { cx: 50, cy: 50, r: 36 },
  stroke: 6.5,
  /** Ж: stem, crossbar and four arms. */
  letter: [
    { x1: 50, y1: 34, x2: 50, y2: 70 },
    { x1: 43, y1: 52, x2: 57, y2: 52 },
    { x1: 43, y1: 52, x2: 31, y2: 35 },
    { x1: 43, y1: 52, x2: 31, y2: 69 },
    { x1: 57, y1: 52, x2: 69, y2: 35 },
    { x1: 57, y1: 52, x2: 69, y2: 69 },
  ] as readonly Capsule[],
  /** The acute accent that marks stress, painted in rowan red. */
  accent: { x1: 54, y1: 26, x2: 60, y2: 19 } as Capsule,
} as const;

/** The emblem as SVG markup (used for public/icon.svg). `rounded: false` gives a full-bleed square. */
export function emblemSvg(opts: { rounded?: boolean; size?: number } = {}): string {
  const rounded = opts.rounded ?? true;
  const size = opts.size ?? 512;
  const line = (c: Capsule, color: string) =>
    `<line x1="${c.x1}" y1="${c.y1}" x2="${c.x2}" y2="${c.y2}" stroke="${color}" stroke-width="${EMBLEM.stroke}" stroke-linecap="round"/>`;
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${size}" height="${size}">`,
    `<rect width="100" height="100" rx="${rounded ? EMBLEM.radius : 0}" fill="${EMBLEM_COLORS.cobalt}"/>`,
    `<circle cx="${EMBLEM.plate.cx}" cy="${EMBLEM.plate.cy}" r="${EMBLEM.plate.r}" fill="${EMBLEM_COLORS.porcelain}"/>`,
    ...EMBLEM.letter.map((c) => line(c, EMBLEM_COLORS.cobalt)),
    line(EMBLEM.accent, EMBLEM_COLORS.rowan),
    `</svg>`,
  ].join("");
}
