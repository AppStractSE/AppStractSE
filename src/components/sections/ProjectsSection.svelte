<script lang="ts">
	import SwiperProjects from '../swiper/SwiperProjects.svelte';
	import { projects } from '../swiper/projects';
</script>

<svelte:document />

<section>
	<div class="py-12 mx-auto space-y-8">
		<div class="max-w-screen-xl px-4 mx-auto space-y-4 xl:px-2">
			<h2>Kundprojekt</h2>
			<p>Få en inblick i hur vi jobbar med våra kunder. Från idé till färdig produkt.</p>
		</div>
		<SwiperProjects {projects} />
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
