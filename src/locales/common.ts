import { Path, Socials } from "../types/types";

const paths: Path = {
  home: '/',
  contact: '/contact',
  services: '/services',
  webDevelopment: '/services/web-development',
  seo: '/services/seo',
  appDevelopment: '/services/app-development',
  clients: '/clients-and-cases',
  policy: '/privacy-policy',
  notFound: '/404',
  client: '/clients-and-cases/:clientName',
};

const socials: Socials = {
  facebook: 'https://m.me/appstract',
  mail: 'mailto:info@appstract.se?subject=Kontaktförfrågan&priority=high',
  instagram: 'https://www.instagram.com/appstract.se/',
};

export const common = {
  paths,
  socials,
};
