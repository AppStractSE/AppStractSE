<script lang="ts">
	import Button from '../button/Button.svelte';
	import EmblaCarousel from '../swiper/services/EmblaServices.svelte';
</script>

<section>
	<div class="max-w-screen-lg px-4 mx-auto space-y-4 text-center xl:px-0">
		<h2>En komplett lösning för alla behov</h2>
		<p>
			Appstract erbjuder en rad olika tjänster som passar alla behov. Allt från skräddarsydd
			webbutveckling till grafisk design – vi levererar lösningar som tar ditt företag till nästa
			nivå.
		</p>
	</div>
	<EmblaCarousel />
	<div class="px-4 mx-auto space-y-4 xl:px-0 w-fit">
		<Button title="Se alla tjänster vi erbjuder" href="/tjanster" variation="primary" size="lg" />
	</div>
</section>

<style lang="scss">
	h2 {
		@apply text-3xl font-bold;
		font-family: var(--font-varela);
	}

	p {
		@apply text-base leading-normal text-balance;
		font-family: var(--font-esteban);
	}
	section {
		@apply my-24;
	}
</style>
