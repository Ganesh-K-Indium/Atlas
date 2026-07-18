export type ContentStatus = "published" | "draft" | "planned";

export type Difficulty = "beginner" | "intermediate" | "advanced" | "expert";

export interface NavItem {
  title: string;
  slug: string;
  status: ContentStatus;
  difficulty?: Difficulty;
  description?: string;
}

export interface NavSection {
  title: string;
  slug: string;
  description?: string;
  items: NavItem[];
}

export interface NavGroup {
  title: string;
  slug: string;
  icon?: string;
  sections: NavSection[];
}

export interface Reference {
  title: string;
  authors?: string;
  year?: number;
  url?: string;
  venue?: string;
}

export interface FrontMatter {
  title: string;
  description: string;
  difficulty: Difficulty;
  status: ContentStatus;
  lastVerified?: string;
  readingTime?: string;
  tags?: string[];
  prerequisites?: string[];
  references?: Reference[];
}
