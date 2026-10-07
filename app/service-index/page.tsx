import type { Metadata } from "next";
import type { ReactNode } from "react";
import InformationPage from "@/components/InformationPage";
import {
  contact,
  contactLensTypes,
  designerBrands,
  doctors,
  lensOptions,
  locations,
  medicalConditions,
  medicalPlans,
  patientForms,
  patientLinks,
  services,
  surgeryCare,
  visionPlans,
} from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AI Readiness Service Index | Optical Fashions Eye Care Clinic",
  description:
    "A plain-language index of the eye exams, medical eye care, surgical co-management, eyewear and contact lens services offered by Optical Fashions Eye Care Clinic in La Crosse and Holmen, Wisconsin.",
};

type Service = { name: string; description: string; href: string; tags?: string[] };

const exam = services.find((s) => s.title === "Comprehensive Eye Exams")!;
const [medicalExam, ...conditions] = medicalConditions;

const serviceGroups: { id: string; title: string; summary: string; href: string; items: Service[] }[] = [
  {
    id: "exams",
    title: "Eye Exams",
    summary: "Routine and medical eye exams for every age.",
    href: "/eye-care-services#exams",
    items: [
      { name: exam.title, description: exam.body, href: "/eye-care-services#exams", tags: ["Children", "Adults", "Seniors"] },
      { name: medicalExam.title, description: medicalExam.body, href: `/eye-care-services#${medicalExam.id}` },
    ],
  },
  {
    id: "medical",
    title: "Medical Eye Care",
    summary: "Diagnosis and management of eye conditions, with same-day visits for urgent problems.",
    href: "/eye-care-services#medical",
    items: conditions.map((c) => ({
      name: c.title,
      description: c.body,
      href: `/eye-care-services#${c.id}`,
      tags: c.sameDay ? ["Same-day appointments"] : undefined,
    })),
  },
  {
    id: "surgery",
    title: "Surgical Co-Management",
    summary: "Care before and after eye surgery, close to home.",
    href: "/eye-care-services#surgery",
    items: surgeryCare.map((s) => ({ name: s.title, description: s.body, href: "/eye-care-services#surgery", tags: s.includes })),
  },
  {
    id: "eyewear",
    title: "Eyewear & Contact Lenses",
    summary: "Glasses, lenses and contact lens care from our in-house optical team.",
    href: "/eyeglasses-contacts",
    items: [
      {
        name: "Eyeglasses & Designer Frames",
        description: `Frames fitted by our opticians, including ${designerBrands.map((b) => b.name).join(", ")}.`,
        href: "/eyeglasses-contacts#brands",
      },
      {
        name: "Prescription Lenses",
        description: lensOptions.map((l) => `${l.title}: ${l.body}`).join(" "),
        href: "/eyeglasses-contacts#lenses",
      },
      {
        name: "Contact Lens Exams & Fittings",
        description: `Contact lens exams and fittings by our doctors, with ${contactLensTypes.join(", ").toLowerCase()}. Order or reorder contact lenses online and have them shipped to you.`,
        href: "/eyeglasses-contacts#contacts",
      },
    ],
  },
];

const glance: { label: string; value: ReactNode }[] = [
  { label: "Clinic", value: contact.businessName },
  { label: "Type of practice", value: "Independent, locally owned optometry clinic" },
  { label: "Established", value: "1962" },
  {
    label: "Locations",
    value: locations.map((l) => (
      <span key={l.name} className={styles.line}>
        <a href={l.dir} target="_blank" rel="noopener noreferrer">
          {l.name}: {l.street}, {l.city}
        </a>
      </span>
    )),
  },
  { label: "Phone", value: <a href={contact.phoneHref}>{contact.phone}</a> },
  { label: "Fax", value: contact.fax },
  { label: "Email", value: <a href={`mailto:${contact.email}`}>{contact.email}</a> },
  { label: "Optometrists", value: doctors.map((d) => d.name).join(", ") },
  { label: "Patients served", value: "Children, teens, adults and seniors" },
  {
    label: "How to book",
    value: (
      <>
        Call {contact.phone} or{" "}
        <a href={patientLinks.portal} target="_blank" rel="noopener noreferrer">
          schedule in the patient portal
        </a>
      </>
    ),
  },
  { label: "Urgent eye care", value: "Same-day appointments for urgent concerns. For a severe eye injury, seek emergency care." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Optometric",
  name: contact.businessName,
  foundingDate: "1962",
  telephone: contact.phone,
  faxNumber: contact.fax,
  email: contact.email,
  location: locations.map((l) => ({
    "@type": "Place",
    name: `${contact.businessName} – ${l.name}`,
    hasMap: l.dir,
    address: { "@type": "PostalAddress", streetAddress: l.street, addressLocality: l.name, addressRegion: "WI", addressCountry: "US" },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Eye care services",
    itemListElement: serviceGroups.map((g) => ({
      "@type": "OfferCatalog",
      name: g.title,
      itemListElement: g.items.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, description: s.description } })),
    })),
  },
};

export default function ServiceIndexPage() {
  return (
    <InformationPage
      crumb="AI Readiness Service Index"
      title="AI Readiness Service Index"
      intro="A plain-language summary of our clinic, services, locations and policies, written so patients, search engines and AI assistants can find accurate answers in one place."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

      <section aria-labelledby="glance-h">
        <h2 id="glance-h">Clinic at a Glance</h2>
        <dl className={styles.glance}>
          {glance.map((g) => (
            <div key={g.label}>
              <dt>{g.label}</dt>
              <dd>{g.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="hours-h">
        <h2 id="hours-h">Clinic Hours</h2>
        <div className={styles.hoursGrid}>
          {locations.map((l) => (
            <div key={l.name} className={styles.hoursCard}>
              <h3>{l.name} Clinic</h3>
              <dl>
                {l.hours.map((h) => (
                  <div key={h.days}>
                    <dt>{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="services-h">
        <h2 id="services-h">Services</h2>
        <nav aria-label="Service categories" className={styles.jump}>
          {serviceGroups.map((g) => (
            <a key={g.id} href={`#svc-${g.id}`}>
              {g.title}
            </a>
          ))}
        </nav>
        {serviceGroups.map((g) => (
          <div key={g.id} id={`svc-${g.id}`} className={styles.group}>
            <div className={styles.groupHead}>
              <h3>{g.title}</h3>
              <p>{g.summary}</p>
            </div>
            <ul className={styles.services}>
              {g.items.map((s) => (
                <li key={s.name} className={styles.service}>
                  <h4>{s.name}</h4>
                  <p>{s.description}</p>
                  {s.tags && (
                    <ul className={styles.tags} aria-label="Details">
                      {s.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                  <a href={s.href} className={styles.more}>
                    Learn more<span className={styles.srOnly}> about {s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section aria-labelledby="insurance-h">
        <h2 id="insurance-h">Insurance &amp; Payment</h2>
        <dl className={styles.glance}>
          <div>
            <dt>Vision plans</dt>
            <dd>{visionPlans.map((p) => p.name).join(", ")}</dd>
          </div>
          <div>
            <dt>Medical plans</dt>
            <dd>{medicalPlans.map((p) => p.name).join(", ")}</dd>
          </div>
          <div>
            <dt>No vision insurance</dt>
            <dd>Save 25% on your eye exam and 20% on glasses when you pay on the day of your visit. Value packages and promotions are available on glasses, and special deals are available on a year&apos;s supply of contact lenses.</dd>
          </div>
          <div>
            <dt>Payment</dt>
            <dd>All products and services must be paid on the day of service.</dd>
          </div>
          <div>
            <dt>Coverage check</dt>
            <dd>
              We may not be contracted with every network within these plans, so please confirm with your insurance company that we&apos;re a provider for
              your plan. <a href="/about#insurance">See insurance details</a>
            </dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="resources-h" className={styles.resourcesSection}>
        <h2 id="resources-h">Patient Resources</h2>
        <ul className={styles.resources}>
          {patientForms.map((f) => (
            <li key={f.title}>
              {f.href ? (
                <a href={f.href} target="_blank" rel="noopener noreferrer">
                  {f.title}
                  <span className={styles.srOnly}> (opens in a new tab)</span>
                </a>
              ) : (
                <span>{f.title}</span>
              )}
              <span>{f.body}</span>
            </li>
          ))}
          <li>
            <a href={patientLinks.portal} target="_blank" rel="noopener noreferrer">
              Patient Portal
              <span className={styles.srOnly}> (opens in a new tab)</span>
            </a>
            <span>View your records, manage your information, and schedule appointments in the patient portal.</span>
          </li>
          <li>
            <a href={patientLinks.contactLenses} target="_blank" rel="noopener noreferrer">
              Order Contact Lenses
              <span className={styles.srOnly}> (opens in a new tab)</span>
            </a>
            <span>Order or reorder contact lenses online and have them shipped to you.</span>
          </li>
          <li>
            <a href="/faq">Frequently Asked Questions</a>
            <span>Answers about appointments, eye exams, medical eye care, glasses and contacts.</span>
          </li>
        </ul>
      </section>

      <section aria-labelledby="about-page-h" className={styles.note}>
        <h2 id="about-page-h">About This Page</h2>
        <p>
          This index is maintained by our team and was last reviewed in September 2026. It is general information, not medical advice, and it does not
          replace an eye exam. For questions about your eyes, call {contact.phone}. For a severe eye injury, seek emergency care. Learn how we use AI in our{" "}
          <a href="/ai-policy">AI Policy</a>.
        </p>
      </section>
    </InformationPage>
  );
}
