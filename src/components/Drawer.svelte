<script lang="ts">
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

<aside>
	<div
		class="fixed flex justify-center items-center inset-0 w-full h-full z-[99] overflow-hidden transform transition-transform {isOpen
			? 'visible'
			: 'invisible'}"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- <div
			class="w-screen h-full absolute bg-black duration-500 transition-all overflow-hidden {isOpen
				? 'opacity-25'
				: 'opacity-0'}"
			on:click={handleClickAway}
		/> -->
		<div
			class="absolute h-full shadow-xl backdrop-blur-md bg-opacity-80 overflow-y-auto text-white bg-[#697ba8] transition-all duration-500 delay-200 ease-linear px-4 py-4 md:px-8 transform w-full {isOpen
				? 'w-screen opacity-100'
				: 'w-0 opacity-0'}"
		>
			<div class="flex items-center h-full transform mx-auto max-w-[1312px]">
				<div
					class="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full transition-all duration-1000 {isOpen
						? 'opacity-100 translate-x-0'
						: 'opacity-0 -translate-x-full'}"
				>
					<a href="/tjanster"><h2>Tjänster</h2> </a>

					<a href="/karriar"><h2>Karriär</h2> </a>

					<a href="/kontakt"><h2>Kontakt</h2> </a>

					<a href="/om-oss"><h2>Om oss</h2> </a>

					<a href="/blogg"><h2>Blogg</h2> </a>
				</div>
			</div>
			<slot />
		</div>
	</div>
</aside>

<style>
	h2 {
		@apply text-3xl font-bold hover:underline hover:underline-offset-4;
		font-family: var(--font-varela);
	}
</style>
