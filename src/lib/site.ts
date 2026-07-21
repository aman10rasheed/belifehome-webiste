/**
 * Single source of truth for contact details.
 * These mirror the `phoneNumber` / `whatsappNumber` props of the original design,
 * and can be overridden per-environment without touching components.
 */
const digits = (value: string) => value.replace(/[^0-9]/g, "");

export const phone =
  process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "+91 90000 00000";

export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? phone;

export const telHref = `tel:+${digits(phone)}`;
export const waHref = `https://wa.me/${digits(whatsappNumber)}`;

export const email = "care@belifehomecare.com";
