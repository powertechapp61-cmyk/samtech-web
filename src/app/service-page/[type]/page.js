'use client'
import { usePathname, useParams } from 'next/navigation'
import Service from "../../Components/Layout/Sevice";



const ServicePage = () => {
    const pathname = usePathname()
    const params = useParams()
    const pagename = params.type;
    const pageData = {
        ro_membrane: {
            title: "RO Plants Retro Fitting",
            subTitle: "REPLACEMENT SERVICES",
            bannerImg: "/assets/img/roplants_retro_detail.png",
            bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

            content: [
                "PTD specializes in providing professional RO membrane replacement services",
                "Maintaining the highest standards of quality and performance.",
                "With our extensive experience and commitment to excellence, we help our clients achieve optimal operation and longevity of their RO systems."
            ],
            imgs: [
                "/assets/img/roplants_retro_detail.png"
            ],
            clients: []

        },
        online_seal: {
            title: "ONLINE SEAL LEAKING",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/seal_leaking.jpg",
            bannerparagraph: "Online leak sealing today is the leak-sealing solutions of choice as it saves energy, prevents and expensive and unwanted shutdown and can address a wide variety of leaks. With the combination of engineering solutions support from global experts, we have leak sealing compounds that can address a wide variety of steam, chemical, hydrocarbon and gas leaks at temperature up to 700° C. ",
            content: [
                //    "PTG offers on online seal leaking services through out Gulf regions",
                //    "We perform conventional online seal leaking methods - Clamp Design and injection of compounds.",
                "Online leak sealing today is the leak-sealing solutions of choice as it saves energy, prevents and expensive and unwanted shutdown and can address a wide variety of leaks. With the combination of engineering solutions support from global experts, we have leak sealing compounds that can address a wide variety of steam, chemical, hydrocarbon and gas leaks at temperature up to 700° C. We have highly trained, highly skilled technicians who can handle the adverse situations very tactically and bring downs the situation to normal conditions",
                "Power Tech has combined with SYLMASTA to offer one of the kind unique Repair kits which can be used for the sealing solutions",
                "Fixing a burst or leaking pipe has never been easier thanks to the SylWrap range of leak repair products.",
                "Repairs can be carried out to pipes of all materials and diameters in under 30 minutes without the need for any formal training.Each product comes with full instructions explaining how it should be used; simply follow those and your leaking pipe can be fixed in not time at all.",
                "Sylmasta pipe repair products are used in both small domestic plumbing jobs and large scale industrial repairs.Sylmasta count several of the United Kingdom&rsquo;s water companies among their regular users and have also supplied solutions to desalination plants, wastewater treatment works, nuclear power stations, pumping stations, petrochemical plants, quarry wash plants, freight ships and dry risers"],
            imgs: [
                "/assets/img/sealLeaking_detail.png",
                // "/assets/romem2.png"
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
        online_safety_testing: {
            title: "Online Safety Valve Testing (Trevi Type)",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/online_safety_valve_bnr.png",
            bannerparagraph: "Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly.",
            content: [
                "Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly. But can you really be sure of the results if the test is not conducted under the stress of everyday conditions? Unsurpassed for accuracy, reliability and safety, the advanced technology of AccuTEST was developed to test safety valves while in position, under a full load, for consistently superior, reproducible results",
                "Totally automated operation, battery operated motor battery life under normal usage.",
                "Set pressures automatically calculated by measuring lift force, line pressure and acoustic trigger",
                "Universal mounting assembly ensures use on all types of exposed spindle valves."
            ],
            imgs: [
                "/assets/img/onlineSafety_detail.png",
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
        offline_valve_testing: {
            title: "Offline Valve Testing",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/offlineValve_testing_bnr.png",
            bannerparagraph: "Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly.",
            content: [
                "Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly. But can you really be sure of the results if the test is not conducted under the stress of everyday conditions? Unsurpassed for accuracy, reliability and safety, the advanced technology of AccuTEST was developed to test safety valves while in position, under a full load, for consistently superior, reproducible results",
                "Totally automated operation, battery operated motor battery life under normal usage.",
                "Set pressures automatically calculated by measuring lift force, line pressure and acoustic trigger",
                "Universal mounting assembly ensures use on all types of exposed spindle valves."
            ],
            imgs: [
                "/assets/img/offline_valve_testing_detail.png",
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
        alltype_valve_services: {
            title: "All Types of Valve Servicing",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/allType_valveServicing_bnr.png",
            bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            content: [
                "PTG specializes in valve services, providing solutions through out Gulf Regions.",
                "Advanced testing methods to repair, and maintain valves, ensuring optimal performances.",
                "Trust PTG for delivering excellence and reliability every step of the way.",
            ],
            imgs: [
                "/assets/img/allType_valveServicing_detail.png",
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
        hot_tapping: {
            title: "Hot Tapping & Insertion of S-Type (Gate Valve Online)",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/hotTapping_bnr.png",
            bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            content: [
                'When Hot Tapping Makes the Difference: Minimizing Disruption and Maximizing Efficiency',
                'In the world of pipeline management, efficiency and minimal disruption are key.That&rsquo;s where hot tapping comes in, a specialized technique that allows you to connect to existing pipelines without interrupting the flow.This blog post dives into the benefits of hot tapping and the scenarios where it shines.',
                'Uninterrupted Operations: Imagine needing to upgrade your pipeline system.Traditionally, this would mean shutting down the entire operation, resulting in lost production, frustrated customers, and significant financial losses.Enter hot tapping.This innovative method lets you seamlessly add new branches or isolate sections for maintenance all while the pipeline remains active.It &rsquo; s like performing surgery on a running engine – a feat of engineering brilliance.',
                'Safety and Environmental Benefits: Beyond avoiding costly downtime, hot tapping also prioritizes safety and environmental responsibility.By eliminating the need for depressurization, the risks associated with handling highly pressurized systems are significantly reduced.Additionally, hot tapping minimizes product loss and prevents harmful gas emissions, making it a sustainable choice for your business and the planet.',
                'Cost - Effective Efficiency: Let&rsquo;s talk numbers.By eliminating the need for lengthy shutdowns and complex rewelding procedures, hot tapping offers tangible cost savings.Less planning, reduced manpower requirements, and faster project completion times all add up to a more efficient and financially advantageous solution.',
            ],
            imgs: [
                "/assets/img/hot_tapping_detail.png",
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

        heat_exchanger: {
            title: "Heat Exchanger, Maintenance & Supply",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/heatExchanger_bnr.png",
            bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            content: [
                'A heat exchanger is an apparatus where the exchange of heat energy occurs between two different fluids at different temperatures.',
                'The most used is what is known as “tubular beam and cloak exchanger “, as its large surface structure allows to exchange large quantities of heat.',
                'This type of exchanger has a cylindrical shape, formed by a container called the mantle, where a bundle of tubes passes through each of them, both of which are crossed by the fluids.',
                'Power Tech has the executed various projects of Design and commissioning of Heat exchangers across various industries and also carried out maintenance of the same,',
                'Tube Bundle extraction.',
                'Re - Tubing or cleaning of the existing bundles.',
                'Insertion of the Bundles.',
                'Hydro Test and handover.',

            ],
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
        ro_plant_epc_contracts: {
            title: "RO Plant EPC Contracts Upto 2MIGPDA",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/heatExchanger_bnr.png",
            bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            content: [
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            ],
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

        solar_plant_epc: {
            title: "Solar Plant EPC upto  5MW & Maintenance",
            subTitle: "SERVICES",
            bannerImg: "/assets/img/heatExchanger_bnr.png",
            bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            content: [
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            ],
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
            bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            content: [
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            ],
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
            bannerparagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            content: [
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            ],
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


            <section className='leadsGeneration_sec'>
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
                                <h2>Leads Generation</h2>

                                    <p className='fontSize16 fontWeight400 shearwaterBlackText_clr mb_24'>It is a long established fact that a reader will be distracted by the readable content of a page randomised words which don{`'`}t look even slightly when looking at its layout.</p>
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
                                                {/* <label className="labeltext">Company Name</label> */}
                                                <input placeholder='Phone Number'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                {/* <label className="labeltext">Email Address</label> */}
                                                <input placeholder='Email Address'
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
                                                {/* <label className="labeltext">Job Title</label> */}
                                                <input placeholder='Website'
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
                                                {/* <label className="labeltext">Job Title</label> */}

                                                <select className="mainInput">
                                                    <option>Select Country</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                {/* <label className="labeltext">Country</label> */}
                                                <input placeholder='City'
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
                                                <input placeholder='Zip'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className="mb_24">
                                                {/* <label className="labeltext">Job Title</label> */}
                                                <input placeholder='State'
                                                    type="text"
                                                    name="name"
                                                    className="mainInput"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <textarea rows={4} className='mb_24' placeholder='How may we help you?'>

                                    </textarea>



                                    <button
                                        type="submit"
                                        className="mainbtn">
                                        Submit
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