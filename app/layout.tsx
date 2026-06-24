import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { CountryProvider } from "../components/country-provider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const siteUrl = "https://penkra.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Penkra | Paperwork, admin, and logistics handled",
    template: "%s | Penkra",
  },
  description:
    "Penkra helps people and businesses delegate paperwork, registrations, admin follow-ups, records, logistics, and compliance awareness, starting in Ghana.",
  openGraph: {
    title: "Penkra | Paperwork, admin, and logistics handled",
    description:
      "Penkra helps people and businesses delegate paperwork, registrations, admin follow-ups, records, logistics, and compliance awareness, starting in Ghana.",
    url: siteUrl,
    siteName: "Penkra",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Penkra | Paperwork, admin, and logistics handled",
    description:
      "Penkra helps people and businesses delegate paperwork, registrations, admin follow-ups, records, logistics, and compliance awareness, starting in Ghana.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CountryProvider>
          <SiteHeader />
          <main style={{ flex: 1, paddingTop: "70px" }}>{children}</main>
          <SiteFooter />
        </CountryProvider>
        <script
          id="penkra-interaction-fallbacks"
          dangerouslySetInnerHTML={{
            __html: `
            (() => {
              let lastY = window.scrollY || 0;

              function updateHeader() {
                const header = document.querySelector('[data-penkra-header]');
                if (!header) return;
                const y = window.scrollY || 0;
                header.style.transform = y > 120 && y > lastY ? 'translateY(-100%)' : 'translateY(0)';
                header.style.background = 'var(--color-linen-white)';
                header.style.borderBottom = '1px solid var(--color-hairline-gray)';
                lastY = y;
              }

              function setProcessActive(section, active) {
                section.querySelectorAll('[data-process-step]').forEach((step) => {
                  const index = Number(step.getAttribute('data-process-step'));
                  const isActive = index === active;
                  const isPast = index < active;
                  step.style.opacity = isActive ? '1' : isPast ? '0.5' : '0.4';
                  step.style.transform = isActive ? 'translateX(0)' : 'translateX(-8px)';

                  const number = step.querySelector('[data-process-step-number]');
                  if (number) number.style.color = isActive ? 'var(--color-blue-ink)' : 'var(--color-graphite)';

                  const title = step.querySelector('[data-process-step-title]');
                  if (title) {
                    title.style.color = isActive ? 'var(--color-blue-ink)' : 'var(--color-charcoal)';
                    title.style.fontWeight = isActive ? '500' : '400';
                  }

                  const body = step.querySelector('[data-process-step-body]');
                  if (body) body.style.display = isActive ? 'block' : 'none';
                });

                section.querySelectorAll('[data-process-mockup]').forEach((mockup) => {
                  const index = Number(mockup.getAttribute('data-process-mockup'));
                  const isActive = index === active;
                  mockup.setAttribute('aria-hidden', isActive ? 'false' : 'true');
                  mockup.style.opacity = isActive ? '1' : '0';
                  mockup.style.transform = isActive ? 'translateY(0)' : 'translateY(24px)';
                  mockup.style.pointerEvents = isActive ? 'auto' : 'none';
                });
              }

              function updateProcessTracks() {
                if (window.matchMedia('(max-width: 899px)').matches) return;
                document.querySelectorAll('[data-process-track]').forEach((section) => {
                  const steps = section.querySelectorAll('[data-process-step]');
                  if (!steps.length) return;
                  const rect = section.getBoundingClientRect();
                  const viewportHeight = window.innerHeight || 1;
                  const total = Math.max(1, section.offsetHeight - viewportHeight);
                  const scrolled = Math.min(total, Math.max(0, -rect.top));
                  const progress = scrolled / total;
                  const active = Math.min(steps.length - 1, Math.floor(progress * steps.length));
                  setProcessActive(section, active);
                });
              }

              function bindMobileProcessClicks() {
                document.querySelectorAll('[data-process-track]').forEach((section) => {
                  section.querySelectorAll('[data-process-step]').forEach((step) => {
                    if (step.getAttribute('data-process-click-bound') === 'true') return;
                    step.setAttribute('data-process-click-bound', 'true');
                    step.addEventListener('click', () => {
                      if (!window.matchMedia('(max-width: 899px)').matches) return;
                      setProcessActive(section, Number(step.getAttribute('data-process-step')));
                    });
                    step.addEventListener('keydown', (event) => {
                      if (!window.matchMedia('(max-width: 899px)').matches) return;
                      if (event.key !== 'Enter' && event.key !== ' ') return;
                      event.preventDefault();
                      setProcessActive(section, Number(step.getAttribute('data-process-step')));
                    });
                  });
                });
              }

              let frame = 0;
              function updateAll() {
                cancelAnimationFrame(frame);
                frame = requestAnimationFrame(() => {
                  updateHeader();
                  updateProcessTracks();
                  bindMobileProcessClicks();
                });
              }

              updateAll();
              window.addEventListener('scroll', updateAll, { passive: true });
              window.addEventListener('resize', updateAll);
            })();
          `,
          }}
        />
      </body>
    </html>
  );
}
