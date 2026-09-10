export type PlatformType = "Android" | "iOS";

export interface FeatureGroup {
  title: string;
  items: string[];
}

export interface Product {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  platform: PlatformType[];
  coverImage: string;
  logo: string;
  links: {
    googlePlay: string;
    appStore: string;
  };
  description: string;
  features: string[];
  featureGroups?: FeatureGroup[];
  howItWorks?: string[];
  whyChoose?: string[];
  promise?: string;
  targetUsers?: string;
  mainPurpose?: string;
  technologies: string[];
  screenshots: string[];
  industry: string;
  applicationType: string;
  developmentScope: string;
}
