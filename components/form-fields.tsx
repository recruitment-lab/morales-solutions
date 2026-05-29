import type { ReactNode } from "react";

const baseField =
  "w-full rounded-xl border border-black/10 bg-surface-soft px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 outline-none transition focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/20";

export function Field({
  label,
  htmlFor,
  required,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-brand-navy"
      >
        {label}
        {required && <span className="ml-0.5 text-brand-red">*</span>}
      </label>
      {children}
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${baseField} ${props.className ?? ""}`} />;
}

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  return (
    <textarea
      {...props}
      className={`${baseField} resize-y ${props.className ?? ""}`}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`${baseField} appearance-none bg-[length:18px] bg-[right_0.85rem_center] bg-no-repeat pr-10 ${props.className ?? ""}`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%230a0f23' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
      }}
    >
      {props.children}
    </select>
  );
}

export function SuccessState({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange text-white shadow-lg shadow-brand-red/30">
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <h2 className="mt-6 font-sans text-2xl font-extrabold text-brand-navy">
        {title}
      </h2>
      <p className="mt-3 max-w-sm text-base leading-7 text-brand-navy/65">
        {message}
      </p>
    </div>
  );
}
