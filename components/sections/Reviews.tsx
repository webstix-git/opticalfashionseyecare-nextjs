"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/a11y";
import { googleReviewLocations } from "@/lib/content";
import styles from "./Reviews.module.css";

function GoogleLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
      />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function Stars({ count = 5, size = 18 }: { count?: number; size?: number }) {
  return (
    <span className={styles.stars} role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={i < count ? styles.starOn : styles.starOff}>
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}

export default function Reviews() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [locationId, setLocationId] = useState(googleReviewLocations[0].id);
  const reducedMotion = useReducedMotion();
  const location = googleReviewLocations.find((item) => item.id === locationId) ?? googleReviewLocations[0];
  const { rating, count, url, reviews } = location;
  const recentReviews = reviews.slice(0, 5);
  const pages = Math.max(1, recentReviews.length - perView + 1);
  const current = Math.min(index, pages - 1);

  useEffect(() => {
    const read = () => {
      const el = carouselRef.current;
      if (el) setPerView(parseInt(getComputedStyle(el).getPropertyValue("--per"), 10) || 1);
    };
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);

  useEffect(() => {
    if (reducedMotion || pages <= 1) return;
    const timer = window.setInterval(() => setIndex((currentIndex) => (currentIndex + 1) % pages), 5500);
    return () => window.clearInterval(timer);
  }, [location.id, pages, reducedMotion]);

  const go = (dir: number) => setIndex((current + dir + pages) % pages);
  const selectLocation = (id: string) => {
    setLocationId(id);
    setIndex(0);
  };

  return (
    <section id="reviews" aria-labelledby="rev-h" className={styles.band}>
      <div className={`container ${styles.section}`}>
        <div data-reveal="" className={styles.head}>
          <div className={styles.headTitle}>
            <p className="eyebrow">Google reviews</p>
            <h2 id="rev-h" className="section-title">
              What Our Patients Say
            </h2>
            <div className={styles.summary}>
              <GoogleLogo size={40} />
              <div className={styles.summaryText}>
                <div className={styles.summaryTop}>
                  {rating && <span className={styles.score}>{rating}</span>}
                  <Stars size={20} />
                </div>
                <span className={styles.summaryNote}>{location.label} · Based on {count} Google reviews</span>
              </div>
              <a href={url} target="_blank" rel="noopener" className={`btn btn-outline ${styles.summaryBtn}`}>
                Read Reviews on Google
              </a>
              <div className={styles.locationToggle} role="group" aria-label="Review location">
                {googleReviewLocations.map((item) => (
                  <button key={item.id} type="button" aria-pressed={item.id === location.id} onClick={() => selectLocation(item.id)}>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          data-reveal=""
          ref={carouselRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${location.label} Google reviews`}
          className={styles.carousel}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className={styles.viewport}>
            <div className={styles.track} style={{ "--i": current } as React.CSSProperties}>
              {recentReviews.map((r, i) => (
                <figure key={`${location.id}-${r.name}`} className={styles.card} aria-hidden={i < current || i >= current + perView}>
                  <div className={styles.cardTop}>
                    <Stars count={r.stars} />
                    <GoogleLogo size={20} />
                  </div>
                  <blockquote>{r.text}</blockquote>
                  <figcaption className={styles.author}>
                    <span aria-hidden="true" className={styles.avatar}>
                      {r.name.charAt(0)}
                    </span>
                    <span className={styles.name}>{r.name}</span>
                    <span className={styles.when}>{r.when}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          {pages > 1 && (
            <>
              <button type="button" aria-label="Previous reviews" className={`${styles.arrow} ${styles.prev}`} onClick={() => go(-1)}>
                <Chevron dir="left" />
              </button>
              <button type="button" aria-label="Next reviews" className={`${styles.arrow} ${styles.next}`} onClick={() => go(1)}>
                <Chevron dir="right" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
