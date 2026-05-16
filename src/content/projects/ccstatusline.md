---
title: ccstatusline
description: "A configurable status bar for Claude Code (an AI coding tool that lives in the terminal) — shows current model, git branch, token usage, and live API cost as you work."
language: TypeScript
tags: [claude-code, cli, typescript, npm]
url: "https://github.com/fredericosantos/ccstatusline"
order: 11
---

Claude Code is a coding assistant that runs inside a terminal — it can edit files, run commands, search the web. The terminal itself, though, doesn't show any of the context you need to use it well: which model is active, what branch the project is on, how many tokens you've spent, what the running session has cost so far.

This is a configurable status bar that fills that gap. You compose it from widgets — model name, git branch, token counter, project-level cost tracker, time since last message, anything else you want — and it renders below the terminal as Claude Code runs, updating in real time as the agent works.

**Evidence:**

- Published to **npm** with weekly download counts visible on the package page
- **Mentioned in [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)**
- Cost-tracking math: charges 2× for `[1m]` extended-context messages, deduplicates by `(messageId, requestId)` so the displayed cost matches the Anthropic invoice
- Falls back to a TUI when stdin has no piped input; ships a prebuilt `dist/` so GitHub installs work without Bun on the machine

The dedup detail is the part most cost-tracking tools get wrong. Claude Code can replay the same logical message under different request IDs during retries; naïve sum-of-events double-counts those. The fix is keying on both IDs and treating anything matching as a single billable event — small change, the difference between a status line you trust and one you stop looking at.
