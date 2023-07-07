import { Client, ClientTags, Path, Socials } from "../types/types";

const paths: Path = {
  home: "/",
  contact: "/contact",
  services: "/services",
  webDevelopment: "/services/web-development",
  seo: "/services/seo",
  appDevelopment: "/services/app-development",
  clients: "/clients-and-cases",
  policy: "/privacy-policy",
  notFound: "/404",
  client: "/clients-and-cases/:clientName",
};

const socials: Socials = {
  facebook: "https://m.me/appstract",
  mail: "mailto:info@appstract.se?subject=Kontaktförfrågan&priority=high",
  instagram: "https://www.instagram.com/appstract.se/",
};

const clientTags: ClientTags = {
  showAll: "Visa alla",
  apps: "Appar",
  webapps: "Webbapplikationer",
  seo: "SEO",
};

const clients: Client[] = [
  {
    title: "PropertEase",
    subtitle: "Property management made easy",
    logo: "https://justifiedcoding.org/wp-content/uploads/2019/01/Client-Logo-Placeholder.png",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    description:
      "PropertEase revolutionerar fastighetsadministration genom att erbjuda effektiva verktyg för hantering av fastigheter och hyresgäster, vilket resulterar i en smidigare och mer lönsam process.",
    link: "https://appstract.se",
    slug: "client-one",
    tags: [clientTags.apps],
  },
  {
    title: "Client2",
    subtitle: "A swedish startup that fights food waste.",
    logo: "https://justifiedcoding.org/wp-content/uploads/2019/01/Client-Logo-Placeholder.png",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    description:
      "Client2 is a Swedish startup that fights food waste by selling surplus food from restaurants, cafes and grocery stores at a lower price.",
    link: "https://appstract.se",
    slug: "client-two",
    tags: [clientTags.webapps],
  },
  {
    title: "Unicorns and Hippos",
    subtitle: "A platform for companies to find and hire freelancers.",
    logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    description:
      "Unicorns and Hippos is a Swedish startup that provides a platform for companies to find and hire freelancers.",
    link: "https://appstract.se",
    slug: "unicorns-and-hippos",
    tags: [clientTags.webapps, clientTags.seo],
  },
];

export const common = {
  paths,
  clientTags,
  clients,
  socials,
};
