<script lang="ts">
	export let image =
		'https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png';
	export let title = '';
	export let description = '';
	export let href = '';
	export let subTitle = '';
</script>

<a {href} data-sveltekit-prefetch class="group">
	<div class="overflow-hidden rounded-md aspect-[4/3]">
		<img src={image} alt={title} class="overflow-hidden" />
	</div>
	<div class="flex flex-col flex-1 gap-4 mt-4">
		{#if subTitle}
			<h6>{subTitle}</h6>
		{/if}
		{#if title}
			<h5 class="group-hover:underline underline-offset-4">{title}</h5>
		{/if}
		{#if description}
			<p>{description}</p>
		{/if}
	</div>
</a>

<style lang="scss">
	img {
		aspect-ratio: 4/3;
		height: 100%;
		overflow: hidden;
		@apply transition-all duration-200 object-cover opacity-70;
	}
	a {
		@apply flex flex-col overflow-hidden h-full;
		&:hover {
			img {
				@apply scale-105 opacity-100 rounded-md;
			}
		}
	}

	p {
		@apply flex-1 text-balance;
	}
</style>
