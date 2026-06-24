const WHATSAPP_FALLBACK = "https://wa.me/";
const BOOK_CALL_FALLBACK =
  "mailto:hello@penkra.com?subject=Book%20a%20call";
const CONTACT_EMAIL_FALLBACK = "hello@penkra.com";

export function whatsappLink(message: string): string {
  const base = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? WHATSAPP_FALLBACK;
  const url = new URL(base);
  if (url.searchParams.has("text")) {
    url.searchParams.set("text", message);
  } else {
    url.searchParams.set("text", message);
  }
  return url.toString();
}

export function bookCallLink(): string {
  return process.env.NEXT_PUBLIC_BOOK_CALL_URL ?? BOOK_CALL_FALLBACK;
}

export function contactEmail(): string {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? CONTACT_EMAIL_FALLBACK;
}

export function mailtoLink(): string {
  return `mailto:${contactEmail()}`;
}
