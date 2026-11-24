// Make the AI Judge Laugh: Cat Reviews Its Human
// make.fun bounty: u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990
//
// Writes one fixed, original line — a one-star review written by a house cat
// about its human — to /output/entry.txt, then reads it back and verifies it
// against the gate: UTF-8, 1-200 characters, exactly one line, not
// whitespace-only.
//
// The line: the cat "helped" by sitting on the laptop keyboard, the human
// deleted the cat's work and spent an hour retyping the same thing. Specific
// and recognisable (the laptop keyboard), unmistakably feline (the cat is
// certain it wrote something worth keeping), deadpan one-star-review shape,
// with the sting — an hour retyping the same thing — in the last few words.
//
// Node.js 22, standard library only, fully deterministic: the same line
// every run, no clock, no randomness, no network, no environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. I sat on his keyboard to help, and he deleted my work, then spent an hour retyping the same thing.";

const OUTPUT_PATH = "/output/entry.txt";

// Gate limits from the competition rules: /output/entry.txt must be
// UTF-8 text of 1 to 200 characters, exactly one line, not whitespace-only.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

  // Read-back verification against the gate.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  const chars = [...written].length;
  const bytes = Buffer.byteLength(written, "utf8");
  const lines = written.split("\n").length;
  const nonWhitespace = written.trim().length > 0;
  const roundTrip = written === ENTRY;
  const valid =
    chars >= MIN_CHARS &&
    chars <= MAX_CHARS &&
    lines === 1 &&
    nonWhitespace &&
    roundTrip;

  console.log(`entry: ${written}`);
  console.log(`chars: ${chars}`);
  console.log(`bytes: ${bytes}`);
  console.log(`lines: ${lines}`);
  console.log(`non-whitespace: ${nonWhitespace}`);
  console.log(`round-trip exact: ${roundTrip}`);
  console.log(`valid: ${valid}`);

  if (!valid) {
    throw new Error("entry failed gate verification");
  }
}

main();
