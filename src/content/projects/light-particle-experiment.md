---
title: light-particle-experiment
description: "An attempt to rediscover the laws of light by evolution. Simulated particles wander; an algorithm searches for force rules that make them behave like real light through a slit."
language: Jupyter Notebook
tags: [physics, genetic-programming, fsgp]
private: true
order: 4
---

Young's double-slit experiment is the classic demonstration that light is a wave: shine a beam through two narrow slits and you get an interference pattern on the screen behind. The mathematics that predicts the pattern — wave optics — has been settled for two centuries. But what if you tried to *rediscover* it, by setting up a particle simulation and searching for the force law that would make the particles behave like the wave equation would?

That's the experiment. Photons are simulated as classical particles bouncing through space. The force law that governs how they move is left as a free parameter — a symbolic expression discovered by genetic programming, scored by how well the resulting particle simulation reproduces the wave-optics ground truth across different slit geometries. If evolution finds something that maps cleanly onto known wave equations, that's interesting. If it finds something messy that fits anyway, that's also interesting.

**Current status:**

- Genetic-programming search migrated off DEAP onto [fsgp](/projects/fsgp) — fitness and particle terminals all live on-device now, with custom fused mutation kernels
- Bayesian hyperparameter optimisation via Optuna; MLflow for run tracking
- Multi-geometry fitness: the same evolved expression has to work for edge diffraction, single-slit, and double-slit simultaneously
- Batched geometry evaluation (Phase 6) — ~3× wall-clock speedup by stacking the three geometries into one tensor pass
- A Streamlit page streams per-generation fitness and expression size live

**Open questions:** does the search converge on something that maps onto known wave equations? Onto a different parametrisation that's equally predictive? Onto something that doesn't generalise past two slits?

Exploratory by design. The interesting question is whether evolutionary search recovers known physics or finds a different formulation that works equally — and the [fsgp](/projects/fsgp) speedup is what makes investigating that question practical at scale.
