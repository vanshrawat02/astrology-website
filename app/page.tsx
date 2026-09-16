import Link from "next/link";
import {
  Star,
  ArrowRight,
  Phone,
  ShieldCheck,
  Video,
  FileText,
  CheckCircle2,
  Users,
  Award,
  Sparkles,
  Compass,
  Building2,
  Calendar,
  Gem,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const services = [
    {
      title: "Kundali & Marriage Matching",
      description: "Detailed Ashtakoot Guna Milan, Nadi Dosha analysis, and Manglik Dosha remedies for marital bliss.",
      icon: Compass,
      link: "/services",
    },
    {
      title: "Career & Wealth Analysis",
      description: "Discover favorable Dasha periods for business growth, career transitions, and financial prosperity.",
      icon: Sparkles,
      link: "/services",
    },
    {
      title: "100% Zero-Demolition Vastu",
      description: "Scientific remedies using elemental balancing, brass strips, and pyramids without breaking any walls.",
      icon: Building2,
      link: "/services",
    },
    {
      title: "Varshphal Annual Horoscope",
      description: "12-month month-by-month predictive analysis for proactive planning across health, wealth, and family.",
      icon: Calendar,
      link: "/services",
    },
    {
      title: "Certified Gemstone Consultation",
      description: "Customized Rashi Ratan recommendations based on planetary strength and Lagna chart positions.",
      icon: Gem,
      link: "/services",
    },
    {
      title: "Prashna Kundali (Immediate Help)",
      description: "Urgent question resolution using horary astrology when exact birth details are unavailable.",
      icon: HelpCircle,
      link: "/services",
    },
  ];

  const reviews = [
    {
      quote: "Acharya ji's Vastu remedies without any demolition transformed the energy of our new office in Gurgaon. Business grew 40% within 6 months!",
      author: "Rajesh Kumar",
      location: "Gurgaon • Vastu Consultation",
    },
    {
      quote: "The Kundali matching analysis was eye-opening. The exact remedies suggested for Nadi Dosha gave our family peace of mind before the wedding.",
      author: "Priya Sharma",
      location: "Delhi • Marriage Analysis",
    },
    {
      quote: "I was confused about a job transfer offer to the UK. Acharya ji analyzed my Rahu Mahadasha and predicted exact timings seamlessly!",
      author: "Dr. Vikramaditya Rao",
      location: "Bengaluru • Career Analysis",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-light-pattern pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <Badge variant="default" className="mb-6 py-1.5 px-4 text-xs sm:text-sm">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>Rated 4.9/5 by 10,000+ Satisfied Clients</span>
              </Badge>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Vedic Astrology & <br className="hidden sm:inline" />
                <span className="gold-gradient-text">Vastu Consultation</span> <br />
                by Certified Experts
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Unlock profound clarity in{" "}
                <strong className="text-slate-900 font-semibold">
                  Kundali Matching, Career & Wealth Predictions
                </strong>
                , and achieve home harmony with{" "}
                <strong className="text-slate-900 font-semibold">
                  100% Zero-Demolition Vastu Shastra
                </strong>{" "}
                remedies.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/services" className="flex items-center justify-center gap-3">
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="/contact" className="flex items-center justify-center gap-3">
                    <Phone className="w-4 h-4" />
                    <span>Contact Astrologer</span>
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200 text-slate-600 text-xs sm:text-sm max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-500" />
                  <span>100% Private</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Video className="w-4 h-4 text-gold-500" />
                  <span>Audio/Video Call</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <FileText className="w-4 h-4 text-gold-500" />
                  <span>Written PDF Report</span>
                </div>
              </div>
            </div>

            {/* Hero Right Column - Status Card */}
            <div className="lg:col-span-5 relative">
              <Card>
                <div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                      Experts Online Now
                    </span>
                  </div>
                  <span className="text-xs text-amber-700 font-medium">Quick 24h Delivery</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Acharya Rajesh Sharma</h4>
                      <p className="text-xs text-slate-600">
                        15+ Years Experience • Certified Gold Medalist Jyotish Acharya
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block font-extrabold text-slate-900 text-lg">10,000+</span>
                      <span className="text-[11px] text-slate-500 uppercase font-semibold">
                        Kundalis Analyzed
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="block font-extrabold text-slate-900 text-lg">2,500+</span>
                      <span className="text-[11px] text-slate-500 uppercase font-semibold">
                        Vastu Audits
                      </span>
                    </div>
                  </div>
                </div>

                <Button variant="emerald" className="w-full" asChild>
                  <a
                    href="https://wa.me/919999999999?text=Hi%20Cosmic%20Guidance,%20I%20want%20to%20book%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quick WhatsApp Booking
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES SECTION */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="default" className="mb-3">
              Vedic Astrology & Vastu
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Our Key Consultation <span className="gold-gradient-text">Offerings</span>
            </h2>
            <p className="text-slate-600 text-base">
              Personalized guidance grounded in classical Parasari, Jaimini, and KP astrological systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-gold-600 to-amber-400 flex items-center justify-center text-white mb-4 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{service.description}</CardDescription>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-gold-600 font-bold text-sm hover:gap-3 transition-all"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US BRIEF SECTION */}
      <section className="py-20 bg-light-pattern border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="default" className="mb-3">
                Why Cosmic Guidance
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
                Scientific Approach with <br />
                <span className="gold-gradient-text">Zero-Demolition Guarantee</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We believe astrology is a compass, not a verdict. Our remedies focus on planetary mantras, color therapy, gemmology, and non-destructive Vastu adjustments to harmonize your home without breaking structural walls.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Authentic Vedic Lineage</h4>
                    <p className="text-xs text-slate-600">Strictly following Parashari and Lal Kitab Vedic scriptures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Zero-Demolition Remedies</h4>
                    <p className="text-xs text-slate-600">Pyramids, elemental strips, and energy rectifications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Complete Privacy</h4>
                    <p className="text-xs text-slate-600">Your birth data and consultation notes are strictly confidential.</p>
                  </div>
                </div>
              </div>

              <Button asChild>
                <Link href="/why-us">Discover More About Us</Link>
              </Button>
            </div>

            {/* Right Card */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <span className="block font-extrabold text-3xl text-slate-900 mb-1">10,000+</span>
                <span className="text-xs text-slate-500 uppercase font-semibold">Clients Guided</span>
              </Card>
              <Card className="text-center p-6">
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <span className="block font-extrabold text-3xl text-slate-900 mb-1">15+ Yrs</span>
                <span className="text-xs text-slate-500 uppercase font-semibold">Experience</span>
              </Card>
              <Card className="text-center p-6 col-span-2">
                <Star className="w-8 h-8 text-amber-500 fill-amber-500 mx-auto mb-3" />
                <span className="block font-extrabold text-3xl text-slate-900 mb-1">99.2%</span>
                <span className="text-xs text-slate-500 uppercase font-semibold">Satisfaction Rate</span>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="default" className="mb-3">
              Testimonials
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              What Our <span className="gold-gradient-text">Clients Say</span>
            </h2>
            <p className="text-slate-600 text-base">
              Real feedback from individuals and business owners across India and abroad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <Card key={i} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-sm mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                    &quot;{review.quote}&quot;
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{review.author}</h4>
                    <span className="text-xs text-slate-500">{review.location}</span>
                  </div>
                  <span className="text-emerald-600 text-xs font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

