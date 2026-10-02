import JsonLd from "./JsonLd";
import { buildMetadata, breadcrumbJsonLd, PAGES } from "@/lib/seo";

// Shared helpers for the small route-level layout.js files that give each
// client-rendered page its own <title>, description, canonical URL and
// breadcrumb structured data.

export const metadataFor = (key, extra = {}) => {
  const p = PAGES[key];
  return buildMetadata({ title: p.title, description: p.description, path: p.path, keywords: p.keywords, ...extra });
};

export function PageLayout({ pageKey, children }) {
  const p = PAGES[pageKey];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: p.name, path: p.path }])} />
      {children}
    </>
  );
}
