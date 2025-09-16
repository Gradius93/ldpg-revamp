import TitleBanner from "@/components/banners/TitleBanner";
import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <>
      <Head>
        <title>Contact Us - LDPG</title>
        <meta
          name="description"
          content="Get in touch with LDPG for your land development needs"
        />
      </Head>
      <TitleBanner
        title="Contact Us"
        backgroundImage="/images/BannerImage.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center my-8">
          <h1 className="text-2xl font-semibold mb-6">United Kingdom</h1>
          <div className="max-w-3xl mx-auto justify-center space-y-6 flex flex-col md:flex-row md:gap-12 lg:gap-16">
            <div>
              <a
                href="mailto:info@ldpg.com"
                className="hover:text-blue-600 block mb-1"
              >
                info@ldpg.com
              </a>
            </div>
            <div>
              <a href="tel:+1234567890" className="hover:text-blue-600">
                (123) 456-7890
              </a>
            </div>
            <div>
              <p className="text-gray-600">
                The Studio, 6 Horn Lane, London, SE10 0RT
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            {/* Google Maps Embed */}
            <div className="mb-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-TrU_T4&q=The+Studio,+6+Horn+Lane,+London,+SE10+0RT"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LDPG Office Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="land-development">Land Development</option>
                  <option value="project-inquiry">Project Inquiry</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
