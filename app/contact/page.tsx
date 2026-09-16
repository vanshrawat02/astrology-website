"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MessageCircle, Clock, Send, ShieldCheck, Sparkles } from "lucide-react";
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
    const whatsappUrl = `https://wa.me/919319506529?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="glass-card-cosmic p-8 sm:p-10 border border-amber-500/30">
      <h2 className="font-heading text-2xl font-bold text-white mb-2">
        Schedule Your Consultation
      </h2>
      <p className="text-slate-300 text-xs mb-8">
        Fill in your basic details below to connect directly with our expert consultation team.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-amber-300 uppercase mb-2">
              Full Name *
            </label>
            <Input
              id="fullName"
              type="text"
              required
              placeholder="e.g. Ramesh Kumar"
              className="bg-slate-900/80 border-amber-500/30 text-white placeholder:text-slate-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-amber-300 uppercase mb-2">
              Phone / WhatsApp Number *
            </label>
            <Input
              id="phone"
              type="tel"
              required
              placeholder="+91 9319506529"
              className="bg-slate-900/80 border-amber-500/30 text-white placeholder:text-slate-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-amber-300 uppercase mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              required
              placeholder="yourname@gmail.com"
              className="bg-slate-900/80 border-amber-500/30 text-white placeholder:text-slate-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-bold text-amber-300 uppercase mb-2">
              Selected Specialization *
            </label>
            <Select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="bg-slate-900 border-amber-500/30 text-white"
              required
            >
              <option value="Horoscope Analysis & Consultation" className="bg-slate-900 text-white">
                Horoscope Analysis & Consultation
              </option>
              <option value="Marriage & Relationship Compatibility" className="bg-slate-900 text-white">
                Marriage & Relationship Compatibility
              </option>
              <option value="Career & Business Growth" className="bg-slate-900 text-white">
                Career & Business Growth
              </option>
              <option value="Child Birth & Family Prospects" className="bg-slate-900 text-white">
                Child Birth & Family Prospects
              </option>
              <option value="Finance & Wealth Guidance" className="bg-slate-900 text-white">
                Finance & Wealth Guidance
              </option>
              <option value="Foreign Travels & Relocation" className="bg-slate-900 text-white">
                Foreign Travels & Relocation
              </option>
            </Select>
          </div>
        </div>

        <div>
          <label htmlFor="birthDetails" className="block text-xs font-bold text-amber-300 uppercase mb-2">
            Birth Details / Query Notes (Optional)
          </label>
          <Textarea
            id="birthDetails"
            rows={4}
            placeholder="Enter Date of Birth, Time, Place of Birth or specific questions..."
            className="bg-slate-900/80 border-amber-500/30 text-white placeholder:text-slate-500"
            value={birthDetails}
            onChange={(e) => setBirthDetails(e.target.value)}
          />
        </div>

        <Button type="submit" className="btn-gold-shimmer w-full py-6 text-base">
          <Send className="w-5 h-5 mr-2 text-slate-950" />
          <span>Confirm & Connect via WhatsApp</span>
        </Button>
      </form>
    </Card>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-cosmic-dark text-slate-100 min-h-screen">
      {/* PAGE BANNER */}
      <section className="py-16 border-b border-amber-500/15 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="default" className="mb-2 bg-purple-950/80 border-amber-500/30 text-amber-300">
            Direct Access
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Contact & Book <span className="gold-gradient-text">Consultation</span>
          </h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Schedule your personalized session with certified experts in Vedic Astrology & Bhrigu Nandi Nadi.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Info Left (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-3">Get In Touch</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Have questions or ready to book your consultation? Reach out via Phone, WhatsApp, or Email.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="glass-card-cosmic rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-amber-400 uppercase font-bold block">Phone / Helpline</span>
                    <a href="tel:+919319506529" className="text-base font-bold text-white hover:text-amber-300 transition-colors">
                      +91 9319506529
                    </a>
                  </div>
                </div>

                <div className="glass-card-cosmic rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-400 uppercase font-bold block">Instant WhatsApp</span>
                    <a
                      href="https://wa.me/919319506529?text=Hi%20Vedic%20Astrology,%20I%20would%20like%20to%20book%20a%20consultation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-300 hover:underline"
                    >
                      +91 9319506529 (Chat Now)
                    </a>
                  </div>
                </div>

                <div className="glass-card-cosmic rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-amber-400 text-xl shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-amber-400 uppercase font-bold block">Email Support</span>
                    <a
                      href="mailto:secretsofastrology2dh@gmail.com"
                      className="text-sm font-bold text-white hover:text-amber-300 transition-colors break-all"
                    >
                      secretsofastrology2dh@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="glass-card-cosmic rounded-2xl p-5 text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between font-bold text-white border-b border-amber-500/20 pb-2 mb-2">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" /> Consultation Hours
                  </span>
                  <span className="text-emerald-400">Available Daily</span>
                </div>
                <p className="flex justify-between">
                  <span>Monday – Saturday:</span> <strong>9:00 AM – 8:00 PM IST</strong>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span> <strong>10:00 AM – 5:00 PM IST</strong>
                </p>
              </div>
            </div>

            {/* Consultation Form Right (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<Card className="glass-card-cosmic p-8 text-center text-slate-400">Loading form...</Card>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
