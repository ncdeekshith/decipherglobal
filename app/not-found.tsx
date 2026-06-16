import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-ink px-6 py-28 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="section-kicker text-electric">404</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">This page is off the campaign map.</h1>
        <p className="mt-5 text-lg text-white/70">
          Head back home and explore the growth systems Decipher Global can build.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-bold text-ink transition hover:bg-white"
        >
          Back to home <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
