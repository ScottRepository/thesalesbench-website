# The Sales Bench — Project Status & System Documentation

**Document Version:** 3.0.0  
**Last Updated:** October 27, 2026  
**Founder & Managing Principal:** Scott Carpentier  
**Public Repository:** [https://github.com/ScottRepository/thesalesbench-website](https://github.com/ScottRepository/thesalesbench-website)  
**Live Production URL:** [https://scottrepository.github.io/thesalesbench-website/](https://scottrepository.github.io/thesalesbench-website/)  

---

## 1. Project Overview & Tech Stack

### 1.1 Strategic Mission & Positioning
**The Sales Bench** is an **Enterprise Revenue Architecture & Deal Governance** practice founded by **Scott Carpentier**. 

The firm serves high-growth B2B SaaS companies by installing autonomous MEDDPICC deal-governance workflows, instant post-call CRM intelligence, and collaborative digital deal rooms directly inside the client's existing technology stack.

* **Ideal Customer Profile (ICP):**
  * **Core Sweet Spot:** $5M to $50M+ Annual Recurring Revenue (ARR).
  * **Deal Velocity & Size:** $30,000 to $250,000+ Average Contract Value (ACV).
  * **Sales Floor:** Growing to Enterprise AE Teams (5 to 30+ quota-carrying reps).
  * **Target Executive Personas:** Chief Revenue Officer (CRO), VP of Sales, Founder/CEO, Head of RevOps.
* **Core Economic Value Proposition:**
  * **Stop Late-Stage Deal Slippage:** Eliminate pipeline slippage where 25%–35% of forecast commitments roll over; rescuing a single $50k ACV deal delivers 3x+ ROI on annual governance fees.
  * **Recover Selling Capacity:** Automate 45–60 minutes of daily administrative CRM drag per rep. Across a 10-AE team, this recovers **40 hours/week**—the equivalent of **1 full-time quota-carrying AE ($120k–$160k annual value)** at zero added headcount.
  * **Zero InfoSec & Procurement Friction (BYOK Model):** "Bring Your Own Key" architecture deploys inside the client's existing CRM perimeter (HubSpot / Salesforce) and AI tenants (OpenAI / Azure / Anthropic). Zero customer PII or raw deal data is stored on third-party servers, bypassing 3–6 month SOC 2 vendor reviews.
  * **Turnkey Dev Team Flexibility:** Clients can deploy agents using The Sales Bench's vetted developer partner bench or activate their internal RevOps/engineering resources.
  * **Continuous Evolution:** Includes 30-day post-launch hypercare and quarterly tune-ups across Year 1 to adapt prompts to changing objection trends and competitor positioning.

---

### 1.2 Technology Stack & UI Architecture

| Layer | Implementation | Strategic Advantage |
| :--- | :--- | :--- |
| **Hosting & Deployment** | GitHub Pages (`origin/main`) | 99.99% uptime, zero hosting cost, automated SSL, global edge delivery. |
| **Front-End Architecture** | Single-File Self-Contained (`index.html`) | Zero external CSS dependencies, immune to CDN outage, instant page loads, strict CSP compliance. |
| **Design System** | Executive Charcoal & Gold Luxury System | Technical obsidian (`#0b0f19`), carbon slate (`#111827`), champagne gold (`#e5c07b`), cobalt blue (`#3b82f6`), and emerald accents (`#10b981`). Full-width fluid responsive canvas (`max-width: 1680px`/`1800px`). |
| **Centered Diagnostic Modal** | Viewport Modal (`#diagnostic-drawer`) | Centered modal (`max-width: 680px`, `width: 92%`, backdrop blur) with large executive typography (28px title, 20px question, 17px options) and dynamic real-time leakage calculation. |
| **Header Scheduling Modal** | Pop-Up Hubspot Modal (`#schedule-modal-overlay`) | Dedicated 20-min debrief modal triggered directly from top navigation, embedding HubSpot Meetings/Forms API. |
| **Dual Scrolling Tickers** | Pure CSS Infinite Marquees (`@keyframes scroll`) | Two separate tracks: (1) SI & Advisory Partners (SAP, Deloitte, PwC, EY, KPMG), and (2) 11 Enterprise Accounts Sold To (Sobeys, Circle K, Couche-Tard, Bell, Marathon Oil, Cooper Tire, Finning, Suncor, Questrade, easyfinancial, Pharmascience). |
| **Delivery & Sprint Wiring** | Direct Module Navigation | Delivery cards link directly to corresponding `#sprint-engine` tabs via smooth scrolling and dynamic tab activation (`switchToSprintTab`). |
| **Lead Capture & CRM** | HubSpot Forms API v2 (`portal: 342958738`, `form: de5aa2ee-c4fc-4f04-8b6b-563c3bfb9fa3`) | Enterprise lead routing, automated notification triggers, zero raw email exposure to scrapers. |
| **Deployment Scripting** | Custom Bash CLI (`push.sh`) | Atomic sync from Linux repository to Downloads mirror and GitHub remote. |

---

## 2. Completed Milestones & Configurations (Version 3.0.0)

### 2.1 Hero Section & Value Proposition Refinements
* **Headline Visual Split:** H1 headline broken into two distinct display lines for executive impact:
  * Line 1: `Stop Late-Stage Deal Slippage.`
  * Line 2: `Turn 6-Figure Pipeline Into Predictable Closed-Won Revenue.`
* **Inclusive ICP Messaging:** Broadened target audience framing to:
  * Label: `CORE SWEET SPOT (WITH CUSTOM ENTERPRISE & GROWTH ADAPTATIONS):`
  * Badges: `Primary Stage: $5M–$50M+ ARR` | `Deal Size: $30k–$250k+ ACV` | `Sales Floor: Growing to Enterprise AE Teams`
* **Cleaned Hero Columns:** Removed legacy unverified stage bars.
* **Executive Summary Card:** Right-column 4-layer terminal replaced with high-contrast 3-pillar card:
  1. `01 // Turnkey CRM Agents (4-Week Fixed-Cost Sprint)`
  2. `02 // Peer Cohort Benchmarking`
  3. `03 // Retained Deal Inspection & Tuning`
  * Bottom metrics strip: `+15–20% Win Rate Lift`, `1+ FTE AE Capacity Recovered`, `<5% Forecast Variance`.

### 2.2 Centered Screen Diagnostic Modal (Larger Executive Fonts)
* Replaced the slide-over side drawer with a centered viewport modal dialog (`max-width: 680px`, `width: 92%`, backdrop blur).
* Substantially enlarged typography for readability:
  * Modal title: `1.75rem` (`28px`)
  * Question text: `1.25rem` (`20px`, font-weight 600)
  * Option buttons: `1.05rem` (`17px`) with generous padding (`16px 20px`).
* Dynamic real-time calculation banner updates estimated annual leakage live (e.g., `$180k – $360k`) as questions are answered.
* Sticky floating launcher pill in bottom-right: `⚡ Run 2026 Deal Slippage Diagnostic (2 Min)`.

### 2.3 Dual Scrolling Marquee Tickers
* **Ticker Row 1 (SI & Advisory Alliances):** SAP, Deloitte, PwC, EY, KPMG via Simple-Icons SVGs with hover pause.
* **Ticker Row 2 (Sample Accounts Sold To & Onboarded):** Sobeys, Circle K, Alimentation Couche-Tard, Bell Canada, Marathon Oil, Cooper Tire, Finning, Suncor, Questrade, easyfinancial (goeasy), Pharmascience via Clearbit logos with fallback uppercase badge styling.

### 2.4 Section Reordering & Interactive 4-Pillar Links
* Moved `#sprint-engine` (*"The Standardized Revenue Infrastructure Kit"*) immediately below `#delivery-grid` (and above `#value-ladder`).
* Made all 4 cards in `#delivery-grid` interactive: clicking smoothly scrolls to `#sprint-engine` and activates the corresponding tab (`switchToSprintTab(1..4)`) with an `→ Inspect Module` hover indicator.

### 2.5 Pricing Architecture: Fixed-Cost Sprints vs. Tailored Retainers
* Removed the hardcoded `$2,500 / month` pricing figure.
* Introduced the **Engagement & Commercial Structure** card clarifying:
  1. **4-Week Installation Sprint:** Transparent, fixed-scope investment—never an open-ended hourly billing arrangement.
  2. **Retained Deal Governance & Advisory:** Flexible quarterly retainers aligned to deal volume, team tier, and executive involvement.

### 2.6 BYOK Flexibility & Ongoing Agent Evolution
* Added 2-column callout row covering:
  1. **Turnkey Dev Team Flexibility:** Options to deploy via vetted developer partner bench or internal RevOps/engineering.
  2. **30-Day Post-Launch Hypercare & Quarterly Tuning:** Ongoing prompt iteration adapting to competitive shifts.

### 2.7 Practice Areas & Executive Biography
* **Practice Area 03:** Updated to **North American, European & Global Market Entry** covering UK/EMEA expansion.
* **Founder Bio:** Updated Scott Carpentier's leadership credentials:
  * Winshuttle / Precisely (PE-backed): Scaled business from $9M to $60M ARR.
  * BlackLine (Nasdaq: BL): Scaled company from $150M to $750M ARR; scaled regional ARR 12x from $2.5M to $30M.
  * Saïd Business School, University of Oxford: Artificial Intelligence Programme Certification.
  * Credentials Badges: Oxford Artificial Intelligence, $150M→$750M Scale, PE & Public SaaS, 12x Regional ARR, Enterprise GTM.

### 2.8 Top Nav & Scheduling Modal
* Added secondary header CTA: `Schedule a 20-Min Debrief`.
* Clicking opens `#schedule-modal-overlay` with embedded HubSpot scheduling form (`portal: 342958738`, `form: de5aa2ee-c4fc-4f04-8b6b-563c3bfb9fa3`).

---

## 3. Current State of the Codebase

### 3.1 Local Directory Structure
```
/home/scottcarpentier/
├── thesalesbench-website/                 # Main Git repository (cloned from GitHub)
│   ├── index.html                         # Production single-file marketing application (v3.0.0)
│   ├── PROJECT_STATUS.md                  # Comprehensive project documentation (v3.0.0)
│   ├── README.md                          # Repository summary & asset guide
│   └── .git/                              # Git metadata pointing to origin/main
├── Downloads/
│   ├── The_Sales_Bench_Website.html       # Mirrored copy for local offline browser inspection
│   └── PROJECT_STATUS.md                  # Mirrored status documentation
└── push.sh                                # Automated sync & deployment bash script
```

---

## 4. Immediate Next Steps & Deployment

1. **Deploy to GitHub Pages:**
   Run the deployment script in your ChromeOS Linux terminal:
   ```bash
   bash ~/push.sh
   ```
2. **Verify Live Deployment:**
   Open [https://scottrepository.github.io/thesalesbench-website/](https://scottrepository.github.io/thesalesbench-website/) to review:
   - Visual split in H1 and inclusive ICP bar
   - Centered diagnostic modal & header debrief scheduling modal
   - Dual scrolling partner and customer tickers
   - Reordered 4-week sprint engine and 4-box delivery click navigation
   - Updated Oxford AI bio and commercial structure
