import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import {
  getProject,
  getPortfolioProjectSlugs,
  projects,
} from "@/data/portfolioProjects";
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

  const openCarousel = (index: number) => {
    setSelectedImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  return (
    <>
      <Head>
        <title>{project.title} - LDPG</title>
        <meta name="description" content={project.description} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-600 mb-8">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span>|</span>
            <Link
              href="/projects"
              className="hover:text-black transition-colors"
            >
              Projects
            </Link>
            <span>|</span>
            <span className="text-black">{project.title}</span>
          </div>
        </nav>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => openCarousel(index)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Page Title */}
            <h1 className="text-3xl md:text-4xl font-light mb-12 text-black">
              {project.title}
            </h1>

            {/* Project Details */}
            <div className="space-y-8">
              <div className="gap-8">
                <div className="flex text-center flex-row gap-2">
                  <h5 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                    Location
                  </h5>
                  <p className="text-gray-700">{project.location}</p>
                </div>

                <div className="flex text-center flex-row gap-2">
                  <h5 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                    Project
                  </h5>
                  <p className="text-gray-700">{project.description}</p>
                </div>

                <div className="flex text-center flex-row gap-2">
                  <h5 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                    Status
                  </h5>
                  <p className="text-gray-700">{project.status}</p>
                </div>

                <div className="flex text-center flex-row gap-2">
                  <h5 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">
                    Completed
                  </h5>
                  <p className="text-gray-700">{project.completed}</p>
                </div>
              </div>
            </div>

            {/* Navigation to Next Project */}
            {project.nextProject && (
              <div className="mt-16 pt-8 border-t border-gray-200">
                <Link
                  href={`/projects/${project.nextProject}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                >
                  Next: {projects[project.nextProject]?.title} →
                </Link>
              </div>
            )}
          </div>
        </div>
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
  const slugs = getPortfolioProjectSlugs();
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
