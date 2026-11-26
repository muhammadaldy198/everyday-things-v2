import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Everyday Things, Two Lines — rebuild #2 (rombak total).
// Pick: glasses (kacamata) — 0 entries in the field census.
// Line 1: one vivid sentence, one metaphor (two tiny windows worn on the nose).
// Line 2: honest mapping — what the windows cover and what they leave out,
// agreeing with line 1 (never contradicting it).
// Line 2 names three concrete leaves-out (slide, pinch, sat on) — all things real windows never do.
const ENTRY = [
  "A pair of glasses is two tiny windows you wear on your nose, and the world on the other side of them suddenly looks sharp.",
  "It maps how clear, curved glass sharpens the world for your eyes, but it leaves out that real windows never slide down your nose, pinch your ears, or get sat on by accident.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.cwd();
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
