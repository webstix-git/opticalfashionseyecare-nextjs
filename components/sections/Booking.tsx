"use client";

import { useState } from "react";
import { useBooking } from "@/components/BookingContext";
import PhoneIcon from "@/components/PhoneIcon";
import { contact, offices, reasons, timings } from "@/lib/content";
import styles from "./Booking.module.css";

type Errors = { name?: boolean; email?: boolean; phone?: boolean; reason?: boolean };

const Req = () => (
  <span className={styles.req} aria-hidden="true">
    *
  </span>
);

export default function Booking() {
  const { office, reason, setOffice, setReason } = useBooking();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const hasErrors = Object.values(errors).some(Boolean);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = (name: string) => (form.elements.namedItem(name) as HTMLInputElement).value;
    const next: Errors = {
      name: !value("name").trim(),
      email: !/^\S+@\S+\.\S+$/.test(value("email")),
      phone: value("phone").replace(/\D/g, "").length < 7,
      reason: !value("reason"),
    };
    if (Object.values(next).some(Boolean)) {
      setErrors(next);
      const first = (["name", "email", "phone", "reason"] as const).find((k) => next[k]);
      if (first) (form.elements.namedItem(first) as HTMLInputElement).focus();
      return;
    }
    setErrors({});
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setOffice("");
    setReason("");
  };

  return (
    <section id="book" aria-labelledby="cta-h" className={`container ${styles.section}`}>
      <div data-reveal="" className={styles.copy}>
        <h2 id="cta-h" className={styles.title}>
          Let&apos;s Take Care of Your Vision.
        </h2>
        <p className={styles.lead}>From routine exams to specialized eye care, we&apos;re here to help you and your family see clearly and care for your eye health.</p>
        <p className={styles.urgent}>
          For an urgent eye concern, please call the clinic directly at{" "}
          <a href={contact.phoneHref} className="tel-link">
            <PhoneIcon size={16} />
            {contact.phone}
          </a>
          .
        </p>
      </div>
      <div data-reveal="" className={styles.card}>
        {sent ? (
          <div role="status" className={styles.thanks}>
            <span aria-hidden="true" className={styles.check}>
              ✓
            </span>
            <h3>Thank you. We&apos;ve received your request.</h3>
            <p>Our team will contact you to confirm a time. If your concern is urgent, please call the clinic.</p>
            <button type="button" className="btn btn-outline" onClick={reset}>
              Send another request
            </button>
          </div>
        ) : (
          <form noValidate onSubmit={onSubmit} className={styles.form}>
            <div className={`${styles.full} ${styles.formHead}`}>
              <h3>Request an Appointment</h3>
              <p className={styles.reqNote}>
                Fields marked with <Req /> are required.
              </p>
            </div>
            <label className={`field ${styles.full}`}>
              <span>
                Full name <Req />
              </span>
              <input id="book-name" name="name" required autoComplete="name" aria-invalid={!!errors.name} className="field-control" />
            </label>
            <label className="field">
              <span>
                Email <Req />
              </span>
              <input name="email" type="email" required autoComplete="email" aria-invalid={!!errors.email} className="field-control" />
            </label>
            <label className="field">
              <span>
                Phone <Req />
              </span>
              <input name="phone" type="tel" required autoComplete="tel" aria-invalid={!!errors.phone} className="field-control" />
            </label>
            <label className="field">
              Preferred clinic
              <select name="location" className="field-control" value={office} onChange={(e) => setOffice(e.target.value)}>
                <option value="">No preference</option>
                {offices.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>
                Reason for visit <Req />
              </span>
              <select
                name="reason"
                required
                aria-invalid={!!errors.reason}
                className="field-control"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              >
                {reasons.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </label>
            <label className={`field ${styles.full}`}>
              Preferred timing
              <select name="timing" className="field-control">
                {timings.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className={`field ${styles.full}`}>
              <span>
                Message <span className={styles.optional}>Optional</span>
              </span>
              <textarea name="message" rows={3} className="field-control" />
            </label>
            {hasErrors && (
              <p role="alert" className={`${styles.full} ${styles.error}`}>
                Please fill in all required fields, with a valid email and phone number.
              </p>
            )}
            <button type="submit" className={`btn btn-primary ${styles.full} ${styles.submit}`}>
              Send Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
