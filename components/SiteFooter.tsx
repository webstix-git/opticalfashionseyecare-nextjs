import type { ReactNode } from "react";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";
import { contact, emailDomain, emailUser, locations, nav, socialLinks } from "@/lib/content";
import styles from "./SiteFooter.module.css";

const socialIcons: Record<(typeof socialLinks)[number]["name"], ReactNode> = {
  Facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21.5v-8h2.7l.4-3.2h-3.1V8.3c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5v3.2h2.7v8h3.3z" />
    </svg>
  ),
  Yelp: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M11.3 2.1c.6-.1 1.1.4 1.1 1v8.3c0 .9-1.2 1.3-1.7.5L6.4 5c-.3-.5-.1-1.1.4-1.4 1.4-.8 2.9-1.3 4.5-1.5zM13.9 14.4l4.5 1.4c.6.2.9.8.6 1.4-.6 1.2-1.4 2.3-2.4 3.1-.5.4-1.2.3-1.5-.2l-2.5-4c-.5-.8.3-1.9 1.3-1.7zM14.4 12.5l2.7-3.9c.3-.5 1-.6 1.5-.2.9.8 1.7 1.8 2.1 3 .2.6-.1 1.2-.7 1.3l-4.5 1.3c-1 .3-1.7-.7-1.1-1.5zM9.9 15.7l-2.5 3.8c-.3.5-1 .6-1.5.2-.9-.8-1.6-1.8-2-3-.2-.6.1-1.2.7-1.3l4.3-1.2c1-.3 1.6.7 1 1.5zM11.8 16.9c.8-.3 1.6.3 1.6 1.2v4.3c0 .6-.5 1.1-1.1 1-1.2-.1-2.4-.5-3.4-1.1-.5-.3-.7-1-.3-1.5l2.6-3.5c.2-.2.4-.3.6-.4zM8.9 13.4 4.6 12c-.6-.2-.9-.8-.7-1.4.3-1.3.9-2.4 1.7-3.4.4-.5 1.1-.5 1.5 0l2.9 4.4c.5.8-.2 1.9-1.1 1.8z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  ),
};

export default function SiteFooter() {
  return (
    <>
      <CtaBanner />
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.columns}>
            <div className={styles.brand}>
              <Image src="/images/logo.png" alt="Optical Fashions Eye Care Clinic" width={1275} height={733} className={styles.logo} />
              <p>Personalized eye care for individuals and families in La Crosse and Holmen since 1962.</p>
              <ul className={styles.social}>
                {socialLinks.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${contact.businessName} on ${s.name}`}>
                      {socialIcons[s.name]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.locations}>
              <ul className={styles.addresses} aria-label="Our clinics">
                {locations.map((l) => (
                  <li key={l.name}>
                    <address>
                      <span className={styles.addressName}>{l.name} Clinic</span>
                      <a href={l.dir} target="_blank" rel="noopener noreferrer" aria-label={`${l.name} clinic: ${l.street}, ${l.city} (opens map in a new tab)`}>
                        {l.street}
                        <br />
                        {l.city}
                      </a>
                      <a href={contact.phoneHref} className={styles.addressLink}>
                        {contact.phone}
                      </a>
                      <a href={`mailto:${contact.email}`} className={styles.addressLink}>
                        {emailUser}@<wbr />
                        {emailDomain}
                      </a>
                      <span>Fax: {contact.fax}</span>
                    </address>
                    <div className={styles.hoursLocation}>
                      <h3>Clinic Hours</h3>
                      <dl>
                        {l.hours.map((h) => (
                          <div key={h.days} className={h.time === "Closed" ? styles.closed : undefined}>
                            <dt>{h.days}</dt>
                            <dd>{h.time}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </li>
                ))}
              </ul>
              <p className={styles.contactNote}>Do not send personal health information by email.</p>
            </div>
            <nav aria-label="Footer" className={`${styles.column} ${styles.quickLinks}`}>
              <h2 className={styles.heading}>Explore</h2>
              {nav.map((n) => (
                <a key={n.label} href={n.href}>
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
          <div className={styles.bottom}>
            <span>© {new Date().getFullYear()} Optical Fashions Eye Care Clinic</span>
            <div className={styles.legal}>
              <a href="/sitemap">Sitemap</a>
              <a href="/service-index">AI Readiness Service Index</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/ai-policy">AI Policy</a>
              <a href="/accessibility">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
