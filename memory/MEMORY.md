# GlowCush Project Memory

## Project Overview
- **Type**: Next.js 15 + Tailwind CSS 3 + Framer Motion landing page
- **Brand**: GlowCush — masculine identity engineering, 5-ebook system
- **Repo**: /Users/adeenadullah/developer/glowcode

## Design System Tokens
- Background: `#07080B` (charcoal-950), secondary `#111318` (charcoal-900)
- Steel accent: `#5BA4B8` — primary CTA color
- Violet accent: `#7D6FA3` — secondary accent
- Text: `#F5F5F5` primary, `#B0B8C1` secondary, `#6B7280` muted
- Fonts: Playfair Display (display), DM Sans (heading), Inter (body)

## Key Architecture
- CSS source: `app/globals.css` (has `@tailwind` directives + custom CSS)
  - ⚠️ Do NOT use `app/tailwind.css` — it's a stale pre-compiled artifact
- Tailwind config: `tailwind.config.cjs`
- Sections in: `app/components/sections/`
- UI atoms in: `app/components/ui/`
- Nav height: 72px — all hero sections use `paddingTop: '72px'`

## Critical Patterns
- All sections use inline `style={{ padding: 'clamp(...)' }}` for spacing to avoid breakpoint issues
- All colors use inline `style={{ color: '...' }}` for reliability over Tailwind classes
- Buttons use CSS classes: `btn-primary`, `btn-primary-sm`, `btn-primary-lg`, `btn-outline`
- Typography: `text-display`, `text-h2`, `text-h3`, `text-body-lg` are custom CSS clamp classes
- EbookMockups: `ebook-scroll` / `ebook-scroll-item` for mobile carousel (defined in globals.css)
- Orb animations: `animate-float-orb` / `animate-float-orb-delay` (custom @keyframes in globals.css)

## Build
- `npm run build` — runs cleanly with zero errors
- Framer Motion is installed and used for all animations
