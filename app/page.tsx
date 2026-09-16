"use client";

import { useState } from "react";
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
  Send,
  MessageCircle,
  Calendar,
  ShieldCheck,
  ArrowRight,
  Award,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

export default function HomePage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialization: "Horoscope Analysis & Consultation",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const messageText = `*New Consultation Request*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Specialization:* ${formData.specialization}\n*Message:* ${formData.message || "N/A"}`;
    const whatsappUrl = `https://wa.me/919319506529?text=${encodeURIComponent(messageText)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      {/* 2. HERO SECTION */}
      <section className="relative bg-light-pattern pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="default" className="mb-6 py-2 px-5 text-xs sm:text-sm bg-amber-500/10 border-amber-500/30 text-amber-800">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 mr-2" />
              <span>Certified Experts in Vedic Astrology & Bhrigu Nandi Nadi</span>
            </Badge>

            {/* Main Heading */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight sm:leading-tight mb-6">
              Vedic Astrology & <br />
              <span className="gold-gradient-text">
                Bhrigu Nandi Nadi Consultation
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-amber-700 font-bold mb-3">
              Accurate Guidance & Solutions by Certified Experts
            </p>

            {/* Secondary Sub-text */}
            <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Direct Consultations Available via Call or Email
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
              <Button size="lg" className="btn-gold-shimmer w-full sm:w-auto px-8 py-6 text-base" asChild>
                <a href="tel:+919319506529" className="flex items-center justify-center gap-2.5">
                  <Phone className="w-5 h-5 text-white" />
                  <span>Call Now (+91 9319506529)</span>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 py-6 text-base border-amber-500/40 text-slate-800 hover:bg-amber-500/10 transition-all"
                asChild
              >
                <a href="mailto:secretsofastrology2dh@gmail.com" className="flex items-center justify-center gap-2.5">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span>Email Us</span>
                </a>
              </Button>
            </div>

            {/* Hero Quick Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-amber-500/20 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center justify-center gap-2 glass-card-light p-3 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-gold-500" />
                <span className="font-medium">100% Confidential</span>
              </div>
              <div className="flex items-center justify-center gap-2 glass-card-light p-3 rounded-xl">
                <Compass className="w-4 h-4 text-gold-500" />
                <span className="font-medium">Bhrigu Nandi Nadi</span>
              </div>
              <div className="flex items-center justify-center gap-2 glass-card-light p-3 rounded-xl">
                <Phone className="w-4 h-4 text-gold-500" />
                <span className="font-medium">Audio/Video Call</span>
              </div>
              <div className="flex items-center justify-center gap-2 glass-card-light p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-gold-500" />
                <span className="font-medium">Effective Remedies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-amber-500/10">
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

          {/* HIGHLIGHTED SERVICE: Horoscope Analysis & Consultation */}
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
                    <a href="#contact" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-white" />
                      <span>Book Horoscope Reading</span>
                    </a>
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
                  <p className="text-xs text-slate-600 mb-6">Connect directly with certified experts via Call, WhatsApp, or Email.</p>
                  <div className="py-3 px-4 rounded-xl bg-amber-50 border border-amber-500/20 text-xs font-bold text-amber-800">
                    Quick Booking Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPECIALIZATIONS GRID */}
      <section className="py-20 lg:py-28 bg-light-pattern border-b border-amber-500/10">
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
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-gold-600 font-bold text-sm hover:gap-3 transition-all"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CONTACT & CONSULTATION FOOTER SECTION */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="default" className="mb-3">
              Personalized Guidance
            </Badge>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Get In Touch For <span className="gold-gradient-text">Personal Consultation</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Reach out directly via Call, Email, or WhatsApp to schedule your 1-on-1 session.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact Cards Left (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Phone Card */}
              <div className="glass-card-light rounded-2xl p-6 border border-amber-500/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs uppercase font-bold text-amber-700 tracking-wider block mb-1">
                      Call / Helpline
                    </span>
                    <a
                      href="tel:+919319506529"
                      className="text-xl font-extrabold text-slate-900 hover:text-gold-600 transition-colors block mb-4"
                    >
                      +91 9319506529
                    </a>
                    <div className="flex flex-wrap gap-3">
                      <Button size="sm" className="btn-gold-shimmer text-xs" asChild>
                        <a href="tel:+919319506529" className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call Now</span>
                        </a>
                      </Button>
                      <Button size="sm" variant="emerald" className="text-xs" asChild>
                        <a
                          href="https://wa.me/919319506529?text=Hi%20Vedic%20Astrology,%20I%20would%20like%20to%20book%20a%20consultation."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="glass-card-light rounded-2xl p-6 border border-amber-500/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs uppercase font-bold text-amber-700 tracking-wider block mb-1">
                      Official Email
                    </span>
                    <a
                      href="mailto:secretsofastrology2dh@gmail.com"
                      className="text-sm sm:text-base font-extrabold text-slate-900 hover:text-gold-600 transition-colors block break-all mb-4"
                    >
                      secretsofastrology2dh@gmail.com
                    </a>
                    <Button size="sm" variant="outline" className="border-amber-500/40 text-slate-800 hover:bg-amber-500/10 text-xs" asChild>
                      <a href="mailto:secretsofastrology2dh@gmail.com" className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send Email</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Notice */}
              <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-500/20 text-xs text-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Privacy Guaranteed</span>
                </div>
                <p>
                  Your birth chart details and consultation messages remain strictly private and confidential.
                </p>
              </div>
            </div>

            {/* Appointment Booking Form Right (7 Cols) */}
            <div className="lg:col-span-7">
              <Card className="glass-card-light p-8 sm:p-10 border border-amber-500/30 shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                  Book Your Consultation
                </h3>
                <p className="text-slate-600 text-xs mb-8">
                  Fill in your details below to schedule an appointment with our expert astrologers.
                </p>

                {formSubmitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-500/30 text-emerald-800 text-sm flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                    <span>Thank you! Redirecting you to WhatsApp for immediate booking confirmation...</span>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-800 uppercase mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-800 uppercase mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 9319506529"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-800 uppercase mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="specialization" className="block text-xs font-bold text-slate-800 uppercase mb-2">
                        Selected Specialization *
                      </label>
                      <Select
                        id="specialization"
                        value={formData.specialization}
                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                      >
                        <option value="Horoscope Analysis & Consultation">
                          Horoscope Analysis & Consultation
                        </option>
                        <option value="Marriage & Relationship Compatibility">
                          Marriage & Relationship Compatibility
                        </option>
                        <option value="Career & Business Growth">
                          Career & Business Growth
                        </option>
                        <option value="Child Birth & Family Prospects">
                          Child Birth & Family Prospects
                        </option>
                        <option value="Finance & Wealth Guidance">
                          Finance & Wealth Guidance
                        </option>
                        <option value="Foreign Travels & Relocation">
                          Foreign Travels & Relocation
                        </option>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-800 uppercase mb-2">
                      Message / Birth Details (Optional)
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Enter Date, Time & Place of birth or specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" className="btn-gold-shimmer w-full py-6 text-base">
                    <Send className="w-5 h-5 mr-2 text-white" />
                    <span>Submit & Connect on WhatsApp</span>
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
