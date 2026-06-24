import Script from "next/script";

export function Analytics() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

  if (!key) return null;

  return (
    <Script id="penkra-posthog" strategy="afterInteractive">
      {`
        !function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister identify alias reset get_distinct_id set_config".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

        window.posthog.init(${JSON.stringify(key)}, {
          api_host: ${JSON.stringify(host)},
          autocapture: false,
          capture_pageview: true,
          capture_pageleave: false,
          disable_session_recording: true,
          advanced_disable_flags: true,
          person_profiles: 'identified_only'
        });

        document.addEventListener('click', function(event) {
          var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
          if (!link || !window.posthog) return;

          var href = link.getAttribute('href') || '';
          var eventName = null;

          if (href.indexOf('wa.me') !== -1) eventName = 'whatsapp_click';
          else if (href.indexOf('cal.com') !== -1) eventName = 'book_call_click';
          else if (href.indexOf('mailto:') === 0) eventName = 'email_click';
          else if (href.indexOf('/ghana/business-registration') !== -1) eventName = 'business_registration_click';
          else if (href.indexOf('/services') !== -1) eventName = 'services_click';

          if (!eventName) return;
          window.posthog.capture(eventName, {
            href: href,
            label: (link.textContent || '').trim(),
            path: window.location.pathname
          });
        }, true);
      `}
    </Script>
  );
}
