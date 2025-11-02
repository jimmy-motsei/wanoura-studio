"use client";
import * as React from "react";
import VideoLightbox from "@/components/VideoLightbox";
import { WORKS } from "@/lib/works";

// Normalize text for matching (case, diacritics, quotes, dashes, extra spaces)
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/[’‘´`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim();

// Index works by normalized title
const INDEX = new Map(WORKS.map(w => [norm(w.title), w]));

export default function WorksVimeoBinder() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<{ title: string; vimeoId: string } | null>(null);

  React.useEffect(() => {
    const root = document.getElementById("moving-pictures");
    if (!root) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !root.contains(target)) return;

      // Find the nearest "card-like" container
      const card = target.closest("#moving-pictures button, #moving-pictures a, #moving-pictures [role='button'], #moving-pictures li, #moving-pictures article, #moving-pictures div") as HTMLElement | null;
      if (!card) return;

      // Prefer explicit title nodes; fall back to aria-label; then full text
      const titleNode = card.querySelector("h1,h2,h3,h4,[data-title]") as HTMLElement | null;
      const rawTitle = titleNode?.innerText || card.getAttribute("aria-label") || card.textContent || "";
      const n = norm(rawTitle);

      // Try exact-contains match against our works index
      let match = null as { title: string; vimeoId: string } | null;
      for (const [key, w] of INDEX) {
        if (n.includes(key)) { match = { title: w.title, vimeoId: w.vimeoId }; break; }
      }
      if (!match) return;

      e.preventDefault();
      e.stopPropagation();
      setActive(match);
      setOpen(true);
    };

    // Capture phase so overlays don't swallow the click
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
