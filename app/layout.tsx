import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://decipherglobal.com"),
  title: {
    default: "Decipher Global | Media, Marketing Tech & Software Solutions",
    template: "%s | Decipher Global"
  },
  description:
    "Decipher Global helps businesses create powerful content, run smarter campaigns, and build technology systems that scale.",
  openGraph: {
    title: "Decipher Global",
    description:
      "A premium growth partner for media production, marketing technology, automation, CRM, and custom operations software.",
    url: "https://decipherglobal.com",
    siteName: "Decipher Global",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
