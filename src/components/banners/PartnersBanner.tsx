import Image from "next/image";
import { Partner } from "@/types";

const partners: Partner[] = [
  {
    name: "AAVA",
    logo: "/images/aava.png",
    alt: "AAVA Partner Logo",
    url: "https://www.aava.org.uk",
  },
  {
    name: "JLL",
    logo: "/images/jll.png",
    alt: "JLL Partner Logo",
    url: "https://residential.jll.co.uk",
  },
  {
    name: "Office SM",
    logo: "/images/officesm.png",
    alt: "Office SM Partner Logo",
    url: "https://officesandm.com/",
  },
];

export default function PartnersBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#1C4E30" }}>
            Our Partners
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-105 focus:outline-none"
              aria-label={`Visit ${partner.name} website`}
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={200}
                height={100}
                className="object-contain max-h-24 w-auto"
                priority={index === 0}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
