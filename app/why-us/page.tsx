import Link from "next/link";
import {
  Users,
  Award,
  Star,
  ShieldCheck,
  Building2,
  BookOpen,
  Lock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WhyUsPage() {
  const pillars = [
    {
      title: "Authentic Vedic & Nadi Lineage",
      description:
        "Strictly grounded in classical Parasari, Jaimini, and Bhrigu Nandi Nadi systems for precise life events mapping.",
      icon: BookOpen,
    },
    {
      title: "Effective Practical Remedies",
      description:
        "Simple, practical remedies including planetary mantras, gemstone recommendations, and color adjustments.",
      icon: Sparkles,
    },
    {
      title: "Complete Confidentiality",
      description:
        "Your birth chart, personal queries, and consultation notes are protected with 100% strict privacy guarantees.",
      icon: Lock,
    },
    {
      title: "Direct Expert Consultation",
      description:
        "1-on-1 direct consultations available via Call, WhatsApp, or Email with certified experts.",
      icon: Users,
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* PAGE BANNER */}
      <section className="bg-light-pattern py-16 border-b border-amber-500/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="default" className="mb-2">
            Trust & Credentials
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Why Choose <span className="gold-gradient-text">Vedic Astrology & Bhrigu Nandi Nadi</span>
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Discover the credentials, techniques, and uncompromising ethical foundation behind our consultation services.
          </p>
        </div>
      </section>

      {/* STATS COUNTERS */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="glass-card-light text-center p-6">
              <Users className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <span className="block font-extrabold text-3xl sm:text-4xl text-slate-900 mb-1">10,000+</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Consultations Done</span>
            </Card>

            <Card className="glass-card-light text-center p-6">
              <Award className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <span className="block font-extrabold text-3xl sm:text-4xl text-slate-900 mb-1">5+ Yrs</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Vedic Practice</span>
            </Card>

            <Card className="glass-card-light text-center p-6">
              <Star className="w-8 h-8 text-amber-500 fill-amber-500 mx-auto mb-3" />
              <span className="block font-extrabold text-3xl sm:text-4xl text-slate-900 mb-1">99.2%</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Client Satisfaction</span>
            </Card>

            <Card className="glass-card-light text-center p-6">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <span className="block font-extrabold text-3xl sm:text-4xl text-slate-900 mb-1">100%</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Confidential</span>
            </Card>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-20 bg-light-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="default" className="mb-3">
              Uncompromising Standards
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              The Four Pillars of Our <span className="gold-gradient-text">Practice</span>
            </h2>
            <p className="text-slate-600 text-base">
              Why thousands of individuals and families rely on our consultation for life direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Card key={i} className="glass-card-light flex gap-6 p-6 sm:p-8 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-600 to-amber-500 flex items-center justify-center text-white shrink-0 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERT PROFILE */}
      <section className="py-20 bg-white border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card-light p-8 sm:p-12 border-amber-500/30">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                <Badge variant="default">Certified Astrological Authority</Badge>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Meet Your Astrologer & Guide
                </h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  Welcome. I am a certified expert in traditional Vedic Astrology and Bhrigu Nandi Nadi techniques, dedicated to offering authentic, research-backed insights to help you navigate life&apos;s pivotal decisions.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-800">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-slate-900">Jyotish Alankar & Jyotish Acharya</span>
                      <span className="text-[11px] text-slate-600 font-normal">Bharatiya Vidya Bhavan, New Delhi</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-slate-900">Bhrigu Nandi Nadi Specialist</span>
                      <span className="text-[11px] text-slate-600 font-normal">Under Dr. Maheshanand Joshi</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-slate-900">Diploma in Vedic Astrology</span>
                      <span className="text-[11px] text-slate-600 font-normal">Shree Maharshi College, Udaipur</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-slate-900">Advanced Research Certifications</span>
                      <span className="text-[11px] text-slate-600 font-normal">Post-doctoral classical planetary research</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <Button size="lg" className="btn-gold-shimmer" asChild>
                    <Link href="/#booking-system" className="flex items-center gap-2">
                      <span>Book Session — ₹1,500 INR</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-amber-500/40 text-slate-800 hover:bg-amber-500/10" asChild>
                    <a href="tel:+919319506529" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-600" />
                      <span>Call +91 9319506529</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-4 text-center">
                <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-gold-600 via-amber-500 to-amber-300 mx-auto p-1.5 shadow-xl">
                  <div className="w-full h-full rounded-full bg-amber-50 border-2 border-amber-300 flex items-center justify-center text-amber-900 font-heading font-extrabold text-4xl">
                    VAN
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 text-lg mt-6">Certified Expert</h4>
                <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider mt-1">
                  Vedic & Bhrigu Nandi Nadi Astrologer
                </p>
                <div className="mt-3 inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-400/40 text-xs font-bold text-amber-900">
                  Fixed Fee: ₹1,500 INR
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
