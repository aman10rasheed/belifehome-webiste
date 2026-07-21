import Image from "next/image";
import { waHref } from "@/lib/site";
import { ArrowRightIcon, CheckCircleIcon, WhatsAppIcon } from "./icons";

const stats = [
  { value: "1000+", label: "Happy families" },
  { value: "250+", label: "Qualified caregivers" },
  { value: "24/7", label: "Support & care" },
];

export default function Hero() {
  return (
    <section id="top" className="bl-hero">
      <div className="bl-hero-ring-1" aria-hidden="true" />
      <div className="bl-hero-ring-2" aria-hidden="true" />
      <div className="bl-hero-glow" aria-hidden="true" />

      <div className="bl-hero-grid">
        <div className="bl-hero-copy">
          <span className="bl-hero-badge">
            <span className="bl-hero-badge-dot" aria-hidden="true" />
            Trusted across India &amp; the Gulf
          </span>

          <h1 className="bl-hero-h1">
            Premium care for your parents,
            <br />
            <em>in the comfort of home.</em>
          </h1>

          <p className="bl-hero-sub">
            Compassionate, qualified caregivers delivering personalised nursing,
            elderly and post-surgery care — so the people you love stay safe,
            cared for, and dignified at home.
          </p>

          <div className="bl-hero-actions">
            <a href="#enquiry" className="bl-cta-primary">
              Book a Service
              <ArrowRightIcon />
            </a>
            <a
              href={waHref}
              className="bl-cta-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>

          <div className="bl-hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="bl-stat-value">{stat.value}</div>
                <div className="bl-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bl-hero-media">
          <div className="bl-hero-frame">
            <Image
              src="/images/hero-caregiver-with-elderly-woman.jpg"
              alt="A Be Life caregiver in teal scrubs smiling with an elderly woman seated at home"
              width={1122}
              height={1402}
              className="bl-hero-img"
              sizes="(max-width: 900px) 92vw, 46vw"
              priority
            />
            <div className="bl-hero-frame-tint" aria-hidden="true" />
          </div>

          <div className="bl-hero-card">
            <div className="bl-hero-card-icon">
              <CheckCircleIcon />
            </div>
            <div>
              <div className="bl-hero-card-title">Background-verified</div>
              <div className="bl-hero-card-sub">Every caregiver, always</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
