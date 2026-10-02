# SEO setup – samtechsa.com

> **Installing this update:** unzip over the existing project folder (overwrite files),
> **delete the folder `src/app/service-page/`** (replaced by `src/app/services/`),
> then run `npm install` and `npm run build`.

All titles, descriptions, keywords, service URLs and structured data live in **`src/lib/seo.js`**.
Edit that one file to change how any page appears in Google.

## What is in place
- Unique `<title>`, meta description, canonical URL, Open Graph + Twitter tags on every page
- Branded 1200×630 share images in `public/og/` (regenerate with `python3 scripts/generate-og-images.py`)
- `/sitemap.xml` and `/robots.txt` generated automatically (`src/app/sitemap.js`, `src/app/robots.js`)
- JSON-LD structured data: LocalBusiness + WebSite (all pages), Service (service pages), BreadcrumbList (inner pages)
- Service pages moved to keyword URLs: `/services/<slug>` – old `/service-page/...` URLs 308-redirect (see `next.config.mjs`)
- `/about-us` (placeholder) redirects to `/company`; unfinished pages (`/gallery`, `/testmonials`, `/leadership-team`, `/our-infrastructure`) are `noindex`
- One `<h1>` per page, descriptive image alt text, lazy-loaded images, self-hosted fonts, compressed images (WebP)

## After deploying
1. Add the site to **Google Search Console** (Domain property for samtechsa.com) and submit `https://samtechsa.com/sitemap.xml`.
2. Do the same in **Bing Webmaster Tools** (can import from Search Console).
3. Create / claim the **Google Business Profile** for the Rabigh office with the exact same name, address and phone as the site.
4. If you use the HTML-tag verification method, paste the codes in `verification` in `src/app/layout.js`.

## Still to do (content the site owner must supply)
- Photos for the Saudi office and UAE workshop tabs on `/our-branches` (`/assets/img/bahrain/saudi1.jpg`, `uae1.jpg` are missing).
- Real job openings / application email on `/careers` (page is very thin).
- Arabic pages are only switched client-side, so Google indexes English only. Separate `/ar/...` URLs with `hreflang` would be needed to rank in Arabic search.
