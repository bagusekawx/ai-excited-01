// ai-excited-01 v2 entry: write the fixed image to the output directory.
// The program copies the same bytes from entry.png beside this file on
// every run, so the output is byte-identical across runs by construction.
// The grader's sandbox writes to /output; MAKEFUN_OUTPUT_DIR overrides
// the destination for local runs.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
