import Head from "next/head";

export default function LandDevelopment() {
  return (
    <>
      <Head>
        <title>Land Development - LDPG</title>
        <meta
          name="description"
          content="Professional land development services for residential and commercial projects"
        />
      </Head>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Land Development Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          Our comprehensive land development services transform raw land into
          valuable, functional properties ready for construction and
          development.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Expertise</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                Site planning and design
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                Zoning and permit acquisition
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                Infrastructure development
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                Environmental assessments
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                Utility coordination
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                Construction management
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Development Process</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold mb-2">1. Site Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive evaluation of land characteristics and
                  development potential
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold mb-2">2. Planning & Design</h3>
                <p className="text-gray-600 text-sm">
                  Creating detailed development plans that maximize land value
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold mb-2">3. Approvals</h3>
                <p className="text-gray-600 text-sm">
                  Navigating regulatory requirements and securing necessary
                  permits
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold mb-2">4. Implementation</h3>
                <p className="text-gray-600 text-sm">
                  Managing construction and infrastructure development
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Develop Your Land?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss your land development project. Our team
            of experts will work with you to create a development plan that
            meets your goals and budget.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
