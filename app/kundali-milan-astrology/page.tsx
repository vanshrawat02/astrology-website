import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Calendar, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Kundali Milan & Marriage Compatibility Astrology | Acharya Deepak Mehta",
  description:
    "Authentic Kundali Milan & Marriage Compatibility analysis. 36 Ashtakoot Guna Milan points, Manglik Dosha exceptions, Nadi Dosha remedies, and marriage timing guidance.",
  keywords: [
    "Kundali Milan Online",
    "Marriage Compatibility Astrology",
    "Ashtakoot Guna Milan 36 Points",
    "Manglik Dosha Remedies",
    "Nadi Dosha Cancellation",
    "Marriage Prediction Astrologer",
    "Acharya Deepak Mehta Astrologer"
  ],
};

export default function KundaliMilanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kundali Milan & Marriage Compatibility Analysis",
    provider: {
      "@type": "ProfessionalService",
      name: "Nadiveda - Acharya Deepak Mehta",
      telephone: "+91-9319506529",
      email: "secretsofastrology2dh@gmail.com",
    },
    serviceType: "Marriage Astrology",
    areaServed: "Worldwide",
    description:
      "Comprehensive Ashtakoot Guna Milan (36 points), Manglik & Nadi Dosha cancellation check, D9 Navamsa chart analysis, and marriage timing consultation.",
  };

  const gunaPoints = [
    { name: "Varna (1 Point)", detail: "Work compatibility and spiritual ego alignment" },
    { name: "Vashya (2 Points)", detail: "Mutual attraction and control dynamics" },
    { name: "Tara (3 Points)", detail: "Birth star harmony, longevity and destiny" },
    { name: "Yoni (4 Points)", detail: "Intimate physical compatibility and instinct" },
    { name: "Graha Maitri (5 Points)", detail: "Mental friendship and psychological bonding" },
    { name: "Gana (6 Points)", detail: "Temperament alignment (Deva, Manushya, Rakshasa)" },
    { name: "Bhakoot (7 Points)", detail: "Emotional prosperity, family growth and health" },
    { name: "Nadi (8 Points)", detail: "Physiological, genetic and progeny compatibility" },
  ];

  const faqs = [
    {
      q: "Is a high Guna score alone enough for a happy marriage?",
      a: "No. A Guna score above 18 out of 36 is considered basic eligibility, but Guna Milan is only 20% of marriage matching. A true astrological match requires analyzing the 7th house (house of marriage), Navamsa (D9 chart), Venus/Mars placements, and Dasha periods in both horoscopes.",
    },
    {
      q: "How is Manglik Dosha verified for cancellation?",
      a: "Mars placement in the 1st, 4th, 7th, 8th, or 12th house creates Manglik Dosha. However, classical texts outline numerous cancellation factors (Bhanga)—such as Mars in its own or exalted sign, benefics in the 7th house, or matching Mars placements in the partner's chart.",
    },
    {
      q: "What remedies exist if there is a Nadi Dosha?",
      a: "Nadi Dosha carries 8 points and relates to genetic and progeny health. If Nadi Dosha exists without classical cancellations (such as different Nakshatra padas or same Nakshatra with different Rashis), Acharya Deepak Mehta provides specialized Vedic mantra remedies, Maha Mrityunjaya recitation, and specific donations.",
    },
    {
      q: "Can astrology predict whether it will be a love or arranged marriage?",
      a: "Yes. Interconnection between the 5th house (love/romance), 7th house (marriage), 9th house (dharma/blessing), and Venus/Mars in both birth chart and Navamsa indicates whether marriage will occur through personal choice or family arrangement.",
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
          <Badge variant="default" className="mb-3 py-1 px-4 text-xs font-bold bg-pink-500/10 border-pink-500/30 text-pink-900 uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 mr-2 text-pink-600 inline" />
            Sacred Marital Harmony
          </Badge>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            Kundali Milan & <span className="gold-gradient-text">Marriage Matching</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Go beyond superficial Guna scores. Experience complete 36-point Ashtakoot Guna Milan, Manglik and Nadi Dosha verification, Navamsa D9 reading, and precise marriage timing guidance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="btn-gold-shimmer shadow-lg px-8" asChild>
              <Link href="/contact?service=Marriage%20%26%20Relationship%20Compatibility">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Marriage Matching — ₹1,500 INR</span>
              </Link>
            </Button>
            <Button size="lg" variant="emerald" className="px-6" asChild>
              <a
                href="https://wa.me/919319506529?text=Hi%20Nadiveda,%20I%20would%20like%20to%20book%20a%20Kundali%20Milan%20consultation."
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

      {/* DETAILED CONTENT */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="default">Complete Astrological Verification</Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Why Complete Kundali Matching <span className="gold-gradient-text">Matters</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In traditional Indian culture, marriage unites two families and two life destinies. Relying solely on online automated 36-Guna software can often create false alarm over harmless doshas or miss critical underlying chart afflictions.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Acharya Deepak Mehta personally examines both horoscopes across 5 critical dimensions:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-500/20">
                <h4 className="font-bold text-slate-900 text-sm mb-1">1. Ashtakoot Guna Milan</h4>
                <p className="text-xs text-slate-600">36-point evaluation of temperaments, health, mental affinity, and progeny.</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-500/20">
                <h4 className="font-bold text-slate-900 text-sm mb-1">2. Manglik & Nadi Dosha</h4>
                <p className="text-xs text-slate-600">Deep check for classical cancellation rules and remedies for peace.</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-500/20">
                <h4 className="font-bold text-slate-900 text-sm mb-1">3. Navamsa (D9 Chart)</h4>
                <p className="text-xs text-slate-600">Verification of the internal strength of spouse significators (Venus & Mars).</p>
              </div>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-500/20">
                <h4 className="font-bold text-slate-900 text-sm mb-1">4. Marriage Timing</h4>
                <p className="text-xs text-slate-600">Dasha and BNN Jupiter transits confirming the auspicious window for marriage.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="glass-card-light p-6 sm:p-8 border-2 border-amber-500/30 shadow-xl bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30">
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-600" />
                Marriage Consultation Covers
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 mb-6">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>36 Guna Ashtakoot Score & Deep Interpretation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Manglik & Nadi Dosha Cancellation Analysis</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Navamsa (D9) & 7th House Longevity Check</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Love vs Arranged Marriage Indicators</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Relationship Harmony & Practical Remedies</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Fixed Consultation Fee</span>
                  <span className="font-heading text-2xl font-extrabold text-amber-950">₹1,500 INR</span>
                </div>
                <Button className="btn-gold-shimmer text-xs py-2 px-4" asChild>
                  <Link href="/contact">Book Matching</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 8 KOOTAS BREAKDOWN GRID */}
      <section className="py-16 bg-light-pattern border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="default" className="mb-3">36 Points Breakdown</Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900">
              The Eight Kootas of Ashtakoot Milan
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gunaPoints.map((item, i) => (
              <Card key={i} className="glass-card-light p-5 border-amber-500/30">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">Koota 0{i + 1}</span>
                <h3 className="font-heading font-bold text-base text-slate-900 mb-2">{item.name}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-3">Marriage Astrology FAQ</Badge>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900">
            Common Questions on Kundali Milan
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
            Ensure Lasting Peace & Compatibility in Marriage
          </h2>
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto mb-6">
            Schedule a 1-on-1 personalized Kundali Milan session with Acharya Deepak Mehta.
          </p>
          <Button size="lg" className="btn-gold-shimmer px-8 py-6 text-base font-bold shadow-lg" asChild>
            <Link href="/contact?service=Marriage%20%26%20Relationship%20Compatibility">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Book Appointment — ₹1,500 INR</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
