// Your contact form component
"use client";

import React, { useState } from "react";
import TitleBanner from "@/components/banners/TitleBanner";
import GoogleMapCard from "@/components/other/map";
import SEOHead from "@/components/SEOHead";

export default function ContactForm() {
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
  const [status, setStatus] = useState("");
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus("Email sent successfully! 🎉");
        event.currentTarget.reset(); // Clear form fields
      } else {
        const errorData = await response.json();
        setStatus(
          `Error: ${
            errorData.error?.message ||
            errorData.error ||
            "Failed to send email"
          }`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An unexpected error occurred.");
    }
  };

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
          <div className="max-w-3xl mx-auto justify-center space-y-6 flex flex-col md:flex-row md:gap-12 lg:gap-16">
            <div>
              <a
                href="mailto:contact@ldpg.co.uk"
                className="hover:text-blue-600 block mb-1"
              >
                contact@ldpg.co.uk
              </a>
            </div>
            <div>
              <a href="tel:+442088533843" className="hover:text-blue-600">
                020 8853 3843
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
            <GoogleMapCard
              apiKey={API_KEY}
              location={{
                lat: 51.4879718844022,
                lng: 0.017832782472396915,
              }}
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[var(--color-sub-green)]">
              Send us a Message
            </h2>

            {status !== "" && (
              <div
                className={`mb-6 p-4 rounded-md ${
                  status === "Email sent successfully! 🎉"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {status}
              </div>
            )}

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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                aria-label="Send Message"
                disabled={status === "Sending..."}
                className={`w-full py-3 px-6 rounded-md font-medium transition-colors ${
                  status
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
              >
                {status ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          {/* <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
            />

            <button type="submit" disabled={status === "Sending..."}>
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {status && <p>{status}</p>}
          </form> */}
        </div>
      </div>
    </>
  );
}
