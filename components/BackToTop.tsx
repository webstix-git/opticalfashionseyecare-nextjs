"use client";

import { useEffect, useState } from "react";
import { motionReduced } from "@/lib/a11y";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setVisible(window.scrollY > window.innerHeight);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.scrollTo({ top: 0, behavior: motionReduced() ? "instant" : "smooth" });
    // Keyboard activation reports detail 0; give those users a focus point at the top of the page.
    if (e.detail === 0) document.querySelector<HTMLElement>(".skip-link")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      aria-label="Back to top"
      onClick={toTop}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
