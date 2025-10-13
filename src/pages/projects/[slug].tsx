import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import {
  getProject,
  getPreviousProject,
  getProjectSlugs,
  projects,
} from "@/data/currentProjects";
import { Project } from "@/types";
import ImageCarousel from "@/components/sections/ImageCarousel";

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!project) {
    return <div>Project not found</div>;
  }

  const previousProject = getPreviousProject(project.slug);

  const openCarousel = (index: number) => {
    setSelectedImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateProject",
    name: project.title,
    description: project.description,
    location: {
      "@type": "Place",
      name: project.location,
    },
    developer: {
      "@type": "RealEstateAgent",
      name: "LDPG - Land Development Property Group",
    },
    status: project.status,
    dateCompleted: project.completed,
    image: project.images?.map((img) => `https://ldpg.co.uk${img}`) || [],
    url: `https://ldpg.co.uk/projects/${project.slug}`,
  };

  return (
    <>
      <SEOHead
        title={`${project.title} - Current Project by LDPG`}
        description={`${project.description} Located in ${project.location}. Status: ${project.status}. Completed: ${project.completed}.`}
        canonical={`/projects/${project.slug}`}
        keywords={`${project.title}, ${project.location}, property development, LDPG project, ${project.status}`}
        ogImage={project.images?.[0] || "/images/main-home-1.jpg"}
        ogType="article"
        structuredData={structuredData}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-light mb-8 text-black font-weight-bold">
          {project.title}
        </h1>
        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            {/* First Image - Full Width */}
            <div
              className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer mb-4"
              onClick={() => openCarousel(0)}
            >
              <Image
                src={project.images[0]}
                alt={`${project.title} property development project in ${project.location} - main exterior view`}
                fill
                className="object-cover object-bottom"
                sizes="100vw"
              />
            </div>

            {/* Remaining Images - Grid Layout */}
            {project.images.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <div
                    key={index + 1}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    onClick={() => openCarousel(index + 1)}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} development in ${
                        project.location
                      } - view ${index + 2}`}
                      fill
                      className="object-cover object-bottom"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Project Details - Full Width */}
        <div className="mb-12">
          <div className="space-y-8">
            <div className="flex flex-col justify-between items-start">
              <h5 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2">
                Location
              </h5>
              <p className="text-gray-700 ml-8">{project.location}</p>
            </div>

            <div className="flex flex-col justify-between items-start">
              <h5 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2">
                Project
              </h5>
              <p className="text-gray-700 md:max-w-[75%] ml-8">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col justify-between items-start">
              <h5 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2">
                Status
              </h5>
              <p className="text-gray-700 ml-8">{project.status}</p>
            </div>

            <div className="flex flex-col justify-between items-start">
              <h5 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-2">
                Completed
              </h5>
              <p className="text-gray-700 ml-8">{project.completed}</p>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        {(previousProject || project.nextProject) && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              {/* Previous Project */}
              <div>
                {previousProject ? (
                  <Link
                    href={`/projects/${previousProject.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                  >
                    ← Previous: {previousProject.title}
                  </Link>
                ) : (
                  <div></div>
                )}
              </div>

              {/* Next Project */}
              <div>
                {project.nextProject && (
                  <Link
                    href={`/projects/${project.nextProject}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                  >
                    Next: {projects[project.nextProject]?.title} →
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Image Carousel Modal */}
      {project.images && project.images.length > 0 && (
        <ImageCarousel
          images={project.images}
          isOpen={isCarouselOpen}
          onClose={closeCarousel}
          initialIndex={selectedImageIndex}
          projectTitle={project.title}
        />
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getProjectSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // Show 404 for unknown slugs
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const project = getProject(slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};
