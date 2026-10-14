import { metadataFor, PageLayout } from "../Components/PageSeo";
import JsonLd from "../Components/JsonLd";
import { faqJsonLd, absoluteUrl, ORG_ID, PAGES } from "@/lib/seo";
import { COMPANY_FACTS } from "@/lib/company-facts";

// Server-side SEO for this page: <title>, meta description, canonical URL,
// Open Graph tags and breadcrumb structured data (see src/lib/seo.js).
export const metadata = metadataFor("company");

const url = absoluteUrl(PAGES.company.path);

export default function Layout({ children }) {
  return (
    <PageLayout pageKey="company">
      {/* AboutPage + FAQ: the same questions shown in the "SAM Tech at a glance" block */}
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": `${url}#page`,
            url,
            name: PAGES.company.title,
            about: { "@id": ORG_ID },
            mainEntity: { "@id": ORG_ID },
          },
          faqJsonLd(COMPANY_FACTS.en.faqs, url),
        ]}
      />
      {children}
    </PageLayout>
  );
}
