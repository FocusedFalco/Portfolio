import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rakshit Raj — Product Manager & Data Analyst Portfolio",
  description: "Personal portfolio of Rakshit Raj, an aspiring Product Manager and pre-final year student at IIT (ISM) Dhanbad. Built with Prisma design aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-[#E1E0CC] font-sans antialiased selection:bg-[#DEDBC8] selection:text-black">
        {children}
      </body>
    </html>
  );
}
