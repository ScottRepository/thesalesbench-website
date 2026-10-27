# The Sales Bench — Project Status & System Documentation

**Document Version:** 5.0.0  
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
| **Design System** | Corporate Advisory Luxury Palette | Technical Navy (`#0A192F`), Slate (`#475569`), Off-White (`#F8FAFC`), Crisp White (`#FFFFFF`), with Muted Gold (`#B08D57`) and Cobalt (`#1E40AF`) accents. Headings in Playfair Display serif, body in Inter sans-serif. |
| **Header Navigation** | Full-Width Edge-to-Edge Navigation | Unboxed header stretching across 100% viewport width with solid Navy "Schedule a 20-Min Debrief" primary CTA. |
| **Hero Section** | Balanced 2-Column Responsive Layout | Left column with outcome copy and single primary diagnostic CTA; right column featuring high-quality executive stock photography with dark navy overlay and status badge. |
| **Outcomes Bar & Attribution** | 4-Column Elevation + Benchmark Source | 25%–35% Slippage Prevented, 40 hrs/wk Recovered (1+ FTE), 1 Saved Deal = 3x ROI, 0 Months InfoSec Delay, with italicized benchmark attribution. |
| **Service Pillars** | Compact 4-Column Horizontal Grid | 4 concise practices (Deal Forensics, Market Expansion, Agent Infrastructure, Channel Architecture) optimized to reduce vertical scroll. |
| **4-Week Sprint** | Horizontal Tabbed Interface | Single compact card with 4 week-level tabs (Week 1 to Week 4) showing milestone focus, installed logic, and division of labor on click. |
| **Security Section** | Clean 3-Column Architecture | Replaced accordion with 3 clean visual cards: 1. Your Cloud / Your Tenant, 2. Bring Your Own Key (BYOK), and 3. Zero External Data Training. |
| **Logo Tickers** | Pure Graphical Logos (60s Glide) | Infinite CSS marquee running at 60s glide with clean graphical badges (text labels removed). Expanded tech stack to 10 logos including ZoomInfo, Gong, Apollo, Crossbeam. |
| **HubSpot Integration** | Native Fetch API (Zero iframes) | Custom HTML forms posting directly to HubSpot Forms API v3 endpoint (`https://api.hsforms.com/submissions/v3/integration/submit/...`). Zero HubSpot scripts, iframes, cookies, or virality links. |
| **Backend Integration Script** | Standalone Node.js CLI / Microservice (`hubspot-submit.js`) | Standalone server-side integration script using native fetch. |
| **Deployment Scripting** | Custom Bash CLI (`push.sh`) | Atomic sync from Linux repository to Downloads mirror and GitHub Pages remote. |

---

## 2. Completed Milestones & Configurations (Version 5.0.0)

### 2.1 Full-Width Header & Balanced Hero
* Updated `.nav-full-width` to stretch across 100% of the screen with fluid padding (`clamp(20px, 3.5vw, 56px)`).
* Styled `Schedule a 20-Min Debrief` as a solid, high-contrast CTA button.
* Rebalanced the Hero into a 2-column layout:
  * Left: H1 visual split, lead copy, "Who We Serve:" tag bar, and primary diagnostic CTA button.
  * Right: High-quality stock photography asset (`photo-1542744173-8e7e53415bb0`) with dark navy gradient overlay and live enterprise machinery badge.
  * Removed the secondary "Explore Our Services" button to maintain focus on pipeline leakage diagnostic conversion.

### 2.2 Metrics Bar & Attribution
* Elevated horizontal 4-outcome metrics bar:
  1. `25%–35% Slippage Prevented`
  2. `40 hrs/wk Recovered (1+ FTE)`
  3. `1 Saved Deal = 3x ROI`
  4. `0 Months InfoSec Delay`
* Added attribution text below bar:
  *Metrics derived from The 2026 Deal Governance Benchmark Index and internal triage analysis.*

### 2.3 Compact 4-Column Service Grid
* Redesigned the 4 service pillars into a horizontal 4-column grid:
  1. **Deal Forensics & Triage Analysis**
  2. **De-Risked Market Expansion**
  3. **Turnkey AI Agent Infrastructure**
  4. **Channel & Alliance Architecture**
* Condensed copy and bullet points to dramatically minimize vertical page scroll.

### 2.4 Streamlined 4-Week Sprint (Horizontal Tabbed Interface)
* Converted the lengthy multi-column sprint breakdown into a compact single-card layout with 4 horizontal week selector tabs:
  * **Week 01:** Discovery & Rubrics
  * **Week 02:** Webhooks & Schema
  * **Week 03:** Deal Room & Pilot
  * **Week 04:** Rollout & Runbook
* Users view only the active week's milestones, architecture, and division of labor on click.

### 2.5 3-Column Security & Data Retention (No Accordion)
* Replaced the accordion (`+` icon) format with a clean, 3-column layout featuring custom vector icons:
  1. **1. Your Cloud / Your Tenant**
  2. **2. Bring Your Own Key (BYOK)**
  3. **3. Zero External Data Training**
* Expanded Core Stack Integrations to 10 logos: Salesforce, HubSpot, OpenAI, Anthropic, Google Cloud, AWS, **ZoomInfo, Gong, Apollo, and Crossbeam**.

### 2.6 Graphical Logo Tickers (60s Glide)
* Slowed CSS marquee speed to `60s` for an easily readable glide.
* Removed text labels next to logos in the ticker pills (rendering pure graphical logo marks).
* Supported dual tracks: SI/Advisory Alliances (SAP, Deloitte, PwC, EY, KPMG) and Accounts Sold To (Sobeys, Circle K, Couche-Tard, Bell, Marathon Oil, Cooper Tire, Finning, Suncor, Questrade, easyfinancial, Pharmascience).

### 2.7 Custom Forms via HubSpot API (Zero iframes)
* Removed all third-party HubSpot scripts and iframe embeds from the codebase.
* Implemented custom HTML forms styled identically to the site:
  1. **Footer Contact Form:** Direct executive inquiry.
  2. **Schedule Modal Form:** 20-minute debrief request.
  3. **Diagnostic Scorecard Form:** 1-page benchmark delivery.
* Client-side `fetch()` integration submits form payloads directly to HubSpot Forms API v3 (`portalId: 342958738`, `formId: de5aa2ee-c4fc-4f04-8b6b-563c3bfb9fa3`).
* Built backend integration helper: `hubspot-submit.js`.
* Form UI includes instant loading state, validation, and in-place success confirmation.

---

## 3. Current State of the Codebase

### 3.1 Local Directory Structure
```
/home/scottcarpentier/
├── thesalesbench-website/                 # Main Git repository (cloned from GitHub)
│   ├── index.html                         # Production single-file marketing application (v5.0.0)
│   ├── hubspot-submit.js                  # Standalone HubSpot Forms API integration script
│   ├── PROJECT_STATUS.md                  # Comprehensive project documentation (v5.0.0)
│   ├── README.md                          # Repository summary & asset guide
│   └── .git/                              # Git metadata pointing to origin/main
├── Downloads/
│   ├── The_Sales_Bench_Website.html       # Mirrored copy for local offline browser inspection
│   ├── hubspot-submit.js                  # Mirrored HubSpot submission helper
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
   - Full-width edge-to-edge header with solid CTA button
   - Balanced 2-column hero with executive visual asset
   - 4-column metrics bar with italicized benchmark attribution
   - Compact 4-column service pillars
   - Horizontal tabbed 4-week sprint switcher
   - Clean 3-column security architecture (no accordions)
   - 60s graphical logo tickers (pure logos, no text labels)
   - Custom HTML forms posting directly to HubSpot Forms API (zero iframes)
