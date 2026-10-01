import type { Metadata } from "next";
import Link from "next/link";
import { Award, MapPin, Phone, MessageCircle, CheckCircle2, ShieldCheck, Calendar, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Best Astrologer in Delhi NCR & Ghaziabad | Acharya Deepak Mehta",
  description:
    "Consult Acharya Deepak Mehta — certified Vedic & Bhrigu Nandi Nadi astrologer in Ramprastha, Ghaziabad (Delhi NCR). Trusted 1-on-1 consultation for career, marriage, and remedies.",
  keywords: [
    "Best Astrologer in Delhi NCR",
    "Top Astrologer in Ghaziabad",
    "Famous Astrologer in Delhi NCR",
    "Vedic Astrologer Ramprastha Ghaziabad",
    "Acharya Deepak Mehta Astrologer",
    "Bhrigu Nandi Nadi Astrologer Delhi",
    "Astrologer near Anand Vihar Ghaziabad"
  ],
};

export default function BestAstrologerDelhiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nadiveda - Acharya Deepak Mehta (Best Astrologer in Delhi NCR)",
    image: "https://astrology-website.tundra-wing.workers.dev/deepak-mehta.jpg",
    telephone: "+91-9319506529",
    email: "secretsofastrology2dh@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ramprastha Colony",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201011",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6534571,
      longitude: 77.3195034,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    priceRange: "₹1,500 INR",
  };

  const credentials = [
    { title: "Jyotish Alankar & Jyotish Acharya", institute: "Bharatiya Vidya Bhavan, New Delhi" },
    { title: "Bhrigu Nandi Nadi Specialist", institute: "Certified under Dr. Maheshanand Joshi" },
    { title: "Diploma in Vedic Astrology", institute: "Shree Maharshi College, Udaipur" },
    { title: "Advanced Planetary Research", institute: "Classical combinations & event timing" },
  ];

  const faqs = [
    {
      q: "Where is Acharya Deepak Mehta's astrology office located in Delhi NCR?",
      a: "Acharya Deepak Mehta's consultation office is conveniently located in Ramprastha Colony, Ghaziabad (Uttar Pradesh), near Surya Nagar and Anand Vihar, Delhi NCR.",
    },
    {
      q: "Can I book an online audio or video call consultation?",
      a: "Yes. In addition to in-person office visits, Acharya Deepak Mehta offers 1-on-1 audio call, video call, and WhatsApp consultations for clients across India and globally.",
    },
    {
      q: "What is the fixed consultation fee?",
      a: "The consultation fee is fixed at ₹1,500 INR per session, covering full birth chart evaluation, BNN transits, specific query answers, and practical remedies.",
    },
    {
      q: "How do I schedule an appointment?",
      a: "You can book directly by filling the booking request form on our website or by sending a message on WhatsApp to +91 9319506529.",
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
            <MapPin className="w-3.5 h-3.5 mr-2 text-amber-600 inline" />
            Ramprastha Colony, Ghaziabad • Delhi NCR
          </Badge>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            Best Astrologer in <span className="gold-gradient-text">Delhi NCR & Ghaziabad</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Consult <strong>Acharya Deepak Mehta</strong> — certified expert in Vedic Astrology and Bhrigu Nandi Nadi. Trusted by 10,000+ individuals for authentic predictions, career guidance, and practical remedies.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="btn-gold-shimmer shadow-lg px-8" asChild>
              <Link href="/contact">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Appointment — ₹1,500 INR</span>
              </Link>
            </Button>
            <Button size="lg" variant="emerald" className="px-6" asChild>
              <a
                href="https://wa.me/919319506529?text=Hi%20Nadiveda,%20I%20would%20like%20to%20book%20a%20consultation."
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

      {/* EXPERT PROFILE SECTION */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass-card-light p-6 sm:p-12 border-amber-500/30 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 text-center">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden bg-gradient-to-tr from-gold-600 via-amber-500 to-amber-300 mx-auto p-1 shadow-xl">
                <img
                  src="/deepak-mehta.jpg"
                  alt="Acharya Deepak Mehta Astrologer in Delhi NCR Ghaziabad"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>
              <h3 className="font-heading font-extrabold text-slate-900 text-xl mt-4">Acharya Deepak Mehta</h3>
              <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider mt-1">
                Certified Vedic & Bhrigu Nandi Nadi Astrologer
              </p>
              <div className="mt-3 inline-block px-3.5 py-1 rounded-full bg-amber-100 border border-amber-400/40 text-xs font-bold text-amber-900">
                10,000+ Satisfied Clients
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <Badge variant="default">Authentic Vedic Lineage</Badge>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Authentic Astrological Guidance in <span className="gold-gradient-text">Delhi NCR</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Welcome to <strong>Nadiveda</strong>. Acharya Deepak Mehta is a recognized authority in classical Vedic Astrology and Bhrigu Nandi Nadi. Based in Ramprastha Colony, Ghaziabad (bordering Anand Vihar, Delhi), he provides honest, research-grounded astrological evaluations without inducing fear or selling overpriced rituals.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-slate-900 text-xs sm:text-sm">{cred.title}</span>
                      <span className="text-[11px] text-slate-600 font-normal">{cred.institute}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* WHY CLIENTS TRUST ACHARYA DEEPAK MEHTA */}
      <section className="py-16 bg-light-pattern border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="default" className="mb-3">Why Choose Us</Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900">
              The Four Pillars of Our Practice
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card-light p-6 border-amber-500/30">
              <Award className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">Formal Credentials</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Educated at Bharatiya Vidya Bhavan, New Delhi & Maharshi College, Udaipur.</p>
            </Card>

            <Card className="glass-card-light p-6 border-amber-500/30">
              <Sparkles className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">BNN Precision</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Bhrigu Nandi Nadi timing for exact job, marriage, and financial event years.</p>
            </Card>

            <Card className="glass-card-light p-6 border-amber-500/30">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">100% Confidential</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Complete privacy protection for birth charts and personal discussions.</p>
            </Card>

            <Card className="glass-card-light p-6 border-amber-500/30">
              <Clock className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-heading font-bold text-base text-slate-900 mb-2">Fixed Transparent Fee</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Transparent fixed fee of ₹1,500 INR with zero hidden ritual upsells.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* OFFICE & MAP SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <Badge variant="default">Consultation Office</Badge>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
              Visit Our Office in Ghaziabad (Delhi NCR)
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Located in Ramprastha Colony, Ghaziabad (UP), right next to Anand Vihar and Surya Nagar. Easily accessible from East Delhi, Noida, Indirapuram, and Vaishali.
            </p>
            <div className="space-y-2 text-xs text-slate-700 pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <strong>Address:</strong> Ramprastha Colony, Ghaziabad (UP), India
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <strong>Phone:</strong> +91 9319506529
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <strong>Hours:</strong> Mon – Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 5:00 PM
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="w-full h-72 rounded-2xl overflow-hidden border border-amber-500/30 shadow-lg">
              <iframe
                title="Acharya Deepak Mehta Astrologer Ramprastha Ghaziabad Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.914279762463!2d77.3195034!3d28.6534571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb591bcfc2a5%3A0x6b12a80695079a40!2sRam%20Prastha%20Colony%2C%20Surya%20Nagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201011!5e0!3m2!1sen!2sin!4v1727000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-light-pattern border-t border-amber-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-3">Local FAQ</Badge>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900">
              Frequently Asked Questions
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
            Schedule Your Consultation with Acharya Deepak Mehta
          </h2>
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto mb-6">
            Available for In-Person Office Visits, Audio Call, Video Call, and WhatsApp.
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
