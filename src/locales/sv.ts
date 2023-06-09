const paths = {
  home: {
    link: "/",
    label: "Hem",
  },
  contact: {
    link: "/kontakt",
    label: "Kontakt",
  },
  services: {
    link: "/tjanster",
    label: "Tjänster",
  },
  webDevelopment: {
    link: "/tjanster/webbutveckling",
    label: "Webbutveckling",
  },
  seo: {
    link: "/tjanster/seo",
    label: "Sökmotoroptimering",
  },
  appDevelopment: {
    link: "/tjanster/apputveckling",
    label: "Apputveckling",
  },
  clients: {
    link: "/kunder-och-projekt",
    label: "Kunder & projekt",
  },
  notFound: {
    link: "/404",
    label: "404",
  },
};
const hamburgerLanguage = "English";
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
    contact: buttons.contact,
    help: buttons.help,
  },
  serviceTitle: "Våra tjänster",
  serviceDescription:
    "Vi erbjuder ett brett utbud av tjänster för att hjälpa dig med din verksamhet.",
};

export const services = [
  {
    title: paths.webDevelopment.label,
    description:
      "Vi hjälper er att bygga en hemsida som ni kan vara stolta över, och som era kunder kommer att älska.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.webDevelopment.link,
  },
  {
    title: paths.seo.label,
    description:
      "Vi hjälper er att synas bättre på internet, med hjälp av diverse tekniker så som SEO, SEM, och mer.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.seo.link,
  },
  {
    title: paths.appDevelopment.label,
    description:
      "Vi hjälper er att bygga en app som ni kan vara stolta över, och som era kunder kommer att älska.",
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

export const svTranslations = {
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
