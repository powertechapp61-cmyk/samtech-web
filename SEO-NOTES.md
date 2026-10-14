# SEO setup – samtechsa.com

> **Important for developers:** the live service pages are `src/app/services/[slug]/ServiceContent.jsx`.
> The old folder `src/app/service-page/` is no longer used (its URLs redirect to /services/…) and has been deleted —
> edits made there never appear on the site.

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

## Service pages – keyword map (Oct 2026)
On-page copy (H1, intro, keyword section, FAQs, related links – English + Arabic) is in
**`src/lib/service-seo-content.js`**; titles, meta descriptions and keyword lists are in `SERVICES` in `src/lib/seo.js`.
Service areas shown on every page: `SERVICE_AREAS` in `service-seo-content.js` (add Riyadh etc. there if you serve it).

| URL | Main keyword | Supporting keywords |
|---|---|---|
| /services/online-safety-valve-testing | online safety valve testing Saudi Arabia | Trevi testing, in-situ PSV testing, boiler / steam safety valve testing, testing without shutdown |
| /services/offline-valve-testing | safety valve testing and calibration Saudi Arabia | PSV testing, PRV calibration, safety valve recertification, bench testing |
| /services/industrial-valve-servicing | valve repair Saudi Arabia | valve overhauling, industrial valve maintenance, control valve repair, actuator servicing |
| /services/technical-manpower-supply | technical manpower supply Saudi Arabia | manpower supply company, shutdown / turnaround manpower, O&M manpower |
| /services/online-leak-sealing | online leak sealing Saudi Arabia | leak sealing company, live leak repair, flange / steam leak sealing, Sylmasta |
| /services/hot-tapping | hot tapping Saudi Arabia | hot tapping services, live gate valve insertion, pipeline intervention |
| /services/heat-exchanger-maintenance | heat exchanger maintenance Saudi Arabia | retubing, tube bundle cleaning, hydro jetting, ASME / TEMA supply |
| /services/ro-plant-epc-contracts | RO plant EPC contractor Saudi Arabia | desalination plant contractor, reverse osmosis plant, SWRO, 2 MIGD |
| /services/solar-plant-epc | solar EPC company Saudi Arabia | solar PV plant installation, solar O&M, 5 MW solar plant |
| /services/ro-plant-retrofitting | RO membrane replacement Saudi Arabia | SWRO membrane replacement, RO plant retrofit / refurbishment |
| /services/upvc-aluminium-doors-windows | UPVC windows and doors Saudi Arabia | aluminium windows and doors, aluminium fabrication |
| /services | industrial maintenance services Saudi Arabia | hub page linking all services |

## AI search visibility (ChatGPT, Gemini, Perplexity, Copilot, Google AI Overviews)
What is on the site:
- `/llms.txt` – plain-text company summary for AI crawlers, generated from `seo.js`, `service-seo-content.js` and `company-facts.js` (`src/app/llms.txt/route.js`).
- "SAM Tech at a glance" facts + company FAQ on `/company` (English + Arabic) with `AboutPage` + `FAQPage` structured data. Copy: `src/lib/company-facts.js`.
- Organization schema: parent group (website + LinkedIn/Facebook/X), service cities, `sameAs` slot.
- IndexNow (pushes URLs to Bing, which feeds ChatGPT search and Copilot): key file `public/855135b29be00d42326d4e255a79b2b0.txt` (do not delete) and `scripts/indexnow-submit.mjs`.

After each deploy:
1. `node scripts/indexnow-submit.mjs` (expects "HTTP 200" or "HTTP 202").
2. Check https://samtechsa.com/llms.txt opens.

When new official profiles exist (Google Business Profile, Bing Places, SAM Tech LinkedIn page, directory listings), add their URLs to `COMPANY.sameAs` in `src/lib/seo.js`.
Keep the company name, address, phone and service list word-for-word the same on every profile – AI assistants trust facts that match across sources.
If the site sits behind Cloudflare, make sure "Block AI bots" / "AI Scrapers and Crawlers" is OFF, or AI search tools cannot read the site.
