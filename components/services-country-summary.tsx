"use client";

import { useCountry } from "./country-provider";
import { wa } from "../lib/site-content";

export function ServicesCountrySummary() {
  const { country, ready } = useCountry();
  const live = country.live;

  return (
    <section className="section tight-mobile" style={{ paddingTop: 0, paddingBottom: "21px" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "14px",
            padding: "18px 24px",
            borderRadius: "var(--radius-cards)",
            background: live ? "var(--color-sky-veil)" : "var(--color-linen-blue)",
            border: "1px solid var(--color-hairline-gray)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontSize: "var(--text-caption)",
                color: "var(--color-graphite)",
              }}
            >
              Showing services for
            </span>
            <span
              style={{
                fontSize: "var(--text-body)",
                color: "var(--color-blue-ink)",
                fontWeight: 500,
              }}
            >
              {ready ? country.name : "Ghana"}
              {live ? " · live" : " · on request"}
            </span>
          </div>
          <a
            href={wa(live ? "ghana" : "countries")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "var(--text-body-sm)",
              color: "var(--color-blue-ink)",
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            Message us about {live ? "Ghana" : "your country"} <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
