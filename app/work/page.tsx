import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PortfolioFilter } from "@/components/PortfolioFilter";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Portfolio & Work",
  description: "Explore Decipher Global portfolio placeholders for brand films, testimonials, reels, campaigns, events, and tech solutions.",
  openGraph: { title: "Portfolio & Work | Decipher Global", description: "A filterable portfolio grid for Decipher Global work." }
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker text-electric">Work</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">A structured portfolio for films, funnels, campaigns, and systems.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Each item includes a title, category, description, placeholder thumbnail, optional video field, and result or impact copy.
          </p>
        </div>
      </section>
      <Section eyebrow="Filterable portfolio" title="Browse by project type.">
        <PortfolioFilter />
      </Section>
      <CTASection title="Have a project that should sit in this portfolio next?" />
    </>
  );
}
