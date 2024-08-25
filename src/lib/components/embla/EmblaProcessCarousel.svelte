<script lang="ts">
	import Icon from '@iconify/svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
	export let data;

	$: innerWidth = 0;
	$: smScreen = innerWidth < 1024;
	$: plugins = smScreen ? mobilePlugins : desktopPlugins;
	$: progress = 0;
	$: currentSlide = emblaApi && emblaApi.selectedScrollSnap();

	let mobilePlugins: any[] = [];
	let desktopPlugins: any[] = [WheelGesturesPlugin()];
	let emblaApi: any;
	let options: any = {
		loop: false,
		duration: 10,
		axis: 'y',
		dragFree: true
	};

	function onInit(event: CustomEvent) {
		emblaApi = event.detail;
		currentSlide = emblaApi.selectedScrollSnap();
		emblaApi
			.on('select', () => {
				currentSlide = emblaApi.selectedScrollSnap();
				progress = emblaApi.scrollProgress();
			})
			.on('scroll', applyProgress);
	}

	const handlePrev = () => {
		if (emblaApi) emblaApi.scrollPrev();
	};
	const handleNext = () => {
		if (emblaApi) emblaApi.scrollNext();
	};

	const applyProgress = (): void => {
		console.log('im in here');
		progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
	};
</script>

<svelte:window bind:innerWidth />
<div class="embla">
	<div class="mouse">
		<div class="mouse__container">
			<div class="mouse__dot"></div>
		</div>
	</div>
	<div class="embla__viewport" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
		<div class=" embla__container">
			{#each data as slide}
				<div class=" bg-gradient-to-b from-orange-200 to-pink-200 embla__slide">
					{slide.title}
				</div>
			{/each}
		</div>
	</div>
	<div class="embla__controls">
		<div class="embla__buttons">
			<button on:click={handlePrev} class={currentSlide !== 0 ? 'opacity-100' : 'opacity-50'}
				><Icon icon="icons8:chevron-up-round" /></button
			>
			<button
				on:click={handleNext}
				class={data.length - 1 !== currentSlide ? 'opacity-100' : 'opacity-50'}
				><Icon icon="icons8:chevron-down-round" /></button
			>
		</div>
		<div class="embla__progress">
			<div class="embla__progress__bar" style="transform: translateX({progress * 100}%);"></div>
		</div>
	</div>
</div>

<style lang="scss">
	.mouse {
		@apply absolute z-50 top-[50%] right-12 xl:right-8 transform translate-x-[50%] translate-y-[-50%];
	}
	.mouse__container {
		@apply w-6 h-12 border border-[#292929] rounded-3xl relative;
	}
	.mouse__dot {
		@apply absolute mx-auto bg-black rounded-full left-0 right-0 animate-pulse;
		top: 6px;
		height: 6px;
		width: 6px;
	}
	h2 {
		@apply text-3xl font-bold;
	}
	p {
		@apply text-base leading-normal text-balance;
	}
	.embla {
		@apply my-4 max-w-screen-xl mx-auto relative px-4 xl:px-2;
	}
	.embla__viewport {
		@apply overflow-hidden rounded-md;
	}
	.embla__container {
		height: 30rem;
		@apply items-stretch flex flex-col;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		@apply justify-center flex flex-col items-center min-h-full;
	}
	.embla__buttons {
		@apply flex items-center text-3xl;
	}
	.embla__controls {
		@apply my-4 flex items-center justify-between;
	}

	.embla__progress {
		@apply relative overflow-hidden w-60;
		background: #6a789e;
		border-radius: 10px;
		height: 13px;
	}
	.embla__progress__bar {
		@apply top-0 left-0 bottom-0 absolute w-full bg-blueberry-100;
	}
</style>
