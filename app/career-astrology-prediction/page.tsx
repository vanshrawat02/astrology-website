import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Calendar, MessageCircle, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Career & Business Astrology Predictions | Acharya Deepak Mehta",
  description:
    "Expert Career & Business Astrology consultation by Acharya Deepak Mehta. 10th house Karma reading, Dashamsa D10 chart analysis, job change timing, and business growth remedies.",
  keywords: [
    "Career Astrology Predictions",
    "Job Change Astrology Timing",
    "Business Growth Astrology",
    "10th House Karma Reading",
    "Dashamsa D10 Chart",
    "Job Promotion Astrology",
    "Acharya Deepak Mehta Astrologer"
  ],
};

export default function CareerAstrologyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Career & Business Astrology Predictions",
    provider: {
      "@type": "ProfessionalService",
      name: "Nadiveda - Acharya Deepak Mehta",
      telephone: "+91-9319506529",
      email: "secretsofastrology2dh@gmail.com",
    },
    serviceType: "Career Astrology",
    areaServed: "Worldwide",
    description:
      "Deep 10th house, 6th house, Dashamsa (D10) chart, and BNN Saturn transit analysis for career guidance, job promotion timing, and business growth.",
  };

  const careerPillars = [
    { title: "Suitable Career Fields", detail: "Discover whether your chart favors Government Job, Private Corporate, Tech, Finance, or Creative fields." },
    { title: "Job vs Business Determination", detail: "Evaluation of the 6th house (employment) vs 7th house (business/trade) and 10th house karma." },
    { title: "Timing Job Change & Promotion", detail: "Identifying favorable Dasha periods and Saturn/Jupiter transits for switching jobs or securing promotions." },
    { title: "Business Growth & Partnership", detail: "Checking partner compatibility, cash flow timing, and remedies for commercial obstacles." },
  ];

  const faqs = [
    {
      q: "How does Vedic astrology determine whether I should do a job or business?",
      a: "The 6th house represents service, competitive exams, and salaried employment, whereas the 7th house governs trade, client relations, and entrepreneurship. If the 10th house lord connects strongly to the 6th house and Saturn, a job is favored. If it connects to the 7th house and Mercury/Venus, business is indicated.",
    },
    {
      q: "Can astrology predict the exact time for a job promotion or switch?",
      a: "Yes. By analyzing Vimshottari Dasha along with Saturn's transit (the Karma Karaka in Bhrigu Nandi Nadi) over the 10th house or natal Sun/Mercury, auspicious months for job offers, increments, and promotions can be predicted.",
    },
    {
      q: "What remedies help overcome career stagnation or workplace politics?",
      a: "Workplace obstacles often stem from Rahu afflictions to the 10th house or a weak Saturn. Acharya Deepak Mehta prescribes practical remedies including Surya Arghya, specific Saturn mantras, gemstone recommendations (such as Blue Sapphire or Emerald if suitable), and ethical workplace practices.",
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
            <Briefcase className="w-3.5 h-3.5 mr-2 text-amber-600 inline" />
            Professional Karma & Direction
          </Badge>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            Career & Business <span className="gold-gradient-text">Astrology</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Align your professional career with planetary timing. Get clarity on job promotions, career switches, government vs private prospects, and business expansion.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="btn-gold-shimmer shadow-lg px-8" asChild>
              <Link href="/contact?service=Career%20%26%20Business%20Growth">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Career Session — ₹1,500 INR</span>
              </Link>
            </Button>
            <Button size="lg" variant="emerald" className="px-6" asChild>
              <a
                href="https://wa.me/919319506529?text=Hi%20Nadiveda,%20I%20would%20like%20to%20book%20a%20Career%20Astrology%20consultation."
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

      {/* CORE DETAILS */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="default">10th House Karma Reading</Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Unlock Your True Professional <span className="gold-gradient-text">Potential</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every birth chart contains a distinct professional code. Trying to force yourself into a career field opposite your planetary inclinations often results in burnout and stagnation.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Acharya Deepak Mehta combines 10th house analysis, Dashamsa (D10) divisional chart reading, and Bhrigu Nandi Nadi Saturn transit principles to answer your most vital career questions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {careerPillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-amber-50/70 border border-amber-500/20">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{pillar.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="glass-card-light p-6 sm:p-8 border-2 border-amber-500/30 shadow-xl bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30">
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                Career Consultation Package
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 mb-6">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>10th House & Dashamsa (D10) Analysis</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Job vs Business Determination</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Favorable Timing for Job Switch & Increment</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Business Partnership & Financial Gains Check</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Remedies for Workplace Stagnation & Conflicts</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase block">Fixed Consultation Fee</span>
                  <span className="font-heading text-2xl font-extrabold text-amber-950">₹1,500 INR</span>
                </div>
                <Button className="btn-gold-shimmer text-xs py-2 px-4" asChild>
                  <Link href="/contact">Book Career Session</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-3">Career FAQ</Badge>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900">
            Frequently Asked Career Questions
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
            Take Control of Your Professional Career Growth
          </h2>
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto mb-6">
            Consult Acharya Deepak Mehta 1-on-1 via Call, Video, or WhatsApp.
          </p>
          <Button size="lg" className="btn-gold-shimmer px-8 py-6 text-base font-bold shadow-lg" asChild>
            <Link href="/contact?service=Career%20%26%20Business%20Growth">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Book Appointment — ₹1,500 INR</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
