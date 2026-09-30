import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBookingBar from "@/components/MobileBookingBar";
import RevealObserver from "@/components/RevealObserver";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Myopia from "@/components/sections/Myopia";
import Eyewear from "@/components/sections/Eyewear";
import Team from "@/components/sections/Team";
import Reviews from "@/components/sections/Reviews";
import Faq from "@/components/sections/Faq";
import { contact, locations, socialLinks } from "@/lib/content";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Optometric",
  name: contact.businessName,
  foundingDate: "1962",
  telephone: contact.phone,
  faxNumber: contact.fax,
  email: contact.email,
  sameAs: socialLinks.map((s) => s.href),
  location: [
    {
      "@type": "Place",
      name: `${contact.businessName} – La Crosse`,
      hasMap: locations[0].dir,
      address: { "@type": "PostalAddress", streetAddress: "2104 WI-16", addressLocality: "La Crosse", addressRegion: "WI", postalCode: "54601" },
    },
    {
      "@type": "Place",
      name: `${contact.businessName} – Holmen`,
      hasMap: locations[1].dir,
      address: { "@type": "PostalAddress", streetAddress: "814 S. Main Street", addressLocality: "Holmen", addressRegion: "WI", postalCode: "54636" },
    },
  ],
};

export default function Home() {
  return (
    <div id="top" className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Services />
        <Eyewear />
        <About />
        <Myopia />
        <Team />
        <Reviews />
        <Faq />
      </main>
      <SiteFooter />
      <MobileBookingBar />
      <RevealObserver />
    </div>
  );
}
