---
title: "Tales of an Ollama Honeypot (Part 7): LLMjacking to Fuel Autonomous Offensive Operations with Xalgorix"
description: "Attempted LLMjacking to Fuel Autonomous Offensive Operations with Xalgorix"
date: 2026-11-19
tags:
  - InTheCyber
  - AI
  - Honeypot
  - Threat Intelligence
externalUrl: "https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-7-llmjacking-to-fuel-autonomous-offensive-operations-with-190dee95379d"
---

In March, I built a honeypot that emulates an Ollama server and deployed it on a VPS. This is the seventh article in the series: Part 1 covered the abuse patterns observed during the first month after deployment. Part 2 looked at LLMjacking. Part 3 revisited the patterns from Part 1 using a larger traffic sample, while Part 4 focused on an LLMjacking campaign aimed at credential reconnaissance. Part 5 examined the GHOST jailbreak, and Part 6 covered the PhantomBlue Jailbreak.

This part examines an LLMjacking attempt involving Xalgorix, an open-source autonomous offensive framework that uses AI agents to automate penetration testing. The requests sent to the honeypot contained instructions to find and exploit vulnerabilities, naming a public domain name in two sequences and a public IP address in the third.

Google Threat Intelligence Group (GTIG) observed attackers using ARTEX, CAIRN, and PentAGI in the wild and experimenting with CyberStrikeAI and HexStrike AI.

Zenity Labs documented attempts to use exposed Ollama and LiteLLM services to support Strix and HexStrike AI.

To the best of my knowledge, this is the first public report of attempted in-the-wild use of Xalgorix through LLMjacking of an exposed inference endpoint, with explicit instructions to target a public website.

[Read the original article](https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-7-llmjacking-to-fuel-autonomous-offensive-operations-with-190dee95379d).
