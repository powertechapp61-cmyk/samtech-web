"use client";
import React from 'react'
import { useLanguage } from '../context/LanguageContext';

const page = () => {
    const { t } = useLanguage();

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/assets/ppt/pipeline_intervention_presentation.pptx"; // public path
        link.download = "pipeline_intervention_presentation.pptx";
        link.click();
    };
    return (
        <>
            <section className='hero-banner'>
                <div className='container'>
                    <div className='row alignItem_center' >
                        <div className='col-lg-6'>
                            <div className='innerpage_bnrContent'>
                                <h1>{t("brochures.title")}</h1>
                                <p>{t("brochures.intro")}</p>

                            </div>
                        </div>
                        <div className='col-lg-5 offset-lg-1'>
                            <div className='hero-banner_img'>
                                <img className="img-1" src="/assets/img/trainings/recognised_by governer_of_india.jpg" alt="about us img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='brochure_sec'>
                <div className="container">
                    <div className='brochureframe'>
                        <h5 className='fontSize20 fontWeight600 blackText_Clr mb_24'>{t("brochures.downloadTitle")}</h5>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div>
                                    <h5>{t("brochures.mechanicalMaintenance")}</h5>
                                </div>
                               


                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div>
                                    <h5>{t("brochures.electricalMaintenance")}</h5>
                                </div>
                               



                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div>  <h5>{t("brochures.fabrication")}</h5></div>
                              



                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div><h5>{t("brochures.valveTesting")}</h5></div>
                               


                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div> <h5>{t("brochures.manpower")}</h5></div>


                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div><h5>{t("brochures.powerplantOM")}</h5></div>


                            </div>
                        </div>
                            <div className='col-lg-3'>
                                <div className='brochure_item' onClick={handleDownload} style={{cursor: 'pointer'}}>
                                    <div>
                                        <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                    </div>
                                    <div><h5>{t("brochures.pipelineIntervention")}</h5></div>


                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
