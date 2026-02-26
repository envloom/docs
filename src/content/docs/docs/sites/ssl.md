---
title: SSL & Local CA
description: Enable local HTTPS safely with a local certificate authority and Envloom-managed site certificates.
---


Envloom can enable HTTPS for local sites by managing a local certificate authority (CA) and issuing local certificates for your site domains.

## What happens when SSL is enabled

For a site like `app.test`, Envloom typically:

- ensures a local certificate exists for the domain
- configures Nginx to serve HTTPS
- updates site/vhost configuration as needed

## CLI toggle

```bash
loom ssl on
loom ssl off
```

Use this for fast testing or when a project temporarily needs HTTP-only behavior.

## Trusting the local CA

Browsers only trust local HTTPS certificates when the local CA is trusted by your system/browser trust store.

If you see certificate warnings:

- confirm the local CA trust step completed successfully during first launch
- confirm the site domain matches the certificate domain
- regenerate/reapply the local site certificate if needed

## Permissions note

CA trust and certificate installation steps may require elevated permissions depending on system policy. This is expected for local HTTPS tooling.

## Security note

The local CA is intended for development use on your machine. Do not reuse local development certificates for production deployments.

