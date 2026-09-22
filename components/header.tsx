"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, Mail, Phone, Calendar, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gemstones", label: "Gemstones" },
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
      <div className="bg-amber-500/10 border-b border-amber-500/20 text-slate-800 py-1.5 sm:py-1 text-[10px] sm:text-xs font-medium overflow-hidden">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Desktop Left: Expert Title */}
          <div className="hidden sm:flex items-center gap-1.5 text-amber-900 font-semibold text-xs min-w-0 flex-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse shrink-0" />
            <span className="truncate">Vedic Astrology & Bhrigu Nandi Nadi Consultation</span>
          </div>

          {/* Desktop Right / Mobile Full: Email & Phone Side by Side */}
          <div className="flex items-center justify-between sm:justify-end gap-x-2 sm:gap-x-4 text-slate-800 w-full sm:w-auto min-w-0 text-[10px] sm:text-xs font-bold">
            <a
              href={`mailto:${businessEmail}`}
              className="flex items-center gap-1 text-slate-900 hover:text-amber-700 transition-colors min-w-0 truncate"
              title={businessEmail}
            >
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 shrink-0" />
              <span className="truncate">{businessEmail}</span>
            </a>
            <a
              href="tel:+919319506529"
              className="flex items-center gap-1 text-slate-900 hover:text-amber-700 transition-colors font-extrabold shrink-0"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 shrink-0" />
              <span>{businessPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between gap-2">
        {/* Logo & Business Name */}
        <Link href="/" className="flex items-center gap-2 group min-w-0 flex-1">
          <div className="relative w-8 h-8 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-amber-500/10 border border-amber-500/30 shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0 p-0.5 sm:p-1">
            <img
              src="/logo.png"
              alt="Nadiveda Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <span className="font-heading font-extrabold text-sm sm:text-2xl gold-gradient-text leading-none block tracking-wider uppercase truncate">
              NADIVEDA
            </span>
            <span className="text-[8px] sm:text-[11px] text-amber-700 tracking-wider font-semibold uppercase block truncate mt-0.5">
              Vedic Astrology & Bhrigu Nandi Nadi
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links & Primary CTA Button */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              const linkClass = isActive
                ? "text-gold-500 border-b-2 border-gold-500 pb-1 font-bold"
                : "hover:text-gold-500 transition-colors";

              if (link.href !== "/services") {
                return (
                  <Link key={link.href} href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                );
              }

              return (
                <div key={link.href} className="relative group">
                  <Link href={link.href} className={`${linkClass} inline-flex items-center gap-1`}>
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Services dropdown (pt-4 bridges the gap so hover isn't lost) */}
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[22rem]">
                    <div className="bg-white rounded-2xl border border-amber-500/25 shadow-xl p-2">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            onClick={(e) => e.currentTarget.blur()}
                            className={`flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-amber-50 transition-colors ${
                              pathname === `/services/${service.id}` ? "bg-amber-50" : ""
                            }`}
                          >
                            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-gold-600 to-amber-500 flex items-center justify-center text-white shrink-0">
                              <Icon className="w-4 h-4" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-bold text-slate-900">{service.shortTitle}</span>
                              <span className="block text-xs font-normal text-slate-500 truncate">{service.tagline}</span>
                            </span>
                          </Link>
                        );
                      })}
                      <Link
                        href="/services"
                        onClick={(e) => e.currentTarget.blur()}
                        className="mt-1 flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 transition-colors"
                      >
                        View All Services
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <Button variant="default" size="default" asChild className="btn-gold-shimmer shrink-0">
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
        <div className="lg:hidden bg-white border-b border-amber-500/20 px-6 pt-4 pb-6 space-y-4 shadow-lg max-h-[calc(100dvh-5rem)] overflow-y-auto">
          <nav className="space-y-3">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
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
          <div className="pt-3 border-t border-amber-500/15">
            <span className="block text-[11px] font-bold text-amber-800 uppercase tracking-wider mb-2">Our Services</span>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-50/60 px-2.5 py-2 text-xs font-semibold text-slate-800 hover:bg-amber-100"
                  >
                    <Icon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="leading-tight">{service.shortTitle}</span>
                  </Link>
                );
              })}
            </div>
          </div>
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
