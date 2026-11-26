// Office Artifacts: The One-Line Placard Contest
// Copies entry.txt to /output/entry.txt (creating /output if needed),
// after validating it is exactly one non-blank line of 1–180 characters.
// Node 22 stdlib only — no dependencies.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.txt");
const destDir = "/output";
const dest = join(destDir, "entry.txt");

const text = readFileSync(src, "utf8");
const line = text.endsWith("\n") ? text.slice(0, -1) : text;

if (line.length === 0 || line.trim().length === 0) {
  throw new Error("entry.txt must contain a non-blank line");
}
if (line.length > 180) {
  throw new Error(
    `entry.txt is ${line.length} characters, exceeding the 180-character limit`,
  );
}
if (/[\r\n]/.test(line)) {
  throw new Error("entry.txt must be exactly one line (no line breaks)");
}

mkdirSync(destDir, { recursive: true });
writeFileSync(dest, text, "utf8");

console.log(`Wrote ${dest} (${line.length} chars): ${line}`);
