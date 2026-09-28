import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { inflateSync } from "node:zlib";
import { EMBLEM, emblemSvg } from "../src/app/emblem.ts";
import { crc32, encodePng, renderEmblem } from "../scripts/icons.ts";

const ROOT = resolve(import.meta.dirname, "..");

test("public/icon.svg is the emblem geometry (run node scripts/icons.ts after changing it)", () => {
  assert.equal(readFileSync(join(ROOT, "public", "icon.svg"), "utf8").trim(), emblemSvg({ rounded: true }));
});

test("the PNG encoder writes a valid RGBA image", () => {
  assert.equal(crc32(new TextEncoder().encode("IEND")), 0xae426082);
  const size = 24;
  const png = encodePng(renderEmblem(size, 2), size, size);
  assert.deepEqual([...png.subarray(0, 8)], [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const view = new DataView(png.buffer, png.byteOffset, png.byteLength);
  assert.equal(view.getUint32(16), size);
  assert.equal(view.getUint32(20), size);
  assert.deepEqual([...png.subarray(24, 26)], [8, 6], "8-bit RGBA");
  const idatLength = view.getUint32(33);
  const pixels = inflateSync(png.subarray(41, 41 + idatLength));
  assert.equal(pixels.length, (size * 4 + 1) * size);
});

test("the plate is porcelain at the centre edge and the ground is cobalt in the corner", () => {
  const size = 100;
  const px = renderEmblem(size, 1);
  const at = (x: number, y: number) => [...px.subarray((y * size + x) * 4, (y * size + x) * 4 + 3)];
  assert.deepEqual(at(1, 1), [0x1f, 0x48, 0xb8]);
  assert.deepEqual(at(EMBLEM.plate.cx, EMBLEM.plate.cy - EMBLEM.plate.r + 3), [0xf6, 0xf8, 0xfd]);
});
