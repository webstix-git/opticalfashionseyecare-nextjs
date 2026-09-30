import type { Metadata } from "next";
import InformationPage from "@/components/InformationPage";
import { contact } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AI Policy | Optical Fashions Eye Care Clinic",
  description:
    "How Optical Fashions Eye Care Clinic uses artificial intelligence, what we never use it for, how we protect patient privacy, and how to get accurate information about our clinic.",
};

const summary = [
  "Our optometrists make every clinical decision. AI never diagnoses, treats or prescribes.",
  "We may use AI tools to help draft and organize website content and routine office work, and a person reviews it before it's used.",
  "We never enter patient health information into public AI tools.",
  "For accurate details about our clinic, rely on this website or call us directly.",
];

const usesFor = [
  "Drafting and editing website content, such as service descriptions and FAQs",
  "Improving readability, spelling and accessibility of written materials",
  "Organizing general information, such as hours, locations and services",
  "Supporting routine administrative tasks that do not involve patient health information",
];

const neverFor = [
  "Diagnosing eye conditions or interpreting your test results",
  "Deciding on treatment, medication or surgical care",
  "Writing or changing glasses or contact lens prescriptions",
  "Answering individual medical questions on behalf of our doctors",
  "Making decisions about your appointments, insurance or billing without staff review",
];

export default function AiPolicyPage() {
  return (
    <InformationPage
      crumb="AI Policy"
      title="AI Policy"
      intro="How we use artificial intelligence responsibly, what we never use it for, and how we protect your privacy."
    >
      <aside className={styles.summary} aria-labelledby="ai-summary-h">
        <h2 id="ai-summary-h">The Short Version</h2>
        <ul>
          {summary.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </aside>

      <section>
        <h2>Our Commitment</h2>
        <p>
          {contact.businessName} has cared for families in La Crosse and Holmen since 1962. Technology can help us work more efficiently, but it will never
          replace the judgment, experience and personal attention of our optometrists and staff. This policy explains where AI fits into our work and where it
          does not.
        </p>
      </section>

      <div className={styles.compare}>
        <section className={styles.card}>
          <h2>How We May Use AI</h2>
          <ul className={styles.list}>
            {usesFor.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </section>
        <section className={`${styles.card} ${styles.cardNever}`}>
          <h2>What We Never Use AI For</h2>
          <ul className={styles.list}>
            {neverFor.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>
      </div>

      <section>
        <h2>Human Review</h2>
        <p>
          Anything created with the help of AI is reviewed, edited and approved by our team before it appears on our website or in our communications. Clinical
          information is checked for accuracy, and our doctors remain responsible for all patient care.
        </p>
      </section>

      <section>
        <h2>Your Privacy</h2>
        <p>
          We do not enter patient names, health records, insurance details or other personal health information into public AI tools. Your information is handled
          only through our approved patient systems, in line with applicable privacy laws, including HIPAA. To learn how this website handles information, see our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>AI Assistants &amp; Search Engines</h2>
        <p>
          Chatbots, AI assistants and search engines may summarize information about our clinic. We don&apos;t control those tools, and their answers can be out of
          date or incorrect. For accurate details about our services, hours, locations and insurance, use this website, including our{" "}
          <a href="/service-index">AI Readiness Service Index</a>, or call us at <a href={contact.phoneHref}>{contact.phone}</a>.
        </p>
      </section>

      <section>
        <h2>Not Medical Advice</h2>
        <p>
          General information on this website, including content prepared with the help of AI, is for education only. It does not replace an eye exam, diagnosis or
          advice from an optometrist. If you have an urgent eye concern, call us at <a href={contact.phoneHref}>{contact.phone}</a> for a same-day appointment. For a
          severe eye injury, seek emergency care right away.
        </p>
      </section>

      <section>
        <h2>Questions or Concerns</h2>
        <p>
          If you have questions about how we use AI, call <a href={contact.phoneHref}>{contact.phone}</a> or email{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>. Please don&apos;t include personal health information in your email.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>We may update this policy as technology and our practices change. The date below shows when it was last reviewed.</p>
        <p className={styles.updated}>Last reviewed: September 2026</p>
      </section>
    </InformationPage>
  );
}
