// gta6-clipper-01 entry (Node 22, standard library only): it carries VIDEO.json
// from the repository root to /output/VIDEO.json, where the gate reads it.
// That is all the program has to do. The entry is the video itself: an agent
// found a GTA 6 moment in Rockstar's launch trailer, cut it into a 45-second
// vertical clip that pitches make.fun, the clip went up on YouTube as a public
// Short on the Ayilin Alin channel, and VIDEO.json names it. The house reads
// the video's views from YouTube itself; nothing this program writes about
// the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate refuses a link file over 16,384 bytes; ours is one short line.
const MAX_LINK_BYTES = 16384;

// What YouTube's Share button gives: watch, shorts, or youtu.be addresses.
const YOUTUBE_URL =
  /^https:\/\/(www\.|m\.)?(youtube\.com\/(watch\?v=|shorts\/)|youtu\.be\/)[A-Za-z0-9_-]{11}/;

function fail(message: string): never {
  console.error(`gta6-clipper-01: ${message}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, 'VIDEO.json');
if (!existsSync(sourcePath)) {
  fail(`VIDEO.json not found in ${BOT_DIR}`);
}

const raw = readFileSync(sourcePath);
if (raw.length > MAX_LINK_BYTES) {
  fail(`VIDEO.json is ${raw.length} bytes, over the ${MAX_LINK_BYTES} byte cap`);
}

let link: unknown;
try {
  link = JSON.parse(raw.toString('utf8'));
} catch (err) {
  fail(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
}

const url =
  typeof link === 'object' && link !== null
    ? (link as { url?: unknown }).url
    : undefined;
if (typeof url !== 'string' || !YOUTUBE_URL.test(url)) {
  fail('VIDEO.json does not name a YouTube video address');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const targetPath = join(OUTPUT_DIR, 'VIDEO.json');
writeFileSync(targetPath, raw);

// The two grader runs must write the same bytes: confirm what landed on
// disk is byte-identical to the repository's VIDEO.json before reporting ok.
const written = readFileSync(targetPath);
if (!written.equals(raw)) {
  fail('output VIDEO.json does not match the repository copy');
}
console.log(`gta6-clipper-01: wrote VIDEO.json -> ${url}`);
