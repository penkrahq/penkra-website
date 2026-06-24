import Link from "next/link";

const SERVICE_LINKS = [
  { label: "All services", href: "/services" },
  { label: "Business registration", href: "/ghana/business-registration" },
  { label: "Paperwork and forms", href: "/services#paperwork" },
  { label: "Admin follow-ups", href: "/services#admin" },
  { label: "Records and documents", href: "/services#records" },
  { label: "Compliance reminders", href: "/services#compliance" },
  { label: "Logistics coordination", href: "/services#logistics" },
  { label: "Custom request", href: "/services#custom" },
];

export function ServicesDropdown() {
  return (
    <details className="desktop-dropdown" name="header-dropdown">
      <summary
        aria-label="Services menu"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          padding: "9px 14px",
          borderRadius: "var(--radius-nav)",
          fontSize: "var(--text-body-sm)",
          color: "var(--color-charcoal)",
          cursor: "pointer",
          listStyle: "none",
        }}
      >
        Services
        <span aria-hidden style={{ display: "inline-flex", fontSize: "10px", lineHeight: 1 }}>
          ▾
        </span>
      </summary>
      <div
        role="menu"
        style={{
          position: "absolute",
          top: "calc(100% + 7px)",
          left: 0,
          minWidth: "240px",
          background: "var(--color-linen-white)",
          border: "1px solid var(--color-hairline-gray)",
          borderRadius: "var(--radius-cards)",
          padding: "7px",
          zIndex: 60,
        }}
      >
        {SERVICE_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            role="menuitem"
            style={{
              display: "block",
              padding: "11px 14px",
              borderRadius: "var(--radius-nav)",
              fontSize: "var(--text-body-sm)",
              color: "var(--color-charcoal)",
              textDecoration: "none",
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <style>{`
        .desktop-dropdown {
          position: relative;
        }
        .desktop-dropdown > summary::-webkit-details-marker {
          display: none;
        }
        .desktop-dropdown:not([open]) > [role="menu"] {
          display: none !important;
        }
        .desktop-dropdown[open] > summary {
          background: var(--color-linen-blue);
        }
      `}</style>
    </details>
  );
}
