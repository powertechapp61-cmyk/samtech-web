import { SITE_URL, COMPANY, SERVICES, PAGES, absoluteUrl } from "@/lib/seo";
import { SERVICE_COPY } from "@/lib/service-seo-content";
import { COMPANY_FACTS } from "@/lib/company-facts";

// Served at /llms.txt – a plain-text summary of the company for AI assistants
// and AI crawlers (format: https://llmstxt.org). Generated at build time from
// the same data as the pages, so it never goes out of date.
export const dynamic = "force-static";

export function GET() {
  const facts = COMPANY_FACTS.en;
  const link = (name, path, note) => `- [${name}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;

  const lines = [
    `# ${COMPANY.name} (${COMPANY.shortName})`,
    "",
    `> ${COMPANY.shortName} is a technical services and contracting company headquartered in Rabigh, Saudi Arabia. It provides online and offline safety valve testing, valve repair and overhauling, online leak sealing, hot tapping, heat exchanger maintenance and technical manpower supply to power, oil & gas, petrochemical and water treatment plants, and delivers RO desalination and solar plant EPC projects. It is the Saudi Arabian unit of the ${COMPANY.parent}.`,
    "",
    "## Key facts",
    "",
    ...facts.facts.map((f) => `- ${f.label}: ${f.value}`),
    `- Website: ${SITE_URL}`,
    "",
    "## Services in Saudi Arabia",
    "",
    ...SERVICES.map((s) => link(s.title, `/services/${s.slug}`, SERVICE_COPY[s.id]?.en?.intro || s.description)),
    "",
    "## Company",
    "",
    link("About SAM Tech", PAGES.company.path, PAGES.company.description),
    link("All services", PAGES.services.path, PAGES.services.description),
    link("Client appreciation letters", PAGES.appreciations.path, PAGES.appreciations.description),
    link("Group companies", PAGES.groupCompanies.path, PAGES.groupCompanies.description),
    link("Branches", PAGES.ourBranches.path, PAGES.ourBranches.description),
    link("Contact and quotations", PAGES.contactUs.path, PAGES.contactUs.description),
    "",
    "## Frequently asked questions",
    "",
    ...facts.faqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    "## Optional",
    "",
    link("Brochures", PAGES.brochures.path, PAGES.brochures.description),
    link("Photo gallery", PAGES.photoGallery.path, PAGES.photoGallery.description),
    link("Trainings", PAGES.trainings.path, PAGES.trainings.description),
    link("Careers", PAGES.careers.path, PAGES.careers.description),
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
