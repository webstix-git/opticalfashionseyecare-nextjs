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
          Ready to come in?
          <br />
          Current patients can book through their patient portal or give us a call.
          <br />
          New patients, please call the office and we&apos;ll get you scheduled.
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
          <p>
            Current patients can schedule through their portal or call the office.
            <br />
            New patients, please call the office to schedule an appointment.
            <br />
            Both clinics share one phone number.
          </p>
          <div className={styles.actions}>
            <div className={styles.portalActions}>
              {patientLinks.portals.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-primary ${styles.portalButton}`}
                  aria-label={`Schedule an Appointment in ${p.location} (opens in a new tab)`}
                >
                  Schedule an Appointment
                  <span className={styles.portalLocation}>{p.location}</span>
                </a>
              ))}
            </div>
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
