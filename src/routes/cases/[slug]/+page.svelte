<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import ShareSocials from '$lib/components/global/bits/ShareSocials.svelte';
	import ArticleCardSection from '$lib/components/global/sections/ArticleCardSection.svelte';
	import BreadcrumbsSection from '$lib/components/global/sections/BreadcrumbsSection.svelte';
	import ContactSection from '$lib/components/global/sections/ContactSection.svelte';
	import ProjectsSection from '$lib/components/global/sections/ProjectsSection.svelte';
	import ServicesSection from '$lib/components/global/sections/ServicesSection.svelte';
	import { services } from '$lib/data/services';
	import Icon from '@iconify/svelte';
	export let data;
	console.log(data);

	$: clientCase = data.clientCase;
</script>

<svelte:head>
	<title>Appstract | {clientCase.client}</title>
	<meta name="description" content="Svelte demo app" />
	<meta property="og:image" content="https://www.youtube.com/img/desktop/yt_1200.png" />
	<meta property="og:title" content="Testing meta content text" />
	<meta property="og:description" content="Testing meta description text" />
</svelte:head>
<section class="my-12 lg:my-24">
	<div class="spacer" />
	<ArticleCardSection
		title={clientCase.title}
		description={clientCase.shortDescription}
		image="/images/cases/maleri-viskan/hero.png"
	/>
	<BreadcrumbsSection />
</section>

<section
	class="relative flex flex-col-reverse items-start justify-between max-w-screen-xl px-4 mx-auto my-12 xl:px-0 lg:flex-row lg:my-24"
>
	<div class="w-full mt-12 lg:sticky lg:top-0 lg:pt-24 lg:-mt-24 lg:basis-2/12 h-fit">
		<div class="lg:divide-y">
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
			<div class="py-4 space-y-4">
				<h3>Dela det här</h3>
				<div class="flex items-center gap-2 text-lg">
					<ShareSocials />
				</div>
			</div>
			<div class="pt-4 space-y-4">
				<Button
					external
					variation="outline"
					title="Besök sidan"
					href="https://www.{clientCase.url}"
				/>
			</div>
		</div>
	</div>
	<div class="space-y-24 lg:basis-9/12">
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
<section class="my-12 lg:my-24">
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
