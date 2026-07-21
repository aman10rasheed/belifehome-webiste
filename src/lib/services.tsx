import type { ReactNode } from "react";

const TEAL = "#12454f";
const GOLD = "#c1954c";
const TEAL_BG = "#e8f1f0";
const GOLD_BG = "#f7edda";

function icon(stroke: string, paths: ReactNode) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
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
  bg: string;
  icon: ReactNode;
};

export const services: Service[] = [
  {
    title: "Nursing Care",
    desc: "Skilled RNs for injections, wound care, monitoring and medication management at home.",
    bg: TEAL_BG,
    icon: icon(
      TEAL,
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />,
    ),
  },
  {
    title: "Elderly Care",
    desc: "Compassionate day and night support with mobility, hygiene and companionship.",
    bg: GOLD_BG,
    icon: icon(
      GOLD,
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
      </>,
    ),
  },
  {
    title: "Patient Care",
    desc: "Dedicated attendants for bedridden and chronically ill patients, around the clock.",
    bg: TEAL_BG,
    icon: icon(TEAL, <path d="M22 12h-4l-3 9L9 3l-3 9H2" />),
  },
  {
    title: "Baby Care",
    desc: "Trained nannies and newborn specialists caring for your little ones with love.",
    bg: GOLD_BG,
    icon: icon(
      GOLD,
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="M8.5 14c.8 2.4 6.2 2.4 7 0" />
      </>,
    ),
  },
  {
    title: "Post-Surgery Care",
    desc: "Structured recovery support after operations — dressing, mobility and vitals.",
    bg: TEAL_BG,
    icon: icon(
      TEAL,
      <>
        <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </>,
    ),
  },
  {
    title: "Physiotherapy",
    desc: "Certified physios delivering rehabilitation and pain-relief plans at your home.",
    bg: GOLD_BG,
    icon: icon(
      GOLD,
      <>
        <path d="M3 18l4-8 4 3 3-6 4 11" />
        <path d="M3 21h18" />
      </>,
    ),
  },
  {
    title: "Doctor Visit",
    desc: "On-call doctors for home consultations, check-ups and prescriptions.",
    bg: TEAL_BG,
    icon: icon(
      TEAL,
      <>
        <path d="M6 3v6a4 4 0 0 0 8 0V3" />
        <path d="M10 13v2a5 5 0 0 0 10 0v-1" />
        <circle cx="20" cy="11" r="2" />
      </>,
    ),
  },
  {
    title: "Medical Equipment",
    desc: "Rental and setup of beds, oxygen, wheelchairs and monitoring devices.",
    bg: GOLD_BG,
    icon: icon(
      GOLD,
      <>
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M12 10.5v5M9.5 13h5" />
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
