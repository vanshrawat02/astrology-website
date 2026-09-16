import Link from "next/link";
import { Compass, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 lg:pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Cosmic Guidance
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Empowering lives with authentic Vedic Astrology insights and Zero-Demolition Vastu Shastra consultation.
            </p>
            <div className="flex items-center gap-3 text-amber-400 text-lg">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-gold-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-gold-400">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Offerings */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4">
              Key Offerings
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services" className="hover:text-gold-400">
                  Kundali & Guna Milan
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400">
                  Career & Wealth Analysis
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400">
                  Zero-Demolition Vastu
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400">
                  Varshphal Annual Horoscope
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400">
                  Certified Gemstones
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>info@cosmicguidance.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5" />
                <span>Vedic Chambers, Sector 18, New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500 space-y-3">
          <p className="max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> Astrology & Vastu Shastra provide spiritual guidance based on Vedic principles. Services do not replace professional medical, legal, or financial advice.
          </p>
          <p>© 2026 Cosmic Guidance. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

