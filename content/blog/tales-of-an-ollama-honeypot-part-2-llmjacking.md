---
title: "Tales of an Ollama Honeypot (Part 2): LLMJacking"
description: "Analysis of an observed LLMJacking attack against an exposed Ollama honeypot"
date: 2026-05-11
tags:
  - InTheCyber
  - AI
  - Honeypot
  - Threat Intelligence
externalUrl: "https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-2-llmjacking-08741d5b726c"
---

I built a honeypot that emulates an Ollama server and deployed it on a VPS. A few days later, it appeared on Censys and Shodan. From 20 March 2026 at 03:10:40 UTC to 21 April 2026 at 08:16:47 UTC, the honeypot recorded 6461 events involving Ollama API endpoints, from 324 unique source IP addresses, using 73 unique user agents. I decided to split the analysis into two parts: part one is available [here](https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-1-abuse-patterns-29ba0b000b7f) and it covers the most common abuse patterns that I observed. This part will be about LLMJacking.

[Read the original article](https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-2-llmjacking-08741d5b726c).
