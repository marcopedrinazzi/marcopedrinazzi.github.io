---
title: "DARTS: Open Source AI Application Testing Framework"
description: "Introduction to DARTS, an open-source framework for AI application testing"
date: 2025-09-22
tags:
  - AI
  - Open Source
externalUrl: "https://medium.com/@pedrinazzim/darts-open-source-ai-application-testing-framework-65079fc69526"
---
A few weeks ago, I stumbled across this GitHub repo and thought, “Wow, this is fantastic!”. The repo contains a series of YAML files; each AITG-APP-XX.yaml defines a tidy, repeatable scenario mapped to a specific OWASP AITG-APP control, complete with an “LLM judge” system prompt that acts as a consistent evaluator for whether a model’s behavior violates that control. What really amazed me, though, is the modularity of the YAML format: everything is cleanly scoped and easy to tweak, so you can customize prompts, controls, and evaluation criteria to fit almost any need. The format makes it simple to drop these tests into red-team pipelines, plug them into model-eval frameworks, or even run them manually for step-by-step analysis. And it got me thinking: why not open-source a lightweight script that pulls these payloads, runs them against any target model, and emits clear, auditable results to enable rapid, reproducible LLM security evaluations?

I named my script DARTS. I saw each payload as a dart; the script throws them at the board (the LLM), records pass or fail for every throw, then lays out a clear table of results and renders a quick chart to spotlight the attack surface, so you immediately see where you’re exposed and what to fix first.

[Read the original article](https://medium.com/@pedrinazzim/darts-open-source-ai-application-testing-framework-65079fc69526).
