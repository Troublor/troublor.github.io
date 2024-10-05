/**
 * Profile is the information displayed in the homepage.
 */
export interface Profile {
  name: {
    first: string;
    middle: string;
    last: string;
    formal: string;
    chinese: string;
  };
  emails: {
    academic: string;
    work: string;
    personal: string;
  };
  occupations: Occupation[];
  address: string[];
  username: string;
  domain: string;
  resume: string;
  description: string;
  titles: string[];
  googleScholar: string; // link to Google Scholar
  dblp: string; // link to DBLP
  github: string; // link to GitHub

  sections: [
    BioSection,
    NewsSection,
    ResearchSection,
    ServiceSection,
    ImpactsSection,
  ];

  socialNetworks: SocialNetwork[];
}

export type AwardList = Award[];

export type ServiceList = Service[];

export type ExperienceList = Experience[];

export type PublicationList = Publication[];

export interface Occupation {
  title: string;
  institute: string;
}

export interface SocialNetwork {
  name: string;
  link: string;
  iconName: string;
}

export interface Statistics {
  number: number;
  title: string;
  iconPrefix: string;
  iconName: string;
}

export interface Section {
  title: string;
}

export interface BioSection extends Section {
  content: string[]; // each string is a paragraph
}

export interface NewsSection extends Section {
  news: News[];
}

export interface ResearchSection extends Section {
  overview: string[];
  research: Research[];
}

export interface ServiceSection extends Section {
  pcMember: Service[];
  reviewer: Service[];
}

export interface ImpactsSection extends Section {
  impacts: Impact[];
}

export interface Research {
  direction: string;
  description: string[];
  decoration?: TextDecoration;
}

export interface Impact {
  text: string;
  secendaryText?: string;
  decoration?: TextDecoration;
}

export interface News {
  content: string;
  date: [number, number, number];
  decoration?: TextDecoration;
}

export interface Education {
  period: string;
  school: string;
  degreeAbbr: string;
  degree: string;
  major: string;
  description: string;
}

export interface Award {
  name: string;
  time: string;
  organization: string;
}

export interface Experience {
  kind: 'engineering' | 'research';
  start: [number, number]; // year and month
  end?: [number, number];
  institute: string;
  location: string;
  position: string;
  description?: string;
  tags?: string[];
}

export interface Teaching {
  courseCode: string;
  courseName: string;
  link: string;
  time: string;
  role: string;
  university: string;
}

export interface Service {
  organization: string;
  years?: number[];
}

export interface Publication {
  type: 'journal' | 'conference' | 'preprint';
  title: string;
  date: [number, number];
  authors: string[];
  venue: string;
  venueShort: string;
  awards?: string[];
  abstract?: string;
  projectUrl?: string;
  arxivUrl?: string;
  paperUrl?: string;
  slidesUrl?: string;
  bibtex?: string;
}

export interface MiscData {
  technologies: { name: string; url: string }[];
  quotes: { sentence: string; origin: string }[];
}

export interface TextDecoration {
  links?: Record<string, string>;
  highlights?: string[]; // color
  emphasis?: string[]; // italic
}
