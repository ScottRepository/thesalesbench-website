# The Sales Bench — Project Status & System Documentation

**Document Version:** 6.0.0  
**Last Updated:** October 28, 2026  
**Founder & Managing Principal:** Scott Carpentier  
**Public Repository:** [https://github.com/ScottRepository/thesalesbench-website](https://github.com/ScottRepository/thesalesbench-website)  
**Live Production URL:** [https://scottrepository.github.io/thesalesbench-website/](https://scottrepository.github.io/thesalesbench-website/)  

---

## 1. Project Overview & Tech Stack

### 1.1 Strategic Mission & Positioning
**The Sales Bench** is an **Enterprise Revenue Architecture & Fractional Leadership** firm founded by **Scott Carpentier**. 

The practice operates on a proven two-tier commercial model:
1. **Stage A (Wedge): 4-Week Installation Sprint** — turnkey deployment of autonomous MEDDPICC deal-governance workflows, instant post-call CRM intelligence, and digital deal rooms inside the client's existing perimeter.
2. **Stage B (Retained Acceleration): Fractional Revenue Architect** — 3 to 4 month retained leadership (~10 hours/week dedicated principal advisory) providing hands-on deal forensics, executive stage-gate auditing, and board forecasting predictability.

* **Ideal Customer Profile (ICP):**
  * **Core Sweet Spot:** Enterprise & B2B SaaS ($5M to $50M+ ARR).
  * **Deal Velocity & Size:** $30,000 to $250,000+ Average Contract Value (ACV).
  * **Sales Floor:** Scaling AE Teams (5 to 30+ quota-carrying reps).
  * **Target Executive Personas:** Chief Revenue Officer (CRO), VP of Sales, Founder/CEO, Head of RevOps.
* **Core Economic Value Proposition:**
  * **Stop Late-Stage Deal Slippage:** Eliminate pipeline slippage where 25%–35% of forecast commitments roll over; rescuing a single enterprise deal delivers 3x+ ROI on annual governance fees.
  * **Recover Selling Capacity:** Automate 45–60 minutes of daily administrative CRM drag per rep. Across a 10-AE team, this recovers **40 hours/week**—the equivalent of **1 full-time quota-carrying AE ($120k–$160k annual value)** at zero added headcount.
  * **Zero InfoSec & Procurement Friction (BYOK Model):** "Bring Your Own Key" architecture deploys inside the client's existing CRM perimeter (HubSpot / Salesforce) and AI tenants (OpenAI / Azure / Anthropic). Zero customer PII or raw deal data is stored on third-party servers, bypassing 3–6 month SOC 2 vendor reviews.
  * **Turnkey Dev Team Flexibility:** Clients can deploy agents using The Sales Bench's vetted developer partner bench or activate their internal RevOps/engineering resources.
  * **Continuous Evolution:** Includes 30-day post-launch hypercare and quarterly tune-ups across Year 1 to adapt prompts to changing objection trends and competitor positioning.

---

### 1.2 Technology Stack & UI Architecture (Version 6.0.0)

| Layer | Implementation | Strategic Advantage |
| :--- | :--- | :--- |
| **Hosting & Deployment** | GitHub Pages (`origin/main`) | 99.99% uptime, zero hosting cost, automated SSL, global edge delivery. |
| **Front-End Architecture** | Single-File Self-Contained (`index.html`) | Zero external CSS dependencies, immune to CDN outage, instant page loads, strict CSP compliance. |
| **Brand Identity & Typography** | Dual-Weight Typographical Lockup | Deprecated [SB] monogram icon block. Clean wordmark: `The Sales Bench` (Cinzel/Playfair 700 bold, `#0A192F`) + `REVENUE ARCHITECTED` (Inter uppercase tracking-wide, `#334155`). Minimum 4.5:1+ WCAG AAA contrast ratio on white header and `#071223` footer. |
| **Design System** | Corporate Advisory Luxury Palette | Technical Navy (`#0A192F`), Slate (`#475569`), Off-White (`#F8FAFC`), Crisp White (`#FFFFFF`), with Muted Gold (`#B08D57`) and Cobalt (`#1E40AF`) accents. |
| **Container Viewport Framing** | Global Bounded Container (`.site-container`) | `max-width: 1240px; margin: 0 auto; padding: 0 2rem;` (Lunas Consulting benchmark). |
| **Header Navigation & IA** | Consolidated Practices Dropdown + Methodology + About | Dropdown grouping the 4 core practices (`#practice-inspection`, `#practice-expansion`, `#practice-ai-infra`, `#practice-channel`), direct anchor to Methodology (`#methodology`), About (`#about`), secondary "Run Diagnostic", and primary "Schedule 15-Minute Call" CTA. |
| **Hero & Social Proof Trust Bar** | Integrated Logo Marquee Beneath Hero CTA Group | Relocated SI & Advisory Alliances (Deloitte, EY, KPMG, PwC, SAP) and past enterprise accounts sold to (Sobeys, Circle K, Bell Canada, etc.) directly beneath Hero CTA group as the social proof transition before the metrics bar. |
| **Metrics Bar** | 4-Column Elevation + Benchmark Source | `25%-35% Slippage Prevented`, `40 hrs/wk Recovered (1+ FTE)`, `1 Deal Saved = 3x ROI`, `0 Months InfoSec Delay`, with 2026 Deal Governance Benchmark Index attribution. |
| **Core Practice Matrix & Embedded Submodules** | 4 Core Practices with Embedded Architectures | 1. **Deal Inspection & Validation** (includes embedded Deal Governance & Anti-Fluff Protocol), 2. **De-Risked Market Expansion** (includes Playbook Localization for US/EMEA/LATAM), 3. **Turnkey AI Sales Infrastructure** (includes embedded Zero Data Retention & BYOK Security + 10-logo Stack), 4. **Channel & Ecosystem Architecture** (includes Co-Sell Playbooks & Attribution Modeling). |
| **Commercial Engagement Model** | Two-Tier Funnel: Sprint to Fractional CRO | Stage A: 4-Week Installation Sprint (Discovery, Webhooks & Integrations, Deal Room Pilot, Enablement) &rarr; Stage B: Fractional Revenue Architect (3–4 Month Retained Lifecycle, ~10 hrs/week dedicated principal leadership). |
| **Dynamic Multi-Track Diagnostic Engine** | 4-Track Questionnaire & Dynamic Scoring | Track 1: Deal Inspection & Slippage, Track 2: Market Expansion Feasibility, Track 3: AI Infrastructure & Security, Track 4: Partner & Alliance Velocity. Features real-time calculation banners and custom scorecard generation. |
| **HubSpot API Integration** | Native Fetch API (Zero iframes) | Posts lead contact info + diagnostic track and calculated scorecard metrics directly into HubSpot Forms API v3 endpoint (`portalId: 342958738`, `formId: de5aa2ee-c4fc-4f04-8b6b-563c3bfb9fa3`). |

---

## 2. Completed Milestones & Configurations (Version 6.0.0)

### 2.1 Refactored Brand Header & IA
- **Logo Mark Refactoring:** Removed old `[SB]` monogram block and embedded SVG icon. Replaced with clean dual-weight typographical wordmark:
  - Primary: `The Sales Bench` (Font-weight: 700 / Bold, Cinzel serif, `#0A192F` navy).
  - Tagline: `REVENUE ARCHITECTED` (Font-weight: 500, Inter uppercase tracking-wide, `#334155`).
  - Achieves 15.6:1 contrast ratio against the white header (well exceeding the 4.5:1 WCAG requirement).
- **Navigation IA Consolidation:**
  - Consolidated `/services`, `/alliances`, `/byok-security`, and `/governance-retainer` into an elegant `Practices` dropdown menu linking to `#practice-inspection`, `#practice-expansion`, `#practice-ai-infra`, and `#practice-channel`.
  - Added dedicated navigation links for `Methodology` (`#methodology`) and `About` (`#about`).
  - Streamlined header CTAs: Secondary "Run Diagnostic" (opens diagnostic modal) and Primary "Schedule 15-Minute Call" (smooth-scrolls to scheduler).

### 2.2 Relocated Social Proof & Embedded Modules
- **Hero Trust Bar:** Removed standalone `/alliances` and `/pedigree` sections and integrated the 65s infinite glide logo marquees (SI & Advisory Alliances + Enterprise Client Pedigree) directly into the Hero section beneath the CTA group.
- **Embedded Deal Governance:** Subsumed the Deal Governance & Anti-Fluff Protocol directly beneath Practice 01 (Deal Inspection & Validation) inside `#practices`.
- **Embedded BYOK Security:** Subsumed the 3-column CISO-Ready Architecture (Your Cloud/Your Tenant, BYOK, Zero External Data Training) and 10-logo Core Stack Integrations directly beneath Practice 03 (Turnkey AI Sales Infrastructure).

### 2.3 Refactored Practice Cards
- Renamed Practice 01 to **Deal Inspection & Validation** with contextual CTA: `Run Deal Audit Diagnostic →`.
- Renamed Practice 02 to **De-Risked Market Expansion** with contextual CTA: `Assess Market Readiness →`.
- Renamed Practice 03 to **Turnkey AI Sales Infrastructure** with contextual CTA: `Audit AI Pipeline Readiness →`.
- Renamed Practice 04 to **Channel & Ecosystem Architecture** with contextual CTA: `Evaluate Partner Multiplier →`.
- Added subsumed feature tags to all 4 cards.

### 2.4 Refactored Commercial Engagement Model
- Updated section header to: **4-Week Installation Sprint &rarr; 3-4 Month Fractional Revenue Architecture (~10 hrs/wk)**.
- Detailed Stage A (Wedge): The 4-Week Installation Sprint with updated week tabs (Discovery & MEDDPICC Alignment, Webhooks, Schema & Data Integrations, Deal Room Pilot & Verification Gates, Rollout, Playbooks & Enablement).
- Detailed Stage B (Retained Acceleration): Fractional Revenue Architect (3 to 4 month retained lifecycle, ~10 hours/week dedicated principal leadership, live deal triage, executive stage-gate auditing, board forecasting predictability).

### 2.5 Dynamic 4-Track Diagnostic Engine
- Implemented state machine supporting 4 dynamic tracks:
  - **Track 1: Deal Inspection & Slippage** (Projected annual revenue slippage, Recoverable rep FTE).
  - **Track 2: Market Expansion Feasibility** (GTM Expansion Risk Rating, Recommended Runway).
  - **Track 3: Turnkey AI Sales Infrastructure & Security** (Automated Hours Saved / AE / Week, BYOK Compliance Check).
  - **Track 4: Partner & Alliance Velocity** (Co-Sell Multiplier Potential %, Ecosystem Leverage Score).
- Added modal track selector tabs allowing users to toggle between diagnostic tracks.
- Configured track-specific questionnaires and dynamic calculation banners.
- Enhanced HubSpot Form submission to transmit track ID and calculated outputs alongside lead contact information.

---

## 3. Directory Structure & Verification
```
/home/scottcarpentier/
├── thesalesbench-website/                 # Main Git repository (cloned from GitHub)
│   ├── index.html                         # Production single-file marketing application (v6.0.0)
│   ├── hubspot-submit.js                  # Standalone HubSpot Forms API integration script
│   ├── PROJECT_STATUS.md                  # Comprehensive project documentation (v6.0.0)
│   ├── README.md                          # Repository summary & asset guide
│   ├── assets/
│   │   ├── logo-horizontal.jpg            # Gold-embossed horizontal brand lockup
│   │   ├── logo-stacked.jpg               # Gold-embossed stacked brand emblem
│   │   └── logo.svg                       # Vector brand logo asset
│   └── .git/                              # Git metadata pointing to origin/main
└── push.sh                                # Automated sync & deployment bash script
```
