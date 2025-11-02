"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const VideoLightbox = dynamic(() => import("@/components/VideoLightbox"), { ssr: false });

const ORDERED = ["my-waffles-tease", "love-letters-to-my-mom", "mamas-boy", "umfana-ka-ma"] as const;

const WORKS_BY_SLUG: Record<string, { title: string; vimeoId: string }> = {
  "my-waffles-tease": { title: "My Waffles (Tease)", vimeoId: "1132870462" },
  "love-letters-to-my-mom": { title: "Love Letters to my Mom", vimeoId: "1132870361" },
  "mamas-boy": { title: "Mama’s Boy", vimeoId: "1132870415" },
  "umfana-ka-ma": { title: "Umfana ka Ma", vimeoId: "1132873566" },
};

export default function WorksVimeoBinder() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<{ title: string; vimeoId: string } | null>(null);

  React.useEffect(() => {
    let root: HTMLElement | null = null;
    let detach: (() => void) | undefined;

    const resolve = (target: HTMLElement) => {
      const card = target.closest<HTMLElement>("[data-work]");
      if (card?.dataset.work && WORKS_BY_SLUG[card.dataset.work]) return WORKS_BY_SLUG[card.dataset.work];

      const idxStr = target.closest<HTMLElement>("[data-card-index]")?.dataset.cardIndex;
      const idx = idxStr ? Number(idxStr) : NaN;
      if (Number.isFinite(idx)) {
        const slug = ORDERED[idx as 0 | 1 | 2 | 3];
        if (slug) return WORKS_BY_SLUG[slug];
      }
      return null;
    };

    const onClick = (e: MouseEvent) => {
      if (!root || !(e.target instanceof HTMLElement)) return;
      if (!root.contains(e.target)) return;
      const work = resolve(e.target);
      if (!work) return;
      e.preventDefault();
      e.stopPropagation();
      setActive(work);
      setOpen(true);
    };

    const onKey = (e: KeyboardEvent) => {
      if (!root || !(e.target instanceof HTMLElement)) return;
      if (!root.contains(e.target)) return;
      if (e.key !== "Enter" && e.key !== " ") return;
      const work = resolve(e.target);
      if (!work) return;
      e.preventDefault();
      e.stopPropagation();
      setActive(work);
      setOpen(true);
    };

    const attach = () => {
      root = document.getElementById("moving-pictures");
      if (!root) return false;

      // Safety: make wrappers keyboard-activatable when not a button
      root.querySelectorAll<HTMLElement>("[data-work]").forEach((el) => {
        if (!el.matches("a,button,[role='button']") && !el.querySelector("a,button,[role='button']")) {
          el.tabIndex ||= 0;
          el.setAttribute("role", el.getAttribute("role") || "button");
        }
      });

      root.addEventListener("click", onClick, true);
      root.addEventListener("keydown", onKey, true);
      detach = () => {
        root?.removeEventListener("click", onClick, true);
        root?.removeEventListener("keydown", onKey, true);
      };
      return true;
    };

    if (!attach()) {
      const obs = new MutationObserver(() => {
        if (attach()) obs.disconnect();
      });
      obs.observe(document.body, { childList: true, subtree: true });
      detach = () => obs.disconnect();
    }

    return () => detach?.();
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
