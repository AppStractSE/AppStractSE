export interface Case {
	client: string;
	industry: string;
	slug: string;
	title: string;
	shortDescription: string;
	description: string;
	image: string;
	tags: string[];
	url: string;
	solution: {
		title: string;
		intro: string;
		description: string;
	};
	needs: {
		title: string;
		intro: string;
		description: string;
	};
	result: {
		title: string;
		intro: string;
		description: string;
	};
}
export const cases: Case[] = [
	{
		client: 'Måleri Viskan',
		industry: 'Målerifirma',
		slug: '/cases/maleri-viskan',
		url: 'maleriviskan.se',
		title:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		shortDescription:
			'Hos Måleri Viskan behövdes en digital totalrenovering. Vi fick äran att skapa en ny design och utveckla en ny webbplats med moderna tekniker och verktyg.',
		description: 'Description 1',
		image: '/images/cases/maleri-viskan/profile.png',
		tags: ['SEO', 'Webbutveckling', 'UI / UX Design', 'Hosting och drift'],
		solution: {
			title: 'Lösning',
			intro:
				'Appstract utvecklade en responsiv och modern webbplats för Måleri Viskan, med fokus på användarvänlighet och tjänstepresentation.',
			description:
				'Appstract skapade en ny, responsiv webbplats för Måleri Viskan med fokus på modern design och användarvänlighet. Den nya webbplatsen tydliggjorde Måleri Viskans omfattande tjänsteutbud inom inomhus- och utomhusmålning, tapetsering, sprutmålning och fönsterrenovering. Med ett visuellt projektgalleri med högkvalitativa bilder av tidigare projekt och måleriarbeten förstärks företagets expertis och kvalitetsnivå. Ett enkelt kontaktformulär implementerades för att underlätta för besökare att komma i kontakt med Måleri Viskan direkt. SEO-optimering integrerades för att säkerställa hög synlighet och ökad organisk trafik till webbplatsen.'
		},
		needs: {
			title: 'Behov',
			intro:
				'Måleri Viskan behövde förbättra sin digitala närvaro och göra webbplatsen mer användarvänlig för att attrahera fler kunder.',
			description:
				'Måleri Viskan stod inför utmaningen att förbättra sin digitala närvaro för att locka fler kunder till sina målartjänster. Deras tidigare webbplats genererade inte tillräckligt med kundförfrågningar och var svår för besökare att navigera. Det var tydligt att de behövde en mer professionell och användarvänlig webbplats som effektivt kunde presentera deras tjänster och locka nya kunder.'
		},
		result: {
			title: 'Resultat',
			intro:
				'Den nya webbplatsen förbättrade tillgängligheten och användarvänligheten, vilket ledde till ökad kundnöjdhet och fler förfrågningar.',
			description:
				'Resultatet är en webbplats som är lättare att navigera och mer öppen, med fokus på tillgänglighet och användarvänlighet. Informationen på sidan riktar sig främst till kunder i behov av måleri och renovering, och Måleri Viskan har nu en modern plattform som effektivt presenterar deras tjänster och tidigare projekt.'
		}
	},
	{
		client: 'Karl-Alfred Gym',
		industry: 'Gym',
		slug: '/cases/karl-alfred-gym',
		url: 'karlalfredgym.se',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		shortDescription:
			'Hos Karl-Alfred Gym behövdes en digital totalrenovering. Vi fick äran att skapa en ny design och utveckla en ny webbplats med moderna tekniker och verktyg.',
		description: 'Description 2',
		image: '/images/cases/maleri-viskan/profile.png',
		tags: ['SEO', 'Webbutveckling', 'UI / UX Design', 'Hosting och drift'],
		solution: {
			title: 'Lösning',
			intro:
				'Appstract skapade en responsiv webbplats för Karl-Alfred Gym med förbättrad design och integrerat bokningssystem.',
			description:
				'Appstract skapade en ny, responsiv webbplats för Karl-Alfred Gym med fokus på modern design och användarvänlighet. Den nya webbplatsen presenterar gymmets tjänster och anläggningar på ett effektivt sätt. Ett bokningssystem för klasser och personlig träning integrerades, vilket underlättade för medlemmar att planera sina träningspass. SEO-optimering och en användarvänlig gränssnitt förbättrade gymmets digitala närvaro.'
		},
		needs: {
			title: 'Behov',
			intro:
				'Karl-Alfred Gym behövde en modern webbplats med bättre funktionalitet för att attrahera fler medlemmar och underlätta bokningar.',
			description:
				'Karl-Alfred Gym behövde förbättra sin digitala närvaro för att attrahera fler medlemmar och effektivisera bokningsprocessen. Deras tidigare webbplats var föråldrad och saknade funktionalitet för onlinebokningar, vilket ledde till minskad kundnöjdhet och förlorade intäkter.'
		},
		result: {
			title: 'Resultat',
			intro:
				'Den nya webbplatsen ökade kundnöjdheten och bokningar genom förbättrad användarvänlighet och funktionalitet.',
			description:
				'Den nya webbplatsen har lett till en ökad kundnöjdhet och fler bokningar, tack vare dess användarvänlighet och förbättrade funktioner. Karl-Alfred Gym har nu en stark digital närvaro som effektivt stödjer deras marknadsföringsstrategier och kundengagemang.'
		}
	},
	{
		client: 'Elina Wellness',
		industry: 'Fitness & Wellness',
		slug: '/cases/elina-wellness',
		url: 'elinawellness.se',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		shortDescription:
			'Hos Elina Wellness behövdes en digital totalrenovering. Vi fick äran att skapa en ny design och utveckla en ny webbplats med moderna tekniker och verktyg.',
		description: 'Description 3',
		image: '/images/cases/maleri-viskan/profile.png',
		tags: ['SEO', 'Webbutveckling', 'UI / UX Design', 'Hosting och drift'],
		solution: {
			title: 'Lösning',
			intro:
				'Appstract utvecklade en responsiv webbplats för Elina Wellness, med fokus på att förmedla deras holistiska tjänster och underlätta bokningar.',
			description:
				'Appstract skapade en ny, responsiv webbplats för Elina Wellness med fokus på att förmedla företagets holistiska tjänster och program. En integrerad bloggsektion för att dela hälsotips och wellness-artiklar, tillsammans med ett bokningssystem för tjänster, bidrog till att förbättra kundengagemanget. SEO-optimering och en användarvänlig gränssnitt förbättrade företagets digitala närvaro och synlighet online.'
		},
		needs: {
			title: 'Behov',
			intro:
				'Elina Wellness behövde en engagerande webbplats som kunde presentera deras tjänster bättre och förbättra kundengagemanget.',
			description:
				'Elina Wellness behövde en mer engagerande och informativ webbplats för att locka nya kunder och behålla befintliga. Deras tidigare webbplats var föråldrad och saknade de funktioner som krävdes för att presentera deras omfattande tjänsteutbud och underlätta bokningar.'
		},
		result: {
			title: 'Resultat',
			intro:
				'Den nya webbplatsen ökade kundengagemanget och bokningar genom en förbättrad användarupplevelse och funktionalitet.',
			description:
				'Den nya webbplatsen har ökat kundengagemanget och antalet bokningar, tack vare dess användarvänlighet och förbättrade funktioner. Elina Wellness har nu en modern och funktionell plattform som stödjer deras marknadsförings- och kundservicebehov.'
		}
	},
	{
		client: 'Rosers Global',
		industry: 'Globala events & catering',
		slug: '/cases/rosers-catering',
		url: 'rosers.global',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		shortDescription:
			'Hos Rosers Catering behövdes en digital totalrenovering. Vi fick äran att skapa en ny design och utveckla en ny webbplats med moderna tekniker och verktyg.',
		description: 'Description 4',
		image: '/images/cases/maleri-viskan/profile.png',
		tags: ['SEO', 'Webbutveckling', 'UI / UX Design', 'Hosting och drift', 'E-maildesign'],
		solution: {
			title: 'Lösning',
			intro:
				'Appstract skapade en responsiv webbplats för Rosers Global med fokus på deras globala evenemang och catering-tjänster.',
			description:
				'Appstract skapade en ny, responsiv webbplats för Rosers Global med fokus på att lyfta fram deras globala evenemang och catering-tjänster. En omfattande tjänstekatalog och ett galleri med högkvalitativa bilder av tidigare evenemang förstärkte företagets digitala närvaro. SEO-optimering och ett enkelt kontaktformulär implementerades för att förbättra kundinteraktionen och öka organisk trafik.'
		},
		needs: {
			title: 'Behov',
			intro:
				'Rosers Global behövde en modern webbplats för att bättre presentera sina tjänster och locka nya kunder.',
			description:
				'Rosers Global behövde en modern och informativ webbplats för att bättre presentera deras omfattande tjänster inom globala evenemang och catering. Deras tidigare webbplats var inte tillräckligt användarvänlig och saknade nödvändiga funktioner för att locka nya kunder.'
		},
		result: {
			title: 'Resultat',
			intro:
				'Den nya webbplatsen förbättrade Rosers Globals digitala närvaro och kundinteraktion, vilket ökade bokningar och kundnöjdhet.',
			description:
				'Den nya webbplatsen har förbättrat Rosers Globals digitala närvaro och kundinteraktion, vilket har lett till ökad kundnöjdhet och fler bokningar. Företaget har nu en stark plattform som stödjer deras marknadsföringsinsatser och kundservice.'
		}
	},
	{
		client: 'PropertEase',
		industry: 'Property Management',
		slug: '/cases/propertease',
		url: 'propertease.se',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		shortDescription:
			'En rad längre mening. PropertEase är en digital plattform för fastighetsförvaltning som erbjuder en rad tjänster för att underlätta för fastighetsägare. Vi fick äran att skapa både plattformen samt webbplatsen.',
		description: 'Description 4',
		image: '/images/cases/maleri-viskan/profile.png',
		tags: [
			'Apputveckling',
			'SEO',
			'Webbutveckling',
			'UI / UX Design',
			'Hosting och drift',
			'E-maildesign'
		],
		solution: {
			title: 'Lösning',
			intro:
				'Appstract utvecklade en digital plattform för PropertEase som inkluderade en webbplats och mobilapplikation för fastighetsförvaltning.',
			description:
				'Appstract skapade en omfattande digital plattform för PropertEase som inkluderade både en webbplats och en mobilapplikation. Plattformen förenklade fastighetsförvaltningen genom att erbjuda verktyg för bokningar, betalningar och kommunikation med hyresgäster. SEO-optimering och ett användarvänligt gränssnitt förbättrade PropertEase digitala närvaro och synlighet.'
		},
		needs: {
			title: 'Behov',
			intro:
				'PropertEase behövde en centraliserad digital plattform för att effektivisera fastighetsförvaltningen och förbättra kundupplevelsen.',
			description:
				'PropertEase behövde en heltäckande digital plattform för att effektivisera sin fastighetsförvaltning och förbättra kundupplevelsen. Deras tidigare system var fragmenterat och ineffektivt, vilket ledde till ökade kostnader och minskad kundnöjdhet.'
		},
		result: {
			title: 'Resultat',
			intro:
				'Den nya plattformen förbättrade effektiviteten och kundnöjdheten genom en centraliserad lösning för alla förvaltningsbehov.',
			description:
				'Den nya plattformen har förbättrat effektiviteten och kundnöjdheten genom att erbjuda en centraliserad lösning för alla fastighetsförvaltningsbehov. PropertEase har nu en modern och funktionell plattform som stödjer deras affärsstrategier och tillväxt.'
		}
	}
];
