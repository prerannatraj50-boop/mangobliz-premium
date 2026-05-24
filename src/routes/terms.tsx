import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | MangoBliz" },
      { name: "description", content: "Terms governing the use of MangoBliz services and pickup orders." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="container mx-auto px-5 lg:px-8 py-16 max-w-3xl">
      <h1 className="font-display text-5xl font-extrabold">Terms & Conditions</h1>
      <p className="text-muted-foreground mt-2">Last updated: 2025</p>
      <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
        <p>By placing an order with MangoBliz you agree to these terms.</p>
        <h2 className="font-display text-2xl font-bold pt-4">Orders & pricing</h2>
        <p>All prices are in INR and may change with season and availability. Final price is confirmed by our team before pickup.</p>
        <h2 className="font-display text-2xl font-bold pt-4">Pickup</h2>
        <p>Orders are pickup-only in Bangalore at our designated points. Unclaimed orders after 48 hours of confirmed slot may be cancelled.</p>
        <h2 className="font-display text-2xl font-bold pt-4">Quality & returns</h2>
        <p>Mangoes are inspected at pickup. Concerns must be reported within 24 hours for replacement or refund consideration.</p>
        <h2 className="font-display text-2xl font-bold pt-4">Payments</h2>
        <p>UPI or cash at pickup. Online prepayment may be requested for bulk orders.</p>
        <h2 className="font-display text-2xl font-bold pt-4">Liability</h2>
        <p>MangoBliz is not liable for indirect damages. Total liability is limited to the value of the affected order.</p>
        <h2 className="font-display text-2xl font-bold pt-4">Governing law</h2>
        <p>These terms are governed by the laws of India. Disputes are subject to Bangalore jurisdiction.</p>
      </div>
    </div>
  );
}
