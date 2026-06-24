import { whatsappLink } from "./links";

export const TRUST_LABELS = [
  "WhatsApp-first",
  "Human-reviewed",
  "Itemized charges",
  "Country-specific",
  "Records kept",
  "Monthly invoicing",
];

export const HOME_REQUEST_CARDS = [
  {
    title: "Register a business",
    message: "I need help registering a business in Ghana.",
    href: "/ghana/business-registration",
  },
  {
    title: "Prepare paperwork or forms",
    message: "I need help preparing paperwork or forms.",
  },
  {
    title: "Follow up on an application",
    message: "I need help following up on an application.",
  },
  {
    title: "Organize records",
    message: "I need help organizing records.",
  },
  {
    title: "Coordinate logistics",
    message: "I need help coordinating logistics.",
  },
  {
    title: "Handle recurring admin",
    message: "I need help with recurring admin work.",
  },
  {
    title: "Ask about something custom",
    message: "I have a custom request I'd like to discuss.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Tell us what you need",
    body: "Message Penkra on WhatsApp or book a call. You do not need to know the exact process first.",
  },
  {
    step: "02",
    title: "We clarify the work",
    body: "We confirm steps, documents, timing, and likely costs before anything starts.",
  },
  {
    step: "03",
    title: "We handle it and update you",
    body: "We do the preparation, filing, follow-up, and coordination, and keep you posted on WhatsApp.",
  },
  {
    step: "04",
    title: "You get records and an invoice",
    body: "Final documents are organized, reminders set where useful, and billing is itemized monthly.",
  },
];

export const SERVICE_SNAPSHOT = [
  {
    title: "Business setup and registration",
    body: "Clarify the right path, prepare details, coordinate filing and follow-up.",
    href: "/ghana/business-registration",
  },
  {
    title: "Paperwork and document preparation",
    body: "Forms, supporting documents, and organized submission-ready packs.",
  },
  {
    title: "Compliance awareness and reminders",
    body: "Stay ahead of renewals, filings, and key dates that matter to you.",
  },
  {
    title: "Records and operational admin",
    body: "Collect, organize, and keep records easy to find when you need them.",
  },
  {
    title: "Follow-ups and coordination",
    body: "Chase the offices, people, and steps that slow everything down.",
  },
  {
    title: "Logistics and errands",
    body: "Pickups, drop-offs, and local coordination tracked end to end.",
  },
  {
    title: "Customer and admin messaging",
    body: "Secretary-style message handling, scheduling, and reminders.",
  },
  {
    title: "Custom operational support",
    body: "If it is delegated operational work, ask. We will tell you if it fits.",
  },
];

export const BILLING_LINE_ITEMS = [
  "Service work",
  "Government / third-party fees",
  "Logistics",
  "Follow-up",
  "Monthly invoice",
];

export const COUNTRIES = [
  {
    name: "Ghana",
    status: "available" as const,
    blurb:
      "Business registration is live. Other Ghana-specific requests can be discussed on WhatsApp.",
    cta: "View Ghana services",
    href: "/ghana",
  },
  {
    name: "More countries",
    status: "later" as const,
    blurb:
      "Penkra is built to expand country by country. Tell us where else you need support and we will track demand.",
    cta: "Tell us where you need help",
  },
];

export const GHANA_REQUEST_CARDS = [
  "Paperwork and forms",
  "Admin follow-ups",
  "Document organization",
  "Compliance reminders",
  "Local logistics",
  "Records and billing support",
  "Custom request",
];

export const GHANA_WHO_THIS_HELPS = [
  "Local Ghanaian founders",
  "Diaspora founders",
  "Foreign-owned businesses",
  "Existing small businesses",
  "People who need local follow-up",
  "Teams that want operational support",
];

export const BUSINESS_TYPES = [
  {
    title: "Sole proprietorship",
    body: "Single-owner business, simplest path for individuals starting out.",
  },
  {
    title: "Partnership",
    body: "Two or more owners sharing responsibility and profit.",
  },
  {
    title: "Limited liability company",
    body: "Separate legal entity with shareholders and directors.",
  },
  {
    title: "Company limited by guarantee",
    body: "Non-profit style entity where members guarantee contributions.",
  },
  {
    title: "External company or foreign branch",
    body: "Foreign entity operating in Ghana through a registered branch.",
  },
];

export const BUSINESS_REG_WORK = [
  "Confirm the likely registration path.",
  "Collect owner, director, shareholder, and business details.",
  "Prepare forms and supporting information.",
  "Coordinate filing and follow-up where applicable.",
  "Track status and next steps.",
  "Organize final documents and reminders.",
];

export const BUSINESS_REG_INTAKE = [
  "Proposed business name.",
  "Business activity.",
  "Owner / founder details.",
  "Director / shareholder details where applicable.",
  "Registered address details.",
  "Identification / supporting documents.",
  "Foreign ownership details where applicable.",
];

export const AFTER_REGISTRATION = [
  {
    title: "Final document organization",
    body: "Certificates, forms, and records kept in one organized place.",
  },
  {
    title: "Compliance reminders",
    body: "Renewals, filings, and key dates tracked so nothing slips.",
  },
  {
    title: "Tax / admin next-step awareness",
    body: "What typically comes after registration, surfaced clearly.",
  },
  {
    title: "Record keeping options",
    body: "Ongoing organization so records stay useful over time.",
  },
  {
    title: "Monthly billing record",
    body: "Itemized invoices that reflect the actual work done.",
  },
];

export const BUSINESS_REG_INVOICE = [
  "Registration intake",
  "Document preparation",
  "Filing coordination",
  "Follow-up",
  "Government / third-party fee placeholder",
];

export const BUSINESS_REG_DISCLAIMER =
  "Penkra provides operational support, preparation, coordination, follow-up, and record keeping. Legal, accounting, or tax advice may require a qualified professional. Government timelines and approvals depend on complete information and the relevant authorities.";

export const SERVICES_CATEGORIES = [
  {
    title: "Business setup",
    body: "Registration paths, structure clarification, and setup coordination.",
    message: "I need help with business setup.",
    href: "/ghana/business-registration",
  },
  {
    title: "Paperwork and forms",
    body: "Form filling, supporting documents, and submission-ready packs.",
    message: "I need help with paperwork and forms.",
  },
  {
    title: "Admin follow-ups",
    body: "Chasing offices, people, and outstanding steps to closure.",
    message: "I need help with admin follow-ups.",
  },
  {
    title: "Record keeping",
    body: "Collect, organize, and summarize documents and records.",
    message: "I need help with record keeping.",
  },
  {
    title: "Logistics coordination",
    body: "Pickups, drop-offs, errands, and local coordination.",
    message: "I need help with logistics coordination.",
  },
  {
    title: "Compliance awareness",
    body: "Renewals, filings, and reminders tracked on your behalf.",
    message: "I need help with compliance awareness.",
  },
  {
    title: "Customer / admin messaging",
    body: "Secretary-style message handling, scheduling, and reminders.",
    message: "I need help with customer and admin messaging.",
  },
  {
    title: "Custom operations",
    body: "Delegated operational work that does not fit a named category.",
    message: "I have a custom operational request.",
  },
];

export const SERVICE_BUNDLES = [
  {
    title: "Business registration",
    parts: [
      "Intake",
      "Documents",
      "Preparation",
      "Coordination",
      "Follow-up",
      "Records",
    ],
  },
  {
    title: "Record keeping",
    parts: [
      "Document collection",
      "Organization",
      "Summary",
      "Invoice line items",
    ],
  },
  {
    title: "Secretary-style support",
    parts: ["Messages", "Scheduling", "Follow-ups", "Reminders"],
  },
  {
    title: "Logistics",
    parts: [
      "Coordination",
      "Local errands",
      "Pickup / drop-off",
      "Expense tracking",
    ],
  },
];

export const CONTACT_INTAKE = [
  "Country.",
  "What needs to be done.",
  "Deadline or urgency.",
  "Business or person involved.",
  "Documents already available.",
  "Whether Penkra should prepare, coordinate, follow up, organize records, or all of the above.",
];

export const WHATSAPP_MESSAGES = {
  home: "I need help with paperwork, admin, logistics, or business operations.",
  ghana: "I need help with something in Ghana.",
  businessRegistration:
    "I need help registering a business in Ghana.",
  services:
    "I need help figuring out which Penkra service fits my request.",
  countries:
    "I need help in a country outside Ghana and want to let you know.",
  contact: "I'd like to talk to Penkra about a request.",
};

export const FINAL_CTA = {
  home: {
    heading: "Send us what you need handled.",
    body: "Start with a message. If the request is sensitive, complex, or easier to discuss live, book a call.",
  },
  ghana: {
    heading: "Need something handled in Ghana?",
    body: "Start with a WhatsApp message. If it is easier to talk through, book a call.",
  },
  businessRegistration: {
    heading: "Send us the business you want to register.",
    body: "Start with a WhatsApp message. We will confirm the path, the details needed, and the likely costs before any work begins.",
  },
  services: {
    heading: "Not sure which service fits?",
    body: "Send the request on WhatsApp. We will figure out the right combination of work together.",
  },
  countries: {
    heading: "Need help somewhere we do not list yet?",
    body: "Tell us the country and the work. We track demand and prioritize where to launch next.",
  },
  contact: {
    heading: "Send us what you need handled.",
    body: "Most requests start with a single message. We will reply, clarify, and take it from there.",
  },
};

export function wa(key: keyof typeof WHATSAPP_MESSAGES): string {
  return whatsappLink(WHATSAPP_MESSAGES[key]);
}
