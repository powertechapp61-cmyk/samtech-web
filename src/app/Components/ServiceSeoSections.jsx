"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { SERVICES } from "@/lib/seo";
import { SERVICE_COPY, SERVICE_AREAS, UI_TEXT } from "@/lib/service-seo-content";

// Keyword-focused content block shown on every service page:
// keyword section, key points, service areas, FAQs and related services.
// Copy lives in src/lib/service-seo-content.js (English + Arabic).
export default function ServiceSeoSections({ serviceId }) {
  const { language } = useLanguage();
  const lang = language === "ar" ? "ar" : "en";
  const entry = SERVICE_COPY[serviceId];
  if (!entry) return null;
  const copy = entry[lang];
  const ui = UI_TEXT[lang];
  const sep = lang === "ar" ? "، " : ", ";
  const cities = SERVICE_AREAS[lang].slice(1).join(sep);

  const related = (entry.related || [])
    .map((id) => ({ svc: SERVICES.find((s) => s.id === id), text: SERVICE_COPY[id]?.[lang]?.linkText }))
    .filter((r) => r.svc && r.text);

  return (
    <section className="serviceSeo" aria-labelledby="service-seo-title">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mobspaceMb_24">
            <h2 id="service-seo-title" className="fontSize24 fontWeight600 blackText_Clr mb_16">
              {copy.sectionTitle}
            </h2>
            {copy.paragraphs.map((p, i) => (
              <p key={i} className="fontSize16 fontWeight400 shearwaterBlackText_clr mb_16">
                {p}
              </p>
            ))}
          </div>
          <div className="col-lg-5">
            <div className="serviceSeo-points">
              <h3 className="fontSize18 fontWeight600 blackText_Clr mb_12">{ui.keyPoints}</h3>
              <ul>
                {copy.points.map((pt, i) => (
                  <li key={i} className="fontSize16 fontWeight400 shearwaterBlackText_clr">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="serviceSeo-areas">
              <h3 className="fontSize18 fontWeight600 blackText_Clr mb_8">{ui.areasTitle}</h3>
              <p className="fontSize16 fontWeight400 shearwaterBlackText_clr">{ui.areasText(cities)}</p>
            </div>
          </div>
        </div>

        {copy.faqs?.length > 0 && (
          <div className="serviceSeo-faq">
            <h2 className="fontSize24 fontWeight600 blackText_Clr mb_16">{ui.faqTitle}</h2>
            <div className="serviceSeo-faqGrid">
              {copy.faqs.map((f, i) => (
                <div className="serviceSeo-faqItem" key={i}>
                  <h3 className="fontSize18 fontWeight600 blackText_Clr mb_8">{f.q}</h3>
                  <p className="fontSize16 fontWeight400 shearwaterBlackText_clr">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <nav className="serviceSeo-related" aria-label={ui.relatedTitle}>
            <h2 className="fontSize24 fontWeight600 blackText_Clr mb_16">{ui.relatedTitle}</h2>
            <ul>
              {related.map(({ svc, text }) => (
                <li key={svc.slug}>
                  <Link href={`/services/${svc.slug}`}>{text}</Link>
                </li>
              ))}
              <li>
                <Link href="/services">{ui.allServices}</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
