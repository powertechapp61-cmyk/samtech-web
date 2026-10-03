"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { SERVICES } from "@/lib/seo";
import { SERVICE_COPY, SERVICES_HUB } from "@/lib/service-seo-content";

export default function ServicesHub() {
  const { t, language } = useLanguage();
  const lang = language === "ar" ? "ar" : "en";
  const hub = SERVICES_HUB[lang];

  return (
    <>
      <section className="hero-banner">
        <div className="container height100per">
          <div className="row alignItem_center height100per">
            <div className="col-lg-6">
              <div className="innerpage_bnrContent">
                <nav aria-label="Breadcrumb">
                  <ul className="page_breadcrumb">
                    <li><Link href="/">{t("common.home")}</Link></li>
                    <li aria-hidden="true"><img src="/assets/img/rightIcon.svg" alt="" /></li>
                    <li aria-current="page">{t("header.nav.services")}</li>
                  </ul>
                </nav>
                <h1>{hub.h1}</h1>
                <p className="fontSize16 fontWeight400 blackText_Clr mb_24">{hub.intro}</p>
                <Link href="/contact-us" className="mainbtn">{t("common.contactUsBtn")}</Link>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="hero-banner_img">
                <img
                  src="/assets/img/operation_and_maintainance_service_provider.jpg"
                  alt="Industrial maintenance and valve services for power and process plants in Saudi Arabia"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="servicesHub">
        <div className="container">
          <div className="servicesHub-grid">
            {SERVICES.map((s) => {
              const copy = SERVICE_COPY[s.id]?.[lang];
              const name = lang === "ar" ? copy?.linkText || t(s.navKey) : s.title;
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="servicesHub-card">
                  <img src={s.image} alt={`${s.title} in Saudi Arabia`} loading="lazy" />
                  <div className="servicesHub-body">
                    <h2>{name}</h2>
                    <p>{copy?.intro}</p>
                    <span aria-hidden="true">{hub.cta} {lang === "ar" ? "←" : "→"}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
