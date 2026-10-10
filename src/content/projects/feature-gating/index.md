---
title: "Feature gating for Amazon Connect"
summary: "A centralized feature-gating service with HTTP and Coral RPC APIs, deployed on its own so teams stopped waiting on a shared pipeline."
date: "2023-01-01"
period: "2021 — 2025"
draft: false
tags:
- Distributed systems
- Coral RPC
- CI/CD
- Feature flags
---

## The problem

Several Amazon Connect teams needed to turn features on and off safely. Their gates lived in a shared pipeline, so a change for one team had to wait for everyone else's deployments.

## What I built

A centralized feature-gating service with two ways in:

- **HTTP** for frontend callers
- **Coral RPC** for backend services

The service deploys on its own schedule. That removed the shared-pipeline bottleneck for every team that moved to it.
