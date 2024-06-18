<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import ArticleCardSection from '../components/sections/ArticleCardSection.svelte';
	import ArticleSection from '../components/sections/ArticleSection.svelte';
	import ContactSection from '../components/sections/ContactSection.svelte';
	import HeroSection from '../components/sections/HeroSection.svelte';
	import ProjectsSection from '../components/sections/ProjectsSection.svelte';
	import ServicesSection from '../components/sections/ServicesSection.svelte';
	import ThreeColumnsSection from '../components/sections/ThreeColumnsSection.svelte';
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
	<div class="spacer"></div>
	<HeroSection />
	<ThreeColumnsSection />
	<ServicesSection />
	<section class="my-12 lg:my-24">
		<ArticleCardSection
			title="Estetiskt och stabilt"
			description="Det räcker inte med en snygg webbsida – den måste också vara funktionell. Med vår expertis inom UI/UX Design och webbutveckling ser vi till att era digitala ytor inte bara är estetiskt tilltalande, utan även användarvänliga och konverterande. För er som vill ha mycket funktion på köpet erbjuder vi professionell WordPress- och WooCommerce-utveckling. Har ni behov av 100% skräddarsytt, erbjuder vi handbyggda plattformar i Laravel, REST-API och integrationer mot tredjepartssystem."
			link="Läs mer"
			href="/"
			image="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg"
		/>
	</section>
	<ProjectsSection />
	<ArticleSection />
	<ContactSection />
</main>
