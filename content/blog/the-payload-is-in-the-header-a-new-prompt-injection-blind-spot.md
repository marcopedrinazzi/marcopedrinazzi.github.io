---
title: "The Payload Is in the Header: A New Prompt Injection Blind Spot"
description: "A New Prompt Injection Blind Spot"
date: 2026-07-16
tags:
  - AI
  - Threat Research
externalUrl: "https://medium.com/malware-buddy/the-payload-is-in-the-header-a427a1182c5a"
---
Modern AI systems are rapidly deployed everywhere and more people now rely on AI agents to browse the internet and search for information. However, this opens a new window for attackers.

When an AI agent browses a webpage, it does not only scrape the visible content. It also makes an HTTP request. The resulting HTTP response contains headers. An HTTP header is metadata sent with a web request or response. Its goal is to carry instructions and context about how the request or response should be processed.

The body contains the main content, while the headers explain how that content should be handled. Headers are separate from the visible webpage, but they may still be collected, processed, or interpreted by an AI system.

And guess what? Attackers are already exploiting this in the wild.

Malicious HTTP headers are now being used to deliver indirect prompt injections or simply to trick your agent.

Indirect prompt injection, often abbreviated as XPIA, IPI, or IDPI and classified as OWASP LLM01 and MITRE ATLAS T0051.001, is an attack in which malicious instructions are hidden in external content that an AI system may read and follow. Previous research identified indirect prompt injection attempts embedded within webpage content.

In this blog we are going to extend those findings by documenting in-the-wild indirect prompt injection attacks placed in HTTP response headers. It demonstrates that indirect prompt injection can be delivered through parts of an HTTP response that sit outside the webpage body itself.

[Read the original article](https://medium.com/malware-buddy/the-payload-is-in-the-header-a427a1182c5a).
