import Image from "next/image";
import { useState, useEffect } from "react";
import { HeroImage } from "@/types";
import Link from "next/link";

const heroImages: HeroImage[] = [
  {
    src: "/images/main-home-1.jpg",
    alt: "LDPG luxury residential development with modern patio and landscaping in South East London",
  },
  {
    src: "/images/Goldsmith-Mews-1.jpg",
    alt: "LDPG luxury residential development with modern patio and landscaping in South East London",
  },
  {
    src: "/images/langton-way.jpg",
    alt: "LDPG luxury residential development with modern patio and landscaping in South East London",
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-2xl text-shadow-lg">
              Land Development Property Group
            </h1>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-block bg-black/80 hover:bg-white text-white hover:text-black px-8 py-4 text-sm uppercase tracking-wide font-semibold transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-black/20 drop-shadow-lg rounded-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
