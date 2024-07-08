// src/lib/data/articles.ts

export interface Article {
	title: string;
	slug: string;
	description: string;
	image: string;
	tags: string[];
	url: string;
	content: string;
}

export const articles: Article[] = [
	{
		title: 'Artificiell Intelligens: Framtiden för webbutveckling',
		slug: '/artiklar/artificiell-intelligens-framtiden-webbutveckling',
		description:
			'Utforska hur AI förändrar landskapet för webbutveckling och nya möjligheter det öppnar.',
		image: '/images/articles/default.png',
		tags: ['Artificiell Intelligens', 'Maskininlärning', 'Webbutveckling', 'Trender'],
		url: 'https://example.com/artificiell-intelligens-framtiden-webbutveckling',
		content: `
            <p>Artificiell Intelligens (AI) har revolutionerat webbutveckling genom att automatisera processer, förbättra användarupplevelsen och skapa personliga interaktioner.</p>
            <p>Den här artikeln utforskar hur AI används inom webbutveckling, från automatiserad kodgenerering till kundanpassade användarupplevelser.</p>
        `
	},
	{
		title: 'Progressiva webbapplikationer: Framtiden för mobila webbplatser',
		slug: '/artiklar/progressiva-webbapplikationer-framtiden-mobila-webbplatser',
		description:
			'Lär dig hur progressiva webbapplikationer (PWA) kan förbättra prestanda och användarupplevelse på mobila enheter.',
		image: '/images/articles/default.png',
		tags: ['Progressiva Web Apps', 'Webbutveckling', 'Mobilutveckling', 'Trender'],
		url: 'https://example.com/progressiva-webbapplikationer-framtiden-mobila-webbplatser',
		content: `
            <p>Progressiva webbapplikationer (PWA) kombinerar fördelarna med webb och mobilappar, vilket ger användare snabba laddningstider och offline-funktionalitet.</p>
            <p>Upptäck hur du utvecklar och optimerar PWA för att maximera prestanda och användarupplevelse.</p>
        `
	},
	{
		title: 'Responsiv design: Bästa praxis för fler skärmar',
		slug: '/artiklar/responsiv-design-basta-praxis-fler-skarmar',
		description:
			'Utforska bästa praxis för att skapa responsiva webbplatser som fungerar felfritt på olika enheter och skärmstorlekar.',
		image: '/images/articles/default.png',
		tags: ['Responsiv Design', 'Webbutveckling', 'UI / UX Design', 'Trender'],
		url: 'https://example.com/responsiv-design-basta-praxis-fler-skarmar',
		content: `
            <p>Responsiv design är avgörande för att säkerställa att din webbplats ser bra ut och fungerar optimalt på allt från smartphones till stora skärmar.</p>
            <p>Den här artikeln ger dig bästa praxis och verktyg för att implementera responsiv design och förbättra användarupplevelsen.</p>
        `
	},
	{
		title: 'Headless CMS: Framtiden för innehållshanteringssystem',
		slug: '/artiklar/headless-cms-framtiden-innehallshanteringssystem',
		description:
			'Upptäck fördelarna med headless CMS och hur det revolutionerar sättet vi skapar och levererar innehåll på webben.',
		image: '/images/articles/default.png',
		tags: ['Headless CMS', 'Webbutveckling', 'Content Management', 'Trender'],
		url: 'https://example.com/headless-cms-framtiden-innehallshanteringssystem',
		content: `
            <p>Headless CMS separerar innehåll från presentation, vilket ger utvecklare frihet att använda vilket ramverk eller frontendteknik de föredrar.</p>
            <p>Lär dig hur headless CMS förbättrar flexibiliteten, skalbarheten och prestandan för din webbplats.</p>
        `
	},
	{
		title: 'Optimering för Core Web Vitals: Förbättra din webbplats prestanda',
		slug: '/artiklar/optimering-core-web-vitals-forbattra-prestanda',
		description:
			'Lär dig hur Core Web Vitals kan påverka din webbplats prestanda och hur du optimerar för bättre användarupplevelse.',
		image: '/images/articles/default.png',
		tags: ['Core Web Vitals', 'Webbutveckling', 'Prestandaoptimering', 'Trender'],
		url: 'https://example.com/optimering-core-web-vitals-forbattra-prestanda',
		content: `
            <p>Core Web Vitals är viktiga mätvärden som Google använder för att bedöma användarupplevelsen på webben. Lär dig hur du mäter och förbättrar dem.</p>
            <p>Utforska tekniker som minskar laddningstider, optimerar innehållsleverans och förbättrar interaktivitet för att möta Core Web Vitals-kraven.</p>
        `
	},
	{
		title: 'Säkerhetstrender inom webbutveckling: Hantera nya hot och sårbarheter',
		slug: '/artiklar/sakerhetstrender-webbutveckling-hantera-hot-sarbarheter',
		description:
			'Utforska de senaste säkerhetstrenderna inom webbutveckling och hur du skyddar din webbapplikation mot nya hot.',
		image: '/images/articles/default.png',
		tags: ['Webbutveckling', 'Säkerhet', 'Trender', 'Cybersäkerhet'],
		url: 'https://example.com/sakerhetstrender-webbutveckling-hantera-hot-sarbarheter',
		content: `
            <p>Webbutvecklingslandskapet förändras ständigt med nya hot som kräver uppdaterade säkerhetsstrategier. Lär dig att skydda din webbapplikation.</p>
            <p>Upptäck de senaste säkerhetstrenderna och bästa praxis för att förebygga och hantera hot som SQL-injektioner, DDoS-attacker och mer.</p>
        `
	},
	{
		title: 'Webbteknologier för framtidens e-handel',
		slug: '/artiklar/webbteknologier-framtidens-e-handel',
		description:
			'Upptäck de senaste webbteknologierna som driver framtidens e-handelsupplevelse och kundengagemang.',
		image: '/images/articles/default.png',
		tags: ['E-handel', 'Webbutveckling', 'Trender', 'Kundupplevelse'],
		url: 'https://example.com/webbteknologier-framtidens-e-handel',
		content: `
            <p>Med e-handelens tillväxt är det viktigt att förstå och anpassa sig till de senaste webbteknologierna som förbättrar kundupplevelsen och ökar konverteringar.</p>
            <p>Utforska tekniker som personalisering, realtidsdata och mobila optimeringar för att driva framtidens e-handel.</p>
        `
	},
	{
		title: 'Webbdesign för inkludering: Skapa tillgängliga digitala upplevelser',
		slug: '/artiklar/webbdesign-inkludering-tillgangliga-upplevelser',
		description:
			'Lär dig att integrera tillgänglighetsprinciper i din webbdesign för att skapa inkluderande digitala upplevelser för alla användare.',
		image: '/images/articles/default.png',
		tags: ['Tillgänglighet', 'Webbutveckling', 'UI / UX Design', 'Trender'],
		url: 'https://example.com/webbdesign-inkludering-tillgangliga-upplevelser',
		content: `
            <p>Att göra din webbplats tillgänglig för alla användare är inte bara en god affärsetik, det är också en strategi för att öka din publik och förbättra användarupplevelsen.</p>
            <p>Den här artikeln ger dig verktyg och riktlinjer för att integrera tillgänglighetsprinciper i din webbdesign från början.</p>
        `
	},
	{
		title: 'Designa för mörkt läge: Bästa praxis för en modern användarupplevelse',
		slug: '/artiklar/designa-morkt-lage-basta-praxis-modern-anvandarupplevelse',
		description:
			'Upptäck bästa praxis för att designa webbplatser och appar för mörkt läge, som är populärt bland moderna användare.',
		image: '/images/articles/default.png',
		tags: ['UI Design', 'UX Design', 'Webbutveckling', 'Trender'],
		url: 'https://example.com/designa-morkt-lage-basta-praxis-modern-anvandarupplevelse',
		content: `
            <p>Mörkt läge är en populär design trend som inte bara ger en modern estetik utan också kan minska ögonbelastning och spara batteri på mobila enheter.</p>
            <p>Lär dig hur du implementerar mörkt läge i din design med lämpliga färger, kontraster och användarinställningar.</p>
        `
	},
	{
		title: 'Hållbar webbutveckling: Bygga gröna och energieffektiva webbplatser',
		slug: '/artiklar/hallbar-webbutveckling-bygga-grona-energieffektiva-webbplatser',
		description:
			'Utforska principer för hållbar webbutveckling och hur du kan minska din webbplats miljöpåverkan.',
		image: '/images/articles/default.png',
		tags: ['Hållbarhet', 'Webbutveckling', 'Grön Teknik', 'Trender'],
		url: 'https://example.com/hallbar-webbutveckling-bygga-grona-energieffektiva-webbplatser',
		content: `
            <p>Med ökad medvetenhet om klimatförändringar är hållbarhet viktigt även inom webbutveckling. Lär dig att minska din webbplats miljöpåverkan.</p>
            <p>Upptäck verktyg och strategier för att optimera serverresurser, minska dataöverföring och implementera gröna hostingalternativ.</p>
        `
	},
	{
		title: 'Blockchain-teknologi i webbutveckling: Framtidens decentraliserade webb',
		slug: '/artiklar/blockchain-teknologi-webbutveckling-decentraliserade-webb',
		description:
			'Utforska hur blockchain-teknologi kan förändra webbutvecklingslandskapet genom decentraliserade applikationer (dApps).',
		image: '/images/articles/default.png',
		tags: ['Blockchain', 'Webbutveckling', 'Kryptokurrency', 'Trender'],
		url: 'https://example.com/blockchain-teknologi-webbutveckling-decentraliserade-webb',
		content: `
            <p>Blockchain-teknologi erbjuder en säker och transparent metod för att bygga decentraliserade applikationer (dApps) direkt på webben.</p>
            <p>Lär dig grunderna i blockchain och hur det kan tillämpas för att skapa distribuerade och självständiga webbapplikationer.</p>
        `
	}
];
