// Central SEO configuration for samtechsa.com
// ---------------------------------------------------------------
// Every page's <title>, meta description, canonical URL, Open Graph
// tags and structured data (JSON-LD) are generated from this file.
// To change how a page appears in Google, edit it here.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://samtechsa.com").replace(/\/$/, "");

export const COMPANY = {
  name: "SAM Technical Service Contracting Est",
  shortName: "SAM Tech",
  alternateNames: ["SAM Tech", "STSC", "Sam Technical Service Contracting Est", "SAM Tech Saudi Arabia"],
  parent: "Power Tech Group of Companies",
  logo: "/assets/img/sam_logo.png",
  phone: "+966507745097",
  email: "samtech@powertechdevelopment.com",
  address: {
    streetAddress: "Building No. 9324, Mughaffal Ibn Sinan Street, Al Naseem District",
    addressLocality: "Rabigh",
    addressRegion: "Makkah Province",
    addressCountry: "SA",
  },
  geo: { latitude: 22.7743551, longitude: 39.0838564 },
};

export const DEFAULT_OG_IMAGE = {
  url: "/og/default.jpg",
  width: 1200,
  height: 630,
  alt: "SAM Technical Service Contracting Est – valve testing, O&M and technical manpower services in Saudi Arabia",
};

export const DEFAULT_DESCRIPTION =
  "ISO-certified contractor in Rabigh, Saudi Arabia: online & offline safety valve testing, valve servicing, leak sealing, hot tapping and technical manpower.";

export const DEFAULT_KEYWORDS = [
  "SAM Tech",
  "SAM Tech Saudi Arabia",
  "Sam Technical Service Contracting Est",
  "safety valve testing Saudi Arabia",
  "Trevi testing KSA",
  "valve servicing Saudi Arabia",
  "online leak sealing Saudi Arabia",
  "hot tapping Saudi Arabia",
  "technical manpower supply Saudi Arabia",
  "power plant maintenance Rabigh",
  "O&M services Saudi Arabia",
];

// ---------------------------------------------------------------
// Services. `id` is the internal content key used by the service page,
// `slug` is the public URL (/services/<slug>), `legacySlugs` are the
// old /service-page/<...> URLs that now 301-redirect here.
// ---------------------------------------------------------------
export const SERVICES = [
  {
    id: "online_safety_testing",
    slug: "online-safety-valve-testing",
    legacySlugs: ["online_safety_testing"],
    navKey: "header.nav.onlineSafetyValveTesting",
    title: "Online Safety Valve Testing (Trevi Type)",
    description:
      "Online (Trevi-type) safety valve set-pressure testing on live systems in Saudi Arabia – no shutdown, TUV SUD certified equipment and full test reports.",
    keywords: ["online safety valve testing", "Trevi testing", "Trevi test Saudi Arabia", "safety relief valve testing", "in-situ safety valve testing", "AccuTEST"],
    image: "/assets/img/treviType.webp",
    ogImage: "/og/online-safety-valve-testing.jpg",
  },
  {
    id: "offline_valve_testing",
    slug: "offline-valve-testing",
    legacySlugs: ["offline_valve_testing"],
    navKey: "header.nav.offlineValveTesting",
    title: "Offline Safety Valve Testing & Calibration",
    description:
      "Workshop bench testing, calibration and repair of safety, relief, control, gate and butterfly valves for plants across Saudi Arabia, with test certificates.",
    keywords: ["offline valve testing", "safety valve bench testing", "valve calibration Saudi Arabia", "PSV testing", "relief valve calibration"],
    image: "/assets/img/offline_valve_testing_detail.webp",
    ogImage: "/og/offline-valve-testing.jpg",
  },
  {
    id: "alltype_valve_services",
    slug: "industrial-valve-servicing",
    legacySlugs: ["alltype_valve_services"],
    navKey: "header.nav.allTypesValveServicing",
    title: "Industrial Valve Servicing & Repair",
    description:
      "Servicing, overhaul, repair and testing of all industrial valves and actuators – safety, gate, globe, ball, butterfly and control – on-site or in our workshop.",
    keywords: ["valve servicing Saudi Arabia", "valve repair", "valve overhaul", "actuator servicing", "control valve calibration", "in-situ valve servicing"],
    image: "/assets/img/allType_valveServicing_detail.webp",
    ogImage: "/og/industrial-valve-servicing.jpg",
  },
  {
    id: "technical_manpower_supply_for_power_plant_refineries_and_water_plant",
    slug: "technical-manpower-supply",
    legacySlugs: ["technical_manpower_supply_for_power_plant_refineries_and_water_plant"],
    navKey: "header.nav.technicalManpowerSupply",
    title: "Technical Manpower Supply & O&M Staffing",
    description:
      "Skilled, HSE-compliant engineers, technicians and operators for power plants, refineries and water plants in Saudi Arabia – shutdowns and long-term O&M.",
    keywords: ["technical manpower supply Saudi Arabia", "manpower supply power plant", "shutdown manpower", "O&M manpower", "refinery manpower supply"],
    image: "/assets/img/technical_manpower_provisioning_home.jpg",
    ogImage: "/og/technical-manpower-supply.jpg",
  },
  {
    id: "online_seal_leaking",
    slug: "online-leak-sealing",
    legacySlugs: ["online_seal_leaking", "online_seal"],
    navKey: "header.nav.onlineLeakSealing",
    title: "Online Leak Sealing Services",
    description:
      "On-line leak sealing of steam, gas, chemical and hydrocarbon leaks up to 700°C without shutdown – Sylmasta polymer and conventional injection methods.",
    keywords: ["online leak sealing", "leak sealing Saudi Arabia", "live leak repair", "Sylmasta", "steam leak sealing", "flange leak repair"],
    image: "/assets/img/sealLeaking_detail.webp",
    ogImage: "/og/online-leak-sealing.jpg",
  },
  {
    id: "hot_tapping",
    slug: "hot-tapping",
    legacySlugs: ["hot_tapping"],
    navKey: "header.nav.hotTapping",
    title: "Hot Tapping & Live Gate Valve Insertion",
    description:
      "Hot tapping and S-type gate valve insertion on live, pressurised pipelines in Saudi Arabia – new branch connections and isolation points with zero shutdown.",
    keywords: ["hot tapping Saudi Arabia", "hot tapping services", "line stopping", "live valve insertion", "pipeline intervention"],
    image: "/assets/img/hot_tapping_detail.webp",
    ogImage: "/og/hot-tapping.jpg",
  },
  {
    id: "heat_exchanger",
    slug: "heat-exchanger-maintenance",
    legacySlugs: ["heat_exchanger"],
    navKey: "header.nav.heatExchanger",
    title: "Heat Exchanger Maintenance & Supply",
    description:
      "Heat exchanger maintenance, cleaning, re-tubing, hydro-testing and ASME/TEMA supply for power plants, refineries and desalination plants in Saudi Arabia.",
    keywords: ["heat exchanger maintenance", "heat exchanger retubing", "heat exchanger supply Saudi Arabia", "tube bundle cleaning", "hydro jetting"],
    image: "/assets/img/heatExchanger_detail.webp",
    ogImage: "/og/heat-exchanger-maintenance.jpg",
  },
  {
    id: "ro_plant_epc_contracts",
    slug: "ro-plant-epc-contracts",
    legacySlugs: ["ro_plant_epc_contracts"],
    navKey: "header.nav.roPlantEpc",
    title: "RO Desalination Plant EPC Contracts",
    description:
      "Engineering, procurement and construction of reverse osmosis (RO) desalination and water treatment plants up to 2 MIGD for industrial and municipal clients.",
    keywords: ["RO plant EPC", "desalination plant contractor", "reverse osmosis plant Saudi Arabia", "water treatment plant EPC", "SWRO"],
    image: "/assets/img/ro_plant_epc_contracts_home.jpg",
    ogImage: "/og/ro-plant-epc-contracts.jpg",
  },
  {
    id: "solar_plant_epc",
    slug: "solar-plant-epc",
    legacySlugs: ["solar_plant_epc"],
    navKey: "header.nav.solarPlantEpc",
    title: "Solar Plant EPC up to 5 MW & Maintenance",
    description:
      "Turnkey solar PV plant EPC up to 5 MW – site survey, design, supply, installation, commissioning and long-term O&M for industrial and commercial sites.",
    keywords: ["solar EPC Saudi Arabia", "solar PV plant contractor", "solar plant maintenance", "5MW solar EPC"],
    image: "/assets/img/solar-plant_epc_home.jpeg",
    ogImage: "/og/solar-plant-epc.jpg",
  },
  {
    id: "ro_membrane",
    slug: "ro-plant-retrofitting",
    legacySlugs: ["ro_membrane"],
    navKey: "header.nav.roPlantsRetroFitting",
    title: "RO Plant Retrofit & Membrane Replacement",
    description:
      "Retrofit, upgrade and RO membrane replacement for ageing reverse osmosis plants – restore output, water quality and energy efficiency without a full rebuild.",
    keywords: ["RO plant retrofitting", "RO membrane replacement", "SWRO membrane replacement", "desalination plant upgrade"],
    image: "/assets/img/ro-plants-retro-fitting_home.jpg",
    ogImage: "/og/ro-plant-retrofitting.jpg",
  },
  {
    id: "upvc_aluminiumdoors_windowsfabrication",
    slug: "upvc-aluminium-doors-windows",
    legacySlugs: ["upvc_aluminiumdoors_windowsfabrication"],
    navKey: "header.nav.upvcDoorsWindows",
    title: "UPVC & Aluminium Doors and Windows",
    description:
      "Fabrication and installation of UPVC and aluminium doors and windows for industrial, commercial and residential buildings in Saudi Arabia and the GCC.",
    keywords: ["UPVC doors and windows", "aluminium windows fabrication", "UPVC fabrication Saudi Arabia", "aluminium doors installation"],
    image: "/assets/img/upvc_home.webp",
    ogImage: "/og/upvc-aluminium-doors-windows.jpg",
  },
];

export const serviceHref = (id) => {
  const s = SERVICES.find((x) => x.id === id);
  return s ? `/services/${s.slug}` : "/";
};

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);

// ---------------------------------------------------------------
// Static pages
// ---------------------------------------------------------------
export const PAGES = {
  home: {
    path: "/",
    title: "SAM Tech Saudi Arabia | Valve Testing, O&M & Manpower Services",
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
  },
  company: {
    path: "/company",
    name: "About Us",
    title: "About Us – ISO Certified Contractor in Rabigh",
    description:
      "SAM Technical Service Contracting Est (STSC): Rabigh-based, ISO 9001/45001/14001 certified engineering, O&M and manpower contractor of Power Tech Group.",
    keywords: ["about SAM Tech", "STSC Rabigh", "Power Tech Group Saudi Arabia", "ISO certified contractor Saudi Arabia"],
  },
  groupCompanies: {
    path: "/group-companies",
    name: "Group Companies",
    title: "Group Companies – Power Tech Group",
    description:
      "Power Tech Group companies across Saudi Arabia, Bahrain, UAE, Qatar and India – O&M, valve testing, EPC, training and manpower under one trusted group.",
    keywords: ["Power Tech Group", "Power Tech Development Bahrain", "Valve Tech Testing", "Q-Power Tech Qatar", "CPDTI Chennai"],
  },
  appreciations: {
    path: "/appreciations",
    name: "Appreciations",
    title: "Certificates & Client Appreciations",
    description:
      "Client appreciation letters (NOMAC, Mitsubishi, EWA, GPIC, ENGIE), ISO 9001/45001/14001 certificates, CR and VAT registration and EcoVadis Silver rating.",
    keywords: ["SAM Tech certificates", "ISO 9001 45001 14001", "NOMAC appreciation letter", "EcoVadis silver"],
  },
  brochures: {
    path: "/brochures",
    name: "Brochures",
    title: "Service Brochures & Company Profile",
    description:
      "Download SAM Tech brochures: mechanical and electrical maintenance, fabrication, valve testing, manpower supply, power plant O&M and pipeline intervention.",
    keywords: ["SAM Tech brochure", "valve testing brochure", "power plant O&M brochure", "company profile Saudi Arabia"],
  },
  photoGallery: {
    path: "/photo-gallery",
    name: "Photo Gallery",
    title: "Photo Gallery – Valve, Plant & O&M Projects",
    description:
      "Photos of our valve servicing, hot tapping, leak sealing, heat exchanger, turbine and manpower projects for NOMAC, ALBA, EWA, GE and other GCC clients.",
    keywords: ["valve servicing projects", "power plant maintenance photos", "SAM Tech projects"],
  },
  ourBranches: {
    path: "/our-branches",
    name: "Our Branches",
    title: "Our Branches – Saudi, Bahrain, UAE & India",
    description:
      "Offices, workshops and training centres supporting SAM Tech – Rabigh (Saudi Arabia), Bahrain, Ajman (UAE), Chennai and Dindigul (India).",
    keywords: ["SAM Tech Rabigh office", "valve workshop Bahrain", "Ajman workshop", "CPDTI Chennai"],
  },
  trainings: {
    path: "/trainings",
    name: "Trainings",
    title: "Technical & HSE Training Programmes",
    description:
      "Power plant operations, technical and HSE training that keeps our engineers and technicians qualified, certified and ready for site work.",
    keywords: ["power plant training", "HSE training", "O&M training", "CPDTI"],
  },
  careers: {
    path: "/careers",
    name: "Careers",
    title: "Careers – Engineering & Technical Jobs",
    description:
      "Build your career with SAM Technical Service Contracting Est – engineering, technician and O&M roles in power, oil & gas and water plants in Saudi Arabia.",
    keywords: ["technical jobs Saudi Arabia", "power plant jobs Rabigh", "valve technician jobs", "O&M jobs KSA"],
  },
  contactUs: {
    path: "/contact-us",
    name: "Contact Us",
    title: "Contact Us – Rabigh Office & Enquiries",
    description:
      "Contact SAM Tech in Rabigh, Saudi Arabia: +966 507745097, samtech@powertechdevelopment.com. Ask for a quote on valve testing, maintenance or manpower supply.",
    keywords: ["contact SAM Tech", "SAM Tech Rabigh phone", "valve testing quote Saudi Arabia"],
  },
};

// ---------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------
export const absoluteUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}` || SITE_URL;

/**
 * Build a complete Next.js metadata object for a page.
 * (Next merges metadata shallowly, so openGraph/twitter are rebuilt in full here.)
 */
export function buildMetadata({ title, description, path = "/", keywords = [], image, absoluteTitle = false, noindex = false }) {
  const og = image || DEFAULT_OG_IMAGE;
  const ogImages = [typeof og === "string" ? { url: og, width: 1200, height: 630, alt: title } : og];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      siteName: COMPANY.name,
      locale: "en_US",
      alternateLocale: ["ar_SA"],
      url: path,
      title: absoluteTitle ? title : `${title} | ${COMPANY.shortName} Saudi Arabia`,
      description,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} | ${COMPANY.shortName} Saudi Arabia`,
      description,
      images: ogImages.map((i) => i.url),
    },
  };
}

// ---------------------------------------------------------------
// JSON-LD builders
// ---------------------------------------------------------------
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": ORG_ID,
        name: COMPANY.name,
        alternateName: COMPANY.alternateNames,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: absoluteUrl(COMPANY.logo), width: 1202, height: 631 },
        image: absoluteUrl(DEFAULT_OG_IMAGE.url),
        description:
          "Saudi Arabia-based technical services and contracting company in Rabigh providing safety valve testing, valve servicing, online leak sealing, hot tapping, heat exchanger maintenance, O&M and technical manpower to power, oil & gas, petrochemical and water treatment plants.",
        telephone: COMPANY.phone,
        email: COMPANY.email,
        address: { "@type": "PostalAddress", ...COMPANY.address },
        geo: { "@type": "GeoCoordinates", ...COMPANY.geo },
        hasMap: `https://www.google.com/maps?q=${COMPANY.geo.latitude},${COMPANY.geo.longitude}`,
        areaServed: [
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Place", name: "GCC" },
        ],
        parentOrganization: { "@type": "Organization", name: COMPANY.parent },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: COMPANY.phone,
            email: COMPANY.email,
            contactType: "sales",
            areaServed: "SA",
            availableLanguage: ["English", "Arabic"],
          },
        ],
        knowsAbout: SERVICES.map((s) => s.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Industrial & power plant services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, url: absoluteUrl(`/services/${s.slug}`) },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: COMPANY.name,
        alternateName: COMPANY.shortName,
        publisher: { "@id": ORG_ID },
        inLanguage: ["en", "ar"],
      },
    ],
  };
}

/** crumbs: [{ name, path }] – Home is added automatically */
export function breadcrumbJsonLd(crumbs) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function serviceJsonLd(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
  };
}
