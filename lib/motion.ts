// lib/motion.ts
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const fadeUp = (delay = 0, y = 12) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.45, ease: easeOutExpo, delay },
});

export const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.6 },
  transition: { duration: 0.4, ease: easeOutExpo, delay },
});

// Simple prefers-reduced-motion helper
export const isReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
