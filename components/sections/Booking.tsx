import { contact, patientLinks } from "@/lib/content";
import styles from "./Booking.module.css";

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const callForTags = ["Medical eye visits", "Follow-ups", "OCT imaging", "Visual field (VF) testing"];

export default function Booking() {
  return (
    <section id="book" aria-labelledby="cta-h" className={`container ${styles.section}`}>
      <div data-reveal="" className={styles.copy}>
        <p className="eyebrow">Appointments</p>
        <h2 id="cta-h" className={styles.title}>
          Schedule an Appointment
        </h2>
        <p className={styles.lead}>
          We&apos;re here to make scheduling your eye care simple and convenient. Whether you&apos;re a new patient or returning for a visit, we&apos;re here to help you schedule your appointment at a time that works for you.
        </p>

        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>What can I book online?</h3>
          <p className={styles.infoText}>
            Online scheduling is for <strong>routine eye exams</strong> only. Please call us for:
          </p>
          <ul className={styles.tags}>
            {callForTags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.urgent}>
          <span className={styles.urgentDot} aria-hidden="true" />
          <span>
            Urgent eye concern? Call the clinic directly at{" "}
            <a href={contact.phoneHref}>{contact.phone}</a>.
          </span>
        </p>
      </div>

      <div data-reveal="" className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Book your visit</h3>
          <p className={styles.prompt}>Choose the option that best describes you.</p>
        </div>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <h4 className={styles.blockTitle}>Current Patients</h4>
            <span className={`${styles.badge} ${styles.badgeOnline}`}>Book online</span>
          </div>
          <p className={styles.blockText}>Book a routine eye exam through the patient portal. Select your location:</p>
          <div className={styles.portalActions}>
            {patientLinks.portals.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.portalButton}
                aria-label={`Schedule online in ${p.location} (opens in a new tab)`}
              >
                <span className={styles.portalText}>
                  <span className={styles.portalLabel}>Schedule online</span>
                  <span className={styles.portalLocation}>{p.location}</span>
                </span>
                <span className={styles.portalArrow}>
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
          <p className={styles.otherVisit}>
            Need a different type of visit? Call{" "}
            <a href={contact.phoneHref}>{contact.phone}</a>
          </p>
        </div>

        <div className={styles.block}>
          <div className={styles.blockHead}>
            <h4 className={styles.blockTitle}>New Patients</h4>
            <span className={`${styles.badge} ${styles.badgeWelcome}`}>Welcome!</span>
          </div>
          <p className={styles.blockText}>
            New to Optical Fashions? Give us a call and our team will help schedule your first appointment.
          </p>
          <a href={contact.phoneHref} className={styles.callButton} aria-label={`Call ${contact.phone}`}>
            Call {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
