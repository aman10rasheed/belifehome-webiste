import Image from "next/image";
import { email, phone, telHref, waHref } from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneOutlineGoldIcon,
  PinIcon,
  WhatsAppIcon,
} from "./icons";

const serviceLinks = [
  "Nursing Care",
  "Elderly Care",
  "Post-Surgery Care",
  "Physiotherapy",
  "Doctor Visit",
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Book Care", href: "#enquiry" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bl-footer">
      <div className="bl-footer-grid">
        <div>
          <Image
            src="/be-life-logo.png"
            alt="Be Life Premium Home Care"
            width={485}
            height={514}
            className="bl-footer-logo"
          />
          <p className="bl-footer-about">
            Compassionate, professional home healthcare across India and the
            Gulf — bringing comfort, dignity, and expert care to your
            family&apos;s doorstep.
          </p>
          <div className="bl-socials">
            <a href="#" aria-label="Facebook" className="bl-social">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="bl-social">
              <InstagramIcon />
            </a>
            <a
              href={waHref}
              aria-label="WhatsApp"
              className="bl-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={17} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="bl-footer-h4">Services</h4>
          <ul className="bl-footer-list">
            {serviceLinks.map((label) => (
              <li key={label}>
                <a href="#services">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="bl-footer-h4">Company</h4>
          <ul className="bl-footer-list">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="bl-footer-h4">Get in touch</h4>
          <ul className="bl-contact-list">
            <li className="bl-contact-item">
              <PhoneOutlineGoldIcon />
              <a href={telHref}>{phone}</a>
            </li>
            <li className="bl-contact-item">
              <MailIcon />
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li className="bl-contact-item">
              <PinIcon />
              <span>Kerala, India &amp; Dubai, UAE</span>
            </li>
            <li className="bl-emergency">
              <span className="bl-emergency-dot" aria-hidden="true" />
              <span className="bl-emergency-text">
                24/7 Emergency line open
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bl-footer-bottom">
        <span>© 2026 Be Life Premium Home Care. All rights reserved.</span>
        <div className="bl-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
