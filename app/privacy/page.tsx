import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Morales Solutions",
  description:
    "How Morales Solutions collects, uses, and protects the data you share through our website, contact forms, and scheduling links.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <LegalLayout title="Privacy Policy" lastUpdated="July 1, 2026">
        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            Data We Collect
          </h2>
          <p>
            We collect information you provide directly to us through our
            contact forms and scheduling links. This may include your name,
            email address, phone number, and any messages or meeting notes you
            submit.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            How We Use Your Data
          </h2>
          <p>We use your information strictly to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Respond to your inquiries.</li>
            <li>Schedule and manage appointments.</li>
            <li>Maintain site security.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            Third-Party Sharing
          </h2>
          <p>
            We do not sell your data. We only share information with trusted
            third-party service providers needed to run the site, including:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Calendly, to facilitate meeting bookings.</li>
            <li>Hosting and email providers, to process website traffic and notifications.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            Your Rights
          </h2>
          <p>
            Depending on your location, you may have the right to access,
            update, or delete your personal data. To exercise these rights,
            contact us at <a className="text-brand-red hover:underline" href="mailto:contact@moralessolutions.com">contact@moralessolutions.com</a>.
          </p>
        </section>
      </LegalLayout>
    </PageShell>
  );
}
