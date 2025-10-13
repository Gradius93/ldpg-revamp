import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/data/currentProjects";
import { Project } from "@/types";
import TitleBanner from "@/components/banners/TitleBanner";

export default function Projects() {
  const projects = getAllProjects();

  // Helper function to get project image or fallback
  const getProjectImage = (project: Project) => {
    if (project.thumbnailImage) {
      return project.thumbnailImage;
    }
    if (project.images && project.images.length > 0) {
      return project.images[0];
    }
    // Use available main home images as fallbacks
    return "/images/main-home-1.jpg";
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Current Projects - LDPG",
    description:
      "Explore LDPG's current property development projects in South East London",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "RealEstateProject",
        position: index + 1,
        name: project.title,
        description: project.description,
        location: {
          "@type": "Place",
          name: project.location,
        },
        url: `https://ldpg.co.uk/projects/${project.slug}`,
        image: getProjectImage(project),
      })),
    },
  };

  return (
    <>
      <SEOHead
        title="Current Projects - LDPG Property Developments in South East London"
        description="Discover LDPG's current property development projects. High-quality residential developments transforming South East London communities."
        canonical="/projects"
        keywords="current projects, property development London, residential development, LDPG projects, South East London construction"
        structuredData={structuredData}
      />
      <TitleBanner
        title="Current Projects"
        backgroundImage="/images/BannerImage.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Here are some of our current projects.
            </p>
          </div>
        </div>

        {/* Modern Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <article className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-sm overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={getProjectImage(project)}
                    alt={project.title}
                    fill
                    className="object-cover object-bottom transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {project.location}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Action Row */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-xs text-gray-900 font-medium uppercase tracking-wider">
                      View Project
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-orange-500 flex items-center justify-center transition-all duration-300">
                      <svg
                        className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Border Animation */}
                <div className="h-1 bg-gradient-to-r from-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
