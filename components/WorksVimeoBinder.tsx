"use client";
import * as React from "react";
import VideoLightbox from "@/components/VideoLightbox";
import { WORKS } from "@/lib/works";

// normalize to compare innerText reliably
const n = (s: string) => s.replace(/\s+/g, " ").trim().toLowerCase();

export default function WorksVimeoBinder() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<{ title: string; vimeoId: string } | null>(null);

  React.useEffect(() => {
    const root = document.getElementById("moving-pictures");
    if (!root) return;

    const onClick = (e: MouseEvent) => {
      // Walk up from target to the nearest card-like element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const card = target.closest("button, a, [role='button'], li, article, div");
      if (!card || !root.contains(card)) return;

      // Match by title text appearing within the card
      const text = n(card.textContent || "");
      const match = WORKS.find(w => text.includes(n(w.title)));
      if (!match) return;

      // Prevent default navigation and open lightbox
      e.preventDefault();
      e.stopPropagation();
      setActive({ title: match.title, vimeoId: match.vimeoId });
      setOpen(true);
    };

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
