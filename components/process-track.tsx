"use client";

import { useEffect, useRef, useState } from "react";
import { PillBadge } from "./pill-badge";

type TrackCard = {
  step: string;
  title: string;
  body: string;
  mockup: React.ReactNode;
};

export function ProcessTrack({
  badge,
  heading,
  cards,
}: {
  badge: string;
  heading: string;
  cards: TrackCard[];
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 899px)");
    const syncMobile = () => setIsMobile(mobileQuery.matches);

    syncMobile();
    mobileQuery.addEventListener("change", syncMobile);
    return () => mobileQuery.removeEventListener("change", syncMobile);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setActive(cards.length - 1);
      return;
    }

    if (isMobile) {
      return;
    }

    let raf = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = Math.max(1, section.offsetHeight - vh);
      const scrolled = Math.min(total, Math.max(0, -rect.top));
      const p = scrolled / total;
      const idx = Math.min(cards.length - 1, Math.floor(p * cards.length));
      setActive(idx);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [cards.length, isMobile]);

  return (
    <section
      ref={sectionRef}
      data-process-track
      className="process-track-section"
      style={{
        position: "relative",
        height: `${cards.length * 90}vh`,
      }}
    >
      <div
        className="process-sticky"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          paddingBlock: "70px",
        }}
      >
        <div className="container">
          <div
            className="process-inner"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "42px",
              alignItems: "start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <PillBadge>{badge}</PillBadge>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(30px, 4.5vw, var(--text-heading-lg))",
                  lineHeight: "var(--leading-heading-lg)",
                  fontWeight: 300,
                  color: "var(--color-blue-ink)",
                  maxWidth: "20ch",
                }}
              >
                {heading}
              </h2>

              <ol
                className="process-steps"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  marginTop: "14px",
                }}
              >
                {cards.map((c, i) => {
                  const isActive = i === active;
                  const isPast = i < active;
                  return (
                    <li
                      key={c.step}
                      data-process-step={i}
                      style={{
                        padding: "14px 0",
                        borderTop:
                          i === 0 ? "1px solid var(--color-hairline-gray)" : "none",
                        borderBottom: "1px solid var(--color-hairline-gray)",
                        transform: isActive ? "translateX(0)" : "translateX(-8px)",
                        transition:
                          "transform 400ms cubic-bezier(0,0,0,1)",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          if (isMobile) setActive(i);
                        }}
                        aria-current={isActive ? "step" : undefined}
                        style={{
                          display: "flex",
                          gap: "18px",
                          alignItems: "flex-start",
                          width: "100%",
                          padding: 0,
                          border: 0,
                          background: "transparent",
                          color: "inherit",
                          textAlign: "left",
                          cursor: isMobile ? "pointer" : "default",
                        }}
                      >
                        <span
                          aria-hidden
                          data-process-step-number
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "var(--text-subheading)",
                            color: isActive
                              ? "var(--color-blue-ink)"
                              : "var(--color-graphite)",
                            fontWeight: 300,
                            minWidth: "28px",
                            lineHeight: 1.2,
                          }}
                        >
                          {c.step}
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <span
                            data-process-step-title
                            style={{
                              fontSize: "var(--text-body)",
                              color: isActive
                                ? "var(--color-blue-ink)"
                                : "var(--color-charcoal)",
                              fontWeight: isActive ? 500 : 400,
                              lineHeight: 1.3,
                            }}
                          >
                            {c.title}
                          </span>
                          <span
                            data-process-step-body
                            style={{
                              display: isActive ? "block" : "none",
                              fontSize: "var(--text-body-sm)",
                              color: "var(--color-charcoal)",
                              lineHeight: "var(--leading-body-sm)",
                              maxWidth: "44ch",
                            }}
                          >
                            {c.body}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div
              className="process-mockup"
              style={{
                position: "relative",
                minHeight: "380px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cards.map((c, i) => (
                <div
                  key={i}
                  data-process-mockup={i}
                  aria-hidden={i !== active}
                  style={{
                    position: i === 0 ? "relative" : "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: i === active ? 1 : 0,
                    transform: i === active ? "translateY(0)" : "translateY(24px)",
                    transition:
                      "opacity 600ms cubic-bezier(0,0,0,1), transform 600ms cubic-bezier(0,0,0,1)",
                    pointerEvents: i === active ? "auto" : "none",
                    width: "100%",
                  }}
                >
                  <div style={{ width: "100%", maxWidth: "440px" }}>{c.mockup}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .process-inner { grid-template-columns: 1fr 1fr !important; gap: 70px; }
        }
        @media (max-width: 899px) {
          .process-track-section { height: auto !important; }
          .process-sticky { position: static !important; height: auto !important; padding-block: 49px !important; }
          .process-mockup { min-height: 0 !important; margin-top: 21px; }
          .process-steps { gap: 9px !important; }
          .process-steps li { padding: 11px 0 !important; }
        }
      `}</style>
    </section>
  );
}
