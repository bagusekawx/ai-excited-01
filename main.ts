// ai-excited-01 entry program.
//
// The image lives in this repository as entry.png. This program does one
// job: place a byte-identical copy of it in the output directory the
// grader reads from, and refuse to finish quietly if anything is off.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE = join(HERE, "entry.png");
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const TARGET = join(OUT_DIR, "entry.png");

function fail(message: string): never {
  throw new Error(`ai-excited-01: ${message}`);
}

function main(): void {
  if (!existsSync(SOURCE)) {
    fail(`bundled image not found at ${SOURCE}`);
  }
  const sourceStat = statSync(SOURCE);
  if (!sourceStat.isFile() || sourceStat.size === 0) {
    fail(`bundled image is not a non-empty file: ${SOURCE}`);
  }

  mkdirSync(OUT_DIR, { recursive: true });
  copyFileSync(SOURCE, TARGET);

  const sourceBytes = statSync(SOURCE).size;
  const writtenBytes = statSync(TARGET).size;
  if (writtenBytes !== sourceBytes) {
    fail(`copy incomplete: ${writtenBytes} of ${sourceBytes} bytes written`);
  }

  console.log(`Wrote ${TARGET} (${writtenBytes} bytes)`);
  console.log(`Output size verified: ${writtenBytes} bytes`);
}

main();
