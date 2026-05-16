---
title: gecco-25-gp-pso
description: "Code from a 2025 paper of mine. Lets an old optimisation algorithm discover its own movement rules through evolution, instead of using the textbook formula written in 1995."
language: Jupyter Notebook
tags: [paper-code, genetic-programming, pso]
url: "https://github.com/fredericosantos/gecco-25-gp-pso"
order: 12
---

Particle Swarm Optimisation is a classic algorithm from 1995. You scatter a swarm of points across the search space; each point updates its position using a fixed formula that mixes its own best-found location, the swarm's collective best, and some inertia. The formula has been hand-tweaked for thirty years — variants for momentum, adaptive coefficients, special cases. What none of those variants do is let the *form of the formula itself* evolve.

The paper asks the obvious next question: what if we replace the hand-written velocity update with a velocity expression *evolved* by genetic programming? Start with random arithmetic expressions over the natural inputs (current velocity, distance to personal best, distance to swarm best). Score each candidate by how well a swarm using that expression converges on standard benchmark functions. Mutate winners, repeat. Out comes a velocity rule discovered, not designed.

Published at **GECCO 2025** ([DOI](https://doi.org/10.1145/3712255.3734324)) — F.J.J.B. Santos, A. De Lorenzo, L. Manzoni, G. Pietropolli. The repository bundles the experimental framework, the evolved velocity expressions, and the analysis notebook. Kept here as the canonical reference for readers of the paper.
