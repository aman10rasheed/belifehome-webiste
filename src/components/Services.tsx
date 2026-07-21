import { services } from "@/lib/services";
import { ArrowRightBoldIcon } from "./icons";

export default function Services() {
  return (
    <section id="services" className="bl-services">
      <div className="bl-serv-head">
        <div>
          <span className="bl-eyebrow">Our Services</span>
          <h2 className="bl-serv-h2">
            Complete home healthcare, tailored to every need
          </h2>
        </div>
        <p className="bl-serv-intro">
          From skilled nursing to everyday companionship — trained professionals
          matched to your family&apos;s exact requirements.
        </p>
      </div>

      <div className="bl-services-grid">
        {services.map((service) => (
          <a key={service.title} href="#enquiry" className="bl-service-card">
            <div className="bl-service-icon" style={{ background: service.bg }}>
              {service.icon}
            </div>
            <h3 className="bl-service-title">{service.title}</h3>
            <p className="bl-service-desc">{service.desc}</p>
            <span className="bl-service-link">
              Learn more
              <ArrowRightBoldIcon />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
