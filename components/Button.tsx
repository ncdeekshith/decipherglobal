import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles = {
    primary: "bg-electric text-ink hover:bg-white",
    secondary: "border border-white/25 bg-white/10 text-white hover:bg-white hover:text-ink",
    dark: "bg-ink text-white hover:bg-midnight"
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${styles[variant]}`}
    >
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}
