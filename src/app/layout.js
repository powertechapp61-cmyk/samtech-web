import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import JsonLd from "./Components/JsonLd";
import { LanguageProvider } from "./context/LanguageContext";
import {
  SITE_URL,
  COMPANY,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  organizationJsonLd,
} from "@/lib/seo";
// Self-hosted fonts (replaces render-blocking Google Fonts @import in globals.scss)
import "@fontsource/marcellus/400.css";
import "@fontsource-variable/roboto/wght.css";
import "@fontsource-variable/roboto/wght-italic.css";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SAM Tech Saudi Arabia | Valve Testing, O&M & Manpower Services",
    template: "%s | SAM Tech Saudi Arabia",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name, url: SITE_URL }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  category: "Industrial Services",
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: COMPANY.name,
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    url: "/",
    title: "SAM Tech Saudi Arabia | Valve Testing, O&M & Manpower Services",
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAM Tech Saudi Arabia | Valve Testing, O&M & Manpower Services",
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  // After verifying the site in Google Search Console / Bing Webmaster Tools,
  // paste the verification codes here (or use the DNS method instead):
  // verification: { google: "XXXXXXXX", other: { "msvalidate.01": "XXXXXXXX" } },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11437b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <JsonLd data={organizationJsonLd()} />
        <LanguageProvider>
          <div className="pageWrapper">
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
