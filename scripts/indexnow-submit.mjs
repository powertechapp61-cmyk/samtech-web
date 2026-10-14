// Push every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver…).
// Bing's index feeds ChatGPT search and Microsoft Copilot, so this gets new or
// changed pages in front of them within hours instead of weeks.
//
// Run AFTER each deploy, from the project folder:
//   node scripts/indexnow-submit.mjs
// (Node 18+; no packages needed)
//
// The key below must match the file public/<key>.txt, which must be live at
// https://samtechsa.com/<key>.txt. Don't rename or delete that file.

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://samtechsa.com").replace(/\/$/, "");
const KEY = "855135b29be00d42326d4e255a79b2b0";

const res = await fetch(`${SITE}/sitemap.xml`);
if (!res.ok) throw new Error(`Could not read ${SITE}/sitemap.xml (HTTP ${res.status})`);
const xml = await res.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].trim())
  .filter((u) => u.startsWith(SITE) && !/\.(jpe?g|png|webp|gif)$/i.test(u));
urlList.push(`${SITE}/llms.txt`);

const submit = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});

// 200 = accepted, 202 = accepted (key check pending), 403 = key file not found, 422 = URLs don't match host
console.log(`IndexNow: HTTP ${submit.status} for ${urlList.length} URLs`);
if (submit.status >= 300) console.log(await submit.text());
