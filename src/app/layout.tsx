import type { Metadata } from "next";
import "./globals.css";
import LayoutContent from "@/components/LayoutContent";

export const metadata: Metadata = {
  title: "Rakshit Raj | Product Manager Portfolio",
  description: "Personal portfolio of Rakshit Raj, an aspiring Product Manager with experience in product strategy, data analytics, AI prototyping, and case competitions. Built using Apple, Linear, and Stripe design aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <LayoutContent>
        {children}
      </LayoutContent>
    </html>
  );
}
