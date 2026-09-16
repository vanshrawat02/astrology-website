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
  Clock,
  MapPin,
  Tag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { BookingModal } from "@/components/booking-modal";

export default function HomePage() {
  // Booking Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    tob: "",
    pob: "",
    topic: "Horoscope Analysis & Consultation",
    preferredDate: "",
    timeSlot: "Morning (9:00 AM - 12:00 PM)",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingResult, setBookingResult] = useState<{
    bookingId: string;
    clientName: string;
    topic: string;
    dob?: string;
    tob?: string;
    pob?: string;
    preferredDate?: string;
    timeSlot?: string;
    whatsappUrl: string;
  } | null>(null);

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/book-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setBookingResult({
          bookingId: data.bookingId,
          clientName: data.clientName,
          topic: data.topic,
          dob: formData.dob,
          tob: formData.tob,
          pob: formData.pob,
          preferredDate: formData.preferredDate,
          timeSlot: formData.timeSlot,
          whatsappUrl: data.whatsappUrl,
        });
        setModalOpen(true);
      } else {
        alert(data.error || "Failed to submit booking. Please try again.");
      }
    } catch (err) {
      console.error("Booking API error:", err);
      // Fallback redirect
      const messageText = `*New Consultation Request*\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*DOB:* ${formData.dob || "N/A"} | *TOB:* ${formData.tob || "N/A"} | *POB:* ${formData.pob || "N/A"}\n*Topic:* ${formData.topic}\n*Fee:* ₹1,500 INR`;
      const fallbackUrl = `https://wa.me/919319506529?text=${encodeURIComponent(messageText)}`;
      window.open(fallbackUrl, "_blank");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      {/* HERO SECTION */}
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
                <Tag className="w-4 h-4 text-gold-500" />
                <span className="font-medium">Fixed Fee: ₹1,500 INR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
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

          {/* HIGHLIGHTED SERVICE */}
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
                    <a href="#booking-system" className="flex items-center gap-2">
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
                  <p className="text-xs text-slate-600 mb-4">Connect directly with certified experts via Call, WhatsApp, or Email.</p>
                  <div className="py-2.5 px-4 rounded-xl bg-amber-100 border border-amber-400/40 text-xs font-bold text-amber-900 inline-block">
                    Fee: ₹1,500 INR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS GRID */}
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
                      href="#booking-system"
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

      {/* INTERACTIVE BOOKING SYSTEM SECTION */}
      <section id="booking-system" className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="default" className="mb-3">
              Interactive Booking
            </Badge>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4">
              Get In Touch For <span className="gold-gradient-text">Personal Consultation</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Fill in your birth parameters and choose a preferred time slot to schedule your 1-on-1 session.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Cards & Pricing Badge */}
            <div className="lg:col-span-5 space-y-6">
              {/* Fixed Pricing Breakdown Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/15 via-amber-100/70 to-amber-500/10 border-2 border-amber-500/30 shadow-lg text-slate-900 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase font-extrabold text-amber-900 tracking-wider flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-amber-600" /> Standard Consultation Fee
                  </span>
                  <Badge className="bg-emerald-700 text-white text-[10px] font-bold">100% Guaranteed</Badge>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-heading text-4xl font-extrabold text-amber-950">₹1,500</span>
                  <span className="text-sm font-bold text-slate-600">INR / Session</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed border-t border-amber-500/20 pt-3">
                  Includes full Janma Kundali & Bhrigu Nandi Nadi analysis, transit timeline mapping, and personalized remedies.
                </p>
              </div>

              {/* Phone Card */}
              <div className="glass-card-light rounded-2xl p-6 border border-amber-500/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs uppercase font-bold text-amber-700 tracking-wider block mb-1">
                      Phone / Helpline
                    </span>
                    <a
                      href="tel:+919319506529"
                      className="text-xl font-extrabold text-slate-900 hover:text-gold-600 transition-colors block mb-3 opacity-100"
                    >
                      +91 9319506529
                    </a>
                    <div className="flex flex-wrap gap-2.5">
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
                      className="text-sm sm:text-base font-extrabold text-slate-900 hover:text-gold-600 transition-colors block break-all mb-3 opacity-100"
                    >
                      secretsofastrology2dh@gmail.com
                    </a>
                    <Button size="sm" variant="outline" className="border-amber-500/40 text-slate-800 hover:bg-amber-500/10 text-xs" asChild>
                      <a href="mailto:secretsofastrology2dh@gmail.com" className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-amber-600" />
                        <span>Send Email</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Full Interactive Booking Form */}
            <div className="lg:col-span-7">
              <Card className="glass-card-light p-8 sm:p-10 border border-amber-500/30 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-2xl font-bold text-slate-900">
                    Book Consultation Session
                  </h3>
                  <Badge className="bg-amber-100 border border-amber-400 text-amber-900 font-extrabold text-xs">
                    Fee: ₹1,500 INR
                  </Badge>
                </div>
                <p className="text-slate-600 text-xs mb-8">
                  Enter your details & birth parameters for accurate chart generation and slot allocation.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-800 uppercase mb-1.5">
                        Full Name *
                      </label>
                      <Input
                        id="fullName"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Sharma"
                        className="bg-white border-amber-500/30 text-slate-900"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-800 uppercase mb-1.5">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        className="bg-white border-amber-500/30 text-slate-900"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Phone & Consultation Topic */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-800 uppercase mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 9319506529"
                        className="bg-white border-amber-500/30 text-slate-900"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="topic" className="block text-xs font-bold text-slate-800 uppercase mb-1.5">
                        Consultation Topic *
                      </label>
                      <Select
                        id="topic"
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="bg-white border-amber-500/30 text-slate-900"
                        required
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

                  {/* Birth Parameters: DOB, TOB, POB */}
                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-500/20 space-y-4">
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                      Birth Parameters (For Chart Generation)
                    </span>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="dob" className="block text-[11px] font-semibold text-slate-700 mb-1">
                          Date of Birth
                        </label>
                        <Input
                          id="dob"
                          type="date"
                          className="bg-white border-amber-500/30 text-slate-900 text-xs"
                          value={formData.dob}
                          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        />
                      </div>

                      <div>
                        <label htmlFor="tob" className="block text-[11px] font-semibold text-slate-700 mb-1">
                          Time of Birth
                        </label>
                        <Input
                          id="tob"
                          type="time"
                          className="bg-white border-amber-500/30 text-slate-900 text-xs"
                          value={formData.tob}
                          onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                        />
                      </div>

                      <div>
                        <label htmlFor="pob" className="block text-[11px] font-semibold text-slate-700 mb-1">
                          Place of Birth
                        </label>
                        <Input
                          id="pob"
                          type="text"
                          placeholder="City, State"
                          className="bg-white border-amber-500/30 text-slate-900 text-xs"
                          value={formData.pob}
                          onChange={(e) => setFormData({ ...formData, pob: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Date & Time Slot */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-bold text-slate-800 uppercase mb-1.5">
                        Preferred Date
                      </label>
                      <Input
                        id="preferredDate"
                        type="date"
                        className="bg-white border-amber-500/30 text-slate-900"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="timeSlot" className="block text-xs font-bold text-slate-800 uppercase mb-1.5">
                        Preferred Time Slot
                      </label>
                      <Select
                        id="timeSlot"
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="bg-white border-amber-500/30 text-slate-900"
                      >
                        <option value="Morning (9:00 AM - 12:00 PM)">
                          Morning (9:00 AM - 12:00 PM)
                        </option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">
                          Afternoon (12:00 PM - 4:00 PM)
                        </option>
                        <option value="Evening (4:00 PM - 8:00 PM)">
                          Evening (4:00 PM - 8:00 PM)
                        </option>
                      </Select>
                    </div>
                  </div>

                  {/* Message / Notes */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-800 uppercase mb-1.5">
                      Specific Questions / Notes (Optional)
                    </label>
                    <Textarea
                      id="message"
                      rows={3}
                      placeholder="Briefly describe your primary query or life concern..."
                      className="bg-white border-amber-500/30 text-slate-900 placeholder:text-slate-400 text-xs"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" disabled={loading} className="btn-gold-shimmer w-full py-6 text-base font-bold">
                    <Send className="w-5 h-5 mr-2 text-white" />
                    <span>{loading ? "Processing Booking..." : "Submit Consultation Request (Fee: ₹1,500)"}</span>
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        bookingData={bookingResult}
      />
    </div>
  );
}
