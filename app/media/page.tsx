import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { mediaServices, portfolioItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Everything Media",
  description: "Cinematic brand films, advertisements, testimonials, reels, and event coverage by Decipher Global.",
  openGraph: { title: "Everything Media | Decipher Global", description: "Premium media production for credible, memorable brands." }
};

export default function MediaPage() {
  return (
    <>
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker text-electric">Everything Media</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">Cinematic production for brands that need to look serious.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            From brand films to testimonials and reels, Decipher Global builds media assets that support trust, sales, hiring, and campaign performance.
          </p>
        </div>
      </section>
      <Section eyebrow="Services" title="Production services with strategy behind the lens.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mediaServices.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </Section>
      <Section className="bg-cloud" eyebrow="Showcase" title="Video placeholders ready for real portfolio embeds.">
        <div className="grid gap-6 md:grid-cols-3">
          {portfolioItems.slice(0, 3).map((item) => (
            <div key={item.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="media-thumb h-64" style={{ backgroundImage: `linear-gradient(rgba(6,22,47,.18), rgba(6,22,47,.42)), url(${item.image})` }} />
              <div className="p-5">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-graphite/70">Add real video link or embed here.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Production process" title="Script. Shoot. Edit. Deliver.">
        <div className="grid gap-5 md:grid-cols-4">
          {["Script", "Shoot", "Edit", "Deliver"].map((step) => (
            <div key={step} className="rounded-lg border border-slate-200 p-7 text-center text-xl font-semibold text-ink">{step}</div>
          ))}
        </div>
      </Section>
      <CTASection title="Ready to make your brand look as strong as your business?" />
    </>
  );
}
