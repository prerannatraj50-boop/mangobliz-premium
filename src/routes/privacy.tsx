import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | MangoBliz" },
      { name: "description", content: "How MangoBliz collects, uses and protects your information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="container mx-auto px-5 lg:px-8 py-16 max-w-3xl prose-styles">
      <h1 className="font-display text-5xl font-extrabold">Privacy Policy</h1>
      <p className="text-muted-foreground mt-2">Last updated: 2025</p>
      <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
        <p>MangoBliz ("we", "us") respects your privacy. This policy explains what we collect and how we use it.</p>
        <h2 className="font-display text-2xl font-bold pt-4">Information we collect</h2>
        <p>Name, contact number, email and pickup preferences you share while placing an order or contacting us.</p>
        <h2 className="font-display text-2xl font-bold pt-4">How we use it</h2>
        <p>To confirm your order, coordinate pickup, share quality updates, and improve our service. We never sell your data.</p>
        <h2 className="font-display text-2xl font-bold pt-4">Cookies</h2>
        <p>We use essential cookies for site functionality and basic analytics. You can disable cookies in your browser.</p>
        <h2 className="font-display text-2xl font-bold pt-4">Third parties</h2>
        <p>We use payment, messaging and analytics tools that are GDPR/India IT-Act compliant. Your data stays minimal and protected.</p>
        <h2 className="font-display text-2xl font-bold pt-4">Contact</h2>
        <p>Email privacy@mangobliz.com for any data request, correction or deletion.</p>
      </div>
    </div>
  );
}
