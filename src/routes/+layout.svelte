<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import '../app.scss';
	import GlobalLoader from '../components/GlobalLoader.svelte';
	import Footer from '../components/footer/Footer.svelte';
	import Header from '../components/Header.svelte';
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
