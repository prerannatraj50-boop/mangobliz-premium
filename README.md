# MangoBliz 🥭 — deploys to GitHub Pages

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

## 🌐 GitHub Pages Deployment

This repo is configured for GitHub Pages with custom domain support for `mangobliz.com`.

### Automatic deployment

Push to `main` and GitHub Actions will build the site and publish `dist/client` to the `gh-pages` branch.

1. In GitHub, open **Settings → Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Set **Branch** to `gh-pages` and **Folder** to `/ (root)`.
4. Save.
5. After the workflow finishes, the site is available at:
   - `https://<your-github-username>.github.io/<repo-name>/` before the custom domain is active
   - `https://mangobliz.com` after DNS is connected

### Manual deployment

```bash
npm install
npm run deploy
```

The build script prepares GitHub Pages files automatically:

- `CNAME` for `mangobliz.com`
- `.nojekyll` so assets are served correctly
- `404.html` fallbacks so refresh/direct route access does not show the GitHub Pages 404 screen

---

## 🌍 Connecting `mangobliz.com` on GitHub Pages

1. In GitHub, open **Settings → Pages → Custom domain**.
2. Enter `mangobliz.com` and save.
3. Enable **Enforce HTTPS** after GitHub verifies the domain and provisions SSL.
4. Add these DNS records at your domain registrar:

   | Type  | Name | Value                  |
   |-------|------|------------------------|
   | A     | @    | `185.199.108.153`      |
   | A     | @    | `185.199.109.153`      |
   | A     | @    | `185.199.110.153`      |
   | A     | @    | `185.199.111.153`      |
   | CNAME | www  | `<username>.github.io` |

5. For `www.mangobliz.com`, keep the `www` CNAME pointing to your GitHub Pages host. GitHub Pages will serve the custom domain and HTTPS once verification completes.
6. Remove old/conflicting A, AAAA, or CNAME records for `@` or `www` if they point to another host.

DNS propagation can take 5 minutes to 24 hours. SSL is issued automatically by GitHub Pages after DNS is correct.

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
