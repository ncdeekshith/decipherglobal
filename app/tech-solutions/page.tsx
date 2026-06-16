import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { techServices } from "@/lib/data";

const benefits = ["Reduce manual work", "Improve visibility", "Track performance", "Automate follow-ups", "Centralize business data"];
const solutions = ["Lead Management CRM", "WhatsApp Automation System", "Campaign Dashboard", "Operations Tracker", "Supply Chain Workflow"];

export const metadata: Metadata = {
  title: "Tech Solutions",
  description: "Custom CRM, automation, operations, and supply chain software solutions by Decipher Global.",
  openGraph: { title: "Tech Solutions | Decipher Global", description: "Business systems that reduce manual work and improve operational visibility." }
};

export default function TechSolutionsPage() {
  return (
    <>
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker text-electric">Tech Solutions</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">Custom business technology for operations that need clarity.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Decipher Global builds CRM systems, automation workflows, campaign dashboards, operations trackers, and supply chain software tailored to real business processes.
          </p>
        </div>
      </section>
      <Section eyebrow="Services" title="Software that fits your workflow instead of forcing one.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {techServices.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </Section>
      <Section className="bg-cloud" eyebrow="System benefits" title="Less manual tracking. More operational control.">
        <div className="grid gap-4 md:grid-cols-5">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-lg bg-white p-5 shadow-sm">
              <CheckCircle2 className="text-teal" size={22} />
              <p className="mt-4 font-semibold text-ink">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Example solutions" title="Practical systems that can be expanded into full products.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {solutions.map((solution) => (
            <article key={solution} className="rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-ink">{solution}</h3>
              <p className="mt-3 text-sm leading-6 text-graphite/70">Editable solution card for demos, client examples, or future screenshots.</p>
            </article>
          ))}
        </div>
      </Section>
      <CTASection title="Turn scattered operations into one clear system." />
    </>
  );
}
