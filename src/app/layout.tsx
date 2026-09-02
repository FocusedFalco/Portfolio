import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prisma — Creative Studio & Global Collective",
  description: "A worldwide network of visual artists, filmmakers, and storytellers bound by passion and hunger to unlock potential through unique perspectives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Instrument+Serif:ital@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-[#E1E0CC] font-sans antialiased selection:bg-[#DEDBC8] selection:text-black">
        {children}
      </body>
    </html>
  );
}
