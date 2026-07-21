import Image from "next/image";

const moments = [
  {
    src: "/images/nursing-care-blood-pressure-check.jpg",
    title: "Nursing Care",
    caption: "Vitals, medication and wound care at home",
    alt: "A nurse checking an elderly woman's blood pressure in her living room",
  },
  {
    src: "/images/patient-care-bedside-support.jpg",
    title: "Patient Care",
    caption: "Round-the-clock bedside attendants",
    alt: "A caregiver adjusting the pillow of an elderly man resting in bed at home",
  },
  {
    src: "/images/physiotherapy-home-session.jpg",
    title: "Physiotherapy",
    caption: "Rehabilitation and pain-relief plans",
    alt: "A physiotherapist guiding an older man through a shoulder exercise at home",
  },
  {
    src: "/images/baby-care-newborn-nanny.jpg",
    title: "Baby Care",
    caption: "Trained nannies and newborn specialists",
    alt: "A smiling nanny holding a happy baby in a nursery",
  },
];

export default function CareInAction() {
  return (
    <section className="bl-moments" aria-labelledby="care-in-action-heading">
      <div className="bl-moments-head">
        <span className="bl-eyebrow">Care in action</span>
        <h2 id="care-in-action-heading" className="bl-moments-h2">
          Real care, in real homes
        </h2>
        <p className="bl-moments-intro">
          Every visit is delivered by a trained, background-verified professional
          — matched to the person, not just the condition.
        </p>
      </div>

      {/* Becomes a horizontal snap rail under 900px; tabIndex keeps it
          scrollable by keyboard there. */}
      <div
        className="bl-moments-grid"
        role="group"
        aria-label="Photographs of Be Life care visits"
        tabIndex={0}
      >
        {moments.map((moment) => (
          <figure key={moment.title} className="bl-moment">
            <Image
              src={moment.src}
              alt={moment.alt}
              width={1254}
              height={1254}
              className="bl-moment-img"
              sizes="(max-width: 620px) 92vw, (max-width: 1024px) 46vw, 23vw"
            />
            <figcaption className="bl-moment-caption">
              <span className="bl-moment-title">{moment.title}</span>
              <span className="bl-moment-text">{moment.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
