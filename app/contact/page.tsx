"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MessageCircle, Clock, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "Horoscope Analysis & Consultation";

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(preselectedService);
  const [birthDetails, setBirthDetails] = useState("");

  useEffect(() => {
    if (searchParams.get("service")) {
      setService(searchParams.get("service")!);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textMessage = `*New Consultation Request*\n\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Email:* ${email}\n*Specialization:* ${service}\n*Birth Details/Notes:* ${birthDetails || "N/A"}`;
    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/919311677001?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="glass-card-light p-8 sm:p-10 border border-amber-500/30 shadow-xl">
      <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">
        Schedule Your Consultation
      </h2>
      <p className="text-slate-600 text-xs mb-8">
        Fill in your basic details below to connect directly with our expert consultation team.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-slate-800 uppercase mb-2">
              Full Name *
            </label>
            <Input
              id="fullName"
              type="text"
              required
              placeholder="e.g. Ramesh Kumar"
              className="bg-white border-amber-500/30 text-slate-900 placeholder:text-slate-400"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
              placeholder="+91 9311677001"
              className="bg-white border-amber-500/30 text-slate-900 placeholder:text-slate-400"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              placeholder="you@example.com"
              className="bg-white border-amber-500/30 text-slate-900 placeholder:text-slate-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-bold text-slate-800 uppercase mb-2">
              Select Specialization *
            </label>
            <Select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="bg-white border-amber-500/30 text-slate-900"
            >
              <option value="Horoscope Analysis & Consultation">Horoscope Analysis & Consultation</option>
              <option value="Marriage & Relationship Compatibility">Marriage & Relationship Compatibility</option>
              <option value="Career & Business Growth">Career & Business Growth</option>
              <option value="Child Birth & Family Prospects">Child Birth & Family Prospects</option>
              <option value="Finance & Wealth Guidance">Finance & Wealth Guidance</option>
              <option value="Foreign Travels & Relocation">Foreign Travels & Relocation</option>
            </Select>
          </div>
        </div>

        <div>
          <label htmlFor="birthDetails" className="block text-xs font-bold text-slate-800 uppercase mb-2">
            Birth Details & Specific Queries (Optional)
          </label>
          <Textarea
            id="birthDetails"
            rows={4}
            placeholder="Please enter your Date of Birth, Time of Birth, Place of Birth, and main concerns (e.g. Career, Marriage, Finance)..."
            className="bg-white border-amber-500/30 text-slate-900 placeholder:text-slate-400"
            value={birthDetails}
            onChange={(e) => setBirthDetails(e.target.value)}
          />
        </div>

        <Button type="submit" size="lg" className="btn-gold-shimmer w-full text-base font-bold py-6 shadow-xl">
          <Send className="w-5 h-5 mr-2" />
          <span>Send Booking Request on WhatsApp</span>
        </Button>

        <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 pt-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Your information is strictly private and 100% confidential.</span>
        </p>
      </form>
    </Card>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* PAGE HEADER */}
      <section className="bg-light-pattern py-16 border-b border-amber-500/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="default" className="mb-2">
            1-on-1 Consultation
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Contact & <span className="gold-gradient-text">Book Appointment</span>
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Schedule your personalized Vedic & Bhrigu Nandi Nadi astrological consultation via Audio/Video Call, WhatsApp, or Email.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT FORM */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center text-slate-600 font-medium">Loading Booking Form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* RIGHT INFO CARDS */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="glass-card-light p-8 border border-amber-500/30 shadow-lg">
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                Direct Communication Channels
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-amber-700 tracking-wider block mb-1">
                      Phone / Helpline
                    </span>
                    <a
                      href="tel:+919311677001"
                      className="text-xl font-extrabold text-slate-900 hover:text-gold-600 transition-colors block mb-3 opacity-100"
                    >
                      +91 9311677001
                    </a>
                    <div className="flex flex-wrap gap-2.5">
                      <Button size="sm" className="btn-gold-shimmer text-xs" asChild>
                        <a href="tel:+919311677001" className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call Now</span>
                        </a>
                      </Button>
                      <Button size="sm" variant="emerald" className="text-xs" asChild>
                        <a
                          href="https://wa.me/919311677001?text=Hi%20Nadiveda,%20I%20would%20like%20to%20book%20a%20consultation."
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

              {/* Hours */}
              <div className="glass-card-light rounded-2xl p-6 border border-amber-500/20 text-xs text-slate-700 space-y-2 mt-6">
                <div className="flex items-center justify-between font-bold text-slate-900 border-b border-amber-500/20 pb-2 mb-2">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" /> Consultation Hours
                  </span>
                  <span className="text-emerald-700 font-bold">Available Daily</span>
                </div>
                <p className="flex justify-between">
                  <span>Monday – Saturday:</span> <strong>9:00 AM – 8:00 PM IST</strong>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span> <strong>10:00 AM – 5:00 PM IST</strong>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
