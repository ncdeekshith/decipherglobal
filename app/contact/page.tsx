import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Decipher Global for media production, marketing technology, CRM, automation, and custom software projects.",
  openGraph: { title: "Contact | Decipher Global", description: "Book a strategy call or start a project with Decipher Global." }
};

export default function ContactPage() {
  return (
    <section className="bg-cloud px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="section-kicker">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-ink md:text-6xl">Tell us what you want to grow next.</h1>
          <p className="mt-6 text-lg leading-8 text-graphite/75">
            Share your service interest, budget range, and goals. The current API logs submissions and is prepared for email or CRM integration.
          </p>
          <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
            <p className="font-semibold text-ink">Contact details placeholder</p>
            <p className="mt-2 text-graphite/70">hello@decipherglobal.com</p>
            <p className="text-graphite/70">+91 00000 00000</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
