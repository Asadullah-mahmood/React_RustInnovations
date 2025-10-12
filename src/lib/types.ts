import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  imageUrl: string;
  imageHint: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  specifications: string[];
};

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  imageHint: string;
};

export type FooterLinks = {
  quickLinks: NavLink[];
  ourPolicy: NavLink[];
  countries: string[];
};

export type NewsItem = {
    id: string;
    title: string;
    date: string;
    excerpt: string;
}
