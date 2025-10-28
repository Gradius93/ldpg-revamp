import { Project } from "@/types";

export const projects: Record<string, Project> = {
  "greenwich-park-street": {
    id: "greenwich-park-street",
    slug: "greenwich-park-street",
    title: "Greenwich Park Street",
    location: "Greenwich Park Street",
    description:
      "We’ve secured planning permission for four three-bedroom houses on Greenwich Park Street. The scheme will replace an underused car park that previously served the former Royal Mail Sortin Office across the road. The development enjoys a prime location, less than a five-minute walk from both Maze Hill Station and Greenwich Park.",
    status: "Planning",
    completed: "2025",
    nextProject: "weardale-road",
    thumbnailImage: "/images/greenwich-park-cropped.jpg",
    images: ["/images/greenwich-park-street-1.jpg"],
  },
  "weardale-road": {
    id: "weardale-road",
    slug: "weardale-road",
    title: "Weardale Road",
    location: "Weardale Road",
    description:
      "We’ve secured planning permission for a one-bedroom house on Weardale Road. After completing the construction of 14 flats, we retained a lock-up garage on the corner of the site, which had been used for storage. Given the site’s proximity to the Quaggy River, the initial pre-app response was a firm rejection due to the requirement for a sequential test, which was unlikely to be passed. However, with the support of our flood risk consultants, we were able to demonstrate through a Flood Risk Assessment that all sources of flooding posed a low risk. As a result, the sequential test was not required, and Lewisham Council granted approval.",
    status: "Planning",
    completed: "2025",
    nextProject: "manor-park",
    thumbnailImage: "/images/weardale-cropped.jpg",
    images: ["/images/Weardale-Road1.jpg"],
  },
  "manor-park": {
    id: "manor-park",
    slug: "manor-park",
    title: "Manor Park",
    location: "Manor Park",
    description:
      "Construction is now underway on two four-bedroom houses on Manor Park Road. The development features a distinctive modern design with natural stone detailing on the façades. Located in Lewisham, the site offers excellent connections, being close to Hither Green Station and several local parks. Completion is expected by late 2026.",
    status: "Construction",
    completed: "2026",
    nextProject: "1-aberdeen-terrace-se3",

    images: ["/images/Manor-Park-1.jpg", "/images/Manor-Park-2.jpg"],
  },
};

export function getProject(slug: string): Project | undefined {
  return projects[slug];
}

export function getAllProjects(): Project[] {
  return Object.values(projects);
}

export function getProjectSlugs(): string[] {
  return Object.keys(projects);
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  // Find the project that has the current project as its nextProject
  const previousProjectEntry = Object.entries(projects).find(
    ([slug, project]) => project.nextProject === currentSlug
  );

  return previousProjectEntry ? previousProjectEntry[1] : undefined;
}
