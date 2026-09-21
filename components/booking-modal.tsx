"use client";

import { CheckCircle2, MessageCircle, X, Sparkles, Calendar, Clock, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    bookingId: string;
    clientName: string;
    topic: string;
    dob?: string;
    tob?: string;
    pob?: string;
    preferredDate?: string;
    timeSlot?: string;
    whatsappUrl: string;
  } | null;
}

export function BookingModal({ isOpen, onClose, bookingData }: BookingModalProps) {
  if (!isOpen || !bookingData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-amber-500/30 relative overflow-hidden text-slate-900">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Title */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block mb-1">
            Booking Received
          </span>
          <h3 className="font-heading text-2xl font-bold text-slate-900">
            Consultation Scheduled!
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Reference ID: <strong className="text-slate-800">#{bookingData.bookingId}</strong>
          </p>
        </div>

        {/* Pricing Badge */}
        <div className="mb-6 p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-100 to-amber-500/15 border border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
            <Tag className="w-4 h-4 text-amber-600" />
            <span>Consultation Fee:</span>
          </div>
          <span className="text-base font-extrabold text-amber-900 bg-amber-200/80 px-3 py-1 rounded-full border border-amber-400/40">
            ₹1,500 INR
          </span>
        </div>

        {/* Booking Summary */}
        <div className="space-y-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-6">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Client Name:</span>
            <span className="font-bold text-slate-900">{bookingData.clientName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Topic:</span>
            <span className="font-bold text-gold-600">{bookingData.topic}</span>
          </div>
          {(bookingData.dob || bookingData.tob || bookingData.pob) && (
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-600" /> Birth Details:
              </span>
              <span className="font-medium text-slate-800">
                {bookingData.dob || "N/A"} | {bookingData.tob || "N/A"} ({bookingData.pob || "N/A"})
              </span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-slate-500 flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-600" /> Preferred Slot:
            </span>
            <span className="font-medium text-slate-800">
              {bookingData.preferredDate || "Earliest"} ({bookingData.timeSlot || "Flexible"})
            </span>
          </div>
        </div>

        {/* WhatsApp Instant Redirect CTA */}
        <div className="space-y-3">
          <Button variant="emerald" size="lg" className="w-full text-sm font-bold py-6 shadow-lg" asChild>
            <a href={bookingData.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Confirm Slot on WhatsApp (+91 9319506529)</span>
            </a>
          </Button>

          <p className="text-[11px] text-center text-slate-500">
            A confirmation copy has also been logged for <strong className="text-slate-700">secretsofastrology2dh@gmail.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

