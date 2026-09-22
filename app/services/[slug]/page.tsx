import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Phone,
  MessageCircle,
  Calendar,
  Telescope,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services, getService } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

const whatsappUrl =
  "https://wa.me/919319506529?text=Hi%20Nadiveda,%20I%20would%20like%20to%20book%20a%20consultation.";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.title} | Nadiveda`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const Icon = service.icon;
  const index = services.indexOf(service);
  const bookHref = `/contact?service=${encodeURIComponent(service.title)}`;
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* HERO */}
      <section className="bg-light-pattern py-10 sm:py-16 border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-8">
            <Link href="/" className="hover:text-amber-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-amber-700 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-amber-800 truncate">{service.shortTitle}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-600 via-amber-500 to-amber-400 flex items-center justify-center text-white shadow-md shrink-0">
                <Icon className="w-7 h-7" />
              </div>
              <Badge variant="default" className="py-1 px-3.5 text-[10px] sm:text-xs">
                Service {String(index + 1).padStart(2, "0")} · {service.tagline}
              </Badge>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed mb-8">{service.summary}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="btn-gold-shimmer" asChild>
                <Link href={bookHref} className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5 text-white" />
                  <span>Book Consultation — ₹1,500</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-amber-500/40 text-slate-800 hover:bg-amber-500/10" asChild>
                <a href="tel:+919319506529" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span>Call +91 9319506529</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-14 sm:py-20 bg-white border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Explanation */}
            <div className="lg:col-span-7">
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
                About This <span className="gold-gradient-text">Consultation</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                {service.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="rounded-2xl border border-amber-500/25 bg-amber-50/40 p-5 sm:p-6">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-600" />
                  Questions This Consultation Answers
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {service.questions.map((q, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Analysis & booking */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="glass-card-light rounded-2xl p-5 sm:p-6">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-4 flex items-center gap-2">
                  <Telescope className="w-5 h-5 text-amber-600" />
                  What We Analyse in Your Chart
                </h3>
                <dl className="divide-y divide-amber-500/15">
                  {service.analysis.map((item) => (
                    <div key={item.label} className="py-2.5 first:pt-0 last:pb-0">
                      <dt className="text-sm font-bold text-slate-900">{item.label}</dt>
                      <dd className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
              </Card>

              <div className="rounded-2xl p-5 sm:p-6 border-2 border-amber-500/30 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/50 shadow-lg">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-4">What You Receive</h3>
                <ul className="space-y-2.5 mb-6">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="font-heading text-2xl font-extrabold text-amber-950">₹1,500</span>
                  <span className="text-xs font-bold text-slate-600">INR / session</span>
                </div>
                <p className="flex items-center gap-1.5 text-xs text-slate-500 mb-5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  100% confidential 1-on-1 session
                </p>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                  <Button className="btn-gold-shimmer flex-1" asChild>
                    <Link href={bookHref} className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 text-white" />
                      <span>Book This Service</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1 border-amber-500/40 text-slate-800 hover:bg-amber-500/10" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Ask on WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-14 sm:py-20 bg-light-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <Badge variant="default" className="mb-3">
                Explore More
              </Badge>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                Other <span className="gold-gradient-text">Services</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gold-600 font-bold text-sm hover:gap-3 transition-all"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherServices.map((other) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={other.id}
                  href={`/services/${other.id}`}
                  className="group glass-card-light rounded-2xl p-5 flex flex-col bg-white transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gold-600 to-amber-500 flex items-center justify-center text-white shadow-md mb-3">
                    <OtherIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">
                    {other.shortTitle}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-3">{other.tagline}</p>
                  <span className="inline-flex items-center gap-1.5 text-gold-600 font-bold text-xs">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
