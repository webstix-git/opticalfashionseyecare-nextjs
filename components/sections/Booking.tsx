import PhoneIcon from "@/components/PhoneIcon";
import { contact, patientLinks } from "@/lib/content";
import styles from "./Booking.module.css";

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

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
          <p className={styles.prompt}>Choose the option that best describes you.</p>
          <div className={styles.panel}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Current Patients</h4>
              <p className={styles.columnText}>
                Already a patient? Schedule your next appointment through our patient portal or call our office.
              </p>
              <div className={styles.portalActions}>
                {patientLinks.portals.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-primary ${styles.portalButton}`}
                    aria-label={`Schedule Online in ${p.location} (opens in a new tab)`}
                  >
                    <span className={styles.portalText}>
                      Schedule Online
                      <span className={styles.portalLocation}>{p.location}</span>
                    </span>
                    <span className={styles.portalArrow}>
                      <ArrowIcon />
                    </span>
                  </a>
                ))}
              </div>
              <p className={styles.or} aria-hidden="true">
                OR
              </p>
              <a href={contact.phoneHref} className={`btn btn-outline ${styles.callOutline}`}>
                Call {contact.phone}
              </a>
            </div>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>New Patients</h4>
              <p className={styles.columnText}>
                New to Optical Fashions? Please call our office to schedule your first appointment.
              </p>
              <a href={contact.phoneHref} className={styles.callGreen} aria-label={`Call to schedule at ${contact.phone}`}>
                Call to Schedule
                <span className={styles.callPhone}>{contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
