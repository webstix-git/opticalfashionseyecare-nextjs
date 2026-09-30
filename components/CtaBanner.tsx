import Image from "next/image";
import PhoneIcon from "@/components/PhoneIcon";
import { contact } from "@/lib/content";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <section aria-labelledby="cta-banner-h" className={styles.banner}>
      <Image
        src="/images/cta-glasses.jpg"
        alt=""
        fill
        sizes="100vw"
        className={styles.photo}
      />
      <div aria-hidden="true" className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <h2 id="cta-banner-h" className={styles.title}>
          Book Your Next Eye Exam
        </h2>
        <p className={styles.text}>
          Whether it&rsquo;s a routine check-up, new glasses or an eye concern that can&rsquo;t wait, our doctors in La Crosse and Holmen are ready to
          help your whole family see clearly.
        </p>
        <div className={styles.actions}>
          <a href="/contact#book" className="btn btn-primary">
            Request an Appointment
          </a>
          <a href={contact.phoneHref} className={`btn ${styles.secondary}`}>
            <PhoneIcon />
            Call {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
