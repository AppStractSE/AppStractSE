<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();
	export let isOpen: boolean = false;

	const handleClickAway = () => {
		dispatch('clickAway');
		isOpen = !isOpen;
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
		class="fixed inset-0 w-full h-full z-[9999999] overflow-hidden transform transition-transform {isOpen
			? 'visible'
			: 'invisible'}"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="w-screen h-full bg-black duration-500 delay-200 transition-all overflow-hidden {isOpen
				? 'opacity-25'
				: 'opacity-0'}"
			on:click={handleClickAway}
		/>
		<div
			class="absolute right-0 top-0 shadow-xl overflow-y-auto bg-white transition-all duration-500 ease-in-out h-full max-w-md px-4 py-4 md:px-8 transform w-full {isOpen
				? 'w-screen opacity-100 translate-x-0'
				: 'w-0 opacity-0 translate-x-full'}"
		>
			<div class="flex items-center justify-between">
				<a href="/">
					<h2 class="text-3xl md:text-3xl font-bold text-[#292929]">Appstract</h2>
				</a>

				<button on:click={handleToggle}>
					<Icon
						icon="material-symbols-light:close-small-outline"
						class="text-5xl hover:cursor-pointer"
					/>
				</button>
			</div>
			<slot />
		</div>
	</div>
</aside>

<style>
	h2 {
		font-family: var(--font-bebas);
	}
</style>
