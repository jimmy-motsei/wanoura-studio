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

// Build indexes (title + optional slug)
const TITLE_INDEX = new Map(WORKS.map(w => [norm(w.title), w]));
const SLUG_INDEX = new Map(WORKS.map(w => [norm(w.slug), w]));

// climb to the actual card container (li/article/[data-card]) if possible
function toCardContainer(start: HTMLElement, root: HTMLElement) {
  const firstHit =
    start.closest("#moving-pictures li, #moving-pictures article, #moving-pictures [data-card]") as HTMLElement | null;
  if (firstHit) return firstHit;
  // fallback: closest generic clickable wrapper
  return start.closest(
    "#moving-pictures button, #moving-pictures a, #moving-pictures [role='button'], #moving-pictures div"
  ) as HTMLElement | null;
}

export default function WorksVimeoBinder() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<{ title: string; vimeoId: string } | null>(null);

  React.useEffect(() => {
    const root = document.getElementById("moving-pictures");
    if (!root) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !root.contains(target)) return;

      const container = toCardContainer(target, root);
      if (!container) return;

      // Preferred: explicit data attribute (future-proof if we add it)
      const ds = (container.closest("[data-work]") as HTMLElement | null)?.dataset?.work;
      if (ds) {
        const bySlug = SLUG_INDEX.get(norm(ds));
        if (bySlug) {
          e.preventDefault(); e.stopPropagation();
          setActive({ title: bySlug.title, vimeoId: bySlug.vimeoId });
          setOpen(true);
          return;
        }
      }

      // Try heading nodes first, then whole container text
      const titleNode = container.querySelector("h1,h2,h3,h4,[data-title]") as HTMLElement | null;
      const rawTitle = titleNode?.innerText || container.getAttribute("aria-label") || container.innerText || "";
      const text = norm(rawTitle) || norm(container.innerText || container.textContent || "");

      // Exact-title containment match
      let match: { title: string; vimeoId: string } | null = null;
      for (const [key, w] of TITLE_INDEX) {
        if (text.includes(key)) {
          match = { title: w.title, vimeoId: w.vimeoId };
          break;
        }
      }
      if (!match) return; // no modal if we don't positively identify

      e.preventDefault();
      e.stopPropagation();
      setActive(match);
      setOpen(true);
    };

    // capture phase so inner elements (icon/circle) can't swallow the click
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
