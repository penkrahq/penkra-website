import type { Metadata } from "next";
import { ProductLegalPage } from "../../components/product-legal-page";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The rules for using Penkra’s website, account services, desktop app, Apps, and release infrastructure.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <ProductLegalPage
      title="Terms of Service"
      description="The rules for using Penkra’s website, account services, desktop app, Apps, and release infrastructure."
      effectiveDate="Effective July 29, 2026"
      sections={[
        {
          title: "Agreement",
          body: [
            "By downloading, installing, accessing, or using Penkra, you agree to these Terms and the Privacy Policy. If you do not agree, do not use the services.",
            "If you use Penkra for an organization, you represent that you have authority to accept these Terms for that organization. “Penkra” includes penkra.com, Penkra accounts, the desktop app, bundled Apps, and Penkra-operated release and update services.",
            "Some parts of Penkra are open-source software governed by their license. These Terms govern Penkra-operated services and your use of official builds; the open-source license governs your rights in the source code.",
          ],
        },
        {
          title: "Eligibility and accounts",
          body: [
            "You must be at least 13 years old and legally able to enter into these Terms. If local law requires a higher age for an online service, that higher age applies.",
            "You are responsible for accurate account information, safeguarding your password and device, and activity performed through your account. Notify security@penkra.com if you believe an account or official build has been compromised.",
            "Penkra may use email verification, session controls, device authorization, or other reasonable safeguards to protect accounts and releases.",
          ],
        },
        {
          title: "Open-source license and cost",
          body: [
            "Penkra’s source code is available under the MIT License. The license included with the source controls your rights to copy, modify, distribute, or use that software.",
            "Penkra is currently free. AI providers, network operators, or third-party services may charge their own subscription, API, storage, or usage fees. You are responsible for reviewing and paying those charges.",
            "We may introduce optional paid services in the future only with clear terms and pricing before you incur a charge.",
          ],
        },
        {
          title: "Your content and instructions",
          body: [
            "You retain ownership of the prompts, files, messages, code, and other material you provide or create. You grant Penkra the limited rights needed to process that material to operate features you request.",
            "You are responsible for your instructions, approvals, selected files, connected accounts, and outputs you choose to use or publish. Review agent output before relying on it, especially for consequential, security-sensitive, financial, medical, or legal work.",
            "Do not provide content or access that you do not have the right to use, disclose, modify, or transmit.",
          ],
        },
        {
          title: "Agents, Apps, and third parties",
          body: [
            "Penkra coordinates AI providers and tools selected by you. Provider responses may be inaccurate, incomplete, biased, or unsafe. Provider availability, model behavior, limits, and data practices are controlled by the provider and governed by its terms.",
            "Apps receive only the arguments, capabilities, and permissions made available to them. You are responsible for reviewing requested permissions and deciding whether to install or use an App. Third-party Apps are the responsibility of their publishers unless Penkra expressly states otherwise.",
            "Third-party websites, accounts, repositories, and services remain subject to their own terms. Penkra is not responsible for third-party service changes, charges, content, or availability.",
          ],
        },
        {
          title: "Acceptable use",
          body: [
            "Do not use Penkra to violate law; infringe intellectual property or privacy; distribute malware; bypass access controls; obtain unauthorized credentials; harass, exploit, or harm others; or interfere with Penkra, a provider, an App, or another service.",
            "Do not misrepresent agent output as verified human work when that distinction is material. Do not use Penkra to make fully automated high-impact decisions about a person without the review and safeguards required by applicable law.",
            "We may block access to Penkra-operated services or releases when reasonably necessary to address abuse, security risk, legal requirements, or material violations of these Terms.",
          ],
        },
        {
          title: "Updates and availability",
          body: [
            "Penkra may download or offer software updates, security fixes, App metadata, or release information. Keep the app updated when an update addresses a known security or compatibility issue.",
            "Features may change, break, become unavailable, or be removed. Preview, canary, or development builds may be unstable and should not be relied on for critical work without backups.",
            "You are responsible for maintaining backups of important files and workspace data. Penkra does not guarantee uninterrupted operation, compatibility with every provider, or permanent availability of any third-party integration.",
          ],
        },
        {
          title: "Disclaimers and liability",
          body: [
            "To the maximum extent permitted by law, Penkra and the official software are provided “as is” and “as available,” without warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, or uninterrupted operation. Rights that cannot be waived under applicable law remain unaffected.",
            "To the maximum extent permitted by law, Penkra and its contributors will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of data, profits, goodwill, or business opportunity arising from use of the services.",
            "Where liability cannot be excluded, total liability for claims relating to the free services will be limited to the greater of the amount you paid Penkra for the service giving rise to the claim in the prior twelve months or US $100.",
          ],
        },
        {
          title: "Suspension, changes, and contact",
          body: [
            "You may stop using Penkra at any time and may request deletion of your Penkra account. Uninstalling the desktop app may not remove files created outside Penkra’s application data directory.",
            "We may suspend or end access to Penkra-operated services for security, legal, or material Terms violations. We may update these Terms by posting the revised version and changing the effective date; material changes may also be announced in the app or by email.",
            "Questions about these Terms can be sent to legal@penkra.com. Security reports should be sent to security@penkra.com.",
          ],
        },
      ]}
    />
  );
}
