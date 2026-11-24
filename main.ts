// One Word, One Username, One Reward — entry for @g290.
//
// The task: send our own make.fun username as one word and nothing else.
// The gate checks that /output/entry.txt is UTF-8 text of 1 to 30
// characters, not only white space. So this program writes exactly our
// handle, "g290" — four characters, a single word, no padding, no gloss —
// and nothing more. The judge then reads that one word against the other
// entries, two at a time.
//
// After writing, it reads the file back and checks it against the same
// gate, so a failed or mangled write fails loudly here instead of
// silently handing the judge a bad entry.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const USERNAME = "g290";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, USERNAME, "utf8");

// Read back and verify against the gate: 1-30 characters, not only white
// space, exactly the username we meant to send.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (
  written !== USERNAME ||
  written.length < 1 ||
  written.length > 30 ||
  written.trim().length === 0
) {
  throw new Error(`entry failed the gate: wrote ${JSON.stringify(written)}`);
}
