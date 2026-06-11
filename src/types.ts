export interface SlideContent {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  gradient: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  metric: string;
  icon: string;
}

export interface ProjectDetail {
  name: string;
  tagline: string;
  masalah: string;
  solusi: string;
  hasil: string;
  performance: number;
  seoScore: number;
  color: string;
  techs: string[];
}

export interface SkillDetail {
  name: string;
  level: number; // percentage
  experience: string;
  category: "Web" | "SEO" | "Design";
  color: string;
  iconName: string;
}
