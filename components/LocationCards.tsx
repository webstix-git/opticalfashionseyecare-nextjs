import Image from "next/image";
import PhoneIcon from "@/components/PhoneIcon";
import { contact, locations } from "@/lib/content";
import styles from "./LocationCards.module.css";

const icon = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const PinIcon = () => (
  <svg {...icon} width={18} height={18} aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const SignIcon = () => (
  <svg {...icon} width={18} height={18} aria-hidden="true">
    <path d="M12 3v18M8 21h8" />
    <path d="M5 6h12l2.5 2.5L17 11H5z" />
  </svg>
);

const ClockIcon = () => (
  <svg {...icon} width={16} height={16} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

/** One card per clinic with photo, address, phone, hours, directions notes and actions. */
export default function LocationCards() {
  return (
    <div className={styles.locations}>
      {locations.map((l) => (
        <article key={l.name} data-reveal="" className={styles.location}>
          <a
            href={l.dir}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.photo}
            aria-label={`${l.name} clinic on Google Maps (opens in a new tab)`}
          >
            <Image
              src={l.photo}
              alt={l.photoAlt}
              fill
              sizes="(max-width: 900px) 100vw, 600px"
              className={styles.photoImg}
              style={l.photoPosition ? { objectPosition: l.photoPosition } : undefined}
            />
          </a>
          <div className={styles.locationHead}>
            <h3 className={styles.locationTitle}>{l.name} Clinic</h3>
            <p className={styles.locationSub}>
              {contact.businessName} – {l.name}
            </p>
          </div>
          <dl className={styles.details}>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>
                <PinIcon />
              </span>
              <div>
                <dt>Address</dt>
                <dd>
                  <address className={styles.address}>
                    <a href={l.dir} target="_blank" rel="noopener noreferrer" aria-label={`${l.street}, ${l.city} (opens map in a new tab)`}>
                      {l.street}
                      <br />
                      {l.city}
                    </a>
                  </address>
                </dd>
              </div>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>
                <PhoneIcon size={18} />
              </span>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={contact.phoneHref} className={styles.detailLink}>
                    {contact.phone}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
          <div className={styles.hours}>
            <span className={styles.hoursTitle}>
              <ClockIcon />
              Clinic hours
            </span>
            <dl className={styles.hoursList}>
              {l.hours.map((h) => (
                <div key={h.days} className={h.time === "Closed" ? styles.closed : undefined}>
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          {l.note && (
            <div className={styles.finding}>
              <p className={styles.findingTitle}>
                <SignIcon />
                Finding us
              </p>
              <ul className={styles.findingList}>
                {l.note.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          )}
          <div className={styles.locationActions}>
            <a href={l.dir} target="_blank" rel="noopener" className="btn btn-primary">
              <PinIcon />
              Get Directions
            </a>
            <a href={contact.phoneHref} className="btn btn-outline">
              <PhoneIcon />
              Call the Clinic
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
