'use client'
import { usePathname, useParams } from 'next/navigation'
import Service from "../../Components/Layout/Sevice";
import Link from 'next/link';



const ServicePage = () => {

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
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Testing Procedure</h5>

                    <ul className='mb_40'>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Online testing of steam relief safety valves is an accepted method of Relief Valve testing for all type of safety relief valves.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>A load cell is mounted with electronic DC moter puller on the valve&apos;s stem top.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>This pulls the stem thereby trying to lift the disc.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>The net result is that the valve pops at a pressure set pressure less electronic pressure calculated on the basis of disc area.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>We do not have to actually raise system pressure to the set point of the Relief Valve.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>But , Electronic Test puller can be apply more than 100 kg/cm2 pressure on the valve disc depending on disc area.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Still, since the system pressure remains very less than set pressure when the valave pops, it is safer. This method is normally used for stem safety relief valves.</li>

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





                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>Valve Types</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>All Type of safety valves, Safety Relief Valves, Pressure Relief Valves can be test.</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>Certification</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>Our machine is already Tested in USA and certified with TUV SUD, also we are ISO 9001 : 2008 Certified and OSHAS 18001:2007 certified company</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>Calibration Certificate</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>Our machine is already Tested on Honeywell in USA and certified with TUV SUD.</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'> Reference List</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>TANGEDCO, TNPL, ALSTOM, LANCO, GMR, WARTSILA, STERLITE, ADHUNIK, CEGAS-EGYPT,TNPL</p>


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
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Testing Procedure</h5>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'>Power Tech is a complete valve repair facility.  We have the capability of repairing any type of valve from safety valves to control valves to gate valves to large butterfly valves.  We have factory trained technicians and work very closely with many valve and actuator manufacturers.</p>
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





                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>Valve Types</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>We are doing servicing of all types of Industrial Valves. Being the company with well-equipped set up and outstanding team of expert work force, the unit provides both onsite and offsite servicing activities whether the requirement is for one valve or for a complete plant. It has a wealth of multi-skilled engineers who provide complete valve management services for valves of Any Size / Age / Type / Make / Rating / MOC / Temp</p>

                            <div className='valvetypesGrid'>
                                <span>Gate Valves</span>
                                <span>Check Valves (NRV)</span>
                                <span>Sluice Valves,</span>
                                <span>Control Valves service & Calibration</span>
                                <span>Plug Valves,</span>
                                <span>Wafer type butterfly Valves</span>
                                <span> Non-slam check Valves</span>
                                <span> Knife Edge Gate Valves (EPDM Rubber Seat Rings)</span>
                                <span>  Globe Valves</span>
                                <span>Ball Valves</span>
                                <span> Hydrant Valves</span>
                                <span>Safety Valves</span>
                                <span> Wafer check Valves</span>
                            </div>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>Certification</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>Our machine is already Tested in USA and certified with TUV SUD, also we are ISO 9001 : 2008 Certified and OSHAS 18001:2007 certified company</p>






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
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Workshop Facility</h5>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'>Power Tech is a complete valve repair facility. We have the capability of repairing any type of valve from safety valves to control valves to gate valves to large butterfly valves. We have factory trained technicians and work very closely with many valve and actuator manufacturers.</p>
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

                            <h2 className='fontSize18 fontWeight600 bainganiText_Clr'>Portable Machines for Valve Services</h2>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr'>Type of Valve Services</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>We are doing servicing of all types of Industrial Valves. Being the company with well-equipped set up and outstanding team of expert work force, the unit provides both onsite and offsite servicing activities whether the requirement is for one valve or for a complete plant. It has a wealth of multi-skilled engineers who provide complete valve management services for valves of Any Size / Age / Type / Make / Rating / MOC / Temp</p>

                            <div className='valvetypesGrid'>
                                <span>Gate Valves</span>
                                <span>Check Valves (NRV)</span>
                                <span>Sluice Valves,</span>
                                <span>Control Valves service & Calibration</span>
                                <span>Plug Valves,</span>
                                <span>Wafer type butterfly Valves</span>
                                <span> Non-slam check Valves</span>
                                <span> Knife Edge Gate Valves (EPDM Rubber Seat Rings)</span>
                                <span>  Globe Valves</span>
                                <span>Ball Valves</span>
                                <span> Hydrant Valves</span>
                                <span>Safety Valves</span>
                                <span> Wafer check Valves</span>
                            </div>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>Key Clients</h5>

                            <div className='valvetypesGrid'>
                                <span>ENERFLEX</span>
                                <span>Gulf Petrochemical Industries.co(GPIC)</span>
                                <span>Aldur Power and Maintenance Company W.L.L</span>
                                <span>Ahmadi Industries B.S.C</span>
                                <span>eNGie STOMO</span>
                                <span>Pepsico</span>
                            </div>


                        </div>
                    </div>




                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What it is</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>A comprehensive, multi-discipline valve maintenance, repair, calibration, and testing service covering all industrial valve and actuator types — delivered through our fully equipped workshop facility and through in-situ on-site intervention teams operating across Saudi Arabia and the GCC.</p>

                
                                <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What we do</h5>


                                <ul>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Carry out detailed inspection, disassembly, failure diagnosis, and condition reporting for all valve types including safety relief valves, gate, globe, ball, butterfly, check, and control valves</li>

                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Perform precision repair and component replacement of seats, stems, packing, body seals, trim, and internal assemblies using OEM-specification or equivalent materials</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Execute online safety valve testing using AccuTEST and Trevi-type systems — verifying set-point accuracy on live, pressurised systems without process interruption</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Conduct offline bench testing, calibration, and certification to applicable standards including API, ASME, and client specifications</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Service and overhaul electric, pneumatic, and hydraulic actuators across all major OEM platforms</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Deploy in-situ valve servicing teams for live-system intervention, minimising plant downtime and eliminating the need for equipment removal</li>

                                </ul>
                       


                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Who it's for</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Power generation stations, oil and gas refineries, petrochemical processing plants, seawater desalination facilities, water authorities, and any industrial operation where valves and actuators form critical elements of process control, safety, and isolation systems.</p>


                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Why it matters</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Industrial valves are among the most safety-critical components in any plant — directly responsible for process containment, pressure protection, and emergency isolation. A valve that fails to open, close, or lift at the correct set point can trigger a catastrophic safety event, an environmental incident, or a costly unplanned shutdown. Regular, professionally executed servicing and calibration ensures every valve in a facility performs precisely as designed — protecting personnel, plant integrity, regulatory compliance, and operational continuity.</p>





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
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>​POWER TECH – INNOVATIVE AND INVOLVED</h5>
                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Power tech specializes in minimizing asset downtime by providing innovative on-line leak sealing services. We currently supply our services to the power, oil &amp; gas industries. Our extensive engineering support, widespread international leak sealing experience, 100% injury free service record satisfy the specific needs of the individual customer.</p>

                    <div className='mb_16'>
                        <img className='width150px' src="/assets/img/sylmasta.png" />
                    </div>


                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'>
                        We are pleased to say that we have partnered up with Sylmasta UK, a world-leader in providing online leak sealing solutions to provide Polymer-based Innovative Online Leak Sealing Services to India. We are the sole distributor of <Link class="fontWeight500 bainganiText_Clr" target="_blank" href="https://www.sylmasta.com/">Sylmasta</Link> Leak sealing products and, therefore, this makes Power tech the leak sealing company of choice.  This Polymer based “On-line sealing” is an innovation of tremendous benefit to industry. A variety of leaks on various systems can be sealed on-site in a safe, efficient, non-destructive and cost-efficient manner without isolation and without loss in production thus minimizing noise and emission levels, erosion damage and improves plant safety whilst maintaining equipment integrity.
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


                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_16'>REPAIR EXAMPLES</h5>

                            <div className='valvetypesGrid'>
                                <span>Valve Gland Leak</span>

                                <span>Valve Body Leaks</span>

                                <span>Valve Bonnet Leaks</span>

                                <span>Heat Exchanger Leaks</span>

                                <span>Pressure Vessel Repairs</span>

                                <span>Expansion Joint Repairs</span>

                                <span>Flange Connection Leak Repairs</span>

                                <span>Pipeline Leak Repairs</span>

                                <span>Riser Repairs</span>

                                <span>Valve Gland Leaks</span>

                                <span>Line Crimping</span>

                                <span>Composite Repairs</span>

                                <span>Strong Back Systems</span>
                            </div>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>ADVANTAGES</h5>

                            <ul className='mb_40'>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Save millions in operational down time, your leaks are repaired while your facilities stay on-line</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Quality approved products</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'> Minimize production loss</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'> Massive energy saving</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Minimize harmful emissions to the atmosphere</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Minimize noise pollution</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Create safer working conditions</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>  Prevent spillages and pollution</li>
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
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>When Hot Tapping Makes the Difference: Minimizing Disruption and Maximizing Efficiency</h5>


                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>In the world of pipeline management, efficiency and minimal disruption are key. That&apos;s where hot tapping comes in, a specialized technique that allows you to connect to existing pipelines without interrupting the flow. This blog post dives into the benefits of hot tapping and the scenarios where it shines.</p>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'><span className='fontWeight600'>Uninterrupted Operations:</span> Imagine needing to upgrade your pipeline system. Traditionally, this would mean shutting down the entire operation, resulting in lost production, frustrated customers, and significant financial losses. Enter hot tapping. This innovative method lets you seamlessly add new branches or isolate sections for maintenance all while the pipeline remains active. It&apos;s like performing surgery on a running engine – a feat of engineering brilliance.</p>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'><span className='fontWeight600'>Safety and Environmental Benefits:</span> Beyond avoiding costly downtime, hot tapping also prioritizes safety and environmental responsibility. By eliminating the need for depressurization, the risks associated with handling highly pressurized systems are significantly reduced. Additionally, hot tapping minimizes product loss and prevents harmful gas emissions, making it a sustainable choice for your business and the planet.</p>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_34'><span className='fontWeight600'>Cost-Effective Efficiency:</span> Let&apos;s talk numbers. By eliminating the need for lengthy shutdowns and complex rewelding procedures, hot tapping offers tangible cost savings. Less planning, reduced manpower requirements, and faster project completion times all add up to a more efficient and financially advantageous solution.</p>



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


                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>But Is Hot Tapping Always the Answer?</h5>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>While hot tapping boasts impressive advantages, it&apos;s crucial to acknowledge that it&apos;s not a one-size-fits-all solution. This complex procedure requires extensive expertise and specialized equipment. Therefore, it&apos;s essential to carefully evaluate your specific needs and consider alternative methods before making a decision. Hot tapping thrives when:</p>

                            <ul className='mb_40'>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Shutting down the pipeline is impractical or financially detrimental.</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Minimizing downtime and maintaining operations is paramount.</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Safety and environmental considerations are high priorities.</li>
                            </ul>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>Conclusion</h5>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Hot tapping is more than just a fancy technique; it&apos;s a game-changer in the world of pipeline management. By prioritizing efficiency, safety, and sustainability, it offers a clear advantage for maintaining and upgrading your system with minimal disruption. If you&apos;re looking for a way to keep your operations flowing while optimizing your pipeline network, hot tapping might just be the answer you&apos;ve been searching for</p>


                            <button className='mainbtn' onClick={handleDownload} style={{ cursor: 'pointer' }}>Download Pipeline Intervention PDF</button>
                        </div>
                    </div>







                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What it is</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>A highly specialised live-line engineering service that enables new branch connections, bypass installations, valve insertions, and pipeline modifications to be performed safely on pressurised, fully operational pipelines — with zero interruption to flow, production, or plant operations.</p>

                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What we do</h5>


                    <ul>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Conduct detailed engineering analysis of pipeline operating conditions, material specifications, pressure ratings, and fluid characteristics prior to execution</li>

                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Mobilise certified hot tapping equipment and specialist technicians fully trained and competent in live-line intervention procedures</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Perform controlled drilling and tapping operations on pressurised pipelines in strict compliance with industry safety standards</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Insert S-type gate valves, saddle connections, or bypass assemblies while the pipeline remains in full service</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Complete post-work pressure testing, leak verification, and issue full completion and certification documentation</li>

                      </ul>


                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Who it's for</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Oil and gas operators, power generation facilities, water authorities, petrochemical plants, and pipeline operators requiring network modifications, emergency isolation points, or system extensions without the operational and financial impact of a planned shutdown.</p>


                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Why it matters</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Shutting down a pressurised pipeline or process system for modifications carries enormous cost — in lost production, deferred revenue, and complex restart procedures. Hot tapping eliminates that cost entirely. When executed by experienced, properly certified specialists, it is a safe, proven, and code-compliant solution that delivers the required modification while keeping operations fully running and revenue protected.</p>



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
                    <h5 className='fontSize16 fontWeight600 blackText_Clr mb_12'>HEAT EXCHANGER MAINTENANCE</h5>
                    <ul className='mb_40'>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Heat Exchangers are Important Heat transfer Equipment in Power & Process Industry.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Trouble free Performance of the Heat exchanger is critical for Plant Operations and reliability.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>PTD offers complete end to end services including Retubing and repair of Heat exchanger tubes as per customer needs.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Scope of service includes complete disassembly, Inspection, Manual Cleaning, Hydro jetting and hydro testing of heat exchanger.</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Rectification of Leaking tubes and final assembly.</li>

                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Testing and Handover to Customer site.</li>
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
                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_8'>Tube Extraction</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>Old tubes are removed if found any damages along with the tube ends .Any minor tube sheet cracks are then repaired to the ASME code specifications.</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_8'>Safely Tube transport</h5>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_16'>We followed standard procedure and executed tube transport.</p>

                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_8'>Bundle cleaning</h5>
                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Tube bundle cleaning carry sufficient manner and removing</p>

                            <ul className='mb_16'>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Heater shell repairing work will carry as per standard procedure (ASME code)</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Tube inserts in a proper method.</li>
                            </ul>


                            <h5 className='fontSize16 fontWeight600 blackText_Clr mb_8'>New tubes (Manufacture to meet or exceed specifications) are installed</h5>

                            <ul className='mb_16'>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Baffle plates replaced.</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Hydro test of heat exchanger</li>
                            </ul>

                            <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Also, we are supply Heat exchanger according to ASME sex-8 and specialized in fabrication of heater shell.</p>

                        </div>
                    </div>









                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What it is</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>An end-to-end supply, installation, inspection, and maintenance service for industrial heat exchangers — the critical thermal management equipment at the heart of power generation, water treatment, and process industry operations.</p>

                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What we do</h5>


                    <ul>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Supply new heat exchangers manufactured to TEMA, ASME, and client-specific standards across all configurations including shell-and-tube, plate, and air-cooled types</li>

                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Execute scheduled and shutdown maintenance including full disassembly, mechanical cleaning, tube inspection, and integrity assessment</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Carry out re-tubing, re-bundling, and pressure vessel refurbishment to restore original design performance</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Conduct hydrostatic and pneumatic pressure testing with full certification and documentation</li>
                        <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Provide emergency breakdown response, critical spare parts supply, and rapid return-to-service support</li>


                    </ul>


                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Who it's for</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Power generation stations, oil and gas refineries, petrochemical processing plants, seawater desalination facilities, and industrial operations where thermal energy transfer is integral to the production process.</p>


                        <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Why it matters</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Heat exchangers operate under demanding conditions of pressure, temperature, and corrosive media. Fouling, scaling, tube degradation, and seal failure are progressive — and when left unaddressed, lead to efficiency losses, unplanned shutdowns, and significant production impact. A proactive, professionally managed maintenance programme maximises heat transfer efficiency, extends equipment service life, and protects overall plant availability.</p>



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

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>PTD specializes in providing professional RO membrane replacement services. Maintaining the highest standards of quality and performance. With our extensive experience and commitment to excellence, we help our clients achieve optimal operation and longevity of their RO systems.</p>
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What it is</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>A specialist retrofit and performance restoration service designed to upgrade ageing or underperforming Reverse Osmosis water treatment plants to current operational, efficiency, and regulatory standards — without the capital expenditure of full plant replacement.</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What we do</h5>


                            <ul>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Conduct comprehensive technical audits and performance assessments of existing RO plant infrastructure</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Engineer retrofit solutions addressing membrane degradation, hydraulic inefficiency, instrumentation obsolescence, and system losses</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Replace and upgrade critical components including membranes, high-pressure pumps, pressure vessels, energy recovery devices, and SCADA control systems</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Optimise pre-treatment and post-treatment processes to improve overall water quality and recovery rates</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Recommission upgraded systems with full performance verification, testing, and operator handover</li>


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


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Who it's for</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Desalination authorities, industrial water treatment operators, power and water utilities, and petrochemical facilities operating existing RO infrastructure that no longer meets required output quality, efficiency, or reliability standards.</p>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Why it matters</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Ageing RO plants suffer progressive efficiency losses, increasing energy consumption, and declining water quality — all of which directly impact operational costs and regulatory compliance. A professionally executed retrofit restores plant performance, extends operational life by many years, and delivers a measurable return on investment at a fraction of full replacement cost.</p>


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

                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What it is</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>A fully managed Engineering, Procurement, and Construction service for the design and delivery of large-scale Reverse Osmosis desalination and water purification plants with a production capacity of up to 2 million imperial gallons per day.</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What we do</h5>


                            <ul>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Develop detailed process engineering designs, hydraulic modelling, and system architecture for the complete RO plant</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Procure all major plant equipment including high-pressure membranes, multi-stage pumping systems, pre-treatment filtration, chemical dosing, energy recovery units, and automated control panels</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Manage full civil construction, mechanical installation, electrical integration, and instrumentation works</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Commission and performance-test the completed plant against contractual output, recovery rate, and water quality parameters</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Provide comprehensive operator training, as-built documentation, and structured handover to client operations teams</li>
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


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Who it's for</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Power and water authorities, municipal water boards, petrochemical and industrial complexes, and large-scale real estate and infrastructure developers requiring a reliable, high-capacity supply of desalinated or purified water.</p>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Why it matters</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Water security is one of the most critical infrastructure priorities across the GCC and the broader Middle East region. Delivering a large-scale RO plant demands precise engineering, rigorous procurement standards, and disciplined project execution. Our EPC capability ensures clients receive a fully operational, code-compliant plant — delivered on schedule, within budget, and built to perform reliably for decades.</p>



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

                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What it is</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>A comprehensive turnkey Engineering, Procurement, and Construction service for utility-scale and industrial solar photovoltaic power plants up to 5 megawatts in capacity, supported by structured long-term maintenance programmes to protect asset performance and investment value.</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What we do</h5>


                            <ul>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Conduct detailed site surveys, solar irradiance assessments, and technical feasibility studies</li>

                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Deliver complete engineering design encompassing PV array layout, single-line diagrams, structural mounting systems, and grid interconnection</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Procure and supply premium-grade solar panels, string and central inverters, mounting structures, DC and AC cabling, and monitoring systems</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Manage full civil and electrical construction, installation, and commissioning to international standards</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Deliver structured preventive and corrective maintenance programmes, performance monitoring, and energy yield reporting throughout the operational lifecycle</li>


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


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Who it's for</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Industrial facilities, commercial and institutional buildings, government infrastructure projects, independent power producers, and utilities seeking to generate clean on-site power, reduce grid dependency, and achieve long-term energy cost savings.</p>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Why it matters</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Saudi Arabia and the wider GCC region benefit from some of the highest solar irradiance levels in the world, presenting an exceptional opportunity for cost-effective renewable energy generation. A professionally delivered EPC project ensures maximum energy yield, full grid compliance, and a reliable return on investment — with ongoing maintenance safeguarding plant performance across its entire operational life.</p>



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
                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What it is</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>A fully integrated fabrication and installation service delivering precision-engineered UPVC and aluminium door and window systems for industrial, commercial, and residential applications across Saudi Arabia and the GCC.</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What we do</h5>


                            <ul>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Engineer and design custom-specification door and window frames tailored to structural and architectural requirements</li>

                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Fabricate high-grade UPVC and aluminium profiles using advanced machinery within our dedicated workshop facility</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Supply and integrate all associated hardware, glazing systems, weatherproof seals, and finishing components</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Execute on-site installation with full compliance to building standards and client project schedules</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Conduct post-installation quality inspections, functional testing, and commissioning sign-off</li>

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


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Who it's for</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Industrial complexes, commercial developments, residential projects, main contractors, and real estate developers requiring durable, high-performance fenestration solutions in demanding Gulf climate conditions.</p>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Why it matters</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>UPVC and aluminium systems offer exceptional resistance to corrosion, extreme heat, sand, and humidity — delivering superior thermal insulation, reduced maintenance requirements, and a significantly longer service life than conventional alternatives. Choosing the right fabrication and installation partner ensures structural integrity, aesthetic consistency, and long-term performance across every opening in a building envelope.</p>


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

                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What it is</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>A professional managed manpower service providing rigorously screened, technically qualified, and HSE-compliant personnel to the power generation, oil and gas, and water treatment sectors on flexible short-term, long-term, and turnaround contract arrangements.</p>

                    <div className='row mb_24'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>What we do</h5>


                            <ul>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Source, technically evaluate, and deploy qualified professionals across mechanical, electrical, instrumentation, civil, and operations disciplines</li>
                            
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Manage the complete mobilisation process including documentation, medical fitness, visa processing, site induction, and HSE compliance verification</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Supply manpower to support planned maintenance shutdowns, turnarounds, emergency operations, and long-term Operations & Maintenance contracts</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_12'>Provide dedicated contract management, performance monitoring, and rapid personnel replacement to maintain continuous site coverage</li>
                                <li className='fontSize16 fontWeight400 shearwaterBlackText_clr'>Deliver workforce solutions calibrated precisely to client project scope, timeline, and budget requirements</li>

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


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Who it's for</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>Power stations, oil refineries, petrochemical complexes, desalination and water treatment plants, and EPC contractors requiring immediate access to skilled technical personnel without the overhead and lead time of direct recruitment.</p>


                    <h5 className='fontSize18 fontWeight600 blackText_Clr mb_12'>Why it matters</h5>

                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr'>In the energy and utilities sector, operational continuity depends entirely on having the right people in the right roles at the right time. Delays in mobilising qualified technical personnel can halt production, jeopardise project schedules, and create significant safety exposure. Our manpower service gives clients fast, reliable access to a proven talent pool — reducing recruitment risk, controlling costs, and ensuring critical operations are never left undermanned.</p>



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
                                    <img src="/assets/img/contact-us.webp" alt='lead gen' />
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className='leadGenFrame'>
                                    <h2>To Know More Contact Us</h2>

                                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>It is a long established fact that a reader will be distracted by the readable content of a page randomised words which don&apos;t look even slightly when looking at its layout.</p>
                                    <form>

                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">First Name</label> */}
                                                    <input placeholder='First name'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Last Name</label> */}
                                                    <input placeholder='Last name'
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
                                                    <input placeholder='Company Name'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>



                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Email Address</label> */}
                                                    <input placeholder='Company Email Address'
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
                                                    <input placeholder='Primary Phone Number'
                                                        type="text"
                                                        name="name"
                                                        className="mainInput"
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="mb_24">
                                                    {/* <label className="labeltext">Job Title</label> */}
                                                    <input placeholder='Job Title'
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
                                                    <input placeholder='Country'
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
                                            SUBMIT FORM
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