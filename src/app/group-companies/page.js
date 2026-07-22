"use client";
import Link from 'next/link'
import React from 'react'
import { useLanguage } from '../context/LanguageContext';

const page = () => {
    const { t } = useLanguage();
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
                                    <li> {t("groupCompanies.breadcrumbAboutUs")}</li>
                                    <li><img src="/assets/img/rightIcon.svg" alt='right icon' /> </li>
                                    <li><Link href={'/group-companies'}>{t("header.nav.groupCompanies")}</Link></li>
                                </ul>
                                <h1>{t("groupCompanies.pageTitle")}</h1>
                                {/* <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{page.subTitle}</p> */}
                                <p className='fontSize16 fontWeight400 blackText_Clr mb_24'>{t("groupCompanies.intro")}

</p>
                                <Link href="/contact-us" className='mainbtn'>{t("common.contactUsBtn")}</Link>
                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className="hero-banner_img" >
                                <img src="/assets/img/company-photo/sl3.jpg"
                                    alt="company" />


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='groupcompanies_sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/ptd.png" alt='ptd' />
                                    </div>

                                    <h2>Power Tech Development W.L.L, Bahrain</h2>
                                    <p>{t("groupCompanies.companies.ptd")}</p>

                                </div>

                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/97334010755" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:gm@powertechdevelopment.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="https://www.powertechdevelopment.com/index.php" target='_blank'>
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/gptc.png" alt='gptc' />
                                    </div>

                                    <h2> Global Power Tech Testing & Contracting L.L.C, UAE</h2>
                                    <p> Power & Water, Solar Plants, EPC Contractors, Electrical HT Cable Pulling / Transformer & Switchgear Erection, Trevi Test, Valve Servicing, Hot Tapping, Heat Exchanger Maintenance & Supply, Electrical testing of Cable & Transformer</p>
                                </div>
                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/971504712069" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:global@powertechdevelopment.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="https://gptcae.com" target='_blank'>
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}



                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/sam_logo.png" alt='stsc' />
                                    </div>

                                    <h2> SAM Technical Service Contracting Est, Saudi Arabia</h2>
                                    <p>{t("groupCompanies.companies.stsc")}</p>
                                </div>
                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/966507745097" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:samtech@powertechdevelopment.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="https://samtechsa.com" target='_blank'>
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/cpdti.png" alt='cpdti' />
                                    </div>

                                    <h2>Chennai Power & Desalination Training Institute, India</h2>
                                    <p>{t("groupCompanies.companies.cpdti")}</p>
                                </div>
                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/919750172525" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:chennai.power.padi@gmail.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="https://www.cpdti.in" target='_blank'>
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/pemi_logo.jpg" alt='pemi_logo' />
                                    </div>

                                    <h2>POWERTECH ELECTRO MECHANICAL INDUSTRIES Pvt.(Ltd)</h2>
                                    <p>{t("groupCompanies.companies.pemi")}</p>
                                </div>
                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/917092255005" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:enquiry@pemiindia.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="https://pemiindia.com" target='_blank'>
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/ib-badooda.png" alt='ib-badooda' />
                                    </div>

                                    <h2>IBN Badooda Electro Mechanical Workshop, Bahrain</h2>
                                    <p>{t("groupCompanies.companies.ibnBadooda")}</p>
                                </div>
                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/97334010755" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:gm@powertechdevelopment.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="https://www.powertechdevelopment.com" target='_blank'>
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/ptintl.png" alt='ptintl' />
                                    </div>

                                    <h2>Power Tech International, India</h2>
                                    <p>{t("groupCompanies.companies.ptIntl")}</p>
                                </div>
                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/919498660799" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:hrptg@ptijobs.in'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="https://ptijobs.in" target='_blank'>
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/vtts.png" alt='vtts' />
                                    </div>

                                    <h2> Valve Tech Testing & Services, Bahrain</h2>
                                    <p>{t("groupCompanies.companies.vtts")}</p>
                                </div>
                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/97334010755" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:enquiry@powertechtesting.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="https://www.powertechdevelopment.com" target='_blank'>
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/ptts.png" alt='ptts' />
                                    </div>

                                    <h2>Power Tech Testing & Services, India</h2>
                                    <p>{t("groupCompanies.companies.ptts")}</p>
                                </div>
                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/919498660803" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:valvetests@gmail.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="https://powertechtesting.com" target='_blank'>
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div>
                                        <div className='groupCompanylogo'>
                                            <img src="/assets/img/sams_logo.jpg" alt='sams' />
                                        </div>
                                    </div>

                                    <h2> SAMS Building Contracting L.L.C</h2>
                                    <p>{t("groupCompanies.companies.samsBuilding")}</p>
                                </div>
                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/971504712069" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:global@powertechdevelopment.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="https://gptcae.com" target='_blank'>
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/q-power.png" alt='Q-Power Tech Mechanical Contracting' />
                                    </div>

                                    <h2>Q-Power Tech Mechanical Contracting, Qatar</h2>
                                    <p>{t("groupCompanies.companies.qPowerTech")}</p>
                                </div>
                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/971504712069" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:gm@qpowertech.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="https://www.powertechdevelopment.com" target='_blank'>
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='col-lg-4'>
                            <div className='groupCompanyItem'>
                                <div>
                                    <div className='groupCompanylogo'>
                                        <img src="/assets/img/knowledge_city.png" alt='knowledge_city' />
                                    </div>

                                    <h2> Knowledge City, India</h2>
                                    <p>{t("groupCompanies.companies.knowledgeCity")}</p>
                                </div>
                                <div className='displayFlex alignItem_center justifyContent_spacebetween'>
                                    <div className='displayInlineFlex alignItem_center gap12'>
                                        <div>

                                            <Link href="https://wa.me/919629607322" target="_blank">
                                                <img className='width34px' src="/assets/img/whatsappIcon.svg" alt='whatsapp' />

                                            </Link>
                                        </div>
                                        <div>      <Link href={'mailto:head.knowledgecity@gmail.com'}>
                                            <img className='width34px' src="/assets/img/mail_icon.svg" alt='mail' />
                                        </Link></div>

                                    </div>
                                    <div>
                                        <Link href="https://jamiaabdussalam.org" target='_blank'>
                                            <img className='width34px' src="/assets/img/link.svg" alt='link' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default page
