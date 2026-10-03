'use client'
import { useState } from 'react';
import Service from "../../Components/Layout/Sevice";
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { SERVICES } from '@/lib/seo';
import { SERVICE_COPY } from '@/lib/service-seo-content';
import ServiceSeoSections from '../../Components/ServiceSeoSections';



const ServiceContent = ({ serviceId }) => {
    const { t } = useLanguage();

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/assets/ppt/pipeline_intervention_presentation.pptx"; // public path
        link.download = "pipeline_intervention_presentation.pptx";
        link.click();
    };


    // Enquiry form at the bottom of every service page -> sends to /api/contact
    const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success | error
    const handleEnquiry = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));
        setFormStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    subject: `Service enquiry: ${service?.title || pagename}`,
                    message: `Job title: ${data.jobTitle || '-'} | Country: ${data.country || '-'} | Page: ${typeof window !== 'undefined' ? window.location.href : ''}`,
                }),
            });
            if (res.ok) {
                setFormStatus('success');
                form.reset();
            } else {
                setFormStatus('error');
            }
        } catch {
            setFormStatus('error');
        }
    };

    const pagename = serviceId;
    const service = SERVICES.find((s) => s.id === serviceId);
    // Descriptive alt text for the service photos (helps Google Images + accessibility)
    const imgAlt = `${service?.title || 'Service'} – SAM Technical Service Contracting Est, Saudi Arabia`;
    const pageData = {
        online_safety_testing: {
            title: "Online Safety Valve Testing (Trevi Type)",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/online_safety_valve_bnr.png",
            bannerparagraph: "Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly.",
            content: (
                <>
                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.testingProcedure")}</h2>

                    <ul className='mb_40'>
                        {[0,1,2,3,4,5,6].map((i) => (
                            <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.onlineSafetyTesting.procedureList.${i}`)}</li>
                        ))}
                    </ul>
                    <div className='row alignItem_center'>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/onlineSafety_detail.webp"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={imgAlt} loading="lazy" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6'>





                            <h3 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.common.valveTypes")}</h3>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.onlineSafetyTesting.valveTypesText")}</p>

                            <h3 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.common.certification")}</h3>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.onlineSafetyTesting.certificationText")}</p>

                            <h3 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.common.calibrationCertificate")}</h3>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.onlineSafetyTesting.calibrationText")}</p>

                            <h3 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.common.referenceList")}</h3>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.onlineSafetyTesting.referenceListText")}</p>


                        </div>
                    </div>
                </>
            ),

        },
        offline_valve_testing: {
            title: "Offline Valve Testing & Calibration",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/offlineValve_testing_bnr.webp",
            bannerparagraph: "Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly.",
            content: (
                <>
                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.testingProcedure")}</h2>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'>{t("servicePage.offlineValveTesting.procedureText")}</p>
                    <div className='row '>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/offline_valve_testing_detail.webp"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={imgAlt} loading="lazy" />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-6'>





                            <h3 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.common.valveTypes")}</h3>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.common.valveServicesText")}</p>

                            <div className='valvetypesGrid'>
                                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                                    <span key={i}>{t(`servicePage.common.sharedValveTypesGrid.${i}`)}</span>
                                ))}
                            </div>

                            <h3 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.common.certification")}</h3>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.common.certificationText")}</p>






                        </div>
                    </div>
                </>
            ),


        },

        alltype_valve_services: {
            title: "All Types of Valve Servicing & Repair",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/allType_valveServicing_bnr.png",
            bannerparagraph: "We carry out comprehensive servicing, repair, calibration, and testing of all types of industrial valves and actuators — including safety valves, gate valves, ball valves, and control valves — both at our workshop and on-site at client facilities.",
            content: (
                <>
                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.allTypesValve.workshopFacility")}</h2>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'>{t("servicePage.allTypesValve.workshopText")}</p>
                    <div className='row alignItem_center mb_24'>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/allType_valveServicing_detail.webp"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={imgAlt} loading="lazy" />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-6'>

                            <h2 className='fontSize18 fontWeight600 bainganiText_Clr'>{t("servicePage.allTypesValve.portableMachinesHeading")}</h2>

                            <h3 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.allTypesValve.typeOfValveServicesHeading")}</h3>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.common.valveServicesText")}</p>

                            <div className='valvetypesGrid'>
                                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                                    <span key={i}>{t(`servicePage.common.sharedValveTypesGrid.${i}`)}</span>
                                ))}
                            </div>

                            <h3 className='fontSize16 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.keyClients")}</h3>

                            <div className='valvetypesGrid'>
                                {[0,1,2,3,4,5].map((i) => (
                                    <span key={i}>{t(`servicePage.allTypesValve.keyClientsGrid.${i}`)}</span>
                                ))}
                            </div>


                        </div>
                    </div>




                        <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.allTypesValve.whatItIsText")}</p>

                
                                <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h2>


                                <ul>
                                {[0,1,2,3,4,5].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.allTypesValve.whatWeDoList.${i}`)}</li>
                                ))}
                                </ul>
                       


                        <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.allTypesValve.whosItForText")}</p>


                        <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.allTypesValve.whyItMattersText")}</p>





                </>
            ),
        },
        online_seal_leaking: {
            title: "Online Leak Sealing – Sylmasta & Conventional",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/seal_leaking.jpg",
            bannerparagraph: "Online leak sealing today is the leak-sealing solutions of choice as it saves energy, prevents and expensive and unwanted shutdown and can address a wide variety of leaks. With the combination of engineering solutions support from global experts, we have leak sealing compounds that can address a wide variety of steam, chemical, hydrocarbon and gas leaks at temperature up to 700° C. ",
            content: (
                <>
                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.onlineSealLeaking.heading1")}</h2>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.onlineSealLeaking.intro1")}</p>

                    <div className='mb_16'>
                        <Link target="_blank" rel="noopener noreferrer" href="https://www.sylmasta.com/"><img className='width150px' src="/assets/img/sylmasta.png" alt="Sylmasta online leak sealing products" loading="lazy" /></Link>
                    </div>


                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'>
                        {t("servicePage.onlineSealLeaking.partnerPre")} <Link className="fontWeight600 narenjiOrangeTextclr" target="_blank" rel="noopener noreferrer" href="https://www.sylmasta.com/">Sylmasta</Link> {t("servicePage.onlineSealLeaking.partnerPost")}
                    </p>

                    <div className='row alignItem_center'>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/online-leak-sealing-saudi-arabia.webp"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={imgAlt} loading="lazy" />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-6'>


                            <h3 className='fontSize16 fontWeight600 blackText_Clr mb_16'>{t("servicePage.onlineSealLeaking.repairExamplesHeading")}</h3>

                            <div className='valvetypesGrid'>
                                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                                    <span key={i}>{t(`servicePage.onlineSealLeaking.repairExamplesGrid.${i}`)}</span>
                                ))}
                            </div>

                            <h3 className='fontSize16 fontWeight600 blackText_Clr mb_12'>{t("servicePage.onlineSealLeaking.advantagesHeading")}</h3>

                            <ul className='mb_40'>
                                {[0,1,2,3,4,5,6,7].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.onlineSealLeaking.advantagesList.${i}`)}</li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </>
            ),


        },

        hot_tapping: {
            title: "Hot Tapping & Insertion of S-Type (Gate Valve Online)",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/hot-tapping-services-saudi-arabia.webp",
            bannerparagraph: "We perform hot tapping — a specialised technique that allows connections, repairs, or valve insertions to be made on live pressurised pipelines without shutting down operations, minimising downtime and disruption.",
            content: (
                <>
                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.hotTapping.heading1")}</h2>


                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.hotTapping.p1")}</p>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'><span className='fontWeight600'>{t("servicePage.hotTapping.bold1")}</span> {t("servicePage.hotTapping.p2")}</p>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'><span className='fontWeight600'>{t("servicePage.hotTapping.bold2")}</span> {t("servicePage.hotTapping.p3")}</p>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'><span className='fontWeight600'>{t("servicePage.hotTapping.bold3")}</span> {t("servicePage.hotTapping.p4")}</p>



                    <div className='row alignItem_center mb_24'>
                        <div className='col-lg-5 mobspaceMb_24'>
                            {[
                                "/assets/img/hot-tapping-live-gate-valve-insertion.webp"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={imgAlt} loading="lazy" />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-7'>


                            <h3 className='fontSize16 fontWeight600 blackText_Clr mb_12'>{t("servicePage.hotTapping.heading2")}</h3>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.hotTapping.p5")}</p>

                            <ul>
                                {[0,1,2].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.hotTapping.list1.${i}`)}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <h3 className='fontSize16 fontWeight600 blackText_Clr mb_12'>{t("servicePage.hotTapping.heading3")}</h3>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.hotTapping.p6")}</p>

                    <div className='mb_24'>
                        <button className='mainbtn' onClick={handleDownload} style={{ cursor: 'pointer' }}>{t("servicePage.common.downloadPipelinePdf")}</button>
                    </div>







                        <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.hotTapping.whatItIsText")}</p>

                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h2>


                    <ul>
                        {[0,1,2,3,4].map((i) => (
                            <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.hotTapping.whatWeDoList.${i}`)}</li>
                        ))}

                      </ul>


                        <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.hotTapping.whosItForText")}</p>


                        <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.hotTapping.whyItMattersText")}</p>



                </>
            ),
        },
        heat_exchanger: {
            title: "Heat Exchanger Maintenance & Supply",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/heat-exchanger-maintenance-saudi-arabia.webp",
            bannerparagraph: "We supply, install, and maintain heat exchangers used in power plants, refineries, and water treatment facilities, ensuring efficient thermal energy transfer and uninterrupted plant operations.",
            content: (
                <>
                    <h2 className='fontSize16 fontWeight600 blackText_Clr mb_12'>{t("servicePage.heatExchanger.heading1")}</h2>
                    <ul className='mb_40'>
                        {[0,1,2,3,4].map((i) => (
                            <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.heatExchanger.list1.${i}`)}</li>
                        ))}
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.list1.5")}</li>
                    </ul>


                    <div className='row alignItem_center mb_24'>
                        <div className='col-lg-5 mobspaceMb_24'>
                            {[
                                "/assets/img/heat-exchanger-retubing-tube-bundle.webp"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={imgAlt} loading="lazy" />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-7'>
                            <h3 className='fontSize16 fontWeight600 blackText_Clr mb_8'>{t("servicePage.heatExchanger.tubeExtractionHeading")}</h3>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.heatExchanger.tubeExtractionText")}</p>

                            <h3 className='fontSize16 fontWeight600 blackText_Clr mb_8'>{t("servicePage.heatExchanger.safelyTubeTransportHeading")}</h3>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.heatExchanger.safelyTubeTransportText")}</p>

                            <h3 className='fontSize16 fontWeight600 blackText_Clr mb_8'>{t("servicePage.heatExchanger.bundleCleaningHeading")}</h3>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t("servicePage.heatExchanger.bundleCleaningText")}</p>

                            <ul className='mb_16'>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.list2.0")}</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.list2.1")}</li>
                            </ul>


                            <h3 className='fontSize16 fontWeight600 blackText_Clr mb_8'>{t("servicePage.heatExchanger.newTubesHeading")}</h3>

                            <ul className='mb_16'>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.list3.0")}</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.list3.1")}</li>
                            </ul>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.heatExchanger.finalText")}</p>

                            <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h2>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.heatExchanger.whatItIsText")}</p>

                        </div>
                    </div>









                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h2>


                    <ul>
                        {[0,1,2,3,4].map((i) => (
                            <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.heatExchanger.whatWeDoList.${i}`)}</li>
                        ))}

                    </ul>


                        <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.heatExchanger.whosItForText")}</p>


                        <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.whyItMattersText")}</p>



                </>
            ),

        },

        // content not confirm

        ro_membrane: {
            title: "RO Plant Retrofitting & Membrane Replacement",
            subTitle: "REPLACEMENT SERVICES",
            bannerImg: "/assets/img/roplants_retro_detail.webp",
            bannerparagraph: "We upgrade and modernise existing Reverse Osmosis water treatment plants by replacing outdated components with newer, more efficient parts — extending plant life and improving water output quality without a full replacement.",

            content: (
                <>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roMembrane.intro")}</p>
                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roMembrane.whatItIsText")}</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h2>


                            <ul>
                                {[0,1,2,3].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.roMembrane.whatWeDoList.${i}`)}</li>
                                ))}
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.roMembrane.whatWeDoList.4")}</li>


                            </ul>
                        </div>
                        <div className='col-lg-5'>
                            {[
                                "/assets/img/ro_plant_epc_contracts_home.jpg"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={imgAlt} loading="lazy" />
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>


                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roMembrane.whosItForText")}</p>


                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roMembrane.whyItMattersText")}</p>


                </>)
            ,
            imgs: [
                "/assets/img/roplants_retro_detail.webp"
            ],
            clients: []

        },

        ro_plant_epc_contracts: {
            title: "RO Plant EPC Contracts up to 2 MIGD",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/ro-desalination-plant-epc-saudi-arabia.webp",
            bannerparagraph: "We deliver end-to-end Engineering, Procurement, and Construction of Reverse Osmosis water desalination plants with a capacity of up to 2 million imperial gallons per day, serving industrial and municipal water needs.",
            content: (
                <>

                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roPlantEpc.whatItIsText")}</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h2>


                            <ul>
                                {[0,1,2,3].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.roPlantEpc.whatWeDoList.${i}`)}</li>
                                ))}
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.roPlantEpc.whatWeDoList.4")}</li>
                            </ul>
                        </div>
                        <div className='col-lg-5'>
                            {[
                                "/assets/img/reverse-osmosis-plant-membrane-racks.webp"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={imgAlt} loading="lazy" />
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>


                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roPlantEpc.whosItForText")}</p>


                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roPlantEpc.whyItMattersText")}</p>



                </>
            ),
            imgs: [
                "/assets/img/heatExchanger_detail.webp",
            ],
            // clients: [
            //     {
            //         name: "BAHRAIN",
            //         companines: [
            //             "FOULATH HOLDING B.S.C ",
            //             "BAHRAIN STEELS BSCC (E.C)"
            //         ]
            //     },
            //     {
            //         name: "DUBAI",
            //         companines: [
            //             "SHOMCO"
            //         ]
            //     }
            // ]
        },

        solar_plant_epc: {
            title: "Solar Plant EPC up to 5 MW & Maintenance",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/solar-pv-plant-epc-saudi-arabia.webp",
            bannerparagraph: "We handle the complete Engineering, Procurement, and Construction of solar power plants up to 5MW capacity, along with ongoing maintenance to keep systems running at peak efficiency.",
            content: (
                <>

                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.solarPlantEpc.whatItIsText")}</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h2>


                            <ul>
                                {[0,1,2,3].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.solarPlantEpc.whatWeDoList.${i}`)}</li>
                                ))}
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.solarPlantEpc.whatWeDoList.4")}</li>


                            </ul>
                        </div>
                        <div className='col-lg-5'>
                            {[
                                "/assets/img/solar-pv-panel-installation.webp"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={imgAlt} loading="lazy" />
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>


                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.solarPlantEpc.whosItForText")}</p>


                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.solarPlantEpc.whyItMattersText")}</p>



                </>
            ),
            imgs: [
                "/assets/img/heatExchanger_detail.webp",
            ],
            clients: [
                {
                    name: "BAHRAIN",
                    companines: [
                        "FOULATH HOLDING B.S.C ",
                        "BAHRAIN STEELS BSCC (E.C)"
                    ]
                },
                {
                    name: "DUBAI",
                    companines: [
                        "SHOMCO"
                    ]
                }
            ]
        },

        upvc_aluminiumdoors_windowsfabrication: {
            title: "UPVC & Aluminium Doors and Windows – Fabrication & Installation",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/upvc-aluminium-doors-windows-saudi-arabia.webp",
            bannerparagraph: "We design, fabricate, and install high-quality UPVC and aluminium doors and windows for industrial, commercial, and residential buildings, ensuring durability, weather resistance, and a professional finish.",
            content: (
                <>
                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.upvc.whatItIsText")}</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h2>


                            <ul>
                                {[0,1,2,3].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.upvc.whatWeDoList.${i}`)}</li>
                                ))}
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.upvc.whatWeDoList.4")}</li>

                            </ul>

                            <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h2>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.upvc.whosItForText")}</p>
                        </div>
                        <div className='col-lg-5'>
                            {[
                                "/assets/img/upvc-aluminium-windows-fabrication.webp"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={imgAlt} loading="lazy" />
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>


                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.upvc.whyItMattersText")}</p>


                </>
            ),
            imgs: [
                "/assets/img/upvc_bnr.webp",
            ],
            clients: [
                {
                    name: "BAHRAIN",
                    companines: [
                        "FOULATH HOLDING B.S.C ",
                        "BAHRAIN STEELS BSCC (E.C)"
                    ]
                },
                {
                    name: "DUBAI",
                    companines: [
                        "SHOMCO"
                    ]
                }
            ]
        },

        technical_manpower_supply_for_power_plant_refineries_and_water_plant: {
            title: "Technical Manpower Supply for Power Plants, Refineries & Water Plants",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/technical-manpower-supply-saudi-arabia.webp",
            bannerparagraph: "We provide skilled and experienced technical personnel — including engineers, operators, and technicians — to power plants, refineries, and water treatment facilities on short-term or long-term contract basis.",
            content: (
                <>

                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.technicalManpower.whatItIsText")}</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h2>


                            <ul>
                                {[0,1,2,3].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.technicalManpower.whatWeDoList.${i}`)}</li>
                                ))}
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.technicalManpower.whatWeDoList.4")}</li>

                            </ul>
                        </div>
                        <div className='col-lg-5'>
                            {[
                                "/assets/img/technical-manpower-power-plant-team.webp"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={imgAlt} loading="lazy" />
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>


                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.technicalManpower.whosItForText")}</p>


                    <h2 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h2>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.technicalManpower.whyItMattersText")}</p>



                </>
            ),
            imgs: [
                "/assets/img/upvc_bnr.webp",
            ],
            clients: [
                {
                    name: "BAHRAIN",
                    companines: [
                        "FOULATH HOLDING B.S.C ",
                        "BAHRAIN STEELS BSCC (E.C)"
                    ]
                },
                {
                    name: "DUBAI",
                    companines: [
                        "SHOMCO"
                    ]
                }
            ]
        },
    }

    return (
        <>

            <Service pageData={pageData[pagename]} pagename={pagename} navKey={service?.navKey} copy={SERVICE_COPY[pagename]} />

            <ServiceSeoSections serviceId={pagename} />


            <section className='leadsGeneration_sec' id="to-know-more-contact-us">
                <div className='container'>

                    <div className='leadsGen-wrapper'>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <div className='leadsGen-img'>
                                    <img src="/assets/img/leadsGen_img.png" alt="Send an enquiry to SAM Tech" loading="lazy" />
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className='leadGenFrame'>
                                    <h2>{t("servicePage.common.toKnowMoreHeading")}</h2>

                                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.common.toKnowMoreDesc")}</p>
                                    <form onSubmit={handleEnquiry}>
                                        {formStatus === 'success' && (
                                            <p role="status" style={{ padding: '12px 16px', background: '#d1fae5', color: '#065f46', borderRadius: '8px', marginBottom: '20px' }}>{t("contactForm.successMessage")}</p>
                                        )}
                                        {formStatus === 'error' && (
                                            <p role="alert" style={{ padding: '12px 16px', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', marginBottom: '20px' }}>{t("contactForm.errorMessageDefault")}</p>
                                        )}

                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">First Name</label> */}
                                                    <input placeholder={t("servicePage.common.formFirstName")}
                                                        aria-label={t("servicePage.common.formFirstName")}
                                                        type="text"
                                                        name="firstName"
                                                        required
                                                        autoComplete="given-name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Last Name</label> */}
                                                    <input placeholder={t("servicePage.common.formLastName")}
                                                        aria-label={t("servicePage.common.formLastName")}
                                                        type="text"
                                                        name="lastName"
                                                        autoComplete="family-name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Phone number</label> */}
                                                    <input placeholder={t("servicePage.common.formCompanyName")}
                                                        aria-label={t("servicePage.common.formCompanyName")}
                                                        type="text"
                                                        name="companyName"
                                                        autoComplete="organization"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>



                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Email Address</label> */}
                                                    <input placeholder={t("servicePage.common.formCompanyEmail")}
                                                        aria-label={t("servicePage.common.formCompanyEmail")}
                                                        type="email"
                                                        name="email"
                                                        required
                                                        autoComplete="email"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Company Name</label> */}
                                                    <input placeholder={t("servicePage.common.formPrimaryPhone")}
                                                        aria-label={t("servicePage.common.formPrimaryPhone")}
                                                        type="tel"
                                                        name="phone"
                                                        autoComplete="tel"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Job Title</label> */}
                                                    <input placeholder={t("servicePage.common.formJobTitle")}
                                                        aria-label={t("servicePage.common.formJobTitle")}
                                                        type="text"
                                                        name="jobTitle"
                                                        autoComplete="organization-title"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                        </div>





                                        <div className='row'>
                                            {/* <div className='col-lg-6'>
                                                <div className="mb_24">

                                                    <select className="mainInput">
                                                        <option>Select Category </option>
                                                    </select>
                                                </div>
                                            </div> */}
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Country</label> */}
                                                    <input placeholder={t("servicePage.common.formCountry")}
                                                        aria-label={t("servicePage.common.formCountry")}
                                                        type="text"
                                                        name="country"
                                                        autoComplete="country-name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>

                                        </div>







                                        <button
                                            type="submit"
                                            disabled={formStatus === 'loading'}
                                            className="mainbtn">
                                            {formStatus === 'loading' ? t("contactForm.sending") : t("servicePage.common.submitForm")}
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ServiceContent;
