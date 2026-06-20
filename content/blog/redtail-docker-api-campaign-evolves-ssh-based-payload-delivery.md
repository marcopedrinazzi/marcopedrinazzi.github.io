---
title: "RedTail Docker API Campaign Evolves: SSH-Based Payload Delivery"
description: "Analysis of the evolution of the RedTail Docker API campaign targeting Docker Remote API"
date: 2026-06-19
tags:
  - Honeypot
  - Beelzebub
  - Threat Research
  - Malware
externalUrl: "https://beelzebub.ai/blog/redtail-docker-api-campaign-evolves/"
---

In November 2025, [research](https://beelzebub.ai/blog/redtail-cryptominer-first-evidence-of-docker-api-targeting/) by Mario Candela at Beelzebub Labs reported what appeared to be the first documented public evidence of RedTail targeting exposed Docker APIs on port 2375. A Beelzebub honeypot capture from June 2026 provides evidence that the campaign has continued to evolve. The command executed inside the container now includes an OpenSSH private key and SSH configuration, uses SCP as the primary retrieval method, and falls back to HTTPS. The capture also shows payload changes, including two closely related Bash variants with updated downloader logic and additional filename-generation fallbacks, while retaining the docker.selfrep argument and the miner deployment behavior observed in November. These changes show that the actors behind RedTail remain active and continue to update their delivery techniques and payload tooling.

[Read the original article on Beelzebub's blog](https://beelzebub.ai/blog/redtail-docker-api-campaign-evolves/).
