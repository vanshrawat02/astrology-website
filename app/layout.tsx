import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nadiveda | Vedic Astrology & Bhrigu Nandi Nadi Consultation",
  description:
    "Certified Vedic Astrology & Bhrigu Nandi Nadi consultation by Nadiveda. Kundali Matching, Career Predictions, Gemstones, and Annual Horoscopes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cinzel.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased bg-[#060718] text-slate-900 flex flex-col min-h-screen">
        {/* Main Content Box (Slides over Footer with bottom shadow) */}
        <div className="relative z-10 bg-white shadow-2xl flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
        </div>

        {/* Footer Reveal (Sticky bottom-0 z-0 smoothly uncovered as page content moves up) */}
        <div className="sticky bottom-0 z-0 w-full">
          <Footer />
        </div>

        <FloatingWhatsApp />
      </body>
    </html>
  );
}

