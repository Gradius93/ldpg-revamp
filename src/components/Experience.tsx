"use client";

import Link from "next/link";
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
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Experience & Expertise
        </h2>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-10">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            We have been in the industry for over 30 years and have built a
            reputation for delivering exceptional service and outstanding
            results. Our team of skilled professionals has the experience and
            expertise to handle projects of all sizes and complexities.
          </p>
        </div>

        <Link
          href="/projects"
          className="
            inline-flex items-center gap-3 
            bg-white text-[#1C4E30] 
            px-8 py-4 rounded-full 
            font-semibold text-lg
            hover:bg-gray-100 
            transform hover:scale-105 
            transition-all duration-300 
            shadow-lg hover:shadow-xl
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
    </section>
  );
}
