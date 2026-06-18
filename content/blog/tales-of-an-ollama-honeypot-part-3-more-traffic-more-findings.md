---
title: "Tales of an Ollama Honeypot (Part 3): More Traffic, More Findings"
description: "Analysis of additional abuse patterns against an exposed Ollama honeypot"
date: 2026-06-08
tags:
  - InTheCyber
  - AI
  - Honeypot
  - Threat Intelligence
externalUrl: "https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-3-more-traffic-more-findings-cb965e85fc8d"
---

At the end of March, I built a honeypot that emulates an Ollama server and deployed it on a VPS. This is the third article in the series: Part 1 and Part 2 covered the March-April activity, while this post focuses on a new time window covering late April through late May.

From 21 April 2026 at 08:16:47 UTC to 21 May 2026 at 10:12:19 UTC, the honeypot recorded 47195 events involving Ollama API endpoints, from 389 unique source IP addresses, using 111 distinct user agents.

In this time window, I observed several new kinds of activity: CVE-2026-7482 (Bleeding Llama) probing, text-based CAPTCHA and anti-bot question solving, Modelfile command-execution attempts, identity mutation and synthetic record generation, Stable Diffusion prompt engineering abuse, DeepSeek-V4-Pro pull attempts, Cline VS Code extension traffic, and tool-calling probes. I also saw the return of the behaviors described in Part 1 and 2: enumeration followed by liveness testing, runtime-state and keep-alive testing, SSRF attempts via /api/pull, and LLMjacking.

[Read the original article](https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-3-more-traffic-more-findings-cb965e85fc8d).
