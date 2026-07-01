"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CAREERS_WEBAPP_URL = process.env.NEXT_PUBLIC_CAREERS_SHEET_WEBAPP_URL;

const ENGLISH_LEVELS = [
  "A1 (Beginner)",
  "A2 (Elementary)",
  "B1 (Intermediate)",
  "B2 (Upper Intermediate)",
  "C1 (Advanced)",
  "C2 (Advanced Native)",
];

const WORK_SCHEDULES = [
  "Full Time (40 hrs a week)",
  "Part Time",
  "Flexible",
  "Weekends only",
  "Other",
];

const COUNTRY_CHANGE_PLANS = ["Yes", "No", "Not sure"];

const WORK_STATUSES = [
  "Currently unemployed / Looking for a full-time role",
  "Currently employed / Open to opportunities",
  "Freelancing / Contractor",
  "Student",
  "Other",
];

export default function CareersForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!CAREERS_WEBAPP_URL) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const formData = new FormData(form);
      const payload = new URLSearchParams();
      const phone = String(formData.get("phone") ?? "")
        .replace(/[()\s-]/g, "")
        .trim();

      payload.set("EmailAddress", String(formData.get("emailAddress") ?? ""));
      payload.set("FirstName", String(formData.get("firstName") ?? ""));
      payload.set("LastName", String(formData.get("lastName") ?? ""));
      payload.set(
        "CountryOfResidency",
        String(formData.get("countryOfResidency") ?? ""),
      );
      payload.set("City", String(formData.get("city") ?? ""));
      payload.set("Phone", phone);
      payload.set("Email", String(formData.get("email") ?? ""));
      payload.set("WorkEmail", String(formData.get("workEmail") ?? ""));
      payload.set("Speedtest", String(formData.get("speedTestUrl") ?? ""));

      payload.set("CV", String(formData.get("cvLink") ?? ""));

      payload.set("VideoLink", String(formData.get("videoLink") ?? ""));
      payload.set("EnglishLevel", String(formData.get("englishLevel") ?? ""));
      payload.set("Experience", String(formData.get("experience") ?? ""));
      payload.set("InternetInfo", String(formData.get("internetSetup") ?? ""));
      payload.set(
        "SalaryExpectations",
        String(formData.get("monthlyPaymentExpectations") ?? ""),
      );
      payload.set("Avaliability", String(formData.get("workingScheduleAvailability") ?? ""));
      payload.set("ChangeCountry", String(formData.get("countryChangePlans") ?? ""));
      payload.set("CalednlyLink", String(formData.get("calendlyLink") ?? ""));
      payload.set("WorkStatus", String(formData.get("workStatus") ?? ""));
      payload.set(
        "SalaryExpectationMonthly",
        String(formData.get("salaryExpectationMonthly") ?? ""),
      );

      const response = await fetch(CAREERS_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      form.reset();
      setStatus(response ? "success" : "success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-cream/15 bg-brand-navy-700/60 p-10 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full brand-gradient-bg text-surface">
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

  if (status === "error") {
    return (
      <div className="rounded-2xl border border-brand-red/40 bg-brand-navy-700/60 p-10 text-center">
        <h3 className="font-sans text-2xl font-bold text-brand-cream">
          We couldn&apos;t send your application.
        </h3>
        <p className="mt-2 text-sm text-brand-cream/70">
          Check that the Apps Script URL is configured and try again.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange hover:text-brand-cream"
        >
          Back to form
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-brand-cream/10 bg-brand-navy-700/40 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Application email address"
          name="emailAddress"
          type="email"
          required
          placeholder="you@email.com"
        />
        <Field
          label="First name"
          name="firstName"
          required
          placeholder="Jane"
        />
        <Field
          label="Last name"
          name="lastName"
          required
          placeholder="Cooper"
        />
        <Field
          label="Country of residency"
          name="countryOfResidency"
          required
          placeholder="Venezuela"
        />
        <Field label="City" name="city" required placeholder="Caracas" />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          placeholder="+58 414 000 0000"
        />
        <Field
          label="Personal email"
          name="email"
          type="email"
          required
          placeholder="personal@email.com"
        />
        <Field
          label="Work email"
          name="workEmail"
          type="email"
          placeholder="work@email.com"
        />
        <Field
          label="Internet speed test URL"
          name="speedTestUrl"
          type="url"
          required
          placeholder="https://www.speedtest.net/result/..."
        />
        <Field
          label="CV / Drive link"
          name="cvLink"
          type="url"
          required
          placeholder="https://drive.google.com/..."
        />
        <Field
          label="Short video link in English"
          name="videoLink"
          type="url"
          required
          placeholder="https://www.loom.com/share/..."
        />
        <SelectField
          label="English level"
          name="englishLevel"
          required
          options={ENGLISH_LEVELS}
        />
      </div>

      <div className="mt-5 grid gap-5">
        <TextAreaField
          label="Experience (optional)"
          name="experience"
          placeholder="Tell us about your relevant work experience."
        />
        <TextAreaField
          label="Internet provider, plan speed, router model, and backup power"
          name="internetSetup"
          required
          placeholder="ISP, Mbps, router model, UPS or other backup power source."
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field
          label="Monthly payment expectations in USD"
          name="monthlyPaymentExpectations"
          required
          placeholder="$800"
        />
        <SelectField
          label="Current working schedule availability"
          name="workingScheduleAvailability"
          required
          options={WORK_SCHEDULES}
        />
        <SelectField
          label="Plans to change country of residence in 6 months"
          name="countryChangePlans"
          required
          options={COUNTRY_CHANGE_PLANS}
        />
        <Field
          label="Calendly link"
          name="calendlyLink"
          type="url"
          required
          placeholder="https://calendly.com/..."
        />
        <Field
          label="Salary expectation monthly in $"
          name="salaryExpectationMonthly"
          required
          placeholder="$800"
        />
        <SelectField
          label="Work status"
          name="workStatus"
          required
          options={WORK_STATUSES}
        />
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
        className="w-full rounded-md border border-brand-cream/15 bg-brand-navy-600 px-4 py-2.5 text-sm text-brand-cream placeholder:text-brand-cream/40 outline-none transition-colors focus:border-brand-red focus:bg-brand-navy-600 focus:ring-2 focus:ring-brand-red/15"
      />
    </label>
  );
}

function TextAreaField({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-cream/85">
        {label}
        {required && <span className="ml-1 text-brand-red">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={4}
        placeholder={placeholder}
        className="w-full rounded-md border border-brand-cream/15 bg-brand-navy-600 px-4 py-3 text-sm text-brand-cream placeholder:text-brand-cream/40 outline-none transition-colors focus:border-brand-red focus:bg-brand-navy-600 focus:ring-2 focus:ring-brand-red/15"
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
        className="w-full rounded-md border border-brand-cream/15 bg-brand-navy-600 px-4 py-2.5 text-sm text-brand-cream outline-none transition-colors focus:border-brand-red focus:bg-brand-navy-600 focus:ring-2 focus:ring-brand-red/15"
      >
        <option value="" disabled>
          Select an option…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-brand-navy-600 text-brand-cream">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
