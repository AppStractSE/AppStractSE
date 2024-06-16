<script lang="ts">
	import ArticleCardSection from './ArticleCardSection.svelte';
	const articles = [
		{
			title: 'Webbutveckling',
			description:
				'Vi skapar responsiva, skräddarsydda och användarvänliga webbplatser. Det vi utvecklar kan integreras med andra system och har funktioner som är anpassade efter varje verksamhets behov och mål.',
			link: 'Läs mer',
			href: '/your-link-here',
			image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg'
		},
		{
			title: 'Webbutveckling',
			description:
				'Vi skapar responsiva, skräddarsydda och användarvänliga webbplatser. Det vi utvecklar kan integreras med andra system och har funktioner som är anpassade efter varje verksamhets behov och mål.',
			link: 'Läs mer',
			href: '/your-link-here',
			image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg'
		},
		{
			title: 'Webbutveckling',
			description:
				'Vi skapar responsiva, skräddarsydda och användarvänliga webbplatser. Det vi utvecklar kan integreras med andra system och har funktioner som är anpassade efter varje verksamhets behov och mål.',
			link: 'Läs mer',
			href: '/your-link-here',
			image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg'
		}
	];
</script>
<section class="space-y-12">
	{#each articles as article, index}
		<ArticleCardSection
			rtl={index % 2 === 0}
			title={article.title}
			description={article.description}
			link={article.link}
			href={article.href}
			image={article.image}
		/>
	{/each}
</section>

<style lang="scss">
	h2 {
		@apply text-3xl font-bold;
		font-family: var(--font-varela);
	}

	p {
		@apply text-base leading-normal;
		font-family: var(--font-esteban);
	}
</style>
