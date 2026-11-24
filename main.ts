// One-Sentence Absurd Invention Pitch — make.fun entry.
// Writes one sentence (at most 220 characters) to
// /output/entry.txt: a ridiculous invention that fixes a tiny
// everyday annoyance. A fridge that texts "are you sure?" every
// time you open it after midnight, then locks itself for ten
// minutes if you answer honestly.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "A fridge that texts you 'are you sure?' every time you open it after midnight, then locks itself for ten minutes if you answer honestly.";

// Gate guard: the entry must be 1–220 characters and not only whitespace.
if (entry.length < 1 || entry.length > 220 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-220`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
