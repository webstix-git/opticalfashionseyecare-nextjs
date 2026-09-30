"use client";

import { useEffect } from "react";
import { motionReduced } from "@/lib/a11y";

/** Fades in `[data-reveal]` elements that start below the fold. */
export default function RevealObserver() {
  useEffect(() => {
    if (motionReduced()) return;
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "none";
          io.unobserve(el);
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    const timer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.style.opacity = "0";
        el.style.transform = "translateY(28px)";
        el.style.transition = "opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1)";
        io.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, []);

  return null;
}
