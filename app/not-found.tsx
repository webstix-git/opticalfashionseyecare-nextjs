import type { Metadata } from "next";
import InformationPage from "@/components/InformationPage";
import { contact, type NavLink } from "@/lib/content";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found | Optical Fashions Eye Care Clinic",
  description: "We could not find that page. Browse our main pages or contact Optical Fashions Eye Care Clinic for help.",
};

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Eye Care Services", href: "/eye-care-services" },
  { label: "Eyeglasses & Contacts", href: "/eyeglasses-contacts" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Sitemap", href: "/sitemap" },
];

export default function NotFound() {
  return (
    <InformationPage
      contentClassName={styles.page}
      crumb="Page Not Found"
      title="Page Not Found"
      intro="That page is missing or the link may be out of date. Use the links below to find what you need, or get in touch and we will help."
    >
      <section aria-labelledby="not-found-h" className={styles.section}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h2 id="not-found-h" className={styles.heading}>
          Looking for something else?
        </h2>
        <p className={styles.body}>
          Here are the main pages on our site. You can also call us at{" "}
          <a href={contact.phoneHref}>{contact.phone}</a> or book a visit from the contact page.
        </p>
        <ul className={styles.linkList}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <a href="/" className="btn btn-primary">
            Back to Home
          </a>
          <a href="/contact#book" className="btn btn-outline">
            Book an Appointment
          </a>
        </div>
      </section>
    </InformationPage>
  );
}
