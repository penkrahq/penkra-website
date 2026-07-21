import type { Metadata } from "next";
import { pageMetadata } from "../../lib/metadata";
import { AlSubpage } from "../../components/al-subpage";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Settings",
  description: "What cookies penkra uses and how to manage your preferences.",
  path: "/cookie-settings",
});

export default function CookieSettingsPage() {
  return (
    <AlSubpage
      eyebrow="$ COOKIE SETTINGS"
      title="What we track, and how to control it."
      subtitle="penkra uses a small set of cookies to keep the site running and to understand how it's used. No third-party ad tracking."
      sections={[
        {
          heading: "Cookie categories",
          items: [
            "Essential — required for the site to function, cannot be disabled",
            "Analytics — anonymized usage data to improve the site",
            "Preference — remembers settings like cookie choices across visits",
          ],
        },
        {
          heading: "Manage preferences",
          items: [
            "Adjust or clear cookies at any time in your browser settings",
            "Contact us if you'd like your analytics data removed",
          ],
        },
      ]}
    />
  );
}
