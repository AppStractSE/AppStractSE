<script lang="ts">
	import CleanCard from '$lib/components/cards/CleanCard.svelte';
	import CarouselHeader from '$lib/components/drawer/bits/CarouselHeader.svelte';
	import SplideWrapper from '$lib/components/splide/SplideWrapper.svelte';
	import { articles } from '$lib/data/articles';
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
	const slides: any[] = articles;
</script>

<div class="space-y-8">
	<CarouselHeader title="Läs våra artiklar, gjorda för att inspirera och kickstarta" />
	<SplideWrapper {options} {extensions} {slides}>
		<CleanCard
			let:slide
			slot="slide"
			href={slide.slug}
			description={slide.title}
			image={slide.image}
		/>
	</SplideWrapper>
</div>
