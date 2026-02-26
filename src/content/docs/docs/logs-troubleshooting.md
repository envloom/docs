---
title: Logs & Troubleshooting
description: Diagnose local runtime, web server, database, SSL, and configuration issues using Envloom logs.
---


When a local stack breaks, the fastest path is usually:

1. confirm current runtime state
2. check the right logs
3. verify site/domain/SSL configuration

## Start with state

Run:

```bash
loom current
```

This confirms what Envloom thinks is currently active and helps avoid debugging the wrong runtime version.

## Logs viewer coverage

Envloom exposes logs for:

- runtime processes
- PHP
- Nginx
- MariaDB

Use the logs viewer first before editing multiple settings at once.

## Common issues

### `loom` command not found

- Restart the terminal session.
- Confirm Envloom CLI/shims are installed and available in PATH.
- If the app was just installed or updated, relaunch Envloom.

### Local domain does not resolve

- Confirm hosts sync is enabled for the site.
- Confirm the hosts file contains the expected local domain entry.
- Check whether another tool reverted the hosts file.

### HTTPS certificate warning in browser

- Confirm local CA trust completed successfully.
- Confirm the certificate matches the exact local domain.
- Reapply SSL for the site if the certificate was removed or changed.

### Nginx starts, but app returns errors

- Check PHP logs and site PHP version configuration.
- Confirm the site root/path points to the correct project directory.
- Reload services after site config changes.

### MariaDB does not start

- Check MariaDB logs for port conflicts or permission errors.
- Confirm no other database server is occupying the same port.

## Troubleshooting workflow that scales

Use this order to avoid chasing noise:

1. `loom current`
2. Relevant service logs (Nginx/PHP/MariaDB)
3. Site config (domain, path, SSL, per-site PHP)
4. Reload services
5. Retry request/command

If a change improves the issue, capture it in your team onboarding docs so others avoid the same failure mode.
