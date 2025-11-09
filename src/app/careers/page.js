"use client";
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const Page = () => {
  return (
    <>
          <section className='aboutbnr'>
              <div className='container'>
                  <div className='row alignItem_center' >
                      <div className='col-lg-6'>
                          <div>
                              <h1>Careers</h1>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              <button className='mainbtn'>Contact Us</button>
                          </div>
                      </div>
                      <div className='col-lg-5 offset-lg-1'>
                          <div className='aboutbnr_img'>
                              <img className="img-1" src="/assets/img/industry_illu.jpg" alt="about us img" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>

   
    </>
  )
}

export default Page
