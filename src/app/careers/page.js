"use client";
import Link from 'next/link';
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const Page = () => {
  return (
    <>
          <section className='hero-banner'>
              <div className='container'>
                  <div className='row alignItem_center' >
                      <div className='col-lg-6'>
                          <div className='innerpage_bnrContent'>
                              <h1>Careers</h1>
                              <p>At SAM Technical Service Contracting Est, we are committed to attracting, developing, and retaining talented professionals. We offer challenging opportunities, continuous learning, and a culture of safety, integrity, and professional growth for individuals seeking a rewarding career in the industrial services sector.</p>
                              <Link href="/contact-us" className='mainbtn'>Contact Us</Link>
                          </div>
                      </div>
                      <div className='col-lg-5 offset-lg-1'>
                          <div className='hero-banner_img'>
                              <img className="img-1" src="/assets/img/valve_service_home.jpeg" alt="about us img" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>

   
    </>
  )
}

export default Page
