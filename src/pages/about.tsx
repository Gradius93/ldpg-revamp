import TitleBanner from "@/components/TitleBanner";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - LDPG</title>
        <meta name="description" content="Learn more about LDPG and our team" />
      </Head>
      <TitleBanner title="About Us" />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Land Development Property Group (LDPG) was founded in July 2013 by
            Sudarshan and Navneet Vij, uniting the resources of Mulberry
            Building Developers and Wyberton Homes Limited.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            The company’s main focus remains high quality residential
            development primarily in South East London. We maximise the
            potential of derelict buildings and unused land to deliver
            contemporary luxury homes, apartments and commercial properties of
            innovative design. The management team maintain a hands-on,
            day-to-day involvement in the business, ensuring our high standards
            of building quality are upheld consistently.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Having been in the industry for over 30 years, we have built a
            reputation for delivering exceptional service alongside outstanding
            results. Our team of skilled professionals have the capability and
            knowhow to handle projects of all sizes and complexities
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide exceptional land development and property services
                that create lasting value for our clients and communities.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading land development company known for innovation,
                quality, and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
