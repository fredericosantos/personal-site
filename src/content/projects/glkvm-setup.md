---
title: glkvm-setup
description: "Visit a URL, your home server wakes up, you get redirected to it. The piece making that work is a tiny always-on network gadget acting as a wake-up gate."
language: Python
tags: [networking, homelab, wol, tls]
url: "https://github.com/fredericosantos/glkvm-setup"
order: 9
---

Home servers are wasteful to leave running 24/7 if you only use them occasionally. But waking them on demand from *outside* the house is awkward — you either have to be on the same local network, or have something always-on inside the network that can listen for the wake-up request and send the magic packet on your behalf.

The setup turns a tiny always-on device — a GL.iNet GLKVM, a small networking box already on my desk for managing other machines — into that wake-up gate. You visit a URL like `watch.mydomain.com` from any device, anywhere; the device receives the HTTPS request, sends a wake-on-LAN signal to the right server, and `302`-redirects you to the server's own URL once it's responsive.

The design choice that matters: **the gateway redirects, it doesn't proxy.** Once the server is awake, the client connects directly to it — the GLKVM is out of the path. That keeps the gateway small (no streaming, no buffering, no TLS termination for the long-running connection) and makes the failure modes obvious. The gateway only ever handles short HTTP requests; the actual session is direct client-to-server.

The setup also gives the GLKVM's own web UI valid TLS certificates via Caddy and Cloudflare's DNS challenge — the device ships with a self-signed certificate that breaks most browsers. The `S98wol-gateway` and `S99caddy` init scripts re-establish themselves on every boot, so the whole thing survives firmware updates without manual intervention.
