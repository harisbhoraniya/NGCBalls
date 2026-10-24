"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // re-runs on every route change

  useEffect(() => {
    // Small delay lets the new page's DOM render first
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".animate-fade-up:not(.is-visible)");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
      );

      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]); // ← key fix: runs on every page navigation

  return <>{children}</>;
}