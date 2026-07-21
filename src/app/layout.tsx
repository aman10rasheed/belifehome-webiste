import type { Metadata } from "next";
import { Mulish, Playfair_Display } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-mulish",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Be Life Premium Home Care — Nursing & Elderly Care at Home",
  description:
    "Compassionate, qualified caregivers delivering personalised nursing, elderly and post-surgery care at home across India and the Gulf.",
  openGraph: {
    title: "Be Life Premium Home Care",
    description:
      "Premium care for your parents, in the comfort of home. Background-verified caregivers, 24/7 support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mulish.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
