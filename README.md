# VM Design Studio — Website v2 (ready to publish)

Professional, complete website for **VM Design Studio** — handcrafted zari & aari couture, Anand, Gujarat.
Built from competitor research (`../research/`) of 11 couture/artisan brands (Sabyasachi, Raw Mango, Torani,
Akaaro, Ogaan, House of Masaba, Odylyne the Ceremony, Needle & Thread, Anita Dongre, Perona, Amaare).

**Live:** https://kaifashraff.github.io/vm-design-studio/

## What's inside
| File | Purpose |
|---|---|
| `index.html` | Home — announcement bar, hero, marquee, collection (9 pieces, filterable), The Atelier (craft + BTS strip + stats), Bespoke (4-step process), Worldwide Shipping, FAQ (8), Instagram strip, Contact, footer |
| `styles.css` | Full design system — deep green + gold editorial identity, Cormorant Garamond + Jost (self-hosted), fully responsive (375px → desktop), reduced-motion support |
| `script.js` | Products data, filters, quick-view modal, accordion, mobile nav, reveal-on-scroll, IG tiles, floating WhatsApp |
| `images/products/` | Real-wear product photography (free-license Pexels stock — heavily embroidered lehengas, blouses, jackets) as temporary visuals until VM's own product shoot; credits in `CREDITS.md` |
| `shipping-policy.html`, `returns-exchange.html`, `care-guide.html`, `privacy-policy.html`, `terms.html`, `404.html` | Complete policy pages (honest made-to-order terms, duties disclosure — patterns from research) |
| `images/real/` | Real craft photography (WebP + JPG fallback) — hero, craft pillars, BTS strip, IG tiles |
| `images/*.svg` | Product mockups (jackets, lehengas, adornments, gown) + world map |
| `fonts/` | Self-hosted variable fonts (no CDN dependency) |
| `og-image.png`, `favicon.*` | Social share + brand icons (green/gold VM monogram) |
| `sitemap.xml`, `robots.txt`, `.nojekyll` | SEO + search engine files |
| `deploy.sh` | One-command deploy to GitHub Pages |

## Design decisions (from research)
- **WhatsApp-first conversion** (House of Masaba / Torani / Anita Dongre pattern): every product card has a
  pre-filled `wa.me` enquiry link; floating WhatsApp button; "Book a Fitting" in nav (Odylyne / Raw Mango pattern).
- **Craft as trust** (Akaaro / Raw Mango pattern): "The Atelier" section with real photos, 40+/400+ hour stats,
  BTS strip — proof it is handmade, not mass-produced.
- **Honest made-to-order terms** (Odylyne pattern): lead times, 50% advance, final-sale-with-aftercare,
  duties disclosure — in FAQ and policy pages. No fake testimonials, no fake reviews.
- **Budget-band pricing** (Torani pattern): "Jackets ₹12–18K · Lehengas ₹35–75K" anchors on cards; bridal
  couture = "Price on Request" (Masaba model).
- **Announcement bar + trust bar + worldwide shipping** (Ogaan / N&T / Torani pattern).
- **SEO**: title/meta/OG/Twitter, canonical, JSON-LD `ClothingStore` + `FAQPage`, sitemap, robots, alt text on every image.

## Before go-live (owner confirmations — nothing blocks publishing, but please update)
1. **WhatsApp number** — currently dummy `+91 98765 43210` (`919876543210`) in `script.js` (one place) + `index.html` + policy pages. Replace and run `./deploy.sh`.
2. **Email** — `hello@vmdesignstudio.com` is a placeholder (in `index.html` + policy pages).
3. **Prices** — indicative ranges from prior research; confirm with owner (jackets ₹12–18k / lehengas ₹35–75k).
4. **Real product photos** — lookbook uses labeled SVG mockups until real VM product photography exists.
5. **Tagline / copy** — hero headline "Couture, embroidered by hand." is proposed.

## Update & deploy
```bash
# edit files, then:
./deploy.sh
```
Deploys to https://kaifashraff.github.io/vm-design-studio/ (repo `kaifashraff/vm-design-studio`, branch `main`, Pages enabled).

## Local preview
```bash
python3 -m http.server 8000   # in this folder, then open http://localhost:8000
```
