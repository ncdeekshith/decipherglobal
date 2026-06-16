type PortfolioCardProps = {
  item: {
    title: string;
    category: string;
    description: string;
    impact: string;
    image: string;
  };
};

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div
        className="media-thumb h-56"
        style={{ backgroundImage: `linear-gradient(rgba(6, 22, 47, 0.18), rgba(6, 22, 47, 0.18)), url(${item.image})` }}
        role="img"
        aria-label={`${item.title} placeholder thumbnail`}
      />
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal">{item.category}</p>
        <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>
        <p className="mt-3 leading-7 text-graphite/75">{item.description}</p>
        <p className="mt-5 rounded-lg bg-cloud px-4 py-3 text-sm font-semibold text-midnight">{item.impact}</p>
      </div>
    </article>
  );
}
