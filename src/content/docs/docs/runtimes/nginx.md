---
title: Nginx
description: Use Envloom-managed Nginx for local vhosts, hosts sync, SSL termination, and site routing.
---


Envloom uses Nginx as the local web server layer for site routing, vhosts, and HTTPS termination in local environments.

## What Envloom handles

- Nginx service lifecycle
- Local vhost generation/sync
- HTTPS support with local certificates
- Routing `.test` local domains to the correct project/site

## Typical Nginx-related tasks

- Add or update a local site
- Reload services from the systray after config changes
- Review Nginx logs when requests fail or return unexpected errors

## When to reload

If you change site configuration (domain, root path, SSL, PHP version integration), a service reload may be required.

Use the systray quick action or the main UI controls to reload Nginx and related services.

## Troubleshooting

- If `https://your-site.test` fails, verify SSL + local CA setup and hosts sync.
- If a `.test` domain resolves incorrectly, confirm the hosts file entry is present and up to date.
- If Nginx starts but the app fails, check PHP/runtime logs in addition to Nginx logs.
