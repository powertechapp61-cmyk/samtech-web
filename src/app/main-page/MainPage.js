"use client";
import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeaderShipTeam from '../Components/LeaderShipTeam';
import Image from 'next/image';

const Mainpage = () => {
  const [active, setActive] = useState("side_tab1");
  // const [isTabsVisible, setIsTabsVisible] = useState(window.innerWidth >= 800);


  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsTabsVisible(window.innerWidth >= 800);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

    const [isTabsVisible, setIsTabsVisible] = useState(false);

  useEffect(() => {
    // Runs only in the client
    setIsTabsVisible(window.innerWidth >= 800);

    const handleResize = () => {
      setIsTabsVisible(window.innerWidth >= 800);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const tabs = [
    {
      id: "side_tab1", title: "Online Safety Valve Testing (Trevi Type)", content: (
        <>
          <div>
            <Image src={null} alt='' />
          </div>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>THE ONLY THING MORE IMPORTANT THAN A SAFETY VALVE IS HOW YOU TEST IT</p>
          <h5>AccuTEST Safety Valve Test System & L – PLAN LEGA TEST System- Online Safety Valve Testing Test Online</h5>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly. But can you really be sure of the results if the test is not conducted under the stress of everyday conditions?</p>
          <Link href="/service-page/online_safety_testing">To know more Click Here</Link>


        </>
      )
    },
    {
      id: "side_tab2", title: "Offline Valve Testing", content: (
        <>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>THE ONLY THING MORE IMPORTANT THAN A SAFETY VALVE IS HOW YOU TEST IT</p>
          <h5>TESTING CURVE, HARDWARE- Offline Valve Testing</h5>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly. But can you really be sure of the results if the test is not conducted under the stress of everyday conditions?</p>
          <Link href="/service-page/offline_valve_testing">To know more Click Here</Link>
          </>
      )
    },
    {
      id: "side_tab3", title: "All Types of Valve Servicing", content: (
        <>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Our Group Company Valve Tech testing and services and Power Tech testing and services specialize in handling services for different type of Valves, Actuators, Pumps, Compressors etc, for more information pls visit <Link target='_blank' href="www.powertechtesting.com">www.powertechtesting.com</Link></p>
          <Link href="/service-page/alltype_valve_services">To know more Click Here</Link>


             </>
      )
    }, {
      id: "side_tab4", title: "Technical Manpower supply for Power plant refineries and Water plant", content: (
        <>

          
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Under Construction</p>

          <Link href="/service-page/technical_manpower_supply_for_power_plant_refineries_and_water_plant">To know more Click Here</Link>

        </>
      )
    }, {
      id: "side_tab5", title: "ONLINE SEAL LEAKING", content: (
        <>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Online leak sealing today is the leak-sealing solutions of choice as it saves energy, prevents and expensive and unwanted shutdown and can address a wide variety of leaks. With the combination of engineering solutions support from global experts, we have leak sealing compounds that can address a wide variety of steam, chemical, hydrocarbon and gas leaks at temperature up to 700° C. We have highly trained, highly skilled technicians who can handle the adverse situations very tactically and bring downs the situation to normal conditions</p>
          <Link href="/service-page/online_seal">To know more Click Here</Link>


         
        </>
      )
    }, {
      id: "side_tab6", title: "Hot Tapping & Insertion of S-Type (Gate Valve Online)", content: (
      <>
        <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Hot tapping is more than just a fancy technique; it's a game-changer in the world of pipeline management. By prioritizing efficiency, safety, and sustainability, it offers a clear advantage for maintaining and upgrading your system with minimal disruption. If you're looking for a way to keep your operations flowing while optimizing your pipeline network, hot tapping might just be the answer you've been searching for</p>
          <Link href="/service-page/hot_tapping">To know more Click Here</Link>
        </>
      )
    }, {
      id: "side_tab7", title: "Heat Exchanger, Maintenance & Supply", content: (
        <>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>A heat exchanger is an apparatus where the exchange of heat energy occurs between two different fluids at different temperatures.</p>
          <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>The most used is what is known as “tubular beam and cloak exchanger “, as its large surface structure allows to exchange large quantities of heat.</p>
          <Link href="/service-page/heat_exchanger">To know more Click Here</Link>

        </>
      )
    }, {
      id: "side_tab8", title: "RO Plant EPC Contracts Upto 2MIGPDA", content: (
        <>
        <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Under Construction</p>

   <Link href="/service-page/ro_plant_epc_contracts">To know more Click Here</Link>
        </>
      )
    }, {
      id: "side_tab9", title: "Solar Plant EPC upto 5MW & Maintenance", content: (
        <>
        <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Under Construction</p>
       <Link href="/service-page/solar_plant_epc">To know more Click Here</Link>

        </>
      )
    }, {
      id: "side_tab10", title: "RO Plants Retro Fitting", content: (
        <>
        <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Under Construction</p>
        <Link href="/service-page/ro_membrane">To know more Click Here</Link>

        </>
      )
    }, {
      id: "side_tab11", title: "UPVC & Aluminium Doors & Windows Fabrication & Installation", content: (
        <>
        <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Under Construction</p>
          <Link href="/service-page/upvc_aluminiumdoors_windowsfabrication">To know more Click Here</Link>
        </>
      )
    }
  ];



  const clientSay = [
    {
      id: 1,
      year: "February 27, 2025",
      Desc: "PTD received &apos;Best Employee Accommodation Management and Maintenance &apos; from ALBA CEO for the year 2024, Post various audits from ALBA Team",
    },
    {
      id: 2,
      year: 'October 16, 2024',
      Desc: "Power Tech Group is now ISO 14001 Certified , along with the previously held ISO 9001 and ISO 45001 Certification, Recently we completed the Integrated Management System Audit for all 3 certifications and got certified",
    },
    {
      id: 3,
      year: 'August 11, 2024',
      Desc: "PTD Successfully completed GT T1C Nozzle Replacement Mitsubishi works for ALBA Block 4 Expansion Project and received a letter of Appreciation for our support and completion of the Project from MHI Team.",
    },
    {
      id: 4,
      year: "July 28, 2024",
      Desc: 'PTD has secured 3 Year long term contract with ALBA Power Station 5 for Mechanical, Electrical and Instrumentation Department.',
    },
    {
      id: 5,
      year: "December 21, 2022",
      Desc: "Power Tech Group is happy to share that our company  has been awarded a Silver EcoVadis Medal. This result places our company among the top 25 percent of companies assessed by EcoVadis.",
    },
    {
      id: 6,
      year: "November 30, 2022",
      Desc: "PTD Successfully Completed GT Major Outage with NMES (ACWA POWER) for the NOMAC ALDUR-II Plant,  PTD Also completed Unplanned GT-12 Outage in ALDUR-1 for AEOM",
    },
    {
      id: 7,
      year: "April 15, 2022",
      Desc: "Power Tech recently completed GPIC Turnaround 2022 in Bahrain, providing close to 100 resources from Instrumentation, Electrical and Mechanical Stream",
    },

  ];

  // const serviceSlider = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   lazyLoad: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "0px",
  //         centerMode: false,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "0px",
  //         centerMode: false,
  //       },
  //     },
  //   ],
  // };


  const clientlogoSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 9,
    slidesToScroll: 1,
    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: false,
        },
      },
    ],
  };

  // const testimonialSlider = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   lazyLoad: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "0px",
  //         centerMode: false,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "0px",
  //         centerMode: false,
  //       },
  //     },
  //   ],
  // };


  const mainBnr = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true, // smooth fade transition

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  const banners = [
    { id: 1, img: "/assets/img/operation_and_maintainance_service_provider.jpg", title: "Operations and Maintenance Service Provider ", },
    { id: 2, img: "/assets/img/electro_mechanical.png", title: "Electro Mechanical and Instrumentation Project Experts", },


    { id: 3, img: "/assets/img/hottapping.jpg", title: "Hot Tapping ", },

    { id: 4, img: "/assets/img/gas_turbine_steam_turbine_works.jpg", title: "Gas Turbine and Steam Turbine Works ", },

    { id: 5, img: "/assets/img/valve_servicing_testing.png", title: "	Valve Servicing , Testing and Calibration Works", },
    { id: 6, img: "/assets/img/welding_fabrication_work.jfif", title: "Welding and Fabrication Works", },

  ];


  const companyPhoto = {
    dots: false,
    infinite: true,
    // speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true, // smooth fade transition
  };
  return (
    <>
      <section className='herobnr'>
        {/* <div className='row'>
            <div className='col-lg-7'>
              <div className='bnrContent'>
                <span>--- A unit of Powertech Group Companies ---</span>
                <h1>Operations and Maintenance Service Provider </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,   </p>
                <button className='mainbtn'>Learn More</button>
              </div>
            </div>
            <div className='col-lg-5'>

            </div>
          </div> */}



        <Slider {...mainBnr}>

          {banners.map((banner) => (
            <div key={banner.id} className="banner-slide">
              <img
                src={banner.img}
                alt={banner.title}
              // priority
              />
              <div className="bnrContent">
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-8'>
                      <h1>{banner.title}</h1>
                      {/* <p>{banner.description}</p> */}
                      {/* <button className='mainbtn'>Learn More</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </Slider>

      </section>

      <section className='testmonials_sec'>
        <div className='container-fluid'>

          {/* <div className="site-heading">
             <span className="site-title-tagline textalign_center">--- Testmonials ---</span> 
            <h2 className="site-title textalign_center"> What Our <span>Client Say&apos;s</span></h2>
          </div> */}

          {/* <Slider {...testimonialSlider}> */}
          <div className='testimonialGrid'>
            {clientSay.map((item) => (
              <div className="testimonialItem" key={item.id}>
                <div>
                  {/* <div className='quoteRightImg'>
                    <img src="/assets/img/quote.svg" alt='quote' />
                  </div> */}
                  <h3>{item.year}</h3>
                  <p>{item.Desc}</p>
                </div>
                {/* <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                  <div className='displayFlex alignItem_center gap12 dpProfile'>
                    <div className=''>
                      <img src="/assets/img/dp.jpg" alt='sdd' />
                    </div>
                    <div>
                      <h5>Raj kumar</h5>
                      <span>UI / UX</span>
                    </div>
                  </div>
                  <div>
                    <ul className='displayFlex alignItem_center gap12 emptyList'>
                      <li>
                        <img src="/assets/img/star_fill.svg" alt='star' />
                      </li>
                      <li>
                        <img src="/assets/img/star_fill.svg" alt='star' />
                      </li>
                      <li>
                        <img src="/assets/img/star_empty.svg" alt='star' />
                      </li>
                      <li>
                        <img src="/assets/img/star_empty.svg" alt='star' />
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
          {/* </Slider> */}

        </div>
      </section>





      <section className='companyPhotoSec'>
        <Slider {...companyPhoto}>


          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/slider1.jpg" alt="companyphoto" />
          </div>


          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl2.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl3.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl4.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl5.jpg" alt="companyphoto" />
          </div>
          <div className="companyphoto-item">
            <img src="/assets/img/company-photo/sl6.jpg" alt="companyphoto" />
          </div>
        </Slider>
      </section>

      <LeaderShipTeam />


      <section className='weServeGlobally_sec'>
        <div className='container'>
          <div className="site-heading">
            {/* <span className="site-title-tagline">--- WE SERVE GLOBALLY ---</span> */}
            <h2 className="site-title">WE SERVE <span>GLOBALLY</span></h2>
          </div>


          <div className='row'>

            <div className='col-lg-5'>
              {/* <div className='mb_40'>
                <p className='tranquilPondText_Clr fontSize16 fontWeight400 fontStyleItalic'>Owing to the unmatched quality and reliability of our products, our line of Leak Sealing Products and Services is in significant demand globally.</p>
              </div> */}

              <div className='ourGlobalPresence'>
                <div>
                  <h5>15+</h5>
                  <p>Years</p>
                </div>
                <div>
                  <h5>5+</h5>
                  <p>Countries</p>
                </div>
                <div>
                  <h5>250+</h5>
                  <p>Customers</p>
                </div>
              </div>

            </div>

            <div className='col-lg-7'>
              <div>

                <h5 className='blackText_Clr fontSize24 fontWeight600 mb_16'>Our Global Presence</h5>

                <p className='blackText_Clr fontSize16 fontWeight400'>Power Tech Group Companies an ISO 9001 and ISO 45001 company is Unique in Indian sub-continent and GCC countries, as ONE-STOP-SHOP for total power plant services in the areas of Repairs & Retrofits, EPC contracts, O&M contracts, Re-Engineering and Relocation of Power Plants, Spares & Services for a decade. We offer Qualitative and Economical Alternative to various OEMS around the World in the areas of expertise. We offer quality services and expertise in Repairs & Retrofits, Spares & Services, EPC contracts, O&M Contracts, Re-Engineering and Relocation of Power Plants, for a decade.</p>


              </div>
            </div>

          </div>
        </div>
      </section>


      <section className='service_sec'>
        <div className='container'>
          <div className="site-heading">
            {/* <span className="site-title-tagline textalign_center">--- Service ---</span> */}
            <h2 className="site-title textalign_center">
              <span>Valve Services</span> - Human Resource <br /> & Manpower Supply
            </h2>
          </div>



          <div className="desktopTab_mobAccordion">
            {/* Tabs (visible only on wide screens) */}
            {isTabsVisible && (
              <nav>
                <ul>
                  {tabs.map(t => (
                    <li key={t.id}>
                      <button
                        className={`font-bold ${active === t.id ? "activeTab" : "bg-gray-200"}`}
                        onClick={() => setActive(t.id)}
                      >
                        {t.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}


            {/* Content items */}
            <div>
              {tabs.map(t => (
                <section
                  key={t.id}
                  className={`item ${active === t.id ? "active" : ""}`}
                  onClick={() => {
                    if (!isTabsVisible) setActive(t.id);
                  }}
                >
                  {/* Accordion title (mobile only) */}
                  {!isTabsVisible && (
                    <div className={`${active === t.id ? "bg-gray-700" : "bg-gray-200"}`}>
                      {t.title}
                    </div>
                  )}

                  {/* className={`${active === t.id ? "" : ""}`} */}
                  <div className='serciceContentFrame'>
                    <h2> {t.title}</h2>
                    {t.content}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* <div className='industriesLeftSpace'> */}

          {/* <Slider {...serviceSlider}> */}

          {/* <div className='row'>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/online_safety_valve_testing_img.jpg" alt='Online Safety Valve Testing' />
                  <Link href="/service-page/online_safety_testing">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>
                </div>
                <div className="service-caption">
                  <Link href="/service-page/online_safety_testing">
                    <h3> Online Safety Valve Testing (Trevi  Type)</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/offline_valve_testing_home.png" alt='Offline Valve Testing' />

                  <Link href="/service-page/offline_valve_testing">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>

                </div>
                <div className="service-caption">
                  <Link href="/service-page/offline_valve_testing"><h3>Offline Valve Testing</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/technical_manpower_provisioning_home.jpg" alt='Technical Manpower supply for Power plant refineries and Water plant' />

                  <Link href="/service-page/technical_manpower_supply_for_power_plant_refineries_and_water_plant">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>

                </div>
                <div className="service-caption">
                  <Link href="/service-page/technical_manpower_supply_for_power_plant_refineries_and_water_plant">
                    <h3>Technical Manpower supply for Power plant refineries and Water plant</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>

              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/online_leak_sealing_home.png" alt='Online Leak Sealing' />


                  <Link href="/service-page/online_seal">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>




                </div>
                <div className="service-caption">
                  <Link href="/service-page/technical_manpower_supply_for_power_plant_refineries_and_water_plant">
                    <h3>Online Leak Sealing – SYLMASATA & Conventional</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/hottapping_home.jpg" alt='Hot Tapping' />

                  <Link href="/service-page/hot_tapping">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>


                </div>
                <div className="service-caption">
                  <Link href="/service-page/hot_tapping">
                    <h3>Hot Tapping & Insertion of S-Type( Gate Valve Online)</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/heat_exchanger_maintenance_home.jpg" alt='Heat Exchanger, Maintenance' />

                  <Link href="/service-page/heat_exchanger">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>


                </div>
                <div className="service-caption">
                  <Link href="/service-page/heat_exchanger">  <h3>Heat Exchanger, Maintenance & Supply</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/ro_plant_epc_contracts_home.jpg" alt='RO Plant EPC Contracts' />

                  <Link href="/service-page/ro_plant_epc_contracts">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>


                </div>
                <div className="service-caption">
                  <Link href="/service-page/ro_plant_epc_contracts"> <h3>RO Plant EPC Contracts Upto 2MIGPDA</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/solar-plant_epc_home.jpeg" alt='Solar Plant EPC' />

                  <Link href="/service-page/solar_plant_epc">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>


                </div>
                <div className="service-caption">
                  <Link href="/service-page/solar_plant_epc"> <h3>Solar Plant EPC upto  5MW & Maintenance</h3> </Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>

              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/ro-plants-retro-fitting_home.jpg" alt='RO Plants Retro  Fitting' />


                  <Link href="/service-page/ro_membrane">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>

                </div>
                <div className="service-caption">
                  <Link href="/service-page/ro_membrane"> <h3>RO Plants Retro  Fitting</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/upvc_home.png" alt='UPVC' />

                  <Link href="/service-page/upvc_aluminiumdoors_windowsfabrication">
                    <img src="/assets/img/bx_link.svg" alt='link' />
                  </Link>



                </div>
                <div className="service-caption">
                  <Link href="/service-page/upvc_aluminiumdoors_windowsfabrication"> <h3>UPVC & Aluminium Doors & Windows Fabrication & Installation</h3></Link>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>


          </div> */}
          {/* </Slider> */}
          {/* </div> */}
        </div>
      </section>


      {/* <section className="about-area">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="about-left wow fadeInLeft">
                <div className="about-img">
                  <div className="row g-4">
                    <div className="col-md-6">

                      <img className="img-1" src="/assets/img/01.jpg" alt="first" />
                      <div className="about-experience mt-4">
                        <div className="about-experience-icon">
                          <img src="/assets/img/customerSatisfaction.svg" alt="customerSatisfaction" />
                        </div>
                        <span className="text-start">200+ SATISFIED<br /> CUSTOMER</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img className="img-2" src="/assets/img/02.jpg" alt="second" />
                      <img className="img-3 mt-4" src="/assets/img/03.jpg" alt="third" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right wow fadeInRight">
                <div className="site-heading mb-3">
                  <span className="site-title-tagline">--- About Us ---</span>
                  <h2 className="site-title">
                    Our Edukation System <span>Inspires</span> You More.
                  </h2>
                </div>
                <p className='tranquilPondText_Clr fontSize16 fontWeight400'>Power Tech Development an ISO 9001 and ISO 45001 company is Unique in Indian sub-continent and GCC countries, as ONE-STOP-SHOP for total power plant services in the areas of Repairs & Retrofits, EPC contracts.

                </p>
                <div className="about-content">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="about-item">
                        <div className="about-item-icon">
                          <img src="/assets/img/serviceprovider.svg" alt="Service Provide" />
                        </div>
                        <div className="about-item-content">
                          <h5>Maintenance Service Provider</h5>
                          <p className='tranquilPondText_Clr fontSize16 fontWeight400'>We ensure smooth operations with reliable maintenance solutions.</p>
                        </div>
                      </div>
                      <div className="about-item">
                        <div className="about-item-icon">
                          <img src="/assets/img/search-country.svg" alt="Present in GCC & INDIA" />
                        </div>
                        <div className="about-item-content">
                          <h5>Present in GCC & INDIA</h5>
                          <p className='tranquilPondText_Clr fontSize16 fontWeight400'>Our strong presence spans major regions in GCC and India today.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="about-quote">
                        <p>It is a long established fact that a reader will be distracted by the
                          content of
                          a page when looking at its reader for the long words layout.</p>

                        <div className='about-quote-icon'>
                          <img src="/assets/img/quote-right.svg" alt='quote-right' />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-bottom">
                  <button href="about.html" className="mainbtn">Discover More</button>
                  <div className="about-phone">
                    <div className="icon">
                      <img src="/assets/img/phone_icon.svg" alt='phone' />
                    </div>
                    <div className="number">
                      <span>Call Now</span>
                      <Link href="tel:919498660803">+919498660803</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className='industrySec'>
        <div className='container'>
          <div className="site-heading">
            <h2 className="site-title textalign_center"> Our <span>Infrastructure</span></h2>
          </div>
          <div className="row popup-gallery">
            <div className="col-md-4 wow fadeInUp">
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/01.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/01.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp">
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/02.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/03.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp">
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/01.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg"><i className="fal fa-plus"></i></a>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-img">
                  <img src="/assets/img/02.jpg" alt="" />
                </div>
                <div className="gallery-content">
                  <a className="popup-img gallery-link" href="/assets/img/01.jpg">
                    <i className="fal fa-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='clientlogosec'>
        <div className="site-heading">
          {/* <span className="site-title-tagline textalign_center">--- Client ---</span> */}
          <h2 className="site-title textalign_center">
            We Are <span>Trusted</span> By
          </h2>
        </div>
        <div className="customerLogos">

          <Slider {...clientlogoSlider}>

            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/saudi_aramco.jpg" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/yasref.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/national_water_company.png" alt='' />
            </div>
            <div className='clientLogo_item'>
              <img src="/assets/img/clientlogo/saudi_electricity_company.png" alt='' />
            </div>


            {/* sas */}
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
          </Slider>


        </div>
      </section>

      {/* <section className="video-area">
        <div className="container">
          <div className="video-content">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="video-wrapper">
                  <a className="play-btn popup-youtube" href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                    <img src="/assets/img/play-icon.svg" alt='play' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}



    </>

  )
}

export default Mainpage
