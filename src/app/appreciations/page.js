"use client";
import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const page = () => {
    const { t } = useLanguage();
    const onInit = () => {
        console.log("✅ LightGallery initialized successfully!");
    };





    const crCopiesItems = [
        {
            type: "image",
            src: "/assets/img/testmonials/c1.jpg",
            thumb: "/assets/img/testmonials/c1.jpg",
            caption: t("appreciations.captions.crStsc"),
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c2.jpg",
            thumb: "/assets/img/testmonials/c2.jpg",
            caption: t("appreciations.captions.crValveTech"),
        },
        {
            type: "image",
            src: "/assets/img/testmonials/company-registration-certificate-sam-tech.png",
            thumb: "/assets/img/testmonials/company-registration-certificate-sam-tech.png",
            caption: t("appreciations.captions.crSamTech"),
        },
        {
            type: "image",
            src: "/assets/img/testmonials/vat-certificate.jpg",
            thumb: "/assets/img/testmonials/vat-certificate.jpg",
            caption: t("appreciations.captions.vatCertificate"),
        },
    ]


    const isoItems = [
        {
            type: "image",
            src: "/assets/img/testmonials/c3.jpg",
            thumb: "/assets/img/testmonials/c3.jpg",
            caption: t("appreciations.captions.isoQuality"),
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c4.jpg",
            thumb: "/assets/img/testmonials/c4.jpg",
            caption: t("appreciations.captions.isoOccupational"),
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c5.jpg",
            thumb: "/assets/img/testmonials/c5.jpg",
            caption: t("appreciations.captions.isoGreen"),
        },
    ]

 

    const appLetterItems = [
        {
            type: "image",
            src: "/assets/img/testmonials/c6.jpg",
            thumb: "/assets/img/testmonials/c6.jpg",
            caption: t("appreciations.captions.mitsubishiLetter"),
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c7.jpg",
            thumb: "/assets/img/testmonials/c7.jpg",
            caption: t("appreciations.captions.ewaHawarLetter"),
        },
        {
            type: "image",
            src: "/assets/img/testmonials/c8.jpg",
            thumb: "/assets/img/testmonials/c8.jpg",
            caption: t("appreciations.captions.nomacLetter"),
        },
        {
            type: "image",
            src: "/assets/img/testmonials/vat4.jpg",
            thumb: "/assets/img/testmonials/vat4.jpg",
            caption: t("appreciations.captions.vatCertificate"),
        },

        {
            type: "image",
            src: "/assets/img/testmonials/c55.jpg",
            thumb: "/assets/img/testmonials/c55.jpg",
            caption: t("appreciations.captions.geFieldcoreCard"),
        },

        {
            type: "image",
            src: "/assets/img/testmonials/5.jpg",
            thumb: "/assets/img/testmonials/5.jpg",
            caption: t("appreciations.captions.gpicThanks"),
        },
        {
            type: "image",
            src: "/assets/img/testmonials/7.jpg",
            thumb: "/assets/img/testmonials/7.jpg",
            caption: t("appreciations.captions.customerRatings"),
        },

        {
            type: "image",
            src: "/assets/img/testmonials/eco.jpeg",
            thumb: "/assets/img/testmonials/eco.jpeg",
            caption: t("appreciations.captions.ecovadis"),
        },


        {
            type: "image",
            src: "/assets/img/testmonials/certificate_for_outstanding_worker_one.jpeg",
            thumb: "/assets/img/testmonials/certificate_for_outstanding_worker_one.jpeg",
            caption: t("appreciations.captions.outstandingWorkerOne"),
        },

        {
            type: "image",
            src: "/assets/img/testmonials/certificate_for_outstanding_worker_two.jpg",
            thumb: "/assets/img/testmonials/certificate_for_outstanding_worker_two.jpg",
            caption: t("appreciations.captions.outstandingWorkerTwo"),
        },
    ]


    const referencePos = [
        {
            type: "image",
            src: "/assets/img/testmonials/engie_fadhili.jpg",
            thumb: "/assets/img/testmonials/engie_fadhili.jpg",
            caption: t("appreciations.captions.engieFadhili"),
        },
        {
            type: "image",
            src: "/assets/img/testmonials/nomac_red_sea_long_term_manpower.jpg",
            thumb: "/assets/img/testmonials/nomac_red_sea_long_term_manpower.jpg",
            caption: t("appreciations.captions.nomacRedSea"),
        },

    ]

    
  return (
    <>
          <section className='hero-banner'>
              <div className='container'>
                  <div className='row alignItem_center' >
                      <div className='col-lg-6'>
                          <div className='innerpage_bnrContent'>
                              <h1>{t("appreciations.pageTitle")}</h1>
                              <p>{t("appreciations.intro")}</p>
                              <Link  href="/contact-us" className='mainbtn'>{t("common.contactUsBtn")}</Link>
                          </div>
                      </div>
                      <div className='col-lg-5 offset-lg-1'>
                          <div className='hero-banner_img'>
                              <img className="img-1" src="/assets/img/company-photo/slider1.jpg" alt="about us img" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>



          <section className='ourInfrastructure_sec'>
              <div className='container textalign_center'>
                  <Tabs
                      defaultActiveKey="appreciationLetterTab"
                      id="uncontrolled-tab-example"
                      className="stscTab"
                  >
                      <Tab eventKey="crCopiesTab" title={t("appreciations.tabs.crCopies")}>
                          <div className="crCopiesTab">
                              <LightGallery
                                  onInit={onInit}
                                  speed={500}
                                  plugins={[lgZoom, lgThumbnail]}
                              >
                                  {crCopiesItems.map((crCopiesItem, i) => (

                                      <a key={i}
                                          href={crCopiesItem.src}
                                          data-sub-html={`<h4>${crCopiesItem.caption}</h4>`}
                                          data-poster={crCopiesItem.type === "video" ? crCopiesItem.thumb : undefined}
                                      >
                                          <img
                                              src={crCopiesItem.thumb}
                                              alt={crCopiesItem.caption}
                                          />

                                          <h5>{crCopiesItem.caption}</h5>
                                      </a>
                                  ))}
                              </LightGallery>
                          </div>

                      </Tab>
                      <Tab eventKey="isoCertificateTab" title={t("appreciations.tabs.isoCertificate")}>

                          <div className="isoTab">
                              <LightGallery
                                  onInit={onInit}
                                  speed={500}
                                  plugins={[lgZoom, lgThumbnail]}
                              >
                                  {isoItems.map((isoItem, i) => (

                                      <a key={i}
                                          href={isoItem.src}
                                          data-sub-html={`<h4>${isoItem.caption}</h4>`}
                                          data-poster={isoItem.type === "video" ? isoItem.thumb : undefined}
                                      >
                                          <img
                                              src={isoItem.thumb}
                                              alt={isoItem.caption}
                                          />
                                          <h5>{isoItem.caption}</h5>
                                      </a>
                                  ))}
                              </LightGallery>
                          </div>
                      </Tab>
                      <Tab eventKey="appreciationLetterTab" title={t("appreciations.tabs.appreciationLetter")}>


                          <div className=" appLetterTab">
                              <LightGallery
                                  onInit={onInit}
                                  speed={500}
                                  plugins={[lgZoom, lgThumbnail]}
                              >
                                  {appLetterItems.map((appLtrItem, i) => (

                                      <a key={i}
                                          href={appLtrItem.src}
                                          data-sub-html={`<h4>${appLtrItem.caption}</h4>`}
                                          data-poster={appLtrItem.type === "video" ? appLtrItem.thumb : undefined}
                                      >
                                          <img
                                              src={appLtrItem.thumb}
                                              alt={appLtrItem.caption}
                                          />
                                          <h5>{appLtrItem.caption}</h5>
                                      </a>
                                  ))}
                              </LightGallery>
                          </div>
                      </Tab>

                      <Tab eventKey="referenceTab" title={t("appreciations.tabs.reference")}
                      >
                          
                          <div className="appLetterTab">
                              <LightGallery
                                  onInit={onInit}
                                  speed={500}
                                  plugins={[lgZoom, lgThumbnail]}
                              >
                                  {referencePos.map((referencePoItem, i) => (

                                      <a key={i}
                                          href={referencePoItem.src}
                                          data-sub-html={`<h4>${referencePoItem.caption}</h4>`}
                                          data-poster={referencePoItem.type === "video" ? referencePoItem.thumb : undefined}
                                      >
                                          <img
                                              src={referencePoItem.thumb}
                                              alt={referencePoItem.caption}
                                          />
                                          <h5>{referencePoItem.caption}</h5>
                                      </a>
                                  ))}
                              </LightGallery>
                          </div>
                      </Tab>

                  </Tabs>
              </div>
          </section>
    </>
  )
}

export default page
