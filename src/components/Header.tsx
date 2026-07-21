import Image from "next/image";
import { telHref } from "@/lib/site";
import { PhoneIcon } from "./icons";

export default function Header() {
  return (
    <header className="bl-header">
      <div className="bl-header-inner">
        <a href="#top" className="bl-logo-link">
          <Image
            src="/be-life-logo.png"
            alt="Be Life Premium Home Care"
            width={364}
            height={413}
            className="bl-logo"
            priority
          />
        </a>
        <nav className="bl-nav">
          <span className="bl-nav-links">
            <a href="#top">Home</a>
            <a href="#services">Services</a>
            <a href="#enquiry">Book Care</a>
            <a href="#contact">Contact</a>
          </span>
          <a href={telHref} className="bl-call-btn">
            <PhoneIcon />
            Call Now
          </a>
          <a href="#enquiry" className="bl-book-btn">
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
