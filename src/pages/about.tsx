import TitleBanner from "@/components/banners/TitleBanner";
import PartnersBanner from "@/components/banners/PartnersBanner";
import SEOHead from "@/components/SEOHead";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "RealEstateAgent",
      name: "LDPG - Land Development Property Group",
      foundingDate: "2013-07",
      description:
        "Founded in July 2013 by Sudarshan and Navneet Vij, LDPG unites the resources of Mulberry Building Developers and Wyberton Homes Limited, focusing on high-quality residential development in South East London.",
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
      areaServed: {
        "@type": "Place",
        name: "South East London",
      },
      serviceType: [
        "High quality residential development",
        "Derelict building renovation",
        "Land development",
        "Contemporary luxury homes",
        "Apartment development",
        "Commercial properties",
      ],
    },
  };

  return (
    <>
      <SEOHead
        title="About LDPG - 30+ Years of Excellence in Property Development"
        description="Founded in 2013 by Sudarshan and Navneet Vij, LDPG has over 30 years of industry experience, specializing in transforming derelict buildings into luxury homes in South East London."
        canonical="/about"
        keywords="LDPG history, property developers London, Sudarshan Vij, Navneet Vij, Mulberry Building Developers, Wyberton Homes, South East London development"
        ogImage="/images/langton-way.jpg"
        structuredData={structuredData}
      />
      <TitleBanner title="About Us" backgroundImage="/images/BannerImage.jpg" />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="relative">
            <Image
              src="/images/langton-way.jpg"
              alt="LDPG Langton Way development project - modern residential building in South East London"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>

          {/* Text Content Section */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              LDPG has a strong reputation for building quality new homes. Our
              construction team follows the high standards we set, and we’re
              proud of the care and craftsmanship that go into every project.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              LDPG specialises in luxury residential apartments, creating
              comfortable and contemporary homes. With a skilled workforce
              committed to quality, we deliver spaces that are both stylish and
              functional.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We partner with local architects to create projects that
              complement their surroundings while delivering innovative design
              and efficient use of space. Explore our portfolio for a closer
              look at our previous builds.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With more than 30 years in the industry, we’ve earned a reputation
              for dependable service and good workmanship. Our team has the
              skills and experience to take on a range of projects.
            </p>

            {/* Contact Section */}
            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-between justify-center">
                <Link
                  href="/contact"
                  className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg inline-block"
                >
                  Make an Appointment
                </Link>
                <div className="flex items-center gap-2 text-lg">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.928c-.732.732-.732 1.919 0 2.651l.106.106c.732.732 1.919.732 2.651 0L10.928 11.84a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V17a2 2 0 01-2 2h-1C9.716 19 3 12.284 3 7V5z"
                    />
                  </svg>
                  <a
                    href="tel:+442012345678"
                    className="text-black  font-medium"
                  >
                    020 8853 3843
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dividing Line */}
        <div className="max-w-7xl mx-auto px-4 my-16">
          <hr className="border-gray-300" />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <PartnersBanner />
        </div>
      </div>
    </>
  );
}
