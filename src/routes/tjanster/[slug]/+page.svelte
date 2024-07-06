<script lang="ts">
	import BreadcrumbsBlock from '$lib/components/global/blocks/BreadcrumbsBlock.svelte';
	import ContactSection from '$lib/components/global/sections/ContactSection.svelte';
	import ProjectsSection from '$lib/components/global/sections/ProjectsSection.svelte';
	import ServicesSection from '$lib/components/global/sections/ServicesSection.svelte';
	import ArticleSection from '$lib/components/sections/slug/ArticleSection.svelte';
	import EmblaProcessSection from '$lib/components/sections/slug/EmblaProcessSection.svelte';
	import HeroSection from '$lib/components/sections/slug/HeroSection.svelte';
	import WhatWeDoSection from '$lib/components/sections/slug/WhatWeDoSection.svelte';
	export let data;
	console.log(data);
	$: service = data.service;
</script>

<svelte:head>
	<title>Appstract | {service.title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HeroSection title={service.title} description={service.description} />
<BreadcrumbsBlock />
<section>
	<div class="max-w-screen-xl mx-auto">
		<div class="flex items-center gap-12">
			<div class="basis-6/12 rounded-md overflow-hidden aspect-[1/.9]">
				<img src={service.about.image} class="object-cover w-full h-full" alt="" />
			</div>
			<div class="basis-6/12">
				<h2 class="mb-12">{service.about.title}</h2>
				<p>
					{service.about.description}
				</p>
			</div>
		</div>
	</div>
</section>
<WhatWeDoSection {service} />
<EmblaProcessSection {service} />
<ArticleSection {service} />
<ServicesSection />
<ProjectsSection />
<ContactSection />

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
