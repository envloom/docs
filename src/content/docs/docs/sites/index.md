---
title: Sites Overview
description: Create and manage local sites with vhosts, hosts sync, SSL, and per-site runtime behavior.
---


Sites are where Envloom connects runtime management to real projects.

A site usually includes:

- a `.test` local domain (for example `app.test`)
- a project path / web root
- SSL on/off
- Nginx vhost configuration
- optional per-site PHP version override

## Common site workflow

1. Create or import a site in Envloom.
2. Set the local domain and project path.
3. Enable hosts synchronization.
4. Enable SSL if you want HTTPS locally.
5. Set a per-site PHP version only if the project needs it.

## Site management topics

- [Linking & Shims](/docs/sites/linking/)
- [SSL & Local CA](/docs/sites/ssl/)
- [Per-Site PHP](/docs/sites/per-site-php/)
