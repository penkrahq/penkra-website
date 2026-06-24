import type { Metadata } from "next";
import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { FinalCta } from "../../components/final-cta";
import { Reveal } from "../../components/reveal";
import { Button } from "../../components/button";
import { CONTACT_INTAKE, FINAL_CTA, wa } from "../../lib/site-content";
import { bookCallLink, contactEmail, mailtoLink } from "../../lib/links";

export const metadata: Metadata = {
  title: "Contact Penkra",
  description:
    "Start with a WhatsApp message or book a call. If your request is simple, WhatsApp is usually fastest.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        h1="Start with a message or book a call."
        copy="If your request is simple, WhatsApp is usually fastest. If it is sensitive, complex, or easier to explain live, book a call."
        primary={{ label: "Message us on WhatsApp", href: wa("contact"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
        variant="compact"
        mockup={
          <div
            style={{
              background: "var(--color-linen-white)",
              border: "1px solid var(--color-hairline-gray)",
              borderRadius: "var(--radius-cards)",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "21px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              <span style={{ fontSize: "var(--text-caption)", color: "var(--color-graphite)" }}>
                Email
              </span>
              <a
                href={mailtoLink()}
                style={{
                  fontSize: "var(--text-body)",
                  color: "var(--color-blue-ink)",
                }}
              >
                {contactEmail()}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              <span style={{ fontSize: "var(--text-caption)", color: "var(--color-graphite)" }}>
                WhatsApp
              </span>
              <Button href={wa("contact")} external variant="secondary">
                Open WhatsApp
              </Button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              <span style={{ fontSize: "var(--text-caption)", color: "var(--color-graphite)" }}>
                Book a call
              </span>
              <Button href={bookCallLink()} external variant="secondary">
                Schedule a time
              </Button>
            </div>
          </div>
        }
      />

      {/* Intake expectations */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            badge="What we may ask"
            heading="A short intake so we can clarify the work."
            body="You do not need to have everything ready. Penkra will guide the conversation and tell you what is relevant for your specific case."
          />
          <div style={{ marginTop: "42px" }}>
            <Reveal>
              <ul
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "18px",
                }}
                className="intake-list"
              >
                {CONTACT_INTAKE.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      fontSize: "var(--text-body)",
                      lineHeight: "var(--leading-body)",
                      color: "var(--color-charcoal)",
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "28px",
                        height: "28px",
                        borderRadius: "var(--radius-nav)",
                        background: "var(--color-blue-ink)",
                        color: "var(--color-linen-white)",
                        fontSize: "13px",
                        flexShrink: 0,
                      }}
                    >
                      ›
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <style>{`
            @media (min-width: 768px) { .intake-list { grid-template-columns: repeat(2, 1fr) !important; } }
          `}</style>
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
