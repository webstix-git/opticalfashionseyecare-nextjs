import type { Metadata } from "next";
import InformationPage from "@/components/InformationPage";
import { faqGroups, type NavLink } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sitemap | Optical Fashions Eye Care Clinic",
  description: "Browse all pages on the Optical Fashions Eye Care Clinic website.",
};

const groups: { label: string; href?: string; links: NavLink[] }[] = [
  {
    label: "Home",
    href: "/",
    links: [],
  },
  {
    label: "About Us",
    href: "/about",
    links: [
      { label: "Why Choose Us", href: "/about#why" },
      { label: "Our Optometrists", href: "/about#doctors" },
      { label: "Careers", href: "/about#careers" },
      { label: "Insurance We Accept", href: "/about#insurance" },
    ],
  },
  {
    label: "Eye Care Services",
    href: "/eye-care-services",
    links: [
      { label: "Eye Exams for All Ages", href: "/eye-care-services#exams" },
      { label: "Medical Eye Care", href: "/eye-care-services#medical" },
      { label: "Dry Eye", href: "/eye-care-services#dry-eye" },
      { label: "Cataracts", href: "/eye-care-services#cataracts" },
      { label: "Glaucoma", href: "/eye-care-services#glaucoma" },
      { label: "Same-Day Medical Eye Care", href: "/eye-care-services#same-day" },
      { label: "Pre- & Post-Operative Care", href: "/eye-care-services#surgery" },
    ],
  },
  {
    label: "Eyeglasses & Contacts",
    href: "/eyeglasses-contacts",
    links: [
      { label: "Brands We Carry", href: "/eyeglasses-contacts#brands" },
      { label: "Lenses", href: "/eyeglasses-contacts#lenses" },
      { label: "Contact Lens Exams & Fittings", href: "/eyeglasses-contacts#contacts" },
      { label: "Myopia Control", href: "/eyeglasses-contacts#myopia" },
      { label: "No Vision Insurance?", href: "/eyeglasses-contacts#value" },
    ],
  },
  {
    label: "FAQ",
    href: "/faq",
    links: faqGroups.map((g) => ({ label: g.title, href: `/faq#${g.id}` })),
  },
  {
    label: "Contact Us",
    href: "/contact",
    links: [
      { label: "Locations & Hours", href: "/contact#locations" },
      { label: "Schedule an Appointment", href: "/contact#book" },
      { label: "Patient Forms", href: "/contact#forms" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <InformationPage contentClassName={styles.page} crumb="Sitemap" title="Sitemap" intro="A guide to the information, services, and patient resources available on our website.">
      <nav aria-label="Sitemap" className={styles.groups}>
        {groups.map((g) => (
          <section key={g.label} className={styles.group} aria-labelledby={`sm-${g.label.replace(/\W+/g, "-").toLowerCase()}`}>
            <h2 id={`sm-${g.label.replace(/\W+/g, "-").toLowerCase()}`} className={styles.groupTitle}>
              {g.href ? <a href={g.href}>{g.label}</a> : g.label}
            </h2>
            {g.links.length > 0 && (
              <ul className={styles.groupLinks}>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </nav>
    </InformationPage>
  );
}
