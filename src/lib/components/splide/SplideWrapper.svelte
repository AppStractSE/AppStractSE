<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	export let options;
	export let extensions;
	export let slides: any[] = [];
</script>

<Splide hasTrack={false} {options} {extensions} aria-label="Svelte Splide Example">
	<SplideTrack>
		{#each slides as slide, index}
			<SplideSlide class="px-2 my-1">
				<slot name="slide" {slide} {index} />
			</SplideSlide>
		{/each}
	</SplideTrack>
</Splide>
