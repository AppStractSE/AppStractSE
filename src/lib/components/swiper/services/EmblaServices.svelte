<script lang="ts">
	import AutoScroll from 'embla-carousel-auto-scroll';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { services } from '$lib/data/services';
	import Card from '$lib/components/Card.svelte';

	$: innerWidth = 0;
	$: smScreen = innerWidth < 1024;
	let mobilePlugins: any[] = [];
	let desktopPlugins: any[] = [
		AutoScroll({ speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: true })
	];
	$: plugins = smScreen ? mobilePlugins : desktopPlugins;

	let emblaApi: any;
	let options: any = {
		loop: true,
		dragFree: false,
		breakpoints: {
			'(min-width: 1024px)': { dragFree: true }
		}
	};
	function onInit(event: CustomEvent) {
		emblaApi = event.detail;
		currentSlide = emblaApi.selectedScrollSnap();
		emblaApi.on('select', () => {
			currentSlide = emblaApi.selectedScrollSnap();
		});
	}
	const scrollTo = (index: number) => {
		currentSlide = index;
		if (emblaApi) emblaApi.scrollTo(currentSlide);
	};
	$: currentSlide = emblaApi && emblaApi.selectedScrollSnap();
</script>

<svelte:window bind:innerWidth />

<div class="embla" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
	<div class="embla__container">
		{#each services as service, index}
			<div class="embla__slide">
				<Card
					title={service.title}
					href={service.slug}
					description={service.description}
					image={service.image}
				/>
			</div>
		{/each}
	</div>
	{#if smScreen}
		<div class="embla__dots">
			{#each services as _, index}
				<div
					role="button"
					tabindex="0"
					class="embla__dot {index === currentSlide ? 'embla__dot-active' : ''}"
					on:keydown={() => scrollTo(index)}
					on:click={() => scrollTo(index)}
				/>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.embla {
		background: linear-gradient(
			180deg,
			rgba(243, 241, 255, 0) 0%,
			rgba(220, 214, 255, 1) 45%,
			rgba(220, 214, 255, 1) 55%,
			rgba(243, 241, 255, 0) 100%
		);
		@apply my-12 overflow-hidden;
	}
	.embla__container {
		@apply px-4 items-stretch gap-4 flex;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		height: unset;

		@media (min-width: 640px) {
			flex: 0 0 50%;
		}
		@media (min-width: 768px) {
			flex: 0 0 45%;
		}
		@media (min-width: 1024px) {
			flex: 0 0 30%;
		}
		@media (min-width: 1280px) {
			flex: 0 0 20%;
		}
		@media (min-width: 1536px) {
			flex: 0 0 17.5%;
		}
	}

	.embla__dots {
		@apply flex gap-2 mt-8 justify-center;
	}

	.embla__dot {
		@apply transition-all duration-300 ease-in-out w-3 h-3;
		border-radius: 10px !important;
		background: #6a789e !important;
	}

	.embla__dot-active {
		@apply w-10 rounded-full;
	}
</style>
