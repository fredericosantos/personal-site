---
title: baserow-cli
description: "Command-line tool for Baserow (an open-source Airtable alternative). Every command is generated automatically from Baserow's API spec, so the CLI stays in sync as Baserow evolves."
language: Python
tags: [cli, python, openapi]
url: "https://github.com/fredericosantos/baserow-cli"
order: 7
---

Baserow is a no-code database with a browser UI — think Airtable, but open-source and self-hostable. Most teams that adopt it eventually need programmatic access alongside the UI: bulk imports, migrations between environments, scheduled scripts that read or update rows. The platform exposes a full REST API for that, with an OpenAPI 3.0 specification (currently v1.31.1).

Two ways to wrap an API in a CLI. You can hand-write the client in Python, which means every Baserow release that adds or modifies an endpoint becomes a maintenance task. Or you can generate the client from the spec, which means the CLI is always *exactly* what the platform documents — no version skew, no drift, no surface area you have to keep mentally in sync.

I went with generated. The trade-off is that the CLI's shape is determined by Baserow's API design rather than what I'd have built by hand; the upside is that maintenance is `regenerate, ship`. Same architectural choice in [n8n-cli](/projects/n8n-cli).

Built because the Baserow instance running in my homelab needed programmatic access for migrations between dev and prod, and writing yet another bespoke HTTP wrapper for each new tool gets old.
