---
title: Linking
description: How Envloom links the current project directory to a local Envloom site and PHP version.
---


Envloom can link the project in your current directory to Envloom so it is served by Nginx with the PHP version you specify.

## Why linking matters

Linking a project from the terminal is a fast way to register an existing codebase with Envloom without creating the site manually first in the UI.

## Common commands

```bash
loom current
loom link 8.5
loom unlink
```

## Example: link the current project with PHP 8.5

From your project directory:

```bash
loom link 8.5
```

When you are done:

```bash
loom unlink
```

## Linking considerations

- `loom link <php-version>` affects the current project directory (site registration/linking), not your machine-wide PHP CLI selection.
- Use `loom php <version>` to change the current PHP version for your local environment.
- A linked site can still be validated in the UI, including domain/SSL details.
