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
  },
};
