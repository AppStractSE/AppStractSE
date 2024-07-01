<script lang="ts">
	import AutoScroll from 'embla-carousel-auto-scroll';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	export let data: any[] = [];

	$: innerWidth = 0;
	$: smScreen = innerWidth < 1024;
	let plugins: any[] = [
		AutoScroll({ speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: true })
	];

	let emblaApi: any;
	let options: any = {
		loop: true,
		dragFree: true
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
		{#each data as item, index}
			<div class="embla__slide">
				<div class="overflow-hidden rounded-md outline outline-1">
					<img
						src="https://placehold.co/768x768.png"
						alt={item.title}
						class="object-cover w-full h-full"
					/>
				</div>
				<p class="subtitle">{item.title}</p>
			</div>
		{/each}
	</div>
	{#if smScreen}
		<div class="embla__dots">
			{#each data as _, index}
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
		@apply overflow-hidden;
	}
	.embla__container {
		@apply px-4 items-stretch gap-4 flex;
	}

	.embla__slide {
		flex: 0 0 45%;
		min-width: 0;
		height: unset;
		@apply space-y-2 my-2;
		img {
			@apply transition-all duration-300 ease-in-out opacity-70;
		}
		&:hover {
			@apply underline;
			img {
				@apply scale-105 opacity-100;
			}
		}

		@media (min-width: 640px) {
			flex: 0 0 15%;
		}
		@media (min-width: 768px) {
			flex: 0 0 15%;
		}
		@media (min-width: 1024px) {
			flex: 0 0 15%;
		}
		@media (min-width: 1280px) {
			flex: 0 0 15%;
		}
		@media (min-width: 1536px) {
			flex: 0 0 12.5%;
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
	.subtitle {
		@apply text-xs font-light text-balance;
		font-family: var(--font-esteban);
	}
</style>
