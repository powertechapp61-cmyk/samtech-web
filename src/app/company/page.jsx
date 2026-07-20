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



const page = () => {
    const marqueeRef = useRef(null);

    const stats = [
        {
            icon: <FiAward />,
            value: "15+",
            title: "Years & Counting",
        },
        {
            icon: <FiUsers />,
            value: "200+",
            title: "Satisfied Customers",
        },
        {
            icon: <HiOutlineOfficeBuilding />,
            value: "500+",
            title: "Employees",
        },
        {
            icon: <FiShield />,
            value: "ISO",
            title: "45001, 9001 & 14001 Certified",
        },
        { 
            icon: <FiGlobe />,
            value: "GCC",
            title: "& India",
        },
    ];

    const clients = [
        {
            title: "NOMAC (ACWA Power) ",
            desc: "Appreciation letter for long-term manpower and valve services at Red Sea power stations",
            logo: "/assets/img/nomac.png",
        },
        {
            title: "ENGIE Fadhili O&M Company ",
            desc: "Commissioned for online safety valve testing at Fadhili Gas Plant",
            logo: "/assets/img/engie.png",
        },
        {
            title: "Petro Rabigh (RPC)",
            desc: "Successfully completed major valve overhauling services",
            logo: "/assets/img/rpc.png",
        },
        {
            title: "Saudi Aramco, YASREF, National Water Company, Saudi Electricity Company",
            desc: "among our key clients in the Kingdom",
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
                                    <li><Link href={"/"}> Home</Link></li>
                                    <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                    <li><Link href={'/company'}>Company</Link></li>
                                    <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                  
                                    <li> About Us</li>
                                </ul>
                                <h1>Our Vision</h1>
                                {/* <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{page.subTitle}</p> */}
                                <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>To be the most trusted and technically capable one-stop service partner for power, water, and industrial plant operations across Saudi Arabia and the wider GCC — delivering safe, reliable, and cost-effective solutions that keep our clients' assets performing at their peak.</p>
                                <button className='mainbtn'>Contact Us</button>
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
                        ABOUT US
                    </span>

                    <div className="badgeRow">

                        <img
                            src="/assets/img/iso9001.png"
                            alt="ISO 9001"
                            className="isoBadge"
                        />

                        <div className="headingContent">

                            <h1>
                                OPERATION & MAINTENANCE
                            </h1>

                            <h2>
                                SERVICE PROVIDER
                            </h2>

                            <p>
                                POWER PLANT SPECIALIST
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
                                    <span>Who</span> We Are
                                </h2>

                                <div className="title-line"></div>

                                <p>
                                    <strong>SAM Technical Service Contracting Est (STSC)</strong> is a
                                    Saudi Arabia-based technical services and contracting company
                                    headquartered in Rabigh, Kingdom of Saudi Arabia.
                                </p>

                                <p>We are a proud unit of the <strong>Power Tech Group of Companies</strong> — a decade-strong, multi-national group with an established presence across the GCC and the Indian subcontinent, holding ISO 9001 (Quality Management), ISO 45001 (Occupational Health & Safety), and ISO 14001 (Environmental Management) certifications across its integrated management system.</p>

                                <p>As a registered and VAT-certified entity in the Kingdom of Saudi Arabia, STSC operates as the group's dedicated technical arm in the Saudi market — delivering specialised engineering services, operations and maintenance solutions, and technical manpower to power generation, oil and gas, petrochemical, and water treatment sectors.</p>

                                {/* FEATURES */}

                                <div className="feature-grid">

                                    <div className="feature-card">
                                        <FaMapMarkerAlt />
                                        <h4>Headquartered</h4>
                                        <span>Rabigh, Saudi Arabia</span>
                                    </div>

                                    <div className="feature-card">
                                        <FiUsers />
                                        <h4>Power Tech Group</h4>
                                        <span>Multinational Company</span>
                                    </div>

                                    <div className="feature-card">
                                        <FaCertificate />
                                        <h4>ISO Certified</h4>
                                        <span>9001 | 45001 | 14001</span>
                                    </div>

                                    <div className="feature-card">
                                        <FaFileInvoiceDollar />
                                        <h4>VAT Registered</h4>
                                        <span>Trusted KSA Partner</span>
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
                                            <span>Engineering Services</span>
                                        </div>

                                        <div className="service">
                                            <FaCog />
                                            <span>Operation & Maintenance</span>
                                        </div>

                                        <div className="service">
                                            <FaTools />
                                            <span>Technical Manpower</span>
                                        </div>

                                    </div>

                                    <div className="industry">

                                        <h4>Serving Key Industries</h4>

                                        <div className="industry-list">

                                            <span><FaBolt /> Power</span>

                                            <span><FaOilCan /> Oil & Gas</span>

                                            <span><FaIndustry /> Petrochemical</span>

                                            <span><FaWater /> Water Treatment</span>

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
                            OUR <span>MISSION</span>
                        </span>

                        <div class="line"></div>

                        <p>
                            To provide world-class technical services, innovative engineering
                            solutions, and skilled manpower to the energy and industrial
                            sectors — built on a foundation of safety, quality, integrity,
                            and continuous improvement.
                        </p>

                        <p>
                            We are committed to protecting our clients' operational
                            continuity while delivering measurable value on every engagement.
                        </p>

                    </div>

                </div>

            </section>



            <section className="whatwedo-sec">
                <div className='container'>

                    {/* <div className="row"> */}

                    <div className="hero-content">

                        <span className="section-tag">
                            WHAT WE DO
                        </span>

                        <h2>
                            One Partner.
                            <br />
                            Complete Industrial Solutions.
                        </h2>

                        <p>
                            STSC is a fully integrated technical services contractor serving
                            the power generation, oil & gas, petrochemical and water treatment
                            industries across Saudi Arabia.
                        </p>

                        <p>
                            We operate as a true one-stop-shop, eliminating the need for
                            multiple contractors while delivering reliable engineering,
                            maintenance and industrial support services under one roof.
                        </p>

                    </div>

                    {/* <div className="hero-image col-lg-6">
                            <img src="/images/what-we-do-banner.jpg" alt="" />
                        </div>

                    </div> */}

                    <div className="heading">
                        <h3>OUR CORE SERVICE CAPABILITIES</h3>
                    </div>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr  mb_34'>Every service we deliver is executed by qualified, experienced personnel under a structured HSE framework — with full documentation, certification, and client sign-off at every stage.</p>



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
                                        <h3>Online and offline safety valve testing, calibration, and full valve servicing for all valve and actuator types</h3></Link>
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
                                        <h3>Online leak sealing for pressurised systems at temperatures up to 700°C</h3></Link>
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
                                        <h3>Hot tapping and live-line gate valve insertion on operational pipelines</h3></Link>
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
                                    <Link href="/service-page/heat_exchanger">  <h3>Heat exchanger maintenance, re-tubing, and supply</h3></Link>
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
                                        <h3>Operations and maintenance manpower supply for power plants, refineries, and water treatment facilities</h3></Link>
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
                                    <Link href="/service-page/ro_plant_epc_contracts"> <h3>RO plant EPC contracts up to 2 million imperial gallons per day</h3></Link>
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
                                    <Link href="/service-page/ro_membrane"> <h3>RO plant retrofitting and performance restoration</h3></Link>
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
                                    <Link href="/service-page/solar_plant_epc"> <h3>Solar plant EPC up to 5MW capacity and ongoing maintenance</h3> </Link>
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
                                    <Link href="/service-page/upvc_aluminiumdoors_windowsfabrication"> <h3>UPVC and aluminium doors and windows fabrication and installation</h3></Link>
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

                        <span>OUR CREDENTIALS & CLIENT TRUST</span>

                        <h2>
                            Proven Credentials.<br />
                            Trusted Across Saudi Arabia.
                        </h2>

                        <p>STSC operates under the full quality and compliance umbrella of the Power Tech Group, which holds an internationally recognised EcoVadis Silver Sustainability Medal — placing the group among the top 25% of companies assessed globally for environmental, social, and governance performance.

                        </p>

                    </div>

                    {/* Client Cards */}

                    <div className="client-title">

                        <h3>Our work in Saudi Arabia has been formally recognised by major industry clients including:</h3>

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


                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>We hold valid Company Registration Certificates, VAT certification, and GE Field core Comply works Contractor Verification with a score of 100 — reflecting our full compliance with international contractor qualification standards.</p>



                </div>

            </section>
            <section className="presence-section">
                <div className="container">
                        <div className='row'>
                    <div className="col-lg-6 presence-left">

                        {/* <h2>OUR PRESENCE</h2> */}
                        {/* <span className="section-tag">Rooted in <span>Saudi Arabia.</span><br />
                            Connected Across the Region.</span> */}

                            <h2 className="site-title mb_24">OUR <span>PRESENCE</span></h2>


                        <p>Based in Rabigh, Saudi Arabia, STSC serves clients across the Kingdom from the Red Sea coast to the industrial heartland of the Eastern Province. As part of the Power Tech Group, we draw on the technical resources, workforce pipeline, and operational knowledge of group entities operating across Saudi Arabia, UAE, Qatar, India, and Bahrain — giving our Saudi clients access to a far broader pool of expertise and capability than a standalone contractor could provide.</p>

                       
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
                            <span>Why Choose</span> STSC
                        </h2>

                    <ul>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Over a decade of group-level experience in power plant and industrial services across the GCC</li>

                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>ISO 9001, ISO 45001, and ISO 14001 certified — with a fully integrated management system</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Proven track record with major Saudi clients including NOMAC, ENGIE, Petro Rabigh, Saudi Aramco, and YASREF</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Multi-discipline capability eliminating the need for multiple contractors</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Rapid mobilisation of skilled, vetted, HSE-compliant technical personnel</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Full traceability — every job documented, tested, certified, and signed off</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Backed by the resources, network, and expertise of the Power Tech Group of Companies</li>

                    </ul>

                </div>
            </section>
            <section className='clientlogosec'>
                <div className="site-heading">
                    {/* <span className="site-title-tagline textalign_center">--- Client ---</span> */}
                    <h2 className="site-title textalign_center">
                        <span>Valve Services</span> - Human Resource <br /> & Manpower Supply
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
