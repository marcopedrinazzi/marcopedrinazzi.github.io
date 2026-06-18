---
title: "Exposed Fortinet Fortigate firewall interface leads to LockBit Ransomware (CVE-2024-55591)"
description: "Analysis of a LockBit 3.0 ransomware incident following the exploitation of CVE-2024-55591 on a FortiGate firewall"
date: 2025-02-01
tags:
  - InTheCyber
  - Incident Response
externalUrl: "https://posts.inthecyber.com/exposed-fortinet-fortigate-firewall-interface-leads-to-lockbit-ransomware-cve-2024-55591-8f4b7a244041"
---
InTheCyber got engaged in an incident response activity by an enterprise victim of LockBit3.0. The victim had no monitoring solution in place. Most of the logs on critical systems to analyze got encrypted by the threat actor and weak log retention policies did not allow us to reconstruct some dynamics of the attack.
Phase 1: Exploitation of CVE-2024–55591 (Days 1–6)
  -  Day 1: The attacker (TA) exploited CVE-2024–55591 to bypass authentication and gain super-admin access to a Fortinet Fortigate Firewall.
  -  Days 2–4: The TA created multiple admin accounts with VPN access, configured firewall rules for unrestricted access, then deleted and recreated them to evade detection.
  -  Day 5: The TA tested VPN access for 2 minutes.
  -  Day 6: The TA erased traces of previous actions.

Phase 2: A new threat actor? (Days 7–8)
  - Day 7: A new attacker (likely an access broker’s buyer) used an existing VPN-enabled account to infiltrate the network without brute force. Due to weak segmentation, the TA could move laterally across systems. Used RDP to access domain controllers, backup servers (Veeam), and key machines, and then, the TA extracted stored credentials from Firefox browser data. Gained cloud access and modified MFA settings for persistence.
  - Day 8: The TA initiated their actions on Day 8 by dumping operating system credentials through access to the NTDS.dit file, a critical Active Directory database often targeted for credential theft. They proceeded to disable the Endpoint Detection and Response (EDR) system’s anti-ransomware features and manipulated alert settings to evade detection. Following this, they compromised multiple Office365 accounts, escalated privileges to Global Administrator and then unauthorized access to SharePoint files containing stored passwords. Finally, the attacker destroyed backups stored on local NAS devices and cloud platforms via Azure App and then they encrypted virtual machines, causing significant operational impact and data loss.

[Read the original article](https://posts.inthecyber.com/exposed-fortinet-fortigate-firewall-interface-leads-to-lockbit-ransomware-cve-2024-55591-8f4b7a244041).
