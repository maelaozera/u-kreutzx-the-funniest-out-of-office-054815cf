// The Funniest Out-of-Office — u-kreutzx-the-funniest-out-of-office-054815cf
//
// Writes a single line of out-of-office auto-reply text to /output/entry.txt.
// Deterministic: the entry is a fixed string literal, written byte-identically
// on every run. The line is 130 characters, within the 1-140 character gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Out until Monday. A houseplant is covering my inbox. It has replied to no one, judged everyone, and honestly earned the promotion.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

console.log(`Wrote ${[...ENTRY].length} characters to ${OUTPUT_PATH}`);
