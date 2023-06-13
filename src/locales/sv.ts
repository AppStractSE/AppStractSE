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

const toasts = {
  success: "Meddelandet har skickats! Vi hör av oss så snart vi kan.",
  error: "Något gick fel, försök igen senare.",
};

const buttons = {
  help: "Så kan vi hjälpa dig",
  contact: "Kontakta oss",
  contactme: "Kontakta mig",
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

const servicepages = {
  webdevelopment: {
    herodescription:
      "Vi samlar alla delar som behövs för att skapa en välfungerande webbplats, inklusive skräddarsydd utveckling och placering av innehåll. Målet är att förbättra konverteringsgraden och stärka ert varumärke.",
    introtitle: "En anpassad webbplats som förverkligar din vision",
    introsubtitle: "Vi förstår vikten av att förvandla din vision till verklighet.",
    introdescription:
      "Genom noggrann utveckling och nära samarbete med dig som kund, skapar vi en webbplats som är anpassad efter dina behov och önskemål. Oavsett om du behöver en enkel företagshemsida, en avancerad e-handelsplattform eller en interaktiv webbapplikation, kan vi leverera en lösning som passar just dig.",
    parts: [
      {
        title: "Planering och analys",
        hovertext: "Läs mer",
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "bg-red-700",
        subtitle:
          "Vår första och viktigaste fas är att förstå din vision och målsättningar för webbplatsen.",
        description:
          "Vi genomför noggranna diskussioner och workshops för att fånga upp alla dina önskemål och behov. Vi analyserar även din målgrupp, marknadstrender och konkurrens för att skapa en strategi som kommer att vara framgångsrik på lång sikt. Med hjälp av vår erfarenhet och expertis i webbutveckling ger vi dig även råd och rekommendationer för att optimera din webbplats.",
      },
      {
        title: "Design och gränssnitt",
        hovertext: "Läs mer",
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "bg-blue-500",
        subtitle: "Efter att vi har en tydlig plan fortsätter vi till designfasen.",
        description:
          "Vi skapar visuella koncept som representerar din varumärkesidentitet och samtidigt tilltalar din målgrupp. Vi fokuserar på att skapa en användarvänlig och estetiskt tilltalande webbplats genom att skapa intuitiva navigeringsstrukturer och en attraktiv visuell design. Vi ser till att din webbplats är responsiv och anpassar sig till olika skärmstorlekar för att ge en konsekvent upplevelse på alla enheter.",
      },
      {
        title: "Utveckling och implementation",
        hovertext: "Läs mer",
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "bg-orange-600",
        subtitle:
          "När designen är godkänd börjar vårt arbeta för att omsätta designen till en fungerande webbplats.",
        description:
          "Vi använder de senaste teknologierna och ramverken för att bygga en stabil och säker webbplats. Vi fokuserar på att skapa skalbara och flexibla lösningar för att underlätta framtida uppgraderingar och anpassningar. Under hela utvecklingsprocessen har vi en öppen kommunikation och regelbundna avstämningar för att säkerställa att resultatet är i linje med dina förväntningar.",
      },
      {
        title: "Testning och lansering",
        hovertext: "Läs mer",
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "bg-green-600",
        subtitle:
          "Innan vi släpper din webbplats för allmänheten genomför vi en rigorös testningsfas för att säkerställa att allt fungerar korrekt och att eventuella buggar eller felaktigheter åtgärdas.",
        description:
          "Vi testar webbplatsen på olika plattformar, webbläsare och enheter för att säkerställa en smidig användarupplevelse överallt. När vi är nöjda med testresultaten och du är nöjd med resultatet är det dags för lansering.\n\nVi hjälper dig med att sätta upp webbplatsen på din valda webbserver och säkerställer att allt är konfigurerat korrekt för att ge en sömlös lansering. Med vår passion för webbutveckling och vårt engagemang för att förverkliga din vision är vi redo att skapa en anpassad webbplats som överträffar dina förväntningar. Kontakta oss idag för att inleda samarbetet och ta din vision till nästa nivå!",
      },
    ],
  },
};

export const svTranslations = {
  nav,
  servicepages,
  buttons,
  services,
  paths,
  policy,
  breadcrumbs,
  toasts,
  home,
  notFound,
  hamburgerMenuItems,
  contact,
  hamburgerLanguage,
};
