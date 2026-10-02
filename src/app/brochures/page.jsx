"use client";
import React from 'react'
import { useLanguage } from '../context/LanguageContext';

const brochures = [
    { key: "mechanicalMaintenance", url: "https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1785133088/samtech_pdfs/Mechanical%20Maintenance.pdf" },
    { key: "electricalMaintenance", url: "https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1785132999/samtech_pdfs/Electrical%20Maintenance.pdf" },
    { key: "fabrication", url: "https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1785133044/samtech_pdfs/Fabrication.pdf" },
    { key: "valveTesting", url: "https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1785133140/samtech_pdfs/Valve%20Testing.pdf" },
    { key: "manpower", url: "https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1785133063/samtech_pdfs/Manpower.pdf" },
    { key: "powerplantOM", url: "https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1785133202/samtech_pdfs/PowerplantOM.pdf" },
    // previously this card did nothing; it now downloads the presentation that ships with the site
    { key: "pipelineIntervention", url: "/assets/ppt/pipeline_intervention_presentation.pptx", local: true },
];

const page = () => {
    const { t } = useLanguage();

    // const handleDownload = () => {
    //     const link = document.createElement("a");
    //     link.href = "/assets/ppt/pipeline_intervention_presentation.pptx"; // public path
    //     link.download = "pipeline_intervention_presentation.pptx";
    //     link.click();
    // };
    const handleDownload = async (pdfUrl) => {
  if (!pdfUrl) return;

  try {
    const downloadUrl = pdfUrl.replace('/upload/', '/upload/fl_attachment/');
    const response = await fetch(downloadUrl);
    const blob = await response.blob();

    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = decodeURIComponent(pdfUrl.split('/').pop() || 'brochure.pdf'); // sets the saved filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (err) {
    console.error('Download failed:', err);
  }
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
                                <img className="img-1" src="/assets/img/trainings/recognised_by governer_of_india.jpg" alt="SAM Tech and Power Tech Group recognition" fetchPriority="high" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='brochure_sec'>
                <div className="container">
                    <div className='brochureframe'>
                        <h2 className='fontSize20 fontWeight600 blackText_Clr mb_24'>{t("brochures.downloadTitle")}</h2>
                    <div className='row'>
                        {/* Real links (crawlable + keyboard accessible); click still triggers a direct download */}
                        {brochures.map((b) => (
                            <div className='col-lg-3' key={b.key}>
                                <a
                                    href={b.url}
                                    target="_blank"
                                    rel="noopener"
                                    download={b.local ? true : undefined}
                                    onClick={(e) => { if (!b.local) { e.preventDefault(); handleDownload(b.url); } }}
                                    style={{ display: 'block', color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
                                    aria-label={`${t(`brochures.${b.key}`)} brochure (download)`}
                                >
                                    <div className='brochure_item'>
                                        <div>
                                            <img src="/assets/img/pdf-download.svg" alt="" />
                                        </div>
                                        <div>
                                            <h5>{t(`brochures.${b.key}`)}</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </section>

            <section className='brochure_sec'>
                <div className="container">
                    <div className='brochureframe'>
                        <h5 className='fontSize20 fontWeight600 blackText_Clr mb_24'>{t("brochures.downloadTitle")}</h5>
                    <div className='row'>
                        <div className='col-lg-3' onClick={()=>handleDownload('https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1785133088/samtech_pdfs/Mechanical%20Maintenance.pdf')}>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="" />
                                </div>
                                <div>
                                    <h5>{t("brochures.mechanicalMaintenance")}</h5>
                                </div>
                               


                            </div>
                        </div>
                        <div className='col-lg-3' onClick={()=>handleDownload('https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1785132999/samtech_pdfs/Electrical%20Maintenance.pdf')}>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="" />
                                </div>
                                <div>
                                    <h5>{t("brochures.electricalMaintenance")}</h5>
                                </div>
                               



                            </div>
                        </div>
                        <div className='col-lg-3' onClick={()=>handleDownload('https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1785133044/samtech_pdfs/Fabrication.pdf')}>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="" />
                                </div>
                                <div>  <h5>{t("brochures.fabrication")}</h5></div>
                              



                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='brochure_item' onClick={()=>handleDownload('https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1785133140/samtech_pdfs/Valve%20Testing.pdf')}>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="" />
                                </div>
                                <div><h5>{t("brochures.valveTesting")}</h5></div>
                               


                            </div>
                        </div>
                        <div className='col-lg-3' onClick={()=>handleDownload('https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1785133063/samtech_pdfs/Manpower.pdf')}>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="" />
                                </div>
                                <div> <h5>{t("brochures.manpower")}</h5></div>


                            </div>
                        </div>
                        <div className='col-lg-3' onClick={()=>handleDownload('https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1785133202/samtech_pdfs/PowerplantOM.pdf')}>
                            <div className='brochure_item'>
                                <div>
                                    <img src="/assets/img/pdf-download.svg" alt="" />
                                </div>
                                <div><h5>{t("brochures.powerplantOM")}</h5></div>


                            </div>
                        </div>
                            <div className='col-lg-3' onClick={()=>handleDownload('')}>
                                <div className='brochure_item' onClick={handleDownload} style={{cursor: 'pointer'}}>
                                    <div>
                                        <img src="/assets/img/pdf-download.svg" alt="" />
                                    </div>
                                    <div><h5>{t("brochures.pipelineIntervention")}</h5></div>


                                </div>
                            </div>
                            <div className='col-lg-3' onClick={()=>handleDownload('https://res.cloudinary.com/dxmhjg6x1/raw/upload/v1788352092/samtech_pdfs/SAM%20Brochure%2029-06-2026.pdf')}>
                                <div className='brochure_item' onClick={handleDownload} style={{cursor: 'pointer'}}>
                                    <div>
                                        <img src="/assets/img/pdf-download.svg" alt="pdf download" />
                                    </div>
                                    <div><h5>{t("brochures.samtech")}</h5></div>


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
