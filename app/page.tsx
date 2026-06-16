import { CheckCircle2, Play, TrendingUp } from "lucide-react";
import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { PortfolioFilter } from "@/components/PortfolioFilter";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { caseStudies, coreWings, homePortfolioCategories, industries, metrics, processSteps, whyPoints } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="bg-ink px-6 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up">
            <p className="section-kicker text-electric">Decipher Global</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
              Media. Marketing. Technology. Built to Grow Brands.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Decipher Global helps businesses create powerful content, run smarter campaigns, and build technology systems that scale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Book a Strategy Call</Button>
              <Button href="/work" variant="secondary">View Our Work</Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-premium">
            <div
              className="media-thumb min-h-[420px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(6, 22, 47, 0.05), rgba(6, 22, 47, 0.72)), url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80)"
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 grid gap-3 p-5 sm:grid-cols-3">
              {["Film", "Funnel", "Software"].map((label) => (
                <div key={label} className="glass-panel rounded-lg p-4">
                  <p className="text-sm font-bold">{label}</p>
                  <p className="mt-1 text-xs text-white/60">Built for outcomes</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Industries served" title="Trusted systems for growth-minded teams.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
          {industries.map((industry) => (
            <div key={industry} className="rounded-lg border border-slate-200 bg-cloud p-5 text-center text-sm font-bold text-midnight">
              {industry}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-cloud" eyebrow="Three core wings" title="One partner across content, campaigns, and business technology.">
        <div className="grid gap-6 lg:grid-cols-3">
          {coreWings.map((wing) => (
            <ServiceCard key={wing.title} {...wing} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Previous work" title="A flexible portfolio structure ready for real projects.">
        <PortfolioFilter categories={homePortfolioCategories} limit={6} />
      </Section>

      <Section className="bg-cloud" eyebrow="Marketing case studies" title="Sample performance stories, designed to be replaced with real results.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric) => (
            <div key={metric} className="rounded-lg bg-white p-6 shadow-sm">
              <TrendingUp className="text-teal" size={24} />
              <p className="mt-5 text-2xl font-semibold text-ink">{metric}</p>
              <p className="mt-2 text-sm text-graphite/60">Placeholder metric, editable in the content data file.</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {caseStudies.slice(0, 2).map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="From business context to measurable scale.">
        <div className="grid gap-5 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-lg border border-slate-200 p-6">
              <span className="text-sm font-black text-teal">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section dark className="bg-ink text-white" eyebrow="Why Decipher Global" title="Growth work with the strategy, creative, and systems in the same room.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {whyPoints.map((point) => (
            <div key={point} className="glass-panel rounded-lg p-5">
              <CheckCircle2 className="text-electric" size={22} />
              <p className="mt-4 font-semibold">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto flex max-w-7xl items-center gap-5 rounded-lg border border-slate-200 p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-electric">
            <Play size={20} />
          </div>
          <p className="text-graphite/75">
            Replace portfolio thumbnails, video links, testimonials, and case study numbers in <strong className="text-ink">lib/data.ts</strong> as real assets become available.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
