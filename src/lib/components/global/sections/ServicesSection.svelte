<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import DefaultCard from '$lib/components/cards/DefaultCard.svelte';
	import SplideWrapper from '$lib/components/splide/SplideWrapper.svelte';
	import { services, type Service } from '$lib/data/services';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

	const options = {
		arrows: false,
		pagination: false,
		type: 'loop',
		drag: 'free',
		focus: 'center',
		perPage: 5,
		breakpoints: {
			430: { perPage: 1 },
			600: { perPage: 1.5 },
			768: { perPage: 2 },
			1280: { perPage: 3 },
			1536: { perPage: 5 }
		},
		autoScroll: {
			speed: 0.25,
			pauseOnFocus: false
		}
	};

	const extensions = { AutoScroll };
	const slides: Service[] = services;
</script>

<section>
	<div class="max-w-screen-lg px-4 mx-auto space-y-4 text-center xl:px-2">
		<h2>En komplett lösning för alla behov</h2>
		<p>
			Appstract erbjuder en rad olika tjänster som passar alla behov. Allt från skräddarsydd
			webbutveckling till grafisk design – vi levererar lösningar som tar ditt företag till nästa
			nivå.
		</p>
	</div>
	<div class="my-12 bg-gradient-to-b from-transparent via-blueberry-100 to-transparent">
		<SplideWrapper {options} {extensions} {slides}>
			<DefaultCard
				let:slide
				slot="slide"
				title={slide.title}
				href={slide.slug}
				description={slide.description}
				image={slide.image}
			/>
		</SplideWrapper>
	</div>
	<div class="px-4 mx-auto space-y-4 xl:px-2 w-fit">
		<Button title="Se alla tjänster vi erbjuder" href="/tjanster" variation="primary" size="lg" />
	</div>
</section>

<style lang="scss">
	p {
		@apply text-xl text-balance;
	}
	section {
		@apply my-12 lg:my-24;
	}
</style>
