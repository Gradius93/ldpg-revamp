import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects, Project } from "@/data/projects";

export default function Projects() {
  const projects = getAllProjects();

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
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover our portfolio of successful land development and construction
          projects. Each project showcases our commitment to quality,
          innovation, and sustainable development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group h-48"
            >
              <Image
                src={getProjectImage(project)}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Title overlay that appears on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
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
