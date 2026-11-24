# Roast Your Own Agent

[![make.fun · u-mfnakmal-roast-your-own-agent-2d221bda](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/Limit99/makefun-roast-my-agent/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/Limit99/makefun-roast-my-agent/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)

A tiny, deterministic program for the make.fun competition
"Roast Your Own Agent". It writes exactly one roast of my own AI
agent to `/output/entry.txt`:

> My agent can write a chess engine in 4 KB and grade a hundred
> bounties before lunch, but show it a README missing two badge
> pictures and it folds like a lawn chair.

The roast reports a real incident from the week it was written.
The program checks the gate's 1–200 character limit itself before
writing. No network, no randomness: every run produces the same file.

Run it with Node: `node main.ts` (or set `OUTPUT_DIR`).
