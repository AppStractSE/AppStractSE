const hamburgerLanguage = "English";
const hamburgerMenuItems = [
  {
    label: "Tjänster",
    url: "/tjanster",
  },
  {
    label: "Om",
    url: "/om",
  },
  {
    label: "Kontakt",
    url: "/kontakt",
  },
];

const notFoundPage = {
  title: "Hoppsan! Något gick fel.",
  description: "Det ser ut som att du gått vilse.\nOroa dig inte, vi är här för att rädda dig!",
};

const paths = {
  home: "/",
  about: "/om",
  contact: "/kontakt",
  services: "/tjanster",
  webDevelopment: "/tjanster/webbutveckling",
  seo: "/tjanster/seo",
  appDevelopment: "/tjanster/apputveckling",
};

const homePage = {
  title: "Webbyrå i Borås",
  description:
    "AppStract erbjuder en IT-lösning för alla behov. Vårt mål är att hjälpa dig att lyckas med din verksamhet, och vi har verktygen för att göra det.",
  buttons: {
    contact: "Kontakta oss",
    help: "Så kan vi hjälpa dig",
  },
  serviceTitle: "Våra tjänster",
  serviceDescription:
    "Vi erbjuder ett brett utbud av tjänster för att hjälpa dig med din verksamhet.",
};

export const services = [
  {
    title: "Webbutveckling",
    description:
      "Vi hjälper er att bygga en hemsida som ni kan vara stolta över, och som era kunder kommer att älska.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: "/tjanster/webbutveckling",
  },
  {
    title: "Sökmotoroptimering",
    description:
      "Vi hjälper er att synas bättre på internet, med hjälp av diverse tekniker så som SEO, SEM, och mer.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: "/tjanster/seo",
  },
  {
    title: "Apputveckling",
    description:
      "Vi hjälper er att bygga en app som ni kan vara stolta över, och som era kunder kommer att älska.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: "/tjanster/apputveckling",
  },
];

const breadcrumbs = [
  { path: "/", breadcrumb: "Hem" },
  { path: "/tjanster", breadcrumb: "Tjänster" },
  { path: "/tjanster/webbutveckling", breadcrumb: "Webbutveckling" },
  { path: "/tjanster/seo", breadcrumb: "SEO" },
  { path: "/tjanster/apputveckling", breadcrumb: "Apputveckling" },
];

const navBar = {
  menuItems: [
    {
      label: "Tjänster",
      url: "/tjanster",
    },
    {
      label: "Om",
      url: "/om",
    },
    {
      label: "Kontakt",
      url: "/kontakt",
    },
  ],
};

export const svTranslations = {
  navBar,
  breadcrumbs,
  paths,
  notFoundPage,
  homePage,
  hamburgerMenuItems,
  services,
  hamburgerLanguage,
};
