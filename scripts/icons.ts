// The app icons, drawn from the emblem geometry with no image library: each pixel is sampled 4×4
// against the shapes, and a small PNG encoder writes the result.
// `node scripts/icons.ts` also rewrites public/icon.svg from the same geometry.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { deflateSync } from "node:zlib";
import { EMBLEM, EMBLEM_COLORS, emblemSvg } from "../src/app/emblem.ts";
import type { Capsule } from "../src/app/emblem.ts";

type Rgb = readonly [number, number, number];

const rgb = (hex: string): Rgb => [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];

/** Distance from a point to a line segment (a capsule is every point within half the stroke). */
function segmentDistance(px: number, py: number, c: Capsule): number {
  const dx = c.x2 - c.x1;
  const dy = c.y2 - c.y1;
  const len2 = dx * dx + dy * dy || 1;
  const t = Math.max(0, Math.min(1, ((px - c.x1) * dx + (py - c.y1) * dy) / len2));
  return Math.hypot(px - (c.x1 + t * dx), py - (c.y1 + t * dy));
}

/** The emblem as full-bleed RGBA pixels (launchers apply their own mask). */
export function renderEmblem(size: number, samples = 4): Uint8Array {
  const cobalt = rgb(EMBLEM_COLORS.cobalt);
  const porcelain = rgb(EMBLEM_COLORS.porcelain);
  const rowan = rgb(EMBLEM_COLORS.rowan);
  const half = EMBLEM.stroke / 2;
  const { cx, cy, r } = EMBLEM.plate;
  const out = new Uint8Array(size * size * 4);
  const n = samples * samples;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let sr = 0;
      let sg = 0;
      let sb = 0;
      for (let sy = 0; sy < samples; sy++) {
        for (let sx = 0; sx < samples; sx++) {
          const u = ((x + (sx + 0.5) / samples) / size) * 100;
          const v = ((y + (sy + 0.5) / samples) / size) * 100;
          let color: Rgb = cobalt;
          if (Math.hypot(u - cx, v - cy) <= r) color = porcelain;
          if (EMBLEM.letter.some((c) => segmentDistance(u, v, c) <= half)) color = cobalt;
          if (segmentDistance(u, v, EMBLEM.accent) <= half) color = rowan;
          sr += color[0];
          sg += color[1];
          sb += color[2];
        }
      }
      const i = (y * size + x) * 4;
      out[i] = Math.round(sr / n);
      out[i + 1] = Math.round(sg / n);
      out[i + 2] = Math.round(sb / n);
      out[i + 3] = 255;
    }
  }
  return out;
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

export function crc32(bytes: Uint8Array): number {
  let c = 0xffffffff;
  for (const b of bytes) c = (CRC_TABLE[(c ^ b) & 0xff] ?? 0) ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type: string, data: Uint8Array): Uint8Array {
  const out = new Uint8Array(12 + data.length);
  const view = new DataView(out.buffer);
  view.setUint32(0, data.length);
  const typeAndData = new Uint8Array(4 + data.length);
  typeAndData.set(new TextEncoder().encode(type), 0);
  typeAndData.set(data, 4);
  out.set(typeAndData, 4);
  view.setUint32(8 + data.length, crc32(typeAndData));
  return out;
}

/** An 8-bit RGBA PNG (colour type 6, no filtering, zlib level 9). */
export function encodePng(rgba: Uint8Array, width: number, height: number): Uint8Array {
  const stride = width * 4;
  const raw = new Uint8Array((stride + 1) * height);
  for (let y = 0; y < height; y++) raw.set(rgba.subarray(y * stride, (y + 1) * stride), y * (stride + 1) + 1);
  const ihdr = new Uint8Array(13);
  const view = new DataView(ihdr.buffer);
  view.setUint32(0, width);
  view.setUint32(4, height);
  ihdr.set([8, 6, 0, 0, 0], 8);
  const parts = [
    new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", new Uint8Array(deflateSync(raw, { level: 9 }))),
    chunk("IEND", new Uint8Array(0)),
  ];
  const out = new Uint8Array(parts.reduce((a, p) => a + p.length, 0));
  let at = 0;
  for (const p of parts) {
    out.set(p, at);
    at += p.length;
  }
  return out;
}

/** Every icon file the build publishes, by file name. */
export function iconFiles(): Record<string, string | Uint8Array> {
  return {
    "icon.svg": emblemSvg({ rounded: true }),
    "icon-192.png": encodePng(renderEmblem(192), 192, 192),
    "icon-512.png": encodePng(renderEmblem(512), 512, 512),
  };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const target = join(resolve(import.meta.dirname, ".."), "public", "icon.svg");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, `${emblemSvg({ rounded: true })}\n`);
  console.log(`ICONS wrote public/icon.svg`);
}
