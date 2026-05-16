---
title: homelab-infra
description: "The configuration that runs my mini-datacenter at home — a dozen self-hosted services, all reachable through one private network, automatically reproducible if anything breaks."
language: Python
tags: [homelab, tailscale, caddy, infra]
private: true
order: 5
---

I track ML experiments in MLflow. Specifically, in a self-hosted MLflow instance running on a server in my apartment, behind a private network, reachable from any device I own and from nobody else's. That sentence is true for about a dozen other services too — ClickHouse for ad-hoc queries, n8n for automation, Ollama for local language models, Overleaf for LaTeX, Zotero for references, Open-WebUI as the chat front-end. Each one started as a SaaS subscription that got annoying enough to move in-house.

This repo is the configuration that makes the whole stack run as one system. Each service is defined in `docker-compose.yaml`; a single Caddy reverse proxy fronts everything with TLS issued through Tailscale, so the lab lives on a private network that follows me between devices but is invisible to the public internet. If a server dies, the recovery is `git clone`, `docker compose up`.

The piece I'm most proud of is the Wake-on-LAN gateway. Visit a URL like `watch.mydomain` from any device, anywhere; the gateway wakes the relevant server with a magic packet, polls until it's responsive, then `302`-redirects you to it. Servers spend most of their time asleep — which is what they should be doing — but they're always one click away from awake. The gateway only handles the initial bounce; once the server is alive, traffic flows direct.

Most of these decisions are individually small. The compounding payoff is that I trust the lab: nothing in there is a hand-configured snowflake, every service is one `git pull` away from the last known-good state, and the network access pattern is the same whether I'm at my desk or on the other side of the world.
