<script lang="ts">
	import { cases } from '../../data/cases';
	import SwiperProjects from '../swiper/SwiperProjects.svelte';
</script>

<svelte:document />

<section>
	<div class="py-12 mx-auto space-y-8">
		<div class="max-w-screen-xl px-4 mx-auto space-y-4 xl:px-2">
			<h2>Kundprojekt</h2>
			<p>Få en inblick i hur vi jobbar med våra kunder. Från idé till färdig produkt.</p>
		</div>
		<SwiperProjects {cases} />
	</div>
</section>

<style lang="scss">
	h2 {
		@apply text-3xl font-bold;
		font-family: var(--font-varela);
	}

	p {
		@apply text-base leading-normal;
		font-family: var(--font-esteban);
	}
</style>
