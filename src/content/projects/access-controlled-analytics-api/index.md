---
title: "One access model across three data stores"
summary: "An analytics API that authorizes every request with the caller's own SigV4 credentials, then answers from OpenSearch, a Neptune knowledge graph or a data lake."
date: "2025-09-01"
period: "2025 — 2026"
featured: true
rank: 2
draft: false
tags:
- SigV4
- OpenSearch
- Neptune
- Java
---

## The problem

The analytics API behind Connect Assistant has to return exactly the data each caller is allowed to see: no more, no less. That has to hold whether the caller is a person or an AI agent.

## What I built

I designed and built the API's authorization layer. Every request is authorized with the caller's own SigV4 credentials, and results are scoped to what that caller may access.

I then re-architected the API to serve three very different stores while keeping the same access controls:

- **OpenSearch**
- **Neptune**, a knowledge graph
- **A data lake**

The MCP servers that Connect Assistant uses are built on this API. That's how the agent inherits the same guarantees ([see agent scope reduction](/projects/agent-scope-reduction)).

## Built with

Java, IAM and SigV4, Amazon OpenSearch Service, Amazon Neptune.
