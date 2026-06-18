---
title: "Tales of an Ollama Honeypot (Part 1): Abuse Patterns"
description: "Analysis of abuse patterns observed against an exposed Ollama honeypot"
date: 2026-05-04
tags:
  - InTheCyber
  - AI
  - Honeypot
  - Threat Intelligence
externalUrl: "https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-1-abuse-patterns-29ba0b000b7f"
---

I built a honeypot that emulates an Ollama server and deployed it on a VPS. A few days later, it appeared on Censys and Shodan. Over a little more than 32 days, it recorded 6461 events involving Ollama API endpoints, from 324 unique source IP addresses, using 73 unique user agents.

This blog post covers the period from 2026–03–20 03:10:40 UTC to 2026–04–21 08:16:47 UTC. I decided to split the analysis into two parts: this first part covers the most common patterns I observed, while the second part will be a deep dive into the prompt activity from a single IP that generated almost 4000 events over a little more than a day and was still chatting with the honeypot at the time of writing. I plan to add more parts in the coming weeks if more activity shows up.

[Read the original article](https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-1-abuse-patterns-29ba0b000b7f).
