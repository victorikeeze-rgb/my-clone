export interface ServiceCard {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imgSrc: string;
  imgAlt: string;
}

export interface TeamMember {
  name: string;
  specialty: string;
  extraInfo?: string;
  imgSrc: string;
  profileHref: string;
}

export interface Location {
  name: string;
  address: string;
  city: string;
  hours: string[];
  phone: string;
  directionsHref: string;
}

export interface BlogPost {
  title: string;
  date: string;
  type: string;
  description: string;
  imgSrc: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}
