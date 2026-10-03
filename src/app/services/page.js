import ServicesHub from "./ServicesHub";
import JsonLd from "../Components/JsonLd";
import { buildMetadata, breadcrumbJsonLd, servicesHubJsonLd, PAGES } from "@/lib/seo";
import { SERVICES_HUB } from "@/lib/service-seo-content";

// /services – hub page linking to every service (keyword-rich internal links)
export const metadata = buildMetadata({
  title: PAGES.services.title,
  absoluteTitle: true,
  description: PAGES.services.description,
  keywords: PAGES.services.keywords,
  path: PAGES.services.path,
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          servicesHubJsonLd(SERVICES_HUB.en.intro),
          breadcrumbJsonLd([{ name: PAGES.services.name, path: PAGES.services.path }]),
        ]}
      />
      <ServicesHub />
    </>
  );
}
