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
  titles: string[];
  socialNetworks: SocialNetwork[];
  statistics: Statistics[];
  educations: Education[];
  workExperiences: WorkExperience[];
  researchExperience: ResearchExperience[];
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

export interface Publication {
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
}
