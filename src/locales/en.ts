const paths = {
  home: {
    link: "/",
    label: "Home",
  },
  contact: {
    link: "/contact",
    label: "Contact",
  },
  services: {
    link: "/services",
    label: "Services",
  },
  webDevelopment: {
    link: "/services/web-development",
    label: "Web Development",
  },
  seo: {
    link: "/services/seo",
    label: "Search Engine Optimization",
  },
  appDevelopment: {
    link: "/services/app-development",
    label: "App Development",
  },
  clients: {
    link: "/clients-and-cases",
    label: "Clients & Cases",
  },
  notFound: {
    link: "/404",
    label: "404",
  },
};
const hamburgerLanguage = "Svenska";
const hamburgerMenuItems = [
  {
    label: paths.services.label,
    url: paths.services.link,
  },
  {
    label: paths.contact.label,
    url: paths.contact.link,
  },
];

const notFound = {
  title: "Oops! Something went wrong.",
  description: "Looks like you're lost.\nDon't worry though, we're here to save you!",
};

const contact = {
  title: "Yes, please! I'd like to be contacted!",
  name: "First and last name",
  email: "Email",
  message: "Message",
  phone: "Phone number",
  info: "By clicking send you agree to our",
  policy: "privacy policy",
};

const buttons = {
  help: "How we can help you",
  contact: "Contact us",
  send: "Send",
  back: "Back",
  submit: "Submit",
};

const home = {
  title: "Web Agency in Borås",
  description:
    "AppStract offers an IT solution for all needs. Our goal is to help you succeed in your business, and we have the tools to do it.",
  buttons: {
    contact: buttons.contact,
    help: buttons.help,
  },
  serviceTitle: "Our Services",
  serviceDescription: "We offer a wide range of services to help you with your business.",
};

export const services = [
  {
    title: paths.webDevelopment.label,
    description:
      "We help you build a website that you can be proud of, and that your customers will love.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.webDevelopment.link,
  },
  {
    title: paths.seo.label,
    description:
      "We help you get better visibility on the internet, using various techniques such as SEO, SEM, and more.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.seo.link,
  },
  {
    title: paths.appDevelopment.label,
    description:
      "We help you build an app that your customers will love, and that will help you grow your business.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.appDevelopment.link,
  },
];

const breadcrumbs = [
  { path: paths.home.link, breadcrumb: paths.home.label },
  { path: paths.services.link, breadcrumb: paths.services.label },
  { path: paths.webDevelopment.link, breadcrumb: paths.webDevelopment.label },
  { path: paths.seo.link, breadcrumb: paths.seo.label },
  { path: paths.appDevelopment.link, breadcrumb: paths.appDevelopment.label },
];

const nav = {
  menuItems: [
    {
      label: paths.clients.label,
      url: paths.clients.link,
    },
    {
      label: paths.services.label,
      url: paths.services.link,
    },
    {
      label: paths.contact.label,
      url: paths.contact.link,
    },
  ],
};

export const enTranslations = {
  nav,
  buttons,
  services,
  paths,
  breadcrumbs,
  home,
  notFound,
  hamburgerMenuItems,
  contact,
  hamburgerLanguage,
};
