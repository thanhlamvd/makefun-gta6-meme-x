// Entry program for the make.fun GTA 6 meme bounty (gta6-meme-x-01).
// The meme itself lives on X; this file only delivers the post's address
// to the gate. It reads POST.json from the repository root and writes the
// same bytes into the output directory. Nothing else written here is
// judged: the house reads the post's picture and text from X.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// ... then out/POST.json matches ./POST.json byte for byte.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

function main(): void {
  const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  try {
    copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
    console.log(`POST.json copied to ${join(outDir, "POST.json")}`);
  } catch (err) {
    console.error(`POST.json could not be copied: ${(err as Error).message}`);
    process.exit(1);
  }
}

main();
