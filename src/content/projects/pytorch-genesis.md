---
title: pytorch-genesis
description: "An earlier framework (2023) that built neural networks by evolving them — combining biological-style mutation with conventional gradient training. Codebase behind my first Q1 journal paper."
language: Python
tags: [pytorch-lightning, evolutionary-deep-learning, paper-code]
url: "https://github.com/fredericosantos/pytorch-genesis"
order: 13
---

Designing a neural network is one part architecture choice (how many layers, how wide, what activations) and one part weight training (gradient descent on labelled data). The first part is usually done by hand or by neural architecture search; the second is automatic but only *after* the first is decided. What if both came out of one process — let evolution decide the shape, let gradient descent train the weights, alternate between them?

That's what pytorch-genesis does. Each candidate is a PyTorch Lightning model. The outer loop mutates the architecture (adds layers, widens blocks, swaps activations); the inner loop trains weights via standard backpropagation; fitness is a held-out validation score after a few epochs. A two-time-scale optimiser — slow on the structure, fast on the weights.

Codebase behind the 2023 *Applied Soft Computing* paper on **box mutation** — a way of mutating networks block-by-block rather than weight-by-weight, which keeps each candidate trainable for the gradient phase. The paper was the first Q1 journal publication of the PhD ([DOI](https://doi.org/10.1016/j.asoc.2023.110767)).

The framework hasn't been actively developed since 2023, but the ideas — block-level mutation, two-time-scale training, modular architecture search — carry directly into my current GPU-native framework, which runs them orders of magnitude faster on a GPU. Kept here for historical reference and as the paper artifact.
