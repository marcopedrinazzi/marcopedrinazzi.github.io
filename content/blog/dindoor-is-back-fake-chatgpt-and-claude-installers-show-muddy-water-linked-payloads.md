---
title: "DinDoor Is Back: Fake ChatGPT and Claude Installers Show MuddyWater-Linked Payloads"
description: "Analysis of the DinDoor Backdoor delivered via fake ChatGPT and Claude installers"
date: 2026-06-19
tags:
  - Threat Research
  - AI
  - InTheCyber
  - Threat Intelligence
  - Malware
externalUrl: "https://posts.inthecyber.com/dindoor-is-back-fake-chatgpt-and-claude-installers-show-muddywater-linked-payloads-b3cd8d9e1827"
---
The DinDoor campaign reported by [Malwarebytes](https://www.malwarebytes.com/blog/threat-intel/2026/05/fake-software-on-github-and-sourceforge-distribute-deno-rat) is still active. The same compromised YouTube channel is still pushing fake ChatGPT, Claude, and AutoTune lures, now redirecting users to a new GitHub profile hosting malicious repositories.

The new samples closely match the previously reported tradecraft: GitHub-hosted MSI installers, manual execution instructions, PowerShell launchers, Deno installation through Scoop or WinGet, and remote JavaScript execution with broad permissions.

Sandbox analysis confirmed several DinDoor overlaps, including user-level Run key persistence, retrieval of additional JavaScript stages, host profiling, and task-based execution. In the Claude sample, the stealer module was also functional and exfiltrated three files from the sandbox.

The retrieved final-stage payloads were associated with MuddyWater on VirusTotal. This is notable given Broadcom/Symantec’s recent reporting linking DinDoor activity to Seedworm, also tracked as MuddyWater, but the VirusTotal association alone is not enough for definitive attribution.

[Read the original article](https://posts.inthecyber.com/dindoor-is-back-fake-chatgpt-and-claude-installers-show-muddywater-linked-payloads-b3cd8d9e1827).
