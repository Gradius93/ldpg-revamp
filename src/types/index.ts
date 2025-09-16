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

export interface Offer {
  title: string;
  img: string;
  sideImage: string | null;
  desc: string;
}

export interface Partner {
  name: string;
  logo: string;
  alt: string;
  url: string;
}

export interface TitleBannerProps {
  title: string;
  backgroundImage?: string;
  className?: string;
}

export interface MenuItem {
  href: string;
  label: string;
}

export interface HeroImage {
  src: string;
  alt: string;
}
