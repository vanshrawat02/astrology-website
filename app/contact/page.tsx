"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MessageCircle, Clock, Send, ShieldCheck, CheckCircle2, Youtube, Calendar, MapPin } from "lucide-react";
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
  const [dobDay, setDobDay] = useState("02");
  const [dobMonth, setDobMonth] = useState("09");
  const [dobYear, setDobYear] = useState("2004");

  const [tobHour, setTobHour] = useState("14");
  const [tobMinute, setTobMinute] = useState("30");

  const [pob, setPob] = useState("");
  const [queries, setQueries] = useState("");

  useEffect(() => {
    if (searchParams.get("service")) {
      setService(searchParams.get("service")!);
    }
  }, [searchParams]);

  const getFormattedDobInfo = (d: string, m: string, y: string) => {
    if (!d || !m || !y) return null;
    const yearNum = parseInt(y, 10);
    const monthNum = parseInt(m, 10) - 1;
    const dayNum = parseInt(d, 10);
    if (isNaN(yearNum) || isNaN(monthNum) || isNaN(dayNum)) return null;
    const dateObj = new Date(yearNum, monthNum, dayNum);
    if (dateObj.getMonth() !== monthNum) return null;
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const weekday = dateObj.toLocaleDateString("en-US", { weekday: "long" });
    const formattedDay = dayNum.toString().padStart(2, "0");
    const monthName = monthNames[monthNum];
    return {
      formattedDate: `${formattedDay} ${monthName} ${yearNum}`,
      weekday: weekday,
      fullText: `${formattedDay} ${monthName} ${yearNum} (${weekday})`,
    };
  };

  const getFormattedTobInfo = (h: string, m: string) => {
    if (!h || !m) return null;
    const hourNum = parseInt(h, 10);
    const minNum = parseInt(m, 10);
    if (isNaN(hourNum) || isNaN(minNum)) return null;
    const formattedHour = hourNum.toString().padStart(2, "0");
    const formattedMin = minNum.toString().padStart(2, "0");
    const period = hourNum >= 12 ? "PM" : "AM";
    const hour12 = hourNum % 12 === 0 ? 12 : hourNum % 12;
    return {
      time24: `${formattedHour}:${formattedMin}`,
      time12: `${hour12}:${formattedMin} ${period}`,
      fullText: `${formattedHour}:${formattedMin} (${hour12}:${formattedMin} ${period})`,
    };
  };

  const dobInfo = getFormattedDobInfo(dobDay, dobMonth, dobYear);
  const tobInfo = getFormattedTobInfo(tobHour, tobMinute);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textMessage = `*New Consultation Request*\n\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Email:* ${email}\n*Specialization:* ${service}\n*Date of Birth:* ${dobInfo ? dobInfo.fullText : "N/A"}\n*Time of Birth (24h Clock):* ${tobInfo ? tobInfo.fullText : "N/A"}\n*Place of Birth:* ${pob || "N/A"}\n*Specific Queries:* ${queries || "N/A"}`;
    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/919319506529?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="glass-card-light p-4 sm:p-10 border border-amber-500/30 shadow-xl w-full max-w-full overflow-hidden">
      <div className="w-full min-w-0">
        <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-tight">
          Schedule Your Consultation
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
          Fill in your basic details below to connect directly with certified expert <strong>Mr. Deepak Mehta</strong>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full min-w-0">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 min-w-0">
            <div className="min-w-0">
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-800 uppercase mb-1.5">
                Full Name *
              </label>
              <Input
                id="fullName"
                type="text"
                required
                placeholder="e.g. Ramesh Kumar"
                className="bg-white border-amber-500/30 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm w-full min-w-0"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="min-w-0">
              <label htmlFor="phone" className="block text-xs font-bold text-slate-800 uppercase mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="+91 9319506529"
                className="bg-white border-amber-500/30 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm w-full min-w-0"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 min-w-0">
            <div className="min-w-0">
              <label htmlFor="email" className="block text-xs font-bold text-slate-800 uppercase mb-1.5">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                required
                placeholder="yourname@gmail.com"
                className="bg-white border-amber-500/30 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm w-full min-w-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="min-w-0">
              <label htmlFor="service" className="block text-xs font-bold text-slate-800 uppercase mb-1.5">
                Select Specialization *
              </label>
              <Select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="bg-white border-amber-500/30 text-slate-900 text-xs sm:text-sm w-full min-w-0 truncate"
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

          {/* DATE OF BIRTH SELECTOR (SMOOTH DAY / MONTH / YEAR) */}
          <div className="min-w-0 p-4 rounded-2xl bg-amber-50/50 border border-amber-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>Date of Birth *</span>
              </label>
              {dobInfo && (
                <Badge className="bg-amber-100 border border-amber-400 text-amber-900 text-[11px] font-bold">
                  {dobInfo.weekday}
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {/* DAY */}
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Day</span>
                <Select
                  value={dobDay}
                  onChange={(e) => setDobDay(e.target.value)}
                  className="bg-white border-amber-500/30 text-slate-900 text-xs sm:text-sm font-semibold w-full"
                >
                  {Array.from({ length: 31 }, (_, i) => {
                    const val = (i + 1).toString().padStart(2, "0");
                    return <option key={val} value={val}>{val}</option>;
                  })}
                </Select>
              </div>

              {/* MONTH */}
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Month</span>
                <Select
                  value={dobMonth}
                  onChange={(e) => setDobMonth(e.target.value)}
                  className="bg-white border-amber-500/30 text-slate-900 text-xs sm:text-sm font-semibold w-full truncate"
                >
                  <option value="01">Jan (01)</option>
                  <option value="02">Feb (02)</option>
                  <option value="03">Mar (03)</option>
                  <option value="04">Apr (04)</option>
                  <option value="05">May (05)</option>
                  <option value="06">Jun (06)</option>
                  <option value="07">Jul (07)</option>
                  <option value="08">Aug (08)</option>
                  <option value="09">Sep (09)</option>
                  <option value="10">Oct (10)</option>
                  <option value="11">Nov (11)</option>
                  <option value="12">Dec (12)</option>
                </Select>
              </div>

              {/* YEAR */}
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Year</span>
                <Select
                  value={dobYear}
                  onChange={(e) => setDobYear(e.target.value)}
                  className="bg-white border-amber-500/30 text-slate-900 text-xs sm:text-sm font-semibold w-full"
                >
                  {Array.from({ length: 87 }, (_, i) => {
                    const yr = (2026 - i).toString();
                    return <option key={yr} value={yr}>{yr}</option>;
                  })}
                </Select>
              </div>
            </div>

            {dobInfo ? (
              <div className="p-2.5 rounded-xl bg-amber-100/70 border border-amber-500/30 text-amber-900 text-xs font-bold flex items-center justify-between">
                <span>Selected Date: {dobInfo.formattedDate}</span>
                <span className="px-2.5 py-0.5 rounded-md bg-amber-700 text-white text-[11px] font-extrabold">{dobInfo.weekday}</span>
              </div>
            ) : (
              <span className="text-[11px] text-slate-500 block">Select Day, Month, and Year to view weekday</span>
            )}
          </div>

          {/* TIME OF BIRTH SELECTOR (24-HOUR CLOCK) */}
          <div className="min-w-0 p-4 rounded-2xl bg-amber-50/50 border border-amber-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Time of Birth (24-Hour Clock) *</span>
              </label>
              {tobInfo && (
                <Badge className="bg-amber-100 border border-amber-400 text-amber-900 text-[11px] font-bold">
                  {tobInfo.time12}
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* HOUR */}
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Hour (00 - 23)</span>
                <Select
                  value={tobHour}
                  onChange={(e) => setTobHour(e.target.value)}
                  className="bg-white border-amber-500/30 text-slate-900 text-xs sm:text-sm font-semibold w-full"
                >
                  {Array.from({ length: 24 }, (_, i) => {
                    const val = i.toString().padStart(2, "0");
                    const period = i >= 12 ? "PM" : "AM";
                    const h12 = i % 12 === 0 ? 12 : i % 12;
                    return <option key={val} value={val}>{val}:00 ({h12} {period})</option>;
                  })}
                </Select>
              </div>

              {/* MINUTE */}
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Minute (00 - 59)</span>
                <Select
                  value={tobMinute}
                  onChange={(e) => setTobMinute(e.target.value)}
                  className="bg-white border-amber-500/30 text-slate-900 text-xs sm:text-sm font-semibold w-full"
                >
                  {Array.from({ length: 60 }, (_, i) => {
                    const val = i.toString().padStart(2, "0");
                    return <option key={val} value={val}>{val}</option>;
                  })}
                </Select>
              </div>
            </div>

            {tobInfo && (
              <div className="p-2.5 rounded-xl bg-amber-100/70 border border-amber-500/30 text-amber-900 text-xs font-bold flex items-center justify-between">
                <span>24-Hour Time: {tobInfo.time24}</span>
                <span className="px-2.5 py-0.5 rounded-md bg-amber-700 text-white text-[11px] font-extrabold">{tobInfo.time12}</span>
              </div>
            )}
          </div>

          {/* PLACE OF BIRTH */}
          <div className="min-w-0">
            <label htmlFor="pob" className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Place of Birth (City, State / Country) *</span>
            </label>
            <Input
              id="pob"
              type="text"
              required
              placeholder="e.g. New Delhi, Delhi, India"
              className="bg-white border-amber-500/30 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm w-full min-w-0"
              value={pob}
              onChange={(e) => setPob(e.target.value)}
            />
          </div>

          {/* SPECIFIC QUERIES */}
          <div className="min-w-0">
            <label htmlFor="queries" className="block text-xs font-bold text-slate-800 uppercase mb-1.5">
              Specific Queries & Life Concerns (Optional)
            </label>
            <Textarea
              id="queries"
              rows={3}
              placeholder="Mention any specific concerns (e.g., Marriage timing, Career growth, Health, Wealth remedies)..."
              className="bg-white border-amber-500/30 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm w-full min-w-0"
              value={queries}
              onChange={(e) => setQueries(e.target.value)}
            />
          </div>

          <Button type="submit" size="lg" className="btn-gold-shimmer w-full text-xs sm:text-base font-bold py-5 sm:py-6 shadow-xl">
            <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 shrink-0" />
            <span className="truncate">Send Booking Request on WhatsApp</span>
          </Button>

          <p className="text-[11px] sm:text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Your information is strictly private and 100% confidential.</span>
          </p>
        </form>
      </div>
    </Card>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* PAGE HEADER */}
      <section className="bg-light-pattern py-8 sm:py-16 border-b border-amber-500/10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <Badge variant="default" className="mb-2.5 py-1 px-3.5 text-[10px] sm:text-xs bg-amber-500/10 border-amber-500/30 text-amber-900 font-bold uppercase tracking-wider">
            1-on-1 Consultation
          </Badge>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2.5 leading-tight tracking-tight">
            Contact & <span className="gold-gradient-text">Book Appointment</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Schedule your personalized Vedic & Bhrigu Nandi Nadi astrological consultation via Audio/Video Call, WhatsApp, or Email.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-20 lg:py-24 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
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
                          href="https://wa.me/919319506529?text=Hi%20Nadiveda,%20I%20would%20like%20to%20book%20a%20consultation."
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

                {/* YouTube Channel Card */}
                <div className="glass-card-light rounded-2xl p-6 border border-amber-500/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-600 shrink-0">
                      <Youtube className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs uppercase font-bold text-amber-700 tracking-wider block mb-1">
                        YouTube Channel
                      </span>
                      <a
                        href="https://www.youtube.com/@Nadi-Veda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-extrabold text-slate-900 hover:text-red-600 transition-colors block break-all mb-3 opacity-100"
                      >
                        @Nadi-Veda
                      </a>
                      <Button size="sm" variant="outline" className="border-red-500/40 text-red-700 hover:bg-red-500/10 text-xs" asChild>
                        <a
                          href="https://www.youtube.com/@Nadi-Veda"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5"
                        >
                          <Youtube className="w-3.5 h-3.5 text-red-600" />
                          <span>Subscribe / Watch Videos</span>
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
