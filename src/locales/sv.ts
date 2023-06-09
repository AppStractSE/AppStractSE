const paths = {
  home: "/",
  contact: "/kontakt",
  services: "/tjanster",
  webDevelopment: "/tjanster/webbutveckling",
  seo: "/tjanster/seo",
  appDevelopment: "/tjanster/apputveckling",
  clients: "/kunder-och-projekt",
};
const hamburgerLanguage = "English";
const hamburgerMenuItems = [
  {
    label: "Tjänster",
    url: paths.services,
  },
  {
    label: "Kontakt",
    url: paths.contact,
  },
];

const notFound = {
  title: "Hoppsan! Något gick fel.",
  description: "Det ser ut som att du gått vilse.\nOroa dig inte, vi är här för att rädda dig!",
};


const contact = {
  title: "Ja, tack! Jag vill gärna bli kontaktad!",
  name: "För- och efternamn",
  email: "Email",
  message: "Meddelande",
  phone: "Telefonnummer",
  info: "Genom att klicka på skicka godkänner du vår",
  policy: "personuppgiftspolicy",
};

const buttons = {
  help: "Så kan vi hjälpa dig",
  contact: "Kontakta oss",
  send: "Skicka",
  back: "Tillbaka",
  submit: "Skicka",
};

const home = {
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
    link: paths.webDevelopment,
  },
  {
    title: "Sökmotoroptimering",
    description:
      "Vi hjälper er att synas bättre på internet, med hjälp av diverse tekniker så som SEO, SEM, och mer.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.seo,
  },
  {
    title: "Apputveckling",
    description:
      "Vi hjälper er att bygga en app som ni kan vara stolta över, och som era kunder kommer att älska.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.appDevelopment,
  },
];

const breadcrumbs = [
  { path: "/", breadcrumb: "Hem" },
  { path: paths.services, breadcrumb: "Tjänster" },
  { path: paths.webDevelopment, breadcrumb: "Webbutveckling" },
  { path: paths.seo, breadcrumb: "SEO" },
  { path: paths.appDevelopment, breadcrumb: "Apputveckling" },
];

const navBar = {
  menuItems: [
    {
      label: "Kunder & projekt",
      url: paths.clients,
    },
    {
      label: "Tjänster",
      url: paths.services,
    },
    {
      label: "Kontakt",
      url: paths.contact,
    },
  ],
};

export const svTranslations = {
  navBar,
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
