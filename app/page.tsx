"use client";

import Link from "next/link";
import {
  Sparkles,
  Phone,
  Mail,
  Heart,
  Briefcase,
  Baby,
  Coins,
  Plane,
  Compass,
  Star,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  ArrowRight,
  Tag,
  GraduationCap,
  Scroll,
  Award,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const specializations = [
    {
      title: "Marriage & Relationship Compatibility",
      description:
        "Comprehensive Ashtakoot Guna Milan, Nadi Dosha, Manglik analysis, and dispute resolution for lifelong marital harmony.",
      icon: Heart,
      badge: "Popular",
    },
    {
      title: "Career & Business Growth",
      description:
        "Identify favorable Mahadasha periods, ideal business launch timing, promotion transits, and commercial success path.",
      icon: Briefcase,
      badge: "High Accuracy",
    },
    {
      title: "Child Birth & Family Prospects",
      description:
        "Santana Yoga analysis, progeny timing, family peace, and ancestral planetary alignment for progeny wellbeing.",
      icon: Baby,
      badge: "Family Peace",
    },
    {
      title: "Finance & Wealth Guidance",
      description:
        "In-depth 2nd and 11th wealth houses evaluation, debt recovery, safe investments, and financial stability remedies.",
      icon: Coins,
      badge: "Prosperity",
    },
    {
      title: "Foreign Travels & Relocation",
      description:
        "Evaluate 9th & 12th houses for overseas employment, higher studies abroad, PR/visa success, and foreign settlement.",
      icon: Plane,
      badge: "Global Growth",
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative bg-light-pattern py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* TOP BADGE */}
          <div className="max-w-3xl mx-auto mb-6">
            <Badge variant="default" className="py-2 px-5 text-xs sm:text-sm bg-amber-500/10 border-amber-500/30 text-amber-900 font-bold tracking-wide uppercase">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500 mr-2 inline" />
              <span>Certified Experts in Vedic Astrology & Bhrigu Nandi Nadi</span>
            </Badge>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl mx-auto">
            <span className="gold-gradient-text">Vedic Astrology</span> & <br className="hidden sm:inline" />
            Bhrigu Nandi Nadi Consultation
          </h1>

          {/* SUB-HEADLINE */}
          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Gain deep, research-backed insights into your birth chart (Janma Kundali), career Mahadasha transits, marriage compatibility, and life decisions with traditional precision remedies.
          </p>

          {/* CALL TO ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14 max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="btn-gold-shimmer w-full sm:w-auto px-8 py-6 text-base font-bold shadow-xl" asChild>
              <Link href="/contact" className="flex items-center justify-center gap-2.5">
                <Calendar className="w-5 h-5 text-white" />
                <span>Book Consultation — ₹1,500</span>
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-base border-amber-500/40 text-slate-800 hover:bg-amber-500/10 transition-all font-bold"
              asChild
            >
              <a href="tel:+919319506529" className="flex items-center justify-center gap-2.5">
                <Phone className="w-5 h-5 text-amber-600" />
                <span>Call (+91 9319506529)</span>
              </a>
            </Button>
          </div>

          {/* HERO QUICK HIGHLIGHTS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl w-full mx-auto pt-8 border-t border-amber-500/20 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center justify-center gap-2 glass-card-light p-3 sm:p-3.5 rounded-xl border border-amber-500/20 bg-white/80 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="font-semibold text-center">100% Confidential</span>
            </div>
            <div className="flex items-center justify-center gap-2 glass-card-light p-3 sm:p-3.5 rounded-xl border border-amber-500/20 bg-white/80 shadow-xs">
              <Compass className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="font-semibold text-center">Bhrigu Nandi Nadi</span>
            </div>
            <div className="flex items-center justify-center gap-2 glass-card-light p-3 sm:p-3.5 rounded-xl border border-amber-500/20 bg-white/80 shadow-xs">
              <Phone className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="font-semibold text-center">Audio/Video Call</span>
            </div>
            <div className="flex items-center justify-center gap-2 glass-card-light p-3 sm:p-3.5 rounded-xl border border-amber-500/20 bg-white/80 shadow-xs">
              <Tag className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="font-semibold text-center">Fixed Fee: ₹1,500 INR</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 glass-card-light p-3 sm:p-3.5 rounded-xl border border-amber-500/20 bg-white/80 shadow-xs">
              <Sparkles className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="font-semibold text-center">Vedic Jyotish Astrology</span>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT THE EXPERT SECTION */}
      <section id="about-expert" className="py-20 lg:py-24 bg-light-pattern text-slate-900 relative overflow-hidden border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="default" className="mb-4 py-1.5 px-4 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 mr-2 text-amber-500 fill-amber-500" />
              Certified Astrological Authority
            </Badge>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">
              Meet Your <span className="gold-gradient-text">Astrologer & Guide</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Welcome. I am a certified expert in traditional Vedic Astrology and Bhrigu Nandi Nadi techniques, dedicated to offering authentic, research-backed insights to help you navigate life&apos;s pivotal decisions.
            </p>
          </div>

          {/* ACADEMIC & RESEARCH CREDENTIALS GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Credential 1 */}
            <div className="glass-card-light p-6 rounded-2xl border border-amber-500/30 bg-white hover:border-amber-500/60 transition-all duration-300 shadow-md flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-gold-600 via-amber-500 to-amber-400 flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <Badge className="bg-amber-100 border border-amber-500/30 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2">
                  Academic Degree
                </Badge>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                  Jyotish Alankar & Jyotish Acharya
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Honors degree from Bharatiya Vidya Bhavan, New Delhi.
                </p>
              </div>
            </div>

            {/* Credential 2 */}
            <div className="glass-card-light p-6 rounded-2xl border border-amber-500/30 bg-white hover:border-amber-500/60 transition-all duration-300 shadow-md flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-gold-600 via-amber-500 to-amber-400 flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <Badge className="bg-amber-100 border border-amber-500/30 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2">
                  Nadi Specialist
                </Badge>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                  Bhrigu Nandi Nadi Specialist
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Certified under the direct guidance of Dr. Maheshanand Joshi.
                </p>
              </div>
            </div>

            {/* Credential 3 */}
            <div className="glass-card-light p-6 rounded-2xl border border-amber-500/30 bg-white hover:border-amber-500/60 transition-all duration-300 shadow-md flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-gold-600 via-amber-500 to-amber-400 flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-105 transition-transform">
                  <Scroll className="w-6 h-6" />
                </div>
                <Badge className="bg-amber-100 border border-amber-500/30 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2">
                  Vedic Diploma
                </Badge>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                  Diploma in Vedic Astrology
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Shree Maharshi College of Vedic Astrology, Udaipur.
                </p>
              </div>
            </div>

            {/* Credential 4 */}
            <div className="glass-card-light p-6 rounded-2xl border border-amber-500/30 bg-white hover:border-amber-500/60 transition-all duration-300 shadow-md flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-gold-600 via-amber-500 to-amber-400 flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <Badge className="bg-amber-100 border border-amber-500/30 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2">
                  Advanced Research
                </Badge>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                  Advanced Research Certifications
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Specialized post-doctoral level research in classical planetary combinations.
                </p>
              </div>
            </div>
          </div>

          {/* PRICING & SPECIALIZATIONS BADGE CARD */}
          <div className="glass-card-light rounded-3xl p-8 sm:p-10 border-2 border-amber-500/30 shadow-xl bg-gradient-to-br from-amber-50/80 via-white to-amber-50/50 text-slate-900 relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>Primary Consultation Offering</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Full Horoscope Analysis & Personalized Consultation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  In-depth evaluation of your Janma Kundali combined with Bhrigu Nandi Nadi precision transits to address your core life queries.
                </p>

                {/* Specializations Pills */}
                <div>
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-2">
                    Key Specializations Covered:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-amber-500/30 text-slate-800 text-xs font-semibold shadow-sm">
                      ❤️ Marriage & Relationships
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-amber-500/30 text-slate-800 text-xs font-semibold shadow-sm">
                      💼 Career Growth
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-amber-500/30 text-slate-800 text-xs font-semibold shadow-sm">
                      👶 Child Birth
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-amber-500/30 text-slate-800 text-xs font-semibold shadow-sm">
                      🪙 Financial Stability
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-amber-500/30 text-slate-800 text-xs font-semibold shadow-sm">
                      ✈️ Foreign Travels
                    </span>
                  </div>
                </div>
              </div>

              {/* Pricing & Direct CTA */}
              <div className="lg:col-span-4 text-center lg:text-right border-t lg:border-t-0 lg:border-l border-amber-500/20 pt-6 lg:pt-0 lg:pl-8 flex flex-col items-center lg:items-end justify-center">
                <span className="text-xs uppercase font-extrabold text-amber-800 tracking-wider block mb-1">
                  Fixed Consultation Fee
                </span>
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="font-heading text-4xl font-extrabold text-amber-950">₹1,500</span>
                  <span className="text-xs font-bold text-slate-600">INR / session</span>
                </div>
                <Button size="lg" className="btn-gold-shimmer w-full sm:w-auto px-8 py-6 text-base font-bold shadow-xl" asChild>
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5 text-white" />
                    <span>Book Session — ₹1,500 INR</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 lg:py-24 bg-white border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="default" className="mb-3">
              Core Offerings
            </Badge>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Our <span className="gold-gradient-text">Services</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Classical Vedic chart interpretations and Bhrigu Nandi Nadi technique for absolute life clarity.
            </p>
          </div>

          {/* HIGHLIGHTED SERVICE */}
          <div className="glass-card-light rounded-3xl p-8 sm:p-12 border-2 border-amber-500/30 relative overflow-hidden mb-16 shadow-xl bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30">
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold mb-4 uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>Primary Featured Service</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-4xl font-bold text-slate-900 mb-4">
                  Horoscope Analysis & Consultation
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Experience an in-depth reading of your birth chart (Janma Kundali) combined with precise Bhrigu Nandi Nadi planetary combinations. Get clear insights into your current Dasha periods, upcoming transits, and practical remedies tailored to solve personal and professional challenges.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Exact Birth Chart & Planetary Strength Reading</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Current Dasha & Transit Timing Evaluation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Bhrigu Nandi Nadi Specific Life Events Mapping</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Practical Mantra & Gemstone Remedies</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="btn-gold-shimmer px-6" asChild>
                    <Link href="/contact?service=Horoscope%20Analysis%20%26%20Consultation" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-white" />
                      <span>Book Horoscope Reading</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-amber-500/40 text-slate-800 hover:bg-amber-500/10" asChild>
                    <a href="tel:+919319506529" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-600" />
                      <span>Call Astrologer</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-4 text-center">
                <div className="p-8 rounded-2xl bg-white border border-amber-500/20 shadow-lg">
                  <Sparkles className="w-12 h-12 text-amber-600 mx-auto mb-4 animate-pulse" />
                  <h4 className="font-heading text-xl font-bold text-slate-900 mb-2">1-on-1 Direct Session</h4>
                  <p className="text-xs text-slate-600 mb-4">Connect directly with certified experts via Call, WhatsApp, or Email.</p>
                  <div className="py-2.5 px-4 rounded-xl bg-amber-100 border border-amber-400/40 text-xs font-bold text-amber-900 inline-block">
                    Fee: ₹1,500 INR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS GRID */}
      <section className="py-20 lg:py-24 bg-light-pattern border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="default" className="mb-3">
              Expertise & Domains
            </Badge>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Our <span className="gold-gradient-text">Specializations</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Explore specialized astrological consultations tailored to solve specific life concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="glass-card-light flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge className="bg-amber-100 border border-amber-500/30 text-amber-800 text-[11px] font-bold">
                        {item.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                    <Link
                      href={`/contact?service=${encodeURIComponent(item.title)}`}
                      className="inline-flex items-center gap-2 text-gold-600 font-bold text-sm hover:gap-3 transition-all"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card-light p-10 sm:p-14 rounded-3xl border-2 border-amber-500/30 shadow-xl bg-gradient-to-r from-amber-50/70 via-white to-amber-50/70">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Ready to Book Your <span className="gold-gradient-text">1-on-1 Session?</span>
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto mb-8">
              Connect directly with certified Vedic & Bhrigu Nandi Nadi experts for personalized birth chart readings and remedies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button size="lg" className="btn-gold-shimmer w-full sm:w-auto px-8 py-6 text-base font-bold shadow-lg" asChild>
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5 text-white" />
                  <span>Go to Contact Page — ₹1,500 INR</span>
                </Link>
              </Button>
              <Button size="lg" variant="emerald" className="w-full sm:w-auto px-8 py-6 text-base font-bold" asChild>
                <a
                  href="https://wa.me/919319506529?text=Hi%20Nadiveda,%20I%20would%20like%20to%20book%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp (+91 9319506529)</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
