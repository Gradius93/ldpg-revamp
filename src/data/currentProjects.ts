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
    images: ["/images/greenwich-park-street-1.jpg"],
  },
  "weardale-raod": {
    id: "weardale-raod",
    slug: "weardale-raod",
    title: "Weardale Road",
    location: "Weardale Road",
    description:
      "We’ve secured planning permission for a one-bedroom house on Weardale Road. After completing the construction of 14 flats, we retained a lock-up garage on the corner of the site, which had been used for storage. Given the site’s proximity to the Quaggy River, the initial pre-app response was a firm rejection due to the requirement for a sequential test, which was unlikely to be passed. However, with the support of our flood risk consultants, we were able to demonstrate through a Flood Risk Assessment that all sources of flooding posed a low risk. As a result, the sequential test was not required, and Lewisham Council granted approval.",
    status: "Planning",
    completed: "2025",
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
    images: ["/images/Manor-Park-1.jpg", "/images/Manor-Park-2.jpg"],
  },
  "1-aberdeen-terrace-se3": {
    id: "1-aberdeen-terrace-se3",
    slug: "1-aberdeen-terrace-se3",
    title: "1 ABERDEEN TERRACE, SE3",
    location: "1 Aberdeen Terrace, SE3",
    description:
      "Conversion of Grade II Listed building into 4, and 2 bedroom luxury apartments.",
    status: "All Sold",
    completed: "1999",
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
