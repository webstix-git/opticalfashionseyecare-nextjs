import Image from "next/image";
import PhoneIcon from "@/components/PhoneIcon";
import { contact, googleReviewLocations, offices } from "@/lib/content";
import styles from "./Hero.module.css";

function GoogleMark() {
  return (
    <svg className={styles.googleMark} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-h" className={styles.hero}>
      <Image
        src="/images/hero-wide.png"
        alt="An Optical Fashions optometrist talking with a patient in the exam room"
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className={styles.photo}
      />
      <div aria-hidden="true" className={styles.overlay} />
      <div className={styles.inner}>
        <div data-reveal="" className={styles.content}>
          <p className={styles.kicker}>La Crosse &amp; Holmen, Wisconsin</p>
          <h1 id="hero-h" className={styles.title}>
            Professional Eye Care You Trust
          </h1>
          <p className={styles.lead}>
            Since 1962, we&rsquo;ve grown from a small downtown practice into a team of five optometrists who take the time to know every patient and family.
          </p>
          <div className={styles.reviewBadges} aria-label="Google review ratings by location">
            {googleReviewLocations.map((location) => (
              <a key={location.id} href={location.url} target="_blank" rel="noopener noreferrer" className={styles.reviewBadge} aria-label={`Read ${location.label} Google reviews: ${location.rating} out of 5 stars from ${location.count} reviews`}>
                <GoogleMark />
                <span>
                  <span className={styles.badgeLocation}>{location.label}</span>
                  <span className={styles.badgeRating}>{location.rating} <span aria-hidden="true">★</span></span>
                  <span className={styles.badgeCount}>({location.count} reviews)</span>
                </span>
              </a>
            ))}
          </div>
          <div className={styles.actions}>
            <a href={contact.phoneHref} className={`btn ${styles.secondary}`} aria-label={`Call our ${offices.join(" and ")} clinics at ${contact.phone}`}>
              <span className={styles.callText}>
                <span className={styles.callLabel}>{offices.join(" & ")}</span>
                <span className={styles.callNumber}>
                  <PhoneIcon size={18} />
                  {contact.phone}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
