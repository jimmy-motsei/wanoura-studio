"use client";
import * as React from "react";
import VideoLightbox from "@/components/VideoLightbox";
import { WORKS } from "@/lib/works";

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

// CSS selectors that likely represent a single card container
const CARD_SEL = "li, article, [data-card], [data-card-index]";

export default function WorksVimeoBinder() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<{ title: string; vimeoId: string } | null>(null);

  React.useEffect(() => {
    const root = document.getElementById("moving-pictures");
    if (!root) return;

    // Pre-index all visible cards by DOM order for positional fallback
    const cards = Array.from(root.querySelectorAll(CARD_SEL))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);

    // tag them with a positional index if not present
    cards.forEach((el, i) => {
      if (!el.dataset.cardIndex) el.dataset.cardIndex = String(i);
    });

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !root.contains(target)) return;

      // 1) climb to the nearest known card container
      let container = target.closest(CARD_SEL) as HTMLElement | null;

      // fallback: find the first card that contains the target
      if (!container) {
        container = cards.find(el => el.contains(target)) ?? null;
        if (!container) return;
      }

      // 2) if a data-work (slug) is present anywhere up the tree, use it
      const withSlug = container.closest("[data-work]") as HTMLElement | null;
      const slug = withSlug?.dataset?.work;
      if (slug) {
        const hit = SLUG_INDEX.get(norm(slug));
        if (hit) {
          e.preventDefault(); e.stopPropagation();
          setActive({ title: hit.title, vimeoId: hit.vimeoId });
          setOpen(true);
          return;
        }
      }

      // 3) try heading nodes / aria-label / inner text
      const titleNode = container.querySelector("h1,h2,h3,h4,[data-title]") as HTMLElement | null;
      const rawTitle = titleNode?.innerText || container.getAttribute("aria-label") || container.innerText || "";
      const text = norm(rawTitle);

      for (const [key, w] of TITLE_INDEX) {
        if (text.includes(key)) {
          e.preventDefault(); e.stopPropagation();
          setActive({ title: w.title, vimeoId: w.vimeoId });
          setOpen(true);
          return;
        }
      }

      // 4) positional fallback: use the card's dataset index → WORKS[index]
      const idx = Number(container.dataset.cardIndex ?? "-1");
      if (!Number.isNaN(idx) && idx >= 0 && idx < WORKS.length) {
        const w = WORKS[idx];
        e.preventDefault(); e.stopPropagation();
        setActive({ title: w.title, vimeoId: w.vimeoId });
        setOpen(true);
        return;
      }
    };

    // capture phase so inner elements can't swallow the click
    root.addEventListener("click", onClick, true);
    return () => root.removeEventListener("click", onClick, true);
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
