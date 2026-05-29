import type { Metadata } from "next";
import FormShell from "@/components/FormShell";
import CareerApplicationForm from "@/components/CareerApplicationForm";

export const metadata: Metadata = {
  title: "Careers — Apply to Morales Solutions",
  description:
    "Build a career in high-stakes operations. Apply to join Morales Solutions in customer support, sales, compliance, and quality roles.",
};

const perks = [
  "Continuous regulatory training & certifications",
  "Market-benchmarked compensation — no grey areas",
  "Structured advancement pathways",
  "Work with leading regulated brands",
];

export default function CareersPage() {
  return (
    <FormShell
      eyebrow="For Professionals"
      title={
        <>
          Build a career in{" "}
          <span className="text-gradient-brand">high-stakes operations.</span>
        </>
      }
      description="Join a network of professionals placed with leading organizations in finance, healthcare, and technology. Tell us about yourself."
      aside={
        <ul className="space-y-3">
          {perks.map((perk) => (
            <li
              key={perk}
              className="flex items-start gap-3 text-sm font-medium text-brand-navy/75"
            >
              <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {perk}
            </li>
          ))}
        </ul>
      }
    >
      <CareerApplicationForm />
    </FormShell>
  );
}
