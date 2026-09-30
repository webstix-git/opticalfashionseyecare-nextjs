import ImageSlot from "@/components/ImageSlot";
import { myopiaPhoto } from "@/lib/content";
import styles from "./Myopia.module.css";

export default function Myopia() {
  return (
    <section aria-labelledby="myo-h" className={styles.section}>
      <div data-reveal="" className={styles.card}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>For children &amp; families</p>
          <h2 id="myo-h" className="section-title">
            Myopia Management
          </h2>
          <p className={styles.body}>
            Myopia, or nearsightedness, often starts in childhood and can progress as children grow. Myopia management is a plan to monitor your child&apos;s vision
            closely and use lenses or other options aimed at slowing that progression.
          </p>
          <p className={styles.body}>
            One option we offer is Stellest lenses, eyeglass lenses designed for children with myopia. Your doctor will talk through whether they&apos;re a good fit
            for your child and what to expect.
          </p>
          <a href="/eyeglasses-contacts#myopia" className={`btn btn-outline ${styles.cta}`}>
            Learn About Myopia Management
          </a>
        </div>
        <div className={styles.photo}>
          <ImageSlot placeholder={myopiaPhoto.photo} src={myopiaPhoto.src} alt={myopiaPhoto.alt} position="60% center" sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
