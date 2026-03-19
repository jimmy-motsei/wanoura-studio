"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const VideoLightbox = dynamic(() => import("@/components/work/VideoLightbox"), { ssr: false });

const ORDERED = ["my-waffles-tease", "velo-pr-stunt-jhb", "mamas-boy", "velo-pr-stunt-cpt"] as const;

const WORKS_BY_SLUG: Record<string, { title: string; vimeoId: string }> = {
  "my-waffles-tease": { title: "My Waffles (Tease)", vimeoId: "1132870462" },
  "velo-pr-stunt-jhb": { title: "Velo PR Stunt (Johannesburg)", vimeoId: "1171044153" },
  "mamas-boy": { title: "Mama's Boy", vimeoId: "1132870415" },
  "velo-pr-stunt-cpt": { title: "Velo PR Stunt (Cape Town)", vimeoId: "1171044061" },
};

type WorkItem = { title: string; vimeoId: string };

interface WorksVimeoBinderProps {
  containerId?: string;
}

export default function WorksVimeoBinder({ containerId = "moving-pictures" }: WorksVimeoBinderProps) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<WorkItem | null>(null);

  React.useEffect(() => {
    const root = document.getElementById(containerId);
    if (!root) return undefined;

    const resolveWork = (target: HTMLElement): WorkItem | null => {
      const card = target.closest<HTMLElement>("[data-work]");
      if (card?.dataset.work && WORKS_BY_SLUG[card.dataset.work]) {
        return WORKS_BY_SLUG[card.dataset.work];
      }

      const idxStr = target.closest<HTMLElement>("[data-card-index]")?.dataset.cardIndex;
      const idx = idxStr ? Number(idxStr) : NaN;
      if (Number.isFinite(idx)) {
        const slug = ORDERED[idx as 0 | 1 | 2 | 3];
        if (slug) return WORKS_BY_SLUG[slug];
      }
      return null;
    };

    const activateWork = (e: Event, work: WorkItem) => {
      e.preventDefault();
      e.stopPropagation();
      setActive(work);
      setOpen(true);
    };

    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (!root.contains(e.target)) return;

      const work = resolveWork(e.target);
      if (work) {
        activateWork(e, work);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (!root.contains(e.target)) return;
      if (e.key !== "Enter" && e.key !== " ") return;

      const work = resolveWork(e.target);
      if (work) {
        activateWork(e, work);
      }
    };

    root.querySelectorAll<HTMLElement>("[data-work]").forEach((el) => {
      const isInteractive = el.matches("a,button,[role='button']") || el.querySelector("a,button,[role='button']");
      if (!isInteractive) {
        el.tabIndex = el.tabIndex === -1 ? 0 : el.tabIndex;
        if (!el.getAttribute("role")) {
          el.setAttribute("role", "button");
        }
      }
    });

    root.addEventListener("click", handleClick, true);
    root.addEventListener("keydown", handleKeyDown, true);

    return () => {
      root.removeEventListener("click", handleClick, true);
      root.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [containerId]);

  return (
    <VideoLightbox
      open={open}
      onClose={() => setOpen(false)}
      title={active?.title}
      vimeoId={active?.vimeoId}
    />
  );
}
