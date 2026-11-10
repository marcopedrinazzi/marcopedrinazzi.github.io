---
title: "Tales of an Ollama Honeypot (Part 2): LLMJacking"
description: "Analysis of an observed LLMJacking attack against an exposed Ollama honeypot"
date: 2026-05-11
tags:
  - InTheCyber
  - AI
  - Honeypot
  - Threat Intelligence
externalUrl: "https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-5-ghost-jailbreak-aims-to-steal-secrets-and-drain-crypto-26d5253f3b56"
---

At the end of March, I built a honeypot that emulates an Ollama server and deployed it on a VPS. This is the fifth article in the series: Part 1 covered the abuse patterns observed during the first month after deployment. Part 2 looked at LLMjacking. Part 3 revisited the patterns from Part 1 using a larger traffic sample, while Part 4 focused on an LLMjacking campaign aimed at credential reconnaissance.

This part focuses on GHOST, a new jailbreak prompt used in the wild and captured by the honeypot. Requests from five source IP addresses used GHOST to demand secrets, wallet credentials and the transfer of cryptocurrency funds. The prompts named three operators: LO, BabidiGhost and Ghost.

[Read the original article](https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-5-ghost-jailbreak-aims-to-steal-secrets-and-drain-crypto-26d5253f3b56).
