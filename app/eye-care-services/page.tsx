import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBookingBar from "@/components/MobileBookingBar";
import RevealObserver from "@/components/RevealObserver";
import PageHero from "@/components/PageHero";
import CareTabs from "@/components/CareTabs";
import ImageSlot from "@/components/ImageSlot";
import LocationCards from "@/components/LocationCards";
import PhoneIcon from "@/components/PhoneIcon";
import {
  careTabs,
  contact,
  examAges,
  examPhoto,
  medicalConditions,
  patientLinks,
  surgeryCare,
} from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Eye Care Services in La Crosse & Holmen, WI | Optical Fashions Eye Care Clinic",
  description:
    "Comprehensive eye exams for all ages, medical eye care for dry eye, glaucoma, cataracts, pink eye and myopia management, same-day medical appointments, and LASIK pre- and post-op care in La Crosse and Holmen, WI.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Eye Care Services", item: "/eye-care-services" },
  ],
};

export default function EyeCareServicesPage() {
  return (
    <div id="top" className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <PageHero
          crumb="Eye Care Services"
          image="/images/eye-care-services-banner.jpg"
          imageSize={{ width: 1024, height: 436 }}
          title="Eye Care Services"
          intro="Eye exams, medical eye care and surgical follow-up from doctors in La Crosse and Holmen who explain every step."
          actions={
            <a href="#same-day" className="btn btn-outline">
              Get Same-Day Eye Care
            </a>
          }
        />

        <CareTabs tabs={careTabs} />

        <section id="exams" aria-labelledby="exams-h" className={styles.band}>
          <div className={`container ${styles.section} ${styles.exams}`}>
            <div data-reveal="" className={styles.copy}>
              <p className="eyebrow">Comprehensive eye exams</p>
              <h2 id="exams-h" className="section-title">
                Eye Exams for All Ages
              </h2>
              <p className={styles.lead}>
                A comprehensive eye exam checks how clearly you see and looks closely at the health of your eyes. We see children, adults and seniors, so the whole
                family can see the same trusted doctors.
              </p>
              <p className={styles.body}>
                Your doctor will review your history, update your prescription for glasses or contact lenses if needed, and explain what they find in plain
                language. Regular exams help catch changes early, often before you notice them.
              </p>
              <ul className={styles.ages}>
                {examAges.map((a) => (
                  <li key={a.label} className={styles.age}>
                    <span className={styles.ageLabel}>{a.label}</span>
                    {a.text}
                  </li>
                ))}
              </ul>
              <div className={styles.actions}>
                <a href="#book" className="btn btn-primary">
                  Schedule an Eye Exam
                </a>
                <a href={patientLinks.portal} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Patient Portal (RevolutionEHR)
                </a>
              </div>
              <p className={styles.note}>
                Wondering how often you need an exam, or what to bring? <a href="/faq#exams">Read our FAQ</a>
              </p>
            </div>
            <div data-reveal="" className={styles.examPhoto}>
              <ImageSlot placeholder={examPhoto.photo} src={examPhoto.src} alt={examPhoto.alt} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          </div>
        </section>

        <section id="medical" aria-labelledby="medical-h" className={`${styles.band} ${styles.alt}`}>
          <div className={`container ${styles.section}`}>
            <div data-reveal="" className={styles.medicalHead}>
              <div className={styles.surgeryTitle}>
                <p className="eyebrow">Medical eye care</p>
                <h2 id="medical-h" className="section-title">
                  Care for Eye Problems, Not Just Prescriptions
                </h2>
              </div>
              <p className={styles.body}>
                When something feels wrong with your eyes, or you&apos;re living with an ongoing condition, our doctors diagnose, treat and monitor it close to home.
              </p>
            </div>

            <div className={styles.conditions}>
              {medicalConditions.map((m, i) => (
                <article key={m.id} id={m.id} data-reveal="" className={`${styles.condition} ${i === 0 ? styles.conditionWide : ""}`}>
                  <h3 className={styles.conditionTitle}>{m.title}</h3>
                  <p className={styles.conditionText}>{m.body}</p>
                  {i === 0 && (
                    <a href="#book" className={`btn btn-outline ${styles.conditionCta}`}>
                      Book a Medical Eye Exam
                    </a>
                  )}
                  {m.sameDay && (
                    <a href="#same-day" className={styles.tag}>
                      Same-day visits available
                    </a>
                  )}
                </article>
              ))}
            </div>

            <div id="same-day" role="region" aria-labelledby="same-day-h" data-reveal="" className={styles.sameDay}>
              <div className={styles.sameDayPhoto}>
                <ImageSlot
                  placeholder="Photo: patient checking in at the front desk"
                  src="/images/front-desk-check-in.jpg"
                  alt="Patient checking in with a receptionist at the clinic front desk"
                  position="55% center"
                  sizes="(max-width: 900px) 100vw, 380px"
                />
              </div>
              <div className={styles.sameDayCopy}>
                <p className={styles.sameDayEyebrow}>Same-day appointments</p>
                <h3 id="same-day-h" className={styles.sameDayTitle}>
                  Same-Day <span>Medical Appointment</span>
                </h3>
                <p className={styles.sameDayText}>
                  Red or painful eye, sudden change in vision, or something in your eye? Call us and we&apos;ll do our best to see you the same day.
                </p>
                <a href={contact.phoneHref} className={styles.callBtn}>
                  <span className={styles.callIcon}>
                    <PhoneIcon />
                  </span>
                  <span className={styles.callText}>
                    <span className={styles.callLabel}>Call</span>
                    <span className={styles.callNumber}>{contact.phone}</span>
                  </span>
                </a>
              </div>
              <aside className={styles.sameDayBenefits} aria-label="Same-day appointment benefits">
                <div className={styles.benefit}>
                  <span className={styles.benefitIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="8.5" />
                      <path d="M12 7v5l3.2 2" />
                    </svg>
                  </span>
                  <span>Prompt Care</span>
                </div>
                <div className={styles.benefit}>
                  <span className={styles.benefitIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.8 12s3.2-5.3 9.2-5.3S21.2 12 21.2 12 18 17.3 12 17.3 2.8 12 2.8 12Z" />
                      <circle cx="12" cy="12" r="2.4" />
                    </svg>
                  </span>
                  <span>Experienced Eye Care Team</span>
                </div>
                <div className={styles.benefit}>
                  <span className={styles.benefitIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="8" r="3" />
                      <circle cx="16.5" cy="9.5" r="2.3" />
                      <path d="M3.8 19c.6-3 2.7-4.7 5.2-4.7s4.6 1.7 5.2 4.7M14.2 18.5c.4-2 1.7-3.3 3.8-3.3 1.2 0 2.3.5 3.1 1.4" />
                    </svg>
                  </span>
                  <span>Your Vision, Our Priority</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="surgery" aria-labelledby="surgery-h" className={styles.band}>
          <div className={`container ${styles.section}`}>
            <div data-reveal="" className={styles.surgeryHead}>
              <div className={styles.surgeryTitle}>
                <p className="eyebrow">Pre &amp; post-op care</p>
                <h2 id="surgery-h" className="section-title">
                  Surgical Care, with Familiar Doctors Before and After
                </h2>
              </div>
              <p className={styles.body}>
                If you&apos;re considering LASIK or need eye surgery, we work alongside your surgeon. You&apos;ll have your evaluation and follow-up visits with us,
                close to home, while the procedure itself is done by the surgical team.
              </p>
            </div>

            <div data-reveal="" className={styles.procedures}>
              {surgeryCare.map((o) => (
                <article key={o.title} className={styles.procedure}>
                  <div className={styles.procedurePhoto}>
                    <ImageSlot placeholder={o.photo} src={o.src} alt={o.alt} position={o.position} sizes="(max-width: 900px) 100vw, 33vw" />
                  </div>
                  <div className={styles.procedureBody}>
                    <h3 className={styles.stepTitle}>{o.title}</h3>
                    <p className={styles.conditionText}>{o.body}</p>
                    <ul aria-label={`${o.title} includes`} className={styles.procedureTags}>
                      {o.includes.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div className={`${styles.actions} ${styles.surgeryActions}`}>
              <a href="#book" className="btn btn-primary">
                Book a Pre-Op Evaluation
              </a>
              <a href={contact.phoneHref} className="btn btn-outline">
                <PhoneIcon />
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>

        <section id="book" aria-labelledby="book-h" className={`${styles.band} ${styles.alt}`}>
          <div className={`container ${styles.section}`}>
            <div data-reveal="" className={styles.bookHead}>
              <h2 id="book-h" className="section-title">
                Schedule at the Clinic Closest to You
              </h2>
            </div>
            <LocationCards />
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileBookingBar />
      <RevealObserver />
    </div>
  );
}
