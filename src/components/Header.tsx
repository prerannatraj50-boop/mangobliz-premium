import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Mangoes" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/pickup", label: "Pickup" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="container mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-xl">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-sunset text-white shadow-soft">
            M
          </span>
          <span>
            Mango<span className="text-gradient-sunset">Bliz</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/products"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-sunset px-5 py-2 text-sm font-semibold text-white shadow-soft hover:scale-105 transition-transform"
        >
          Order Now
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="container mx-auto px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-sunset px-5 py-3 text-center text-sm font-semibold text-white shadow-soft"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
