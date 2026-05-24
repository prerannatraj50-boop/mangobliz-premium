import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MangoBliz — Bangalore's Premium Mango Brand" },
      { name: "description", content: "MangoBliz is a Bangalore-based premium mango brand bringing naturally ripened mangoes from India's best orchards." },
      { property: "og:title", content: "About MangoBliz" },
      { property: "og:description", content: "Our story — from orchard to Bangalore." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="bg-gradient-tropical py-20 text-center">
        <div className="container mx-auto px-5">
          <h1 className="font-display text-5xl md:text-6xl font-extrabold">From orchard to <span className="text-gradient-sunset">your home</span></h1>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/75">
            We're a small Bangalore team obsessed with one thing — finding the best mangoes in India and getting them to you the way nature intended.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl font-bold">Our story</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            MangoBliz began as a simple promise to a grandmother — that the Alphonsos arriving in our city would taste the way they did in 1985.
            We work directly with farmers across Ratnagiri, Junagadh, Malihabad and Karnataka. No middlemen. No chemicals. No shortcuts.
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Every mango is hay-ripened, hand-inspected, and sent to a Bangalore pickup point near you. That's the entire recipe.
          </p>
        </div>
        <div className="rounded-[2rem] aspect-square bg-gradient-sunset shadow-card" />
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="container mx-auto px-5 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { n: "30+", t: "Partner farmers" },
            { n: "20+", t: "Mango varieties" },
            { n: "5000+", t: "Happy Bangalore homes" },
          ].map((s) => (
            <div key={s.t} className="rounded-3xl bg-white p-8 text-center shadow-soft">
              <div className="font-display text-5xl font-extrabold text-gradient-sunset">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
