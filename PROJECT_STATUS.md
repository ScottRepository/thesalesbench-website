# The Sales Bench — Project Status & System Documentation

**Document Version:** 2.0.0  
**Last Updated:** October 27, 2026  
**Founder & Managing Principal:** Scott Carpentier  
**Public Repository:** [https://github.com/ScottRepository/thesalesbench-website](https://github.com/ScottRepository/thesalesbench-website)  
**Live Production URL:** [https://scottrepository.github.io/thesalesbench-website/](https://scottrepository.github.io/thesalesbench-website/)  

---

## 1. Project Overview & Tech Stack

### 1.1 Strategic Mission & Positioning
**The Sales Bench** is an **Enterprise Revenue Architecture & Deal Governance** practice. 

The firm serves high-growth B2B SaaS companies by installing autonomous MEDDPICC deal-governance workflows, instant post-call CRM intelligence, and collaborative digital deal rooms directly inside the client's existing technology stack.

* **Ideal Customer Profile (ICP):**
  * **Revenue Scale:** $5M to $30M Annual Recurring Revenue (ARR).
  * **Average Contract Value (ACV):** $30,000 to $150,000+ (complex enterprise deals).
  * **Sales Team Size:** 5 to 20 quota-carrying Account Executives (AEs).
  * **Target Executive Personas:** Chief Revenue Officer (CRO), VP of Sales, Founder/CEO, Head of RevOps.
* **Core Economic Value Proposition:**
  * **Stop Deal Slippage:** Eliminate late-stage pipeline slippage where 25%–35% of forecast commitments roll over; rescuing a single $50k ACV deal delivers 3x+ ROI on annual governance fees.
  * **Recover Selling Capacity:** Automate 45–60 minutes of daily administrative CRM drag per rep. Across a 10-AE team, this recovers **40 hours/week**—the equivalent of **1 full-time quota-carrying AE ($120k–$160k annual value)** at zero added headcount.
  * **Zero InfoSec & Procurement Friction (BYOK Model):** "Bring Your Own Key" architecture deploys inside the client's existing CRM perimeter (HubSpot / Salesforce) and AI tenants (OpenAI / Azure / Anthropic). Zero customer PII or raw deal data is stored on third-party servers, bypassing 3–6 month SOC 2 vendor reviews.
  * **Operational Division of Labor:** *"We own the brain; you own the plumbing."* The Sales Bench delivers battle-tested governance logic, MEDDPICC audit engines, and executive inspection protocols, while the client's RevOps team maintains core CRM schema.

---

### 1.2 Technology Stack & UI Architecture

| Layer | Implementation | Strategic Advantage |
| :--- | :--- | :--- |
| **Hosting & Deployment** | GitHub Pages (`origin/main`) | 99.99% uptime, zero hosting cost, automated SSL, global edge delivery. |
| **Front-End Architecture** | Single-File Self-Contained (`index.html`) | Zero external CSS dependencies, immune to CDN outage, instant page loads, strict CSP compliance. |
| **Design System** | Executive Rich Charcoal & Gold Theme | Technical obsidian (`#0b0f19`), carbon slate (`#111827`), champagne gold (`#e5c07b`), cobalt blue (`#3b82f6`), and emerald accents (`#10b981`). Clean uppercase tracking replacing developer slashes. |
| **Interactive Copilot Drawer** | Slide-Over Copilot Drawer (`#diagnostic-drawer`) | Offloads long inline diagnostic into a 480px slide-in panel with dynamic real-time leakage calculation ($X to $Y) and sticky bottom-right launcher pill. |
| **Enterprise Pedigree Ticker** | Pure CSS Infinite Marquee (`@keyframes scroll`) | Dual-track infinite logo ticker (SAP, Microsoft, Oracle, Deloitte, PwC, EY, KPMG, ServiceNow) with edge gradient masks and hover pause. |
| **Core Stack Integrations** | Monochromatic Vector Grid | High-res SVG vector representations of Salesforce, HubSpot, OpenAI, Anthropic, Google Cloud, and AWS. |
| **Lead Capture & CRM** | HubSpot Forms API v2 (`portal: 342958738`, `form: de5aa2ee-c4fc-4f04-8b6b-563c3bfb9fa3`) | Enterprise lead routing, automated notification triggers, zero raw email exposure to scrapers. |
| **Deployment Scripting** | Custom Bash CLI (`push.sh`) | Atomic sync from Linux workspace to Downloads mirror and GitHub remote. |

---

## 2. Completed Milestones & Configurations

### 2.1 Refactored Topline Messaging & Outcome-First Hero
* **Eyebrow:** `ENTERPRISE REVENUE ARCHITECTURE & DEAL GOVERNANCE · B2B SAAS ($5M–$30M ARR)`
* **H1 Headline:** `Stop Late-Stage Deal Slippage. Turn 6-Figure Pipeline Into Predictable Closed-Won Revenue.`
* **Sub-headline:** *"We install autonomous MEDDPICC deal gating, instant post-call follow-ups, and collaborative buyer rooms directly into your CRM. Compress sales cycles by 25% and de-risk new market expansion without adding headcount."*
* **Primary Action:** `Run 2026 Pipeline Leakage Diagnostic →` (Opens Slide-Over Drawer).
* **Secondary Action:** `Explore the 4-Week Installation Sprint` (Smooth scrolls to `#sprint`).
* **Console UI:** High-contrast 4-layer technical stack architecture.

### 2.2 The 4-Box Delivery Grid
Positioned prominently under the Infinite Ticker, titled **HOW WE DELIVER PREDICTABLE REVENUE · INSTALLED IN YOUR STACK**:
1. **Delivery Pillar 01 · Objective Deal Gating:** MEDDPICC transcript scanner that prevents "happy ears" stage advancement by verifying direct buyer quotes, metrics, and paper process evidence.
2. **Delivery Pillar 02 · Capacity Recovery:** Post-Call CRM & Follow-Up Drafter that auto-populates CRM properties and drafts executive recaps, recovering 45–60 min/rep/day (1+ FTE per 10 AEs).
3. **Delivery Pillar 03 · Procurement Defense:** Digital Deal Rooms & Mutual Action Plans (MAPs) giving internal champions the ROI models and security packs needed to close behind closed doors.
4. **Delivery Pillar 04 · Expansion & Leadership De-risking:** Cross-border territory entry and VP of Sales onboarding accelerator. Cuts rep ramp time from 6 months to 60 days and provides an objective deal radar in the first 90 days.

### 2.3 Slide-Over Copilot Drawer & Real-Time Leakage Calculator
* **Floating Launcher Pill:** Sticky bottom-right floating badge: `⚡ Run 2026 Deal Slippage Diagnostic (2 Min)`.
* **Slide-Over Panel (`#diagnostic-drawer`):** 480px width on desktop (100% on mobile), backdrop blur overlay, smooth cubic-bezier slide transition, ESC key & close button support.
* **5-Step Interactive Sequence:**
  1. Month-3 Forecast Slippage (<15%, 15%–25%, 25%–35%, >35%)
  2. Average Contract Value (ACV) Tier ($30k–$50k, $50k–$100k, $100k–$150k+)
  3. Quota-Carrying AE Team Size (5–9 AEs, 10–15 AEs, 16–25+ AEs)
  4. Economic Buyer Direct Access (>75%, 50%–75%, <50%)
  5. Stage-Gate Enforcement (Rep intuition, Static manual checkboxes, Automated AI stage-gate)
* **Real-Time Dynamic Leakage Calculation:** Dynamically updates estimated annual revenue leakage (e.g. `$180,000 – $360,000`) and recoverable capacity (e.g. `1+ FTE (~$140k/yr)`) live as choices are made.
* **Integrated Lead Capture:** Embeds the HubSpot Forms embed directly on step completion to claim the 1-Page Benchmark Scorecard.

### 2.4 Enterprise Pedigree Ticker & Core Integrations
* **Infinite Logo Ticker:** Continuous marquee featuring SAP, Microsoft, Oracle, Deloitte, PwC, EY, KPMG, and ServiceNow. Features edge gradient mask fade and pause-on-hover.
* **Core Stack Integrations Grid:** Dedicated visual grid in BYOK section featuring clean vector logos for Salesforce, HubSpot, OpenAI, Anthropic, Google Cloud, and AWS.

### 2.6 Full-Width Responsive Canvas & Margin Expansion
* **Expanded Container Architecture:** Upgraded `.container` from a boxed 1240px cap to a modern luxury enterprise canvas with `max-width: 1680px` (`max-width: 1800px` for header & footer) and fluid padding (`clamp(24px, 4vw, 64px)`).
* **Eliminated Desktop Dead Space:** Removed artificial column limits (e.g. `max-width: 640px` on hero text), allowing the 2-column hero grid, 4-box delivery cards, and architecture consoles to naturally fill wide screens, laptops, and ultra-wide desktop monitors without awkward empty side margins.
* **Proportional Typography & Scaling:** Upgraded H1 headline scaling (`clamp(2.4rem, 4.3vw, 4.2rem)`) and section titles (`clamp(2rem, 3.4vw, 3.1rem)`) to balance seamlessly across wide displays.

---

## 3. Current State of the Codebase

### 3.1 Local Directory Structure
```
/home/scottcarpentier/
├── thesalesbench-website/                 # Main Git repository (cloned from GitHub)
│   ├── index.html                         # Production single-file marketing application
│   ├── PROJECT_STATUS.md                  # Comprehensive project documentation (v2.0.0)
│   ├── README.md                          # Repository summary & asset guide
│   └── .git/                              # Git metadata pointing to origin/main
├── Downloads/
│   ├── The_Sales_Bench_Website.html       # Mirrored copy for local offline browser inspection
│   └── PROJECT_STATUS.md                  # Mirrored status documentation
└── push.sh                                # Automated sync & deployment bash script
```

---

## 4. Immediate Next Steps & Roadmap

1. **Deploy to Production:** Run `bash ~/push.sh` in the terminal to push the latest refactor and status file to GitHub Pages.
2. **Visual Verification:** Check [https://scottrepository.github.io/thesalesbench-website/](https://scottrepository.github.io/thesalesbench-website/) to test the infinite ticker, the 4-box grid, the compact 4-week sprint switcher, and the slide-over diagnostic drawer.
3. **Outreach Execution:** Begin 15-leader closed-door outreach campaign using the 2026 Deal Governance Index angle.
