---
title: n8n-cli
description: "Command-line tool for n8n (an open-source workflow automation platform — Zapier you can self-host). Generated from n8n's API spec, same pattern as baserow-cli."
language: Python
tags: [cli, python, openapi, n8n]
url: "https://github.com/fredericosantos/n8n-cli"
order: 8
---

n8n is an automation platform: you draw pipelines like *"when this email arrives, transform it, call this API, write to this database, post to Slack"*. Self-hostable, open-source, similar in concept to Zapier or Make. The browser editor is great for designing flows; for everything else — listing workflows, managing credentials, kicking off runs, migrating between dev and prod instances — the terminal is faster.

Same architectural choice as [baserow-cli](/projects/baserow-cli): rather than hand-writing the client, the CLI is generated from n8n's OpenAPI spec. Every endpoint the platform documents becomes a typed CLI command with structured output, and when n8n ships a new version, the spec updates and the generator runs.

The trade-off is the same in both directions. The CLI inherits whatever shape n8n's API has — sometimes that's verbose where I'd have been terser — but maintenance is essentially free, and the surface area is always exactly what the platform supports.

Lives in the same family as [baserow-cli](/projects/baserow-cli), and exists for the same reason: programmatic access to a self-hosted n8n instance in my homelab. Requires Python 3.13+.
