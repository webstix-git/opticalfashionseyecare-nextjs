"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import ImageSlot from "@/components/ImageSlot";
import { motionReduced, useReducedMotion } from "@/lib/a11y";
import { doctors } from "@/lib/content";
import styles from "./Doctors.module.css";

const count = doctors.length;
const AUTOPLAY_MS = 4000;
// Three copies so there is always a full set on either side of the visible window.
const loop = [...doctors, ...doctors, ...doctors];

export default function Doctors() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const indexRef = useRef(count);
  const [index, setIndex] = useState(count);
  const [animate, setAnimate] = useState(true);
  const [perView, setPerView] = useState(4);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const reducedMotion = useReducedMotion();

  const moveTo = (i: number) => {
    indexRef.current = i;
    setIndex(i);
  };

  // Once a slide lands in a copied set, jump silently to the same card in the middle set.
  const recenter = () => {
    const i = indexRef.current;
    if (i >= 2 * count) {
      setAnimate(false);
      moveTo(i - count);
    } else if (i < count) {
      setAnimate(false);
      moveTo(i + count);
    }
  };

  useEffect(() => {
    if (animate) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setAnimate(true));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [animate]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const read = () => setPerView(parseInt(getComputedStyle(el).getPropertyValue("--per"), 10) || 1);
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);

  const go = (direction: 1 | -1) => {
    const next = indexRef.current + direction;
    if (next < 0 || next > loop.length - perView) return;
    moveTo(next);
    if (motionReduced()) recenter();
  };

  // Manual navigation bumps `tick`, which restarts the countdown so a click never gets an immediate auto-advance after it.
  const nudge = (direction: 1 | -1) => {
    go(direction);
    setTick((t) => t + 1);
  };

  const goRef = useRef(go);
  useEffect(() => {
    goRef.current = go;
  });

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") goRef.current(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, tick, reducedMotion]);

  return (
    <section id="doctors" aria-labelledby="doc-h" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div data-reveal="" className={styles.head}>
          <p className="eyebrow">Our doctors</p>
          <h2 id="doc-h" className="section-title">
            Meet the Doctors Behind Your Care.
          </h2>
        </div>
        <div
          className={styles.carousel}
          role="region"
          aria-roledescription="carousel"
          aria-label="Our doctors"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
          }}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) nudge(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div ref={viewportRef} className={styles.viewport}>
            <div
              className={`${styles.track} ${animate ? "" : styles.still}`}
              style={{ "--i": index } as CSSProperties}
              onTransitionEnd={(e) => {
                if (e.target === e.currentTarget && e.propertyName === "transform") recenter();
              }}
            >
              {loop.map((d, i) => (
                <figure key={`${d.name}-${i}`} className={styles.card} aria-hidden={i < index || i >= index + perView}>
                  <div className={styles.portrait}>
                    <ImageSlot placeholder={d.photo} src={d.src} alt={`Portrait of ${d.name}`} position="center top" sizes="320px" />
                  </div>
                  <figcaption>
                    <span className={styles.name}>{d.name}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <button type="button" aria-label="Previous doctor" className={`${styles.arrow} ${styles.prev}`} onClick={() => nudge(-1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button type="button" aria-label="Next doctor" className={`${styles.arrow} ${styles.next}`} onClick={() => nudge(1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <div className={styles.footer}>
          <a href="/contact" className="btn btn-outline">
            Book a Visit With Our Doctors
          </a>
        </div>
      </div>
    </section>
  );
}
