// Unsent: The Micro-Confession Sprint
// One original two-part micro-confession, written exactly as typed and never sent.
// Node 22, stdlib only, deterministic: no network, no randomness, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = [
  "To: the barista who spells my name right",
  "I rehearsed asking for your number for three weeks and still only ever say \"thanks, you too\"",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
