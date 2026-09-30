"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            <a href={patientLinks.portal} target="_blank" rel="noopener noreferrer" aria-label="Patient Portal (opens in a new tab)">
              Patient Portal
            </a>
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
        <nav aria-label="Primary" className={styles.nav}>
          {headerNav.map((n) => (
            <a key={n.label} href={n.href} aria-current={current(n.href)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <a href="/contact" className={`btn btn-primary ${styles.cta}`}>
            <span className={styles.ctaLong}>Schedule an Appointment</span>
            <span className={styles.ctaShort}>Book</span>
          </a>
          <button type="button" className={styles.menuButton} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" aria-label="Primary" className={styles.mobileNav}>
          {headerNav.map((n) => (
            <a key={n.label} href={n.href} onClick={closeMenu} className={styles.mobileLink} aria-current={current(n.href)}>
              {n.label}
            </a>
          ))}
          <div className={styles.mobileExtra}>
            <a href={patientLinks.portal} target="_blank" rel="noopener noreferrer" aria-label="Patient Portal (opens in a new tab)" onClick={closeMenu}>
              Patient Portal
            </a>
            <a href={patientLinks.contactLenses} target="_blank" rel="noopener noreferrer" aria-label="Order Contacts (opens in a new tab)" onClick={closeMenu}>
              Order Contacts
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
