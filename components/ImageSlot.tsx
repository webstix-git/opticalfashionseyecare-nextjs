import Image from "next/image";
import styles from "./ImageSlot.module.css";

type ImageSlotProps = {
  placeholder: string;
  src?: string;
  alt?: string;
  sizes?: string;
  position?: string;
};

/**
 * Fills its nearest positioned ancestor. Shows a labelled placeholder until
 * a `src` is provided.
 */
export default function ImageSlot({ placeholder, src, alt = "", sizes = "100vw", position }: ImageSlotProps) {
  if (src) {
    return (
      <div className={styles.slot}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={styles.image}
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
    );
  }

  return (
    <div className={`${styles.slot} ${styles.empty}`} role="img" aria-label={placeholder}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className={styles.caption}>{placeholder}</span>
    </div>
  );
}
