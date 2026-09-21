import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/919319506529?text=Hi%20Nadiveda,%20I%20would%20like%20to%20book%20a%20consultation.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="hidden sm:inline text-sm font-semibold">Chat with Expert</span>
    </a>
  );
}
