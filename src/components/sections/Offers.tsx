"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Offer } from "@/types";

const items: Offer[] = [
  {
    title: "Modern Homes",
    img: "/icons/icon-1-houses.png",
    sideImage: "/images/weardale-cropped.jpg", // Add your side image URL here
    desc: "LDPG has a strong reputation for building quality new homes. Our construction team follows the high standards we set, and we’re proud of the care and craftsmanship that go into every project.",
  },
  {
    title: "Luxury Apartments",
    img: "/icons/icon-2-stairs.png",
    sideImage: "/images/greenwich-park-cropped.jpg", // Add your side image URL here
    desc: "LDPG specialises in luxury residential apartments, creating comfortable and contemporary homes. With a skilled workforce committed to quality, we deliver spaces that are both stylish and functional.",
  },
  {
    title: "Innovative Design",
    img: "/icons/icon-3-house-house.png",
    sideImage: "/images/algernon-road-3.jpg", // Add your side image URL here
    desc: "We partner with local architects to create projects that complement their surroundings while delivering innovative design and efficient use of space. Explore our portfolio for a closer look at our previous builds.",
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
    <div id="offers" className="space-y-12">
      {items.map((item, index) => (
        <div
          key={item.title}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          data-index={index}
          className={`
            flex flex-col lg:flex-row gap-8
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
          <div className="flex flex-col gap-8 p-8 rounded-lg shadow-lg bg-white flex-1">
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
                  className="object-contain"
                  fill
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
          <div className="flex-1">
            <div className="h-64 w-full md:h-80 relative bg-gray-100 rounded-lg flex justify-center">
              <Image
                src={item.sideImage || ""}
                alt={`${item.title} side image`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
