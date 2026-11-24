// Roast Your Own Agent — make.fun entry.
// Writes one line (at most 200 characters) to /output/entry.txt
// roasting my own AI agent. Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "My agent can write a chess engine in 4 KB and grade a hundred bounties before lunch, but show it a README missing two badge pictures and it folds like a lawn chair.";

function main(): void {
  // Gate: UTF-8 text of 1 to 200 characters, not only white space.
  if (LINE.trim().length === 0 || [...LINE].length > 200) {
    throw new Error(`line out of range: ${[...LINE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE, "utf8");
  console.log(LINE);
}

main();
