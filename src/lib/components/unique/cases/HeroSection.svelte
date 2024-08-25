<script lang="ts">
	import EmblaCasesCarousel from '$lib/components/embla/EmblaCasesCarousel.svelte';
	import AutoScroll from 'embla-carousel-auto-scroll';
	export let title = '';
	export let description = '';
	export let image = '';
</script>

<section>
	<div class="spacer" />
	<div
		class="flex flex-col items-center max-w-screen-xl gap-4 px-4 mx-auto md:flex-row xl:px-0 md:gap-8 lg:gap-12"
	>
		<div class="space-y-4 md:basis-5/12 basis-full">
			<h2 class="text-4xl font-bold">{title}</h2>
			<p class="">{description}</p>
		</div>
		<div
			class="relative w-full py-4 overflow-hidden rounded-md bg-blueberry-600 md:basis-7/12 basis-full aspect-video"
		>
			<div class="space-y-4 w-[150%] -rotate-12 aspect-video absolute -top-8 -left-48">
				<EmblaCasesCarousel
					slides={[
						'/images/cases/maleri-viskan/printscreens/001.png',
						'/images/cases/maleri-viskan/printscreens/002.png',
						'/images/cases/maleri-viskan/printscreens/003.png',
						'/images/cases/maleri-viskan/printscreens/004.png',
						'/images/cases/maleri-viskan/printscreens/005.png'
					]}
					plugins={[
						AutoScroll({
							startDelay: 0,
							stopOnInteraction: false,
							speed: 0.25
						})
					]}
				/>
				<EmblaCasesCarousel
					slides={[
						'/images/cases/maleri-viskan/printscreens/002.png',
						'/images/cases/maleri-viskan/printscreens/005.png',
						'/images/cases/maleri-viskan/printscreens/004.png',
						'/images/cases/maleri-viskan/printscreens/006.png',
						'/images/cases/maleri-viskan/printscreens/003.png'
					]}
					plugins={[
						AutoScroll({
							startDelay: 0,
							stopOnInteraction: false,
							speed: 0.25,
							direction: 'backward'
						})
					]}
				/>
				<EmblaCasesCarousel
					slides={[
						'/images/cases/maleri-viskan/printscreens/007.png',
						'/images/cases/maleri-viskan/printscreens/006.png',
						'/images/cases/maleri-viskan/printscreens/005.png',
						'/images/cases/maleri-viskan/printscreens/004.png',
						'/images/cases/maleri-viskan/printscreens/003.png'
					]}
					plugins={[
						AutoScroll({
							startDelay: 150,
							stopOnInteraction: false,
							speed: 0.25
						})
					]}
				/>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.embla__slide {
		flex: 0 0 20%;
		min-width: fit-content;
		height: unset;
		@apply space-y-2 my-2;
	}
	section {
		@apply py-12 md:py-24 bg-blueberry-300;
	}

	img {
		@apply w-full h-full max-w-full rounded-md;
	}

	h2 {
		@apply text-3xl font-bold;
	}

	p {
		@apply md:text-lg text-base text-balance leading-normal;
	}
</style>
