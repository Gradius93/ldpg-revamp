import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getAllPortfolioProjects } from "@/data/portfolioProjects";
import { Project } from "@/types";
import TitleBanner from "@/components/banners/TitleBanner";

export default function Projects() {
  const projects = getAllPortfolioProjects();

  // Helper function to get project image or fallback
  const getProjectImage = (project: Project) => {
    if (project.images && project.images.length > 0) {
      return project.images[0];
    }
    // Use available main home images as fallbacks
    return "/images/main-home-1.jpg";
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Explore our portfolio of completed projects"
        />
      </Head>
      <TitleBanner
        title="Portfolio"
        backgroundImage="/images/BannerImage.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg font-bold text-gray-600 mb-12">
            Our diverse portfolio includes a wide range of projects, from
            small-scale renovations to large-scale new builds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="relative bg-white shadow-md rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 group aspect-[4/3] opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 250}ms` }}
            >
              <Image
                src={getProjectImage(project)}
                alt={project.title}
                fill
                className="object-cover group-hover:brightness-50 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />

              {/* Title overlay that appears on hover */}
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:text-orange-500 cursor-pointer">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
