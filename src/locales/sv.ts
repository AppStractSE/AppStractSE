import { Buttons, Client, ClientTags, General, MetaDescription, Paths } from '../types/types';
import { common } from './common';

const metadescriptions: MetaDescription[] = [
  {
    path: common.paths.home,
    title: 'Webbyrå i Borås | Appstract',
    description:
      'AppStract erbjuder en IT-lösning för alla behov. Vårt mål är att hjälpa dig att lyckas med din verksamhet, och vi har verktygen för att göra det.',
  },
  {
    path: common.paths.contact,
    title: 'Kontakta oss | Appstract',
    description: 'Kontakta oss för att få hjälp med din verksamhet.',
  },
  {
    path: common.paths.services,
    title: 'Tjänster | Appstract',
    description: 'Vi erbjuder ett brett utbud av tjänster för att hjälpa dig med din verksamhet.',
  },
  {
    path: common.paths.webDevelopment,
    title: 'Webbutveckling | Appstract',
    description: 'Vi hjälper er att bygga en hemsida som ni kan vara stolta över, och som era kunder kommer att älska.',
  },
  {
    path: common.paths.seo,
    title: 'Sökmotoroptimering | Appstract',
    description: 'Vi hjälper er att synas bättre på internet, med hjälp av diverse tekniker så som SEO, SEM, och mer.',
  },
  {
    path: common.paths.appDevelopment,
    title: 'Apputveckling | Appstract',
    description: 'Vi hjälper er att bygga en app som ni kan vara stolta över, och som era kunder kommer att älska.',
  },
  {
    path: common.paths.clients,
    title: 'Kunder & projekt | Appstract',
    description: 'Vi har hjälpt många kunder med deras projekt, och vi kan hjälpa dig med ditt.',
  },
  {
    path: common.paths.policy,
    title: 'Personuppgiftspolicy | Appstract',
    description: 'Vi värnar om din integritet, och vi vill att du ska veta hur vi hanterar dina personuppgifter.',
  },
  {
    path: common.paths.notFound,
    title: 'Hoppsan! Något gick fel | Appstract',
    description: 'Det ser ut som att du gått vilse.\nOroa dig inte, vi är här för att rädda dig!',
  },
];

const general: General = {
  read_more: 'Läs mer',
  current_lang: 'sv',
  short_lang: 'en',
};
const paths: Paths = {
  home: {
    link: common.paths.home,
    label: 'Hem',
  },
  contact: {
    link: common.paths.contact,
    label: 'Kontakt',
  },
  services: {
    link: common.paths.services,
    label: 'Tjänster',
  },
  webDevelopment: {
    link: common.paths.webDevelopment,
    label: 'Webbutveckling',
  },
  seo: {
    link: common.paths.seo,
    label: 'Sökmotoroptimering',
  },
  appDevelopment: {
    link: common.paths.appDevelopment,
    label: 'Apputveckling',
  },
  clients: {
    link: common.paths.clients,
    label: 'Kunder & projekt',
  },
  policy: {
    link: common.paths.policy,
    label: 'Personuppgiftspolicy',
  },
  notFound: {
    link: common.paths.notFound,
    label: '404',
  },
};

const hamburgerLanguage = 'English';
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
  title: 'Hoppsan! Något gick fel.',
  description: 'Det ser ut som att du gått vilse.\nOroa dig inte, vi är här för att rädda dig!',
};

const contactForm = {
  title: 'Ja, tack! Jag vill gärna bli kontaktad!',
  name: 'För- och efternamn',
  email: 'Email',
  message: 'Meddelande',
  phone: 'Telefonnummer',
  info: 'Genom att klicka på skicka godkänner du vår',
  policy: 'personuppgiftspolicy',
};

const toasts = {
  success: 'Meddelandet har skickats! Vi hör av oss så snart vi kan.',
  error: 'Något gick fel, försök igen senare.',
};

const buttons: Buttons = {
  help: 'Hur vi kan hjälpa dig',
  contact: 'Kontakta oss',
  contactme: 'Kontakta mig',
  send: 'Skicka',
  back: 'Tillbaka',
  submit: 'Skicka',
};

const home = {
  title: 'Webbyrå i Borås',
  description:
    'AppStract erbjuder en IT-lösning för alla behov. Vårt mål är att hjälpa dig att lyckas med din verksamhet, och vi har verktygen för att göra det.',
  buttons: {
    contact: buttons.contact,
    help: buttons.help,
  },
  serviceTitle: 'Våra tjänster',
  serviceDescription: 'Vi erbjuder ett brett utbud av tjänster för att hjälpa dig med din verksamhet.',
  phraseTitle: 'Det pålitliga valet för ',
  phrases: [
    'responsiva designer',
    'webbapplikationer',
    'systemutveckling',
    'webbdesign',
    'skräddarsydda IT-lösningar',
    'SEO-tjänster',
    'webbutveckling',
    'apputveckling',
  ],
};

const services = [
  {
    title: paths.webDevelopment.label,
    description: 'Vi hjälper er att bygga en hemsida som ni kan vara stolta över, och som era kunder kommer att älska.',
    image:
      'https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png',
    link: paths.webDevelopment.link,
    bg: ['blue-800', 'blue-600'],
  },
  {
    title: paths.seo.label,
    description: 'Vi hjälper er att synas bättre på internet, med hjälp av diverse tekniker så som SEO, SEM, och mer.',
    image:
      'https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png',
    link: paths.seo.link,
    bg: ['bluegray-800', 'indigo-600'],
  },
  {
    title: paths.appDevelopment.label,
    description: 'Vi hjälper er att bygga en app som ni kan vara stolta över, och som era kunder kommer att älska.',
    image:
      'https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png',
    link: paths.appDevelopment.link,
    bg: ['cyan-800', 'teal-600'],
  },
];

const policy = {
  title: 'Personuppgiftspolicy',
  subtitle: "AppStract's behandling av dina personuppgifter",
  description:
    'Vi värnar om din integritet och strävar efter att skydda dina personuppgifter på bästa sätt. Denna personuppgiftspolicy beskriver hur vi samlar in, använder och skyddar dina personuppgifter när du besöker vår hemsida. Vi följer tillämpliga dataskyddslagar och strävar efter att vara transparenta i våra insamlings- och användningspraxis.',
  sections: [
    {
      title: 'Insamling av personuppgifter',
      description:
        'Vi samlar in personuppgifter från dig när du registrerar dig för vårt nyhetsbrev, skickar in förfrågningar via vårt kontaktformulär, genomför köp av våra produkter eller tjänster, eller interagerar med vår webbplats på annat sätt. De personuppgifter vi kan samla in inkluderar namn, kontaktinformation (såsom e-postadress, telefonnummer och adress), betalningsinformation och andra relevanta uppgifter som du frivilligt lämnar till oss.',
    },
    {
      title: 'Användning av personuppgifter',
      description:
        'Vi använder dina personuppgifter för att kommunicera med dig och tillhandahålla de tjänster eller produkter som du har begärt. Vi kan också använda dina uppgifter för att skicka dig marknadsföringsmaterial relaterat till våra produkter och tjänster, under förutsättning att du har gett ditt samtycke till detta.\n\nDessutom kan vi använda personuppgifter för att förbättra och anpassa din upplevelse på vår webbplats, analysera trender och beteenden hos våra användare, samt för att uppfylla våra rättsliga skyldigheter och skydda våra rättigheter och intressen.',
    },
    {
      title: 'Delning av personuppgifter',
      description:
        'Vi delar endast dina personuppgifter med tredje parter, i de fall det är nödvändigt för att tillhandahålla våra tjänster och produkter till dig. Det kan inkludera att dela uppgifter med leverantörer, betalningsprocessorer och logistikföretag för att möjliggöra hantering av beställningar, betalningar och leveranser.\n\nVi delar inte dina personuppgifter med tredje parter för deras egna marknadsföringsändamål utan ditt uttryckliga samtycke, om inget lagligt undantag föreligger.',
    },
    {
      title: 'Dataskydd och säkerhet',
      description:
        'Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot oavsiktlig förlust, missbruk eller obehörig åtkomst. Vi använder krypteringsteknik för att säkra överföring av känsliga uppgifter och begränsar tillgången till personuppgifterna endast till auktoriserad personal som behöver använda dem i syfte att utföra specifika arbetsuppgifter.',
    },
    {
      title: 'Dina rättigheter',
      description:
        'Du har rätt att begära åtkomst till de personuppgifter vi har om dig och att begära rättelse av eventuella felaktiga uppgifter. Du har även rätt att begära radering av dina uppgifter under vissa omständigheter, begränsning av behandlingen av dina uppgifter och invändning mot viss behandling av dina uppgifter.\n\nOm du vill utöva dina rättigheter eller har några frågor eller klagomål angående vår hantering av dina personuppgifter, vänligen kontakta oss på',
      subdescription: 'info@appstract.se',
    },
    {
      title: 'Ändringar av personuppgiftspolicy',
      description:
        'Vi förbehåller oss rätten att ändra denna personuppgiftspolicy när som helst. Eventuella ändringar kommer att publiceras på vår webbplats och träder i kraft omedelbart. Vi rekommenderar att du regelbundet granskar policyn för att hålla dig informerad om eventuella uppdateringar och ändringar.',
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
  { path: paths.notFound.link, breadcrumb: paths.notFound.label },
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
      'Vi samlar alla delar som behövs för att skapa en välfungerande webbplats, inklusive skräddarsydd utveckling och placering av innehåll. Målet är att förbättra konverteringsgraden och stärka ert varumärke.',
    introtitle: 'En anpassad webbplats som förverkligar din vision',
    introsubtitle: 'Vi förstår vikten av att förvandla din vision till verklighet.',
    introdescription:
      'Genom noggrann utveckling och nära samarbete med dig som kund, skapar vi en webbplats som är anpassad efter dina behov och önskemål. Oavsett om du behöver en enkel företagshemsida, en avancerad e-handelsplattform eller en interaktiv webbapplikation, kan vi leverera en lösning som passar just dig.',
    parts: [
      {
        title: 'Planering & analys',
        hovertext: general.read_more,
        image:
          'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        background: 'red-700',
        subtitle: 'Vår första och viktigaste fas är att förstå din vision och målsättningar för webbplatsen.',
        description:
          'Vi genomför noggranna diskussioner och workshops för att fånga upp alla dina önskemål och behov. Vi analyserar även din målgrupp, marknadstrender och konkurrens för att skapa en strategi som kommer att vara framgångsrik på lång sikt. Med hjälp av vår erfarenhet och expertis i webbutveckling ger vi dig även råd och rekommendationer för att optimera din webbplats.',
      },
      {
        title: 'Design & gränssnitt',
        hovertext: general.read_more,
        image:
          'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        background: 'blue-500',
        subtitle: 'Efter att vi har en tydlig plan fortsätter vi till designfasen.',
        description:
          'Vi skapar visuella koncept som representerar din varumärkesidentitet och samtidigt tilltalar din målgrupp. Vi fokuserar på att skapa en användarvänlig och estetiskt tilltalande webbplats genom att skapa intuitiva navigeringsstrukturer och en attraktiv visuell design. Vi ser till att din webbplats är responsiv och anpassar sig till olika skärmstorlekar för att ge en konsekvent upplevelse på alla enheter.',
      },
      {
        title: 'Utveckling & implementation',
        hovertext: general.read_more,
        image:
          'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        background: 'orange-600',
        subtitle: 'När designen är godkänd börjar vårt arbeta för att omsätta designen till en fungerande webbplats.',
        description:
          'Vi använder de senaste teknologierna och ramverken för att bygga en stabil och säker webbplats. Vi fokuserar på att skapa skalbara och flexibla lösningar för att underlätta framtida uppgraderingar och anpassningar. Under hela utvecklingsprocessen har vi en öppen kommunikation och regelbundna avstämningar för att säkerställa att resultatet är i linje med dina förväntningar.',
      },
      {
        title: 'Testning & lansering',
        hovertext: general.read_more,
        image:
          'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        background: 'green-600',
        subtitle:
          'Innan vi släpper din webbplats för allmänheten genomför vi en rigorös testningsfas för att säkerställa att allt fungerar korrekt och att eventuella buggar eller felaktigheter åtgärdas.',
        description:
          'Vi testar webbplatsen på olika plattformar, webbläsare och enheter för att säkerställa en smidig användarupplevelse överallt. När vi är nöjda med testresultaten och du är nöjd med resultatet är det dags för lansering.\n\nVi hjälper dig med att sätta upp webbplatsen på din valda webbserver och säkerställer att allt är konfigurerat korrekt för att ge en sömlös lansering. Med vår passion för webbutveckling och vårt engagemang för att förverkliga din vision är vi redo att skapa en anpassad webbplats som överträffar dina förväntningar. Kontakta oss idag för att inleda samarbetet och ta din vision till nästa nivå!',
      },
    ],
  },
  seo: {
    herodescription:
      'Förbättra din webbplatsens synlighet och placeringar på sökmotorer med våra SEO-tjänster. Vi optimerar din webbplatsens innehåll, struktur och prestanda för att attrahera organisk trafik och öka konverteringar.',
    introtitle: 'Förstärk din online-närvaro med effektiva SEO-strategier',
    introsubtitle: 'Uppnå din webbplats potential med vår SEO-expertis.',
    introdescription:
      'Våra SEO-tjänster fokuserar på att förbättra din webbplats synlighet i sökmotorresultat. Genom att implementera beprövade strategier och tekniker hjälper vi dig att nå en bredare publik och driva riktad trafik till din webbplats. Oavsett om du behöver optimering på sidan, sökordsanalys, länkbyggande eller teknisk SEO, står vårt team av experter redo att assistera dig.',
    parts: [
      {
        title: 'Sökordsanalys',
        hovertext: general.read_more,
        image:
          'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        background: 'purple-500',
        subtitle:
          'Vi utför noggrann sökordsanalys för att identifiera de mest relevanta och värdefulla sökorden för ditt företag.',
        description:
          'Vårt team använder olika verktyg och tekniker för att fastställa vilka sökord din målgrupp använder för att hitta produkter eller tjänster liknande dina. Genom att strategiskt integrera dessa sökord i din webbplatsens innehåll och metadata kan vi förbättra din webbplats synlighet och attrahera mer kvalificerad trafik.',
      },
      {
        title: 'Optimering på sidan',
        hovertext: general.read_more,
        image:
          'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        background: 'orange-600',
        subtitle: 'Vi optimerar din webbplatsens struktur och innehåll för förbättrad synlighet i sökmotorer.',
        description:
          'Vårt team analyserar din webbplatsens struktur, URL:er, rubriker och innehåll för att säkerställa att de överensstämmer med bästa SEO-praxis. Vi optimerar din webbplatsens meta-taggar, bildalternativtexter, intern länkning och andra element på sidan för att förbättra sökmotorers förståelse av din webbplatsens innehåll.',
      },
      {
        title: 'Länkbyggande',
        hovertext: general.read_more,
        image:
          'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        background: 'blue-600',
        subtitle: 'Vi bygger högkvalitativa bakåtlänkar för att förbättra din webbplatsens auktoritet och placeringar.',
        description:
          'Vårt team använder effektiva strategier för länkbyggande för att skaffa auktoritativa och relevanta bakåtlänkar till din webbplats. Genom att förtjäna dessa länkar från pålitliga källor ökar din webbplats auktoritet och trovärdighet, vilket leder till förbättrade placeringar på sökmotorer och organisk trafik.',
      },
      {
        title: 'Teknisk SEO',
        hovertext: general.read_more,
        image:
          'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        background: 'green-600',
        subtitle:
          'Vi optimerar din webbplatsens tekniska aspekter för att förbättra prestanda och sökmotorers indexering.',
        description:
          'Vårt team åtgärdar tekniska problem som kan påverka din webbplats synlighet på sökmotorer. Vi optimerar webbplatsens hastighet, säkerställer mobilvänlighet, fixar trasiga länkar och implementerar strukturerad data, bland andra tekniska optimeringar. Genom att erbjuda en smidig användarupplevelse och uppfylla sökmotorers riktlinjer kan din webbplats synlighet och placeringar förbättras avsevärt.',
      },
    ],
  },
  appdevelopment: {
    herodescription:
      'Förbättra synligheten och räckvidden för din app i appbutiker med våra ASO-tjänster. Vi optimerar din apps metadata, nyckelord och prestanda för att attrahera organiska nedladdningar och öka konverteringar.',
    introtitle: 'Stärk din apps närvaro med effektiva ASO-strategier',
    introsubtitle: 'Lås upp potentialen i din app med vår ASO-expertis.',
    introdescription:
      'Våra ASO-tjänster fokuserar på att förbättra din apps synlighet i appbutikens sökresultat. Genom att implementera beprövade strategier och tekniker hjälper vi dig att nå en bredare publik och driva målinriktade nedladdningar till din app. Oavsett om du behöver appbutiksoptimering, nyckelordsundersökning, lokalisering eller optimering av appens prestanda, finns vårt expertteam redo att hjälpa dig.',
    parts: [
      {
        title: 'Konceptualisering och Planering',
        hovertext: general.read_more,
        image:
          'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        background: 'purple-500',
        subtitle: 'Definiera appens syfte, målgrupp och planera dess funktioner och funktionalitet.',
        description:
          'I detta inledande skede brainstormar vi idéer, identifierar målgruppen och definierar mål och syften för din app. Vi planerar dess funktioner, funktionalitet och användarupplevelse. Detta steg innefattar marknadsundersökning, konkurrentanalys och skapande av wireframes eller prototyper för att visualisera appens struktur och flöde.',
      },
      {
        title: 'Design och Användargränssnitt',
        hovertext: general.read_more,
        image:
          'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        background: 'orange-600',
        subtitle: 'Skapa en tilltalande och användarvänlig design som överensstämmer med din apps varumärke och syfte.',
        description:
          'Under denna fas designar vi appens visuella element, inklusive layout, färgscheman, typografi och ikoner. Målet är att skapa en intuitiv och visuellt tilltalande användargränssnitt (UI) som återspeglar din apps varumärkesidentitet.',
      },
      {
        title: 'Utveckling och Testning',
        hovertext: general.read_more,
        image:
          'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        background: 'blue-600',
        subtitle:
          'Bygg appens backend, frontend och genomför grundlig testning för att säkerställa funktionalitet och prestanda.',
        description:
          'I detta skede skriver utvecklare kod för att implementera appens funktioner och funktionalitet. Utvecklingen av backend innebär att sätta upp servrar, databaser och API:er för att hantera data och affärslogik. Utvecklingen av frontend fokuserar på att bygga användargränssnittet och integrera det med backend. Grundlig testning utförs vid varje steg för att identifiera och fixa buggar, och säkerställa appens funktionalitet, användbarhet och prestanda.',
      },
      {
        title: 'Distribution och Underhåll',
        hovertext: general.read_more,
        image:
          'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        background: 'green-600',
        subtitle:
          'Distribuera appen till appbutiker eller plattformar och tillhandahåll kontinuerligt underhåll och uppdateringar.',
        description:
          'När appen är utvecklad och testad är den redo för distribution. Detta innebär att publicera den i appbutiker som Apple App Store eller Google Play Store, eller distribuera den till relevanta plattformar.\n\nEfter distributionen är det viktigt att övervaka användarfeedback, fixa eventuella problem och släppa uppdateringar för att förbättra appens funktionalitet och tillgodose användarnas behov. Kontinuerligt underhåll, prestandaoptimering och regelbundna uppdateringar säkerställer appens långsiktiga hållbarhet och användarnöjdhet.',
      },
    ],
  },
};

const clientTags: ClientTags = {
  showAll: 'Visa alla',
  apps: 'Appar',
  webapps: 'Webbapplikationer',
  seo: 'SEO',
};

const cases: Client[] = [
  {
    title: 'PropertEase',
    subtitle:
      'Propertease is a comprehensive property management platform that provides users with essential tools for managing properties.',
    logo: 'https://justifiedcoding.org/wp-content/uploads/2019/01/Client-Logo-Placeholder.png',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    description:
      'PropertEase revolutionerar fastighetsadministration genom att erbjuda effektiva verktyg för hantering av fastigheter och kunder, vilket resulterar i en smidigare och mer lönsam process.',
    link: 'https://appstract.se',
    slug: 'propertease',
    tags: [clientTags.apps, clientTags.webapps],
    active: true,
    bg: ['indigo-500'],
  },
  {
    title: 'En vanlig sommelier',
    subtitle: 'Kommer snart',
    logo: 'https://justifiedcoding.org/wp-content/uploads/2019/01/Client-Logo-Placeholder.png',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    description: 'Kommer snart',
    link: 'https://envanligsommelier.se',
    slug: 'en-vanlig-sommelier',
    tags: [clientTags.webapps],
    active: false,
    bg: ['red-600'],
  },
];

const clients = {
  description:
    'Vi på Appstract är stolta över att ha arbetat med en mångfald av kunder och projekt. Vi älskar den variation som vår bransch erbjuder och att få möjligheten att bidra till olika branscher och projekt. Nedan kan du se ett urval av våra senaste projekt.',
  cases: cases,
};

const contact = {
  title: 'Kom i kontakt med oss',
  description:
    'Vi på Appstract kan det mesta inom digitala och webbaserade lösningar och kan därmed hjälpa er med en rad olika behov. Oavsett om ni behöver utveckla en app, designa en hemsida eller implementera en anpassad mjukvarulösning, är vi här för att hjälpa er.',
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
  general,
  metadescriptions,
  clients,
  clientTags,
  contactForm,
};
