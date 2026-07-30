import type { Metadata } from "next";
import { ProductLegalPage } from "../../components/product-legal-page";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Penkra handles information across the website, your account, and the desktop app.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <ProductLegalPage
      title="Privacy Policy"
      description="How Penkra handles information across the website, your account, and the desktop app."
      effectiveDate="Effective July 29, 2026"
      sections={[
        {
          title: "Overview",
          body: [
            "Penkra is an open-source desktop workspace for agentic work. Most workspace data—such as folders, threads, messages, settings, and App state—is stored on your device in Penkra’s local application data.",
            "Penkra does not sell personal information. Apps cannot browse your conversations, folders, threads, settings, or other Apps. They receive only the arguments an agent explicitly passes and the permissions you approve.",
            "This Policy also covers penkra.com, Penkra accounts, support communications, update services, and any optional telemetry described below.",
          ],
        },
        {
          title: "Information we collect",
          body: [
            "Account information may include your name, email address, password hash, email-verification records, account-provider identifiers, sessions, IP address, and user-agent information. If you contact us, we receive the information you choose to include.",
            "The desktop app stores workspace content and configuration locally, including projects, threads, messages, drafts, approvals, App data, and provider settings. Files remain in the locations you choose. Provider credentials may be read from or stored in operating-system credential storage or provider-managed configuration.",
            "The website may collect page views, landing page, referrer, campaign parameters, browser or device information, and clicks on selected links when analytics is enabled.",
          ],
        },
        {
          title: "How Penkra works with your data",
          body: [
            "We use account information to authenticate you, secure sessions, send verification or recovery messages, connect the desktop app to your account, and provide support.",
            "We use local workspace data to display your work, run the features you request, recover sessions, and coordinate agents and Apps on your device. Penkra does not use your private workspace content to train Penkra-owned AI models.",
            "We may use limited, installation-scoped product events to understand reliability and feature operation only when telemetry is explicitly enabled. Desktop telemetry is disabled by default.",
          ],
        },
        {
          title: "When information leaves your device",
          body: [
            "When you ask an agent to work, the prompt, attachments, selected context, tool results, and related metadata may be sent to the AI provider you selected. That provider processes the data under its own terms and privacy policy.",
            "Apps or tools may connect to third-party services only as needed for the action you request and the permissions you approve. Update checks, authentication, support, source hosting, and release downloads may also contact Penkra or third-party infrastructure.",
            "We may disclose information to service providers that operate authentication, email, hosting, analytics, security, and software distribution; to comply with law; or to protect users, Penkra, and the public.",
          ],
        },
        {
          title: "Website analytics and cookies",
          body: [
            "Penkra may use PostHog for limited website analytics when configured. Session recording and advertising tracking are disabled. Analytics may use a pseudonymous identifier and cookies or similar browser storage to count page views and understand campaign attribution.",
            "Authentication uses cookies or equivalent session storage to keep you signed in and complete desktop sign-in. Campaign parameters and referrer information may be held in session storage for the duration of a browsing session.",
            "You can block or clear cookies and browser storage in your browser. Some account features may not work without essential authentication storage.",
          ],
        },
        {
          title: "Retention and security",
          body: [
            "Local workspace data remains on your device until you delete it, remove the related workspace, reset the app, or uninstall it. Removing the app may not remove files you created outside Penkra’s application data directory.",
            "We retain account, session, support, and security records only as long as reasonably needed to provide the service, protect accounts, meet legal obligations, resolve disputes, and enforce agreements. Verification codes and sessions expire according to their configured lifetimes.",
            "We use access controls, encrypted transport, password hashing, operating-system credential storage where available, and least-privilege boundaries. No method of storage or transmission can be guaranteed completely secure.",
          ],
        },
        {
          title: "Your choices and rights",
          body: [
            "You may choose which provider, App, files, and permissions to use. You can revoke provider access through the provider, remove Apps, clear local data, or stop using Penkra.",
            "You may ask to access, correct, export, or delete personal information associated with your Penkra account. Some information may be retained when required for security, fraud prevention, legal compliance, or a continuing dispute.",
            "To make a privacy request, email privacy@penkra.com. We may verify your identity before completing a request.",
          ],
        },
        {
          title: "Children",
          body: [
            "Penkra is not directed to children under 13, and we do not knowingly collect personal information from children under 13.",
            "If you believe a child has provided personal information, contact privacy@penkra.com so we can review and delete it where appropriate.",
          ],
        },
        {
          title: "Changes and contact",
          body: [
            "We may update this Policy as Penkra’s product, providers, or legal obligations change. We will post the revised Policy here and update the effective date. Material changes may also be communicated through the app or account email when appropriate.",
            "Questions or requests can be sent to privacy@penkra.com.",
          ],
        },
      ]}
    />
  );
}
