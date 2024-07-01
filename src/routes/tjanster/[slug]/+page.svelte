<script lang="ts">
	import BreadcrumbsSection from '$lib/components/global/sections/BreadcrumbsSection.svelte';
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
<BreadcrumbsSection />
<WhatWeDoSection {service} />
<EmblaProcessSection {service} />
<ArticleSection {service} />
<ServicesSection />
<ProjectsSection />
<ContactSection />
