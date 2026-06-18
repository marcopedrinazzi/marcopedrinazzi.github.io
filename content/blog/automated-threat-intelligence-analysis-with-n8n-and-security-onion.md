---
title: "Automated Threat Intelligence Analysis with n8n and Security Onion"
description: "Automation of threat intelligence analysis in Security Onion using n8n"
date: 2024-08-01
tags:
  - InTheCyber
  - Threat Intelligence
  - Open Source
externalUrl: "https://posts.inthecyber.com/automated-threat-intelligence-analysis-with-n8n-and-security-onion-a157a7c85ca7"
---
Security automation involves using technology to handle security tasks previously done by hand. This speeds up how quickly security operations can respond to threats. By automating these processes from start to finish, it eases the workload for analysts, eliminates repetitive tasks, and shortens the time it takes to resolve issues [2]. Inspired by the work of Wes Lambert [3], we integrated Security Onion, the leader open-source SOC platform, with several workflows made with n8n but in our use case, we decided to focus exclusively on threat intelligence. We aim to automate, or at least speed up, threat intelligence analysis related to alerts.

The aim of each workflow is to do a reputation analysis of recurring and fundamental elements in SOC operations:
- IPs
- Hashes
- Domains
- CVEs

For each element in the list above, we created a workflow and we integrated into the Action menu of the Alerts tab in Security Onion.

[Read the original article](https://posts.inthecyber.com/automated-threat-intelligence-analysis-with-n8n-and-security-onion-a157a7c85ca7).
