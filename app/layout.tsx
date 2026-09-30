import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import BackToTop from "@/components/BackToTop";
import PromoPopup from "@/components/PromoPopup";
import { a11yInitScript } from "@/lib/a11y-init";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/Manrope-latin.woff2",
  weight: "400 800",
  display: "swap",
  variable: "--font-manrope",
});

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-latin.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Optometrist in La Crosse & Holmen, WI | Optical Fashions Eye Care Clinic",
  description:
    "Personalized eye care in La Crosse and Holmen, Wisconsin since 1962. Eye exams, dry eye, glaucoma, myopia management, contact lenses and designer eyewear.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: a11yInitScript }} />
      </head>
      <body>
        {children}
        <BackToTop />
        <AccessibilityMenu />
        <PromoPopup />
      </body>
    </html>
  );
}
