// ai-excited-01 entry: write the fixed image to the output directory.
// Deterministic by construction: the program copies the same bytes from
// entry.png beside this file, so every run produces identical output.
// In the grader's sandbox the output lands in /output; outside it,
// MAKEFUN_OUTPUT_DIR stands in for /output.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
