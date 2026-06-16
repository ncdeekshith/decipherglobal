"use client";

import { useMemo, useState } from "react";
import { PortfolioCard } from "@/components/PortfolioCard";
import { portfolioCategories, portfolioItems } from "@/lib/data";

export function PortfolioFilter({ categories = portfolioCategories, limit }: { categories?: string[]; limit?: number }) {
  const [active, setActive] = useState(categories[0] ?? "All");
  const filtered = useMemo(
    () => {
      const categoryAlias = active === "Marketing Reels" ? "Reels" : active;
      const items = active === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === categoryAlias);
      return typeof limit === "number" ? items.slice(0, limit) : items;
    },
    [active, limit]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              active === category ? "bg-ink text-white" : "border border-slate-200 bg-white text-graphite hover:border-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <PortfolioCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
