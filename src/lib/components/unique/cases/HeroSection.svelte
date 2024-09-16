<script lang="ts">
	export let title = '';
	export let description = '';
	export let image = '/images/cases/maleri-viskan/hero.png';
</script>

<section>
	<div
		class="flex flex-col items-center max-w-screen-xl gap-4 px-4 mx-auto md:flex-row xl:px-0 md:gap-8 lg:gap-12"
	>
		<div class="space-y-4 md:basis-5/12 basis-full">
			<h2 class="text-4xl font-bold">{title}</h2>
			<p class="">{description}</p>
		</div>
		<div class="md:basis-7/12 basis-full">
			<img src={image} alt="" />
		</div>
	</div>
</section>

<style lang="scss">
	section {
		@apply py-12 md:py-24 border-b;
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
