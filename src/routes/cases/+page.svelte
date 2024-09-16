<script>
	import DefaultCard from '$lib/components/cards/DefaultCard.svelte';
	import BreadcrumbsBlock from '$lib/components/global/blocks/BreadcrumbsBlock.svelte';
	import ContactSection from '$lib/components/global/sections/ContactSection.svelte';
	import ServicesSection from '$lib/components/global/sections/ServicesSection.svelte';
	import { cases } from '$lib/data/cases';
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
			<h2>Våra kundcase</h2>
			<p>
				Få en inblick i våra tidigare projekt och se hur vi har hjälpt våra kunder att nå sina mål.
				Vi är stolta över att ha fått förtroendet att arbeta med så många fantastiska kunder. Vi
				hoppas att du blir inspirerad!
			</p>
		</div>
		<BreadcrumbsBlock />
		<div
			class="grid max-w-screen-xl grid-cols-1 gap-6 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:px-0"
		>
			{#each cases.sort((a, b) => a.title.localeCompare(b.title)) as clientCase}
				<DefaultCard
					title={clientCase.client}
					href={clientCase.slug}
					buttonText="Gå till kundcase"
					description={clientCase.shortDescription}
					image={clientCase.heroImage}
				/>
			{/each}
		</div>
	</section>
	<ServicesSection />
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
	section {
		@apply my-12 lg:my-24;
	}
</style>
