import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  services?: string[];
};

export function ServiceCard({ title, description, icon: Icon, services }: ServiceCardProps) {
  return (
    <article className="group rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-electric transition group-hover:bg-electric group-hover:text-ink">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-graphite/75">{description}</p>
      {services && (
        <ul className="mt-6 space-y-3 text-sm font-semibold text-graphite">
          {services.map((service) => (
            <li key={service} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {service}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
