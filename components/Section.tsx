type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  dark?: boolean;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, description, className = "", dark = false, children }: SectionProps) {
  return (
    <section id={id} className={`px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && <p className={`section-kicker ${dark ? "text-electric" : ""}`}>{eyebrow}</p>}
            {title && <h2 className={`mt-3 text-3xl font-semibold tracking-normal md:text-5xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>}
            {description && <p className={`mt-5 text-lg leading-8 ${dark ? "text-white/70" : "text-graphite/75"}`}>{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
