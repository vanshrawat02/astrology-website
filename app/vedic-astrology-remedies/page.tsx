import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Calendar, MessageCircle, Sun, Gem, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Vedic Astrology Remedies & Gemstone Guidance | Acharya Deepak Mehta",
  description:
    "Authentic, practical Vedic astrology remedies by Acharya Deepak Mehta. Natural gemstone recommendations, mantra chanting, Daan (donations), and color therapies.",
  keywords: [
    "Vedic Astrology Remedies",
    "Astrological Gemstone Recommendation",
    "Mantra Chanting Remedies",
    "Practical Astrological Remedies",
    "Dosha Remedies Astrology",
    "Acharya Deepak Mehta Astrologer"
  ],
};

export default function VedicRemediesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vedic Astrology Remedies & Gemstones Guidance",
    provider: {
      "@type": "ProfessionalService",
      name: "Nadiveda - Acharya Deepak Mehta",
      telephone: "+91-9319506529",
      email: "secretsofastrology2dh@gmail.com",
    },
    serviceType: "Astrological Remedies",
    areaServed: "Worldwide",
    description:
      "Authentic Vedic planetary remedies including natural gemstone selection, mantra chanting, donation guidance (Daan), and daily lifestyle adjustments.",
  };

  const remedyTypes = [
    {
      title: "Natural Gemstone Recommendations",
      desc: "Gemstones act as subtle optical filters for planetary light frequencies. We recommend only natural, unheated gemstones aligned with your favorable house lords.",
      icon: Gem,
    },
    {
      title: "Mantra Japa & Sound Vibrations",
      desc: "Specific Beej mantras and Vedic Suktams that balance disharmonious planetary vibrations in your birth chart.",
      icon: Sun,
    },
    {
      title: "Targeted Daan (Donations)",
      desc: "Giving specific items associated with afflicted malefic planets on their designated days to reduce karmic friction.",
      icon: BookOpen,
    },
    {
      title: "Lifestyle & Color Adjustments",
      desc: "Simple daily routines, direction alignments, and color choices that naturally enhance supportive planetary energies.",
      icon: Sparkles,
    },
  ];

  const faqs = [
    {
      q: "Are astrological remedies effective without expensive rituals?",
      a: "Yes. Authentic Vedic astrology stresses that genuine remedies—such as daily mantra chanting, moral lifestyle choices, specific donations (Daan), and gemstone wearing—are far more effective than expensive commercial rituals. Acharya Deepak Mehta focuses purely on simple, practical, and affordable remedies.",
    },
    {
      q: "Can wearing the wrong gemstone cause negative effects?",
      a: "Yes. Wearing a gemstone for a planet that is an functional malefic or lord of the 6th, 8th, or 12th house can intensify obstacles. Gemstones should only be prescribed for functional benefics (Yogakaraka planets) after thorough Lagna and Navamsa evaluation.",
    },
    {
      q: "How soon do Vedic remedies start showing results?",
      a: "Vedic remedies work by neutralizing subtle energetic blockages. Mantra recitation and lifestyle changes typically bring noticeable psychological calm and positive environmental shifts within 21 to 41 days of consistent practice.",
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
            <Sparkles className="w-3.5 h-3.5 mr-2 text-amber-600 inline" />
            Practical & Ethical Solutions
          </Badge>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            Vedic Astrology <span className="gold-gradient-text">Remedies</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Neutralize planetary obstacles with authentic, research-grounded Vedic solutions. From natural gemstones to powerful Beej mantras and practical donations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="btn-gold-shimmer shadow-lg px-8" asChild>
              <Link href="/contact">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Get Personalized Remedies — ₹1,500 INR</span>
              </Link>
            </Button>
            <Button size="lg" variant="emerald" className="px-6" asChild>
              <a
                href="https://wa.me/919319506529?text=Hi%20Nadiveda,%20I%20would%20like%20to%20consult%20for%20Vedic%20Astrology%20Remedies."
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

      {/* REMEDIES TYPES GRID */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="default" className="mb-3">Scientific Vedic Approach</Badge>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            The Four Pillars of Authentic Remedies
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We never induce fear or push costly rituals. Our remedies are practical, ethical, and tailored strictly to your chart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {remedyTypes.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="glass-card-light p-6 sm:p-8 border-amber-500/30 flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-600 to-amber-500 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-light-pattern border-t border-amber-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-3">Remedies FAQ</Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900">
              Frequently Asked Questions on Remedies
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
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-16 bg-white border-t border-slate-100 text-center px-4">
        <div className="max-w-4xl mx-auto glass-card-light p-8 sm:p-12 rounded-3xl border-2 border-amber-500/30 shadow-xl bg-gradient-to-r from-amber-50/70 via-white to-amber-50/70">
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Get Chart-Specific Planetary Remedies Today
          </h2>
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto mb-6">
            Consult Acharya Deepak Mehta 1-on-1 via Call, Video, or WhatsApp.
          </p>
          <Button size="lg" className="btn-gold-shimmer px-8 py-6 text-base font-bold shadow-lg" asChild>
            <Link href="/contact">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Book Appointment — ₹1,500 INR</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
