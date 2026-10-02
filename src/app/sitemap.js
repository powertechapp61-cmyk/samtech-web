import { SITE_URL, SERVICES, PAGES, absoluteUrl } from "@/lib/seo";

// Served at /sitemap.xml – submit this URL in Google Search Console and Bing Webmaster Tools.
export default function sitemap() {
  const lastModified = new Date();

  const pages = [
    { path: PAGES.home.path, priority: 1.0, changeFrequency: "weekly" },
    { path: PAGES.company.path, priority: 0.8, changeFrequency: "monthly" },
    { path: PAGES.contactUs.path, priority: 0.8, changeFrequency: "yearly" },
    { path: PAGES.groupCompanies.path, priority: 0.6, changeFrequency: "monthly" },
    { path: PAGES.appreciations.path, priority: 0.6, changeFrequency: "monthly" },
    { path: PAGES.brochures.path, priority: 0.5, changeFrequency: "monthly" },
    { path: PAGES.photoGallery.path, priority: 0.5, changeFrequency: "monthly" },
    { path: PAGES.ourBranches.path, priority: 0.5, changeFrequency: "yearly" },
    { path: PAGES.trainings.path, priority: 0.4, changeFrequency: "yearly" },
    { path: PAGES.careers.path, priority: 0.5, changeFrequency: "monthly" },
  ];

  const services = SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.9,
    changeFrequency: "monthly",
    images: [absoluteUrl(s.image)],
  }));

  return [...pages, ...services].map((p) => ({
    url: p.path === "/" ? SITE_URL : absoluteUrl(p.path),
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
    ...(p.images ? { images: p.images } : {}),
  }));
}
