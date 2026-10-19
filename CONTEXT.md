# CONTEXT.md — Wanoura (dreamwanoura.com)

> Read this first at the start of every session. Update the "Open items" and "Change log" sections at the end of each session.

## What this is
- Marketing site for **Wanoura**, a sonic-identity / sound-design studio (family member's small business). Brand name is always lowercase "wanoura".
- Built and managed by Jimmy Motsei (Maru Online). Owner rarely needs analytics detail — Jimmy monitors.
- Single-page site. Live at **https://dreamwanoura.com**.

## Stack & hosting
- Next.js 14 (App Router), React 18, TypeScript, Tailwind, Framer Motion.
- Repo: `github.com/jimmy-motsei/wanoura-studio` — `main` auto-deploys to Vercel production.
- Vercel: team `maru-online` (team_b6S53OWZZwtfC3SbYSDbhwFb), project `wanoura-studio` (prj_b505J6rqkRL48AVpr2nKVpDpohaG). Hobby plan → runtime logs kept ~1 hour only.
- DNS: **Xneelo** (ns*.host-h.net / dns-h.com). Jimmy does not currently have the Xneelo login.
  - Apex `dreamwanoura.com` → A record to Vercel; attached to the project.
  - `www` → CNAME to Vercel, but **not attached to this project** (see open items).
- Push from Jimmy's Mac (iTerm2) over SSH: `git pull --rebase --autostash && git push`. Claude sessions commit locally but cannot push.
- Google Fonts (Inter, Inter Tight) are loaded via `next/font` — cloud build sandboxes without Google Fonts access need a temporary font stub to build (never commit it).

## Key files
- `app/page.tsx` — section order: Hero, AboutUs, SelectedWork, SpecialistServices, Capabilities, MovingPictures, Clients, Contact, Footer.
- `app/layout.tsx` — metadata (metadataBase, canonical, GSC verification tag), Navbar, `<GoogleAnalytics />`.
- `components/work/OriginalCompositionsLight.tsx` — "Sound made for moving pictures" cards (`works` array: slug, client, title, role, duration, year, image).
- `components/work/WorksVimeoBinder.tsx` — maps card slug → Vimeo ID (`ORDERED` + `WORKS_BY_SLUG`). **Swapping a video = edit both files.**
- `components/work/VideoLightbox.tsx` — shared Vimeo player params for all videos (autoplay, controls, etc.).
- `components/CookieBanner.tsx` + `components/GoogleAnalytics.tsx` — consent + GA4 loader.
- `app/api/contact/route.ts` — contact form → Microsoft Graph sendMail.
- `app/sitemap.ts`, `app/robots.ts` — generate /sitemap.xml and /robots.txt.
- `next.config.mjs` — Content-Security-Policy (production only). New third-party scripts/embeds must be added here or they will be blocked.
- `public/client-logos/` — card logos (64px box, light background → use dark/transparent marks).

## Moving Pictures (videos) — current
| Slot | Slug | Client / title | Vimeo ID |
|---|---|---|---|
| 1 | my-waffles-tease | Jägermeister — Uncle Waffles For The Brooklyn Mirage | 1132870462 |
| 2 | velo-pr-stunt-jhb | Velo — PR Stunt (Johannesburg) | 1171044153 |
| 3 | mukuru | Mukuru — Mukuru (Sound Design, 2026, 01:00) | 1224968379 |
| 4 | velo-pr-stunt-cpt | Velo — PR Stunt (Cape Town) | 1171044061 |
Videos live on the **Wanoura Pty Ltd** Vimeo account and must be embeddable. Section subtitle still reads "4 selected works · 2024" (not updated for the 2026 piece — owner's call).

## Contact form
- POST `/api/contact` → Microsoft Graph client-credentials flow → sends as/to `hello@dreamwanoura.com` (Reply-To = visitor), copy saved to Sent Items.
- Vercel env vars: `MS_TENANT_ID`, `MS_CLIENT_ID`, `MS_CLIENT_SECRET` (set 18 Aug 2026); `MS_SENDER_EMAIL` / `MS_RECIPIENT_EMAIL` default to hello@.
- Success path logs nothing; failures log "Contact error" to Vercel runtime logs.
- **Client secret expires** (max 24 months; possibly 6 months if portal default was kept) — when it lapses the form fails silently.

## Analytics & search
- **GA4**: account "Wanoura" (a412392753) → property dreamwanoura.com (p559528412), ZA time, ZAR. Web stream 16158642483, **Measurement ID G-7CWDHLJM1G**. Owned under Jimmy's Google login.
  - Loads **only after the visitor clicks Accept** on the cookie banner (localStorage key `wanoura-cookie-consent`, event `wanoura-consent-change`). Decline = nothing sent to Google. POPIA-aligned; banner copy says so.
  - Custom event `contact_submit` fires on successful form submit (ContactCTALight).
- **Search Console**: URL-prefix property `https://dreamwanoura.com/`, verified by **HTML meta tag** (`verification.google` in layout.tsx — do not remove). Sitemap submitted 19 Oct 2026 (Success). Linked to the GA4 property.
  - Domain property `dreamwanoura.com` also created but **unverified** — needs TXT `google-site-verification=zitlTdr2yP3qgT6PULfeJlBJuCAnjUeIzUBvSQu0fu4` at Xneelo.

## Open items
- [ ] **www redirect**: In Vercel → Settings → Domains add `www.dreamwanoura.com` → redirect (permanent) to `dreamwanoura.com`. DNS already points to Vercel. As of 13 Oct 2026 crawl Google chose www as canonical and had **not indexed the apex** — canonical tag + reindex request (19 Oct) should fix; re-check URL Inspection ~26 Oct.
- [ ] **GA4 key event**: once `contact_submit` has been received, star it as a key event (Admin → Events).
- [ ] **M365 security** (needs tenant admin): note client-secret expiry date; restrict the app to hello@ via Exchange RBAC for Applications, then remove the tenant-wide Mail.Send application permission and re-test the form.
- [ ] **GSC domain property**: add the TXT record when Xneelo access is available.
- [ ] Local `CLAUDE.md` deletion on Jimmy's Mac is uncommitted — decide keep/delete.

## Change log
- **2026-10-19** — Replaced "Mama's Boy" with "Mukuru" (Vimeo 1224968379) + Mukuru star-mark logo; rebuilt favicon (olive-on-cream mark, 16/32/48 + apple-touch-icon); added sitemap.xml, robots.txt, canonical URL; consent-gated GA4; GSC verification meta tag; sitemap submitted, homepage reindex requested, GSC↔GA4 linked. Contact form (Graph) confirmed working. ~2h10m.
- 2026-08-18 — Contact form switched to Microsoft Graph (PR #6).
- 2026-03-19 — Love Letters & Umfana ka Ma replaced with Velo PR Stunt videos.
