import type { ReactNode } from "react";

/**
 * Service icons are hand-drawn on a 24x24 grid at 1.8 stroke with round caps
 * and joins, matching the rest of the UI. They inherit `currentColor` from the
 * tile, so tone is set once in CSS rather than per icon.
 *
 * Dots use the `h.01` + round-linecap trick so they stay perfectly circular at
 * any size.
 */
function icon(paths: ReactNode) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
}

export type Service = {
  title: string;
  desc: string;
  tone: "teal" | "gold";
  icon: ReactNode;
};

export const services: Service[] = [
  {
    title: "Nursing Care",
    desc: "Skilled RNs for injections, wound care, monitoring and medication management at home.",
    tone: "teal",
    // Stethoscope
    icon: icon(
      <>
        <circle cx="6" cy="3.2" r="1" />
        <circle cx="16" cy="3.2" r="1" />
        <path d="M6 4.2v4.8a5 5 0 0 0 10 0V4.2" />
        <path d="M11 14v2a3.5 3.5 0 0 0 3.5 3.5" />
        <circle cx="17" cy="19.5" r="2.5" />
      </>,
    ),
  },
  {
    title: "Elderly Care",
    desc: "Compassionate day and night support with mobility, hygiene and companionship.",
    tone: "gold",
    // Standing figure with a walking cane
    icon: icon(
      <>
        <circle cx="9" cy="4" r="2.2" />
        <path d="M9 6.2V13" />
        <path d="m9 13-2 8M9 13l2 8" />
        <path d="m9 8.6 7 3.4" />
        <path d="M16 21v-8.8a2.6 2.6 0 0 1 2.6-2.6" />
      </>,
    ),
  },
  {
    title: "Patient Care",
    desc: "Dedicated attendants for bedridden and chronically ill patients, around the clock.",
    tone: "teal",
    // Patient resting in a hospital bed
    icon: icon(
      <>
        <path d="M3 21V11" />
        <path d="M3 17h18v4" />
        <circle cx="7" cy="13" r="1.8" />
        <path d="M10 17c0-1.7 1.3-3 3-3h6" />
      </>,
    ),
  },
  {
    title: "Baby Care",
    desc: "Trained nannies and newborn specialists caring for your little ones with love.",
    tone: "gold",
    // Smiling infant with a curl
    icon: icon(
      <>
        <circle cx="12" cy="12.5" r="7" />
        <path d="M9.5 11h.01" />
        <path d="M14.5 11h.01" />
        <path d="M9.5 15.2a3.4 3.4 0 0 0 5 0" />
        <path d="M12 5.5c.4-1.5 2.5-1.6 2.9-.2" />
      </>,
    ),
  },
  {
    title: "Post-Surgery Care",
    desc: "Structured recovery support after operations — dressing, mobility and vitals.",
    tone: "teal",
    // Adhesive dressing
    icon: icon(
      <>
        <rect
          x="2.5"
          y="8.5"
          width="19"
          height="7"
          rx="3.5"
          transform="rotate(-45 12 12)"
        />
        <path d="M9.7 12h.01" />
        <path d="M12 9.7h.01" />
        <path d="M12 14.3h.01" />
        <path d="M14.3 12h.01" />
      </>,
    ),
  },
  {
    title: "Physiotherapy",
    desc: "Certified physios delivering rehabilitation and pain-relief plans at your home.",
    tone: "gold",
    // Figure mid-stretch — arms raised, stance open
    icon: icon(
      <>
        <circle cx="12" cy="4" r="2.2" />
        <path d="M12 6.2v6.6" />
        <path d="m12 12.8-3.5 8.2M12 12.8l3.5 8.2" />
        <path d="M12 8.6 7.6 5.4M12 8.6l4.4-3.2" />
      </>,
    ),
  },
  {
    title: "Doctor Visit",
    desc: "On-call doctors for home consultations, check-ups and prescriptions.",
    tone: "teal",
    // House call — home with a medical cross
    icon: icon(
      <>
        <path d="m3 10.5 9-7 9 7" />
        <path d="M5.5 9v11.5h13V9" />
        <path d="M12 12v5M9.5 14.5h5" />
      </>,
    ),
  },
  {
    title: "Medical Equipment",
    desc: "Rental and setup of beds, oxygen, wheelchairs and monitoring devices.",
    tone: "gold",
    // Wheelchair
    icon: icon(
      <>
        <circle cx="11" cy="4" r="2" />
        <path d="M11 6v5.5h5" />
        <path d="m16 11.5 1.6 4.2H20" />
        <circle cx="10.5" cy="16" r="5" />
      </>,
    ),
  },
];

export const assurances = [
  "Background-verified, trained caregivers",
  "Personalised care plan within the hour",
  "Transparent pricing — no hidden costs",
];

export const serviceOptions = [
  "Nursing Care",
  "Elderly Care",
  "Patient Care",
  "Baby Care",
  "Post-Surgery Care",
  "Physiotherapy",
  "Doctor Visit",
  "Medical Equipment Rental",
  "Palliative Care",
  "Other",
];
