import { Reveal } from "./reveal";

type FeatureGridProps = {
  items: string[];
  columns?: 1 | 2;
};

function CheckIcon() {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        borderRadius: "var(--radius-nav)",
        background: "var(--color-blue-ink)",
        color: "var(--color-linen-white)",
        fontSize: "14px",
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      ✓
    </span>
  );
}

export function FeatureGrid({ items, columns = 2 }: FeatureGridProps) {
  return (
    <Reveal>
      <ul
        className="feature-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          rowGap: "28px",
          columnGap: "56px",
        }}
      >
        {items.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "18px",
              fontSize: "var(--text-body)",
              lineHeight: "var(--leading-body)",
              color: "var(--color-charcoal)",
            }}
          >
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <style>{`
        @media (min-width: 768px) {
          .feature-grid { grid-template-columns: repeat(${columns}, 1fr) !important; }
        }
      `}</style>
    </Reveal>
  );
}
