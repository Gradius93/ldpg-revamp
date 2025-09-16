import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div className="md:col-span-1">
            <nav className="space-y-2">
              <ul className="text-gray-300 space-y-1">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/land-development"
                    className="hover:text-white transition-colors"
                  >
                    Land Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>020 8853 3843</p>
              <p>contact@ldpg.co.uk</p>
              <p>The Studio, 6 Horn Lane, London, SE10 0RT</p>
            </div>
          </div>
          {/* Newsletter Signup */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">
              Sign up to stay up to date
            </h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to be in the know.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white text-black rounded-l-md focus:outline-none"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            Company registration number: <strong>8136879</strong>
          </p>
          <p>Land Development Property Group © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
