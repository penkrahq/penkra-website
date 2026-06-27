import type { Metadata } from "next";
import { FinalCta } from "../../components/final-cta";
import { JsonLd } from "../../components/json-ld";
import { PageHero } from "../../components/page-hero";
import { Reveal } from "../../components/reveal";
import { bookCallLink } from "../../lib/links";
import { absoluteUrl, pageMetadata } from "../../lib/metadata";
import { FINAL_CTA, wa } from "../../lib/site-content";

const faqItems = [
  {
    question: "What can Penkra handle?",
    answer:
      "Penkra handles operational work such as paperwork, form preparation, follow-ups, records, registration support, logistics coordination, reminders, and admin tasks. If a request does not fit a listed service, message us and we will clarify whether we can handle or coordinate it.",
  },
  {
    question: "What does Penkra not handle directly?",
    answer:
      "Penkra does not provide legal, tax, accounting, investment, medical, immigration, or other licensed professional advice unless a qualified provider is engaged separately. Penkra can help coordinate with providers, but the client makes the final decision.",
  },
  {
    question: "How does pricing work?",
    answer:
      "The Ghana founding subscription is GHS 400 per month for ongoing operational help, AI-assisted work, and light operator supervision. Work that involves government fees, external fees, heavy human work, physical logistics, paid filings, or third-party providers is quoted separately before fulfilment.",
  },
  {
    question: "How does monthly invoicing work?",
    answer:
      "Penkra groups subscription work, approved service handling, external fees, logistics, discounts, credits, and payments into clear monthly invoices where appropriate. A la carte external work may need payment before fulfilment.",
  },
  {
    question: "How are documents handled?",
    answer:
      "Penkra asks for documents only when needed for the task. Sensitive IDs and financial documents should not be collected early. Submissions, payments, and final outbound messages are reviewed by a human before they go out.",
  },
  {
    question: "Does Penkra provide legal or financial advice?",
    answer:
      "No. Penkra can help organize information, prepare operational checklists, coordinate specialists, and track the work, but it does not replace advice from qualified professionals.",
  },
  {
    question: "Can Penkra help if my request is not listed?",
    answer:
      "Yes. Message us what you need and the country it relates to. We will tell you whether Penkra can handle it directly, coordinate it, or route the specialist part.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers about what Penkra handles, pricing, monthly invoicing, document handling, professional advice, and custom requests.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: absoluteUrl("/"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "FAQ",
              item: absoluteUrl("/faq"),
            },
          ],
        }}
      />
      <PageHero
        badge="FAQ"
        h1="Common questions before you hand off work."
        copy="Penkra is built for delegated operational work. These answers set expectations before you message us, book a call, or send documents."
        primary={{ label: "Message Penkra", href: wa("contact"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
        variant="compact"
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "18px",
              maxWidth: "920px",
            }}
          >
            {faqItems.map((item, index) => (
              <Reveal key={item.question} delay={index * 35}>
                <article
                  style={{
                    borderTop: "1px solid var(--color-hairline-gray)",
                    paddingTop: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "11px",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "var(--text-body)",
                      lineHeight: 1.3,
                      fontWeight: 500,
                      color: "var(--color-blue-ink)",
                      letterSpacing: 0,
                    }}
                  >
                    {item.question}
                  </h2>
                  <p
                    style={{
                      fontSize: "var(--text-body-sm)",
                      lineHeight: "var(--leading-body-sm)",
                      color: "var(--color-charcoal)",
                    }}
                  >
                    {item.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        heading={FINAL_CTA.contact.heading}
        body={FINAL_CTA.contact.body}
        primary={{ label: "Message Penkra", href: wa("contact"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
      />
    </>
  );
}
