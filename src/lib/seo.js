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
    seoTitle: "Online Safety Valve Testing (Trevi) in Saudi Arabia | SAM Tech",
    description:
      "Online safety valve testing (Trevi) in Saudi Arabia – verify PSV and PRV set pressure on live boilers and steam lines with no shutdown. TÜV SÜD certified kit.",
    keywords: [
      "online safety valve testing Saudi Arabia", "Trevi testing Saudi Arabia", "Trevi test KSA",
      "in-situ safety valve testing", "online PSV testing", "safety valve testing without shutdown",
      "boiler safety valve testing", "steam safety valve set pressure testing", "pressure relief valve testing",
      "safety valve testing Jubail", "safety valve testing Rabigh",
    ],
    image: "/assets/img/treviType.webp",
    ogImage: "/og/online-safety-valve-testing.jpg",
  },
  {
    id: "offline_valve_testing",
    slug: "offline-valve-testing",
    legacySlugs: ["offline_valve_testing"],
    navKey: "header.nav.offlineValveTesting",
    title: "Offline Safety Valve (PSV / PRV) Testing & Calibration",
    seoTitle: "Safety Valve Testing & Calibration in Saudi Arabia | SAM Tech",
    description:
      "Safety valve testing and calibration in Saudi Arabia: bench testing, repair and recertification of PSVs, PRVs and control valves to API and ASME.",
    keywords: [
      "PSV testing Saudi Arabia", "PRV calibration Saudi Arabia", "safety valve testing and calibration",
      "pressure relief valve testing", "safety valve recertification", "safety valve bench testing",
      "offline valve testing", "safety valve repair Saudi Arabia", "relief valve calibration Jubail",
    ],
    image: "/assets/img/offline_valve_testing_detail.webp",
    ogImage: "/og/offline-valve-testing.jpg",
  },
  {
    id: "alltype_valve_services",
    slug: "industrial-valve-servicing",
    legacySlugs: ["alltype_valve_services"],
    navKey: "header.nav.allTypesValveServicing",
    title: "Industrial Valve Repair & Overhauling",
    seoTitle: "Industrial Valve Repair & Overhauling in Saudi Arabia | SAM Tech",
    description:
      "Industrial valve repair and overhauling in Saudi Arabia – gate, globe, ball, butterfly, control and safety valves and actuators, on site or in our workshop.",
    keywords: [
      "valve repair Saudi Arabia", "valve overhauling services", "industrial valve maintenance",
      "valve servicing Saudi Arabia", "control valve repair and calibration", "actuator servicing",
      "in-situ valve repair", "valve maintenance company KSA", "valve repair Rabigh", "valve repair Yanbu",
    ],
    image: "/assets/img/allType_valveServicing_detail.webp",
    ogImage: "/og/industrial-valve-servicing.jpg",
  },
  {
    id: "technical_manpower_supply_for_power_plant_refineries_and_water_plant",
    slug: "technical-manpower-supply",
    legacySlugs: ["technical_manpower_supply_for_power_plant_refineries_and_water_plant"],
    navKey: "header.nav.technicalManpowerSupply",
    title: "Technical Manpower Supply",
    seoTitle: "Technical Manpower Supply Company in Saudi Arabia | SAM Tech",
    description:
      "Technical manpower supply in Saudi Arabia for power plants, refineries and water plants – skilled mechanical, electrical and instrument staff for O&M.",
    keywords: [
      "technical manpower supply Saudi Arabia", "manpower supply company Saudi Arabia",
      "shutdown manpower supply", "turnaround manpower Saudi Arabia", "power plant manpower supply",
      "O&M manpower", "skilled manpower for refineries", "instrumentation technicians supply",
      "manpower supply Rabigh", "manpower supply Jubail",
    ],
    image: "/assets/img/technical-manpower-supply-saudi-arabia.webp",
    ogImage: "/og/technical-manpower-supply.jpg",
  },
  {
    id: "online_seal_leaking",
    slug: "online-leak-sealing",
    legacySlugs: ["online_seal_leaking", "online_seal"],
    navKey: "header.nav.onlineLeakSealing",
    title: "Online Leak Sealing Services",
    seoTitle: "Online Leak Sealing Services in Saudi Arabia | SAM Tech",
    description:
      "Online leak sealing in Saudi Arabia: live repair of steam, gas, oil and chemical leaks on flanges, valves and pipes up to 700°C, with no shutdown.",
    keywords: [
      "online leak sealing Saudi Arabia", "leak sealing company Saudi Arabia", "live leak repair",
      "steam leak sealing", "flange leak sealing", "valve gland leak sealing", "leak sealing clamp",
      "injection leak sealing", "Sylmasta Saudi Arabia", "pipeline leak repair without shutdown",
    ],
    image: "/assets/img/online-leak-sealing-saudi-arabia.webp",
    ogImage: "/og/online-leak-sealing.jpg",
  },
  {
    id: "hot_tapping",
    slug: "hot-tapping",
    legacySlugs: ["hot_tapping"],
    navKey: "header.nav.hotTapping",
    title: "Hot Tapping & Live Gate Valve Insertion",
    seoTitle: "Hot Tapping Services in Saudi Arabia | SAM Tech",
    description:
      "Hot tapping services in Saudi Arabia: new branch connections, bypasses and S-type gate valve insertion on live, pressurised pipelines with zero shutdown.",
    keywords: [
      "hot tapping Saudi Arabia", "hot tapping services", "hot tap company KSA", "pressure tapping",
      "live gate valve insertion", "S-type gate valve insertion", "pipeline intervention Saudi Arabia",
      "branch connection on live pipeline", "hot tapping Jubail", "hot tapping Dammam",
    ],
    image: "/assets/img/hot-tapping-services-saudi-arabia.webp",
    ogImage: "/og/hot-tapping.jpg",
  },
  {
    id: "heat_exchanger",
    slug: "heat-exchanger-maintenance",
    legacySlugs: ["heat_exchanger"],
    navKey: "header.nav.heatExchanger",
    title: "Heat Exchanger Maintenance, Retubing & Supply",
    seoTitle: "Heat Exchanger Maintenance & Retubing in Saudi Arabia | SAM Tech",
    description:
      "Heat exchanger maintenance in Saudi Arabia: tube bundle cleaning, hydro jetting, retubing, hydro testing and repair, plus ASME and TEMA heat exchanger supply.",
    keywords: [
      "heat exchanger maintenance Saudi Arabia", "heat exchanger retubing", "heat exchanger repair",
      "tube bundle cleaning", "hydro jetting", "heat exchanger hydro test", "shell and tube heat exchanger",
      "heat exchanger supply Saudi Arabia", "ASME heat exchanger fabrication", "heat exchanger retubing Jubail",
    ],
    image: "/assets/img/heat-exchanger-maintenance-saudi-arabia.webp",
    ogImage: "/og/heat-exchanger-maintenance.jpg",
  },
  {
    id: "ro_plant_epc_contracts",
    slug: "ro-plant-epc-contracts",
    legacySlugs: ["ro_plant_epc_contracts"],
    navKey: "header.nav.roPlantEpc",
    title: "RO Desalination Plant EPC Contracts",
    seoTitle: "RO Desalination Plant EPC Contractor in Saudi Arabia | SAM Tech",
    description:
      "RO plant EPC contractor in Saudi Arabia: design, supply, construction and commissioning of reverse osmosis desalination plants up to 2 MIGD.",
    keywords: [
      "RO plant EPC contractor Saudi Arabia", "desalination plant contractor", "reverse osmosis plant Saudi Arabia",
      "seawater desalination plant", "SWRO plant", "water treatment plant EPC", "RO plant manufacturer KSA",
      "2 MIGD RO plant",
    ],
    image: "/assets/img/ro-desalination-plant-epc-saudi-arabia.webp",
    ogImage: "/og/ro-plant-epc-contracts.jpg",
  },
  {
    id: "solar_plant_epc",
    slug: "solar-plant-epc",
    legacySlugs: ["solar_plant_epc"],
    navKey: "header.nav.solarPlantEpc",
    title: "Solar PV Plant EPC up to 5 MW & Solar O&M",
    seoTitle: "Solar PV Plant EPC up to 5 MW in Saudi Arabia | SAM Tech",
    description:
      "Solar EPC company in Saudi Arabia: turnkey design, supply, installation and commissioning of solar PV plants up to 5 MW, plus solar O&M and monitoring.",
    keywords: [
      "solar EPC company Saudi Arabia", "solar PV plant installation", "solar power plant EPC",
      "solar O&M Saudi Arabia", "solar plant maintenance", "commercial solar Saudi Arabia",
      "industrial solar PV", "5 MW solar plant",
    ],
    image: "/assets/img/solar-pv-plant-epc-saudi-arabia.webp",
    ogImage: "/og/solar-plant-epc.jpg",
  },
  {
    id: "ro_membrane",
    slug: "ro-plant-retrofitting",
    legacySlugs: ["ro_membrane"],
    navKey: "header.nav.roPlantsRetroFitting",
    title: "RO Plant Retrofit & Membrane Replacement",
    seoTitle: "RO Membrane Replacement & Plant Retrofit in KSA | SAM Tech",
    description:
      "RO membrane replacement and RO plant retrofitting in Saudi Arabia – restore the output, water quality and efficiency of ageing SWRO and RO plants.",
    keywords: [
      "RO membrane replacement Saudi Arabia", "SWRO membrane replacement", "RO plant retrofitting",
      "RO plant refurbishment", "desalination plant upgrade", "RO plant audit",
      "high pressure pump replacement RO", "energy recovery device replacement",
    ],
    image: "/assets/img/ro-plants-retro-fitting_home.jpg",
    ogImage: "/og/ro-plant-retrofitting.jpg",
  },
  {
    id: "upvc_aluminiumdoors_windowsfabrication",
    slug: "upvc-aluminium-doors-windows",
    legacySlugs: ["upvc_aluminiumdoors_windowsfabrication"],
    navKey: "header.nav.upvcDoorsWindows",
    title: "UPVC & Aluminium Doors and Windows",
    seoTitle: "UPVC & Aluminium Doors and Windows in Saudi Arabia | SAM Tech",
    description:
      "UPVC and aluminium doors and windows in Saudi Arabia – design, fabrication and installation for industrial, commercial and residential buildings.",
    keywords: [
      "UPVC windows Saudi Arabia", "UPVC doors Saudi Arabia", "aluminium windows and doors",
      "aluminium fabrication company Saudi Arabia", "UPVC fabrication", "window installation Saudi Arabia",
      "UPVC windows Rabigh", "aluminium doors Jeddah",
    ],
    image: "/assets/img/upvc-aluminium-doors-windows-saudi-arabia.webp",
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
  services: {
    path: "/services",
    name: "Services",
    title: "Plant Maintenance & Valve Services in Saudi Arabia | SAM Tech",
    description:
      "SAM Tech services in Saudi Arabia: safety valve testing, valve repair, leak sealing, hot tapping, heat exchanger maintenance, manpower, RO and solar EPC.",
    keywords: ["industrial maintenance services Saudi Arabia", "valve services Saudi Arabia", "power plant services Saudi Arabia", "plant maintenance contractor KSA"],
  },
  videoGallery: {
    path: "/video-gallery",
    name: "Video Gallery",
    title: "Video Gallery – AccuTEST Valve Testing",
    description:
      "Watch AccuTEST online safety valve testing in action – the Trevi-type system SAM Tech uses to verify safety valve set pressure without shutdown.",
    keywords: ["AccuTEST video", "online safety valve testing video", "Trevi test video"],
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

export function serviceJsonLd(service, cities = []) {
  const url = absoluteUrl(`/services/${service.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    serviceType: service.title,
    alternateName: service.keywords.slice(0, 4),
    description: service.description,
    url,
    image: absoluteUrl(service.image),
    provider: { "@id": ORG_ID },
    category: "Industrial maintenance and technical services",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Power plants, refineries, petrochemical plants and water treatment plants",
    },
    areaServed: [
      { "@type": "Country", name: "Saudi Arabia" },
      ...cities.map((c) => ({ "@type": "City", name: c, containedInPlace: { "@type": "Country", name: "Saudi Arabia" } })),
    ],
  };
}

/** faqs: [{ q, a }] – the same questions shown on the page */
export function faqJsonLd(faqs, pageUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function servicesHubJsonLd(intro) {
  const url = absoluteUrl("/services");
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#page`,
    url,
    name: PAGES.services.title,
    description: intro,
    about: { "@id": ORG_ID },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: SERVICES.map((sv, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: sv.title,
        url: absoluteUrl(`/services/${sv.slug}`),
      })),
    },
  };
}
