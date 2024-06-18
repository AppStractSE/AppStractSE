export interface Service {
	title: string;
	slug: string;
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
}
export const services: Service[] = [
	{
		title: 'Webbutveckling',
		slug: '/tjanster/webbutveckling',
		description:
			'Moderna och responsiva unika webbplatser som engagerar och konverterar, med fokus på användarupplevelse och prestanda.',
		image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg',
		hero: {
			image: '',
			description: ''
		},
		article: {
			title: 'Article Title',
			description: 'Article Description',
			image: '',
			alt: 'Article Alt'
		},
		what_we_do: [
			{
				title: 'What we do Title',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae'
			},
			{
				title: 'What we do Title 2',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 2'
			},
			{
				title: 'What we do Title 3',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 3'
			}
		]
	},
	{
		title: 'Hosting och drift',
		slug: '/tjanster/hosting-och-drift',
		description:
			'Säkra och pålitliga hostinglösningar för att hålla din webbplats uppe och snabbrörlig.',
		image: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg',
		hero: {
			image: '',
			description: ''
		},
		article: {
			title: 'Article Title',
			description: 'Article Description',
			image: '',
			alt: 'Article Alt'
		},
		what_we_do: [
			{
				title: 'What we do Title',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae'
			},
			{
				title: 'What we do Title 2',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 2'
			},
			{
				title: 'What we do Title 3',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 3'
			}
		]
	},
	{
		title: 'Apputveckling',
		slug: '/tjanster/apputveckling',
		description: 'Skräddarsydda appar för iOS och Android som är användarvänliga och effektiva.',
		image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
		hero: {
			image: '',
			description: ''
		},
		article: {
			title: 'Article Title',
			description: 'Article Description',
			image: '',
			alt: 'Article Alt'
		},
		what_we_do: [
			{
				title: 'What we do Title',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae'
			},
			{
				title: 'What we do Title 2',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 2'
			},
			{
				title: 'What we do Title 3',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 3'
			}
		]
	},
	{
		title: 'Förbättrad design med AI',
		slug: '/tjanster/forbattrad-design-med-ai',
		description: 'Vi hjälper er lyfta er nuvarande design med hjälp av AI.',
		image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
		hero: {
			image: '',
			description: ''
		},
		article: {
			title: 'Article Title',
			description: 'Article Description',
			image: '',
			alt: 'Article Alt'
		},
		what_we_do: [
			{
				title: 'What we do Title',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae'
			},
			{
				title: 'What we do Title 2',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 2'
			},
			{
				title: 'What we do Title 3',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 3'
			}
		]
	},
	{
		title: 'UI / UX Design',
		slug: '/tjanster/ui-ux-design',
		description:
			'Designa användargränssnitt som är både vackra och intuitiva för en bättre användarupplevelse.',
		image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg',
		hero: {
			image: '',
			description: ''
		},
		article: {
			title: 'Article Title',
			description: 'Article Description',
			image: '',
			alt: 'Article Alt'
		},
		what_we_do: [
			{
				title: 'What we do Title',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae'
			},
			{
				title: 'What we do Title 2',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 2'
			},
			{
				title: 'What we do Title 3',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 3'
			}
		]
	},
	{
		title: 'Digital marknadsföring',
		slug: '/tjanster/digital-marknadsforing',
		description: 'Strategiska kampanjer för att öka din online-närvaro och driva konverteringar.',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		hero: {
			image: '',
			description: ''
		},
		article: {
			title: 'Article Title',
			description: 'Article Description',
			image: '',
			alt: 'Article Alt'
		},
		what_we_do: [
			{
				title: 'What we do Title',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae'
			},
			{
				title: 'What we do Title 2',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 2'
			},
			{
				title: 'What we do Title 3',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 3'
			}
		]
	},
	{
		title: 'E-maildesign',
		slug: '/tjanster/emaildesign',
		description: 'Effektiva och engagerande e-postkampanjer som når din målgrupp.',
		image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg',
		hero: {
			image: '',
			description: ''
		},
		article: {
			title: 'Article Title',
			description: 'Article Description',
			image: '',
			alt: 'Article Alt'
		},
		what_we_do: [
			{
				title: 'What we do Title',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae'
			},
			{
				title: 'What we do Title 2',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 2'
			},
			{
				title: 'What we do Title 3',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 3'
			}
		]
	},
	{
		title: 'SEO',
		slug: '/tjanster/seo',
		description:
			'Få hjälp med att optimera din webbplats för att ranka högre på sökmotorer och på så sätt nå fler kunder.',
		image: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg',
		hero: {
			image: '',
			description: ''
		},
		article: {
			title: 'Article Title',
			description: 'Article Description',
			image: '',
			alt: 'Article Alt'
		},
		what_we_do: [
			{
				title: 'What we do Title',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae'
			},
			{
				title: 'What we do Title 2',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 2'
			},
			{
				title: 'What we do Title 3',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 3'
			}
		]
	},
	{
		title: 'Sociala medier',
		slug: '/tjanster/sociala-medier',
		description: 'Bygg och hantera en stark närvaro på sociala medier för att engagera din publik.',
		image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
		hero: {
			image: '',
			description: ''
		},
		article: {
			title: 'Article Title',
			description: 'Article Description',
			image: '',
			alt: 'Article Alt'
		},
		what_we_do: [
			{
				title: 'What we do Title',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae'
			},
			{
				title: 'What we do Title 2',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 2'
			},
			{
				title: 'What we do Title 3',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, consequuntur. Obcaecati ipsam maxime vel velit rem asperiores distinctio eaque, a aperiam eius quidem iste. Soluta magnam facilis inventore aliquam repudiandae 3'
			}
		]
	}
];
