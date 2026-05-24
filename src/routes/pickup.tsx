import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, ShieldCheck, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/pickup")({
  head: () => ({
    meta: [
      { title: "Mango Pickup in Bangalore — How It Works | MangoBliz" },
      { name: "description", content: "Mango Pickup Bangalore — locations, hours and how to collect your naturally ripened mangoes." },
      { property: "og:title", content: "Bangalore Mango Pickup" },
      { property: "og:description", content: "Pickup points, hours and the full process." },
      { property: "og:url", content: "/pickup" },
    ],
    links: [{ rel: "canonical", href: "/pickup" }],
  }),
  component: Pickup,
});

function Pickup() {
  return (
    <div>
      <section className="bg-gradient-tropical py-20 text-center">
        <div className="container mx-auto px-5">
          <h1 className="font-display text-5xl md:text-6xl font-extrabold">Bangalore <span className="text-gradient-sunset">Pickup</span></h1>
          <p className="mt-4 max-w-xl mx-auto text-foreground/75">No delivery hassle. Fresh-from-the-crate pickup at convenient points across Bangalore.</p>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-3 gap-6">
        {[
          { i: MapPin, t: "Pickup locations", d: "Indiranagar · Koramangala · HSR Layout · Whitefield" },
          { i: Clock, t: "Pickup hours", d: "Mon–Sat · 10am – 7pm. Sunday slots on request." },
          { i: ShieldCheck, t: "Quality at pickup", d: "Inspect every fruit before you leave. Not happy? Don't take it." },
        ].map((c) => (
          <div key={c.t} className="rounded-3xl bg-card p-7 shadow-soft">
            <div className="h-12 w-12 rounded-2xl bg-gradient-sunset text-white flex items-center justify-center shadow-soft"><c.i size={22} /></div>
            <h3 className="font-display text-xl font-bold mt-4">{c.t}</h3>
            <p className="text-sm text-muted-foreground mt-2">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-5 lg:px-8 pb-20">
        <div className="rounded-3xl bg-[var(--cream)] p-8 md:p-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold">The pickup flow</h2>
          <ol className="mt-6 space-y-4">
            {[
              "Place your order request from our Mangoes page or WhatsApp.",
              "We confirm variety, quantity and price — and lock a pickup slot.",
              "On pickup day, we share the nearest pickup point + your slot.",
              "Walk in, inspect, take your mangoes home. UPI or cash.",
            ].map((s, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-sunset text-white font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <span className="text-foreground/80 pt-1">{s}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="rounded-full bg-gradient-sunset px-6 py-3 text-sm font-semibold text-white shadow-soft">Shop mangoes</Link>
            <a href="https://wa.me/919000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold"><MessageCircle size={16} /> WhatsApp us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
