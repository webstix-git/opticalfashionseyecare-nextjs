import type { ReactNode } from "react";
import MobileBookingBar from "@/components/MobileBookingBar";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import styles from "./InformationPage.module.css";

type InformationPageProps = {
  title: string;
  intro: string;
  crumb: string;
  contentClassName?: string;
  children: ReactNode;
};

export default function InformationPage({ title, intro, crumb, contentClassName, children }: InformationPageProps) {
  return (
    <div id="top" className="page">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <PageHero crumb={crumb} image="/images/about-hero.png" imageSize={{ width: 951, height: 436 }} lightOverlay title={title} intro={intro} />
        <article className={["container", styles.content, contentClassName].filter(Boolean).join(" ")}>{children}</article>
      </main>
      <SiteFooter />
      <MobileBookingBar />
    </div>
  );
}
