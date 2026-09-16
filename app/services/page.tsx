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
  Mail,
  MessageCircle,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  const serviceList = [
    {
      id: "horoscope",
      title: "Horoscope Analysis & Consultation",
      description:
        "Comprehensive birth chart (Janma Kundali) reading combined with Bhrigu Nandi Nadi planetary combinations to map life events, Dasha transits, and practical remedies.",
      icon: Sparkles,
      badge: "Primary Featured Service",
      highlights: [
        "Janma Kundali & Planetary Strength Reading",
        "Current Dasha & Transit Timing Evaluation",
        "Bhrigu Nandi Nadi Specific Life Events Mapping",
        "Personalized Mantra & Gemstone Remedies",
      ],
    },
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
      desc: "Provide your birth details (Date, Time, Place of birth) or property details for consultation.",
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
      <section className="bg-light-pattern py-16 border-b border-amber-500/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="default" className="mb-2">
            Vedic & Bhrigu Nandi Nadi Offerings
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Our Consultation <span className="gold-gradient-text">Services</span>
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Comprehensive Vedic astrological guidance, Janma Kundali analysis, Bhrigu Nandi Nadi readings, and practical life remedies.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="glass-card-light flex flex-col justify-between hover:border-amber-500/50 shadow-lg">
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
      <section className="py-20 bg-light-pattern border-y border-amber-500/10">
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
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Ready to Unlock Cosmic Clarity?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
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
                href="https://wa.me/919319506529?text=Hi%20Vedic%20Astrology,%20I%20would%20like%20to%20book%20a%20consultation."
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
