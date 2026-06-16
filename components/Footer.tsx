import Link from "next/link";
import { navLinks } from "@/lib/data";

const services = ["Brand Films", "Performance Marketing", "WhatsApp Marketing", "CRM Solutions", "Automation", "Operations Software"];

export function Footer() {
  return (
    <footer className="bg-white px-6 py-14 text-graphite">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-slate-200 pt-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-xl font-black text-ink">
            Decipher<span className="text-teal">Global</span>
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-graphite/70">
            Media production, marketing technology, and software solutions for businesses ready to build serious growth systems.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ink">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.slice(0, 6).map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-graphite/70 transition hover:text-ink">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ink">Services</h3>
          <div className="mt-4 grid gap-3">
            {services.map((service) => (
              <span key={service} className="text-sm text-graphite/70">
                {service}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ink">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-graphite/70">
            <span>hello@decipherglobal.com</span>
            <span>+91 00000 00000</span>
            <span>LinkedIn / Instagram / YouTube</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl text-sm text-graphite/50">
        © {new Date().getFullYear()} Decipher Global. All rights reserved.
      </div>
    </footer>
  );
}
