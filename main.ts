// My cat's one-star review of me, as a program.
//
// Look, the bounty wants the line to come out of something runnable,
// not pasted in by hand at submit time, so this file is the whole
// entry: it writes one fixed sentence to entry.txt. No dice rolls,
// no clock, no fetching anything — run it twice and you get the exact
// same bytes, which is the point. If two runs ever disagree, the bug
// is in here, not in the cat.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke, in two beats, the way I actually wrote it. First the
// setup: the man stares at a glowing rectangle all day — phone,
// laptop, pick one, it is always a rectangle — and then he has the
// nerve to call the cat clingy for sitting on it. Then the sting:
// the cat does not argue. It becomes the rectangle. That last line
// is doing all the work: it is deadpan, it is specific, and it tells
// you far more about the cat than it does about the man.
const setup =
  "One star. He stares at a glowing rectangle all day, then calls me clingy for sitting on it. Fine.";
const punchline = "I am the rectangle now.";

const theReview = setup + " " + punchline;

// Where it lands: the grader points us at a folder with
// MAKEFUN_OUTPUT_DIR, and /output is the fallback the rules name.
// Make the folder first — the sandbox starts out empty — then drop
// the review in as entry.txt.
function run(): void {
  const outFolder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outFolder, { recursive: true });
  writeFileSync(join(outFolder, "entry.txt"), theReview, "utf8");
}

run();
