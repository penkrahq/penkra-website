import Link from "next/link";

export function CountrySelector() {
  return (
    <details className="desktop-dropdown country-dropdown" name="header-dropdown">
      <summary
        aria-label="Selected country: Ghana. Change country."
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
        <span aria-hidden style={{ fontSize: "11px" }}>●</span>
        Ghana
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
          minWidth: "200px",
          background: "var(--color-linen-white)",
          border: "1px solid var(--color-hairline-gray)",
          borderRadius: "var(--radius-cards)",
          padding: "7px",
          zIndex: 60,
        }}
      >
        <Link
          role="menuitem"
          href="/ghana"
          style={itemStyle}
        >
          <span>Ghana</span>
          <span style={tagStyle(true)}>Live</span>
        </Link>
        <Link
          role="menuitem"
          href="/countries"
          style={itemStyle}
        >
          <span>More countries</span>
          <span style={tagStyle(false)}>Soon</span>
        </Link>
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

const itemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "18px",
  width: "100%",
  padding: "11px 14px",
  borderRadius: "var(--radius-nav)",
  fontSize: "var(--text-body-sm)",
  color: "var(--color-charcoal)",
  textDecoration: "none",
};

function tagStyle(live: boolean): React.CSSProperties {
  return {
    fontSize: "var(--text-caption)",
    color: live ? "var(--color-blue-ink)" : "var(--color-graphite)",
    background: live ? "var(--color-sky-veil)" : "transparent",
    border: live ? "none" : "1px solid var(--color-hairline-gray)",
    borderRadius: "var(--radius-badges)",
    padding: "3px 9px",
    lineHeight: 1,
  };
}
