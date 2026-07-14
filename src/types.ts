export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Used to dynamic map to Lucide icons
  details: string[];
  painSubTitle?: string;
  ctaText?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  result: string;
  description: string;
  badge: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Recognition {
  id: string;
  title: string;
  institution: string;
  year: string;
  iconName: string;
}
