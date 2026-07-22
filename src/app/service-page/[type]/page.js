'use client'
import { usePathname, useParams } from 'next/navigation'
import Service from "../../Components/Layout/Sevice";
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';



const ServicePage = () => {
    const { t } = useLanguage();

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/assets/ppt/pipeline_intervention_presentation.pptx"; // public path
        link.download = "pipeline_intervention_presentation.pptx";
        link.click();
    };


    const pathname = usePathname()
    const params = useParams()
    const pagename = params.type;
    //  const tabs = [
    // {
    //   id: "side_tab1", title: "Online Safety Valve Testing (Trevi Type)", content: (
    //     <>
    //       <div className='mb_24'>
    //         <img src="/assets/img/treviType.webp" alt="Online Safety Valve Testing (Trevi Type)" />
    //       </div>
    //       <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>THE ONLY THING MORE IMPORTANT THAN A SAFETY VALVE IS HOW YOU TEST IT</p>
    //       <h5>AccuTEST Safety Valve Test System & L – PLAN LEGA TEST System- Online Safety Valve Testing Test Online</h5>
    //       <p className='spitsbergenBlueText_clr fontSize16 fontWeight400 mb_16'>Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly. But can you really be sure of the results if the test is not conducted under the stress of everyday conditions?</p>
    //       <Link href="/service-page/online_safety_testing">To know more Click Here</Link>


    //     </>
    //   )
    // },]
    const pageData = {
        online_safety_testing: {
            title: "Online Safety Valve Testing (Trevi Type)",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/online_safety_valve_bnr.png",
            bannerparagraph: "Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly.",
            content: (
                <>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.testingProcedure")}</h5>

                    <ul className='mb_40'>
                        {[0,1,2,3,4,5,6].map((i) => (
                            <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.onlineSafetyTesting.procedureList.${i}`)}</li>
                        ))}
                    </ul>
                    <div className='row alignItem_center'>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/onlineSafety_detail.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6'>





                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.common.valveTypes")}</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.onlineSafetyTesting.valveTypesText")}</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.common.certification")}</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.onlineSafetyTesting.certificationText")}</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.common.calibrationCertificate")}</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.onlineSafetyTesting.calibrationText")}</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.common.referenceList")}</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.onlineSafetyTesting.referenceListText")}</p>


                        </div>
                    </div>
                </>
            ),

        },
        offline_valve_testing: {
            title: "Offline Valve Testing",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/offlineValve_testing_bnr.png",
            bannerparagraph: "Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly.",
            content: (
                <>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.testingProcedure")}</h5>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'>{t("servicePage.offlineValveTesting.procedureText")}</p>
                    <div className='row '>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/offline_valve_testing_detail.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-6'>





                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.common.valveTypes")}</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.common.valveServicesText")}</p>

                            <div className='valvetypesGrid'>
                                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                                    <span key={i}>{t(`servicePage.common.sharedValveTypesGrid.${i}`)}</span>
                                ))}
                            </div>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.common.certification")}</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.common.certificationText")}</p>






                        </div>
                    </div>
                </>
            ),


        },

        alltype_valve_services: {
            title: "All Types of Valve Servicing",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/allType_valveServicing_bnr.png",
            bannerparagraph: "We carry out comprehensive servicing, repair, calibration, and testing of all types of industrial valves and actuators — including safety valves, gate valves, ball valves, and control valves — both at our workshop and on-site at client facilities.",
            content: (
                <>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.allTypesValve.workshopFacility")}</h5>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'>{t("servicePage.allTypesValve.workshopText")}</p>
                    <div className='row alignItem_center mb_24'>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/allType_valveServicing_detail.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-6'>

                            <h2 className='fontSize18 fontWeight600 bainganiText_Clr'>{t("servicePage.allTypesValve.portableMachinesHeading")}</h2>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>{t("servicePage.allTypesValve.typeOfValveServicesHeading")}</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.common.valveServicesText")}</p>

                            <div className='valvetypesGrid'>
                                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                                    <span key={i}>{t(`servicePage.common.sharedValveTypesGrid.${i}`)}</span>
                                ))}
                            </div>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.keyClients")}</h5>

                            <div className='valvetypesGrid'>
                                {[0,1,2,3,4,5].map((i) => (
                                    <span key={i}>{t(`servicePage.allTypesValve.keyClientsGrid.${i}`)}</span>
                                ))}
                            </div>


                        </div>
                    </div>




                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.allTypesValve.whatItIsText")}</p>

                
                                <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h5>


                                <ul>
                                {[0,1,2,3,4,5].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.allTypesValve.whatWeDoList.${i}`)}</li>
                                ))}
                                </ul>
                       


                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.allTypesValve.whosItForText")}</p>


                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.allTypesValve.whyItMattersText")}</p>





                </>
            ),
        },
        online_seal_leaking: {
            title: "ONLINE SEAL LEAKING",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/seal_leaking.jpg",
            bannerparagraph: "Online leak sealing today is the leak-sealing solutions of choice as it saves energy, prevents and expensive and unwanted shutdown and can address a wide variety of leaks. With the combination of engineering solutions support from global experts, we have leak sealing compounds that can address a wide variety of steam, chemical, hydrocarbon and gas leaks at temperature up to 700° C. ",
            content: (
                <>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.onlineSealLeaking.heading1")}</h5>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.onlineSealLeaking.intro1")}</p>

                    <div className='mb_16'>
                        <img className='width150px' src="/assets/img/sylmasta.png" />
                    </div>


                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'>
                        {t("servicePage.onlineSealLeaking.partnerPre")} <Link class="fontWeight500 bainganiText_Clr" target="_blank" href="https://www.sylmasta.com/">Sylmasta</Link> {t("servicePage.onlineSealLeaking.partnerPost")}
                    </p>

                    <div className='row alignItem_center'>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/sealLeaking_detail.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-6'>


                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_16'>{t("servicePage.onlineSealLeaking.repairExamplesHeading")}</h5>

                            <div className='valvetypesGrid'>
                                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
                                    <span key={i}>{t(`servicePage.onlineSealLeaking.repairExamplesGrid.${i}`)}</span>
                                ))}
                            </div>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>{t("servicePage.onlineSealLeaking.advantagesHeading")}</h5>

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
            bannerImg: "/assets/img/hotTapping_bnr.png",
            bannerparagraph: "We perform hot tapping — a specialised technique that allows connections, repairs, or valve insertions to be made on live pressurised pipelines without shutting down operations, minimising downtime and disruption.",
            content: (
                <>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.hotTapping.heading1")}</h5>


                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.hotTapping.p1")}</p>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'><span className='fontWeight600'>{t("servicePage.hotTapping.bold1")}</span> {t("servicePage.hotTapping.p2")}</p>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'><span className='fontWeight600'>{t("servicePage.hotTapping.bold2")}</span> {t("servicePage.hotTapping.p3")}</p>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'><span className='fontWeight600'>{t("servicePage.hotTapping.bold3")}</span> {t("servicePage.hotTapping.p4")}</p>



                    <div className='row alignItem_center mb_24'>
                        <div className='col-lg-4 mobspaceMb_24'>
                            {[
                                "/assets/img/hot_tapping_detail.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-8'>


                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>{t("servicePage.hotTapping.heading2")}</h5>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.hotTapping.p5")}</p>

                            <ul className='mb_40'>
                                {[0,1,2].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.hotTapping.list1.${i}`)}</li>
                                ))}
                            </ul>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>{t("servicePage.hotTapping.heading3")}</h5>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.hotTapping.p6")}</p>


                            <button className='mainbtn' onClick={handleDownload} style={{ cursor: 'pointer' }}>{t("servicePage.common.downloadPipelinePdf")}</button>
                        </div>
                    </div>







                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.hotTapping.whatItIsText")}</p>

                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h5>


                    <ul>
                        {[0,1,2,3,4].map((i) => (
                            <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.hotTapping.whatWeDoList.${i}`)}</li>
                        ))}

                      </ul>


                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.hotTapping.whosItForText")}</p>


                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.hotTapping.whyItMattersText")}</p>



                </>
            ),
        },
        heat_exchanger: {
            title: "Heat Exchanger, Maintenance & Supply",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/heatExchanger_bnr.png",
            bannerparagraph: "We supply, install, and maintain heat exchangers used in power plants, refineries, and water treatment facilities, ensuring efficient thermal energy transfer and uninterrupted plant operations.",
            content: (
                <>
                    <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>{t("servicePage.heatExchanger.heading1")}</h5>
                    <ul className='mb_40'>
                        {[0,1,2,3,4].map((i) => (
                            <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.heatExchanger.list1.${i}`)}</li>
                        ))}
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.list1.5")}</li>
                    </ul>


                    <div className='row alignItem_center'>
                        <div className='col-lg-6 mobspaceMb_24'>
                            {[
                                "/assets/img/heatExchanger_detail.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className='col-lg-6'>
                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_8'>{t("servicePage.heatExchanger.tubeExtractionHeading")}</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.heatExchanger.tubeExtractionText")}</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_8'>{t("servicePage.heatExchanger.safelyTubeTransportHeading")}</h5>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>{t("servicePage.heatExchanger.safelyTubeTransportText")}</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_8'>{t("servicePage.heatExchanger.bundleCleaningHeading")}</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t("servicePage.heatExchanger.bundleCleaningText")}</p>

                            <ul className='mb_16'>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.list2.0")}</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.list2.1")}</li>
                            </ul>


                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_8'>{t("servicePage.heatExchanger.newTubesHeading")}</h5>

                            <ul className='mb_16'>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.list3.0")}</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.list3.1")}</li>
                            </ul>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.finalText")}</p>

                        </div>
                    </div>









                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.heatExchanger.whatItIsText")}</p>

                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h5>


                    <ul>
                        {[0,1,2,3,4].map((i) => (
                            <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.heatExchanger.whatWeDoList.${i}`)}</li>
                        ))}

                    </ul>


                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.heatExchanger.whosItForText")}</p>


                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.heatExchanger.whyItMattersText")}</p>



                </>
            ),

        },

        // content not confirm

        ro_membrane: {
            title: "RO Plants Retro Fitting",
            subTitle: "REPLACEMENT SERVICES",
            bannerImg: "/assets/img/roplants_retro_detail.png",
            bannerparagraph: "We upgrade and modernise existing Reverse Osmosis water treatment plants by replacing outdated components with newer, more efficient parts — extending plant life and improving water output quality without a full replacement.",

            content: (
                <>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roMembrane.intro")}</p>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roMembrane.whatItIsText")}</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h5>


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
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roMembrane.whosItForText")}</p>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roMembrane.whyItMattersText")}</p>


                </>)
            ,
            imgs: [
                "/assets/img/roplants_retro_detail.png"
            ],
            clients: []

        },

        ro_plant_epc_contracts: {
            title: "RO Plant EPC Contracts Upto 2MIGPDA",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/heatExchanger_bnr.png",
            bannerparagraph: "We deliver end-to-end Engineering, Procurement, and Construction of Reverse Osmosis water desalination plants with a capacity of up to 2 million imperial gallons per day, serving industrial and municipal water needs.",
            content: (
                <>

                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roPlantEpc.whatItIsText")}</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h5>


                            <ul>
                                {[0,1,2,3].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.roPlantEpc.whatWeDoList.${i}`)}</li>
                                ))}
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.roPlantEpc.whatWeDoList.4")}</li>
                            </ul>
                        </div>
                        <div className='col-lg-5'>
                            {[
                                "/assets/img/heatExchanger.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roPlantEpc.whosItForText")}</p>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.roPlantEpc.whyItMattersText")}</p>



                </>
            ),
            imgs: [
                "/assets/img/heatExchanger_detail.png",
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
            title: "Solar Plant EPC upto  5MW & Maintenance",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/heatExchanger_bnr.png",
            bannerparagraph: "We handle the complete Engineering, Procurement, and Construction of solar power plants up to 5MW capacity, along with ongoing maintenance to keep systems running at peak efficiency.",
            content: (
                <>

                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.solarPlantEpc.whatItIsText")}</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h5>


                            <ul>
                                {[0,1,2,3].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.solarPlantEpc.whatWeDoList.${i}`)}</li>
                                ))}
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.solarPlantEpc.whatWeDoList.4")}</li>


                            </ul>
                        </div>
                        <div className='col-lg-5'>
                            {[
                                "/assets/img/heatExchanger.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.solarPlantEpc.whosItForText")}</p>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.solarPlantEpc.whyItMattersText")}</p>



                </>
            ),
            imgs: [
                "/assets/img/heatExchanger_detail.png",
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
            title: "UPVC & Aluminium Doors & Windows Fabrication & Installation",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/upvc_bnr.png",
            bannerparagraph: "We design, fabricate, and install high-quality UPVC and aluminium doors and windows for industrial, commercial, and residential buildings, ensuring durability, weather resistance, and a professional finish.",
            content: (
                <>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.upvc.whatItIsText")}</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h5>


                            <ul>
                                {[0,1,2,3].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.upvc.whatWeDoList.${i}`)}</li>
                                ))}
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.upvc.whatWeDoList.4")}</li>

                            </ul>
                        </div>
                        <div className='col-lg-5'>
                            {[
                                "/assets/img/upvc_home.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.upvc.whosItForText")}</p>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.upvc.whyItMattersText")}</p>


                </>
            ),
            imgs: [
                "/assets/img/upvc_bnr.png",
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
            title: "Technical Manpower supply for Power plant refineries and Water plant",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/upvc_bnr.png",
            bannerparagraph: "We provide skilled and experienced technical personnel — including engineers, operators, and technicians — to power plants, refineries, and water treatment facilities on short-term or long-term contract basis.",
            content: (
                <>

                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatItIs")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.technicalManpower.whatItIsText")}</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whatWeDo")}</h5>


                            <ul>
                                {[0,1,2,3].map((i) => (
                                    <li key={i} className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>{t(`servicePage.technicalManpower.whatWeDoList.${i}`)}</li>
                                ))}
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.technicalManpower.whatWeDoList.4")}</li>

                            </ul>
                        </div>
                        <div className='col-lg-5'>
                            {[
                                "/assets/img/upvc_home.png"
                            ].map((img, index) => (
                                <div key={index}>
                                    <div className='serviceContentImg'>
                                        <img src={img} alt={`service-img-${index}`} />
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whosItFor")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.technicalManpower.whosItForText")}</p>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>{t("servicePage.common.whyItMatters")}</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>{t("servicePage.technicalManpower.whyItMattersText")}</p>



                </>
            ),
            imgs: [
                "/assets/img/upvc_bnr.png",
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

            <Service pageData={pageData[`${pagename}`]} pagename={pagename} />


            <section className='leadsGeneration_sec' id="to-know-more-contact-us">
                <div className='container'>

                    <div className='leadsGen-wrapper'>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <div className='leadsGen-img'>
                                    <img src="/assets/img/leadsGen_img.png" alt='lead gen' />
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className='leadGenFrame'>
                                    <h2>{t("servicePage.common.toKnowMoreHeading")}</h2>

                                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>{t("servicePage.common.toKnowMoreDesc")}</p>
                                    <form>

                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">First Name</label> */}
                                                    <input placeholder={t("servicePage.common.formFirstName")}
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Last Name</label> */}
                                                    <input placeholder={t("servicePage.common.formLastName")}
                                                        type="text"
                                                        name="name"
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
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>



                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Email Address</label> */}
                                                    <input placeholder={t("servicePage.common.formCompanyEmail")}
                                                        type="text"
                                                        name="name"
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
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Job Title</label> */}
                                                    <input placeholder={t("servicePage.common.formJobTitle")}
                                                        type="text"
                                                        name="name"
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
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>

                                        </div>







                                        <button
                                            type="submit"
                                            className="mainbtn">
                                            {t("servicePage.common.submitForm")}
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

export default ServicePage;