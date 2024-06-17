<script>
	import { onMount } from 'svelte';
	import Card from '../../components/Card.svelte';
	import ContactSection from '../../components/sections/ContactSection.svelte';
	import ProjectsSection from '../../components/sections/ProjectsSection.svelte';
	import { services } from '../../data/services';

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
	<div class="max-w-screen-lg px-4 mx-auto space-y-4 text-center xl:px-2 mb-24">
		<h2>En komplett lösning för alla behov</h2>
		<p>
			Appstract erbjuder en rad olika tjänster som passar alla behov. Allt från skräddarsydd
			webbutveckling till grafisk design – vi levererar lösningar som tar ditt företag till nästa
			nivå.
		</p>
	</div>
	<div class="grid grid-cols-3 max-w-screen-xl mx-auto gap-4">
		{#each services.sort((a, b) => a.title.localeCompare(b.title)) as service}
			<Card
				title={service.title}
				href={service.slug}
				description={service.description}
				image={service.image}
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
		font-family: var(--font-varela);
	}
	p {
		@apply max-w-4xl lg:mx-auto text-lg lg:text-center text-balance;
		font-family: var(--font-esteban);
		span {
			@apply font-semibold;
		}
	}
	section {
		@apply my-24;
	}
</style>
