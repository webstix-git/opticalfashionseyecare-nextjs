import Image from "next/image";
import PhoneIcon from "@/components/PhoneIcon";
import { contact, medicalPlans, visionPlans, type InsurancePlan } from "@/lib/content";
import styles from "./InsurancePlans.module.css";

const groups: { id: string; title: string; text: string; plans: InsurancePlan[] }[] = [
  {
    id: "vision",
    title: "Vision Plans We Accept",
    text: "Vision insurance is a wellness benefit for routine eye exams, prescription eyewear and other vision services at a reduced cost.",
    plans: visionPlans,
  },
  {
    id: "medical",
    title: "Medical Plans We Accept",
    text: "Medical insurance covers unexpected eye injuries and eye disease, such as infections, dry eye, glaucoma and cataracts.",
    plans: medicalPlans,
  },
];

export default function InsurancePlans() {
  return (
    <>
      <div className={styles.plans}>
        {groups.map((g) => (
          <div key={g.id} data-reveal="" className={styles.planCard}>
            <div className={styles.planHead}>
              <h3 className={styles.planTitle}>{g.title}</h3>
              <p className={styles.planText}>{g.text}</p>
            </div>
            <ul className={styles.logoGrid} aria-label={g.title}>
              {g.plans.map((p) => (
                <li key={p.name} className={styles.logo}>
                  <Image src={p.src} alt={p.name} width={p.width} height={p.height} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div data-reveal="" className={styles.savings}>
        <div className={styles.savingsCopy}>
          <h3 className={styles.planTitle}>No Vision Insurance?</h3>
          <p className={styles.savingsText}>
            Save <strong>25% on your eye exam</strong> and <strong>10% on glasses</strong> when you pay on the day of your visit.
          </p>
        </div>
        <div className={styles.savingsActions}>
          <a href={contact.phoneHref} className="btn btn-primary">
            <PhoneIcon />
            Call {contact.phone}
          </a>
          <a href="/eyeglasses-contacts#value" className="btn btn-outline">
            See Eyewear Options
          </a>
        </div>
      </div>
      <aside data-reveal="" className={styles.notice} aria-labelledby="insurance-notice-h">
        <span className={styles.noticeIcon} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </span>
        <div className={styles.noticeBody}>
          <h3 id="insurance-notice-h" className={styles.noticeTitle}>
            Please Note
          </h3>
          <p className={styles.noticeText}>
            <strong>All products and services must be paid on the day of service.</strong> We may not be contracted with every network within these plans, so
            please <strong>contact your insurance company to confirm we&apos;re a provider for your specific plan.</strong> We&apos;ll do our best to help you
            understand your insurance and answer any questions about your benefits.
          </p>
        </div>
      </aside>
    </>
  );
}
