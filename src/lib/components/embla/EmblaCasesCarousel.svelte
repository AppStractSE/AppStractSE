<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	export let rtl = false;
	export let plugins: any[];

	let options: any = {
		dragFree: true,
		direction: rtl ? 'rtl' : 'ltr',
		loop: true,
		playOnInit: true,
		pauseOnInteraction: false,
		delay: 3000,
		align: 'center'
	};

	export let slides = [
		'https://placehold.co/1920x1080.png',
		'https://placehold.co/1920x1080.png',
		'https://placehold.co/1920x1080.png',
		'https://placehold.co/1920x1080.png',
		'https://placehold.co/1920x1080.png'
	];
</script>

<div class="embla" dir={rtl ? 'rtl' : 'ltr'} use:emblaCarouselSvelte={{ options, plugins }}>
	<div class="embla__container">
		{#each slides as slide}
			<div class="embla__slide">
				<img src={slide} alt="" />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.embla {
		@apply overflow-hidden m-auto;
	}
	.embla__container {
		@apply flex;
	}
	.embla__slide {
		flex: 0 0 25%;
		min-width: 0;
		@apply rounded mr-4 overflow-hidden;
	}
</style>
