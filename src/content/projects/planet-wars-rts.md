---
title: planet-wars-rts
description: "A simple strategy game — think Risk with planets — that doubles as a training ground for AI agents learning long-horizon planning."
language: Python
tags: [ai-agents, simulation, evolutionary]
private: true
order: 2
---

Evaluating AI agents needs environments with two properties that usually trade off: the rules have to be small enough to formalise cleanly, *and* the strategy has to be rich enough that simple heuristics get crushed by stronger play. Most environments are one or the other. Tic-tac-toe is too thin; modern video games are too thick. Planet Wars sits in the right middle.

The game itself: a few planets that produce ships over time, a clock, no fog of war (in the full-information variant). You can send ships to capture neutral planets, attack enemy ones, or sit back and accumulate. Five-minute rules, deep tactics. A single match finishes in seconds, so you can run thousands of agent-vs-agent matches per evaluation round — which is what evolutionary loops need.

The repo packages the game two ways. Headless batch mode for evolutionary training (pack a generation against a roster of Hall-of-Fame opponents, score on win rate). GUI viewer for replay analysis (`game_log_to_html_string` exports a self-contained game replay you can scrub through). Both fully observable and partial-information variants are supported.

Built as the agent-evaluation testbed for the [fsgp](/projects/fsgp) neuroevolution agenda — recent work has been on tier-0 tick-loop cleanup, packed-game scheduling so each evolved agent plays a multi-opponent round per Hall-of-Fame sample, and a `GameProgressCallback` that streams per-tick state to a W&B dashboard.
