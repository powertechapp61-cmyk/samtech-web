// Central translation dictionary for the whole site.
// Usage: const { t } = useLanguage();  then  t("header.nav.home")
//
// Structure: translations[languageCode][section][key]
// Add new keys here as you translate more of the site - the same key
// must exist under both "en" and "ar" (English is used as a fallback
// if an Arabic key is ever missing).

export const translations = {
  en: {
    header: {
      langLabel: "Language",
      searchPlaceholder: "Search Here...",
      phone: {
        saudi: "Saudi",
        bahrain: "Bahrain",
        uae: "UAE",
        india: "India",
      },
      logoTagline: "( A Unit of Power Tech Group of Companies )",
      nav: {
        home: "Home",
        company: "Company",
        aboutUs: "About Us",
        groupCompanies: "Group companies",
        services: "Services",
        onlineSafetyValveTesting: "Online Safety Valve Testing (Trevi Type)",
        offlineValveTesting: "Offline Valve Testing",
        allTypesValveServicing: "All Types of Valve Servicing",
        technicalManpowerSupply:
          "Technical Manpower supply for Power plant refineries and Water plant",
        onlineLeakSealing: "Online Leak Sealing – SYLMASATA & Conventional",
        hotTapping: "Hot Tapping & Insertion of S-Type ( Gate Valve Online)",
        heatExchanger: "Heat Exchanger, Maintenance & Supply",
        roPlantEpc: "RO Plant EPC Contracts Upto 2MIGPDA",
        solarPlantEpc: "Solar Plant EPC upto 5MW & Maintenance",
        roPlantsRetroFitting: "RO Plants Retro Fitting",
        upvcDoorsWindows:
          "UPVC & Aluminium Doors & Windows Fabrication & Installation",
        appreciations: "Appreciations",
        brochures: "Brochures",
        gallery: "Gallery",
        photoGallery: "Photo Gallery",
        videoGallery: "Video Gallery",
        ourBranches: "Our Branches",
        trainings: "Trainings",
        careers: "Careers",
        contactUs: "Contact Us",
      },
    },
    footer: {
      aboutTitle: "About Us",
      aboutText:
        "Sam Technical Service Contracting Est an ISO 9001 and ISO 45001 company is Unique in Indian sub-continent and GCC countries, as ONE-STOP-SHOP for total power plant services in the areas of Repairs & Retrofits, EPC contracts.",
      quickLinks: "Quick Links",
      quickCode: "Quick Code",
      location: "Location",
      home: "Home",
      aboutUs: "About Us",
      groupCompanies: "Group Companies",
      appreciations: "Appreciations",
      photoGallery: "Photo Gallery",
      ourBranches: "Our Branches",
      trainings: "Trainings",
      careers: "Careers",
      contactUs: "Contact Us",
      copyrightText: "Copyright ©",
      companyName: "Sam Technical Service Contracting Est",
      allRightsReserved: "All rights reserved.",
      whatsapp: "WhatsApp",
      saudiPhoneLabel: "Saudi",
    },
    home: {
      knowMore: "To know more Click Here",
      underConstruction: "Under Construction",
      banners: {
        opsMaintenance: "Operations and Maintenance Service Provider",
        electroMechanical: "Electro Mechanical and Instrumentation Project Experts",
        hotTapping: "Hot Tapping",
        gasSteamTurbine: "Gas Turbine and Steam Turbine Works",
        valveServicing: "Valve Servicing , Testing and Calibration Works",
        weldingFabrication: "Welding and Fabrication Works",
      },
      serveGloballyPre: "WE SERVE",
      serveGloballyHighlight: "GLOBALLY",
      globalPresenceTitle: "Our Global Presence",
      globalPresenceText:
        "Power Tech Group Companies an ISO 9001 and ISO 45001 company is Unique in Indian sub-continent and GCC countries, as ONE-STOP-SHOP for total power plant services in the areas of Repairs & Retrofits, EPC contracts, O&M contracts, Re-Engineering and Relocation of Power Plants, Spares & Services for a decade. We offer Qualitative and Economical Alternative to various OEMS around the World in the areas of expertise. We offer quality services and expertise in Repairs & Retrofits, Spares & Services, EPC contracts, O&M Contracts, Re-Engineering and Relocation of Power Plants, for a decade.",
      yearsLabel: "Years",
      countriesLabel: "Countries",
      customersLabel: "Customers",
      valveServicesSpan: "Valve Services",
      valveServicesLine1: "- Human Resource",
      valveServicesLine2: "& Manpower Supply",
      trustedByPre: "We Are",
      trustedByHighlight: "Trusted",
      trustedByPost: "By",
      clientSay: {
        item1:
          "Power Tech Group is now ISO 14001 Certified , along with the previously held ISO 9001 and ISO 45001 Certification, Recently we completed the Integrated Management System Audit for all 3 certifications and got certified",
        item2:
          "Power Tech Group is happy to share that our company has been awarded a Silver EcoVadis Medal. This result places our company among the top 25 percent of companies assessed by EcoVadis.",
      },
      tabs: {
        onlineSafety: {
          title: "Online Safety Valve Testing (Trevi Type)",
          tagline: "THE ONLY THING MORE IMPORTANT THAN A SAFETY VALVE IS HOW YOU TEST IT",
          heading:
            "AccuTEST Safety Valve Test System & L – PLAN LEGA TEST System- Online Safety Valve Testing Test Online",
          desc:
            "Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly. But can you really be sure of the results if the test is not conducted under the stress of everyday conditions?",
        },
        offlineTesting: {
          title: "Offline Valve Testing",
          tagline: "THE ONLY THING MORE IMPORTANT THAN A SAFETY VALVE IS HOW YOU TEST IT",
          heading: "TESTING CURVE, HARDWARE- Offline Valve Testing",
          desc:
            "Safety valves are essential to the protection of lives and property, so regular testing is crucial to ensure that valves are functioning properly. But can you really be sure of the results if the test is not conducted under the stress of everyday conditions?",
        },
        allTypesValve: {
          title: "All Types of Valve Servicing",
          descPre:
            "Our Group Company Valve Tech testing and services and Power Tech testing and services specialize in handling services for different type of Valves, Actuators, Pumps, Compressors etc, for more information pls visit",
        },
        technicalManpower: {
          title: "Technical Manpower supply for Power plant refineries and Water plant",
        },
        onlineSealLeaking: {
          title: "ONLINE SEAL LEAKING",
          desc:
            "Online leak sealing today is the leak-sealing solutions of choice as it saves energy, prevents and expensive and unwanted shutdown and can address a wide variety of leaks. With the combination of engineering solutions support from global experts, we have leak sealing compounds that can address a wide variety of steam, chemical, hydrocarbon and gas leaks at temperature up to 700° C. We have highly trained, highly skilled technicians who can handle the adverse situations very tactically and bring downs the situation to normal conditions",
        },
        hotTapping: {
          title: "Hot Tapping & Insertion of S-Type (Gate Valve Online)",
          desc:
            "Hot tapping is more than just a fancy technique; it's a game-changer in the world of pipeline management. By prioritizing efficiency, safety, and sustainability, it offers a clear advantage for maintaining and upgrading your system with minimal disruption. If you're looking for a way to keep your operations flowing while optimizing your pipeline network, hot tapping might just be the answer you've been searching for",
        },
        heatExchanger: {
          title: "Heat Exchanger, Maintenance & Supply",
          desc1:
            "A heat exchanger is an apparatus where the exchange of heat energy occurs between two different fluids at different temperatures.",
          desc2:
            "The most used is what is known as “tubular beam and cloak exchanger“, as its large surface structure allows to exchange large quantities of heat.",
        },
        roPlantEpc: { title: "RO Plant EPC Contracts Upto 2MIGPDA" },
        solarPlantEpc: { title: "Solar Plant EPC upto 5MW & Maintenance" },
        roPlantsRetro: {
          title: "RO Plants Retro Fitting",
          desc:
            "We upgrade and modernise existing Reverse Osmosis water treatment plants by replacing outdated components with newer, more efficient parts — extending plant life and improving water output quality without a full replacement.",
        },
        upvcDoors: {
          title: "UPVC & Aluminium Doors & Windows Fabrication & Installation",
          desc:
            "We design, fabricate, and install high-quality UPVC and aluminium doors and windows for industrial, commercial, and residential buildings, ensuring durability, weather resistance, and a professional finish.",
        },
      },
      trustedBySectionTitlePre: "We Are",
    },
    common: {
      home: "Home",
      contactUsBtn: "Contact Us",
    },
    company: {
      breadcrumbCompany: "Company",
      breadcrumbAboutUs: "About Us",
      ourVision: "Our Vision",
      visionText:
        "To be the most trusted and technically capable one-stop service partner for power, water, and industrial plant operations across Saudi Arabia and the wider GCC — delivering safe, reliable, and cost-effective solutions that keep our clients' assets performing at their peak.",
      aboutTag: "ABOUT US",
      opMaintHeading: "OPERATION & MAINTENANCE",
      serviceProviderHeading: "SERVICE PROVIDER",
      powerPlantSpecialist: "POWER PLANT SPECIALIST",
      stats: {
        years: "Years & Counting",
        satisfiedCustomers: "Satisfied Customers",
        employees: "Employees",
        isoCertified: "45001, 9001 & 14001 Certified",
        gccIndia: "& India",
      },
      whoWeAreTitlePre: "Who",
      whoWeAreTitlePost: "We Are",
      whoWeAreP1:
        "SAM Technical Service Contracting Est (STSC) is a Saudi Arabia-based technical services and contracting company headquartered in Rabigh, Kingdom of Saudi Arabia.",
      whoWeAreP1Bold: "SAM Technical Service Contracting Est (STSC)",
      whoWeAreP1Rest:
        "is a Saudi Arabia-based technical services and contracting company headquartered in Rabigh, Kingdom of Saudi Arabia.",
      whoWeAreP2:
        "We are a proud unit of the Power Tech Group of Companies — a decade-strong, multi-national group with an established presence across the GCC and the Indian subcontinent, holding ISO 9001 (Quality Management), ISO 45001 (Occupational Health & Safety), and ISO 14001 (Environmental Management) certifications across its integrated management system.",
      whoWeAreP2Bold: "Power Tech Group of Companies",
      whoWeAreP3:
        "As a registered and VAT-certified entity in the Kingdom of Saudi Arabia, STSC operates as the group's dedicated technical arm in the Saudi market — delivering specialised engineering services, operations and maintenance solutions, and technical manpower to power generation, oil and gas, petrochemical, and water treatment sectors.",
      featureHeadquartered: "Headquartered",
      featureHeadquarteredValue: "Rabigh, Saudi Arabia",
      featurePowerTechGroup: "Power Tech Group",
      featurePowerTechGroupValue: "Multinational Company",
      featureIsoCertified: "ISO Certified",
      featureIsoCertifiedValue: "9001 | 45001 | 14001",
      featureVatRegistered: "VAT Registered",
      featureVatRegisteredValue: "Trusted KSA Partner",
      servicesEngineering: "Engineering Services",
      servicesOpMaint: "Operation & Maintenance",
      servicesManpower: "Technical Manpower",
      servingIndustries: "Serving Key Industries",
      industryPower: "Power",
      industryOilGas: "Oil & Gas",
      industryPetrochemical: "Petrochemical",
      industryWater: "Water Treatment",
      missionLabelPre: "OUR",
      missionLabelHighlight: "MISSION",
      missionP1:
        "To provide world-class technical services, innovative engineering solutions, and skilled manpower to the energy and industrial sectors — built on a foundation of safety, quality, integrity, and continuous improvement.",
      missionP2:
        "We are committed to protecting our clients' operational continuity while delivering measurable value on every engagement.",
      whatWeDoTag: "WHAT WE DO",
      whatWeDoHeadingLine1: "One Partner.",
      whatWeDoHeadingLine2: "Complete Industrial Solutions.",
      whatWeDoP1:
        "STSC is a fully integrated technical services contractor serving the power generation, oil & gas, petrochemical and water treatment industries across Saudi Arabia.",
      whatWeDoP2:
        "We operate as a true one-stop-shop, eliminating the need for multiple contractors while delivering reliable engineering, maintenance and industrial support services under one roof.",
      coreServiceCapabilities: "OUR CORE SERVICE CAPABILITIES",
      coreServiceText:
        "Every service we deliver is executed by qualified, experienced personnel under a structured HSE framework — with full documentation, certification, and client sign-off at every stage.",
      services: {
        valveTesting:
          "Online and offline safety valve testing, calibration, and full valve servicing for all valve and actuator types",
        leakSealing: "Online leak sealing for pressurised systems at temperatures up to 700°C",
        hotTapping: "Hot tapping and live-line gate valve insertion on operational pipelines",
        heatExchanger: "Heat exchanger maintenance, re-tubing, and supply",
        manpower:
          "Operations and maintenance manpower supply for power plants, refineries, and water treatment facilities",
        roEpc: "RO plant EPC contracts up to 2 million imperial gallons per day",
        roRetro: "RO plant retrofitting and performance restoration",
        solarEpc: "Solar plant EPC up to 5MW capacity and ongoing maintenance",
        upvc: "UPVC and aluminium doors and windows fabrication and installation",
      },
      credentialsTag: "OUR CREDENTIALS & CLIENT TRUST",
      credentialsHeadingLine1: "Proven Credentials.",
      credentialsHeadingLine2: "Trusted Across Saudi Arabia.",
      credentialsText:
        "STSC operates under the full quality and compliance umbrella of the Power Tech Group, which holds an internationally recognised EcoVadis Silver Sustainability Medal — placing the group among the top 25% of companies assessed globally for environmental, social, and governance performance.",
      clientTitle: "Our work in Saudi Arabia has been formally recognised by major industry clients including:",
      clients: {
        nomacTitle: "NOMAC (ACWA Power)",
        nomacDesc: "Appreciation letter for long-term manpower and valve services at Red Sea power stations",
        engieTitle: "ENGIE Fadhili O&M Company",
        engieDesc: "Commissioned for online safety valve testing at Fadhili Gas Plant",
        rpcTitle: "Petro Rabigh (RPC)",
        rpcDesc: "Successfully completed major valve overhauling services",
        keyClientsTitle: "Saudi Aramco, YASREF, National Water Company, Saudi Electricity Company",
        keyClientsDesc: "among our key clients in the Kingdom",
      },
      complianceText:
        "We hold valid Company Registration Certificates, VAT certification, and GE Field core Comply works Contractor Verification with a score of 100 — reflecting our full compliance with international contractor qualification standards.",
      presenceHeadingPre: "OUR",
      presenceHeadingHighlight: "PRESENCE",
      presenceText:
        "Based in Rabigh, Saudi Arabia, STSC serves clients across the Kingdom from the Red Sea coast to the industrial heartland of the Eastern Province. As part of the Power Tech Group, we draw on the technical resources, workforce pipeline, and operational knowledge of group entities operating across Saudi Arabia, UAE, Qatar, India, and Bahrain — giving our Saudi clients access to a far broader pool of expertise and capability than a standalone contractor could provide.",
      whyChooseTitlePre: "Why Choose",
      whyChooseTitlePost: "STSC",
      whyChoosePoints: [
        "Over a decade of group-level experience in power plant and industrial services across the GCC",
        "ISO 9001, ISO 45001, and ISO 14001 certified — with a fully integrated management system",
        "Proven track record with major Saudi clients including NOMAC, ENGIE, Petro Rabigh, Saudi Aramco, and YASREF",
        "Multi-discipline capability eliminating the need for multiple contractors",
        "Rapid mobilisation of skilled, vetted, HSE-compliant technical personnel",
        "Full traceability — every job documented, tested, certified, and signed off",
        "Backed by the resources, network, and expertise of the Power Tech Group of Companies",
      ],
    },
    careers: {
      title: "Careers",
      intro:
        "At SAM Technical Service Contracting Est, we are committed to attracting, developing, and retaining talented professionals. We offer challenging opportunities, continuous learning, and a culture of safety, integrity, and professional growth for individuals seeking a rewarding career in the industrial services sector.",
    },
    brochures: {
      title: "Brochures",
      intro:
        "Discover who we are, what we do, and how we deliver value to our clients across Saudi Arabia. Our company brochure provides an overview of our services, capabilities, industry experience, and commitment to quality, safety, and operational excellence.",
      downloadTitle: "Download Brochures",
      mechanicalMaintenance: "Mechanical Maintenance",
      electricalMaintenance: "Electrical Maintenance",
      fabrication: "Fabrication",
      valveTesting: "Valve Testing",
      manpower: "Manpower",
      powerplantOM: "Powerplant O & M",
      pipelineIntervention: "Pipeline Intervention",
    },
    ourBranches: {
      pageTitle: "Our Branches",
      intro:
        "Our people and facilities are our foundation. SAM Technical Service Contracting Est maintains its primary operations in Rabigh, Saudi Arabia, with supporting infrastructure in India and the UAE — giving our clients the confidence that the right resources, tools, and expertise are always within reach, wherever the job takes us.",
      tabs: {
        bahrain: "Bahrain - Building Picture and Workshop",
        saudi: "Saudi - Office & Rabigh Picture",
        india: "India - CPDTI & Dindigul Workshop Picture",
        uae: "UAE Workshop & Ajman Photos",
      },
      captions: {
        bahrainBuildingTwo: "Power Tech Group Building Bahrain (2)",
        bahrainBuildingOne: "Power Tech Group Building Bahrain",
        bahrainConferenceRoom: "PTD Conference room",
        bahrainEmployeesAccommodation: "PTD Employees accomodation",
        bahrainHseAudit: "PTD Nomac HSE Audit",
        bahrainUpvcFactoryInside: "PTD UPVC Factory Inside",
        bahrainUpvcFactory: "PTD UPVC Factory",
        bahrainValveWorkshop: "Valve Tech workshop in Bahrain",
        saudiOffice: "Saudi Office",
        cpdtiInstitute: "CPDTI Institute, Chennai, India",
        dindigulOffice: "Dindigul office",
        dindigulTrainingCenter: "Dindigul Training center",
        ajmanWorkshop: "Ajman Workshop",
      },
    },
    groupCompanies: {
      breadcrumbAboutUs: "About Us",
      pageTitle: "Group companies",
      intro:
        "Our strength lies not just in what we do — but in who stands behind us. As a unit of the Power Tech Group of Companies, SAM Technical Service Contracting Est is supported by a network of specialised group entities operating across five countries. Together, we bring our Saudi clients access to a full ecosystem of engineering, technical, training, and manpower capabilities — all under one trusted group.",
      companies: {
        ptd: "Operation & Maintenance of Power & Water, oil & Gas Plants & EPC Contractors & Human Resource Providers",
        stsc:
          "Operation & Maintenance of Power & Water, oil & Gas Plants & EPC Contractors & Human Resource Providers, Trevi testing & all types of valves & actuators servicing, online leak sealing, Heat Exchanger Maintenance & Supply, Hot Tapping",
        cpdti:
          "O&M Training for fresh graduates and diploma holders, 210/600W Thermal Simulator Training, EHS training & 100% in house placements",
        pemi:
          "Solar EPC & Maintenance, RO Plants, Import & Export of Scrap / Aluminium / UPVC Profiles, and Dismantling of Power & Industrial Plants.",
        ibnBadooda: "UPVC and Aluminium Doors and Windows Fabrication",
        ptIntl: "A Premier Government approved placement agency L NO : B-1192/CHEN/PER/100/5/9405/2018",
        vtts:
          "Online/Offline Safety valve Testing & Calibration & servicing of all types of valves & actuators & Hot Tapping, Heat Exchanger Maintenance & Supply",
        ptts:
          "Online/Offline Safety valve Testing & Calibration, servicing of all types of valves & actuators, Hot Tapping, Heat Exchanger Maintenance & Supply",
        samsBuilding:
          "Turn Key Construction of Buildings, Interior works like UPVC, Aluminium Doors & Windows, MEP Works & STP",
        qPowerTech:
          "Operation & Maintenance of Power & Water, oil & Gas Plants & EPC Contractors & Human Resource Providers, Online testing & calibration of valves & actuators, Valve Servicing, Hot Tapping, Heat Exchanger Maintenance & Supply",
        knowledgeCity:
          "Social arm of Power Tech Group of Companies for EDUCATIONAL EXCELLENCE & EMPOWERMENT. A Skill Development & Placement Centre",
      },
    },
    contactUs: {
      title: "Contact us",
      intro:
        "We are always ready to hear from you. Whether you have an enquiry about our services, a project requirement to discuss, or simply want to learn more about how SAM Technical Service Contracting Est can support your operations in Saudi Arabia, our team is on hand to respond promptly and professionally.",
      helpHeadingPre: "How can we",
      helpHeadingHighlight: "help you?",
      helpText:
        "Let us know how we can help you with your existing or future projects, and one of our sales or support representatives will contact you shortly.",
      saudiOfficeTitle: "Saudi Arabia Office",
      saudiOfficeSubtitle: "Sam Technical Service Contracting",
      chennaiOfficeTitle: "Chennai Office",
      chennaiOfficeSubtitle: "Power Tech Testing And Services",
    },
    contactForm: {
      heading: "Reach Us Quickly",
      intro:
        "Please let us know if you have a question, want to leave a comment, or would like further information about our services.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      companyName: "Company Name",
      websiteUrl: "Website URL",
      howDidYouFindUsDefault: "- How did you find us? -",
      google: "Google",
      socialMedia: "Social Media",
      referral: "Referral",
      advertisement: "Advertisement",
      other: "Other",
      subject: "Subject",
      messagePlaceholder: "How may we help you?",
      submit: "Submit",
      sending: "Sending...",
      successMessage: "Your message has been sent! We will get back to you shortly.",
      errorMessageDefault: "Something went wrong. Please try again.",
      networkError: "Network error. Please try again.",
    },
    trainings: {
      pageTitle: "Trainings",
      intro:
        "Skilled people deliver great results. Our training programmes cover power plant operations, technical disciplines, HSE compliance, and equipment-specific competencies — ensuring every member of our team is qualified, certified, and ready to deliver on site.",
      captions: {
        aiTraining: "AI Training by IBM to CPDTI students 2025 Batch",
        bangaloreAirport: "BANGALORE INTERNATIONAL AIRPORT TRAINING",
        hseCourses: "HSE Courses",
        governerRecognition: "Recognised by Governer of India- 2017",
        sudanKosti: "SUDAN KOSTI POWER PLANT TRAINING",
      },
    },
    appreciations: {
      pageTitle: "Appreciations",
      intro:
        "We are grateful to our clients for giving us the opportunity to work for them; it is a tremendous source of encouragement for our team when our work is recognized. Numerous business leaders from Saudi Arabia and overseas have expressed appreciation for our team thus far.",
      tabs: {
        crCopies: "CR Copies data",
        isoCertificate: "ISO Certificate",
        appreciationLetter: "Appreciation letter data",
        reference: "Reference and PO's",
      },
      captions: {
        crStsc: "Company Registration Certificate – Sam Technical Service Contracting Est",
        crValveTech: "Company Registration Certificate – Valve Tech Testing",
        crSamTech: "Company Registration Certificate – Sam Tech",
        vatCertificate: "VAT Certificate",
        isoQuality: "ISO - Quality Assured",
        isoOccupational: "ISO- Occupational Safety",
        isoGreen: "ISO - Green Business",
        mitsubishiLetter: "Business Appreciation Letter- Mitsubishi , Japan",
        ewaHawarLetter: "Electricity Water Authority - Hawar Power And Water Station - Appreciation Letter - PTD",
        nomacLetter: "NOMAC Appreciation Letter- Sam Technical Service Contracting Est",
        geFieldcoreCard: "GE – Fieldcore – Complyworks Contractor Verification Card with Score of 100",
        gpicThanks: "Thanks and Appreciation - MTM-L-148- GPIC",
        customerRatings: "Customer Ratings",
        ecovadis: "ECOVADIS SUSTAINABILITY RATING - SILVER MEDAL FOR POWER TECH GROUP - TOP 25% of the companies assessed by Ecovadis",
        outstandingWorkerOne: "Certificate For Outstanding Worker Accommodation Management & Maintenance in 2024 1",
        outstandingWorkerTwo: "Certificate For Outstanding Worker Accommodation Management & Maintenance in 2024",
        engieFadhili: "ENGIE FADHILI O&M COMPANY ONLINE SAFETY VALVE TESTING",
        nomacRedSea: "NOMAC RED SEA LONG TERM MANPOWER",
      },
    },
    servicePage: {
      common: {
        whatItIs: "What it is",
        whatWeDo: "What we do",
        whosItFor: "Who it's for",
        whyItMatters: "Why it matters",
        testingProcedure: "Testing Procedure",
        valveTypes: "Valve Types",
        certification: "Certification",
        calibrationCertificate: "Calibration Certificate",
        referenceList: "Reference List",
        keyClients: "Key Clients",
        downloadPipelinePdf: "Download Pipeline Intervention PDF",
        toKnowMoreHeading: "To Know More Contact Us",
        toKnowMoreDesc:
          "It is a long established fact that a reader will be distracted by the readable content of a page randomised words which don't look even slightly when looking at its layout.",
        formFirstName: "First name",
        formLastName: "Last name",
        formCompanyName: "Company Name",
        formCompanyEmail: "Company Email Address",
        formPrimaryPhone: "Primary Phone Number",
        formJobTitle: "Job Title",
        formCountry: "Country",
        submitForm: "SUBMIT FORM",
        sharedValveTypesGrid: [
          "Gate Valves", "Check Valves (NRV)", "Sluice Valves,", "Control Valves service & Calibration",
          "Plug Valves,", "Wafer type butterfly Valves", "Non-slam check Valves",
          "Knife Edge Gate Valves (EPDM Rubber Seat Rings)", "Globe Valves", "Ball Valves",
          "Hydrant Valves", "Safety Valves", "Wafer check Valves",
        ],
        valveServicesText:
          "We are doing servicing of all types of Industrial Valves. Being the company with well-equipped set up and outstanding team of expert work force, the unit provides both onsite and offsite servicing activities whether the requirement is for one valve or for a complete plant. It has a wealth of multi-skilled engineers who provide complete valve management services for valves of Any Size / Age / Type / Make / Rating / MOC / Temp",
        certificationText:
          "Our machine is already Tested in USA and certified with TUV SUD, also we are ISO 9001 : 2008 Certified and OSHAS 18001:2007 certified company",
      },
      onlineSafetyTesting: {
        procedureList: [
          "Online testing of steam relief safety valves is an accepted method of Relief Valve testing for all type of safety relief valves.",
          "A load cell is mounted with electronic DC moter puller on the valve's stem top.",
          "This pulls the stem thereby trying to lift the disc.",
          "The net result is that the valve pops at a pressure set pressure less electronic pressure calculated on the basis of disc area.",
          "We do not have to actually raise system pressure to the set point of the Relief Valve.",
          "But , Electronic Test puller can be apply more than 100 kg/cm2 pressure on the valve disc depending on disc area.",
          "Still, since the system pressure remains very less than set pressure when the valave pops, it is safer. This method is normally used for stem safety relief valves.",
        ],
        valveTypesText: "All Type of safety valves, Safety Relief Valves, Pressure Relief Valves can be test.",
        certificationText:
          "Our machine is already Tested in USA and certified with TUV SUD, also we are ISO 9001 : 2008 Certified and OSHAS 18001:2007 certified company",
        calibrationText: "Our machine is already Tested on Honeywell in USA and certified with TUV SUD.",
        referenceListText: "TANGEDCO, TNPL, ALSTOM, LANCO, GMR, WARTSILA, STERLITE, ADHUNIK, CEGAS-EGYPT,TNPL",
      },
      offlineValveTesting: {
        procedureText:
          "Power Tech is a complete valve repair facility.  We have the capability of repairing any type of valve from safety valves to control valves to gate valves to large butterfly valves.  We have factory trained technicians and work very closely with many valve and actuator manufacturers.",
      },
      allTypesValve: {
        workshopFacility: "Workshop Facility",
        workshopText:
          "Power Tech is a complete valve repair facility. We have the capability of repairing any type of valve from safety valves to control valves to gate valves to large butterfly valves. We have factory trained technicians and work very closely with many valve and actuator manufacturers.",
        portableMachinesHeading: "Portable Machines for Valve Services",
        typeOfValveServicesHeading: "Type of Valve Services",
        keyClientsGrid: [
          "ENERFLEX", "Gulf Petrochemical Industries.co(GPIC)", "Aldur Power and Maintenance Company W.L.L",
          "Ahmadi Industries B.S.C", "eNGie STOMO", "Pepsico",
        ],
        whatItIsText:
          "A comprehensive, multi-discipline valve maintenance, repair, calibration, and testing service covering all industrial valve and actuator types — delivered through our fully equipped workshop facility and through in-situ on-site intervention teams operating across Saudi Arabia and the GCC.",
        whatWeDoList: [
          "Carry out detailed inspection, disassembly, failure diagnosis, and condition reporting for all valve types including safety relief valves, gate, globe, ball, butterfly, check, and control valves",
          "Perform precision repair and component replacement of seats, stems, packing, body seals, trim, and internal assemblies using OEM-specification or equivalent materials",
          "Execute online safety valve testing using AccuTEST and Trevi-type systems — verifying set-point accuracy on live, pressurised systems without process interruption",
          "Conduct offline bench testing, calibration, and certification to applicable standards including API, ASME, and client specifications",
          "Service and overhaul electric, pneumatic, and hydraulic actuators across all major OEM platforms",
          "Deploy in-situ valve servicing teams for live-system intervention, minimising plant downtime and eliminating the need for equipment removal",
        ],
        whosItForText:
          "Power generation stations, oil and gas refineries, petrochemical processing plants, seawater desalination facilities, water authorities, and any industrial operation where valves and actuators form critical elements of process control, safety, and isolation systems.",
        whyItMattersText:
          "Industrial valves are among the most safety-critical components in any plant — directly responsible for process containment, pressure protection, and emergency isolation. A valve that fails to open, close, or lift at the correct set point can trigger a catastrophic safety event, an environmental incident, or a costly unplanned shutdown. Regular, professionally executed servicing and calibration ensures every valve in a facility performs precisely as designed — protecting personnel, plant integrity, regulatory compliance, and operational continuity.",
      },
      onlineSealLeaking: {
        heading1: "POWER TECH – INNOVATIVE AND INVOLVED",
        intro1:
          "Power tech specializes in minimizing asset downtime by providing innovative on-line leak sealing services. We currently supply our services to the power, oil & gas industries. Our extensive engineering support, widespread international leak sealing experience, 100% injury free service record satisfy the specific needs of the individual customer.",
        partnerPre:
          "We are pleased to say that we have partnered up with Sylmasta UK, a world-leader in providing online leak sealing solutions to provide Polymer-based Innovative Online Leak Sealing Services to India. We are the sole distributor of",
        partnerPost:
          "Leak sealing products and, therefore, this makes Power tech the leak sealing company of choice.  This Polymer based \"On-line sealing\" is an innovation of tremendous benefit to industry. A variety of leaks on various systems can be sealed on-site in a safe, efficient, non-destructive and cost-efficient manner without isolation and without loss in production thus minimizing noise and emission levels, erosion damage and improves plant safety whilst maintaining equipment integrity.",
        repairExamplesHeading: "REPAIR EXAMPLES",
        repairExamplesGrid: [
          "Valve Gland Leak", "Valve Body Leaks", "Valve Bonnet Leaks", "Heat Exchanger Leaks",
          "Pressure Vessel Repairs", "Expansion Joint Repairs", "Flange Connection Leak Repairs",
          "Pipeline Leak Repairs", "Riser Repairs", "Valve Gland Leaks", "Line Crimping",
          "Composite Repairs", "Strong Back Systems",
        ],
        advantagesHeading: "ADVANTAGES",
        advantagesList: [
          "Save millions in operational down time, your leaks are repaired while your facilities stay on-line",
          "Quality approved products",
          "Minimize production loss",
          "Massive energy saving",
          "Minimize harmful emissions to the atmosphere",
          "Minimize noise pollution",
          "Create safer working conditions",
          "Prevent spillages and pollution",
        ],
      },
      hotTapping: {
        heading1: "When Hot Tapping Makes the Difference: Minimizing Disruption and Maximizing Efficiency",
        p1:
          "In the world of pipeline management, efficiency and minimal disruption are key. That's where hot tapping comes in, a specialized technique that allows you to connect to existing pipelines without interrupting the flow. This blog post dives into the benefits of hot tapping and the scenarios where it shines.",
        bold1: "Uninterrupted Operations:",
        p2:
          "Imagine needing to upgrade your pipeline system. Traditionally, this would mean shutting down the entire operation, resulting in lost production, frustrated customers, and significant financial losses. Enter hot tapping. This innovative method lets you seamlessly add new branches or isolate sections for maintenance all while the pipeline remains active. It's like performing surgery on a running engine – a feat of engineering brilliance.",
        bold2: "Safety and Environmental Benefits:",
        p3:
          "Beyond avoiding costly downtime, hot tapping also prioritizes safety and environmental responsibility. By eliminating the need for depressurization, the risks associated with handling highly pressurized systems are significantly reduced. Additionally, hot tapping minimizes product loss and prevents harmful gas emissions, making it a sustainable choice for your business and the planet.",
        bold3: "Cost-Effective Efficiency:",
        p4:
          "Let's talk numbers. By eliminating the need for lengthy shutdowns and complex rewelding procedures, hot tapping offers tangible cost savings. Less planning, reduced manpower requirements, and faster project completion times all add up to a more efficient and financially advantageous solution.",
        heading2: "But Is Hot Tapping Always the Answer?",
        p5:
          "While hot tapping boasts impressive advantages, it's crucial to acknowledge that it's not a one-size-fits-all solution. This complex procedure requires extensive expertise and specialized equipment. Therefore, it's essential to carefully evaluate your specific needs and consider alternative methods before making a decision. Hot tapping thrives when:",
        list1: [
          "Shutting down the pipeline is impractical or financially detrimental.",
          "Minimizing downtime and maintaining operations is paramount.",
          "Safety and environmental considerations are high priorities.",
        ],
        heading3: "Conclusion",
        p6:
          "Hot tapping is more than just a fancy technique; it's a game-changer in the world of pipeline management. By prioritizing efficiency, safety, and sustainability, it offers a clear advantage for maintaining and upgrading your system with minimal disruption. If you're looking for a way to keep your operations flowing while optimizing your pipeline network, hot tapping might just be the answer you've been searching for",
        whatItIsText:
          "A highly specialised live-line engineering service that enables new branch connections, bypass installations, valve insertions, and pipeline modifications to be performed safely on pressurised, fully operational pipelines — with zero interruption to flow, production, or plant operations.",
        whatWeDoList: [
          "Conduct detailed engineering analysis of pipeline operating conditions, material specifications, pressure ratings, and fluid characteristics prior to execution",
          "Mobilise certified hot tapping equipment and specialist technicians fully trained and competent in live-line intervention procedures",
          "Perform controlled drilling and tapping operations on pressurised pipelines in strict compliance with industry safety standards",
          "Insert S-type gate valves, saddle connections, or bypass assemblies while the pipeline remains in full service",
          "Complete post-work pressure testing, leak verification, and issue full completion and certification documentation",
        ],
        whosItForText:
          "Oil and gas operators, power generation facilities, water authorities, petrochemical plants, and pipeline operators requiring network modifications, emergency isolation points, or system extensions without the operational and financial impact of a planned shutdown.",
        whyItMattersText:
          "Shutting down a pressurised pipeline or process system for modifications carries enormous cost — in lost production, deferred revenue, and complex restart procedures. Hot tapping eliminates that cost entirely. When executed by experienced, properly certified specialists, it is a safe, proven, and code-compliant solution that delivers the required modification while keeping operations fully running and revenue protected.",
      },
      heatExchanger: {
        heading1: "HEAT EXCHANGER MAINTENANCE",
        list1: [
          "Heat Exchangers are Important Heat transfer Equipment in Power & Process Industry.",
          "Trouble free Performance of the Heat exchanger is critical for Plant Operations and reliability.",
          "PTD offers complete end to end services including Retubing and repair of Heat exchanger tubes as per customer needs.",
          "Scope of service includes complete disassembly, Inspection, Manual Cleaning, Hydro jetting and hydro testing of heat exchanger.",
          "Rectification of Leaking tubes and final assembly.",
          "Testing and Handover to Customer site.",
        ],
        tubeExtractionHeading: "Tube Extraction",
        tubeExtractionText:
          "Old tubes are removed if found any damages along with the tube ends .Any minor tube sheet cracks are then repaired to the ASME code specifications.",
        safelyTubeTransportHeading: "Safely Tube transport",
        safelyTubeTransportText: "We followed standard procedure and executed tube transport.",
        bundleCleaningHeading: "Bundle cleaning",
        bundleCleaningText: "Tube bundle cleaning carry sufficient manner and removing",
        list2: [
          "Heater shell repairing work will carry as per standard procedure (ASME code)",
          "Tube inserts in a proper method.",
        ],
        newTubesHeading: "New tubes (Manufacture to meet or exceed specifications) are installed",
        list3: ["Baffle plates replaced.", "Hydro test of heat exchanger"],
        finalText: "Also, we are supply Heat exchanger according to ASME sex-8 and specialized in fabrication of heater shell.",
        whatItIsText:
          "An end-to-end supply, installation, inspection, and maintenance service for industrial heat exchangers — the critical thermal management equipment at the heart of power generation, water treatment, and process industry operations.",
        whatWeDoList: [
          "Supply new heat exchangers manufactured to TEMA, ASME, and client-specific standards across all configurations including shell-and-tube, plate, and air-cooled types",
          "Execute scheduled and shutdown maintenance including full disassembly, mechanical cleaning, tube inspection, and integrity assessment",
          "Carry out re-tubing, re-bundling, and pressure vessel refurbishment to restore original design performance",
          "Conduct hydrostatic and pneumatic pressure testing with full certification and documentation",
          "Provide emergency breakdown response, critical spare parts supply, and rapid return-to-service support",
        ],
        whosItForText:
          "Power generation stations, oil and gas refineries, petrochemical processing plants, seawater desalination facilities, and industrial operations where thermal energy transfer is integral to the production process.",
        whyItMattersText:
          "Heat exchangers operate under demanding conditions of pressure, temperature, and corrosive media. Fouling, scaling, tube degradation, and seal failure are progressive — and when left unaddressed, lead to efficiency losses, unplanned shutdowns, and significant production impact. A proactive, professionally managed maintenance programme maximises heat transfer efficiency, extends equipment service life, and protects overall plant availability.",
      },
      roMembrane: {
        intro:
          "PTD specializes in providing professional RO membrane replacement services. Maintaining the highest standards of quality and performance. With our extensive experience and commitment to excellence, we help our clients achieve optimal operation and longevity of their RO systems.",
        whatItIsText:
          "A specialist retrofit and performance restoration service designed to upgrade ageing or underperforming Reverse Osmosis water treatment plants to current operational, efficiency, and regulatory standards — without the capital expenditure of full plant replacement.",
        whatWeDoList: [
          "Conduct comprehensive technical audits and performance assessments of existing RO plant infrastructure",
          "Engineer retrofit solutions addressing membrane degradation, hydraulic inefficiency, instrumentation obsolescence, and system losses",
          "Replace and upgrade critical components including membranes, high-pressure pumps, pressure vessels, energy recovery devices, and SCADA control systems",
          "Optimise pre-treatment and post-treatment processes to improve overall water quality and recovery rates",
          "Recommission upgraded systems with full performance verification, testing, and operator handover",
        ],
        whosItForText:
          "Desalination authorities, industrial water treatment operators, power and water utilities, and petrochemical facilities operating existing RO infrastructure that no longer meets required output quality, efficiency, or reliability standards.",
        whyItMattersText:
          "Ageing RO plants suffer progressive efficiency losses, increasing energy consumption, and declining water quality — all of which directly impact operational costs and regulatory compliance. A professionally executed retrofit restores plant performance, extends operational life by many years, and delivers a measurable return on investment at a fraction of full replacement cost.",
      },
      roPlantEpc: {
        whatItIsText:
          "A fully managed Engineering, Procurement, and Construction service for the design and delivery of large-scale Reverse Osmosis desalination and water purification plants with a production capacity of up to 2 million imperial gallons per day.",
        whatWeDoList: [
          "Develop detailed process engineering designs, hydraulic modelling, and system architecture for the complete RO plant",
          "Procure all major plant equipment including high-pressure membranes, multi-stage pumping systems, pre-treatment filtration, chemical dosing, energy recovery units, and automated control panels",
          "Manage full civil construction, mechanical installation, electrical integration, and instrumentation works",
          "Commission and performance-test the completed plant against contractual output, recovery rate, and water quality parameters",
          "Provide comprehensive operator training, as-built documentation, and structured handover to client operations teams",
        ],
        whosItForText:
          "Power and water authorities, municipal water boards, petrochemical and industrial complexes, and large-scale real estate and infrastructure developers requiring a reliable, high-capacity supply of desalinated or purified water.",
        whyItMattersText:
          "Water security is one of the most critical infrastructure priorities across the GCC and the broader Middle East region. Delivering a large-scale RO plant demands precise engineering, rigorous procurement standards, and disciplined project execution. Our EPC capability ensures clients receive a fully operational, code-compliant plant — delivered on schedule, within budget, and built to perform reliably for decades.",
      },
      solarPlantEpc: {
        whatItIsText:
          "A comprehensive turnkey Engineering, Procurement, and Construction service for utility-scale and industrial solar photovoltaic power plants up to 5 megawatts in capacity, supported by structured long-term maintenance programmes to protect asset performance and investment value.",
        whatWeDoList: [
          "Conduct detailed site surveys, solar irradiance assessments, and technical feasibility studies",
          "Deliver complete engineering design encompassing PV array layout, single-line diagrams, structural mounting systems, and grid interconnection",
          "Procure and supply premium-grade solar panels, string and central inverters, mounting structures, DC and AC cabling, and monitoring systems",
          "Manage full civil and electrical construction, installation, and commissioning to international standards",
          "Deliver structured preventive and corrective maintenance programmes, performance monitoring, and energy yield reporting throughout the operational lifecycle",
        ],
        whosItForText:
          "Industrial facilities, commercial and institutional buildings, government infrastructure projects, independent power producers, and utilities seeking to generate clean on-site power, reduce grid dependency, and achieve long-term energy cost savings.",
        whyItMattersText:
          "Saudi Arabia and the wider GCC region benefit from some of the highest solar irradiance levels in the world, presenting an exceptional opportunity for cost-effective renewable energy generation. A professionally delivered EPC project ensures maximum energy yield, full grid compliance, and a reliable return on investment — with ongoing maintenance safeguarding plant performance across its entire operational life.",
      },
      upvc: {
        whatItIsText:
          "A fully integrated fabrication and installation service delivering precision-engineered UPVC and aluminium door and window systems for industrial, commercial, and residential applications across Saudi Arabia and the GCC.",
        whatWeDoList: [
          "Engineer and design custom-specification door and window frames tailored to structural and architectural requirements",
          "Fabricate high-grade UPVC and aluminium profiles using advanced machinery within our dedicated workshop facility",
          "Supply and integrate all associated hardware, glazing systems, weatherproof seals, and finishing components",
          "Execute on-site installation with full compliance to building standards and client project schedules",
          "Conduct post-installation quality inspections, functional testing, and commissioning sign-off",
        ],
        whosItForText:
          "Industrial complexes, commercial developments, residential projects, main contractors, and real estate developers requiring durable, high-performance fenestration solutions in demanding Gulf climate conditions.",
        whyItMattersText:
          "UPVC and aluminium systems offer exceptional resistance to corrosion, extreme heat, sand, and humidity — delivering superior thermal insulation, reduced maintenance requirements, and a significantly longer service life than conventional alternatives. Choosing the right fabrication and installation partner ensures structural integrity, aesthetic consistency, and long-term performance across every opening in a building envelope.",
      },
      technicalManpower: {
        whatItIsText:
          "A professional managed manpower service providing rigorously screened, technically qualified, and HSE-compliant personnel to the power generation, oil and gas, and water treatment sectors on flexible short-term, long-term, and turnaround contract arrangements.",
        whatWeDoList: [
          "Source, technically evaluate, and deploy qualified professionals across mechanical, electrical, instrumentation, civil, and operations disciplines",
          "Manage the complete mobilisation process including documentation, medical fitness, visa processing, site induction, and HSE compliance verification",
          "Supply manpower to support planned maintenance shutdowns, turnarounds, emergency operations, and long-term Operations & Maintenance contracts",
          "Provide dedicated contract management, performance monitoring, and rapid personnel replacement to maintain continuous site coverage",
          "Deliver workforce solutions calibrated precisely to client project scope, timeline, and budget requirements",
        ],
        whosItForText:
          "Power stations, oil refineries, petrochemical complexes, desalination and water treatment plants, and EPC contractors requiring immediate access to skilled technical personnel without the overhead and lead time of direct recruitment.",
        whyItMattersText:
          "In the energy and utilities sector, operational continuity depends entirely on having the right people in the right roles at the right time. Delays in mobilising qualified technical personnel can halt production, jeopardise project schedules, and create significant safety exposure. Our manpower service gives clients fast, reliable access to a proven talent pool — reducing recruitment risk, controlling costs, and ensuring critical operations are never left undermanned.",
      },
    },
  },
  ar: {
    header: {
      langLabel: "اللغة",
      searchPlaceholder: "بحث هنا...",
      phone: {
        saudi: "السعودية",
        bahrain: "البحرين",
        uae: "الإمارات",
        india: "الهند",
      },
      logoTagline: "( وحدة تابعة لمجموعة شركات باور تك )",
      nav: {
        home: "الرئيسية",
        company: "الشركة",
        aboutUs: "من نحن",
        groupCompanies: "شركات المجموعة",
        services: "الخدمات",
        onlineSafetyValveTesting: "اختبار صمامات الأمان أثناء التشغيل (نوع تريفي)",
        offlineValveTesting: "اختبار الصمامات دون التشغيل",
        allTypesValveServicing: "جميع أنواع خدمات صيانة الصمامات",
        technicalManpowerSupply:
          "توريد الكوادر التقنية لمحطات الطاقة والمصافي ومحطات المياه",
        onlineLeakSealing: "إصلاح التسريب أثناء التشغيل – سيلماساتا والطرق التقليدية",
        hotTapping: "التفريع الساخن وتركيب الصمامات من نوع (S) أثناء التشغيل",
        heatExchanger: "المبادلات الحرارية، الصيانة والتوريد",
        roPlantEpc: "عقود تصميم وتوريد وتشغيل محطات التحلية بالتناضح العكسي حتى 2 مليون غالون يوميًا",
        solarPlantEpc: "عقود تصميم وتوريد وتشغيل محطات الطاقة الشمسية حتى 5 ميجاوات والصيانة",
        roPlantsRetroFitting: "إعادة تأهيل محطات التحلية بالتناضح العكسي",
        upvcDoorsWindows: "تصنيع وتركيب أبواب ونوافذ اليو بي في سي والألمنيوم",
        appreciations: "شهادات التقدير",
        brochures: "الكتيبات",
        gallery: "معرض الصور",
        photoGallery: "معرض الصور",
        videoGallery: "معرض الفيديو",
        ourBranches: "فروعنا",
        trainings: "التدريبات",
        careers: "الوظائف",
        contactUs: "اتصل بنا",
      },
    },
    footer: {
      aboutTitle: "من نحن",
      aboutText:
        "شركة سام للخدمات الفنية للمقاولات هي شركة حاصلة على شهادتي ISO 9001 وISO 45001، وتُعد فريدة في شبه القارة الهندية ودول مجلس التعاون الخليجي كمزود شامل لخدمات محطات الطاقة المتكاملة في مجالات الإصلاح والتأهيل وعقود التصميم والتوريد والتشغيل.",
      quickLinks: "روابط سريعة",
      quickCode: "رمز سريع",
      location: "الموقع",
      home: "الرئيسية",
      aboutUs: "من نحن",
      groupCompanies: "شركات المجموعة",
      appreciations: "شهادات التقدير",
      photoGallery: "معرض الصور",
      ourBranches: "فروعنا",
      trainings: "التدريبات",
      careers: "الوظائف",
      contactUs: "اتصل بنا",
      copyrightText: "جميع الحقوق محفوظة ©",
      companyName: "شركة سام للخدمات الفنية للمقاولات",
      allRightsReserved: "جميع الحقوق محفوظة.",
      whatsapp: "واتساب",
      saudiPhoneLabel: "السعودية",
    },
    home: {
      knowMore: "لمعرفة المزيد اضغط هنا",
      underConstruction: "قيد الإنشاء",
      banners: {
        opsMaintenance: "مزود خدمات التشغيل والصيانة",
        electroMechanical: "خبراء مشاريع الأعمال الكهروميكانيكية وأجهزة القياس",
        hotTapping: "التفريع الساخن",
        gasSteamTurbine: "أعمال التوربينات الغازية والبخارية",
        valveServicing: "أعمال صيانة الصمامات واختبارها ومعايرتها",
        weldingFabrication: "أعمال اللحام والتصنيع",
      },
      serveGloballyPre: "نخدم",
      serveGloballyHighlight: "عملاءنا عالميًا",
      globalPresenceTitle: "حضورنا العالمي",
      globalPresenceText:
        "مجموعة شركات باور تك، الحاصلة على شهادتي ISO 9001 وISO 45001، هي شركة فريدة في شبه القارة الهندية ودول مجلس التعاون الخليجي، حيث تقدم حلولاً متكاملة لخدمات محطات الطاقة في مجالات الإصلاح والتأهيل، وعقود التصميم والتوريد والتشغيل، وعقود التشغيل والصيانة، وإعادة التصنيع ونقل محطات الطاقة، والقطع والخدمات، منذ أكثر من عقد من الزمن. نقدم بديلاً اقتصاديًا وعالي الجودة لمختلف الشركات المصنعة الأصلية حول العالم في مجالات خبرتنا. كما نوفر خدمات وخبرات عالية الجودة في الإصلاح والتأهيل، والقطع والخدمات، وعقود التصميم والتوريد والتشغيل، وعقود التشغيل والصيانة، وإعادة التصنيع ونقل محطات الطاقة، منذ أكثر من عقد.",
      yearsLabel: "سنوات",
      countriesLabel: "دول",
      customersLabel: "عملاء",
      valveServicesSpan: "خدمات الصمامات",
      valveServicesLine1: "- الموارد البشرية",
      valveServicesLine2: "وتوريد الكوادر الفنية",
      trustedByPre: "نحن",
      trustedByHighlight: "موضع ثقة",
      trustedByPost: "من قبل",
      clientSay: {
        item1:
          "حصلت مجموعة باور تك الآن على شهادة ISO 14001، إلى جانب شهادتي ISO 9001 وISO 45001 التي حصلت عليها سابقًا. أكملنا مؤخرًا تدقيق نظام الإدارة المتكامل لجميع الشهادات الثلاث وحصلنا على الاعتماد.",
        item2:
          "يسر مجموعة باور تك أن تشارككم حصول شركتنا على وسام EcoVadis الفضي. تضع هذه النتيجة شركتنا ضمن أفضل 25% من الشركات التي تقيّمها EcoVadis.",
      },
      tabs: {
        onlineSafety: {
          title: "اختبار صمامات الأمان أثناء التشغيل (نوع تريفي)",
          tagline: "لا شيء أهم من صمام الأمان سوى الطريقة التي تختبره بها",
          heading:
            "نظام AccuTEST لاختبار صمامات الأمان ونظام L-PLAN LEGA TEST - اختبار صمامات الأمان عبر الإنترنت أثناء التشغيل",
          desc:
            "تُعد صمامات الأمان أساسية لحماية الأرواح والممتلكات، لذا فإن الاختبار الدوري أمر بالغ الأهمية لضمان عملها بشكل صحيح. لكن هل يمكنك أن تكون واثقًا من النتائج إذا لم يتم إجراء الاختبار تحت ظروف التشغيل الفعلية؟",
        },
        offlineTesting: {
          title: "اختبار الصمامات دون التشغيل",
          tagline: "لا شيء أهم من صمام الأمان سوى الطريقة التي تختبره بها",
          heading: "منحنى الاختبار والأجهزة - اختبار الصمامات دون التشغيل",
          desc:
            "تُعد صمامات الأمان أساسية لحماية الأرواح والممتلكات، لذا فإن الاختبار الدوري أمر بالغ الأهمية لضمان عملها بشكل صحيح. لكن هل يمكنك أن تكون واثقًا من النتائج إذا لم يتم إجراء الاختبار تحت ظروف التشغيل الفعلية؟",
        },
        allTypesValve: {
          title: "جميع أنواع خدمات صيانة الصمامات",
          descPre:
            "تتخصص شركتا المجموعة، فالف تك للاختبار والخدمات وباور تك للاختبار والخدمات، في تقديم خدمات لأنواع مختلفة من الصمامات والمشغلات والمضخات والضواغط وغيرها، لمزيد من المعلومات يرجى زيارة",
        },
        technicalManpower: {
          title: "توريد الكوادر التقنية لمحطات الطاقة والمصافي ومحطات المياه",
        },
        onlineSealLeaking: {
          title: "إصلاح التسريب أثناء التشغيل",
          desc:
            "يُعد إصلاح التسريب أثناء التشغيل اليوم الحل الأمثل لأنه يوفر الطاقة، ويمنع التوقف المكلف وغير المرغوب فيه، ويمكنه معالجة أنواع متعددة من التسريبات. وبالاستفادة من الدعم الهندسي من خبراء عالميين، نمتلك مركبات إصلاح التسريب القادرة على معالجة تسريبات البخار والمواد الكيميائية والهيدروكربونات والغازات عند درجات حرارة تصل إلى 700 درجة مئوية. لدينا فنيون مدربون تدريبًا عاليًا وذوو مهارة عالية قادرون على التعامل مع الحالات الصعبة بحرفية وإعادة الوضع إلى طبيعته.",
        },
        hotTapping: {
          title: "التفريع الساخن وتركيب الصمامات من نوع (S) أثناء التشغيل",
          desc:
            "التفريع الساخن ليس مجرد تقنية متطورة، بل هو نقطة تحول في عالم إدارة خطوط الأنابيب. فمن خلال إعطاء الأولوية للكفاءة والسلامة والاستدامة، يوفر ميزة واضحة لصيانة وتحديث نظامك بأقل قدر من التعطيل. وإذا كنت تبحث عن طريقة للحفاظ على استمرارية عملياتك مع تحسين شبكة خطوط الأنابيب، فقد يكون التفريع الساخن هو الحل الذي تبحث عنه.",
        },
        heatExchanger: {
          title: "المبادلات الحرارية، الصيانة والتوريد",
          desc1:
            "المبادل الحراري هو جهاز يتم فيه تبادل الطاقة الحرارية بين سائلين مختلفين عند درجات حرارة مختلفة.",
          desc2:
            "الأكثر استخدامًا هو ما يُعرف بـ«المبادل الأنبوبي ذو الحزمة والغلاف»، حيث تسمح بنيته السطحية الكبيرة بتبادل كميات كبيرة من الحرارة.",
        },
        roPlantEpc: { title: "عقود تصميم وتوريد وتشغيل محطات التحلية بالتناضح العكسي حتى 2 مليون غالون يوميًا" },
        solarPlantEpc: { title: "عقود تصميم وتوريد وتشغيل محطات الطاقة الشمسية حتى 5 ميجاوات والصيانة" },
        roPlantsRetro: {
          title: "إعادة تأهيل محطات التحلية بالتناضح العكسي",
          desc:
            "نقوم بترقية وتحديث محطات معالجة المياه بالتناضح العكسي القائمة عن طريق استبدال المكونات القديمة بأجزاء أحدث وأكثر كفاءة، مما يمدّ عمر المحطة ويحسّن جودة المياه المُنتجة دون الحاجة لاستبدال كامل.",
        },
        upvcDoors: {
          title: "تصنيع وتركيب أبواب ونوافذ اليو بي في سي والألمنيوم",
          desc:
            "نصمم ونصنّع ونركّب أبوابًا ونوافذ عالية الجودة من اليو بي في سي والألمنيوم للمباني الصناعية والتجارية والسكنية، مع ضمان المتانة ومقاومة العوامل الجوية والمظهر الاحترافي.",
        },
      },
      trustedBySectionTitlePre: "نحن",
    },
    common: {
      home: "الرئيسية",
      contactUsBtn: "اتصل بنا",
    },
    company: {
      breadcrumbCompany: "الشركة",
      breadcrumbAboutUs: "من نحن",
      ourVision: "رؤيتنا",
      visionText:
        "أن نكون الشريك الأكثر ثقة وكفاءة تقنية كحل شامل لعمليات محطات الطاقة والمياه والمنشآت الصناعية في المملكة العربية السعودية ودول مجلس التعاون الخليجي، من خلال تقديم حلول آمنة وموثوقة وفعالة من حيث التكلفة تحافظ على أداء أصول عملائنا في أعلى مستوياته.",
      aboutTag: "من نحن",
      opMaintHeading: "التشغيل والصيانة",
      serviceProviderHeading: "مزود الخدمة",
      powerPlantSpecialist: "متخصصون في محطات الطاقة",
      stats: {
        years: "سنوات من الخبرة المتواصلة",
        satisfiedCustomers: "عميل راضٍ",
        employees: "موظف",
        isoCertified: "معتمدون بشهادات 45001 و9001 و14001",
        gccIndia: "والهند",
      },
      whoWeAreTitlePre: "من",
      whoWeAreTitlePost: "نحن",
      whoWeAreP1:
        "شركة سام للخدمات الفنية للمقاولات (STSC) هي شركة سعودية متخصصة في الخدمات الفنية والمقاولات، ومقرها الرئيسي في رابغ بالمملكة العربية السعودية.",
      whoWeAreP1Bold: "شركة سام للخدمات الفنية للمقاولات (STSC)",
      whoWeAreP1Rest:
        "هي شركة سعودية متخصصة في الخدمات الفنية والمقاولات، ومقرها الرئيسي في رابغ بالمملكة العربية السعودية.",
      whoWeAreP2:
        "نحن نفتخر بكوننا وحدة تابعة لمجموعة شركات باور تك — مجموعة متعددة الجنسيات تتمتع بخبرة تمتد لأكثر من عقد وحضور راسخ في دول مجلس التعاون الخليجي وشبه القارة الهندية، وحاصلة على شهادات ISO 9001 (إدارة الجودة) وISO 45001 (الصحة والسلامة المهنية) وISO 14001 (الإدارة البيئية) ضمن نظام إدارة متكامل.",
      whoWeAreP2Bold: "مجموعة شركات باور تك",
      whoWeAreP3:
        "وبصفتها كيانًا مسجلاً وحاصلاً على شهادة ضريبة القيمة المضافة في المملكة العربية السعودية، تعمل STSC بصفتها الذراع التقني المتخصص للمجموعة في السوق السعودي، حيث تقدّم خدمات هندسية متخصصة، وحلول تشغيل وصيانة، وكوادر فنية لقطاعات توليد الطاقة والنفط والغاز والبتروكيماويات ومعالجة المياه.",
      featureHeadquartered: "المقر الرئيسي",
      featureHeadquarteredValue: "رابغ، المملكة العربية السعودية",
      featurePowerTechGroup: "مجموعة باور تك",
      featurePowerTechGroupValue: "شركة متعددة الجنسيات",
      featureIsoCertified: "معتمدة بشهادات ISO",
      featureIsoCertifiedValue: "9001 | 45001 | 14001",
      featureVatRegistered: "مسجلة في ضريبة القيمة المضافة",
      featureVatRegisteredValue: "شريك موثوق في المملكة",
      servicesEngineering: "خدمات هندسية",
      servicesOpMaint: "التشغيل والصيانة",
      servicesManpower: "الكوادر التقنية",
      servingIndustries: "نخدم القطاعات الرئيسية",
      industryPower: "الطاقة",
      industryOilGas: "النفط والغاز",
      industryPetrochemical: "البتروكيماويات",
      industryWater: "معالجة المياه",
      missionLabelPre: "مهمتنا",
      missionLabelHighlight: "",
      missionP1:
        "تقديم خدمات فنية عالمية المستوى، وحلول هندسية مبتكرة، وكوادر مؤهلة لقطاعي الطاقة والصناعة، مبنية على أساس من السلامة والجودة والنزاهة والتحسين المستمر.",
      missionP2:
        "نلتزم بحماية استمرارية عمليات عملائنا مع تحقيق قيمة ملموسة في كل مشروع.",
      whatWeDoTag: "ما نقدمه",
      whatWeDoHeadingLine1: "شريك واحد.",
      whatWeDoHeadingLine2: "حلول صناعية متكاملة.",
      whatWeDoP1:
        "STSC شركة مقاولات خدمات فنية متكاملة تخدم قطاعات توليد الطاقة والنفط والغاز والبتروكيماويات ومعالجة المياه في المملكة العربية السعودية.",
      whatWeDoP2:
        "نعمل كحل شامل حقيقي، مما يلغي الحاجة إلى تعدد المقاولين، مع تقديم خدمات هندسية وصيانة ودعم صناعي موثوقة تحت سقف واحد.",
      coreServiceCapabilities: "قدراتنا الأساسية في تقديم الخدمات",
      coreServiceText:
        "يتم تنفيذ كل خدمة نقدمها من قبل كوادر مؤهلة وذات خبرة، ضمن إطار منظم للصحة والسلامة والبيئة، مع توثيق كامل واعتماد وموافقة العميل في كل مرحلة.",
      services: {
        valveTesting:
          "اختبار صمامات الأمان أثناء التشغيل وخارجه، ومعايرتها، وخدمة الصيانة الكاملة لجميع أنواع الصمامات والمشغلات",
        leakSealing: "إصلاح التسريب أثناء التشغيل للأنظمة المضغوطة عند درجات حرارة تصل إلى 700 درجة مئوية",
        hotTapping: "التفريع الساخن وتركيب صمامات البوابة أثناء التشغيل على خطوط الأنابيب العاملة",
        heatExchanger: "صيانة المبادلات الحرارية وإعادة تمديد الأنابيب وتوريدها",
        manpower: "توريد كوادر التشغيل والصيانة لمحطات الطاقة والمصافي ومحطات معالجة المياه",
        roEpc: "عقود تصميم وتوريد وتشغيل محطات التحلية بالتناضح العكسي حتى 2 مليون غالون إمبراطوري يوميًا",
        roRetro: "إعادة تأهيل محطات التحلية بالتناضح العكسي واستعادة كفاءتها",
        solarEpc: "عقود تصميم وتوريد وتشغيل محطات الطاقة الشمسية حتى سعة 5 ميجاوات والصيانة المستمرة",
        upvc: "تصنيع وتركيب أبواب ونوافذ اليو بي في سي والألمنيوم",
      },
      credentialsTag: "اعتماداتنا وثقة عملائنا",
      credentialsHeadingLine1: "اعتمادات موثقة.",
      credentialsHeadingLine2: "موضع ثقة في جميع أنحاء المملكة.",
      credentialsText:
        "تعمل STSC تحت مظلة الجودة والالتزام الكاملة لمجموعة باور تك، الحاصلة على وسام EcoVadis الفضي المعترف به عالميًا للاستدامة، والذي يضع المجموعة ضمن أفضل 25% من الشركات المقيَّمة عالميًا في الأداء البيئي والاجتماعي والحوكمة.",
      clientTitle: "تم الاعتراف رسميًا بأعمالنا في المملكة العربية السعودية من قبل عملاء رئيسيين في القطاع، من أبرزهم:",
      clients: {
        nomacTitle: "نوماك (أكوا باور)",
        nomacDesc: "خطاب تقدير لتوريد الكوادر وخدمات الصمامات طويلة الأجل في محطات الطاقة على البحر الأحمر",
        engieTitle: "شركة إنجي الفضلي للتشغيل والصيانة",
        engieDesc: "تم تكليفنا باختبار صمامات الأمان أثناء التشغيل في محطة غاز الفضلي",
        rpcTitle: "بترو رابغ (RPC)",
        rpcDesc: "إنجاز خدمات إصلاح شاملة كبرى للصمامات بنجاح",
        keyClientsTitle: "أرامكو السعودية، ياسرف، شركة المياه الوطنية، الشركة السعودية للكهرباء",
        keyClientsDesc: "من بين أبرز عملائنا في المملكة",
      },
      complianceText:
        "نحمل شهادات سجل تجاري ساري المفعول، وشهادة ضريبة القيمة المضافة، واعتماد GE Field Core Comply Works للتحقق من المقاولين بدرجة 100 — وهو ما يعكس التزامنا الكامل بمعايير تأهيل المقاولين الدولية.",
      presenceHeadingPre: "حضورنا",
      presenceHeadingHighlight: "",
      presenceText:
        "بمقرها في رابغ بالمملكة العربية السعودية، تخدم STSC عملاءها في جميع مناطق المملكة، من ساحل البحر الأحمر إلى القلب الصناعي في المنطقة الشرقية. وكجزء من مجموعة باور تك، نستفيد من الموارد التقنية والكوادر البشرية والمعرفة التشغيلية لكيانات المجموعة العاملة في السعودية والإمارات وقطر والهند والبحرين، مما يمنح عملاءنا في السعودية إمكانية الوصول إلى قدرات وخبرات أوسع بكثير مما يمكن أن يقدمه مقاول مستقل.",
      whyChooseTitlePre: "لماذا تختار",
      whyChooseTitlePost: "STSC",
      whyChoosePoints: [
        "أكثر من عقد من الخبرة على مستوى المجموعة في خدمات محطات الطاقة والصناعة عبر دول مجلس التعاون الخليجي",
        "معتمدون بشهادات ISO 9001 وISO 45001 وISO 14001 — ضمن نظام إدارة متكامل بالكامل",
        "سجل حافل مع عملاء سعوديين رئيسيين مثل نوماك وإنجي وبترو رابغ وأرامكو السعودية وياسرف",
        "قدرات متعددة التخصصات تلغي الحاجة إلى تعدد المقاولين",
        "تعبئة سريعة لكوادر فنية مؤهلة ومعتمدة وملتزمة بمعايير الصحة والسلامة والبيئة",
        "قابلية تتبع كاملة — كل عمل موثق ومختبر ومعتمد وموافق عليه من العميل",
        "مدعومون بموارد وشبكة وخبرة مجموعة شركات باور تك",
      ],
    },
    careers: {
      title: "الوظائف",
      intro:
        "في شركة سام للخدمات الفنية للمقاولات، نلتزم باستقطاب وتطوير والاحتفاظ بالكفاءات المتميزة. نقدم فرصًا مهنية تحفيزية، وتعلمًا مستمرًا، وثقافة قائمة على السلامة والنزاهة والنمو المهني لكل من يبحث عن مسار وظيفي واعد في قطاع الخدمات الصناعية.",
    },
    brochures: {
      title: "الكتيبات",
      intro:
        "تعرّف علينا وعلى ما نقدمه وكيف نحقق القيمة لعملائنا في مختلف مناطق المملكة العربية السعودية. يقدم كتيب شركتنا نظرة عامة على خدماتنا وقدراتنا وخبرتنا في القطاع، وحرصنا على الجودة والسلامة والتميز التشغيلي.",
      downloadTitle: "تحميل الكتيبات",
      mechanicalMaintenance: "الصيانة الميكانيكية",
      electricalMaintenance: "الصيانة الكهربائية",
      fabrication: "التصنيع",
      valveTesting: "اختبار الصمامات",
      manpower: "الكوادر الفنية",
      powerplantOM: "تشغيل وصيانة محطات الطاقة",
      pipelineIntervention: "التدخل في خطوط الأنابيب",
    },
    ourBranches: {
      pageTitle: "فروعنا",
      intro:
        "موظفونا ومرافقنا هم أساس عملنا. تدير شركة سام للخدمات الفنية للمقاولات عملياتها الرئيسية في رابغ بالمملكة العربية السعودية، إلى جانب بنية داعمة في الهند والإمارات، مما يمنح عملاءنا الثقة بأن الموارد والأدوات والخبرة المناسبة متوفرة دائمًا أينما تطلبت طبيعة العمل ذلك.",
      tabs: {
        bahrain: "البحرين - صور المبنى والورشة",
        saudi: "السعودية - صور المكتب ورابغ",
        india: "الهند - معهد CPDTI وورشة دندجل",
        uae: "الإمارات - صور ورشة عجمان",
      },
      captions: {
        bahrainBuildingTwo: "مبنى مجموعة باور تك في البحرين (2)",
        bahrainBuildingOne: "مبنى مجموعة باور تك في البحرين",
        bahrainConferenceRoom: "قاعة اجتماعات باور تك للتطوير",
        bahrainEmployeesAccommodation: "سكن موظفي باور تك للتطوير",
        bahrainHseAudit: "تدقيق الصحة والسلامة والبيئة لدى نوماك",
        bahrainUpvcFactoryInside: "داخل مصنع اليو بي في سي",
        bahrainUpvcFactory: "مصنع اليو بي في سي",
        bahrainValveWorkshop: "ورشة فالف تك في البحرين",
        saudiOffice: "المكتب السعودي",
        cpdtiInstitute: "معهد CPDTI، تشيناي، الهند",
        dindigulOffice: "مكتب دندجل",
        dindigulTrainingCenter: "مركز تدريب دندجل",
        ajmanWorkshop: "ورشة عجمان",
      },
    },
    groupCompanies: {
      breadcrumbAboutUs: "من نحن",
      pageTitle: "شركات المجموعة",
      intro:
        "لا تكمن قوتنا فقط في ما نقدمه، بل في من يقف خلفنا. وباعتبارها وحدة تابعة لمجموعة شركات باور تك، تستفيد شركة سام للخدمات الفنية للمقاولات من دعم شبكة من الكيانات المتخصصة العاملة في خمس دول. ومعًا، نوفر لعملائنا في المملكة العربية السعودية إمكانية الوصول إلى منظومة متكاملة من القدرات الهندسية والتقنية والتدريبية وتوريد الكوادر، تحت مظلة مجموعة واحدة موثوقة.",
      companies: {
        ptd: "التشغيل والصيانة لمحطات الطاقة والمياه والنفط والغاز، وعقود التصميم والتوريد والتشغيل، وتوريد الكوادر البشرية",
        stsc:
          "التشغيل والصيانة لمحطات الطاقة والمياه والنفط والغاز، وعقود التصميم والتوريد والتشغيل، وتوريد الكوادر البشرية، واختبار تريفي وخدمة جميع أنواع الصمامات والمشغلات، وإصلاح التسريب أثناء التشغيل، وصيانة وتوريد المبادلات الحرارية، والتفريع الساخن",
        cpdti:
          "تدريب على التشغيل والصيانة لحديثي التخرج وحاملي الدبلومات، وتدريب على المحاكي الحراري 210/600 واط، وتدريب على الصحة والسلامة والبيئة، وتوظيف داخلي بنسبة 100%",
        pemi:
          "عقود تصميم وتوريد وتشغيل الطاقة الشمسية والصيانة، ومحطات التحلية بالتناضح العكسي، واستيراد وتصدير الخردة والألمنيوم وقطاعات اليو بي في سي، وتفكيك محطات الطاقة والمنشآت الصناعية.",
        ibnBadooda: "تصنيع أبواب ونوافذ اليو بي في سي والألمنيوم",
        ptIntl: "وكالة توظيف حكومية معتمدة رائدة، رقم الترخيص: B-1192/CHEN/PER/100/5/9405/2018",
        vtts:
          "اختبار ومعايرة صمامات الأمان أثناء التشغيل وخارجه، وخدمة جميع أنواع الصمامات والمشغلات، والتفريع الساخن، وصيانة وتوريد المبادلات الحرارية",
        ptts:
          "اختبار ومعايرة صمامات الأمان أثناء التشغيل وخارجه، وخدمة جميع أنواع الصمامات والمشغلات، والتفريع الساخن، وصيانة وتوريد المبادلات الحرارية",
        samsBuilding:
          "تنفيذ مشاريع البناء بنظام تسليم المفتاح، وأعمال التشطيبات الداخلية مثل أبواب ونوافذ اليو بي في سي والألمنيوم، وأعمال الميكانيكا والكهرباء والسباكة، ومحطات معالجة الصرف الصحي",
        qPowerTech:
          "التشغيل والصيانة لمحطات الطاقة والمياه والنفط والغاز، وعقود التصميم والتوريد والتشغيل، وتوريد الكوادر البشرية، والاختبار والمعايرة أثناء التشغيل للصمامات والمشغلات، وخدمة الصمامات، والتفريع الساخن، وصيانة وتوريد المبادلات الحرارية",
        knowledgeCity:
          "الذراع الاجتماعي لمجموعة شركات باور تك من أجل التميز التعليمي والتمكين. مركز لتطوير المهارات والتوظيف",
      },
    },
    contactUs: {
      title: "اتصل بنا",
      intro:
        "نحن دائمًا على استعداد لسماع رأيك. سواء كان لديك استفسار عن خدماتنا، أو مشروع تريد مناقشته، أو تريد فقط معرفة المزيد عن كيفية دعم شركة سام للخدمات الفنية للمقاولات لعملياتك في المملكة العربية السعودية، فريقنا جاهز للرد بسرعة واحترافية.",
      helpHeadingPre: "كيف يمكننا",
      helpHeadingHighlight: "مساعدتك؟",
      helpText:
        "أخبرنا كيف يمكننا مساعدتك في مشاريعك الحالية أو المستقبلية، وسيتواصل معك أحد مندوبي المبيعات أو الدعم لدينا في أقرب وقت.",
      saudiOfficeTitle: "مكتب المملكة العربية السعودية",
      saudiOfficeSubtitle: "سام للخدمات الفنية للمقاولات",
      chennaiOfficeTitle: "مكتب تشيناي",
      chennaiOfficeSubtitle: "باور تك للاختبار والخدمات",
    },
    contactForm: {
      heading: "تواصل معنا بسرعة",
      intro:
        "يرجى إخبارنا إذا كان لديك سؤال، أو تريد ترك تعليق، أو ترغب في مزيد من المعلومات عن خدماتنا.",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      companyName: "اسم الشركة",
      websiteUrl: "رابط الموقع الإلكتروني",
      howDidYouFindUsDefault: "- كيف تعرفت علينا؟ -",
      google: "جوجل",
      socialMedia: "وسائل التواصل الاجتماعي",
      referral: "توصية",
      advertisement: "إعلان",
      other: "أخرى",
      subject: "الموضوع",
      messagePlaceholder: "كيف يمكننا مساعدتك؟",
      submit: "إرسال",
      sending: "جارٍ الإرسال...",
      successMessage: "تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.",
      errorMessageDefault: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      networkError: "خطأ في الشبكة. يرجى المحاولة مرة أخرى.",
    },
    trainings: {
      pageTitle: "التدريبات",
      intro:
        "الكوادر المؤهلة هي من تحقق نتائج متميزة. تغطي برامجنا التدريبية عمليات محطات الطاقة، والتخصصات الفنية، والالتزام بمعايير الصحة والسلامة والبيئة، والكفاءات المتخصصة بالمعدات — لضمان أن كل فرد في فريقنا مؤهل ومعتمد وجاهز للعمل في الموقع.",
      captions: {
        aiTraining: "تدريب على الذكاء الاصطناعي من آي بي إم لطلاب CPDTI دفعة 2025",
        bangaloreAirport: "تدريب في مطار بنغالور الدولي",
        hseCourses: "دورات الصحة والسلامة والبيئة",
        governerRecognition: "معتمد من حاكم ولاية الهند - 2017",
        sudanKosti: "تدريب في محطة كوستي للطاقة، السودان",
      },
    },
    appreciations: {
      pageTitle: "شهادات التقدير",
      intro:
        "نحن ممتنون لعملائنا على منحنا الفرصة للعمل معهم؛ فهي مصدر تحفيز كبير لفريقنا عندما يُقدَّر عملنا. وقد أعرب العديد من قادة الأعمال في المملكة العربية السعودية وخارجها عن تقديرهم لفريقنا حتى الآن.",
      tabs: {
        crCopies: "نسخ السجل التجاري",
        isoCertificate: "شهادات ISO",
        appreciationLetter: "خطابات التقدير",
        reference: "المراجع وأوامر الشراء",
      },
      captions: {
        crStsc: "شهادة السجل التجاري – شركة سام للخدمات الفنية للمقاولات",
        crValveTech: "شهادة السجل التجاري – فالف تك للاختبار",
        crSamTech: "شهادة السجل التجاري – سام تك",
        vatCertificate: "شهادة ضريبة القيمة المضافة",
        isoQuality: "ISO - ضمان الجودة",
        isoOccupational: "ISO - الصحة والسلامة المهنية",
        isoGreen: "ISO - الأعمال الخضراء",
        mitsubishiLetter: "خطاب تقدير من ميتسوبيشي، اليابان",
        ewaHawarLetter: "خطاب تقدير من هيئة الكهرباء والمياه - محطة هوار للطاقة والمياه - باور تك للتطوير",
        nomacLetter: "خطاب تقدير من نوماك - شركة سام للخدمات الفنية للمقاولات",
        geFieldcoreCard: "بطاقة اعتماد GE Fieldcore Complyworks للمقاولين بدرجة 100",
        gpicThanks: "خطاب شكر وتقدير - MTM-L-148 - شركة الخليج للصناعات البتروكيماوية",
        customerRatings: "تقييمات العملاء",
        ecovadis: "تصنيف EcoVadis للاستدامة - وسام فضي لمجموعة باور تك - ضمن أفضل 25% من الشركات المقيَّمة من EcoVadis",
        outstandingWorkerOne: "شهادة تقدير لإدارة وصيانة سكن العمال المتميز في 2024 (1)",
        outstandingWorkerTwo: "شهادة تقدير لإدارة وصيانة سكن العمال المتميز في 2024",
        engieFadhili: "شركة إنجي الفضلي للتشغيل والصيانة - اختبار صمامات الأمان أثناء التشغيل",
        nomacRedSea: "نوماك - توريد كوادر طويلة الأجل في منطقة البحر الأحمر",
      },
    },
    servicePage: {
      common: {
        whatItIs: "ما هي الخدمة",
        whatWeDo: "ماذا نقدم",
        whosItFor: "لمن هذه الخدمة",
        whyItMatters: "لماذا هي مهمة",
        testingProcedure: "إجراءات الاختبار",
        valveTypes: "أنواع الصمامات",
        certification: "الاعتماد",
        calibrationCertificate: "شهادة المعايرة",
        referenceList: "قائمة المراجع",
        keyClients: "أبرز العملاء",
        downloadPipelinePdf: "تحميل ملف PDF عن التدخل في خطوط الأنابيب",
        toKnowMoreHeading: "لمعرفة المزيد اتصل بنا",
        toKnowMoreDesc:
          "من الحقائق الثابتة أن القارئ يميل إلى التركيز على محتوى الصفحة المقروء بدلاً من تفاصيل تصميمها عند تصفحه.",
        formFirstName: "الاسم الأول",
        formLastName: "اسم العائلة",
        formCompanyName: "اسم الشركة",
        formCompanyEmail: "البريد الإلكتروني للشركة",
        formPrimaryPhone: "رقم الهاتف الأساسي",
        formJobTitle: "المسمى الوظيفي",
        formCountry: "الدولة",
        submitForm: "إرسال النموذج",
        sharedValveTypesGrid: [
          "صمامات البوابة", "صمامات عدم الرجوع (NRV)", "صمامات الغالق", "خدمة ومعايرة صمامات التحكم",
          "صمامات السدادة", "صمامات الفراشة من نوع الوافر", "صمامات عدم الرجوع الخالية من الصدم",
          "صمامات بوابة حادة الشفرة (بحلقات مقعد من EPDM)", "الصمامات الكروية", "الصمامات الكروية الدوارة",
          "صمامات الحنفية", "صمامات الأمان", "صمامات عدم الرجوع من نوع الوافر",
        ],
        valveServicesText:
          "نقدم خدمات الصيانة لجميع أنواع الصمامات الصناعية. وبفضل منشأتنا المجهزة تجهيزًا كاملاً وفريقنا المتميز من الخبراء، تقدّم الوحدة أعمال الصيانة في الموقع وخارجه، سواء للاحتياج لصمام واحد أو لمحطة كاملة. ويضم الفريق مهندسين متعددي المهارات يقدمون خدمات إدارة الصمامات الكاملة لجميع الأحجام والأعمار والأنواع والموديلات والتصنيفات ودرجات الحرارة.",
        certificationText:
          "تم اختبار جهازنا في الولايات المتحدة الأمريكية وحاصل على شهادة TUV SUD، ونحن أيضًا شركة معتمدة بشهادة ISO 9001:2008 وOSHAS 18001:2007.",
      },
      onlineSafetyTesting: {
        procedureList: [
          "يُعد الاختبار أثناء التشغيل لصمامات أمان تفريغ البخار طريقة معتمدة لاختبار جميع أنواع صمامات التفريغ الآمن.",
          "يتم تركيب خلية قياس الحمل مع جهاز شد كهربائي بمحرك تيار مستمر على رأس ساق الصمام.",
          "يقوم هذا الجهاز بشد الساق في محاولة لرفع القرص.",
          "والنتيجة النهائية هي أن الصمام يفتح عند ضغط أقل من ضغط الضبط، محسوبًا كهربائيًا وفقًا لمساحة القرص.",
          "لا نحتاج فعليًا إلى رفع ضغط النظام إلى نقطة ضبط صمام التفريغ.",
          "لكن، يمكن لجهاز الشد الكهربائي تطبيق ضغط يزيد عن 100 كجم/سم² على قرص الصمام حسب مساحته.",
          "ومع ذلك، بما أن ضغط النظام يبقى أقل بكثير من ضغط الضبط عند فتح الصمام، تكون العملية أكثر أمانًا. تُستخدم هذه الطريقة عادة لصمامات التفريغ الآمن ذات الساق.",
        ],
        valveTypesText: "يمكن اختبار جميع أنواع صمامات الأمان وصمامات التفريغ الآمن وصمامات تفريغ الضغط.",
        certificationText:
          "تم اختبار جهازنا في الولايات المتحدة الأمريكية وحاصل على شهادة TUV SUD، ونحن أيضًا شركة معتمدة بشهادة ISO 9001:2008 وOSHAS 18001:2007.",
        calibrationText: "تم اختبار جهازنا على أجهزة Honeywell في الولايات المتحدة الأمريكية وهو معتمد من TUV SUD.",
        referenceListText: "TANGEDCO, TNPL, ALSTOM, LANCO, GMR, WARTSILA, STERLITE, ADHUNIK, CEGAS-EGYPT, TNPL",
      },
      offlineValveTesting: {
        procedureText:
          "باور تك هي منشأة متكاملة لإصلاح الصمامات. نمتلك القدرة على إصلاح أي نوع من الصمامات، من صمامات الأمان إلى صمامات التحكم وصمامات البوابة وحتى الصمامات الفراشية الكبيرة. لدينا فنيون مدرَّبون من قِبل المصنع ونعمل بتعاون وثيق مع العديد من مصنّعي الصمامات والمشغلات.",
      },
      allTypesValve: {
        workshopFacility: "منشأة الورشة",
        workshopText:
          "باور تك هي منشأة متكاملة لإصلاح الصمامات. نمتلك القدرة على إصلاح أي نوع من الصمامات، من صمامات الأمان إلى صمامات التحكم وصمامات البوابة وحتى الصمامات الفراشية الكبيرة. لدينا فنيون مدرَّبون من قِبل المصنع ونعمل بتعاون وثيق مع العديد من مصنّعي الصمامات والمشغلات.",
        portableMachinesHeading: "أجهزة محمولة لخدمة الصمامات",
        typeOfValveServicesHeading: "أنواع خدمات الصمامات",
        keyClientsGrid: [
          "إنرفليكس", "شركة الخليج للصناعات البتروكيماوية (GPIC)", "شركة الدور للطاقة والصيانة ذ.م.م",
          "صناعات الأحمدي ش.م.ب", "إنجي ستومو", "بيبسيكو",
        ],
        whatItIsText:
          "خدمة شاملة ومتعددة التخصصات لصيانة الصمامات وإصلاحها ومعايرتها واختبارها، تغطي جميع أنواع الصمامات والمشغلات الصناعية، ونقدمها من خلال ورشتنا المجهزة بالكامل وفرق التدخل الميداني العاملة في المملكة العربية السعودية ودول مجلس التعاون الخليجي.",
        whatWeDoList: [
          "إجراء فحص تفصيلي وتفكيك وتشخيص للأعطال وتقارير حالة لجميع أنواع الصمامات، بما في ذلك صمامات التفريغ الآمن والبوابة والكروية والفراشية وعدم الرجوع والتحكم",
          "تنفيذ إصلاحات دقيقة واستبدال مكونات مثل المقاعد والسيقان والحشوات وأختام الجسم والتجهيزات الداخلية باستخدام مواد بمواصفات المصنّع الأصلي أو ما يعادلها",
          "تنفيذ اختبار صمامات الأمان أثناء التشغيل باستخدام أنظمة AccuTEST وTrevi — للتحقق من دقة نقطة الضبط على الأنظمة المضغوطة والعاملة دون توقف العملية",
          "إجراء اختبارات المعايرة والاعتماد خارج الخدمة وفقًا للمعايير المعتمدة مثل API وASME ومواصفات العميل",
          "خدمة وإعادة تأهيل المشغلات الكهربائية والهوائية والهيدروليكية على جميع منصات المصنّعين الرئيسيين",
          "نشر فرق خدمة صمامات ميدانية للتدخل على الأنظمة العاملة، مما يقلل من فترات توقف المحطة ويلغي الحاجة لإزالة المعدات",
        ],
        whosItForText:
          "محطات توليد الطاقة، ومصافي النفط والغاز، ومنشآت المعالجة البتروكيماوية، ومحطات تحلية مياه البحر، وهيئات المياه، وأي منشأة صناعية تشكل فيها الصمامات والمشغلات عناصر أساسية للتحكم في العمليات والسلامة وأنظمة العزل.",
        whyItMattersText:
          "تُعد الصمامات الصناعية من أهم المكونات المرتبطة بالسلامة في أي منشأة، فهي مسؤولة مباشرة عن احتواء العمليات وحماية الضغط والعزل في حالات الطوارئ. وإذا فشل صمام في الفتح أو الإغلاق أو الرفع عند نقطة الضبط الصحيحة، فقد يتسبب ذلك في حادثة سلامة كبرى أو حادثة بيئية أو توقف مكلف غير مخطط له. تضمن الصيانة والمعايرة المنتظمة والمهنية أداء كل صمام في المنشأة كما هو مصمم بالضبط، مما يحمي الموظفين وسلامة المنشأة والامتثال التنظيمي واستمرارية التشغيل.",
      },
      onlineSealLeaking: {
        heading1: "باور تك – الابتكار والمشاركة الفعّالة",
        intro1:
          "تتخصص باور تك في تقليل فترات توقف الأصول من خلال تقديم خدمات مبتكرة لإصلاح التسريب أثناء التشغيل. نقدم خدماتنا حاليًا لقطاعي الطاقة والنفط والغاز. ويلبي دعمنا الهندسي الواسع، وخبرتنا الدولية الممتدة في إصلاح التسريب، وسجلنا الخالي من الحوادث بنسبة 100%، الاحتياجات الخاصة لكل عميل.",
        partnerPre:
          "يسرّنا أن نكون قد تشاركنا مع Sylmasta UK، الرائدة عالميًا في تقديم حلول إصلاح التسريب أثناء التشغيل، لتقديم خدمات إصلاح التسريب المبتكرة القائمة على البوليمر في الهند. نحن الموزع الوحيد لمنتجات إصلاح التسريب من",
        partnerPost:
          "وبذلك تُعد باور تك شركة إصلاح التسريب المفضلة. يُعد \"الإصلاح أثناء التشغيل\" القائم على البوليمر ابتكارًا ذا فائدة كبيرة للصناعة. يمكن إصلاح أنواع متعددة من التسريبات في مختلف الأنظمة في الموقع بطريقة آمنة وفعالة وغير مدمرة واقتصادية، دون عزل ودون فقدان في الإنتاج، مما يقلل من مستويات الضوضاء والانبعاثات وتلف التآكل، ويحسّن سلامة المنشأة مع الحفاظ على سلامة المعدات.",
        repairExamplesHeading: "أمثلة على الإصلاحات",
        repairExamplesGrid: [
          "تسريب حشوة الصمام", "تسريبات جسم الصمام", "تسريبات غطاء الصمام", "تسريبات المبادل الحراري",
          "إصلاحات وعاء الضغط", "إصلاحات مفصل التمدد", "إصلاحات تسريب توصيلات الفلانجات",
          "إصلاحات تسريب خطوط الأنابيب", "إصلاحات الأنابيب الصاعدة", "تسريبات حشوة الصمام", "طي الخطوط",
          "الإصلاحات المركبة", "أنظمة الدعم القوي",
        ],
        advantagesHeading: "المزايا",
        advantagesList: [
          "توفير ملايين من تكاليف التوقف التشغيلي، حيث تتم إصلاح التسريبات بينما تظل منشآتك قيد التشغيل",
          "منتجات معتمدة الجودة",
          "تقليل فقدان الإنتاج",
          "توفير كبير في الطاقة",
          "تقليل الانبعاثات الضارة في الغلاف الجوي",
          "تقليل التلوث الضوضائي",
          "توفير بيئة عمل أكثر أمانًا",
          "منع التسربات والتلوث",
        ],
      },
      hotTapping: {
        heading1: "متى يُحدث التفريع الساخن الفرق: تقليل التعطيل وزيادة الكفاءة",
        p1:
          "في عالم إدارة خطوط الأنابيب، تُعد الكفاءة وتقليل التعطيل أمرين أساسيين. وهنا يأتي دور التفريع الساخن، وهي تقنية متخصصة تتيح لك التوصيل بخطوط الأنابيب القائمة دون مقاطعة التدفق. يستعرض هذا المقال مزايا التفريع الساخن والحالات التي يبرز فيها.",
        bold1: "استمرارية العمليات:",
        p2:
          "تخيّل أنك تحتاج إلى ترقية نظام خط الأنابيب. تقليديًا، كان هذا يعني إيقاف العملية بالكامل، مما يؤدي إلى فقدان الإنتاج واستياء العملاء وخسائر مالية كبيرة. وهنا يأتي التفريع الساخن، الذي يتيح لك إضافة فروع جديدة أو عزل أقسام للصيانة بسلاسة بينما يظل خط الأنابيب نشطًا. الأمر يشبه إجراء عملية جراحية على محرك يعمل - إنجاز هندسي بارع.",
        bold2: "فوائد السلامة والبيئة:",
        p3:
          "إلى جانب تجنب التوقف المكلف، يعطي التفريع الساخن الأولوية للسلامة والمسؤولية البيئية. فمن خلال إلغاء الحاجة إلى تفريغ الضغط، تقل المخاطر المرتبطة بالتعامل مع الأنظمة عالية الضغط بشكل كبير. كما يقلل التفريع الساخن من فقدان المنتج ويمنع انبعاثات الغازات الضارة، مما يجعله خيارًا مستدامًا لعملك وللبيئة.",
        bold3: "كفاءة فعالة من حيث التكلفة:",
        p4:
          "لنتحدث بالأرقام. من خلال إلغاء الحاجة إلى فترات التوقف الطويلة وإجراءات إعادة اللحام المعقدة، يوفر التفريع الساخن وفورات ملموسة في التكلفة. فالتخطيط الأقل، والحاجة المخفضة للكوادر، وأوقات إنجاز المشاريع الأسرع، كل ذلك يؤدي إلى حل أكثر كفاءة وفائدة مالية.",
        heading2: "هل التفريع الساخن هو الحل دائمًا؟",
        p5:
          "على الرغم من المزايا الرائعة للتفريع الساخن، من المهم الإقرار بأنه ليس حلاً يناسب جميع الحالات. تتطلب هذه العملية المعقدة خبرة واسعة ومعدات متخصصة. لذلك، من الضروري تقييم احتياجاتك الخاصة بعناية والنظر في طرق بديلة قبل اتخاذ القرار. يزدهر التفريع الساخن عندما:",
        list1: [
          "يكون إيقاف خط الأنابيب غير عملي أو مكلفًا ماليًا.",
          "يكون تقليل التوقف والحفاظ على استمرارية التشغيل أولوية قصوى.",
          "تكون اعتبارات السلامة والبيئة ذات أولوية عالية.",
        ],
        heading3: "الخلاصة",
        p6:
          "التفريع الساخن أكثر من مجرد تقنية متطورة؛ فهو نقطة تحول في عالم إدارة خطوط الأنابيب. من خلال إعطاء الأولوية للكفاءة والسلامة والاستدامة، يوفر ميزة واضحة لصيانة وتحديث نظامك بأقل قدر من التعطيل. وإذا كنت تبحث عن طريقة للحفاظ على استمرارية عملياتك مع تحسين شبكة خطوط الأنابيب، فقد يكون التفريع الساخن هو الحل الذي تبحث عنه",
        whatItIsText:
          "خدمة هندسية متخصصة للغاية تتيح إجراء توصيلات فرعية جديدة، وتركيبات تحويل، وإدخال صمامات، وتعديلات على خطوط الأنابيب بأمان على خطوط أنابيب مضغوطة وتعمل بكامل طاقتها، دون أي توقف في التدفق أو الإنتاج أو عمليات المنشأة.",
        whatWeDoList: [
          "إجراء تحليل هندسي تفصيلي لظروف تشغيل خط الأنابيب، ومواصفات المواد، وتصنيفات الضغط، وخصائص السوائل قبل التنفيذ",
          "تجهيز معدات التفريع الساخن المعتمدة وفنيين متخصصين مدرَّبين ومؤهلين بالكامل في إجراءات التدخل على الأنظمة العاملة",
          "تنفيذ عمليات الحفر والتفريع المتحكم بها على خطوط الأنابيب المضغوطة بالتوافق الكامل مع معايير السلامة الصناعية",
          "إدخال صمامات بوابة من نوع S، أو توصيلات سرجية، أو مجموعات تحويل بينما يظل خط الأنابيب في الخدمة الكاملة",
          "إنجاز اختبار الضغط بعد العمل، والتحقق من عدم وجود تسريب، وإصدار وثائق الإنجاز والاعتماد الكاملة",
        ],
        whosItForText:
          "مشغلو النفط والغاز، ومنشآت توليد الطاقة، وهيئات المياه، والمصانع البتروكيماوية، ومشغلو خطوط الأنابيب الذين يحتاجون إلى تعديلات على الشبكة أو نقاط عزل طارئة أو توسعات في النظام دون التأثير التشغيلي والمالي لتوقف مخطط له.",
        whyItMattersText:
          "يترتب على إيقاف خط أنابيب أو نظام عملية مضغوط لإجراء تعديلات تكلفة هائلة، تشمل فقدان الإنتاج وتأخير الإيرادات وإجراءات إعادة التشغيل المعقدة. يلغي التفريع الساخن هذه التكلفة بالكامل. وعند تنفيذه من قبل متخصصين معتمدين ذوي خبرة، يكون حلاً آمنًا ومثبتًا ومتوافقًا مع المعايير، يحقق التعديل المطلوب مع الحفاظ على استمرارية التشغيل الكاملة وحماية الإيرادات.",
      },
      heatExchanger: {
        heading1: "صيانة المبادلات الحرارية",
        list1: [
          "تُعد المبادلات الحرارية معدات نقل حراري مهمة في قطاع الطاقة والصناعة.",
          "يُعد الأداء الخالي من الأعطال للمبادل الحراري أمرًا بالغ الأهمية لتشغيل المحطة وموثوقيتها.",
          "تقدم PTD خدمات متكاملة من البداية إلى النهاية تشمل إعادة تمديد الأنابيب وإصلاح أنابيب المبادل الحراري وفقًا لاحتياجات العميل.",
          "يشمل نطاق الخدمة التفكيك الكامل، والفحص، والتنظيف اليدوي، والتنظيف بالضخ المائي، والاختبار المائي للمبادل الحراري.",
          "إصلاح الأنابيب المتسربة وإعادة التجميع النهائي.",
          "الاختبار والتسليم إلى موقع العميل.",
        ],
        tubeExtractionHeading: "استخراج الأنابيب",
        tubeExtractionText:
          "تُزال الأنابيب القديمة في حال وجود أي تلف مع نهايات الأنبوب. وتُصلح أي تشققات طفيفة في صفيحة الأنابيب وفقًا لمواصفات معيار ASME.",
        safelyTubeTransportHeading: "نقل الأنابيب بأمان",
        safelyTubeTransportText: "اتبعنا الإجراءات القياسية وقمنا بتنفيذ نقل الأنابيب.",
        bundleCleaningHeading: "تنظيف الحزمة",
        bundleCleaningText: "يتم تنظيف حزمة الأنابيب وإزالة الرواسب بطريقة كافية.",
        list2: [
          "تنفَّذ أعمال إصلاح غلاف السخّان وفقًا للإجراءات القياسية (معيار ASME)",
          "إدخال الأنابيب بالطريقة الصحيحة.",
        ],
        newTubesHeading: "يتم تركيب أنابيب جديدة (مصنّعة لتلبية المواصفات أو تجاوزها)",
        list3: ["استبدال الصفائح الحاجزة.", "الاختبار المائي للمبادل الحراري"],
        finalText: "كما نقوم بتوريد المبادلات الحرارية وفقًا لمعيار ASME Sec-8، ونتخصص في تصنيع غلاف السخّان.",
        whatItIsText:
          "خدمة متكاملة للتوريد والتركيب والفحص والصيانة للمبادلات الحرارية الصناعية، وهي المعدات الحيوية لإدارة الطاقة الحرارية في قلب عمليات توليد الطاقة ومعالجة المياه والصناعات التحويلية.",
        whatWeDoList: [
          "توريد مبادلات حرارية جديدة مصنّعة وفقًا لمعايير TEMA وASME ومواصفات العميل في جميع التكوينات، بما في ذلك الأنبوبية والصفائحية والمُبرَّدة بالهواء",
          "تنفيذ أعمال الصيانة المجدولة وصيانة التوقف الشامل، بما في ذلك التفكيك الكامل والتنظيف الميكانيكي وفحص الأنابيب وتقييم السلامة",
          "تنفيذ إعادة تمديد الأنابيب وإعادة تجميع الحزم وإعادة تأهيل وعاء الضغط لاستعادة الأداء التصميمي الأصلي",
          "إجراء اختبارات الضغط المائي والهوائي مع توفير الاعتماد والتوثيق الكامل",
          "تقديم استجابة عاجلة للأعطال، وتوريد قطع الغيار الحرجة، ودعم سريع لإعادة التشغيل",
        ],
        whosItForText:
          "محطات توليد الطاقة، ومصافي النفط والغاز، ومنشآت المعالجة البتروكيماوية، ومحطات تحلية مياه البحر، والعمليات الصناعية التي يكون فيها نقل الطاقة الحرارية جزءًا أساسيًا من عملية الإنتاج.",
        whyItMattersText:
          "تعمل المبادلات الحرارية تحت ظروف صعبة من الضغط والحرارة والمواد المسببة للتآكل. ويُعد التلوث والترسّب وتدهور الأنابيب وفشل الأختام أمورًا تدريجية، وإذا تُركت دون معالجة، تؤدي إلى فقدان الكفاءة والتوقف غير المخطط له وتأثير كبير على الإنتاج. يعمل برنامج صيانة استباقي ومهني على تعظيم كفاءة نقل الحرارة، وتمديد عمر خدمة المعدات، وحماية توفر المحطة بشكل عام.",
      },
      roMembrane: {
        intro:
          "تتخصص PTD في تقديم خدمات استبدال أغشية التناضح العكسي بشكل مهني، مع الحفاظ على أعلى معايير الجودة والأداء. وبخبرتنا الواسعة وحرصنا على التميز، نساعد عملاءنا على تحقيق التشغيل الأمثل وطول عمر أنظمتهم.",
        whatItIsText:
          "خدمة متخصصة لإعادة التأهيل واستعادة الأداء، صُمِّمت لترقية محطات معالجة المياه بالتناضح العكسي القديمة أو ذات الأداء المتدني إلى معايير التشغيل والكفاءة والامتثال التنظيمي الحالية، دون الحاجة إلى الإنفاق الرأسمالي لاستبدال المحطة بالكامل.",
        whatWeDoList: [
          "إجراء تدقيقات فنية شاملة وتقييمات أداء للبنية التحتية القائمة لمحطة التناضح العكسي",
          "تصميم حلول إعادة التأهيل التي تعالج تدهور الأغشية، وعدم الكفاءة الهيدروليكية، وتقادم أجهزة القياس، وفقد النظام",
          "استبدال وترقية المكونات الحيوية، بما في ذلك الأغشية، ومضخات الضغط العالي، وأوعية الضغط، وأجهزة استعادة الطاقة، وأنظمة التحكم SCADA",
          "تحسين عمليات المعالجة الأولية واللاحقة لتحسين جودة المياه ومعدلات الاستخلاص بشكل عام",
          "إعادة تشغيل الأنظمة المُرقّاة مع التحقق الكامل من الأداء والاختبار وتسليمها للمشغلين",
        ],
        whosItForText:
          "هيئات التحلية، ومشغلو معالجة المياه الصناعية، ومرافق الطاقة والمياه، والمنشآت البتروكيماوية التي تُشغّل بنية تحتية قائمة للتناضح العكسي لا تلبي معايير الجودة أو الكفاءة أو الموثوقية المطلوبة.",
        whyItMattersText:
          "تعاني محطات التناضح العكسي القديمة من فقدان تدريجي في الكفاءة، وزيادة في استهلاك الطاقة، وتراجع في جودة المياه، وكل ذلك يؤثر مباشرة على التكاليف التشغيلية والامتثال التنظيمي. تعيد إعادة التأهيل المهنية أداء المحطة، وتمدد عمرها التشغيلي لسنوات عديدة، وتحقق عائدًا ملموسًا على الاستثمار بجزء بسيط من تكلفة الاستبدال الكامل.",
      },
      roPlantEpc: {
        whatItIsText:
          "خدمة متكاملة للتصميم والتوريد والتشغيل لتصميم وتنفيذ محطات كبيرة لتحلية ومعالجة المياه بالتناضح العكسي بسعة إنتاجية تصل إلى 2 مليون غالون إمبراطوري يوميًا.",
        whatWeDoList: [
          "تطوير تصاميم هندسية تفصيلية للعمليات، ونماذج هيدروليكية، وهيكلة كاملة لنظام محطة التناضح العكسي",
          "توريد جميع معدات المحطة الرئيسية بما في ذلك الأغشية عالية الضغط، وأنظمة الضخ متعددة المراحل، ومرشحات المعالجة الأولية، وأنظمة الجرعات الكيميائية، ووحدات استعادة الطاقة، ولوحات التحكم الآلي",
          "إدارة كامل أعمال البناء المدني والتركيب الميكانيكي والتكامل الكهربائي وأعمال أجهزة القياس",
          "تشغيل واختبار أداء المحطة المكتملة مقابل معايير الإنتاج التعاقدية ومعدلات الاستخلاص وجودة المياه",
          "تقديم تدريب شامل للمشغلين، وتوثيق كامل للتنفيذ، وتسليم منظم لفرق تشغيل العميل",
        ],
        whosItForText:
          "هيئات الطاقة والمياه، ومجالس المياه البلدية، والمجمعات البتروكيماوية والصناعية، ومطورو العقارات والبنية التحتية الكبيرة الذين يحتاجون إلى إمداد موثوق وعالي السعة من المياه المحلاة أو المنقّاة.",
        whyItMattersText:
          "يُعد أمن المياه من أهم أولويات البنية التحتية في دول مجلس التعاون الخليجي ومنطقة الشرق الأوسط الأوسع. ويتطلب تنفيذ محطة تناضح عكسي كبيرة هندسة دقيقة ومعايير توريد صارمة وتنفيذ منضبط للمشروع. وتضمن قدرتنا في التصميم والتوريد والتشغيل حصول العملاء على محطة جاهزة للتشغيل بالكامل ومتوافقة مع المعايير، تُنفَّذ في الوقت المحدد وضمن الموازنة، وتُبنى لتعمل بموثوقية لعقود.",
      },
      solarPlantEpc: {
        whatItIsText:
          "خدمة متكاملة تسليم مفتاح للتصميم والتوريد والتشغيل لمحطات الطاقة الشمسية الكهروضوئية الصناعية وعلى مستوى المرافق العامة بسعة تصل إلى 5 ميجاوات، مدعومة ببرامج صيانة طويلة الأجل ومنظمة لحماية أداء الأصول وقيمة الاستثمار.",
        whatWeDoList: [
          "إجراء مسوحات موقعية تفصيلية، وتقييمات لشدة الإشعاع الشمسي، ودراسات جدوى فنية",
          "تقديم تصميم هندسي كامل يشمل تخطيط مصفوفة الألواح الشمسية، والمخططات أحادية الخط، وأنظمة التثبيت الهيكلية، والربط بالشبكة",
          "توريد وتوفير ألواح شمسية عالية الجودة، وعاكسات مركزية وسلسلية، وهياكل تثبيت، وكابلات تيار مستمر ومتردد، وأنظمة مراقبة",
          "إدارة كامل أعمال البناء الكهربائي والمدني والتركيب والتشغيل وفقًا للمعايير الدولية",
          "تقديم برامج صيانة وقائية وعلاجية منظمة، ومراقبة الأداء، وتقارير إنتاجية الطاقة طوال دورة التشغيل",
        ],
        whosItForText:
          "المنشآت الصناعية، والمباني التجارية والمؤسسية، ومشاريع البنية التحتية الحكومية، ومنتجو الطاقة المستقلون، والمرافق التي تسعى لتوليد طاقة نظيفة في الموقع، وتقليل الاعتماد على الشبكة، وتحقيق وفورات طويلة الأجل في تكاليف الطاقة.",
        whyItMattersText:
          "تتمتع المملكة العربية السعودية ودول مجلس التعاون الخليجي الأوسع بمستويات من أعلى معدلات الإشعاع الشمسي في العالم، مما يمثل فرصة استثنائية لتوليد طاقة متجددة فعالة من حيث التكلفة. يضمن مشروع التصميم والتوريد والتشغيل المنفَّذ بمهنية أعلى إنتاجية للطاقة، وامتثالًا كاملًا للشبكة، وعائدًا موثوقًا على الاستثمار، مع صيانة مستمرة تحافظ على أداء المحطة طوال عمرها التشغيلي.",
      },
      upvc: {
        whatItIsText:
          "خدمة متكاملة للتصنيع والتركيب توفر أنظمة أبواب ونوافذ دقيقة الهندسة من اليو بي في سي والألمنيوم للاستخدامات الصناعية والتجارية والسكنية في المملكة العربية السعودية ودول مجلس التعاون الخليجي.",
        whatWeDoList: [
          "تصميم وهندسة إطارات أبواب ونوافذ بمواصفات مخصصة تناسب المتطلبات الهيكلية والمعمارية",
          "تصنيع مقاطع عالية الجودة من اليو بي في سي والألمنيوم باستخدام آلات متطورة داخل ورشتنا المتخصصة",
          "توريد ودمج جميع الملحقات المرتبطة، وأنظمة التزجيج، والأختام المقاومة للعوامل الجوية، ومكونات التشطيب",
          "تنفيذ التركيب الموقعي بالتوافق الكامل مع معايير البناء وجداول مشاريع العملاء",
          "إجراء فحوصات جودة بعد التركيب، واختبارات وظيفية، وتوقيع تشغيل نهائي",
        ],
        whosItForText:
          "المجمعات الصناعية، والمشاريع التجارية، والمشاريع السكنية، والمقاولون الرئيسيون، ومطورو العقارات الذين يحتاجون إلى حلول تشطيب متينة وعالية الأداء تناسب ظروف مناخ الخليج الصعبة.",
        whyItMattersText:
          "توفر أنظمة اليو بي في سي والألمنيوم مقاومة استثنائية للتآكل والحرارة الشديدة والرمال والرطوبة، مع عزل حراري فائق، ومتطلبات صيانة أقل، وعمر خدمة أطول بكثير من البدائل التقليدية. يضمن اختيار الشريك المناسب للتصنيع والتركيب السلامة الهيكلية والتناسق الجمالي والأداء طويل الأجل في كل فتحة من مبنى المنشأة.",
      },
      technicalManpower: {
        whatItIsText:
          "خدمة إدارة كوادر مهنية توفر موظفين مؤهلين تقنيًا وممتثلين لمعايير الصحة والسلامة والبيئة، تم فرزهم بدقة، لقطاعات توليد الطاقة والنفط والغاز ومعالجة المياه، بترتيبات تعاقدية مرنة قصيرة وطويلة الأجل وترتيبات فترات التوقف.",
        whatWeDoList: [
          "استقطاب وتقييم فني ونشر متخصصين مؤهلين في التخصصات الميكانيكية والكهربائية وأجهزة القياس والمدنية والتشغيلية",
          "إدارة عملية التعبئة الكاملة، بما في ذلك التوثيق، واللياقة الطبية، ومعالجة التأشيرات، والتوجيه الموقعي، والتحقق من الامتثال للصحة والسلامة والبيئة",
          "توريد كوادر لدعم فترات التوقف المخطط لها للصيانة، وفترات التوقف الشاملة، والعمليات الطارئة، وعقود التشغيل والصيانة طويلة الأجل",
          "تقديم إدارة تعاقدية متخصصة، ومراقبة أداء، واستبدال سريع للكوادر لضمان تغطية موقعية مستمرة",
          "تقديم حلول قوى عاملة مصممة بدقة حسب نطاق مشروع العميل، والجدول الزمني، ومتطلبات الموازنة",
        ],
        whosItForText:
          "محطات الطاقة، ومصافي النفط، والمجمعات البتروكيماوية، ومحطات التحلية ومعالجة المياه، والمقاولون في مجال التصميم والتوريد والتشغيل الذين يحتاجون إلى وصول فوري لكوادر فنية مؤهلة دون التكاليف والوقت المرتبطين بالتوظيف المباشر.",
        whyItMattersText:
          "في قطاع الطاقة والمرافق، تعتمد استمرارية التشغيل كليًا على وجود الأشخاص المناسبين في الأدوار المناسبة في الوقت المناسب. يمكن للتأخير في تعبئة الكوادر الفنية المؤهلة أن يوقف الإنتاج، ويعرّض جداول المشاريع للخطر، ويخلق مخاطر سلامة كبيرة. توفر خدمة الكوادر لدينا للعملاء وصولاً سريعًا وموثوقًا إلى مجموعة كفاءات مثبتة، مما يقلل من مخاطر التوظيف، ويضبط التكاليف، ويضمن عدم ترك العمليات الحيوية دون كوادر كافية.",
      },
    },
  },
};
