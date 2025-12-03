"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  vimeoId?: string | null;
};

export default function VideoLightbox({ open, onClose, title, vimeoId }: Props) {
  const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (open && closeBtnRef.current) closeBtnRef.current.focus();
  }, [open]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const src = React.useMemo(() => {
    if (!open || !vimeoId) return "";
    const params = new URLSearchParams({
      autoplay: "1",
      muted: "0",
      controls: "1",
      title: "0",
      byline: "0",
      portrait: "0",
      dnt: "1",
      pip: "1",
      speed: "1",
      playsinline: "1",
    }).toString();
    return `https://player.vimeo.com/video/${vimeoId}?${params}`;
  }, [open, vimeoId]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Selected Work"}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/90"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // smooth cinematic ease
          >
            <div className="flex items-center justify-between px-4 py-3">
              <p className="text-sm text-white/80">{title ?? "Selected Work"}</p>
              <button
                ref={closeBtnRef}
                onClick={onClose}
                className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Close
              </button>
            </div>
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              {vimeoId ? (
                <iframe
                  key={vimeoId}
                  src={src}
                  title={title ?? "Selected Work"}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
