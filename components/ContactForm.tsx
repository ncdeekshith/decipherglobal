"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const initial = {
  name: "",
  companyName: "",
  phone: "",
  email: "",
  service: "",
  budget: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<FormState>("idle");
  const [error, setError] = useState("");

  function updateField(field: keyof typeof initial, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initial);
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-premium md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" value={form.name} onChange={(value) => updateField("name", value)} required />
        <Field label="Company Name" value={form.companyName} onChange={(value) => updateField("companyName", value)} required />
        <Field label="Phone Number" value={form.phone} onChange={(value) => updateField("phone", value)} required />
        <Field label="Email" type="email" value={form.email} onChange={(value) => updateField("email", value)} required />
        <Select
          label="Service Interested In"
          value={form.service}
          onChange={(value) => updateField("service", value)}
          options={["Everything Media", "Everything Marketing Tech", "Tech Solutions", "Complete Growth Package"]}
        />
        <Select
          label="Budget Range"
          value={form.budget}
          onChange={(value) => updateField("budget", value)}
          options={["Below ₹50,000", "₹50,000 - ₹1,00,000", "₹1,00,000 - ₹3,00,000", "₹3,00,000+"]}
        />
      </div>
      <label className="mt-5 block text-sm font-bold text-ink">
        Message
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
          rows={5}
          className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/10"
          placeholder="Tell us about your goals, timeline, and current growth bottleneck."
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-full bg-ink px-6 py-4 text-sm font-bold text-white transition hover:bg-midnight disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit Enquiry"}
      </button>
      {status === "success" && (
        <p className="mt-4 rounded-lg bg-teal/10 px-4 py-3 text-sm font-semibold text-teal">
          Thank you. Your enquiry has been received and is ready for CRM or email integration.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p>
      )}
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-bold text-ink">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/10"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block text-sm font-bold text-ink">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required
        className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/10"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
