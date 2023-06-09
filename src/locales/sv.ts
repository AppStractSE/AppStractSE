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
  policy: {
    link: "/personuppgiftspolicy",
    label: "Personuppgiftspolicy",
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
  phraseTitle: "Det pålitliga valet för ",
  phrases: [
    "responsiva designer",
    "webbapplikationer",
    "systemutveckling",
    "webbdesign",
    "skräddarsydda IT-lösningar",
    "SEO-tjänster",
    "webbutveckling",
    "apputveckling",
  ],
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

const policy = {
  title: "Personuppgiftspolicy",
  subtitle: "AppStract's behandling av dina personuppgifter",
  description:
    "Vi värnar om din integritet och strävar efter att skydda dina personuppgifter på bästa sätt. Denna personuppgiftspolicy beskriver hur vi samlar in, använder och skyddar dina personuppgifter när du besöker vår hemsida. Vi följer tillämpliga dataskyddslagar och strävar efter att vara transparenta i våra insamlings- och användningspraxis.",
  sections: [
    {
      title: "Insamling av personuppgifter",
      description:
        "Vi samlar in personuppgifter från dig när du registrerar dig för vårt nyhetsbrev, skickar in förfrågningar via vårt kontaktformulär, genomför köp av våra produkter eller tjänster, eller interagerar med vår webbplats på annat sätt. De personuppgifter vi kan samla in inkluderar namn, kontaktinformation (såsom e-postadress, telefonnummer och adress), betalningsinformation och andra relevanta uppgifter som du frivilligt lämnar till oss.",
    },
    {
      title: "Användning av personuppgifter",
      description:
        "Vi använder dina personuppgifter för att kommunicera med dig och tillhandahålla de tjänster eller produkter som du har begärt. Vi kan också använda dina uppgifter för att skicka dig marknadsföringsmaterial relaterat till våra produkter och tjänster, under förutsättning att du har gett ditt samtycke till detta.\n\nDessutom kan vi använda personuppgifter för att förbättra och anpassa din upplevelse på vår webbplats, analysera trender och beteenden hos våra användare, samt för att uppfylla våra rättsliga skyldigheter och skydda våra rättigheter och intressen.",
    },
    {
      title: "Delning av personuppgifter",
      description:
        "Vi delar endast dina personuppgifter med tredje parter, i de fall det är nödvändigt för att tillhandahålla våra tjänster och produkter till dig. Det kan inkludera att dela uppgifter med leverantörer, betalningsprocessorer och logistikföretag för att möjliggöra hantering av beställningar, betalningar och leveranser.\n\nVi delar inte dina personuppgifter med tredje parter för deras egna marknadsföringsändamål utan ditt uttryckliga samtycke, om inget lagligt undantag föreligger.",
    },
    {
      title: "Dataskydd och säkerhet",
      description:
        "Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot oavsiktlig förlust, missbruk eller obehörig åtkomst. Vi använder krypteringsteknik för att säkra överföring av känsliga uppgifter och begränsar tillgången till personuppgifterna endast till auktoriserad personal som behöver använda dem i syfte att utföra specifika arbetsuppgifter.",
    },
    {
      title: "Dina rättigheter",
      description:
        "Du har rätt att begära åtkomst till de personuppgifter vi har om dig och att begära rättelse av eventuella felaktiga uppgifter. Du har även rätt att begära radering av dina uppgifter under vissa omständigheter, begränsning av behandlingen av dina uppgifter och invändning mot viss behandling av dina uppgifter.\n\nOm du vill utöva dina rättigheter eller har några frågor eller klagomål angående vår hantering av dina personuppgifter, vänligen kontakta oss på",
      subdescription: "info@appstract.se",
    },
    {
      title: "Ändringar av personuppgiftspolicy",
      description:
        "Vi förbehåller oss rätten att ändra denna personuppgiftspolicy när som helst. Eventuella ändringar kommer att publiceras på vår webbplats och träder i kraft omedelbart. Vi rekommenderar att du regelbundet granskar policyn för att hålla dig informerad om eventuella uppdateringar och ändringar.",
    },
  ],
};
const breadcrumbs = [
  { path: paths.home.link, breadcrumb: paths.home.label },
  { path: paths.services.link, breadcrumb: paths.services.label },
  { path: paths.webDevelopment.link, breadcrumb: paths.webDevelopment.label },
  { path: paths.seo.link, breadcrumb: paths.seo.label },
  { path: paths.appDevelopment.link, breadcrumb: paths.appDevelopment.label },
  { path: paths.clients.link, breadcrumb: paths.clients.label },
  { path: paths.contact.link, breadcrumb: paths.contact.label },
  { path: paths.policy.link, breadcrumb: paths.policy.label },
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
  policy,
  breadcrumbs,
  home,
  notFound,
  hamburgerMenuItems,
  contact,
  hamburgerLanguage,
};
