"use client";

import { useState, type ReactNode } from "react";
import { contact, type Faq } from "@/lib/content";
import styles from "./FaqList.module.css";

const phonePattern = /\(\d{3}\) \d{3}-\d{4}/g;

function linkNode(key: string, href: string, text: string) {
  if (/^https?:\/\//.test(href)) {
    return (
      <a key={key} href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }
  return (
    <a key={key} href={href}>
      {text}
    </a>
  );
}

function linkPhones(text: string, keyPrefix: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const pattern = new RegExp(phonePattern.source, "g");
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const number = match[0];
    const href = number === contact.phone ? contact.phoneHref : `tel:${number.replace(/\D/g, "")}`;
    parts.push(
      <a key={`${keyPrefix}-${match.index}`} href={href}>
        {number}
      </a>,
    );
    last = match.index + number.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : [text];
}

function renderAnswer({ a, links }: Faq): ReactNode {
  const segments: { text: string; href?: string }[] = [];
  let rest = a;
  for (const link of links ?? []) {
    const at = rest.indexOf(link.text);
    if (at < 0) continue;
    if (at > 0) segments.push({ text: rest.slice(0, at) });
    segments.push({ text: link.text, href: link.href });
    rest = rest.slice(at + link.text.length);
  }
  if (rest) segments.push({ text: rest });
  if (!segments.length) segments.push({ text: a });

  return segments.flatMap((segment, i) => {
    if (segment.href) return [linkNode(`link-${i}`, segment.href, segment.text)];
    return linkPhones(segment.text, `phone-${i}`);
  });
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
