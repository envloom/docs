---
title: Settings
description: Configure startup, updates, and app behavior for your local development workflow.
---

Envloom includes core behavior toggles that affect startup, services, and update handling.

## Available settings

### `autoStartServices`

Starts configured local services automatically when Envloom launches.

Use this if you want your local stack ready immediately after login or app launch.

### `autoUpdate`

Allows Envloom to check/apply updates automatically (depending on implementation and release channel behavior).

Recommended for most developer machines unless you need strict version pinning.

### `startWithWindows`

Launches Envloom when Windows starts.

Useful when combined with `autoStartServices`, but be mindful of machine startup time and local resource usage.

### `startMinimized`

Starts Envloom minimized (usually to systray) instead of opening the full window.

Useful for background local stack usage.

## Recommended profiles

### Daily dev workstation

- `startWithWindows`: on
- `startMinimized`: on
- `autoStartServices`: on
- `autoUpdate`: on (or team policy dependent)

### Controlled/test environment

- `startWithWindows`: off
- `startMinimized`: off
- `autoStartServices`: off
- `autoUpdate`: off (if you are testing a fixed version)

## Notes

Teams that need consistent onboarding should document their recommended Envloom settings profile alongside project setup instructions.
