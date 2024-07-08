<script lang="ts">
	import BreadcrumbsBlock from '$lib/components/global/blocks/BreadcrumbsBlock.svelte';
	import ContactSection from '$lib/components/global/sections/ContactSection.svelte';
	import ProjectsSection from '$lib/components/global/sections/ProjectsSection.svelte';
	import ServicesSection from '$lib/components/global/sections/ServicesSection.svelte';
	import HeroSection from '$lib/components/sections/slug/HeroSection.svelte';
	export let data;
	console.log(data);
	$: guide = data.guide;
</script>

<svelte:head>
	<title>Appstract | {guide.title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HeroSection title={guide.title} description={guide.description} />
<BreadcrumbsBlock />
<ServicesSection />
<ProjectsSection />
<ContactSection />
