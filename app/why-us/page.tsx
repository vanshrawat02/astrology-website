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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WhyUsPage() {
  const pillars = [
    {
      title: "Authentic Vedic Lineage",
      description:
        "Strictly grounded in classical Parasari, Jaimini, and KP systems without guesswork or fear-mongering.",
      icon: BookOpen,
    },
    {
      title: "100% Zero-Demolition Vastu",
      description:
        "Scientific remedies using elemental balancing, brass/copper strips, and energy rectifications without breaking walls.",
      icon: Building2,
    },
    {
      title: "Complete Confidentiality",
      description:
        "Your birth chart, personal queries, and consultation recordings are protected with 100% strict privacy guarantees.",
      icon: Lock,
    },
    {
      title: "Practical & Doable Remedies",
      description:
        "No extortionate rituals. Simple, effective remedies including mantras, gemstone recommendations, and lifestyle tweaks.",
      icon: Sparkles,
    },
  ];

  return (
    <>
      {/* PAGE BANNER */}
      <section className="bg-light-pattern py-16 border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="default" className="mb-2">
            Trust & Credentials
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Why Choose <span className="gold-gradient-text">Cosmic Guidance</span>
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Discover the story, certifications, and uncompromising ethical foundation behind Acharya Rajesh Sharma.
          </p>
        </div>
      </section>

      {/* STATS COUNTERS */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Users className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <span className="block font-extrabold text-3xl sm:text-4xl text-slate-900 mb-1">10,000+</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Consultations Done</span>
            </Card>

            <Card className="text-center p-6">
              <Award className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <span className="block font-extrabold text-3xl sm:text-4xl text-slate-900 mb-1">15+ Yrs</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Vedic Practice</span>
            </Card>

            <Card className="text-center p-6">
              <Star className="w-8 h-8 text-amber-500 fill-amber-500 mx-auto mb-3" />
              <span className="block font-extrabold text-3xl sm:text-4xl text-slate-900 mb-1">99.2%</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Client Satisfaction</span>
            </Card>

            <Card className="text-center p-6">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <span className="block font-extrabold text-3xl sm:text-4xl text-slate-900 mb-1">100%</span>
              <span className="text-xs text-slate-500 uppercase font-semibold">Zero-Demolition</span>
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
              Why thousands of families and business owners rely on Acharya Rajesh Sharma for life direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Card key={i} className="flex gap-6 p-6 sm:p-8 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-600 to-amber-400 flex items-center justify-center text-white shrink-0 shadow-md">
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

      {/* ACHARYA PROFILE */}
      <section className="py-20 bg-white border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-12 border-amber-500/30">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                <Badge variant="gold">Lead Consultant & Founder</Badge>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
                  Acharya Rajesh Sharma
                </h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  With over 15 years of dedicated study and practice in Vedic Kundali evaluation and Vastu Shastra, Acharya Rajesh Sharma has guided individuals across India, the US, UK, and UAE towards personal, professional, and domestic harmony.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Gold Medalist Jyotish Acharya</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Certified MahaVastu Expert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Parasari & KP Astrology Master</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>100% Private 1-on-1 Consultations</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button size="lg" asChild>
                    <Link href="/contact" className="flex items-center gap-2">
                      <span>Book Session with Acharya Ji</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-4 text-center">
                <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-gold-600 via-amber-500 to-amber-300 mx-auto p-1.5 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-heading font-extrabold text-4xl">
                    ARS
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 text-lg mt-6">Acharya Rajesh Sharma</h4>
                <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider mt-1">
                  Vedic Astrologer & Vastu Specialist
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

