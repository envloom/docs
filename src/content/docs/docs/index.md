---
title: Overview
description: What Envloom is, what it manages locally, and how the product is structured.
---

Envloom is a local development stack manager focused on keeping your machine-level stack predictable while letting projects differ where needed.

It combines runtime management, local web server setup, site configuration, SSL, and operational tools (systray + logs + CLI) in one workflow.

## What Envloom manages

- Versioned runtimes: PHP and Node.js (via NVM)
- Local stack services: MariaDB and Nginx
- Runtime "current" selection plus local shims in `bin`
- Per-site configuration (for example, a different PHP version for one project)
- Local SSL certificates, local CA trust, and Nginx vhosts
- Hosts file synchronization for `.test` local domains (for example `app.test`)
- Systray quick actions for service control and runtime switching
- Logs viewer for runtime/PHP/Nginx/MariaDB logs
- CLI access through `loom`

## Why it exists

Local development setups usually fail in the same places:

- version drift between projects
- fragile manual vhost + hosts changes
- SSL friction for `.test` local domains
- slow debugging when services fail to start
- too many tools for simple daily tasks

Envloom aims to reduce that glue work while keeping the system understandable.

## Platform availability

Envloom is available on Windows today.

The product and docs are written in a platform-friendly way on purpose so future platform support can fit naturally without rewriting the mental model.

## Core workflow

1. Install Envloom and complete the first launch setup (local CA, hosts/vhost permissions as needed).
2. Choose default runtime versions for your machine.
3. Add/link local sites and enable local SSL when needed.
4. Use the systray or `loom` CLI for quick operations.
5. Use the logs viewer when a runtime or service behaves unexpectedly.

## Next steps

- Read [Install](/docs/getting-started/install/)
- Continue to [First Launch](/docs/getting-started/first-launch/)
- Review the [`loom` CLI](/docs/cli/)
