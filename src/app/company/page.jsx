"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Marquee from "react-fast-marquee";

// import leftPlant from "";
// import rightPlant from "/assets/img/right-plant.png";
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
                                    <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                    <li><Link href={'/company'}>{t("company.breadcrumbCompany")}</Link></li>
                                    <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                  
                                    <li> {t("company.breadcrumbAboutUs")}</li>
                                </ul>
                                <h1>{t("company.ourVision")}</h1>
                                {/* <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{page.subTitle}</p> */}
                                <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{t("company.visionText")}</p>
                                <button className='mainbtn'>{t("common.contactUsBtn")}</button>
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className="hero-banner_img" >
                                <img src="/assets/img/gallery_img/01653488601.jpeg"
                                    alt="company" />
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
                    src="/assets/img/left-plant.png"
                    alt="Power Plant"
                    className="plant plantLeft"
                />

                <img
                    src="/assets/img/right-plant.png"
                    alt="Power Plant"
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
                            alt="ISO 9001"
                            className="isoBadge"
                        />

                        <div className="headingContent">

                            <h1>
                                {t("company.opMaintHeading")}
                            </h1>

                            <h2>
                                {t("company.serviceProviderHeading")}
                            </h2>

                            <p>
                                {t("company.powerPlantSpecialist")}
                            </p>

                        </div>

                        <img
                            src="/assets/img/iso45001.png"
                            alt="ISO 45001"
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
                                    alt="Industrial Plant"
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


            <section class="vision-mission-section">

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
                <div class="vm-row mission">

                    <div class="vm-image">
                        <img src="/assets/img/aboutus_bnr.jpg" alt="" />
                    </div>

                    <div class="vm-content dark">

                        <span class="vm-label">
                            {t("company.missionLabelPre")} <span>{t("company.missionLabelHighlight")}</span>
                        </span>

                        <div class="line"></div>

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
                                    <img src="/assets/img/online_safety_valve_testing_img.jpg" alt='Online Safety Valve Testing' />
                                    <Link href="/service-page/online_safety_testing">
                                        <img src="/assets/img/bx_link.svg" alt='link' />
                                    </Link>
                                </div>
                                <div className="service-caption">
                                    <Link href="/service-page/online_safety_testing">
                                        <h3>{t("company.services.valveTesting")}</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>

                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/online_leak_sealing_home.png" alt='Online Leak Sealing' />


                                    <Link href="/service-page/online_seal">
                                        <img src="/assets/img/bx_link.svg" alt='link' />
                                    </Link>




                                </div>
                                <div className="service-caption">
                                    <Link href="/service-page/technical_manpower_supply_for_power_plant_refineries_and_water_plant">
                                        <h3>{t("company.services.leakSealing")}</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/hottapping_home.jpg" alt='Hot Tapping' />

                                    <Link href="/service-page/hot_tapping">
                                        <img src="/assets/img/bx_link.svg" alt='link' />
                                    </Link>


                                </div>
                                <div className="service-caption">
                                    <Link href="/service-page/hot_tapping">
                                        <h3>{t("company.services.hotTapping")}</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/heat_exchanger_maintenance_home.jpg" alt='Heat Exchanger, Maintenance' />

                                    <Link href="/service-page/heat_exchanger">
                                        <img src="/assets/img/bx_link.svg" alt='link' />
                                    </Link>


                                </div>
                                <div className="service-caption">
                                    <Link href="/service-page/heat_exchanger">  <h3>{t("company.services.heatExchanger")}</h3></Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/technical_manpower_provisioning_home.jpg" alt='Technical Manpower supply for Power plant refineries and Water plant' />

                                    <Link href="/service-page/technical_manpower_supply_for_power_plant_refineries_and_water_plant">
                                        <img src="/assets/img/bx_link.svg" alt='link' />
                                    </Link>

                                </div>
                                <div className="service-caption">
                                    <Link href="/service-page/technical_manpower_supply_for_power_plant_refineries_and_water_plant">
                                        <h3>{t("company.services.manpower")}</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/ro_plant_epc_contracts_home.jpg" alt='RO Plant EPC Contracts' />

                                    <Link href="/service-page/ro_plant_epc_contracts">
                                        <img src="/assets/img/bx_link.svg" alt='link' />
                                    </Link>


                                </div>
                                <div className="service-caption">
                                    <Link href="/service-page/ro_plant_epc_contracts"> <h3>{t("company.services.roEpc")}</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>

                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/ro-plants-retro-fitting_home.jpg" alt='RO Plants Retro  Fitting' />


                                    <Link href="/service-page/ro_membrane">
                                        <img src="/assets/img/bx_link.svg" alt='link' />
                                    </Link>

                                </div>
                                <div className="service-caption">
                                    <Link href="/service-page/ro_membrane"> <h3>{t("company.services.roRetro")}</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/solar-plant_epc_home.jpeg" alt='Solar Plant EPC' />

                                    <Link href="/service-page/solar_plant_epc">
                                        <img src="/assets/img/bx_link.svg" alt='link' />
                                    </Link>


                                </div>
                                <div className="service-caption">
                                    <Link href="/service-page/solar_plant_epc"> <h3>{t("company.services.solarEpc")}</h3> </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/upvc_home.png" alt='UPVC' />

                                    <Link href="/service-page/upvc_aluminiumdoors_windowsfabrication">
                                        <img src="/assets/img/bx_link.svg" alt='link' />
                                    </Link>



                                </div>
                                <div className="service-caption">
                                    <Link href="/service-page/upvc_aluminiumdoors_windowsfabrication"> <h3>{t("company.services.upvc")}</h3></Link>
                                </div>
                            </div>
                        </div>


                        {/* sasas */}
                        {/* <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/offline_valve_testing_home.png" alt='Offline Valve Testing' />

                                    <Link href="/service-page/offline_valve_testing">
                                        <img src="/assets/img/bx_link.svg" alt='link' />
                                    </Link>

                                </div>
                                <div className="service-caption">
                                    <Link href="/service-page/offline_valve_testing"><h3>Offline Valve Testing</h3></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="serviceItem">
                                <div className="service-img">
                                    <img src="/assets/img/valve_service_home.jpeg" alt='All Types of Valve Servicing' />
                                    <Link href="/service-page/alltype_valve_services">
                                        <img src="/assets/img/bx_link.svg" alt='link' />
                                    </Link>
                                </div>
                                <div className="service-caption">
                                    <Link href="/service-page/offline_valve_testing">
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
                        <img src="/assets/img/our-presence.png" alt="STSC Regional Presence" />
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
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c1.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c2.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c3.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c4.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c5.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c6.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c7.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c8.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c9.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c10.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c11.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c12.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c13.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c14.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c15.jpg" alt='' />
                        </div>
                    </Marquee>
                    <Marquee className="marquee" direction="right" loop={0} speed={70} >
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c16.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c17.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c18.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c19.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c20.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c21.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c22.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c23.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c24.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c25.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c26.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c27.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c28.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c29.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c30.jpg" alt='' />
                        </div>
                        <div className='clientLogo_item'>
                            <img src="/assets/img/clientlogo/c31.jpg" alt='' />
                        </div>
                    </Marquee>


                </div>
            </section>
        </>
    )
}

export default page
