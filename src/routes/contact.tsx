import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MangoBliz — Bangalore Mango Pickup" },
      { name: "description", content: "Get in touch to place a mango order, ask about varieties, or arrange a Bangalore pickup." },
      { property: "og:title", content: "Contact MangoBliz" },
      { property: "og:description", content: "Reach our team — order, pickup and inquiries." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="bg-gradient-tropical py-20 text-center">
        <div className="container mx-auto px-5">
          <h1 className="font-display text-5xl md:text-6xl font-extrabold">Let's <span className="text-gradient-sunset">talk mangoes</span></h1>
          <p className="mt-4 max-w-xl mx-auto text-foreground/75">Have a question or want to place an order? We're a WhatsApp away.</p>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Thanks! We'll reach out shortly.");
            (e.target as HTMLFormElement).reset();
          }}
          className="rounded-3xl bg-card shadow-card p-8 space-y-4"
        >
          <h2 className="font-display text-2xl font-bold">Send us a message</h2>
          <input required name="name" placeholder="Your name" className="w-full rounded-2xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
          <input required type="email" name="email" placeholder="Email address" className="w-full rounded-2xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
          <input name="phone" placeholder="Phone (optional)" className="w-full rounded-2xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
          <textarea required name="message" rows={5} placeholder="Which mangoes are you interested in?" className="w-full rounded-2xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
          <button type="submit" className="w-full rounded-full bg-gradient-sunset px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:scale-[1.02] transition-transform">
            {sent ? "Message sent ✓" : "Send message"}
          </button>
        </form>

        <div className="space-y-5">
          <a href="https://wa.me/919000000000" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-3xl bg-[#25D366] text-white p-6 shadow-soft hover:scale-[1.01] transition-transform">
            <div>
              <div className="font-display text-xl font-bold">WhatsApp us</div>
              <div className="text-sm text-white/90">Fastest way to order</div>
            </div>
            <MessageCircle size={28} />
          </a>

          <div className="rounded-3xl bg-card shadow-soft p-6 space-y-3">
            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-full bg-[var(--cream)] flex items-center justify-center text-[var(--orange-deep)]"><Phone size={18} /></div><div><div className="font-semibold">+91 90000 00000</div><div className="text-xs text-muted-foreground">Mon–Sat · 9am–7pm</div></div></div>
            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-full bg-[var(--cream)] flex items-center justify-center text-[var(--orange-deep)]"><Mail size={18} /></div><div><div className="font-semibold">hello@mangobliz.com</div><div className="text-xs text-muted-foreground">Replies within a day</div></div></div>
            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-full bg-[var(--cream)] flex items-center justify-center text-[var(--orange-deep)]"><MapPin size={18} /></div><div><div className="font-semibold">Indiranagar, Bangalore</div><div className="text-xs text-muted-foreground">Pickup-only currently</div></div></div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-soft aspect-[16/10] bg-muted relative">
            <iframe
              title="Bangalore map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.55%2C12.90%2C77.70%2C13.00&layer=mapnik"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>

          <div className="flex gap-3">
            <a aria-label="Instagram" href="#" className="h-11 w-11 rounded-full bg-card shadow-soft flex items-center justify-center"><Instagram size={18} /></a>
            <a aria-label="Facebook" href="#" className="h-11 w-11 rounded-full bg-card shadow-soft flex items-center justify-center"><Facebook size={18} /></a>
            <a aria-label="Twitter" href="#" className="h-11 w-11 rounded-full bg-card shadow-soft flex items-center justify-center"><Twitter size={18} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
