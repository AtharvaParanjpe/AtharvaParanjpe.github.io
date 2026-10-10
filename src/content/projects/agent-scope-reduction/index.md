---
title: "An AI agent that can never outrank its user"
summary: "Scope reduction for the Connect Assistant agent: its permissions are intersected with the invoking user's, so it only ever gets the overlap."
date: "2026-03-01"
period: "2025 — 2026"
featured: true
rank: 1
draft: false
tags:
- Bedrock AgentCore
- MCP
- IAM
- Access control
---

<figure class="not-prose my-8 flex flex-col items-center gap-3">
  <svg viewBox="0 0 320 180" class="w-full max-w-sm" role="img" aria-label="The agent's effective scope is the overlap between the agent's permissions and the user's permissions">
    <circle cx="125" cy="85" r="70" class="fill-[#1F6FD6]/10 stroke-[#1F6FD6] dark:fill-[#7EB0FF]/15 dark:stroke-[#7EB0FF]" stroke-width="1.5"/>
    <circle cx="195" cy="85" r="70" class="fill-black/5 stroke-black/40 dark:fill-white/10 dark:stroke-white/50" stroke-width="1.5"/>
    <text x="88" y="90" text-anchor="middle" class="fill-current text-[12px]">agent</text>
    <text x="232" y="90" text-anchor="middle" class="fill-current text-[12px]">user</text>
    <text x="160" y="82" text-anchor="middle" class="fill-current font-bold text-[12px]">effective</text>
    <text x="160" y="98" text-anchor="middle" class="fill-current font-bold text-[12px]">scope</text>
    <text x="160" y="174" text-anchor="middle" class="fill-current text-[12px] opacity-75">agent ∩ user</text>
  </svg>
</figure>

## The problem

Connect Assistant is an AI agent inside the Amazon Connect console. It answers questions by calling tools that read contact center analytics.

An agent that serves everyone in a contact center needs broad permissions of its own. Without a check, any one person could ask it for data they aren't allowed to see. The agent would become a way around the access rules.

## What I built

An integration that intersects the agent's auth-token permissions with the permissions of the person invoking it, before any tool call runs. The agent then works with the overlap and nothing more.

Underneath, the analytics API enforces that reduced scope with SigV4, exactly as it does for a human caller. So the agent gets no special path to the data.

## Why it matters

Agents acting on someone's behalf are only safe when they can't do more than that someone. This makes "the assistant can see it" and "you can see it" mean the same thing.

## Built with

Amazon Bedrock AgentCore, MCP servers, IAM and SigV4, Java.
