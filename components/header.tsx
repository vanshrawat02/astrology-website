"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, Mail, Phone, Calendar } from "lucide-react";
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

  const businessEmail = "secretsofastrology2dh@gmail.com";
  const businessPhone = "+91 9319506529";

  return (
    <header className="sticky top-0 z-50 bg-[#0A0D24]/90 backdrop-blur-xl border-b border-amber-500/20 shadow-lg transition-all duration-300">
      {/* Top bar with quick contact info */}
      <div className="bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border-b border-amber-500/10 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-amber-300/90 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Certified Vedic Astrology & Bhrigu Nandi Nadi Experts</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${businessEmail}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{businessEmail}</span>
            </a>
            <a
              href="tel:+919319506529"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{businessPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Business Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-amber-200" />
          </div>
          <div className="max-w-[260px] sm:max-w-md">
            <span className="font-heading font-extrabold text-base sm:text-xl gold-gradient-text leading-tight block truncate">
              Vedic Astrology
            </span>
            <span className="text-[10px] sm:text-xs text-amber-400/90 tracking-wider font-semibold uppercase block truncate">
              & Bhrigu Nandi Nadi Consultation
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-amber-400 border-b-2 border-amber-400 pb-1 font-bold"
                    : "hover:text-amber-300 transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Button variant="default" size="default" asChild className="btn-gold-shimmer">
            <Link href="/contact" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden text-amber-400 focus:outline-none p-2 rounded-lg bg-slate-900/50 border border-amber-500/20"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0F2D] border-b border-amber-500/20 px-6 pt-4 pb-6 space-y-4 shadow-2xl">
          <nav className="space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    isActive
                      ? "block text-amber-400 font-bold py-1.5"
                      : "block text-slate-200 hover:text-amber-300 font-medium py-1.5"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-amber-500/15 space-y-3">
            <div className="text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{businessEmail}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{businessPhone}</span>
              </p>
            </div>
            <Button variant="default" className="w-full btn-gold-shimmer" asChild>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
