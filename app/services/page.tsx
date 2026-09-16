import Link from "next/link";
import {
  Compass,
  Sparkles,
  Building2,
  Calendar,
  Gem,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  const serviceList = [
    {
      id: "kundali",
      title: "Kundali & Marriage Compatibility (Ashtakoot Milan)",
      description:
        "Ensure long-term harmony, mutual respect, and marital happiness with exhaustive Janma Kundali analysis and Nadi/Manglik remedies.",
      icon: Compass,
      highlights: [
        "Ashtakoot Guna Milan (36 Points Evaluation)",
        "Manglik & Nadi Dosha Analysis + Remedies",
        "Dasha Timing for Marriage & Family Life",
      ],
    },
    {
      id: "career",
      title: "Career, Business & Financial Growth Analysis",
      description:
        "Navigate job switches, promotions, business expansions, and financial investments aligned with favorable planetary Dasha transits.",
      icon: Sparkles,
      highlights: [
        "Optimal Timing for Job Changes & Startup Launch",
        "Financial Wealth House (2nd & 11th) Inspection",
        "Partnership Compatibility & Foreign Opportunities",
      ],
    },
    {
      id: "vastu",
      title: "100% Zero-Demolition Vastu Shastra Consultation",
      description:
        "Harmonize your residential or commercial space without breaking walls. We utilize elemental balancing, metallic strips, and copper pyramids.",
      icon: Building2,
      highlights: [
        "No Structural Demolition Required",
        "Commercial, Office & Residential Spatial Audits",
        "Elemental Balancing for Entrance & Kitchen Placement",
      ],
    },
    {
      id: "varshphal",
      title: "Varshphal & Annual Horoscope Report",
      description:
        "A customized 12-month solar return chart (Annual Kundali) detailing upcoming opportunities, health precautions, and month-wise focus.",
      icon: Calendar,
      highlights: [
        "Month-by-Month Predictive Breakdown",
        "Transit Analysis of Saturn, Rahu & Ketu",
        "Personalized Monthly Mantra & Upay Remedies",
      ],
    },
    {
      id: "gemstones",
      title: "Certified Gemstone & Energized Ratan Guidance",
      description:
        "Identify exact gemstones matching your ascendant (Lagna) and current Mahadasha to enhance wealth, peace, and vitality safely.",
      icon: Gem,
      highlights: [
        "Lagna Chart & Planetary Strength Audit",
        "100% Natural Lab Certified Gemstones Recommendation",
        "Pran Pratishtha & Shubh Muhurat Wearing Rituals",
      ],
    },
    {
      id: "prashna",
      title: "Prashna Kundali (Horary Astrology for Urgent Questions)",
      description:
        "Ideal when exact date, time, or place of birth is missing. Provides immediate, clear answers for lost items, decisions, and immediate choices.",
      icon: HelpCircle,
      highlights: [
        "No Birth Time Required",
        "Immediate Clarity on Critical Questions",
        "High-Precision Time-of-Query Chart Calculation",
      ],
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Share Details or Schedule",
      desc: "Fill in your birth details (Date, Time, Place) or property layout for Vastu consultation.",
    },
    {
      step: "02",
      title: "Detailed Consultation",
      desc: "Connect 1-on-1 via Phone or Video Call with Acharya Rajesh Sharma for detailed analysis.",
    },
    {
      step: "03",
      title: "Receive Written PDF & Remedies",
      desc: "Get your customized report along with practical, zero-demolition remedies and mantras.",
    },
  ];

  return (
    <>
      {/* PAGE BANNER */}
      <section className="bg-light-pattern py-16 border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="default" className="mb-2">
            Authentic Vedic Offerings
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Our Consultation <span className="gold-gradient-text">Services</span>
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Comprehensive Vedic astrological guidance, Janma Kundali analysis, and scientific Zero-Demolition Vastu Shastra remedies.
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
                <Card key={service.id} className="flex flex-col justify-between hover:border-amber-500/50">
                  <div>
                    <CardHeader>
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-600 to-amber-400 flex items-center justify-center text-white mb-4 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription>{service.description}</CardDescription>
                      <ul className="space-y-2 pt-2 border-t border-slate-100">
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
                    <Button variant="emerald" className="w-full mt-4" asChild>
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
              <Card key={idx} className="relative text-center">
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
            Speak directly with Acharya Rajesh Sharma today and discover actionable solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="emerald" asChild>
              <a
                href="https://wa.me/919999999999?text=Hi%20Cosmic%20Guidance,%20I%20want%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant WhatsApp Booking</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-white border-amber-500/50 hover:bg-amber-500/20">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Schedule Call</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

