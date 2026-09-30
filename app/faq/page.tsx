import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBookingBar from "@/components/MobileBookingBar";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/FaqList";
import PhoneIcon from "@/components/PhoneIcon";
import MailIcon from "@/components/MailIcon";
import { contact, emailDomain, emailUser, faqGroups } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Optical Fashions Eye Care Clinic",
  description:
    "Answers about appointments, insurance, eye exams, medical eye care, myopia management, glasses and contact lenses at our La Crosse and Holmen, Wisconsin offices.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  ),
};

export default function FaqPage() {
  return (
    <div id="top" className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <PageHero
          crumb="FAQ"
          image="/images/hero-wide.png"
          imagePosition="center 45%"
          title="Frequently Asked Questions"
          intro="Everything you might want to know before your visit, from booking and insurance to eye exams, medical care, glasses and contacts."
        />
        <div className={`container ${styles.layout}`}>
          <aside className={styles.aside}>
            <nav aria-label="FAQ topics" className={styles.topics}>
              <span className={styles.asideTitle}>Topics</span>
              {faqGroups.map((g) => (
                <a key={g.id} href={`#${g.id}`}>
                  {g.title}
                </a>
              ))}
            </nav>
            <div className={styles.help}>
              <h2 className={styles.helpTitle}>Still Have Questions?</h2>
              <p>Our front desk team is happy to help.</p>
              <a href={contact.phoneHref} className={styles.helpLink}>
                <PhoneIcon size={16} />
                <span>{contact.phone}</span>
              </a>
              <a href={`mailto:${contact.email}`} className={styles.helpLink}>
                <MailIcon size={16} />
                <span>
                  {emailUser}@<wbr />
                  {emailDomain}
                </span>
              </a>
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
            </div>
          </aside>
          <div className={styles.groups}>
            {faqGroups.map((g) => (
              <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className={styles.group}>
                <h2 id={`${g.id}-h`} className={styles.groupTitle}>
                  {g.title}
                </h2>
                <FaqList items={g.items} idPrefix={g.id} />
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <MobileBookingBar />
    </div>
  );
}
