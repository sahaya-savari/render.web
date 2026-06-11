# Render.com Homepage Clone

A faithful recreation of render.com's homepage — same structure, dark aesthetic, and section flow — built as a single polished landing page. Logos and product illustrations will be rebuilt in code (CSS/SVG mockups) since Render's actual image assets are proprietary, but the layout and feel will match closely.

## Sections (top to bottom)

1. **Announcement bar** — purple banner with conference callout + link
2. **Navbar** — logo, nav links (Product, Pricing, Customers, Docs, Blog), Sign in / Get started buttons, sticky with blur
3. **Hero** — "Your fastest path to production for APIs & web apps" with animated rotating word, subheadline, "Start for free" + "Migrate" CTAs, subtle purple glow background
4. **Logo strip** — "Trusted by over 6 million builders" with 10 grayscale company logos (text-based recreations)
5. **"Click, click, done."** — 3-step cards (Select a service / Deploy your code / Render does the rest) with coded UI mockups: service picker list, deploy terminal, live service dashboard card
6. **Stack banner** — "Whatever your stack, it runs on Render" with two scrolling marquee rows of language/framework icons
7. **Feature bento grid** — "Deploy apps and agents with zero ops": hosting types card, full-stack previews, load-based autoscaling (with animated CPU/RAM graphic), durable workflows, enterprise Postgres, integrated logs & monitoring — each with mini UI mockups and "docs →" links
8. **Testimonial** — Base44 founder quote with logo carousel above it
9. **"Intuitive infrastructure, designed for builders"** — 8-item icon grid (runtimes, IaC, isolated environments, object storage "coming soon", key value, WebSockets, edge caching, managed TLS)
10. **"Stay secure and resilient by default"** — 6 security cards (private networking, DDoS protection, compliance, audit, encryption, RBAC) + Trust center links
11. **Final CTA** — "Start building" section surrounded by floating language icons (PHP, Python, Rust, etc.)
12. **Footer** — large multi-column footer (Platform, Solutions, Developers, Company, Legal), social icons, status indicator

## Design & Technical Details

- **Theme**: near-black background, purple/violet accent (Render's signature), light text — all defined as oklch design tokens in `src/styles.css`
- **Fonts**: distinctive sans (e.g. a grotesque display font) paired with mono for code/terminal mockups
- **Motion**: framer-motion scroll-reveal animations, hero word rotation, marquee logo rows, subtle hover lifts on cards
- **Structure**: one route (`src/routes/index.tsx`) composed of ~12 section components under `src/components/landing/`
- **Copy**: closely modeled on Render's messaging but rewritten — not copied verbatim
- **No backend needed** — purely static marketing page; CTAs are placeholder links

Secondary pages (Pricing, Docs, etc.) are out of scope for this pass but can be added as separate routes afterward.