---
title: "Tales of an Ollama Honeypot (Part 4): LLMjacking for SSH Credential Recon"
description: "Analysis of LLMjacking used for SSH credential reconnaissance against an exposed Ollama honeypot"
date: 2026-07-06
tags:
  - InTheCyber
  - AI
  - Honeypot
  - Threat Intelligence
externalUrl: "https://posts.inthecyber.com/tales-of-an-ollama-honeypot-llmjacking-for-ssh-credential-recon-part-4-43970d6636e2"
---

At the end of March, I built a honeypot that emulates an Ollama server and deployed it on a VPS. This is the fourth article in the series: Part 1 and Part 2 covered March-April activity, while Part 3 covered April-May.

This part focuses on one activity cluster from 193.31.31.234, which started at the end of June and was still active at the time of writing, on July 6, 2026.

Based on the prompt content sent by 193.31.31.234, this activity is consistent with LLMjacking used for credential reconnaissance. The actor first tested password-wordlist generation from server fingerprints, then moved into SSH-specific prompts that turned the same data into organization-specific username and password candidates.

[Read the original article](https://posts.inthecyber.com/tales-of-an-ollama-honeypot-llmjacking-for-ssh-credential-recon-part-4-43970d6636e2).
