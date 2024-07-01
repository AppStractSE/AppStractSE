<script lang="ts">
	import Carousel from '$lib/components/drawer/bits/Carousel.svelte';
	import CarouselHeader from '$lib/components/drawer/bits/CarouselHeader.svelte';
	import { guides } from '$lib/data/guides';
</script>

<div class="space-y-8">
	<CarouselHeader title="Läs våra guider, gjorda för att inspirera och kickstarta" />
	<Carousel data={guides} />
</div>
