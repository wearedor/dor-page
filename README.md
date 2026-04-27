# dør Landing Page

Landing page for [wearedor.com](https://wearedor.com) — a boutique software house from Uruguay specializing in staff augmentation with senior LATAM engineers.

## Quick Start

No build step required. Open locally with:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## Project Structure

```
index.html              — Main landing page
success.html            — Post-form-submission thank you page
assets/
  css/
    main.css            — Core styles, variables, all section layouts
    components.css      — Reusable UI components (modals, tooltips, badges)
    responsive.css      — Breakpoint overrides (mobile, tablet, desktop)
  js/
    animations.js       — Scroll-triggered animations (Intersection Observer)
    carousel.js         — Our Contributions carousel (scroll-based, touch/swipe)
    cookie-consent.js   — Cookie consent banner
    main.js             — Mobile menu, smooth scroll, GA4 event tracking
  images/
    fonts/              — Brand fonts (Aeonik, Neue Machina)
    icons/              — Section icons
    logos/              — dør logos (SVG + PNG, white + black variants)
    modules/            — Service card illustrations
    success_cases/      — Carousel background images
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Orange | `#F26C3B` | CTAs, accents, icons |
| Black | `#000000` | Backgrounds, text |
| White | `#FFFFFF` | Backgrounds, text |
| Accent Yellow | `#DBB957` | Secondary accents |
| Accent Green | `#94FBAB` | Result data points, hero secondary button |
| Accent Purple | `#D6D1F5` | Decorative accents |

## Brand Fonts

- **Aeonik** — Body text, details (`--font-family`)
- **Neue Machina** — Section titles, hero headline, stat numbers (`--font-highlight`)

## External Dependencies

Loaded via CDN (no local copies):
- [Font Awesome 6.0.0](https://fontawesome.com/) — Icons
- [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter) — Fallback font

## Analytics

GA4 Measurement ID: `G-ZQZ9PJ51JH`

Analytics initialize only after cookie consent. Tracked events:
- UTM parameter attribution (for Instantly.ai / LinkedIn campaigns)
- Schedule call clicks (with section context)
- Email link clicks
- Service card "How it works" expand interactions
- Section visibility (scroll depth)
- Outbound link clicks

### UTM Usage

Append UTM parameters to outreach links for campaign attribution:

```
https://wearedor.com?utm_source=instantly&utm_medium=email&utm_campaign=q1-cto-saas
```

## Deployment

Static site — deploy to any static hosting (Netlify, Vercel, GitHub Pages, S3). No build step needed.
