import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBookingBar from "@/components/MobileBookingBar";
import RevealObserver from "@/components/RevealObserver";
import PageHero from "@/components/PageHero";
import CareTabs from "@/components/CareTabs";
import FaqList from "@/components/FaqList";
import ImageSlot from "@/components/ImageSlot";
import PhoneIcon from "@/components/PhoneIcon";
import {
  contact,
  contactLensTypes,
  designerBrands,
  faqGroups,
  lensOptions,
  myopiaPhoto,
  patientLinks,
  type NavLink,
} from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Eyeglasses & Contact Lenses | Optical Fashions Eye Care Clinic",
  description:
    "Designer frames from Gucci, YSL, Coach, Carolina Herrera, Nike and more, quality lenses, contact lens fittings, Stellest lenses for kids with myopia, and value packages in La Crosse and Holmen, WI.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Eyeglasses & Contacts", item: "/eyeglasses-contacts" },
  ],
};

const tabs: NavLink[] = [
  { label: "Designer Frames", href: "#brands" },
  { label: "Lenses", href: "#lenses" },
  { label: "Contact Lenses", href: "#contacts" },
  { label: "Myopia Control", href: "#myopia" },
  { label: "Value Packages", href: "#value" },
];

const eyewearFaqs = [
  ...(faqGroups.find((g) => g.id === "eyewear")?.items ?? []),
  ...faqGroups.flatMap((g) => g.items).filter((f) => f.q === "What is myopia control?"),
];

const valueCards = [
  {
    title: "Same-Day Savings",
    body: "No vision insurance? Save 25% on your eye exam and 20% on glasses when you pay on the day of your visit.",
  },
  {
    title: "Value Packages & Promotions",
    body: "Packages and offers on glasses that change through the year. Call or stop by to hear what's available right now.",
  },
  {
    title: "Year-Supply Contact Deals",
    body: "Order a year's supply of contact lenses and ask us about special deals.",
  },
  {
    title: "Using Vision Insurance?",
    body: "We accept Blue View Vision, EyeMed and VSP. Call our front desk with your plan details and we'll help you understand your coverage.",
  },
];

export default function EyeglassesContactsPage() {
  return (
    <div id="top" className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <PageHero
          crumb="Eyeglasses & Contacts"
          image="/images/eyewear/eyeglasses-banner.jpg"
          imageSize={{ width: 1024, height: 409 }}
          title="Eyeglasses & Contacts"
          intro="Designer frames, quality lenses and contact lenses, fitted by a team that knows your eyes. Visit our optical shop in La Crosse or Holmen."
        />

        <CareTabs tabs={tabs} />

        <section aria-labelledby="shop-h" className={styles.band}>
          <div className={`container ${styles.section} ${styles.split}`}>
            <div data-reveal="" className={styles.copy}>
              <p className="eyebrow">Our optical shop</p>
              <h2 id="shop-h" className="section-title">
                Glasses That Fit Your Face and Your Life
              </h2>
              <p className={styles.body}>
                Picking new glasses should be fun, not a chore. Our opticians help you narrow things down by face shape, prescription, budget and the way you
                actually spend your day, then make sure your new pair sits comfortably before you leave.
              </p>
              <p className={styles.body}>
                Because your eye exam and your eyewear happen under one roof, your prescription comes straight to the people fitting your lenses. Nothing gets lost
                along the way.
              </p>
            </div>
            <div data-reveal="" className={`${styles.media} ${styles.landscape}`}>
              <ImageSlot
                placeholder="Photo: patient trying on glasses at the mirror in the optical shop"
                src="/images/eyewear/optical-shop-try-on.jpg"
                alt="Man trying on tortoiseshell glasses while looking at his reflection in a mirror"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section id="brands" aria-labelledby="brands-h" className={`${styles.band} ${styles.alt}`}>
          <div className={`container ${styles.section}`}>
            <div data-reveal="" className={styles.head}>
              <p className="eyebrow">Designer frames</p>
              <h2 id="brands-h" className="section-title">
                Brands We Carry
              </h2>
              <p className={styles.intro}>
                From luxury labels to tough everyday frames and sport styles, there&apos;s something for every face and budget. Our selection changes often, so
                stop in to see what&apos;s new.
              </p>
            </div>
            <ul data-reveal="" className={styles.brandGrid}>
              {designerBrands.map((b) => (
                <li key={b.name} className={styles.brand}>
                  <Image src={b.src} alt={b.name} width={133} height={110} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="lenses" aria-labelledby="lenses-h" className={styles.band}>
          <div className={`container ${styles.section}`}>
            <div className={styles.split}>
              <div data-reveal="" className={`${styles.media} ${styles.landscape}`}>
                <ImageSlot
                  placeholder="Photo: eyeglass frames on lit glass shelves in the optical shop"
                  src="/images/eyewear/lenses-display.jpg"
                  alt="Optician holding a display of tinted lens samples in front of a wall of frames"
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <div data-reveal="" className={styles.copy}>
                <p className="eyebrow">Lenses</p>
                <h2 id="lenses-h" className="section-title">
                  Lenses Made for the Way You See
                </h2>
                <p className={styles.body}>
                  The right lenses matter as much as the frame. Your optician will help you choose based on your prescription, your work and how much time you
                  spend on screens or outdoors.
                </p>
                <a href="/contact#book" className="btn btn-primary">
                  Book an Eye Exam
                </a>
              </div>
            </div>
            <ul data-reveal="" aria-label="Common lens options" className={styles.lensGrid}>
              {lensOptions.map((l) => (
                <li key={l.title} className={styles.lensCard}>
                  <h3 className={styles.cardTitle}>{l.title}</h3>
                  <p className={styles.cardText}>{l.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contacts" aria-labelledby="contacts-h" className={`${styles.band} ${styles.alt}`}>
          <div className={`container ${styles.section} ${styles.split}`}>
            <div data-reveal="" className={styles.copy}>
              <p className="eyebrow">Contact lenses</p>
              <h2 id="contacts-h" className="section-title">
                Contact Lens Exams and Fittings
              </h2>
              <p className={styles.body}>
                A contact lens exam goes a step beyond a glasses exam. Your doctor measures the surface of your eye and checks how each lens sits and moves, so
                your contacts feel comfortable as well as look clear. We fit many types of lenses, including:
              </p>
              <ul className={styles.checklist}>
                {contactLensTypes.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className={styles.callout}>
                <p>
                  <strong>Already wear contacts?</strong> Order or reorder online and have them shipped straight to your door.
                </p>
              </div>
              <div className={styles.actions}>
                <a
                  href={patientLinks.contactLenses}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order Contact Lenses (opens in a new tab)"
                  className="btn btn-primary"
                >
                  Order Contact Lenses
                </a>
                <a href="/contact#book" className="btn btn-outline">
                  Book a Contact Lens Exam
                </a>
              </div>
            </div>
            <div data-reveal="" className={`${styles.media} ${styles.landscape}`}>
              <ImageSlot
                placeholder="Photo: contact lens on a fingertip"
                src="/images/service-contact-lenses.jpg"
                alt="Close-up of a person placing a soft contact lens on their fingertip toward their eye"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section id="myopia" aria-labelledby="myopia-h" className={`${styles.band} ${styles.myopiaBand}`}>
          <div data-reveal="" className={styles.myopia}>
            <div className={styles.myopiaCopy}>
              <p className={`eyebrow ${styles.myopiaEyebrow}`}>For children &amp; families</p>
              <h2 id="myopia-h" className="section-title">
                Myopia Control
              </h2>
              <p className={styles.myopiaText}>
                Myopia, or nearsightedness, often begins in childhood and can get worse as children grow. Myopia control means monitoring your child&apos;s
                vision closely and using lenses or other options aimed at slowing that progression.
              </p>
              <p className={styles.myopiaText}>
                One option we offer is Stellest lenses, eyeglass lenses designed for children with myopia. Your doctor will explain whether they&apos;re a good fit
                for your child and what to expect.
              </p>
              <a href="/contact#book" className="btn btn-dark">
                Book a Myopia Consultation
              </a>
            </div>
            <div className={styles.myopiaMedia}>
              <ImageSlot placeholder={myopiaPhoto.photo} src={myopiaPhoto.src} alt={myopiaPhoto.alt} position="15% center" sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          </div>
        </section>

        <section id="value" aria-labelledby="value-h" className={`${styles.band} ${styles.alt}`}>
          <div className={`container ${styles.section}`}>
            <div data-reveal="" className={styles.head}>
              <p className="eyebrow">Value packages &amp; promotions</p>
              <h2 id="value-h" className="section-title">
                No Vision Insurance? We&apos;ve Got Options.
              </h2>
              <p className={styles.intro}>
                Good eyewear shouldn&apos;t depend on having the right insurance. If you&apos;re paying out of pocket, ask us about value packages and current
                promotions on glasses, and special deals on a year&apos;s supply of contact lenses.
              </p>
            </div>
            <ul data-reveal="" className={styles.valueGrid}>
              {valueCards.map((v) => (
                <li key={v.title} className={styles.valueCard}>
                  <h3 className={styles.cardTitle}>{v.title}</h3>
                  <p className={styles.cardText}>{v.body}</p>
                </li>
              ))}
            </ul>
            <div className={styles.center}>
              <a href={contact.phoneHref} className="btn btn-primary">
                <PhoneIcon />
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="eyefaq-h" className={styles.band}>
          <div className={`container ${styles.section}`}>
            <div data-reveal="" className={styles.head}>
              <p className="eyebrow">FAQ</p>
              <h2 id="eyefaq-h" className="section-title">
                Glasses &amp; Contacts Questions
              </h2>
            </div>
            <div data-reveal="" className={styles.faq}>
              <FaqList items={eyewearFaqs} idPrefix="eyewear-page" />
            </div>
            <div className={styles.center}>
              <a href="/faq" className="btn btn-outline">
                View All FAQs
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileBookingBar />
      <RevealObserver />
    </div>
  );
}
