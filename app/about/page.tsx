import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBookingBar from "@/components/MobileBookingBar";
import RevealObserver from "@/components/RevealObserver";
import PageHero from "@/components/PageHero";
import ImageSlot from "@/components/ImageSlot";
import InsurancePlans from "@/components/InsurancePlans";
import About from "@/components/sections/About";
import Careers from "@/components/sections/Careers";
import CareTabs from "@/components/CareTabs";
import MailIcon from "@/components/MailIcon";
import { aboutPagePhoto, contact, doctors, leadership, why, type NavLink } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us, Our Doctors, Insurance & Careers | Optical Fashions Eye Care Clinic",
  description:
    "Locally owned since 1962, Optical Fashions Eye Care Clinic serves La Crosse and Holmen, WI. Meet Dr. Fisher, Dr. Wedig, Dr. Garbrecht, Dr. Theye and Dr. Latham, see the insurance plans we accept, and explore careers with our team.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "About Us", item: "/about" },
      ],
    },
    ...doctors.map((d) => ({
      "@type": "Person",
      name: d.name,
      jobTitle: "Optometrist",
      worksFor: { "@type": "Optometric", name: contact.businessName },
    })),
    ...leadership.map((p) => ({
      "@type": "Person",
      name: p.name,
      jobTitle: p.role,
      worksFor: { "@type": "Optometric", name: contact.businessName },
    })),
  ],
};

const tabs: NavLink[] = [
  { label: "Our Story", href: "#about" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Our Team", href: "#team" },
  { label: "Insurance", href: "#insurance" },
  { label: "Careers", href: "#careers" },
];

export default function AboutPage() {
  return (
    <div id="top" className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className={styles.main}>
        <PageHero
          crumb="About Us"
          image="/images/about-hero.jpg"
          imageSize={{ width: 951, height: 436 }}
          lightOverlay
          title="About Optical Fashions"
          intro="A locally owned eye care clinic serving La Crosse and Holmen since 1962. Meet our doctors, see which insurance plans we accept, or come work with us."
        />

        <CareTabs tabs={tabs} />

        <About photo={aboutPagePhoto} />

        <section id="why" aria-labelledby="why-h" className={`${styles.band} ${styles.alt}`}>
          <div className={`container ${styles.section}`}>
            <div data-reveal="" className={styles.head}>
              <p className="eyebrow">Why patients choose us</p>
              <h2 id="why-h" className="section-title">
                Not a Corporate Clinic.
                <br />
                Your Neighbors.
              </h2>
              <p className={styles.intro}>
                We want every patient to walk out feeling heard and seeing their best.
                <br />
                That&apos;s been the goal since day one.
              </p>
            </div>
            <ul data-reveal="" className={styles.whyGrid}>
              {why.map((w) => (
                <li key={w.title} className={styles.whyCard}>
                  <h3 className={styles.cardTitle}>{w.title}</h3>
                  <p className={styles.cardText}>{w.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="doctors" aria-labelledby="doctors-h" className={styles.band}>
          <div className={`container ${styles.section}`}>
            <div data-reveal="" className={styles.head}>
              <p className="eyebrow">Our doctors</p>
              <h2 id="doctors-h" className="section-title">
                Meet Our Optometrists
              </h2>
              <p className={styles.intro}>
                Five doctors who are part of this community, take the time to explain what they see, and make sure every question gets answered.
              </p>
            </div>
            <ul className={styles.doctorList}>
              {doctors.map((d) => (
                <li key={d.name} data-reveal="" className={styles.doctor}>
                  <div className={styles.portrait}>
                    <ImageSlot placeholder={d.photo} src={d.src} alt={`Portrait of ${d.name}`} position="center top" sizes="(max-width: 700px) 100vw, 280px" />
                  </div>
                  <div className={styles.doctorBody}>
                    <div>
                      <h3 className={styles.doctorName}>{d.name}</h3>
                      <p className={styles.doctorRole}>{d.title ?? "Optometrist, O.D."}</p>
                    </div>
                    {d.bio.map((p) => (
                      <p key={p.slice(0, 24)} className={styles.body}>
                        {p}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.center}>
              <a href="/contact#book" className="btn btn-primary">
                Book a Visit With Our Doctors
              </a>
            </div>
          </div>
        </section>

        <section id="team" aria-labelledby="team-h" className={styles.band}>
          <div className={`container ${styles.section}`}>
            <div data-reveal="" className={styles.head}>
              <p className="eyebrow">Our team</p>
              <h2 id="team-h" className="section-title">
                Leadership &amp; Administration
              </h2>
              <p className={styles.intro}>
                Behind the exam rooms, our business team keeps Optical Fashions running smoothly for patients and staff.
              </p>
            </div>
            <ul className={styles.doctorList}>
              {leadership.map((person) => (
                <li key={person.name} data-reveal="" className={styles.doctor}>
                  <div className={styles.portrait}>
                    <ImageSlot
                      placeholder={person.photo}
                      src={person.src}
                      alt={`Portrait of ${person.name}`}
                      position="center top"
                      sizes="(max-width: 700px) 100vw, 280px"
                    />
                  </div>
                  <div className={styles.doctorBody}>
                    <div>
                      <h3 className={styles.doctorName}>{person.name}</h3>
                      <p className={styles.doctorRole}>{person.role}</p>
                    </div>
                    {person.bio.map((p) => (
                      <p key={p.slice(0, 24)} className={styles.body}>
                        {p}
                      </p>
                    ))}
                    {person.email ? (
                      <a href={`mailto:${person.email}`} className={styles.contactLink}>
                        <MailIcon size={16} />
                        <span>
                          {person.email.split("@")[0]}@<wbr />
                          {person.email.split("@")[1]}
                        </span>
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="insurance" aria-labelledby="ins-h" className={`${styles.band} ${styles.alt}`}>
          <div className={`container ${styles.section}`}>
            <div className={styles.insuranceLayout}>
              <div data-reveal="" className={styles.insurancePhoto}>
                <ImageSlot
                  src="/images/insurance-family.jpg"
                  alt="Optical Fashions wall sign inside the clinic"
                  placeholder="Optical Fashions clinic sign"
                  sizes="(max-width: 800px) 100vw, 42vw"
                />
              </div>
              <div data-reveal="" className={styles.insuranceCopy}>
                <p className="eyebrow">Insurance</p>
                <h2 id="ins-h" className="section-title">
                  Insurance We Accept
                </h2>
                <p className={styles.intro}>
                  Because we provide both medical and routine eye care, we accept a number of insurance plans to help cover the cost, depending on your needs.
                  Don&apos;t see your plan? Give us a call and we&apos;ll be happy to help with any questions about your benefits.
                </p>
              </div>
            </div>
            <InsurancePlans />
          </div>
        </section>

        <Careers />
      </main>
      <SiteFooter />
      <MobileBookingBar />
      <RevealObserver />
    </div>
  );
}
