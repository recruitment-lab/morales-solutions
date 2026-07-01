import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Morales Solutions",
  description:
    "Terms governing the use of the Morales Solutions website and its contact and scheduling tools.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <LegalLayout title="Terms of Service" lastUpdated="July 1, 2026">
        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            Agreement to Terms
          </h2>
          <p>
            By using this website, you agree to comply with and be bound by
            these Terms of Service. If you do not agree, please do not use our
            website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            Use of the Site
          </h2>
          <p>
            You agree to use this site only for lawful purposes. You are
            prohibited from using our contact forms to send spam, malicious
            code, or fraudulent information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            Intellectual Property
          </h2>
          <p>
            All content, design, and code on this website are the property of
            Morales Solutions and are protected by copyright laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            Limitation of Liability
          </h2>
          <p>
            This website and its services are provided "as is" without any
            warranties. We are not liable for damages arising from your use of,
            or inability to use, this website or third-party scheduling services
            such as Calendly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-jakarta text-xl font-bold text-brand-navy">
            Governing Law
          </h2>
          <p>
            These terms are governed by the laws applicable in the jurisdiction
            of Morales Solutions, without regard to conflict-of-law principles.
          </p>
        </section>
      </LegalLayout>
    </PageShell>
  );
}
