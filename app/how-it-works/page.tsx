import type { Metadata } from "next";
import { FinalCta } from "../../components/final-cta";
import { JsonLd } from "../../components/json-ld";
import { PageHero } from "../../components/page-hero";
import { Reveal } from "../../components/reveal";
import { SectionHeading } from "../../components/section-heading";
import { bookCallLink } from "../../lib/links";
import { absoluteUrl, pageMetadata } from "../../lib/metadata";
import { FINAL_CTA, wa } from "../../lib/site-content";

const workflowSteps = [
  {
    title: "Send the task",
    body: "Start with a WhatsApp message or a call. You can describe the outcome in plain language, even if you do not know the exact process yet.",
  },
  {
    title: "We clarify what matters",
    body: "Penkra asks the few questions needed to understand the country, deadline, people involved, documents, approvals, and likely costs.",
  },
  {
    title: "The request becomes tracked work",
    body: "We turn the request into next actions, prepare what we can, coordinate the pieces, and keep the next step clear.",
  },
  {
    title: "Sensitive steps get reviewed",
    body: "Documents, submissions, payments, and important outbound messages are checked by a human before they move forward.",
  },
  {
    title: "You get updates, records, and billing",
    body: "We keep you posted through the same conversation, hand off final records where possible, and keep charges itemized.",
  },
];

const updatePrinciples = [
  "WhatsApp stays the main thread, so back-and-forth stays simple.",
  "Calls are used when the request is sensitive, complex, or easier to explain live.",
  "We ask for documents when the next step actually needs them.",
  "Government fees, third-party costs, logistics, and heavy human work are confirmed before fulfilment.",
  "Penkra does not promise approvals or replace licensed legal, tax, accounting, immigration, medical, or financial advice.",
];

export const metadata: Metadata = pageMetadata({
  title: "How Penkra Works",
  description:
    "How Penkra turns a WhatsApp message or call into clarified work, tracked steps, human-reviewed handling, records, and itemized billing.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How Penkra works",
          description:
            "How Penkra turns a message or call into clarified work, tracked steps, human-reviewed handling, records, and itemized billing.",
          url: absoluteUrl("/how-it-works"),
          author: {
            "@id": absoluteUrl("/#organization"),
          },
          publisher: {
            "@id": absoluteUrl("/#organization"),
          },
          mainEntityOfPage: absoluteUrl("/how-it-works"),
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
              name: "How it works",
              item: absoluteUrl("/how-it-works"),
            },
          ],
        }}
      />

      <PageHero
        badge="How Penkra works"
        h1="Send the task. We turn it into clear next steps."
        copy="Penkra is built for delegated operational work. You start with what needs to be handled, and we clarify, coordinate, review, update, and keep the records together."
        primary={{ label: "Message Penkra", href: wa("home"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
        variant="compact"
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            badge="Workflow"
            heading="A messy request becomes a practical work plan."
            body="The first step is not a portal, form, or software setup. It is a conversation that becomes a checklist, status updates, invoice line items, and a completion handoff."
          />
          <div
            className="workflow-grid"
            style={{
              marginTop: "42px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "18px",
            }}
          >
            {workflowSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 45}>
                <WorkflowCard index={index + 1} title={step.title} body={step.body} />
              </Reveal>
            ))}
          </div>
          <style>{`
            @media (min-width: 760px) {
              .workflow-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 1120px) {
              .workflow-grid { grid-template-columns: repeat(5, 1fr) !important; }
            }
          `}</style>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-linen-blue)" }}>
        <div className="container">
          <div
            className="workflow-two-column"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "42px",
            }}
          >
            <SectionHeading
              badge="Communication"
              heading="WhatsApp is the front door. The work still gets structured behind it."
              body="Clients should not need to learn a new system before delegating a task. Penkra keeps the public experience simple while the internal workflow tracks details, documents, costs, and handoffs."
            />
            <div style={{ display: "grid", gap: "14px" }}>
              {updatePrinciples.map((item, index) => (
                <Reveal key={item} delay={index * 45}>
                  <div
                    style={{
                      background: "var(--color-linen-white)",
                      border: "1px solid var(--color-hairline-gray)",
                      borderRadius: "var(--radius-cards)",
                      padding: "18px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "var(--text-body-sm)",
                        lineHeight: "var(--leading-body-sm)",
                        color: "var(--color-charcoal)",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`
            @media (min-width: 1024px) {
              .workflow-two-column { grid-template-columns: 0.95fr 1.05fr !important; align-items: start; }
            }
          `}</style>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div
              style={{
                background: "var(--color-blue-wash)",
                border: "1px solid var(--color-hairline-gray)",
                borderRadius: "var(--radius-cards)",
                padding: "28px",
                display: "grid",
                gap: "14px",
                maxWidth: "88ch",
              }}
            >
              <h2
                className="serif"
                style={{
                  fontSize: "var(--text-heading-sm)",
                  lineHeight: "var(--leading-heading-sm)",
                  fontWeight: 300,
                  color: "var(--color-blue-ink)",
                }}
              >
                Start broad, then narrow the work together.
              </h2>
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  lineHeight: "var(--leading-body-sm)",
                  color: "var(--color-charcoal)",
                }}
              >
                Some requests fit a listed service. Others combine paperwork, coordination,
                follow-up, logistics, reminders, or records. If it is delegated operational work,
                send it and Penkra will clarify whether it can be handled directly, coordinated,
                or routed to a specialist.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        heading={FINAL_CTA.home.heading}
        body={FINAL_CTA.home.body}
        primary={{ label: "Message Penkra", href: wa("home"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
      />
    </>
  );
}

function WorkflowCard({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <article
      style={{
        background: "var(--color-linen-white)",
        border: "1px solid var(--color-hairline-gray)",
        borderRadius: "var(--radius-cards)",
        padding: "21px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        minHeight: "100%",
      }}
    >
      <span
        aria-hidden
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "36px",
          height: "36px",
          borderRadius: "var(--radius-nav)",
          background: "var(--color-blue-ink)",
          color: "var(--color-linen-white)",
          fontSize: "var(--text-caption)",
          flexShrink: 0,
        }}
      >
        {String(index).padStart(2, "0")}
      </span>
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
        {title}
      </h2>
      <p
        style={{
          fontSize: "var(--text-body-sm)",
          lineHeight: "var(--leading-body-sm)",
          color: "var(--color-charcoal)",
        }}
      >
        {body}
      </p>
    </article>
  );
}
