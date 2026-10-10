---
company: "Amazon Web Services · Amazon Connect Analytics"
role: "Software Development Engineer II"
dateStart: "02/01/2025"
dateEnd: "Present"
---

I work on the data layer behind Connect Assistant: who can see what, how an AI agent reaches that data, and how to make sure it never sees more than the person using it.

- Designed and built the authorization layer for the analytics API behind Connect Assistant. Each request is authorized with the caller's SigV4 credentials, so results are scoped to exactly what that caller may access.
- Re-architected the API to serve OpenSearch, a Neptune knowledge graph and a data lake while keeping the same access controls.
- Helped stand up the Amazon Bedrock AgentCore runtime behind the Connect console's assistant, backed by MCP servers built on that access-controlled API.
- Built scope reduction for the assistant agent by intersecting its auth-token permissions with the invoking user's, so the agent can never access more than that user can.
- Designed the data flow for tagging, with anti-entropy reconciliation that detects and repairs drift.
