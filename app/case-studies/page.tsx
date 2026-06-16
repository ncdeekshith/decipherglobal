import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Marketing-focused case study placeholders for Decipher Global campaign, WhatsApp, Google Ads, and CRM automation work.",
  openGraph: { title: "Case Studies | Decipher Global", description: "Editable marketing case studies with problem, strategy, execution, result, and tools." }
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker text-electric">Case Studies</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">Marketing results framed around business problems.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            These sample placeholders are ready to become real proof stories once campaign data, creative links, and client approvals are available.
          </p>
        </div>
      </section>
      <Section eyebrow="Detailed cards" title="Problem, strategy, execution, result, and tools.">
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => <CaseStudyCard key={study.title} study={study} />)}
        </div>
      </Section>
      <CTASection title="Want your next campaign to become a case study?" />
    </>
  );
}
