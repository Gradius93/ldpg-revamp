import TitleBanner from "@/components/banners/TitleBanner";
import GoogleMapCard from "@/components/other/map";
import SEOHead from "@/components/SEOHead";

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "RealEstateAgent",
      name: "LDPG - Land Development Property Group",
      telephone: "020 8853 3843",
      email: "info@ldpg.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "The Studio, 6 Horn Lane",
        addressLocality: "London",
        postalCode: "SE10 0RT",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.4879718844022,
        longitude: 0.017832782472396915,
      },
      openingHours: "Mo-Fr 09:00-17:00",
    },
  };
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

  return (
    <>
      <SEOHead
        title="Contact LDPG - Get in Touch for Property Development Services"
        description="Contact LDPG for land development, property development, and consultation services. Located in London SE10. Call 020 8853 3843 or email info@ldpg.com"
        canonical="/contact"
        keywords="contact LDPG, property development consultation, land development services, London property developers, SE10"
        structuredData={structuredData}
      />
      <TitleBanner
        title="Contact Us"
        backgroundImage="/images/BannerImage.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center my-8">
          <h1 className="text-2xl font-semibold mb-6 text-[var(--color-sub-green)]">
            United Kingdom
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            {/* Google Maps Embed */}
            <GoogleMapCard
              apiKey={API_KEY}
              location={{
                lat: 51.4879718844022,
                lng: 0.017832782472396915,
              }}
            />
          </div>
          <div className="space-y-8 text-center">
            <h2 className="text-2xl font-semibold text-[var(--color-sub-green)]">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Address
                </h3>
                <p className="text-gray-800">
                  The Studio, 6 Horn Lane
                  <br />
                  London, SE10 0RT
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+442088533843"
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  020 8853 3843
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Email
                </h3>
                <a
                  href="mailto:contact@ldpg.co.uk"
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  contact@ldpg.co.uk
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Office Hours
                </h3>
                <p className="text-gray-800">
                  Monday - Friday: 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
