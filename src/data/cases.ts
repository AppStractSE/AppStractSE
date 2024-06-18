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
	solution: string;
	needs: string;
	result: string;
}
export const cases: Case[] = [
	{
		client: 'Måleri Viskan',
		industry: 'Målerifirma',
		slug: '/cases/maleri-viskan',
		url: 'maleriviskan.se',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		shortDescription:
			'Hos Måleri Viskan behövdes en digital totalrenovering. Vi fick äran att skapa en ny design och utveckla en ny webbplats med moderna tekniker och verktyg.',
		description: 'Description 1',
		image: 'https://via.placeholder.com/150',
		tags: ['SEO', 'Webbutveckling', 'UI / UX Design', 'Hosting och drift'],
		solution:
			'Appstract skapade en ny, responsiv webbplats för Måleri Viskan med fokus på modern design och användarvänlighet. Den nya webbplatsen tydliggjorde Måleri Viskans omfattande tjänsteutbud inom inomhus- och utomhusmålning, tapetsering, sprutmålning och fönsterrenovering. Med ett visuellt projektgalleri med högkvalitativa bilder av tidigare projekt och måleriarbeten förstärks företagets expertis och kvalitetsnivå. Ett enkelt kontaktformulär implementerades för att underlätta för besökare att komma i kontakt med Måleri Viskan direkt. SEO-optimering integrerades för att säkerställa hög synlighet och ökad organisk trafik till webbplatsen.',
		needs:
			'Måleri Viskan stod inför utmaningen att förbättra sin digitala närvaro för att locka fler kunder till sina målartjänster. Deras tidigare webbplats genererade inte tillräckligt med kundförfrågningar och var svår för besökare att navigera. Det var tydligt att de behövde en mer professionell och användarvänlig webbplats som effektivt kunde presentera deras tjänster och locka nya kunder.',
		result:
			'Resultatet är en webbplats som är lättare att navigera och mer öppen, med fokus på tillgänglighet och användarvänlighet. Informationen på sidan riktar sig främst till kunder i behov av måleri och renovering, och Måleri Viskan har nu en modern plattform som effektivt presenterar deras tjänster och tidigare projekt.'
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
		image: 'https://via.placeholder.com/150',
		tags: ['SEO', 'Webbutveckling', 'UI / UX Design', 'Hosting och drift'],
		solution: '',
		needs: '',
		result: ''
	},
	{
		client: 'Elina Wellness',
		industry: 'Hälsa och skönhet',
		slug: '/cases/elina-wellness',
		url: 'elinawellness.se',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		shortDescription:
			'Hos Elina Wellness behövdes en digital totalrenovering. Vi fick äran att skapa en ny design och utveckla en ny webbplats med moderna tekniker och verktyg.',
		description: 'Description 3',
		image: 'https://via.placeholder.com/150',
		tags: ['SEO', 'Webbutveckling', 'UI / UX Design', 'Hosting och drift'],
		solution: '',
		needs: '',
		result: ''
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
		image: 'https://via.placeholder.com/150',
		tags: ['SEO', 'Webbutveckling', 'UI / UX Design', 'Hosting och drift', 'E-maildesign'],
		solution: '',
		needs: '',
		result: ''
	}
];
