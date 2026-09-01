import type { LucideIcon } from "lucide-react";

export type ProjectVariant =
  | "primary"
  | "dark"
  | "light"
  | "soft"
  | "invoice"
  | "management";

export interface ProjectCapability {
  title: string;
  description: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;

  icon: LucideIcon;

  variant: ProjectVariant;

  href: string;

  features: string[];

  headline: string;

  longDescription: string;

  capabilities: ProjectCapability[];

  illustration?: string;

  accent?: "blue" | "purple" | "orange" | "cyan" | "green";

  highlights?: ProjectHighlight[];

  audience?: string[];

  integrations?: string[];
}

export interface ProjectFilter {
  id: string;
  label: string;
}
