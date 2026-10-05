import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBookingBar from "@/components/MobileBookingBar";
import RevealObserver from "@/components/RevealObserver";
import PageHero from "@/components/PageHero";
import CareTabs from "@/components/CareTabs";
import ImageSlot from "@/components/ImageSlot";
import InsurancePlans from "@/components/InsurancePlans";
import { BookingProvider } from "@/components/BookingContext";
import Booking from "@/components/sections/Booking";
import LocationCards from "@/components/LocationCards";
import PhoneIcon from "@/components/PhoneIcon";
import { contact, contactSectionTabs, locations, patientForms, patientLinks } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us, Hours & Patient Forms | Optical Fashions Eye Care Clinic",
  description:
    "Clinic hours and directions for our La Crosse and Holmen, Wisconsin eye care clinics, online patient forms, and appointment requests.",
};

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday"];

const office = (city: string, street: string, postalCode: string, hours: { dayOfWeek: string[]; opens: string; closes: string }[]) => ({
  "@type": "Optometric",
  name: `${contact.businessName} – ${city}`,
  hasMap: locations.find((l) => l.name === city)?.dir,
  telephone: contact.phone,
  faxNumber: contact.fax,
  email: contact.email,
  address: { "@type": "PostalAddress", streetAddress: street, addressLocality: city, addressRegion: "WI", postalCode, addressCountry: "US" },
  openingHoursSpecification: hours.map((h) => ({ "@type": "OpeningHoursSpecification", ...h })),
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    office("La Crosse", "2104 WI-16", "54601", [
      { dayOfWeek: weekdays, opens: "07:30", closes: "17:30" },
      { dayOfWeek: ["Friday"], opens: "07:30", closes: "14:00" },
    ]),
    office("Holmen", "814 S. Main Street", "54636", [{ dayOfWeek: weekdays, opens: "07:30", closes: "17:30" }]),
  ],
};

const icon = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const FormIcon = () => (
  <svg {...icon} aria-hidden="true">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
);

export default function ContactPage() {
  return (
    <div id="top" className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <BookingProvider>
        <SiteHeader />
        <main id="main">
          <PageHero
            crumb="Contact"
            image="/images/about-doctor-patient.jpg"
            imagePosition="center 15%"
            title="We're Here to Help"
            intro="Find our clinic hours and locations, fill out your patient forms, or request an appointment online. We'll get back to you to confirm a time."
          />

          <CareTabs tabs={contactSectionTabs} />

          <section id="locations" aria-labelledby="loc-h" className={styles.locationsBand}>
            <div className="container">
              <div data-reveal="" className={styles.head}>
                <p className="eyebrow">Our clinics</p>
                <h2 id="loc-h" className="section-title">
                  Locations &amp; Hours
                </h2>
                <p className={styles.intro}>
                  Visit us in La Crosse or Holmen. Both clinics share one phone number, so call{" "}
                  <a href={contact.phoneHref} className="tel-link">
                    <PhoneIcon size={16} />
                    {contact.phone}
                  </a>{" "}
                  and we&apos;ll book you in at whichever is easier.
                </p>
              </div>
              <LocationCards />
            </div>
          </section>

          <div className={styles.bookingBand}>
            <Booking />
          </div>

          <section id="insurance" aria-labelledby="insurance-h" className={styles.insuranceBand}>
            <div className={`container ${styles.insuranceSection}`}>
              <div className={styles.insuranceLayout}>
                <div data-reveal="" className={styles.insurancePhoto}>
                  <ImageSlot
                    src="/images/insurance-family.jpg"
                    alt="Family sitting together at home"
                    placeholder="Family sitting together at home"
                    sizes="(max-width: 800px) 100vw, 42vw"
                  />
                </div>
                <div data-reveal="" className={styles.insuranceCopy}>
                  <p className="eyebrow">Insurance</p>
                  <h2 id="insurance-h" className="section-title">
                    Insurance We Accept
                  </h2>
                  <p className={styles.intro}>
                    Because we provide both medical and routine eye care, we accept a number of insurance plans to help cover the cost, depending on your needs. Don&apos;t see your plan? Give us a call and we&apos;ll be happy to help with any questions about your benefits.
                  </p>
                </div>
              </div>
              <InsurancePlans />
            </div>
          </section>

          <section id="forms" aria-labelledby="forms-h" className={styles.formsBand}>
            <div className={`container ${styles.formsLayout}`}>
              <div data-reveal="" className={styles.formsCopy}>
                <p className="eyebrow">Patient forms</p>
                <h2 id="forms-h" className="section-title">
                  Fill Out Your Forms Before You Arrive
                </h2>
                <p className={styles.intro}>
                  Filling out your paperwork online saves time at check-in and gives your doctor what they need before your exam.
                </p>
                <div className={styles.bring}>
                  <span className={styles.hoursTitle}>What to bring</span>
                  <ul className={styles.checklist}>
                    <li>Your current glasses and contact lenses</li>
                    <li>A list of any medications and vitamins you take</li>
                    <li>Your vision and medical insurance cards</li>
                  </ul>
                </div>
                <div className={styles.portal}>
                  <p className={styles.infoText}>Already a patient? View your records and manage your information in our secure patient portal.</p>
                  <a href={patientLinks.portal} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    Open Patient Portal
                  </a>
                </div>
              </div>
              <ul className={styles.formList}>
                {patientForms.map((f) => (
                  <li key={f.title} data-reveal="" className={styles.formCard}>
                    <span className={styles.methodIcon}>
                      <FormIcon />
                    </span>
                    <div className={styles.formBody}>
                      <h3 className={styles.formTitle}>{f.title}</h3>
                      <p className={styles.formText}>{f.body}</p>
                    </div>
                    {f.href ? (
                      <a href={f.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary" aria-label={`Fill out the ${f.title}`}>
                        Fill Out Form
                      </a>
                    ) : (
                      <button type="button" className="btn btn-primary" disabled aria-label={`${f.title} is unavailable`}>
                        Fill Out Form
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
        <SiteFooter />
        <MobileBookingBar />
      </BookingProvider>
      <RevealObserver />
    </div>
  );
}
