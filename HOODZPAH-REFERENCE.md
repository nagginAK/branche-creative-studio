# Reference audit: Hoodzpah (hoodzpahdesign.com) vs BC Studio

Date: 2026-07-09
Reference: https://hoodzpahdesign.com — brand identity + type design studio, Southern California. WordPress/WPBakery + WooCommerce.
Subject: branchecreative.co — Next.js 15 (App Router) + Tailwind, deployed on Vercel.

The point of this doc is not to clone Hoodzpah. It's to name what makes their site feel like a serious studio, mark what BC Studio already has, and prioritize the gaps.

---

## 1. What makes the reference work (design language)

- **Full dark canvas.** Near-black background site-wide, warm cream type. The dark isn't a hero section — it's the whole identity.
- **Editorial serif display type with italic emphasis.** The hero mixes roman + italic in one sentence ("*Creating* brand identities that people *root for*"). Type IS the design; almost no stock imagery.
- **Custom script accents.** "Shine On." in their own font — they sell fonts, and the site is the specimen.
- **Persistent side-rail chrome.** Vertical year "2026", copyright mark, color bar, crosshair, social icons pinned to the viewport edges. Cheap to build, huge "designed object" energy.
- **Personality-first microcopy.** "Join Usssss", "The newsletter no one asked for… lightly seasoned with typos", Simpsons GIF. Voice is a feature.
- **Motion.** Video hero (Vimeo mp4 loop), video thumbnails in the work grid, logo carousel.

## 2. Feature-by-feature comparison

### Navigation
| Hoodzpah | BC Studio | Status |
|---|---|---|
| Logo in custom script font | Plain tracking-wide text "BC STUDIO" | Gap (brand mark) |
| Dropdown submenus (About → Team / Press / Blog) | Flat 4-link nav | OK for current size |
| Search, Login/account, cart | None | Skip — only needed with a shop |
| Mobile menu | **None — nav links overflow/cram on small screens** | **Gap (bug-level)** |

### Hero
| Hoodzpah | BC Studio | Status |
|---|---|---|
| Full-screen dark hero, center-aligned serif statement | Dark SVG-motif hero (new), bottom-left bold sans H1 | Partial |
| Background video loop (Vimeo) | Static SVG | Gap (optional) |
| Roman/italic mixed display type | Single-weight bold sans | Gap (typography) |

### Work / portfolio
| Hoodzpah | BC Studio | Status |
|---|---|---|
| Filterable grid (All / Branding / Illustration / Packaging / Digital / Custom Type) | Linear text list, no filters | Gap |
| Image/video thumbnail per project | **Zero imagery — text-only case studies** | **Gap (highest impact)** |
| Individual case-study pages per project | None — summaries only on /work | Gap |
| Category tags per project | Scope line (text) | Partial |

### Social proof
| Hoodzpah | BC Studio | Status |
|---|---|---|
| Client logo carousel (Netflix, Nike, Disney, Target…) | None | Gap |
| Pull-quote testimonials with names (RedBull, SeatGeek, ILM) | One anonymous positioning quote on /work | Gap |

### Content / marketing
| Hoodzpah | BC Studio | Status |
|---|---|---|
| Blog + Press & Events pages | None | Later |
| Newsletter signup (Mailchimp + popup + CAPTCHA) | None | Later |
| Shop (fonts, books, merch — WooCommerce) | None | Skip — different business model |
| Course (external) | None | Skip |

### Conversion
| Hoodzpah | BC Studio | Status |
|---|---|---|
| "Ready to start a project?" → contact | Contact form + API route, phone number, **Stripe deposit checkout** | **BC Studio is ahead here** |

### Footer
| Hoodzpah | BC Studio | Status |
|---|---|---|
| Custom office illustration + script art | Plain utility footer | Gap (brand moment) |
| 5 social platforms, all live links | IG + LinkedIn icons with `href="#"` **dead links** | **Gap (bug-level)** |
| Policies incl. shipping/licensing | Privacy + Terms | OK |

### Technical / SEO
| Hoodzpah | BC Studio | Status |
|---|---|---|
| OG image, twitter cards, per-page titles | Single global title/description, **no OG image, no per-page metadata** | Gap |
| Custom favicon/brand icon | Default Next.js favicon assets (file.svg, globe.svg, next.svg still in /public) | Gap (cleanup) |
| Custom fonts (their own foundry) | Geist (Next.js default font) | Gap (typography) |

## 3. Prioritized backlog for BC Studio

### P0 — credibility bugs (do first, small)
1. Fix footer social icons: real Instagram/LinkedIn URLs or remove them. Dead `#` links on a studio site undermine the pitch.
2. Mobile nav: add a hamburger/slide-down menu; current nav breaks on phones.
3. Delete leftover Next.js template SVGs from /public; add a real favicon + OG image.
4. Per-page `metadata` exports (title/description per route) + `openGraph` block in layout.

### P1 — the "looks like a real studio" tier
5. Project imagery: even 1 strong visual per case study (brand board, mockup, screenshot) transforms /work. This is the single biggest gap vs the reference.
6. Case-study detail pages (`/work/[slug]`) — summary, images, scope, outcome, next-project link.
7. Go dark site-wide (user preference): extend the new dark hero language (#0E0B07 + #F2EDE4 + gold #CDA850) to all sections/pages instead of cream. One palette, committed.
8. Typography upgrade: pair a display serif (e.g. an editorial serif with true italics) with the sans; use italic emphasis in headlines the way the reference does.
9. Client/project logo strip + 1–3 named testimonials on the homepage.

### P2 — brand chrome & motion
10. Side-rail details: vertical "2026", © mark, gold color bar, socials pinned on desktop.
11. Work-grid filters by scope (Branding / Web / E-commerce / POS).
12. Subtle motion: scroll-reveal on sections, hover states on project cards; optional short hero video loop.
13. Footer brand moment: branch illustration / oversized "B" echoing the hero SVG.

### P3 — marketing engine (only when there's content)
14. Newsletter capture (Resend/Mailchimp) — with BC Studio voice, not a generic "Subscribe".
15. Blog / notes section for SEO and point-of-view writing.

## 4. What NOT to copy

- WooCommerce shop, cart, login — Hoodzpah sells fonts and merch; BC Studio sells services. The Stripe deposit flow already covers the transaction need.
- Popup newsletter modal on first visit — high-friction for a services site with no content engine yet.
- Their tone verbatim — the self-deprecating humor is *their* brand. BC Studio's voice ("businesses that mean business") is drier; keep it.

## 5. Current BC Studio inventory (for reference)

Pages: `/` `/work` `/services` `/about` `/contact` `/privacy` `/terms`
Components: `Nav` (fixed, transparent variant, active states, CTA), `Footer`
Working features: contact form → `/api/contact`, Stripe deposit link, tel: links, responsive service grid, dark SVG hero (`/bc-studio-hero-bg.svg`), process section (Discovery → Direction → Refinement → Delivery), 5 case studies (Ventus, Reneutra, Minotia, Café Soltau, Sherel & Shawnel).
Stack: Next.js 15, Tailwind 4, Geist font, Vercel (manual CLI deploys — Git integration not yet connected).
