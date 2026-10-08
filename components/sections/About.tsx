import ImageSlot from "@/components/ImageSlot";
import { aboutPhoto, type ImageContent } from "@/lib/content";
import styles from "./About.module.css";

export default function About({ photo = aboutPhoto }: { photo?: ImageContent & { alt: string } }) {
  return (
    <section id="about" aria-labelledby="intro-h" className={styles.band}>
      <div className={`container ${styles.section}`}>
        <div data-reveal="" className={styles.media}>
          <div className={styles.photo}>
            <ImageSlot
              placeholder={photo.photo}
              src={photo.src}
              alt={photo.alt}
              position="center"
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeValue}>64+</span>
            <span className={styles.badgeLabel}>years caring for local families</span>
          </div>
        </div>
        <div data-reveal="" className={styles.copy}>
          <p className="eyebrow">About us</p>
          <h2 id="intro-h" className={styles.title}>
            Eye Care With a&nbsp;Personal Touch
          </h2>
          <p className={styles.body}>
            Since 1962, Optical Fashions Eye Care Clinic has been committed to helping our community see and live better. What began as a small optical practice in
            downtown La Crosse has grown into a trusted team of optometrists and optical professionals serving generations of patients across the area.
          </p>
          <p className={styles.body}>While our practice has grown, one thing has remained the same: our commitment to personal care.</p>
          <p className={styles.body}>
            We take the time to listen, understand your concerns, and provide recommendations based on your individual vision, health, lifestyle, and needs. From
            routine eye exams and children&apos;s vision care to medical eye care and finding the right eyewear, our goal is to make every visit comfortable,
            informative, and personal.
          </p>
          <p className={styles.body}>
            Today, our team continues that tradition across our La Crosse and Holmen locations, combining decades of experience with modern eye-care services and
            technology.
          </p>
          <div className={styles.actions}>
            <a href="/contact#book" className="btn btn-outline">
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
