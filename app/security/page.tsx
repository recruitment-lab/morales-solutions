import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Security Statement — Morales Solutions",
  description:
    "How Morales Solutions protects the website, data transmission, and third-party integrations.",
};

export default function SecurityPage() {
  return (
    <PageShell>
      <LegalLayout title="Security Statement" lastUpdated="July 1, 2026">
        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            Data Encryption
          </h2>
          <p>
            All data transmitted to and from our website is encrypted using
            HTTPS / SSL (Secure Sockets Layer) technology to help prevent
            interception by unauthorized parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            Infrastructure &amp; Hosting
          </h2>
          <p>
            Our Next.js application is deployed on secure cloud infrastructure.
            Server-side operations, environment variables, and API endpoints are
            not exposed in the public client-side bundle.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            Third-Party Security
          </h2>
          <p>
            We partner with secure, industry-standard platforms. Scheduling is
            offloaded to Calendly, which maintains its own security compliance
            frameworks to protect booking data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            Contact Information
          </h2>
          <p>
            If you discover a security vulnerability on this site, please report
            it immediately to{' '}
            <a className="text-brand-red hover:underline" href="mailto:security@moralessolutions.com">
              security@moralessolutions.com
            </a>.
          </p>
        </section>
      </LegalLayout>
    </PageShell>
  );
}
