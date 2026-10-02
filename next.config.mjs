// Old service URLs → new keyword-rich URLs (keep in sync with SERVICES in src/lib/seo.js).
// Permanent (308) redirects pass existing Google rankings and backlinks to the new pages.
const LEGACY_SERVICE_URLS = {
  online_safety_testing: "online-safety-valve-testing",
  offline_valve_testing: "offline-valve-testing",
  alltype_valve_services: "industrial-valve-servicing",
  technical_manpower_supply_for_power_plant_refineries_and_water_plant: "technical-manpower-supply",
  online_seal_leaking: "online-leak-sealing",
  online_seal: "online-leak-sealing",
  hot_tapping: "hot-tapping",
  heat_exchanger: "heat-exchanger-maintenance",
  ro_plant_epc_contracts: "ro-plant-epc-contracts",
  solar_plant_epc: "solar-plant-epc",
  ro_membrane: "ro-plant-retrofitting",
  upvc_aluminiumdoors_windowsfabrication: "upvc-aluminium-doors-windows",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  async redirects() {
    return [
      ...Object.entries(LEGACY_SERVICE_URLS).map(([oldSlug, newSlug]) => ({
        source: `/service-page/${oldSlug}`,
        destination: `/services/${newSlug}`,
        permanent: true,
      })),
      // Old placeholder About page – the real About page is /company
      { source: "/about-us", destination: "/company", permanent: true },
    ];
  },
};

export default nextConfig;
