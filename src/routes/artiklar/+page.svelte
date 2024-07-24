<script>
	import DefaultCard from '$lib/components/cards/DefaultCard.svelte';
	import BreadcrumbsBlock from '$lib/components/global/blocks/BreadcrumbsBlock.svelte';
	import ContactSection from '$lib/components/global/sections/ContactSection.svelte';
	import ProjectsSection from '$lib/components/global/sections/ProjectsSection.svelte';
	import { articles } from '$lib/data/articles';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<main
	class="duration-500 transition-all ease-in-out {mounted
		? 'translate-y-0 opacity-100'
		: 'translate-y-12 opacity-0'}"
>
	<section>
		<div class="spacer"></div>
		<div class="max-w-screen-lg px-4 mx-auto mb-24 space-y-4 text-center xl:px-2">
			<h2>Artiklar</h2>
			<p>
				Här hittar du alla våra artiklar. <span>Vi uppdaterar regelbundet</span> med nya artiklar och
				guider.
			</p>
		</div>
		<BreadcrumbsBlock />
		<div
			class="grid max-w-screen-xl grid-cols-1 gap-4 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:px-0"
		>
			{#each articles.sort((a, b) => a.title.localeCompare(b.title)) as article}
				<DefaultCard
					title={article.title}
					href={article.slug}
					description={article.content}
					image={article.image}
				/>
			{/each}
		</div>
	</section>

	<ProjectsSection />
	<ContactSection />
</main>

<style lang="scss">
	h2 {
		@apply lg:text-center text-3xl lg:text-4xl text-balance;
	}
	p {
		@apply max-w-4xl lg:mx-auto text-lg lg:text-center text-balance;
		span {
			@apply font-semibold;
		}
	}
</style>
