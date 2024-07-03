<script lang="ts">
	import AutoScroll from 'embla-carousel-auto-scroll';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	$: innerWidth = 0;
	let plugins: any[] = [
		AutoScroll({ speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: false })
	];

	let options: any = {
		loop: true,
		dragFree: true,
		align: 'center'
	};
</script>

<svelte:window bind:innerWidth />

<div class="embla" use:emblaCarouselSvelte={{ options, plugins }}>
	<div class="embla__container">
		<slot />
	</div>
	<div class="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-sunglow-100 to-transparent" />
	<div class="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-sunglow-100 to-transparent" />
</div>

<style lang="scss">
	.embla {
		@apply overflow-hidden relative;
	}
	.embla__container {
		@apply px-4 items-stretch gap-4 flex lg:justify-center;
	}
</style>
