"use client";
import { useEffect } from "react";

/**
 * useScrollAnimation
 *
 * Watches every element with class `animate-fade-up` (already defined
 * in globals.css) and adds `is-visible` when it enters the viewport.
 * Works with the stagger helpers `.animate-delay-1` through `.animate-delay-5`.
 *
 * Drop this into your root layout or any page:
 *   useScrollAnimation();
 *
 * Mark sections in JSX:
 *   <section className="animate-fade-up animate-delay-2">…</section>
 */
export function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".animate-fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animation = ""; // clear the opacity:0 initial state
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/**
 * useParallax
 *
 * Attaches a subtle parallax shift to any ref element.
 * speed = 0.2 → moves 20% as fast as the scroll.
 *
 * const heroRef = useParallax(0.25);
 * <div ref={heroRef}>…</div>
 */
import { useRef } from "react";

export function useParallax(speed = 0.25) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleScroll = () => {
      el.style.transform = `translateY(${window.scrollY * speed}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}