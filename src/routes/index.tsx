import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mangoes.jpg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Leaf, Truck, Heart, ShieldCheck, Quote, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MangoBliz — Fresh Mangoes. Real Taste. | Bangalore" },
      {
        name: "description",
        content:
          "Premium Alphonso, Kesar & 20+ mango varieties. Naturally ripened, hand-picked. Pickup in Bangalore.",
      },
      { property: "og:title", content: "MangoBliz — Fresh Mangoes. Real Taste." },
      { property: "og:description", content: "Premium mangoes, naturally ripened. Pickup in Bangalore." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 4);
  const seasonal = products.filter((p) => p.category === "Indian").slice(0, 6);
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-tropical">
        <div className="container mx-auto px-5 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-[var(--leaf)] shadow-soft">
              <Leaf size={14} /> Naturally ripened · Pickup in Bangalore
            </span>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-extrabold leading-[1.05]">
              Fresh Mangoes.
              <br />
              <span className="text-gradient-sunset">Real Taste.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-foreground/75">
              From Ratnagiri orchards to Bangalore homes — 20+ premium mango varieties,
              hand-picked at peak ripeness and ready for pickup.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-gradient-sunset px-7 py-3.5 text-sm font-semibold text-white shadow-soft hover:scale-105 transition-transform"
              >
                Shop Mangoes
              </Link>
              <Link
                to="/pickup"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-white/70 backdrop-blur px-7 py-3.5 text-sm font-semibold hover:bg-white"
              >
                How pickup works
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div><span className="font-display text-2xl font-bold text-foreground">20+</span><br />Varieties</div>
              <div><span className="font-display text-2xl font-bold text-foreground">100%</span><br />Naturally ripened</div>
              <div><span className="font-display text-2xl font-bold text-foreground">5★</span><br />Loved in Bangalore</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-sunset rounded-[3rem] blur-3xl opacity-30" />
            <img
              src={heroImg}
              alt="Fresh ripe Alphonso mangoes with leaves"
              width={1600}
              height={1200}
              className="relative rounded-[2rem] shadow-card w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto px-5 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-sm font-semibold text-[var(--orange-deep)] uppercase tracking-wider">Bestsellers</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Featured Mangoes</h2>
          </div>
          <Link to="/products" className="hidden sm:inline text-sm font-semibold underline underline-offset-4">View all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* Why */}
      <section className="bg-[var(--cream)] py-20">
        <div className="container mx-auto px-5 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center">Why choose <span className="text-gradient-sunset">MangoBliz</span></h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: "Naturally ripened", desc: "Hay-ripened, never chemically treated. Just sun, time and care." },
              { icon: Heart, title: "Hand-picked", desc: "Farmers handpick each fruit at peak ripeness for maximum flavour." },
              { icon: Truck, title: "Bangalore pickup", desc: "Convenient pickup points across the city. Cold-chain protected." },
              { icon: ShieldCheck, title: "Quality promise", desc: "Not happy? We'll replace it. Real mangoes or your money back." },
            ].map((f) => (
              <div key={f.title} className="rounded-3xl bg-white p-7 shadow-soft hover:-translate-y-1 transition-transform">
                <div className="h-12 w-12 rounded-2xl bg-gradient-sunset flex items-center justify-center text-white shadow-soft">
                  <f.icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold mt-4">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How pickup works */}
      <section className="container mx-auto px-5 lg:px-8 py-20">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center">How pickup ordering works</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Browse & request", d: "Pick your favourite varieties and submit an order request." },
            { n: "02", t: "We call you", d: "Our team confirms your order, quantity and a Bangalore pickup time." },
            { n: "03", t: "Pickup fresh", d: "Collect your mangoes from the pickup point — fresh, fragrant, ready." },
          ].map((s) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-card p-8">
              <div className="font-display text-6xl font-extrabold text-gradient-sunset">{s.n}</div>
              <h3 className="font-display text-xl font-bold mt-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-tropical py-20">
        <div className="container mx-auto px-5 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center">Loved across Bangalore</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { n: "Priya R.", t: "The Alphonsos took me right back to my grandmother's kitchen. Pure nostalgia.", a: "Indiranagar" },
              { n: "Arjun M.", t: "Best Kesar I've had outside Gujarat. Pickup was effortless.", a: "Koramangala" },
              { n: "Sneha K.", t: "Naturally ripened — you can taste the difference. Now a yearly ritual.", a: "HSR Layout" },
            ].map((t) => (
              <div key={t.n} className="rounded-3xl bg-white p-7 shadow-soft">
                <Quote className="text-[var(--orange-deep)]" />
                <p className="mt-3 text-foreground/85">{t.t}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.a}</div>
                  </div>
                  <div className="flex text-[var(--mango)]">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal */}
      <section className="container mx-auto px-5 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-sm font-semibold text-[var(--orange-deep)] uppercase tracking-wider">In season</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Seasonal Collection</h2>
          </div>
          <Link to="/products" className="hidden sm:inline text-sm font-semibold underline underline-offset-4">View all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seasonal.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* Blog preview */}
      <section className="bg-[var(--cream)] py-20">
        <div className="container mx-auto px-5 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center">From the orchard journal</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { t: "Alphonso vs Kesar: the real difference", d: "Two royal mangoes, two distinct stories. Here's how to tell them apart." },
              { t: "Best mangoes for milkshakes", d: "Creamy, sweet, fibreless — these varieties make the perfect summer shake." },
              { t: "How to spot a naturally ripened mango", d: "Five honest signs that your mango ripened the slow, right way." },
            ].map((b) => (
              <Link to="/blog" key={b.t} className="rounded-3xl bg-white p-7 shadow-soft hover:-translate-y-1 transition-transform block">
                <div className="aspect-[16/10] rounded-2xl bg-gradient-sunset mb-5" />
                <h3 className="font-display text-xl font-bold">{b.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{b.d}</p>
                <div className="mt-4 text-sm font-semibold underline underline-offset-4">Read more</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="container mx-auto px-5 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-sunset p-10 md:p-16 text-white shadow-card">
          <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-white/10" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">Taste the season before it's gone.</h2>
            <p className="mt-3 text-white/90 text-lg">Reserve your box of mangoes now — Bangalore pickup, naturally ripened.</p>
            <Link to="/products" className="mt-7 inline-flex items-center justify-center rounded-full bg-white text-foreground px-7 py-3.5 text-sm font-semibold shadow-soft hover:scale-105 transition-transform">
              Order now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
