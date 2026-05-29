"use client";

import { useState } from "react";
import { Field, Input, Select, Textarea, SuccessState } from "./form-fields";

export default function CareerApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-only for now. Backend / API route will be wired here later.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <SuccessState
        title="Application submitted"
        message="Thank you for applying. Our talent team reviews every application and will reach out if there's a strong match."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required>
          <Input id="name" name="name" autoComplete="name" placeholder="Alex Rivera" required />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="alex@email.com" required />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" />
        </Field>
        <Field label="Location" htmlFor="location">
          <Input id="location" name="location" placeholder="City, Country" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Role of interest" htmlFor="role" required>
          <Select id="role" name="role" defaultValue="" required>
            <option value="" disabled>
              Select a role
            </option>
            <option>Customer Support Specialist</option>
            <option>Sales Development Representative</option>
            <option>Compliance / Fraud Analyst</option>
            <option>Quality Assurance Specialist</option>
            <option>Team Lead / Supervisor</option>
          </Select>
        </Field>
        <Field label="Experience level" htmlFor="experience" required>
          <Select id="experience" name="experience" defaultValue="" required>
            <option value="" disabled>
              Select experience
            </option>
            <option>Entry level (0–1 yrs)</option>
            <option>Mid level (2–4 yrs)</option>
            <option>Senior (5+ yrs)</option>
          </Select>
        </Field>
      </div>

      <Field label="LinkedIn or portfolio" htmlFor="link">
        <Input id="link" name="link" type="url" placeholder="https://linkedin.com/in/..." />
      </Field>

      <Field label="Why Morales Solutions?" htmlFor="note" required>
        <Textarea
          id="note"
          name="note"
          rows={4}
          placeholder="Tell us about your experience and what draws you to high-compliance operations..."
          required
        />
      </Field>

      <Field label="Resume / CV" htmlFor="resume">
        <Input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="file:mr-4 file:rounded-full file:border-0 file:bg-brand-cream/60 file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-brand-red"
        />
      </Field>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-red bg-brand-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-red/25 transition-transform hover:-translate-y-0.5"
      >
        Submit Application
      </button>
      <p className="text-center text-xs text-brand-navy/50">
        We review every application individually. Equal opportunity employer.
      </p>
    </form>
  );
}
