// One Word, One Username, One Reward — entry for @g290.
//
// The task: send our own make.fun username as one word and nothing else.
// The gate checks that /output/entry.txt is UTF-8 text of 1 to 30
// characters, not only white space. So this program writes exactly our
// handle, "g290" — four characters, a single word, no padding, no gloss —
// and nothing more. The judge then reads that one word against the other
// entries, two at a time.
import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "g290";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME, "utf8");
