import type { Metadata } from "next";
import FormShell from "@/components/FormShell";
import ServiceRequestForm from "@/components/ServiceRequestForm";

export const metadata: Metadata = {
  title: "Request Services — Morales Solutions",
  description:
    "Tell us about your operation and we'll build a compliant, scalable team for customer support, sales, or regulatory operations.",
};

const highlights = [
  { value: "72h", label: "Median deployment time" },
  { value: "SLA", label: "Performance guaranteed" },
  { value: "QA", label: "Oversight included" },
];

export default function ServicesPage() {
  return (
    <FormShell
      eyebrow="For Organizations"
      title={
        <>
          Build a team that operates like{" "}
          <span className="text-gradient-brand">your own.</span>
        </>
      }
      description="Share a few details about your goals and we'll design a fully managed team — governed by SLAs and built for regulated markets."
      aside={
        <div className="grid grid-cols-3 gap-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-black/5 bg-white p-4 text-center shadow-sm"
            >
              <p className="font-sans text-xl font-extrabold text-brand-red">
                {h.value}
              </p>
              <p className="mt-1 text-xs font-medium text-brand-navy/55">
                {h.label}
              </p>
            </div>
          ))}
        </div>
      }
    >
      <ServiceRequestForm />
    </FormShell>
  );
}
