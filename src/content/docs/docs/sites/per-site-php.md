---
title: Per-Site PHP
description: Override the default/current PHP version for individual local sites.
---

# Per-Site PHP

Per-site PHP configuration lets a project use a different PHP version than your machine's current/default runtime selection.

## When to use it

Use a per-site PHP override when:

- a legacy project requires an older PHP version
- you are migrating a project and need to compare behavior across versions
- your machine default should stay modern, but one app cannot upgrade yet

## Example setup

- Current PHP (`loom current`): `8.5`
- Site `client-legacy.test`: PHP `8.2`

In this case:

- CLI commands may still use your current PHP unless you switch/link it
- Web requests routed through Envloom/Nginx for `client-legacy.test` should use the site's PHP override

## Verify behavior

- Check the site in a browser (for example via `phpinfo()` in a local-only test route)
- Check Envloom runtime/site details in the UI
- Use the logs viewer if requests fail after changing the site PHP version

## Related

- [PHP Runtime](/docs/runtimes/php/)
- [Linking & Shims](/docs/sites/linking/)

