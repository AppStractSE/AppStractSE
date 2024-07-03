<script lang="ts">
	import Fade from '$lib/components/drawer/bits/Fade.svelte';
	import CarouselBlock from '$lib/components/drawer/blocks/CarouselBlock.svelte';
	import ContactBlock from '$lib/components/drawer/blocks/ContactBlock.svelte';
	import DrawerBlocks from '$lib/components/drawer/blocks/DrawerBlocks.svelte';
	import GridBlock from '$lib/components/drawer/blocks/GridBlock.svelte';
	import ServicesBlock from '$lib/components/drawer/blocks/ServicesBlock.svelte';
	import SocialBlock from '$lib/components/drawer/blocks/SocialBlock.svelte';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	export let isOpen: boolean = false;

	const handleClickAway = () => {
		dispatch('clickAway');
		isOpen = false;
		console.log('drawer isOpen', isOpen);
	};

	const handleToggle = () => {
		dispatch('closeButton');
		isOpen = !isOpen;
		console.log('drawer isOpen', isOpen);
	};

	let mounted = false;
	function scrollLock(isOpen: boolean) {
		if (mounted) {
			const body: HTMLBodyElement | null = document.querySelector('body');
			if (body) body.style.overflow = isOpen ? 'hidden' : 'auto';
		}
	}
	$: scrollLock(isOpen);

	onMount(() => {
		mounted = true;
		scrollLock(isOpen);
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="fixed flex justify-center items-center inset-0 w-full h-full z-[99] overflow-hidden transform transition-transform {isOpen
		? 'visible'
		: 'invisible'}"
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="pt-16 md:pt-24 pb-6 md:pb-12 overflow-hidden ease-linear transition-all duration-500 backdrop-blur-sm delay-200 fixed h-full px-2 md:px-8 w-full {isOpen
			? 'w-screen opacity-100'
			: 'w-0 opacity-0'}"
	>
		<div class="overlay" on:click={handleClickAway} />
		<div
			class="relative flex items-center rounded overflow-scroll transition-all duration-1000 h-full transform mx-auto bg-sunglow-50 max-w-[1312px] {isOpen
				? 'opacity-100 translate-y-0'
				: 'opacity-100 translate-y-full'}"
		>
			<div class="absolute top-0 w-full">
				<Fade position="top" />
				<DrawerBlocks>
					<GridBlock />
					<ContactBlock />
					<ServicesBlock />
					<CarouselBlock />
					<SocialBlock />
				</DrawerBlocks>
				<Fade position="bottom" />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.overlay {
		background: radial-gradient(
			circle,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0) 40%,
			rgba(0, 0, 0, 0.5) 100%
		);
		@apply fixed w-screen h-full -mt-24 -ml-8 overflow-hidden ease-linear transition-all duration-500 delay-200;
		width: calc(100% + 32px);
		height: calc(100% + 64px);
	}
</style>
