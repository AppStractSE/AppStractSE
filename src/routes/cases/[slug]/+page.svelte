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
	<a
		href="https://www.{clientCase.url}"
		target="_blank"
		class="flex items-center justify-between grid-cols-3 gap-12 px-6 py-4 mx-auto mb-12 font-bold transition-all duration-200 ease-in-out scale-110 border hover:underline-offset-4 hover:underline hover:scale-125 rounded-xl w-fit"
	>
		<div class="flex gap-2">
			<Icon icon="f7:lock-shield" />
			<Icon icon="material-symbols-light:search" />
		</div>
		<div class="justify-self-center">
			<p>{clientCase.url}</p>
		</div>
		<div class="justify-self-end">
			<Icon icon="material-symbols-light:close" />
		</div>
	</a>
</section>
<section class="my-24">
	<ArticleCardSection
		title={clientCase.title}
		description={clientCase.shortDescription}
		image="/images/cases/maleri-viskan/hero.png"
	/>
</section>

<section class="relative flex items-start max-w-screen-xl gap-12 mx-auto my-24">
	<div class="sticky top-0 pt-24 -mt-24 basis-2/12 h-fit">
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
	<div class="space-y-24 basis-10/12">
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
						src="/images/cases/maleri-viskan/solution.png"
						alt={clientCase.title}
						class="w-full h-auto rounded-md"
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
	<a
		href="https://www.{clientCase.url}"
		target="_blank"
		class="flex items-center justify-between grid-cols-3 gap-12 px-6 py-4 mx-auto mb-12 font-bold transition-all duration-200 ease-in-out scale-110 border hover:underline-offset-4 hover:underline hover:scale-125 rounded-xl w-fit"
	>
		<div class="flex gap-2">
			<Icon icon="f7:lock-shield" />
			<Icon icon="material-symbols-light:search" />
		</div>
		<div class="justify-self-center">
			<p>{clientCase.url}</p>
		</div>
		<div class="justify-self-end">
			<Icon icon="material-symbols-light:close" />
		</div>
	</a>
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
