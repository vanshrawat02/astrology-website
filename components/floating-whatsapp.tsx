import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/919999999999?text=Hi%20Cosmic%20Guidance,%20I%20want%20to%20book%20a%20consultation.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-whatsapp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm font-semibold">Chat with Expert</span>
    </a>
  );
}

