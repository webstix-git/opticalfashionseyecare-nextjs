import ImageSlot from "@/components/ImageSlot";
import { services } from "@/lib/content";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" aria-labelledby="svc-h" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div data-reveal="" className={styles.head}>
          <div className={styles.headTitle}>
            <p className="eyebrow">Eye care services</p>
            <h2 id="svc-h" className="section-title">
              Our Eye Care Services
            </h2>
          </div>
        </div>
        <div className={styles.grid}>
          {services.map((s) => (
            <a key={s.title} href={s.href ?? "#"} className={styles.card}>
              <div className={styles.media}>
                <ImageSlot placeholder={s.photo} src={s.src} alt={s.alt} position={s.position} sizes="(max-width: 899px) 100vw, 33vw" />
              </div>
              <div className={styles.body}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <span className={styles.more}>{s.cta} →</span>
              </div>
            </a>
          ))}
        </div>
        <div className={styles.footer}>
          <a href="/eye-care-services" className={`btn btn-outline btn-sm ${styles.all}`}>
            Explore All Eye Care Services
          </a>
        </div>
      </div>
    </section>
  );
}
