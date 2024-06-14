<script lang="ts">
	import ArticleCardSection from './ArticleCardSection.svelte';
</script>

<section class="space-y-12">
	<ArticleCardSection
		title="Webbutveckling"
		description="Vi skapar responsiva, skräddarsydda och användarvänliga webbplatser. Det vi utvecklar kan integreras med andra system och har funktioner som är anpassade efter varje verksamhets behov och mål."
		link="Läs mer"
		href="/your-link-here"
		image="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg"
	/>
	<ArticleCardSection
		rtl
		title="Webbutveckling"
		description="Vi skapar responsiva, skräddarsydda och användarvänliga webbplatser. Det vi utvecklar kan integreras med andra system och har funktioner som är anpassade efter varje verksamhets behov och mål."
		link="Läs mer"
		href="/your-link-here"
		image="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg"
	/>
	<ArticleCardSection
		title="Webbutveckling"
		description="Vi skapar responsiva, skräddarsydda och användarvänliga webbplatser. Det vi utvecklar kan integreras med andra system och har funktioner som är anpassade efter varje verksamhets behov och mål."
		link="Läs mer"
		href="/your-link-here"
		image="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg"
	/>
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
