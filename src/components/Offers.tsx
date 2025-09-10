"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    title: "Modern Homes",
    img: "https://www.ldpg.co.uk/wp-content/uploads/2023/05/icn1.png",
    sideImage: null, // Add your side image URL here
    desc: "LDPG is known for its building of outstanding new homes. Our construction team exacts the high standards we maintain across all our properties. We take pride in the exemplary workmanship demonstrated by our team throughout the build process. The outcome; exceptional modern homes ideal for every family.",
  },
  {
    title: "Luxury Apartments",
    img: "https://www.ldpg.co.uk/wp-content/uploads/2023/05/icn2.png",
    sideImage: null, // Add your side image URL here
    desc: "At LDPG, we build luxury residential apartments, passionate about the creation of comfortable and contemporary living spaces.  Our skilled workforce ensures maintenance of the highest standards. Our apartments make for stylish and efficient living spaces with exquisite design.",
  },
  {
    title: "Innovative Design",
    img: "https://www.ldpg.co.uk/wp-content/uploads/2023/05/icn3.png",
    sideImage: null, // Add your side image URL here
    desc: "We collaborate with local architects to deliver projects that fit the local area and environment while also achieving innovative design and use of space. For a closer look at our previous builds, please see our portfolio. ",
  },
];

export default function Offers() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="offers" className="space-y-12 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <div
          key={item.title}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          data-index={index}
          className={`
            flex flex-col lg:flex-row items-center gap-8
            transition-all duration-700 ease-out
            ${
              visibleItems.has(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
            ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}
          `}
        >
          {/* Main Content Div */}
          <div className="flex flex-col gap-8 p-8 rounded-lg shadow-lg bg-white flex-1 max-w-md">
            {/* Icon at Top - aligned opposite to side image */}
            <div
              className={`flex-shrink-0 ${
                index % 2 === 1 ? "self-end" : "self-start"
              }`}
            >
              <div className="h-10 w-10 md:h-12 md:w-12 relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text Content - aligned opposite to side image */}
            <div className={`${index % 2 === 1 ? "text-right" : "text-left"}`}>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          </div>

          {/* Side Image Outside Main Div */}
          <div className="flex-shrink-0">
            <div className="h-64 w-80 md:h-80 md:w-96 relative bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              {item.sideImage ? (
                <Image
                  src={item.sideImage}
                  alt={`${item.title} side image`}
                  fill
                  className="object-cover rounded-lg"
                />
              ) : (
                <div className="text-center text-gray-400">
                  <div className="text-5xl mb-3">🖼️</div>
                  <p className="text-lg font-medium">Side Image</p>
                  <p className="text-sm mt-2">
                    Add image URL to sideImage property
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
