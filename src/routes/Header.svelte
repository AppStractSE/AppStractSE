<script lang="ts">
	import Icon from '@iconify/svelte';
	import Drawer from '../components/Drawer.svelte';
	import { navigation } from '../data/navigation';
	let isOpen: boolean = false;
	const handleToggle = () => {
		isOpen = !isOpen;
		console.log('isOpen', isOpen);
	};
	let y = 0;
	$: isScroll = y > 0;
	$: isScrollClasses = isScroll ? 'bg-[#ece9ff]' : 'bg-transparent';
	$: headerClasses = 'transition-all duration-200 z-50 left-0 right-0 sticky top-0 py-4';
	$: innerWidth = 0;
	$: smScreen = innerWidth < 768;
</script>

<Drawer {isOpen} on:clickAway={handleToggle} on:closeButton={handleToggle} />
<header class={headerClasses}>
	<nav
		class="flex items-center justify-between mx-auto backdrop-blur-md bg-opacity-80 max-w-[1312px] rounded px-4 transition-all duration-200 py-2 {isScrollClasses}"
	>
		<a href="/" class="flex items-center gap-4">
			<img src="../../src/lib/images/appstract_logo_black.png" alt="Appstract" class="w-full h-8" />
			<h2 class="text-3xl md:text-4xl font-bold text-[#292929]">Appstract</h2>
		</a>
		{#if smScreen}
			<a href="/" class="text-3xl text-[#292929]">
				<Icon icon="heroicons-outline:menu-alt-3" />
			</a>
		{:else}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<ul class="flex items-center gap-12 p-0 list-none">
				{#each navigation as { text, href }}
					<li>
						<a class="text-xs transition-all decoration-0 hover:underline" {href}>{text}</a>
					</li>
				{/each}
				<span class="divider"></span>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<span class="text-lg text-[#292929] hover:cursor-pointer" on:click={handleToggle}>
					<Icon icon="heroicons-outline:menu-alt-3" />
				</span>
			</ul>
		{/if}
	</nav>
</header>

<svelte:window bind:innerWidth bind:scrollY={y} />

<style>
	h2 {
		font-family: var(--font-bebas);
	}

	.divider {
		display: flex;
	}

	.divider::after {
		content: '';
		width: 2px;
		height: 1.2em;
		background-color: #474747;
	}
</style>
