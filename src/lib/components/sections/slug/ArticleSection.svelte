<script lang="ts">
	import ArticleCardSection from '../../global/sections/ArticleCardSection.svelte';
	export let service;
</script>

<section>
	<ArticleCardSection
		rtl
		title={service.article.title}
		description={service.article.description}
		image="https://placehold.co/600x400.png"
	/>
</section>

<style lang="scss">
	section {
		@apply my-12 lg:my-24;
	}
</style>
