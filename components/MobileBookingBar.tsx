import PhoneIcon from "@/components/PhoneIcon";
import { contact } from "@/lib/content";
import styles from "./MobileBookingBar.module.css";

export default function MobileBookingBar() {
  return (
    <div className={styles.bar}>
      <a href={contact.phoneHref} className={styles.secondary}>
        <PhoneIcon />
        Call Us
      </a>
      <a href="/contact#book" className={styles.primary}>
        Book a visit
      </a>
    </div>
  );
}
