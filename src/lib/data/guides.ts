export interface Guide {
	title: string;
	description: string;
	slug: string;
	content: string;
	image: string;
}

export const guides: Guide[] = [
	{
		title: 'Kom igång med SvelteKit',
		description: 'Guide slug description text',
		slug: '/guider-och-ebocker/kom-igang-med-sveltekit',
		content: `
            <p>Kom igång med SvelteKit och upptäck hur du kan bygga snabba och effektiva webbapplikationer.</p>
            <pre>
                <code>
                    npx create-svelte@next my-sveltekit-project
                </code>
            </pre>
        `,
		image: '/images/guides/default.png'
	},
	{
		title: 'Skapa nya sidor i SvelteKit',
		description: 'Guide slug description text',
		slug: '/guider-och-ebocker/skapa-nya-sidor-i-sveltekit',
		content: `
            <p>Upptäck hur du enkelt kan skapa nya sidor i SvelteKit med hjälp av svelte-add.</p>
            <pre>
                <code>
                    npx svelte-add@latest page my-new-page
                </code>
            </pre>
        `,
		image: '/images/guides/default.png'
	},
	{
		title: 'Utveckla anpassade layouter i SvelteKit',
		description: 'Guide slug description text',
		slug: '/guider-och-ebocker/utveckla-anpassade-layouter-i-sveltekit',
		content: `
            <p>Lär dig att skapa och implementera anpassade layouter för din SvelteKit-applikation.</p>
            <pre>
                <code>
                    npx svelte-add@latest layout my-new-layout
                </code>
            </pre>
        `,
		image: '/images/guides/default.png'
	},
	{
		title: 'Bygg återanvändbara komponenter i SvelteKit',
		description: 'Guide slug description text',
		slug: '/guider-och-ebocker/bygg-ateranvandbara-komponenter-i-sveltekit',
		content: `
            <p>Skapa återanvändbara komponenter och moduler för att effektivisera din SvelteKit-utveckling.</p>
            <pre>
                <code>
                    npx svelte-add@latest component my-new-component
                </code>
            </pre>
        `,
		image: '/images/guides/default.png'
	},
	{
		title: 'Implementera globala tillstånd med stores i SvelteKit',
		description: 'Guide slug description text',
		slug: '/guider-och-ebocker/implementera-globala-tillstand-med-stores-i-sveltekit',
		content: `
            <p>Använd SvelteKit's stores för att hantera globalt tillstånd och delad data på ett effektivt sätt.</p>
            <pre>
                <code>
                    npx svelte-add@latest store my-new-store
                </code>
            </pre>
        `,
		image: '/images/guides/default.png'
	},
	{
		title: 'Skapa och integrera tjänster i SvelteKit',
		description: 'Guide slug description text',
		slug: '/guider-och-ebocker/skapa-och-integrera-tjanster-i-sveltekit',
		content: `
            <p>Lär dig att skapa och integrera externa tjänster och API:er i din SvelteKit-applikation.</p>
            <pre>
                <code>
                    npx svelte-add@latest service my-new-service
                </code>
            </pre>
        `,
		image: '/images/guides/default.png'
	},
	{
		title: 'Använd adaptorer för externa datakällor i SvelteKit',
		description: 'Guide slug description text',
		slug: '/guider-och-ebocker/anvand-adaptorer-for-externa-datakallor-i-sveltekit',
		content: `
            <p>Använd adaptorer för att integrera externa datakällor och anpassa datat i din SvelteKit-applikation.</p>
            <pre>
                <code>
                    npx svelte-add@latest adapter my-new-adapter
                </code>
            </pre>
        `,
		image: '/images/guides/default.png'
	},
	{
		title: 'Skapa anpassade hooks i SvelteKit',
		description: 'Guide slug description text',
		slug: '/guider-och-ebocker/skapa-anpassade-hooks-i-sveltekit',
		content: `
            <p>Lär dig att skapa återanvändbara och anpassade hooks för att förenkla och förbättra din SvelteKit-utveckling.</p>
            <pre>
                <code>
                    npx svelte-add@latest hook my-new-hook
                </code>
            </pre>
        `,
		image: '/images/guides/default.png'
	},
	{
		title: 'Implementera anpassade API-endpoints i SvelteKit',
		description: 'Guide slug description text',
		slug: '/guider-och-ebocker/implementera-anpassade-api-endpoints-i-sveltekit',
		content: `
            <p>Skapa och integrera anpassade API-endpoints i din SvelteKit-applikation för att hantera data och affärslogik.</p>
            <pre>
                <code>
                    npx svelte-add@latest endpoint my-new-endpoint
                </code>
            </pre>
        `,
		image: '/images/guides/default.png'
	}
];
