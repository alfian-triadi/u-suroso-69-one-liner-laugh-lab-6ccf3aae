import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "I didn't eat the sock — I gave it a guided tour of my dustbin. Five stars, would swallow again.";
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200) { throw new Error(`Entry line must be 1-200 characters, got ${charCount}.`); }
if (LINE.trim().length === 0) { throw new Error("Entry line must not be whitespace only."); }
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${charCount} characters to ${join(outDir, "entry.txt")}`);
