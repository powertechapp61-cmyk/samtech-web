"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { COMPANY_FACTS } from "@/lib/company-facts";

// "SAM Tech at a glance" fact list + company FAQ.
// Plain, quotable statements so search engines and AI assistants can
// describe SAM Tech accurately. Copy lives in src/lib/company-facts.js.
export default function CompanyFacts() {
  const { language } = useLanguage();
  const copy = COMPANY_FACTS[language === "ar" ? "ar" : "en"];

  return (
    <section className="serviceSeo companyFacts" aria-labelledby="company-facts-title">
      <div className="container">
        <h2 id="company-facts-title" className="fontSize24 fontWeight600 blackText_Clr mb_16">
          {copy.title}
        </h2>
        <dl className="companyFacts-list">
          {copy.facts.map((f) => (
            <div className="companyFacts-row" key={f.label}>
              <dt className="fontSize16 fontWeight600 blackText_Clr">{f.label}</dt>
              <dd className="fontSize16 fontWeight400 shearwaterBlackText_clr">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="serviceSeo-faq">
          <h2 className="fontSize24 fontWeight600 blackText_Clr mb_16">{copy.faqTitle}</h2>
          <div className="serviceSeo-faqGrid">
            {copy.faqs.map((f) => (
              <div className="serviceSeo-faqItem" key={f.q}>
                <h3 className="fontSize18 fontWeight600 blackText_Clr mb_8">{f.q}</h3>
                <p className="fontSize16 fontWeight400 shearwaterBlackText_clr">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <nav className="serviceSeo-related" aria-label="SAM Tech">
          <ul>
            <li>
              <Link href="/services">{language === "ar" ? "جميع الخدمات" : "All services"}</Link>
            </li>
            <li>
              <Link href="/contact-us">{language === "ar" ? "اطلب عرض سعر" : "Request a quotation"}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
