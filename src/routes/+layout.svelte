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
</script>

{#if mounted}
	<Header />
	<slot />
	<Footer />
{:else}
	<GlobalLoader />
{/if}
