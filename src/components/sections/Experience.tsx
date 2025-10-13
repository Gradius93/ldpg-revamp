import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        bg-gradient-to-br from-[#1C4E30] to-[#2A6B42] py-20 px-4
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Experience & Expertise
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Image - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/images/main-home-1.jpg"
                alt="LDPG Construction Experience"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                We have been in the industry for over 30 years and have built a
                reputation for delivering exceptional service and outstanding
                results. Our team of skilled professionals has the experience
                and expertise to handle projects of all sizes and complexities.
              </p>
            </div>
            <Link
              href="/projects"
              className="
                 inline-flex items-center gap-3 
                 bg-white text-[#1C4E30] 
                 px-8 py-4 rounded-lg 
                 font-semibold text-lg
                 hover:bg-gray-100 
                 transform hover:scale-105 
                 transition-all duration-300 
                 shadow-lg hover:shadow-xl
                 mt-6
               "
            >
              <span>View Our Projects</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
