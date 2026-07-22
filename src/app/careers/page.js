"use client";
import Link from 'next/link';
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useLanguage } from '../context/LanguageContext';
const Page = () => {
  const { t } = useLanguage();
  return (
    <>
          <section className='hero-banner'>
              <div className='container'>
                  <div className='row alignItem_center' >
                      <div className='col-lg-6'>
                          <div className='innerpage_bnrContent'>
                              <h1>{t("careers.title")}</h1>
                              <p>{t("careers.intro")}</p>
                              <Link href="/contact-us" className='mainbtn'>{t("common.contactUsBtn")}</Link>
                          </div>
                      </div>
                      <div className='col-lg-5 offset-lg-1'>
                          <div className='hero-banner_img'>
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
