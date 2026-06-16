import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { caseStudies, marketingServices, metrics } from "@/lib/data";

export const metadata: Metadata = {
  title: "Everything Marketing Tech",
  description: "Performance marketing, WhatsApp marketing, Google Ads, and SEO systems from Decipher Global.",
  openGraph: { title: "Everything Marketing Tech | Decipher Global", description: "Campaign funnels that generate, nurture, and convert leads." }
};

export default function MarketingTechPage() {
  return (
    <>
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker text-electric">Everything Marketing Tech</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">Campaign systems built for leads, learning, and scale.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            We connect creative, paid media, WhatsApp funnels, SEO, and reporting into marketing engines that improve every cycle.
          </p>
        </div>
      </section>
      <Section eyebrow="Services" title="Every campaign needs a system, not just an ad.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {marketingServices.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </Section>
      <Section className="bg-cloud" eyebrow="Funnel visual" title="Ad to conversion, connected end to end.">
        <div className="grid gap-4 md:grid-cols-5">
          {["Ad", "Landing Page", "WhatsApp", "CRM", "Conversion"].map((stage) => (
            <div key={stage} className="rounded-lg bg-white p-6 text-center font-bold text-ink shadow-sm">{stage}</div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Metrics" title="Sample campaign outcomes for editable case studies.">
        <div className="grid gap-5 md:grid-cols-5">
          {metrics.map((metric) => <div key={metric} className="rounded-lg border border-slate-200 p-5 font-semibold text-midnight">{metric}</div>)}
        </div>
      </Section>
      <Section className="bg-cloud" eyebrow="Campaign portfolio" title="Marketing case studies prepared for real numbers.">
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.slice(0, 3).map((study) => (
            <div key={study.title} className="rounded-lg bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-ink">{study.title}</h3>
              <p className="mt-3 text-graphite/75">{study.strategy}</p>
              <p className="mt-5 text-sm font-bold text-teal">{study.result}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTASection title="Build a campaign funnel that keeps improving." />
    </>
  );
}
