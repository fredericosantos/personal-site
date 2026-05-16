---
title: memory-supply-chain
description: "An interactive map of who makes the memory chips in your computer — the foundries, the assembly plants, the customers — built from publicly available trade data."
language: TypeScript
tags: [visualization, react-flow, deck-gl]
url: "https://github.com/fredericosantos/memory-supply-chain"
order: 10
---

The memory-chip industry is opaque to outsiders, and it shouldn't be. The DRAM in your laptop, the high-bandwidth memory inside every AI accelerator, the flash in every phone — all of it comes from a small set of foundries, gets packaged by a different small set of assembly partners, and ships under long-term contracts that are reported only in fragmented public filings. Building an intuition for who depends on whom takes reading dozens of 10-Ks and earnings calls.

This is an interactive visualisation of those flows. Companies are nodes, contracts and material flows are edges, and the layout is *hierarchical* — TensorBoard-style. You can zoom from "global memory supply" into "who buys HBM from SK Hynix this quarter" without losing the parent context. Drill down, drill back out, the parent view is always one click away.

Hierarchical specifically because flat node-edge graphs lose all useful structure past about 50 nodes, and the memory industry has hundreds of relevant entities once you count subsidiaries and joint ventures. The TensorBoard treatment lets you scope your attention without scoping out the broader picture.

Built with React Flow for the graph layout, deck.gl for the heavier data overlays, Supabase as the backing store. A side project for thinking about supply-curve dynamics from publicly available information alone.
