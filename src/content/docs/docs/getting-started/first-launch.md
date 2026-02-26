---
title: First Launch
description: Complete the initial setup safely, verify services, and avoid common local system issues.
---

On first launch, Envloom prepares the local environment and verifies the baseline stack so you can start working quickly.

## First launch checklist

Use this checklist before adding sites:

- Confirm the app UI opens normally.
- Review runtime paths and default versions.
- Confirm required services can start (Nginx, MariaDB, etc. if enabled).
- Confirm hosts file management permissions if you want automatic domain sync.

## Permissions and local system changes

Envloom features like local HTTPS and hosts synchronization may require elevated permissions depending on your environment and system policy.

Common examples:

- Updating the hosts file
- Trusting a local certificate authority
- Managing Windows startup integration (`startWithWindows`)

Envloom does not require a confirmation prompt on each startup. If you see a prompt, it is typically a Windows UAC prompt caused by a privileged action or installation path.

If a step fails, continue reading [Logs & Troubleshooting](/docs/logs-troubleshooting/) before retrying multiple times.

## Verify runtime state

After setup, verify the default/current runtime selection from the CLI:

```bash
loom current
```

Typical output should confirm currently selected versions (for example PHP and Node) and the active local stack services.

## Verify SSL locally (optional)

If you plan to use local HTTPS:

1. Create or link a local site.
2. Enable SSL for the site (UI or CLI).
3. Open the local URL in your browser and confirm it loads over `https://`.

## Verify systray actions

Check that the systray menu provides quick actions such as:

- start / stop / reload services
- runtime switching
- site shortcuts

This is one of the fastest ways to confirm Envloom is fully integrated with your local workflow.

## Next

- Read [Runtimes Overview](/docs/runtimes/)
- Read [Sites Overview](/docs/sites/)
