## Goal
Deploy the project to **GitHub Pages on the default `*.github.io` URL** — no custom domain. Lovable bot handles the push; GitHub Actions builds and publishes.

## Heads-up
GitHub Pages is **static only**. The homepage, products, blog, FAQ, contact, etc. all work. Any future login, database, payments, or `/api/*` routes will not work there. Lovable hosting supports the full app if you change your mind.

## Changes I'll make in build mode

1. **Remove the custom-domain wiring** so GitHub serves on `<username>.github.io/<repo>` cleanly:
   - Delete `public/CNAME` and the root `CNAME` file.
   - Remove the `cname: mangobliz.com` line from `.github/workflows/deploy.yml`.
   - Remove the CNAME copy step in `scripts/prepare-github-pages.mjs`.
   - Trim the mangobliz / custom-domain sections from `README.md`.

2. **Set Vite base path** so assets resolve under `/<repo-name>/` on `<username>.github.io/<repo>`:
   - Add `vite: { base: '/<repo-name>/' }` to `vite.config.ts` (I'll fill in the repo name once you give it, or default to the Lovable project slug).

3. **Trigger the deploy** — one tiny commit; Lovable auto-pushes to GitHub; Actions runs `deploy.yml` and publishes to the `gh-pages` branch (~2-3 min).

## What you do once in GitHub
- Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **`gh-pages`** / **`/ (root)`** → Save.
- Wait ~1 min. Site goes live at `https://<your-github-username>.github.io/<repo-name>/`.
- No DNS, no domain config.

## What I need from you
- The **GitHub repo name** (and username/org) so I can set the correct Vite `base`. Without the right base, CSS/JS 404s on the published site.
- Then say "go" and I'll execute.
