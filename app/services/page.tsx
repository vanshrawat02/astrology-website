import Link from "next/link";
import {
  Sparkles,
  Compass,
  Gem,
  ArrowRight,
  Phone,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/services";

const pillars = [
  {
    icon: Sparkles,
    title: "Vedic Jyotish",
    desc: "Classical Parashari reading of your Janma Kundali: houses, planets, yogas, divisional charts and the Vimshottari Dasha.",
  },
  {
    icon: Compass,
    title: "Bhrigu Nandi Nadi",
    desc: "A precise predictive system that times life events through the yearly movement of Jupiter and Saturn over your birth chart.",
  },
  {
    icon: Gem,
    title: "Practical Remedies",
    desc: "Simple, chart-specific mantras, gemstones and lifestyle guidance, recommended only when your chart actually calls for them.",
  },
];

const steps = [
  {
    step: "01",
    title: "Share Your Details",
    desc: "Send your date, exact time and place of birth along with the questions on your mind.",
  },
  {
    step: "02",
    title: "1-on-1 Consultation",
    desc: "Speak directly with the astrologer over a phone call, video call or WhatsApp.",
  },
  {
    step: "03",
    title: "Guidance & Remedies",
    desc: "Receive clear answers, a timeline of key periods and remedies suited to your chart.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* WHAT WE DO */}
      <section className="bg-light-pattern py-12 sm:py-20 border-b border-amber-500/10 px-4">
        <div className="max-w-7xl mx-auto sm:px-2 lg:px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <Badge variant="default" className="mb-3 py-1 px-3.5 text-[10px] sm:text-xs">
              What We Do
            </Badge>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              Guidance Written in <span className="gold-gradient-text">Your Stars</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed">
              At Nadiveda we read your birth chart through two time-tested lenses, classical Vedic Jyotish and Bhrigu Nandi
              Nadi, to answer the questions that matter most to you and to show when change is likely to come.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-card-light rounded-2xl p-6 sm:p-7 bg-white transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-gold-600 via-amber-500 to-amber-400 flex items-center justify-center text-white mb-4 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-heading font-bold text-lg text-slate-900 mb-2">{pillar.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR SPECIALISATIONS (INDEX) */}
      <section className="py-14 sm:py-20 bg-white border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <Badge variant="default" className="mb-3">
              Our Specialisations
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Services We <span className="gold-gradient-text">Offer</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every consultation is a personal 1-on-1 session at a fixed fee of ₹1,500. Choose a service to see exactly what it covers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group glass-card-light rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-3xl font-extrabold text-amber-500/25 group-hover:text-amber-500/50 transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{service.summary}</p>
                  <span className="inline-flex items-center gap-2 text-gold-600 font-bold text-sm">
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONSULTATION PROCESS */}
      <section className="py-16 sm:py-20 bg-white border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Badge variant="default" className="mb-3">
              Simple 3-Step Flow
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              How Our Consultation <span className="gold-gradient-text">Works</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A smooth, transparent and fully confidential process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((item) => (
              <Card key={item.step} className="glass-card-light text-center p-8">
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
      <section className="py-16 bg-light-pattern text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Not Sure Which Service <span className="gold-gradient-text">You Need?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Book a full Horoscope Analysis and ask about any area of your life, or reach out and we will guide you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="btn-gold-shimmer w-full sm:w-auto" asChild>
              <Link href="/contact" className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-white" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-amber-500/40 text-slate-800 hover:bg-amber-500/10" asChild>
              <a href="tel:+919319506529" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-amber-600" />
                <span>Call +91 9319506529</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
