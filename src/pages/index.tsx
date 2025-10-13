import SEOHead from "@/components/SEOHead";
import Hero from "@/components/sections/Hero";
import Offers from "@/components/sections/Offers";
import Featured from "@/components/sections/Featured";
import Experience from "@/components/sections/Experience";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "LDPG - Land Development Property Group",
    description:
      "Premier land development and property group specializing in high-quality residential developments in South East London",
    url: "https://ldpg.co.uk",
    logo: "https://ldpg.co.uk/images/LOGO43.png",
    image: "https://ldpg.co.uk/images/main-home-1.jpg",
    telephone: "020 8853 3843",
    email: "info@ldpg.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "The Studio, 6 Horn Lane",
      addressLocality: "London",
      postalCode: "SE10 0RT",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "Place",
      name: "South East London",
    },
    serviceType: [
      "Land Development",
      "Property Development",
      "Residential Construction",
      "Commercial Property Development",
    ],
    foundingDate: "2013-07",
    founder: [
      {
        "@type": "Person",
        name: "Sudarshan Vij",
      },
      {
        "@type": "Person",
        name: "Navneet Vij",
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="LDPG - Premier Land Development & Property Group in South East London"
        description="LDPG specializes in high-quality residential developments, transforming derelict buildings and unused land into contemporary luxury homes and apartments in South East London."
        canonical="/"
        keywords="land development, property development, South East London, residential development, luxury homes, apartments, commercial properties, LDPG"
        structuredData={structuredData}
      />
      <div className="flex flex-col bg-[url('/images/what-we-offer-bg1.jpg')] bg-center">
        <Hero />
      </div>
      <div className="max-w-5xl mx-auto">
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-4xl text-center text-[var(--color-sub-green)] font-semibold mb-8">
            What we offer
          </h2>
          <Offers />
        </section>
      </div>
      <div className="max-w-5xl mx-auto">
        <section className=" mx-auto px-4 py-16">
          <h2 className="text-5xl font-semibold mb-8 text-[var(--color-sub-green)] font-[var(--font-overpass)] font-400">
            Featured Works
          </h2>
          <p className="text-[var(--color-sub-green)] mb-8 font-[var(--font-overpass)] font-light">
            Our portfolio includes a wide range of projects
          </p>
          <Featured />
        </section>
      </div>
      <Experience />
    </>
  );
}
