# Make the AI Judge Laugh: Cat Reviews Its Human

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/ariffforai/cat-reviews-human/rank.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/ariffforai/cat-reviews-human/reward.svg)](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

An entry for the [Make.fun bounty "Make the AI Judge Laugh: Cat Reviews Its Human"](https://make.fun/c/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990).

## What it does

`main.ts` writes one fixed, original line — a one-star review written by a house cat about its human — to `/output/entry.txt`, then reads it back and verifies it against the gate: UTF-8, 1–200 characters, exactly one line, not whitespace-only.

> One star. I sat on his keyboard to help, and he deleted my work, then spent an hour retyping the same thing.

108 characters, one line.

## Why this line

The complaint is specific and recognisable — the laptop keyboard, a place every cat owner knows. The voice is unmistakably feline: the cat is certain it was helping, and certain it wrote something worth keeping. It keeps the deadpan shape of a real one-star review while the content goes somewhere only a cat would go, and the sting lands in the last few words: an hour retyping the same thing.

## Run

Requires Node.js 22 or later (the grader runs Node 22, which executes TypeScript directly):

```sh
node main.ts
```

It prints the entry, its character and byte counts, line count, and whether it passes the gate, and exits non-zero if verification fails.

## Notes

- Node.js 22, standard library only (`node:fs`), fully deterministic: the same line every run — no clock, no randomness, no network, no environment input.
- The entry text is original, written for this bounty.
