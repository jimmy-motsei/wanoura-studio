"use client";
import { useEffect, useRef } from "react";

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);

  // Keep image height <= copy height
  useEffect(() => {
    const el = sectionRef.current;
    const copy = copyRef.current;
    if (!el || !copy) return;

    const setHeights = () => {
      el.style.setProperty("--copy-h", `${copy.offsetHeight}px`);
    };
    setHeights();

    const ro = new ResizeObserver(setHeights);
    ro.observe(copy);
    window.addEventListener("resize", setHeights);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setHeights);
    };
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      ref={sectionRef}
      className="relative bg-white border-t border-neutral-200"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <header className="mb-8">
          <h2 id="about-heading" className="text-[1.5rem] md:text-[1.75rem] leading-[1.2] tracking-[-0.03em] font-medium text-neutral-900">
            About Us
          </h2>
          <p className="mt-2 text-[13px] md:text-[14px] text-neutral-600">Meet the Founder</p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: Copy */}
          <div ref={copyRef} className="text-[13px] leading-relaxed text-neutral-900">
            <p>
              Onkgopotse Motsei is an award-winning sound engineer, composer, and musician based in Johannesburg, South Africa. With a foundation in live performance and session work, he has developed a unique ability to craft music and soundscapes that connect audiences and amplify stories. His work spans multiple genres and styles, blending influences from Neo-Soul, Jazz, RnB, Hip-Hop, and contemporary cinematic scoring to create immersive auditory experiences.
            </p>
            <p className="mt-4">
              Over the past 4–5 years, Onkgopotse has collaborated with globally recognized brands including Nike and Jägermeister, as well as innovative world-class artists such as Uncle Waffles. His expertise lies in translating creative visions into sound, whether that’s composing bespoke music for advertising, designing sound for branded media, or producing high-end audio experiences like Dolby Atmos mixes.
            </p>
            <p className="mt-4">
              Driven by a commitment to innovation and excellence, Onkgopotse now leads Wanoura, a creative agency where music, sound design, and storytelling converge. He combines technical mastery with a deep understanding of brand and narrative, ensuring every project not only resonates but leaves a lasting impression.
            </p>
          </div>

          {/* Right: Image */}
          <figure className="relative w-full self-start rounded-2xl overflow-hidden">
            <img
              src="/images/founder.jpeg"
              alt="Onkgopotse Motsei speaking on a microphone"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain"
              style={{ maxHeight: "var(--copy-h, 80vh)" }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
