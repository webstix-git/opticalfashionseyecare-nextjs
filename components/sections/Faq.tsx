import FaqList from "@/components/FaqList";
import { faqs } from "@/lib/content";
import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-h" className={styles.band}>
      <div className={`container ${styles.section}`}>
        <div data-reveal="" className={styles.head}>
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-h" className="section-title">
            Frequently Asked Questions
          </h2>
          <p className={styles.intro}>Straight answers to the questions our patients ask most often.</p>
        </div>
        <div data-reveal="" className={styles.list}>
          <FaqList items={faqs} idPrefix="faq" />
        </div>
        <div className={styles.more}>
          <a href="/faq" className="btn btn-outline">
            View All FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
