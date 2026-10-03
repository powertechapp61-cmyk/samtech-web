"use client"
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Service = ({ pageData, pagename, navKey, copy }) => {
  // const[serviceType,setServiceType] =useState('ro_membrane');
  const { t, language } = useLanguage();
  const page = pageData;
  // Keyword-led H1, intro and breadcrumb label come from src/lib/service-seo-content.js (EN + AR)
  const lang = language === "ar" ? "ar" : "en";
  const heading = copy?.[lang]?.h1 || (language === "ar" && navKey ? t(navKey) : page.title);
  const intro = copy?.[lang]?.intro || page.bannerparagraph;
  const crumb = copy?.[lang]?.linkText || heading;

  const blankPages = [
    "online_safety_testing",
    "offline_valve_testing",
    "alltype_valve_services",
    // "technical_manpower_supply_for_power_plant_refineries_and_water_plant",
    // "hot_tapping",
    // "heat_exchanger",
    "ro_membrane",
    "ro_plant_epc_contracts",
    // "upvc_aluminiumdoors_windowsfabrication"
    
  ];

  return (
    <>
      <section className='hero-banner'
      // style={{
      //   backgroundImage: `url(${page.banner})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
      >
        <div className="container height100per">
          <div className='row alignItem_center height100per' >
            <div className='col-lg-6'>
              <div className='innerpage_bnrContent'>
                <nav aria-label="Breadcrumb">
                <ul className='page_breadcrumb'>
                  <li><Link href={"/"}> {t("common.home")}</Link></li>
                  <li aria-hidden="true"><img src="/assets/img/rightIcon.svg" alt='' /> </li>
                  <li><Link href="/services">{t("header.nav.services")}</Link></li>
                  <li aria-hidden="true"><img src="/assets/img/rightIcon.svg" alt='' /> </li>
                  <li aria-current="page">{crumb}</li>
                </ul>
                </nav>
                <h1>{heading}</h1>
                {/* <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{page.subTitle}</p> */}
                <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{intro}</p>
                {/* <button className='mainbtn' >Contact Us</button> */}
                <Link className='mainbtn' href='#to-know-more-contact-us'>{t("common.contactUsBtn")}</Link>
              </div>
            </div>
            <div className='col-lg-5 offset-lg-1'>
              <div 
                className={`textalign_center defaultWidth ${pagename === "online_seal_leaking"
                  ? "hero-banner_img"
                    : blankPages.includes(pagename)
                      ? ""
                      : "hero-banner_img"
                  }`}>
               {/* className={`textalign_center defaultWidth ${pagename === "online_seal_leaking" ? "seal-img" : "hero-banner_img" && pagename === "online_safety_testing" ? " " : "hero-banner_img" && pagename === "offline_valve_testing" ? " " : "hero-banner_img" && pagename === "alltype_valve_services" ? " " : "hero-banner_img" && pagename === "hot_tapping" ? " " : "hero-banner_img" && pagename === "heat_exchanger" ? " " : "hero-banner_img" && pagename === "ro_membrane" ? " " : "hero-banner_img" && pagename === "upvc_aluminiumdoors_windowsfabrication" ? " " : "hero-banner_img"  }`} > */}
                <img src={page.bannerImg}
                  alt={`${page.title} – SAM Tech Saudi Arabia`}
                  fetchPriority="high" />


              </div>
            </div>
          </div>
        </div>
      </section>



      <section className='serviceContentpart'>
        <div className="container">
          {/* <div className='row'>
            <div className='col-lg-6 mobspaceMb_24'>
              {page.imgs.map((img, index) => (
                <div key={index}>
                  <div className='serviceContentImg'>
                    <img src={img} alt={`service-img-${index}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className='col-lg-6'>
              {page.content.map((item, index) => (
                <p key={index} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{item}</p>
              ))}
            </div>

          </div> */}

        
            {page.content}
        </div>
      </section>

      {/* <section>
        <div className='container'>
          <div>
            {page.clients.length > 0 && page.clients.map((client, index) => (
              <div key={index} className='mt_50'>
                <h5 className='Headquarters Location'>{client.name}</h5>
                <ul>
                  {client.companines.map((company, cIndex) => (
                    <li key={cIndex} className='fontSize16 fontWeight400 blackText_Clr mb_24'>{company}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}




    </>
  );
}

export default Service;
