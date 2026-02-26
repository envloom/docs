---
title: Runtimes Overview
description: Manage PHP and Node versions, plus local MariaDB and Nginx services, from one stack workflow.
---



Envloom manages PHP/Node runtime versions and a machine-level "current" selection so your local shell and services stay consistent.

## Stack components

- PHP (version-managed)
- Node.js (version-managed via NVM)
- MariaDB (local service)
- Nginx (local web server service)

## Current selection and local shims

Envloom maintains a current runtime selection and uses local shims in `bin` so command resolution stays stable.

This makes common workflows faster:

- switch PHP version without manually rewriting PATH
- select a Node version for local work
- keep local services (MariaDB/Nginx) aligned with the active stack

## Useful CLI checks

```bash
loom current
loom list php
loom list node
```

## When to use global vs per-site selection

Use the global/current selection for your default machine workflow.

Use per-site overrides when a project requires a different PHP version than your machine default. (See [Per-Site PHP](/docs/sites/per-site-php/).)

## Runtime pages

- [PHP](/docs/runtimes/php/)
- [Node.js](/docs/runtimes/node/)
- [MariaDB](/docs/runtimes/mariadb/)
- [Nginx](/docs/runtimes/nginx/)
