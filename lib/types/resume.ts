export type FontFamily = "Arial" | "Helvetica" | "Georgia" | "Times-Roman";
export type FontSize = "small" | "medium" | "large";
export type ResumeTemplate =
  | "ats-classic"
  | "modern"
  | "corporate"
  | "minimal"
  | "tech"
  | "executive";

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
}

export interface WorkExperience {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  description: string;
  url: string;
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
}

export interface TemplateCustomization {
  template: ResumeTemplate;
  themeColor: string;
  fontFamily: FontFamily;
  fontSize: FontSize;
  margin: number;
  sectionSpacing: number;
}

export interface ResumeData {
  id: string;
  title: string;
  personal: PersonalInfo;
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  customization: TemplateCustomization;
}
