"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { applyA11y, defaultA11y, readA11y, saveA11y, type A11ySettings } from "@/lib/a11y";
import styles from "./AccessibilityMenu.module.css";

const textSizes: { value: A11ySettings["text"]; label: string; name: string }[] = [
  { value: 0, label: "A", name: "Default text size" },
  { value: 1, label: "A+", name: "Large text" },
  { value: 2, label: "A++", name: "Largest text" },
];

const toggles: { key: Exclude<keyof A11ySettings, "text">; label: string; hint: string }[] = [
  { key: "contrast", label: "High contrast", hint: "Darker text and stronger borders" },
  { key: "links", label: "Underline links", hint: "Make every link easy to spot" },
  { key: "spacing", label: "Readable spacing", hint: "More space between lines and words" },
  { key: "motion", label: "Pause animations", hint: "Stop slideshows and moving effects" },
];

function AccessIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="4.2" r="2" fill="currentColor" />
      <path
        d="M4.5 8.2c2.4.7 4.9 1 7.5 1s5.1-.3 7.5-1M12 9.2v5.3m0 0-3 6.3m3-6.3 3 6.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(defaultA11y);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const panelId = useId();
  const sizeId = useId();

  // React's dev remount clears attributes the head script set on <html>, so re-apply them here.
  useLayoutEffect(() => {
    const saved = readA11y();
    applyA11y(saved);
    setSettings(saved);
  }, []);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const update = (next: A11ySettings) => {
    setSettings(next);
    applyA11y(next);
    saveA11y(next);
  };

  const changed = JSON.stringify(settings) !== JSON.stringify(defaultA11y);

  return (
    <div className={styles.root}>
      {open && (
        <div ref={panelRef} id={panelId} role="dialog" aria-labelledby={titleId} className={styles.panel}>
          <div className={styles.head}>
            <h2 id={titleId} className={styles.title}>
              Accessibility
            </h2>
            <button
              type="button"
              className={styles.close}
              aria-label="Close accessibility options"
              onClick={() => {
                setOpen(false);
                buttonRef.current?.focus();
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <p className={styles.intro}>Adjust the site to suit you. Your choices are saved on this device.</p>

          <div className={styles.group}>
            <p id={sizeId} className={styles.groupLabel}>
              Text size
            </p>
            <div role="group" aria-labelledby={sizeId} className={styles.sizes}>
              {textSizes.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  aria-label={t.name}
                  aria-pressed={settings.text === t.value}
                  className={styles.size}
                  onClick={() => update({ ...settings, text: t.value })}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <ul className={styles.toggles}>
            {toggles.map((t) => (
              <li key={t.key}>
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings[t.key]}
                  className={styles.toggle}
                  onClick={() => update({ ...settings, [t.key]: !settings[t.key] })}
                >
                  <span className={styles.toggleText}>
                    <span className={styles.toggleLabel}>{t.label}</span>
                    <span className={styles.toggleHint}>{t.hint}</span>
                  </span>
                  <span className={styles.switch} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.foot}>
            <button type="button" className={styles.reset} onClick={() => update(defaultA11y)} disabled={!changed}>
              Reset all
            </button>
            <a href="/accessibility" className={styles.statement}>
              Accessibility Statement
            </a>
          </div>
        </div>
      )}

      <button
        ref={buttonRef}
        type="button"
        className={styles.trigger}
        aria-label="Accessibility options"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((o) => !o)}
      >
        <AccessIcon />
      </button>
    </div>
  );
}
