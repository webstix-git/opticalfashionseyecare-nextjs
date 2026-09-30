"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./PromoPopup.module.css";

const STORAGE_KEY = "of-promo-dismissed";
const HIDE_FOR_MS = 12 * 60 * 60 * 1000;

function dismissedRecently() {
  try {
    return Date.now() - Number(localStorage.getItem(STORAGE_KEY) || 0) < HIDE_FOR_MS;
  } catch {
    return false;
  }
}

function rememberDismissal() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {}
}

export default function PromoPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dismissedRecently()) return;
    const timer = setTimeout(() => {
      const dialog = dialogRef.current;
      if (dialog && !dialog.open) dialog.showModal();
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-label="Special offers"
      className={styles.dialog}
      onClose={rememberDismissal}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <button type="button" className={styles.close} aria-label="Close offer" onClick={close}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </button>
      <a href="/contact#book" className={styles.banner} onClick={close}>
        <Image
          src="/images/promo-offers.jpg"
          alt="Promotional discounts and offers: 25% off eye exams and 15% off a complete pair of glasses. Book your appointment. Cannot be combined with insurance or other offers. Offer only available on same day purchases. Other exclusions apply."
          width={1024}
          height={768}
          sizes="(max-width: 720px) 92vw, 640px"
          className={styles.image}
        />
      </a>
    </dialog>
  );
}
