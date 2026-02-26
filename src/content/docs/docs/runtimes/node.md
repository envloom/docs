---
title: Node.js
description: Manage Node.js versions through Envloom using NVM-backed selection and CLI shortcuts.
---

Envloom manages Node.js versions via NVM and provides convenient CLI commands for selecting the active version.

## List Node versions

```bash
loom list node
```

## Switch Node version

```bash
loom node 22
```

You can typically pass either a full version or a major version:

```bash
loom node 22.14.0
loom node 22
```

Use the major form when you want the latest installed version in that major line.

## Confirm the active selection

```bash
loom current
```

## Notes

- Node version switching is machine-level unless your workflow or shell setup applies additional project-specific behavior.
- If you rely on project-local `.nvmrc`, keep that workflow in mind and verify which tool is currently responsible for the active version in your shell.

