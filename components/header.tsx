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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-500/20 shadow-sm transition-all duration-300">
      {/* Top bar with quick contact info */}
      <div className="bg-slate-900 text-slate-300 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-amber-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Certified Experts in Vedic Astrology & Bhrigu Nandi Nadi</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${businessEmail}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{businessEmail}</span>
            </a>
            <a
              href="tel:+919319506529"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-semibold text-white"
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
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 to-amber-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="max-w-[240px] sm:max-w-md">
            <span className="font-heading font-extrabold text-base sm:text-xl gold-gradient-text leading-tight block truncate">
              Vedic Astrology
            </span>
            <span className="text-[10px] sm:text-xs text-amber-700 tracking-wider font-semibold uppercase block truncate">
              & Bhrigu Nandi Nadi Consultation
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
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
          className="lg:hidden text-amber-600 focus:outline-none p-2 rounded-lg bg-amber-50 border border-amber-500/20"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-amber-500/20 px-6 pt-4 pb-6 space-y-4 shadow-lg">
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
                      ? "block text-gold-600 font-bold py-1.5"
                      : "block text-slate-700 hover:text-gold-500 font-medium py-1.5"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-amber-500/15 space-y-3">
            <div className="text-xs text-slate-600 space-y-1">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <span>{businessEmail}</span>
              </p>
              <p className="flex items-center gap-2 font-semibold text-slate-900">
                <Phone className="w-3.5 h-3.5 text-amber-600" />
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
