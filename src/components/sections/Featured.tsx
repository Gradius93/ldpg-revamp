import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "../../data/projects";
import { useEffect, useRef, useState } from "react";

export default function Featured() {
  const projects = getAllProjects().slice(0, 6); // Show first 6 projects
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Define varying heights for masonry effect
  const cardHeights = [
    "h-80", // Standard
    "h-96", // Tall
    "h-72", // Short
    "h-88", // Medium-tall
    "h-80", // Standard
    "h-96", // Tall
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`group transition-all duration-700 transform hover:-translate-y-3 hover:rotate-1 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
          style={{
            transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
            transformStyle: "preserve-3d",
          }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700"
            style={{ borderRadius: "1rem" }}
          >
            {/* Image Container */}
            <div
              className={`relative w-full ${cardHeights[index]} overflow-hidden rounded-2xl flex`}
              style={{
                borderRadius: "1rem",
                lineHeight: 0,
                fontSize: 0,
                position: "relative",
              }}
            >
              <Image
                src={project.images?.[0] || "/images/main-home-1.jpg"}
                alt={project.title}
                fill
                className="object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                style={{
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Property Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-white text-xl font-bold mb-2 hover:text-orange-500 transition-colors duration-300 cursor-pointer transform group-hover:scale-105">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                  {project.location}
                </p>
                <p className="text-gray-400 text-xs line-clamp-2 transform translate-x-8 group-hover:translate-x-0 transition-transform duration-500 delay-200">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Side Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(28,78,48,0.3)] group-hover:shadow-[0_0_50px_rgba(28,78,48,0.5)]" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
