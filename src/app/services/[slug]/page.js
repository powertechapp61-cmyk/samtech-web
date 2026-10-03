import { notFound } from "next/navigation";
import ServiceContent from "./ServiceContent";
import JsonLd from "../../Components/JsonLd";
import {
  SERVICES,
  getServiceBySlug,
  buildMetadata,
  breadcrumbJsonLd,
  serviceJsonLd,
  faqJsonLd,
  absoluteUrl,
  PAGES,
} from "@/lib/seo";
import { SERVICE_COPY, SERVICE_AREAS } from "@/lib/service-seo-content";

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
    title: service.seoTitle,
    absoluteTitle: true,
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
  const copy = SERVICE_COPY[service.id];
  const url = absoluteUrl(`/services/${service.slug}`);

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(service, SERVICE_AREAS.en),
          breadcrumbJsonLd([
            { name: PAGES.services.name, path: PAGES.services.path },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          ...(copy?.en?.faqs?.length ? [faqJsonLd(copy.en.faqs, url)] : []),
        ]}
      />
      <ServiceContent serviceId={service.id} />
    </>
  );
}
