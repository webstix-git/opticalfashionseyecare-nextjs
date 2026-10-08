import Image from "next/image";
import ImageSlot from "@/components/ImageSlot";
import { eyewearPhotos, featuredBrands, patientLinks } from "@/lib/content";
import styles from "./Eyewear.module.css";

export default function Eyewear() {
  const [main, detailA, detailB] = eyewearPhotos;

  return (
    <section id="eyewear" aria-labelledby="eye-h" className={styles.band}>
      <div className={`container ${styles.section}`}>
        <div className={styles.grid}>
          <div data-reveal="" className={styles.copy}>
            <p className="eyebrow">Eyeglasses &amp; contacts</p>
            <h2 id="eye-h" className="section-title">
              Frames You&apos;ll Love Wearing.
            </h2>
            <p className={styles.body}>
              Browse designer frames and quality lenses with an optician who helps you find a pair that fits your face, your prescription and the way you live. We
              also fit contact lenses. Order or reorder them online and have them shipped to you.
            </p>
            <div className={styles.actions}>
              <a href="/eyeglasses-contacts" className="btn btn-primary">
                Explore Eyewear
              </a>
              <a
                href={patientLinks.contactLenses}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order Contact Lenses (opens in a new tab)"
                className="btn btn-outline"
              >
                Order Contact Lenses
              </a>
            </div>
          </div>
          <div data-reveal="" className={styles.tall}>
            <ImageSlot placeholder={main.photo} src={main.src} alt={main.alt} sizes="(max-width: 900px) 100vw, 33vw" />
          </div>
          <div data-reveal="" className={styles.square}>
            <ImageSlot placeholder={detailA.photo} src={detailA.src} alt={detailA.alt} sizes="(max-width: 900px) 50vw, 33vw" />
          </div>
          <div data-reveal="" className={styles.square}>
            <ImageSlot placeholder={detailB.photo} src={detailB.src} alt={detailB.alt} sizes="(max-width: 900px) 50vw, 33vw" />
          </div>
        </div>
        <div data-reveal="" className={styles.brands}>
          <span className={styles.brandsLabel}>Designer frames we carry</span>
          <ul className={styles.brandList}>
            {featuredBrands.map((b) => (
              <li key={b.name} className={styles.brand}>
                <Image src={b.src} alt={b.name} width={133} height={110} />
              </li>
            ))}
          </ul>
          <a href="/eyeglasses-contacts#brands" className={`btn btn-outline ${styles.brandsBtn}`}>
            Explore More Frames
          </a>
        </div>
      </div>
    </section>
  );
}
