import type { Metadata } from "next";
import InformationPage from "@/components/InformationPage";
import { contact } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Accessibility Statement | Optical Fashions Eye Care Clinic",
  description:
    "Our commitment to an accessible website for everyone, the accessibility features available on this site, and how to get help or report a problem.",
};

const features = [
  { title: "Keyboard navigation", text: "Every menu, button and form can be reached with the keyboard, with a clear focus outline." },
  { title: "Skip to content", text: "A \"Skip to content\" link lets keyboard and screen reader users jump past the menu." },
  { title: "Text alternatives", text: "Images include descriptive alternative text, and decorative images are hidden from screen readers." },
  { title: "Clear structure", text: "Pages use headings, landmarks and lists so assistive technology can move through them easily." },
  { title: "Accessible forms", text: "Form fields have visible labels, required fields are marked, and errors are explained in text." },
  { title: "Readable design", text: "Text and background colors are chosen for strong contrast, and the layout adapts to any screen size or zoom level." },
  { title: "Motion you control", text: "Slideshows have controls, and moving effects stop when your device asks for reduced motion." },
  { title: "Tap-to-call", text: "Phone numbers are links, so you can call our clinics with a single tap on a mobile device." },
];

const menuOptions = [
  { label: "Text size", text: "Make all text larger in two steps." },
  { label: "High contrast", text: "Darken text and strengthen borders and focus outlines." },
  { label: "Underline links", text: "Underline every link so it's easy to spot." },
  { label: "Readable spacing", text: "Add more space between lines, letters and words." },
  { label: "Pause animations", text: "Stop slideshows, scrolling effects and other movement." },
];

export default function AccessibilityPage() {
  return (
    <InformationPage
      crumb="Accessibility"
      title="Accessibility Statement"
      intro="We want everyone to be able to learn about our clinics, find our services and contact us with confidence."
    >
      <section>
        <h2>Our Commitment</h2>
        <p>
          {contact.businessName} is committed to making our website usable for all visitors, including people with disabilities and people who use assistive
          technology such as screen readers, magnifiers, voice control or keyboard-only navigation. Accessibility is an ongoing effort, and we continue to review
          and improve the site.
        </p>
      </section>

      <section>
        <h2>Our Standard</h2>
        <p>
          We aim to meet the{" "}
          <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</a>
          . These guidelines explain how to make web content more accessible for people with a wide range of disabilities, and they are the standard most
          commonly used for the Americans with Disabilities Act (ADA).
        </p>
      </section>

      <section>
        <h2>Accessibility Features</h2>
        <ul className={styles.features}>
          {features.map((f) => (
            <li key={f.title} className={styles.feature}>
              <span className={styles.featureTitle}>{f.title}</span>
              <span className={styles.featureText}>{f.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Using the Accessibility Menu</h2>
        <p>
          Select the round <strong>accessibility button</strong> in the bottom-right corner of any page to open the menu. Your choices are saved on your device
          and apply to every page until you change them or select <strong>Reset all</strong>.
        </p>
        <dl className={styles.options}>
          {menuOptions.map((o) => (
            <div key={o.label} className={styles.option}>
              <dt>{o.label}</dt>
              <dd>{o.text}</dd>
            </div>
          ))}
        </dl>
        <p>
          You can also use the accessibility settings built into your browser and device, such as zoom, screen readers, high contrast modes and reduced motion.
          This site is designed to work with them.
        </p>
      </section>

      <section>
        <h2>Third-Party Content</h2>
        <p>
          Some features are provided by other companies, including our patient portal, online patient forms, FAIT contact lens ordering, Google Maps, Google reviews and social media. We
          choose partners with care, but we can&apos;t fully control the accessibility of their content. If you have trouble with any of these, call us and
          we&apos;ll help you directly.
        </p>
      </section>

      <section>
        <h2>Need Help or Found a Problem?</h2>
        <p>
          If any part of this website is difficult to use, or you need information in a different format, please let us know. Our team can help you book an
          appointment, complete forms or answer questions over the phone.
        </p>
        <div className={styles.contact}>
          <div>
            <span className={styles.contactLabel}>Call</span>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </div>
          <div>
            <span className={styles.contactLabel}>Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
        <p>
          When you contact us, it helps to include the page address, a short description of the problem, and the browser or assistive technology you were
          using. Please don&apos;t include personal health information in your email.
        </p>
      </section>

      <section>
        <h2>Accommodations at Our Clinics</h2>
        <p>
          If you need an accommodation for your visit, such as extra time, help completing paperwork or a support person with you, let us know when you book. We
          will do our best to make your visit comfortable.
        </p>
      </section>

      <section>
        <h2>Ongoing Improvements</h2>
        <p>We review this website regularly and update this statement as we make improvements.</p>
        <p className={styles.updated}>Last reviewed: September 2026</p>
      </section>
    </InformationPage>
  );
}
