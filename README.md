# drlisagold.com

Next.js 15 migration of https://drlisagold.com off WordPress. See `/Users/lukesine/.claude/plans/snug-juggling-scone.md` for the full migration plan.

## Current state (Phase 1 scaffold complete)

- Next.js 15 App Router, TypeScript strict, Tailwind v3
- MDX-driven content pages under `src/content/pages/` rendered by `src/app/[...slug]/page.tsx`
- Home page hand-crafted in `src/app/page.tsx`
- Header with dropdown nav, Footer with partners and socials
- Shop landing + product pages (Phase 2 wires Stripe Checkout)
- Contact API route (Resend) and lead-capture API route (Loops)
- Sitemap, robots, OG image, 404 page
- Asset extraction script ready to run (`scripts/extract-assets.ts`)

## Setup

```bash
# 1. Install dependencies
pnpm install   # or npm install

# 2. Set env vars
cp .env.example .env.local
# then fill in RESEND_API_KEY, LOOPS_API_KEY, UPSTASH_* (these are only needed
# for the API routes to actually send; the site renders fine without them)

# 3. Extract assets from the WordPress backup
pnpm extract-assets
# This reads _wp-backup/.../uploads/ and emits public/img/, public/doc/,
# public/video/ plus src/lib/images.generated.ts.

# 4. Dev server
pnpm dev
# http://localhost:3000

# 5. Typecheck + build
pnpm typecheck
pnpm build
```

## Git

The repo is not yet initialized (the Bash classifier rejected the init during scaffold). Run:

```bash
git init -b main
git add -A
git commit -m "[Claude] Phase 1 scaffold"
```

Then connect to GitHub:

```bash
gh repo create drlisagold --private --source=. --push
```

## Deploy

```bash
pnpm dlx vercel link
pnpm dlx vercel --prod=false   # preview
```

Set env vars in Vercel project settings, then:

```bash
pnpm dlx vercel --prod
```

## Open items before full Phase 1 ship

- [ ] `pnpm install` (blocked locally during scaffold)
- [ ] Run `pnpm extract-assets` to pull images out of `_wp-backup/`
- [ ] Add real headshot / hero video references to `src/app/page.tsx` (currently placeholder)
- [ ] Coaching page imagery — AI-generate or source a real "teaching to surf" photo
- [ ] Set up Resend + Loops accounts, add API keys
- [ ] Create Vercel project + add envs
- [ ] First Playwright visual-compare run vs live site

## Structure

```
src/
  app/
    layout.tsx            # Root layout: fonts, header, footer, analytics
    page.tsx              # Home (hand-crafted TSX)
    [...slug]/page.tsx    # MDX catch-all for content pages
    shop/
      page.tsx            # Shop landing
      [slug]/page.tsx     # Product page
    api/
      contact/route.ts    # Contact form -> Resend
      lead/route.ts       # Lead capture -> Loops
    sitemap.ts
    robots.ts
    opengraph-image.tsx
    not-found.tsx
  components/
    site/                 # Header, Footer, MDXComponents map
    mdx/                  # MDX vocabulary: Hero, CTA, LeadCapture, Testimonial, PartnerCard, FeatureCard, Section, List, Stat, Callout
    ContactForm.tsx
  content/
    pages/                # MDX content files (one per page)
  lib/
    site.ts               # Name, socials, partners
    nav.ts                # Header + footer nav tree
    seo.ts                # buildMetadata helper
    utils.ts              # cn()
scripts/
  extract-assets.ts       # WP backup -> public/ optimized assets
  asset-manifest.json     # Curated allowlist of assets to pull
_wp-backup/               # Source WordPress backup (gitignored)
```

## Conventions

- MDX pages use components from `src/components/mdx/` as their vocabulary. When mom's admin asks Claude to edit a page, the agent sees the MDX file + the component signatures and is constrained to that vocabulary.
- Content edits go in `src/content/pages/*.mdx` only. Structural changes go in `src/components/`.
- No emojis in code unless the user explicitly asks.
