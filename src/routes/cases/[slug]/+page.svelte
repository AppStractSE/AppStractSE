<script lang="ts">
	import Icon from '@iconify/svelte';
	import ArticleCardSection from '../../../components/sections/ArticleCardSection.svelte';
	import ContactSection from '../../../components/sections/ContactSection.svelte';
	import ProjectsSection from '../../../components/sections/ProjectsSection.svelte';
	import ServicesSection from '../../../components/sections/ServicesSection.svelte';
	import { services } from '../../../data/services';
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

<section class="relative flex items-start max-w-screen-xl justify-between mx-auto my-24">
	<div class="sticky top-0 pt-24 -mt-24 basis-2/12 h-fit">
		<div class="divide-y">
			<div class="pb-4 space-y-2">
				<h3>Klient</h3>
				<p>{clientCase.client}</p>
			</div>
			<div class="py-4 space-y-2">
				<h3>Bransch</h3>
				<p>{clientCase.industry}</p>
			</div>
			<div class="py-4 space-y-2">
				<h3>Vårt arbete</h3>
				{#each clientCase.tags as tag}
					<p class="flex items-center gap-2 text-[#464646]">
						<Icon icon="material-symbols-light:check" />
						<a
							href={services.find((x) => x.title === tag)?.slug}
							class="hover:underline hover:underline-offset-4">{tag}</a
						>
					</p>
				{/each}
			</div>
			<div class="pt-4 space-y-4">
				<h3>Dela det här</h3>
				<div class="flex items-center gap-2">
                    <a href="#" class="text-xl">
                        <Icon icon="basil:linkedin-outline" />
                    </a>
					<a href="#" class="text-xl">
                        <Icon icon="iconoir:facebook" />
					</a>
                    <a href="#" class="text-xl">
                        <Icon icon="pajamas:twitter" />
                    </a>
					<a href="#" class="text-2xl">
						<Icon icon="mdi-light:email" />
					</a>
					<a href="#" class="text-2xl">
						<Icon icon="ph:copy-light" />
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="space-y-24 basis-9/12">
		<section>
			<div class="space-y-4">
				<h2>Behov</h2>
				<p>{clientCase.needs}</p>
				<div class="pt-4">
					<img
						src="https://placehold.co/1200x700.png"
						alt={clientCase.title}
						class="w-full h-auto rounded-md"
					/>
				</div>
			</div>
		</section>
		<section>
			<div class="space-y-4">
				<h2>Lösning</h2>
				<p>{clientCase.solution}</p>
				<div class="pt-4">
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
				<p>{clientCase.result}</p>
				<div class="pt-4">
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
