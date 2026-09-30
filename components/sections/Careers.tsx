import type { ReactNode } from "react";
import { careerBenefits, careerRoles, careerSkills, locations } from "@/lib/content";
import styles from "./Careers.module.css";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const facts: { label: string; icon: ReactNode; lines: string[]; clinics?: { name: string; address: string; href: string }[] }[] = [
  {
    label: "Locations",
    icon: (
      <Icon>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </Icon>
    ),
    lines: ["This position varies between our two clinics:"],
    clinics: locations.map((l) => ({ name: `${l.name} Clinic`, address: `${l.street}, ${l.city}`, href: l.dir })),
  },
  {
    label: "Hours",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </Icon>
    ),
    lines: ["7:30 AM to 5:30 PM", "May vary slightly based on patient schedules"],
  },
  {
    label: "Transportation",
    icon: (
      <Icon>
        <path d="M5 17H3v-5l2-5h14l2 5v5h-2" />
        <path d="M3 12h18" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
        <path d="M9 17h6" />
      </Icon>
    ),
    lines: ["Reliable transportation is a must for this position!"],
  },
  {
    label: "Training",
    icon: (
      <Icon>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      </Icon>
    ),
    lines: ["We are willing to train the right candidate!"],
  },
];

export default function Careers() {
  return (
    <section id="careers" aria-labelledby="careers-h" className={styles.band}>
      <div className={`container ${styles.section}`}>
        <div data-reveal="" className={styles.head}>
          <p className="eyebrow">Careers</p>
          <h2 id="careers-h" className="section-title">
            Join Our Team
          </h2>
          <p className={styles.intro}>
            We are willing to train the right candidate! We are very passionate about finding a candidate that will be an integral part in our patient experience
            from start to finish.
          </p>
        </div>

        <ol data-reveal="" className={styles.journey} aria-label="Open positions">
          {careerRoles.map((r) => (
            <li key={r.title}>
              <article className={styles.role}>
                <div className={styles.roleIntro}>
                  <h3 className={styles.roleTitle}>{r.title}</h3>
                  <p className={styles.summary}>{r.summary}</p>
                </div>
                <div className={styles.roleDuties}>
                  <h4 className={styles.label}>Their responsibilities include</h4>
                  <ul className={styles.duties}>
                    {r.duties.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <div data-reveal="" className={styles.shared}>
          <div className={styles.sharedHead}>
            <p className="eyebrow">Every position</p>
            <h3 className={styles.subTitle}>The right candidate must have the following</h3>
          </div>
          <ul className={styles.skills}>
            {careerSkills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <dl className={styles.facts}>
            {facts.map((f) => (
              <div key={f.label} className={styles.fact}>
                <span className={styles.factIcon}>{f.icon}</span>
                <div>
                  <dt>{f.label}</dt>
                  {f.lines.map((line) => (
                    <dd key={line}>{line}</dd>
                  ))}
                  {f.clinics?.map((c) => (
                    <dd key={c.name} className={styles.clinic}>
                      <span className={styles.clinicName}>{c.name}</span>
                      <a href={c.href} target="_blank" rel="noopener noreferrer" aria-label={`${c.name}: ${c.address} (opens map in a new tab)`}>
                        {c.address}
                      </a>
                    </dd>
                  ))}
                </div>
              </div>
            ))}
          </dl>
        </div>

        <section data-reveal="" className={styles.benefits} aria-labelledby="benefits-h">
          <div className={styles.benefitsHead}>
            <p className="eyebrow">Full-time positions</p>
            <h3 id="benefits-h" className={styles.subTitle}>
              Benefits Include
            </h3>
          </div>
          <ul className={styles.benefitList}>
            {careerBenefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className={styles.cta}>
            <p>
              <strong>Interested?</strong> Apply today by filling out the employment form.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
