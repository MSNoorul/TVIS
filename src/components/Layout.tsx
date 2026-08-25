import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "./Header";
import { Footer } from "./Footer";

const SITE_URL = "https://tvis24.com";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#riyadh-office`,
      name: "TVIS Trading & Contracting",
      alternateName: "TVIS",
      url: SITE_URL,
      logo: `${SITE_URL}/og-image.png`,
      image: `${SITE_URL}/og-image.png`,
      description:
        "TVIS Trading & Contracting supplies high-performance pumps, control panels and complete pump systems with full installation and service across Saudi Arabia.",
      email: "sales-services@tvis24.com",
      telephone: "+966568262257",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Building No: 3688, Khurais Branch Rd, Al-Rawdah Dist",
        addressLocality: "Riyadh",
        postalCode: "13211",
        addressCountry: "SA",
      },
      areaServed: "Saudi Arabia",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#buraidah-office`,
      name: "TVIS Trading & Contracting - Buraidah Branch",
      alternateName: "TVIS",
      url: SITE_URL,
      logo: `${SITE_URL}/og-image.png`,
      image: `${SITE_URL}/og-image.png`,
      description:
        "TVIS Trading & Contracting supplies high-performance pumps, control panels and complete pump systems with full installation and service across Saudi Arabia.",
      email: "sales-services@tvis24.com",
      telephone: "+966568262257",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Building No: 7409, Omar Ibn Al Khattab Branch, Al Iskan Dist",
        addressLocality: "Buraidah",
        postalCode: "52384",
        addressCountry: "SA",
      },
      areaServed: "Saudi Arabia",
    },
  ],
};

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
    </Helmet>
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);
