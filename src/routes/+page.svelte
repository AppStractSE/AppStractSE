<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import HeroSection from '../components/sections/HeroSection.svelte';
	import ProjectsSection from '../components/sections/ProjectsSection.svelte';
	import ServicesSection from '../components/sections/ServicesSection.svelte';
	import ContactSection from '../components/sections/ContactSection.svelte';
	register();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HeroSection />
<ServicesSection />
<ProjectsSection />
<ContactSection />
