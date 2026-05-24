# MangoBliz 🥭

> Fresh Mangoes. Real Taste. — Premium mango e-commerce site for Bangalore.

MangoBliz is a multi-page React + TypeScript site built on the TanStack Start full-stack framework (Vite + TanStack Router). It ships with 20+ mango products, dynamic product detail pages, blog, FAQ, contact, pickup info and full SEO meta.

---

## ✨ Features

- 🏠 Home, Products, Product Details, About, Blog, Contact, FAQ, Pickup, Privacy, Terms, 404
- 🥭 20+ mango varieties (Indian, Hybrid, Global) with realistic data
- 🔎 Product search & category filtering
- 💬 Floating WhatsApp button
- 🔝 Back-to-top button & scroll reveal animations
- 📱 Fully responsive, mobile-first
- 🎨 Mango-inspired design system (Poppins + Inter, custom palette)
- 🚀 SEO meta tags on every route + canonical URLs
- ⚡ File-based routing, automatic 404 fallback, no white screens on refresh

---

## 🛠 Tech Stack

- **React 19** + **TypeScript**
- **Vite 7**
- **TanStack Start** + **TanStack Router** (file-based routing, SSR-ready)
- **Tailwind CSS v4**
- **shadcn/ui** components
- **Lucide React** icons

> Note: This project uses TanStack Router (the modern type-safe successor to React Router). It handles all routing — including the `*` fallback (`notFoundComponent`) — automatically, with full deep-link & refresh support.

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install
# or: bun install / pnpm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
src/
├── assets/              # Local images (hero-mangoes.jpg)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── BackToTop.tsx
│   └── ui/              # shadcn/ui components
├── lib/
│   └── products.ts      # All mango product data
├── routes/              # File-based routes (TanStack Router)
│   ├── __root.tsx       # Root layout (Header + Footer + 404)
│   ├── index.tsx        # Home
│   ├── products.tsx     # Listing
│   ├── products.$slug.tsx  # Dynamic detail
│   ├── about.tsx
│   ├── blog.tsx
│   ├── contact.tsx
│   ├── faq.tsx
│   ├── pickup.tsx
│   ├── privacy.tsx
│   └── terms.tsx
├── styles.css           # Tailwind v4 + design tokens
├── router.tsx
└── start.ts
```

---

## 🐙 Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: MangoBliz site"
git branch -M main
git remote add origin https://github.com/<your-username>/mangobliz.git
git push -u origin main
```

---

## 🌐 Deployment

This project produces a standard production build (`npm run build`) that can be hosted on any modern platform:

- **Vercel** (recommended): Import the GitHub repo → framework auto-detected → Deploy.
- **Netlify**: Build command `npm run build` · publish directory `dist`.
- **Cloudflare Pages**: Build command `npm run build` · output `dist`.

The included router config handles deep links and refresh on every hosting provider — no `_redirects` file needed.

---

## 🌍 Connecting `mangobliz.com`

1. **Buy / use your domain** (Namecheap, GoDaddy, Google Domains, etc.).
2. **Add the domain in your hosting dashboard** (Vercel/Netlify/Cloudflare → Settings → Domains → Add `mangobliz.com` and `www.mangobliz.com`).
3. **Add DNS records at your registrar**:

   | Type  | Name | Value                          |
   |-------|------|--------------------------------|
   | A     | @    | (IP given by your host)        |
   | CNAME | www  | `cname.your-host.com`          |

   On Vercel for example:
   - `A` `@` → `76.76.21.21`
   - `CNAME` `www` → `cname.vercel-dns.com`

4. **Wait for DNS propagation** (5 min – 24 hr). Use [dnschecker.org](https://dnschecker.org) to verify.
5. **SSL** is auto-provisioned (Let's Encrypt) by all major hosts — usually within a few minutes after DNS resolves.
6. **Domain verification**: your host will show a green "Valid configuration" once both `mangobliz.com` and `www.mangobliz.com` resolve.

---

## 🎨 Brand

- **Mango Yellow** `#FFB000`
- **Orange** `#FF7A00`
- **Green** `#2E7D32`
- **Cream White** `#FFF7E8`
- Headings: **Poppins** · Body: **Inter**

---

## 📞 Contact

- Website: https://mangobliz.com
- Email: hello@mangobliz.com
- WhatsApp: +91 90000 00000

Made with 🥭 in Bangalore.
