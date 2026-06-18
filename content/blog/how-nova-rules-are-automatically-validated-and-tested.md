---
title: "How Nova Rules Are Automatically Validated and Tested"
description: "Automated validation and testing of Nova rules through a GitHub Actions pipeline"
date: 2026-03-04
tags:
  - AI
  - Detection Engineering
  - Open Source
externalUrl: "https://blog.securitybreak.io/introducing-the-nova-rules-validation-and-testing-pipeline-54e5a4f2ecfa"
---
Nova is an open-source prompt pattern matching framework that combines keyword detection, semantic similarity, and LLM-based evaluation to analyze and detect malicious or suspicious prompts.

The official Nova rules collection is available at the nova-rules GitHub repository.

As Nova adoption grows, automated validation becomes necessary to ensure rule quality, consistency, and reliable detections across community contributions.

Inspired by validation practices used in SigmaHQ, I developed a suite of scripts to validate and test Nova rules. Designed for both CI/CD integration and local development, these tools ensure that every rule in the public collection adheres to the Nova quality standards.

[Read the original article](https://blog.securitybreak.io/introducing-the-nova-rules-validation-and-testing-pipeline-54e5a4f2ecfa).
