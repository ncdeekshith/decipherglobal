import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";

const differentiators = [
  "We think in growth systems, not isolated deliverables.",
  "We connect media production with paid campaigns and automation.",
  "We build tools that make business execution easier to measure.",
  "We care about revenue, lead quality, response speed, and operational clarity."
];

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Decipher Global, a growth systems company combining media, marketing technology, and software solutions.",
  openGraph: { title: "About | Decipher Global", description: "We are not just a media agency. We are a growth systems company." }
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker text-electric">About Decipher Global</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">We are not just a media agency. We are a growth systems company.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Decipher Global was built for businesses that need a sharper partner across brand credibility, lead generation, automation, and custom technology.
          </p>
        </div>
      </section>
      <Section eyebrow="Company story" title="Built where creative quality meets operational discipline.">
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="text-lg leading-8 text-graphite/75">
            Many businesses treat media, marketing, and software as separate vendors. Decipher Global brings them together so brand films support campaigns, campaigns connect to CRM systems, and operations become easier to run.
          </p>
          <p className="text-lg leading-8 text-graphite/75">
            Our mission is to help companies grow with assets and systems that make them look credible, move faster, track better, and convert more consistently.
          </p>
        </div>
      </Section>
      <Section className="bg-cloud" eyebrow="What makes us different" title="Strategy first, execution under one roof.">
        <div className="grid gap-5 md:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item} className="rounded-lg bg-white p-6 font-semibold text-ink shadow-sm">{item}</div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Team" title="A lean specialist team, ready to expand.">
        <div className="grid gap-6 md:grid-cols-3">
          {["Growth Strategist", "Creative Director", "Tech Lead"].map((role) => (
            <div key={role} className="rounded-lg border border-slate-200 p-7">
              <div className="h-40 rounded-lg bg-cloud" />
              <h3 className="mt-5 text-xl font-semibold text-ink">{role}</h3>
              <p className="mt-2 text-sm text-graphite/70">Placeholder team profile for founder, leadership, or department heads.</p>
            </div>
          ))}
        </div>
      </Section>
      <CTASection title="Bring your brand, campaigns, and systems into one plan." />
    </>
  );
}
