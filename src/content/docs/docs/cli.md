---
title: CLI (loom)
description: Command-line shortcuts for runtime selection, SSL toggles, and local developer workflows.
---

Envloom provides a CLI entrypoint named `loom` for common local stack tasks.

It is designed to complement the UI, not replace it.

## Command reference (initial)

### Show current runtime selection

```bash
loom current
```

Use this first when something looks wrong. It confirms what Envloom considers "current" on your machine.

### List versions for a runtime

```bash
loom list php
loom list node
```

### Link the current project to Envloom with a PHP version

```bash
loom link 8.5
```

Run this from your project directory. Envloom links that project so it can be served by Nginx using the specified PHP version.

### Unlink the current project

```bash
loom unlink
```

### Toggle local SSL

```bash
loom ssl on
loom ssl off
```

### Switch PHP version

```bash
loom php 8.5
```

### Switch Node.js version

```bash
loom node 22
loom node 22.14.0
```

## Practical examples

### Check environment before running project scripts

```bash
loom current
loom node 22
loom php 8.5
```

### Link the current project with PHP 8.5

```bash
loom link 8.5
loom unlink
```

### Toggle local HTTPS during debugging

```bash
loom ssl off
loom ssl on
```

## CLI troubleshooting

- If `loom` is not recognized, restart your terminal and verify Envloom's CLI/shim installation.
- If a command succeeds but behavior does not change, run `loom current` to confirm the active state.
- If a runtime/service fails after switching, inspect Envloom logs.
