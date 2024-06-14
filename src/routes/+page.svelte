<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import ArticleSection from '../components/sections/ArticleSection.svelte';
	import ContactSection from '../components/sections/ContactSection.svelte';
	import HeroSection from '../components/sections/HeroSection.svelte';
	import ProjectsSection from '../components/sections/ProjectsSection.svelte';
	import ServicesSection from '../components/sections/ServicesSection.svelte';
	register();
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main
	class="duration-500 transition-all ease-in-out {mounted
		? 'translate-y-0 opacity-100'
		: 'translate-y-12 opacity-0'}"
>
	<HeroSection />
	<ServicesSection />
	<ProjectsSection />
	<ArticleSection />
	<ContactSection />
</main>
