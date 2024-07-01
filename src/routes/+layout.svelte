<script lang="ts">
	import Footer from '$lib/components/footer/Footer.svelte';
	import GlobalLoader from '$lib/components/global/blocks/GlobalLoader.svelte';
	import Header from '$lib/components/Header.svelte';
	import { onDestroy, onMount } from 'svelte';
	import '../app.scss';
	import './styles.scss';
	let mounted = false;
	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 2000);
	});
	onDestroy(() => {
		mounted = false;
	});
	const metadata = {
		title: 'Appstract | Home Test',
		description: 'Welcome to the Appstract demo app homepage.',
		ogTitle: 'Appstract | Home',
		ogDescription: 'Welcome to the Appstract demo app homepage.',
		ogImage: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg',
		ogUrl: 'https://www.dev.appstract.se',
		ogType: 'website'
	};
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

{#if mounted}
	<Header />
	<slot />
	<Footer />
{:else}
	<GlobalLoader />
{/if}
