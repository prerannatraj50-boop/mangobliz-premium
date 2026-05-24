import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919000000000?text=Hi%20MangoBliz%2C%20I%27d%20like%20to%20order%20mangoes."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-card hover:scale-105 transition-transform"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
