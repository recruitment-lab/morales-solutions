"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const AREAS = [
  "Compliance / Regulatory Operations",
  "Customer Support",
  "Sales / Business Development",
  "Quality Assurance",
  "Team Lead / Supervision",
  "Other",
];

const EXPERIENCE = [
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5+ years",
];

export default function CareersForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    (e.currentTarget as HTMLFormElement).reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/15 bg-brand-navy-700/60 p-10 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full brand-gradient-bg text-brand-cream">
          <CheckCircle2 size={22} />
        </div>
        <h3 className="mt-5 font-sans text-2xl font-bold text-brand-cream">
          Application received.
        </h3>
        <p className="mt-2 text-sm text-brand-cream/70">
          Thank you. Our talent team reviews submissions weekly and will reach
          out as roles matching your profile open.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange hover:text-brand-cream"
        >
          Submit another application
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
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
        />
        <Field label="Phone" name="phone" placeholder="+1 555 000 0000" />
        <Field label="Location" name="location" placeholder="City, Country" />

        <SelectField
          label="Area of interest"
          name="area"
          required
          options={AREAS}
        />
        <SelectField
          label="Years of experience"
          name="experience"
          required
          options={EXPERIENCE}
        />

        <Field
          label="LinkedIn / Portfolio"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/…"
        />
        <Field
          label="Languages"
          name="languages"
          placeholder="English (C1), Spanish (Native)"
        />
      </div>

      <div className="mt-5">
        <label className="block">
          <span className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-cream/85">
            Why Morales Solutions?
          </span>
          <textarea
            name="message"
            rows={4}
            placeholder="Briefly tell us about your relevant experience and what you're looking for next."
            className="w-full rounded-md border border-white/10 bg-brand-navy/50 px-4 py-3 text-sm text-brand-cream placeholder:text-brand-cream/35 outline-none transition focus:border-brand-red focus:bg-brand-navy/70"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3.5 font-sans text-sm font-semibold text-brand-cream shadow-[0_16px_48px_-16px_rgba(179,6,52,0.9)] transition hover:bg-brand-orange disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Submit Application"}
        <ArrowRight size={16} />
      </button>

      <p className="mt-4 text-[11px] leading-relaxed text-brand-cream/45">
        Your information is used solely for recruitment purposes. We never sell
        candidate data.
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
