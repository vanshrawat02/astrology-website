import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Calendar, Phone, MessageCircle, CheckCircle2, ShieldCheck, ArrowRight, BookOpen, Compass, Award, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Bhrigu Nandi Nadi Astrology Consultation | Acharya Deepak Mehta",
  description:
    "Expert Bhrigu Nandi Nadi (BNN) astrology consultation by Acharya Deepak Mehta. Precise timing of life events, planetary transit readings, and effective practical remedies.",
  keywords: [
    "Bhrigu Nandi Nadi Astrology",
    "BNN Astrology Consultation",
    "Nadi Astrology Specialist",
    "Bhrigu Nandi Nadi Timing of Events",
    "Vedic Astrology Specialist Delhi Ghaziabad",
    "Acharya Deepak Mehta Astrologer"
  ],
};

export default function BhriguNandiNadiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bhrigu Nandi Nadi Astrology Consultation",
    provider: {
      "@type": "ProfessionalService",
      name: "Nadiveda - Acharya Deepak Mehta",
      telephone: "+91-9319506529",
      email: "secretsofastrology2dh@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ramprastha Colony",
        addressLocality: "Ghaziabad",
        addressRegion: "Uttar Pradesh",
        postalCode: "201011",
        addressCountry: "IN",
      },
    },
    serviceType: "Astrological Consultation",
    areaServed: "Worldwide",
    description:
      "Classical Bhrigu Nandi Nadi (BNN) astrological reading for accurate life predictions, career timing, marriage matching, and personalized remedies.",
  };

  const bnnFeatures = [
    {
      title: "Jupiter's 12-Year Transit Cycle",
      desc: "Jupiter acts as the Jiva Karaka (life force). Its yearly movement through 12 zodiac signs activates natal planets, pinpointing exact years of key life milestones.",
    },
    {
      title: "Saturn as the Karma Karaka",
      desc: "Saturn represents duty, hard work, and professional karma. BNN tracks Saturn's movement over planetary combinations to predict career rises, changes, and responsibilities.",
    },
    {
      title: "Trine Planetary Combinations (1-5-9)",
      desc: "Unlike traditional aspects, BNN evaluates mutual relationships formed between planets placed in trines, opposition (1-7), and adjacent houses (2-12).",
    },
    {
      title: "No Dependence on Exact Birth Seconds",
      desc: "Because BNN focuses on planetary directional inter-relationships and transits, it produces remarkably accurate predictions even when exact birth seconds are uncertain.",
    },
  ];

  const faqs = [
    {
      q: "What makes Bhrigu Nandi Nadi different from standard Parashari Astrology?",
      a: "While Parashari astrology heavily relies on Vimshottari Dashas and Lagna calculations, Bhrigu Nandi Nadi (BNN) studies the direct directional relationships (trines: 1-5-9, opposites: 1-7, and adjacent: 2-12) between transit planets (especially Jupiter and Saturn) and natal planets. This allows for pinpoint timing of events like marriage, job change, childbirth, and property purchases.",
    },
    {
      q: "Can BNN predict exact years for major life events?",
      a: "Yes. In BNN, Jupiter takes 12 years to complete a full zodiac revolution (spending 1 year per sign). As Jupiter transits over natal planets (or into trine with them), it activates the promises of those planets for that specific 1-year window.",
    },
    {
      q: "Does Acharya Deepak Mehta combine Parashari and BNN techniques?",
      a: "Yes. Acharya Deepak Mehta evaluates your Janma Kundali using both classical Parashari Dasha systems and Bhrigu Nandi Nadi transits. Combining both methodologies ensures maximum prediction accuracy and double confirmation.",
    },
    {
      q: "What details are required for a Bhrigu Nandi Nadi consultation?",
      a: "You need your Date of Birth, Time of Birth (12-hour AM/PM format), and Place of Birth (City/State/Country). Specific life questions or areas of concern can also be shared.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO BANNER */}
      <section className="bg-light-pattern py-12 sm:py-20 border-b border-amber-500/10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <Badge variant="default" className="mb-3 py-1 px-4 text-xs font-bold bg-amber-500/10 border-amber-500/30 text-amber-900 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 mr-2 text-amber-600 inline" />
            Specialized Astrological Lineage
          </Badge>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            Bhrigu Nandi Nadi <span className="gold-gradient-text">Astrology</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Experience the ancient, high-precision Nadi technique perfected by classical sages. Get absolute clarity on career, marriage, health, and financial timelines through BNN planetary combinations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="btn-gold-shimmer shadow-lg px-8" asChild>
              <Link href="/contact?service=Horoscope%20Analysis%20%26%20Consultation">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book BNN Reading — ₹1,500 INR</span>
              </Link>
            </Button>
            <Button size="lg" variant="emerald" className="px-6" asChild>
              <a
                href="https://wa.me/919319506529?text=Hi%20Nadiveda,%20I%20would%20like%20to%20book%20a%20Bhrigu%20Nandi%20Nadi%20consultation."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>WhatsApp (+91 9319506529)</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT IS BNN SECTION */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="default">The Sacred Science of BNN</Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              What Makes Bhrigu Nandi Nadi So <span className="gold-gradient-text">Accurate?</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Bhrigu Nandi Nadi (BNN) is an classical branch of Nadi Astrology derived from the revered sage <strong>Maharishi Bhrigu</strong>. Unlike conventional astrologies that look strictly at single houses, BNN analyzes how planets interact across trines (1-5-9), opposites (1-7), and adjacent positions (2-12).
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In BNN, <strong>Jupiter</strong> is recognized as the <em>Jiva Karaka</em> (representing yourself and your life energy), while <strong>Saturn</strong> is the <em>Karma Karaka</em> (representing your career and actions). By mapping Jupiter and Saturn&apos;s yearly transits over your birth chart planets, BNN pinpoints exact life events with astonishing consistency.
            </p>
            <div className="pt-2 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/70 border border-amber-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Event Timing</h4>
                  <p className="text-xs text-slate-600">Calculates precise years for marriage, career shifts, and property purchases.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/70 border border-amber-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Targeted Remedies</h4>
                  <p className="text-xs text-slate-600">Prescribes specific mantras, gemstone alignments, and practical lifestyle remedies.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="glass-card-light p-6 sm:p-8 border-2 border-amber-500/30 shadow-xl bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30">
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                BNN Consultation Package
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 mb-6">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full BNN & Parashari Birth Chart Analysis</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Year-by-Year Milestone Mapping (Jupiter Transits)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Career & Wealth Karma Check (Saturn Transits)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Marriage & Relationship Compatibility</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Personalized Practical & Gemstone Remedies</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Fixed Consultation Fee</span>
                  <span className="font-heading text-2xl font-extrabold text-amber-950">₹1,500 INR</span>
                </div>
                <Button className="btn-gold-shimmer text-xs py-2 px-4" asChild>
                  <Link href="/contact">Book Session</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* BNN CORE PILLARS GRID */}
      <section className="py-16 bg-light-pattern border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="default" className="mb-3">Core Principles</Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900">
              Key Mechanics of Bhrigu Nandi Nadi
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bnnFeatures.map((item, i) => (
              <Card key={i} className="glass-card-light p-6 border-amber-500/30 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-lg mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION WITH SCHEMA SUPPORT */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-3">Got Questions?</Badge>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900">
            Frequently Asked Questions on BNN
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="glass-card-light p-6 border-amber-500/30">
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2 flex items-start gap-2">
                <span className="text-amber-600 font-bold">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-5">{faq.a}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-16 bg-white border-t border-slate-100 text-center px-4">
        <div className="max-w-4xl mx-auto glass-card-light p-8 sm:p-12 rounded-3xl border-2 border-amber-500/30 shadow-xl bg-gradient-to-r from-amber-50/70 via-white to-amber-50/70">
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Unlock the Secret of Your BNN Chart Today
          </h2>
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto mb-6">
            Get personalized 1-on-1 consultation with Acharya Deepak Mehta via Call, Video, or WhatsApp.
          </p>
          <Button size="lg" className="btn-gold-shimmer px-8 py-6 text-base font-bold shadow-lg" asChild>
            <Link href="/contact?service=Horoscope%20Analysis%20%26%20Consultation">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Book Appointment — ₹1,500 INR</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
