# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

This is a static HTML/CSS/JS landing page with no build step or package manager. To preview locally:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080. No compilation, bundling, or dependency installation needed.

## Architecture

**Pages:** `index.html` (main landing page), `success.html` (post-form-submission thank you page)

**CSS (loaded in order):**
- `assets/css/main.css` — All styles: variables, typography, layout, sections, carousel, cookie banner, animations. This is the primary file (~2000 lines).
- `assets/css/components.css` — Reusable UI components (modals, tooltips, badges, skeleton loading)
- `assets/css/responsive.css` — Breakpoint overrides: mobile (<767px), tablet (768-1023px), desktop (1024px+), large (1440px+), ultra-wide (1920px+)

**JS (all loaded with `defer`):**
- `assets/js/animations.js` — Intersection Observer for scroll-triggered animations
- `assets/js/carousel.js` — Scroll-based carousel for "Our Contributions" section with auto-scroll, touch/swipe, keyboard nav, and dot/arrow navigation
- `assets/js/cookie-consent.js` — Cookie consent banner logic
- `assets/js/main.js` — Mobile menu, smooth scrolling, scroll progress, GA4 event tracking (CTA clicks, scroll depth, outbound links)

**External dependencies (CDN, no local copies):**
- Font Awesome 6.0.0 — icons throughout the page
- Google Fonts (Inter) — loaded but brand fonts (Aeonik, Neue Machina) are local in `assets/images/fonts/`

## Brand & Design System

CSS variables are defined in `:root` in `main.css`. Key values:
- Primary orange: `--primary-orange: #F26C3B`
- Fonts: `--font-family` (Aeonik), `--font-highlight` (Neue Machina)
- Typography classes: `.section-title` (Neue Machina, uppercase), `.details-bold` (Aeonik 700), `.details-light` (Aeonik 300), `.body-text` (Aeonik 400)

New sections should follow the existing pattern: `<section>` with `.container` > `.section-header` (h2 + p) > content grid. Use `animate-on-scroll` class for scroll animations.

## Business Context

dor is a boutique software house from Uruguay. Primary service is **Staff Augmentation** (senior LATAM engineers). The landing page serves as the destination for cold email (Instantly.ai) and LinkedIn outreach campaigns targeting CTOs at SaaS/Fintech/Aviation companies.

Key marketing constraints:
- Never claim "15+ years experience" — the company was founded in 2023. Use "combined team experience" if needed.
- Use "minimal rotation" not "zero rotation" — no absolute guarantees on engineer retention.
- Use "rigorously vetted senior-level" not "5+ years of experience" — senior level is guaranteed, specific year count is not.
- The "Our Contributions" carousel projects (airports, MSC Cruises) are contributions by dor engineers, NOT dor-owned projects. Exception: TWARZ is dor's own product.

## Analytics

GA4 measurement ID: `G-ZQZ9PJ51JH`. Analytics only initialize after cookie consent. The `initializeGoogleAnalytics()` function in `index.html` tracks UTM parameters, section visibility, schedule-call clicks, email clicks, and service card interactions. Outreach links should use UTM params: `?utm_source=instantly&utm_medium=email&utm_campaign=...`
