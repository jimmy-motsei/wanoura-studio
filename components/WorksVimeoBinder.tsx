"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import { WORKS } from "@/lib/works";

// Dynamic import keeps the heavy iframe UI out of the main bundle
const VideoLightbox = dynamic(() => import("@/components/VideoLightbox"), { ssr: false });

// Normalize for robust text matching
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/[’‘´`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim();

const TITLE_INDEX = new Map(WORKS.map(w => [norm(w.title), w]));
const SLUG_INDEX  = new Map(WORKS.map(w => [norm(w.slug),  w]));

// Likely card containers
const CARD_SEL = "li, article, [data-card], [data-card-index]";

export default function WorksVimeoBinder() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<{ title: string; vimeoId: string } | null>(null);

  React.useEffect(() => {
    const root = document.getElementById("moving-pictures");
    if (!root) return;

    const cards = Array.from(root.querySelectorAll(CARD_SEL))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);

    // Make non-interactive cards keyboard-focusable
    cards.forEach((el, i) => {
      if (!el.dataset.cardIndex) el.dataset.cardIndex = String(i);
      const interactive = el.matches("a,button,[role='button']") || el.querySelector("a,button,[role='button']");
      if (!interactive) {
        if (!el.hasAttribute("tabindex")) el.tabIndex = 0;
        if (!el.hasAttribute("role")) el.setAttribute("role", "button");
        if (!el.getAttribute("aria-label")) {
          const t = el.querySelector("h1,h2,h3,h4")?.textContent?.trim();
          if (t) el.setAttribute("aria-label", t);
        }
      }
    });

    const resolveWork = (container: HTMLElement) => {
      // 1) slug via data-work (future-proof)
      const slug = (container.closest("[data-work]") as HTMLElement | null)?.dataset?.work;
      if (slug) {
        const hit = SLUG_INDEX.get(norm(slug));
        if (hit) return hit;
      }
      // 2) title text in heading / aria-label / innerText
      const titleNode = container.querySelector("h1,h2,h3,h4,[data-title]") as HTMLElement | null;
      const rawTitle = titleNode?.innerText || container.getAttribute("aria-label") || container.innerText || "";
      const text = norm(rawTitle);
      for (const [key, w] of TITLE_INDEX) {
        if (text.includes(key)) return w;
      }
      // 3) positional fallback
      const idx = Number(container.dataset.cardIndex ?? "-1");
      if (!Number.isNaN(idx) && idx >= 0 && idx < WORKS.length) return WORKS[idx];
      return null;
    };

    const openForTarget = (target: HTMLElement) => {
      // Prefer the nearest card container; fallback to any card that contains the target
      let container = target.closest(CARD_SEL) as HTMLElement | null;
      if (!container) container = cards.find(el => el.contains(target)) ?? null;
      if (!container) return false;

      const hit = resolveWork(container);
      if (!hit) return false;

      setActive({ title: hit.title, vimeoId: hit.vimeoId });
      setOpen(true);
      return true;
    };

    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t || !root.contains(t)) return;
      if (openForTarget(t)) { e.preventDefault(); e.stopPropagation(); }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t || !root.contains(t)) return;
      const key = e.key;
      if (key === "Enter" || key === " ") {
        if (openForTarget(t)) { e.preventDefault(); e.stopPropagation(); }
      }
    };

    root.addEventListener("click", onClick, true);     // capture: avoid inner interceptors
    root.addEventListener("keydown", onKeyDown, true); // keyboard support
    return () => {
      root.removeEventListener("click", onClick, true);
      root.removeEventListener("keydown", onKeyDown, true);
    };
  }, []);

  return (
    <VideoLightbox
      open={open}
      onClose={() => setOpen(false)}
      title={active?.title}
      vimeoId={active?.vimeoId}
    />
  );
}
