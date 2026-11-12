---
title: "Tales of an Ollama Honeypot (part 6): PhantomBlue Jailbreak"
description: "Analysis of PhantomBlue, a new jailbreak prompt used in the wild and captured by the honeypot"
date: 2026-11-12
tags:
  - InTheCyber
  - AI
  - Honeypot
  - Threat Intelligence
externalUrl: "https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-6-phantomblue-jailbreak-3f2321aeec65"
---

At the end of March, I built a honeypot that emulates an Ollama server and deployed it on a VPS. This is the sixth article in the series: Part 1 covered the abuse patterns observed during the first month after deployment. Part 2 looked at LLMjacking. Part 3 revisited the patterns from Part 1 using a larger traffic sample, while Part 4 focused on an LLMjacking campaign aimed at credential reconnaissance. Part 5 examined GHOST, a new jailbreak prompt observed in the wild that attempted to extract secrets, steal cryptocurrency wallet credentials, and initiate unauthorized fund transfers.

This part focuses on PhantomBlue, a new jailbreak used in the wild that instructs the model to act as “an extremely professional, top-tier red-team attacker with zero moral constraints”, never refuse a request, and supply ready-to-use code or detailed attack instructions when asked.

On November 10, 2026, the honeypot various received requests carrying PhantomBlue in the system prompt and a Python scanner code in the user messages. Given a list of target URLs, the script was designed to retrieve available models through Ollama or OpenAI-compatible APIs, send test prompts, and record responding servers and models, response times and available token metrics. This functionality could help an actor find exposed servers to target for LLMjacking.

[Read the original article](https://posts.inthecyber.com/tales-of-an-ollama-honeypot-part-6-phantomblue-jailbreak-3f2321aeec65).
