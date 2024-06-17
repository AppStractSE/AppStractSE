export interface Case {
	client: string;
	slug: string;
	title: string;
	shortDescription: string;
	description: string;
	image: string;
	tags: string[];
}
export const cases: Case[] = [
	{
		client: 'Måleri Viskan',
		slug: '/cases/maleri-viskan',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		shortDescription:
			'Hos Måleri Viskan behövdes en digital totalrenovering. Vi fick äran att skapa en ny design och utveckla en ny webbplats med moderna tekniker och verktyg.',
		description: 'Description 1',
		image: 'https://via.placeholder.com/150',
		tags: ['tag1', 'tag2']
	},
	{
		client: 'Karl-Alfred Gym',
		slug: '/cases/karl-alfred-gym',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		shortDescription:
			'Hos Karl-Alfred Gym behövdes en digital totalrenovering. Vi fick äran att skapa en ny design och utveckla en ny webbplats med moderna tekniker och verktyg.',
		description: 'Description 2',
		image: 'https://via.placeholder.com/150',
		tags: ['tag1', 'tag2']
	},
	{
		client: 'Elina Wellness',
		slug: '/cases/elina-wellness',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		shortDescription:
			'Hos Elina Wellness behövdes en digital totalrenovering. Vi fick äran att skapa en ny design och utveckla en ny webbplats med moderna tekniker och verktyg.',
		description: 'Description 3',
		image: 'https://via.placeholder.com/150',
		tags: ['tag1', 'tag2']
	},
	{
		client: 'Rosers Catering',
		slug: '/cases/rosers-catering',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		shortDescription:
			'Hos Rosers Catering behövdes en digital totalrenovering. Vi fick äran att skapa en ny design och utveckla en ny webbplats med moderna tekniker och verktyg.',
		description: 'Description 4',
		image: 'https://via.placeholder.com/150',
		tags: ['tag1', 'tag2']
	}
];
