"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type Booking = {
  office: string;
  reason: string;
  setOffice: (office: string) => void;
  setReason: (reason: string) => void;
  goToForm: (focusName?: boolean) => void;
};

const BookingContext = createContext<Booking | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [office, setOffice] = useState("");
  const [reason, setReason] = useState("");

  const goToForm = useCallback((focusName = false) => {
    const el = document.getElementById("book");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
    if (focusName) setTimeout(() => document.getElementById("book-name")?.focus({ preventScroll: true }), 600);
  }, []);

  const value = useMemo(() => ({ office, reason, setOffice, setReason, goToForm }), [office, reason, goToForm]);

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}
