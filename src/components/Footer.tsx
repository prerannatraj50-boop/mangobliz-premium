import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[var(--cream)]">
      <div className="container mx-auto px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl font-extrabold">
            Mango<span className="text-gradient-sunset">Bliz</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Fresh Mangoes. Real Taste. Hand-picked, naturally ripened — pickup in Bangalore.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground">All Mangoes</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Legal</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/pickup" className="hover:text-foreground">Pickup Info</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Reach us</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5" /> Indiranagar, Bangalore</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 90000 00000</li>
            <li className="flex items-center gap-2"><Mail size={16} /> hello@mangobliz.com</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a aria-label="Instagram" href="#" className="h-9 w-9 rounded-full bg-white shadow-soft flex items-center justify-center hover:scale-110 transition-transform"><Instagram size={16} /></a>
            <a aria-label="Facebook" href="#" className="h-9 w-9 rounded-full bg-white shadow-soft flex items-center justify-center hover:scale-110 transition-transform"><Facebook size={16} /></a>
            <a aria-label="Twitter" href="#" className="h-9 w-9 rounded-full bg-white shadow-soft flex items-center justify-center hover:scale-110 transition-transform"><Twitter size={16} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MangoBliz. Made with love for mango lovers in Bangalore.
      </div>
    </footer>
  );
}
