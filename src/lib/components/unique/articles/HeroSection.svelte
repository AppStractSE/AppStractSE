<script lang="ts">
	export let title = '';
	export let description = '';
	export let image = '';
</script>

<section>
	<div class="spacer" />
	<div
		class="flex flex-col items-center max-w-screen-xl gap-8 px-4 mx-auto md:flex-row xl:px-0 md:gap-8 lg:gap-16"
	>
		<div class="space-y-4 md:basis-6/12 basis-full">
			<h2>{title}</h2>
			<p class="text-balance">{description}</p>
		</div>
		<div class="md:basis-6/12 basis-full">
			<img src={image} alt="" />
		</div>
	</div>
</section>

<style lang="scss">
	section {
		@apply py-12 md:py-24;
	}

	img {
		@apply w-full h-full max-w-full rounded-md;
	}
</style>
