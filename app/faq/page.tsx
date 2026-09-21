import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FAQPage() {
  const faqs = [
    {
      question: "What details are required for an Astrology Consultation?",
      answer:
        "For an accurate Janma Kundali reading, we require your Date of Birth, Exact Time of Birth, and Place of Birth (City/State). If exact birth time is missing, Prashna Kundali (Horary Astrology) can be utilized.",
    },
    {
      question: "How does Zero-Demolition Vastu Shastra work?",
      answer:
        "Zero-Demolition Vastu addresses spatial imbalance through elemental corrections. We use metal elemental strips (brass, copper, stainless steel), energy pyramids, color balancing, and directional object shifts without demolishing any walls or structures.",
    },
    {
      question: "Can I get a consultation if I don't know my exact birth time?",
      answer:
        "Yes! Through Prashna Kundali (Horary Astrology), Acharya Rajesh Sharma casts a chart based on the precise time and location your query is asked. We also offer Birth Time Rectification (BTR) based on key life events.",
    },
    {
      question: "How are online Audio/Video consultations conducted?",
      answer:
        "Once your appointment is confirmed on WhatsApp, we schedule a 1-on-1 session via WhatsApp Video Call, Zoom, or Direct Phone Call at your convenience. You can ask unlimited clarifying questions during your session.",
    },
    {
      question: "Will I receive a written PDF report after the session?",
      answer:
        "Yes. Within 24 hours of your consultation, you will receive a comprehensive written PDF summary outlining planetary Dasha periods, key predictions, and step-by-step remedies.",
    },
    {
      question: "How are recommended gemstones selected and energized?",
      answer:
        "Gemstones are recommended strictly based on your Lagna (Ascendant) and Yogakaraka planets—never for unfavorable houses. All recommended gemstones are 100% natural, lab-certified, and energized with Vedic mantras (Pran Pratishtha) before wearing.",
    },
    {
      question: "Is my birth data and discussion kept strictly confidential?",
      answer:
        "Absolutely 100%. We adhere to strict client privacy guidelines. Your birth chart, personal life details, and consultation recordings are never shared or sold.",
    },
    {
      question: "How do I pay and book my consultation slot?",
      answer:
        "You can book directly by filling the contact form on our website or sending a message on WhatsApp (+91 9319506529). We support UPI, Bank Transfer, GPay, PhonePe, and Credit/Debit Cards.",
    },
  ];

  return (
    <>
      {/* PAGE BANNER */}
      <section className="bg-light-pattern py-16 border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="default" className="mb-2">
            Help & Clarity
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Everything you need to know about our Vedic Astrology & Vastu Shastra consultation process.
          </p>
        </div>
      </section>

      {/* ACCORDION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* STILL HAVE QUESTIONS */}
          <Card className="mt-16 text-center p-8 sm:p-12 border-amber-500/30">
            <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              Our support team is available on WhatsApp to assist you with booking, queries, and consultation details.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="emerald" asChild>
                <a
                  href="https://wa.me/919999999999?text=Hi%20Cosmic%20Guidance,%20I%20have%20a%20question%20before%20booking."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Contact Page</span>
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

