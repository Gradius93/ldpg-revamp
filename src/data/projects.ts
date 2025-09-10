export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  status: string;
  completed: string;
  images?: string[];
  nextProject?: string;
  slug: string;
}

export const projects: Record<string, Project> = {
  "1-aberdeen-terrace-se3": {
    id: "1-aberdeen-terrace-se3",
    slug: "1-aberdeen-terrace-se3",
    title: "1 ABERDEEN TERRACE, SE3",
    location: "1 Aberdeen Terrace, SE3",
    description:
      "Conversion of Grade II Listed building into 4, and 2 bedroom luxury apartments.",
    status: "All Sold",
    completed: "1999",
    nextProject: "the-point-wemys-road-se3",
    images: [
      "/images/1-aberdeen-terrace-1.jpg",
      "/images/1-aberdeen-terrace-2.jpg",
      "/images/1-aberdeen-terrace-3.jpg",
    ],
  },
  "the-point-wemys-road-se3": {
    id: "the-point-wemys-road-se3",
    slug: "the-point-wemys-road-se3",
    title: "THE POINT, WEMYS ROAD, SE3",
    location: "Wemys Road, SE3",
    description:
      "Modern residential development with contemporary design and luxury finishes.",
    status: "Available",
    completed: "2024",
    nextProject: "177-lewisham-way-se14",
    images: ["/images/main-home-1.jpg"],
  },
  "177-lewisham-way-se14": {
    id: "177-lewisham-way-se14",
    slug: "177-lewisham-way-se14",
    title: "177 Lewisham Way SE14",
    location: "177 Lewisham Way, SE14",
    description:
      "Contemporary residential development featuring modern apartments with high-end specifications.",
    status: "Completed",
    completed: "2023",
    nextProject: "algernon-road-se13",
    images: ["/images/main-home-2.jpg"],
  },
  "algernon-road-se13": {
    id: "algernon-road-se13",
    slug: "algernon-road-se13",
    title: "Algernon Road SE13",
    location: "Algernon Road, SE13",
    description:
      "Stylish residential development with innovative design and premium finishes.",
    status: "Completed",
    completed: "2022",
    nextProject: "park-view-weardale-road-se13",
    images: ["/images/main-home-3.jpg"],
  },
  "park-view-weardale-road-se13": {
    id: "park-view-weardale-road-se13",
    slug: "park-view-weardale-road-se13",
    title: "PARK VIEW, WEARDALE ROAD, SE13",
    location: "Weardale Road, SE13",
    description:
      "Luxury residential development with park views and contemporary living spaces.",
    status: "All Sold",
    completed: "2021",
    nextProject: "banning-street-se10",
    images: ["/images/1-aberdeen-terrace-2.jpg"],
  },
  "banning-street-se10": {
    id: "banning-street-se10",
    slug: "banning-street-se10",
    title: "Banning Street SE10",
    location: "Banning Street, SE10",
    description:
      "Modern residential apartments with excellent transport links and contemporary design.",
    status: "Available",
    completed: "2023",
    nextProject: "blackwall-lane-se10",
    images: ["/images/1-aberdeen-terrace-3.jpg"],
  },
  "blackwall-lane-se10": {
    id: "blackwall-lane-se10",
    slug: "blackwall-lane-se10",
    title: "BLACKWALL LANE, SE10",
    location: "Blackwall Lane, SE10",
    description:
      "Commercial and mixed-use development featuring innovative architecture and sustainable design.",
    status: "In Progress",
    completed: "2024",
    nextProject: "vista-buildings-se10",
    images: ["/images/main-home-1.jpg"],
  },
  "vista-buildings-se10": {
    id: "vista-buildings-se10",
    slug: "vista-buildings-se10",
    title: "Vista Buildings SE10",
    location: "SE10",
    description:
      "Premium commercial development with stunning views and modern office spaces.",
    status: "Completed",
    completed: "2022",
    nextProject: "aberdeen-terrace-se3-2",
    images: ["/images/main-home-2.jpg"],
  },
  "aberdeen-terrace-se3-2": {
    id: "aberdeen-terrace-se3-2",
    slug: "aberdeen-terrace-se3-2",
    title: "ABERDEEN TERRACE, SE3",
    location: "Aberdeen Terrace, SE3",
    description:
      "Additional development on Aberdeen Terrace featuring luxury residential units.",
    status: "Planning",
    completed: "2025",
    images: ["/images/main-home-3.jpg"],
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
