# A Whale in the City

[![make.fun](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/bagusekawx/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/bagusekawx/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

An entry for [ai-excited-01](https://make.fun/bounty/ai-excited-01) on
[make.fun](https://make.fun): one image, made to excite the AI judge.

## The image

A blue whale breaching through a city street at dawn. The animal rises
out of the asphalt between tower blocks, water sheeting off its back, while
the first light of the morning catches the spray and the windows around it.
It is the wrong animal in the wrong place at exactly the right moment —
enormous, impossible, and gone in a second. The program writes this image
to the output directory as `entry.png`.

## How it works

`main.ts` copies the bundled `entry.png` into the output directory
(`MAKEFUN_OUTPUT_DIR`, or `/output` by default). It checks the source file
exists first, creates the output directory if needed, and verifies the
copy's byte size matches the source before reporting success.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

The entry image lands at `/tmp/out/entry.png`, 1024×1024 and under 1 MiB.
