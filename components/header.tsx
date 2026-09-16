"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Compass, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Choose Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const whatsappUrl =
    "https://wa.me/919999999999?text=Hi%20Cosmic%20Guidance,%20I%20would%20like%20to%20book%20an%20Astrology/Vastu%20consultation.";

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-amber-500/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 to-amber-400 flex items-center justify-center text-white shadow-md group-hover:rotate-45 transition-transform duration-500">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <span className="font-heading font-bold text-xl sm:text-2xl gold-gradient-text tracking-wide block">
              Cosmic Guidance
            </span>
            <span className="text-[10px] text-amber-700 tracking-widest uppercase block -mt-1">
              Vedic Astrology & Vastu
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-gold-500 border-b-2 border-gold-500 pb-1 font-bold"
                    : "hover:text-gold-500 transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Direct CTA: Book on WhatsApp */}
        <div className="hidden sm:flex items-center gap-4">
          <Button variant="emerald" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden text-amber-600 text-2xl focus:outline-none p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-amber-500/20 px-4 pt-4 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={
                  isActive
                    ? "block text-gold-600 font-bold py-1"
                    : "block text-slate-700 hover:text-gold-500 font-medium py-1"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <Button variant="emerald" className="w-full mt-2" asChild>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}

