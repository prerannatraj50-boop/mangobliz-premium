import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, products } from "@/lib/products";
import { MessageCircle, MapPin, Leaf, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} Mango — Buy in Bangalore | MangoBliz` : "Mango | MangoBliz";
    const desc = p ? `${p.name} from ${p.origin}. ${p.description}` : "Premium mango.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:image", content: p?.image ?? "" },
        { property: "og:url", content: `/products/${p?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/products/${p?.slug ?? ""}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container mx-auto px-5 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Mango not found</h1>
      <Link to="/products" className="mt-4 inline-block underline">Back to all mangoes</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container mx-auto px-5 py-24 text-center">
      <p>Something went wrong: {error.message}</p>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData();
  const related = products.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 3);
  const waText = encodeURIComponent(`Hi MangoBliz, I'm interested in ordering ${p.name} mangoes.`);

  return (
    <div>
      <div className="container mx-auto px-5 lg:px-8 pt-8">
        <nav className="flex items-center text-xs text-muted-foreground gap-1">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight size={12} />
          <Link to="/products" className="hover:text-foreground">Mangoes</Link>
          <ChevronRight size={12} />
          <span className="text-foreground font-semibold">{p.name}</span>
        </nav>
      </div>

      <section className="container mx-auto px-5 lg:px-8 py-10 grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden bg-[var(--cream)] shadow-card">
            <img src={p.image} alt={`${p.name} mango`} className="w-full aspect-square object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[p.image, p.image, p.image].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-[var(--cream)] aspect-square">
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cream)] px-3 py-1 text-xs font-semibold text-[var(--leaf)]">
            <Leaf size={12} /> Naturally ripened · {p.category}
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold">{p.name}</h1>
          <p className="mt-2 text-muted-foreground">{p.origin}</p>
          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-4xl font-bold text-gradient-sunset">₹{p.price}</span>
            <span className="text-muted-foreground">{p.unit}</span>
          </div>
          <p className="mt-6 text-foreground/85 leading-relaxed">{p.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-card border border-border p-4">
              <div className="text-xs text-muted-foreground">Taste</div>
              <div className="font-semibold mt-1">{p.taste}</div>
            </div>
            <div className="rounded-2xl bg-card border border-border p-4">
              <div className="text-xs text-muted-foreground">Season</div>
              <div className="font-semibold mt-1">{p.season}</div>
            </div>
            <div className="rounded-2xl bg-card border border-border p-4 col-span-2">
              <div className="text-xs text-muted-foreground mb-2">Sweetness</div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-gradient-sunset" style={{ width: `${p.sweetness * 10}%` }} />
                </div>
                <span className="font-semibold text-sm">{p.sweetness}/10</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="font-semibold mb-2">Taste notes</div>
            <div className="flex flex-wrap gap-2">
              {p.notes.map((n) => <span key={n} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">{n}</span>)}
            </div>
          </div>

          <div className="mt-5">
            <div className="font-semibold mb-2">Best for</div>
            <div className="flex flex-wrap gap-2">
              {p.usage.map((n) => <span key={n} className="rounded-full bg-[var(--cream)] text-[var(--leaf)] px-3 py-1 text-xs font-semibold">{n}</span>)}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/919000000000?text=${waText}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:scale-105 transition-transform"
            >
              <MessageCircle size={18} /> WhatsApp Inquiry
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:scale-105 transition-transform">
              Request Order
            </Link>
          </div>

          <div className="mt-6 flex items-start gap-2 rounded-2xl bg-[var(--cream)] p-4 text-sm">
            <MapPin size={18} className="text-[var(--leaf)] mt-0.5" />
            <div>
              <div className="font-semibold">Bangalore pickup only</div>
              <div className="text-muted-foreground">Our team will confirm timing and a pickup point near you.</div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container mx-auto px-5 lg:px-8 py-16">
          <h2 className="font-display text-3xl font-bold mb-8">You may also love</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to="/products/$slug" params={{ slug: r.slug }} className="group rounded-3xl overflow-hidden bg-card shadow-card hover:-translate-y-1 transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-[var(--cream)]">
                  <img src={r.image} alt={r.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <div className="font-display text-lg font-bold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.taste}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
