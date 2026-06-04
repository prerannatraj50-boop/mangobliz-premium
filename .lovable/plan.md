## Goal
Deploy the project to GitHub Pages at `mangobliz.com` using the GitHub repo already connected to this Lovable project.

## Important limitation (please read)
GitHub Pages only serves **static files** — it cannot run server code. This app is built with TanStack Start, which supports server functions (SSR / API endpoints). On GitHub Pages:
- Static pages and client-side navigation will work.
- Any server function or `/api/*` route will NOT work.
- If you later add login, database calls from the server, payments, emails, etc., they will be broken on GitHub Pages.

For a fully working site, Lovable hosting + custom domain is the recommended path (1-click, free SSL, server features work). You can still keep GitHub connected. If you want to switch later, just say so.

Proceeding with GitHub Pages as you asked.

## Plan

1. **Verify deploy workflow**
   - Confirm `.github/workflows/deploy.yml` (created earlier) is correct for a static build and pushes the `dist/` output to the `gh-pages` branch.
   - Confirm `public/CNAME` contains `mangobliz.com` and `public/404.html` exists (SPA fallback for deep links).
   - Confirm `scripts/prepare-github-pages.mjs` runs after build.

2. **Trigger the first deploy**
   - The workflow runs automatically on push to `main`. Since the repo is already connected, I'll make a tiny commit (touch a comment) so GitHub Actions kicks off a build.

3. **Tell you what to click in GitHub** (one-time settings):
   - Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **gh-pages / root** → Save.
   - Repo → **Settings → Pages → Custom domain**: enter `mangobliz.com` → Save → tick **Enforce HTTPS** once available.

4. **DNS at your domain registrar** (one-time):
   - Add four A records for `@` pointing to GitHub Pages IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Add a CNAME for `www` → `<your-github-username>.github.io`
   - Wait for DNS to propagate (minutes to a few hours).

5. **Verify**
   - Watch the Actions tab in GitHub for a green checkmark.
   - Visit `https://mangobliz.com` — should load the homepage.
   - Click around to confirm internal navigation works.

## What I need from you before I implement
- Confirm the GitHub username/org the repo is under (so I can give exact CNAME value for `www`).
- Confirm you understand the SSR limitation above and want to proceed with GitHub Pages anyway.

Once you confirm, switch me to Build mode and I'll execute steps 1–2 and give you the exact GitHub + DNS clicks for steps 3–4.