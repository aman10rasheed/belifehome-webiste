import { telHref, waHref } from "@/lib/site";
import { PhoneSolidIcon, WhatsAppIcon } from "./icons";

export default function ConsultationDock() {
  return (
    <div className="bl-dock">
      <a
        href={waHref}
        className="bl-dock-wa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bl-dock-wa-icon">
          <WhatsAppIcon size={21} />
        </span>
        <span className="bl-dock-label">Get Free Consultation</span>
      </a>
      <a href={telHref} aria-label="Call now" className="bl-dock-call">
        <PhoneSolidIcon />
      </a>
    </div>
  );
}
