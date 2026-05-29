"use client";

import { useState } from "react";
import { Field, Input, Select, Textarea, SuccessState } from "./form-fields";

export default function ServiceRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-only for now. Backend / API route will be wired here later.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <SuccessState
        title="Request received"
        message="Thanks for reaching out. A solutions lead will contact you within 72 hours to schedule your discovery call."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required>
          <Input id="name" name="name" autoComplete="name" placeholder="Jane Morales" required />
        </Field>
        <Field label="Work email" htmlFor="email" required>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
        </Field>
        <Field label="Company" htmlFor="company" required>
          <Input id="company" name="company" placeholder="Company Inc." required />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Service interest" htmlFor="service" required>
          <Select id="service" name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            <option>Customer Support</option>
            <option>Sales Operations</option>
            <option>Compliance & Regulatory Ops</option>
            <option>Back-office Operations</option>
            <option>Multiple / Not sure yet</option>
          </Select>
        </Field>
        <Field label="Team size needed" htmlFor="team-size">
          <Select id="team-size" name="team-size" defaultValue="">
            <option value="" disabled>
              Select team size
            </option>
            <option>1–5 agents</option>
            <option>6–20 agents</option>
            <option>21–50 agents</option>
            <option>50+ agents</option>
          </Select>
        </Field>
      </div>

      <Field label="Tell us about your operation" htmlFor="message" required>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Goals, target markets, compliance needs, timeline..."
          required
        />
      </Field>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-red/30 transition-transform hover:-translate-y-0.5"
      >
        Request Services
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
      <p className="text-center text-xs text-brand-navy/50">
        Your information is handled under NDA-first, encrypted data policies.
      </p>
    </form>
  );
}
