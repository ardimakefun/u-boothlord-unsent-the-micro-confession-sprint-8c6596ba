// Unsent: The Micro-Confession Sprint
// One original two-part micro-confession, written exactly as typed and never sent.
// Node 22, stdlib only, deterministic: no network, no randomness, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = [
  "To: the barista who spells my name right",
  "I rehearsed asking for your number for three weeks and still only ever say \"thanks, you too\"",
].join("\n");

const [toLine, messageLine, ...extraLines] = ENTRY.split("\n");

// Length gate: the sealed scorer only accepts 1-260 chars total (and a
// message line of at most 200 chars). Fail loudly instead of writing an
// entry the gate would refuse.
if (extraLines.length > 0 || !toLine || !messageLine) {
  throw new Error("entry must be exactly two lines: a To: line and one message line");
}
if (!toLine.startsWith("To:") || toLine.slice(3).trim().length === 0) {
  throw new Error("To: line must name an addressee");
}
if (messageLine.length < 1 || messageLine.length > 200) {
  throw new Error(`message line must be 1-200 characters, got ${messageLine.length}`);
}
if (ENTRY.length < 1 || ENTRY.length > 260 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-260 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
