"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Marquee from "react-fast-marquee";

// import leftPlant from "";
// import rightPlant from "/assets/img/right-plant.webp";
// import iso9001 from "/assets/img/iso9001.png";
// import iso45001 from "/assets/img/iso45001.png";
import {
    FaBuilding,
    FaFileInvoice,
    FaShieldAlt,
    FaLeaf,
    FaArrowRight,
} from "react-icons/fa";



import {
    FaIndustry,
    FaCertificate,
    FaMapMarkerAlt,
    FaTools,
    FaCog,
    FaFileInvoiceDollar,
    FaBolt,
    FaOilCan,
    FaWater,
} from "react-icons/fa";

import {
    FiAward,
    FiUsers,
    FiShield,
    FiGlobe,
} from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import { CLIENT_LOGOS } from "@/lib/clients";



const page = () => {
    const { t } = useLanguage();
    const marqueeRef = useRef(null);

    const stats = [
        {
            icon: <FiAward />,
            value: "15+",
            title: t("company.stats.years"),
        },
        {
            icon: <FiUsers />,
            value: "200+",
            title: t("company.stats.satisfiedCustomers"),
        },
        {
            icon: <HiOutlineOfficeBuilding />,
            value: "500+",
            title: t("company.stats.employees"),
        },
        {
            icon: <FiShield />,
            value: "ISO",
            title: t("company.stats.isoCertified"),
        },
        { 
            icon: <FiGlobe />,
            value: "GCC",
            title: t("company.stats.gccIndia"),
        },
    ];

    const clients = [
        {
            title: t("company.clients.nomacTitle"),
            desc: t("company.clients.nomacDesc"),
            logo: "/assets/img/nomac.png",
        },
        {
            title: t("company.clients.engieTitle"),
            desc: t("company.clients.engieDesc"),
            logo: "/assets/img/engie.png",
        },
        {
            title: t("company.clients.rpcTitle"),
            desc: t("company.clients.rpcDesc"),
            logo: "/assets/img/rpc.png",
        },
        {
            title: t("company.clients.keyClientsTitle"),
            desc: t("company.clients.keyClientsDesc"),
            logo: "/assets/img/our-key-clients-in-the-Kingdom.png",
        },
    ];

    const certificates = [
        {
            icon: <FaBuilding />,
            title: "Company Registration",
            desc: "Fully registered and licensed to operate across the Kingdom of Saudi Arabia.",
        },
        {
            icon: <FaFileInvoice />,
            title: "VAT Certification",
            desc: "Registered and compliant with Saudi VAT regulations.",
        },
        {
            icon: <FaShieldAlt />,
            title: "GE FieldCore Comply Works",
            desc: "Contractor Verification Score : 100",
        },
    ];
    return (
        <>
            <section className='hero-banner'>
                <div className="container height100per">
                    <div className='row alignItem_center height100per' >
                        <div className='col-lg-6'>
                            <div className='innerpage_bnrContent'>
                                <ul className='page_breadcrumb'>
                                    <li><Link href={"/"}> {t("common.home")}</Link></li>
                                    <li aria-hidden="true"><img src="/assets/img/rightIcon.svg" alt='' /> </li>
                                    <li>{t("company.breadcrumbCompany")}</li>
                                    <li aria-hidden="true"><img src="/assets/img/rightIcon.svg" alt='' /> </li>
                                  
                                    <li aria-current="page"> {t("company.breadcrumbAboutUs")}</li>
                                </ul>
                                <h1>{t("company.ourVision")}</h1>
                                {/* <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{page.subTitle}</p> */}
                                <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{t("company.visionText")}</p>
                                <Link href="/contact-us" className='mainbtn'>{t("common.contactUsBtn")}</Link>
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className="hero-banner_img" >
                                <img src="/assets/img/company-photo/sl6.jpg"
                                    alt="SAM Technical Service Contracting Est team on site in Saudi Arabia" fetchPriority="high" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className='companyHistory_sec'>
            <div className='container'>

                  <div className='companyHistoryGrid'>

                      <div> ISO 9001 CERTIFIED</div>

                      <div>

                          OPERATION & MAINTENANCE SERVICE PROVIDER
                      </div>

                      <div>
                          POWER PLANT SPECIALIST
                      </div>
                      <div>
                          15+ YEARS & COUNTING
                      </div>

                      <div>
                          200+ SATISFIED CUSTOMER
                      </div>
                      
                      <div>
                          500+ EMPLOYEES
                      </div>
                      <div>
                          ISO 45001 CERTIFIED
                      </div>
                      <div>PRESENT IN GCC & INDIA</div>
                </div>

                 


               

                 

            

               

             

                  
            </div>
          </section> */}



            <section className="aboutSection">
                {/* Decorative Background */}
                <div className="bgCircle bgOne"></div>
                <div className="bgCircle bgTwo"></div>

                {/* Side Power Plants */}
                <img
                    src="/assets/img/left-plant.webp"
                    alt=""
                    aria-hidden="true"
                    className="plant plantLeft"
                />

                <img
                    src="/assets/img/right-plant.webp"
                    alt=""
                    aria-hidden="true"
                    className="plant plantRight"
                />

                <div className="container">

                    {/* Heading */}

                    <span className="sectionTag">
                        {t("company.aboutTag")}
                    </span>

                    <div className="badgeRow">

                        <img
                            src="/assets/img/iso9001.png"
                            alt="ISO 9001 certified"
                            className="isoBadge"
                        />

                        <div className="headingContent">

                            <h2 className="headingMain">
                                {t("company.opMaintHeading")}
                            </h2>

                            <div className="headingSub">
                                {t("company.serviceProviderHeading")}
                            </div>

                            <p>
                                {t("company.powerPlantSpecialist")}
                            </p>

                        </div>

                        <img
                            src="/assets/img/iso45001.png"
                            alt="ISO 45001 certified"
                            className="isoBadge"
                        />

                    </div>

                    {/* Statistics */}

                    <div className="statsGrid">

                        {stats.map((item, index) => (
                            <div className="statCard" key={index}>

                                <div className="iconCircle">
                                    {item.icon}
                                </div>

                                <h3>{item.value}</h3>

                                <span>{item.title}</span>

                            </div>
                        ))}

                    </div>

                </div>


            </section>




            <section className="who-we-are-sec">
                <div className="container">

                    <div className="row">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-7">
                            <div className="who-we-are-content">


                                <h2>
                                    <span>{t("company.whoWeAreTitlePre")}</span> {t("company.whoWeAreTitlePost")}
                                </h2>

                                <div className="title-line"></div>

                                <p>
                                    <strong>{t("company.whoWeAreP1Bold")}</strong> {t("company.whoWeAreP1Rest")}
                                </p>

                                <p>{t("company.whoWeAreP2")}</p>

                                <p>{t("company.whoWeAreP3")}</p>

                                {/* FEATURES */}

                                <div className="feature-grid">

                                    <div className="feature-card">
                                        <FaMapMarkerAlt />
                                        <h4>{t("company.featureHeadquartered")}</h4>
                                        <span>{t("company.featureHeadquarteredValue")}</span>
                                    </div>

                                    <div className="feature-card">
                                        <FiUsers />
                                        <h4>{t("company.featurePowerTechGroup")}</h4>
                                        <span>{t("company.featurePowerTechGroupValue")}</span>
                                    </div>

                                    <div className="feature-card">
                                        <FaCertificate />
                                        <h4>{t("company.featureIsoCertified")}</h4>
                                        <span>{t("company.featureIsoCertifiedValue")}</span>
                                    </div>

                                    <div className="feature-card">
                                        <FaFileInvoiceDollar />
                                        <h4>{t("company.featureVatRegistered")}</h4>
                                        <span>{t("company.featureVatRegisteredValue")}</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="col-lg-5">
                            <div className="who-we-are-image">

                                <img className='mb_24'
                                    src="/assets/img/aboutus_bnr.jpg"
                                    alt="Industrial plant served by SAM Tech in Saudi Arabia"
                                    loading="lazy"
                                />

                                <div className="service-box">

                                    <div className="services">

                                        <div className="service">
                                            <FaIndustry />
                                            <span>{t("company.servicesEngineering")}</span>
                                        </div>

                                        <div className="service">
                                            <FaCog />
                                            <span>{t("company.servicesOpMaint")}</span>
                                        </div>

                                        <div className="service">
                                            <FaTools />
                                            <span>{t("company.servicesManpower")}</span>
                                        </div>

                                    </div>

                                    <div className="industry">

                                        <h4>{t("company.servingIndustries")}</h4>

                                        <div className="industry-list">

                                            <span><FaBolt /> {t("company.industryPower")}</span>

                                            <span><FaOilCan /> {t("company.industryOilGas")}</span>

                                            <span><FaIndustry /> {t("company.industryPetrochemical")}</span>

                                            <span><FaWater /> {t("company.industryWater")}</span>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>


            <section className="vision-mission-section">

                {/* <!-- Vision --> */}
                {/* <div class="vm-row vision">

                    <div class="vm-content">
                        <span class="vm-label">OUR VISION</span>
                        <div class="line"></div>

                        <p>
                            To be the most trusted and technically capable one-stop service
                            partner for power, water, and industrial plant operations across
                            Saudi Arabia and the wider GCC — delivering safe, reliable, and
                            cost-effective solutions that keep our clients' assets performing
                            at their peak.
                        </p>
                    </div>

                    <div class="vm-image">
                        <img src="/assets/img/aboutus_bnr.jpg" alt="" />
                    </div>

                </div> */}

                {/* <!-- Mission --> */}
                <div className="vm-row mission">

                    <div className="vm-image">
                        <img src="/assets/img/aboutus_bnr.jpg" alt="SAM Tech engineers at an industrial plant" loading="lazy" />
                    </div>

                    <div className="vm-content dark">

                        <span className="vm-label">
                            {t("company.missionLabelPre")} <span>{t("company.missionLabelHighlight")}</span>
                        </span>

                        <div className="line"></div>

                        <p>
                            {t("company.missionP1")}
                        </p>

                        <p>
                            {t("company.missionP2")}
                        </p>

                    </div>

                </div>

            </section>



            <section className="whatwedo-sec">
                <div className='container'>

                    {/* <div className="row"> */}

                    <div className="hero-content">

                        <span className="section-tag">
                            {t("company.whatWeDoTag")}
                        </span>

                        <h2>
                            {t("company.whatWeDoHeadingLine1")}
                            <br />
                            {t("company.whatWeDoHeadingLine2")}
                        </h2>

                        <p>
                            {t("company.whatWeDoP1")}
                        </p>

                        <p>
                            {t("company.whatWeDoP2")}
                        </p>

                    </div>

                    {/* <div className="hero-image col-lg-6">
                            <img src="/images/what-we-do-banner.jpg" alt="" />
                        </div>

                    </div> */}

                    <div className="heading">
                        <h3>{t("company.coreServiceCapabilities")}</h3>
                    </div>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr  mb_34'>{t("company.coreServiceText")}</p>



                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/online_safety_valve_testing_img.jpg" alt='Online safety valve testing in Saudi Arabia' loading='lazy' />
                                    <Link href="/services/online-safety-valve-testing">
                                        <img src="/assets/img/bx_link.svg" alt='View service details' />
                                    </Link>
                                </div>
                                <div className="service-caption">
                                    <Link href="/services/online-safety-valve-testing">
                                        <h3>{t("company.services.valveTesting")}</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>

                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/online_leak_sealing_home.webp" alt='Online leak sealing' loading='lazy' />


                                    <Link href="/services/online-leak-sealing">
                                        <img src="/assets/img/bx_link.svg" alt='View service details' />
                                    </Link>




                                </div>
                                <div className="service-caption">
                                    <Link href="/services/online-leak-sealing">
                                        <h3>{t("company.services.leakSealing")}</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/hottapping_home.jpg" alt='Hot tapping on a live pipeline' loading='lazy' />

                                    <Link href="/services/hot-tapping">
                                        <img src="/assets/img/bx_link.svg" alt='View service details' />
                                    </Link>


                                </div>
                                <div className="service-caption">
                                    <Link href="/services/hot-tapping">
                                        <h3>{t("company.services.hotTapping")}</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/heat_exchanger_maintenance_home.jpg" alt='Heat exchanger maintenance' loading='lazy' />

                                    <Link href="/services/heat-exchanger-maintenance">
                                        <img src="/assets/img/bx_link.svg" alt='View service details' />
                                    </Link>


                                </div>
                                <div className="service-caption">
                                    <Link href="/services/heat-exchanger-maintenance">  <h3>{t("company.services.heatExchanger")}</h3></Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/technical_manpower_provisioning_home.jpg" alt='Technical manpower supply for power plants, refineries and water plants' loading='lazy' />

                                    <Link href="/services/technical-manpower-supply">
                                        <img src="/assets/img/bx_link.svg" alt='View service details' />
                                    </Link>

                                </div>
                                <div className="service-caption">
                                    <Link href="/services/technical-manpower-supply">
                                        <h3>{t("company.services.manpower")}</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/ro_plant_epc_contracts_home.jpg" alt='RO plant EPC contracts' loading='lazy' />

                                    <Link href="/services/ro-plant-epc-contracts">
                                        <img src="/assets/img/bx_link.svg" alt='View service details' />
                                    </Link>


                                </div>
                                <div className="service-caption">
                                    <Link href="/services/ro-plant-epc-contracts"> <h3>{t("company.services.roEpc")}</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>

                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/ro-plants-retro-fitting_home.jpg" alt='RO plant retrofitting' loading='lazy' />


                                    <Link href="/services/ro-plant-retrofitting">
                                        <img src="/assets/img/bx_link.svg" alt='View service details' />
                                    </Link>

                                </div>
                                <div className="service-caption">
                                    <Link href="/services/ro-plant-retrofitting"> <h3>{t("company.services.roRetro")}</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/solar-plant_epc_home.jpeg" alt='Solar plant EPC' loading='lazy' />

                                    <Link href="/services/solar-plant-epc">
                                        <img src="/assets/img/bx_link.svg" alt='View service details' />
                                    </Link>


                                </div>
                                <div className="service-caption">
                                    <Link href="/services/solar-plant-epc"> <h3>{t("company.services.solarEpc")}</h3> </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/upvc_home.webp" alt='UPVC and aluminium doors and windows fabrication' loading='lazy' />

                                    <Link href="/services/upvc-aluminium-doors-windows">
                                        <img src="/assets/img/bx_link.svg" alt='View service details' />
                                    </Link>



                                </div>
                                <div className="service-caption">
                                    <Link href="/services/upvc-aluminium-doors-windows"> <h3>{t("company.services.upvc")}</h3></Link>
                                </div>
                            </div>
                        </div>


                        {/* sasas */}
                        {/* <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/offline_valve_testing_home.webp" alt='Offline Valve Testing' />

                                    <Link href="/services/offline-valve-testing">
                                        <img src="/assets/img/bx_link.svg" alt='View service details' />
                                    </Link>

                                </div>
                                <div className="service-caption">
                                    <Link href="/services/offline-valve-testing"><h3>Offline Valve Testing</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/valve_service_home.jpeg" alt='All Types of Valve Servicing' />
                                    <Link href="/services/industrial-valve-servicing">
                                        <img src="/assets/img/bx_link.svg" alt='View service details' />
                                    </Link>
                                </div>
                                <div className="service-caption">
                                    <Link href="/services/offline-valve-testing">
                                        <h3>All Types of Valve Servicing</h3></Link>
                                </div>
                            </div>
                        </div> */}










                    </div>

                </div>
            </section>


            <section className="credentials-section">

                <div className="container">

                    {/* Heading */}

                    <div className="section-heading">

                        <span>{t("company.credentialsTag")}</span>

                        <h2>
                            {t("company.credentialsHeadingLine1")}<br />
                            {t("company.credentialsHeadingLine2")}
                        </h2>

                        <p>{t("company.credentialsText")}

                        </p>

                    </div>

                    {/* Client Cards */}

                    <div className="client-title">

                        <h3>{t("company.clientTitle")}</h3>

                    </div>

                    <div className="clients-grid">

                        {clients.map((item, index) => (

                            <div className="client-card" key={index}>

                                <div className="client-logo">

                                    <img src={item.logo} alt={item.title} />

                                </div>

                                <h4>{item.title}</h4>

                                <p>{item.desc}</p>


                            </div>

                        ))}

                    </div>


                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("company.complianceText")}</p>



                </div>

            </section>
            <section className="presence-section">
                <div className="container">
                        <div className='row'>
                    <div className="col-lg-6 presence-left">

                        {/* <h2>OUR PRESENCE</h2> */}
                        {/* <span className="section-tag">Rooted in <span>Saudi Arabia.</span><br />
                            Connected Across the Region.</span> */}

                            <h2 className="site-title mb_24">{t("company.presenceHeadingPre")} <span>{t("company.presenceHeadingHighlight")}</span></h2>


                        <p>{t("company.presenceText")}</p>

                       
                    </div>

                    <div className="col-lg-6 presence-right">
                        <img src="/assets/img/our-presence.webp" alt="SAM Tech and Power Tech Group presence in Saudi Arabia, UAE, Qatar, Bahrain and India" loading="lazy" />
                    </div>
                    </div>

                </div>
            </section>
            <section className='why-choose-stsc-sec'>
                <div className='container'>
                        {/* <span className="site-title-tagline textalign_center">--- Client ---</span> */}
                        <h2 className="site-title mb_24">
                            <span>{t("company.whyChooseTitlePre")}</span> {t("company.whyChooseTitlePost")}
                        </h2>

                    <ul>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t("company.whyChoosePoints.0")}</li>

                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t("company.whyChoosePoints.1")}</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t("company.whyChoosePoints.2")}</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t("company.whyChoosePoints.3")}</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t("company.whyChoosePoints.4")}</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t("company.whyChoosePoints.5")}</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("company.whyChoosePoints.6")}</li>

                    </ul>

                </div>
            </section>
            <section className='clientlogosec'>
                <div className="site-heading">
                    {/* <span className="site-title-tagline textalign_center">--- Client ---</span> */}
                    <h2 className="site-title textalign_center">
                        <span>{t("home.valveServicesSpan")}</span> {t("home.valveServicesLine1")} <br /> {t("home.valveServicesLine2")}
                    </h2>
                </div>
                <div className="customerLogos">

                    <Marquee direction="left" ref={marqueeRef} speed={70} className="marquee" loop={0}>
                        {CLIENT_LOGOS.slice(4, 19).map((c) => (
                            <div className='clientLogo_item' key={c.src}>
                                <img src={c.src} alt={`${c.name} logo`} title={c.name} loading="lazy" />
                            </div>
                        ))}
                    </Marquee>
                    <Marquee className="marquee" direction="right" loop={0} speed={70} >
                        {CLIENT_LOGOS.slice(19).map((c) => (
                            <div className='clientLogo_item' key={c.src}>
                                <img src={c.src} alt={`${c.name} logo`} title={c.name} loading="lazy" />
                            </div>
                        ))}
                    </Marquee>


                </div>
            </section>
        </>
    )
}

export default page
