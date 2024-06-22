<script>
	import { onMount } from 'svelte';
	import Card from '../../components/Card.svelte';
	import ContactSection from '../../components/sections/ContactSection.svelte';
	import ProjectsSection from '../../components/sections/ProjectsSection.svelte';
	import { cases } from '../../data/cases';

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
		<div class="grid max-w-screen-xl grid-cols-3 gap-4 mx-auto">
			{#each cases.sort((a, b) => a.title.localeCompare(b.title)) as clientCase}
				<Card
					title={clientCase.title}
					subTitle={clientCase.client}
					href={clientCase.slug}
					buttonText="Gå till kundcase"
					description={clientCase.shortDescription}
					image={clientCase.image}
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
		@apply my-12 lg:my-24;
	}
</style>
