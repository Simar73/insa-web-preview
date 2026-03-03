# CLAUDE.md — InsAnalytics Website
> This file is the single source of truth for building the InsAnalytics website.
> Read this entire file before writing a single line of code.

---

## 1. PROJECT OVERVIEW

**Company:** InsAnalytics  
**Tagline:** *Insights. Through Analytics.*  
**Website:** www.insanalytics.com  
**Contact:** gm@insanalytics.com | +91 70048 61454 | +91 90075 36560

### What InsAnalytics Is
InsAnalytics is a **data science and analytics consulting firm** — NOT a training company. Training is a strategic entry point to win consulting and R&D contracts. The company delivers across four service lines:

1. **Consulting** — Management consulting and analytics solutions for enterprise clients
2. **R&D** — Applied research in AI, machine learning, and data science for complex industry problems
3. **Product Development** — Building AI-powered, data-driven software products and platforms
4. **Corporate Training** — Capability-building programs for enterprise teams and institutions

### Target Audience
- C-suite and senior leadership at large Indian enterprises and PSUs (HPCL, ONGC, SAIL, etc.)
- Government ministries and bodies (Ministry of Power, World Bank-linked projects)
- Global MNCs with India operations
- Decision-makers in BFSI, Energy, Manufacturing, Telecom, Retail, Healthcare

### Strategic Tone
The website must feel like **BCG or EY-Parthenon** — not a startup, not a training institute. Premium, institutional, authoritative. Every word and pixel should signal "we work with Fortune 100 clients and government bodies."

---

## 2. THIS BUILD: STATIC LANDING PAGE (V1)

This is a **temporary static website** — a professional holding page while the full site is developed. It must be production-ready and impressive enough to show C-suite clients in a meeting context.

### Tech Stack
- **Framework:** Angular (latest stable)
- **Backend:** Node.js (Express — serve the Angular app, minimal)
- **Styling:** Angular component styles + SCSS
- **No external UI libraries** unless absolutely necessary (keep it clean and custom)
- **Fonts:** Load from Google Fonts (see Design System below)
- **Logo:** Use the provided PNG file — `assets/logo.png`

### Pages / Sections (Single Page, Scroll-Based)
This is a **single-page application** with smooth scroll between sections:

1. **Banner / Announcement** — "New Website Under Construction" message
2. **Hero** — Who InsAnalytics is, the tagline, primary CTA
3. **What We Do** — Four service lines: Consulting, R&D, Product Development, Corporate Training
4. **Industries & Expertise** — Verticals and horizontals served
5. **Team** — All 11 team members with name, title, and key credentials
6. **Contact** — Email, phone, basic inquiry prompt

---

## 3. DESIGN SYSTEM

### Brand Colors (Extracted from Logo)
```scss
$primary:     #2B2D7E;   // Deep navy/indigo — main brand color (wordmark)
$accent:      #3DB84B;   // Fresh green — bell curve in logo
$white:       #FFFFFF;
$off-white:   #F7F8FC;   // Section backgrounds
$light-grey:  #EAECF4;   // Dividers, card borders
$mid-grey:    #6B7280;   // Body text secondary
$dark:        #1A1A2E;   // Headings, high-contrast text
```

### Typography
Inspired by BCG and EY-Parthenon: strong editorial headings, clean readable body text. Use Google Fonts.

```scss
// Display / Hero headings
$font-display: 'Playfair Display', serif;   // Authoritative, editorial

// UI headings and labels
$font-heading: 'DM Sans', sans-serif;       // Modern, clean, professional

// Body text
$font-body: 'Source Serif 4', serif;        // Readable, premium feel
```

**Type Scale:**
- Hero H1: 56–64px, Playfair Display, weight 700, color $dark
- Section H2: 36–42px, DM Sans, weight 600, color $primary
- Card H3: 20–24px, DM Sans, weight 600
- Body: 16–18px, Source Serif 4, color $mid-grey, line-height 1.7
- Labels/Caps: 11–12px, DM Sans, letter-spacing 0.15em, uppercase, $accent

### Layout Principles (BCG/EY-Parthenon Inspired)
- **White/off-white backgrounds** — no dark themes
- **Generous whitespace** — sections breathe, nothing feels crowded
- **Strong left-aligned typography** — headings anchor left, body follows
- **Thin accent lines** — green `$accent` used as decorative rule above section titles
- **Max content width:** 1200px, centered, with 80px horizontal padding on desktop
- **Grid:** 12-column, gap 24–32px
- **Section padding:** 100px top/bottom on desktop, 60px on mobile

### Visual Accents
- Thin horizontal rule in `$accent` green (2px, 40px wide) above every section H2
- Subtle card shadows: `box-shadow: 0 2px 16px rgba(43, 45, 126, 0.06)`
- Card borders: `1px solid $light-grey`
- Hover states: cards lift with `transform: translateY(-4px)` and shadow deepens
- No gradients except subtle `$off-white` to `$white` on alternating sections

---

## 4. SECTION-BY-SECTION CONTENT & INSTRUCTIONS

### Section 1: Banner (Announcement Bar)
A prominent but elegant top-of-page announcement. NOT a tiny cookie bar — make it a real section.

**Style:** `$primary` background, white text, centered, bold.

**Content:**
```
🚧  NEW WEBSITE UNDER CONSTRUCTION

We are developing a new digital experience to better showcase how we empower 
enterprises with intelligent data-driven solutions and expert AI strategy.
Our new platform is on its way.
```

---

### Section 2: Hero
Full-width hero. White background. Logo top-left in navbar. Clean, commanding.

**Navbar:**
- Logo left: `assets/logo.png` at ~160px wide
- Links right: What We Do | Our Team | Contact Us (smooth scroll anchors)
- Sticky on scroll, slight shadow on scroll

**Hero Content (center or left-aligned, large):**
```
Headline:   Turning Data Into Strategic Advantage
Subhead:    InsAnalytics is a data science and analytics consulting firm 
            delivering AI-powered consulting, R&D, product development, 
            and enterprise training to global organizations.
CTA Button: Get In Touch  [primary button, $primary bg, white text]
```

**Visual treatment:** Large, clean, generous padding. Optionally a subtle abstract data/network SVG pattern on the right half of the hero (low opacity, `$light-grey` tones).

---

### Section 3: What We Do
Four service line cards in a 2×2 grid (desktop) / stacked (mobile).

**Section Header:**
```
Label:    WHAT WE DO
Heading:  Four Ways We Create Impact
```

**Card 1 — Consulting**
```
Icon: Chart/strategy icon (SVG)
Title: Management Consulting
Body: We provide data-driven management consulting across industries and 
business functions — helping enterprises solve complex challenges using 
advanced analytics, AI, and multi-decade cross-functional expertise. 
From strategy to execution, we leverage Business Analytics, Machine Learning, 
Econometrics, Balanced Scorecard, Lean & Six Sigma, and Operations Research 
to drive measurable business outcomes.
```

**Card 2 — R&D**
```
Icon: Atom/research icon (SVG)
Title: Research & Development
Body: Our team of PhDs and industry researchers conduct applied R&D in 
Artificial Intelligence, Machine Learning, Statistical Modeling, and 
Data Science — solving problems that sit at the frontier of what's 
computationally and analytically possible. We partner with enterprises 
and institutions to develop novel models, algorithms, and frameworks 
tailored to specific industry challenges.
```

**Card 3 — Product Development**
```
Icon: Code/build icon (SVG)
Title: Product Development
Body: We design and build AI-powered data products and platforms — from 
intelligent dashboards and forecasting engines to end-to-end analytics 
platforms and enterprise automation solutions. Our technology stack spans 
GenAI, Computer Vision, NLP, IoT, Blockchain, and Cloud, with a focus on 
solutions that are scalable, maintainable, and directly tied to business value.
```

**Card 4 — Corporate Training**
```
Icon: Graduate/education icon (SVG)
Title: Corporate Training
Body: We deliver executive and technical training programs to enterprise 
teams, PSUs, and academic institutions — covering AI, Machine Learning, 
Business Analytics, RPA, and Data Science. Our faculty includes IIM/IIT 
professors and industry veterans with decades of hands-on experience, 
ensuring training that is rigorous, practical, and immediately applicable.
```

---

### Section 4.5: Our Approach — BAT Framework
This section sits between "What We Do" and "Industries & Expertise." It is one of the most strategically important sections on the page and should have strong visual presence.

**The Philosophy:**
InsAnalytics' founder's core pitch is that they don't create dependency — they eliminate it. They build AI and analytics solutions *with* the client's own team, transferring knowledge throughout the engagement, so that by the end the client organisation is self-sufficient. This is the BAT framework:

**Section Header:**
```
Label:    OUR APPROACH
Heading:  We Don't Just Solve Problems. We Build Your Capacity to Solve Them.
Subhead:  Our engagement philosophy is built around one goal: making your 
          organisation permanently self-sufficient in AI and analytics.
```

**Three pillars — large, bold, visually prominent:**

```
B — BUILD
We design and develop AI-powered solutions, analytics frameworks, and 
data-driven systems tailored to your specific business challenges — 
working alongside your team from day one, not in isolation.

A — AUGMENT
As we build, we transfer. Your people work with our consultants 
through every step — understanding the models, the methodology, 
and the logic — so knowledge stays inside your organisation.

T — TRANSFORM
The engagement ends when your team can independently build, 
maintain, and evolve these solutions on their own. The goal is 
not a deliverable. It is a permanently transformed organisation.
```

**Closing line (below the three pillars):**
```
"Most consultants want you to call them again. We succeed when you don't need to."
```

**Visual treatment:**
- Full-width section, `$primary` navy background, white text — this should stand out from surrounding sections
- The three letters B, A, T displayed very large (120–160px) in `$accent` green, each anchoring its pillar
- Clean three-column layout on desktop, stacked on mobile
- The closing quote in italics, centered, slightly smaller — let it land with weight
- This section should feel like a manifesto moment, not a feature list

---


Two columns: Verticals (left) and Horizontals (right). Clean, minimal.

**Section Header:**
```
Label:    OUR EXPERTISE
Heading:  Industries & Functions We Serve
```

**Verticals (Industries):**
Banking & Financial Services | Insurance | Energy & Utilities | Manufacturing
Retail & Consumer Products | Telecommunications | Media & Entertainment
Automobiles | Healthcare | Travel & Hospitality | Government & Public Sector

**Horizontals (Business Functions):**
Finance & Accounting | Marketing & Sales | Supply Chain & Logistics
Operations & Process Excellence | Human Resources | Risk Management

**Style:** Two clean tag-cloud or pill-list layouts. `$primary` text on `$off-white` pills with `$light-grey` borders.

---

### Section 5: Our Team
All 11 members. Card grid: 4 columns desktop, 2 tablet, 1 mobile.

**Section Header:**
```
Label:    OUR TEAM
Heading:  Expertise Across Decades and Disciplines
Subhead:  Our consultants bring multi-decade experience from IITs, IIMs, 
          Fortune 100 MNCs, global banks, and government bodies.
```

**Team Members (render all 11 as cards):**

Each card: Name | Title | 2–3 bullet credentials | No photo (use initials avatar in `$primary` color)

```
1. Dr. Goutam Das
   Founder & Principal Data Scientist
   • 30+ years across Finance, Energy, Telecom, Manufacturing
   • Chief Data Scientist, Ministry of Power, Govt. of India
   • Global Head Analytics Consulting, TCS | Senior Data Scientist, IBM
   • PhD IIFT Delhi | M.Tech IIT Kharagpur | Six Sigma MBB, ISI Delhi

2. Prof. (Dr.) B B Chakraborty
   Advisor
   • 40+ years in Industry and Academics
   • Senior Professor & Director, IIM Calcutta & IIM Ranchi
   • Consultant: UN, HSBC, Deutsche Bank, Credit Suisse, ONGC
   • PhD Economics | MBA Gold Medalist, IIM Calcutta | BE Gold Medalist, Jadavpur

3. Dr. Nidhan Choudhuri
   Advisor
   • 25+ years in Quantitative Finance & Algorithmic Trading
   • Financial Analyst, Barclays Capital & Morgan Stanley, New York
   • Professor, University of Michigan & Case Western Reserve University
   • PhD Statistics, Michigan State | M.Stat & B.Stat, ISI

4. Dr. Ayan Chatterjee
   Chief Technology Officer
   • GPU architecture design at NVIDIA (Tesla autonomous vehicles)
   • AI platforms for Drug Discovery at AstraZeneca
   • Expertise: GenAI, NLP, Graph ML, Computer Vision, AI Hardware
   • PhD CS, Northeastern University Boston | M.Tech IISc Bangalore

5. Mr. Jayanta Adhikari
   Chief Consultant, Financial Analytics
   • 30+ years across BFSI, Retail, Manufacturing
   • Head of Financial Analytics & Business Analytics, TCS
   • Expertise: FP&A, Demand Planning, Customer Analytics, Digital Transformation
   • CFA Level 2 | SMP IIM Calcutta | B.Tech IIT BHU

6. Ms. Amrita Saha
   Sr. Data Scientist, AI-ML & Statistical Modeling
   • 15 years in AI, GenAI, Big Data Analytics, RPA
   • Expertise: Statistical Modeling, Time Series Forecasting, Panel Data Regression
   • Sectors: BFSI, Energy/Utility, Manufacturing
   • PhD Scholar (AI in Energy Economics) BITS Pilani | M.Tech Data Science, BITS Pilani

7. Mr. Abhishek Ranjan
   Chief Business Officer
   • 19+ years across Technology, Power, Real Estate, Retail, Hospitality
   • Expertise: Business Strategy, Client Relationship, Asset Monetization
   • MBA Power Management, NPTI | BE Electronics, BIT Sindri

8. Mr. Pavan Goyal
   Consultant, Financial Analytics
   • 19+ years in Power Sector and Finance
   • Ex-Vice President, Credit Suisse & J.P. Morgan
   • Expertise: Derivatives Strategy, Proprietary Trading, Risk Analytics
   • PhD Scholar IIM Indore | MBA Finance IIM Lucknow | B.Tech MNIT Jaipur

9. Mr. Kaustav Chakraborty
   Consultant, IT Architecture, Blockchain & Cloud
   • 20+ years in Enterprise Architecture, Blockchain, Microservices, IoT
   • Expertise: Real-time Data Processing, Cloud, DevOps, Embedded Systems
   • B.Tech Electronics & Instrumentation, WBUT

10. Mr. Gautam Mukherjee
    Management Consultant
    • 30+ years R&D and leadership at DRDO, Reliance, Capgemini, Tech Mahindra
    • Expertise: Strategic Management, Program Management, Defense, Telecom, Healthcare
    • M.Tech Electrical Engineering, IIT Madras | B.Tech IIT Kharagpur

11. Mr. Aditya Biswas
    Consultant, Industrial Engineering & Analytics
    • 30+ years in IT, Analytics, Banking & Insurance, Manufacturing
    • Ex-Principal Consultant TCS | Head of IT, Allahabad Bank
    • Associate Professor of Quantitative Management, NITIE Mumbai
    • M.Tech Industrial Engineering & OR, IIT Kharagpur
```

---

### Section 6: Corporate Client Testimonials
Social proof for enterprise/consulting credibility. Carousel or 2-3 card layout.

**Section Header:**
```
Label:    CLIENT VOICES
Heading:  What Our Clients Say
```

**Placeholder cards (3 cards — content to be replaced):**
```
Card 1:
Quote:    "[ Corporate client testimonial to be added ]"
Name:     [ Client Name ]
Title:    [ Designation, Organisation ]

Card 2:
Quote:    "[ Corporate client testimonial to be added ]"
Name:     [ Client Name ]
Title:    [ Designation, Organisation ]

Card 3:
Quote:    "[ Corporate client testimonial to be added ]"
Name:     [ Client Name ]
Title:    [ Designation, Organisation ]
```

**Style:** Cards with left `$accent` green border, quote in italics, name in `$primary` bold. Light `$off-white` background section.

---

### Section 7: Corporate Training Testimonials
Separate section — different visual treatment to distinguish from corporate clients.

**Section Header:**
```
Label:    LEARNING OUTCOMES
Heading:  What Our Training Participants Say
```

**Placeholder cards (3 cards — content to be replaced):**
```
Card 1:
Quote:    "[ Training participant testimonial to be added ]"
Name:     [ Participant Name ]
Title:    [ Designation, Organisation ]

Card 2:
Quote:    "[ Training participant testimonial to be added ]"
Name:     [ Participant Name ]
Title:    [ Designation, Organisation ]

Card 3:
Quote:    "[ Training participant testimonial to be added ]"
Name:     [ Participant Name ]
Title:    [ Designation, Organisation ]
```

**Style:** Slightly different from corporate — use a softer `$off-white` card bg with `$primary` quote marks as large decorative elements. Distinguish visually so visitors understand these are two different audiences.

---

### Section 9: Contact
Clean, minimal contact section. No complex form needed for V1.

**Section Header:**
```
Label:    GET IN TOUCH
Heading:  Let's Start a Conversation
Subhead:  Whether you're exploring a consulting engagement, an R&D partnership, 
          or a training program — we'd love to hear from you.
```

**Two office locations — display as cards side by side:**
```
📍 Mumbai (Head Office)
InsAnalytics
#912 Plot-B, Lodha Supremus – Tower 2
Lodha Biz District, Kolshet Road
Thane, Mumbai – 400607

📍 Kolkata Office
Calcutta Greens Commercial Complex
BC-69, In Between Hiland Park & Ambuja
Kolkata – 700075
(Mon–Fri)
```

**Contact Details:**
```
📞  +91 90075 36560
    +91 70048 61454
✉️  gm@insanalytics.com
🌐  www.insanalytics.com
```

**CTA:** A single "Send Us an Email" button → `mailto:gm@insanalytics.com`

**Style:** Two office cards side by side on desktop, stacked on mobile. Clean icon + text layout for phone/email. `$primary` color for office name headers, `$mid-grey` for address body text.

---

### Footer
```
© 2025 InsAnalytics. All rights reserved.
Insights. Through Analytics.
[Logo]    [Email]  [Phone]
```

---

## PAGE SECTION ORDER (FINAL)

1. Announcement Banner
2. Navbar + Hero
3. What We Do (4 service lines)
4. **Our Approach — BAT Framework** ← navy bg, manifesto moment
5. Industries & Expertise
6. Our Team (all 11)
7. Corporate Client Testimonials ← placeholder, content TBD
8. Corporate Training Testimonials ← placeholder, content TBD
9. Contact
10. Footer

---

## 5. ANGULAR PROJECT STRUCTURE

```
insanalytics-web/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── banner/
│   │   │   ├── hero/
│   │   │   ├── what-we-do/
│   │   │   ├── expertise/
│   │   │   ├── team/
│   │   │   └── contact/
│   │   └── shared/
│   │       └── styles/
│   │           ├── _variables.scss
│   │           ├── _typography.scss
│   │           └── _global.scss
│   ├── assets/
│   │   └── logo.png
│   └── styles.scss
├── server.js          (Express — serves Angular build)
├── package.json
└── angular.json
```

---

## 6. COMPONENT BEHAVIOUR NOTES

- **Navbar:** Transparent on load, white background + shadow on scroll. Smooth scroll to section anchors on link click.
- **Banner:** Dismissible (X button) — store in sessionStorage so it doesn't reappear on scroll.
- **Cards (What We Do):** Hover lift effect. Icon in `$accent` green, title in `$primary`.
- **Team cards:** Initials avatar (circle, `$primary` background, white text). Cards in uniform height grid.
- **Animations:** Subtle fade-up on scroll for each section (use Intersection Observer). Stagger children within sections (100ms delay between items).
- **Mobile:** Fully responsive. Hamburger menu on mobile. Stack all grids to single column below 768px.

---

## 7. VERSIONS TO BUILD

Build **3 versions** of this same page with different visual treatments. All use the same content and Angular structure. Only the visual design changes.

### Version A — "BCG Editorial"
- Light grey `#F5F5F5` hero background, white sections
- Playfair Display for all headings — serif, editorial, prestigious
- Very generous whitespace, large typography
- Thin `$accent` green rules as decorators
- Minimal, almost no icons — let typography carry the weight
- Reference: bcg.com

### Version B — "EY-Parthenon Professional"
- Pure white throughout, `$off-white` alternating sections
- DM Sans for headings — clean, contemporary, institutional
- Yellow/amber used as accent instead of green (EY-style) — BUT keep InsAnalytics green as brand accent on logo and CTAs only
- Cards with visible borders, structured layout
- More data-forward: include a stat bar ("30+ years avg experience", "11 experts", "10+ industries")
- Reference: ey.com/en_in/services/strategy/parthenon

### Version C — "Modern Analytics"
- Still light (white bg) but with subtle geometric/data-pattern backgrounds
- Bolder typography contrast: very large section numbers (01, 02, 03...)
- `$primary` navy used as section background for alternating sections (white text)
- More motion: cards animate in with stagger, counters animate on scroll
- More tech-forward feel while staying premium

### Version D — "Dark Cinematic" (inspired by stakeholder reference image)
- **Dark background:** deep navy/near-black `#0A0B1A`
- Glowing cyan/teal accent `#00C8FF` alongside InsAnalytics green
- Cinematic hero: full-width dark background with subtle animated data-network particle pattern (CSS/canvas)
- White and light-grey text throughout
- Cards with glowing borders on hover (`box-shadow: 0 0 20px rgba(0,200,255,0.2)`)
- Holographic/glass-morphism card style: `background: rgba(255,255,255,0.04); backdrop-filter: blur(12px)`
- Large bold sans-serif headings in white — high contrast, dramatic
- Reference mood: Palantir, NVIDIA, the stakeholder's AI-generated image
- **Note to stakeholder:** This version is visually striking and great for tech audiences. For traditional enterprise/PSU C-suite, pair with Version A or B as the primary presentation.

---

## 8. IMPLEMENTATION NOTES FOR CLAUDE IN VSCODE

1. **Start with `_variables.scss`** — define all colors, fonts, spacing tokens first
2. **Build components in order:** navbar → banner → hero → what-we-do → expertise → team → contact → footer
3. **All content is hardcoded** — no CMS, no API calls, no dynamic data for V1
4. **Logo path:** `src/assets/logo.png` — use `<img>` tag with `alt="InsAnalytics — Insights. Through Analytics."`
5. **Google Fonts import** in `styles.scss`: Playfair Display (400, 700), DM Sans (400, 500, 600), Source Serif 4 (400, 600)
6. **Express server (`server.js`)**: Serve Angular `dist/` folder statically. Listen on `PORT` env var or 3000.
7. **No routing needed** — single page, anchor-based navigation only
8. **Test at 1440px, 1024px, 768px, 375px** breakpoints
9. **DO NOT use Angular Material or PrimeNG** — keep styles fully custom
10. **For icons:** Use inline SVGs or a lightweight icon set (Heroicons or Feather Icons via CDN)

---

## 9. BACKGROUND CONTEXT: TRAINING (DO NOT USE VERBATIM)

The following is from the previous website. It is provided as **context only** — do NOT copy this text onto the new site. Use it to understand the depth and nature of the training operation, and let it inform the tone and substance of the Corporate Training service card in the "What We Do" section.

**Key facts to extract from this:**
- Training is available to both individuals (students, working professionals) AND institutions (corporates, academic institutions)
- Faculty are IIT/IIM/ISI alumni with multi-decade global consulting + teaching experience
- Training cross-pollinates with Consulting and R&D divisions — this is a differentiator worth surfacing
- Delivery is flexible: in-person, online live, and self-paced
- InsAnalytics has institutional alliances where they design & deliver programs and serve as visiting faculty
- They are invited as panelists at industry seminars and academic conferences

**What this means for the website copy:**
The training card and section should NOT sound like a course catalogue or a coaching institute. It should sound like what it is: **enterprise capability building delivered by practitioners who consult at the highest levels.** The cross-pollination with Consulting and R&D is the key differentiator — trainers are active consultants, not just instructors.

**Raw text (for reference only):**
> We provide a structured learning environment to develop cutting-edge skills in high-demand areas of Business Analytics. Our training programmes are available to individual participants (students & working professionals) as well as through institutional engagements (corporates, educational companies, and academic institutions).
>
> We offer avenues for skill-building & skill-upgradation, thereby enhancing analytics competency in accordance with current market trends and industry requirements. insAnalytics associates are well-positioned to leverage their multi-decade, global and multiple industry consulting & teaching experience in the field of real-world analytics.
>
> The versatility of our training programmes is enhanced by cross-pollination of ideas with our Consulting and R&D divisions. Our short-term & long-term training programmes deploy illustrious faculty that are alumni of prestigious top-tier Indian academic institutions of global repute (IITs, IIMs, ISI, etc).
>
> To suit the comfort & convenience of our students, our training lectures are scheduled on weekends and/or outside business hours on weekdays. We deploy a flexible mix of training delivery modes – physical classroom sessions, online faculty-led synchronous & interactive sessions, and self-paced learning.
>
> We have alliances with a number of premier academic, educational and industrial institutions whereby we design & deliver analytics training programmes and serve as visiting faculty. We are also invited as panel members in seminars, conclaves & conferences across academia & industry.

---

## 10. CONTENT THAT CAN BE UPDATED LATER

These sections are placeholders and will be replaced with real content:
- R&D service description (currently drafted from team profiles)
- Product Development service description (currently drafted from team profiles)
- Team photos (currently initials avatars — replace with headshots when available)
- **Corporate client testimonials** (Section 6 — placeholder cards, content TBD by stakeholder)
- **Corporate training testimonials** (Section 7 — placeholder cards, content TBD by stakeholder)
- Case studies / client logos (not in V1 — add in V2)
- Blog / Insights section (not in V1 — add in V2)
- Full individual team profile pages (not in V1)

---

---

## 11. RECOMMENDED ADDITIONS & DECISIONS

### A. Credibility Bar / Stats Strip ✅ BUILD THIS
A narrow full-width band between the Hero and "What We Do" sections.

```
30+  Years Average Consulting Experience
11   Domain Experts  
10+  Industries Served
IIT · IIM · ISI · NVIDIA · IBM · TCS · Barclays · Morgan Stanley
```

Style: `$primary` navy background, white text, 4 stats evenly spaced in a single row. The pedigree line below in `$accent` green, smaller, letter-spaced. Clean divider feel — not a loud banner.

---

### B. WhatsApp Button ❌ SKIP
Do not add. Disrupts the premium, clean aesthetic of the site.

---

### C. Favicon ✅ BUILD THIS
Use the circular target/node mark from the top-left of the InsAnalytics logo as the browser favicon. Export a 32×32 and 64×64 PNG from the logo file and set in `index.html`.

---

### D. Client / Partner Logos ⏳ ADD IN V2
To be confirmed — which clients InsAnalytics can publicly name is under discussion. Leave placeholder comment in code: `<!-- CLIENT LOGOS SECTION: Add when approved -->`.

---

### E. Team LinkedIn Profiles ⏳ ADD IN V2
LinkedIn URLs for all 11 members to be collected. Leave LinkedIn icon on team cards but set `href="#"` with a `<!-- TODO: Add LinkedIn URL -->` comment.

---

### F. Institutions Pedigree / Team Photos ⏳ READY WHEN PHOTOS ARRIVE
Team photos will be provided. Build team cards with initials avatars for now — swap to `<img>` when photos are supplied. Keep the same card dimensions so layout doesn't shift.

---

*Last updated: March 2026 | Prepared for InsAnalytics website development*
