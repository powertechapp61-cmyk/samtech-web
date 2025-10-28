"use client";
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Modal } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Mainpage = () => {
      const marqueeRef = useRef(null);
  
  const [showModal, setShowModal] = useState(null); // null or modal id

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
  const leadershipteamModals = [
    {
      id: 1,
      Img: "/assets/img/director.jpg",
      Name: "Mr. S. A. MOHAMED SULTAN",
      Role: "Managing Director - Power Tech Group Companies",
      content: `
1983 - Bachelor's degree in Mechanical Engineering(B.E.) from Madras University, Tamil Nadu

Chairman - Chennai Power and Desalination Training Institute

A seasoned professional with over 35 years of cross - cultural experience in Operations, Maintenance, Production Planning & Control, Quality Assurance & Manpower Planning in power and desalination plants in India and the Middle East.Experienced with multinational companies such as ABB, Mitsubishi, and Ansaldo.

  Worked in NLC and NTPC - Ramagundam at managerial level. 

Ministry of Electricity and Water, Bahrain - Power and desalination plant.

Dubai Electricity and Water Authority - In charge of water transmission network for Dubai.
    ` },
    {
      id: 2,
      Img: "/assets/img/sheikrajas.jpg",
      Name: "Mr. A. MOHAMMED SHEIK RAJA",
      Role: "General Manager- Power Tech Group Companies",
      content: `B. Tech from Madras University and M.BA (Marketing & Finance) from Delhi
Over 20+ Years of Experience in working with Top Multinational Companies in India & GCC Region
Had worked with Companies like IBM, HPE, DELL and SHARP in leadership roles
Has exposure to various Industries such as Information Technology, Office Automation, Solar, Power Plants and Technical Manpower Provisioning
Driven, Progressive and Team Player with sharp business acumen, who always puts customers first in all his engagement
Won Several Accolades over the years for consistently delivering results and has several Industry certifications under his belt`

    },
    {
      id: 3, Img: "/assets/img/gm1.jpg", Name: "Mr. AHMED IBRAHIM", Role: "General Manager - Global Powertech UAE",
      content: `BE - MBA from Anna University
General Manager - Global Powertech UAE
15+Years’ Experience is Power Transmission and Distribution Engineering, EPC Projects.
Having EPC Experience in 400kV, 132kV, Substation.. Underground Cabling works, OHL line replacement.
Worked in Contractor, Consultant Field such a reputed companies.. Engie, MITSUBISHI ELECTRIC, MOTTMAC DONALD, POYRY SWITZERLAND Executed Ministry Projects in DEWA, Etihad WE, SEWA in UAE` },
    {
      id: 4, Img: "/assets/img/Jasim.jpg", Name: "Mr. J. MOHAMED JASIM", Role: "Manager- Power Tech Group Companies",

      content: `B.E graduate from Anna University with 4+ years of leadership
experience in IT, Data Management, Solar, Power Plants, and Technical Manpower Provisioning. Currently a Manager
at Power Tech Group Companies, previously worked with clients like Reddit and Axis Bank. A results-driven professional with
sharp business acumen, industry certifications, and multiple
accolades for excellence. A proactive team player
committed to innovation and customer success.` },
  ];
  const serviceSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
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


  const clientlogoSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 4,
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

  const testimonialSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  };
  const banners = [
    { id: 1, img: "/assets/img/industry_illu2.jpg", title: "Online Safety Valve Testing (Trevi  Type)", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 2, img: "/assets/img/industry_illu.jpg", title: "Offline Valve Testing", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 3, img: "/assets/img/industry_illu2.jpg", title: "All Types of Valve Servicing", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 4, img: "/assets/img/industry_illu.jpg", title: "Online Leak Sealing – SYLMASATA & Conventional", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 5, img: "/assets/img/industry_illu2.jpg", title: "Hot Tapping & Insertion of S-Type( Gate Valve Online)", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 6, img: "/assets/img/industry_illu.jpg", title: "Heat Exchanger, Maintenance & Supply", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 7, img: "/assets/img/industry_illu2.jpg", title: "RO Plant EPC Contracts Upto 2MIGPDA", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 8, img: "/assets/img/industry_illu.jpg", title: "Solar Plant EPC upto  5MW & Maintenance", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 9, img: "/assets/img/industry_illu2.jpg", title: "RO Plants Retro  Fitting", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { id: 10, img: "/assets/img/industry_illu.jpg", title: "UPVC & Aluminium Doors & Windows Fabrication & Installation", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`'`}s standard dummy text ever since the 1500s,   </p>
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
                    <div className='col-lg-7'>
                      <span>--- A unit of Powertech Group Companies ---</span>
                      <h1>{banner.title}</h1>
                      <p>{banner.description}</p>
                      <button className='mainbtn'>Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </Slider>

      </section>

      <section className=''>
        <div className='container'>

          <Slider {...clientlogoSlider}>
            <div>

            </div>
          </Slider>
        </div>
      </section>



      <section className='service_sec'>
        <div className='container'>
          <div className="site-heading">
            <span className="site-title-tagline textalign_center">--- Service ---</span>
            <h2 className="site-title textalign_center">
              <span>Valve Services</span> - Human Resource <br /> & Manpower Supply
            </h2>
          </div>

          {/* <div className='industriesLeftSpace'> */}

          {/* <Slider {...serviceSlider}> */}

          <div className='row'>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/02.jpg" alt='sdd' />
                </div>
                <div className="service-caption">
                  <h3> Online Safety Valve Testing (Trevi  Type)</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link href="#">Learn More</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/02.jpg" alt='sdd' />
                </div>
                <div className="service-caption">
                  <h3>Offline Valve Testing</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link href="#">Learn More</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/02.jpg" alt='sdd' />
                </div>
                <div className="service-caption">
                  <h3>All Types of Valve Servicing</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link href="#">Learn More</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>

              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/02.jpg" alt='sdd' />
                </div>
                <div className="service-caption">
                  <h3>Online Leak Sealing – SYLMASATA & Conventional</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link href="#">Learn More</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/02.jpg" alt='sdd' />
                </div>
                <div className="service-caption">
                  <h3>Hot Tapping & Insertion of S-Type( Gate Valve Online)</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link href="#">Learn More</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/02.jpg" alt='sdd' />
                </div>
                <div className="service-caption">
                  <h3>Heat Exchanger, Maintenance & Supply</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link href="#">Learn More</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/02.jpg" alt='sdd' />
                </div>
                <div className="service-caption">
                  <h3>RO Plant EPC Contracts Upto 2MIGPDA</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link href="#">Learn More</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/02.jpg" alt='sdd' />
                </div>
                <div className="service-caption">
                  <h3>Solar Plant EPC upto  5MW & Maintenance</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link href="#">Learn More</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>

              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/02.jpg" alt='sdd' />
                </div>
                <div className="service-caption">
                  <h3>RO Plants Retro  Fitting</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link href="#">Learn More</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className="serviceItem">
                <div className="service-img">
                  <img src="/assets/img/02.jpg" alt='sdd' />
                </div>
                <div className="service-caption">
                  <h3>UPVC & Aluminium Doors & Windows Fabrication & Installation</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <Link href="#">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
          {/* </Slider> */}
          {/* </div> */}
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

      <section className='leadershipTeamSec'>
        <div className='container'>

          <div className="site-heading">
            <span className="site-title-tagline textalign_center">--- Team ---</span>
            <h2 className="site-title textalign_center">
              Meet our <span>Leadership Team</span>
            </h2>
          </div>



          <div className='row'>
            {leadershipteamModals.map((modal) => (
              <div className='col-lg-3' key={modal.id}>
                <div className='leadershipteamItem' onClick={() => setShowModal(modal.id)}>
                  <div className='leadershipteam-img'>
                    <img src={modal.Img} alt={modal.Name} />
                  </div>
                  <div className='leadershipteam-info'>
                    <h5>{modal.Name}</h5>
                    <p>{modal.Role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {leadershipteamModals.map((modal) => (
            <Modal dialogClassName="leadershipTeamModal-dialog" // styling modal dialog
              contentClassName="leadershipTeamModal-content" // styling modal content
              key={modal.id}
              show={showModal === modal.id}
              onHide={() => setShowModal(null)}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>{modal.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <div className='leadershipteampopUp-info'>
                  <div className="displayFlex alignItem_center gap20 mb_24">
                    <div>
                      <img src={modal.Img} alt={modal.Name} />
                    </div>
                    <div>
                      <h2>{modal.Name}</h2>
                      <h5>{modal.Role}</h5>
                    </div>                      </div>


                  <p>   {modal.content}</p>


                </div>
              </Modal.Body>
            </Modal>
          ))}
        </div>
      </section>

 


      <section className='testmonials_sec'>
        <div className='container'>

          <div className="site-heading">
            <span className="site-title-tagline textalign_center">--- Testmonials ---</span>
            <h2 className="site-title textalign_center"> What Our <span>Client Say{`'`}s</span></h2>
          </div>

          <Slider {...testimonialSlider}>
            {clientSay.map((item) => (
              <div className="testimonialItem" key={item.id}>
                <div>
                  <div className='quoteRightImg'>
                    <img src="/assets/img/quote.svg" alt='quote' />
                  </div>
                  <h3>{item.year}</h3>
                  <p>{item.Desc}</p>
                </div>
                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
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
                </div>
              </div>
            ))}
          </Slider>

        </div>
      </section>


      <section className="about-area">
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
      </section>

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
                          <span className="site-title-tagline textalign_center">--- Client ---</span>
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

      <section className="video-area">
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
      </section>



    </>

  )
}

export default Mainpage
