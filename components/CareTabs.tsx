"use client";

import { useEffect, useRef, useState } from "react";
import type { NavLink } from "@/lib/content";
import styles from "./CareTabs.module.css";

export default function CareTabs({ tabs }: { tabs: NavLink[] }) {
  const [active, setActive] = useState(tabs[0]?.href);
  const [top, setTop] = useState<number>();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const tab = nav?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!nav || !tab) return;
    const left = tab.offsetLeft - nav.offsetLeft;
    if (left < nav.scrollLeft || left + tab.offsetWidth > nav.scrollLeft + nav.clientWidth) {
      nav.scrollTo({ left: left - 20, behavior: "smooth" });
    }
  }, [active]);

  useEffect(() => {
    const header = document.querySelector("header");
    const resize = header ? new ResizeObserver(() => setTop(header.offsetHeight)) : null;
    if (header && resize) resize.observe(header);

    const onScroll = () => {
      let current = tabs[0]?.href;
      for (const t of tabs) {
        const el = document.getElementById(t.href.slice(1));
        if (el && el.getBoundingClientRect().top < 220) current = t.href;
      }
      setActive(current);
    };
    const hash = window.location.hash;
    if (tabs.some((t) => t.href === hash)) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant", block: "start" });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      resize?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [tabs]);

  return (
    <div className={styles.bar} style={top === undefined ? undefined : { top }}>
      <nav ref={navRef} aria-label="On this page" className={`container ${styles.nav}`}>
        {tabs.map((t) => (
          <a key={t.href} href={t.href} aria-current={active === t.href ? "true" : undefined} className={styles.tab}>
            {t.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
