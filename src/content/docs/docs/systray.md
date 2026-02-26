---
title: Systray
description: Use Envloom's systray menu for quick local stack operations and site shortcuts.
---


The systray is the fastest way to perform common local stack actions without reopening the full application window.

## Typical quick actions

Depending on your configuration, the systray can expose:

- start services
- stop services
- reload services
- runtime switching shortcuts
- site links (open `http://` or `https://` local URLs)

## Recommended usage

- Use the systray for quick reloads after vhost/site changes.
- Use the full UI for deeper configuration changes.
- Use `loom` for repeatable terminal-based workflows.

## If the systray icon is missing

- Confirm Envloom is running.
- Check `startMinimized` / `startWithWindows` behavior in Settings.
- Restart Envloom and review logs if the app starts but the systray integration fails.

