<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	onDestroy(() => {
		mounted = false;
	});
</script>

<div>
	<div
		class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-sunglow-100 transition-all duration-200 {mounted
			? 'opacity-100'
			: 'opacity-0'}"
	>
		<img src="/images/appstract_logo_black.png" class="w-32 h-auto animate-pulse" alt="Appstract" />
	</div>
</div>

<style lang="scss">
</style>
