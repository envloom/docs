---
title: MariaDB
description: Manage the local database service lifecycle and verify status when debugging local environments.
---


Envloom includes MariaDB as part of the local development stack and focuses on reliable service startup, status visibility, and log access.

## What Envloom manages

- Installed/managed MariaDB runtime version(s) (depending on your setup)
- Service lifecycle through UI/systray quick actions
- Log access in the logs viewer

## Daily workflow

Most developers interact with MariaDB through:

- systray start/stop/reload actions
- project apps connecting to local DB credentials
- logs viewer when startup or connection issues occur

## Troubleshooting basics

If MariaDB does not start:

- Check logs in Envloom first.
- Confirm another local database service is not already using the same port.
- Verify file permissions for the data directory if the logs indicate access failures.

## Related docs

- [Systray](/docs/systray/)
- [Logs & Troubleshooting](/docs/logs-troubleshooting/)

