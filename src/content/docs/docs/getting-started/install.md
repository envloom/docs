---
title: Install
description: Install Envloom and prepare your machine for local runtime and site management.
---

# Install

This page covers the initial installation flow and what to expect on a fresh machine.

## Download

Download the latest release from GitHub Releases:

- [Envloom Releases](https://github.com/envloom/envloom/releases)

## Current availability

Envloom is available on Windows today.

If you are reading this from another platform, the concepts and workflows in the docs still apply, but the installer and system integration steps may differ in the future.

## Recommended prerequisites

Before installing Envloom:

- Use a Windows account with permission to install desktop apps.
- Close tools that may actively modify your hosts file or local web server configuration.
- If you already run another local stack manager, decide whether you want to temporarily stop it during setup to avoid port or service conflicts.

## Install steps

1. Open [Envloom Releases](https://github.com/envloom/envloom/releases) and download the latest Windows installer package.
2. Run the installer and complete the setup wizard.
3. Launch Envloom after installation (or from the Start menu if you skipped auto-launch).
4. On first run, Envloom downloads a baseline toolchain: latest PHP, Composer, NVM, and Nginx.
5. If Windows shows a UAC prompt (for example, because Envloom is installed in a location that requires elevated permissions), approve it to continue.
6. Continue to [First Launch](/docs/getting-started/first-launch/) for post-install verification and runtime/site setup.

## What is available after installation

After the initial installation + first run bootstrap, Envloom is ready with:

- latest PHP (initial baseline version)
- Composer
- NVM
- Nginx

From there, the user can install additional versions as needed:

- more PHP versions
- MariaDB (MySQL-compatible local database service)
- the Node.js version(s) required for each project (through NVM / Envloom)

## What Envloom may configure

Depending on your setup and enabled features, Envloom may need to:

- manage local runtime directories
- manage `bin` shims used by the CLI/runtime switching workflow
- update the local hosts file for `.test` domains (for example `app.test`)
- generate/update Nginx vhosts
- install or trust a local certificate authority for HTTPS

These actions are normal for local development tooling and are local-machine only.

Envloom does not show a confirmation prompt on every startup. The main exception is Windows UAC when the app needs elevated permissions (for example, due to install location or a system-level action).

## Verify the installation

After launching Envloom:

- Open the main UI and confirm the application loads without missing runtime errors.
- Open the systray icon and verify quick actions are visible.
- Open a terminal and test the CLI shim (if installed/available in your PATH):

```bash
loom current
```

If the command is not found, open the Envloom UI and check the CLI/shim setup (or restart your terminal after installation).

## Next

- Continue with [First Launch](/docs/getting-started/first-launch/)
