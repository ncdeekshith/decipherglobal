import { Button } from "@/components/Button";

export function CTASection({
  title = "Let's build your next growth system.",
  description = "Bring Decipher Global into the room when your business needs content, campaigns, and systems working as one."
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-ink px-6 py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker text-electric">Start a project</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">{description}</p>
        </div>
        <Button href="/contact">Start a Project</Button>
      </div>
    </section>
  );
}
