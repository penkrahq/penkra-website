import Script from "next/script";

export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  if (!domain) return null;

  return (
    <>
      <Script
        defer
        data-domain={domain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
      <Script id="penkra-plausible-events" strategy="afterInteractive">
        {`
          window.plausible = window.plausible || function() {
            (window.plausible.q = window.plausible.q || []).push(arguments);
          };

          document.addEventListener('click', function(event) {
            var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
            if (!link || !window.plausible) return;

            var href = link.getAttribute('href') || '';
            var eventName = null;

            if (href.indexOf('wa.me') !== -1) eventName = 'WhatsApp Click';
            else if (href.indexOf('cal.com') !== -1) eventName = 'Book Call Click';
            else if (href.indexOf('mailto:') === 0) eventName = 'Email Click';
            else if (href.indexOf('/ghana/business-registration') !== -1) eventName = 'Business Registration Click';
            else if (href.indexOf('/services') !== -1) eventName = 'Services Click';

            if (!eventName) return;
            window.plausible(eventName, { props: { href: href, label: (link.textContent || '').trim() } });
          }, true);
        `}
      </Script>
    </>
  );
}
