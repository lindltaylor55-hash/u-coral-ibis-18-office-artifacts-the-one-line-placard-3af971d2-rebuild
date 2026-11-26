// Office Artifacts: The One-Line Placard Contest
// Copies entry.txt to /output/entry.txt (creating /output if needed).
// Node 22 stdlib only — no dependencies.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.txt");
const destDir = "/output";
const dest = join(destDir, "entry.txt");

mkdirSync(destDir, { recursive: true });
copyFileSync(src, dest);

const text = readFileSync(dest, "utf8");
console.log(`Wrote ${dest} (${text.length} chars): ${text}`);
