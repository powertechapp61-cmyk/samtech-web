"use client";
import React from 'react'

const page = () => {

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
                                <h1>Brochures</h1>
                                <p>Discover who we are, what we do, and how we deliver value to our clients across Saudi Arabia. Our company brochure provides an overview of our services, capabilities, industry experience, and commitment to quality, safety, and operational excellence.</p>

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
                        <h5 className='fontSize20 fontWeight600 blackText_Clr mb_24'>Download Brochures</h5>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div>
                                    <h5>Mechanical Maintenance</h5>
                                </div>
                               


                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div>
                                    <h5>Electrical Maintenance</h5>
                                </div>
                               



                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div>  <h5>Fabrication</h5></div>
                              



                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div><h5>Valve Testing</h5></div>
                               


                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div> <h5>Manpower</h5></div>


                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                </div>
                                <div><h5>Powerplant O & M</h5></div>


                            </div>
                        </div>
                            <div className='col-lg-3'>
                                <div className='brochure_item' onClick={handleDownload} style={{cursor: 'pointer'}}>
                                    <div>
                                        <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                    </div>
                                    <div><h5>Pipeline Intervention</h5></div>


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
