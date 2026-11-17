import Image from "next/image";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <section id="team" aria-labelledby="team-h" className={styles.band}>
      <div className={`container ${styles.section}`}>
        <div data-reveal="" className={styles.media}>
          <Image
            src="/images/home-team-doctors.jpg"
            alt="Optical Fashions optometrist smiling with a patient during an eye exam"
            width={1600}
            height={1200}
            sizes="(max-width: 900px) 100vw, 560px"
            className={styles.photo}
          />
        </div>
        <div data-reveal="" className={styles.copy}>
          <p className="eyebrow">Our doctors</p>
          <h2 id="team-h" className="section-title">
            Meet Our Team of Eye Doctors
          </h2>
          <p className={styles.body}>
            Five optometrists see patients at our La Crosse and Holmen offices. They take the time to explain what they find and make sure every question gets
            answered.
          </p>
          <p className={styles.body}>Get to know each doctor&apos;s background and areas of interest before your visit.</p>
          <a href="/about#doctors" className="btn btn-primary">
            Meet Our Doctors
          </a>
        </div>
      </div>
    </section>
  );
}
