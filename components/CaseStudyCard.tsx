type CaseStudyCardProps = {
  study: {
    title: string;
    result: string;
    problem: string;
    strategy: string;
    execution: string;
    tools: string[];
  };
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <p className="section-kicker">Editable sample</p>
      <h3 className="mt-3 text-2xl font-semibold text-ink">{study.title}</h3>
      <p className="mt-4 rounded-lg bg-ink px-4 py-3 text-sm font-bold text-electric">{study.result}</p>
      <div className="mt-6 space-y-4 text-sm leading-6 text-graphite/80">
        <p><strong className="text-ink">Problem:</strong> {study.problem}</p>
        <p><strong className="text-ink">Strategy:</strong> {study.strategy}</p>
        <p><strong className="text-ink">Execution:</strong> {study.execution}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {study.tools.map((tool) => (
          <span key={tool} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-midnight">
            {tool}
          </span>
        ))}
      </div>
    </article>
  );
}
