"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PhoneIcon from "@/components/PhoneIcon";
import { contact, headerNav, patientLinks } from "@/lib/content";
import styles from "./SiteHeader.module.css";

const PinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

// Links to a section of another page (e.g. /about#insurance) stay unmarked so only the page link is underlined.
const isCurrent = (pathname: string, href: string) => {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

export default function SiteHeader() {
  const pathname = usePathname();
  const current = (href: string) => (isCurrent(pathname, href) ? ("page" as const) : undefined);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const closeMenu = () => setMenuOpen(false);
  const currentSubmenu = (href: string) => {
    const [linkPath, anchor] = href.split("#");
    return anchor && pathname === linkPath && hash === `#${anchor}` ? ("location" as const) : current(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenSubmenu(null);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const headerClass = [styles.header, scrolled && styles.scrolled, (scrolled || menuOpen) && styles.solid].filter(Boolean).join(" ");

  return (
    <header className={headerClass}>
      <div className={styles.utility} inert={scrolled}>
        <div className={styles.utilityInner}>
          <div className={styles.utilityGroup}>
            <a href={contact.phoneHref}>
              <PhoneIcon size={15} />
              <span className={styles.utilityLabel}>La Crosse</span>
              <strong>{contact.phone}</strong>
            </a>
            <a href={contact.phoneHref}>
              <PhoneIcon size={15} />
              <span className={styles.utilityLabel}>Holmen</span>
              <strong>{contact.phone}</strong>
            </a>
            <a href="/contact#locations">
              <PinIcon />
              Get Directions
            </a>
          </div>
          <div className={`${styles.utilityGroup} ${styles.utilityLinks}`}>
            <a href="/contact#forms">Patient Portal</a>
            <a href={patientLinks.contactLenses} target="_blank" rel="noopener noreferrer" aria-label="Order Contacts (opens in a new tab)">
              Order Contacts
            </a>
            <a href="/about#insurance" className={styles.utilityExtra}>
              Insurance
            </a>
            <a href="/about#careers" className={styles.utilityExtra}>
              Careers
            </a>
            <a href="/contact" aria-current={current("/contact")}>
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bar}>
        <a href="/" aria-label="Optical Fashions Eye Care Clinic, home" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Optical Fashions Eye Care Clinic"
            width={1275}
            height={733}
            loading="eager"
            fetchPriority="high"
            className={styles.logoImage}
          />
        </a>
        <nav ref={navRef} aria-label="Primary" className={styles.nav}>
          {headerNav.map((n) =>
            n.children ? (
              <div key={n.label} className={styles.navItem} onMouseEnter={() => setOpenSubmenu(n.label)} onMouseLeave={() => setOpenSubmenu(null)}>
                <a href={n.href} aria-current={current(n.href)}>
                  {n.label}
                </a>
                <button
                  type="button"
                  className={styles.submenuToggle}
                  aria-label={`Show ${n.label} links`}
                  aria-expanded={openSubmenu === n.label}
                  aria-controls={`submenu-${n.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  onClick={() => setOpenSubmenu((open) => (open === n.label ? null : n.label))}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setOpenSubmenu(null);
                  }}
                >
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="m4 6 4 4 4-4" />
                  </svg>
                </button>
                <div
                  id={`submenu-${n.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className={`${styles.submenu} ${openSubmenu === n.label ? styles.submenuOpen : ""}`}
                >
                  {n.children.map((child) => (
                    <a key={child.href} href={child.href} onClick={() => setOpenSubmenu(null)} aria-current={currentSubmenu(child.href)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={n.label} href={n.href} aria-current={current(n.href)}>
                {n.label}
              </a>
            ),
          )}
        </nav>
        <div className={styles.actions}>
          <a href="/contact#book" className={`btn btn-primary ${styles.cta}`}>
            <span className={styles.ctaLong}>Schedule an Appointment</span>
            <span className={styles.ctaShort}>Book</span>
          </a>
          <button
            type="button"
            className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.hamburger} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
      {menuOpen && <button type="button" className={styles.backdrop} aria-label="Close menu" onClick={closeMenu} />}
      <nav id="mobile-nav" aria-label="Primary" aria-hidden={!menuOpen} inert={!menuOpen} className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}>
        <div className={styles.mobileNavHead}>
          <span>Menu</span>
          <button type="button" className={styles.drawerClose} aria-label="Close menu" onClick={closeMenu}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
          {headerNav.map((n) => (
            <div key={n.label} className={styles.mobileNavItem}>
              <a href={n.href} onClick={closeMenu} className={styles.mobileLink} aria-current={current(n.href)}>
                {n.label}
              </a>
              {n.children && (
                <div className={styles.mobileSubmenu}>
                  {n.children.map((child) => (
                    <a key={child.href} href={child.href} onClick={closeMenu} aria-current={currentSubmenu(child.href)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className={styles.mobileExtra}>
            <a href="/contact#forms" onClick={closeMenu}>
              Patient Portal
            </a>
            <a href={patientLinks.contactLenses} target="_blank" rel="noopener noreferrer" aria-label="Order Contacts (opens in a new tab)" onClick={closeMenu}>
              Order Contacts
            </a>
          </div>
      </nav>
    </header>
  );
}
