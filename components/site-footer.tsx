import Link from "next/link";
import { Button } from "./button";
import { bookCallLink, mailtoLink } from "../lib/links";
import { wa } from "../lib/site-content";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  ctaId?: string;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

const FOOTER_GROUPS: FooterGroup[] = [
  {
    title: "Services",
    links: [
      { label: "All services", href: "/services" },
      { label: "Business registration", href: "/ghana/business-registration" },
      { label: "Registration guide", href: "/ghana/business-registration/guide" },
      { label: "Paperwork and forms", href: "/services" },
      { label: "Records and admin", href: "/services" },
      { label: "Logistics", href: "/services" },
    ],
  },
  {
    title: "Countries",
    links: [
      { label: "Ghana", href: "/ghana" },
      { label: "All countries", href: "/countries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Billing", href: "/billing" },
      { label: "Data handling", href: "/data-handling" },
      { label: "AI-assisted work", href: "/ai-assisted" },
      { label: "WhatsApp", href: wa("contact"), external: true, ctaId: "footer_link_whatsapp" },
      { label: "Book a call", href: bookCallLink(), external: true, ctaId: "footer_link_book_call" },
      { label: "Email", href: mailtoLink(), external: true, ctaId: "footer_link_email" },
    ],
  },
  {
    title: "Social",
    links: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61591393648650",
        external: true,
        ctaId: "footer_social_facebook",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/penkra/",
        external: true,
        ctaId: "footer_social_linkedin",
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@penkra",
        external: true,
        ctaId: "footer_social_youtube",
      },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--color-linen-blue)",
        borderTop: "1px solid var(--color-hairline-gray)",
        paddingBlock: "70px 42px",
      }}
    >
      <div className="container">
        <div
          className="footer-top"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "21px",
            paddingBlock: "42px",
            marginBottom: "42px",
            borderBottom: "1px solid var(--color-hairline-gray)",
          }}
        >
          <div className="footer-top-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "28px",
            alignItems: "center",
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "52ch" }}>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(26px, 4vw, var(--text-heading))",
                  lineHeight: "var(--leading-heading)",
                  fontWeight: 300,
                  color: "var(--color-blue-ink)",
                }}
              >
                Start with a WhatsApp message.
              </h2>
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  lineHeight: "var(--leading-body-sm)",
                  color: "var(--color-charcoal)",
                }}
              >
                Tell us what you need handled. We clarify the work, handle it, and keep records — starting in Ghana.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Button
                href={wa("home")}
                external
                aria-label="Message Penkra on WhatsApp"
                ctaId="footer_top_whatsapp"
                ctaLocation="site_footer"
              >
                Message Penkra
              </Button>
              <Button
                href={bookCallLink()}
                external
                variant="secondary"
                aria-label="Book a call"
                ctaId="footer_top_book_call"
                ctaLocation="site_footer"
              >
                Book a call
              </Button>
            </div>
          </div>
          <style>{`
            @media (min-width: 768px) {
              .footer-top-grid { grid-template-columns: 1.6fr 1fr !important; }
              .footer-top-grid > div:last-child { justify-content: flex-end; }
            }
          `}</style>
        </div>

        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "42px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "40ch" }}>
            <Link
              href="/"
              aria-label="Penkra home"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/penkra-wordmark.svg"
                alt="Penkra"
                width={176}
                height={51}
                style={{ display: "block", height: "48px", width: "auto" }}
              />
            </Link>
            <p
              style={{
                fontSize: "var(--text-body-sm)",
                lineHeight: "var(--leading-body-sm)",
                color: "var(--color-charcoal)",
              }}
            >
              An AI-assisted, human-reviewed operations agency. We handle paperwork, admin, logistics, and follow-through, starting in Ghana.
            </p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div
                style={{
                  fontSize: "var(--text-caption)",
                  color: "var(--color-blue-ink)",
                  fontWeight: 500,
                  letterSpacing: 0,
                }}
              >
                {group.title}
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                {group.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        data-cta-id={l.ctaId}
                        data-cta-location={`site_footer_${group.title.toLowerCase()}`}
                        style={{
                          fontSize: "var(--text-body-sm)",
                          color: "var(--color-charcoal)",
                        }}
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        style={{
                          fontSize: "var(--text-body-sm)",
                          color: "var(--color-charcoal)",
                        }}
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "56px",
            paddingTop: "21px",
            borderTop: "1px solid var(--color-hairline-gray)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
            fontSize: "var(--text-caption)",
            color: "var(--color-graphite)",
          }}
        >
          <span>© {new Date().getFullYear()} Penkra</span>
          <span>AI-assisted · Human-reviewed · Itemized billing</span>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1.6fr 1fr 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
