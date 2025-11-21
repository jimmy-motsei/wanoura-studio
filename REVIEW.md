# Wanoura Studio Review Notes

## Project Snapshot
- Next.js 14.2.15 (App Router) with React 18.3.1 and Framer Motion 12.23.24.
- App structure uses `app/layout.tsx` for global shell (navbar, Vimeo lightbox binder) and `app/page.tsx` for the homepage sections.
- Styling relies on Tailwind CSS (v4) utilities plus `app/globals.css`; some components also use CSS modules (e.g., `components/WorkCard.module.css`).

## Quick Observations
- Navbar includes a "Work" anchor that points to `#selected-work`, but the homepage never renders the `SelectedWorkLight` section, leaving the link broken.
- Moving-pictures buttons are wired to a `VideoLightbox` via `WorksVimeoBinder`, which attaches event listeners globally in `app/layout.tsx`.
- Several image assets use plain `<img>` tags rather than `next/image`, missing out on built-in optimization and responsive sizing.
