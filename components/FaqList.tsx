"use client";

import { useState, type ReactNode } from "react";
import type { Faq } from "@/lib/content";
import styles from "./FaqList.module.css";

function renderAnswer({ a, links }: Faq): ReactNode {
  if (!links?.length) return a;
  const parts: ReactNode[] = [];
  let rest = a;
  for (const link of links) {
    const at = rest.indexOf(link.text);
    if (at < 0) continue;
    parts.push(
      rest.slice(0, at),
      <a key={link.text} href={link.href} target="_blank" rel="noopener noreferrer">
        {link.text}
      </a>,
    );
    rest = rest.slice(at + link.text.length);
  }
  parts.push(rest);
  return parts;
}

type Props = {
  items: Faq[];
  idPrefix: string;
};

export default function FaqList({ items, idPrefix }: Props) {
  const [open, setOpen] = useState<boolean[]>(() => items.map(() => true));

  const toggle = (i: number) => setOpen((prev) => prev.map((v, j) => (j === i ? !v : v)));

  return (
    <div className={styles.list}>
      {items.map((f, i) => {
        const isOpen = open[i];
        return (
          <div key={f.q} className={styles.item}>
            <h3 className={styles.heading}>
              <button
                type="button"
                id={`${idPrefix}-b-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-p-${i}`}
                className={styles.trigger}
                onClick={() => toggle(i)}
              >
                <span>{f.q}</span>
                <span aria-hidden="true" className={styles.sign}>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            {isOpen && (
              <div id={`${idPrefix}-p-${i}`} role="region" aria-labelledby={`${idPrefix}-b-${i}`} className={styles.panel}>
                <p>{renderAnswer(f)}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
