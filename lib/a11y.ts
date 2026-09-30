import { useSyncExternalStore } from "react";
import { A11Y_STORAGE_KEY } from "@/lib/a11y-init";

export type A11ySettings = {
  text: 0 | 1 | 2;
  contrast: boolean;
  links: boolean;
  spacing: boolean;
  motion: boolean;
};

export const defaultA11y: A11ySettings = { text: 0, contrast: false, links: false, spacing: false, motion: false };

/** Each preference is mirrored as a `data-a11y-*` attribute on <html>; globals.css styles off those. */
export function applyA11y(s: A11ySettings) {
  const el = document.documentElement;
  if (s.text) el.setAttribute("data-a11y-text", String(s.text));
  else el.removeAttribute("data-a11y-text");
  for (const key of ["contrast", "links", "spacing", "motion"] as const) {
    el.toggleAttribute(`data-a11y-${key}`, s[key]);
  }
}

export function readA11y(): A11ySettings {
  try {
    const saved = JSON.parse(localStorage.getItem(A11Y_STORAGE_KEY) ?? "null");
    return saved ? { ...defaultA11y, ...saved } : defaultA11y;
  } catch {
    return defaultA11y;
  }
}

export function saveA11y(s: A11ySettings) {
  try {
    localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(s));
  } catch {}
}

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** True when the visitor's OS asks for reduced motion or they turned on "Pause animations". */
export function motionReduced() {
  return document.documentElement.hasAttribute("data-a11y-motion") || window.matchMedia(MOTION_QUERY).matches;
}

function subscribeMotion(onChange: () => void) {
  const mq = window.matchMedia(MOTION_QUERY);
  mq.addEventListener("change", onChange);
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-a11y-motion"] });
  return () => {
    mq.removeEventListener("change", onChange);
    mo.disconnect();
  };
}

export function useReducedMotion() {
  return useSyncExternalStore(subscribeMotion, motionReduced, () => false);
}
