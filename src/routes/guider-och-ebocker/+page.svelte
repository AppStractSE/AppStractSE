<script>
	import { onMount } from 'svelte';
	import Card from '../../components/Card.svelte';
	import ContactSection from '../../components/sections/ContactSection.svelte';
	import ProjectsSection from '../../components/sections/ProjectsSection.svelte';
	import { guides } from '../../data/guides';

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
			<h2>Appstracts guider och e-böcker</h2>
			<p>
				Behöver du hjälp med att komma igång med att skapa ditt varumärke, men vill prova-på-själv?
				Här hittar du våra guider och e-böcker som hjälper dig steg för steg. Vårt innehåll är
				koncist, intuitivt och inspirerande för att ge dig den information du behöver för att
				kickstarta ditt varumärke, och mycket av innehållet är helt gratis.
			</p>
		</div>
		<div class="grid max-w-screen-xl grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
			{#each guides.sort((a, b) => a.title.localeCompare(b.title)) as guide}
				<Card
					title={guide.title}
					href={guide.slug}
					description={guide.content}
					image=""
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
