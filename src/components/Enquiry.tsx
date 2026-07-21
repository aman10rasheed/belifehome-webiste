import { assurances } from "@/lib/services";
import EnquiryForm from "./EnquiryForm";
import { CheckIcon } from "./icons";

export default function Enquiry() {
  return (
    <section id="enquiry" className="bl-enquiry">
      <div className="bl-enquiry-glow" aria-hidden="true" />

      <div className="bl-enquiry-grid">
        <div>
          <span className="bl-eyebrow bl-eyebrow-gold">Book Care</span>
          <h2 className="bl-enquiry-h2">Request a caregiver in minutes</h2>
          <p className="bl-enquiry-sub">
            Tell us what you need. Our care team calls you back within the hour
            to confirm a personalised plan — no obligation.
          </p>

          <div className="bl-assurances">
            {assurances.map((assurance) => (
              <div key={assurance} className="bl-assurance">
                <span className="bl-assurance-badge">
                  <CheckIcon />
                </span>
                <span className="bl-assurance-text">{assurance}</span>
              </div>
            ))}
          </div>
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}
