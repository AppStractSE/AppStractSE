<script lang="ts">
	import ContactSection from '$lib/components/global/sections/ContactSection.svelte';
	import HeroSection from '$lib/components/global/sections/HeroSection.svelte';
	import ProjectsSection from '$lib/components/global/sections/ProjectsSection.svelte';
	import ServicesSection from '$lib/components/global/sections/ServicesSection.svelte';
	import ReviewsSection from '$lib/components/global/sections/slug/ReviewsSection.svelte';
	import 'animate.css';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
	export let data;
	console.log(data);
	$: metadata = data.metadata;
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
	<meta property="og:title" content={metadata.ogTitle} />
	<meta property="og:description" content={metadata.ogDescription} />
	<meta property="og:image" content={metadata.ogImage} />
	<meta property="og:url" content={metadata.ogUrl} />
	<meta property="og:type" content={metadata.ogType} />
</svelte:head>

<main
	class="duration-500 transition-all ease-in-out {mounted
		? 'translate-y-0 opacity-100'
		: 'translate-y-12 opacity-0'}"
>
	<div class="spacer"></div>
	<HeroSection />
	<ServicesSection />
	<ProjectsSection />
	<ReviewsSection />
	<ContactSection />
</main>
