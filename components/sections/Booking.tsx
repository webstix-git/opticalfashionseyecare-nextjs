import PhoneIcon from "@/components/PhoneIcon";
import { contact, patientLinks } from "@/lib/content";
import styles from "./Booking.module.css";

export default function Booking() {
  return (
    <section id="book" aria-labelledby="cta-h" className={`container ${styles.section}`}>
      <div data-reveal="" className={styles.copy}>
        <h2 id="cta-h" className={styles.title}>
          Schedule an Appointment
        </h2>
        <p className={styles.lead}>
          Our schedule changes quickly, so the best way to book is online in the patient portal or by phone. Pick a time that works for you, or call and we&apos;ll
          find one together.
        </p>
        <p className={styles.urgent}>
          For an urgent eye concern, please call the clinic directly at{" "}
          <a href={contact.phoneHref} className="tel-link">
            <PhoneIcon size={16} />
            {contact.phone}
          </a>
          .
        </p>
      </div>
      <div data-reveal="" className={styles.card}>
        <div className={styles.schedule}>
          <h3>Book Your Visit</h3>
          <p>Schedule online through the patient portal, or call our office. Both clinics share one phone number.</p>
          <div className={styles.actions}>
            <a
              href={patientLinks.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Schedule in the Patient Portal (opens in a new tab)"
            >
              Schedule in the Patient Portal
            </a>
            <a href={contact.phoneHref} className="btn btn-outline">
              <PhoneIcon />
              Call {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
