---
title: vibekeys_app
description: "Lets a Bluetooth keyboard I own act as the head of an AI coding agent running on a remote machine — the agent's responses appear on the keyboard's small e-ink display."
language: Rust
tags: [rust, ble, embedded, claude-code]
url: "https://github.com/fredericosantos/vibekeys_app"
order: 6
---

I have a tiny Bluetooth keyboard with an e-ink screen on its top edge. The vendor ships a CLI for sending text and keymap configurations to it — the official use case. The unofficial one, which is what I actually wanted, is to use that screen as a glanceable display for an AI coding agent running on a different machine.

The setup: an SSH-remote box (a homelab server, a sandbox VM, anything reachable) runs Claude Code. My laptop holds the Bluetooth pairing to the keyboard. When the agent produces a final response, asks for confirmation, or hits an error, the message is forwarded over SSH to the laptop and then over Bluetooth to the keyboard's display. I glance at the keyboard instead of switching to the terminal window.

Small quality-of-life win that turned out to matter once I had it — the cost of context-switching back to a terminal pane is small individually and large in aggregate. Distributed as a Claude Code plugin so installation is one command, and the same SSH-bridge pattern would work for any other agent that writes to stdout.
