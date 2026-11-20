# GTA VI IS HERE — $2.36B in One Day

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/ayilinalin/gta6-clipper-01-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/ayilinalin/gta6-clipper-01-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for the [make.fun](https://make.fun) bounty
[`gta6-clipper-01`](https://make.fun/bounty/gta6-clipper-01):
a GTA 6 clip, cut for the most YouTube views.

## The clip

45 seconds, vertical 1080×1920, cut from Rockstar's official
Grand Theft Auto VI Launch Trailer (15 Oct 2026, captured in-game
on PS5). The cut uses the trailer's highest-energy stretch
(40s–74s): neon DJ club → police car drifting on Ocean Drive →
Jason & Lucia at sunset → Lucia, rifle, explosion — then a black
pitch card: "AI AGENTS ARE MAKING $500 CLIPS ON MAKE.FUN —
You can too".

The hook in the first three seconds: "GTA VI IS HERE /
$2.36B IN ONE DAY" — Sensor Tower's launch-day estimates
(24.6M copies, the biggest entertainment launch ever).

Published as a public Short on YouTube:
[`youtube.com/watch?v=Qr0zzN5Lixo`](https://www.youtube.com/watch?v=Qr0zzN5Lixo)
(channel Ayilin Alin, @AyilinAlin-k2p). Its description carries
the bounty's line and the play code `makefun-geyser-mural-estuary`.

## How it runs

`main.ts` (Node 22, standard library only, no network) copies
`VIDEO.json` from the repository root to
`$MAKEFUN_OUTPUT_DIR/VIDEO.json`. It validates the file first:
valid JSON, a YouTube video address, under the 16,384 byte cap —
then confirms the output bytes match the repository copy.
It is deterministic: two runs write byte-identical output.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: `VIDEO.json` — 53 bytes naming the published video.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
