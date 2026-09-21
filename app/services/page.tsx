import Link from "next/link";
import {
  Sparkles,
  Heart,
  Briefcase,
  Baby,
  Coins,
  Plane,
  Star,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  const specializations = [
    {
      id: "marriage",
      title: "Marriage & Relationship Compatibility",
      description:
        "Exhaustive Ashtakoot Guna Milan (36 Points), Nadi Dosha, Manglik analysis, and dispute resolution for lifelong marital bliss.",
      icon: Heart,
      badge: "Popular",
      highlights: [
        "Ashtakoot Guna Milan (36 Points Evaluation)",
        "Manglik & Nadi Dosha Analysis + Remedies",
        "Dasha Timing for Marriage & Harmony",
        "Relationship Longevity Guidance",
      ],
    },
    {
      id: "career",
      title: "Career & Business Growth",
      description:
        "Identify favorable Mahadasha transits, ideal job switches, promotion timings, startup launch dates, and business expansion strategies.",
      icon: Briefcase,
      badge: "High Accuracy",
      highlights: [
        "Optimal Timing for Job Changes & Startup Launch",
        "Business Partnership Compatibility Audit",
        "10th & 11th Houses Career Transit Mapping",
        "Promotion & Leadership Opportunity Timing",
      ],
    },
    {
      id: "family",
      title: "Child Birth & Family Prospects",
      description:
        "Evaluate Santana Yoga, progeny timing, family peace, and ancestral planetary alignment for progeny wellbeing.",
      icon: Baby,
      badge: "Family Peace",
      highlights: [
        "5th House & Santana Yoga Inspection",
        "Progeny Favorable Dasha Timing",
        "Family Harmony & Ancestral Peace Remedies",
        "Child Development & Education Focus",
      ],
    },
    {
      id: "wealth",
      title: "Finance & Wealth Guidance",
      description:
        "In-depth 2nd and 11th wealth houses evaluation, debt recovery strategies, safe investments, and financial stability remedies.",
      icon: Coins,
      badge: "Prosperity",
      highlights: [
        "Wealth Houses (2nd & 11th) Evaluation",
        "Debt Recovery & Capital Retention Timing",
        "Favorable Investment Periods Analysis",
        "Financial Abundance Astro Remedies",
      ],
    },
    {
      id: "travel",
      title: "Foreign Travels & Relocation",
      description:
        "Inspect 9th & 12th houses for overseas employment, higher studies abroad, PR/visa success, and foreign settlement.",
      icon: Plane,
      badge: "Global Growth",
      highlights: [
        "9th & 12th Houses Travel Transits Reading",
        "PR, Student Visa & Work Permit Timing",
        "Foreign Career & Overseas Business Growth",
        "Relocation Remedies for Smooth Settlement",
      ],
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Share Details or Schedule",
      desc: "Provide your birth details (Date, Time, Place of birth) or specific query.",
    },
    {
      step: "02",
      title: "1-on-1 Expert Consultation",
      desc: "Connect directly via Phone Call, Video Call, or Email with certified experts.",
    },
    {
      step: "03",
      title: "Receive Guidance & Remedies",
      desc: "Get clear actionable insights along with practical mantras, gemstones, and remedies.",
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* PAGE BANNER */}
      {/* PAGE BANNER */}
      <section className="bg-light-pattern py-8 sm:py-16 border-b border-amber-500/10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <Badge variant="default" className="mb-2.5 py-1 px-3.5 text-[10px] sm:text-xs">
            Vedic & Bhrigu Nandi Nadi Offerings
          </Badge>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2.5 leading-tight">
            Our Services & <span className="gold-gradient-text">Specializations</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Comprehensive Vedic astrological guidance, Janma Kundali analysis, Bhrigu Nandi Nadi readings, and practical life remedies.
          </p>
        </div>
      </section>

      {/* SECTION 1: PRIMARY SERVICE */}
      <section className="py-20 bg-white border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="default" className="mb-3 bg-amber-500/10 border-amber-500/30 text-amber-800 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-1.5" />
              Primary Service
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Horoscope Analysis & <span className="gold-gradient-text">Consultation</span>
            </h2>
            <p className="text-slate-600 text-base">
              Our core flagship consultation combining classical Janma Kundali reading with precise Bhrigu Nandi Nadi techniques.
            </p>
          </div>

          <div className="glass-card-light rounded-3xl p-8 sm:p-12 border-2 border-amber-500/30 relative overflow-hidden shadow-xl bg-gradient-to-br from-amber-50/60 via-white to-amber-50/40">
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold mb-4 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Flagship Consultation</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Full Birth Chart & Bhrigu Nandi Nadi Reading
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Get a complete, multi-dimensional evaluation of your Janma Kundali. We analyze your planetary strengths, current Mahadasha/Antardasha transit timing, and specific Bhrigu Nandi Nadi planetary combinations to provide practical solutions for health, wealth, relationships, and career direction.
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
                    <span>Personalized Mantra & Gemstone Remedies</span>
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
                      <span>Call Now (+91 9319506529)</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-4 text-center">
                <div className="p-8 rounded-2xl bg-white border border-amber-500/20 shadow-lg">
                  <Sparkles className="w-12 h-12 text-amber-600 mx-auto mb-4 animate-pulse" />
                  <h4 className="font-heading text-xl font-bold text-slate-900 mb-2">1-on-1 Direct Session</h4>
                  <p className="text-xs text-slate-600 mb-6">Connect directly via Phone Call, WhatsApp, or Email.</p>
                  <div className="py-3 px-4 rounded-xl bg-amber-50 border border-amber-500/20 text-xs font-bold text-amber-800">
                    High Precision Guidance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SPECIALIZATIONS */}
      <section className="py-20 bg-light-pattern border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="default" className="mb-3">
              Specialized Guidance
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Our <span className="gold-gradient-text">Specializations</span>
            </h2>
            <p className="text-slate-600 text-base">
              Explore specialized astrological consultations tailored to solve specific life aspects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="glass-card-light flex flex-col justify-between hover:border-amber-500/50 shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                          <Icon className="w-6 h-6" />
                        </div>
                        <Badge className="bg-amber-100 border border-amber-500/30 text-amber-800 text-[11px] font-bold">
                          {service.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-slate-600 text-sm leading-relaxed">{service.description}</CardDescription>
                      <ul className="space-y-2 pt-3 border-t border-amber-500/15">
                        {service.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                  <div className="p-6 pt-0">
                    <Button variant="default" className="btn-gold-shimmer w-full mt-4" asChild>
                      <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>
                        <span>Book Consultation</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONSULTATION PROCESS TIMELINE */}
      <section className="py-20 bg-white border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="default" className="mb-3">
              Simple 3-Step Flow
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              How Our Consultation <span className="gold-gradient-text">Works</span>
            </h2>
            <p className="text-slate-600 text-base">
              A smooth, transparent, and confidential process designed for your convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((item, idx) => (
              <Card key={idx} className="glass-card-light relative text-center p-8">
                <span className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-gold-600 font-extrabold flex items-center justify-center mx-auto mb-6 text-lg">
                  {item.step}
                </span>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-light-pattern border-b border-amber-500/10 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Ready to Unlock <span className="gold-gradient-text">Cosmic Clarity?</span>
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto mb-8">
            Speak directly with certified experts today via Call, Email, or WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="btn-gold-shimmer" asChild>
              <a href="tel:+919319506529" className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                <span>Call Now (+91 9319506529)</span>
              </a>
            </Button>
            <Button size="lg" variant="emerald" asChild>
              <a
                href="https://wa.me/919319506529?text=Hi%20Nadiveda,%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Booking</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
