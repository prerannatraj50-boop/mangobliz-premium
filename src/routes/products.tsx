import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Search } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Buy Mangoes Online Bangalore — All Varieties | MangoBliz" },
      { name: "description", content: "Browse 20+ mango varieties — Alphonso, Kesar, Dasheri, Langra, Chausa and more. Pickup in Bangalore." },
      { property: "og:title", content: "All Mangoes — MangoBliz" },
      { property: "og:description", content: "20+ premium mango varieties available for Bangalore pickup." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const categories = ["All", "Indian", "Hybrid", "Global"] as const;

function ProductsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (q && !`${p.name} ${p.taste} ${p.origin}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [q, cat]);

  return (
    <div>
      <section className="bg-gradient-tropical">
        <div className="container mx-auto px-5 lg:px-8 py-16 md:py-20 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-extrabold">Our <span className="text-gradient-sunset">Mango</span> Collection</h1>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/75">Indian classics, modern hybrids and global favourites — all naturally ripened.</p>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
          <div className="relative w-full md:max-w-sm">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search Alphonso, Kesar…"
              className="w-full rounded-full border border-input bg-card pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  cat === c ? "bg-gradient-sunset text-white shadow-soft" : "bg-muted text-foreground/80 hover:bg-muted/70"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">No mangoes match your search.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
