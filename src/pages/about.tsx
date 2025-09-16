import TitleBanner from "@/components/banners/TitleBanner";
import PartnersBanner from "@/components/banners/PartnersBanner";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about LDPG and our team" />
      </Head>
      <TitleBanner title="About Us" backgroundImage="/images/BannerImage.jpg" />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="relative">
            <Image
              src="/images/main-home-1.jpg"
              alt="LDPG Development Project"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>

          {/* Text Content Section */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Land Development Property Group (LDPG) was founded in July 2013 by
              Sudarshan and Navneet Vij, uniting the resources of Mulberry
              Building Developers and Wyberton Homes Limited.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              The company&apos;s main focus remains high quality residential
              development primarily in South East London. We maximise the
              potential of derelict buildings and unused land to deliver
              contemporary luxury homes, apartments and commercial properties of
              innovative design. The management team maintain a hands-on,
              day-to-day involvement in the business, ensuring our high
              standards of building quality are upheld consistently.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Having been in the industry for over 30 years, we have built a
              reputation for delivering exceptional service alongside
              outstanding results. Our team of skilled professionals have the
              capability and knowhow to handle projects of all sizes and
              complexities
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
