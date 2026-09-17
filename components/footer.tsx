import Link from "next/link";
import { Sparkles, Phone, Mail, MessageCircle, Heart, Briefcase, Baby, Coins, Plane } from "lucide-react";

export function Footer() {
  const businessEmail = "secretsofastrology2dh@gmail.com";
  const businessPhone = "+91 9319506529";

  return (
    <footer className="bg-[#060718] text-slate-300 pt-16 pb-24 lg:pb-12 text-sm border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-purple-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 text-amber-200" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg gold-gradient-text block leading-tight">
                  Vedic Astrology
                </span>
                <span className="text-[10px] text-amber-400 font-semibold uppercase block">
                  & Bhrigu Nandi Nadi
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering lives with authentic Vedic Astrology insights, Bhrigu Nandi Nadi techniques, and effective practical remedies for marriage, career, finance, family, and foreign travels.
            </p>
            <div className="flex items-center gap-4 text-amber-400 pt-2">
              <a
                href={`https://wa.me/919319506529?text=Hi%20Vedic%20Astrology,%20I%20would%20like%20to%20book%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-full"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gemstones" className="hover:text-amber-400 transition-colors">
                  Gemstones & Remedies
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Specializations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Marriage & Relationship</span>
              </li>
              <li className="flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Career & Business Growth</span>
              </li>
              <li className="flex items-center gap-2">
                <Baby className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Child Birth & Family</span>
              </li>
              <li className="flex items-center gap-2">
                <Coins className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Finance & Wealth Guidance</span>
              </li>
              <li className="flex items-center gap-2">
                <Plane className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Foreign Travels & Relocation</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Get in Touch
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-400 block uppercase font-semibold">Phone / Call</span>
                  <a href="tel:+919319506529" className="text-white hover:text-amber-300 font-bold">
                    {businessPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-400 block uppercase font-semibold">Email</span>
                  <a href={`mailto:${businessEmail}`} className="text-white hover:text-amber-300 font-bold break-all">
                    {businessEmail}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8 text-center text-xs text-slate-400 space-y-3">
          <p className="max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> Vedic Astrology & Bhrigu Nandi Nadi consultation provides spiritual and life guidance based on classical astrological principles.
          </p>
          <p>© 2026 Vedic Astrology & Bhrigu Nandi Nadi Consultation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
