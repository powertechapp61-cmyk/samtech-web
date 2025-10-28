"use client"
import Link from 'next/link';
import { useState } from 'react';

const Service = ({ pageData, pagename }) => {
  // const[serviceType,setServiceType] =useState('ro_membrane');
  const page = pageData;

  return (
    <>
      <section className='service_bnr'
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
                <ul className='page_breadcrumb'>
                  <li><Link href={"/"}> Home</Link></li>
                  <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                  <li> Services</li>
                  <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                  <li><Link href="#">{page.title}</Link></li>
                </ul>
                <h1>{page.title}</h1>
                {/* <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{page.subTitle}</p> */}
                <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{page.bannerparagraph}</p>
                <button className='mainbtn'>Contact Us</button>
              </div>
            </div>
            <div className='col-lg-5 offset-lg-1'>
              <div className={`textalign_center defaultWidth ${pagename === "online_seal" ? "seal-img" : "aboutbnr_img" && pagename === "online_safety_testing" ? " " : "aboutbnr_img" && pagename === "offline_valve_testing" ? " " : "aboutbnr_img" && pagename === "alltype_valve_services" ? " " : "aboutbnr_img" && pagename === "hot_tapping" ? " " : "aboutbnr_img" && pagename === "heat_exchanger" ? " " : "aboutbnr_img" && pagename === "ro_membrane" ? " " : "aboutbnr_img" && pagename === "upvc_aluminiumdoors_windowsfabrication" ? " " : "aboutbnr_img"  }`} >
                <img src={page.bannerImg}
                  alt={page.title || "service image"} />


              </div>
            </div>
          </div>
        </div>
      </section>



      <section className='serviceContentpart'>
        <div className="container">
          <div className='row'>
            <div className='col-lg-6'>
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

          </div>

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
