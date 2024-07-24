export interface Service {
	title: string;
	slug: string;
	about: {
		title: string;
		description: string;
		image: string;
	};
	description: string;
	image: string;
	hero: {
		image: string;
		description: string;
	};
	article: {
		title: string;
		description: string;
		image: string;
		alt: string;
	};
	what_we_do: {
		title: string;
		description: string;
	}[];
	process: {
		title: string;
		description: string;
		image: string;
	}[];
}

export const services: Service[] = [
	{
		title: 'Webbutveckling',
		slug: '/tjanster/webbutveckling',
		about: {
			title: 'Kvalitativ webbutveckling av Appstract',
			description:
				'I den digitala eran är en webbplats inte bara en online närvaro; det är en möjlighet att skapa en djup koppling med din målgrupp. Vårt fokus ligger på att skapa moderna och responsiva webbplatser som inte bara ser fantastiska ut, utan också levererar en intuitiv och engagerande användarupplevelse. Vi integrerar innovativt tänkande med praktiska funktioner för att säkerställa att varje webbplats vi skapar är anpassad efter dina unika behov och mål.',
			image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg'
		},
		description:
			'Moderna och responsiva unika webbplatser som engagerar och konverterar, med fokus på användarupplevelse och prestanda.',
		image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg',
		hero: {
			image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg',
			description:
				'Vi skapar skräddarsydda webbplatser som levererar en överlägsen användarupplevelse och hög prestanda.'
		},
		article: {
			title: 'Fördelarna med Webbutveckling',
			description:
				'Upptäck hur en modern och responsiv webbplats kan öka ditt företags synlighet och kundengagemang.',
			image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg',
			alt: 'Webbutveckling'
		},
		what_we_do: [
			{
				title: 'Responsiv Design',
				description: 'Vi säkerställer att din webbplats ser bra ut och fungerar på alla enheter.'
			},
			{
				title: 'Prestandaoptimering',
				description:
					'Vi optimerar din webbplats för snabb laddning och bästa möjliga användarupplevelse.'
			},
			{
				title: 'Användarupplevelse',
				description:
					'Vi designar med fokus på användarvänlighet för att maximera engagemang och konverteringar.'
			}
		],
		process: [
			{
				title: 'Planering',
				description:
					'Vi arbetar tillsammans med dig för att förstå dina behov och mål för webbplatsen.',
				image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg'
			},
			{
				title: 'Design',
				description:
					'Vi skapar en visuell design som representerar ditt varumärke och engagerar din målgrupp.',
				image:
					'https://pigment.se/wp-content/uploads/2023/10/pigment-webbyra-case-at-abba-the-museum-950x699.jpg'
			},
			{
				title: 'Utveckling',
				description:
					'Våra erfarna utvecklare bygger en kvalitativ webbplats som uppfyller dina behov och krav.',
				image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg'
			}
		]
	},
	{
		title: 'Hosting och drift',
		about: {
			title: 'Pålitlig hosting för din webbplats',
			description:
				'En pålitlig hostingpartner är avgörande för att din webbplats ska vara tillgänglig och snabb. Våra hostinglösningar är utformade för att maximera prestanda och säkerhet, samtidigt som de ger dig den flexibilitet du behöver för att växa och utvecklas. Vi erbjuder en rad hostingalternativ som passar alla behov och budgetar, från delad hosting till dedikerade servrar och molnbaserade lösningar.',
			image: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg'
		},
		slug: '/tjanster/hosting-och-drift',
		description:
			'Säkra och pålitliga hostinglösningar för att hålla din webbplats uppe och snabbrörlig.',
		image: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg',
		hero: {
			image: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg',
			description:
				'Våra hostinglösningar garanterar hög tillgänglighet och prestanda för din webbplats.'
		},
		article: {
			title: 'Fördelarna med Professionell Hosting',
			description:
				'Lär dig varför det är viktigt att välja en pålitlig hostingpartner för din webbplats.',
			image: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg',
			alt: 'Hosting och drift'
		},
		what_we_do: [
			{
				title: 'Säker Hosting',
				description:
					'Vi erbjuder hostinglösningar med hög säkerhet för att skydda din webbplats och data.'
			},
			{
				title: '24/7 Övervakning',
				description:
					'Vi övervakar din webbplats dygnet runt för att säkerställa att den alltid är tillgänglig.'
			},
			{
				title: 'Snabb Laddningstid',
				description: 'Våra servrar är optimerade för snabb laddningstid och hög prestanda.'
			}
		],
		process: [
			{
				title: 'Behovsanalys',
				description:
					'Vi analyserar dina behov och krav för att rekommendera den bästa hostinglösningen för dig.',
				image: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg'
			},
			{
				title: 'Implementering',
				description:
					'Vi implementerar och konfigurerar din hostinglösning för att säkerställa hög prestanda och säkerhet.',
				image: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg'
			},
			{
				title: 'Support',
				description:
					'Vårt team av hostingexperter finns tillgängliga för att ge support och hjälp när du behöver det.',
				image: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg'
			}
		]
	},
	{
		title: 'Apputveckling',
		about: {
			title: 'Skräddarsydda appar för iOS och Android',
			description:
				'Mobilapplikationer har blivit en viktig del av vår digitala vardag, och en anpassad app kan vara nyckeln till att differentiera ditt varumärke och engagera din målgrupp. Vårt team av erfarna apputvecklare skapar skräddarsydda appar för iOS och Android som är användarvänliga och effektiva. Vi fokuserar på att skapa innovativa mobilapplikationer som ger en sömlös användarupplevelse och hjälper dig att nå dina affärsmål.',
			image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
		},
		slug: '/tjanster/apputveckling',
		description: 'Skräddarsydda appar för iOS och Android som är användarvänliga och effektiva.',
		image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
		hero: {
			image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
			description: 'Vi skapar innovativa mobilapplikationer som ger en sömlös användarupplevelse.'
		},
		article: {
			title: 'Fördelarna med Apputveckling',
			description: 'Upptäck hur en anpassad app kan förbättra din verksamhet och kundengagemang.',
			image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
			alt: 'Apputveckling'
		},
		what_we_do: [
			{
				title: 'iOS och Android',
				description: 'Vi utvecklar appar för både iOS och Android plattformar.'
			},
			{
				title: 'Användarvänlig Design',
				description: 'Våra appar är designade för att vara intuitiva och lätta att använda.'
			},
			{
				title: 'Integration med Backend',
				description: 'Vi säkerställer att din app är fullt integrerad med ditt befintliga system.'
			}
		],
		process: [
			{
				title: 'Planering',
				description: 'Vi arbetar tillsammans med dig för att förstå dina behov och mål för appen.',
				image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
			},
			{
				title: 'Design',
				description:
					'Vi skapar en användarvänlig design som är estetiskt tilltalande och funktionell.',
				image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
			},
			{
				title: 'Utveckling',
				description:
					'Våra erfarna utvecklare skapar en kvalitativ app som uppfyller dina behov och krav.',
				image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
			}
		]
	},
	{
		title: 'Förbättrad design med AI',
		about: {
			title: 'Förbättra din design med AI-teknik',
			description:
				'AI-teknik har revolutionerat designprocessen och möjliggör nya sätt att skapa engagerande och personliga användarupplevelser. Vi kombinerar AI med designexpertis för att skapa webbplatser och appar som är både vackra och funktionella. Våra AI-drivna designlösningar hjälper dig att förbättra din nuvarande design och skapa en mer engagerande upplevelse för dina användare.',
			image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg'
		},
		slug: '/tjanster/forbattrad-design-med-ai',
		description: 'Vi hjälper er lyfta er nuvarande design med hjälp av AI.',
		image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
		hero: {
			image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
			description:
				'Med AI-teknik kan vi förbättra din nuvarande design och skapa en mer engagerande upplevelse.'
		},
		article: {
			title: 'AI-drivna Designförbättringar',
			description: 'Lär dig hur AI kan förbättra din webbplats design och användarupplevelse.',
			image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
			alt: 'Förbättrad design med AI'
		},
		what_we_do: [
			{
				title: 'AI Optimering',
				description: 'Vi använder AI för att analysera och optimera din webbplats design.'
			},
			{
				title: 'Personalisering',
				description:
					'AI-teknik möjliggör personalisering av användarupplevelsen baserat på användarbeteenden.'
			},
			{
				title: 'A/B-testning',
				description: 'Vi använder AI för att genomföra A/B-testning och förbättra designval.'
			}
		],
		process: [
			{
				title: 'Analys',
				description:
					'Vi använder AI för att analysera din nuvarande design och identifiera förbättringsmöjligheter.',
				image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg'
			},
			{
				title: 'Optimering',
				description:
					'Vi använder AI för att optimera din design och skapa en mer engagerande användarupplevelse.',
				image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg'
			},
			{
				title: 'Testning',
				description:
					'Vi genomför A/B-testning och analyserar resultaten för att förbättra designval och konverteringar.',
				image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg'
			}
		]
	},
	{
		title: 'UI / UX Design',
		about: {
			title: 'Skapa vackra och intuitiva användargränssnitt',
			description:
				'Designen av användargränssnitt är avgörande för att skapa en positiv och minnesvärd användarupplevelse. Vårt fokus ligger på att kombinera estetik med funktionalitet, skapa användargränssnitt som inte bara är vackra utan också intuitiva. Vi strävar efter att skapa prototyper som testas och förfinas för att säkerställa att varje designbeslut är optimalt för din målgrupps behov och beteenden.',
			image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg'
		},
		slug: '/tjanster/ui-ux-design',
		description:
			'Designa användargränssnitt som är både vackra och intuitiva för en bättre användarupplevelse.',
		image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg',
		hero: {
			image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg',
			description:
				'Vi skapar användargränssnitt som kombinerar estetik med funktionalitet för en optimal användarupplevelse.'
		},
		article: {
			title: 'Fördelarna med UI/UX Design',
			description:
				'Upptäck hur bra UI/UX design kan förbättra användarupplevelsen och öka konverteringarna.',
			image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg',
			alt: 'UI / UX Design'
		},
		what_we_do: [
			{
				title: 'Användargränssnitt',
				description: 'Vi designar användargränssnitt som är estetiskt tilltalande och lättanvända.'
			},
			{
				title: 'Användarupplevelse',
				description:
					'Vår designprocess fokuserar på att skapa en sömlös och engagerande användarupplevelse.'
			},
			{
				title: 'Prototyping',
				description:
					'Vi skapar prototyper för att testa och förbättra designkoncept innan implementering.'
			}
		],
		process: [
			{
				title: 'Forskning',
				description:
					'Vi genomför användarundersökningar och analyser för att förstå målgruppens behov och beteenden.',
				image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg'
			},
			{
				title: 'Design',
				description:
					'Vi skapar estetiskt tilltalande och intuitiva användargränssnitt baserat på forskningsresultaten.',
				image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg'
			},
			{
				title: 'Testning',
				description:
					'Vi testar och förfinar designkoncept genom prototyper för att säkerställa optimal användarupplevelse.',
				image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg'
			}
		]
	},
	{
		title: 'Digital marknadsföring',
		about: {
			title: 'Öka din online-närvaro med strategiska kampanjer',
			description:
				'I dagens digitala landskap är synlighet och engagemang avgörande för framgång. Vi utvecklar strategiska digitala marknadsföringskampanjer som ökar din online-närvaro och driver konverteringar. Genom att kombinera SEO, PPC och engagerande innehåll, skapar vi målinriktade kampanjer som når din målgrupp vid rätt tidpunkt och på rätt plats.',
			image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
		},
		slug: '/tjanster/digital-marknadsforing',
		description: 'Strategiska kampanjer för att öka din online-närvaro och driva konverteringar.',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		hero: {
			image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
			description:
				'Vi skapar digitala marknadsföringsstrategier som ökar din synlighet online och driver trafik till din webbplats.'
		},
		article: {
			title: 'Effektiv Digital Marknadsföring',
			description:
				'Lär dig hur strategiska digitala kampanjer kan öka din räckvidd och konverteringar.',
			image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
			alt: 'Digital marknadsföring'
		},
		what_we_do: [
			{
				title: 'SEO',
				description: 'Vi optimerar din webbplats för att förbättra dess ranking på sökmotorer.'
			},
			{
				title: 'PPC Kampanjer',
				description: 'Vi skapar och hanterar betalda kampanjer för att maximera din avkastning.'
			},
			{
				title: 'Innehållsmarknadsföring',
				description: 'Vi utvecklar engagerande innehåll som attraherar och behåller din målgrupp.'
			}
		],
		process: [
			{
				title: 'Strategi',
				description:
					'Vi utvecklar en skräddarsydd digital marknadsföringsstrategi för att nå dina affärsmål.',
				image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
			},
			{
				title: 'Genomförande',
				description:
					'Vi implementerar strategin genom att skapa och distribuera kampanjer som når din målgrupp.',
				image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
			},
			{
				title: 'Optimering',
				description:
					'Vi analyserar och optimerar kampanjerna för att maximera deras effektivitet och avkastning.',
				image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
			}
		]
	},
	{
		title: 'E-maildesign',
		about: {
			title: 'Engagerande e-postkampanjer för att nå din målgrupp',
			description:
				'E-postmarknadsföring är en kraftfull kanal för att nå och engagera din publik. Vårt team specialiserar sig på att skapa e-postkampanjer som inte bara når din målgrupp utan också ökar konverteringarna. Vi designar anpassade e-postmallar och automatiserade kampanjer som är optimerade för att leverera relevanta meddelanden och öka dina affärsresultat.',
			image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg'
		},
		slug: '/tjanster/emaildesign',
		description: 'Effektiva och engagerande e-postkampanjer som når din målgrupp.',
		image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg',
		hero: {
			image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg',
			description: 'Vi skapar e-postkampanjer som engagerar din målgrupp och ökar konverteringarna.'
		},
		article: {
			title: 'Framgångsrik E-postmarknadsföring',
			description:
				'Upptäck hur du kan använda e-postmarknadsföring för att nå och engagera din målgrupp effektivt.',
			image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg',
			alt: 'E-maildesign'
		},
		what_we_do: [
			{
				title: 'E-postmallar',
				description: 'Vi designar anpassade e-postmallar som representerar ditt varumärke.'
			},
			{
				title: 'Automatiserade Kampanjer',
				description:
					'Vi skapar automatiserade e-postkampanjer för att engagera din publik vid rätt tidpunkt.'
			},
			{
				title: 'Analyser och Rapportering',
				description:
					'Vi tillhandahåller detaljerade analyser för att mäta framgången av dina e-postkampanjer.'
			}
		],
		process: [
			{
				title: 'Design',
				description: 'Vi designar anpassade e-postmallar som representerar ditt varumärke.',
				image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg'
			},
			{
				title: 'Automatisering',
				description:
					'Vi skapar automatiserade e-postkampanjer för att engagera din publik vid rätt tidpunkt.',
				image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg'
			},
			{
				title: 'Rapportering',
				description:
					'Vi tillhandahåller detaljerade analyser för att mäta framgången av dina e-postkampanjer.',
				image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg'
			}
		]
	},
	{
		title: 'SEO',
		about: {
			title: 'Optimera din webbplats för att ranka högre på sökmotorer',
			description:
				'Optimering för sökmotorer är avgörande för att öka din webbplats synlighet och nå nya kunder online. Vi erbjuder omfattande SEO-tjänster, inklusive on-page optimering, länkbyggande och teknisk SEO, för att förbättra din ranking på sökmotorer. Vår strategi är att skapa hållbara resultat som ökar din webbplats auktoritet och attraherar organisk trafik.',
			image: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg'
		},
		slug: '/tjanster/seo',
		description:
			'Få hjälp med att optimera din webbplats för att ranka högre på sökmotorer och på så sätt nå fler kunder.',
		image: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg',
		hero: {
			image: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg',
			description:
				'Vi hjälper dig att förbättra din webbplats ranking på sökmotorer för att öka trafiken och nå fler kunder.'
		},
		article: {
			title: 'Fördelarna med SEO',
			description:
				'Lär dig hur SEO kan förbättra din synlighet online och driva mer organisk trafik till din webbplats.',
			image: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg',
			alt: 'SEO'
		},
		what_we_do: [
			{
				title: 'On-Page Optimering',
				description:
					'Vi optimerar innehållet på din webbplats för att förbättra dess sökmotorranking.'
			},
			{
				title: 'Länkbyggande',
				description:
					'Vi bygger högkvalitativa länkar för att öka din webbplats auktoritet och ranking.'
			},
			{
				title: 'Teknisk SEO',
				description:
					'Vi genomför tekniska SEO-audits och optimeringar för att förbättra din webbplats prestanda.'
			}
		],
		process: [
			{
				title: 'SEO-audit',
				description:
					'Vi genomför en grundlig analys av din webbplats för att identifiera SEO-möjligheter.',
				image: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg'
			},
			{
				title: 'Optimering',
				description:
					'Vi optimerar din webbplats innehåll, struktur och länkprofil för att förbättra dess ranking.',
				image: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg'
			},
			{
				title: 'Rapportering',
				description:
					'Vi tillhandahåller detaljerade rapporter om din webbplats ranking och trafik för att mäta framgång.',
				image: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg'
			}
		]
	},
	{
		title: 'Sociala medier',
		about: {
			title: 'Bygg och hantera en stark närvaro på sociala medier',
			description:
				'Bygg en stark och engagerad närvaro på sociala medier med våra skräddarsydda strategier och innehållsskapande. Vi erbjuder en omfattande hantering av sociala mediekampanjer som ökar din följares engagemang och konverteringar. Genom att skapa och distribuera relevant innehåll på rätt plattformar, hjälper vi dig att optimera din närvaro och maximera din marknadsföringseffektivitet.',
			image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
		},
		slug: '/tjanster/sociala-medier',
		description: 'Bygg och hantera en stark närvaro på sociala medier för att engagera din publik.',
		image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
		hero: {
			image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
			description:
				'Vi hjälper dig att bygga och hantera en stark närvaro på sociala medier för att engagera din publik.'
		},
		article: {
			title: 'Effektiv Marknadsföring på Sociala Medier',
			description:
				'Lär dig hur du kan använda sociala medier för att nå och engagera din målgrupp.',
			image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
			alt: 'Sociala medier'
		},
		what_we_do: [
			{
				title: 'Sociala Mediestrategier',
				description: 'Vi utvecklar strategier för att optimera din närvaro på sociala medier.'
			},
			{
				title: 'Innehållsskapande',
				description: 'Vi skapar engagerande innehåll som resonerar med din målgrupp.'
			},
			{
				title: 'Kampanjhantering',
				description: 'Vi hanterar dina sociala mediekampanjer för att maximera deras effektivitet.'
			}
		],
		process: [
			{
				title: 'Strategiutveckling',
				description:
					'Vi skapar en skräddarsydd strategi för att optimera din närvaro på sociala medier.',
				image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
			},
			{
				title: 'Innehållsskapande',
				description:
					'Vi skapar engagerande innehåll som resonerar med din målgrupp och ökar engagemanget.',
				image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
			},
			{
				title: 'Kampanjhantering',
				description:
					'Vi hanterar och optimerar dina sociala mediekampanjer för att maximera deras effektivitet.',
				image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
			}
		]
	}
];
