<script lang="ts">
	import Icon from '@iconify/svelte';
	import ArticleCardSection from '../../../components/sections/ArticleCardSection.svelte';
	import ContactSection from '../../../components/sections/ContactSection.svelte';
	import ProjectsSection from '../../../components/sections/ProjectsSection.svelte';
	import ServicesSection from '../../../components/sections/ServicesSection.svelte';
	export let data;
	console.log(data);

	$: clientCase = data.clientCase;
</script>

<svelte:head>
	<title>Appstract | {clientCase.client}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="my-24">
	<div class="spacer"></div>
	<ArticleCardSection
		title={clientCase.title}
		description={clientCase.shortDescription}
		image="https://placehold.co/600x400.png"
	/>
</section>
<section class="flex items-start gap-12 max-w-screen-xl mx-auto relative my-24">
	<div class="basis-2/12 pt-24 -mt-24 sticky top-0 h-fit">
		<div class="divide-y">
			<div class="pb-4 space-y-2">
				<h3>Klient</h3>
				<p>{clientCase.client}</p>
			</div>
			<div class="py-4 space-y-2">
				<h3>Plats</h3>
				<p>Marks kommun</p>
			</div>
			<div class="py-4 space-y-2">
				<h3>Bransch</h3>
				<p>Målerifirma</p>
			</div>
			<div class="py-4 space-y-2">
				<h3>Uppdragstyp</h3>
				<p>Webbutveckling, SEO</p>
			</div>
			<div class="pt-4 space-y-4">
				<h3>Dela det här</h3>
				<div class="flex items-center gap-2">
					<a href="#" class="text-2xl">
						<Icon icon="icons8:chevron-up-round" />
					</a>
					<a href="#" class="text-2xl">
						<Icon icon="icons8:chevron-up-round" />
					</a>
					<a href="#" class="text-2xl">
						<Icon icon="icons8:chevron-up-round" />
					</a>
					<a href="#" class="text-2xl">
						<Icon icon="icons8:chevron-up-round" />
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="basis-10/12 space-y-24">
		<section>
			<div class="space-y-4">
				<h2>Behov</h2>
				<p>{clientCase.description}</p>
				<div>
					<img
						src="https://placehold.co/1200x700.png"
						alt={clientCase.title}
						class="w-full h-auto"
					/>
				</div>
			</div>
		</section>
		<section>
			<div class="space-y-4">
				<h2>Lösning</h2>
				<p>{clientCase.description}</p>
				<div>
					<img
						src="https://placehold.co/1200x700.png"
						alt={clientCase.title}
						class="w-full h-auto"
					/>
				</div>
			</div>
		</section>
		<section>
			<div class="space-y-4">
				<h2>Resultat</h2>
				<p>{clientCase.description}</p>
				<div>
					<img
						src="https://placehold.co/1200x700.png"
						alt={clientCase.title}
						class="w-full h-auto"
					/>
				</div>
			</div>
		</section>
	</div>
</section>
<section class="my-24">
	<ArticleCardSection
		rtl
		title={clientCase.title}
		description={clientCase.shortDescription}
		image="https://placehold.co/600x400.png"
	/>
</section>
<ContactSection />
<ServicesSection />
<ProjectsSection />

<style lang="scss">
	h2 {
		@apply text-3xl font-bold;
		font-family: var(--font-varela);
	}

	p {
		@apply text-base leading-normal;
		font-family: var(--font-esteban);
	}
	h3 {
		@apply text-lg font-bold;
		font-family: var(--font-varela);
	}
</style>
