export interface Profile {
  name: {
    first: string;
    middle: string;
    last: string;
    formal: string;
    previous: string[];
    initials: string;
  };
  emails: {
    work: string;
    personal: string;
  };
  address: string[];
  username: string;
  domain: string;
  github: string;
  resume: string;
  description: string;

  researchInterests: string[];
  titles: string[];
  socialNetworks: SocialNetwork[];
  statistics: Statistics[];
  educations: Education[];
  awards: Award[];
  workExperiences: WorkExperience[];
  researchExperience: ResearchExperience[];
  teaching: Teaching[];
  service: Service[];
  publications: Publication[];
}

export interface SocialNetwork {
  link: string;
  iconName: string;
}

export interface Statistics {
  number: number;
  title: string;
  iconPrefix: string;
  iconName: string;
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

export interface WorkExperience {
  period: string;
  organization: string;
  location: string;
  position: string;
  description: string;
}

export interface ResearchExperience {
  period: string;
  institute: string;
  group: string;
  role: string;
  focus: string[];
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
  role: string;
  organization: string;
  link: string;
  time: string;
}

export interface Publication {
  type: 'journal' | 'conference' | 'preprint';
  title: string;
  year: string;
  authors: string[];
  venue: string;
  venueShort: string;
  awards: string[];
  abstract: string;
  projectUrl: string;
  arxivUrl: string;
  paperUrl: string;
  slidesUrl: string;
  bibtex: string;
}

export interface MiscData {
  technologies: { name: string; url: string }[];
  quotes: { sentence: string; origin: string }[];
  homepages: Record<string, string>; // full name to homepage link
}
