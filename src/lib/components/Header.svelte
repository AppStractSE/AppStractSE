<script lang="ts">
	import { page } from '$app/stores';
	import Drawer from '$lib/components/drawer/Drawer.svelte';
	import { onDestroy, onMount } from 'svelte';
	let isOpen: boolean = false;
	const handleToggle = () => {
		isOpen = !isOpen;
	};
	let y = 0;
	$: isScroll = y > 0;
	$: isScrollClasses =
		isScroll || isOpen ? 'bg-[#ece9ff] backdrop-blur-md bg-opacity-80' : 'bg-transparent';
	$: innerWidth = 0;
	$: smScreen = innerWidth < 768;
	$: $page.route.id, (isOpen = false);
	let mounted = false;
	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 1000);
	});
	onDestroy(() => {
		mounted = false;
	});
</script>

<header
	class="duration-500 transition-all ease-in-out {mounted
		? 'translate-y-0 opacity-100'
		: '-translate-y-12 opacity-0'}"
>
	<nav class={isScrollClasses}>
		<a href="/" on:click={() => (isOpen = false)}>
			<img src="/images/appstract_logo_black.png" alt="Appstract" />
			<h2>Appstract</h2>
		</a>
		<button on:click={handleToggle}>
			{isOpen ? 'Stäng' : 'Meny'}
		</button>
	</nav>
</header>
<Drawer {isOpen} on:clickAway={handleToggle} on:closeButton={handleToggle} />
<svelte:window bind:innerWidth bind:scrollY={y} />

<style lang="scss">
	img {
		@apply w-8 md:w-12 h-full;
	}
	a {
		@apply flex items-center gap-4;
	}
	header {
		@apply transition-all duration-1000 z-[999] left-0 right-0 fixed top-0 p-0 xl:py-4 md:py-2 md:px-2 max-w-[1328px] mx-auto;
	}
	nav {
		@apply flex items-center justify-between md:rounded px-4 transition-all duration-200 py-4;
	}
	h2 {
		@apply text-lg md:text-xl lowercase font-bold text-[#292929];
		font-family: var(--font-varela);
	}
	button {
		@apply hover:underline-offset-4 hover:underline uppercase text-base transition-all duration-200 ease-in-out text-[#292929];
		font-family: var(--font-varela);
	}
</style>
