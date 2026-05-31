"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SERVICES = [
  "Compliance & Regulatory Operations",
  "Customer Support",
  "Sales Operations",
  "QA & Supervisory Oversight",
  "Multi-vertical / Not sure yet",
];

const VOLUMES = [
  "1–10 agents",
  "11–50 agents",
  "51–200 agents",
  "200+ agents",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Front-only stub: simulate POST. Backend will be wired up later.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    (e.currentTarget as HTMLFormElement).reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-red/40 bg-brand-navy-700/60 p-10 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full brand-gradient-bg text-brand-cream">
          <CheckCircle2 size={22} />
        </div>
        <h3 className="mt-5 font-sans text-2xl font-bold text-brand-cream">
          Request received.
        </h3>
        <p className="mt-2 text-sm text-brand-cream/70">
          A member of our team will reach out within 24 business hours with next
          steps and a tailored deployment outline.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange hover:text-brand-cream"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-brand-navy-700/40 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required placeholder="Jane Cooper" />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
        />
        <Field label="Company" name="company" required placeholder="Acme Inc." />
        <Field label="Role / Title" name="role" placeholder="VP of Operations" />

        <SelectField
          label="Service of interest"
          name="service"
          required
          options={SERVICES}
        />
        <SelectField
          label="Estimated team size"
          name="volume"
          required
          options={VOLUMES}
        />
      </div>

      <div className="mt-5">
        <label className="block">
          <span className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-cream/85">
            Briefly describe your operation
          </span>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Industry, jurisdictions, current pain points, target launch date…"
            className="w-full rounded-md border border-white/10 bg-brand-navy/50 px-4 py-3 text-sm text-brand-cream placeholder:text-brand-cream/35 outline-none transition focus:border-brand-red focus:bg-brand-navy/70"
          />
        </label>
      </div>

      <div className="mt-3 flex items-start gap-2">
        <input
          id="nda"
          name="nda"
          type="checkbox"
          className="mt-1 h-4 w-4 accent-brand-red"
        />
        <label htmlFor="nda" className="text-xs leading-relaxed text-brand-cream/65">
          I&apos;d like to start under NDA before sharing operational details.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3.5 font-sans text-sm font-semibold text-brand-cream shadow-[0_16px_48px_-16px_rgba(179,6,52,0.9)] transition hover:bg-brand-orange disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request a Discovery Call"}
        <ArrowRight size={16} />
      </button>

      <p className="mt-4 text-[11px] leading-relaxed text-brand-cream/45">
        By submitting, you agree to our processing of the information you
        provide for the purpose of evaluating your request. We do not share
        data with third parties.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-cream/85">
        {label}
        {required && <span className="ml-1 text-brand-red">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-white/10 bg-brand-navy/50 px-4 py-2.5 text-sm text-brand-cream placeholder:text-brand-cream/35 outline-none transition focus:border-brand-red focus:bg-brand-navy/70"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-cream/85">
        {label}
        {required && <span className="ml-1 text-brand-red">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-md border border-white/10 bg-brand-navy/50 px-4 py-2.5 text-sm text-brand-cream outline-none transition focus:border-brand-red focus:bg-brand-navy/70"
      >
        <option value="" disabled>
          Select an option…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-brand-navy text-brand-cream">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
