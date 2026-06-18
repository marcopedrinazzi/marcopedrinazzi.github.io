---
title: "TwistScan: detection of malicious domains using dnstwist permutations and urlscan.io analysis"
description: "Introduction to TwistScan, a tool for detecting phishing, typosquatting, and brand impersonation domains using dnstwist and urlscan.io"
date: 2025-05-08
tags:
  - Open Source
  - Threat Intelligence
externalUrl: "https://medium.com/@pedrinazzim/twistscan-detection-of-malicious-domains-using-dnstwist-permutations-and-urlscan-io-analysis-e9a9f4876af0"
---

TwistScan is a Python script that I wrote that combines dnstwist’s domain permutation engine with urlscan.io’s scanning capabilities to detect phishing, typosquatting, and brand impersonation attempts.

Combining dnstwist’s permutation engine with urlscan.io’s dynamic scanning adds significant value to a malicious domain-hunting workflow. Some key advantages include:

    Visual confirmation: Full‑page screenshots are captured for each candidate domain, enabling quick visual assessment of whether a page imitates legitimate branding.
    HTML capture: The exact HTML source served is retained, including hidden elements or obfuscated scripts that may indicate the presence of a phishing kit.
    Resource inventory: All page assets — such as images, scripts, stylesheets, and fonts — are listed, aiding the identification of phishing‑related components.
    DNS & certificate details: Information is provided on the domain’s resolved IP, ASN, and TLS certificate details, facilitating detection of suspicious or recently registered infrastructure.
    Outbound connections: Third‑party hosts contacted by the page (e.g., analytics platforms, CDNs) are enumerated, which can reveal communication with known malicious services.
    Behaviour & Content Analysis: The behavior of the scanned page, together with its content are analysed highlighting potential suspicious behaviours or elements.
    Indicator Creation: Indicators (IPs, Domains, Hashes) for the scanned domain are created, allowing further threat hunting operations.
    Similarity check: urlscan.io provides the structurally similar hits on different domains, IPs and ASNs, so websites which have a similar structure but are hosted on different infrastructure, such as phishing kits can be detected. In addition, the number of hits for the same domain, for the same IP but different domain and for the same ASN but different domain are shown.
    Historical record: Each scan includes a timestamp, supporting timelines that show when a suspicious page appeared, changed, or went offline.
    Community contribution: Each scan enables the generation of threat intelligence.

I created TwistScan because I often found myself using urlscan.io during my investigations and threat hunting sessions — right after running dnstwist. So I thought, “Why not combine the two?” And that’s how TwistScan was born.

[Read the original article](https://medium.com/@pedrinazzim/twistscan-detection-of-malicious-domains-using-dnstwist-permutations-and-urlscan-io-analysis-e9a9f4876af0).
