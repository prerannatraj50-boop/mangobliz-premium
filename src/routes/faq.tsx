import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Mango Pickup, Orders & Quality | MangoBliz" },
      { name: "description", content: "Answers to common questions about mango pickup in Bangalore, payments, ripening and quality." },
      { property: "og:title", content: "MangoBliz FAQ" },
      { property: "og:description", content: "Pickup, orders, varieties and quality answers." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQ,
});

const faqs = [
  { q: "Do you deliver outside Bangalore?", a: "Currently we're pickup-only in Bangalore. We're expanding across India soon — join our list to be notified." },
  { q: "How do I place an order?", a: "Browse mangoes, request an order, or message us on WhatsApp. Our team confirms quantity, price and a Bangalore pickup time." },
  { q: "Are your mangoes naturally ripened?", a: "Yes — every mango is hay-ripened or sun-ripened. We never use calcium carbide or other chemical ripeners." },
  { q: "What are your pickup points?", a: "We have rotating pickup points in Indiranagar, Koramangala, HSR Layout and Whitefield. Your confirmation message will share the nearest one." },
  { q: "How do I pay?", a: "UPI or cash at pickup. We'll share UPI details once your order is confirmed." },
  { q: "What if a mango is bad?", a: "Tell us within 24 hours of pickup. We'll replace it on your next order or refund — no questions." },
  { q: "How long do mangoes stay fresh?", a: "Ripe mangoes last 3–4 days at room temperature, 5–7 in the fridge. Unripe fruit stays a week in a paper bag." },
  { q: "Do you do bulk / corporate orders?", a: "Yes — we love corporate gifting boxes. Drop us a WhatsApp with the quantity and we'll quote." },
];

function FAQ() {
  return (
    <div>
      <section className="bg-gradient-tropical py-20 text-center">
        <div className="container mx-auto px-5">
          <h1 className="font-display text-5xl md:text-6xl font-extrabold">Frequently asked <span className="text-gradient-sunset">questions</span></h1>
          <p className="mt-4 max-w-xl mx-auto text-foreground/75">Everything you need to know about ordering mangoes with us.</p>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-8 py-16 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-soft">
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/75">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
