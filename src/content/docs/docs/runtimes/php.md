---
title: PHP
description: List and switch PHP versions, and link the current project to Envloom using a specific PHP version.
---

PHP is usually the runtime you switch most often in local web development. Envloom supports versioned PHP runtimes and both global/current and per-site usage patterns.

## List available PHP versions

```bash
loom list php
```

Use this to see installed/available PHP versions before switching.

## Switch current PHP version

```bash
loom php 8.5
```

This updates the current PHP selection for your local Envloom-managed environment.

## Link the current project with a PHP version

```bash
loom link 8.5
```

`loom link <php-version>` links the project in your current directory to Envloom so it can be served by Nginx using the specified PHP version.

Run it from the project directory you want Envloom to serve.

## Unlink the current project

```bash
loom unlink
```

Use this to remove the current directory project link from Envloom.

## Per-site PHP vs current PHP

If a site has a PHP override configured, that site should use the site-specific version even when your machine "current" PHP is different.

Example:

- Current PHP: `8.5`
- Site `legacy-app.test`: PHP `8.2` (override)

This lets you keep a modern default while still supporting older projects locally.

## Troubleshooting PHP startup or execution

- Check the Envloom logs viewer for PHP-related logs.
- Confirm Nginx is routing requests to the expected site.
- Confirm the site's configured PHP version matches the project requirements.
- If runtime selection looks wrong, run `loom current` and re-check the active selection.
