import { notFound } from "next/navigation";
import ServiceContent from "./ServiceContent";
import JsonLd from "../../Components/JsonLd";
import {
  SERVICES,
  getServiceBySlug,
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

// Pre-render every service page at build time (fast, fully crawlable HTML)
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

// Unknown slugs return a real 404 instead of a broken page
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    path: `/services/${service.slug}`,
    image: { url: service.ogImage, width: 1200, height: 630, alt: service.title },
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(service),
          breadcrumbJsonLd([{ name: service.title, path: `/services/${service.slug}` }]),
        ]}
      />
      <ServiceContent serviceId={service.id} />
    </>
  );
}
