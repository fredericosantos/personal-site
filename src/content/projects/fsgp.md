---
title: fsgp
description: "Evolves AI models the way biology breeds organisms — random variation, selection, repeat. Built to run on a single GPU, fast enough that the approach actually competes with modern deep learning."
language: Python
tags: [pytorch, genetic-programming, symbolic-regression]
private: true
order: 1
---

There's a branch of AI that doesn't train models by gradient descent — it *evolves* them. Random variations, fitness selection, repeat. The same trick that produced eyes and brains over billions of years, applied to neural networks and mathematical expressions instead of organisms. It produces models a human can read instead of inscrutable black boxes. The catch has always been speed — an evolutionary generation runs orders of magnitude slower than a gradient-descent step, so the approach has been confined to toy problems.

fsgp moves the entire evolutionary loop onto a single GPU. The trick is structural: the whole population — every candidate model — lives as one large tensor, so a generation evaluates as one batched GPU operation instead of millions of independent ones. Custom Triton kernels handle the hot path; the framework slots into PyTorch end-to-end, so the same model that just evolved can immediately be fine-tuned with gradient descent.

**Benchmark:** SRBench 2025, the field's standard regression benchmark suite (11 datasets), at commit `a87bf1e`:

- **2.67× geomean speedup** vs the previous best GPU-native genetic-programming framework, across the 15 runs both frameworks complete
- **100% benchmark coverage (22 of 22 runs)** vs 68% for the prior framework, which runs out of GPU memory on 6 of 11 datasets at population size 50,000
- **Best single win: 4.30×** at 50K population on `650_fri_c0_500_50` — 370K vs 86K evaluations per second

The population-as-tensor design forces a discipline that ends up paying off elsewhere: every operator the framework supports has to vectorise across the whole population at once. That constraint makes some operators harder to express but eliminates the worst case — heterogeneous per-individual evaluation — that traps single-threaded GP frameworks. The framework is faster *because* it's less flexible, which turns out to be the right trade.

This is the engineering at the core of the PhD. Companion projects use it directly: [light-particle-experiment](/projects/light-particle-experiment) migrated its GP backend onto fsgp and got the speedup for free; [planet-wars-rts](/projects/planet-wars-rts) is the agent-evaluation testbed for the same neuroevolution agenda.
