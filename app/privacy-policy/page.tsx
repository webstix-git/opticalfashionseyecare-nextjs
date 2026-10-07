import type { Metadata } from "next";
import InformationPage from "@/components/InformationPage";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Optical Fashions Eye Care Clinic",
  description: "Privacy information for visitors to the Optical Fashions Eye Care Clinic website.",
};

export default function PrivacyPolicyPage() {
  return (
    <InformationPage crumb="Privacy Policy" title="Privacy Policy" intro="How we handle information collected through this website.">
      <section>
        <h2>Information We Collect</h2>
        <p>When you use a patient form linked from this website, you may choose to provide information such as your name, contact details, and insurance information. Appointments are scheduled in the patient portal or by phone.</p>
        <p>Please do not send detailed medical information, insurance numbers, or other sensitive health information through ordinary email.</p>
      </section>
      <section>
        <h2>How We Use Information</h2>
        <p>We use the information you provide to prepare for your visit, improve the website, and communicate with you about your inquiry. We do not sell personal information.</p>
      </section>
      <section>
        <h2>Third-Party Services</h2>
        <p>This website may link to services such as Google Maps, Google Reviews, social networks, online patient forms, the patient portal, and online contact lens ordering. Those services have their own privacy practices, which apply when you use them.</p>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>If you have a question about this policy or your information, call <a href={contact.phoneHref}>{contact.phone}</a> or email <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
      </section>
    </InformationPage>
  );
}
