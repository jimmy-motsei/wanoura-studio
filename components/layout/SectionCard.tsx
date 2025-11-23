"use client";

import { ReactNode } from "react";

export default function SectionCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className="w-full flex justify-center px-4 py-12 md:py-16">
      <div
        className={
          "w-full max-w-6xl rounded-2xl bg-white/95 shadow-xl ring-1 ring-neutral-200 p-6 md:p-12 " +
          className
        }
      >
        {children}
      </div>
    </section>
  );
}
