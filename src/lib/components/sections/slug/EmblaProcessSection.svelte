<script lang="ts">
	import EmblaProcessCarousel from '$lib/components/embla/EmblaProcessCarousel.svelte';

	export let service;
</script>

<section>
	<div class="max-w-screen-lg px-4 mx-auto mb-12 text-center xl:px-2">
		<h2>Vår process</h2>
	</div>
	<EmblaProcessCarousel data={service.what_we_do} />
</section>

<style lang="scss">
	h2 {
		@apply text-3xl font-bold;
		font-family: var(--font-varela);
	}
</style>
