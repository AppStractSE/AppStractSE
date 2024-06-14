<script>
	import { onMount } from 'svelte';
	import ContactSection from '../../components/sections/ContactSection.svelte';
	import HeroSection from '../../components/sections/HeroSection.svelte';
	import ProjectsSection from '../../components/sections/ProjectsSection.svelte';
	import ServicesSection from '../../components/sections/ServicesSection.svelte';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<main
	class="duration-500 transition-all ease-in-out {mounted
		? 'translate-y-0 opacity-100'
		: 'translate-y-12 opacity-0'}"
>
	<ContactSection />
	<ServicesSection />
	<ProjectsSection />
	<HeroSection />
</main>

<style></style>
