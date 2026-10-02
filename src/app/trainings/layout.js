import { metadataFor, PageLayout } from "../Components/PageSeo";

// Server-side SEO for this page: <title>, meta description, canonical URL,
// Open Graph tags and breadcrumb structured data (see src/lib/seo.js).
export const metadata = metadataFor("trainings");

export default function Layout({ children }) {
  return <PageLayout pageKey="trainings">{children}</PageLayout>;
}
