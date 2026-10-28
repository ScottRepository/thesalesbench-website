# The Sales Bench — Project Status & System Documentation

**Document Version:** 5.5.0  
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

### 1.2 Technology Stack & UI Architecture

| Layer | Implementation | Strategic Advantage |
| :--- | :--- | :--- |
| **Hosting & Deployment** | GitHub Pages (`origin/main`) | 99.99% uptime, zero hosting cost, automated SSL, global edge delivery. |
| **Front-End Architecture** | Single-File Self-Contained (`index.html`) | Zero external CSS dependencies, immune to CDN outage, instant page loads, strict CSP compliance. |
| **Brand Identity & Scale** | Metallic Gold Ribbon Vector Logo (v5.5) | Integrated official SVG logo code featuring metallic gold gradient ribbons (`#E5C07B` to `#AA7A1E`) for the 3D-beveled "SB" monogram, paired with 'Cinzel' serif wordmark typography and tracked 'Inter' tagline across both header and dark footer. Standalone file saved to `assets/logo.svg`. |
| **Design System** | Corporate Advisory Luxury Palette | Technical Navy (`#0A192F`), Slate (`#475569`), Off-White (`#F8FAFC`), Crisp White (`#FFFFFF`), with Muted Gold (`#B08D57`) and Cobalt (`#1E40AF`) accents. Headings in Playfair Display serif, body in Inter sans-serif. |
| **Container Viewport Framing** | Global Bounded Container (`.site-container`) | `max-width: 1240px; margin: 0 auto; padding: 0 2rem;` (Lunas Consulting benchmark). Prevents edge-to-edge stretching and awkward dead space across ultra-wide monitors. |
| **Header Navigation** | Bounded Header Layout (84px Height) | Spacious executive navigation bar with clear typography, responsive scaling across desktop, tablet, and mobile. |
| **Hero Section** | Streamlined & Elevated Centered Layout | Stock photography removed; clean centered typography, distinct visual H1 break, ICP badge, primary diagnostic CTA and secondary call scheduling CTA. |
| **Outcomes Bar & Attribution** | 4-Column Elevation + Benchmark Source | `25%-35% Slippage Prevented`, `40 hrs/wk Recovered (1+ FTE)`, `1 Deal Saved = 3x ROI`, `0 Months InfoSec Delay`, with attribution line beneath. |
| **Service Pillars** | Compact 4-Column Horizontal Grid | 4 concise practices (Deal Forensics, Market Expansion, Agent Infrastructure, Channel Architecture) positioned immediately below the metrics bar. |
| **4-Week Sprint** | Horizontal Tabbed Interface | Single compact card with 4 week-level tabs (Week 1 to Week 4) showing milestone focus, installed logic, and division of labor on click. |
| **Logo Tickers** | High-Res Logo Marks + Full Brand Names (65s Glide) | Positioned right after 4-Week Sprint as social proof transition. Features official logo marks + full uppercase company name labels (`DELOITTE`, `PWC`, `KPMG`, `EY`, `SAP`, `SOBEYS`, `CIRCLE K`, `COUCHE-TARD`, etc.). |
| **Security Section** | Clean 3-Column Architecture | 3 clean visual cards: 1. Your Cloud / Your Tenant, 2. Bring Your Own Key (BYOK), and 3. Zero External Data Training, with 10-logo tech stack grid. |
| **Retained Governance** | Weekly Radar + Monthly Forensics + CRO Reviews | Evidence-based anti-fluff protocol stress-testing commit deals before board updates. |
| **About Section** | Balanced 2-Column Equal Height Grid | Left: Company Mission & CRM telemetry philosophy with stacked gold brand emblem. Right: Scott Carpentier founder card highlighting Oxford Saïd AI Certification, PE growth ($9M → $60M), and Nasdaq SaaS scale ($150M → $750M). |
| **Booking & Modal CTA** | Unified 15-Minute Introductory Call CTA | Standardized call scheduling label across header, hero, footer, and modals. |
| **Diagnostic Modal** | Centered Modal with Retake Button | Viewport centered modal with `↻ Retake Diagnostic` button in header and clean state resetting. |
| **HubSpot Integration** | Native Fetch API (Zero iframes) | Custom HTML forms posting directly to HubSpot Forms API v3 endpoint (`portalId: 342958738`, `formId: de5aa2ee-c4fc-4f04-8b6b-563c3bfb9fa3`). |
| **Deployment Scripting** | Custom Bash CLI (`push.sh`) | Atomic sync of code and brand image assets from Linux repository to Downloads mirror and GitHub Pages remote. |

---

## 2. Completed Milestones & Configurations (Version 5.2.0)

### 2.1 Brand Logo Integration
* **Header Navigation:** Replaced generic placeholder initials with the official horizontal gold-embossed logo lockup (`assets/logo-horizontal.jpg`) with subtle gold border and hover elevation.
* **About Section:** Integrated the stacked gold emblem (`assets/logo-stacked.jpg`) into the header of "The Sales Bench Model" card, creating visual symmetry with Scott Carpentier's principal avatar in the right card.
* **Footer:** Added the horizontal gold-embossed brand lockup (`assets/logo-horizontal.jpg`) against the deep `#071223` background.
* **Favicon & Apple Touch Icon:** Linked `assets/logo-stacked.jpg` in `<head>` for branded browser tab display and mobile bookmarks.
* **OpenGraph & Twitter Card Meta:** Added `assets/logo-horizontal.jpg` to social sharing meta tags for previews on LinkedIn, Slack, Twitter/X, and messaging apps.

### 2.2 Container Width & Viewport Framing
* Applied global `.site-container` wrapper with `max-width: 1240px; margin: 0 auto; padding: 0 2rem;` to the header, hero, metrics bar, and all content sections (Lunas Consulting benchmark).
* Bound header navigation inside 1240px so the brand logo stays anchored to the left container margin and nav links / CTA stay anchored to the right margin on wide displays.

### 2.3 Hero Section Streamlining
* Centered and elevated hero messaging:
  * H1: "Stop Late-Stage Deal Slippage."
  * Subhead: "Turn 6-Figure Opportunities In Your Pipeline Into Predictable Closed-Won Revenue."
  * ICP Badge: "Who We Serve: Enterprise & B2B SaaS ($5M–$50M+ ARR) · Deal Size: $30k–$250k+ ACV · Floor: Scaling AE Teams"
  * Primary CTA: "Run 2026 Pipeline Leakage Diagnostic →"
  * Secondary CTA: "Schedule a 15-Minute Introductory Call"

### 2.4 Reordered Page Architecture
Structured DOM order according to the strategic buyer journey:
1. **Hero Section** (Outcome-focused)
2. **Metrics Bar** (Proof of economic leverage)
3. **Four Core Practices Grid** (The 4 problems we solve)
4. **The Standardized 4-Week Installation Sprint** (The turnkey deliverable)
5. **Enterprise Customer & Partner Logo Tickers** (Social proof transition)
6. **Zero Data Retention & Cloud Security** (BYOK & SOC 2 de-risking)
7. **Retained Deal Governance & Deal Forensics** (Ongoing cadence)
8. **About The Sales Bench & Founder Profile** (Scott Carpentier)
9. **Final CTA & Booking Section** ("Schedule a 15-Minute Introductory Call")

### 2.5 Logo Tickers with Full Brand Names & 65s Smooth Glide
* Rendered all ticker items with clean logo marks paired with crisp uppercase text labels: `[Official Logo] [Company Name Label]`.
  * **SI & Advisory Alliances:** SAP, Deloitte, PwC, EY, KPMG.
  * **Enterprise Deal Pedigree:** Sobeys, Circle K, Alimentation Couche-Tard, Bell Canada, Marathon Oil, Cooper Tire, Finning, Suncor, Questrade, goeasy (easyfinancial), Pharmascience.
* Set marquee animation duration to `65s` for a smooth, readable glide with hover-pause functionality.

### 2.6 Retake Diagnostic Button & Unified CTA
* Added prominent `↻ Retake Diagnostic` button in the diagnostic modal header next to the close button, enabling instant recalculation without reloading.
* Standardized all booking CTAs to: **"Schedule a 15-Minute Introductory Call"**.
* Maintained direct HubSpot Forms API v3 post integration with zero iframes or third-party badges.

---

## 3. Current State of the Codebase

### 3.1 Local Directory Structure
```
/home/scottcarpentier/
├── thesalesbench-website/                 # Main Git repository (cloned from GitHub)
│   ├── index.html                         # Production single-file marketing application (v5.2.0)
│   ├── hubspot-submit.js                  # Standalone HubSpot Forms API integration script
│   ├── PROJECT_STATUS.md                  # Comprehensive project documentation (v5.2.0)
│   ├── README.md                          # Repository summary & asset guide
│   ├── assets/
│   │   ├── logo-horizontal.jpg            # Gold-embossed horizontal brand lockup
│   │   └── logo-stacked.jpg               # Gold-embossed stacked brand emblem
│   └── .git/                              # Git metadata pointing to origin/main
├── Downloads/
│   ├── The_Sales_Bench_Website.html       # Mirrored copy for local offline browser inspection
│   ├── hubspot-submit.js                  # Mirrored HubSpot submission helper
│   ├── PROJECT_STATUS.md                  # Mirrored status documentation
│   └── assets/                            # Mirrored logo image assets
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
   - Gold-embossed horizontal brand logo in top navigation header
   - Gold-embossed stacked emblem in "The Sales Bench Model" mission card
   - Gold-embossed brand lockup in the deep navy footer
   - Favicon in browser tab
   - 1240px unified container framing across header and sections
   - Centered and elevated hero section
   - Reordered flow: Hero → Metrics → Services → Sprint → Tickers → Security → Governance → About → Book
   - 65s tickers with official logo marks and company name labels
   - `↻ Retake Diagnostic` button in modal header
   - Unified "Schedule a 15-Minute Introductory Call" CTA buttons
   - Direct HubSpot API submissions without iframes
