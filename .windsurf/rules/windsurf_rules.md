trigger: always_on
description: Project rules — Landing Page for Outsourcing (Compliance/Sales/CS)

# Project Context
This is a landing page for an outsourcing company focusing on compliance-heavy Customer Support, Call Centers, and Sales. 
The brand identity and design system are:
- Primary Brand Color: #B30634 (Red/Fuchsia)
- Secondary Brand Color: #FF6600 (Orange)
- Background/Base: #0A0F23 (Dark Blue)
- Accent/Light: #F8E3D0 (Autumn White)
- Primary Font: Plus Jakarta Sans
- Secondary Font: Roboto

# Stack and Architecture
- Framework: Next.js
- Deployment: Cloudflare Pages
- Database/Backend: Supabase (Postgres)
- Form Handling: Initial integration with Google Sheets, moving towards full DB/CRM later.
- Animation: Integrate Vanta.js (Globe effect) for visual impact.

# Design and Styling
- DO NOT use shadcn/ui components. Build with raw Tailwind utility classes.
- Use the specified color palette strictly.
- Prioritize professional, high-trust design (due to compliance/outsourcing focus).
- Ensure Vanta.js effect is optimized for performance (lazy load/conditional rendering).

# Performance and SEO
- Semantic HTML is mandatory.
- Optimized for LCP, INP, and CLS.
- Images: explicit dimensions, modern formats (AVIF/WebP), lazy loading.
- Preload fonts (Plus Jakarta Sans/Roboto).

# Interaction Guidelines
- Do not make assumptions about external dependencies. Ask before installing anything.

# Windsurf Specific Policy
- Focus on codebase consistency.
- When generating code, follow the Next.js App Router patterns.
- Keep components modular and reusable.
