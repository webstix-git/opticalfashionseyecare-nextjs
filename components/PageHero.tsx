import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import styles from "./PageHero.module.css";

type Props = {
  title: string;
  intro: string;
  crumb: string;
  image: string;
  /** Focal point when the photo is fitted into the standard 1024x436 banner frame. */
  imagePosition?: string;
  /** Uses a lighter text fade so more of a particularly detailed photo remains visible. */
  lightOverlay?: boolean;
  /** A long, gradual fade that clears before the right side of the photo. */
  softOverlay?: boolean;
  /** Shows the photo at its exact pixel size, uncropped and served as the original file. */
  imageSize?: { width: number; height: number };
  actions?: ReactNode;
};

const frame = { width: 1024, height: 436 };

export default function PageHero({ title, intro, crumb, image, imagePosition = "center", imageSize, actions, lightOverlay = false, softOverlay = false }: Props) {
  const { width, height } = imageSize ?? frame;
  const heroStyle = { "--hero-w": `${width}px`, "--hero-h": `${height}px`, "--hero-ratio": `${width} / ${height}` } as CSSProperties;

  return (
    <div className={styles.wrap}>
      <section className={`${styles.hero} ${lightOverlay ? styles.lightOverlay : ""} ${softOverlay ? styles.softOverlay : ""}`} style={heroStyle}>
        <div className={styles.media}>
          {imageSize ? (
            <Image src={image} alt="" width={imageSize.width} height={imageSize.height} priority unoptimized className={styles.exactPhoto} />
          ) : (
            <Image src={image} alt="" fill priority sizes="(max-width: 1023px) 100vw, 1024px" className={styles.photo} style={{ objectPosition: imagePosition }} />
          )}
        </div>
        <div aria-hidden="true" className={styles.overlay} />
        <div className={`container ${styles.inner}`}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.intro}>{intro}</p>
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      </section>
      <nav aria-label="Breadcrumb" className={styles.crumbBar}>
        <ol className={`container ${styles.crumbs}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li aria-current="page">{crumb}</li>
        </ol>
      </nav>
    </div>
  );
}
