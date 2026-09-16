"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "Kundali & Marriage Compatibility";

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(preselectedService);
  const [birthDetails, setBirthDetails] = useState("");

  useEffect(() => {
    if (searchParams.get("service")) {
      setService(searchParams.get("service")!);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textMessage = `Hi Cosmic Guidance, I would like to book a consultation.\n\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Service:* ${service}\n*Birth Details/Notes:* ${birthDetails || "N/A"}`;
    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/919999999999?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="p-8 sm:p-10 border-amber-500/30">
      <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">
        Schedule Consultation
      </h2>
      <p className="text-slate-600 text-xs mb-8">
        Fill in your basic details below to connect directly with our WhatsApp booking team.
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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-slate-800 uppercase mb-2">
              Mobile / WhatsApp Number *
            </label>
            <Input
              id="phone"
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-bold text-slate-800 uppercase mb-2">
            Select Service Required *
          </label>
          <Select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="Kundali & Marriage Compatibility">
              Kundali & Marriage Compatibility (Ashtakoot Milan)
            </option>
            <option value="Career, Business & Wealth Analysis">
              Career, Business & Wealth Analysis
            </option>
            <option value="100% Zero-Demolition Vastu Shastra">
              100% Zero-Demolition Vastu Shastra
            </option>
            <option value="Varshphal & Annual Horoscope Report">
              Varshphal & Annual Horoscope Report
            </option>
            <option value="Certified Gemstone & Energized Ratan Guidance">
              Certified Gemstone Guidance
            </option>
            <option value="Prashna Kundali (Horary Astrology for Urgent Questions)">
              Prashna Kundali (Immediate Guidance)
            </option>
          </Select>
        </div>

        <div>
          <label htmlFor="birthDetails" className="block text-xs font-bold text-slate-800 uppercase mb-2">
            Birth Details / Query Notes (Optional)
          </label>
          <Textarea
            id="birthDetails"
            rows={4}
            placeholder="Enter Date of Birth, Time, Place of Birth or specific question..."
            value={birthDetails}
            onChange={(e) => setBirthDetails(e.target.value)}
          />
        </div>

        <Button type="submit" variant="emerald" className="w-full text-base py-6">
          <Send className="w-5 h-5 mr-2" />
          <span>Confirm & Book via WhatsApp</span>
        </Button>
      </form>
    </Card>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* PAGE BANNER */}
      <section className="bg-light-pattern py-16 border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="default" className="mb-2">
            Direct Access
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Contact & Book <span className="gold-gradient-text">Consultation</span>
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Schedule your 1-on-1 session with Acharya Rajesh Sharma for Kundali analysis or Vastu evaluation.
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Info Left (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">Get In Touch</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Have questions or ready to book your consultation? Reach out via Phone, WhatsApp, or Email.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="glass-card-light rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 text-xl shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-semibold block">Phone / Helpline</span>
                    <a href="tel:+919999999999" className="text-base font-bold text-slate-900 hover:text-gold-500 transition-colors">
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                <div className="glass-card-light rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 text-xl shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-semibold block">Instant WhatsApp</span>
                    <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-emerald-700 hover:underline">
                      +91 99999 99999 (Chat Now)
                    </a>
                  </div>
                </div>

                <div className="glass-card-light rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 text-xl shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-semibold block">Email Support</span>
                    <a href="mailto:info@cosmicguidance.com" className="text-base font-bold text-slate-900 hover:text-gold-500 transition-colors">
                      info@cosmicguidance.com
                    </a>
                  </div>
                </div>

                <div className="glass-card-light rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 text-xl shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-semibold block">Office Location</span>
                    <span className="text-sm font-bold text-slate-900 block">Vedic Chambers, Sector 18, New Delhi, India</span>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-amber-500/10 rounded-2xl p-5 border border-amber-500/20 text-xs text-slate-700 space-y-2">
                <div className="flex items-center justify-between font-bold text-slate-900 border-b border-amber-500/20 pb-2 mb-2">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600" /> Consultation Timing
                  </span>
                  <span className="text-emerald-700">Online & In-Person</span>
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
              <Suspense fallback={<Card className="p-8 text-center text-slate-500">Loading form...</Card>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

