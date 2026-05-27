# Landing Page — Outsourcing Company (Compliance · Support · Sales)

## Project Context

This is the main marketing landing page for a **compliance-heavy outsourcing company** offering Customer Support, Call Center operations, and Sales teams. The audience is primarily B2B: decision-makers at regulated companies (fintech, healthcare, insurance, SaaS) seeking a trustworthy, scalable outsourcing partner.

**Brand positioning:** Premium, authoritative, results-oriented. Emphasize security, regulatory readiness, and operational excellence. Avoid buzzwords.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS — raw utility classes only. **No shadcn/ui.** |
| Animation | Vanta.js — Globe effect in Hero section |
| Forms | Google Sheets (via API) initially; Supabase later |
| Database | Supabase (Postgres) |
| Deployment | Cloudflare Pages |

---

## Brand & Design System

### Color Palette (use as Tailwind custom colors in `tailwind.config`)

```js
colors: {
  brand: {
    red:    '#B30634',   // Primary — CTAs, accents, highlights
    orange: '#FF6600',   // Secondary — hover states, gradient partner
    navy:   '#0A0F23',   // Background / Base
    cream:  '#F8E3D0',   // Accent / Light text / Cards
  }
}
```

### Typography

- **Primary:** Plus Jakarta Sans — headings, navigation, labels
- **Secondary:** Roboto — body copy, descriptions

Preload both fonts in `app/layout.tsx` via `<link rel="preload">` or Next.js `next/font`.

```tsx
// Recommended next/font setup
import { Plus_Jakarta_Sans, Roboto } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-roboto',
  display: 'swap',
})
```

### Design Principles

- Dark base (`#0A0F23`) throughout — it reads as secure and authoritative
- Red (`#B30634`) for primary CTAs and key accents
- Orange (`#FF6600`) as gradient partner and hover accent
- Cream (`#F8E3D0`) for readable body text and light card surfaces
- Subtle red-to-orange gradients on hero text and section dividers
- No white backgrounds — use dark navy variants or very subtle cream tints

---

## Performance & SEO Requirements

- Semantic HTML5 elements throughout (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`)
- All `<img>` tags: explicit `width` + `height`, `loading="lazy"` (except hero LCP image which gets `priority`), modern formats (AVIF/WebP via Next.js `<Image />`)
- Vanta.js Globe: **lazy-load + conditional rendering** (load only after component mounts, destroy on unmount). Use dynamic import with `ssr: false`.
- No layout shift — fix dimensions on all media elements
- `<title>` and `<meta name="description">` populated in `layout.tsx` or per-page metadata export

---

## Page Sections

Build the page as a single `app/page.tsx` composed of the following section components, each in `components/sections/`:

---

### 1. `<Navbar />`

- Fixed top, blur backdrop (`backdrop-blur-md bg-navy/80`)
- Logo left (text or SVG — placeholder `BRANDNAME` for now)
- Nav links: `Why Us`, `Services`, `Careers`, `Contact`
- CTA button right: **"Hire a Team"** — red background, cream text, slight pill or sharp rectangle
- On scroll: add subtle border-bottom transition

---

### 2. `<Hero />`

**Layout:** Full viewport height. Vanta.js Globe as background. Content centered or left-aligned over the globe.

**Vanta.js integration:**

```tsx
// components/sections/Hero.tsx
'use client'
import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

// Load vanta only client-side
useEffect(() => {
  let vantaEffect: any = null
  const loadVanta = async () => {
    const THREE = (await import('three')).default
    const VANTA = (await import('vanta/dist/vanta.globe.min')).default
    vantaEffect = VANTA({
      el: vantaRef.current,
      THREE,
      color: 0xB30634,        // brand red
      color2: 0xFF6600,       // brand orange
      backgroundColor: 0x0A0F23,
      size: 1.2,
      points: 9,
    })
  }
  loadVanta()
  return () => { vantaEffect?.destroy() }
}, [])
```

**Copy:**

```
EYEBROW (small caps, red):  Compliant · Scalable · Secure

H1:
  Operate with certainty.
  Scale without risk.
  (gradient text: red → orange on "certainty" or the entire H1)

SUBHEADLINE:
  We deploy specialized teams in compliance operations, customer support,
  and sales — regulated-market-ready, brand-aligned, and operational from day one.

CTAs:
  [Primary]  Build Your Team      → red bg, cream text
  [Secondary] Our Methodology     → transparent, cream border
```

**Trust indicators below CTA** (4 inline stats, cream text):
- `98.6%` Compliance rate
- `72h` Median deployment
- `40+` Regulated industries
- `0` Regulatory sanctions on record

---

### 3. `<IndustryStrip />`

Thin horizontal band. Dark navy, slightly lighter than background.

Scrolling or static list of industries:
`Financial Services · Healthcare · Fintech · Insurance · Legal Process · E-commerce · SaaS & Technology · Real Estate`

Font: small caps, Roboto 300, cream at 50% opacity. Red dot separators.

---

### 4. `<WhyUs />`

**Section header:**
```
EYEBROW: Strategic Partnership
H2: The operational foundation your growth demands.
     ("growth demands" in red-to-orange gradient)
BODY: We are not a staffing agency. We embed as a functional extension
      of your organization — accountable to your metrics, fluent in your
      compliance obligations, and aligned to your customer experience standards.
```

**Three pillars** (card grid, 3 columns on desktop, 1 on mobile):

| # | Title | Description |
|---|---|---|
| 01 | Regulatory Alignment | Teams onboarded with jurisdiction-specific compliance training. GDPR, HIPAA, FCA, CFPB-ready. Continuously audit-ready. |
| 02 | Brand-Faithful Execution | We design communication frameworks around your voice, escalation policies, and customer commitments — not generic scripts. |
| 03 | Elastic Scale, Fixed Quality | From 5-agent pilots to 500-seat deployments. Performance floors are contractually guaranteed — not aspirational benchmarks. |

Card style: dark navy border, subtle red left-border accent on hover, outline number in brand red.

---

### 5. `<TwoBlocks />`

Two equal-width panels side by side (stacked on mobile).

#### Left Panel — For Organizations (Clients)

- Background: slightly lighter dark navy or subtle red-tinted dark
- Tag label: `FOR ORGANIZATIONS`
- H2: `Hire a team that operates like your own.`
- Body: Outsource with confidence. Fully managed teams across three core verticals, governed by performance SLAs.
- Service list (with `—` red dash prefix):
  - Compliance & Regulatory Operations — KYC, AML, document review, audit support
  - Customer Support — Tier 1–3 across voice, chat, and email
  - Sales Operations — Inbound qualification, outbound prospecting, pipeline management
  - Dedicated QA & Supervisory Oversight included in all engagements
  - Encrypted data handling and NDA-first policies
- CTA: **"Schedule a Discovery Call"** → red button

#### Right Panel — For Professionals (Careers)

- Background: cream or very light warm tint (contrast switch)
- Tag label: `FOR PROFESSIONALS`  (dark text)
- H2: `Build a career in high-stakes operations.` (dark navy text)
- Body: Join a network of professionals placed with leading organizations in finance, healthcare, and technology.
- Roles list:
  - Compliance review, fraud operations, regulatory reporting
  - Customer experience with structured advancement pathways
  - Sales and business development with transparent incentive structures
  - Continuous regulatory training and industry certifications
  - Market-benchmarked compensation — no grey areas
- CTA: **"View Open Positions"** → red button

---

### 6. `<ComplianceBand />`

Full-width band. Red-to-orange gradient background.

**Left:** 
```
H3: Compliance is not a feature.
    It is the foundation.
P:  All engagements are governed by documented SOPs, role-based access controls,
    and real-time performance monitoring. Your regulatory exposure is our accountability.
```

**Right:** Compliance badges (dark bg pill chips):
- `GDPR Ready`
- `HIPAA Aligned`
- `ISO 27001`
- `SOC 2 Type II`

---

### 7. `<ContactSection />`  *(optional — can be stubbed)*

Simple form: Name, Company, Email, Message, Service Interest (dropdown).

On submit: POST to a Next.js API route `/api/contact` that writes to Google Sheets via Google Sheets API.  
**Stub this route for now** — just log the body and return `{ success: true }`.

---

### 8. `<Footer />`

- Dark navy, top border in brand red (2px)
- Logo left
- Nav links center: Privacy · Terms · Security · Contact
- Copyright right: `© 2025 [Company Name]. All rights reserved.`

---

## File Structure

```
app/
  layout.tsx          ← Font preload, metadata, global styles
  page.tsx            ← Composes all section components

components/
  sections/
    Navbar.tsx
    Hero.tsx           ← Vanta.js Globe, requires 'use client'
    IndustryStrip.tsx
    WhyUs.tsx
    TwoBlocks.tsx
    ComplianceBand.tsx
    ContactSection.tsx
    Footer.tsx

app/
  api/
    contact/
      route.ts         ← Google Sheets stub

tailwind.config.ts     ← Custom brand colors, font variables
```

---

## Windsurf Instructions

1. Implement each section as its own component file under `components/sections/`.
2. `Hero.tsx` must be `'use client'` due to Vanta.js. All other sections can be server components unless they require interactivity.
3. Do **not** install Vanta.js or Three.js until explicitly approved — include the install command in a comment at the top of `Hero.tsx`:
   ```
   // Required: npm install vanta three
   ```
4. Do **not** run any git commands.
5. Do **not** use shadcn/ui. Raw Tailwind only.
6. Use Next.js `<Image />` for all images. Use `<Link />` for internal navigation.
7. Start with `tailwind.config.ts` to register the brand colors, then `app/layout.tsx` for fonts and metadata, then build sections top to bottom.
8. For the contact form API route, stub it — just parse the body and return `{ success: true }`. Note where the Google Sheets integration will go.

---

## Copy Reference (Full)

### Hero
- **Eyebrow:** Compliant · Scalable · Secure
- **H1:** Operate with certainty. Scale without risk.
- **Sub:** We deploy specialized teams in compliance operations, customer support, and sales — regulated-market-ready, brand-aligned, and operational from day one.
- **CTA 1:** Build Your Team
- **CTA 2:** Our Methodology

### Why Us
- **Eyebrow:** Strategic Partnership
- **H2:** The operational foundation your growth demands.
- **Body:** We are not a staffing agency. We embed as a functional extension of your organization — accountable to your metrics, fluent in your compliance obligations, and aligned to your customer experience standards.

### Compliance Band
- **H3:** Compliance is not a feature. It is the foundation.
- **Body:** All engagements are governed by documented SOPs, role-based access controls, and real-time performance monitoring. Your regulatory exposure is our accountability.

### For Organizations
- **H2:** Hire a team that operates like your own.
- **Body:** Outsource with confidence. Fully managed teams across three core verticals, governed by performance SLAs.
- **CTA:** Schedule a Discovery Call

### For Professionals
- **H2:** Build a career in high-stakes operations.
- **Body:** Join a network of professionals placed with leading organizations in finance, healthcare, and technology. We invest in your development — because your performance is our reputation.
- **CTA:** View Open Positions
