# VM Design Studio — Website (v1.0)

A single-page, mobile-first, visual-heavy website for **VM Design Studio**, handcrafted couture boutique, Anand, Gujarat.

**Stack:** Plain HTML5 + CSS3 + minimal vanilla JavaScript. No frameworks, no build step — upload and go.

## Files
| File | Purpose |
|---|---|
| `index.html` | Single-page site (8 sections, semantic HTML5, SEO + OpenGraph + JSON-LD) |
| `styles.css` | All styling — CSS variables, Grid/Flexbox, responsive breakpoints (375 / 768 / 1024px+) |
| `script.js` | Product modal, WhatsApp CTAs, Instagram tiles, scroll reveal, a11y focus handling |
| `images/` | SVG mockups (clearly labelled MOCKUP) — replace with real photography |

## Before going live — replace these (5 min)
1. **WhatsApp number** — in `script.js`, `var WHATSAPP_NUMBER = "919876543210"` is a placeholder (any dummy was requested); replace with owner's real number (country code, no `+`).
2. **Real photos** — REAL craft photos from the client's PC are already in `images/real/` (hero, 6 BTS, designer portrait, 6 IG tiles). Still to replace: the 8 lookbook product mockups (`images/jacket-*.svg`, `lehenga-*.svg`, etc.) with actual VM product photography (real photos of other brands' garments must NOT be used as VM products).
3. **Prices** — in `script.js`, the `LOOKBOOK` array (confirm with owner before publishing).
4. **Domain** — update `canonical` / `og:url` in `index.html`.
5. **Instagram feed** — optional: replace the 6 placeholder tiles with a free auto-updating embed:
   - Option A (no code): LightWidget — lightwidget.com → connect Instagram → paste embed code in `#igGrid`.
   - Option B (JS): Instafeed.js (needs an Instagram Basic Display token).

## Deploy (all free)
### Netlify (easiest, recommended)
1. Go to app.netlify.com → **Add new site → Deploy manually**.
2. Drag-and-drop the whole `site/` folder.
3. Done — you get `https://<name>.netlify.app`. Free SSL, global CDN.
4. Optional: rename site, or connect a custom domain in **Domain settings**.

### Vercel
1. vercel.com → **New Project** → import folder (or use `vercel deploy` CLI from the `site/` folder).
2. Framework preset: **Other**. Deploy. Free.

### GitHub Pages
1. Create a repo, upload the `site/` contents.
2. Settings → Pages → deploy from branch `main`, folder `/ (root)`.
3. Site at `https://<user>.github.io/<repo>/`.

### Hostinger / cPanel (if owner has hosting)
Upload all files to `public_html/` — that's it.

## SEO checklist (already implemented)
- ✅ Title: `VM Design Studio | Handcrafted Couture — Zari & Aari Embroidery | Anand, Gujarat`
- ✅ Meta description with keywords (hand embroidered jacket, zari work lehenga, custom couture India…)
- ✅ Open Graph + Twitter Card tags
- ✅ JSON-LD `ClothingStore` LocalBusiness schema
- ✅ Descriptive alt text on every image
- ✅ Lazy loading below the fold, hero preloaded
- ✅ Semantic headings (single H1), ARIA labels, keyboard-accessible modal, visible focus states

## Analytics (recommend)
1. **Google Analytics 4** — add the GA4 snippet to `<head>` of `index.html` (free, 2 min).
2. **Meta Pixel** — add pixel snippet before `</head>` to enable retargeting ads (see Phase 4 of the master plan).
3. **WhatsApp tracking** — all CTAs already use `wa.me` links; count clicks in GA4 as events if desired.

## Customisation
- Colours: edit CSS variables at the top of `styles.css` (`--green-800`, `--gold`, `--cream`).
- Fonts: swap `Georgia` in `--font-serif` for a Google Font (e.g., Cormorant Garamond) in `index.html`.

## 🔗 LIVE URL
**Deployed:** https://kaifashraff.github.io/vm-design-studio/ (GitHub Pages, public repo `kaifashraff/vm-design-studio`)
- Open on phone: scan QR or visit the URL above
- Repo: https://github.com/kaifashraff/vm-design-studio
- To take down: delete repo or disable Pages in repo Settings → Pages

## 🔁 Updating the live site
After editing files here, run:
```bash
./deploy.sh
```
