---
title: "One less hop for the Connect UI"
summary: "Static-asset manifests now come straight from S3 instead of through a versioning service, cutting P99 latency by 300 ms."
date: "2024-06-01"
period: "2021 — 2025"
featured: true
rank: 3
draft: false
tags:
- Latency
- S3
- CloudFront
- Reverse proxies
---

## The problem

Every Amazon Connect UI load fetched an asset manifest that told the browser which versions of the static files to load. That manifest came through a service layer whose only job was to keep track of versions and return them. It was an extra network hop on every load.

## What I did

I helped move manifest retrieval to read directly from the S3 buckets that already hold the static assets, so the versioning service is no longer in the path.

## Result

**P99 latency dropped by 300 ms.**

## Related

I also set up the reverse-proxy stacks that sit in front of the entire Amazon Connect UI.
