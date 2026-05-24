import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: p.slug }}
      className="group rounded-3xl overflow-hidden bg-card shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--cream)]">
        <img
          src={p.image}
          alt={`${p.name} mango`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-[var(--leaf)]">
          Pickup in Bangalore
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-gradient-sunset px-3 py-1 text-xs font-semibold text-white">
          {p.category}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-bold">{p.name}</h3>
          <div className="text-right">
            <div className="font-semibold">₹{p.price}</div>
            <div className="text-xs text-muted-foreground">{p.unit}</div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{p.taste}</p>
        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          <span>Sweetness</span>
          <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-sunset"
              style={{ width: `${p.sweetness * 10}%` }}
            />
          </div>
          <span>{p.sweetness}/10</span>
        </div>
        <div className="mt-3 inline-flex items-center justify-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-semibold group-hover:bg-gradient-sunset group-hover:text-white transition-colors">
          Order Now
        </div>
      </div>
    </Link>
  );
}
