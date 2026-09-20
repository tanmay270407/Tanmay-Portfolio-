import { LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
}

export interface HeaderData {
  name: string;
  logoText: string;
  navLinks: NavLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface HeroData {
  name: string;
  title: string;
  university: string;
  pitch: string;
  resumeUrl: string;
  photoUrl: string;
  socials: SocialLink[];
}

export interface AboutData {
  paragraphs: string[];
  department: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  category: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface MilestoneItem {
  image: string;
  title: string;
  event: string;
  date: string;
  link: string;
}

export interface EducationItem {
  college: string;
  degree: string;
  cgpa: string;
  year: string;
}

export interface ContactData {
  email: string;
  github: string;
  linkedin: string;
  message: string;
}

export interface PortfolioData {
  header: HeaderData;
  hero: HeroData;
  about: AboutData;
  skills: SkillCategory[];
  projects: ProjectItem[];
  moments: MilestoneItem[];
  education: EducationItem[];
  contact: ContactData;
  footer: {
    text: string;
  };
}
