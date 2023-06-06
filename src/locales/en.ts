const hamburgerLanguage = "Svenska";
const hamburgerMenuItems = [
  {
    label: "Services",
    url: "/services",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

const notFoundPage = {
  title: "Oops! Something went wrong.",
  description: "Looks like you're lost.\nDon't worry though, we're here to save you!",
};

const paths = {
  home: "/",
  about: "/about",
  contact: "/contact",
  services: "/services",
  webDevelopment: "/services/web-development",
  seo: "/services/seo",
  appDevelopment: "/services/app-development",
};

const homePage = {
  title: "Web Agency in Borås",
  description: "We are a web agency in Borås that helps you with your website.",
  buttons: {
    contact: "Contact us",
    help: "How we can help you",
  },
  serviceTitle: "Our Services",
  serviceDescription: "We offer a wide range of services to help you with your business.",
};

export const services = [
  {
    title: "Web Development",
    description:
      "We help you build a website that you can be proud of, and that your customers will love.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: "/services/web-development",
  },
  {
    title: "Search Engine Optimization",
    description:
      "We help you get better visibility on the internet, using various techniques such as SEO, SEM, and more.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: "/services/seo",
  },
  {
    title: "App Development",
    description:
      "We help you build an app that your customers will love, and that will help you grow your business.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: "/services/app-development",
  },
];

const breadcrumbs = [
  { path: "/", breadcrumb: "Home" },
  { path: "/services", breadcrumb: "Services" },
  { path: "/services/web-development", breadcrumb: "Web Development" },
  { path: "/services/seo", breadcrumb: "SEO" },
  { path: "/services/app-development", breadcrumb: "App Development" },
];

const navBar = {
  menuItems: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Contact",
      url: "/contact",
    },
  ],
};

export const enTranslations = {
  navBar,
  services,
  paths,
  breadcrumbs,
  homePage,
  notFoundPage,
  hamburgerMenuItems,
  hamburgerLanguage,
};
